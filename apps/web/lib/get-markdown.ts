import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { convertMarkdownToHtml } from './remark';

const MARKDOWN_DIR = path.join(process.cwd(), '/markdown');

interface MarkdownFrontMatter {
  id: string;
  title: string;
  date: Date;
}

interface MarkdownNode {
  name: string;
  filePath: string;
  frontMatter: MarkdownFrontMatter;
  children?: MarkdownNode[];
}

function readDirectoryTree(dirPath: string): MarkdownNode {
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) {
    throw new Error(`${dirPath} is not a directory.`);
  }

  const dirName = path.basename(dirPath);
  const filePath = dirPath + '/index.md';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  const node: MarkdownNode = {
    name: dirName,
    filePath,
    frontMatter: matterResult.data as MarkdownFrontMatter,
    children: [],
  };

  const fileNames = fs.readdirSync(dirPath);
  fileNames.forEach(fileName => {
    const fileOrDirPath = path.join(dirPath, fileName);
    const isDirectory = fs.statSync(fileOrDirPath).isDirectory();

    if (isDirectory) {
      const childNode = readDirectoryTree(fileOrDirPath);
      node.children?.push(childNode);
    } else {
      const fileContents = fs.readFileSync(fileOrDirPath, 'utf8');
      const matterResult = matter(fileContents);

      const fileNode = {
        name: fileName,
        filePath: fileOrDirPath,
        frontMatter: matterResult.data as MarkdownFrontMatter,
      };
      node.children?.push(fileNode);
    }
  });

  return node;
}

function readDirectory(dirPath: string): MarkdownNode[] {
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) {
    throw new Error(`${dirPath} is not a directory.`);
  }

  const fileNames = fs.readdirSync(dirPath);
  const nodes: MarkdownNode[] = [];

  fileNames.forEach(fileName => {
    const fileOrDirPath = path.join(dirPath, fileName);
    const isDirectory = fs.statSync(fileOrDirPath).isDirectory();

    if (isDirectory) {
      const childNodes = readDirectory(fileOrDirPath);
      nodes.push(...childNodes);
    } else {
      const filePath = fileOrDirPath;
      const matterResult = matter.read(filePath);

      const node: MarkdownNode = {
        name: fileName,
        filePath,
        frontMatter: matterResult.data as MarkdownFrontMatter,
      };

      nodes.push(node);
    }
  });

  return nodes;
}

export function getMarkdownTree() {
  return readDirectoryTree(MARKDOWN_DIR);
}

export function getAllMarkdowns() {
  return readDirectory(MARKDOWN_DIR);
}

export async function getMarkdown(id: string) {
  const markdown = getAllMarkdowns().find(markdown => markdown.frontMatter.id === id);
  if (!markdown) {
    throw new Error(`해당 ${id}를 찾을 수 없습니다.`);
  }

  const fileContents = fs.readFileSync(markdown.filePath, 'utf8');
  const { html, data } = convertMarkdownToHtml(fileContents);

  return { html, frontMatter: data };
}

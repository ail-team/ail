import matter from 'gray-matter';
import markdownHtml from 'remark-html';
import markdownParse from 'remark-parse';
import { unified } from 'unified';

export function convertMarkdownToAST(markdown: string) {
  const { data, content } = matter(markdown);
  const markdownAST = unified().use(markdownParse).parse(content);

  return { markdownAST, data };
}

export function convertMarkdownToHtml(markdown: string) {
  const { markdownAST, data } = convertMarkdownToAST(markdown);
  const html = unified().use(markdownHtml).stringify(markdownAST);

  return { html, data };
}

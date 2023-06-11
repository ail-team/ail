import { NextResponse } from 'next/server';
import { getMarkdownTree } from '@/lib/get-markdown';

export async function GET() {
  const posts = getMarkdownTree();

  return NextResponse.json({ data: posts });
}

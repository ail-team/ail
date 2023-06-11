import { NextResponse } from 'next/server';
import { getMarkdown } from '@/lib/get-markdown';

type GetOption = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: GetOption) {
  const { id } = params;
  const post = await getMarkdown(id);

  return NextResponse.json({ data: post });
}

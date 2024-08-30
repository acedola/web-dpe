import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const parsedId = id !== null ? parseInt(id, 10) : null;

  const query = `SELECT * FROM obtener_subcategorias('${parsedId}')`;
  const result = await prisma.$queryRaw`${Prisma.raw(query)}`;
  console.log(result);
  return NextResponse.json(result);
}

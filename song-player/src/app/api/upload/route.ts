import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma.ts'
import { writeFile } from 'fs/promises'
import path from 'path'
import { mkdir } from 'fs'

export async function POST(req: NextRequest) {
  const data = await req.formData()
  const file = data.get('file') as File
  const title = data.get('title') as string

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const uploadDir = path.join(process.cwd(), 'public/uploads')

  mkdir(uploadDir, { recursive: true }, async (err) => {
    if (err) console.error(err)
  })

  const filePath = `/uploads/${Date.now()}-${file.name}`
  const fullPath = path.join(process.cwd(), 'public', filePath)

  await writeFile(fullPath, buffer)

  await prisma.song.create({
    data: {
      title,
      filePath
    }
  })

  return NextResponse.json({ success: true })
}

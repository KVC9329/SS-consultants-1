import { prisma } from '@/lib/prisma'

export default async function SongsPage() {
  const songs = await prisma.song.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Song Player</h1>
      {songs.map((song) => (
        <div key={song.id} className="my-4">
          <p>{song.title}</p>
          <audio controls src={song.filePath} className="w-full" />
        </div>
      ))}
    </div>
  )
}

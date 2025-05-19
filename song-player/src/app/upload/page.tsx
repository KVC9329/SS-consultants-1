'use client'

import { useState } from 'react'

export default function UploadPage() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    if (file) formData.append('file', file)
    formData.append('title', title)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (res.ok) alert('Uploaded!')
  }

  return (
    <form onSubmit={handleUpload} className="p-4">
      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        required
      />
      <button type="submit">Upload</button>
    </form>
  )
}



export default function Home() {
  return (
    <>
      <main className="pt-20 px-4 md:px-6 ml-12">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          This is a demo of a navbar that shows icons by default and expands to show text on hover.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h2 className="font-medium mb-2">Card {i + 1}</h2>
              <p className="text-sm text-muted-foreground">This is a sample card in the main content area.</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

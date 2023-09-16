import DigimonsPage from "./(components)/digimons/Digimons";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto justify-between p-24">
      <h1 className="text-6xl font-bold mb-11">Digimons</h1>
      <DigimonsPage />
    </main>
  )
}

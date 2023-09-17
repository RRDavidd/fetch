import Link from "next/link"

export default async function DigimonsPage() {
  const data = await fetch('https://www.digi-api.com/api/v1/digimon?')
  const res = await data.json()
  const digimons = res.content



  return (
    <main className="min-h-screen max-w-screen-xl mx-auto justify-between p-24">
        <div className="grid grid-cols-3 gap-8 transition-all">
          {digimons.map((digimon: any) => (
            <div className="hover:scale-110 duration-200" key={digimon.name}>
              <h4 className="text-xl font-bold">{digimon.name}</h4>
              <img className="w-full mt-3 max-h-80" src={digimon.image} alt={digimon.name} />
            </div>
          ))}
        </div>
        <button className="mt-8">
          <Link href="/digimons/1">Next</Link>
        </button>
    </main>
  )
}
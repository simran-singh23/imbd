import { useState } from "react"

const features = [
  "Professional profile page",
  "Industry contact details",
  "Casting and project tools",
  "Movie and series performance data",
]

function IMDbPro() {
  const [selectedPlan, setSelectedPlan] = useState("Monthly")

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl">
          <p className="font-bold uppercase tracking-[0.35em] text-yellow-400">
            IMDbPro
          </p>
          <h1 className="mt-4 text-5xl font-black">Build your entertainment career</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Simple professional tools for actors, filmmakers, producers, and industry teams.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Monthly", "Yearly"].map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`rounded-full px-6 py-3 font-bold ${
                  selectedPlan === plan
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl bg-white p-6 text-gray-900 shadow">
            <h2 className="text-3xl font-bold">What you get</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-lg border border-gray-200 p-4">
                  <p className="font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-xl bg-yellow-400 p-6 text-black shadow">
            <h2 className="text-3xl font-black">{selectedPlan} plan</h2>
            <p className="mt-3 text-lg font-semibold">
              {selectedPlan === "Monthly" ? "$19.99 / month" : "$149.99 / year"}
            </p>
            <button className="mt-6 w-full rounded bg-black px-5 py-3 font-bold text-white hover:bg-zinc-800">
              Start free trial
            </button>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default IMDbPro

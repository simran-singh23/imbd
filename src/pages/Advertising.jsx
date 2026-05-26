import { useState } from "react"

const adOptions = ["Movie campaign", "Series promotion", "Brand sponsorship"]

function Advertising() {
  const [selected, setSelected] = useState(adOptions[0])
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px]">

        <div className="rounded-2xl bg-black p-8 text-white">
  <p className="font-bold uppercase tracking-[0.35em] text-yellow-400">

            Advertising
          </p>
          <h1 className="mt-4 text-5xl font-black">Advertise with IMDb</h1>
 <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Promote movies, shows, trailers, and brands to entertainment fans.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {adOptions.map((option) => (
              <button key={option} onClick={() => setSelected(option)}
                
              className={`rounded-lg p-4 text-left font-bold ${
                  selected === option

                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <form className="rounded-2xl bg-white p-6 shadow" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-gray-900">Request details</h2>
          <p className="mt-2 text-gray-600">Selected: {selected}</p>

          {sent && (
            <p className="mt-4 rounded-lg bg-green-100 p-3 font-semibold text-green-700">
              Request sent successfully.
            </p>
          )}

          <input required
            placeholder="Your name"
            className="mt-5 w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />
          <input required
            type="email" placeholder="Email address"
            className="mt-4 w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />
          <textarea required rows="4"
            placeholder="Tell us about your campaign"
            className="mt-4 w-full resize-none rounded border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500"
          />
          <button className="mt-5 w-full rounded bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300">
            Submit request
          </button>
        </form>
      </section>
    </main>
  )
}

export default Advertising

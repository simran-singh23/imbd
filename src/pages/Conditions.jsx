const conditions = [
  "Use the site only for personal and educational practice.",
  "Do not upload harmful, illegal, or misleading content.",
  "Respect movie data, images, and other people's work.",
  "Accounts can be limited if the rules are not followed.",
]

function Conditions() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-4xl font-bold text-gray-900">Conditions of Use</h1>
        <p className="mt-4 text-lg text-gray-600">
          These are simple practice terms for this IMDb-style project.
        </p>

        <div className="mt-8 space-y-4">
          {conditions.map((item, index) => (
            <div key={item} className="rounded-lg border border-gray-200 p-4">
              <h2 className="text-xl font-bold text-gray-900">Rule {index + 1}</h2>
              <p className="mt-2 text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Conditions

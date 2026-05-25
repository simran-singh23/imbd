import { useMemo, useState } from "react"

const helpTopics = [
  {
    title: "Account and sign in",
    text: "Fix login problems, update email, reset password, and manage your profile.",
  },
  {
    title: "Ratings and watchlist",
    text: "Learn how to rate titles, create lists, and keep track of what you want to watch.",
  },
  {
    title: "IMDb data",
    text: "Find help for movie pages, cast details, release dates, credits, and corrections.",
  },
  {
    title: "IMDbPro",
    text: "Get support for professional tools, membership, billing, and industry pages.",
  },
]

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to the sign in page, choose forgot password, and enter your email. A reset link will be sent to you.",
  },
  {
    question: "How can I add a movie to my watchlist?",
    answer:
      "Open any movie or series page and click the plus button. It will be saved to your watchlist.",
  },
  {
    question: "How do I update incorrect title information?",
    answer:
      "Open the title page, scroll to edit details, and submit the correct information for review.",
  },
  {
    question: "Why is my review not showing yet?",
    answer:
      "Reviews can take some time to appear because they may be checked before publishing.",
  },
]

function Help() {
  const [search, setSearch] = useState("")
  const [openFaq, setOpenFaq] = useState(null)
  const [messageSent, setMessageSent] = useState(false)

  const filteredTopics = useMemo(() => {
    const value = search.toLowerCase().trim()

    if (!value) {
      return helpTopics
    }

    return helpTopics.filter(
      (topic) =>

        topic.title.toLowerCase().includes(value) ||
        topic.text.toLowerCase().includes(value),
    )
  }, [search])

  const filteredFaqs = useMemo(() => {
    const value = search.toLowerCase().trim()

    if (!value) {
      return faqs
    }

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(value) ||
        faq.answer.toLowerCase().includes(value),
    )
  }, [search])

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessageSent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-zinc-100">
      <section className="bg-zinc-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            IMDb Help Center
          </p>
          <h1 className="mt-4 text-5xl font-black">How can we help?</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Search help articles, browse common topics, or contact support for account and IMDb questions.
          </p>

          <form
            className="mt-8 flex max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search IMDb help"
              className="min-w-0 flex-1 px-5 py-4 text-lg text-zinc-900 outline-none"
            />
            <button type="submit"
              className="bg-yellow-400 px-8 font-bold text-black hover:bg-yellow-300"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-zinc-950">Popular help topics</h2>
          {search && (
            <button
              className="font-semibold text-blue-600 hover:underline"
              onClick={() => setSearch("")}
            >
              Clear search
            </button>
          )}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filteredTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-zinc-950">{topic.title}</h3>
              <p className="mt-3 text-zinc-600">{topic.text}</p>
            </article>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <p className="mt-6 rounded-xl bg-white p-6 text-zinc-600 shadow-sm">
            No help topics found for "{search}".
          </p>
        )}
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-14 lg:grid-cols-[1fr_380px]">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
          <h2 className="text-3xl font-bold text-zinc-950">Frequently asked questions</h2>

          <div className="mt-6 divide-y divide-zinc-200">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.question

              return (
                <div key={faq.question}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-zinc-800 hover:text-blue-600"
                    onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                  >
                    {faq.question}
                    <span className="text-2xl text-zinc-400">{isOpen ? "-" : "+"}</span>
                  </button>

                  {isOpen && (
                    <p className="pb-5 text-zinc-600">{faq.answer}</p>
                  )}
                </div>
              )
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="mt-6 text-zinc-600">No FAQs found for "{search}".</p>
          )}
        </div>

        <aside className="rounded-xl bg-zinc-950 p-6 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Need more help?</h2>
          <p className="mt-4 text-zinc-300">
            If you cannot find what you need, send a message and the support team will help you out.
          </p>

          {messageSent && (
            <p className="mt-5 rounded-lg bg-green-500/15 p-3 font-semibold text-green-300">
              Message sent. Support will contact you soon.
            </p>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input required type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
            <textarea
              required
              placeholder="Write your message"
              rows="4"
              className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
            <button className="w-full rounded-lg bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300">
              Contact support
            </button>
          </form>
        </aside>
      </section>
    </main>
  )
}

export default Help

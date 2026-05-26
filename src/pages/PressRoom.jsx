const pressNews = [
  {
    title: "IMDb announces new watchlist features",
    date: "May 2026",
    text: "Users can organize favorites and discover more titles faster.",
  },
  {
    title: "IMDbPro expands tools for creators",
    date: "April 2026",
    text: "New profile and discovery features are now available.",
  },
  {
    title: "Box office tracking gets cleaner reports",
    date: "March 2026",
    text: "Simple charts make movie performance easier to understand.",
  },
]

function PressRoom() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-black p-8 text-white">
          <h1 className="text-5xl font-black">Press Room</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            News, media updates, and company announcements.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pressNews.map((news) => (
            <article key={news.title} className="rounded-xl bg-white p-6 shadow">
              <p className="font-bold text-yellow-600">{news.date}</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">{news.title}</h2>
              <p className="mt-3 text-gray-600">{news.text}</p>
              <button className="mt-5 font-bold text-blue-600 hover:underline">
                Read more
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PressRoom

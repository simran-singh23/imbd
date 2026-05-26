import { Link } from "react-router-dom"

const sections = [
  {
    title: "Movies and TV",
    links: [
      { name: "Top Movies", path: "/movies" },
      { name: "Series", path: "/series" },
      { name: "Watchlist", path: "/watchlist" },
      { name: "Box Office Mojo", path: "/box-office-mojo" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Help", path: "/help" },
      { name: "IMDbPro", path: "/imdbpro" },
      { name: "Press Room", path: "/press-room" },
      { name: "Jobs", path: "/jobs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Advertising", path: "/advertising" },
      { name: "Conditions of Use", path: "/conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
]

function SiteIndex() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">Site Index</h1>
        <p className="mt-3 text-lg text-gray-600">
          All important pages in one simple place.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>

              <div className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block rounded border border-gray-200 px-4 py-3 font-semibold text-blue-600 hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SiteIndex

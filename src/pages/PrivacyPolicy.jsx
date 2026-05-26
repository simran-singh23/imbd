const privacyItems = [
  {
    title: "Information you enter",
    text: "Forms on this project only show a success message and do not send real data anywhere.",
  },
  {
    title: "Search and filters",
    text: "Search boxes filter content on your screen only.",
  },
  {
    title: "Images",
    text: "Some demo images load from public URLs to make pages look complete.",
  },
]

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple privacy page for this practice website.
        </p>

        <div className="mt-8 space-y-5">
          {privacyItems.map((item) => (
            <article key={item.title} className="rounded-lg bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy

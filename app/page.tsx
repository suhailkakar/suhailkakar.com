import HandwrittenName from "./components/handwritten-name";

const articles = [
  { url: "https://x.com/SuhailKakar/status/2005610738149433683", title: "vibe coding: a practical guide for literally everyone" },
  { url: "https://x.com/SuhailKakar/status/1994409261682839835", title: "how hyperliquid beat everyone by ignoring the rules" },
  { url: "https://x.com/SuhailKakar/status/1957708281423729055", title: "you are not dumb, crypto is hard" },
  { url: "https://x.com/SuhailKakar/status/1948019003810849077", title: "crypto's killer app won't be social or finance. it'll be invisible" },
  { url: "https://x.com/SuhailKakar/status/1937138494088040812", title: "ai agents will become crypto billionaires faster than any human ever could" },
  { url: "https://x.com/SuhailKakar/status/1934613020686369204", title: "crypto doesn't need more apps. it desperately needs developers" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col  justify-between max-w-6xl mx-auto px-6 py-12">
      <header className="md:mt-40">
        <HandwrittenName />
        <p className="text-[var(--muted)] text-md leading-relaxed max-w-lg">
          i&apos;m a software engineer and writer. i&apos;ve spent the last few years
          building products in crypto, mostly focused on developer tools and
          infrastructure.
        </p>
        <p className="text-[var(--muted)] text-md leading-relaxed max-w-lg mt-4">
          before crypto, i worked across web and mobile, shipping apps used by
          millions of people. i care deeply about making complex technology
          accessible. when i&apos;m not coding, i write about what i&apos;m learning
          and building.
        </p>
      </header>
      <footer>
        <nav>
          <p className="text-[var(--muted)] text-md italic mb-3">favorite writings:</p>
          <ul className="space-y-1">
            {articles.map((article) => (
              <li key={article.url}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-6 text-[var(--muted)] mt-6 justify-end">
          <a
            href="https://twitter.com/SuhailKakar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            twitter
          </a>
          <a
            href="https://github.com/SuhailKakar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            github
          </a>
          <a
            href="mailto:hi@suhailkakar.com"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            email
          </a>
        </div>
      </footer>
    </main>
  );
}

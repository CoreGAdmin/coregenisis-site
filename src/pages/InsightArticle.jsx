import { Link, useParams } from "react-router-dom";
import { ARTICLES } from "../data/articles.js";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import BrandReferences from "../components/BrandReferences.jsx";
import NotFound from "./NotFound.jsx";

export default function InsightArticle() {
  const { slug } = useParams();
  const article = ARTICLES.find(item => item.slug === slug);
  if (!article) return <NotFound />;
  return <div className="font-sans text-navy bg-white">
    <PageNav />
    <main>
      <article>
        <header className="bg-navy px-5 sm:px-8 pt-14 pb-16">
          <div className="max-w-[800px] mx-auto">
            <Link to="/insights/thought-leadership" className="text-ice underline underline-offset-4 text-sm">← All thought leadership</Link>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-gold mt-10 mb-5">{article.category}</p>
            <h1 className="font-display text-[clamp(34px,5vw,54px)] leading-[1.15] font-medium text-white mb-6">{article.title}</h1>
            <p className="text-ice text-sm">{article.author} · <time dateTime={article.date}>{article.displayDate}</time> · {article.readMinutes} min read</p>
          </div>
        </header>
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-xl leading-relaxed text-navy mb-12">{article.intro}</p>
          {article.sections.map(section => <section key={section.heading} className="mb-10">
            <h2 className="font-display text-[28px] leading-tight font-medium mb-5">{section.heading}</h2>
            {section.paragraphs.map((paragraph,index) => <p key={index} className="text-[17px] leading-[1.85] text-slate mb-5"><BrandReferences>{paragraph}</BrandReferences></p>)}
            {section.source && <p className="text-sm leading-relaxed text-slate">Source: <a href={section.source.url} className="underline underline-offset-4 hover:text-navy">{section.source.label}</a>.</p>}
          </section>)}
          <aside className="border-l-2 border-gold bg-mist p-6 text-sm text-slate leading-relaxed">
            CoreG perspective: these articles discuss operating principles and intended approaches. They do not certify platform controls or any transaction, and are not investment, legal or tax advice. See our <Link to="/platform" className="underline">Platform overview</Link> and <Link to="/financial-transaction-disclaimer" className="underline">Financial & Transaction Disclaimer</Link>.
          </aside>
        </div>
      </article>
      <nav aria-label="More perspectives" className="bg-mist px-5 sm:px-8 py-14">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="font-display text-2xl mb-6">Continue reading</h2>
          <div className="grid md:grid-cols-2 gap-6">{ARTICLES.filter(item=>item.slug!==slug).map(item=><Link key={item.slug} to={"/insights/"+item.slug} className="border border-[#DCE3EC] bg-white p-6 hover:border-gold"><span className="text-xs uppercase text-slate">{item.category}</span><span className="block font-display text-2xl mt-3">{item.title} →</span></Link>)}</div>
        </div>
      </nav>
    </main>
    <PageFooter />
  </div>;
}

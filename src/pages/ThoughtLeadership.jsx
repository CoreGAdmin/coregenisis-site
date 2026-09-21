import { Link } from "react-router-dom";
import { ARTICLES } from "../data/articles.js";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

export default function ThoughtLeadership() {
  return <div className="font-sans text-navy bg-white">
    <PageNav />
    <main>
      <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
        <div className="max-w-[780px] mx-auto">
          <Link to="/insights" className="inline-block text-ice text-sm underline underline-offset-4 mb-8">← All insights</Link>
          <p className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Thought Leadership</p>
          <h1 className="font-display text-[clamp(34px,5vw,54px)] font-medium leading-[1.1] text-white mb-6">Confidence begins with better questions.</h1>
          <p className="text-lg text-ice/85 max-w-[650px] mx-auto leading-relaxed">Perspectives on transaction diligence, accountable execution, and the foundations of institutional trust.</p>
        </div>
      </section>
      <section aria-labelledby="perspectives-heading" className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1080px] mx-auto">
          <h2 id="perspectives-heading" className="font-display text-3xl mb-9">Thought leadership</h2>
          <div className="grid gap-6 md:grid-cols-3">{ARTICLES.map(article=><article key={article.slug} className="border border-[#DCE3EC] p-7 flex flex-col">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate mb-6">{article.category}</p>
            <h3 className="font-display text-[28px] leading-tight mb-5"><Link className="hover:underline underline-offset-4" to={"/insights/"+article.slug}>{article.title}</Link></h3>
            <p className="text-[15px] leading-[1.75] text-slate mb-6 flex-1">{article.description}</p>
            <p className="text-xs text-slate mb-5"><time dateTime={article.date}>{article.displayDate}</time> · {article.readMinutes} min read</p>
            <Link to={"/insights/"+article.slug} aria-label={"Read: "+article.title} className="text-sm font-semibold underline underline-offset-4">Read perspective →</Link>
          </article>)}</div>
          <div className="mt-12 p-8 bg-mist border border-[#DCE3EC] sm:flex justify-between items-center gap-8">
            <div><h2 className="font-display text-2xl mb-3">Questions about CoreG?</h2><p className="text-slate leading-relaxed">Explore participant roles, our process and the scope of our services.</p></div>
            <Link to="/insights/faq" className="inline-block mt-5 sm:mt-0 font-semibold underline underline-offset-4 whitespace-nowrap">Read the FAQ →</Link>
          </div>
        </div>
      </section>
    </main>
    <PageFooter />
  </div>;
}

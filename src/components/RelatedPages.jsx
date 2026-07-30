import { Link } from "react-router-dom";

export default function RelatedPages({ eyebrow = "Continue", title, pages }) {
  return (
    <section className="bg-mist px-5 sm:px-8 py-16 border-t border-[#E2E8F0]">
      <div className="max-w-[1080px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">{eyebrow}</div>
        <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-navy mb-9">{title}</h2>
        <div className="grid border-l border-t border-[#DCE3EC] md:grid-cols-3">
          {pages.map((page) => (
            <Link key={page.path} to={page.path} className="group bg-white border-r border-b border-[#DCE3EC] p-7 min-h-[210px] flex flex-col hover:bg-mist transition-colors">
              <h3 className="font-display text-2xl font-medium text-navy mb-3">{page.title}</h3>
              <p className="text-[14px] text-slate leading-[1.75] mb-7 flex-1">{page.body}</p>
              <span className="text-sm font-semibold text-navy">{page.action} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLocation } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { LEGAL_PAGES } from "../data/legalContent.js";
export default function LegalNotice(){
 const [title,sections]=LEGAL_PAGES[useLocation().pathname.slice(1)];
 return <div className="font-sans text-navy bg-white"><PageNav/><main>
 <section className="bg-navy px-5 sm:px-8 pt-16 pb-12"><div className="max-w-[760px] mx-auto"><p className="text-gold text-sm mb-3">Legal &amp; Transparency</p><h1 className="font-display text-3xl text-white mb-3">{title}</h1><p className="text-ice text-sm">Effective date: September 21, 2026</p></div></section>
 <div className="max-w-[824px] mx-auto px-5 sm:px-8 py-14 space-y-9">{sections.map(([heading,body])=><section key={heading}><h2 className="text-xl font-semibold mb-3">{heading}</h2><p className="text-slate leading-relaxed">{body}</p></section>)}<p><a className="underline" href="mailto:info@coregenisis.com">Contact CoreG</a></p></div>
 </main><PageFooter/></div>;
}

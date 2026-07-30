import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT = {
  title: "CoreG — Governed Private Capital Markets",
  description: "CoreG facilitates qualifying private capital transactions through a disciplined, stage-gated operating standard built for verification, accountability, and institutional confidence.",
};

const ROUTE_META = {
  "/": DEFAULT,
  "/who-we-are": { title: "Who We Are | CoreG", description: "Understand CoreG's role and institutional responsibility as an authorized private capital markets intermediary." },
  "/how-we-work": { title: "How We Work | CoreG", description: "Explore CoreG's eight-stage governed transaction process from intake through completion." },
  "/platform": { title: "Platform | CoreG", description: "See how CoreG's governed operating environment supports verification, documentation, oversight, and an auditable transaction record." },
  "/leadership": { title: "Leadership | CoreG", description: "Meet Todd Morgan, Chief Executive Officer of CoreG." },
  "/about": { title: "About | CoreG", description: "Learn CoreG's mission, vision, institutional purpose, and relationship with CoreIdentity Technologies." },
  "/insights": { title: "Insights | CoreG", description: "CoreG thought leadership, announcements, platform updates, and institutional perspectives." },
  "/insights/faq": { title: "Frequently Asked Questions | CoreG", description: "Answers about CoreG, private capital markets, participant roles, verification, and transaction governance." },
  "/contact": { title: "Contact | CoreG", description: "Contact CoreG regarding a qualifying transaction, institutional relationship, platform question, or general inquiry." },
  "/privacy-policy": { title: "Privacy Policy | CoreG", description: "CoreG privacy policy." },
  "/terms-of-service": { title: "Terms of Service | CoreG", description: "CoreG terms of service." },
};

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
}

export default function SiteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = ROUTE_META[pathname] ?? {
      title: "Page Not Found | CoreG",
      description: "The requested CoreG page could not be found.",
    };
    const canonicalUrl = `${window.location.origin}${pathname === "/" ? "/" : pathname}`;

    document.title = metadata.title;
    upsertMeta('meta[name="description"]', { name: "description", content: metadata.description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: metadata.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: metadata.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: `${window.location.origin}/coreg-og.png` });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: metadata.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: metadata.description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

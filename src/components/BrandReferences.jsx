const DESTINATIONS = {
  "CoreIdentity Technologies": "https://coreidentitygroup.com/",
  "Trust Infrastructure": "https://coreidentitygroup.com/trust-infrastructure",
};

export default function BrandReferences({ children }) {
  return String(children).split(/(CoreIdentity Technologies|Trust Infrastructure)/g).map((part, index) =>
    DESTINATIONS[part] ? <a key={index} href={DESTINATIONS[part]} className="underline underline-offset-4 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{part}</a> : part
  );
}

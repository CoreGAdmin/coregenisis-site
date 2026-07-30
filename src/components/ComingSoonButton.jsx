import { useState, useRef, useCallback } from "react";

// Shared placeholder-CTA behavior for buttons whose real destination isn't
// live yet (Client Login -> app.coregenisis.com pending relaunch; Request
// Access -> intake landing page, currently decommissioned). Renders as a
// normal, fully-styled button — not grayed out, not visually "broken" — but
// clicking it shows a brief toast instead of silently doing nothing. Honest
// about its own state without requiring a real backend yet.
//
// Usage: <ComingSoonButton as="a" className="...">Request Access</ComingSoonButton>
// Renders the given tag (default "a") with all other props passed through,
// intercepting onClick to show the toast instead of navigating.
export function ComingSoonButton({ as = "a", children, className = "", ...rest }) {
  const Tag = as;
  const [toast, setToast] = useState(false);
  const timerRef = useRef(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setToast(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(false), 2200);
  }, []);

  return (
    <span className="relative inline-block">
      <Tag href="#" onClick={handleClick} className={className} {...rest}>
        {children}
      </Tag>
      {toast && (
        <span
          role="status"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap
                     bg-navy text-white text-xs font-medium px-3 py-1.5 rounded shadow-lg z-50
                     border border-navyLine"
        >
          Coming soon
        </span>
      )}
    </span>
  );
}

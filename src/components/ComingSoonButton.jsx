import { Link } from "react-router-dom";
export function ComingSoonButton({ children, className = "", ...props }) {
  return <Link to="/request-access" className={className} {...props}>{children}</Link>;
}

/**
 * Thin compatibility layer so the original Nexus Chat pages/components can keep
 * using the familiar router API while the app runs on TanStack Router.
 */
import { useCallback, useEffect } from "react";
import {
  Link as TanstackLink,
  Outlet,
  useLocation as useTanstackLocation,
  useNavigate as useTanstackNavigate,
  useParams as useTanstackParams,
} from "@tanstack/react-router";

export function useNavigate() {
  const navigate = useTanstackNavigate();

  return useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      navigate({
        to,
        replace: Boolean(options.replace),
        ...(options.state ? { state: options.state } : {}),
      });
    },
    [navigate],
  );
}

export function Link({ to, replace, state, children, ...rest }) {
  return (
    <TanstackLink to={to} replace={replace} state={state} {...rest}>
      {children}
    </TanstackLink>
  );
}

export function NavLink(props) {
  return <Link {...props} />;
}

export function Navigate({ to, replace = false }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, replace]);

  return null;
}

export function useLocation() {
  const location = useTanstackLocation();
  return {
    pathname: location.pathname,
    search: location.searchStr ?? "",
    hash: location.hash ?? "",
    state: location.state ?? {},
    key: location.href,
  };
}

export function useParams() {
  return useTanstackParams({ strict: false });
}

export { Outlet };

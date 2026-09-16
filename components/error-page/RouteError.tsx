"use client";

import { useEffect } from "react";
import { ErrorPage } from "./ErrorPage";

type RouteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
  withTitle?: boolean;
};

/** Граница ошибок для страниц: вместо упавшей страницы показывает страницу ошибки. */
export function RouteError({ error, reset, withTitle = false }: RouteErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorPage variant="error" onRetry={reset} withTitle={withTitle} />;
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import EmberHome from "./EmberHome";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { registerServiceWorker } from "./lib/serviceWorker";
import "./styles.css";

const rootElement = document.getElementById("root");
const isApplicationRoute = window.location.pathname === "/app" || window.location.pathname.startsWith("/app/");

document.documentElement.lang = isApplicationRoute ? "es" : "en";
document.title = isApplicationRoute ? "Lindero" : "EMBER — Ideas made extraordinary";

if (!rootElement) {
  throw new Error("No se encontró el elemento #root en index.html");
}

/*
 * Before rendering, and deliberately not awaited: registration is fire-and-
 * forget, defers its own work to the `load` event, and nothing on screen
 * depends on whether it succeeds. See lib/serviceWorker.ts.
 */
registerServiceWorker();

createRoot(rootElement).render(
  <StrictMode>
    {/* The outermost net: if a render error escapes every panel-level boundary,
        this shows a full-page message with a reload instead of a blank tab. */}
    <ErrorBoundary variant="page">
      {isApplicationRoute ? <App /> : <EmberHome />}
    </ErrorBoundary>
  </StrictMode>,
);

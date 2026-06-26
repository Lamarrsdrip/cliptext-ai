import { createAuthPlugin } from "@agent-native/core/server";

// Clips has public share pages, embeds, and view-event tracking that must
// reach unauthenticated viewers. Everything else sits behind auth.
export default createAuthPlugin({
  // Clips owns `/_agent-native/google/*` so the same registered Google
  // callback can handle both normal sign-in and the Calendar connect flow.
  mountGoogleOAuthRoutes: false,
  marketing: {
    appName: "ClipText AI",
    tagline:
      "Convert any video or screen recording into a full timestamped transcript — then send it straight to Claude.",
    features: [
      "Upload any video or record your screen — transcript generated automatically",
      "Timestamped transcript with search, copy, .txt and .md export",
      "One-click 'Claude-ready prompt' — paste directly into Claude with full context",
      "100% local-first: SQLite database, no cloud required",
    ],
  },
  publicPaths: [
    "/share",
    "/r",
    "/embed",
    "/download",
    // React Router's lazy route-discovery endpoint. If this is gated by
    // auth it returns an HTML login page; the client tries to parse it
    // as JSON, fails, and can't resolve any public route the user lands
    // on directly (/download, /share/:id, /embed/:id). Must be public.
    "/__manifest",
    "/api/view-event",
    "/api/public-recording",
    "/api/slack",
    "/api/agent-context.json",
    "/api/agent-transcript.json",
    "/api/agent-frame.jpg",
    "/api/media",
    "/api/clips-latest.json",
    "/api/clips-updater.json",
    // Blob-serving for the dev-fallback (no provider) path.
    // The route itself enforces resolveAccess + password/expiry checks;
    // we add it to publicPaths so anonymous viewers on /share/:id can
    // actually fetch the <video> bytes for public recordings. The chunk
    // upload POSTs stay behind auth under /api/uploads/*.
    "/api/video",
    "/api/auth/google-calendar",
    "/_agent-native/google/auth-url",
    "/_agent-native/google/callback",
  ],
});

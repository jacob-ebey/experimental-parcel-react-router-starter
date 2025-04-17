"use client-entry";

import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
// @ts-expect-error
import { createFromReadableStream } from "react-server-dom-parcel/client";

import { getServerStream, ServerBrowserRouter } from "react-router";
import type { ServerPayload } from "react-router/server";

createFromReadableStream(
  getServerStream(),
  { assets: "manifest" },
  {
    temporaryReferences: {
      clientId: () => <div>Client ID</div>,
    },
  }
).then((payload: ServerPayload) => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ServerBrowserRouter
          decode={createFromReadableStream}
          payload={payload}
        />
      </StrictMode>
    );
  });
});

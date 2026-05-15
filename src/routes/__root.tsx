import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlockHeightProvider } from "@/components/site/BlockHeightContext";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ault Blockchain — Hybrid PoW/PoS Sovereign Chain with Licensed Mining Node Layer" },
      { name: "description", content: "Hybrid PoW/PoS sovereign chain. Sub-second transaction finality. Built for real-world asset settlements, DeFi, and AI workloads. Mainnet live 3 March 2026." },
      { property: "og:title", content: "Ault Blockchain — Hybrid PoW/PoS Sovereign Chain with Licensed Mining Node Layer" },
      { property: "og:description", content: "Mainnet live since March 3, 2026. Hybrid PoW/PoS sovereign chain. Sub-second finality. Licensed Mining Node layer runs verifiable off-chain work. Built by Ault Capital Group, an NYSE-listed subsidiary of Hyperscale Data, Inc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Ault Blockchain — Hybrid PoW/PoS Sovereign Chain with Licensed Mining Node Layer" },
      { name: "twitter:description", content: "Hybrid PoW/PoS sovereign chain. Sub-second transaction finality. Built for real-world asset settlements, DeFi, and AI workloads. Mainnet live 3 March 2026." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7855f455-dcb7-402f-92ce-d6a1779d153d/id-preview-7bcff970--7b930faa-af3c-46b6-bb79-5d6031d60a45.lovable.app-1778707499741.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7855f455-dcb7-402f-92ce-d6a1779d153d/id-preview-7bcff970--7b930faa-af3c-46b6-bb79-5d6031d60a45.lovable.app-1778707499741.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BlockHeightProvider>
        <Outlet />
      </BlockHeightProvider>
    </QueryClientProvider>
  );
}

# Welcome to React Router!

An experimental template for building full-stack React applications using React Router and React Server Components.

> [!CAUTION]
> This is an **experimental** starter template based on an **experimental** (and temporary) Parcel plugin to give folks an easy way to play with RSC's in React Router.
>
> You **should not** ship anything to production on this stack because:
> 1. The React Router APIs are unstable and subject to change without notice
> 2. More importantly, the Parcel plugin to provide `routes.ts` support is a short-term POC and will not be updated/maintained in the future once we have stable support for React Router Framework Mode via Vite


## Features

- ⚛️ React Server Components
- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR) (client components only ATM)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm i
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm build
```

## Deployment

Don't, it's experimental.

If you'd like to live on the edge, it's just like any node app. Include the "dist" folder in the deployment, and run `pnpm start`.

# minimal react starter

rock-solid frontend starter w/ modern tooling. built for speed and simplicity.

## stack
- vite
- react 19
- typescript
- tanstack router & react-query
- tailwind + shadcn
- google oauth

## setup

```bash
pnpm i
pnpm dev
```

needs the backend running on port 3000

## structure

```
src/
  components/     # shared components
  routes/         # page components
  lib/
    hooks/        # shared hooks
    utils.ts      # helper functions
  main.tsx        # entry
```

core patterns:
- shadcn/ui for component primitives
- tanstack for data & routing
- tailwind for styling
- google oauth flow

handles auth, dark mode, and basic routing out of the box. minimal deps, typescript-first.

## development

- `pnpm dev` - start dev server
- `pnpm build` - production build
- `pnpm typecheck` - type checking

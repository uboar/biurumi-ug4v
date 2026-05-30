あなたはタスク全体のオーケストレーションを担当する。実際にタスクを行う上で必要な作業はsubagentに依頼する。例えば、以下の作業。あなたはオーケストレーションに徹し、実際の作業は実施しない。
- 調査
- 実装
- テスト
- サマライズ

--- project-doc ---

# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro site with MDX pages. Source files live in `src/`: route pages are in `src/pages/*.mdx`, reusable UI is in `src/components/*.astro`, shared page chrome is in `src/layouts/`, and global styling is in `src/styles/global.css`. Static brand assets belong in `public/assets/brand/` and are served from `/assets/brand/...`. `dist/` is generated build output and should not be edited by hand.

## Build, Test, and Development Commands

Use pnpm, matching `packageManager: pnpm@10.28.0`.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the Astro development server.
- `pnpm build` creates the static production build in `dist/` and generates OG images.
- `pnpm preview` serves the built site locally for final checks.

Run commands from the repository root.

## Coding Style & Naming Conventions

Astro, TypeScript, and CSS use two-space indentation. Prefer single quotes in frontmatter scripts and imports, matching the existing `.astro` files. Name Astro components in PascalCase, such as `Navigation.astro` and `Hero.astro`. Name route files by URL slug in lowercase, for example `profile.mdx` for `/profile/`. Use the configured path aliases where they improve clarity: `@components/*`, `@layouts/*`, and `@styles/*`.

Keep CSS variables centralized in `src/styles/global.css`. Reuse existing design tokens for color, spacing, radii, and fonts before adding new ones.

## Testing Guidelines

No automated test framework is currently configured. Treat `pnpm build` as the required validation step for every change. For visual or content changes, also run `pnpm preview` and manually check the affected routes, including `/`, `/profile/`, `/world/`, `/story/`, and `/about/`.

## Commit & Pull Request Guidelines

Use concise, imperative commit subjects, preferably with a conventional prefix when helpful, such as `feat: add profile shell` or `fix: correct project metadata`.

Pull requests should include a short summary, affected routes or components, validation performed (`pnpm build`, browser preview), and screenshots for visible UI changes. Link related issues when available.

## Security & Configuration Tips

The site is configured for static output in `astro.config.mjs`. Do not commit secrets; this project should not need runtime secrets for static pages.

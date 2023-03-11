# Fake news detection

Ui of fake news detection

## Tech Stack

- Next.js
- Tailwind CSS

## Must have

- Animations: Avoid Javascript/external libraries if things can be reasonably achieved using [CSS](https://tailwindcss.com/docs/animation).
- Fully Typescript *(all exceptions need to be reviewed with the team)*
- Exclusive use of [`@next/image`](https://nextjs.org/docs/api-reference/next/image) for all images
- [Component-driven user interfaces](https://www.componentdriven.org/) *(we can create variants vs. duplication)*
- [Design token](https://spectrum.adobe.com/page/design-tokens/) implementation using [Tailwind CSS](https://tailwindcss.com/docs/configuration)
- Font implementation using [`next/font`](https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css) (with Tailwind CSS specific changes) to automatically optimize and load a custom Google Font.

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run a server after clearing `.next` file

```bash
  npm run fresh
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Appendix

- There is an `.editorconfig` with settings that we'd all agree with

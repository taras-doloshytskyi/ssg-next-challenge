# NextJS Challenge - Seven Sigma Group

This repository contains a typical NextJS project at Seven Sigma Group.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured with:

1. ESLint and Prettier
2. Git hooks set up with [Husky](https://typicode.github.io/husky/)
3. NextJS and React specific folders (`pages`, `styles`, and `layouts`)
4. TypeScript
5. Tailwind CSS

## Project structure

The app has the following structure:

- `components`: React components used across the app.
- `pages`: NextJS specific pages. The pages should not contain any styles, and be limited to the page-specific logic.
  All the presentation and business logic should be implemented as a view.
- `layouts`: Contains the presentation elements for the pages. Can also include data and business logic.

### API

You have a NextJS API route available that you can call to fetch all the details.

You can see the code at `src/pages/api/person`

TL;DR:
- GET endpoint: `api/user?person={Person.PersonA}`
- Can request values for person A, person B, or person C.
- Person A returns in one second, person B returns in 3 seconds, person C always fails.

## Prerequisites

To set up the codebase and the required dependencies, simply run `npm install`;


## Running the app

```bash
# development
$ npm run dev

# production
$ npm run build && npm run start
```

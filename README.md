# Nuxt 3 & PrimeVue Todo App

This is a sample Todo app that is supposed to be a bit more sophisticated than the normal tutorial todo!

## Features

Not feature complete.

- Basic "registration"
- Routing
- Database storage
- Styling using PrimeVue

This project does not have -

- Auth
- User-specific data filters

## Tech Stack

- [Nuxt 3](https://v3.nuxtjs.org/)
- [PrimeVue](https://primefaces.org/primevue/). Lot of styling copied over from [Sakai Vue](https://sakai.primevue.org/). Overkill, really.
- SQLite & [better-sqlite3]()
- [Drizzle ORM](https://orm.drizzle.team/) for database access

I used WSL since `better-sqlite3` requires a 6 GB compiler on base Windows.

## Setup

Clone this repo.

```bash
git clone prashanth1k/nuxt-primevue-todo
```

Install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

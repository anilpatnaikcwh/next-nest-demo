#### Local Setup

- Create postgres and pgadmin on root folder `docker-compose up -d`
- Browse [pgadmin](http://localhost:8092) and login with `admin@domain.com ~ password`
- Create database schema on server folder `npx prisma db push`
- Seed database on server folder `npx prisma db seed`
- Browse database on server folder `npx prisma studio`
- Start dev server on server folder `npm run dev`
- Browse [swagger](https://localhost:8091/swagger)
- Start e2e testing on server folder `npm run test`
- Start dev server on client folder `npm run dev`
- Browse [home](https://localhost:8090)

#### Postgres Database

- Create postgres and pgadmin `docker-compose up -d`
- Remove postgres and pgadmin `docker-compose down --rmi all -v`

#### Postgres Seed

- Create database schema `npx prisma db push`
- Seed database `npx prisma db seed`
- Create database migrations `npx prisma migrate dev --name init`
- Browse database `npx prisma studio`

#### Nest Backend

- Start dev server `npm run dev`
- Build for production `npm run build`
- Start Cypress e2e `npm run test`

#### Next Frontend

- Start dev server `npm run dev`
- Build for production `npm run build`

### Local Dev Setup
#### Postgres
- Open terminal then go to **server** directory
- Create Postgres and pgAdmin `docker-compose up -d`
- Create database schema `npx prisma db push`
- Seed database `npx prisma db seed`
- Browse database `npx prisma studio`
- Browse [pgadmin](http://localhost:8085) 
  - Login with `admin@domain.com ~ password`
- Drop Postgres and pgAdmin **post dev** `docker-compose down --rmi all -v`
#### Next Frontend
- Create .env in **client** directory
  - NEXT_PUBLIC_API=[url](https://localhost:8080/api)
- Open new bash terminal then go to **client** directory
- Install npm dependencies `npm install`
- Start dev server `npm run dev`
- Browse [app](https://localhost:8090)
#### Nest Backend
- Create .env in **server** directory
  - DATABASE_URL=[url](postgresql://postgres:password@localhost:5432/postgres)
- Copy **certificates** folder from **client** to **server**
- Open new bash terminal then go to **server** directory 
- Install npm dependencies `npm install`
- Start dev server `npm run dev`
- Browse [swagger](https://localhost:8080/swagger)
#### Cypress
- Open new bash terminal then go to **server** directory
- Create Cypress dev env
  - `sudo apt-get install -y xvfb`
  - `sudo apt-get install -y libgbm-dev`
- Start Cypress e2e `npm run test`

#### Cloud Shell 
- [Web Preview URL](https://<port>-<project-id>.<region>.cloudshell.dev)
- [Default Port URL](https://8080-<project-id>.<region>.cloudshell.dev)

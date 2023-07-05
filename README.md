# F1 Assignment

Finished:
- Created migration files for the tables
- Created models
- Created the foundation for service files
- Created the foundation for controller files
- Created the foundation for router files

In Progress:
- API to get a list of all constructors (in chosen period)
- API to get a list of all racers

Note to self:
- No caps in column names, ever.

# How to run server from local

1. Prepare .env file
2. Run `npm run start:dev`

# How to migrate database

1. Run `npm run db:migration nameOfFile.js` (replace nametable)
2. Update migrate file content
3. Run `npm run db:migrate`
4. Run `npm run db:migrate nameOfFile.js`

# How to deploy

1.  Push latest code to git
2.  Access to server via SSH command
3.  npm run build && pm2 restart 0 && pm2 logs 0

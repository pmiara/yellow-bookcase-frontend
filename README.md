# Żółta Biblioteczka (The Yellow Bookcase)

The frontend for Żółta Biblioteczka - a website for recommending books. It's written with the Angular framework. The
corresponding backend service repository is available at https://github.com/pmiara/yellow-bookcase-backend.

## Installation

Run the commands below in order to create your local setup:

```
mkdir yellow-bookcase
cd yellow-bookcase
git clone https://github.com/pmiara/yellow-bookcase-frontend
git clone https://github.com/pmiara/yellow-bookcase-backend
npm install concurrently
echo concurrently "cd yellow-bookcase-backend && npm run develop" "cd yellow-bookcase-frontend && ng serve" > ./run.sh
chmod +x ./run.sh
```

This will result in creating the following file structure:

```
yellow-bookcase
├── run.sh
├── yellow-bookcase-backend
└── yellow-bookcase-frontend
```

Run the application by simply launching the `run.sh` file. The backend will be available at http://localhost:1337, and
the frontend at http://localhost:4200. Initially, the website will look rather empty. You will have to add several books
and bookshelves yourself.

## Testing

Test files are placed next to the regular code files. They have to match `*.spec.ts` pattern in order to be found by a
test runner.

Running tests:

`ng test --browsers=ChromeHeadlessNoSandbox`

Apart from passing all the tests, the application code has to comply with the rules checked by ESLint:

`tsc --noEmit && eslint . --ext ts,json --quiet --fix`

These two commands are run by the CI system (Travis) before deployment, or merges to the main branch.

## Game_coaching

### How to start developing

Run this

`git clone https://github.com/metaverse-ventures/Gaming-marketplace-frontend-code.git`

`yarn install`

### Dev settings

1. `.vscode` handles all vscode standard settings **(DO_NOT_EDIT)**
2. `.prettiererc` and `.prettierignore` handles standard formatting accross all editors **(DO_NOT_EDIT)**
3. `./frontend/.eslintrc.json` handles all the linting rules. (Current rules mentions that unused variables starting with \_ will be ignored) **(DO_NOT_EDIT)**
4. `.npmrc` and `.nvmrc` handles a constant node version. Set to 18.x.x. **(DO_NOT_EDIT)**
5. git commit does the following actions:
    - `yarn prettier` on the project
    - `yarn lint` on the project
    - Checks commit message starts according to these. For more info view `commitlint.config.js`. E.g. `git commit -m "refactor: edited function descriptions for xyz component"`
        - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        - ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        - docs: Documentation only changes
        - feat: A new feature
        - fix: A bug fix
        - perf: A code change that improves performance
        - refactor: A code change that neither fixes a bug nor adds a feature
        - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        - test: Adding missing tests or correcting existing tests
    - Refer [here](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) in case of any doubts

### Frontend (NextJS) project structure

-   `/components` - The individual UI components that make up the app will live in here
    -   `/templates/base` - base templates for all components
        -   `baseTemplate.tsx` - This template exports This component and its interface
        -   `baseTemplate.module.css` - This template handles all the css. Css file is imported in `baseTemplate.tsx` as `styles`. Using `styles.component` generates a random global className, so that `.container` class can be used multiple time accross different modules
        -   `baseTemplate.mocks.tsx` - This template contains mock `baseTemplate.tsx` props for faster dev
    -   `/layouts` - This template for component layouts. Layouts are usually used to enclose components. E.g. custom css, headers, footers, etc.
-   `/lib` - Business/app/domain logic will live in here.
-   `/pages` - Will be the actual routes/pages as per the required Next.js structure
    -   `/_document.tsx` - should contain everything to be included in `<head>` of the entire webpage.
# meta-verse

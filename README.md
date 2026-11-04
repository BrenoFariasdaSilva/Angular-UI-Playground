<div align="center">
  
# [Angular-UI-Playground.](https://github.com/BrenoFariasdaSilva/Angular-UI-Playground) <img src="https://github.com/devicons/devicon/blob/master/icons/angular/angular-original.svg"  width="3%" height="3%">

</div>

<div align="center">
  
---

<p>
  <strong>Angular UI Playground</strong> is a hands-on learning project for exploring modern Angular development through small, practical examples. It covers standalone components, routing, data binding, signals, reusable components, events, forms, pipes, and UI state.
</p>

<p>
  The project integrates <strong>PrimeNG</strong> and <strong>Tailwind CSS</strong> to build polished interfaces, including a globally available <code>p-drawer</code> navigation menu and a dedicated, independently routed PrimeNG component gallery. The gallery demonstrates controls such as buttons, input groups, date pickers, list boxes, sliders, tables, dialogs, messages, cards, panels, tags, and pagination.
</p>

<p>
  It is intentionally a playground rather than a production application: a space to experiment, learn, and understand how Angular features and third-party UI libraries work together.
</p>
  
---

</div>

<div align="center">

![GitHub Code Size in Bytes](https://img.shields.io/github/languages/code-size/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub Commits](https://img.shields.io/github/commit-activity/t/BrenoFariasdaSilva/Angular-UI-Playground/main)
![GitHub Last Commit](https://img.shields.io/github/last-commit/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub Forks](https://img.shields.io/github/forks/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub Language Count](https://img.shields.io/github/languages/count/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub License](https://img.shields.io/github/license/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub Stars](https://img.shields.io/github/stars/BrenoFariasdaSilva/Angular-UI-Playground)
![GitHub Contributors](https://img.shields.io/github/contributors/BrenoFariasdaSilva/Angular-UI-Playground)
![wakatime](https://wakatime.com/badge/github/BrenoFariasdaSilva/Angular-UI-Playground.svg)

</div>

<div align="center">
  
![RepoBeats Statistics](https://repobeats.axiom.co/api/embed/50e34b4bf3f62c8a5029d4db29b8c1ec5acca681.svg "Repobeats analytics image")

</div>

## Table of Contents
- [Angular-UI-Playground. ](#angular-ui-playground-)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Daily learning log](#daily-learning-log)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Clone the repository](#clone-the-repository)
  - [Installation](#installation)
  - [PrimeUI License Configuration](#primeui-license-configuration)
    - [Obtain a free Community License](#obtain-a-free-community-license)
    - [Configure locally and in CI](#configure-locally-and-in-ci)
    - [Troubleshooting](#troubleshooting)
    - [Security](#security)
  - [Development](#development)
  - [Build](#build)
  - [Tests](#tests)
  - [Code scaffolding](#code-scaffolding)
  - [End-to-end tests](#end-to-end-tests)
  - [Additional resources](#additional-resources)
  - [Results - Optional](#results---optional)
  - [How to Cite?](#how-to-cite)
  - [Contributing](#contributing)
  - [Collaborators](#collaborators)
  - [License](#license)
    - [Apache License 2.0](#apache-license-20)

## Introduction

Angular UI Playground is a practical sandbox for learning modern Angular through focused, working examples. It explores standalone components, routing, data binding, signals, reusable components, events, forms, pipes, and UI state.

The project combines PrimeNG and Tailwind CSS to demonstrate polished UI patterns, including a globally available `p-drawer` navigation menu and independently routed PrimeNG component examples for buttons, input groups, date pickers, list boxes, sliders, tables, dialogs, messages, cards, panels, tags, and pagination.

## Daily learning log

Each row is one commit day (São Paulo time). Within the Stack column, each block covers a stack practiced that day and names the related components or files. The dates reflect when the work was committed.

| # | Date | Stack |
| ---: | --- | --- |
| 1 | 2026&#8209;10&#8209;29 | **Angular**<br>Workspace structure, build targets, assets, styles, and local CLI commands.<br>**Related files:** [angular.json](angular.json), [package.json](package.json).<br><br>**General Frontend**<br>TypeScript compiler options, separate app/test configurations, editor formatting, and development tasks.<br>**Related files:** [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), [tsconfig.spec.json](tsconfig.spec.json), [.editorconfig](.editorconfig), [.vscode/tasks.json](.vscode/tasks.json). |
| 2 | 2026&#8209;10&#8209;30 | **Angular**<br>Signals and `update()` for state; interpolation, property/event binding, `ngModel`, and `ngModelChange`; component composition and template references; built-in and custom pipes; `@Input()` and `@Output()` for component communication.<br>**Related components/files:** [Counter](src/app/counter/counter.ts), [DataBinding](src/app/data-binding/data-binding.ts), [NextPage](src/app/next-page/next-page.ts), [InterestPipe](src/app/custom-pipes/interest-pipe.ts), [Pipes](src/app/pipes/pipes.ts), [NotificationButtonClick](src/app/notification-button-click/notification-button-click.ts).<br><br>**Tailwind CSS**<br>PostCSS integration and global utility import.<br>**Related files:** [.postcssrc.json](.postcssrc.json), [src/styles.css](src/styles.css). |
| 3 | 2026&#8209;10&#8209;31 | **Angular**<br>Template expressions, references, `@if`, and `@for`; template-driven forms with `ngForm`, `ngModel`, and HTML validation; reactive forms with `FormGroup` and `FormControl`; router injection and navigation after a login check.<br>**Related components:** [Misc](src/app/misc/misc.ts), [TemplateForm](src/app/template-form/template-form.ts), [ReactiveForm](src/app/reactive-form/reactive-form.ts), [Login](src/app/login/login.ts).<br><br>**PrimeNG**<br>Input masks; modal visibility and save/cancel state; navigation drawers and a component-gallery shell.<br>**Related components:** [TemplateForm](src/app/template-form/template-form.ts), [Dialog](src/app/dialog/dialog.ts), [SideNavDrawer](src/app/side-nav-drawer/side-nav-drawer.ts), [PrimengComponents](src/app/primeng-components/primeng-components.ts).<br><br>**Tailwind CSS**<br>Utility classes for layout, spacing, typography, borders, hover states, and focus states.<br>**Related templates:** [home-page.html](src/app/home-page/home-page.html), [login.html](src/app/login/login.html), [template-form.html](src/app/template-form/template-form.html), [reactive-form.html](src/app/reactive-form/reactive-form.html). |
| 4 | 2026&#8209;11&#8209;01 | **PrimeNG**<br>Button variants; input groups and text fields; date pickers, list boxes, and sliders bound to form state; table templates; messages and progress bars.<br>**Related components:** [ButtonsPage](src/app/primeng-components/pages/buttons/buttons-page.ts), [InputsPage](src/app/primeng-components/pages/inputs/inputs-page.ts), [DatepickerPage](src/app/primeng-components/pages/datepicker/datepicker-page.ts), [ListboxPage](src/app/primeng-components/pages/listbox/listbox-page.ts), [SliderPage](src/app/primeng-components/pages/slider/slider-page.ts), [TablePage](src/app/primeng-components/pages/table/table-page.ts), [FeedbackPage](src/app/primeng-components/pages/feedback/feedback-page.ts). |
| 5 | 2026&#8209;11&#8209;02 | **Angular**<br>Standalone bootstrapping and global providers; route tables, nested routes, redirects, `RouterLink`, and `RouterOutlet`.<br>**Related files/components:** [main.ts](src/main.ts), [App](src/app/app.ts), [app.config.ts](src/app/app.config.ts), [app.routes.ts](src/app/app.routes.ts), [primeng-components.routes.ts](src/app/primeng-components/primeng-components.routes.ts).<br><br>**PrimeNG**<br>Modal overlays, cards, panels, tags, and pagination; global Aura theme registration.<br>**Related components/files:** [OverlayPage](src/app/primeng-components/pages/overlay/overlay-page.ts), [LayoutPage](src/app/primeng-components/pages/layout/layout-page.ts), [PaginationPage](src/app/primeng-components/pages/pagination/pagination-page.ts), [app.config.ts](src/app/app.config.ts). |
| 6 | 2026&#8209;11&#8209;03 | **Angular**<br>Router dependencies in component tests; lazy route loading with `loadComponent()` and a dynamic import.<br>**Related files:** [app.spec.ts](src/app/app.spec.ts), [misc.spec.ts](src/app/misc/misc.spec.ts), [next-page.spec.ts](src/app/next-page/next-page.spec.ts), [app.routes.ts](src/app/app.routes.ts). |
| 7 | 2026&#8209;11&#8209;04 | **Angular**<br>Functional route guards with `CanActivateFn` and `inject()`; redirecting unauthorised navigation with a `UrlTree`; preserving a requested URL through the `returnUrl` query parameter; session-scoped authorization with `sessionStorage` and signals; organizing and importing a standalone custom pipe from a feature folder.<br>**Related files/components:** [auth.guard.ts](src/app/auth/auth.guard.ts), [AuthSessionService](src/app/auth/auth-session.service.ts), [Login](src/app/login/login.ts), [app.routes.ts](src/app/app.routes.ts), [InterestPipe](src/app/custom-pipes/interest-pipe.ts).<br><br>**Tailwind CSS**<br>Named responsive breakpoints through `theme(--breakpoint-sm)`, `theme(--breakpoint-md)`, and `theme(--breakpoint-lg)` for an adaptive card grid.<br>**Related file:** [responsiveness.css](src/app/responsiveness/responsiveness.css). |

## Requirements

Install these tools before cloning the project:

| Tool | Required version | Purpose |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | A current LTS release compatible with Angular 22 | Runs the development tools and application build |
| npm | `11.13.0` recommended | Installs the locked project dependencies and runs scripts |
| Angular CLI | `22.x` optional | Provides the global `ng` command for scaffolding and diagnostics |

Node.js includes npm. Verify both after installation:

```bash
node --version
npm --version
```

To install the Angular CLI globally, run:

```bash
npm install -g @angular/cli@22
ng version
```

The global CLI is optional: all build, test, and development commands below use the project-local CLI through npm.

## Setup

### Clone the repository

1. Clone the repository with the following command:

   ```bash
   git clone https://github.com/BrenoFariasdaSilva/Angular-UI-Playground.git
   cd Angular-UI-Playground
   ```

## Installation

Install every project dependency from the lockfile:

```bash
npm ci
```

This installs the exact versions used by the project, including Angular 22, PrimeNG, the Aura theme, Tailwind CSS, TypeScript, Vitest, Prettier, and their supporting packages. You do **not** need to install PrimeNG or Tailwind CSS globally or one package at a time.

Use `npm install` only when intentionally changing dependencies, because it can update `package-lock.json`.

## PrimeUI License Configuration

PrimeNG 22 requires a valid [PrimeUI Community or Commercial license](https://primeng.dev/configuration). PrimeNG 21 and earlier remain under their original MIT license. Missing, malformed, expired, or version-incompatible keys can produce `[PrimeUI]` console warnings and an “Invalid PrimeUI License” notice.

The [Community License](https://primeui.dev/licenses/community) is free for eligible individuals, including students working on their own projects. Small organizations qualify only if they meet **all** of the published criteria. Work on behalf of a university, educational institution, government body, or government-funded organization does not qualify under the organizational Community terms. Each developer working directly with PrimeUI needs a license or seat. Community licenses last 12 months and may be renewed for free after reconfirming eligibility. Community includes the core PrimeNG library; Commercial provides broader organizational eligibility and covers additional products and support under its terms.

### Obtain a free Community License

1. Visit [PrimeUI Community registration](https://primeui.store/primeui?community=1).
2. Register or sign in to a PrimeUI account.
3. Review the Community License eligibility criteria and binding terms.
4. Confirm eligibility as an individual developer when applicable; check organizational eligibility separately for institutional work.
5. Complete the Community License registration.
6. Visit [your PrimeUI licenses](https://primeui.store/user/primeui).
7. Find your active PrimeUI license.
8. Open its details and copy the license key.
9. Keep the key available for local project configuration.

### Configure locally and in CI

Copy the example file:

```bash
cp .env.example .env
```

Replace its placeholder with your own key:

```dotenv
PRIMEUI_LICENSE=YOUR_ACTUAL_LICENSE_KEY
```

Install dependencies and start the application:

```bash
npm install
npm start
```

The `postinstall` hook creates the ignored `src/app/primeui-license.ts` so TypeScript can resolve the import after `npm install` or `npm ci`. Without a key, the file contains an empty placeholder and the hook prints a setup reminder. The strict preparation hook before `npm start`, `npm run build`, `npm run watch`, and `npm test` reads `PRIMEUI_LICENSE` from `.env`, regenerates the file, and fails with setup instructions if no key is configured. `app.config.ts` passes the generated value to `providePrimeNG({ license })`. Production builds embed the key available **at build time**. Restart the npm command after changing `.env`.

For CI/CD, set `PRIMEUI_LICENSE` in the process environment; it takes precedence over `.env`. An explicitly empty process variable also takes precedence and fails. Build machines do not need separate developer seats under the [Community terms](https://primeui.dev/licenses/community). Direct `ng serve`, `ng build`, and `ng test` bypass the strict npm hooks; run `npm run prepare:license` first or use the npm commands.

### Troubleshooting

- **Missing or empty key:** Set `PRIMEUI_LICENSE` in `.env` or the process environment. Unset an empty process variable if `.env` should supply the key.
- **Malformed or invalid key:** Copy the complete, unaltered key without whitespace. The script checks presence and whitespace; PrimeUI validates the key in the browser.
- **Expired Community License:** Renew it in [PrimeUI Store](https://primeui.store/user/primeui) after reconfirming eligibility. PrimeUI documents a 30-day grace period.
- **Version not covered:** Renew the license or use a PrimeNG release published during its update period.
- **Browser notice:** Open developer tools and inspect the `[PrimeUI]` console message. A valid key should remove the license warning and notice; successful compilation alone does not establish activation.
- **Missing generated module or editor import error:** Run `npm run postinstall` to create the local placeholder, then configure your key. Direct Angular CLI commands can use an empty or stale module because they bypass npm's license checks.

### Security

Never commit `.env` or the generated `primeui-license.ts` file. Both are excluded via `.gitignore`; `.env.example` contains placeholders only. Browser JavaScript may contain the key, so environment variables do not make it secret. Each developer must obtain their own valid license or seat. A public GitHub repository does not authorize reuse of its owner's key; do not publicly distribute your key for others to avoid their own license.

For details, see the [official PrimeUI setup guide](https://blog.primeui.dev/blog/setting-up-a-primeui-license-key/).

## Development

Start the local development server:

```bash
npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in a browser. Angular reloads the application after source changes.

## Build

Create an optimized production build in `dist/`:

```bash
npm run build
```

## Tests

Run the unit tests with Vitest:

```bash
npm test
```

## Code scaffolding

Generate a new Angular component:

```bash
ng generate component component-name
```

See all available Angular CLI schematics with:

```bash
ng generate --help
```

## End-to-end tests

An end-to-end test framework is not configured by default. Choose and configure one that fits the project when end-to-end coverage is needed.

## Additional resources

See the [Angular CLI overview and command reference](https://angular.dev/tools/cli) for the complete CLI documentation.

## Results - Optional

Use the navigation drawer to explore the learning examples and the PrimeNG component gallery.

## How to Cite?

If you use the Angular-UI-Playground in your research, please cite it using the following BibTeX entry:

```
% Tools:

@misc{softwareAngular-UI-Playground:2026,
  title = {Angular-UI-Playground: A hands-on Angular learning project exploring routing, forms, signals, components, PrimeNG UI widgets, and Tailwind CSS},
  author = {Breno Farias da Silva},
  year = {2026},
  howpublished = {https://github.com/BrenoFariasdaSilva/Angular-UI-Playground},
  note = {Accessed on November 3, 2026}
}

```

Additionally, a `main.bib` file is available in the root directory of this repository, in which contains the BibTeX entry for this project.

If you find this repository valuable, please don't forget to give it a ⭐ to show your support! Contributions are highly encouraged, whether by creating issues for feedback or submitting pull requests (PRs) to improve the project. For details on how to contribute, please refer to the [Contributing](#contributing) section below.

Thank you for your support and for recognizing the contribution of this tool to your work!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. If you have suggestions for improving the code, your insights will be highly welcome.
In order to contribute to this project, please follow the guidelines below or read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to contribute to this project, as it contains information about the commit standards and the entire pull request process.
Please follow these guidelines to make your contributions smooth and effective:

1. **Set Up Your Environment**: Ensure you've followed the setup instructions in the [Setup](#setup) section to prepare your development environment.

2. **Make Your Changes**:
   - **Create a Branch**: `git checkout -b feature/YourFeatureName`
   - **Implement Your Changes**: Make sure to test your changes thoroughly.
   - **Commit Your Changes**: Use clear commit messages, for example:
     - For new features: `git commit -m "FEAT: Add some AmazingFeature"`
     - For bug fixes: `git commit -m "FIX: Resolve Issue #123"`
     - For documentation: `git commit -m "DOCS: Update README with new instructions"`
     - For refactorings: `git commit -m "REFACTOR: Enhance component for better aspect"`
     - For snapshots: `git commit -m "SNAPSHOT: Temporary commit to save the current state for later reference"`
   - See more about crafting commit messages in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

3. **Submit Your Contribution**:
   - **Push Your Changes**: `git push origin feature/YourFeatureName`
   - **Open a Pull Request (PR)**: Navigate to the repository on GitHub and open a PR with a detailed description of your changes.

4. **Stay Engaged**: Respond to any feedback from the project maintainers and make necessary adjustments to your PR.

5. **Celebrate**: Once your PR is merged, celebrate your contribution to the project!

## Collaborators

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="https://github.com/BrenoFariasdaSilva.png" width="100px;" alt="My Profile Picture"/><br>
        <sub>
          <b>Breno Farias da Silva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## License

### Apache License 2.0

This project is licensed under the [Apache License 2.0](LICENSE). This license permits use, modification, distribution, and sublicense of the code for both private and commercial purposes, provided that the original copyright notice and a disclaimer of warranty are included in all copies or substantial portions of the software. It also requires a clear attribution back to the original author(s) of the repository. For more details, see the [LICENSE](LICENSE) file in this repository.

# Sunbird

## @project-sunbird/sb-notification

[![NPM version](https://img.shields.io/npm/v/@project-sunbird/sb-notification.svg?flat&logo=npm)](https://img.shields.io/npm/v/@project-sunbird/sb-notification.svg?style=for-the-badge&logo=npm)
---

<p>
  <img alt="angular" src="https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white" height=25 />
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" height=25 />
</p>

`@project-sunbird/sb-notification` is a lightweight and very complete Angular library for notifications module in Sunbird.

---
## Getting started
How to use @project-sunbird/sb-notification in your projects

## Using library locally

1. Build library
```console
npm run build
```
2. Link library to your project
```console
npm link @project-sunbird/sb-notification
```

## Table of contents

- [Installation](#installation)
- [Import in Angular](#import-in-angular)
- [Options](#options)
- [Versions](#versions)
---

### Installation

```
$ npm i @project-sunbird/sb-notification
```

### Import in Angular

```console
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SbNotificationModule } from '@project-sunbird/sb-notification';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SbNotificationModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

```console
<sb-notification tabindex="0" [notificationList]="notificationList" [inAppNotificationConfig]="inAppNotificationConfig" (showMore)="handleShowMore($event)" (showLess)="handleShowLess($event)"></sb-notification>
```

### Options

  - `notificationList`: Array of notification objects.
  - `inAppNotificationConfig`: Object of in-app notification configuration.

      ```javascript
        title: string;
        subTitle: string;
        clearText: string;
        moreText: string;
        lessText: string;
        minNotificationViewCount: number;
      ```
  - `(showMore)`: Event emitted when user clicks on "Show more"
  - `(showLess)`: Event emitted when user clicks on "Show less"

### Versions

|   release branch  	| npm package version 	| Angular Version 	|
|:-----------------:	|:-------------------:	|:---------------:	|
|  release-5.1.0_v9 	|        5.0.2        	|      NG V9      	|
|  release-5.1.0_v10 	|        5.0.3        	|      NG V10     	|
|  release-5.1.0_v10 	|        5.0.4        	|      NG V10     	|
|  release-5.1.0_v11 	|        5.0.5        	|      NG V11     	|
|  release-5.1.0_v12 	|        5.0.6        	|      NG V12     	|
|  release-5.1.0_v10 	|        5.0.8        	|      NG V10     	|
|  release-5.1.0_v12 	|        5.0.9        	|      NG V12     	|
|  release-6.0.0_v13 	|        6.0.0        	|      NG V13    	  |
|  release-6.0.0_v14 	|        6.1.0        	|      NG V14    	  |
|  8.0.0_v15          |        8.0.0          |      NG V15       |
|  8.0.0_v16          |        8.0.1          |      NG V16       |

#### Code Quality

The project maintains code quality through automated checks that run on every pull request:

1. **Linting**
   - Runs ESLint to check code style and quality
   - Command: `yarn lint`

2. **Dependencies**
   - Uses `yarn install` for deterministic installations
   - GitHub Actions cache for faster builds

3. **Testing**
   - Unit tests using Karma
   - Command: `yarn test`

These checks ensure consistent code style and secure dependency management.

## Package Publishing

Workflow automatically builds and publishes NPM packages whenever a new tag is pushed to the repository.

### Publish Workflow

The workflow is triggered on:
- Push events for any Git tag

Key features of the workflow:
1. Automatically builds the project
2. Creates NPM package
3. Publishes to NPM registry using NPM authentication token (must be provided as GitHub secret `NPM_TOKEN`)
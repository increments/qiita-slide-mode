# @increments/qiita-slide-mode

[![Travis CI](https://img.shields.io/travis/increments/qiita-slide-mode/master.svg)](https://travis-ci.org/increments/qiita-slide-mode) [![npm](https://img.shields.io/npm/v/@increments/qiita-slide-mode.svg)](https://www.npmjs.org/package/@increments/qiita-slide-mode)

@increments/qiita-slide-mode includes all the components used in Qiita's Slide Mode.

![](https://user-images.githubusercontent.com/56996/37584139-a512c2ec-2b97-11e8-8fd1-1c02e1efcf67.gif)

<h2>Table of Contents</h2>
<!-- TOC -->

* [Installation](#installation)
* [Usage](#usage)
* [Styles](#styles)
* [Options](#options)
  * [Usage](#usage-1)
  * [Option properties](#option-properties)
* [License](#license)

<!-- /TOC -->

## Installation

```
npm i @increments/qiita-slide-mode
```

## Usage

```jsx
import { h, app } from "hyperapp"
import { SlideViewer, slide } from "@increments/qiita-slide-mode"

const state = {
  article: {
    body: [
      `<h1>First Slide</h1><p>This is the first slide.</p>`,
      `<h1>Second Slide</h1><p>This is the second slide.</p>`
    ]
  },
  slide: slide.state
}

const actions = {
  slide: slide.actions
}

const view = (state, actions) => (
  <SlideViewer
    state={state.slide}
    actions={actions.slide}
    pages={state.article.body}
  />
)

app(state, actions, view, document.body)
```

## Styles

```scss
@import "@increments/qiita-slide-mode/src/styles/vars";
@import "@increments/qiita-slide-mode/src/styles/core";
```

## Options

### Properties

* contentClass?: `string`
  * default: "markdownContent"
  * markdown content body css classname.
* theme?: `string`
  * default: `null`
  * color scheme theme suffix

### Example
```jsx
// ...

const option = {
  contentClass: "your-awesome-class",
  theme: "your-theme"
}

const view = (state, actions) => (
  <SlideViewer
    state={state.slide}
    actions={actions.slide}
    pages={state.article.body}
    option={option}
  />
)
```

## License

@increments/qiita-slide-mode is MIT licensed. See [LICENSE](LICENSE.md).

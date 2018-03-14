# @increments/qiita-slide-mode

[![Travis CI](https://img.shields.io/travis/increments/qiita-slide-mode/master.svg)](https://travis-ci.org/increments/qiita-slide-mode) [![npm](https://img.shields.io/npm/v/@increments/qiita-slide-mode.svg)](https://www.npmjs.org/package/@increments/qiita-slide-mode)

@increments/qiita-slide-mode includes all the components used in Qiita's Slide Mode.

## Installation

```
npm i @increments/qiita-slide-mode
```

## Usage

on JS file

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

on SCSS file

```scss
@import "@increments/qiita-slide-mode/src/styles/vars"
@import "@increments/qiita-slide-mode/src/styles/core"
```

![](https://user-images.githubusercontent.com/56996/35896152-4054037e-0bfe-11e8-8b50-3e351abe0f60.gif)

## TODO

* Refactor `getBoundingClientRect` usage and reuse in tooltip.
* Make tooltip its own component.
* Make progress bar its own component.
* Use good styles.

## License

@increments/qiita-slide-mode is MIT licensed. See [LICENSE](LICENSE.md).

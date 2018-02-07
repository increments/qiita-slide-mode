# @increments/qiita-slide-mode

@increments/qiita-slide-mode includes all the modules and components that power Qiita's Slide Mode.

## Installation

```
?
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

## TODO

* Refactor getBoundingClientRect usage and reuse in tooltip.
* Make tooltip its own component.
* Make progress bar its own component.
* Use good styles.

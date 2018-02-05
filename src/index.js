import { h, app } from "hyperapp"

import { slide } from "./slide"
import { SlideViewer } from "./slide/SlideViewer"

///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

const state = {
  article: {
    body: [
      `<h1>First Slide</h1><p>This is the first slide.</p>`,
      `<h1>Second Slide</h1><p>This is the second slide.</p>`
    ]
  },
  slide: slide.state // <= Slide
}

const actions = {
  slide: slide.actions // <= Slide
}

const view = (state, actions) => (
  <div>
    <SlideViewer
      state={state.slide}
      actions={actions.slide}
      pages={state.article.body}
    />
  </div>
)

app(state, actions, view, document.body)

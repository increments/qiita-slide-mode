import React from "react"
import { qiitaLogo } from "@increments/qiita-logo"

export default () => (
  <svg
    className="slideMode-Dashboard_logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={qiitaLogo.viewBox}
  >
    <title>Qiita</title>
    <path d={qiitaLogo.path} />
  </svg>
)

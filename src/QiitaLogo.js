import { h } from "hyperapp"
import { qiitaLogo } from '@increments/qiita-logo'

export const QiitaLogo = () => (
  <svg class="slideMode-Dashboard_logo" xmlns="http://www.w3.org/2000/svg" viewBox={qiitaLogo.viewBox}>
    <title>Qiita</title>
    <path d={qiitaLogo.path} />
  </svg>
)

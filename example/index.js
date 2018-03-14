import { h, app } from "hyperapp"
import { slide, SlideViewer } from "../src"

///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

const state = {
  article: {
    body: [
      // Original: https://qiita.com/Qiita/items/4ff5873776992f0511d6
      `<h1>スライドモード</h1><div class="slide_preview_firstSlide_author">by Qiita</div>`,
      `<h2><span id="スライドモードとは" class="fragment"></span><a href="#%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A8%E3%81%AF"><i class="fa fa-link"></i></a>スライドモードとは</h2><p>QiitaやQiita:Teamの投稿をスライド形式のユーザインタフェースで表示することができるモード。</p><p>主に技術系イベントでの発表資料や社内ミーティングの資料作成などに使ってもらうことを想定しています。</p>`,
      `<h2><span id="使い方" class="fragment"></span><a href="#%E4%BD%BF%E3%81%84%E6%96%B9"><i class="fa fa-link"></i></a>使い方</h2><ul><li><a href="http://qiita.com/Qiita/items/c686397e4a0f4f11683d#horizontal-rules---%E6%B0%B4%E5%B9%B3%E7%B7%9A" id="reference-b88db8fb1dc2d92d18ce">Horizontal rules - 水平線</a>でページを区切りながら、投稿をスライドとして表示することができます。</li><li>投稿画面で以下の赤丸の部分にチェックを入れます。</li></ul><p><a href="https://camo.qiitausercontent.com/77be42743122df2b8d0c905b2a971c08e2f0b631/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33333931352f39346231376337392d343933362d393639332d356134372d6162633134376139346331302e6a706567" target="_blank" rel="nofollow noopener"><img width="1320" alt="slidescreenshot.jpeg" src="https://camo.qiitausercontent.com/77be42743122df2b8d0c905b2a971c08e2f0b631/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33333931352f39346231376337392d343933362d393639332d356134372d6162633134376139346331302e6a706567" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/33915/94b17c79-4936-9693-5a47-abc147a94c10.jpeg"></a></p>`,
      `<h3><span id="閲覧方法" class="fragment"></span><a href="#%E9%96%B2%E8%A6%A7%E6%96%B9%E6%B3%95"><i class="fa fa-link"></i></a>閲覧方法</h3><ul><li>投稿の上部に自動挿入される「スライドビュー」でスライド形式で投稿を閲覧</li><li>スライドビューのフルスクリーンボタンをクリックし、フルスクリーンで表示</li></ul><p>の2種類の閲覧方法があります。</p></div>`,
      `<h4><span id="閲覧時のスライド操作" class="fragment"></span><a href="#%E9%96%B2%E8%A6%A7%E6%99%82%E3%81%AE%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E6%93%8D%E4%BD%9C"><i class="fa fa-link"></i></a>閲覧時のスライド操作</h4><table><thead><tr><th style="text-align: left">操作</th><th style="text-align: left">スライドビュー</th><th style="text-align: left">フルスクリーン</th></tr></thead><tbody><tr><td style="text-align: left">次に進む</td><td style="text-align: left">→,（スライド内の右領域を）クリック</td><td style="text-align: left">→, （スライド内の右領域を）クリック, PageDown, Space</td></tr><tr><td style="text-align: left">前に戻る</td><td style="text-align: left">←,（スライド内の左領域を）クリック</td><td style="text-align: left">←, （スライド内の左領域を）クリック, PageUp, Delete</td></tr><tr><td style="text-align: left">下に移動</td><td style="text-align: left">N/A（マウススクロールのみ）</td><td style="text-align: left">↓, （下に移動できる場合）クリック, PageDown, Space</td></tr><tr><td style="text-align: left">上に移動</td><td style="text-align: left">N/A（マウススクロールのみ）</td><td style="text-align: left">↑, （上に移動できる場合） PageUP, Delete</td></tr></tbody></table>`,
      `<p>プログレスバーをクリックしてスライドを移動することもできます。</p><p><a href="https://camo.qiitausercontent.com/4545a1878abb4b9b3e892ebf50759f470561a159/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33333931352f65366466363138652d663563352d623131652d656332632d3265376261363639613138302e6a706567" target="_blank" rel="nofollow noopener"><img width="843" alt="slideprogress.jpg" src="https://camo.qiitausercontent.com/4545a1878abb4b9b3e892ebf50759f470561a159/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33333931352f65366466363138652d663563352d623131652d656332632d3265376261363639613138302e6a706567" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/33915/e6df618e-f5c5-b11e-ec2c-2e7ba669a180.jpeg"></a></p><p>または、 <img alt=":rewind:" class="emoji" height="20" src="https://cdn.qiita.com/emoji/twemoji/unicode/23ea.png" title=":rewind:" width="20"> や <img alt=":fast_forward:" class="emoji" height="20" src="https://cdn.qiita.com/emoji/twemoji/unicode/23e9.png" title=":fast_forward:" width="20"> を使ってもスライドの移動できます。</p>`,
      `<h1><span id="example" class="fragment"></span><a href="#example"><i class="fa fa-link"></i></a>Example:</h1><div class="code-frame" data-lang="js"><div class="highlight"><pre><span class="k">import</span> <span class="nx">axios</span> <span class="k">from</span> <span class="s1">'axios'</span><span class="nx">axios</span><span class="p">.</span><span class="kd">get</span><span class="p">(</span><span class="s1">'https://api.example.com'</span><span class="p">)</span></pre></div></div>`
    ]
  },
  slide: slide.state
}

const actions = {
  slide: slide.actions
}

const view = (state, actions) => (
  <div>
    Slide Mode Demo
    <SlideViewer
      state={state.slide}
      actions={actions.slide}
      pages={state.article.body}
    />
  </div>
)

app(state, actions, view, document.body)

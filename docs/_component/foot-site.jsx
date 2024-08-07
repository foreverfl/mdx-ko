import React from 'react'
import {config} from '../_config.js'

export function FootSite() {
  return (
    <footer className="foot-site">
      <div className="content">
        <div
          className="block"
          style={{display: 'flex', justifyContent: 'space-between'}}
        >
          <div>
            <small>
              MDX는 Amsterdam, Boise 및 전 🌏에서 ❤️로 만들어졌습니다.
            </small>
            <br />
            <small>이 사이트는 당신을 추적하지 않습니다.</small>
            <br />
            <small>MIT © 2017-{new Date().getFullYear()}</small>
          </div>
          <div style={{marginLeft: 'auto', textAlign: 'right'}}>
            <small>
              프로젝트는 <a href={config.gh.href}>GitHub</a>에 있습니다.
            </small>
            <br />
            <small>
              사이트는 <a href={new URL('docs/', config.ghTree).href}>GitHub</a>
              에 있습니다.
            </small>
            <br />
            <small>
              업데이트는 <a href={config.twitter.href}>Twitter</a>에서
              확인하세요.
            </small>
            <br />
            <small>
              업데이트는 <a href="/rss.xml">RSS 피드</a>로 확인하세요.
            </small>
            <br />
            <small>
              후원은 <a href={config.oc.href}>여기에서</a>에서 가능합니다.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useRef } from 'react'
import '../../static/scss/common.scss'

function Layout(props) {
  return (
    <section className={`content ${props.name}`} ref={frame}>
      <div className="row-w">
        <h1>{props.name}</h1>
        {props.children}
      </div>
    </section>
  )
}

export default Layout

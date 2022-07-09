//common

//main
import Main from './main/Main'

//sub

//scss
import './scss/style.scss'

import { Route, Switch } from 'react-router-dom'
import Header from './common/Header'

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Main} />
    </>
  )
}

export default App

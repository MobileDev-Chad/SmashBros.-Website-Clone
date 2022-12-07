import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../common/header/Header"
import Home from "../home/Home"
// import About from "../about/About"
// import Fighters from "../fighters/Fighters"
// import HowtoSmash from "../howtosmash/HowtoSmash"
// import Stages from "../stages/Stages"
// import Items from "../items/Items"
// import Music from "../music/Music"
// import Footer from "../common/footer/Footer"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/fighters' component={Fighters} />
          <Route exact path='/howtosmash' component={HowtoSmash} />
          <Route exact path='/stages' component={Stages} />
          <Route exact path='/items' component={Items} />
          <Route exact path='/music' component={Music} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Pages

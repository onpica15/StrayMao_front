import React, { useState, useEffect } from 'react'
import MyNavbar from './components/common/MyNavbar'
import HomeNavbar from './components/homapage/HP-component/HomeNavbar'
import MyFooter from './components/common/MyFooter'
import MainContent from './components/common/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TestLink from './components/common/TestLink'
import AdoptionTest from './components/adoption/Test'
import AdoptionList from './components/adoption/AdopListPage'
import AdoptionMain from './components/adoption/AdopMainPage'
import AdoptionDetail from './components/adoption/AdopDetailPage'
import CartTest from './components/cart/Test'
import HomeTest from './components/homapage/Test'
import MemberTest from './components/membership/Test'
import SocialTest from './components/social_media/Test'
import StoreTest from './components/store/Test'
import StrayMaoP2 from './components/store/StrayMaoP2'
import StrayMaoP3 from './components/store/StrayMaoP3'
import Try from './components/store/Try'
import MyNavbar from './components/common/MyNavbar'
import MyFooter from './components/common/MyFooter'
import MainContent from './components/common/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TestLink from './components/common/TestLink'
import AdoptionTest from './components/adoption/Test'
import AdoptionList from './components/adoption/AdopListPage'
import AdoptionMain from './components/adoption/AdopMainPage'
import AdoptionDetail from './components/adoption/AdopDetailPage'
import CartTest from './components/cart/Test'
import HomeTest from './components/homapage/Test'
import MemberTest from './components/membership/Test'
import SocialTest from './components/social_media/Test'
import StoreTest from './components/store/Test'
import StrayMaoP2 from './components/store/StrayMaoP2'
import StrayMaoP3 from './components/store/StrayMaoP3'
import Try from './components/store/Try'

function App() {
  const [navbar, setNavbar] = useState(<MyNavbar />)
  const [home, setHome] = useState(false)
  useEffect(() => {
    if (home) {
      setNavbar(<HomeNavbar />)
    } else {
      setNavbar(<MyNavbar />)
    }
  }, [home])

  return (
    <Router>
      <>
        {navbar}
        <MainContent>
          <Switch>
            {/* 注意：要加上網址參數 */}

            <Route exact path="/"></Route>
            <Route path="/test">
              {/*要連線的網頁*/}
              <TestLink />
            </Route>
            <Route path="/adoptionTest">
              {/*要連線的網頁*/}
              <AdoptionTest />
            </Route>
            <Route path="/adoptionMain">
              {/*要連線的網頁*/}
              <AdoptionMain />
            </Route>
            <Route path="/adoptionList">
              {/*要連線的網頁*/}
              <AdoptionList />
            </Route>
            <Route path="/adoptionDetail">
              {/*要連線的網頁*/}
              <AdoptionDetail />
            </Route>
            <Route path="/cartTest">
              {/*要連線的網頁*/}
              <CartTest />
            </Route>
            <Route path="/homeTest">
              {/*要連線的網頁*/}
              <HomeTest setHome={setHome} />
            </Route>
            <Route path="/memberTest">
              {/*要連線的網頁*/}
              <MemberTest />
            </Route>
            <Route path="/socialTest">
              {/*要連線的網頁*/}
              <SocialTest />
            </Route>
            <Route path="/store">
              {/*要連線的網頁*/}
              <StoreTest />
            </Route>
            <Route path="/storeP2">
              {/*要連線的網頁*/}
              <StrayMaoP2 />
            </Route>
            <Route path="/storeP3">
              {/*要連線的網頁*/}
              <StrayMaoP3 />
            </Route>
            <Route path="/try">
              {/*要連線的網頁*/}
              <Try />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App

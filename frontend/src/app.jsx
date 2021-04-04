import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// @views
import HomeView from './views/homeView/homeView';
import ProductView from './views/productView/productView';
import CartView from './views/cartView/cartView';

// @components
import Navbar from './components/navbar/navbar';
import Backdrop from './components/backdrop/backdrop';
import SideDrawer from './components/sideDrawer/sideDrawer';

function App() {

  //  const [count, setCount] = useState(initialCount);
  // 상태 유지 값과 그 값을 갱신하는 함수
  // toggle버튼 설정 > 초기값 false
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>

      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/cart" component={CartView} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

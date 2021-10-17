import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/food/:foodId'>
              <FoodDetails></FoodDetails>
            </Route>
            <Route path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

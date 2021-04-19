import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from './component/AppNavBar'
import UserList from "./component/UserList";
import UserModal from './component/UserModal'
import { Container } from 'reactstrap'

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
           <UserModal />
           <UserList />
        </Container>

      </div>
    </Provider>
  );
}

export default App;
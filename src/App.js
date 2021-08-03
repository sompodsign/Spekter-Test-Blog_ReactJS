import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import PostDetailScreen from './screens/PostDetailScreen';

function App() {
  return (
    <Router>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/post/:id' component={PostDetailScreen} />
        </Container>
        </main>
    </Router>
  );
}

export default App;

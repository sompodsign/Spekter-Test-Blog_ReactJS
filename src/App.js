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
import CreatePostScreen from './screens/CreatePostScreen';

function App() {
  return (
    <Router>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/post/:id' component={PostDetailScreen} />
          <Route path='/create-new' component={CreatePostScreen} />
        </Container>
        </main>
    </Router>
  );
}

export default App;

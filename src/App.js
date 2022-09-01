
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './stylesheets/home.css'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/projects' exact component={Projects}/>
          <Route path='/courses' exact component={Courses}/>
          <Route path='/contact' exact component={Contact}/>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
           <Route path='/' exact component={Home}/>
           <Route path='/projects' exact component={Projects}/>
           <Route path='/courses' exact component={Courses}/>
           <Route path='/contact' exact component={Contact}/>
         </BrowserRouter>
    </div>
  );
}

export default App;

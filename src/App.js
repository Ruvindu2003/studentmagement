import logo from './logo.svg';
import './App.css';
import Home from './Home';
import StudentView from './componenet/Student/StudentView';

function App() {
  return (
    <div className="App">
    <h1> Student Mangement System </h1>
        <Home/>
        <StudentView/>
    </div>
  );
}

export default App;

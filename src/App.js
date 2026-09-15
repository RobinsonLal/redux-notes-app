
import './App.css';
import CreateNote from './components/CreateNote';
import ListNote from './components/ListNote';

function App() {
  return (
    <div className='appContainer' >
      <h1>Notes Application</h1>
      <CreateNote/>
      <ListNote/>
    </div>
  );
}

export default App;

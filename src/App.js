import './App.css';
import Home from './pages/Home';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter>
        <Home/>
      </AppRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { Route,Routes } from "react-router-dom";
import { history } from './redux/configureStore';
import { ConnectedRouter } from "connected-react-router";
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
function App() {
  return (
   <div style={{margin:0,padding:0}}>
    <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/detail" element={<DetailPage/>} />
    </Routes> 
   </div>
  
   
   
  );
}

export default App;

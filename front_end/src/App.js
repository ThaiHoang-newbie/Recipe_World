 import './App.css';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import LeftSidebar from './Components/LeftSidebar';
 import Newpost from './Page/Newpost.jsx';
 import Friendpost from './Page/Friendpost.jsx';
 import Thehotpost from './Page/Thehotpost.jsx';
 

 const App = () => {
  return (
    <BrowserRouter>
      <LeftSidebar>
        <Routes>
          <Route path="/" element={<Newpost />} />
          <Route path="/friendpost" element={<Friendpost />} />
          <Route path="/thehotpost" element={<Thehotpost />} />
         
        </Routes>
      </LeftSidebar>
    </BrowserRouter>
  );
};

export default App;

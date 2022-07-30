import './App.css';
import Header from './components/header';
import NotesListPage from './pages/notes-list-page'
import { Route, Routes } from 'react-router-dom';
import NotePage from './pages/note-page';

function App() {
  return (
    
      <div className="container dark">
        <div className='app'>
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPage />}/>
          <Route path='/note/:id' element={<NotePage />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

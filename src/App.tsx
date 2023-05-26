import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import Base from './layout/Base';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Base />} />
        <Route path='/movie' element={ <h1>Render a selected movie</h1> } />

      </Routes>
    </>
  )
}

 

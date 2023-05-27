import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import Base from './layout/Base';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Base />}>
          <Route path='movies' element={ <h1>Render a selected movie</h1> } />
          <Route path='topcharts' element={ <h1>Render Charts</h1> } />
          <Route path='genres' element={ <h1>Render Genres</h1> } />
          <Route path='newReleases' element={ <h1>Render new releases</h1> } />
          <Route path='favorites' element={ <h1>Render favorites</h1> } />
          <Route path='profile' element={ <h1>Render Profile</h1> } />
          <Route path='info' element={ <h1>Render info</h1> } />
          <Route path='*' element={ <h1>fallback</h1> } />
        </Route>
      </Routes>
    </>
  )
}

 

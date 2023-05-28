import {Routes, Route} from 'react-router-dom';
import Base from './layout/Base';
import Movies from './pages/Movies';
import { register } from 'swiper/element';
import SelectedMovie from './pages/SelectedMovie';
export default function App() {
  
register();

return (
  <>
    <Routes>
      <Route path='/' element={<Base />}>
        <Route path='' element={ <Movies /> } />
        <Route path='/movie/:id' element={ <SelectedMovie /> } />
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

 

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './App';
import Join from './pages/Join';
import Register from './pages/Register';
import Presentation from './pages/Presentation';

export default() => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<App />} />
                <Route path={'/join'} element={<Join />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/tour'} element={<Presentation />} />
            </Routes>
        </BrowserRouter>
    )
    
}
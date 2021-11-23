import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './App';
import Join from './pages/Join';
import Register from './pages/Register';
import Presentation from './pages/Presentation';

// redux
import { Provider } from 'react-redux';
import store from './store';

export default() => {

    return(
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path={'/'} element={<App />} />
                    <Route path={'/tour'} element={<Presentation />} />
                    <Route path={'/join'} element={<Join />} />
                    <Route path={'/register'} element={<Register />} />
                </Routes>
            </Router>
        </Provider>
    )
    
}
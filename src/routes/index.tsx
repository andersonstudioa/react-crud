import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Pages from '../pages';

import { RoutesConfig } from './config'

const RoutesApp = () => {

    return (
        <>
            <Router>
                <Routes>
                    {RoutesConfig.map(route =>
                        <Route
                            path={route.path}
                            element={<Pages>{route.element}</Pages>}
                            key={route.path}
                        />
                    )}
                </Routes>
            </Router>
        </>
    )
}

export default RoutesApp
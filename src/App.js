import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import classNames from 'classnames/bind';

import { AppProvider } from './projects/stripe/context';

const cx = classNames.bind();
function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <AppProvider>
                    <Routes>
                        {publicRoutes.map((rou, index) => {
                            const Page = rou.component;
                            return <Route key={index} path={rou.path} element={<Page />} />;
                        })}
                        <Route path="*" element={<h1>Error</h1>}></Route>
                    </Routes>
                </AppProvider>
            </div>
        </Router>
    );
}

export default App;

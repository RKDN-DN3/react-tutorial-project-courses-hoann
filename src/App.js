import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import classNames from 'classnames/bind';

const cx = classNames.bind();
function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <Routes>
                    {publicRoutes.map((rou, index) => {
                        const Page = rou.component;
                        return <Route key={index} path={rou.path} element={<Page />} />;
                    })}
                    <Route path="*" element={<h1>Page Not Found</h1>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

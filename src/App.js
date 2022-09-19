import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import classNames from 'classnames/bind';
import { Fragment } from 'react';

const cx = classNames.bind();
function App() {
    return (
        <Router>
            <div className={cx('app')}>
                <Routes>
                    {publicRoutes.map((rou, index) => {
                        const Page = rou.component;
                        let Layout = Fragment;
                        if (rou.layout) {
                            Layout = rou.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={rou.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    <Route path="*" element={<h1>Page Not Found</h1>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

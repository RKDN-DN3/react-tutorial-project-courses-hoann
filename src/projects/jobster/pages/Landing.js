import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Landing() {
    return (
        <div>
            <nav>
                <img src={logo} alt="jobster logo" className="logo" />;
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy
                        craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={''} alt="job hunt" className="img main-img" />
            </div>
        </div>
    );
}

export default Landing;

import './landingPage.css';
import { Link } from 'react-router-dom';
import backg from '../assets/backg.jpg';
function LandingPage() {
    return (
        <>
            <nav>
                <div className="logo"><i className="ri-shapes-fill"></i>Exam Portal</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <div className="submit-button1">
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="hero-section" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backg}) center/cover no-repeat`
            }}>
                <h1>Welcome to Exam Portal</h1>
                <p>Your one-stop solution for online exams and progress tracking.</p>
                <button>Explore</button>
            </div>

            <div className="section">
                <h2>Our Features</h2>
                <p>Discover the benefits of using our exam portal.</p>
                <div className="gridContainer">
                    <div className="gridContainer1">
                        <i className="ri-file-line"></i>
                        <h5>Wide Range of Exams</h5>
                        <p>Access a diverse selection of exams across various subjects.</p>
                    </div>
                    <div className="gridContainer1">
                        <i className="ri-line-chart-line"></i>
                        <h5>Progress Tracking</h5>
                        <p>Monitor your performance and identify areas for improvement.</p>
                    </div>
                    <div className="gridContainer1">
                        <i className="ri-time-line"></i>
                        <h5>Flexible Scheduling</h5>
                        <p>Take exams at your convenience with flexible scheduling options.</p>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Why Choose Us?</h2>
                <p>Explore the unique benefits of our platform.</p>
                <div className="gridContainer">
                    <div className="gridContainer1">
                        <i className="ri-quill-pen-ai-line"></i>
                        <h5>User-Friendly Interface</h5>
                        <p>Navigate our platform with ease, thanks to our intuitive design.</p>
                    </div>
                    <div className="gridContainer1">
                        <i className="ri-rotate-lock-line"></i>
                        <h5>Secure Testing Environment</h5>
                        <p>Rest assured that your exams are conducted in a safe and secure environment.</p>
                    </div>
                    <div className="gridContainer1">
                        <i className="ri-exchange-funds-line"></i>
                        <h5>Comprehensive Performance Analysis</h5>
                        <p>Gain valuable insights into your performance with detailed analytics.</p>
                    </div>
                </div>
            </div>

            <footer>
                <ul>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Services</li>
                </ul>
                &copy; 2025 Exam Portal. All rights reserved.
            </footer>
        </>
    )
};

export default LandingPage;

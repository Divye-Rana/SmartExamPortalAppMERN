import './signUp.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils'
import axios from 'axios'
function SignUp() {

    const [registrationData, setRegistrationData] = useState({
        name:'',
        email:'',
        password:'',
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/signUp", registrationData);
            const {success, message} = response.data;
            if(success == true) {
                handleSuccess('Registered Successfully');
                setTimeout(()=>{
                    navigate('/login');
                }, 1500);
            }
            else {
                console.log(message);
            }
        }
        catch(err) {
            console.log(err);
            const details = err.response?.data?.error?.details?.[0]?.message;
            const message = err.response?.data?.message;

            const errorMessage = details || message || err.message || "Something went wrong";
            return handleError(errorMessage);
        }
        setRegistrationData({
            name:'',
            email:'',
            password:'',
        })
    }
    const handleRegistration = (e) => {
        const {name, value} = e.target;
        setRegistrationData((prevData)=> ({
            ...prevData,
            [name]:value,
        }))
    }
    return (
        <>
            <nav>
                <div className="logo"><i className="ri-shapes-fill"></i>Exam Portal</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
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

            <div className="container">
                <div className="container-head">
                    <h1>Create account</h1>
                </div>

                <form onSubmit={handleSubmit} className="Details">
                    <span style={{ display: "block" }}>Username</span>
                    <input 
                    placeholder="choose a username"
                     name="name"
                    value={registrationData.name}
                    onChange={handleRegistration}
                     />
                    <span style={{ display: "block" }}>Email</span>
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={registrationData.email}
                    onChange={handleRegistration}
                    />
                    
                    <span style={{ display: "block" }}>Password</span>
                    <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={registrationData.password}
                    onChange={handleRegistration}
                    />
                    <div className="submit-button">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="already-account">
                        Already a user? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}

export default SignUp;
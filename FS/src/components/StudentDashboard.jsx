import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from 'react-toastify'
import './studentDashBoard.css';
function StudentDashboard() {
  const [loggedInUser, setLoggedInUser] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, [])
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('expireTime');
        handleSuccess('User Loggedout');
        setTimeout(()=>{
            navigate("/");
        }, 1000);
    } 

  return (
    <div className="dashboard">
      <nav>
      <div className="logo"><i className="ri-shapes-fill"></i>Exam Portal</div>
      <ul>
        <li>{loggedInUser}</li>
        <li>
          <button type='submit' onClick={handleLogout} className="submit-button-student">Logout</button>
        </li>
      </ul>
      </nav>

      <section>
        <h2>Available Exams</h2>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Subject</th>
                <th>Duration</th>
                <th>Start Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Math Exam 1</td>
                <td className="link">Mathematics</td>
                <td>60 mins</td>
                <td>2024-03-15</td>
                <td className="action">Start</td>
              </tr>
              <tr>
                <td>Science Exam 1</td>
                <td className="link">Science</td>
                <td>45 mins</td>
                <td>2024-03-16</td>
                <td className="action">Start</td>
              </tr>
              <tr>
                <td>English Exam 1</td>
                <td className="link">English</td>
                <td>50 mins</td>
                <td>2024-03-17</td>
                <td className="action">Start</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Past Results */}
      <section>
        <h2>Past Results</h2>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Subject</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Math Exam 1</td>
                <td className="link">Mathematics</td>
                <td>85/100</td>
                <td>2024-02-15</td>
              </tr>
              <tr>
                <td>Science Exam 1</td>
                <td className="link">Science</td>
                <td>78/100</td>
                <td>2024-02-16</td>
              </tr>
              <tr>
                <td>English Exam 1</td>
                <td className="link">English</td>
                <td>92/100</td>
                <td>2024-02-17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Upcoming Exams */}
      <section>
        <h2>Upcoming Exams</h2>
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>History Exam 1</td>
                <td className="link">History</td>
                <td>2024-04-05</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Geography Exam 1</td>
                <td className="link">Geography</td>
                <td>2024-04-10</td>
                <td>11:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default StudentDashboard;

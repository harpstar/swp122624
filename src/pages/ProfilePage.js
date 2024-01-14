import React, {useState} from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip, Card, CardBody
} from "reactstrap";
import { useNavigate } from "react-router-dom";

// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";

import {studentData} from '../assets/data';

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  const navigate = useNavigate();
  const [loggedInUserId] = useState(() => window.localStorage.getItem('logged-in-user') || '');
  const student = loggedInUserId ? studentData[loggedInUserId - 1] : null;
  // const student = studentData[13];

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  React.useEffect(() => {
    if (!loggedInUserId || !student) {
      navigate('/login');
    }
  }, [loggedInUserId, navigate, student]);


  if (loggedInUserId) {
    return (
      <>
        <ExamplesNavbar coloredNav />
        <div className="wrapper">
          <ProfilePageHeader studentData={student} />
          <div className="section">
            {/*<Container>*/}
              <div className='profile-page__interests-container'>
                <div className='profile-page__lists-container'>
                  <div className='lists'>
                    {
                      student.answers && (Object.entries(student.answers).map((answer, index) => (
                        <React.Fragment key={index}>
                            <h4>{answer[0]}</h4>
                            <ul>
                              {answer[1].map((thing, ind) => <li key={ind}>{thing}</li>)}
                            </ul>
                        </React.Fragment>

                      )))
                    }
                  </div>
                </div>
                <Card className="profile-page__lists-container profile-page__links-container">
                  <h5 className="profile-page-header__description">
                    {student.bio}
                  </h5>
                </Card>
              </div>
          </div>
          {/*<DefaultFooter />*/}
        </div>
      </>
    );
  }
}

export default ProfilePage;

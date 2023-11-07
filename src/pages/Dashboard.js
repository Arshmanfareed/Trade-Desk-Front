import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserInfo from '../components/UserInfo';
import { useAuth } from '../components/AuthContext';


function Dashboard() {
    const { authenticated, logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        
        if (!authenticated) {
            window.location.href = '/login'; 
            return null;
          }
    }, []); 

    const handleLogout = () => {       
        localStorage.removeItem('token');
        navigate('/login');
    };
   

    return (
        <div>
            {authenticated ? (               
                <section className="login py-5 my-5">
                <Container fluid>
                    <>           
                        <Row className="row align-items-center d-flex">
                            <Col lg={12} sm={12} className="form_col">
                            <h1>You are logged in!</h1>
                            <UserInfo />
                            
                            <button onClick={logout}>Logout</button>                                   
                            </Col>                            
                        </Row>                               
                    </>
                </Container>
                </section>
            ) : null}
        </div>
    );
}

export default Dashboard;

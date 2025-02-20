import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Badge,
  Spinner
} from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import AddressManager from "../Address Manager/AddressManager"; // Import the AddressManager component

const UserProfile = () => {
  const { isAuthenticated, userData, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalData, setModalData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && userData?.user?.id) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, userData]);

  // Fetch User Data
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/getUserById/${userData.user.id}`,
        { withCredentials: true }
      );
      setUser(response.data || {});
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error.message);
      setUser({});
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (content, data) => {
    setModalContent(content);
    setModalData(Array.isArray(data) ? data : []);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
    setModalData(null);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="text-center mt-5">
        <h4>Please log in to view your profile.</h4>
        <Button onClick={() => navigate('/signin')}>Login</Button>
      </div>
    );
  }

  return (
    <Container fluid className="py-4">
      {user.map((item, index) => (
        <Row key={index}>
          <Col xs={12} md={4} className="mb-4">
            <Card>
              <Card.Header className="bg-black text-white text-center">
                <h5>User Account Overview</h5>
              </Card.Header>
              <Card.Body>
                <div className="col-md-7">
                  <p className="text-capitalize">
                    <strong>Username:</strong> {item.first_name} {item.last_name}
                  </p>
                  <p><strong>Email:</strong> {item.email || "N/A"}</p>
                  <p><strong>Contact:</strong> +91-{item.phone || "N/A"}</p>
                </div>
                <hr />
                <p>
                  <strong>Reward Points:</strong>{" "}
                  <Badge bg="success">{user.rewardPoints ?? 0} points</Badge>
                </p>
                <Button variant="dark" onClick={() => handleShowModal('Edit Account Overview')}>
                  Edit Overview
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Header className="bg-dark text-white">
                <h5>Account Sections</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6>Order History</h6>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => handleShowModal('Order History', user.orders ?? [])}
                  >
                    Manage
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6>Saved Addresses</h6>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => handleShowModal('Saved Addresses')}
                  >
                    Manage
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6>Payment Methods</h6>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => handleShowModal('Payment Methods', user.paymentMethods ?? [])}
                  >
                    Manage
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <h6>Rewards & Referrals</h6>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => handleShowModal('Rewards & Referrals', user.referrals ?? [])}
                  >
                    Manage
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <Button variant="danger" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ))}

      {/* Modal for Saved Addresses using the AddressManager component */}
      <Modal
        show={showModal && modalContent === "Saved Addresses"}
        onHide={handleCloseModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Embed the AddressManager modal (it manages its own state) */}
          <AddressManager userId={userData.user.id} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for other content (like Order History, Payment Methods, etc.) */}
      <Modal
        show={showModal && modalContent !== "Saved Addresses"}
        onHide={handleCloseModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent === "Order History" && user.orders ? (
            <Row>
              {/* Render order history here */}
            </Row>
          ) : (
            <p>No data available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const AddressManager = ({ userId, onSelectAddress, selectedAddress }) => {
    const [addresses, setAddresses] = useState([]);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [currentAddress, setCurrentAddress] = useState({
        name: "",
        phone: "",
        address_type: "",
        flat: "",
        floor: "",
        area: "",
        landmark: "",
        state: "",
        postal_code: "",
    });

    // Fetch user addresses when component mounts or when userId changes
    const fetchUserAddresses = async () => {
        try {
            if (!userId) return;
            const response = await axios.get(`${baseUrl}/getAddressById/${userId}`);
            setAddresses(response.data);
        } catch (error) {
            console.error("Error fetching addresses:", error);
        }
    };

    useEffect(() => {
        fetchUserAddresses();
    }, [userId]);

    // Handle adding a new address or updating an existing one
    const handleAddOrUpdateAddress = async () => {
        try {
            if (editingAddress) {
                // Update address
                await axios.put(`${baseUrl}/updateAddressById/${editingAddress.address_id}`, {
                    ...currentAddress,
                });
            } else {
                // Add new address; ensure userId is provided
                await axios.post(`${baseUrl}/create/address`, {
                    user_id: userId,
                    ...currentAddress,
                });
            }
            // Reset modal state and form data
            setShowAddressModal(false);
            setEditingAddress(null);
            setCurrentAddress({
                name: "",
                phone: "",
                address_type: "",
                flat: "",
                floor: "",
                area: "",
                landmark: "",
                state: "",
                postal_code: "",
            });
            fetchUserAddresses();
        } catch (error) {
            console.error("Error adding/updating address:", error);
        }
    };

    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setCurrentAddress(address);
        setShowAddressModal(true);
    };

    const handleDeleteAddress = async (addressId) => {
        try {
            await axios.delete(`${baseUrl}/deleteAddressById/${addressId}`);
            setAddresses(addresses.filter((address) => address.address_id !== addressId));
        } catch (error) {
            console.error("Error deleting address:", error);
        }
    };

    return (
        <Container>
            <Row className="d-flex justify-content-end mb-3">
                <Button variant="dark" onClick={() => setShowAddressModal(true)}>
                    <FaPlus className="mb-1" /> Add New Address
                </Button>
            </Row>
            <Row>
                {addresses.length > 0 ? (
                    addresses.map((address, index) => (
                        <Col md={6} key={index} className="mb-3">
                            <Card className="p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>{address.name}
                                        <span className="ms-3">
                                            <MdEdit
                                                className="text-primary cursor-pointer me-3"
                                                onClick={() => handleEditAddress(address)}
                                            />
                                            <MdDelete
                                                className="text-danger cursor-pointer"
                                                onClick={() => handleDeleteAddress(address.address_id)}
                                            />
                                        </span>
                                    </p>
                                </div>
                                <p className="mb-0" style={{ fontSize: "14px" }}>{address.phone}</p>
                                <strong>{address.address_type}:</strong>
                                <p>
                                    <strong>Area:</strong> {address.area}, <strong>Flat:</strong> {address.flat},{" "}
                                    <strong>State:</strong> {address.state}, <strong>PinCode:</strong> {address.postal_code}
                                </p>

                                {onSelectAddress && (
                                    <Button
                                        variant={selectedAddress === address.address_id ? "dark" : "outline-dark"}
                                        onClick={() => onSelectAddress(address.address_id)}
                                    >
                                        {selectedAddress === address.address_id ? "Selected" : "Select"}
                                    </Button>
                                )}
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No addresses available.</p>
                )}
            </Row>

            {/* Modal for adding/editing an address */}
            <Modal
                show={showAddressModal}
                onHide={() => {
                    setShowAddressModal(false);
                    setEditingAddress(null);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{editingAddress ? "Edit Address" : "Add Address"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.area}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, area: e.target.value })}
                                placeholder="Enter Area"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address Type</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.address_type}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, address_type: e.target.value })}
                                placeholder="Enter Address Type"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.name}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, name: e.target.value })}
                                placeholder="Enter Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.phone}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, phone: e.target.value })}
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Flat</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.flat}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, flat: e.target.value })}
                                placeholder="Enter Flat Number"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Floor</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.floor}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, floor: e.target.value })}
                                placeholder="Enter Floor"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Landmark</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.landmark}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, landmark: e.target.value })}
                                placeholder="Enter Landmark"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.state}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, state: e.target.value })}
                                placeholder="Enter State"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentAddress.postal_code}
                                onChange={(e) => setCurrentAddress({ ...currentAddress, postal_code: e.target.value })}
                                placeholder="Enter Postal Code"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShowAddressModal(false);
                            setEditingAddress(null);
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddOrUpdateAddress}>
                        {editingAddress ? "Update" : "Add"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AddressManager;

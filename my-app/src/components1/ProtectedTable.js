import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ProtectedTable = ({ user }) => {
  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState({
    id: '',
    name: '',
    DOB: '',
    email: '',
    pass: ''
  });
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John', DOB: '11/04/2015', email: 'Jhon_86@gmail.com', pass: '*******' },
    { id: 2, name: 'Smith', DOB: '1/1/2000', email: 'SmithLohn@gmail.com', pass: '*******' },
    { id: 3, name: 'Jake', DOB: '10/1/1025', email: 'Jake85@gmail.com', pass: '*******' },
    { id: 4, name: 'Alen', DOB: '5/3/2025', email: 'Alen123@gmail.com', pass: '*******' },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setRowData(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRowData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    const updatedTableData = tableData.map(item => {
      if (item.id === rowData.id) {
        return rowData;
      }
      return item;
    });
    setTableData(updatedTableData);
    handleClose();
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.DOB}</td>
              <td>{item.email}</td>
              <td>{item.pass}</td>
              <td><Button variant="primary" onClick={() => handleShow(item)}>Update User</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" name="id" value={rowData.id} disabled />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={rowData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="text" name="DOB" value={rowData.DOB} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={rowData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formPass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="pass" value={rowData.pass} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProtectedTable;

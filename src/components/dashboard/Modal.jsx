import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalApp = (props) => {
    
    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title style={{textTransform: 'uppercase'}}>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { props.children }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}> Cancel </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalApp; 
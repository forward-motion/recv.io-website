import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../../styles/dashboard/Modal.scss';

const ModalApp = (props) => {
    
    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Body>
                <Modal.Title style={{ textTransform: 'uppercase' }}>{props.name}</Modal.Title>
                { props.children }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}> Cancel </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalApp; 
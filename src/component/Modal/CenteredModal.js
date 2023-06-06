import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from '../Accordion/Accordion';
import style from "./CenteredModal.module.css"

function CenteredModal(props) {
    console.log(props)
  return (
    <Modal
    {...props}
    
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/*<h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
  </p>*/}
  <div className={style.accorodianScroll}>
  <Accordion/>
  </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CenteredModal

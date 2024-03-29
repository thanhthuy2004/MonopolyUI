import React, { useState } from 'react';

import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const SelectRoomModal = ({ showModal, setShowModal, showJoinRoomModal, setShowJoinRoomModal }) => {
    const rooms = ["Room 1", "Room abc", "Room ghj"];
   
    // Hàm xử lý khi ấn nút đóng modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const joinRoomModal = () => {
        setShowModal(false);
        setShowJoinRoomModal(true);
    };
    const closeJoinRoomModal = () => {
        setShowJoinRoomModal(false);
    };
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial', height: 'auto' }}
        >
            {showModal && (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Chọn Phòng</Modal.Title>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                    </Modal.Header>

                    <Modal.Body >
                        <div className="listRoom">
                            {rooms.map((room, index) => (
                                <button key={index} className="room" onClick={joinRoomModal}>{room}</button>
                            ))}
                        </div>
                    </Modal.Body>

                </Modal.Dialog>
            )}
            {showJoinRoomModal && (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Tham gia</Modal.Title>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeJoinRoomModal}></button>
                    </Modal.Header>

                    <Modal.Body >
                        <div className="createRoom">

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nhập password"
                                className="mb-3"
                            >
                                <Form.Control type="password" placeholder="Nhập password" />
                            </FloatingLabel>

                            <Button className='joinRoom'>Vào</Button>

                        </div>
                    </Modal.Body>
                </Modal.Dialog>
            )}
        </div>
    );
}
export default SelectRoomModal;
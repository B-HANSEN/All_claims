import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const Modal = ({ children }) => {
	return createPortal(
		<div className='ModalContents'>{children}</div>,
		document.getElementById('modal_root')
	);
};

export default Modal;

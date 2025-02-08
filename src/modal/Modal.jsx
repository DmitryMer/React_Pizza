import './modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ modalActive, setModalActive, text }) => {
    return (
        <div className={modalActive ? 'modal' : 'modal active'} onClick={() => setModalActive(true)}>
            <div className='modal-content__cross'>&#10006;</div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Modal
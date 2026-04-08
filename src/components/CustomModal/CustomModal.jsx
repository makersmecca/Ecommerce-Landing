import "./CustmModal.scss";

const CustomModal = ({ isOpen, onClose, heading, body, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <img src="/icons/closeIcon-black.svg" height={24} width={24} />
        </button>
        {heading && <div className="modal-heading">{heading}</div>}
        {body && <div className="modal-body">{body}</div>}
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};
export default CustomModal;

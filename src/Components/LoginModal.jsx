import '../CSS/LoginModal.css';

export default function Modal({ show, handleClose }) {
  if (show) {
    return (<>
      <div className="modalBackground"></div>
    </>);
  } else {
    return (null);
  }
}

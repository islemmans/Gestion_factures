import './Modal.css';
import './App';

function Modal({closeModal}){
    return(
        <div className="modal">
            <div className="overlay">                
                <div className="modal-content">
                  <div className='modal-title'>
                    <button className="close-modal" onClick={()=> closeModal(false)}>X</button>
                    <h1>Bonjour</h1>
                  </div>
                  <div className='modal-body'>
                    <p>jbduqfpoqf,pqùfl;fpmù</p>
                  </div>
                  <div className='modal-footer'>
                    <button>Ajouter</button>
                    <button>Supprimer</button>
                  </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
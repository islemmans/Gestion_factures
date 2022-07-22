import './Modal.css';
import './App';
import React, {useState,useEffect} from 'react';
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


/*export default function Modal(props) {


    function close() {
      console.log("close");
      props.modalElement.current.style.display = 'none';
  }


useEffect(() => {
    props.buttonOpen.current.onclick = open;
});
  function open() {
    console.log("open");
      props.modalElement.current.style.display = 'block';
  }

  function addPerson(e) {
    e.preventDefault();
    console.log('Add person !!', e.target.name.value);
    props.modalElement.current.style.display = 'none';
}

return (
    <div>
        <h1>Adding a new Person</h1>
        <form id='personForm' onSubmit={e => props.addPerson(e)}>
            <p>name<br/><input placeholder="Enter name" name="name" required="required"/></p>
            <p>password
                <br/><input type="password" name="password" required="required"/></p>
            <div id="buttons">
                <button type="submit">OK</button>
                <button type="button" onClick={close}>Cancel</button>
            </div>
        </form>
    </div>
);
}*/
export default Modal;

import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../sousmenu/Empdossier.css";
import data from "../mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Axios from 'axios';
const Empdossier = ({closeModal}) => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
   
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  const [ nomdossier ,setnomdossier ] =useState('');
  const submitf = () =>{
    Axios.post('http://localhost:3001',{
      nomdossier:nomdossier,
    }).then(()=>{
       alert("successful insert")
      });
    };
  return (
  <div className="modal">
  <div className="overlay">
      <div className="modal-content">
        <div className='modal-title'>
          <button className="close-modal" onClick={()=> closeModal(false)}>X</button>
          <h4>Emplacement dossier</h4>
        <div className="table">
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Ibelle</th>
              
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <form onSubmit={(handleAddFormSubmit)} >
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Nom de dossier..."
          onChange={(handleAddFormChange)}
        
        />
       
        <button type="submit" >Ajouter</button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Empdossier;

import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Modifier
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

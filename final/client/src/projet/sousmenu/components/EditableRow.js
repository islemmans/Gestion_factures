import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Nom de dossier"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
     
        <button type="submit">Enrigestrer</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

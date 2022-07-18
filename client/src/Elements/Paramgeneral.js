import './Paramgeneral.css';

function Paramgeneral({closeModal}){
    return(
        <div>
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                  <div className='modal-title'>
                    <button className="close-modal" onClick={()=> closeModal(false)}>X</button>
                    <h1>Mise à jour des paramètres</h1>
                  </div>
                  <div className='modal-body'>
                    <form className='paramgeneral-form'>
                        <label for="Timbrefiscale">Timbre fiscale:</label>
                        <input id="Timbrefiscale" type="number"></input>
                        <button>Valider</button> <br/>
                        <label for="Tva">TVA:</label>
                        <input id="Tva" type="number"></input>
                        <button>Valider</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>

        </div>

    );
};
export default Paramgeneral;
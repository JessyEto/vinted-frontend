import { Navigate, useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const Publish = ({ token }) => {
  const navigate = useNavigate();
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [marque, setMarque] = useState('');
  const [taille, setTaille] = useState('');
  const [couleur, setCouleur] = useState('');
  const [etat, setEtat] = useState('');
  const [lieu, setLieu] = useState('');

  const [prix, setPrix] = useState(0);
  const [picture, setPicture] = useState();

  const handleSubmitOffer = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    // push body data as formData
    formData.append('title', titre);
    formData.append('description', description);
    formData.append('brand', marque);
    formData.append('size', taille);
    formData.append('color', couleur);
    formData.append('condition', etat);
    formData.append('city', lieu);
    formData.append('price', prix);
    formData.append('picture', picture);
    try {
      const response = await axios.post(
        'https://vinted-api-jess.herokuapp.com/offer/publish',
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        navigate('/');
      }
    } catch (error) {
      alert(error.response);
    }
  };

  return token ? (
    <div className="container-publish">
      <form className="container publish" onSubmit={handleSubmitOffer}>
        <h2>Vends ton article</h2>
        <div className="picture-upload">
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <div>
            <span>Titre</span>
            <input
              type="text"
              name="titre"
              placeholder="ex: Chemise mao verte"
              onChange={(event) => {
                setTitre(event.target.value);
              }}
            />
          </div>
          <div>
            <span>D??cris ton article</span>
            <textarea
              name="description"
              id="textarea-publish"
              cols="30"
              rows="4"
              placeholder="ex: port?? quelquesfois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div>
          <div>
            <span>Marque</span>
            <input
              type="text"
              name="marque"
              placeholder="ex: Hugo Boss"
              onChange={(event) => {
                setMarque(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Taille</span>
            <input
              type="text"
              name="taille"
              placeholder="ex: M/45/12"
              onChange={(event) => {
                setTaille(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Couleur</span>
            <input
              type="text"
              name="couleur"
              placeholder="ex: Bleu"
              onChange={(event) => {
                setCouleur(event.target.value);
              }}
            />
          </div>
          <div>
            <span>??tat</span>
            <input
              type="text"
              name="etat"
              placeholder="ex: Neuf sans ??tiquette"
              onChange={(event) => {
                setEtat(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Lieu</span>
            <input
              type="text"
              name="lieu"
              placeholder="ex: Paris"
              onChange={(event) => {
                setLieu(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <span>Prix</span>
            <input
              type="number"
              name="prix"
              placeholder="ex: 45,70???"
              onChange={(event) => {
                setPrix(event.target.value);
              }}
            />
          </div>
          <div className="checkbox-item">
            <div>
              <input type="checkbox" name="checkboxlast" />
              <span>Je suis int??ress??(e) par les ??changes</span>
            </div>
          </div>
        </div>
        <input
          className="submit-article"
          type="submit"
          name="ajouter-article"
          value="Ajouter"
        />
      </form>
    </div>
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Publish;

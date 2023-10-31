import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard.jsx";

export default function CallApi() {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/geodude").then((data) => {
      console.log(data);
      const unpackedData = data.data;
      console.log(unpackedData);
      setPokemon([...pokemon, unpackedData]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).then((data) => {
      let info = data.data;
      setPokemon([...pokemon, info]);
    });
  };

  return (
    <>
      <h1>Pokemon Incoming!</h1>
      <input
        type="text"
        value={input}
        placeholder="Pokemon Name"
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="submit" onClick={handleSubmit} />

      {pokemon && pokemon.length > 0 ? (
        pokemon.map((avatar) => (
          <div key={avatar.id}>
            <PokeCard {...avatar} />
          </div>
        ))
      ) : (
        <p>No Pokemon here</p>
      )}
    </>
  );
}

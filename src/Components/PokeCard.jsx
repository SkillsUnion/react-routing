export default function PokeCard(props) {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.sprites.front_default} alt={props.name} />
      <p>{props.weight}</p>
    </div>
  );
}

import "../components/ListCharacter.css"

const ListCharacter = ({data}) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>
            Nome: <span>{item.name}</span>
          </p>
          <p>Espécie:  <span>{item.species}</span></p>
          <p>Visto pela primeira vez:  <br /><span>{item.origin.name}</span></p>
          <p>Visto pela ultima vez:  <br /><span>{item.location.name}</span></p>
        </li>
      ))}
    </ul>
  );
};

export default ListCharacter;

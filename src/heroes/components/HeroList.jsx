import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publish }) => {
  const heroes = getHeroesByPublisher(publish);

  return (
    <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};

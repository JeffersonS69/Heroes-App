import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroesById(heroId), [heroId])

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const arrayCharacters = hero.characters.split(",");

  const navigate = useNavigate();

  const onNavigateBack = () => {
    if (hero.publisher.includes("Marvel Comics")) {
      return navigate("/marvel", { replace: true });
    }

    if (hero.publisher.includes("DC Comics")) {
      return navigate("/dc", { replace: true });
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInDown"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <ul>
          {arrayCharacters.map((character) => (
            <li key={character}>{character}</li>
          ))}
        </ul>
        <button
          className="btn btn-outline-primary"
          onClick={() => onNavigateBack()}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

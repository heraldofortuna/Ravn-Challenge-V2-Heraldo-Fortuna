import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import AllPeopleQuery from "../services/AllPeopleQuery";
import Header from "../components/Header";
import Error from "../components/Error";
import Loading from "../components/Loading";
import CharacterDetails from "../components/CharacterDetails";

const Home = () => {
  const { loading, error, data } = AllPeopleQuery();
  const people = data?.allPeople.people;
  const [characterID, setCharacterID] = useState(null);
  const getCharacterDetails = (characterId) => setCharacterID(characterId);
  const getCharacterList = () => setCharacterID(null);

  return (
    <>
      <Header
        title={
          characterID === null
            ? "People of Star Wars"
            : people.find((character) => character.id === characterID).name
        }
        canReturn={characterID !== null}
        handleReturn={getCharacterList}
      />
      <main>
        <div className="container">
          {error ? (
            <Error />
          ) : loading ? (
            <Loading />
          ) : characterID === null ? (
            <CharacterList
              characters={people}
              handleClick={getCharacterDetails}
            />
          ) : (
            <CharacterDetails
              details={people.find((character) => character.id === characterID)}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

import React from "react";
import AllPeopleQuery from "../services/AllPeopleQuery";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CharacterDetails from "../components/CharacterDetails";

const Character = () => {
  const id = useParams().id;
  const { data } = AllPeopleQuery();
  const people = data?.allPeople.people;
  const character = people.find((character) => character.id === id);

  return (
    <>
      <Header title={character.name} canReturn />
      <main>
        <div className="container">
          <CharacterDetails details={character} />
        </div>
      </main>
    </>
  );
};

export default Character;

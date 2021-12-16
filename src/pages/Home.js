import React from "react";
import CharacterList from "../components/CharacterList";
import AllPeopleQuery from "../services/AllPeopleQuery";

const Home = () => {
  const { loading, error, data } = AllPeopleQuery();
  const people = data.allPeople.people;

  if (error) return <p>Whoops ... something is wrong!</p>;

  return (
    <>
      <h1>People of Stars Wars</h1>
      {loading ? <p>Loading ...</p> : <CharacterList characters={people} />}
    </>
  );
};

export default Home;

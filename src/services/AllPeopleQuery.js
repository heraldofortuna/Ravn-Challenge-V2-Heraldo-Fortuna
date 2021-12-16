import { useQuery, gql } from "@apollo/client";

const AllPeopleQuery = () => {
  return useQuery(gql`
    {
      allPeople {
        people {
          id
          name
          species {
            id
            name
          }
          homeworld {
            id
            name
          }
          eyeColor
          hairColor
          skinColor
          birthYear
          vehicleConnection {
            vehicles {
              id
              name
            }
          }
        }
      }
    }
  `);
};

export default AllPeopleQuery;

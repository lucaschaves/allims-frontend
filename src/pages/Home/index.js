import React from "react";
import { useQuery } from 'react-apollo-hooks';
import {GET_CITYS} from 'data/graphql'
import {Loading} from 'components'
const Home = () => {
  const { data, loading } = useQuery(GET_CITYS);

  return (
    <ul>
      {loading ?  <Loading /> : data.allCmCities.nodes.map(cit =>  <li key={cit.pkCity}>{cit.city}</li>)}
    </ul>
  );
};

export default Home;




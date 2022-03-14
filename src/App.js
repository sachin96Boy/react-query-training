import react from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Count />
      <Pokemon queryKey="pokemon" />
      {/* <Pokemon queryKey="pokemon" /> */}
      <Berries />
      <ReactQueryDevtools />
    </div>
  );
}

function usePokemon() {
  return useQuery(
    "pokemon",
    async () => {
      await new Promise((res) => setTimeout(res, 1000));
      // if (true) {
      //   throw new Error("test error");
      // }
      return axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
    },
    {
      // refetchOnWindowFocus: false
      // scaleTime: Infinity
      // cacheTime: 5000
      // enabled:
    }
  );
}

function Count() {
  const queryInfo = usePokemon();
  return <h3>you are seeing {queryInfo.length} pokemons</h3>;
}

function Pokemon({ queryKey }) {
  const queryInfo = useQuery(
    queryKey,
    async () => {
      await new Promise((res) => setTimeout(res, 1000));
      // if (true) {
      //   throw new Error("test error");
      // }
      return axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
    },
    {
      // refetchOnWindowFocus: false
      // scaleTime: Infinity
      cacheTime: 5000
    }
  );
  console.log(queryInfo);

  return queryInfo.isLoading ? (
    <div>loading...</div>
  ) : queryInfo.isError ? (
    queryInfo.error.message
  ) : (
    <div>
      {queryInfo.data.map((res) => {
        return <div key={res.name}>{res.name}</div>;
      })}
      <br />
      {queryInfo.isFetching ? <div>updating...</div> : null}
    </div>
  );
}
function Berries() {
  const queryInfo = useQuery(
    "berries",
    async () => {
      await new Promise((res) => setTimeout(res, 1000));
      // if (true) {
      //   throw new Error("test error");
      // }
      return axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
    },
    {
      // refetchOnWindowFocus: false
      // scaleTime: Infinity
      cacheTime: 5000
    }
  );
  console.log(queryInfo);

  return queryInfo.isLoading ? (
    <div>loading...</div>
  ) : queryInfo.isError ? (
    queryInfo.error.message
  ) : (
    <div>
      {queryInfo.data.map((res) => {
        return <div key={res.name}>{res.name}</div>;
      })}
      <br />
      {queryInfo.isFetching ? <div>updating...</div> : null}
    </div>
  );
}

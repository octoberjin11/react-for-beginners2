import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //then대신에 async-await를 보편적으로 사용함
  const getMovies = async () => {
    const json = await (
      await fetch(
        //await을 감싸는 await을 만들 수 있음
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false); //fetch, json을 진행 후 로딩을 끝냈기 때문에 반드시 setLoading(false)를 해줘야함
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1> 🤔 Loading... </h1>
      ) : (
        <div>
          {movies.map((movie) => (
            //movies.map((movie ->map의 argument는 x, m, g 등등 마음대로 해도됨. 여기선 movie라고 정함
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres?.map((g) => (
                  //key={g} -> 따로 정해진 key가 없기 때문에 g를 가져와 key로 써줌. 단, g가 고유한 값일 경우에만 가능
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

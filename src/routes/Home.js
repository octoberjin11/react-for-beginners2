import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
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
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>
          <span>🤔 Loading...</span>
        </h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

import { useEffect } from "react";
import { useParams } from "react-router-dom";

// useParams 함수를 사용하면 React Router는 바로 이 변수(여기에서는 <Link to={`/movie/${id}`}>{title}</Link>의 id)의 값을 넘겨준다.

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

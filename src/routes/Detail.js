import { useEffect } from "react";
import { useParams } from "react-router-dom";

// useParams 함수를 사용하면 React Router는 바로 이 변수(여기에서는 <Link to={`/movie/${id}`}>{title}</Link>의 id)의 값을 넘겨준다.

// packages.json 에서
// "deploy": "gh-pages -d build"
// deploy가 하는 일은 우리가 방금 설치한 gh-pages를 실행시키고, build라는 디렉토리를 가져가는 것이다.
// gh-pages -d build에서 gh-pages가 하는 일은 gh-pages가 build 폴더를 homepage에 적어놓은 웹사이트에 업로드하도록 하는 것이다.
// "predeploy": "npm run build"
//먼저 build를 하고 난 다음에 deploy를 해야 한다는걸 기억하고 싶지 않기 때문에 predeploy command를 만들어 준다. 그럼 deploy를 실행시키면 predeploy가 자동으로 먼저 실행이 되고 predeploy는 npm run build를 실행시킨다.

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

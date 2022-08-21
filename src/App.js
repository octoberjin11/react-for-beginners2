import { useState, useEffect } from "react";

// useEffect는 두 개의 argument를 가지는 function이다.
// useEffect function은 쉽게 말해서 우리 코드가 딱 한번만 실행될 수 있도록 보호해준다.
// 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드다.
// 두 번째 Dependency는 코드가 언제 실행될지 결정한다. react.js가 지켜보아야 하는 것들. 그리고 그것들이 변화할 때 react.js가 코드를 실행시킨다.

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword 가 변화할 때 코드를 실행하고 싶다는 뜻.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

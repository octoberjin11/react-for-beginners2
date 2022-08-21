import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); // ...을 써서 currentArray 배열에 toDo를 추가 시켜줌
  };
  console.log(toDos);

  // map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할. 그건 결국 새로운 array로 반환해준다.

  // 같은 component의 list를 render 할 때 key라는 prop을 넣어줘야 한다. 이건 그냥 react가 기본적으로 list에 있는 모든 item들을 인식하기 때문이다.
  // 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
  // map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함

  return (
    <div>
      <h1>Mt To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

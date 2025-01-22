import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!name || !age) {
      alert("이름과 나이를 모두 입력해 주세요!");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    const newUser = {
      id: new Date().getTime(),
      name: name,
      age: age,
    };

    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
  const newUserList = users.filter(function(u){return u.id !== id});
  setUsers(newUserList);
  };

  const style = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "16px",
    border: "black 1px solid",
    padding: "15px",
    margin: "1px",

  }

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={function (e) {
            return setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="나이"
          value={age}
          onChange={function (e) {
            return setAge(e.target.value);
          }}
        />
        <button type="submit" onClick={addUser}>
          사용자 추가
        </button>
      </form>
      <ul style={{padding: "0px",}}>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {users.map(function (u) {
          return (
            <div style={style}>
              <li> 이름 : {u.name} </li>
              <li> age : {u.age} </li>
              <button onClick={function(){return removeUser(u.id)}}> 삭제 </button>
            </div>
          );
        })}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
      </ul>
    </>
  );
}

export default App;

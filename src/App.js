import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock : {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors : {
    name: "scissors",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper : {
    name: "paper",
    img: "https://w7.pngwing.com/pngs/406/64/png-transparent-white-paper-illustration-black-and-white-line-art-post-it-note-sticky-note-angle-white-text.png",
  },
}

function App() {
  
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setcomputerSelect] = useState(null);
  const play = (userChoice) => {
    // console.log("clicked", userChoice);
    setUserSelect(choice[userChoice]) 
  };

  return (
    <>
      <div className="container">
        <Box title="You" item={userSelect} />
        <Box title="computer" item={computerSelect} />
      </div>
      <div className="button-area">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

/*
1. 박스 2개 ( 타이틀, 사진 , 결과)
2. 가위 바위 보 : 버튼
3. 버튼을 클릭하면, 클릭한 값이 박스에 보임
4. 컴퓨터느 ㄴ랜덤하게 아이템 선택이 된다.
5. 3,4 의 결과로 누가 이겼는지, 승패를 따진다
6. 승패 결과에 따라, 테두리 색이 변경 됨( 승리: 초록, 지면: 빨강, 비김: 검은색)
*/

export default App;

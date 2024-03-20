import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock : {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors : {
    name: "Scissors",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper : {
    name: "Paper",
    img: "https://w7.pngwing.com/pngs/406/64/png-transparent-white-paper-illustration-black-and-white-line-art-post-it-note-sticky-note-angle-white-text.png",
  },
  default: {
    name: "버튼 클릭: 게임 시작!",
    img: "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg",
  }
}

function App() {
  
  const [userSelect, setUserSelect] = useState(choice.default);
  const [computerSelect, setcomputerSelect] = useState(choice.default);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log("clicked", userChoice);
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setcomputerSelect(computerChoice);
    setResult( judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    //console.log("user", user, "computer", computer);
    // 가위 바위 보 로직
    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
    return computer.name === "Rock" ? "win" : "lose";
  }
  
  const randomChoice=()=> {
    /**
     * Object.keys()
     * 객체의 Key값을 가져와 배열로 만들어주는 메소드
     */

    let itemArray = Object.keys(choice);  // 객체에 키 값만 뽑아서 array 로 만들어 준다
    //console.log("item array", itemArray);
    let randomItem = Math.floor( Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
    // console.log("final", final);
    // console.log("random value", randomItem)
  }

  return (
    <>
      <div className="button-area">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
      <div className="container">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result}/>
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

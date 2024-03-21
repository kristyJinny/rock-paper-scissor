import './App.css';
import BoxClass from './component/BoxClass';

import React, { Component } from 'react'

const choice = {
  rock : {
    name: "주먹",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors : {
    name: "가위",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper : {
    name: "보",
    img: "https://w7.pngwing.com/pngs/406/64/png-transparent-white-paper-illustration-black-and-white-line-art-post-it-note-sticky-note-angle-white-text.png",
  },
  default: {
    name: "버튼 클릭: 게임 시작!",
    img: "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg",
  }
}


export default class AppClass extends Component {

  constructor(){
    super();
    this.state = {
      userSelect: choice.default,
      computerSelect: choice.default,
      result: "",
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    const itemArray = Object.keys(choice).filter(key => key !== 'default'); // choice.default 제외
    //let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수!
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    // 가위 바위 보 로직

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "주먹")
      return computer.name === "가위" ? "win" : "lose";
    else if (user.name === "가위")
      return computer.name === "보" ? "win" : "lose";
    else if (user.name === "보")
      return computer.name === "주먹" ? "win" : "lose";
  };

  render() {
    return (
      <>
        <div className="button-area">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
        <div className="container">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
      </>
    )
  }
}

/*
1. 박스 2개 ( 타이틀, 사진 , 결과)
2. 가위 바위 보 : 버튼
3. 버튼을 클릭하면, 클릭한 값이 박스에 보임
4. 컴퓨터느 ㄴ랜덤하게 아이템 선택이 된다.
5. 3,4 의 결과로 누가 이겼는지, 승패를 따진다
6. 승패 결과에 따라, 테두리 색이 변경 됨( 승리: 초록, 지면: 빨강, 비김: 검은색)
*/

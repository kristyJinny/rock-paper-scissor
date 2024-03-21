import React, { Component } from 'react'

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.result = {
      result: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.result !== prevProps.result) {
      this.getResult();
    }
  }


  getResult = () => {
    if (
      this.props.title === "Computer" && // 카드가 컴퓨터 카드인가? &&
      this.props.result !== "tie" && // 결과가 비긴 건가? &&
      this.props.result !== "" // props.result에 값이 있는가?
    ) {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      // 위의 경우가 아니라면 this.props&nbsp;로 전달된 결과를 그대로 쓴다.
      this.result = this.props.result;
    }
  };


  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.item && this.props.item.name}</h2>
        <img className="item-img" src={this.props.item && this.props.item.img} alt="이미지"></img>
        <h2>{this.result}</h2>
      </div>
    )
  }
}

import React from 'react'

const Box = (props) => {
  //console.log("props", props);

  let result;
  if (
    props.title === "Computer" && // 카드가 컴퓨터 카드인가? &&
    props.result !== "tie" && // 결과가 비긴 건가? &&
    props.result !== ""  // props.result에 값이 있는가?
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }


  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} alt="이미지"></img>
      <h2>{result}</h2>
    </div>
  )
}

export default Box

//화면에 숫자 0~100까지 NumberButton가 있음
//클릭하면 알럿으로 해당 버튼은 x번!
//추가 퀴즈
//버튼배경색은 빨주노초파남보 라이클링
const NumberButton = (props) => {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];
  return (
    <button
      onClick={() => {
        alert(`누르신 번호는 ${props.num}입니다!`);
      }}
      style={{
        padding: "5px 10px",
        border: "none",
        backgroundColor: color[props.num % 7],
      }}
    >
      {props.num}
    </button>
  );
};

export default NumberButton;

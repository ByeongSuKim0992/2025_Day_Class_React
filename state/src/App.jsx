import { useState } from "react";
import Register from "./Register";

// function App() {
//   // react 19버전
//   // state(상태)[모양새나 값이] 변화가 일어나면 useState 사용하기
//   const [num, setNum] = useState(0);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setNum((prev) => {
//             return prev + 1;
//           });
//         }}
//       >
//         +
//       </button>
//       <span style={{ color: num > 10 ? "pink" : "black" }}>{num}</span>
//       <button
//         onClick={() => {
//           setNum((prev) => {
//             return prev == 0 ? 0 : prev - 1;
//           });
//         }}
//       >
//         -
//       </button>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Register />
      <Register />
    </>
  );
}

// function App() {
//   // 초록색 버튼
//   // 노랑색 버튼
//   // 빨강색 버튼
//   // 해당 버튼을 누르면
//   // 박스(100*100)의 배경색이 바뀌는 화면 구현하기

//   const [bg, setBg] = useState("white");

//   return (
//     <>
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "1px solid black",
//           backgroundColor: bg,
//         }}
//       ></div>
//       <button
//         onClick={() => {
//           setBg((prev) => "green");
//         }}
//       >
//         초록색
//       </button>
//       <button
//         onClick={() => {
//           setBg((prev) => "yellow");
//         }}
//       >
//         노랑색
//       </button>
//       <button
//         onClick={() => {
//           setBg((prev) => "red");
//         }}
//       >
//         빨강색
//       </button>
//     </>
//   );
// }

// function App() {
//   // input에 입력한 값의 길이가 10글자가 넘어가면
//   // div에
//   // 입력한 값이 유효하지 않아요!
//   // 아니면 입력한 값이 유효합니다.

//   //   const [validation, setValidation] = useState(false);

//   //   return (
//   //     <>
//   //       <input
//   //         onChange={(e) => {
//   //           setValidation(
//   //             (prev) => 4 < e.target.value.length && e.target.value.length < 10
//   //           );
//   //         }}
//   //         type="text"
//   //       />
//   //       {/* <div>{validation ? "입력값이 유효" : "입력값이 비유효"}</div> */}
//   //       {/* 유효하면 초록색으로 변경 아니면 검은색 유지 */}
//   //       <div>글자 길이: 4~12</div>
//   //       <div>글자에 !,#,@,&,* 중 하나 반드시 포함</div>
//   //       <div>글자에 반드시 숫자 포함!</div>
//   //     </>
//   //   );
//   // }

//   const [value, setValue] = useState("");

//   const validLength = (value) => 4 <= value.length && value.length <= 12;
//   const validSpecial = (value) => [..."!#@&*"].some((v) => value.includes(v));
//   const validHasNum = (value) =>
//     [..."0123456789"].some((v) => value.includes(v));

//   return (
//     <>
//       {/* <input
//         onChange={(e) => {
//           setValue((prev) => e.target.value);
//         }}
//         type="text"
//       /> */}
//       <Input func={setValue} />
//       {/* 유효하면 초록색으로 변경 아니면 검은색 유지 */}
//       {/* <div
//         style={{
//           color: validLength(value) ? "green" : "black",
//         }}
//       >
//         글자 길이: 4~12
//       </div>
//       <div
//         style={{
//           color: validSpecial(value) ? "green" : "black",
//         }}
//       >
//         글자에 !,#,@,&,* 중 하나 반드시 포함
//       </div>
//       <div
//         style={{
//           color: validHasNum(value) ? "green" : "black",
//         }}
//       >
//         글자에 반드시 숫자 포함!
//       </div> */}
//       {/* Text 컴포넌트 만들어서 바꾸기 */}
//       <Text text={"글자 길이: 4~12"} valid={validLength(value)} />
//       <Text
//         text={"글자에 !,#,@,&,* 중 하나 반드시 포함"}
//         valid={validSpecial(value)}
//       />
//       <Text text={"글자에 반드시 숫자 포함!"} valid={validHasNum(value)} />
//     </>
//   );
// }

export default App;

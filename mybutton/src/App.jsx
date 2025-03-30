// import PrimaryCircleButton from "./PrimaryCircleButton";
// import PrimaryHardButton from "./PrimaryHardButton";
// import PrimarySmoothButton from "./PrimarySmoothButton";
// import SecondarySmoothButton from "./SecodarySmoothButton";
// import SecondaryCircleButton from "./SecondaryCircleButton";
// import SecondaryHardButton from "./SecondaryHardButton";

// import NumberButton from "./NumberButton";

// import Button from "./Button";
// import Welcome from "./Welcome";

// function App() {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         display: "grid",
//         gridTemplateColumns: "repeat(3,1fr)",
//         gap: "50px",
//       }}
//     >
//       <PrimaryHardButton></PrimaryHardButton>
//       <PrimarySmoothButton></PrimarySmoothButton>
//       <PrimaryCircleButton></PrimaryCircleButton>
//       <SecondaryHardButton></SecondaryHardButton>
//       <SecondarySmoothButton></SecondarySmoothButton>
//       <SecondaryCircleButton></SecondaryCircleButton>
//     </div>
//   );
// }

// function App() {
//   const soccer = [
//     {
//       name: "손흥민",
//       emoji: "😋",
//       color: "pink",
//       handleClick: () => {
//         alert("손흥민!");
//       },
//     },
//     {
//       name: "김민재",
//       emoji: "😍",
//       color: "yellow",
//       handleClick: () => {
//         console.log("김민재!");
//       },
//     },
//     {
//       name: "황인범",
//       emoji: "🥰",
//       color: "green",
//       handleClick: () => {
//         alert("황인범!");
//       },
//     },
//   ];

//   return (
//     <div>
//       {/* <Welcome
//         handleClick={() => {
//           alert("저는 손흥민입니다.");
//         }}
//         color={"pink"}
//         name={"손흥민"}
//         emoji={"😋"}
//       ></Welcome>
//       <Welcome
//         handleClick={() => {
//           console.log("저는 김민재입니다.");
//         }}
//         color={"green"}
//         name={"김민재"}
//         emoji={"😍"}
//       ></Welcome>
//       <Welcome
//         handleClick={() => {
//           console.log("저는 황인범입니다.");
//         }}
//         color={"yellow"}
//         name={"황인범"}
//         emoji={"🥰"}
//       ></Welcome> */}
//       {soccer.map((v) => (
//         // <Welcome
//         //   name={v.name}
//         //   emoji={v.emoji}
//         //   color={v.color}
//         //   handleClick={v.handleClick}
//         // ></Welcome>
//         <Welcome {...v}></Welcome>
//       ))}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
//         <Button bg={"#205BF3"} br={"0px"}>
//           Button
//         </Button>
//         <Button bg={"#205BF3"} br={"5px"}>
//           Button
//         </Button>
//         <Button bg={"#205BF3"} br={"10px"}>
//           Button
//         </Button>
//         <Button bg={"#478DF5"} br={"0px"}>
//           Button
//         </Button>
//         <Button bg={"#478DF5"} br={"5px"}>
//           Button
//         </Button>
//         <Button bg={"#478DF5"} br={"10px"}>
//           Button
//         </Button>
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       {Array(101)
//         .fill(0)
//         .map((v, i) => (
//           <NumberButton num={i}></NumberButton>
//         ))}
//     </div>
//   );
// }

import Card from "./Card";

function App() {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <Card bg={"#5d7d2b"} name={"Kia Green"}></Card>
      <Card bg={"#4c5b35"} name={"Kia Green_dark"}></Card>
      <Card bg={"#589000"} name={"Kia Green_variant"}></Card>
    </div>
  );
}

export default App;

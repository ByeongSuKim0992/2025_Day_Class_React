// JSX
// 1. 함수명 파일명과 동일해야함
// 2. 함수명은 캐피탈네이밍(첫글자만 대문자)
// 3. return 하나의 부모태그만 있어야함!
// 4. return에 js코드를 실행하고 싶으면 {} 넣어야함!
const Latte = () => {
  const favorite = "두유";
  return (
    <div style={{ color: "red", fontSize: "20px" }}>
      <div>초코라떼</div>
      <div>민트라떼</div>
      <div>{favorite}라떼</div>
    </div>
  );
};

export default Latte;

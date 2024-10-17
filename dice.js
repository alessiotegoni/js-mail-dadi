const genRandomNum = () => Math.floor(Math.random() * 6);

const userNum = genRandomNum();
const computerNum = genRandomNum();

userNum > computerNum
  ? console.log("user wins")
  : computerNum > userNum
  ? console.log("computer wins")
  : console.log("pareggio");

let fun = (s) => {
  const reg = /^\*[a-z]+\*ka&[0-9]+$/;
  if (reg.test(s)) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};
let emailCheck = (s) => {
  const reg = /^[a-z]+[0-9]*@[a-z]+\.[a-z]+$/;
  if (reg.test(s)) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
};
let s = "@gd.com";
let f = "**  &";
emailCheck(s);
fun(f);
console.log("nsjx");

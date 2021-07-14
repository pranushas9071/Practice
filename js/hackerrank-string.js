function repeatedString(s, n) {
  let res = [];
  if (n == s.length) {
    res = s.split("");
    let res1 = res.filter((n) => n == "a").length;
    return res1;
  } else if (n < s.length) {
    let t = s.substr(0, n);
    res = t.split("");
    let res1 = res.filter((n) => n == "a").length;
    return res1;
  } else {
    let r = 0;
    let num = Math.trunc(n / s.length);
    let deno = n % s.length;
    res = s.split("");
    let part = s.substr(0, deno).split("");
    r =
      res.filter((a) => a == "a").length * num +
      part.filter((a) => a == "a").length;
    return r;
  }
}

console.log(repeatedString("aba",10));


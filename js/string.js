let str="Pranusha";
console.log(str);
let str1=str.slice(0,5);
console.log(str1);
let str2=str.slice(4);
console.log(str2);
//substr,substring
let st="welcome";
console.log(st);
console.log(st.substr(1,3));//3 digits from index 1
console.log(st.substring(1,3));// index 1 to index 2 i.e=> excluding 3
//replace
let a="Hello world"
console.log(a);
console.log(a.replace("hello","hi"));
console.log(a.replace(/HELLO/i,"hi"));//replace first match and case insensitive
let b="hello hello";
console.log(b);
console.log(b.replace(/hello/g,"hi"));//replace all matches but case sensitive
let t="5";
console.log(t);
console.log(t.padStart(4,0));
console.log(t.padEnd(4,0));
console.log(t);
let c="aspire";
console.log(c);
console.log(c.charCodeAt(1));
let s1="a";
let s2="ab";
console.log(s1.localeCompare(s2));
let s3="hi";
console.log(s3);
console.log(s3.repeat(3));
let s4="hello world";
console.log(s4);
console.log((s4.search("hello")));
console.log(s4.indexOf("hello"));
console.log(s4.startsWith("hello"));
console.log(s4.startsWith("hello",2));//checks hello is starting from index 2 hence returns false
console.log(String.fromCharCode(67));//Ascii value is given and it returns the character

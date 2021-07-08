// console.log("First part..");
// function run() {
//   setTimeout(function () {
//     console.log("Second part..");
//   }, 500);
// }
// run();
// console.log("Third part..");

// let a=[1,2,3,4,5];
// for (var i = 0; i < a.length; i++) {
//   setTimeout(() => {
//   console.log(i);
//   console.log(a[i]);
//   }, 2000);
// }

// let i=1;
// setInterval(() => {
//   if(i<6){
//     console.log(i);
//     i++;
//   }
// }, 2000);

// async function task() {
//   for (let i = 1; i < 6; i++) {
//     await new Promise((resolve, reject) => {
//       setTimeout(resolve, 2000, "resolved");
//     });
//     console.log(i);
//   }
// }
// task();

async function run() {
  var a = 1;
  console.log(a);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      a = 3;
    }, 2000);
  });

  console.log(a);
}
run();

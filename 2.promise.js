const userIds = [1, 2, 3, 4, 5];
const myPromise = new Promise((resolve, reject) => {
  const user = null;
  if (!user) {
    reject("something went wrong");
  } else {
    setTimeout(() => {
      resolve("Successfully got the data");
    }, 1000);
  }
});

Promise.then((res) => console.log("Found in then", res)).catch((err) => {
  console.log("Found in catch", err);
});
// let userData = [];

// for (let i = 0; i < userIds.length; i++) {
//   const userId = userIds(i);
//   userData.push(myPromise);
// }

// Promise.all(userData).then((res) => {
//   console.log(res);
// });

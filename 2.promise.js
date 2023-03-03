const userIds = [1, 2, 3, 4, 5];
const myPromise = new Promise((resolved, rejected) => {
  console.log("hello");
});
let userData = [];

for (let i = 0; i < userIds.length; i++) {
  const userId = userIds(i);
  userData.push(myPromise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});

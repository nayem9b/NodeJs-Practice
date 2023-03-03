const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("success");
  }, 2000);
});
async function getData() {
  const res = await promise;
  console.log(res);
}

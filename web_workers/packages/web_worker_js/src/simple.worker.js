onmessage = function (data) {
  console.log("got data in worker ", data);
  postMessage("Message back");
};

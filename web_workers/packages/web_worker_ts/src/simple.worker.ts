const ctx: Worker = self as any;

/// Respond to message from parent thread
ctx.addEventListener("message", (event) =>{
  console.log("got data in worker ", event.data);
  postMessage(`Message back ${event.data}`);
});

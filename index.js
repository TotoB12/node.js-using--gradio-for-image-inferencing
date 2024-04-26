global.window = {
  setTimeout: function (callback, time, smth) {
    return global.setTimeout(callback, time, smth);
  },
  location: {
    hostname: "chat.totob12.com",
  },
};

async function go(prompt) {
  const { Client } = await import("@gradio/client");
  global.EventSource = require("eventsource");

  const app = await Client.connect("https://hysts-SDXL.hf.space/run");
  // const app = await Client.connect("ByteDance/Hyper-SDXL-1Step-T2I");
  const result = await app.predict("/run", [
      prompt, // prompt
      "Hello!!", // negative prompt
      "Hello!!", // prompt 2
      "Hello!!", // negative prompt 2
      false, // negative prompt?
      false, // prompt 2?
      false, // negative prompt 2?
      Math.floor(Math.random() * 99999999999999), // seed
      1024, // width
      1024, // height
      5, // base guidance scale
      5, // refiner guidance scale
      25, // base inference steps
      25, // refiner inference steps
      false, // refiner?
  ]);
  // const result = await app.predict("/process_image", [
  //   1, // number of images
  //   1024, // height
  //   1024, // width
  //   prompt, // prompt
  //   Math.floor(Math.random() * 99999999999999), // seed
  // ]);

  console.log(result.data[0].url);
  // console.log(result.data[0][0].image.url);
}

console.log("start")

go("a cute dog");
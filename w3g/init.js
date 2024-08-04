const init = async () => {
  console.log("init.js");
  const WebApp = window.Telegram?.WebApp;
  const W3G_SERVER = "https://0uitsxjg97.whs.lol/";

  if (WebApp && WebApp.themeParams) {
    const theme = WebApp.themeParams;
    if (theme?.bg_color) {
      document.body.style.background = theme.bg_color;
    }
  }

  let res = await fetch(W3G_SERVER);
  if (res.ok) {
    var data = await res.json();
    if (!data.ok) {
      console.log("fail: fetch(W3G_SERVER)");
      failApp("Something went wrong, please try again later.\n Error: 6548147");
    }
  }

  console.log("======healthcheck======");
  res = await fetch(W3G_SERVER + "healthcheck");
  if (!res.ok) {
    failApp("Something went wrong, please try again later.\n Error: 6545191");
  }
  const healthcheck = await res.json();
  console.log("======healthcheck======");
  console.log(healthcheck);


  res = await fetch(W3G_SERVER + "auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: WebApp.initData || "abcd",
    }),
  });
};

const failApp = (message) => {
  if (window?.Telegram?.WebApp?.init_data) {
    WebApp.show_alert(message);
    WebApp.close();
  } else {
    alert(message);
  }
};

(async () => {
  try {
    await init();
  } catch (error) {
    failApp("Something went wrong, please try again later.\n Error: 6545192");
  }
})();

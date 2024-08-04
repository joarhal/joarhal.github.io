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

  var res = await fetch(W3G_SERVER);
  if (res.ok) {
    var data = await res.json();
    if (!data.ok) {
      failApp("Something went wrong, please try again later.\n Error: 6548147");
    }
  }
  // WebApp.ready();
};

const failApp = (message) => {
  console.error(window?.Telegram?.WebApp?.init_data);
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

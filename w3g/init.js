const init = async () => {
  console.log("init.js");
  const WebApp = window.Telegram?.WebApp;
  const W3G_SERVER = "https://0uitsxjg97.whs.lol/";

  if (WebApp) {
    const theme = WebApp.themeParams;
    if (theme?.bg_color) {
      document.body.style.background = theme.bg_color;
    }
  }

  var res = await fetch(W3G_SERVER);
  console.log("-----");
  if (res.ok) {
    var data = await res.json();
    console.log(data);
  }
  // WebApp.ready();
};

(async () => {
  try {
    await init();
  } catch (error) {
    if (window?.Telegram?.WebApp) {
      const WebApp = window.Telegram.WebApp;
      if (WebApp.init_data) {
        WebApp.show_alert(
          "Something went wrong, please try again later.\n Error: 6545192"
        );
        WebApp.close();
      }
    } else {
      alert("Something went wrong, please try again later.\n Error: 6545192");
    }
  }
})();

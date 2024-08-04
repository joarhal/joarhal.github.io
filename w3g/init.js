const init = async () => {
  const WebApp = window.Telegram?.WebApp;
  const W3G_SERVER = "https://0uitsxjg97.whs.lol/";
  WebApp?.ready();

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
      failApp("Something went wrong, please try again later.\n Error: 6548147");
    }
  }

  res = await fetch(W3G_SERVER + "auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: WebApp.initData || "null",
    }),
  });
  const verified = (await res.json()).verified;

  if (verified) {
    WebApp.ready();
    window.engine.startGame({
      onProgress: (current, total) => {
        console.log("Loaded " + current + " of " + total + " bytes");
      },
    });
  } else {
    failApp("Something went wrong, please try again later.\n Error: 6548148");
  }
};

const failApp = (message, error) => {
  if (window?.Telegram?.WebApp?.init_data) {
    WebApp.showAlert(message, error.message);
    WebApp.close();
  } else {
    alert(message + "\n" + error.message);
  }
};

(async () => {
  try {
    await init();
  } catch (error) {
    failApp(
      "Something went wrong, please try again later.\n Error: 6545192",
      error
    );
  }
})();

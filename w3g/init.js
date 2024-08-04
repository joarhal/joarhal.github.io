(async () => {
  console.log('init.js');
  const WebApp = window.Telegram?.WebApp;
  const W3G_SERVER = "https://0uitsxjg97.whs.lol/";

  
  if (WebApp) {
    const theme = WebApp.themeParams;
    if (theme?.bg_color) {
      document.body.style.background = theme.bg_color;
    }
  }

  var res = await fetch(W3G_SERVER);
  console.log('-----');
  if (res.ok) {
    var data = await res.json();
    console.log(data);
  }
  // WebApp.ready();
})();

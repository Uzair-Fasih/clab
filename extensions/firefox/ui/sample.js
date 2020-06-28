document.body.onload = () => {
  browser.tabs
    .query({ currentWindow: true, active: true })
    .then(logTabs, console.error);
};

function logTabs(tabs) {
  let tab = tabs[0];
  const tabURL = new URL(tab.url);
  const scheme = tabURL.protocol.replace(":", "");
  const link = tabURL.href.replace(tabURL.protocol + "//", "");
  const package = fetchPackageSignature(tabURL.host);

  new QRCode(document.getElementById("qrcode"), {
    text: `http://192.168.1.8:8080?link=${link}&scheme=${scheme}&package=${package}`,
    width: 120,
    height: 120,
    colorDark: "#445569",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function fetchPackageSignature(domain) {
  switch (domain) {
    case "www.youtube.com":
      return `com.vanced.android.youtube`;
  }
}

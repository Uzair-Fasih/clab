document.body.onload = () => {
  const tabURL = new URL(window.location.href)
  console.log(tabURL.searchParams.get('link'))
  const link = tabURL.searchParams.get('link')
  const package = tabURL.searchParams.get('package')
  const scheme = tabURL.searchParams.get('scheme')
  const intent = `intent://${link}#Intent;scheme=${scheme};package=${package};end`;
  window.location.replace(intent)
}
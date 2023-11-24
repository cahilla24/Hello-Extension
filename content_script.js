const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < text.length; i++) {
  if(text[i].innerHTML.includes('i')) {
    text[i].innerHTML = text[i].innerHTML.replace('i', 'h')
  } else if (text[i].innerHTML.includes('I')) {
    text[i].innerHTML = text[t].innerHTML.replace('I', 'H')
  }
}

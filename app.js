function closingTime() {
    let hour = (new Date()).getHours(),
        body = document.body,
        bodystyle=body.style,
        hello = document.querySelector('.hello'),
        hellostyle = hello.style;
    if (hour >= 20) {
        bodystyle.backgroundColor = '#000';
        hellostyle.color = '#fff';
        hello.innerHTML = 'Good night!';
    } else
        bodystyle.backgroundColor = '#fff';
  }

closingTime();

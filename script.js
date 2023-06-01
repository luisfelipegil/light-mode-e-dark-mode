function togglemode() {
    const html = document.documentElement;
    const button = document.getElementById('teste');
  
    if (html.classList.contains('light')) {
      html.classList.remove('light');
      button.style.right = 30+ 'px';
    } else {
      html.classList.add('light');
      button.style.right = 0 + 'px';
    }
  }
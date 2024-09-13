    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function changeColor() {
      const heading = document.getElementById('myHeader');
      heading.style.color = getRandomColor();
    }
    setInterval(changeColor, 1000);

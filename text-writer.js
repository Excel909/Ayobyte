const sentence = "Hi am Excel and welcome to my Website!";
  const container = document.getElementById("text-container");
  
  function animateText() {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= sentence.length) {
        container.innerHTML = sentence.substring(0, index) + "<b>" + sentence.charAt(index) + "</b>";
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          deleteText();
        }, 1000); // Delay before deleting
      }
    }, 50); // Speed of typing in milliseconds
  }

  function deleteText() {
    let index = sentence.length;
    const interval = setInterval(() => {
      if (index >= 0) {
        container.innerHTML = sentence.substring(0, index);
        index--;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          animateText();
        }, 1000); // Delay before typing again
      }
    }, 50); // Speed of deleting in milliseconds
  }

  animateText();
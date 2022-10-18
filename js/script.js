
let button = document.querySelector("h1");
button.onclick  = function () {
        function rgb(){
        min = Math.ceil(0);
        max = Math.floor(255);
        let r = Math.random() * (max - min) + min;
        let g = Math.random() * (max - min) + min;
        let b = Math.random() * (max - min) + min;
        return "rgb("+r+","+g+","+b+")";
      }

      function randomX(){
        let x = Math.random() * (window.innerWidth);
        return Math.floor(x);
      }

      function randomY(){
        return Math.floor(Math.random() * (window.innerHeight));
      }

      let body = document.querySelector("body");

      body.onmouseover = function(){
        body.style.backgroundColor = rgb();
        body.style.color = rgb();
      };

      body.onclick = function () {
        window.scrollTo(randomX(),randomY());
      };
    };
  



# Project related to DOM

## Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
  const buttons = document.querySelectorAll('.button')
const body =  document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
     console.log(e)
     console.log(e.target)
     switch(e.target.id){
       case 'gray':
      body.style.backgroundColor = e.target.id
      case 'white':
      body.style.backgroundColor = e.target.id
      case 'blue':
      body.style.backgroundColor = e.target.id
      case 'yellow':
      body.style.backgroundColor = e.target.id
     }
     })
    });
  

```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <!--
      Need a visual blank slate?
      Remove all code in `styles.css`!
    -->
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <h1>Color Scheme Switcher</h1>
    <ul class="switcher">
      <li id = "gray" class = "button">gray</li>
      <li id = "white" class = "button">white</li>
      <li id = "blue" class = "button">blue</li>
      <li id = 'yellow' class = "button">yellow</li>
    </ul>
      Try clicking on one of the colors above
    <span>to change the background color of this page</span>
    </h2>
  </body>
</html>

```

```css
body {
  margin: 3em;
  padding: 0;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 1.5;
}

h1 {
  line-height: 1.25;
  margin: 2em 0 0;
}
p {
  margin: .5em 0;
}

#switcher {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#switcher li {
  float: left;
  width: 30px;
  height: 30px;
  margin: 0 15px 15px 0;
  border-radius: 30px;
  border: 3px solid black;
}

#gray {
  background: gray;
}
#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
```
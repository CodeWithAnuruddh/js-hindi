# Counter Timer

# With Increase Decrease And Reset Button

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <div class="container">
            <h1>Counter</h1>
            <span id = "value">0</span>
            <div class="button-container">
                <button class="btn" id = "decrease">Decrease</button>
                <button class="btn" id="reset">Reset</button>
                <button class="btn" id= "increase">Increase</button>
            </div>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

```css
/*
=============== 
Fonts
===============
*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

/*
=============== 
Counter
===============
*/

main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.container {
  text-align: center;
}
#value {
  font-size: 6rem;
  font-weight: bold;
}
.btn {
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  margin: 0.5rem;
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}
```

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const timer = document.querySelector('#value');
    const buttonIncrease = document.querySelector('#increase'); 
    const buttonDecrease = document.querySelector('#decrease'); 
    const buttonReset = document.querySelector('#reset'); 
    let count = 0;
    
    buttonDecrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = valueDecrease();
        color();
       
        
    });

    buttonReset.addEventListener('click', function(e) {
        e.preventDefault();
        count = 0;
        timer.textContent = count;
        color();
        
        
    });

    buttonIncrease.addEventListener('click', function(e) {
        e.preventDefault();
        timer.textContent = ++count;
        color();
       
        
    });

    function valueDecrease() { 
       return( --count); 
    }
    function color(){
        if(count>0){
            timer.style.color = 'red';
        }
        else if(count<0){
            timer.style.color = 'aqua';
        }
        else{
            timer.style.color = '#102A42'
        }
    }
});
  

```
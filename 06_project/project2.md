# BMI calculator

## dividing an adult's weight in kilograms by their height in metres squared.

```javascript
function calcBMI() {
  var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
  document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
} 
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <div>
      <p id="intro">Calculate your BMI (body mass index) by using the form below. Enter your weight and height and click the Calculate button to display your BMI result.</p>
      <form action="none" method="post" name="bmiform">
        <fieldset>
        <legend>Height and Weight</legend>
          <label for="pounds">Weight (pounds):</label>
          <input type="text" name="pounds" id="pounds">
          <br>
          <label for="inches">Height (inches):</label>
          <input type="text" name="inches" id="inches">
          <br>
          <button type="button" name="calculate" value="Calculate your BMI" onclick="calcBMI()">Calculate your BMI</button>
        </fieldset>
        <fieldset>
        <legend>BMI</legend>
          <label for="bmi" id="bmi_label">Your calculated BMI is:</label>
          <input type="text" name="bmi" id="bmi" readonly="readonly">
        </fieldset>
      </form>
    </div>
  </body>
</html>

```

```css
fieldset {
	width: 300px;
	margin: 25px 0 0 50px;
	border: 1px solid #999999;
	box-shadow: 1px 1px #cccccc;
	padding: 10px;
}

label {
	float: left;
	width: 140px;
	display: block;
	clear: left;
	text-align: right;
	padding-right: 10px;
	margin-top: 10px;
}

button {
	margin-left: 150px;
}

input {
	margin-top: 10px;
	display: block;
	text-align: right;
	width: 128px;
}

#bmi_label {
	width: 200px;
}

#bmi {
	width: 66px;
}

#intro {
	width: 300px;
	margin: 25px 0 0 50px;
	padding: 10px;
	border: 1px solid #999999;
	box-shadow: 1px 1px #cccccc;
}

```

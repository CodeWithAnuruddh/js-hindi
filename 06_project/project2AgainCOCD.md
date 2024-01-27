# BMI calculator

## dividing an adult's weight in kilograms by their height in metres squared.

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const weight = parseFloat(document.querySelector('#pounds').value);
      const height = parseFloat(document.querySelector('#inches').value);
      const result = document.querySelector('#bmi');

      if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter valid values for weight and height.";
      } else {
        // Calculate BMI
        const bmi = (weight / (height * height)) * 703;
        result.innerHTML = `Your calculated BMI is: ${bmi.toFixed(2)}`;
      }
    });
  }
});

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
          <button type="button" name="calculate" value="Calculate your BMI">Calculate your BMI</button>
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
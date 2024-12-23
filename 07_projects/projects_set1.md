# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

# Project 1 - Color Changer

```Javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  // *** Adding event listener to each button **
  button.addEventListener(
    'click', // the event to listen, eg: mouseover, click etc.
    (e) => {
      const colorToSet = e.target.id; // using e.target we select attributes
      // console.log(colorToSet);
      body.style.backgroundColor = colorToSet;
    }
  );
});
```

# Project 2 - BMI Calculator

```js
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent submission to server, since we have no back-end at the moment
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const BMI = (weight / (height * 0.01) ** 2).toFixed(2);
    let finalRes = '';
    if (BMI < 18.6) {
      finalRes = 'Under Weight';
    } else if (BMI >= 18.6 && BMI < 24.9) {
      finalRes = 'Normal Range';
    } else {
      finalRes = 'Overweight';
    }
    result.innerHTML = `Your BMI is ${BMI} and you are ${finalRes}`;
  }
});
```
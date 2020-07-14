# gradient-animation

## Function to animate Linear Gradients

## **Parameters needed by the function:**

element [String]: an element selectable from a query selector, eg: '#background'

## **Current Gradient**

**currentTop [Array]:** An array of 3 fields with the RGB of the top's color of current's gradient, eg: [155,155,155]

**currentBottom [Array]:** An array of 3 fields with the RGB of the bottom's color of current's gradient, eg: [55,55,55]

**currentPercentageTop [Number]:** Number that represents the percentage of the top position of current's gradient, eg: 0

**currentPercentageBottom [Number]:** Number that represents the percentage of the bottom position of current's gradient, eg: 100

**currentGrade [Number]:** Number that represents the grade of current's gradient, eg: 180

## **Gradient to be transitioned**

**destTop [Array]:** An array of 3 fields with the RGB of the top's color of destination's gradient, eg: [155,155,155]

**destBottom [Array]:** An array of 3 fields with the RGB of the bottom's color of destination's gradient, eg: [55,55,55]

**destPercentageTop [Number]:** Number that represents the percentage of the top position of destination's gradient, eg: 0

**destPercentageBottom [Number]:** Number that represents the percentage of the bottom position of destination's gradient, eg: 100

**destGrade [Number]:** Number that represents the grade of destination's gradient, eg: 180

**velocity [Numner]:** Number that represents the velocity of the transition in miliseconds, eg: 10

## **How to use the function**

changeGradient(element, currentTop, currentBottom, currentPercentageTop, currentPercentageBottom, currentGrade, destTop, destBottom, destPercentageTop, destPercentageBottom, destGrade, velocity)

Eg:

changeGradient('#background', [253,183,26], [211,22,131], 0, 86, 180, [253,183,26], [211,22,131], 0, 100, 180, 5);

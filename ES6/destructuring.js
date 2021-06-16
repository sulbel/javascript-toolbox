// can use destructuring to define multiple variables from a library:
const {PI, E} = Math;   // instead of Math.PI...

// also useful e.g. when pulling features from react
// const {Component, Fragment, useState} = require('react');



const circle = {
    label: 'myCircle',
    radius: 2,
};
// notice the destructuring of radius
const circleArea = ({radius}, {precision = 2} = {}) =>      // the destructuring of precision makes it an optional argument
  (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle));
console.log(circleArea(circle, {precision: 5}));

// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh

// Created on: Apr 2025
// This file contains the JS functions for index.html
const randomNumber = Math.floor(Math.random() * 6) + 1
/*
* This function calculates the area of a triangle.
*/
function check() {
  // input
  const positiveNum =  document.getElementById("option-positive").checked
  // process
  if (positiveNum == true) {
    // output
    const positiveNumber = Math.floor(Math.random() * 6) + 1
  document.getElementById("result").innerHTML =
    "The random umber is:"
} else {
    //output
    const negativeNumber = (Math.floor(Math.random() * 6) + 1) * -1
    document.getElementById("result"). innerHTML =
    "The random umber is:"
  }
}

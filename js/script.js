// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-03-03-PWA/sw.js", {
    scope: "/ICS20-03-03-PWA/",
  })
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)
  // process
  const radius_cubed = radius ** 3
  const volume = ((4 * Math.PI * radius_cubed) / 3).toFixed(2)
  // output
  document.getElementById("volume").innerHTML = "Area is: " + volume + " cm³"
}

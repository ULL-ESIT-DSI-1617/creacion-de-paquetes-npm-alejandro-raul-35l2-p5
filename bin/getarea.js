#!/usr/local/bin/node

"use strict";

let util = require('util');
var readline = require('readline');
let Shape = require('../lib/shape.js');

try {
  let arg = process.argv[2];
  
  let type = process.argv[3];
  let Module = require('@ull-alejandro-raul-35l2/ull-shape-' + type.toLowerCase());
  
  let obj = JSON.parse(arg.toString());
  
  let t = new Shape(obj, type);
  let s = t.getArea();
  
  console.log(s);
}

catch (e) {
  console.log(e.message);
}

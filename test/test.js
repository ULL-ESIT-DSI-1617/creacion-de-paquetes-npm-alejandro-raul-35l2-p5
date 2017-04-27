'use strict'
var Shape = require('../lib/shape.js');
require("should");


describe("Shape", function(){
  it("Creación objeto Shape", function(){
    let a = new Shape ({width: 200, height: 200}, 'Triangle');
    a.should.not.undefined();
  })
});
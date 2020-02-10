const expect  = require('chai').expect;
const assert = require('chai').assert;
const BMI = require('../BMI.js');

describe('Age validation', function() {
    const assertions = [
      { age: '-20', result: false,message: "Invalid Partitioning value"},
      { age: '-1', result: false,message: "Lower boundary integer over limit" },
      { age: '0', result: true,message: "Lower boundary integer limit" },
      { age: '1', result: true,message: "Lower boundary integer under limit" },
      { age: '20', result:true,message: "Valid Partitioning value"},
      { age: '50', result:true,message: "Valid Partitioning value"},
      { age: '70', result:true,message: "Valid Partitioning value"},
      { age: '151', result: false,message: "Upper boundary integer over limit" },
      { age: '150', result: true,message: "Upper boundary integer limit" },
      { age: '149', result: true,message: "Upper boundary integer under limit" },
      { age: '200', result:false,message: "Invalid Partitioning value"},
        
    ];

    assertions.forEach(({age, result, message}) => {
      describe(`Age Validation ${message}`, function() {
        it(`should return ${result}`, function() {
          expect(BMI.ageValidation(age)).to.eql(result)
        })

    })
    })
  })


describe('Height Validation', function() {
    const assertions = [
        { height: '0', result: false,message: "Invalid partitioning value" },
        { height: '9', result: false,message: "Lower boundary integer over limit" },
        { height: '10', result: true,message: "Lower boundary integer limit" },
        { height: '11', result: true,message: "Lower boundary integer under limit" },
        { height: '170', result: true,message: "Valid partitioning value" },
        { height: '100', result: true,message: "Valid partitioning value" },
        { height: '301', result: false,message: "Upper boundary integer over limit" },
        { height: '300', result: true,message: "Upper boundary integer limit" },
        { height: '299', result: true,message: "Upper boundary integer under limit" },
        { height: '350', result: false,message: "Invalid partitioning value" },

    ];

    assertions.forEach(({height, result}) => {
      describe(`Height valid input${height}`, function() {
        it(`should return ${result}`, function() {
          expect(BMI.heightValidation(height)).to.eql(result)
        })
      })
    })
  })



describe('Weight validation', function() {
    const assertions = [
        { weight: '-20', result: false,message: "Invalid partitioning value" },
        { weight: '-1', result: false,message: "Lower boundary integer over limit" },
        { weight: '0', result: true,message: "Lower boundary integer limit" },
        { weight: '1', result: true,message: "Lower boundary integer under limit" },
        { weight: '40', result: true,message: "Valid partitioning value" },
        { weight: '100', result: true,message: "Valid partitioning value" },
        { weight: '701', result: false,message: "Upper boundary integer over limit" },
        { weight: '700', result: true,message: "Upper boundary integer limit" },
        { weight: '699', result: true,message: "Upper boundary integer under limit" },
        { weight: '800', result: false,message: "Invalid partitioning value" },
    ];

    assertions.forEach(({weight, result}) => {
      describe(`Weight Valid Input  ${weight}`, function() {
        it(`should return ${result}`, function() {
          expect(BMI.weightValidation(weight)).to.eql(result)
        })
      })
    })
  })

  describe('BMI calculation', function() {
    const assertions = [
      {height:180, weight:65, result:20.1},
      {height:140, weight:20, result:10.2},
      {height:140, weight:60, result:30.6},
      {height:10, weight:1, result:100}

    ];

    assertions.forEach(({height,weight, result}) => {
      describe(`Calculation Testing ${height,weight}`, function() {
        it(`should return ${result}`, function() {
          expect(BMI.computeBMI(height,weight)).to.eql(result)
        })
      })
    })
  })
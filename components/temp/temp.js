const add = (x, y) => { return x + y }

const adder = new Vue({
  el: '#kelvin',
  data: {
    degC: 0
  },
  computed: {
    result: function () {
      const celsius = parseFloat(this.degC)
      const kelvin = celsius + 273.15
//display nothing if no input
      if(isNaN(kelvin)){
        return ``
      }
//Error if kelvin is below 0
      else if(kelvin < 0){
        return `Nothing can go lower than Absolute Zero!`
      }
//Normal calculation display
      else{
      return `is ${kelvin}°K`
      }
    }
  }
})
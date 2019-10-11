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
      if(isNaN(kelvin)){
        return ``
      }
      else if(kelvin < 0){
        return `Nothing can go lower than Absolute Zero!`
      }
      else{
      return `is ${kelvin}°K`
      }
    }
  }
})
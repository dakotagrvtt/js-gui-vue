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
      else{
      return ` is ${kelvin}°K`
      }
    }
  }
})
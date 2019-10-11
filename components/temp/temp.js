const add = (x, y) => { return x + y }

const adder = new Vue({
  el: '#kelvin',
  data: {
    degC: 'Emmett'
  },
  computed: {
    result: function () {
      const celsius = parseFloat(this.degC)
      const kelvin = celsius + 273.15
      return `${celsius}°C is ${kelvin}°K`
    }
  }
})
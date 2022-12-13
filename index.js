/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

var employees = [
    {
      name: 'Maureen',
      checkIn: '0800',
      checkOut: '1700'
    },
    {
      name: 'Wanjiru',
      checkIn: '0900',
      checkOut: '1800'
    },
    {
      name: 'Kamau',
      checkIn: '1000',
      checkOut: '1900'
    }
  ];
//   When timestamps are needed, they will be provided as Strings in the form: "YYYY-MM-DD 800" or "YYYY-MM-DD 1800" e.g. "2018-01-01 2300" 
  var employees = [
    {
      name: 'Maureen',
      checkIn: '2018-01-01 0800',
      checkOut: '2018-01-01 1700'
    },
    {
      name: 'Wanjiru',
      checkIn: '2018-01-01 0900',
      checkOut: '2018-01-01 1800'
    },
    {
      name: 'Kamau',
      checkIn: '2018-01-01 1000',
      checkOut: '2018-01-01 1900'
    }
  ];
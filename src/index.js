module.exports = function toReadable (number) {
    let arr = number.toString().split('').map(n => +n)
    let result = ''
    let toTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if(number == 0) {
        result = 'zero' 
    } else if (number < 20) { 
      result = `${toTwenty[number]}`
    } else if (number > 19 && number < 100) {
      result = `${tens[arr[0]]} ${toTwenty[arr[1]]}`
    } else if (number > 99) {
      arr[1] == 1 ? result = `${toTwenty[arr[0]]} hundred ${toTwenty[arr[2]+10]}` : result = `${toTwenty[arr[0]]} hundred ${arr[1] == 0 ? '' : tens[arr[1]]+ ' '}${toTwenty[arr[2]]}`
    }
  
    return result.trim();
}

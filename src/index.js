module.exports = function toReadable (number) {
    let stringNum = number.toString()
    let arr = [stringNum.slice(0, 1), stringNum.slice(1)]
    let result = []
    let toTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number === 0 && number.toString().length == 1) {
        return 'zero'
    } else if(number < 20) {
        return toTwenty[number]
    } else if(number > 19 && number < 100) {
        result.push(tens[+arr[0]])
        result.push(toTwenty[+arr[1]])
    } else {
        result.push(toTwenty[+arr[0]] + ' hundred');
        result.push(toReadable(+arr[1]));
    }
    result[result.length - 1] == 'zero' ? result.pop() : 'zero'
    return result.join(' ').trim()
}

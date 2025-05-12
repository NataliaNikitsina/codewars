// Description:
//     Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
// doTest(     0, '00:00:00');
// doTest(    59, '00:00:59');
// doTest(    60, '00:01:00');
// doTest(    90, '00:01:30');
// doTest(  3599, '00:59:59');
// doTest(  3600, '01:00:00');
// doTest( 45296, '12:34:56');
// doTest( 86399, '23:59:59');
// doTest( 86400, '24:00:00');
// doTest(359999, '99:59:59');

function humanReadable (seconds) {
    let hour = Math.floor(seconds / 3600)
    if (hour < 10) {hour = '0' + hour}
    let minutes = Math.floor((seconds-(hour*3600)) / 60)
    if (minutes < 10) {minutes = '0' + minutes}
    let sec = seconds - (hour*3600) - (minutes*60)
    if (sec < 10) {sec = '0' + sec}
    return `${hour}:${minutes}:${sec}`
}

console.log(humanReadable(359999))
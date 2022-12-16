
function testFunc(string, stringsArray) {

    for (let i in stringsArray) {
        if (stringsArray[i] === string) {
            return i;
        }
    }
    return -1;
}

console.log(testFunc('test', ['sda', 'zxcas', 'sdfxvadsf', 't2est', 'dsfxfasdf']))

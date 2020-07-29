const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(l.split("").reduce((a,c,i,s) => i%2==0?a+s[i+1]:a+s[i-1],""));

const address = "Joe Smith 123 Main Highway Somewhere AZ 12345"
const regex = /\s(?=\d)|(?<=Street|Drive|Boulevard|Highway)\s|\s(?=[A-Z]{2})|\s(?=\d{5})/
const result = address.split(regex).join("|")

console.log(result)

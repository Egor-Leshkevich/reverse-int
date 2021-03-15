module.exports = function reverse (n) {
  var arr = [];
  var string;
  var number;
  arr= Array.from(String(n), Number);
  arr.reverse();
  string=arr.join('');
  number=parseInt(string,10);
  return number;
}

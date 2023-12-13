let height = undefined;


function announceHeight(height) {
  return "Height is " + (height ?? 'not defined');
}
console.log(announceHeight(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
console.log(announceHeight(15))

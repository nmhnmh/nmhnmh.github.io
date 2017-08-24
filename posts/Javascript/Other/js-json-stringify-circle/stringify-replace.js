var test = "test";
var circularObj = {
  name: 'jean',
  type: 'object',
  age: 22,
  hobby: ['football', 'guitar', 'piano'],
  friends:[{
    name: 'mary',
    age: 20
  }, {
    name: 'tom',
    age: 24
  }, aFriend]
};
function replace(k, v){
  console.log("################################################################################")
  console.log("this ===> " + JSON.stringify(this));
  console.log(`key ===> ${k}`);
  console.log(`value ===> ${v}`);
  return v;
}
var json = JSON.stringify(circularObj, replace, 2);
console.log(json);

## Using Promise Instead of Callbacks When Testing Asychronously

it('should work with promise', function(){
  return a_promise;
});

it('should work with promise', function(done){
  done();
});

## Skip and Focus to test faster

it.skip(), describle.skip()
it.only(), describle.only()
xit(), xdescrible()
fit(), fdescrible()

## Write Test Placeholders

it('should do something', fucntion(){
  //TODO: this is a blank test placeholder
  //fill with real test
})

## Clean Up Before And After Each Test

after()
before()
afterEach()
beforeEach()

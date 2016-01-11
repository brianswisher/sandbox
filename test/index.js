var test = require('blue-tape').test;

test("simple delay", function(assert) {
    return new Promise(function(resolve){
      assert.equal(1, 1);

      setTimeout(function(){
        resolve();
      },10)
    });
});

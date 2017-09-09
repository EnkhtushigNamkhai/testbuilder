/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) { //shouldn't it be not True?
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has prefix 51 and length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has prefix 52 and length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has prefix 53 and length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
    //detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
    //detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  //tests length 16, 19 for 644 - 649 prefix
  for (var i = 644; i <= 649; i++) {
    (function(i) {
      var prefix = i.toString();
      var len16 = '4567890123456';
      var len19 = '4567890123456789';
      it('has a prefix ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + len16)).to.equal('Discover');
      });

      it('has a prefix ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + len19)).to.equal('Discover');
      });

    }(i));
  }
  
  it('has a prefix 65 and a length of 16', function() {
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });

  it('has a prefix 65 and a length of 19', function() {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

});

describe('Maestro', function() {
  var expect = chai.expect;

  var prefixArr = ['5018', '5020', '5038', '6304'];
  var rest = '12345678';
  for (var i = 12; i <= 19; i++) {
    for (k = 0; k < prefixArr.length; k++) {
      (function(len, prefixIndex, rest) {
        var input = prefixArr[prefixIndex] + rest;
        it('has a prefix ' + prefixArr[prefixIndex] + ' and a length of ' + len, function() {
          expect(detectNetwork(input)).to.equal('Maestro');
        });
      }(i, k, rest));
    }
    rest += '1'; 
  }
  
});

/*China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.*/

describe('China UnionPay', function() {
  var expect = chai.expect;
  //prefix of 622126-622925 and a length 16 - 19
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix){
      var p = prefix.toString();
      it('has prefix ' + p + ' and a length of 16', function(){
        var rest = "7890123456";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

      it('has prefix ' + p + ' and a length of 17', function(){
        var rest = "78901234567";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });
      it('has prefix ' + p + ' and a length of 18', function(){
        var rest = "789012345678";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

      it('has prefix ' + p + ' and a length of 19', function(){
        var rest = "7890123456789";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

    }(prefix));
  }

  //624-626
  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix){
      var p = prefix.toString();
      it('has prefix ' + p + ' and a length of 16', function(){
        var rest = "4567890123456";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

      it('has prefix ' + p + ' and a length of 17', function(){
        var rest = "45678901234567";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });
      it('has prefix ' + p + ' and a length of 18', function(){
        var rest = "456789012345678";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

      it('has prefix ' + p + ' and a length of 19', function(){
        var rest = "4567890123456789";
        expect(detectNetwork(p + rest)).to.equal('China UnionPay');
      });

    }(prefix));
  }

  // 6282-6288 and a length of 16-19
  var rest = '567890123456';

  for (var i = 16; i <= 19; i++) {
    for (var k = 6282; k <= 6288; k++) {
      (function(len, prefix, rest){
        it('has prefix ' + prefix.toString() + ' and a length of '+ len, function() {
          expect(detectNetwork(prefix.toString() + rest)).to.equal('China UnionPay');
        });

      }(i, k, rest));
    }
    rest += '1';
  }

});


describe('Switch', function() {
  var expect = chai.expect;

  /*A prefix of 4903, 4905, 4911, 4936, 6333, 6759 and a length of 16, 18, or 19.*/
  var rest = '567890123456';
  var prefixArr = ['4903', '4905', '4911', '4936', '6333', '6759'];
  for (var i = 16; i <= 19; i++) {
    if (i !== 17) {
      for (var k = 0; k < prefixArr.length; k++) {
        (function(len, prefixIndex, rest) {
          it('has prefix ' + prefixArr[prefixIndex] + ' and a length of ' + len, function() {
            expect(detectNetwork(prefixArr[prefixIndex] + rest)).to.equal('Switch');
          });
          
        }(i, k, rest));
      }
    }
    rest += '1';
  }

  //564182, 633110 and a length of 16, 18, or 19.
  var rest = '7890123456'
  for (var i = 16; i <= 19; i++) {
    if (i !== 17) {
      (function(len, rest) {
        it('has prefix 564182 and a length of ' + i, function() {
          expect(detectNetwork('564182' + rest)).to.equal('Switch');
        });

        it('has prefix 633110 and a length of ' + i, function() {
          expect(detectNetwork('633110' + rest)).to.equal('Switch');
        });
      }(i, rest));
    }
  rest += '1';
  }
});




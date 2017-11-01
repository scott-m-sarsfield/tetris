var expect = require('chai').expect;


var Utils = require('../src/Utils');
var hello = Utils.hello;
var max = Utils.max;


describe("Utils",function(){
    describe("hello",function(){
        it('is hello',function(){
            expect(hello).to.equal('hello');
        });
    });
    describe("max",function(){
        it("returns the max of two integers",function(){
            expect(max(1,2)).to.equal(2);
            expect(max(2,1)).to.equal(2);
            expect(max(2,2)).to.equal(2);
            expect(max(-3,-2)).to.equal(-2);
        });
    });
});

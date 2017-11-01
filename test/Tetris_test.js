/* jshint esversion:6 */

var expect = require('chai').expect;

var Tetris = require('../src/tetris');

describe('Tetris',function(){
    it("is not null",function(){
        expect(Tetris).to.not.equal(null);
    });
});

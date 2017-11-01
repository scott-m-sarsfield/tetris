var expect = require('chai').expect;

var Environment = require('../src/Environment');

describe("Environment",function(){
    it("is a class / function",function(){
        expect(Environment).to.be.a("function");
    });

    describe("Constructor",function(){

    });

    describe("setEnv",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.setEnv).to.be.a('function');
        });
    });

    describe("block",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.block).to.be.a('function');
        });
    });

    describe("unblock",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.unblock).to.be.a('function');
        });
    });

    describe("isBlocked",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.isBlocked).to.be.a('function');
        });
    });

    describe("toString",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.toString).to.be.a('function');
        });
    });

    describe("genTable",function(){
        var e;
        beforeEach(function(){
            e = new Environment();
        });
        it("is a function",function(){
            expect(e.genTable).to.be.a('function');
        });
    });
});

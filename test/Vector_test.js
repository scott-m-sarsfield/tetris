var expect = require('chai').expect;

var Vector = require('../src/Vector');

describe('Vector',function(){
    it('is not null',function(){
        expect(Vector).to.not.equal(null);
    });

    describe("Constructor",function(){
        it("initializes with correct (x,y)",function(){
            var v = new Vector(5,2);
            expect(v.x).to.equal(5);
            expect(v.y).to.equal(2);
        });
        it("can initalize with negative coordinates",function(){
            var v = new Vector(-5,-4);
            expect(v.x).to.equal(-5);
            expect(v.y).to.equal(-4);
        });
    });

    describe("setVect",function(){
        var v;
        beforeEach(function(){
            v = new Vector(0,0);
        });
        it("can set the x and y coordinates",function(){
            v.setVect(4,4);
            expect(v.x).to.equal(4);
            expect(v.y).to.equal(4);
        });
    });

    describe("pos",function(){
        it("is a function",function(){
            var v = new Vector(0,0);
            expect(v.pos).to.be.a("function");
        });
    });

    describe("left",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.left).to.be.a("function");
        });
    });

    describe("right",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.right).to.be.a("function");
        });
    });

    describe("up",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.up).to.be.a("function");
        });
    });

    describe("down",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.down).to.be.a("function");
        });
    });


    describe("rotateLeftAbout",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.rotateLeftAbout).to.be.a("function");
        });
    });


    describe("rotateRightAbout",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.rotateRightAbout).to.be.a("function");
        });
    });


    describe("toString",function(){
        var v;
        beforeEach(function(){
            v =new Vector(2,2);
        });

        it("is a function",function(){
            expect(v.toString).to.be.a("function");
        });
    });
});

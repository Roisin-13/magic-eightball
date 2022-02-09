const predictFuture = require("../eightball");


test("predictFuture function exists...", () => {
    expect(predictFuture).toBeDefined();
});

describe("predict function", () => {
    it("random answer is: 'It is certain'", () => {
        expect(predictFuture()).toEqual('It is certain');
    });
    it("random answer is: 'It is decidedly so'", () => {
        expect(predictFuture()).toEqual('It is decidedly so');
    });
    it("random answer is: 'Reply hazy try again'", () => {
        expect(predictFuture()).toEqual('Reply hazy try again');
    });
    it("random answer is: 'It is certain'", () => {
        expect(predictFuture()).toEqual('It is certain');
    });
    it("random answer is: 'Cannot predict now'", () => {
        expect(predictFuture()).toEqual('Cannot predict now');
    });
    it("random answer is: 'Do not count on it'", () => {
        expect(predictFuture()).toEqual('Do not count on it');
    });
    it("random answer is: 'My sources say no'", () => {
        expect(predictFuture()).toEqual('My sources say no');
    });
    it("random answer is: 'Outlook not so good'", () => {
        expect(predictFuture()).toEqual('Outlook not so good');
    });
    it("random answer is: 'Signs point to yes'", () => {
        expect(predictFuture()).toEqual('Signs point to yes');
    });
});
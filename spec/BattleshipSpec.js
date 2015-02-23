describe("Battleship", function() {
    it("should have a ship with located at '3,4,5' on the board", function() {
	expect(ship1).toBe(3);
	expect(ship2).toBe(4);
	expect(ship3).toBe(5);
    });

    it("should get the user's valid guess", function() {
	expect(guess).toBeGreaterThan(-1) && expect(guess).toBeLessThan(8);
    });
});

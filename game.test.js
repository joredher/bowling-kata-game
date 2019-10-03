import Game from "./game"

var game;

beforeEach(() => {
    game = new Game ()
})

test('gutter game', () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0)
});

test('all ones', () => {
    rollMany(20, 1)
    expect(game.getScore()).toBe(20)
})


test('one spare', () => {
    rollSpare();
    game.roll(3)
    rollMany(17, 0)
    expect(game.getScore()).toBe(16)
})

test('one strike', () => {
    rollStrike();
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    expect(game.getScore()).toBe(24)
})

test('perfect game', () => {
    rollMany(12, 10)
    expect(game.getScore()).toBe(300)
})

function rollStrike() {
    game.roll(10);
}

function rollSpare() {
    game.roll(5);
    game.roll(5);
}

function rollMany(n, pins) {
    for (let i = 0; i < n; i++)
        game.roll(pins);
}
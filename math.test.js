const multiplicar = require("./math");

test("multiplicar dos numeros", () => {
    expect(multiplicar(3, 4)).toBe(12);
    expect(multiplicar(0, 0)).toBe(0);
    expect(multiplicar(400, 1)).toBe(400);
});

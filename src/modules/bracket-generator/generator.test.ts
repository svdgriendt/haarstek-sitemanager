import Bracket from "./bracket";
import Generator from "./generator";
import Match from "./match";

describe('Generator validates input', () => {
  test('Input = -1', () => {
    expect(() => Generator.generate(-1)).toThrowError('Size must be at least 2.');
  });
  test('Input = 0', () => {
    expect(() => Generator.generate(0)).toThrowError('Size must be at least 2.');
  });
  test('Input = 1', () => {
    expect(() => Generator.generate(1)).toThrowError('Size must be at least 2.');
  });
  test('Input = 2', () => {
    expect(() => Generator.generate(2)).toBeTruthy();
  });
  test('Input = 3', () => {
    expect(() => Generator.generate(3)).toBeTruthy();
  });
  test('Input = 100', () => {
    expect(() => Generator.generate(3)).toBeTruthy();
  });
});

describe('Generator generates correctly', () => {
  test('Size = 2', () => {
    expect(Generator.generate(2)).toEqual(new Bracket(new Match(1, 2)));
  });

  test('Size = 3', () => {
    expect(Generator.generate(3)).toEqual(new Bracket(new Match(1, new Match(2, 3))));
  });

  test('Size = 4', () => {
    expect(Generator.generate(4)).toEqual(new Bracket(new Match(new Match(1, 4), new Match(2, 3))));
  });

  test('Size = 5', () => {
    expect(Generator.generate(5)).toEqual(new Bracket(new Match(new Match(1, new Match(4, 5)), new Match(2, 3))));
  });

  test('Size = 6', () => {
    expect(Generator.generate(6)).toEqual(new Bracket(new Match(new Match(1, new Match(4, 5)), new Match(2, new Match(3, 6)))));
  });

  test('Size = 7', () => {
    expect(Generator.generate(7)).toEqual(new Bracket(new Match(new Match(1, new Match(4, 5)), new Match(new Match(2, 7), new Match(3, 6)))));
  });

  test('Size = 8', () => {
    expect(Generator.generate(8)).toEqual(new Bracket(new Match(new Match(new Match(1, 8), new Match(4, 5)), new Match(new Match(2, 7), new Match(3, 6)))));
  });
});
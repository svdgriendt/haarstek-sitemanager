import Generator from "./generator";

describe('Generator validates input', () => {
  test('Input = -1', () => {
    expect(() => Generator.generate(-1)).toThrowError('Only a size of 2 is currently supported.');
  });
  test('Input = 0', () => {
    expect(() => Generator.generate(0)).toThrowError('Only a size of 2 is currently supported.');
  });
  test('Input = 1', () => {
    expect(() => Generator.generate(1)).toThrowError('Only a size of 2 is currently supported.');
  });
  test('Input = 2', () => {
    expect(() => Generator.generate(2)).toBeTruthy();
  });
  test('Input = 3', () => {
    expect(() => Generator.generate(3)).toThrowError('Only a size of 2 is currently supported.');
  });
  test('Input = 100', () => {
    expect(() => Generator.generate(100)).toThrowError('Only a size of 2 is currently supported.');
  });
});

describe('Generator generates correctly', () => {
  test('Size = 2', () => {
    expect(Generator.generate(2)).toEqual({});
  });
});
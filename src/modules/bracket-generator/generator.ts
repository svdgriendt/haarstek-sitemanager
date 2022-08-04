import Bracket from "./bracket";
import Match from "./match";

export default abstract class Generator {
  public static generate(size: number): Bracket {
    if (size < 2) {
      throw 'Size must be at least 2.';
    }

    const numbers = Array.from(Array(size).keys(), x => x + 1);
    const finalMatch = Generator.generateMatchesTree(numbers);
    return new Bracket(finalMatch);
  }

  private static generateMatchesTree(numbers: number[]): Match {
    if (numbers.length === 2) {
      return new Match(numbers[0], numbers[1]);
    }
    if (numbers.length === 3) {
      return new Match(numbers[0], new Match(numbers[1], numbers[2]));
    }
    if (numbers.length === 4) {
      return new Match(new Match(numbers[0], numbers[3]), new Match(numbers[1], numbers[2]));
    }

    const splitMatchParts = Generator.splitMatchParts(numbers);
    const topMatch = Generator.generateMatchesTree(splitMatchParts.top);
    const bottomMatch = Generator.generateMatchesTree(splitMatchParts.bottom);
    return new Match(topMatch, bottomMatch);
  }

  private static splitMatchParts(numbers: number[]): { top: number[], bottom: number[] } {
    const numbersLength = numbers.length;
    if (numbersLength === 2) {
      return { top: [numbers[0]], bottom: [numbers[1]] };
    }

    const top = new Array<number>();
    const bottom = new Array<number>();

    for (let index = 0; index < numbersLength; ++index) {
      const goesToTop = Math.ceil(index / 2) % 2 === 0;
      (goesToTop ? top : bottom).push(numbers[index]);
    }

    return { top, bottom };
  }
}
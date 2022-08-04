import Bracket from "./bracket";
import Match from "./match";

export default abstract class Generator {
  public static generate(size: number): Bracket {
    if (size != 2 && size != 3) {
      throw 'Only a size of 2 or 3 is currently supported.';
    }

    const numbers = Array.from(Array(size).keys(), x => x + 1);
    const finalMatch = Generator.generateMatchesTree(numbers);
    return new Bracket(finalMatch);
  }

  private static generateMatchesTree(numbers: number[]) : Match {
    const splitMatches = Generator.splitMatches(numbers);

    if (splitMatches.bottom.length == 1) {
      return new Match(splitMatches.top[0], splitMatches.bottom[0]);
    } else {
      const perFinalMatch = new Match(splitMatches.bottom[0], splitMatches.bottom[1]);
      return new Match(splitMatches.top[0], perFinalMatch);
    }
  }

  private static splitMatches(numbers: number[]): { top: number[], bottom: number[] } {
    const numbersLength = numbers.length;

    if (numbersLength < 2) {
      throw 'Only 2 or more matches can be split.';
    }

    if (numbersLength == 2) {
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
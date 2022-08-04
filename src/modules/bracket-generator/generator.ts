import Bracket from "./bracket";
import Match from "./match";

export default abstract class Generator {
  public static generate(size: number): Bracket {
    if (size != 2 && size != 3) {
      throw 'Only a size of 2 or 3 is currently supported.';
    }

    if (size == 2) {
      const finalMatch = new Match(1, 2);
      return new Bracket(finalMatch);
    }
    else {
      const preFinalMatch = new Match(2, 3);
      const finalMatch = new Match(1, preFinalMatch);
      return new Bracket(finalMatch);
    }
  }
}
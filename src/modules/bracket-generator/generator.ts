import Bracket from "./bracket";

export default abstract class Generator {
  public static generate(size: number) : object {
    if (size != 2) {
      throw 'Only a size of 2 is currently supported.';
    }

    return new Bracket(1, 2);
  }
}
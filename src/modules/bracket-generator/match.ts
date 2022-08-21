export default class Match {
  public top: number | Match;
  public bottom: number | Match;

  constructor(top: number | Match, bottom: number | Match) {
    this.top = top;
    this.bottom = bottom;
  }

  public static is(x?: any) : x is Match {
    return x instanceof Match;
  }
}
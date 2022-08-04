export default class Match {
  public top: number | Match;
  public bottom: number | Match;

  constructor(top: number | Match, bottom: number | Match) {
    this.top = top;
    this.bottom = bottom;
  }
}
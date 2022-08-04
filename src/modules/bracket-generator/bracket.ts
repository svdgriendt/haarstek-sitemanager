import Match from "./match";

export default class Bracket {
  public finalMatch: Match;

  constructor(finalMatch: Match) {
    this.finalMatch = finalMatch;
  }
}
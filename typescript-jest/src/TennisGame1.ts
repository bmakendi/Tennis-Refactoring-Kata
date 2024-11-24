import { TennisGame } from "./TennisGame";

class Player {
  private name: string;
  private score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  didWinPoint(playerName: string) {
    if (playerName === this.name) this.score += 1;
  }
}

export class TennisGame1 implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    this.player1.didWinPoint(playerName);
    this.player2.didWinPoint(playerName);
  }

  displayScoreEquality() {
    switch (this.player1.getScore()) {
      case 0:
        return "Love-All";
      case 1:
        return "Fifteen-All";
      case 2:
        return "Thirty-All";
      default:
        return "Deuce";
    }
  }

  displayPlayerScore(score: number) {
    switch (score) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      default:
        return "";
    }
  }

  displayEndgameScore() {
    const minusResult: number =
      this.player1.getScore() - this.player2.getScore();
    if (minusResult === 1) return "Advantage player1";
    if (minusResult === -1) return "Advantage player2";
    if (minusResult >= 2) return "Win for player1";
    return "Win for player2";
  }

  getScore(): string {
    if (this.player1.getScore() === this.player2.getScore()) {
      return this.displayScoreEquality();
    }
    if (this.player1.getScore() >= 4 || this.player2.getScore() >= 4) {
      return this.displayEndgameScore();
    }
    return `${this.displayPlayerScore(this.player1.getScore())}-${this.displayPlayerScore(this.player2.getScore())}`;
  }
}

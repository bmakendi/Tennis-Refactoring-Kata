import { TennisGame } from "./TennisGame";

class Player {
  name: string;
  score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
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
    switch (this.player1.score) {
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
    const minusResult: number = this.player1.score - this.player2.score;
    if (minusResult === 1) return "Advantage " + this.player1.name;
    if (minusResult === -1) return "Advantage " + this.player2.name;
    if (minusResult >= 2) return "Win for " + this.player1.name;
    return "Win for " + this.player2.name;
  }

  getScore(): string {
    if (this.player1.score === this.player2.score) {
      return this.displayScoreEquality();
    }
    if (this.player1.score >= 4 || this.player2.score >= 4) {
      return this.displayEndgameScore();
    }
    return `${this.displayPlayerScore(this.player1.score)}-${this.displayPlayerScore(this.player2.score)}`;
  }
}

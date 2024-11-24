import { TennisGame } from "./TennisGame";

class Player {
  private name: string;
  private score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }
}

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;
  private player1: Player;
  private player2: Player;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  displayScoreEquality() {
    switch (this.m_score1) {
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

  displayPlayerScore(tempScore: number) {
    switch (tempScore) {
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
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) return "Advantage player1";
    if (minusResult === -1) return "Advantage player2";
    if (minusResult >= 2) return "Win for player1";
    return "Win for player2";
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
      return this.displayScoreEquality();
    }
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.displayEndgameScore();
    }
    return `${this.displayPlayerScore(this.m_score1)}-${this.displayPlayerScore(this.m_score2)}`;
  }
}

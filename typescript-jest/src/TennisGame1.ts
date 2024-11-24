import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  currentEquality() {
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

  checkPointDiffAndReturnAdvOrWin() {
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) return "Advantage player1";
    if (minusResult === -1) return "Advantage player2";
    if (minusResult >= 2) return "Win for player1";
    return "Win for player2";
  }

  getScore(): string {
    let score: string = "";
    let tempScore: number = 0;
    if (this.m_score1 === this.m_score2) {
      return this.currentEquality();
    }
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.checkPointDiffAndReturnAdvOrWin();
    }
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else {
        score += "-";
        tempScore = this.m_score2;
      }
      score += this.displayPlayerScore(tempScore);
    }
    return score;
  }
}

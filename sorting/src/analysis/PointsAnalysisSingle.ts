import {Analyzer} from "../types/Summary";
import {MatchData} from "../types/MatchData";
import {MatchResult} from "../types/MatchResult";

export class PointsAnalysisSingle implements Analyzer {
  constructor(public team: string) {
  }

  run(matches: MatchData[]): string {
    let teamPts = 0;
    matches.forEach(match => {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        teamPts += 3;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        teamPts += 3;

      } else if ((match[1] === this.team || match[2] === 'Wolves') && match[5] === MatchResult.Draw) {
        teamPts += 1;
      }
    });
    return `Team ${this.team} earned ${teamPts} this season`;
  }


}

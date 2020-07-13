import {Analyzer} from "../types/Summary";
import {MatchData} from "../types/MatchData";
import {MatchResult} from "../types/MatchResult";

export class PointsAnalysisMultiple implements Analyzer {
  constructor() {
  }

  run(matches: MatchData[]): string {
    matches = matches.filter(match => match[2] !== undefined);
    const teams = new Set(matches.map(match => match[2]));
    return Array.from(teams).map(team => {
      let teamPts = 0;
      matches.forEach(match => {
        if (match[1] === team && match[5] === MatchResult.HomeWin) {
          teamPts += 3;
        } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
          teamPts += 3;
        } else if ((match[1] === team || match[2] === 'Wolves') && match[5] === MatchResult.Draw) {
          teamPts += 1;
        }
      });
      return <{ team: string, teamPts: number }>{team, teamPts};
    }).sort(function(a, b){return a.teamPts - b.teamPts})
      .reverse()
      .map(sortedItem => `Team <b>${sortedItem.team}</b> earned <b>${sortedItem.teamPts}</b> this season`)
      .join(' <br> ');
  }
}

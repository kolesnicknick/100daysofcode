"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsAnalysisMultiple = void 0;
var MatchResult_1 = require("../types/MatchResult");
var PointsAnalysisMultiple = /** @class */ (function () {
    function PointsAnalysisMultiple() {
    }
    PointsAnalysisMultiple.prototype.run = function (matches) {
        matches = matches.filter(function (match) { return match[2] !== undefined; });
        var teams = new Set(matches.map(function (match) { return match[2]; }));
        return Array.from(teams).map(function (team) {
            var teamPts = 0;
            matches.forEach(function (match) {
                if (match[1] === team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                    teamPts += 3;
                }
                else if (match[2] === team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                    teamPts += 3;
                }
                else if ((match[1] === team || match[2] === 'Wolves') && match[5] === MatchResult_1.MatchResult.Draw) {
                    teamPts += 1;
                }
            });
            return { team: team, teamPts: teamPts };
        }).sort(function (a, b) { return a.teamPts - b.teamPts; })
            .reverse()
            .map(function (sortedItem) { return "Team <b>" + sortedItem.team + "</b> earned <b>" + sortedItem.teamPts + "</b> this season"; })
            .join(' <br> ');
    };
    return PointsAnalysisMultiple;
}());
exports.PointsAnalysisMultiple = PointsAnalysisMultiple;

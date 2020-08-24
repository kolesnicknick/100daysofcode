"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointsAnalysis = void 0;
var MatchResult_1 = require("../types/MatchResult");
var PointsAnalysis = /** @class */ (function () {
    function PointsAnalysis(team) {
        this.team = team;
    }
    PointsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var teamPts = 0;
        matches.forEach(function (match) {
            if (match[1] === _this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                teamPts += 3;
            }
            else if (match[2] === _this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                teamPts += 3;
            }
            else if ((match[1] === _this.team || match[2] === 'Wolves') && match[5] === MatchResult_1.MatchResult.Draw) {
                teamPts += 1;
            }
        });
        return "Team " + this.team + " earned " + teamPts + " this season";
    };
    return PointsAnalysis;
}());
exports.PointsAnalysis = PointsAnalysis;

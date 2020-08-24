"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./files/MatchReader");
var Summary_1 = require("./types/Summary");
var HtmlReport_1 = require("./reports/HtmlReport");
var PointsAnalyzerMultiple_1 = require("./analysis/PointsAnalyzerMultiple");
var fileReader = new MatchReader_1.MatchReader('football.csv');
fileReader.read();
var fileContent = fileReader.data;
var summary = new Summary_1.Summary(new PointsAnalyzerMultiple_1.PointsAnalysisMultiple(), new HtmlReport_1.HtmlReport());
// const summary2 = new Summary(
//   new PointsAnalysisSingle('Chelsea'),
//   new HtmlReport()
// );
summary.buildAndPrintReport(fileContent);
// summary2.buildAndPrintReport(fileContent);

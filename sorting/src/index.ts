// import {CsvFileReader} from "./files/CsvFileReader";
// import {MatchResult} from "./types/MatchResult";
// import {MatchData} from "./types/MatchData";
// import {MatchReader} from "./files/MatchReader";
// import { Summary } from "./types/Summary";
// import {PointsAnalysisSingle} from "./analysis/PointsAnalysisSingle";
// import {ConsoleReport} from "./reports/ConsoleReport";
// import {HtmlReport} from "./reports/HtmlReport";
// import {PointsAnalysisMultiple} from "./analysis/PointsAnalyzerMultiple";
//
// const fileReader = new MatchReader('football.csv');
// fileReader.read();
// const fileContent: MatchData[] = fileReader.data;
//
// const summary = new Summary(
//   new PointsAnalysisMultiple(),
//   new HtmlReport()
// )
//
// // const summary2 = new Summary(
// //   new PointsAnalysisSingle('Chelsea'),
// //   new HtmlReport()
// // );
//
// summary.buildAndPrintReport(fileContent);
// // summary2.buildAndPrintReport(fileContent);


import path from "path";

enum Hello {
  HELLO= 'whats up'
}

path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html');

console.log(Hello.HELLO);

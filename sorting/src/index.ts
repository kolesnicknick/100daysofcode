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


enum UnsupportedLoTypes {
  authoring = 'authoring',
}

const a = 'authoring';

console.log((<any>Object).values(UnsupportedLoTypes).includes(a));

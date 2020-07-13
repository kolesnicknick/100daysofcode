import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyser.run(matches);
    this.outputTarget.print(report);
  }
}

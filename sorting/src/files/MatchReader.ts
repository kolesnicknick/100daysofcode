import {CsvFileReader} from "./CsvFileReader";
import {MatchData} from "../types/MatchData";
import {convertDate} from "../utils";
import {MatchResult} from "../types/MatchResult";

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow = (row: string[]): MatchData => {
        return [
            convertDate(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5] as MatchResult,
            row[6],
        ]
    }
}

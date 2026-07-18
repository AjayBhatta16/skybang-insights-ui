import { Matchup } from "../_models/Matchup";
import { Week } from "../_models/Week";

export class MatchupService {
    // helper methods
    getWeekName(weekCode: string) {
        switch (weekCode) {
            case "WC": return "Wild Card";
            case "DIV": return "Divisional";
            case "CONF": return "Conference";
            case "SB": return "Super Bowl";
            default: return `Week ${weekCode}`;
        }
    }

    toWeek(weekId: string): Week {
        var parts = weekId.split("_");

        var year = parts[0];
        var weekCode = parts[1];

        var weekLabel = `${year} ${this.getWeekName(weekCode)}`;

        return {
            weekId,
            weekLabel,
        };
    }

    // ORM methods
    async getAvailableWeeks(): Promise<Week[]> {
        // TODO: replace this with a call to Firestore
        var weekIds = [
            "2025_18",
            "2026_1",
        ];

        return weekIds.map((weekId) => this.toWeek(weekId));
    }

    async getMatchupsForWeek(weekId: string): Promise<Matchup[]> {
        // TODO: replace this with a call to Firestore
        return [
            {
                "matchupId": "2026_01_NYG_DAL",
                "weekId": "2026_01",
                "awayTeamId": "123e4567-e89b-12d3-a456-426614174000",
                "homeTeamId": "123e4567-e89b-12d3-a456-426614174001",
                "awayTeamCode": "NYG",
                "homeTeamCode": "DAL",
                "projectedWinner": "away",
                "projectionCorrect": true
            },
        ];
    }
}
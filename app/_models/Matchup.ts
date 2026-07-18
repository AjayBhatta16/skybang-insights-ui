export type Matchup = {
    // general properties
    matchupId: string;
    weekId: string;
    projectedWinner: 'home' | 'away';
    projectionCorrect?: boolean;

    // home team properties
    homeTeamId: string;
    homeTeamCode: string;

    // away team properties
    awayTeamId: string;
    awayTeamCode: string;
}
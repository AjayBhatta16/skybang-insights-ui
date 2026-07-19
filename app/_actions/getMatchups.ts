"use server";

import { MatchupService } from "../_services/MatchupService";

export async function getMatchupsByWeekAction(weekId: string) {
    var matchupService = new MatchupService();

    return await matchupService.getMatchupsForWeek(weekId);
}
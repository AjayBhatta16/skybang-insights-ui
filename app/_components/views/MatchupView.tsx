"use client";

import { useState } from "react";
import { WeekSelector } from "../WeekSelector";
import { MatchupRow } from "../MatchupRow";
import { getMatchupsByWeekAction } from "@/app/_actions/getMatchups";
import { Week } from "@/app/_models/Week";
import { Matchup } from "@/app/_models/Matchup";

export type MatchupViewProps = {
    weeks: Week[];
    initialMatchups: Matchup[];
};

export function MatchupView(props: MatchupViewProps) {
    const [matchups, setMatchups] = useState(props.initialMatchups);

    var selectedWeekUpdate = async (weekLabel: string) => {
        console.log('Week updated:', weekLabel)
        var weekId = props.weeks.filter(w => w.weekLabel === weekLabel)[0].weekId;

        var matchups = await getMatchupsByWeekAction(weekId);

        setMatchups(matchups);
    };

    return (
        <>
            <WeekSelector 
                weekLabels={props.weeks.map(w => w.weekLabel)} 
                selectedWeekUpdate={selectedWeekUpdate}
            />
            <div className="flex flex-row">
                {
                matchups.map(m => {
                    return (
                    <MatchupRow 
                        matchup={m} 
                        key={m.matchupId} 
                    />
                    )
                })
                }
            </div>
        </>
    )
}
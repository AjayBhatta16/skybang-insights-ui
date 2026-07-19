import { CSSProperties } from "react";
import { Matchup } from "../_models/Matchup";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export type MatchupRowProps = {
    matchup: Matchup;
};

function getTeamStyle(matchup: Matchup, home: boolean = false): CSSProperties {
    if ((matchup.projectedWinner === 'home') === home) {
        return {
            backgroundColor: '#F00',
            border: '2px solid #00F',
            color: '#00F',
        };
    }

    return {
        backgroundColor: '#000',
        border: '2px solid #555',
        color: '#555',
    };
}

export function MatchupRow(props: MatchupRowProps) {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-row items-center">
                    <div 
                        style={getTeamStyle(props.matchup)}
                        className="rounded-lg p-4 mr-2"
                    >
                        <h3 className="font-bold text-xl">{props.matchup.awayTeamCode}</h3>
                    </div>
                    <h1 className="text-3xl mx-4">@</h1>
                    <div 
                        style={getTeamStyle(props.matchup, true)}
                        className="rounded-lg p-4 ml-2"
                    >
                        <h3 className="font-bold text-xl">{props.matchup.homeTeamCode}</h3>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
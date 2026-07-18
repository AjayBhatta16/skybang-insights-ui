import { Team } from "../_models/Team";

export class TeamService {
    // ORM methods
    async getTeams(): Promise<Team[]> {
        // TODO: replace this with a call to Firestore
        return [
            {
                "teamId": "123e4567-e89b-12d3-a456-426614174000",
                "city": "New York",
                "name": "Giants",
                "teamCode": "NYG",
                "color1": "#0B2265",
                "color2": "#A71930"
            },
            {
                "teamId": "123e4567-e89b-12d3-a456-426614174001",
                "city": "Dallas",
                "name": "Cowboys",
                "teamCode": "DAL",
                "color1": "",
                "color2": ""
            }
        ];
    }
}
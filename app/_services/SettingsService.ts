import { Settings } from "../_models/Settings";

export class SettingsService {
    // ORM Methods
    getSettings(): Settings {
        return {
            id: '',
            currentWeekId: '2026_1'
        }
    }
}
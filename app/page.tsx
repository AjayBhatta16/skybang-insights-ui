import { MatchupService } from "./_services/MatchupService";
import { SettingsService } from "./_services/SettingsService";
import { MatchupView } from "./_components/views/MatchupView";

export default async function Home() {
  var matchupService = new MatchupService();
  var settingsService = new SettingsService();

  var settings = await settingsService.getSettings();

  var weeks = await matchupService.getAvailableWeeks();
  var matchups = await matchupService.getMatchupsForWeek(settings.currentWeekId);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-dark font-sans text-zinc-50">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-dark px-16 py-32 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            We have the script.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            Here's this week's projected results. To see that we never miss, you can use the drop down to see our past predictions.
          </p>
          <MatchupView
            weeks={weeks}
            initialMatchups={matchups}
          />
        </div>
      </main>
    </div>
  );
}

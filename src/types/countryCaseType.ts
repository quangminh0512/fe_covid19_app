export type CountryCase = {
  Country: string;
  Flag?: string;
  Cases: number;
  Recovered: number;
  Deaths: number;
  Active: number;
  Critical: number;
  NewConfirmed?: number;
  TodayCases?: number;
  TodayRecovered?: number;
  TodayDeaths?: number;
};
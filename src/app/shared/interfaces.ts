export interface IWheaterInfo {
  cityName: string;
  iconSrc: string;
  description: string;
  /** In celsius */
  temperature: number;
  /** in meters per second */
  windSpeed: number;
  /** In % */
  humidity: number;
}

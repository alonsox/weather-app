export interface IWheaterInfo {
  cityName: string;
  iconPath: string;
  description: string;

  /** In celsius */
  minTemperature: number;

  /** In celsius */
  maxTemerature: number;

  /** in meters per second */
  windSpeed: number;

  /** In % */
  humidity: number;
}

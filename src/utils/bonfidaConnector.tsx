import { BonfidaTrade } from './types';

export default class BonfidaApi {
  static URL: string = 'https://api.dexlab.space/v1/trade-history/';

  static async get(path: string) {
    try {
      
      const response = await fetch(this.URL + path);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching from Bonfida API ${path}: ${err}`);
    }
    return null;
  }

  static async getRecentTrades(
    marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    return BonfidaApi.get(`${marketAddress}`);
  }
}

export const BONFIDA_DATA_FEED = 'https://api.dexlab.space/v1/trade-history/tv';

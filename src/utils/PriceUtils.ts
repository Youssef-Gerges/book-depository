import axios from 'axios';

export default class PriceUtils {
  public static getPrice = async (
    amount: string
  ): Promise<{ amount: string; code: string }> => {
    const currency = localStorage.getItem('currency') ?? 'USD';
    if (currency === 'USD') {
      //   return `$ ${amount}`;
      return { amount: amount, code: '$' };
    }

    const res = await axios.get(
      'https://currency-exchange.p.rapidapi.com/exchange',
      {
        params: { from: 'USD', to: 'EGP', q: amount },
        headers: {
          'X-RapidAPI-Key':
            '3492fd8a44msh6e6ca1e85b4d121p1b3958jsn9971b2ab362e',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        },
      }
    );

    return { amount: res.data, code: 'E£' };
  };
}

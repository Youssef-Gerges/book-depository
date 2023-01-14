import axios from 'axios';

export default class BookUtils {
  public static calcRating = (reviews: [{ rating: number }] | null) => {
    if (reviews) {
      let sum = 0;
      reviews.map((rating) => {
        sum = sum + rating.rating;
      });
      return sum / reviews.length;
    }
    return 0;
  };

  public static getPrice = async (amount: string): Promise<string> => {
    const currency = localStorage.getItem('currency') ?? 'USD';
    if (currency === 'USD') {
      return `$ ${amount}`;
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

    return `E£ ${res.data}`;
  };
}

import api from './Api';
import bcrypt from 'bcryptjs';

export default class AuthUtils {
  public static createUser = async (
    email: string,
    password: string,
    name: string
  ): Promise<any> => {
    return api.post('/users', {
      email: email,
      password: await bcrypt.hash(password, 10),
      name: name,
    });
  };

  public static signUser = async (
    email: string,
    password: string
  ): Promise<any> => {
    const res = await api.get(`/users?email=${email}`);
    if (res.data.length > 0) {
      const check = await bcrypt.compare(password, res.data[0].password);
      return check;
    }
    return false;
  };
}

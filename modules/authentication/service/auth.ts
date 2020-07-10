import * as db from "../../../database/mongodb";

export class AuthenticationService {

  protected async hello () {
    try {
      const result = {
        data: 'Hola Mundo :3'
      };
      const database = await db.connect()
      if (database) console.log('Connection db OK.')
      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}

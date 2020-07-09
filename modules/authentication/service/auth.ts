import * as db from "../../../database/mongodb";

export class AuthenticationService {

  protected async hello () {
    try {
      const result = {
        data: 'Hola Mundo :3'
      };
      const database = await db.connect()
      console.log(database)
      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}

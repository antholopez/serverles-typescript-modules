import { Context } from 'aws-lambda';
import { MessageUtil } from '../../../utils/message';
import { AuthenticationService } from '../service/auth';

export class AuthenticationController extends AuthenticationService {

  async create (event: any, context?: Context) {
    console.log('functionName', context.functionName);

    try {
      const result = await this.hello();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}

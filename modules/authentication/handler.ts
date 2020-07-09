
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';

const dotenvPath = path.join(__dirname, '../../', 'config/.env.dev');
dotenv.config({
  path: dotenvPath,
});

import { AuthenticationController } from './controller/auth';
const authenticationController = new AuthenticationController();

export const hello: Handler = (event: any, context: Context) => {
  return authenticationController.create(event, context);
};

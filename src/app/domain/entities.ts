/**
 * Created by malianghang on 2017/1/18.
 */
export class Todo {
  id: string;
  desc: string;
  completed: boolean;
  userId: number;
}

export class User {
  id: number;
  username: string;
  password: string;
}

export class Auth {
  user?: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
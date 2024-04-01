import { User } from "src/users/entities/user.entity";

export class UserResponsePayload {
  constructor(user: User) {
    (this.email = user.email),
      (this.sub = user.id),
      (this.role = user.role),

      (this.id = user.id);

  }

  email: string;
  sub: string;
  role: string;

  id: string;

}

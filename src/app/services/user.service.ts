import { Subject } from 'rxjs';
import { User } from '../models/User.model';

export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>(); //emmet un tableau de user

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}

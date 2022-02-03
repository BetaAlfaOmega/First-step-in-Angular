import { Subject } from 'rxjs';
import { User } from '../models/User.model';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Bao',
      lastName: 'Mijijy',
      email: 'bao@mijiji.com',
      drinkPreference: 'Fanta pomme',
      hobbies: ['regarder des films', 'ne rien faire'],
    },
  ];
  userSubject = new Subject<User[]>(); //emmet un tableau de user
  counterSubject = new Subject<number>(); //emmet un tableau de user

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  count() {
    setInterval(() => {
      this.counterSubject.next(1);
    }, 1000);
  }
}

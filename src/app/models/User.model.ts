export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public drinkPreference: string,
    public hobbies?: string[]
  ) {
    // public: va créer un propriéré avec les noms dans le model user
    //le ?: veut dire que c'est optionnel
  }
}

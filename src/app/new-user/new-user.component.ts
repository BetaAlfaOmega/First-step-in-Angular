import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder, //formBuilder est une classe, un outil qui nous permet de créer des objet de type formulaire plus facilement
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  //initialiser le formulaire
  initForm() {
    this.userForm = this.FormBuilder.group({
      firstName: ['', Validators.required], //form controls
      lastName: ['', Validators.required], //array: '' : valeur par défaut, validators: validateurs qui peut être un array
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.FormBuilder.array([]),
    });
  }

  //
  onSubmitForm() {
    const formValue = this.userForm.value; //on a ici tous les valeurs du control
    const newUser = new User(
      formValue['firstname'], //pour récupérer les différents éléments
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  //typage: permet de retourner la formArray sous forme de FormArray? tsy azoko
  getHobbies() {
    return this.userForm.get('hobbies') as FormArray; //pour pouvoir recupérer le formArray des hobbies depuis le template
    //get: recuperer le control et non pas la valeur du control
  }

  //ajouter un control: ajouter un hobby
  onAddHobby() {
    const newHobbyControl = this.FormBuilder.control('', Validators.required); //à partir du moment que vous avez creez un hobby le champs devient requis
    this.getHobbies().push(newHobbyControl);
  }
}

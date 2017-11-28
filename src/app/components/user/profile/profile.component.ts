import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  username: String;
  firstname: String;
  lastname: String;
  email: String;
  user = {};
  userId: String;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService, private router: Router) { }

  // updateUser(email: String, firstName: String, lastName: String) {
  //   const newUser = this.user;
  //
  //   newUser.firstname = firstName;
  //   newUser.lastname = lastName;
  //   newUser.email = email;
  //
  //   this.userService.updateUser(newUser)
  //     .subscribe((status) => {
  //       console.log(status);
  //     });
  // }

  deleteUser() {
    this.userService.deleteUser(this.user['_id'])
      .subscribe((user) => {
        this.router.navigate(['login']);
      });
  }

  updateUser(email: String, firstName: String, lastName: String) {
    const updatedUser = {
      _id : this.user['_id'],
      username : this.username,
      firstname : firstName,
      lastname :  lastName,
      email : email

    };

    this.userService.updateUser(updatedUser)
        .subscribe((status) => {
          console.log(status);
          console.log(updatedUser);
        });

    // this.userService.updateUser(updatedUser)
    //   .subscribe(
    //     (user: any) => {
    //       this.userService.findUserById(updatedUser._id)
    //         .subscribe(
    //           (user: any) => {
    //             localStorage.setItem('user', JSON.stringify(user));
    //             this.ngOnInit();
    //           }
    //         )
    //     },
    //   );
  }

  getUser() {
    this.user = this.sharedService.user;
    console.log(this.user);
    this.username = this.user['username'];
    this.firstname = this.user['firstname'];
    this.lastname = this.user['lastname'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
    console.log(this.userId);
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          console.log(this.userId);
        }
      );

    this.getUser();

    // this.userService.findUserById(this.userId)
    //   .subscribe((user: User) => {
    //     console.log(user);
    //     this.user = user;
    //     this.username = user.username;
    //     console.log(this.username);
    //   });

    // this.paramSubscriptions = this.activatedRoute.params
    //   .subscribe(params => {
    //     this.user = this.sharedService.user || {};
    //   });
  }

}

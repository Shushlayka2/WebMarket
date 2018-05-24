import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

    user: User = new User();
    userClone: User;

    updatable: string = "readonly";
    isHidden: string;
    editorIsHidden: string = "hidden";

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getUser().subscribe(user => this.user = user);
    }

    getEditor() {
        this.userClone = this.user;
        this.isHidden = "hidden";
        this.editorIsHidden = "";
        this.updatable = "";
    }

    cancel() {
        this.user = this.userClone;
        this.isHidden = "";
        this.editorIsHidden = "hidden";
        this.updatable = "readonly";
    }

    updateUser() {
        this.userService.updateUser(this.user).subscribe();
        this.isHidden = "";
        this.editorIsHidden = "hidden";
        this.updatable = "readonly";
    }
}
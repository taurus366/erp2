import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../../shared/ui/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title: Title,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.title.setTitle('Sign in');
  }

  private initForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  login() {
    this.userService.login(this.form.value)
    .subscribe(async _ => {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')?? '/';
      await this.router.navigateByUrl(returnUrl);
    });
  }
}

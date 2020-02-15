import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  success(message, title) {
      this.toastr.success(message, title);
  }
  warning(message, title) {
    this.toastr.warning(message, title);
  }
  erro(message, title) {
  this.toastr.error(message, title);
}

}

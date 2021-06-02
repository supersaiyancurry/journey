import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = "https://jsonplaceholder.typicode.com/users/";
    return this.http.get(url);
  }

  postData(user) {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    return this.http.post(url, user);
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    // console.log(user);
  }
}

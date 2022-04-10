export class User {

     private login: string = "";
     private password: string = "";

     public setLogin (login: string) : void {
          this.login = login;
     }

     public getLogin () : string {
          return this.login;
     }

     public setPassword (password: string) : void {
          this.password = password;
     }

     public getPassword () : string {
          return this.password;
     }
}
export class User {

     private userName: string = "";
     private password: string = "";

     public setUserName (userName: string) : void {
          this.userName = userName;
     }

     public getUserName () : string {
          return this.userName;
     }

     public setPassword (Password: string) : void {
          this.password = Password;
     }

     public getPassword () : string {
          return this.password;
     }
}
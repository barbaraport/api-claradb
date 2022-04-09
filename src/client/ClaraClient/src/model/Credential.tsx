export class Credential {
     
     private code: string;

     constructor (code: string) {
          this.code = code;
     }

     public getCode () : string {
          return this.code;
     }
}
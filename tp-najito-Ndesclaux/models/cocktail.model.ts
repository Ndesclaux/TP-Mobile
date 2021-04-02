export class Cocktail {
 id: number;
 name: string;
 img: string;
 instructions: string;
 thumbnail?: string;

 constructor(id: number, name:string, /*img:string,*/ instruction:string, thumbnail: string) {
  this.id = id;
  this.name = name;
  /*this.img = img;*/
  this.instructions = instruction;
  this.thumbnail = thumbnail;
 }

}

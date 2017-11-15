import { Trailer } from "./trailers";

export class Movie{
  public trailers : Array<Trailer>=[]

  constructor(public title:string, public releasedate:string, public studio:string,
              public poster:string, public location: string, public rating:string,
              public genre:Array<string>, public directors:string, public actors:Array<string>,
              trailers: Array<Trailer>){

    trailers.forEach((item)=>{
      item = new Trailer(item.postdate,item.url,item.type,item.exclusive,item.hd)
      this.trailers.push(item)
    })

  }
}

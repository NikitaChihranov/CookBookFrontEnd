export class Recipe{
  constructor(
    public _id: string,
    public name?: string,
    public ingredients?: string,
    public photo?: string,
    public text?: string,
    public author?: string,
    public dateOfCreation?: string
  )
  {
  }
}

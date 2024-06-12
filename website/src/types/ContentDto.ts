export class GameItem {
  id: string;
  name: string;
  description: string;
  img: string;
  cooldown?: number;
  type?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    img: string,
    cooldown?: number,
    type?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
    this.cooldown = cooldown;
    this.type = type;
  }
}

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

export class GameItemType {
  id: number;
  key: string;
  name: string;

  constructor(
    id: number,
    key: string,
    name: string,
  ) {
    this.id = id;
    this.key = key;
    this.name = name;
  }
}

export class PremiumGameItem {
  id: string;
  name: string;
  skill: string;
  effect: string;
  image: string;
  howToGet?: string;
  type?: ENUM_PREMIUM_GAME_ITEM_TYPE;

  constructor(
    id: string,
    name: string,
    skill: string,
    effect: string,
    image: string,
    howToGet?: string,
    type?: ENUM_PREMIUM_GAME_ITEM_TYPE
  ) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.effect = effect;
    this.image = image;
    this.howToGet = howToGet;
    this.type = type;
  }
}

export enum ENUM_PREMIUM_GAME_ITEM_TYPE {
  ARTIFACT,
  MOUNT,
  BACK_ACCESSORY,
  SOUL
}

export class StandarGameItem {
  id: string;
  name: string;
  description: string;
  image: string;

  constructor(
    id: string,
    name: string,
    description: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

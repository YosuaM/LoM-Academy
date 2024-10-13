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
  ico?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    image: string,
    ico?: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.ico = ico;
  }
}

export class MountParking {
  mount: PremiumGameItem;
  coins: number;
  rewards: StandarGameItem[];

  constructor (
    mount: PremiumGameItem,
    coins: number,
    rewards: StandarGameItem[]
  ) {
    this.mount = mount;
    this.coins = coins;
    this.rewards = rewards;
  }
}

export class FarmBuilding {
  id: string;
  name: string;
  image: string;
  levels: FarmBuildingLevel[];

  constructor(
    id: string,
    name: string,
    image: string,
    levels: FarmBuildingLevel[]
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.levels = levels;
  }
}

export class FarmBuildingLevel {
  level: number;
  cost: number;
  duration: number;
  dailySeeds?: number;
  harvestQuantityBonus?: number;
  growthSpeedBonus?: number;
  globalAtk?: number;
  globalDef?: number;
  
  constructor (
    level: number,
    cost: number,
    duration: number,
    dailySeeds?: number,
    harvestQuantityBonus?: number,
    growthSpeedBonus?: number,
    globalAtk?: number,
    globalDef?: number
  ) {
    this.level = level;
    this.cost = cost;
    this.duration = duration;
    this.dailySeeds = dailySeeds;
    this.harvestQuantityBonus = harvestQuantityBonus;
    this.growthSpeedBonus = growthSpeedBonus;
    this.globalAtk = globalAtk;
    this.globalDef = globalDef;
  }
}

export class Crops {
  id: string;
  name: string;
  image: string;
  duration: number;
  amount: number;

  constructor(
    id: string,
    name: string,
    image: string,
    duration: number,
    amount: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.duration = duration;
    this.amount = amount;
  }
}
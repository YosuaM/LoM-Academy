/* DATA */
const familyPowers = [
  {
   "server": 1001,
   "family": "Origin",
   "power": 1728496966
  },
  {
   "server": 1001,
   "family": "Vaultcity",
   "power": 1264650533
  },
  {
   "server": 1001,
   "family": "TriadPhoenix",
   "power": 1259944035
  },
  {
   "server": 1001,
   "family": "TriadFenrir",
   "power": 1075416950
  },
  {
   "server": 1001,
   "family": "TriadHorus",
   "power": 590799121
  },
  {
   "server": 1001,
   "family": "Clannabis",
   "power": 435547239
  },
  {
   "server": 1001,
   "family": "BeyondTheWall",
   "power": 432395862
  },
  {
   "server": 1001,
   "family": "Aces",
   "power": 400872362
  },
  {
   "server": 1001,
   "family": "BOSS",
   "power": 394322203
  },
  {
   "server": 1001,
   "family": "TheStrawhats",
   "power": 327272058
  },
  {
   "server": 1002,
   "family": "EGC",
   "power": 1780057246
  },
  {
   "server": 1002,
   "family": "ChaoticMushies",
   "power": 1223540227
  },
  {
   "server": 1002,
   "family": "CoffeeBreak",
   "power": 1202636661
  },
  {
   "server": 1002,
   "family": "Purgatory",
   "power": 1177265675
  },
  {
   "server": 1002,
   "family": "Anonymous",
   "power": 986062391
  },
  {
   "server": 1002,
   "family": "Mushies",
   "power": 572335954
  },
  {
   "server": 1002,
   "family": "The_OG_Shrooms",
   "power": 571585804
  },
  {
   "server": 1002,
   "family": "Armageddon",
   "power": 454013287
  },
  {
   "server": 1002,
   "family": "《Tempare》",
   "power": 333847301
  },
  {
   "server": 1002,
   "family": "MagicShrooms",
   "power": 331423556
  },
  {
   "server": 1003,
   "family": "Unity",
   "power": 1686235023
  },
  {
   "server": 1003,
   "family": "TrashPandas",
   "power": 1405990687
  },
  {
   "server": 1003,
   "family": "ShroomFactory",
   "power": 1188856287
  },
  {
   "server": 1003,
   "family": "Unityll",
   "power": 1080350217
  },
  {
   "server": 1003,
   "family": "chicken",
   "power": 1029751006
  },
  {
   "server": 1003,
   "family": "SycoTherapy",
   "power": 534872053
  },
  {
   "server": 1003,
   "family": "PhantomTroupe",
   "power": 296106008
  },
  {
   "server": 1003,
   "family": "Little",
   "power": 290535443
  },
  {
   "server": 1003,
   "family": "KarnageRealm",
   "power": 253500126
  },
  {
   "server": 1003,
   "family": "Olympus",
   "power": 248209289
  },
  {
   "server": 1004,
   "family": "HIVE",
   "power": 1695968927
  },
  {
   "server": 1004,
   "family": "MagicMushrooms",
   "power": 1348681452
  },
  {
   "server": 1004,
   "family": "PowerBottoms",
   "power": 945658657
  },
  {
   "server": 1004,
   "family": "Exodus",
   "power": 883227636
  },
  {
   "server": 1004,
   "family": "GlitterFarts",
   "power": 728213361
  },
  {
   "server": 1004,
   "family": "FRIED",
   "power": 601235951
  },
  {
   "server": 1004,
   "family": "ShroomZone",
   "power": 467438755
  },
  {
   "server": 1004,
   "family": "Shroomies",
   "power": 398911286
  },
  {
   "server": 1004,
   "family": "RANK1",
   "power": 357160792
  },
  {
   "server": 1004,
   "family": "Dragonkin",
   "power": 336274798
  },
  {
   "server": 1005,
   "family": "Shroomies",
   "power": 1619656162
  },
  {
   "server": 1005,
   "family": "CCDeclined",
   "power": 1284393887
  },
  {
   "server": 1005,
   "family": "Akatsuki",
   "power": 1254408239
  },
  {
   "server": 1005,
   "family": "TheChickens",
   "power": 488357079
  },
  {
   "server": 1005,
   "family": "CelestialRose",
   "power": 485532935
  },
  {
   "server": 1005,
   "family": "Shroomacon",
   "power": 461328357
  },
  {
   "server": 1005,
   "family": "Shroomates",
   "power": 433555437
  },
  {
   "server": 1005,
   "family": "Shroomdom",
   "power": 290822517
  },
  {
   "server": 1005,
   "family": "DevilsEmpire",
   "power": 240801417
  },
  {
   "server": 1005,
   "family": "idk",
   "power": 208325556
  },
  {
   "server": 1006,
   "family": "FairyTale",
   "power": 1536613703
  },
  {
   "server": 1006,
   "family": "HoneyJade",
   "power": 1338516721
  },
  {
   "server": 1006,
   "family": "OpiuMush",
   "power": 737717628
  },
  {
   "server": 1006,
   "family": "Unseen",
   "power": 505032786
  },
  {
   "server": 1006,
   "family": "Shroom_Power",
   "power": 304313264
  },
  {
   "server": 1006,
   "family": "Alfheim",
   "power": 273909079
  },
  {
   "server": 1006,
   "family": "StrawHats",
   "power": 242790812
  },
  {
   "server": 1006,
   "family": "Kaddins",
   "power": 230568931
  },
  {
   "server": 1006,
   "family": "Luminous",
   "power": 183667053
  },
  {
   "server": 1006,
   "family": "MidKnights",
   "power": 176587032
  },
  {
   "server": 1007,
   "family": "PANTHEON",
   "power": 1728480005
  },
  {
   "server": 1007,
   "family": "CthuwuFwtagn",
   "power": 942070300
  },
  {
   "server": 1007,
   "family": "Evergreen",
   "power": 890949192
  },
  {
   "server": 1007,
   "family": "Heaven",
   "power": 867220553
  },
  {
   "server": 1007,
   "family": "SnuggleHuddle",
   "power": 823728445
  },
  {
   "server": 1007,
   "family": "Lethal",
   "power": 337256452
  },
  {
   "server": 1007,
   "family": "RAGNAROK",
   "power": 315358432
  },
  {
   "server": 1007,
   "family": "Shroomywoomy",
   "power": 272877556
  },
  {
   "server": 1007,
   "family": "YeahBuddy",
   "power": 253474800
  },
  {
   "server": 1007,
   "family": "Valhalla",
   "power": 231268528
  },
  {
   "server": 1008,
   "family": "Rebirth",
   "power": 1669158664
  },
  {
   "server": 1008,
   "family": "psychedelic",
   "power": 1196840272
  },
  {
   "server": 1008,
   "family": "LampShit",
   "power": 934339597
  },
  {
   "server": 1008,
   "family": "٭𝔾ood𝕍ibes٭",
   "power": 481434142
  },
  {
   "server": 1008,
   "family": "Topshroom",
   "power": 344567067
  },
  {
   "server": 1008,
   "family": "Light",
   "power": 336604602
  },
  {
   "server": 1008,
   "family": "THESMURFS",
   "power": 317262235
  },
  {
   "server": 1008,
   "family": "mantras",
   "power": 287724077
  },
  {
   "server": 1008,
   "family": "Dreamers",
   "power": 268295822
  },
  {
   "server": 1008,
   "family": "Almos",
   "power": 250566356
  },
  {
   "server": 1009,
   "family": "Tempest",
   "power": 1464000143
  },
  {
   "server": 1009,
   "family": "LostShrooms",
   "power": 1085072444
  },
  {
   "server": 1009,
   "family": "Mushroom",
   "power": 444788914
  },
  {
   "server": 1009,
   "family": "ShroominOut",
   "power": 384872116
  },
  {
   "server": 1009,
   "family": "SolCovenant",
   "power": 380373848
  },
  {
   "server": 1009,
   "family": "TopShelfShroom",
   "power": 320213048
  },
  {
   "server": 1009,
   "family": "ShadowWarriors",
   "power": 255247519
  },
  {
   "server": 1009,
   "family": "HellsDragons",
   "power": 220792158
  },
  {
   "server": 1009,
   "family": "MintyGang",
   "power": 220033613
  },
  {
   "server": 1009,
   "family": "RavensNest",
   "power": 204005640
  },
  {
   "server": 1010,
   "family": "Legends",
   "power": 1686983239
  },
  {
   "server": 1010,
   "family": "Myths",
   "power": 845302933
  },
  {
   "server": 1010,
   "family": "OnePiece",
   "power": 444405705
  },
  {
   "server": 1010,
   "family": "CRACK",
   "power": 420795192
  },
  {
   "server": 1010,
   "family": "Day1s",
   "power": 344004870
  },
  {
   "server": 1010,
   "family": "Cactus",
   "power": 306612043
  },
  {
   "server": 1010,
   "family": "Genesis",
   "power": 275481611
  },
  {
   "server": 1010,
   "family": "FungiFam",
   "power": 249130891
  },
  {
   "server": 1010,
   "family": "Kindness",
   "power": 233693049
  },
  {
   "server": 1010,
   "family": "Gyrfalcon",
   "power": 212104670
  },
  {
   "server": 1011,
   "family": "MagicMushrooms",
   "power": 1571153499
  },
  {
   "server": 1011,
   "family": "Universe",
   "power": 898660179
  },
  {
   "server": 1011,
   "family": "Strawhats",
   "power": 580985153
  },
  {
   "server": 1011,
   "family": "InsomniaShroom",
   "power": 488234966
  },
  {
   "server": 1011,
   "family": "TheFunguys",
   "power": 336429487
  },
  {
   "server": 1011,
   "family": "BoomShrooms",
   "power": 308937810
  },
  {
   "server": 1011,
   "family": "SuperShrooms",
   "power": 271268094
  },
  {
   "server": 1011,
   "family": "Shroomery",
   "power": 230797218
  },
  {
   "server": 1011,
   "family": "Psych",
   "power": 218561061
  },
  {
   "server": 1011,
   "family": "Toadfamily",
   "power": 206351470
  },
  {
   "server": 1012,
   "family": "Celestial",
   "power": 1416852139
  },
  {
   "server": 1012,
   "family": "Mycelium",
   "power": 1102440555
  },
  {
   "server": 1012,
   "family": "Darkspore",
   "power": 1039820943
  },
  {
   "server": 1012,
   "family": "Mushroom",
   "power": 327128341
  },
  {
   "server": 1012,
   "family": "NARNIA",
   "power": 292683505
  },
  {
   "server": 1012,
   "family": "TheCouncil",
   "power": 283282887
  },
  {
   "server": 1012,
   "family": "PowerShrooms",
   "power": 246408422
  },
  {
   "server": 1012,
   "family": "ShadowGarden",
   "power": 214199985
  },
  {
   "server": 1012,
   "family": "CapedCrusaders",
   "power": 179768778
  },
  {
   "server": 1012,
   "family": "Psychedelic",
   "power": 179209355
  },
  {
   "server": 1013,
   "family": "Void",
   "power": 1529886755
  },
  {
   "server": 1013,
   "family": "WaffleHouse",
   "power": 1240848645
  },
  {
   "server": 1013,
   "family": "Onepiece",
   "power": 636982824
  },
  {
   "server": 1013,
   "family": "RavenMoore",
   "power": 447596704
  },
  {
   "server": 1013,
   "family": "Rebellious",
   "power": 379632064
  },
  {
   "server": 1013,
   "family": "MoonPalace",
   "power": 327586562
  },
  {
   "server": 1013,
   "family": "Pineapple",
   "power": 259330704
  },
  {
   "server": 1013,
   "family": "TheGods",
   "power": 210792634
  },
  {
   "server": 1013,
   "family": "DeadlySlimes",
   "power": 196105551
  },
  {
   "server": 1013,
   "family": "AnorLondo",
   "power": 193960263
  },
  {
   "server": 1014,
   "family": "Family",
   "power": 1730325085
  },
  {
   "server": 1014,
   "family": "Dashrooms",
   "power": 950475808
  },
  {
   "server": 1014,
   "family": "sorrow",
   "power": 885190415
  },
  {
   "server": 1014,
   "family": "DrunkPandas",
   "power": 387037493
  },
  {
   "server": 1014,
   "family": "SHROOMIN",
   "power": 329903903
  },
  {
   "server": 1014,
   "family": "DaBois",
   "power": 273029231
  },
  {
   "server": 1014,
   "family": "Loveloyalty",
   "power": 262904975
  },
  {
   "server": 1014,
   "family": "FungusFamily",
   "power": 245305693
  },
  {
   "server": 1014,
   "family": "Shadow",
   "power": 227448240
  },
  {
   "server": 1014,
   "family": "bbc",
   "power": 224701381
  },
  {
   "server": 1015,
   "family": "Wonderland",
   "power": 1436541599
  },
  {
   "server": 1015,
   "family": "Skywalkers",
   "power": 1162973791
  },
  {
   "server": 1015,
   "family": "roomMush",
   "power": 730747187
  },
  {
   "server": 1015,
   "family": "MushStompas",
   "power": 517778122
  },
  {
   "server": 1015,
   "family": "Shroomlings",
   "power": 497200656
  },
  {
   "server": 1015,
   "family": "Orphanage",
   "power": 300366918
  },
  {
   "server": 1015,
   "family": "USA",
   "power": 254203111
  },
  {
   "server": 1015,
   "family": "MagicShroomies",
   "power": 236280870
  },
  {
   "server": 1015,
   "family": "FunGuyClan",
   "power": 231015864
  },
  {
   "server": 1015,
   "family": "Stormz",
   "power": 200958900
  },
  {
   "server": 1016,
   "family": "Vamp🦇",
   "power": 1535770070
  },
  {
   "server": 1016,
   "family": "Mycophobia",
   "power": 969514382
  },
  {
   "server": 1016,
   "family": "Legends",
   "power": 870649852
  },
  {
   "server": 1016,
   "family": "Retribution",
   "power": 592890635
  },
  {
   "server": 1016,
   "family": "Shroomsies",
   "power": 323490508
  },
  {
   "server": 1016,
   "family": "SporeSquad",
   "power": 280831121
  },
  {
   "server": 1016,
   "family": "DeathCult",
   "power": 265995203
  },
  {
   "server": 1016,
   "family": "LegionOfShroom",
   "power": 252122535
  },
  {
   "server": 1016,
   "family": "flameheart",
   "power": 229682550
  },
  {
   "server": 1016,
   "family": "ShroomElves",
   "power": 211631964
  },
  {
   "server": 1017,
   "family": "ShroomWalker",
   "power": 1466691838
  },
  {
   "server": 1017,
   "family": "StrawHats",
   "power": 1277201177
  },
  {
   "server": 1017,
   "family": "Alpha",
   "power": 1031502164
  },
  {
   "server": 1017,
   "family": "TheRider",
   "power": 319697195
  },
  {
   "server": 1017,
   "family": "Myconids",
   "power": 312467273
  },
  {
   "server": 1017,
   "family": "FungiFanatics",
   "power": 287985809
  },
  {
   "server": 1017,
   "family": "Hellsing",
   "power": 262929726
  },
  {
   "server": 1017,
   "family": "MagicMushrooms",
   "power": 256441898
  },
  {
   "server": 1017,
   "family": "ImmortalFamily",
   "power": 242502636
  },
  {
   "server": 1017,
   "family": "JurassicPark",
   "power": 204879642
  },
  {
   "server": 1018,
   "family": "WeAreGay",
   "power": 1595196295
  },
  {
   "server": 1018,
   "family": "FruityPebbles",
   "power": 1281031349
  },
  {
   "server": 1018,
   "family": "ShroomTopia",
   "power": 703286489
  },
  {
   "server": 1018,
   "family": "SPORE",
   "power": 340327756
  },
  {
   "server": 1018,
   "family": "ShroomWarriors",
   "power": 313663811
  },
  {
   "server": 1018,
   "family": "KingdomShoom",
   "power": 257327431
  },
  {
   "server": 1018,
   "family": "Sinister",
   "power": 232789231
  },
  {
   "server": 1018,
   "family": "Vikings",
   "power": 186098541
  },
  {
   "server": 1018,
   "family": "Void",
   "power": 119668378
  },
  {
   "server": 1018,
   "family": "Bigshroom",
   "power": 112754696
  },
  {
   "server": 1019,
   "family": "Moomoo",
   "power": 1579278705
  },
  {
   "server": 1019,
   "family": "Thicc",
   "power": 1053169577
  },
  {
   "server": 1019,
   "family": "OnlyFans",
   "power": 972602105
  },
  {
   "server": 1019,
   "family": "Synodic",
   "power": 365340997
  },
  {
   "server": 1019,
   "family": "TheParthenon",
   "power": 302861102
  },
  {
   "server": 1019,
   "family": "Akatsuki",
   "power": 283793937
  },
  {
   "server": 1019,
   "family": "GothsUnite",
   "power": 260959743
  },
  {
   "server": 1019,
   "family": "Oricalcos",
   "power": 222137079
  },
  {
   "server": 1019,
   "family": "HighElfs",
   "power": 187934726
  },
  {
   "server": 1019,
   "family": "Darkhome",
   "power": 178910677
  },
  {
   "server": 1020,
   "family": "𝕿𝖍𝖊_𝕺𝕲𝖘",
   "power": 1534238799
  },
  {
   "server": 1020,
   "family": "LEGION",
   "power": 776295708
  },
  {
   "server": 1020,
   "family": "MagicMushies",
   "power": 732513129
  },
  {
   "server": 1020,
   "family": "GoldShrooms",
   "power": 654395441
  },
  {
   "server": 1020,
   "family": "Asheholes",
   "power": 508561463
  },
  {
   "server": 1020,
   "family": "Noxus",
   "power": 408369995
  },
  {
   "server": 1020,
   "family": "SporeCookies",
   "power": 349081343
  },
  {
   "server": 1020,
   "family": "ShroomGods",
   "power": 293614049
  },
  {
   "server": 1020,
   "family": "MushMadness",
   "power": 253782619
  },
  {
   "server": 1020,
   "family": "Shroomies",
   "power": 221078760
  },
  {
   "server": 1021,
   "family": "420Shrooms",
   "power": 1393513301
  },
  {
   "server": 1021,
   "family": "Immortals",
   "power": 1084846703
  },
  {
   "server": 1021,
   "family": "MushyRooms",
   "power": 838264426
  },
  {
   "server": 1021,
   "family": "Chromatica",
   "power": 409109255
  },
  {
   "server": 1021,
   "family": "ShroomLand",
   "power": 348811919
  },
  {
   "server": 1021,
   "family": "DemonsInc",
   "power": 309672781
  },
  {
   "server": 1021,
   "family": "FungusRaiders",
   "power": 219821473
  },
  {
   "server": 1021,
   "family": "LGBT",
   "power": 195137869
  },
  {
   "server": 1021,
   "family": "ShroomShootas",
   "power": 177953424
  },
  {
   "server": 1021,
   "family": "Shroomies",
   "power": 177759371
  },
  {
   "server": 1022,
   "family": "DragonAge",
   "power": 1474024435
  },
  {
   "server": 1022,
   "family": "shrooms",
   "power": 1103902483
  },
  {
   "server": 1022,
   "family": "OwO",
   "power": 613639391
  },
  {
   "server": 1022,
   "family": "JustChilln",
   "power": 442029860
  },
  {
   "server": 1022,
   "family": "Depression",
   "power": 343053953
  },
  {
   "server": 1022,
   "family": "OgShrooms",
   "power": 277462379
  },
  {
   "server": 1022,
   "family": "BadDragons",
   "power": 251768440
  },
  {
   "server": 1022,
   "family": "MagicMushroom",
   "power": 223473152
  },
  {
   "server": 1022,
   "family": "weed",
   "power": 214205181
  },
  {
   "server": 1022,
   "family": "Valhalla",
   "power": 194757335
  },
  {
   "server": 1023,
   "family": "Elite",
   "power": 1354775400
  },
  {
   "server": 1023,
   "family": "Mush_Supremacy",
   "power": 1131203939
  },
  {
   "server": 1023,
   "family": "LitShrooms",
   "power": 642311011
  },
  {
   "server": 1023,
   "family": "Pengu",
   "power": 609945396
  },
  {
   "server": 1023,
   "family": "ShroomBlades",
   "power": 325844554
  },
  {
   "server": 1023,
   "family": "MushroomGang",
   "power": 268734233
  },
  {
   "server": 1023,
   "family": "Reapers",
   "power": 235673862
  },
  {
   "server": 1023,
   "family": "JujutsuKaisen",
   "power": 225813764
  },
  {
   "server": 1023,
   "family": "Psychy_shrooms",
   "power": 223866009
  },
  {
   "server": 1023,
   "family": "The_Pickle_Jar",
   "power": 197515829
  },
  {
   "server": 1024,
   "family": "Shroomys",
   "power": 1561831217
  },
  {
   "server": 1024,
   "family": "DevilCats",
   "power": 1057681430
  },
  {
   "server": 1024,
   "family": "Misfits",
   "power": 1048190893
  },
  {
   "server": 1024,
   "family": "Psychadelic",
   "power": 419898274
  },
  {
   "server": 1024,
   "family": "SithShrooms",
   "power": 311672983
  },
  {
   "server": 1024,
   "family": "WitchyCoven",
   "power": 300458210
  },
  {
   "server": 1024,
   "family": "ShroomKingdom",
   "power": 293239621
  },
  {
   "server": 1024,
   "family": "Shrooms",
   "power": 277136839
  },
  {
   "server": 1024,
   "family": "THESTRONGEST",
   "power": 241930392
  },
  {
   "server": 1024,
   "family": "Shroomieland",
   "power": 182810071
  },
  {
   "server": 1025,
   "family": "Mushi",
   "power": 1609254163
  },
  {
   "server": 1025,
   "family": "Voids",
   "power": 1060573955
  },
  {
   "server": 1025,
   "family": "Remnant",
   "power": 1028463408
  },
  {
   "server": 1025,
   "family": "Rebels",
   "power": 551509285
  },
  {
   "server": 1025,
   "family": "HunkyShrooms",
   "power": 384277732
  },
  {
   "server": 1025,
   "family": "CutieShrooms",
   "power": 285570036
  },
  {
   "server": 1025,
   "family": "IMMORTAL",
   "power": 270891249
  },
  {
   "server": 1025,
   "family": "Hollow",
   "power": 260485508
  },
  {
   "server": 1025,
   "family": "WhoGotShroomz",
   "power": 200975545
  },
  {
   "server": 1025,
   "family": "Roundtable",
   "power": 181702086
  },
  {
   "server": 1026,
   "family": "EXILED",
   "power": 1267162028
  },
  {
   "server": 1026,
   "family": "SnailGang",
   "power": 867241408
  },
  {
   "server": 1026,
   "family": "Lampcult",
   "power": 564060266
  },
  {
   "server": 1026,
   "family": "CHAØ§",
   "power": 426396207
  },
  {
   "server": 1026,
   "family": "LazyShrooms",
   "power": 390661950
  },
  {
   "server": 1026,
   "family": "Akatsuki",
   "power": 359376462
  },
  {
   "server": 1026,
   "family": "TheStonedOnes",
   "power": 328912872
  },
  {
   "server": 1026,
   "family": "Shroomnite",
   "power": 286538896
  },
  {
   "server": 1026,
   "family": "BonkSquad",
   "power": 281816226
  },
  {
   "server": 1026,
   "family": "Shroomsters",
   "power": 270624454
  },
  {
   "server": 1027,
   "family": "Delirium",
   "power": 1285488802
  },
  {
   "server": 1027,
   "family": "SporeHouse",
   "power": 1075905770
  },
  {
   "server": 1027,
   "family": "Mazoku",
   "power": 846885383
  },
  {
   "server": 1027,
   "family": "EliteShrooms",
   "power": 566836886
  },
  {
   "server": 1027,
   "family": "flame",
   "power": 449965487
  },
  {
   "server": 1027,
   "family": "Shroomies",
   "power": 332050807
  },
  {
   "server": 1027,
   "family": "ThePsilocybins",
   "power": 284016046
  },
  {
   "server": 1027,
   "family": "Shadow",
   "power": 222777405
  },
  {
   "server": 1027,
   "family": "Shroomers",
   "power": 203123549
  },
  {
   "server": 1027,
   "family": "gasserkingfam",
   "power": 202305360
  },
  {
   "server": 1028,
   "family": "Shrooms",
   "power": 1515023354
  },
  {
   "server": 1028,
   "family": "BOOTYBLASTERS",
   "power": 1197205466
  },
  {
   "server": 1028,
   "family": "ForsakenShroom",
   "power": 434545669
  },
  {
   "server": 1028,
   "family": "Availed",
   "power": 380226924
  },
  {
   "server": 1028,
   "family": "Valhalla",
   "power": 379238557
  },
  {
   "server": 1028,
   "family": "ogshrooms",
   "power": 298643392
  },
  {
   "server": 1028,
   "family": "MVP",
   "power": 277887618
  },
  {
   "server": 1028,
   "family": "NOTGFY",
   "power": 233256405
  },
  {
   "server": 1028,
   "family": "Boosted",
   "power": 191099062
  },
  {
   "server": 1028,
   "family": "Somnus",
   "power": 147791404
  },
  {
   "server": 1029,
   "family": "Binkies",
   "power": 1384918524
  },
  {
   "server": 1029,
   "family": "TrippyKids",
   "power": 899457934
  },
  {
   "server": 1029,
   "family": "MadMushrooms",
   "power": 668160562
  },
  {
   "server": 1029,
   "family": "Oblivion",
   "power": 350303715
  },
  {
   "server": 1029,
   "family": "ShinyShroom",
   "power": 338524769
  },
  {
   "server": 1029,
   "family": "JustTheTip",
   "power": 322298090
  },
  {
   "server": 1029,
   "family": "Mushrooms",
   "power": 275570060
  },
  {
   "server": 1029,
   "family": "SHROOMYTIPS",
   "power": 226231993
  },
  {
   "server": 1029,
   "family": "WintersTears",
   "power": 224231610
  },
  {
   "server": 1029,
   "family": "Doomshrooms",
   "power": 128936149
  },
  {
   "server": 1030,
   "family": "IMPACT",
   "power": 1278321861
  },
  {
   "server": 1030,
   "family": "ShroomerSquad",
   "power": 1058745501
  },
  {
   "server": 1030,
   "family": "ToadTown",
   "power": 426150333
  },
  {
   "server": 1030,
   "family": "GrimBlossom",
   "power": 300256925
  },
  {
   "server": 1030,
   "family": "TheGoldencaps",
   "power": 247959226
  },
  {
   "server": 1030,
   "family": "HyruleShrooms",
   "power": 243917597
  },
  {
   "server": 1030,
   "family": "BoBrOsS",
   "power": 229927841
  },
  {
   "server": 1030,
   "family": "Shroomdoom",
   "power": 213408990
  },
  {
   "server": 1030,
   "family": "Intrepid",
   "power": 206439873
  },
  {
   "server": 1030,
   "family": "Shroomicide",
   "power": 199743370
  },
  {
   "server": 1031,
   "family": "Byakko",
   "power": 1550210160
  },
  {
   "server": 1031,
   "family": "BlackWingKings",
   "power": 962884435
  },
  {
   "server": 1031,
   "family": "Shroomville",
   "power": 463170731
  },
  {
   "server": 1031,
   "family": "PandaCubs",
   "power": 264674128
  },
  {
   "server": 1031,
   "family": "Etheria",
   "power": 242826195
  },
  {
   "server": 1031,
   "family": "Portobello",
   "power": 184308921
  },
  {
   "server": 1031,
   "family": "DinoNuggies",
   "power": 183864693
  },
  {
   "server": 1031,
   "family": "OnlyFans",
   "power": 164495400
  },
  {
   "server": 1031,
   "family": "Solo",
   "power": 141075497
  },
  {
   "server": 1031,
   "family": "Divinity",
   "power": 139581079
  },
  {
   "server": 1032,
   "family": "Legacy",
   "power": 1544900339
  },
  {
   "server": 1032,
   "family": "SunsetGooners",
   "power": 638544967
  },
  {
   "server": 1032,
   "family": "Titans",
   "power": 421317930
  },
  {
   "server": 1032,
   "family": "shroomies",
   "power": 384358317
  },
  {
   "server": 1032,
   "family": "Olympians",
   "power": 279850454
  },
  {
   "server": 1032,
   "family": "Epoch",
   "power": 250731025
  },
  {
   "server": 1032,
   "family": "Goobers",
   "power": 219831784
  },
  {
   "server": 1032,
   "family": "Eschaton",
   "power": 195007187
  },
  {
   "server": 1032,
   "family": "Reishi_Troop",
   "power": 157862739
  },
  {
   "server": 1032,
   "family": "Astral",
   "power": 147116992
  },
  {
   "server": 1033,
   "family": "Tempest",
   "power": 1207623315
  },
  {
   "server": 1033,
   "family": "Nuggets",
   "power": 524690803
  },
  {
   "server": 1033,
   "family": "BambooForest",
   "power": 332650405
  },
  {
   "server": 1033,
   "family": "ToastyCoconut",
   "power": 280873107
  },
  {
   "server": 1033,
   "family": "WompWomp",
   "power": 264874078
  },
  {
   "server": 1033,
   "family": "Crispy",
   "power": 218353875
  },
  {
   "server": 1033,
   "family": "HamsterHammond",
   "power": 217776700
  },
  {
   "server": 1033,
   "family": "Shadow",
   "power": 201164551
  },
  {
   "server": 1033,
   "family": "Quantum",
   "power": 157629893
  },
  {
   "server": 1033,
   "family": "SHROOMIES",
   "power": 97362444
  },
  {
   "server": 1034,
   "family": "Eclipse",
   "power": 1148163032
  },
  {
   "server": 1034,
   "family": "Ragnarök",
   "power": 704292145
  },
  {
   "server": 1034,
   "family": "KitsuneShin",
   "power": 356699868
  },
  {
   "server": 1034,
   "family": "OxC",
   "power": 269132197
  },
  {
   "server": 1034,
   "family": "MorelSupport",
   "power": 176782558
  },
  {
   "server": 1034,
   "family": "RatCult",
   "power": 161886217
  },
  {
   "server": 1034,
   "family": "OnePiece",
   "power": 157222276
  },
  {
   "server": 1034,
   "family": "StrawHats",
   "power": 152098743
  },
  {
   "server": 1034,
   "family": "DragonsDen",
   "power": 144866540
  },
  {
   "server": 1034,
   "family": "ＥＸＯＤＵＳ",
   "power": 118328269
  },
  {
   "server": 1035,
   "family": "MVP",
   "power": 1240100008
  },
  {
   "server": 1035,
   "family": "Shroomies",
   "power": 399985872
  },
  {
   "server": 1035,
   "family": "Overlord",
   "power": 394670638
  },
  {
   "server": 1035,
   "family": "kittens",
   "power": 207254874
  },
  {
   "server": 1035,
   "family": "ShroomHunters",
   "power": 188422844
  },
  {
   "server": 1035,
   "family": "nerd_emoji",
   "power": 186088732
  },
  {
   "server": 1035,
   "family": "ShroomyStoners",
   "power": 181707528
  },
  {
   "server": 1035,
   "family": "Solstice",
   "power": 165334153
  },
  {
   "server": 1035,
   "family": "Goobers",
   "power": 100310654
  },
  {
   "server": 1035,
   "family": "deadlyshrooms",
   "power": 94833019
  },
  {
   "server": 1036,
   "family": "ChosenOnes",
   "power": 1259689780
  },
  {
   "server": 1036,
   "family": "Koifish",
   "power": 687630000
  },
  {
   "server": 1036,
   "family": "shroomville",
   "power": 388267216
  },
  {
   "server": 1036,
   "family": "zen",
   "power": 311518190
  },
  {
   "server": 1036,
   "family": "Moon_Spell",
   "power": 301075989
  },
  {
   "server": 1036,
   "family": "Kings",
   "power": 135513250
  },
  {
   "server": 1036,
   "family": "Megamoxxed",
   "power": 75844105
  },
  {
   "server": 1036,
   "family": "Nation",
   "power": 71967107
  },
  {
   "server": 1036,
   "family": "Ducks",
   "power": 64321968
  },
  {
   "server": 1036,
   "family": "IronLotus",
   "power": 56568738
  },
  {
   "server": 1037,
   "family": "Legion",
   "power": 1365452710
  },
  {
   "server": 1037,
   "family": "Monkeys",
   "power": 692340943
  },
  {
   "server": 1037,
   "family": "Shadows",
   "power": 496294587
  },
  {
   "server": 1037,
   "family": "Nobility",
   "power": 322161913
  },
  {
   "server": 1037,
   "family": "Deathcaps",
   "power": 309566760
  },
  {
   "server": 1037,
   "family": "TheMushies",
   "power": 247812339
  },
  {
   "server": 1037,
   "family": "ValiantSouls",
   "power": 199439040
  },
  {
   "server": 1037,
   "family": "LoserLover",
   "power": 190998479
  },
  {
   "server": 1037,
   "family": "ShroomGarden",
   "power": 149165318
  },
  {
   "server": 1037,
   "family": "DragonPack",
   "power": 128881663
  },
  {
   "server": 1038,
   "family": "Legends",
   "power": 1482667567
  },
  {
   "server": 1038,
   "family": "OG",
   "power": 422987141
  },
  {
   "server": 1038,
   "family": "300ĞŁĄĐÏÀŤÖŔ",
   "power": 336833977
  },
  {
   "server": 1038,
   "family": "Capybara",
   "power": 268459927
  },
  {
   "server": 1038,
   "family": "OppaStoppa",
   "power": 252905234
  },
  {
   "server": 1038,
   "family": "TheGods",
   "power": 201277058
  },
  {
   "server": 1038,
   "family": "Fungi’s",
   "power": 185941801
  },
  {
   "server": 1038,
   "family": "Krakens",
   "power": 184793705
  },
  {
   "server": 1038,
   "family": "Thepotatos",
   "power": 112442581
  },
  {
   "server": 1038,
   "family": "legion",
   "power": 70173064
  },
  {
   "server": 1039,
   "family": "Mycena",
   "power": 1420342035
  },
  {
   "server": 1039,
   "family": "LegionOfDoom",
   "power": 489692551
  },
  {
   "server": 1039,
   "family": "MUSHYKINGDOM",
   "power": 312130027
  },
  {
   "server": 1039,
   "family": "Legion",
   "power": 301831684
  },
  {
   "server": 1039,
   "family": "LilFluffGang",
   "power": 216873268
  },
  {
   "server": 1039,
   "family": "PokéGang",
   "power": 197039840
  },
  {
   "server": 1039,
   "family": "heheman",
   "power": 196647018
  },
  {
   "server": 1039,
   "family": "Shiitake",
   "power": 140339907
  },
  {
   "server": 1039,
   "family": "ShroomyEmpire",
   "power": 88119725
  },
  {
   "server": 1039,
   "family": "SagesDestiny",
   "power": 82714807
  },
  {
   "server": 1040,
   "family": "Ascension",
   "power": 1422238489
  },
  {
   "server": 1040,
   "family": "McPoyles",
   "power": 714576458
  },
  {
   "server": 1040,
   "family": "KingsNQueens",
   "power": 363423103
  },
  {
   "server": 1040,
   "family": "Lostinspace",
   "power": 301501656
  },
  {
   "server": 1040,
   "family": "InfiniteVoid",
   "power": 216242497
  },
  {
   "server": 1040,
   "family": "InBloom",
   "power": 202587958
  },
  {
   "server": 1040,
   "family": "Silly",
   "power": 195562123
  },
  {
   "server": 1040,
   "family": "TheNobody’s",
   "power": 111571374
  },
  {
   "server": 1040,
   "family": "Akatsuki",
   "power": 97952324
  },
  {
   "server": 1040,
   "family": "Immortals",
   "power": 92522373
  },
  {
   "server": 1041,
   "family": "OnlyShrooms",
   "power": 1436716821
  },
  {
   "server": 1041,
   "family": "ZoomyShroomy",
   "power": 739528831
  },
  {
   "server": 1041,
   "family": "Toads",
   "power": 526369348
  },
  {
   "server": 1041,
   "family": "Strawhats",
   "power": 290889439
  },
  {
   "server": 1041,
   "family": "Deathgods",
   "power": 179521234
  },
  {
   "server": 1041,
   "family": "FungusMafia",
   "power": 169775075
  },
  {
   "server": 1041,
   "family": "Basidiomycota",
   "power": 89415093
  },
  {
   "server": 1041,
   "family": "Pandas",
   "power": 87634414
  },
  {
   "server": 1041,
   "family": "Shrooms",
   "power": 87136616
  },
  {
   "server": 1041,
   "family": "SoloLevelling",
   "power": 81499432
  },
  {
   "server": 1042,
   "family": "Paradox",
   "power": 1274892148
  },
  {
   "server": 1042,
   "family": "GodSpeed",
   "power": 1177201903
  },
  {
   "server": 1042,
   "family": "MacrazyClan",
   "power": 204053590
  },
  {
   "server": 1042,
   "family": "Silly_lil_guys",
   "power": 190767727
  },
  {
   "server": 1042,
   "family": "MushroomKaisen",
   "power": 170188527
  },
  {
   "server": 1042,
   "family": "Illuminati",
   "power": 164646273
  },
  {
   "server": 1042,
   "family": "Legends",
   "power": 128155067
  },
  {
   "server": 1042,
   "family": "Tempest",
   "power": 109463645
  },
  {
   "server": 1042,
   "family": "DeathCaps",
   "power": 70344647
  },
  {
   "server": 1042,
   "family": "Chill_House_QC",
   "power": 36152113
  },
  {
   "server": 1043,
   "family": "MilkTax",
   "power": 1461314568
  },
  {
   "server": 1043,
   "family": "Crimson_Moon",
   "power": 853359863
  },
  {
   "server": 1043,
   "family": "Fungus",
   "power": 607651227
  },
  {
   "server": 1043,
   "family": "Elite",
   "power": 276155371
  },
  {
   "server": 1043,
   "family": "WINNERS",
   "power": 219597987
  },
  {
   "server": 1043,
   "family": "toptiercooch",
   "power": 202678222
  },
  {
   "server": 1043,
   "family": "ShadowGlitch",
   "power": 104621006
  },
  {
   "server": 1043,
   "family": "LaBONBON",
   "power": 54139290
  },
  {
   "server": 1043,
   "family": "NeallyRigga",
   "power": 31672572
  },
  {
   "server": 1043,
   "family": "WhiteLotus",
   "power": 25035212
  },
  {
   "server": 1044,
   "family": "Deathcaps",
   "power": 1457181169
  },
  {
   "server": 1044,
   "family": "NOXIOUS_TRAP",
   "power": 497317567
  },
  {
   "server": 1044,
   "family": "Mushmellows",
   "power": 348536952
  },
  {
   "server": 1044,
   "family": "funguys",
   "power": 241644493
  },
  {
   "server": 1044,
   "family": "Portobello",
   "power": 209262845
  },
  {
   "server": 1044,
   "family": "CashFamily",
   "power": 208802382
  },
  {
   "server": 1044,
   "family": "7DeadySins",
   "power": 188160710
  },
  {
   "server": 1044,
   "family": "Shrooms",
   "power": 186947076
  },
  {
   "server": 1044,
   "family": "angels",
   "power": 163732422
  },
  {
   "server": 1044,
   "family": "monkey",
   "power": 159247624
  },
  {
   "server": 1045,
   "family": "Fungi",
   "power": 1000672853
  },
  {
   "server": 1045,
   "family": "HouseOfBravo",
   "power": 457217340
  },
  {
   "server": 1045,
   "family": "BuffShrooms",
   "power": 369605009
  },
  {
   "server": 1045,
   "family": "MudWhistle",
   "power": 194846050
  },
  {
   "server": 1045,
   "family": "Spartans",
   "power": 190131966
  },
  {
   "server": 1045,
   "family": "Mythic",
   "power": 185945084
  },
  {
   "server": 1045,
   "family": "Cult",
   "power": 183527903
  },
  {
   "server": 1045,
   "family": "CatCafe",
   "power": 106631197
  },
  {
   "server": 1045,
   "family": "DragonFlame",
   "power": 100589238
  },
  {
   "server": 1045,
   "family": "LazyLRanch",
   "power": 45835183
  },
  {
   "server": 1046,
   "family": "FirstFamily",
   "power": 1280393080
  },
  {
   "server": 1046,
   "family": "Legends",
   "power": 494409322
  },
  {
   "server": 1046,
   "family": "Shroomland",
   "power": 457954589
  },
  {
   "server": 1046,
   "family": "Youngbludz",
   "power": 261787790
  },
  {
   "server": 1046,
   "family": "FuriousFungi",
   "power": 257246884
  },
  {
   "server": 1046,
   "family": "FriedShroomies",
   "power": 196505851
  },
  {
   "server": 1046,
   "family": "SHROOMIES",
   "power": 167207806
  },
  {
   "server": 1046,
   "family": "fairytale",
   "power": 164446085
  },
  {
   "server": 1046,
   "family": "Mafia",
   "power": 160586614
  },
  {
   "server": 1046,
   "family": "SecondFamily",
   "power": 122828340
  },
  {
   "server": 1047,
   "family": "Blacklist",
   "power": 1171967210
  },
  {
   "server": 1047,
   "family": "SporeSyndicate",
   "power": 593332080
  },
  {
   "server": 1047,
   "family": "MushroomKingdm",
   "power": 562979132
  },
  {
   "server": 1047,
   "family": "WhatTheFungus",
   "power": 381027024
  },
  {
   "server": 1047,
   "family": "LeadToHead",
   "power": 191017464
  },
  {
   "server": 1047,
   "family": "Wnf",
   "power": 137249475
  },
  {
   "server": 1047,
   "family": "Adopted",
   "power": 52653232
  },
  {
   "server": 1047,
   "family": "Lightz",
   "power": 39544670
  },
  {
   "server": 1047,
   "family": "gonerogue",
   "power": 34637733
  },
  {
   "server": 1047,
   "family": "MaliciousInc",
   "power": 33053520
  },
  {
   "server": 1048,
   "family": "TOP1",
   "power": 1187500358
  },
  {
   "server": 1048,
   "family": "Potatoes",
   "power": 1062669076
  },
  {
   "server": 1048,
   "family": "TeamMisplay",
   "power": 271209701
  },
  {
   "server": 1048,
   "family": "Cordyceps",
   "power": 228745419
  },
  {
   "server": 1048,
   "family": "Divinity",
   "power": 191499699
  },
  {
   "server": 1048,
   "family": "Teemos",
   "power": 169703548
  },
  {
   "server": 1048,
   "family": "shadowdemons",
   "power": 130063221
  },
  {
   "server": 1048,
   "family": "SoaringPhoenix",
   "power": 75395427
  },
  {
   "server": 1048,
   "family": "Pawg",
   "power": 58520728
  },
  {
   "server": 1048,
   "family": "BANNANA",
   "power": 39647660
  },
  {
   "server": 1049,
   "family": "Deadlantis",
   "power": 1574606783
  },
  {
   "server": 1049,
   "family": "Shroomlantis",
   "power": 598386590
  },
  {
   "server": 1049,
   "family": "Psilocybins",
   "power": 319611457
  },
  {
   "server": 1049,
   "family": "JJK",
   "power": 258564748
  },
  {
   "server": 1049,
   "family": "Ronin",
   "power": 240288877
  },
  {
   "server": 1049,
   "family": "FairyTail",
   "power": 194376119
  },
  {
   "server": 1049,
   "family": "BEANS",
   "power": 183884226
  },
  {
   "server": 1049,
   "family": "Lunaris",
   "power": 173185915
  },
  {
   "server": 1049,
   "family": "GraveDiggers",
   "power": 148171738
  },
  {
   "server": 1049,
   "family": "TapTapShrooms",
   "power": 83695691
  },
  {
   "server": 1050,
   "family": "ShroomSquad",
   "power": 1386428012
  },
  {
   "server": 1050,
   "family": "StrawHats",
   "power": 406324116
  },
  {
   "server": 1050,
   "family": "TheFoxxFam",
   "power": 303818567
  },
  {
   "server": 1050,
   "family": "ninja",
   "power": 256312626
  },
  {
   "server": 1050,
   "family": "Legendz",
   "power": 234361758
  },
  {
   "server": 1050,
   "family": "immortal4242",
   "power": 233973453
  },
  {
   "server": 1050,
   "family": "MagicShrooms",
   "power": 171885523
  },
  {
   "server": 1050,
   "family": "🦝",
   "power": 165718298
  },
  {
   "server": 1050,
   "family": "VietNam",
   "power": 143245293
  },
  {
   "server": 1050,
   "family": "Smokeweed",
   "power": 109323010
  },
  {
   "server": 1051,
   "family": "നythril",
   "power": 1602795111
  },
  {
   "server": 1051,
   "family": "mushies",
   "power": 393655674
  },
  {
   "server": 1051,
   "family": "Shroomies",
   "power": 344447165
  },
  {
   "server": 1051,
   "family": "baller",
   "power": 267502199
  },
  {
   "server": 1051,
   "family": "immortalized",
   "power": 225907427
  },
  {
   "server": 1051,
   "family": "Weebs",
   "power": 223240814
  },
  {
   "server": 1051,
   "family": "ShroomArmy",
   "power": 192035542
  },
  {
   "server": 1051,
   "family": "Radient",
   "power": 170413129
  },
  {
   "server": 1051,
   "family": "OG",
   "power": 133839461
  },
  {
   "server": 1051,
   "family": "Soulfire",
   "power": 121045476
  },
  {
   "server": 1052,
   "family": "Bone",
   "power": 1447802871
  },
  {
   "server": 1052,
   "family": "ToadFamily",
   "power": 439145618
  },
  {
   "server": 1052,
   "family": "FunGuys",
   "power": 284968198
  },
  {
   "server": 1052,
   "family": "Mushys",
   "power": 282730546
  },
  {
   "server": 1052,
   "family": "snozberries",
   "power": 170186721
  },
  {
   "server": 1052,
   "family": "SinfulSaints",
   "power": 163474741
  },
  {
   "server": 1052,
   "family": "Greyhawk",
   "power": 121480061
  },
  {
   "server": 1052,
   "family": "bubbles",
   "power": 108285385
  },
  {
   "server": 1052,
   "family": "MushroomCult",
   "power": 103314784
  },
  {
   "server": 1052,
   "family": "Sori",
   "power": 34866198
  },
  {
   "server": 1053,
   "family": "Akatsuki",
   "power": 997759273
  },
  {
   "server": 1053,
   "family": "Shroom_Kings",
   "power": 503650783
  },
  {
   "server": 1053,
   "family": "Erm",
   "power": 455606060
  },
  {
   "server": 1053,
   "family": "mushrooms",
   "power": 246669789
  },
  {
   "server": 1053,
   "family": "Toadstools",
   "power": 242394296
  },
  {
   "server": 1053,
   "family": "Fortuitous",
   "power": 242163063
  },
  {
   "server": 1053,
   "family": "Sporeson",
   "power": 145614596
  },
  {
   "server": 1053,
   "family": "Psilocybin",
   "power": 131570704
  },
  {
   "server": 1053,
   "family": "HardcoreSpores",
   "power": 106757625
  },
  {
   "server": 1053,
   "family": "Sporstuction",
   "power": 100943670
  },
  {
   "server": 1054,
   "family": "Nebula",
   "power": 1160943686
  },
  {
   "server": 1054,
   "family": "Fortnite",
   "power": 333306442
  },
  {
   "server": 1054,
   "family": "Day1",
   "power": 302711816
  },
  {
   "server": 1054,
   "family": "Fungi’s",
   "power": 290339565
  },
  {
   "server": 1054,
   "family": "Ashen",
   "power": 273205842
  },
  {
   "server": 1054,
   "family": "ez",
   "power": 271466015
  },
  {
   "server": 1054,
   "family": "Shrooms",
   "power": 183128546
  },
  {
   "server": 1054,
   "family": "Ogs",
   "power": 164780884
  },
  {
   "server": 1054,
   "family": "Canada",
   "power": 164330378
  },
  {
   "server": 1054,
   "family": "Kil’Garden",
   "power": 133544217
  },
  {
   "server": 1055,
   "family": "MUSHROOMS",
   "power": 1502924320
  },
  {
   "server": 1055,
   "family": "Strawhats",
   "power": 649416477
  },
  {
   "server": 1055,
   "family": "Psilocybin",
   "power": 298646472
  },
  {
   "server": 1055,
   "family": "Shroomington",
   "power": 260409480
  },
  {
   "server": 1055,
   "family": "ToadsVilliage",
   "power": 218388679
  },
  {
   "server": 1055,
   "family": "ShroomArmy",
   "power": 215045397
  },
  {
   "server": 1055,
   "family": "OnlyShrooms",
   "power": 128006007
  },
  {
   "server": 1055,
   "family": "chill",
   "power": 89709510
  },
  {
   "server": 1055,
   "family": "ForcedSocial",
   "power": 44161237
  },
  {
   "server": 1055,
   "family": "Portalgods",
   "power": 39108577
  },
  {
   "server": 1056,
   "family": "Drowsy",
   "power": 1438017076
  },
  {
   "server": 1056,
   "family": "Proletarian",
   "power": 302886290
  },
  {
   "server": 1056,
   "family": "LandOfGods",
   "power": 234667271
  },
  {
   "server": 1056,
   "family": "Climbingup",
   "power": 218745693
  },
  {
   "server": 1056,
   "family": "Da_Bois",
   "power": 189078376
  },
  {
   "server": 1056,
   "family": "doomshrooms",
   "power": 179544671
  },
  {
   "server": 1056,
   "family": "Lions_Mane",
   "power": 167050235
  },
  {
   "server": 1056,
   "family": "Tempest",
   "power": 143685811
  },
  {
   "server": 1056,
   "family": "Broken_Rice",
   "power": 135304684
  },
  {
   "server": 1056,
   "family": "Deathcap",
   "power": 122745024
  },
  {
   "server": 1057,
   "family": "EKX",
   "power": 1151203223
  },
  {
   "server": 1057,
   "family": "Fungicide",
   "power": 542298431
  },
  {
   "server": 1057,
   "family": "CreamyShrooms",
   "power": 415514373
  },
  {
   "server": 1057,
   "family": "WeebNation",
   "power": 314062256
  },
  {
   "server": 1057,
   "family": "Trashy",
   "power": 244995081
  },
  {
   "server": 1057,
   "family": "MushroomEmpir",
   "power": 226452746
  },
  {
   "server": 1057,
   "family": "Homos",
   "power": 150331282
  },
  {
   "server": 1057,
   "family": "ShroombaTribe",
   "power": 149564549
  },
  {
   "server": 1057,
   "family": "Koolkidsklub",
   "power": 135204477
  },
  {
   "server": 1057,
   "family": "ChillShrooms",
   "power": 111588231
  },
  {
   "server": 1058,
   "family": "Uchiha",
   "power": 1542149595
  },
  {
   "server": 1058,
   "family": "DeathCaps",
   "power": 504388777
  },
  {
   "server": 1058,
   "family": "Shroomies",
   "power": 235002214
  },
  {
   "server": 1058,
   "family": "Ace2Aces",
   "power": 219691589
  },
  {
   "server": 1058,
   "family": "VoLocity",
   "power": 191409379
  },
  {
   "server": 1058,
   "family": "VOID",
   "power": 158877275
  },
  {
   "server": 1058,
   "family": "ABYSS",
   "power": 155669593
  },
  {
   "server": 1058,
   "family": "God",
   "power": 129833146
  },
  {
   "server": 1058,
   "family": "Trickster",
   "power": 39897208
  },
  {
   "server": 1058,
   "family": "TheCozyCafe",
   "power": 38698635
  },
  {
   "server": 1059,
   "family": "ETERNALS",
   "power": 1182420080
  },
  {
   "server": 1059,
   "family": "DragonEmpire",
   "power": 573147919
  },
  {
   "server": 1059,
   "family": "Sentinels",
   "power": 295552426
  },
  {
   "server": 1059,
   "family": "Lesgooo",
   "power": 220997294
  },
  {
   "server": 1059,
   "family": "strungout_cats",
   "power": 214081938
  },
  {
   "server": 1059,
   "family": "GOD",
   "power": 212919228
  },
  {
   "server": 1059,
   "family": "Pfutzengilde",
   "power": 143052538
  },
  {
   "server": 1059,
   "family": "Opium",
   "power": 135203335
  },
  {
   "server": 1059,
   "family": "Spore",
   "power": 129344351
  },
  {
   "server": 1059,
   "family": "PandaShroomies",
   "power": 87203324
  },
  {
   "server": 1060,
   "family": "Dobsdom",
   "power": 1169482760
  },
  {
   "server": 1060,
   "family": "2C4U",
   "power": 817735866
  },
  {
   "server": 1060,
   "family": "Legion",
   "power": 279387942
  },
  {
   "server": 1060,
   "family": "Ahjin",
   "power": 241439339
  },
  {
   "server": 1060,
   "family": "titan",
   "power": 223438796
  },
  {
   "server": 1060,
   "family": "JustForFun",
   "power": 101541592
  },
  {
   "server": 1060,
   "family": "Whalesquad",
   "power": 51930945
  },
  {
   "server": 1060,
   "family": "SpookySquad",
   "power": 36064854
  },
  {
   "server": 1060,
   "family": "FrijolesFC",
   "power": 30263942
  },
  {
   "server": 1060,
   "family": "Helldivers",
   "power": 29446779
  },
  {
   "server": 1061,
   "family": "Genesis",
   "power": 1385582739
  },
  {
   "server": 1061,
   "family": "Halloweentown",
   "power": 342540101
  },
  {
   "server": 1061,
   "family": "Mandalorians",
   "power": 293468598
  },
  {
   "server": 1061,
   "family": "Gladiators",
   "power": 279321460
  },
  {
   "server": 1061,
   "family": "TheGrove",
   "power": 254967141
  },
  {
   "server": 1061,
   "family": "KoiFishes",
   "power": 241131506
  },
  {
   "server": 1061,
   "family": "ArchAngels",
   "power": 236029755
  },
  {
   "server": 1061,
   "family": "GreyFruitGuild",
   "power": 177546536
  },
  {
   "server": 1061,
   "family": "TheFungi",
   "power": 161590334
  },
  {
   "server": 1061,
   "family": "ShitakeSaiyans",
   "power": 59132853
  },
  {
   "server": 1062,
   "family": "Beggars",
   "power": 1436888290
  },
  {
   "server": 1062,
   "family": "Cutecats",
   "power": 547838370
  },
  {
   "server": 1062,
   "family": "Temptation",
   "power": 365218309
  },
  {
   "server": 1062,
   "family": "StonerClub",
   "power": 247610607
  },
  {
   "server": 1062,
   "family": "Hildryn",
   "power": 193790944
  },
  {
   "server": 1062,
   "family": "grimdragons",
   "power": 193045598
  },
  {
   "server": 1062,
   "family": "Mushrooms",
   "power": 160892741
  },
  {
   "server": 1062,
   "family": "YummyRamen",
   "power": 134405142
  },
  {
   "server": 1062,
   "family": "Furia",
   "power": 120787613
  },
  {
   "server": 1062,
   "family": "Doom_Shrooms",
   "power": 110230643
  },
  {
   "server": 1063,
   "family": "7eaven",
   "power": 1260048228
  },
  {
   "server": 1063,
   "family": "ApocalypsePets",
   "power": 370860412
  },
  {
   "server": 1063,
   "family": "ManicShrooms",
   "power": 300289593
  },
  {
   "server": 1063,
   "family": "hehe",
   "power": 253293896
  },
  {
   "server": 1063,
   "family": "Aurous",
   "power": 222186373
  },
  {
   "server": 1063,
   "family": "Shroom",
   "power": 163195433
  },
  {
   "server": 1063,
   "family": "crybbyfam",
   "power": 132582999
  },
  {
   "server": 1063,
   "family": "TheCoalition",
   "power": 66048086
  },
  {
   "server": 1063,
   "family": "TheScrapYard",
   "power": 62262377
  },
  {
   "server": 1063,
   "family": "PrEDAOC",
   "power": 45742615
  },
  {
   "server": 1064,
   "family": "BlackLotus",
   "power": 1301037367
  },
  {
   "server": 1064,
   "family": "WhiteLotus",
   "power": 414648079
  },
  {
   "server": 1064,
   "family": "ZoomShrooms",
   "power": 301253510
  },
  {
   "server": 1064,
   "family": "FurryMushrooms",
   "power": 247736480
  },
  {
   "server": 1064,
   "family": "WELOVESHROOMS",
   "power": 232739699
  },
  {
   "server": 1064,
   "family": "TempleOfAthena",
   "power": 173138823
  },
  {
   "server": 1064,
   "family": "koinoyokan",
   "power": 120030354
  },
  {
   "server": 1064,
   "family": "Theawesomest1",
   "power": 112844802
  },
  {
   "server": 1064,
   "family": "Shroomland",
   "power": 91586663
  },
  {
   "server": 1064,
   "family": "MementoOfWar",
   "power": 81653755
  },
  {
   "server": 1065,
   "family": "TheBestBuddies",
   "power": 1104535964
  },
  {
   "server": 1065,
   "family": "EXILED",
   "power": 364378821
  },
  {
   "server": 1065,
   "family": "WolfPack",
   "power": 318611042
  },
  {
   "server": 1065,
   "family": "MagicShroomies",
   "power": 282192393
  },
  {
   "server": 1065,
   "family": "MagicMushies",
   "power": 257237164
  },
  {
   "server": 1065,
   "family": "Shroomies",
   "power": 233315398
  },
  {
   "server": 1065,
   "family": "FürDieEhre",
   "power": 148494768
  },
  {
   "server": 1065,
   "family": "GaygarPokemon",
   "power": 92069597
  },
  {
   "server": 1065,
   "family": "BamBoom",
   "power": 52684370
  },
  {
   "server": 1065,
   "family": "Smiski",
   "power": 36339934
  },
  {
   "server": 1066,
   "family": "Eden",
   "power": 1549636618
  },
  {
   "server": 1066,
   "family": "2Much4You",
   "power": 434715746
  },
  {
   "server": 1066,
   "family": "TheGarden",
   "power": 414393351
  },
  {
   "server": 1066,
   "family": "Gravity",
   "power": 290447907
  },
  {
   "server": 1066,
   "family": "ShroomySages",
   "power": 230283226
  },
  {
   "server": 1066,
   "family": "og",
   "power": 189681226
  },
  {
   "server": 1066,
   "family": "Shroomeri",
   "power": 173831164
  },
  {
   "server": 1066,
   "family": "novastar",
   "power": 155402474
  },
  {
   "server": 1066,
   "family": "Juicygobble",
   "power": 79657308
  },
  {
   "server": 1066,
   "family": "Shrooms",
   "power": 56553951
  },
  {
   "server": 1067,
   "family": "Hellguard",
   "power": 994024316
  },
  {
   "server": 1067,
   "family": "PhantomTroupe",
   "power": 683606468
  },
  {
   "server": 1067,
   "family": "Wendys",
   "power": 293983879
  },
  {
   "server": 1067,
   "family": "Shroom",
   "power": 293505868
  },
  {
   "server": 1067,
   "family": "Rivals",
   "power": 142838856
  },
  {
   "server": 1067,
   "family": "Weed",
   "power": 118642068
  },
  {
   "server": 1067,
   "family": "gangnem",
   "power": 104212521
  },
  {
   "server": 1067,
   "family": "SautéShroomies",
   "power": 68453147
  },
  {
   "server": 1067,
   "family": "Truckers",
   "power": 31347316
  },
  {
   "server": 1067,
   "family": "Morelands",
   "power": 20466934
  },
  {
   "server": 1068,
   "family": "BurningDragons",
   "power": 1316786992
  },
  {
   "server": 1068,
   "family": "Ravenclaw",
   "power": 555241869
  },
  {
   "server": 1068,
   "family": "LateNighters",
   "power": 338904053
  },
  {
   "server": 1068,
   "family": "TheShrooms",
   "power": 167661523
  },
  {
   "server": 1068,
   "family": "ShroomKings",
   "power": 166403183
  },
  {
   "server": 1068,
   "family": "GameWarriorS",
   "power": 149761439
  },
  {
   "server": 1068,
   "family": "YoureShroomed",
   "power": 144379835
  },
  {
   "server": 1068,
   "family": "BloodDragons",
   "power": 103274462
  },
  {
   "server": 1068,
   "family": "Bruh_team",
   "power": 97029959
  },
  {
   "server": 1068,
   "family": "TheBombers",
   "power": 32349818
  },
  {
   "server": 1069,
   "family": "TheShroomans",
   "power": 1203070082
  },
  {
   "server": 1069,
   "family": "TheMonsterMush",
   "power": 340014637
  },
  {
   "server": 1069,
   "family": "Fairytale",
   "power": 325588118
  },
  {
   "server": 1069,
   "family": "FunGuys",
   "power": 323811902
  },
  {
   "server": 1069,
   "family": "Godshrooms",
   "power": 212431877
  },
  {
   "server": 1069,
   "family": "GoDz",
   "power": 154564907
  },
  {
   "server": 1069,
   "family": "Shroomin’",
   "power": 110812057
  },
  {
   "server": 1069,
   "family": "Locoslacabeza",
   "power": 60030371
  },
  {
   "server": 1069,
   "family": "Wevewevewevewe",
   "power": 47823548
  },
  {
   "server": 1069,
   "family": "nytrokitty",
   "power": 37221873
  },
  {
   "server": 1070,
   "family": "KDAR",
   "power": 1244215501
  },
  {
   "server": 1070,
   "family": "Parasitic",
   "power": 404068004
  },
  {
   "server": 1070,
   "family": "JujuShroom",
   "power": 302862311
  },
  {
   "server": 1070,
   "family": "Just4Fun",
   "power": 263228064
  },
  {
   "server": 1070,
   "family": "Nazarick",
   "power": 149341450
  },
  {
   "server": 1070,
   "family": "HighLife",
   "power": 89930038
  },
  {
   "server": 1070,
   "family": "Hedliane",
   "power": 86658269
  },
  {
   "server": 1070,
   "family": "LEGION",
   "power": 67653024
  },
  {
   "server": 1070,
   "family": "The_RoadDawgs",
   "power": 39020979
  },
  {
   "server": 1070,
   "family": "Weirdz",
   "power": 25383281
  },
  {
   "server": 1071,
   "family": "HarmFarm",
   "power": 1369770172
  },
  {
   "server": 1071,
   "family": "Excalivus",
   "power": 627838162
  },
  {
   "server": 1071,
   "family": "Enoki",
   "power": 199257194
  },
  {
   "server": 1071,
   "family": "WeLuvShrooms",
   "power": 178790453
  },
  {
   "server": 1071,
   "family": "TheUnionHall",
   "power": 169824394
  },
  {
   "server": 1071,
   "family": "Gang",
   "power": 166934251
  },
  {
   "server": 1071,
   "family": "TheFirst",
   "power": 106532842
  },
  {
   "server": 1071,
   "family": "FungusAmongUs",
   "power": 52986197
  },
  {
   "server": 1071,
   "family": "ShroomGrower",
   "power": 51496361
  },
  {
   "server": 1071,
   "family": "LokiSpiders",
   "power": 37342403
  },
  {
   "server": 1072,
   "family": "Mushy",
   "power": 1361643850
  },
  {
   "server": 1072,
   "family": "TheGang🤫",
   "power": 278941597
  },
  {
   "server": 1072,
   "family": "Mushis",
   "power": 273489514
  },
  {
   "server": 1072,
   "family": "shroom",
   "power": 231171294
  },
  {
   "server": 1072,
   "family": "OVERKILLERS",
   "power": 198723014
  },
  {
   "server": 1072,
   "family": "Lotus",
   "power": 161415207
  },
  {
   "server": 1072,
   "family": "Bsquared",
   "power": 126125171
  },
  {
   "server": 1072,
   "family": "MapleTree",
   "power": 103924420
  },
  {
   "server": 1072,
   "family": "Akatsuki",
   "power": 76400799
  },
  {
   "server": 1072,
   "family": "CHAMPIONS",
   "power": 50426025
  },
  {
   "server": 1073,
   "family": "Envy",
   "power": 1344488630
  },
  {
   "server": 1073,
   "family": "GoodVibes",
   "power": 382476133
  },
  {
   "server": 1073,
   "family": "Vongola",
   "power": 351718181
  },
  {
   "server": 1073,
   "family": "ItzLemonzzz",
   "power": 298743104
  },
  {
   "server": 1073,
   "family": "High_Lyfe",
   "power": 226642258
  },
  {
   "server": 1073,
   "family": "Icons",
   "power": 195915023
  },
  {
   "server": 1073,
   "family": "UchihaClan",
   "power": 182932031
  },
  {
   "server": 1073,
   "family": "ShroomZone",
   "power": 135609638
  },
  {
   "server": 1073,
   "family": "HashDabs",
   "power": 77708274
  },
  {
   "server": 1073,
   "family": "Kleptomaniacs",
   "power": 58130012
  },
  {
   "server": 1074,
   "family": "Fools",
   "power": 1359617354
  },
  {
   "server": 1074,
   "family": "Redemption",
   "power": 724643565
  },
  {
   "server": 1074,
   "family": "Shadow_Reapers",
   "power": 297297568
  },
  {
   "server": 1074,
   "family": "DemonSlayer",
   "power": 217231517
  },
  {
   "server": 1074,
   "family": "uwu",
   "power": 210772098
  },
  {
   "server": 1074,
   "family": "Bloodlust",
   "power": 192243234
  },
  {
   "server": 1074,
   "family": "SharkArmy",
   "power": 121339792
  },
  {
   "server": 1074,
   "family": "Mushroomland",
   "power": 93895098
  },
  {
   "server": 1074,
   "family": "Champinon",
   "power": 35941585
  },
  {
   "server": 1074,
   "family": "Cats",
   "power": 31436462
  },
  {
   "server": 1075,
   "family": "Superiore",
   "power": 1227221421
  },
  {
   "server": 1075,
   "family": "Requiem",
   "power": 851316326
  },
  {
   "server": 1075,
   "family": "Goat_Town",
   "power": 397680040
  },
  {
   "server": 1075,
   "family": "CobraChickens",
   "power": 393296456
  },
  {
   "server": 1075,
   "family": "Squishy",
   "power": 250794660
  },
  {
   "server": 1075,
   "family": "MushyKat",
   "power": 244372106
  },
  {
   "server": 1075,
   "family": "Ghosts",
   "power": 152575726
  },
  {
   "server": 1075,
   "family": "Pulps",
   "power": 149823460
  },
  {
   "server": 1075,
   "family": "Wolfpack",
   "power": 46179181
  },
  {
   "server": 1075,
   "family": "pickles",
   "power": 29944577
  },
  {
   "server": 1076,
   "family": "ELITE",
   "power": 1118227024
  },
  {
   "server": 1076,
   "family": "Enoki",
   "power": 699494015
  },
  {
   "server": 1076,
   "family": "Killjoy",
   "power": 678421039
  },
  {
   "server": 1076,
   "family": "Notorious",
   "power": 432681646
  },
  {
   "server": 1076,
   "family": "GlitchMob",
   "power": 424907723
  },
  {
   "server": 1076,
   "family": "KingdomOfFungi",
   "power": 193735529
  },
  {
   "server": 1076,
   "family": "StrawHatCrew",
   "power": 184740789
  },
  {
   "server": 1076,
   "family": "Halfpence",
   "power": 165084575
  },
  {
   "server": 1076,
   "family": "disciples",
   "power": 76468510
  },
  {
   "server": 1076,
   "family": "Seinaru",
   "power": 48798024
  },
  {
   "server": 1077,
   "family": "MonkeyBusiness",
   "power": 1367104929
  },
  {
   "server": 1077,
   "family": "ShroomMates",
   "power": 551452330
  },
  {
   "server": 1077,
   "family": "SmurfsVillage",
   "power": 337038185
  },
  {
   "server": 1077,
   "family": "ShroomDynasty",
   "power": 306147362
  },
  {
   "server": 1077,
   "family": "cigarettes",
   "power": 244509126
  },
  {
   "server": 1077,
   "family": "Life",
   "power": 243790781
  },
  {
   "server": 1077,
   "family": "MyceliumMates",
   "power": 230590426
  },
  {
   "server": 1077,
   "family": "shroomies",
   "power": 218097862
  },
  {
   "server": 1077,
   "family": "LomGods",
   "power": 210776482
  },
  {
   "server": 1077,
   "family": "Watchers",
   "power": 173295938
  },
  {
   "server": 1078,
   "family": "Angels",
   "power": 1307845423
  },
  {
   "server": 1078,
   "family": "Spore",
   "power": 640297376
  },
  {
   "server": 1078,
   "family": "DEMONS",
   "power": 507533226
  },
  {
   "server": 1078,
   "family": "EMS",
   "power": 321382374
  },
  {
   "server": 1078,
   "family": "shroomlife",
   "power": 147801306
  },
  {
   "server": 1078,
   "family": "ShroomKingdom",
   "power": 144397180
  },
  {
   "server": 1078,
   "family": "4X¥",
   "power": 142146964
  },
  {
   "server": 1078,
   "family": "TheFunGuys",
   "power": 108560831
  },
  {
   "server": 1078,
   "family": "SwiftyyShrooms",
   "power": 72013369
  },
  {
   "server": 1078,
   "family": "SmokersTable",
   "power": 62448554
  },
  {
   "server": 1079,
   "family": "SERAPHIM",
   "power": 1464131426
  },
  {
   "server": 1079,
   "family": "Chaotica",
   "power": 1023254040
  },
  {
   "server": 1079,
   "family": "Akatsuki",
   "power": 328171275
  },
  {
   "server": 1079,
   "family": "Fairytail",
   "power": 307947152
  },
  {
   "server": 1079,
   "family": "MadMushrooms",
   "power": 237406141
  },
  {
   "server": 1079,
   "family": "Bobsarmy",
   "power": 198986036
  },
  {
   "server": 1079,
   "family": "Invictus",
   "power": 185887760
  },
  {
   "server": 1079,
   "family": "limarooms",
   "power": 180790278
  },
  {
   "server": 1079,
   "family": "Dunghouse",
   "power": 118540876
  },
  {
   "server": 1079,
   "family": "Tapei",
   "power": 82491949
  },
  {
   "server": 1080,
   "family": "GoldenShrooms",
   "power": 1511897446
  },
  {
   "server": 1080,
   "family": "Ducks",
   "power": 1026748612
  },
  {
   "server": 1080,
   "family": "FurrySpores",
   "power": 338288624
  },
  {
   "server": 1080,
   "family": "TheDarKRose",
   "power": 332935854
  },
  {
   "server": 1080,
   "family": "SmokeBuddies",
   "power": 216542415
  },
  {
   "server": 1080,
   "family": "SithEmpire",
   "power": 215727518
  },
  {
   "server": 1080,
   "family": "Mushromies",
   "power": 166262626
  },
  {
   "server": 1080,
   "family": "Winterfell",
   "power": 142158461
  },
  {
   "server": 1080,
   "family": "Genesis",
   "power": 45281359
  },
  {
   "server": 1080,
   "family": "Unwell",
   "power": 37445783
  },
  {
   "server": 1081,
   "family": "Universe",
   "power": 1412357424
  },
  {
   "server": 1081,
   "family": "Shroominators",
   "power": 394497666
  },
  {
   "server": 1081,
   "family": "Shroomies",
   "power": 391240249
  },
  {
   "server": 1081,
   "family": "Mushroom",
   "power": 285365213
  },
  {
   "server": 1081,
   "family": "OrphanBros",
   "power": 271804542
  },
  {
   "server": 1081,
   "family": "Shrooms",
   "power": 237106222
  },
  {
   "server": 1081,
   "family": "AFKerz",
   "power": 172126662
  },
  {
   "server": 1081,
   "family": "FrozenHeartz",
   "power": 149472596
  },
  {
   "server": 1081,
   "family": "Lords",
   "power": 138819832
  },
  {
   "server": 1081,
   "family": "Caffinated",
   "power": 134666344
  },
  {
   "server": 1082,
   "family": "Forsaken",
   "power": 1127063278
  },
  {
   "server": 1082,
   "family": "SwordArtOnline",
   "power": 1089500459
  },
  {
   "server": 1082,
   "family": "APEX",
   "power": 313922083
  },
  {
   "server": 1082,
   "family": "Laughingcoffin",
   "power": 264679855
  },
  {
   "server": 1082,
   "family": "MagicShrooms",
   "power": 264498517
  },
  {
   "server": 1082,
   "family": "StrawHats",
   "power": 170403801
  },
  {
   "server": 1082,
   "family": "ShroomzRus",
   "power": 156546952
  },
  {
   "server": 1082,
   "family": "iShowShrooms",
   "power": 150888165
  },
  {
   "server": 1082,
   "family": "BlueOyster",
   "power": 101574185
  },
  {
   "server": 1082,
   "family": "StormyWeather",
   "power": 67563788
  },
  {
   "server": 1083,
   "family": "Rejects",
   "power": 1369491760
  },
  {
   "server": 1083,
   "family": "NANDOSfamily",
   "power": 411132715
  },
  {
   "server": 1083,
   "family": "LUVNTIDDIES",
   "power": 377455656
  },
  {
   "server": 1083,
   "family": "DarkArmy",
   "power": 339368077
  },
  {
   "server": 1083,
   "family": "Wizards",
   "power": 275374316
  },
  {
   "server": 1083,
   "family": "SporePlay",
   "power": 255881828
  },
  {
   "server": 1083,
   "family": "SquirtleSquad",
   "power": 249017070
  },
  {
   "server": 1083,
   "family": "Doominator",
   "power": 120168565
  },
  {
   "server": 1083,
   "family": "Quantum",
   "power": 112139272
  },
  {
   "server": 1083,
   "family": "Bru",
   "power": 94409058
  },
  {
   "server": 1084,
   "family": "SGB",
   "power": 1459376981
  },
  {
   "server": 1084,
   "family": "Essence",
   "power": 505010420
  },
  {
   "server": 1084,
   "family": "Hyrule",
   "power": 394271284
  },
  {
   "server": 1084,
   "family": "MythicalKings",
   "power": 258721738
  },
  {
   "server": 1084,
   "family": "FALLEN",
   "power": 243349595
  },
  {
   "server": 1084,
   "family": "SmokedShrooms",
   "power": 202838659
  },
  {
   "server": 1084,
   "family": "AussieBludgers",
   "power": 159802595
  },
  {
   "server": 1084,
   "family": "Death_Caps",
   "power": 130503652
  },
  {
   "server": 1084,
   "family": "Mushrooms",
   "power": 124222676
  },
  {
   "server": 1084,
   "family": "Hope",
   "power": 95645606
  },
  {
   "server": 1085,
   "family": "Atrium",
   "power": 1420427705
  },
  {
   "server": 1085,
   "family": "Psychedelic",
   "power": 445125442
  },
  {
   "server": 1085,
   "family": "MagicMushrooms",
   "power": 341827944
  },
  {
   "server": 1085,
   "family": "Apathy",
   "power": 319344868
  },
  {
   "server": 1085,
   "family": "Fellas",
   "power": 303732065
  },
  {
   "server": 1085,
   "family": "SHADOWGHOST",
   "power": 264746865
  },
  {
   "server": 1085,
   "family": "Polarbear",
   "power": 206834442
  },
  {
   "server": 1085,
   "family": "Wrath",
   "power": 200975117
  },
  {
   "server": 1085,
   "family": "Psilovibin",
   "power": 168154845
  },
  {
   "server": 1085,
   "family": "Sakeshroom",
   "power": 163614860
  },
  {
   "server": 1086,
   "family": "WhiteLotus",
   "power": 1319369352
  },
  {
   "server": 1086,
   "family": "420club",
   "power": 944141544
  },
  {
   "server": 1086,
   "family": "Nightshades",
   "power": 327981527
  },
  {
   "server": 1086,
   "family": "chaos",
   "power": 231245597
  },
  {
   "server": 1086,
   "family": "Robonia",
   "power": 216063536
  },
  {
   "server": 1086,
   "family": "PurpleLotus",
   "power": 208453248
  },
  {
   "server": 1086,
   "family": "ApocalypseMush",
   "power": 188136478
  },
  {
   "server": 1086,
   "family": "TheBurrow",
   "power": 164320805
  },
  {
   "server": 1086,
   "family": "MushMen",
   "power": 56366593
  },
  {
   "server": 1086,
   "family": "FALLEN",
   "power": 54443156
  },
  {
   "server": 1087,
   "family": "808Kingdom",
   "power": 1205713718
  },
  {
   "server": 1087,
   "family": "Debauchery",
   "power": 373782864
  },
  {
   "server": 1087,
   "family": "LegendOfShroom",
   "power": 349692576
  },
  {
   "server": 1087,
   "family": "TheFunGuys",
   "power": 347374326
  },
  {
   "server": 1087,
   "family": "MONSTERSof420",
   "power": 267943702
  },
  {
   "server": 1087,
   "family": "Kuriboh",
   "power": 216639263
  },
  {
   "server": 1087,
   "family": "Togoodtobetrue",
   "power": 206798973
  },
  {
   "server": 1087,
   "family": "Wallstreetbets",
   "power": 119179555
  },
  {
   "server": 1087,
   "family": "Purgatory",
   "power": 96410533
  },
  {
   "server": 1087,
   "family": "Buh",
   "power": 86403766
  },
  {
   "server": 1088,
   "family": "LostSouls",
   "power": 1399786718
  },
  {
   "server": 1088,
   "family": "Indoctrinated",
   "power": 335064381
  },
  {
   "server": 1088,
   "family": "Rocka",
   "power": 283000594
  },
  {
   "server": 1088,
   "family": "DarkKnights",
   "power": 268878022
  },
  {
   "server": 1088,
   "family": "darkened420",
   "power": 263680824
  },
  {
   "server": 1088,
   "family": "Crackheads",
   "power": 253175750
  },
  {
   "server": 1088,
   "family": "MUSHROOMKFCLAN",
   "power": 244900038
  },
  {
   "server": 1088,
   "family": "Hanahaki",
   "power": 199859485
  },
  {
   "server": 1088,
   "family": "Ravenclaw",
   "power": 138981444
  },
  {
   "server": 1088,
   "family": "FatNugClub",
   "power": 98051646
  },
  {
   "server": 1089,
   "family": "Haven",
   "power": 967577414
  },
  {
   "server": 1089,
   "family": "LaughingCoffin",
   "power": 964725656
  },
  {
   "server": 1089,
   "family": "Royals",
   "power": 565095657
  },
  {
   "server": 1089,
   "family": "BLANK",
   "power": 245176081
  },
  {
   "server": 1089,
   "family": "Mandalore",
   "power": 245120544
  },
  {
   "server": 1089,
   "family": "ThatWhtSheSaid",
   "power": 223066375
  },
  {
   "server": 1089,
   "family": "SuperFamily",
   "power": 202214034
  },
  {
   "server": 1089,
   "family": "mcpuffins",
   "power": 152583305
  },
  {
   "server": 1089,
   "family": "SoulOfShrooms",
   "power": 137317771
  },
  {
   "server": 1089,
   "family": "FDP",
   "power": 90645966
  },
  {
   "server": 1090,
   "family": "BigOlBlackWood",
   "power": 1470418787
  },
  {
   "server": 1090,
   "family": "APÃ°CALYPSE",
   "power": 1098625617
  },
  {
   "server": 1090,
   "family": "RT",
   "power": 389603854
  },
  {
   "server": 1090,
   "family": "MooshMooshFam",
   "power": 256697256
  },
  {
   "server": 1090,
   "family": "ALMIGHTY",
   "power": 130874121
  },
  {
   "server": 1090,
   "family": "Fungi",
   "power": 85710153
  },
  {
   "server": 1090,
   "family": "Casual",
   "power": 65838541
  },
  {
   "server": 1090,
   "family": "Infected",
   "power": 53850780
  },
  {
   "server": 1090,
   "family": "FamilySpore",
   "power": 47208623
  },
  {
   "server": 1090,
   "family": "Akatsuki",
   "power": 19961209
  },
  {
   "server": 1091,
   "family": "Cafe",
   "power": 1439128370
  },
  {
   "server": 1091,
   "family": "Chill",
   "power": 1014768445
  },
  {
   "server": 1091,
   "family": "ThaKillers",
   "power": 291707681
  },
  {
   "server": 1091,
   "family": "Lilith",
   "power": 256469347
  },
  {
   "server": 1091,
   "family": "Rebels",
   "power": 246529806
  },
  {
   "server": 1091,
   "family": "TRXSH",
   "power": 235272277
  },
  {
   "server": 1091,
   "family": "shroom",
   "power": 182692175
  },
  {
   "server": 1091,
   "family": "Poobis",
   "power": 152042061
  },
  {
   "server": 1091,
   "family": "TheShiitakes",
   "power": 98257501
  },
  {
   "server": 1091,
   "family": "Thegang",
   "power": 57147597
  },
  {
   "server": 1092,
   "family": "Warlords",
   "power": 1098745161
  },
  {
   "server": 1092,
   "family": "DemonMilkers",
   "power": 831305317
  },
  {
   "server": 1092,
   "family": "ROYALS",
   "power": 413089058
  },
  {
   "server": 1092,
   "family": "Empire",
   "power": 391676255
  },
  {
   "server": 1092,
   "family": "SternEchelon",
   "power": 384034019
  },
  {
   "server": 1092,
   "family": "SpaceCowboys",
   "power": 351913061
  },
  {
   "server": 1092,
   "family": "strawhats",
   "power": 297728925
  },
  {
   "server": 1092,
   "family": "Nirvana",
   "power": 185915920
  },
  {
   "server": 1092,
   "family": "Legion",
   "power": 148030104
  },
  {
   "server": 1092,
   "family": "BlackPaw",
   "power": 80962478
  },
  {
   "server": 1093,
   "family": "Mermaid",
   "power": 1452293637
  },
  {
   "server": 1093,
   "family": "Lords",
   "power": 479610743
  },
  {
   "server": 1093,
   "family": "OnePiece",
   "power": 329020922
  },
  {
   "server": 1093,
   "family": "M4DN3SS",
   "power": 298839503
  },
  {
   "server": 1093,
   "family": "ATOMIC",
   "power": 297716135
  },
  {
   "server": 1093,
   "family": "DoomShroom",
   "power": 235692820
  },
  {
   "server": 1093,
   "family": "Bratticus",
   "power": 181729575
  },
  {
   "server": 1093,
   "family": "FairyTail",
   "power": 178141285
  },
  {
   "server": 1093,
   "family": "ShroomTea",
   "power": 147222088
  },
  {
   "server": 1093,
   "family": "EorziaBound",
   "power": 115634309
  },
  {
   "server": 1094,
   "family": "Amoonguss",
   "power": 1387519084
  },
  {
   "server": 1094,
   "family": "SETA",
   "power": 497784588
  },
  {
   "server": 1094,
   "family": "zeroknight",
   "power": 373993821
  },
  {
   "server": 1094,
   "family": "InsomniacsRus",
   "power": 353128921
  },
  {
   "server": 1094,
   "family": "Kingdom",
   "power": 342182882
  },
  {
   "server": 1094,
   "family": "CrowsNest",
   "power": 319152415
  },
  {
   "server": 1094,
   "family": "blackmagic",
   "power": 307587217
  },
  {
   "server": 1094,
   "family": "TheFamily",
   "power": 212398128
  },
  {
   "server": 1094,
   "family": "TRIP",
   "power": 152144038
  },
  {
   "server": 1094,
   "family": "Funguys",
   "power": 70930910
  },
  {
   "server": 1095,
   "family": "Shrooms",
   "power": 1389248525
  },
  {
   "server": 1095,
   "family": "Glitch",
   "power": 1044522673
  },
  {
   "server": 1095,
   "family": "TeepoSwarm",
   "power": 361829210
  },
  {
   "server": 1095,
   "family": "B0rky",
   "power": 268655945
  },
  {
   "server": 1095,
   "family": "USA",
   "power": 234691397
  },
  {
   "server": 1095,
   "family": "TheGnomes",
   "power": 218167180
  },
  {
   "server": 1095,
   "family": "Hawks",
   "power": 203767766
  },
  {
   "server": 1095,
   "family": "MagicMushrooms",
   "power": 158292781
  },
  {
   "server": 1095,
   "family": "kings",
   "power": 152788382
  },
  {
   "server": 1095,
   "family": "Reapers",
   "power": 143767596
  },
  {
   "server": 1096,
   "family": "TheWhales",
   "power": 1417698313
  },
  {
   "server": 1096,
   "family": "Rawr",
   "power": 866242120
  },
  {
   "server": 1096,
   "family": "DragonSect",
   "power": 344521133
  },
  {
   "server": 1096,
   "family": "Psilocybin",
   "power": 325208046
  },
  {
   "server": 1096,
   "family": "MagicMushrooms",
   "power": 210985411
  },
  {
   "server": 1096,
   "family": "Villains",
   "power": 192774610
  },
  {
   "server": 1096,
   "family": "GOATS",
   "power": 188693050
  },
  {
   "server": 1096,
   "family": "Champions",
   "power": 178065804
  },
  {
   "server": 1096,
   "family": "Mushies",
   "power": 60934643
  },
  {
   "server": 1096,
   "family": "Inferno",
   "power": 45827199
  },
  {
   "server": 1097,
   "family": "Fungi",
   "power": 1329787564
  },
  {
   "server": 1097,
   "family": "Skilldap",
   "power": 808492049
  },
  {
   "server": 1097,
   "family": "HouseForsaken",
   "power": 464910855
  },
  {
   "server": 1097,
   "family": "Trippyfam",
   "power": 300459198
  },
  {
   "server": 1097,
   "family": "Lucky",
   "power": 193517960
  },
  {
   "server": 1097,
   "family": "Ajin",
   "power": 158399951
  },
  {
   "server": 1097,
   "family": "Isekai",
   "power": 114961144
  },
  {
   "server": 1097,
   "family": "TheMemeTeam",
   "power": 99073670
  },
  {
   "server": 1097,
   "family": "MushroomClan",
   "power": 77587265
  },
  {
   "server": 1097,
   "family": "ChaoGarden",
   "power": 58018738
  },
  {
   "server": 1098,
   "family": "§atansAngels",
   "power": 1492939449
  },
  {
   "server": 1098,
   "family": "Camelot",
   "power": 653264246
  },
  {
   "server": 1098,
   "family": "Novea",
   "power": 302727443
  },
  {
   "server": 1098,
   "family": "Tyrants",
   "power": 291533602
  },
  {
   "server": 1098,
   "family": "WigWam",
   "power": 174226743
  },
  {
   "server": 1098,
   "family": "thicklargebig",
   "power": 107636757
  },
  {
   "server": 1098,
   "family": "TheFlock",
   "power": 105319866
  },
  {
   "server": 1098,
   "family": "Mothership",
   "power": 101531472
  },
  {
   "server": 1098,
   "family": "Cyber",
   "power": 75232731
  },
  {
   "server": 1098,
   "family": "AutisticShroom",
   "power": 70496965
  },
  {
   "server": 1099,
   "family": "Cryptic",
   "power": 1370258772
  },
  {
   "server": 1099,
   "family": "FairyTail",
   "power": 709315300
  },
  {
   "server": 1099,
   "family": "Primordial",
   "power": 280715363
  },
  {
   "server": 1099,
   "family": "Mush",
   "power": 239446170
  },
  {
   "server": 1099,
   "family": "ShvroomVillage",
   "power": 227101928
  },
  {
   "server": 1099,
   "family": "Marseille",
   "power": 186895915
  },
  {
   "server": 1099,
   "family": "Cloud9",
   "power": 166988718
  },
  {
   "server": 1099,
   "family": "BadAssery",
   "power": 157514019
  },
  {
   "server": 1099,
   "family": "Myconids",
   "power": 127968749
  },
  {
   "server": 1099,
   "family": "OathKnights",
   "power": 126637545
  },
  {
   "server": 1100,
   "family": "ShrooMates",
   "power": 1389664252
  },
  {
   "server": 1100,
   "family": "Ambition",
   "power": 593671957
  },
  {
   "server": 1100,
   "family": "Legends",
   "power": 560085667
  },
  {
   "server": 1100,
   "family": "Noodles",
   "power": 479034697
  },
  {
   "server": 1100,
   "family": "MagicMUSH",
   "power": 414893072
  },
  {
   "server": 1100,
   "family": "LosersOnly",
   "power": 279917200
  },
  {
   "server": 1100,
   "family": "Shroomzerk",
   "power": 269172717
  },
  {
   "server": 1100,
   "family": "AngelFairy702",
   "power": 240322364
  },
  {
   "server": 1100,
   "family": "Purgatory",
   "power": 227018212
  },
  {
   "server": 1100,
   "family": "Shroominators",
   "power": 193820957
  },
  {
   "server": 1101,
   "family": "ShitakeHappens",
   "power": 1525036235
  },
  {
   "server": 1101,
   "family": "ShroomEmpire1",
   "power": 1067981971
  },
  {
   "server": 1101,
   "family": "TakiGang",
   "power": 382010931
  },
  {
   "server": 1101,
   "family": "ShroomBoom",
   "power": 275848131
  },
  {
   "server": 1101,
   "family": "Solaris",
   "power": 260871003
  },
  {
   "server": 1101,
   "family": "EndingFates",
   "power": 259094494
  },
  {
   "server": 1101,
   "family": "Hentai",
   "power": 193280277
  },
  {
   "server": 1101,
   "family": "FunGuyz",
   "power": 130266016
  },
  {
   "server": 1101,
   "family": "Shroomies",
   "power": 92866477
  },
  {
   "server": 1101,
   "family": "MushroomStamp",
   "power": 42634462
  },
  {
   "server": 1102,
   "family": "Nova",
   "power": 1452292606
  },
  {
   "server": 1102,
   "family": "Purgatory",
   "power": 793538997
  },
  {
   "server": 1102,
   "family": "Tempest",
   "power": 340514518
  },
  {
   "server": 1102,
   "family": "SCPFoundation",
   "power": 331984749
  },
  {
   "server": 1102,
   "family": "REAPERS",
   "power": 277036574
  },
  {
   "server": 1102,
   "family": "Degenerates",
   "power": 211243383
  },
  {
   "server": 1102,
   "family": "HippieHermits",
   "power": 189049396
  },
  {
   "server": 1102,
   "family": "EggsNtoast",
   "power": 127849109
  },
  {
   "server": 1102,
   "family": "mushrooms",
   "power": 105749111
  },
  {
   "server": 1102,
   "family": "kaotic",
   "power": 47847121
  },
  {
   "server": 1103,
   "family": "ShroomArmy",
   "power": 1379041036
  },
  {
   "server": 1103,
   "family": "SaintsOfPoison",
   "power": 570843699
  },
  {
   "server": 1103,
   "family": "1UP",
   "power": 318234737
  },
  {
   "server": 1103,
   "family": "SHROOMS",
   "power": 263060077
  },
  {
   "server": 1103,
   "family": "Destroyer",
   "power": 259493371
  },
  {
   "server": 1103,
   "family": "Doom_Makers",
   "power": 233804862
  },
  {
   "server": 1103,
   "family": "GreenFn",
   "power": 203094473
  },
  {
   "server": 1103,
   "family": "Stormyzz",
   "power": 198499945
  },
  {
   "server": 1103,
   "family": "ShroomySweets",
   "power": 196055586
  },
  {
   "server": 1103,
   "family": "Psilocybros",
   "power": 83084092
  },
  {
   "server": 1104,
   "family": "Chrysanthemum",
   "power": 1323126621
  },
  {
   "server": 1104,
   "family": "Meeps",
   "power": 671258818
  },
  {
   "server": 1104,
   "family": "Malevolent",
   "power": 358268947
  },
  {
   "server": 1104,
   "family": "CatboyCrew",
   "power": 280383770
  },
  {
   "server": 1104,
   "family": "MagicMushies",
   "power": 258603484
  },
  {
   "server": 1104,
   "family": "Bingo",
   "power": 189172284
  },
  {
   "server": 1104,
   "family": "SporeSquad",
   "power": 181995467
  },
  {
   "server": 1104,
   "family": "Psycellia",
   "power": 164785029
  },
  {
   "server": 1104,
   "family": "ShadowKnights",
   "power": 139486109
  },
  {
   "server": 1104,
   "family": "RoyalShrooms",
   "power": 44645912
  },
  {
   "server": 1105,
   "family": "GoonerVile",
   "power": 1107381827
  },
  {
   "server": 1105,
   "family": "Mushlords",
   "power": 652630478
  },
  {
   "server": 1105,
   "family": "Blu’sDemons",
   "power": 385468637
  },
  {
   "server": 1105,
   "family": "goobergangster",
   "power": 347097772
  },
  {
   "server": 1105,
   "family": "shroomsntaters",
   "power": 339128638
  },
  {
   "server": 1105,
   "family": "Flacidpeen",
   "power": 293171713
  },
  {
   "server": 1105,
   "family": "20KGLORY",
   "power": 276906921
  },
  {
   "server": 1105,
   "family": "TheMushies",
   "power": 167541109
  },
  {
   "server": 1105,
   "family": "PeppaSteppas",
   "power": 158110715
  },
  {
   "server": 1105,
   "family": "Gods",
   "power": 136588492
  },
  {
   "server": 1106,
   "family": "Gods",
   "power": 1442098425
  },
  {
   "server": 1106,
   "family": "MagicShrooms",
   "power": 1032955629
  },
  {
   "server": 1106,
   "family": "LobsterBaby",
   "power": 428677672
  },
  {
   "server": 1106,
   "family": "Shroomies",
   "power": 424576557
  },
  {
   "server": 1106,
   "family": "ChaosShrooms",
   "power": 402266112
  },
  {
   "server": 1106,
   "family": "Shroomsniffers",
   "power": 274642780
  },
  {
   "server": 1106,
   "family": "FlyingPickles",
   "power": 191417907
  },
  {
   "server": 1106,
   "family": "Sporadix",
   "power": 149398515
  },
  {
   "server": 1106,
   "family": "MagikarpKing",
   "power": 103256165
  },
  {
   "server": 1106,
   "family": "H0RDE",
   "power": 77025771
  },
  {
   "server": 1107,
   "family": "Origami",
   "power": 1301934889
  },
  {
   "server": 1107,
   "family": "RAWR",
   "power": 450721573
  },
  {
   "server": 1107,
   "family": "Toadstool",
   "power": 292707100
  },
  {
   "server": 1107,
   "family": "DUCKMODE",
   "power": 288498485
  },
  {
   "server": 1107,
   "family": "Ashfall",
   "power": 254310015
  },
  {
   "server": 1107,
   "family": "Goonsquad",
   "power": 249282373
  },
  {
   "server": 1107,
   "family": "MushroomRoyals",
   "power": 181313935
  },
  {
   "server": 1107,
   "family": "ShroomHaven",
   "power": 159211435
  },
  {
   "server": 1107,
   "family": "⭐️Lunar⭐️",
   "power": 126281665
  },
  {
   "server": 1107,
   "family": "femboys",
   "power": 101221008
  },
  {
   "server": 1108,
   "family": "IMMORTALS",
   "power": 1279111453
  },
  {
   "server": 1108,
   "family": "Predators",
   "power": 949670067
  },
  {
   "server": 1108,
   "family": "HolyShitake",
   "power": 322233247
  },
  {
   "server": 1108,
   "family": "DemonKing",
   "power": 291224419
  },
  {
   "server": 1108,
   "family": "Epitome",
   "power": 279730938
  },
  {
   "server": 1108,
   "family": "MathMeeps",
   "power": 268700055
  },
  {
   "server": 1108,
   "family": "Deadly_Shrooms",
   "power": 173816364
  },
  {
   "server": 1108,
   "family": "Liquidarmy",
   "power": 170235159
  },
  {
   "server": 1108,
   "family": "TRICHYY’S",
   "power": 162072231
  },
  {
   "server": 1108,
   "family": "DEATHCAP",
   "power": 92352136
  },
  {
   "server": 1109,
   "family": "Jutsu",
   "power": 1520606257
  },
  {
   "server": 1109,
   "family": "Clone_Jutsu",
   "power": 436007956
  },
  {
   "server": 1109,
   "family": "Sage",
   "power": 404096208
  },
  {
   "server": 1109,
   "family": "Philippines",
   "power": 354470797
  },
  {
   "server": 1109,
   "family": "Wings_of_Aura",
   "power": 259207556
  },
  {
   "server": 1109,
   "family": "Elysium",
   "power": 248589025
  },
  {
   "server": 1109,
   "family": "Poisonmushroom",
   "power": 242309706
  },
  {
   "server": 1109,
   "family": "DEEzSHROOMz",
   "power": 199594075
  },
  {
   "server": 1109,
   "family": "Legends",
   "power": 177297116
  },
  {
   "server": 1109,
   "family": "Chaos",
   "power": 31413402
  },
  {
   "server": 1110,
   "family": "Chaos",
   "power": 1357411012
  },
  {
   "server": 1110,
   "family": "FatalFoxx",
   "power": 902481030
  },
  {
   "server": 1110,
   "family": "Yggdrasil",
   "power": 427044038
  },
  {
   "server": 1110,
   "family": "Mojimoji",
   "power": 345508549
  },
  {
   "server": 1110,
   "family": "ShroomRaiders",
   "power": 329080568
  },
  {
   "server": 1110,
   "family": "NoFoxxGiven",
   "power": 282950126
  },
  {
   "server": 1110,
   "family": "Free2Play",
   "power": 262126166
  },
  {
   "server": 1110,
   "family": "ACDSHROOMS",
   "power": 222828836
  },
  {
   "server": 1110,
   "family": "Insomnia",
   "power": 162914910
  },
  {
   "server": 1110,
   "family": "Shroomato’s",
   "power": 111679106
  },
  {
   "server": 1111,
   "family": "EliteDragons",
   "power": 1092586808
  },
  {
   "server": 1111,
   "family": "MushroomBros",
   "power": 1089766708
  },
  {
   "server": 1111,
   "family": "TomuaraCLAN",
   "power": 350644280
  },
  {
   "server": 1111,
   "family": "ShadowGarden",
   "power": 268727099
  },
  {
   "server": 1111,
   "family": "ThousandGods",
   "power": 257061635
  },
  {
   "server": 1111,
   "family": "GreedIsland",
   "power": 250141198
  },
  {
   "server": 1111,
   "family": "Nebula",
   "power": 230905369
  },
  {
   "server": 1111,
   "family": "DivineMycelium",
   "power": 205091066
  },
  {
   "server": 1111,
   "family": "blackdiamond",
   "power": 184737416
  },
  {
   "server": 1111,
   "family": "TheCrusaders",
   "power": 183260162
  },
  {
   "server": 1112,
   "family": "DaFungiPlague",
   "power": 1227455553
  },
  {
   "server": 1112,
   "family": "BustACap",
   "power": 920710973
  },
  {
   "server": 1112,
   "family": "Unstoppables",
   "power": 477604681
  },
  {
   "server": 1112,
   "family": "SKillzM4dNess",
   "power": 351342443
  },
  {
   "server": 1112,
   "family": "MEMBERSONLY",
   "power": 297987727
  },
  {
   "server": 1112,
   "family": "reaperz",
   "power": 266667263
  },
  {
   "server": 1112,
   "family": "TheShrooms",
   "power": 231590279
  },
  {
   "server": 1112,
   "family": "Cmplex",
   "power": 229065071
  },
  {
   "server": 1112,
   "family": "ShroomieBoys",
   "power": 114515696
  },
  {
   "server": 1112,
   "family": "moonlight",
   "power": 76781410
  },
  {
   "server": 1113,
   "family": "Legends",
   "power": 1443231307
  },
  {
   "server": 1113,
   "family": "Versals",
   "power": 397358933
  },
  {
   "server": 1113,
   "family": "Loyalty",
   "power": 300983838
  },
  {
   "server": 1113,
   "family": "ShroomBurn",
   "power": 247135631
  },
  {
   "server": 1113,
   "family": "Shroombussy",
   "power": 205524907
  },
  {
   "server": 1113,
   "family": "Celestials",
   "power": 205180061
  },
  {
   "server": 1113,
   "family": "Fungis",
   "power": 205177554
  },
  {
   "server": 1113,
   "family": "Gods",
   "power": 188500166
  },
  {
   "server": 1113,
   "family": "dragons",
   "power": 167848046
  },
  {
   "server": 1113,
   "family": "DEATHNDARKNESS",
   "power": 95385299
  },
  {
   "server": 1114,
   "family": "Maplestory",
   "power": 1221873929
  },
  {
   "server": 1114,
   "family": "PSILOCYBIN",
   "power": 1103057535
  },
  {
   "server": 1114,
   "family": "Gyatt2Win",
   "power": 251114945
  },
  {
   "server": 1114,
   "family": "FungusAmong’us",
   "power": 231549476
  },
  {
   "server": 1114,
   "family": "ScarletReapers",
   "power": 200725637
  },
  {
   "server": 1114,
   "family": "TheFallen",
   "power": 186084061
  },
  {
   "server": 1114,
   "family": "Chxllz",
   "power": 140361260
  },
  {
   "server": 1114,
   "family": "shroomfam",
   "power": 129148631
  },
  {
   "server": 1114,
   "family": "Psychedelic",
   "power": 112807247
  },
  {
   "server": 1114,
   "family": "DragonKnights",
   "power": 95345175
  },
  {
   "server": 1115,
   "family": "Schrooms",
   "power": 1078200381
  },
  {
   "server": 1115,
   "family": "3amZoomies",
   "power": 1045627297
  },
  {
   "server": 1115,
   "family": "beastz",
   "power": 389879929
  },
  {
   "server": 1115,
   "family": "Introverts",
   "power": 262308268
  },
  {
   "server": 1115,
   "family": "Mooshrooms",
   "power": 261280155
  },
  {
   "server": 1115,
   "family": "TheHunters",
   "power": 257698930
  },
  {
   "server": 1115,
   "family": "Swarm",
   "power": 250795068
  },
  {
   "server": 1115,
   "family": "Gooners",
   "power": 234064691
  },
  {
   "server": 1115,
   "family": "Crypticomen",
   "power": 216406514
  },
  {
   "server": 1115,
   "family": "hazbinhotel",
   "power": 181162678
  },
  {
   "server": 1116,
   "family": "Psychedelics",
   "power": 1391572129
  },
  {
   "server": 1116,
   "family": "Reapers",
   "power": 1214007930
  },
  {
   "server": 1116,
   "family": "DOWNUNDER",
   "power": 606931633
  },
  {
   "server": 1116,
   "family": "MushyLegends",
   "power": 458458212
  },
  {
   "server": 1116,
   "family": "MapleTree",
   "power": 258492111
  },
  {
   "server": 1116,
   "family": "Midgard",
   "power": 242607210
  },
  {
   "server": 1116,
   "family": "mushroom",
   "power": 229354677
  },
  {
   "server": 1116,
   "family": "TransPride",
   "power": 182945417
  },
  {
   "server": 1116,
   "family": "MicroDose",
   "power": 134673882
  },
  {
   "server": 1116,
   "family": "Valhalla",
   "power": 54538149
  },
  {
   "server": 1117,
   "family": "BloodySins",
   "power": 1458537400
  },
  {
   "server": 1117,
   "family": "ClayPots",
   "power": 639017234
  },
  {
   "server": 1117,
   "family": "WarringShrooms",
   "power": 618808918
  },
  {
   "server": 1117,
   "family": "DeathHasAName",
   "power": 440673287
  },
  {
   "server": 1117,
   "family": "whyyyy",
   "power": 248469847
  },
  {
   "server": 1117,
   "family": "ShroomMilitia",
   "power": 200845330
  },
  {
   "server": 1117,
   "family": "Cordyceps",
   "power": 193874709
  },
  {
   "server": 1117,
   "family": "AKATSUKI",
   "power": 167854315
  },
  {
   "server": 1117,
   "family": "CreamyMushroom",
   "power": 111929211
  },
  {
   "server": 1117,
   "family": "Eagles",
   "power": 90162426
  },
  {
   "server": 1118,
   "family": "TheCollective",
   "power": 1481671060
  },
  {
   "server": 1118,
   "family": "RiceRockets",
   "power": 700494673
  },
  {
   "server": 1118,
   "family": "Hazbin_Hotel",
   "power": 686063556
  },
  {
   "server": 1118,
   "family": "Soulfire",
   "power": 355432283
  },
  {
   "server": 1118,
   "family": "Slaying",
   "power": 333950227
  },
  {
   "server": 1118,
   "family": "Cooked",
   "power": 295100706
  },
  {
   "server": 1118,
   "family": "FarFarAway",
   "power": 250513024
  },
  {
   "server": 1118,
   "family": "Myconids",
   "power": 181834132
  },
  {
   "server": 1118,
   "family": "FOREVERKILLING",
   "power": 180043250
  },
  {
   "server": 1118,
   "family": "SpudsUnited",
   "power": 174808342
  },
  {
   "server": 1119,
   "family": "———Queen———",
   "power": 1327057315
  },
  {
   "server": 1119,
   "family": "DemonLords",
   "power": 575292059
  },
  {
   "server": 1119,
   "family": "TheGods",
   "power": 478096031
  },
  {
   "server": 1119,
   "family": "Noobs",
   "power": 427401155
  },
  {
   "server": 1119,
   "family": "MAGICMUSHYS",
   "power": 342756327
  },
  {
   "server": 1119,
   "family": "idk",
   "power": 327838634
  },
  {
   "server": 1119,
   "family": "Psychedelic",
   "power": 299553870
  },
  {
   "server": 1119,
   "family": "Elites",
   "power": 281747084
  },
  {
   "server": 1119,
   "family": "Mushiest",
   "power": 267972234
  },
  {
   "server": 1119,
   "family": "Efif_Musse",
   "power": 74112634
  },
  {
   "server": 1120,
   "family": "Celestial",
   "power": 1326642396
  },
  {
   "server": 1120,
   "family": "SEES",
   "power": 840818957
  },
  {
   "server": 1120,
   "family": "MushroomROAD",
   "power": 656984620
  },
  {
   "server": 1120,
   "family": "Bugs",
   "power": 631117659
  },
  {
   "server": 1120,
   "family": "Unknowns",
   "power": 435323727
  },
  {
   "server": 1120,
   "family": "ShroomKingdom",
   "power": 275969938
  },
  {
   "server": 1120,
   "family": "Xenocide",
   "power": 251582222
  },
  {
   "server": 1120,
   "family": "Zomb33land",
   "power": 197121999
  },
  {
   "server": 1120,
   "family": "house_of_fungu",
   "power": 195448866
  },
  {
   "server": 1120,
   "family": "Amigos",
   "power": 147320086
  },
  {
   "server": 1121,
   "family": "BloodSpore",
   "power": 1492884911
  },
  {
   "server": 1121,
   "family": "Ahjin",
   "power": 851070351
  },
  {
   "server": 1121,
   "family": "sambuka",
   "power": 484879193
  },
  {
   "server": 1121,
   "family": "The_Hero_Party",
   "power": 412489097
  },
  {
   "server": 1121,
   "family": "Happy",
   "power": 297739413
  },
  {
   "server": 1121,
   "family": "SQUAD",
   "power": 264846480
  },
  {
   "server": 1121,
   "family": "Bioluminescent",
   "power": 259091942
  },
  {
   "server": 1121,
   "family": "Pinguelos",
   "power": 225907428
  },
  {
   "server": 1121,
   "family": "DragonBall",
   "power": 177254333
  },
  {
   "server": 1121,
   "family": "Thetrolls",
   "power": 148141270
  },
  {
   "server": 1122,
   "family": "Delinquents",
   "power": 1448053601
  },
  {
   "server": 1122,
   "family": "Degenerates",
   "power": 858082002
  },
  {
   "server": 1122,
   "family": "Mooshrooms",
   "power": 463638988
  },
  {
   "server": 1122,
   "family": "shroomsRfun420",
   "power": 405714984
  },
  {
   "server": 1122,
   "family": "berserk",
   "power": 284760792
  },
  {
   "server": 1122,
   "family": "Doofenshmirtz",
   "power": 269343560
  },
  {
   "server": 1122,
   "family": "Just4fun",
   "power": 185382344
  },
  {
   "server": 1122,
   "family": "ZodiacKnights",
   "power": 171871850
  },
  {
   "server": 1122,
   "family": "Stepbros",
   "power": 163672109
  },
  {
   "server": 1122,
   "family": "Shroomtopia",
   "power": 88052363
  },
  {
   "server": 1123,
   "family": "ShroomzNation",
   "power": 1504015498
  },
  {
   "server": 1123,
   "family": "Shrimp",
   "power": 542246555
  },
  {
   "server": 1123,
   "family": "GANG",
   "power": 334370830
  },
  {
   "server": 1123,
   "family": "Fiddleheads",
   "power": 312230998
  },
  {
   "server": 1123,
   "family": "ShroomsMen",
   "power": 299974005
  },
  {
   "server": 1123,
   "family": "MirrorStars",
   "power": 267284234
  },
  {
   "server": 1123,
   "family": "soulblades",
   "power": 221211255
  },
  {
   "server": 1123,
   "family": "Shroomtastic",
   "power": 208924624
  },
  {
   "server": 1123,
   "family": "Smoge",
   "power": 100007925
  },
  {
   "server": 1123,
   "family": "OnE",
   "power": 52816584
  },
  {
   "server": 1124,
   "family": "OnlyLamps",
   "power": 1155556152
  },
  {
   "server": 1124,
   "family": "KINGS",
   "power": 1010737630
  },
  {
   "server": 1124,
   "family": "ShadowGarden",
   "power": 277576205
  },
  {
   "server": 1124,
   "family": "ShroomGods",
   "power": 232339634
  },
  {
   "server": 1124,
   "family": "EliteFiends",
   "power": 218688326
  },
  {
   "server": 1124,
   "family": "FunGuy",
   "power": 213890952
  },
  {
   "server": 1124,
   "family": "Dragonquest",
   "power": 193139279
  },
  {
   "server": 1124,
   "family": "Wonderland",
   "power": 111817438
  },
  {
   "server": 1124,
   "family": "Aeterna",
   "power": 40122202
  },
  {
   "server": 1124,
   "family": "StickyJohn",
   "power": 30652277
  },
  {
   "server": 1125,
   "family": "AssaultTeam",
   "power": 1397272337
  },
  {
   "server": 1125,
   "family": "BloodBorne",
   "power": 599188270
  },
  {
   "server": 1125,
   "family": "SwagKings",
   "power": 426933371
  },
  {
   "server": 1125,
   "family": "Demonsouls",
   "power": 259790232
  },
  {
   "server": 1125,
   "family": "GardenGate",
   "power": 228776675
  },
  {
   "server": 1125,
   "family": "FingerBlasters",
   "power": 191286510
  },
  {
   "server": 1125,
   "family": "ShroomHeroes",
   "power": 135226566
  },
  {
   "server": 1125,
   "family": "DeathDealers",
   "power": 130479588
  },
  {
   "server": 1125,
   "family": "shoom",
   "power": 123645959
  },
  {
   "server": 1125,
   "family": "StrawHats",
   "power": 84340471
  },
  {
   "server": 1126,
   "family": "Gods",
   "power": 1336507717
  },
  {
   "server": 1126,
   "family": "Angels",
   "power": 440664981
  },
  {
   "server": 1126,
   "family": "TheShroomies",
   "power": 431674651
  },
  {
   "server": 1126,
   "family": "Limitless",
   "power": 352466630
  },
  {
   "server": 1126,
   "family": "StrawHats",
   "power": 279220166
  },
  {
   "server": 1126,
   "family": "Yggdrasil",
   "power": 251608585
  },
  {
   "server": 1126,
   "family": "OnePiece",
   "power": 224865194
  },
  {
   "server": 1126,
   "family": "Shroomers",
   "power": 217679439
  },
  {
   "server": 1126,
   "family": "Shroomihut",
   "power": 213100308
  },
  {
   "server": 1126,
   "family": "420Fam",
   "power": 186993307
  },
  {
   "server": 1127,
   "family": "CookieGods",
   "power": 1493069807
  },
  {
   "server": 1127,
   "family": "Shroomates",
   "power": 860593986
  },
  {
   "server": 1127,
   "family": "CookieFathers",
   "power": 464466622
  },
  {
   "server": 1127,
   "family": "7DeadlyFungi",
   "power": 374392920
  },
  {
   "server": 1127,
   "family": "Moon",
   "power": 339262813
  },
  {
   "server": 1127,
   "family": "Myconids",
   "power": 218689775
  },
  {
   "server": 1127,
   "family": "Elite",
   "power": 209986176
  },
  {
   "server": 1127,
   "family": "TransRights",
   "power": 202658876
  },
  {
   "server": 1127,
   "family": "Convocation",
   "power": 171890716
  },
  {
   "server": 1127,
   "family": "Valhalla",
   "power": 116336343
  },
  {
   "server": 1128,
   "family": "Skylla",
   "power": 1528995807
  },
  {
   "server": 1128,
   "family": "ClownHouse",
   "power": 740117042
  },
  {
   "server": 1128,
   "family": "Equinox",
   "power": 443593951
  },
  {
   "server": 1128,
   "family": "DaKimz",
   "power": 334800081
  },
  {
   "server": 1128,
   "family": "Strawhats",
   "power": 331564104
  },
  {
   "server": 1128,
   "family": "MistVillage",
   "power": 241963977
  },
  {
   "server": 1128,
   "family": "Paradox",
   "power": 222118508
  },
  {
   "server": 1128,
   "family": "Typhon",
   "power": 176382941
  },
  {
   "server": 1128,
   "family": "Amanita",
   "power": 170478317
  },
  {
   "server": 1128,
   "family": "ShroomDoom",
   "power": 166978681
  },
  {
   "server": 1129,
   "family": "Apex",
   "power": 1228243761
  },
  {
   "server": 1129,
   "family": "TheNation",
   "power": 514875679
  },
  {
   "server": 1129,
   "family": "psychedelics",
   "power": 355248240
  },
  {
   "server": 1129,
   "family": "Villains",
   "power": 341136903
  },
  {
   "server": 1129,
   "family": "Slimegang",
   "power": 328329287
  },
  {
   "server": 1129,
   "family": "ALOHA",
   "power": 278255773
  },
  {
   "server": 1129,
   "family": "bakedshroom",
   "power": 217060766
  },
  {
   "server": 1129,
   "family": "BET",
   "power": 203131010
  },
  {
   "server": 1129,
   "family": "Stormraven",
   "power": 183778027
  },
  {
   "server": 1129,
   "family": "YahADabWillDo",
   "power": 66646314
  },
  {
   "server": 1130,
   "family": "Rapture",
   "power": 1373284482
  },
  {
   "server": 1130,
   "family": "CaveDwellers",
   "power": 793617301
  },
  {
   "server": 1130,
   "family": "IcedCoffee",
   "power": 522369744
  },
  {
   "server": 1130,
   "family": "Limitless",
   "power": 373189460
  },
  {
   "server": 1130,
   "family": "DeathWish",
   "power": 324542583
  },
  {
   "server": 1130,
   "family": "LEGENDS",
   "power": 322521409
  },
  {
   "server": 1130,
   "family": "Storm",
   "power": 287779924
  },
  {
   "server": 1130,
   "family": "DevilTown",
   "power": 239598251
  },
  {
   "server": 1130,
   "family": "shroomville",
   "power": 224426710
  },
  {
   "server": 1130,
   "family": "Ragnarok",
   "power": 203419409
  },
  {
   "server": 1131,
   "family": "Monarchs",
   "power": 1022535505
  },
  {
   "server": 1131,
   "family": "GothicsRUs",
   "power": 1022517326
  },
  {
   "server": 1131,
   "family": "DeathCap",
   "power": 846103741
  },
  {
   "server": 1131,
   "family": "Funguys",
   "power": 329134062
  },
  {
   "server": 1131,
   "family": "ShroomSlayers",
   "power": 308011097
  },
  {
   "server": 1131,
   "family": "TheHubStars",
   "power": 251345506
  },
  {
   "server": 1131,
   "family": "starfire",
   "power": 226244126
  },
  {
   "server": 1131,
   "family": "mushrooms",
   "power": 176464327
  },
  {
   "server": 1131,
   "family": "EDENS",
   "power": 162358767
  },
  {
   "server": 1131,
   "family": "Isekaied",
   "power": 78761900
  },
  {
   "server": 1132,
   "family": "TheFinalNut",
   "power": 1404196938
  },
  {
   "server": 1132,
   "family": "FunGuy",
   "power": 743457792
  },
  {
   "server": 1132,
   "family": "Shroomies",
   "power": 397848314
  },
  {
   "server": 1132,
   "family": "FUNgi",
   "power": 375788589
  },
  {
   "server": 1132,
   "family": "Mushlings",
   "power": 329076498
  },
  {
   "server": 1132,
   "family": "Funging",
   "power": 287126421
  },
  {
   "server": 1132,
   "family": "Deathfromabove",
   "power": 216757308
  },
  {
   "server": 1132,
   "family": "FurGamers",
   "power": 161971629
  },
  {
   "server": 1132,
   "family": "legends",
   "power": 149532476
  },
  {
   "server": 1132,
   "family": "Hi",
   "power": 75245473
  },
  {
   "server": 1133,
   "family": "Whales",
   "power": 1432559445
  },
  {
   "server": 1133,
   "family": "SoloLeveling",
   "power": 704230503
  },
  {
   "server": 1133,
   "family": "DeathWish",
   "power": 406005645
  },
  {
   "server": 1133,
   "family": "ShroomMagicks",
   "power": 297281563
  },
  {
   "server": 1133,
   "family": "Ghost",
   "power": 286420409
  },
  {
   "server": 1133,
   "family": "FormidablShrom",
   "power": 277636691
  },
  {
   "server": 1133,
   "family": "BEROFF",
   "power": 251933122
  },
  {
   "server": 1133,
   "family": "Legendary",
   "power": 244714418
  },
  {
   "server": 1133,
   "family": "Karma",
   "power": 188142446
  },
  {
   "server": 1133,
   "family": "JacBoyz",
   "power": 71409275
  },
  {
   "server": 1134,
   "family": "Bløssøm",
   "power": 1218190896
  },
  {
   "server": 1134,
   "family": "WildOnes",
   "power": 1072842140
  },
  {
   "server": 1134,
   "family": "SharkesOcean",
   "power": 757261184
  },
  {
   "server": 1134,
   "family": "Toad",
   "power": 365597545
  },
  {
   "server": 1134,
   "family": "Fffffffffff",
   "power": 239800843
  },
  {
   "server": 1134,
   "family": "Shroomies",
   "power": 207930429
  },
  {
   "server": 1134,
   "family": "SleepRose",
   "power": 162327555
  },
  {
   "server": 1134,
   "family": "Canada",
   "power": 161046551
  },
  {
   "server": 1134,
   "family": "CutiePatooties",
   "power": 150940832
  },
  {
   "server": 1134,
   "family": "Shroomabooms",
   "power": 148175936
  },
  {
   "server": 1135,
   "family": "Bandits",
   "power": 1490875302
  },
  {
   "server": 1135,
   "family": "Cookies",
   "power": 477719388
  },
  {
   "server": 1135,
   "family": "Shroomys",
   "power": 449699268
  },
  {
   "server": 1135,
   "family": "LOM",
   "power": 345741920
  },
  {
   "server": 1135,
   "family": "NormalPeople",
   "power": 296405268
  },
  {
   "server": 1135,
   "family": "Twister",
   "power": 252007431
  },
  {
   "server": 1135,
   "family": "Nazarick",
   "power": 225867958
  },
  {
   "server": 1135,
   "family": "Shrooms",
   "power": 218362773
  },
  {
   "server": 1135,
   "family": "Divine",
   "power": 190332653
  },
  {
   "server": 1135,
   "family": "FunGuys",
   "power": 110578842
  },
  {
   "server": 1136,
   "family": "OnlyShrooms",
   "power": 1353505333
  },
  {
   "server": 1136,
   "family": "Shiitake",
   "power": 851534085
  },
  {
   "server": 1136,
   "family": "gameisdead",
   "power": 376644096
  },
  {
   "server": 1136,
   "family": "CunningStunts",
   "power": 358310037
  },
  {
   "server": 1136,
   "family": "semars",
   "power": 313349042
  },
  {
   "server": 1136,
   "family": "ChungusFungus",
   "power": 228590791
  },
  {
   "server": 1136,
   "family": "GalaxyShrooms",
   "power": 181515563
  },
  {
   "server": 1136,
   "family": "mushheads",
   "power": 84345562
  },
  {
   "server": 1136,
   "family": "MuffinStuffers",
   "power": 79972008
  },
  {
   "server": 1136,
   "family": "TruffleButter",
   "power": 78300907
  },
  {
   "server": 1137,
   "family": "Fate",
   "power": 1089029047
  },
  {
   "server": 1137,
   "family": "Origin",
   "power": 606652291
  },
  {
   "server": 1137,
   "family": "MapleStory",
   "power": 501569812
  },
  {
   "server": 1137,
   "family": "Shrooms",
   "power": 334759471
  },
  {
   "server": 1137,
   "family": "Yes",
   "power": 317653622
  },
  {
   "server": 1137,
   "family": "crazyshroom",
   "power": 250724627
  },
  {
   "server": 1137,
   "family": "Legendary",
   "power": 246124912
  },
  {
   "server": 1137,
   "family": "Divinity",
   "power": 210250228
  },
  {
   "server": 1137,
   "family": "NoTruffle",
   "power": 207274064
  },
  {
   "server": 1137,
   "family": "₴₳₦₵₮Ʉ₥",
   "power": 181325110
  },
  {
   "server": 1138,
   "family": "Frogs",
   "power": 1291701583
  },
  {
   "server": 1138,
   "family": "Akatsuki",
   "power": 579025602
  },
  {
   "server": 1138,
   "family": "FourHorsemen",
   "power": 472441989
  },
  {
   "server": 1138,
   "family": "GalacticShroom",
   "power": 454936113
  },
  {
   "server": 1138,
   "family": "COSMICS",
   "power": 310153787
  },
  {
   "server": 1138,
   "family": "Pheonix",
   "power": 297166901
  },
  {
   "server": 1138,
   "family": "BlackIce",
   "power": 276953567
  },
  {
   "server": 1138,
   "family": "Shroomvengers",
   "power": 214677837
  },
  {
   "server": 1138,
   "family": "Shroomsnu",
   "power": 170977781
  },
  {
   "server": 1138,
   "family": "Shroomies",
   "power": 164773091
  },
  {
   "server": 1139,
   "family": "Mushers",
   "power": 1429286911
  },
  {
   "server": 1139,
   "family": "Wagwan",
   "power": 1190751287
  },
  {
   "server": 1139,
   "family": "Troubledesk",
   "power": 470779844
  },
  {
   "server": 1139,
   "family": "frenchteam",
   "power": 369017789
  },
  {
   "server": 1139,
   "family": "kitties",
   "power": 312974741
  },
  {
   "server": 1139,
   "family": "SkittleSquad",
   "power": 296462175
  },
  {
   "server": 1139,
   "family": "Freak_Nation",
   "power": 251067748
  },
  {
   "server": 1139,
   "family": "OnePiece",
   "power": 190696249
  },
  {
   "server": 1139,
   "family": "ShroomgoVroom",
   "power": 170816670
  },
  {
   "server": 1139,
   "family": "TippyTakis",
   "power": 95894460
  },
  {
   "server": 1140,
   "family": "TG",
   "power": 1191337897
  },
  {
   "server": 1140,
   "family": "MasterPiece",
   "power": 1048864580
  },
  {
   "server": 1140,
   "family": "_BRELOOM_",
   "power": 393875480
  },
  {
   "server": 1140,
   "family": "DayTrippers",
   "power": 303062779
  },
  {
   "server": 1140,
   "family": "MagicMushroom",
   "power": 275014272
  },
  {
   "server": 1140,
   "family": "POISON",
   "power": 273584466
  },
  {
   "server": 1140,
   "family": "Valhalla",
   "power": 257084624
  },
  {
   "server": 1140,
   "family": "MilkOfZaddy",
   "power": 251108925
  },
  {
   "server": 1140,
   "family": "Toadstools",
   "power": 187252903
  },
  {
   "server": 1140,
   "family": "KURTYDORES",
   "power": 159104529
  },
  {
   "server": 1141,
   "family": "Leviathan",
   "power": 1427567447
  },
  {
   "server": 1141,
   "family": "Adventure⭐Time",
   "power": 618139713
  },
  {
   "server": 1141,
   "family": "Uprising",
   "power": 494231912
  },
  {
   "server": 1141,
   "family": "LE",
   "power": 379703573
  },
  {
   "server": 1141,
   "family": "Spore4Spore",
   "power": 359751767
  },
  {
   "server": 1141,
   "family": "Shrooms",
   "power": 336474742
  },
  {
   "server": 1141,
   "family": "FeistyFungi",
   "power": 208305273
  },
  {
   "server": 1141,
   "family": "SporeNexus",
   "power": 205310238
  },
  {
   "server": 1141,
   "family": "SporeSociety",
   "power": 129472585
  },
  {
   "server": 1141,
   "family": "FUNgiKINGdom",
   "power": 112655360
  },
  {
   "server": 1142,
   "family": "Royalty",
   "power": 1317117075
  },
  {
   "server": 1142,
   "family": "Boba",
   "power": 860107263
  },
  {
   "server": 1142,
   "family": "Nebula",
   "power": 280142532
  },
  {
   "server": 1142,
   "family": "weirdos",
   "power": 258178723
  },
  {
   "server": 1142,
   "family": "kanekis_family",
   "power": 251993697
  },
  {
   "server": 1142,
   "family": "SOA",
   "power": 242955846
  },
  {
   "server": 1142,
   "family": "MagicShrooms",
   "power": 226608290
  },
  {
   "server": 1142,
   "family": "FUBAR",
   "power": 176006217
  },
  {
   "server": 1142,
   "family": "Dharan",
   "power": 108319645
  },
  {
   "server": 1142,
   "family": "FriedChicken",
   "power": 104930543
  },
  {
   "server": 1143,
   "family": "Hell_Hounds",
   "power": 1426280582
  },
  {
   "server": 1143,
   "family": "WeAreShroom",
   "power": 608958263
  },
  {
   "server": 1143,
   "family": "FriedChicken",
   "power": 440682569
  },
  {
   "server": 1143,
   "family": "Funguys",
   "power": 267211314
  },
  {
   "server": 1143,
   "family": "RamenLOVERS",
   "power": 267062335
  },
  {
   "server": 1143,
   "family": "Reaper",
   "power": 263829029
  },
  {
   "server": 1143,
   "family": "Solo",
   "power": 258976196
  },
  {
   "server": 1143,
   "family": "shroomlovers",
   "power": 232398091
  },
  {
   "server": 1143,
   "family": "DIABLO",
   "power": 204854097
  },
  {
   "server": 1143,
   "family": "XvalhallaX",
   "power": 163870927
  },
  {
   "server": 1144,
   "family": "HazyShrooms",
   "power": 1180156818
  },
  {
   "server": 1144,
   "family": "Yggdrasil",
   "power": 938811142
  },
  {
   "server": 1144,
   "family": "FungusAmongus",
   "power": 456117383
  },
  {
   "server": 1144,
   "family": "SadisticSpores",
   "power": 328987843
  },
  {
   "server": 1144,
   "family": "Gods",
   "power": 295487757
  },
  {
   "server": 1144,
   "family": "InnocentZero",
   "power": 277147568
  },
  {
   "server": 1144,
   "family": "GodIsKing",
   "power": 260209015
  },
  {
   "server": 1144,
   "family": "Kaizen",
   "power": 202139214
  },
  {
   "server": 1144,
   "family": "Kittens",
   "power": 141931498
  },
  {
   "server": 1144,
   "family": "Azathoth_Cult",
   "power": 133283436
  },
  {
   "server": 1145,
   "family": "OnlyShrooms",
   "power": 1344248274
  },
  {
   "server": 1145,
   "family": "NeonGhosts",
   "power": 915560061
  },
  {
   "server": 1145,
   "family": "§KINGDOM§",
   "power": 487047312
  },
  {
   "server": 1145,
   "family": "LeafVillage",
   "power": 409707650
  },
  {
   "server": 1145,
   "family": "RavenClaw",
   "power": 361825767
  },
  {
   "server": 1145,
   "family": "PENUMBRA",
   "power": 323646259
  },
  {
   "server": 1145,
   "family": "SporeKnight",
   "power": 282915949
  },
  {
   "server": 1145,
   "family": "GayBread",
   "power": 234004771
  },
  {
   "server": 1145,
   "family": "BBL",
   "power": 180863339
  },
  {
   "server": 1145,
   "family": "Femboyfriendly",
   "power": 148582385
  },
  {
   "server": 1146,
   "family": "Shiitake",
   "power": 1371580775
  },
  {
   "server": 1146,
   "family": "LowIQShrooms",
   "power": 878742799
  },
  {
   "server": 1146,
   "family": "Akatsuki",
   "power": 750208934
  },
  {
   "server": 1146,
   "family": "Equinox",
   "power": 363340577
  },
  {
   "server": 1146,
   "family": "Feet",
   "power": 316479620
  },
  {
   "server": 1146,
   "family": "Reaper",
   "power": 272600653
  },
  {
   "server": 1146,
   "family": "zach130",
   "power": 266624637
  },
  {
   "server": 1146,
   "family": "BagOfBones",
   "power": 218589528
  },
  {
   "server": 1146,
   "family": "TheSlayers",
   "power": 213698738
  },
  {
   "server": 1146,
   "family": "🧀",
   "power": 201379028
  },
  {
   "server": 1147,
   "family": "Prophecy",
   "power": 1309166083
  },
  {
   "server": 1147,
   "family": "ShroomCity",
   "power": 1133565332
  },
  {
   "server": 1147,
   "family": "Mafia",
   "power": 646067257
  },
  {
   "server": 1147,
   "family": "Ducks",
   "power": 298749609
  },
  {
   "server": 1147,
   "family": "OnTop",
   "power": 292393216
  },
  {
   "server": 1147,
   "family": "TheSyndicate",
   "power": 217249186
  },
  {
   "server": 1147,
   "family": "InnerCircle",
   "power": 199279797
  },
  {
   "server": 1147,
   "family": "ADHDisaB",
   "power": 190584731
  },
  {
   "server": 1147,
   "family": "QCChampieKings",
   "power": 189596345
  },
  {
   "server": 1147,
   "family": "Shadows",
   "power": 129413813
  },
  {
   "server": 1148,
   "family": "Aesthetica",
   "power": 1383142591
  },
  {
   "server": 1148,
   "family": "Snowflake",
   "power": 615573043
  },
  {
   "server": 1148,
   "family": "XsunstriderX",
   "power": 547557849
  },
  {
   "server": 1148,
   "family": "Psilocybin",
   "power": 341061930
  },
  {
   "server": 1148,
   "family": "SnowyHideaway",
   "power": 280762456
  },
  {
   "server": 1148,
   "family": "M_Cult_M",
   "power": 280304165
  },
  {
   "server": 1148,
   "family": "Doji",
   "power": 261036075
  },
  {
   "server": 1148,
   "family": "shroomington",
   "power": 258053156
  },
  {
   "server": 1148,
   "family": "rougarou",
   "power": 245417318
  },
  {
   "server": 1148,
   "family": "TheVoid",
   "power": 233943725
  },
  {
   "server": 1149,
   "family": "SteelShrooms",
   "power": 1298477714
  },
  {
   "server": 1149,
   "family": "FungalFury",
   "power": 555270696
  },
  {
   "server": 1149,
   "family": "makeAwish",
   "power": 437017126
  },
  {
   "server": 1149,
   "family": "Shroompies",
   "power": 386892691
  },
  {
   "server": 1149,
   "family": "Roomies",
   "power": 351091802
  },
  {
   "server": 1149,
   "family": "Chaos",
   "power": 325147679
  },
  {
   "server": 1149,
   "family": "TheWildZ",
   "power": 292369707
  },
  {
   "server": 1149,
   "family": "BrasilLegend",
   "power": 155506046
  },
  {
   "server": 1149,
   "family": "Freelo",
   "power": 62036964
  },
  {
   "server": 1149,
   "family": "FaeFam",
   "power": 46729366
  },
  {
   "server": 1150,
   "family": "Yggdrasil",
   "power": 1278068713
  },
  {
   "server": 1150,
   "family": "Devastation",
   "power": 617181731
  },
  {
   "server": 1150,
   "family": "Creampuffs",
   "power": 379939692
  },
  {
   "server": 1150,
   "family": "DemonShroom",
   "power": 311903628
  },
  {
   "server": 1150,
   "family": "Psychedelic",
   "power": 304736540
  },
  {
   "server": 1150,
   "family": "out4blood",
   "power": 233865279
  },
  {
   "server": 1150,
   "family": "banana",
   "power": 224971463
  },
  {
   "server": 1150,
   "family": "Dreams",
   "power": 183815362
  },
  {
   "server": 1150,
   "family": "LickWindows",
   "power": 153463728
  },
  {
   "server": 1150,
   "family": "LostShrooms",
   "power": 93825093
  },
  {
   "server": 1151,
   "family": "IronGods",
   "power": 1322378397
  },
  {
   "server": 1151,
   "family": "RAMEN",
   "power": 576904477
  },
  {
   "server": 1151,
   "family": "Placido",
   "power": 376388521
  },
  {
   "server": 1151,
   "family": "Sybil",
   "power": 355689319
  },
  {
   "server": 1151,
   "family": "HtF",
   "power": 289173953
  },
  {
   "server": 1151,
   "family": "Shroomish",
   "power": 276579425
  },
  {
   "server": 1151,
   "family": "Hallownest",
   "power": 244812155
  },
  {
   "server": 1151,
   "family": "AoA",
   "power": 239078555
  },
  {
   "server": 1151,
   "family": "AlphaShroomz",
   "power": 216629054
  },
  {
   "server": 1151,
   "family": "Kami",
   "power": 199466396
  },
  {
   "server": 1152,
   "family": "Shroomageddon",
   "power": 1176741547
  },
  {
   "server": 1152,
   "family": "DarkGate",
   "power": 870520010
  },
  {
   "server": 1152,
   "family": "ShroomLords",
   "power": 518327677
  },
  {
   "server": 1152,
   "family": "Nagareboshi",
   "power": 486403219
  },
  {
   "server": 1152,
   "family": "Valhalla",
   "power": 478931455
  },
  {
   "server": 1152,
   "family": "Felonious",
   "power": 282058213
  },
  {
   "server": 1152,
   "family": "WompWomp",
   "power": 260682680
  },
  {
   "server": 1152,
   "family": "DootsHouse",
   "power": 216160627
  },
  {
   "server": 1152,
   "family": "Black",
   "power": 204884047
  },
  {
   "server": 1152,
   "family": "NightOwls",
   "power": 182694669
  },
  {
   "server": 1153,
   "family": "MushLords",
   "power": 1114004991
  },
  {
   "server": 1153,
   "family": "LittleShrooms",
   "power": 1041482438
  },
  {
   "server": 1153,
   "family": "Crazycrackers",
   "power": 481173000
  },
  {
   "server": 1153,
   "family": "DoubleCheekdUp",
   "power": 305696441
  },
  {
   "server": 1153,
   "family": "toasts",
   "power": 298984981
  },
  {
   "server": 1153,
   "family": "RebelShrooms",
   "power": 259181693
  },
  {
   "server": 1153,
   "family": "Dragons",
   "power": 201140492
  },
  {
   "server": 1153,
   "family": "goofyshrooms",
   "power": 178012271
  },
  {
   "server": 1153,
   "family": "Mushroomlings",
   "power": 175545002
  },
  {
   "server": 1153,
   "family": "Fairytail",
   "power": 175050006
  },
  {
   "server": 1154,
   "family": "HiddenOutpost",
   "power": 1301718595
  },
  {
   "server": 1154,
   "family": "Immortals",
   "power": 931258144
  },
  {
   "server": 1154,
   "family": "nobodys",
   "power": 362789749
  },
  {
   "server": 1154,
   "family": "SLAYFULBADDIES",
   "power": 361026894
  },
  {
   "server": 1154,
   "family": "WolfPack",
   "power": 352694643
  },
  {
   "server": 1154,
   "family": "GrownFolk",
   "power": 325629095
  },
  {
   "server": 1154,
   "family": "Lucky",
   "power": 301231793
  },
  {
   "server": 1154,
   "family": "MushroomTrip",
   "power": 245857216
  },
  {
   "server": 1154,
   "family": "NewOrder",
   "power": 201286537
  },
  {
   "server": 1154,
   "family": "Deathcaps",
   "power": 132846256
  },
  {
   "server": 1155,
   "family": "Funguys",
   "power": 1238046728
  },
  {
   "server": 1155,
   "family": "Caratmakers",
   "power": 560834554
  },
  {
   "server": 1155,
   "family": "Shrooms",
   "power": 494290874
  },
  {
   "server": 1155,
   "family": "Noobers",
   "power": 412019233
  },
  {
   "server": 1155,
   "family": "Salty",
   "power": 371056870
  },
  {
   "server": 1155,
   "family": "Spored",
   "power": 305619307
  },
  {
   "server": 1155,
   "family": "MushSquad",
   "power": 299346568
  },
  {
   "server": 1155,
   "family": "Valhalla",
   "power": 283575101
  },
  {
   "server": 1155,
   "family": "TheValley",
   "power": 246052024
  },
  {
   "server": 1155,
   "family": "Shroomezz",
   "power": 233676757
  },
  {
   "server": 1156,
   "family": "shroomless",
   "power": 1305987617
  },
  {
   "server": 1156,
   "family": "MacDaddyShroom",
   "power": 517823932
  },
  {
   "server": 1156,
   "family": "Mushroom",
   "power": 413318096
  },
  {
   "server": 1156,
   "family": "Shrooms",
   "power": 392297723
  },
  {
   "server": 1156,
   "family": "Assassins",
   "power": 277173782
  },
  {
   "server": 1156,
   "family": "501st_legion",
   "power": 255013031
  },
  {
   "server": 1156,
   "family": "ShadowStalkers",
   "power": 228274639
  },
  {
   "server": 1156,
   "family": "Tempest",
   "power": 212829833
  },
  {
   "server": 1156,
   "family": "psyllium",
   "power": 205171089
  },
  {
   "server": 1156,
   "family": "latínclan",
   "power": 180244647
  },
  {
   "server": 1157,
   "family": "topFAMILY",
   "power": 1276335638
  },
  {
   "server": 1157,
   "family": "Toman",
   "power": 809111428
  },
  {
   "server": 1157,
   "family": "Shroomish",
   "power": 370185781
  },
  {
   "server": 1157,
   "family": "MushroomEmpire",
   "power": 351122617
  },
  {
   "server": 1157,
   "family": "Trippy",
   "power": 273395695
  },
  {
   "server": 1157,
   "family": "Dragon",
   "power": 213029675
  },
  {
   "server": 1157,
   "family": "Arcadie",
   "power": 182550824
  },
  {
   "server": 1157,
   "family": "ShroomieAgenda",
   "power": 172294464
  },
  {
   "server": 1157,
   "family": "FrungyLeague",
   "power": 164371020
  },
  {
   "server": 1157,
   "family": "Knoyx",
   "power": 152839652
  },
  {
   "server": 1158,
   "family": "𝟐𝐋𝐔𝐂𝐊𝐘",
   "power": 1462384938
  },
  {
   "server": 1158,
   "family": "2UNLucky",
   "power": 644181864
  },
  {
   "server": 1158,
   "family": "Valhalla",
   "power": 568174211
  },
  {
   "server": 1158,
   "family": "Shameless",
   "power": 399072711
  },
  {
   "server": 1158,
   "family": "Fungi",
   "power": 360835958
  },
  {
   "server": 1158,
   "family": "TheBlackRose",
   "power": 272604341
  },
  {
   "server": 1158,
   "family": "RAT",
   "power": 237292728
  },
  {
   "server": 1158,
   "family": "Power",
   "power": 225715641
  },
  {
   "server": 1158,
   "family": "DoomShrooms",
   "power": 163939908
  },
  {
   "server": 1158,
   "family": "FairyCircle",
   "power": 140868003
  },
  {
   "server": 1159,
   "family": "ᵂᵉ’ʳᵉᴼⁿˢʰʳᵒᵒᵐˢ",
   "power": 1081879086
  },
  {
   "server": 1159,
   "family": "Ronin",
   "power": 793861997
  },
  {
   "server": 1159,
   "family": "Doomshrooms",
   "power": 410223068
  },
  {
   "server": 1159,
   "family": "G59",
   "power": 360114331
  },
  {
   "server": 1159,
   "family": "HitmansShrooms",
   "power": 308305372
  },
  {
   "server": 1159,
   "family": "FungiArmada",
   "power": 257644561
  },
  {
   "server": 1159,
   "family": "DragonBall",
   "power": 223135064
  },
  {
   "server": 1159,
   "family": "Fungi",
   "power": 222536193
  },
  {
   "server": 1159,
   "family": "DOOM_SHROOMS",
   "power": 158878557
  },
  {
   "server": 1159,
   "family": "TurtlePower",
   "power": 133464498
  },
  {
   "server": 1160,
   "family": "Shrooms",
   "power": 1266835801
  },
  {
   "server": 1160,
   "family": "StarbiesUnited",
   "power": 1047081796
  },
  {
   "server": 1160,
   "family": "SOS",
   "power": 441696044
  },
  {
   "server": 1160,
   "family": "mushroomsoup",
   "power": 312162865
  },
  {
   "server": 1160,
   "family": "CanadianPower",
   "power": 259918968
  },
  {
   "server": 1160,
   "family": "1000Sunny",
   "power": 245822005
  },
  {
   "server": 1160,
   "family": "PartyShrooms",
   "power": 210658831
  },
  {
   "server": 1160,
   "family": "Sanctuary",
   "power": 209125341
  },
  {
   "server": 1160,
   "family": "Deadmen",
   "power": 205066872
  },
  {
   "server": 1160,
   "family": "Nicksfamily",
   "power": 189045089
  },
  {
   "server": 1161,
   "family": "Grind4Fun",
   "power": 1290033170
  },
  {
   "server": 1161,
   "family": "Creampufflover",
   "power": 985104857
  },
  {
   "server": 1161,
   "family": "Solaria",
   "power": 496286810
  },
  {
   "server": 1161,
   "family": "Earthlings",
   "power": 291341074
  },
  {
   "server": 1161,
   "family": "HellsNation",
   "power": 261495255
  },
  {
   "server": 1161,
   "family": "Akatsuki",
   "power": 237181185
  },
  {
   "server": 1161,
   "family": "Nest",
   "power": 234597967
  },
  {
   "server": 1161,
   "family": "Eden",
   "power": 232558414
  },
  {
   "server": 1161,
   "family": "7DeadlyShrooms",
   "power": 212059784
  },
  {
   "server": 1161,
   "family": "ShroomKnights",
   "power": 205761793
  },
  {
   "server": 1162,
   "family": "Night",
   "power": 1320687427
  },
  {
   "server": 1162,
   "family": "VALHALLA",
   "power": 728293143
  },
  {
   "server": 1162,
   "family": "Elite",
   "power": 453686198
  },
  {
   "server": 1162,
   "family": "Paytowin",
   "power": 303738276
  },
  {
   "server": 1162,
   "family": "OppenHeimer",
   "power": 292409485
  },
  {
   "server": 1162,
   "family": "FungiForce",
   "power": 284719195
  },
  {
   "server": 1162,
   "family": "ShroomieKings",
   "power": 258302842
  },
  {
   "server": 1162,
   "family": "ToadsFamily",
   "power": 257066140
  },
  {
   "server": 1162,
   "family": "Nomads",
   "power": 231792916
  },
  {
   "server": 1162,
   "family": "mccorp",
   "power": 211589376
  },
  {
   "server": 1163,
   "family": "Bekfas",
   "power": 1373760126
  },
  {
   "server": 1163,
   "family": "Shromies",
   "power": 698860670
  },
  {
   "server": 1163,
   "family": "Spore",
   "power": 425004357
  },
  {
   "server": 1163,
   "family": "ShakeNBake",
   "power": 387679204
  },
  {
   "server": 1163,
   "family": "haters",
   "power": 286885554
  },
  {
   "server": 1163,
   "family": "ShroomDoom",
   "power": 274051528
  },
  {
   "server": 1163,
   "family": "MushroomQueen",
   "power": 260615512
  },
  {
   "server": 1163,
   "family": "DoomShrooms",
   "power": 253994046
  },
  {
   "server": 1163,
   "family": "ShroomCrimeFam",
   "power": 239589273
  },
  {
   "server": 1163,
   "family": "WhiteLotus",
   "power": 212056009
  },
  {
   "server": 1164,
   "family": "GoonShrooms",
   "power": 1221186424
  },
  {
   "server": 1164,
   "family": "Deathbringers",
   "power": 720048519
  },
  {
   "server": 1164,
   "family": "Strawhats",
   "power": 397437174
  },
  {
   "server": 1164,
   "family": "Vagabonds",
   "power": 338321544
  },
  {
   "server": 1164,
   "family": "TheOfficeFans",
   "power": 298090475
  },
  {
   "server": 1164,
   "family": "FinalFantasy",
   "power": 288030495
  },
  {
   "server": 1164,
   "family": "itchyonions",
   "power": 252148629
  },
  {
   "server": 1164,
   "family": "Shroomers",
   "power": 214238115
  },
  {
   "server": 1164,
   "family": "gayshooms",
   "power": 210714996
  },
  {
   "server": 1164,
   "family": "ShroomFest",
   "power": 209117855
  },
  {
   "server": 1165,
   "family": "Synergy",
   "power": 1256708412
  },
  {
   "server": 1165,
   "family": "SHROOMTASTIC",
   "power": 836059818
  },
  {
   "server": 1165,
   "family": "WeAreGroot",
   "power": 548644223
  },
  {
   "server": 1165,
   "family": "MFs",
   "power": 399747802
  },
  {
   "server": 1165,
   "family": "Olympus",
   "power": 326316130
  },
  {
   "server": 1165,
   "family": "ShroomLine",
   "power": 265687183
  },
  {
   "server": 1165,
   "family": "REAPERS",
   "power": 233941175
  },
  {
   "server": 1165,
   "family": "HOWLERS",
   "power": 167397976
  },
  {
   "server": 1165,
   "family": "MooseClan",
   "power": 155510527
  },
  {
   "server": 1165,
   "family": "lilyfamily",
   "power": 93370141
  },
  {
   "server": 1166,
   "family": "KAΩS",
   "power": 1371522043
  },
  {
   "server": 1166,
   "family": "GodlessHeathen",
   "power": 632892228
  },
  {
   "server": 1166,
   "family": "ChaoticInkCaps",
   "power": 401774471
  },
  {
   "server": 1166,
   "family": "TaterChips",
   "power": 365003069
  },
  {
   "server": 1166,
   "family": "Aurous",
   "power": 333837735
  },
  {
   "server": 1166,
   "family": "shroomarmy",
   "power": 279656598
  },
  {
   "server": 1166,
   "family": "pack",
   "power": 229567830
  },
  {
   "server": 1166,
   "family": "StonerLife",
   "power": 224665690
  },
  {
   "server": 1166,
   "family": "KINGS",
   "power": 172451329
  },
  {
   "server": 1166,
   "family": "420Time",
   "power": 125619740
  },
  {
   "server": 1167,
   "family": "Chaotic",
   "power": 1345582299
  },
  {
   "server": 1167,
   "family": "WARCRAFT",
   "power": 615693922
  },
  {
   "server": 1167,
   "family": "MushroomArmy",
   "power": 485969661
  },
  {
   "server": 1167,
   "family": "MilTownMshRoom",
   "power": 290824769
  },
  {
   "server": 1167,
   "family": "EverFlame",
   "power": 264180795
  },
  {
   "server": 1167,
   "family": "TheAzylum",
   "power": 237588711
  },
  {
   "server": 1167,
   "family": "blazed",
   "power": 230380134
  },
  {
   "server": 1167,
   "family": "Crucified",
   "power": 218208210
  },
  {
   "server": 1167,
   "family": "Infernos",
   "power": 163089606
  },
  {
   "server": 1167,
   "family": "WolfPack",
   "power": 135599428
  },
  {
   "server": 1168,
   "family": "BTS",
   "power": 1228867459
  },
  {
   "server": 1168,
   "family": "DeathCaps",
   "power": 966655491
  },
  {
   "server": 1168,
   "family": "NoGameNoLife",
   "power": 890729760
  },
  {
   "server": 1168,
   "family": "the_shrooms",
   "power": 268618039
  },
  {
   "server": 1168,
   "family": "RainbowMafia",
   "power": 263532325
  },
  {
   "server": 1168,
   "family": "HighOnShrooms",
   "power": 259671375
  },
  {
   "server": 1168,
   "family": "RamRaids",
   "power": 244584570
  },
  {
   "server": 1168,
   "family": "death",
   "power": 215739625
  },
  {
   "server": 1168,
   "family": "dragons",
   "power": 198203988
  },
  {
   "server": 1168,
   "family": "powerboys",
   "power": 195399008
  },
  {
   "server": 1169,
   "family": "Chefs一R一Us",
   "power": 1112967635
  },
  {
   "server": 1169,
   "family": "OnePiece",
   "power": 530941891
  },
  {
   "server": 1169,
   "family": "theFam",
   "power": 493056764
  },
  {
   "server": 1169,
   "family": "Limitless",
   "power": 423649399
  },
  {
   "server": 1169,
   "family": "Lemon",
   "power": 372708766
  },
  {
   "server": 1169,
   "family": "ShroomLife",
   "power": 311549238
  },
  {
   "server": 1169,
   "family": "Yakuza",
   "power": 284380443
  },
  {
   "server": 1169,
   "family": "Happy",
   "power": 272742438
  },
  {
   "server": 1169,
   "family": "OneCrew",
   "power": 238356984
  },
  {
   "server": 1169,
   "family": "Poison",
   "power": 214091705
  },
  {
   "server": 1170,
   "family": "M3rkpocalypse",
   "power": 1136731301
  },
  {
   "server": 1170,
   "family": "Pinnacle",
   "power": 1035062942
  },
  {
   "server": 1170,
   "family": "Quantum7",
   "power": 407114994
  },
  {
   "server": 1170,
   "family": "Gym",
   "power": 324490714
  },
  {
   "server": 1170,
   "family": "TheToastPeople",
   "power": 256094830
  },
  {
   "server": 1170,
   "family": "Slytherin",
   "power": 252760157
  },
  {
   "server": 1170,
   "family": "MushromKingdom",
   "power": 247197871
  },
  {
   "server": 1170,
   "family": "Mushroomcult",
   "power": 225798802
  },
  {
   "server": 1170,
   "family": "Cake",
   "power": 216730189
  },
  {
   "server": 1170,
   "family": "Dragonball",
   "power": 192817760
  },
  {
   "server": 1171,
   "family": "ShitakeHappens",
   "power": 1236367275
  },
  {
   "server": 1171,
   "family": "RiseOfMushroom",
   "power": 689024719
  },
  {
   "server": 1171,
   "family": "THC",
   "power": 369182988
  },
  {
   "server": 1171,
   "family": "MushroomArmy",
   "power": 337813612
  },
  {
   "server": 1171,
   "family": "TheDeepMush",
   "power": 337628619
  },
  {
   "server": 1171,
   "family": "SporesńMores",
   "power": 266609530
  },
  {
   "server": 1171,
   "family": "Immortals",
   "power": 235211153
  },
  {
   "server": 1171,
   "family": "AbsolutChaos",
   "power": 211012705
  },
  {
   "server": 1171,
   "family": "Aces",
   "power": 208270990
  },
  {
   "server": 1171,
   "family": "TillDeath",
   "power": 182467449
  },
  {
   "server": 1172,
   "family": "shroomheads",
   "power": 1189396978
  },
  {
   "server": 1172,
   "family": "FungiFlock",
   "power": 879120296
  },
  {
   "server": 1172,
   "family": "Champignons",
   "power": 584077895
  },
  {
   "server": 1172,
   "family": "Mushalorians",
   "power": 401056762
  },
  {
   "server": 1172,
   "family": "DieRentner",
   "power": 351363599
  },
  {
   "server": 1172,
   "family": "BloodBorne",
   "power": 296935289
  },
  {
   "server": 1172,
   "family": "MushGrove",
   "power": 258411437
  },
  {
   "server": 1172,
   "family": "Frogpad",
   "power": 162652952
  },
  {
   "server": 1172,
   "family": "HaveFun",
   "power": 103397771
  },
  {
   "server": 1172,
   "family": "Maincharacters",
   "power": 73286577
  },
  {
   "server": 1173,
   "family": "SOULS",
   "power": 1199560513
  },
  {
   "server": 1173,
   "family": "TrippyShrooms",
   "power": 582292549
  },
  {
   "server": 1173,
   "family": "PSILOCYBES",
   "power": 563500558
  },
  {
   "server": 1173,
   "family": "FreedomFighter",
   "power": 361650649
  },
  {
   "server": 1173,
   "family": "TheCult",
   "power": 256526610
  },
  {
   "server": 1173,
   "family": "HabitatKings",
   "power": 255348644
  },
  {
   "server": 1173,
   "family": "Hehe",
   "power": 245187476
  },
  {
   "server": 1173,
   "family": "RedShrooms",
   "power": 205539752
  },
  {
   "server": 1173,
   "family": "DeathShrooms",
   "power": 187780951
  },
  {
   "server": 1173,
   "family": "Coolshrooms",
   "power": 159845891
  },
  {
   "server": 1174,
   "family": "Akatsuki",
   "power": 1192417906
  },
  {
   "server": 1174,
   "family": "DeathRats",
   "power": 829116181
  },
  {
   "server": 1174,
   "family": "Shadowfox",
   "power": 418365706
  },
  {
   "server": 1174,
   "family": "MagicSHROOM420",
   "power": 341692657
  },
  {
   "server": 1174,
   "family": "Deathcaps",
   "power": 284894062
  },
  {
   "server": 1174,
   "family": "TheHolyFamily",
   "power": 250533319
  },
  {
   "server": 1174,
   "family": "kushykush",
   "power": 225288143
  },
  {
   "server": 1174,
   "family": "Doge",
   "power": 217822365
  },
  {
   "server": 1174,
   "family": "creepitshroom",
   "power": 206383038
  },
  {
   "server": 1174,
   "family": "FOSTERS",
   "power": 141210344
  },
  {
   "server": 1175,
   "family": "Dopamine",
   "power": 1260866939
  },
  {
   "server": 1175,
   "family": "BrunchTime",
   "power": 925398008
  },
  {
   "server": 1175,
   "family": "SporeCorps",
   "power": 476997718
  },
  {
   "server": 1175,
   "family": "BigC_Empire",
   "power": 307407762
  },
  {
   "server": 1175,
   "family": "Loa",
   "power": 263235893
  },
  {
   "server": 1175,
   "family": "TheCoffeeDen",
   "power": 247857350
  },
  {
   "server": 1175,
   "family": "Hotpot",
   "power": 234965310
  },
  {
   "server": 1175,
   "family": "ChumBucket",
   "power": 198068587
  },
  {
   "server": 1175,
   "family": "Nightshade",
   "power": 192964539
  },
  {
   "server": 1175,
   "family": "TheAzylum",
   "power": 165774098
  },
  {
   "server": 1176,
   "family": "Awesomesauce",
   "power": 1227280391
  },
  {
   "server": 1176,
   "family": "CommieCorner",
   "power": 1033029832
  },
  {
   "server": 1176,
   "family": "Raiders",
   "power": 448287435
  },
  {
   "server": 1176,
   "family": "Jingoku",
   "power": 253644643
  },
  {
   "server": 1176,
   "family": "DonaldTriumph",
   "power": 244348652
  },
  {
   "server": 1176,
   "family": "Theshrooms",
   "power": 226805480
  },
  {
   "server": 1176,
   "family": "ShroomGods",
   "power": 218823174
  },
  {
   "server": 1176,
   "family": "Shrooms",
   "power": 205967853
  },
  {
   "server": 1176,
   "family": "FungiFoxes",
   "power": 198026482
  },
  {
   "server": 1176,
   "family": "TopShroomz",
   "power": 144928022
  },
  {
   "server": 1177,
   "family": "Boba🧋",
   "power": 1314216794
  },
  {
   "server": 1177,
   "family": "DaFunGuys",
   "power": 624990121
  },
  {
   "server": 1177,
   "family": "BrainGemPirate",
   "power": 320048025
  },
  {
   "server": 1177,
   "family": "SporeExplorer",
   "power": 314319231
  },
  {
   "server": 1177,
   "family": "Guardians",
   "power": 278251113
  },
  {
   "server": 1177,
   "family": "StrawHats",
   "power": 271424723
  },
  {
   "server": 1177,
   "family": "Hunters",
   "power": 261008309
  },
  {
   "server": 1177,
   "family": "Cheese",
   "power": 260532418
  },
  {
   "server": 1177,
   "family": "throwinghands",
   "power": 256816895
  },
  {
   "server": 1177,
   "family": "SuperEarth",
   "power": 210605276
  },
  {
   "server": 1178,
   "family": "MagicMushrooms",
   "power": 1301664247
  },
  {
   "server": 1178,
   "family": "Elysia",
   "power": 630009856
  },
  {
   "server": 1178,
   "family": "OpiumHQ",
   "power": 622814506
  },
  {
   "server": 1178,
   "family": "Murder_Inc",
   "power": 503876699
  },
  {
   "server": 1178,
   "family": "TossMyTrundle",
   "power": 459272234
  },
  {
   "server": 1178,
   "family": "SporeColony",
   "power": 234314022
  },
  {
   "server": 1178,
   "family": "SHROOMS",
   "power": 216000754
  },
  {
   "server": 1178,
   "family": "HitMyHyde",
   "power": 202050924
  },
  {
   "server": 1178,
   "family": "Chosen",
   "power": 186547113
  },
  {
   "server": 1178,
   "family": "gdgbfcxh",
   "power": 176177107
  },
  {
   "server": 1179,
   "family": "GoodVibeTribe",
   "power": 1092961638
  },
  {
   "server": 1179,
   "family": "Idleon",
   "power": 568714830
  },
  {
   "server": 1179,
   "family": "Wonderland",
   "power": 514011981
  },
  {
   "server": 1179,
   "family": "VikingShrooms",
   "power": 272150313
  },
  {
   "server": 1179,
   "family": "FungFuMushroom",
   "power": 244374562
  },
  {
   "server": 1179,
   "family": "StrawHats",
   "power": 225893155
  },
  {
   "server": 1179,
   "family": "TheShroomGang",
   "power": 215022205
  },
  {
   "server": 1179,
   "family": "ZeldasHyrule",
   "power": 140108501
  },
  {
   "server": 1179,
   "family": "MrX",
   "power": 133858022
  },
  {
   "server": 1179,
   "family": "ShroomGods",
   "power": 124186093
  },
  {
   "server": 1180,
   "family": "Degens",
   "power": 1137878344
  },
  {
   "server": 1180,
   "family": "SHROOMEYS",
   "power": 698099239
  },
  {
   "server": 1180,
   "family": "Gremlins",
   "power": 487769389
  },
  {
   "server": 1180,
   "family": "ShroomLife",
   "power": 401538526
  },
  {
   "server": 1180,
   "family": "DMT",
   "power": 311046947
  },
  {
   "server": 1180,
   "family": "Sunagakure",
   "power": 277760377
  },
  {
   "server": 1180,
   "family": "CreamDream",
   "power": 267001171
  },
  {
   "server": 1180,
   "family": "BangarangSquad",
   "power": 65933121
  },
  {
   "server": 1180,
   "family": "ShadowRage",
   "power": 60350126
  },
  {
   "server": 1180,
   "family": "StonedParents",
   "power": 43325821
  },
  {
   "server": 1181,
   "family": "DragonLegacy",
   "power": 1229813629
  },
  {
   "server": 1181,
   "family": "Sunlight",
   "power": 395906251
  },
  {
   "server": 1181,
   "family": "ThePeeps",
   "power": 383974560
  },
  {
   "server": 1181,
   "family": "Nope",
   "power": 344464621
  },
  {
   "server": 1181,
   "family": "LogHorizon",
   "power": 304907449
  },
  {
   "server": 1181,
   "family": "FungusAmongus",
   "power": 253767544
  },
  {
   "server": 1181,
   "family": "Magical",
   "power": 248744954
  },
  {
   "server": 1181,
   "family": "InfinitiShroom",
   "power": 222257139
  },
  {
   "server": 1181,
   "family": "Akatsuki",
   "power": 193804647
  },
  {
   "server": 1181,
   "family": "Popcorn",
   "power": 167046442
  },
  {
   "server": 1182,
   "family": "Mortality",
   "power": 1286796745
  },
  {
   "server": 1182,
   "family": "Villainous",
   "power": 425138676
  },
  {
   "server": 1182,
   "family": "AbyssKnights",
   "power": 316926984
  },
  {
   "server": 1182,
   "family": "Tsukuyomi",
   "power": 298962533
  },
  {
   "server": 1182,
   "family": "BLACK",
   "power": 288004616
  },
  {
   "server": 1182,
   "family": "Ravenclaw",
   "power": 280103542
  },
  {
   "server": 1182,
   "family": "Shroomlords",
   "power": 232566329
  },
  {
   "server": 1182,
   "family": "Midknights",
   "power": 223902352
  },
  {
   "server": 1182,
   "family": "Orphanage",
   "power": 213991587
  },
  {
   "server": 1182,
   "family": "BoomShrooms",
   "power": 183202628
  },
  {
   "server": 1183,
   "family": "Snackpack",
   "power": 1204425950
  },
  {
   "server": 1183,
   "family": "SinfulShrooms",
   "power": 768494827
  },
  {
   "server": 1183,
   "family": "Zfighters",
   "power": 397185786
  },
  {
   "server": 1183,
   "family": "RabidShrooms",
   "power": 321365426
  },
  {
   "server": 1183,
   "family": "Noobs",
   "power": 310566995
  },
  {
   "server": 1183,
   "family": "ExorcistCult",
   "power": 274364588
  },
  {
   "server": 1183,
   "family": "Mappo_Cult",
   "power": 201953178
  },
  {
   "server": 1183,
   "family": "DaDan",
   "power": 164646238
  },
  {
   "server": 1183,
   "family": "drknghts",
   "power": 103979277
  },
  {
   "server": 1183,
   "family": "Ultra",
   "power": 65390374
  },
  {
   "server": 1184,
   "family": "GoodestBois",
   "power": 1150475818
  },
  {
   "server": 1184,
   "family": "doghouse",
   "power": 646706334
  },
  {
   "server": 1184,
   "family": "Keres",
   "power": 409666044
  },
  {
   "server": 1184,
   "family": "Atrium",
   "power": 406928783
  },
  {
   "server": 1184,
   "family": "GOONZSquad",
   "power": 288030521
  },
  {
   "server": 1184,
   "family": "mushroomlove",
   "power": 271308165
  },
  {
   "server": 1184,
   "family": "Shroomyshrooms",
   "power": 271038324
  },
  {
   "server": 1184,
   "family": "KamiKasy",
   "power": 233677352
  },
  {
   "server": 1184,
   "family": "EliteOutlaws",
   "power": 217368641
  },
  {
   "server": 1184,
   "family": "Yggdrasil",
   "power": 214060780
  },
  {
   "server": 1185,
   "family": "ShroomLand",
   "power": 1287366045
  },
  {
   "server": 1185,
   "family": "UnitedShrooms",
   "power": 509879395
  },
  {
   "server": 1185,
   "family": "HypnoticAdv",
   "power": 453722660
  },
  {
   "server": 1185,
   "family": "Toads",
   "power": 347981768
  },
  {
   "server": 1185,
   "family": "FunGuys",
   "power": 276154242
  },
  {
   "server": 1185,
   "family": "Anonymous",
   "power": 268927449
  },
  {
   "server": 1185,
   "family": "BigHut",
   "power": 266596716
  },
  {
   "server": 1185,
   "family": "blazingkittens",
   "power": 246366570
  },
  {
   "server": 1185,
   "family": "Reapers",
   "power": 234502368
  },
  {
   "server": 1185,
   "family": "Diabolos",
   "power": 108539112
  },
  {
   "server": 1186,
   "family": "OnlyShrooMs",
   "power": 930411925
  },
  {
   "server": 1186,
   "family": "Legends",
   "power": 770358062
  },
  {
   "server": 1186,
   "family": "Valhalla",
   "power": 488698509
  },
  {
   "server": 1186,
   "family": "GoodGame",
   "power": 313520935
  },
  {
   "server": 1186,
   "family": "Heartless",
   "power": 286868785
  },
  {
   "server": 1186,
   "family": "SCAVENGERS",
   "power": 214618428
  },
  {
   "server": 1186,
   "family": "ShroomLife",
   "power": 182475224
  },
  {
   "server": 1186,
   "family": "Shroomtastic",
   "power": 165672214
  },
  {
   "server": 1186,
   "family": "Mushy",
   "power": 152179808
  },
  {
   "server": 1186,
   "family": "EPIC",
   "power": 138787996
  },
  {
   "server": 1187,
   "family": "Fungi_Force",
   "power": 1124422061
  },
  {
   "server": 1187,
   "family": "Death_Caps",
   "power": 651383623
  },
  {
   "server": 1187,
   "family": "FungusAmongus",
   "power": 487646274
  },
  {
   "server": 1187,
   "family": "Hollow",
   "power": 313127615
  },
  {
   "server": 1187,
   "family": "SmokePit",
   "power": 240178181
  },
  {
   "server": 1187,
   "family": "AEB",
   "power": 239268551
  },
  {
   "server": 1187,
   "family": "MONKEYZZ",
   "power": 228053046
  },
  {
   "server": 1187,
   "family": "Bandits",
   "power": 173325410
  },
  {
   "server": 1187,
   "family": "Vicinity",
   "power": 158432402
  },
  {
   "server": 1187,
   "family": "KINGS",
   "power": 153801676
  },
  {
   "server": 1188,
   "family": "venom",
   "power": 1186635011
  },
  {
   "server": 1188,
   "family": "Antivenom",
   "power": 1023784062
  },
  {
   "server": 1188,
   "family": "Psilocybin",
   "power": 402317023
  },
  {
   "server": 1188,
   "family": "MapleTree",
   "power": 344356371
  },
  {
   "server": 1188,
   "family": "TheChosen",
   "power": 305802245
  },
  {
   "server": 1188,
   "family": "DaNewbs",
   "power": 278480255
  },
  {
   "server": 1188,
   "family": "TheYeagerist",
   "power": 270906277
  },
  {
   "server": 1188,
   "family": "PantsOptional",
   "power": 180299040
  },
  {
   "server": 1188,
   "family": "NoodleShop",
   "power": 165601376
  },
  {
   "server": 1188,
   "family": "yuzu_shroomy",
   "power": 148860989
  },
  {
   "server": 1189,
   "family": "Forsaken",
   "power": 1249552673
  },
  {
   "server": 1189,
   "family": "Maple",
   "power": 635688991
  },
  {
   "server": 1189,
   "family": "WolvesWrath",
   "power": 463785426
  },
  {
   "server": 1189,
   "family": "SmokeSumPurP",
   "power": 371889827
  },
  {
   "server": 1189,
   "family": "shroom_room",
   "power": 332926294
  },
  {
   "server": 1189,
   "family": "trippin",
   "power": 326756456
  },
  {
   "server": 1189,
   "family": "Doom_shrooms",
   "power": 259415614
  },
  {
   "server": 1189,
   "family": "MushieArmy",
   "power": 241263951
  },
  {
   "server": 1189,
   "family": "Bag_o_Shrooms",
   "power": 160721258
  },
  {
   "server": 1189,
   "family": "bestshrooms",
   "power": 147731547
  },
  {
   "server": 1190,
   "family": "NightCaps",
   "power": 1132740433
  },
  {
   "server": 1190,
   "family": "Eternium",
   "power": 833390135
  },
  {
   "server": 1190,
   "family": "Rebirth",
   "power": 388364130
  },
  {
   "server": 1190,
   "family": "Hestia",
   "power": 354490547
  },
  {
   "server": 1190,
   "family": "Valhalla",
   "power": 316631809
  },
  {
   "server": 1190,
   "family": "AnimeLovers",
   "power": 237745441
  },
  {
   "server": 1190,
   "family": "Rainbowshrooms",
   "power": 234072495
  },
  {
   "server": 1190,
   "family": "LivingLegends",
   "power": 223570255
  },
  {
   "server": 1190,
   "family": "Nightmares",
   "power": 179526536
  },
  {
   "server": 1190,
   "family": "ShroomBoom",
   "power": 174728259
  },
  {
   "server": 1191,
   "family": "Aincrad",
   "power": 1094074245
  },
  {
   "server": 1191,
   "family": "PumpkinPatch",
   "power": 753784508
  },
  {
   "server": 1191,
   "family": "ShroomLords",
   "power": 746565868
  },
  {
   "server": 1191,
   "family": "FLOW",
   "power": 478934850
  },
  {
   "server": 1191,
   "family": "Taiwan",
   "power": 341452399
  },
  {
   "server": 1191,
   "family": "shroomz4life",
   "power": 301716782
  },
  {
   "server": 1191,
   "family": "HOLYSHROOMERS",
   "power": 260044154
  },
  {
   "server": 1191,
   "family": "OtherWorld",
   "power": 257417684
  },
  {
   "server": 1191,
   "family": "Zephyr",
   "power": 250525421
  },
  {
   "server": 1191,
   "family": "HellsMinions",
   "power": 242692115
  },
  {
   "server": 1192,
   "family": "Manifest",
   "power": 1237346799
  },
  {
   "server": 1192,
   "family": "TheColony",
   "power": 696884204
  },
  {
   "server": 1192,
   "family": "DragonsDen",
   "power": 530898306
  },
  {
   "server": 1192,
   "family": "TuneSquad",
   "power": 290620634
  },
  {
   "server": 1192,
   "family": "LEGENDS",
   "power": 278015471
  },
  {
   "server": 1192,
   "family": "Wildlands",
   "power": 255330896
  },
  {
   "server": 1192,
   "family": "Vault_33",
   "power": 253005608
  },
  {
   "server": 1192,
   "family": "ChipiChapaClan",
   "power": 249913156
  },
  {
   "server": 1192,
   "family": "MARVEL",
   "power": 224486060
  },
  {
   "server": 1192,
   "family": "Bestfamever",
   "power": 180957483
  },
  {
   "server": 1193,
   "family": "BadgerDen",
   "power": 1271590774
  },
  {
   "server": 1193,
   "family": "Royalty",
   "power": 792899487
  },
  {
   "server": 1193,
   "family": "WeOnShrooms",
   "power": 573066125
  },
  {
   "server": 1193,
   "family": "Anime4Ever",
   "power": 386328882
  },
  {
   "server": 1193,
   "family": "mushyPho",
   "power": 290598580
  },
  {
   "server": 1193,
   "family": "funguys",
   "power": 234292167
  },
  {
   "server": 1193,
   "family": "Enoki",
   "power": 232406333
  },
  {
   "server": 1193,
   "family": "ροωεr",
   "power": 229002333
  },
  {
   "server": 1193,
   "family": "PandaHut",
   "power": 197070068
  },
  {
   "server": 1193,
   "family": "Shroomies",
   "power": 154808384
  },
  {
   "server": 1194,
   "family": "OnlyLamps",
   "power": 1258046982
  },
  {
   "server": 1194,
   "family": "Niteshade",
   "power": 1042526000
  },
  {
   "server": 1194,
   "family": "SuperCats",
   "power": 487270100
  },
  {
   "server": 1194,
   "family": "Ouroboros",
   "power": 302206706
  },
  {
   "server": 1194,
   "family": "funinja",
   "power": 295442356
  },
  {
   "server": 1194,
   "family": "SIGMAMALES",
   "power": 285834809
  },
  {
   "server": 1194,
   "family": "BarStool",
   "power": 255778806
  },
  {
   "server": 1194,
   "family": "SillyGooseClub",
   "power": 249324416
  },
  {
   "server": 1194,
   "family": "THE_PRO_PLAYER",
   "power": 239368203
  },
  {
   "server": 1194,
   "family": "joinifyouwant",
   "power": 233654920
  },
  {
   "server": 1195,
   "family": "Avengers",
   "power": 1180339618
  },
  {
   "server": 1195,
   "family": "LampRubbers",
   "power": 894938152
  },
  {
   "server": 1195,
   "family": "Heroes_Academy",
   "power": 373222077
  },
  {
   "server": 1195,
   "family": "TheGoingMerry",
   "power": 318248268
  },
  {
   "server": 1195,
   "family": "Freedom",
   "power": 222552517
  },
  {
   "server": 1195,
   "family": "Serenity",
   "power": 211270733
  },
  {
   "server": 1195,
   "family": "Shrooms",
   "power": 194757800
  },
  {
   "server": 1195,
   "family": "Shroomers",
   "power": 192826433
  },
  {
   "server": 1195,
   "family": "ANONYMOUS",
   "power": 176678648
  },
  {
   "server": 1195,
   "family": "Soulbond",
   "power": 154989519
  },
  {
   "server": 1196,
   "family": "Slayers",
   "power": 1183852030
  },
  {
   "server": 1196,
   "family": "Psilocybin",
   "power": 704759499
  },
  {
   "server": 1196,
   "family": "FIGJAM",
   "power": 522033273
  },
  {
   "server": 1196,
   "family": "Shroomtown",
   "power": 404196425
  },
  {
   "server": 1196,
   "family": "Mythic",
   "power": 320425837
  },
  {
   "server": 1196,
   "family": "NordicWolfs",
   "power": 300893776
  },
  {
   "server": 1196,
   "family": "chill",
   "power": 236680755
  },
  {
   "server": 1196,
   "family": "AGENCY",
   "power": 231683511
  },
  {
   "server": 1196,
   "family": "Shroomville",
   "power": 167145095
  },
  {
   "server": 1196,
   "family": "MushFitz",
   "power": 144359333
  },
  {
   "server": 1197,
   "family": "OutLawZ",
   "power": 1221523997
  },
  {
   "server": 1197,
   "family": "NewEra",
   "power": 644733552
  },
  {
   "server": 1197,
   "family": "TheMafia",
   "power": 547963689
  },
  {
   "server": 1197,
   "family": "DemiGodz",
   "power": 289877267
  },
  {
   "server": 1197,
   "family": "ShroomTown",
   "power": 286408805
  },
  {
   "server": 1197,
   "family": "OneOfGus",
   "power": 258803036
  },
  {
   "server": 1197,
   "family": "ShroomFellows",
   "power": 258218264
  },
  {
   "server": 1197,
   "family": "LethalMushroom",
   "power": 235633978
  },
  {
   "server": 1197,
   "family": "Unicorns",
   "power": 228342994
  },
  {
   "server": 1197,
   "family": "ShroomCity",
   "power": 221719701
  },
  {
   "server": 1198,
   "family": "NightRaid",
   "power": 1127855623
  },
  {
   "server": 1198,
   "family": "Province",
   "power": 660986377
  },
  {
   "server": 1198,
   "family": "Spores",
   "power": 414683391
  },
  {
   "server": 1198,
   "family": "TheFunGuys",
   "power": 363026061
  },
  {
   "server": 1198,
   "family": "ShroomGarden",
   "power": 322844101
  },
  {
   "server": 1198,
   "family": "Ocean",
   "power": 219277379
  },
  {
   "server": 1198,
   "family": "Kimchi",
   "power": 218583718
  },
  {
   "server": 1198,
   "family": "ETHEREAL",
   "power": 198089552
  },
  {
   "server": 1198,
   "family": "Elmo",
   "power": 167052681
  },
  {
   "server": 1198,
   "family": "Adams",
   "power": 126407280
  },
  {
   "server": 1199,
   "family": "PhantomShrooms",
   "power": 1211473065
  },
  {
   "server": 1199,
   "family": "MagikShroom",
   "power": 856789359
  },
  {
   "server": 1199,
   "family": "Fungi",
   "power": 413132260
  },
  {
   "server": 1199,
   "family": "WerewolfFeast",
   "power": 314387048
  },
  {
   "server": 1199,
   "family": "DeathWatch",
   "power": 249299225
  },
  {
   "server": 1199,
   "family": "Hoesandbros",
   "power": 239598357
  },
  {
   "server": 1199,
   "family": "Anthony_family",
   "power": 237124192
  },
  {
   "server": 1199,
   "family": "MushroomTips",
   "power": 214949481
  },
  {
   "server": 1199,
   "family": "warriors",
   "power": 188949915
  },
  {
   "server": 1199,
   "family": "TheDuck",
   "power": 153384693
  },
  {
   "server": 1200,
   "family": "ChildSupport",
   "power": 1056264892
  },
  {
   "server": 1200,
   "family": "SAO",
   "power": 617355706
  },
  {
   "server": 1200,
   "family": "SupremeShrooms",
   "power": 469829809
  },
  {
   "server": 1200,
   "family": "Loyalty",
   "power": 258318552
  },
  {
   "server": 1200,
   "family": "Bloodlust",
   "power": 227061062
  },
  {
   "server": 1200,
   "family": "Knightsdark",
   "power": 218252370
  },
  {
   "server": 1200,
   "family": "mushroom45gang",
   "power": 216889513
  },
  {
   "server": 1200,
   "family": "Crusade",
   "power": 189126525
  },
  {
   "server": 1200,
   "family": "L0gH0rizon",
   "power": 188903775
  },
  {
   "server": 1200,
   "family": "Sith",
   "power": 183061411
  },
  {
   "server": 1201,
   "family": "Fortitude",
   "power": 1279291088
  },
  {
   "server": 1201,
   "family": "ARISE",
   "power": 518980390
  },
  {
   "server": 1201,
   "family": "Hallowseve",
   "power": 332610423
  },
  {
   "server": 1201,
   "family": "Grind4Fun",
   "power": 294201251
  },
  {
   "server": 1201,
   "family": "ShatteredOath",
   "power": 259947637
  },
  {
   "server": 1201,
   "family": "TheWorkshop",
   "power": 247568789
  },
  {
   "server": 1201,
   "family": "Utopia",
   "power": 221765741
  },
  {
   "server": 1201,
   "family": "illgottengains",
   "power": 218122130
  },
  {
   "server": 1201,
   "family": "LaughingCoffin",
   "power": 202948740
  },
  {
   "server": 1201,
   "family": "aka",
   "power": 168234402
  },
  {
   "server": 1202,
   "family": "Gatekeepers",
   "power": 1178568882
  },
  {
   "server": 1202,
   "family": "Hell",
   "power": 525687864
  },
  {
   "server": 1202,
   "family": "Shrooms",
   "power": 482611313
  },
  {
   "server": 1202,
   "family": "AINCRAD",
   "power": 421964431
  },
  {
   "server": 1202,
   "family": "Shroomtrail",
   "power": 298159500
  },
  {
   "server": 1202,
   "family": "Faded",
   "power": 295933399
  },
  {
   "server": 1202,
   "family": "OTV",
   "power": 246219566
  },
  {
   "server": 1202,
   "family": "DPS",
   "power": 242015400
  },
  {
   "server": 1202,
   "family": "Duck",
   "power": 225067683
  },
  {
   "server": 1202,
   "family": "Ragnarok",
   "power": 204003578
  },
  {
   "server": 1203,
   "family": "Ragnarok",
   "power": 1120921150
  },
  {
   "server": 1203,
   "family": "TheAsylum",
   "power": 567295531
  },
  {
   "server": 1203,
   "family": "Immortalz",
   "power": 454669123
  },
  {
   "server": 1203,
   "family": "LegionofKings",
   "power": 449207304
  },
  {
   "server": 1203,
   "family": "SoloLeveling",
   "power": 344078006
  },
  {
   "server": 1203,
   "family": "Addicted",
   "power": 312069471
  },
  {
   "server": 1203,
   "family": "MidWestFam",
   "power": 263278521
  },
  {
   "server": 1203,
   "family": "Shroomies",
   "power": 250708608
  },
  {
   "server": 1203,
   "family": "MushroomVilla",
   "power": 245636828
  },
  {
   "server": 1203,
   "family": "A4H",
   "power": 224005868
  },
  {
   "server": 1204,
   "family": "ShroomCorps",
   "power": 1287176506
  },
  {
   "server": 1204,
   "family": "FunFungi",
   "power": 752982023
  },
  {
   "server": 1204,
   "family": "goodvibes",
   "power": 349548042
  },
  {
   "server": 1204,
   "family": "Bromosexuals",
   "power": 328602829
  },
  {
   "server": 1204,
   "family": "Caramelo",
   "power": 267858921
  },
  {
   "server": 1204,
   "family": "DragonLegacy",
   "power": 238981634
  },
  {
   "server": 1204,
   "family": "LampLighters",
   "power": 208301902
  },
  {
   "server": 1204,
   "family": "Vikings",
   "power": 182210461
  },
  {
   "server": 1204,
   "family": "shroomville",
   "power": 157776766
  },
  {
   "server": 1204,
   "family": "Ohana",
   "power": 143865204
  },
  {
   "server": 1205,
   "family": "Stonecutters",
   "power": 1030478791
  },
  {
   "server": 1205,
   "family": "DREADNOUGHT",
   "power": 430268927
  },
  {
   "server": 1205,
   "family": "MAUSOLEUM",
   "power": 398642847
  },
  {
   "server": 1205,
   "family": "MAGICMUSHROOMS",
   "power": 358662453
  },
  {
   "server": 1205,
   "family": "44Legions",
   "power": 325775805
  },
  {
   "server": 1205,
   "family": "D4M4G3D",
   "power": 300191479
  },
  {
   "server": 1205,
   "family": "Dhickdawgs",
   "power": 252912776
  },
  {
   "server": 1205,
   "family": "litrina",
   "power": 246136693
  },
  {
   "server": 1205,
   "family": "DemonShroom",
   "power": 244257716
  },
  {
   "server": 1205,
   "family": "Shmores",
   "power": 200431142
  },
  {
   "server": 1206,
   "family": "Voided",
   "power": 1057878137
  },
  {
   "server": 1206,
   "family": "HAVOC",
   "power": 1052306106
  },
  {
   "server": 1206,
   "family": "BarBearians",
   "power": 536187084
  },
  {
   "server": 1206,
   "family": "Kaizen",
   "power": 377190735
  },
  {
   "server": 1206,
   "family": "Magic",
   "power": 263802077
  },
  {
   "server": 1206,
   "family": "SHROOMIES",
   "power": 240376496
  },
  {
   "server": 1206,
   "family": "Funguys",
   "power": 235655122
  },
  {
   "server": 1206,
   "family": "Shroomers",
   "power": 148773286
  },
  {
   "server": 1206,
   "family": "Draconis",
   "power": 136748809
  },
  {
   "server": 1206,
   "family": "ShroomLords",
   "power": 134460900
  },
  {
   "server": 1207,
   "family": "MushroomGang",
   "power": 1026637517
  },
  {
   "server": 1207,
   "family": "LegionofShroom",
   "power": 889533581
  },
  {
   "server": 1207,
   "family": "ShroomBuns",
   "power": 363984446
  },
  {
   "server": 1207,
   "family": "KrokaVarna",
   "power": 335589370
  },
  {
   "server": 1207,
   "family": "AlphaMush",
   "power": 238424129
  },
  {
   "server": 1207,
   "family": "shroompot",
   "power": 204689818
  },
  {
   "server": 1207,
   "family": "OrphanWarriors",
   "power": 181119066
  },
  {
   "server": 1207,
   "family": "Beetlejuice",
   "power": 160809697
  },
  {
   "server": 1207,
   "family": "Thunder",
   "power": 135143798
  },
  {
   "server": 1207,
   "family": "shroomzone",
   "power": 97425855
  },
  {
   "server": 1208,
   "family": "Legends",
   "power": 1170769459
  },
  {
   "server": 1208,
   "family": "Myths",
   "power": 663141891
  },
  {
   "server": 1208,
   "family": "ŤĥêŔéãpèř§",
   "power": 283472546
  },
  {
   "server": 1208,
   "family": "VoidedXz",
   "power": 238737431
  },
  {
   "server": 1208,
   "family": "SylvanFam",
   "power": 220671964
  },
  {
   "server": 1208,
   "family": "Sumeria",
   "power": 216938008
  },
  {
   "server": 1208,
   "family": "Olympus",
   "power": 203422007
  },
  {
   "server": 1208,
   "family": "Spores",
   "power": 196451698
  },
  {
   "server": 1208,
   "family": "Shrooms",
   "power": 188423836
  },
  {
   "server": 1208,
   "family": "Australia",
   "power": 167336238
  },
  {
   "server": 1209,
   "family": "Spores",
   "power": 1120311742
  },
  {
   "server": 1209,
   "family": "MagicMoonPies",
   "power": 407573933
  },
  {
   "server": 1209,
   "family": "eXiLe",
   "power": 367102062
  },
  {
   "server": 1209,
   "family": "Legion135",
   "power": 312860271
  },
  {
   "server": 1209,
   "family": "Light",
   "power": 276938612
  },
  {
   "server": 1209,
   "family": "Judgement",
   "power": 255307900
  },
  {
   "server": 1209,
   "family": "Miscreants",
   "power": 244555460
  },
  {
   "server": 1209,
   "family": "Kings",
   "power": 243872046
  },
  {
   "server": 1209,
   "family": "popi",
   "power": 217221456
  },
  {
   "server": 1209,
   "family": "Chicagoshrooms",
   "power": 161092810
  },
  {
   "server": 1210,
   "family": "ValhallaCalls",
   "power": 1127728349
  },
  {
   "server": 1210,
   "family": "Fate",
   "power": 663803862
  },
  {
   "server": 1210,
   "family": "OhShiitake",
   "power": 344249025
  },
  {
   "server": 1210,
   "family": "_N_I_N_J_A_",
   "power": 282785402
  },
  {
   "server": 1210,
   "family": "Souls",
   "power": 277587319
  },
  {
   "server": 1210,
   "family": "shroomyTown",
   "power": 252324173
  },
  {
   "server": 1210,
   "family": "RatPack",
   "power": 207931602
  },
  {
   "server": 1210,
   "family": "OceanGang",
   "power": 207434169
  },
  {
   "server": 1210,
   "family": "HarmFarmUnion",
   "power": 178049268
  },
  {
   "server": 1210,
   "family": "WARDRAGON",
   "power": 160858974
  },
  {
   "server": 1211,
   "family": "Gods",
   "power": 1050021290
  },
  {
   "server": 1211,
   "family": "Dragonslayer75",
   "power": 399187281
  },
  {
   "server": 1211,
   "family": "BombSquad",
   "power": 396664853
  },
  {
   "server": 1211,
   "family": "Goobers",
   "power": 364056055
  },
  {
   "server": 1211,
   "family": "Celestial",
   "power": 349900978
  },
  {
   "server": 1211,
   "family": "Legends",
   "power": 297723439
  },
  {
   "server": 1211,
   "family": "ShroomKingdom",
   "power": 293521184
  },
  {
   "server": 1211,
   "family": "TheNewDawn",
   "power": 226986752
  },
  {
   "server": 1211,
   "family": "Ment2Bee",
   "power": 214927699
  },
  {
   "server": 1211,
   "family": "DaShroomRoom",
   "power": 208153647
  },
  {
   "server": 1212,
   "family": "ShroomVille",
   "power": 977615131
  },
  {
   "server": 1212,
   "family": "Riot",
   "power": 876452176
  },
  {
   "server": 1212,
   "family": "SporeCore",
   "power": 287932976
  },
  {
   "server": 1212,
   "family": "ThePalFrends",
   "power": 255466765
  },
  {
   "server": 1212,
   "family": "shroomsofmagic",
   "power": 243740522
  },
  {
   "server": 1212,
   "family": "EternalKingz",
   "power": 211102164
  },
  {
   "server": 1212,
   "family": "cainshroom",
   "power": 200903105
  },
  {
   "server": 1212,
   "family": "MushyKingdom",
   "power": 190301946
  },
  {
   "server": 1212,
   "family": "ChronosInc",
   "power": 187553247
  },
  {
   "server": 1212,
   "family": "RIP",
   "power": 170395255
  },
  {
   "server": 1213,
   "family": "Legacy",
   "power": 1094327292
  },
  {
   "server": 1213,
   "family": "AfterDark",
   "power": 634729000
  },
  {
   "server": 1213,
   "family": "Hentai",
   "power": 391052573
  },
  {
   "server": 1213,
   "family": "DoomShrooms",
   "power": 340768580
  },
  {
   "server": 1213,
   "family": "Lol",
   "power": 291691638
  },
  {
   "server": 1213,
   "family": "StrawHatPir8s",
   "power": 254467814
  },
  {
   "server": 1213,
   "family": "sporecerers",
   "power": 240781797
  },
  {
   "server": 1213,
   "family": "Migawara",
   "power": 215511001
  },
  {
   "server": 1213,
   "family": "NomNomNoms",
   "power": 213063147
  },
  {
   "server": 1213,
   "family": "Funguys",
   "power": 191641687
  },
  {
   "server": 1214,
   "family": "Royalty",
   "power": 1256661538
  },
  {
   "server": 1214,
   "family": "RainFall",
   "power": 638107338
  },
  {
   "server": 1214,
   "family": "GamerShrub",
   "power": 499065445
  },
  {
   "server": 1214,
   "family": "CashCrew",
   "power": 288414848
  },
  {
   "server": 1214,
   "family": "Inferno",
   "power": 228997636
  },
  {
   "server": 1214,
   "family": "Olympus",
   "power": 228733309
  },
  {
   "server": 1214,
   "family": "ogabooga",
   "power": 226940433
  },
  {
   "server": 1214,
   "family": "Asura",
   "power": 220924872
  },
  {
   "server": 1214,
   "family": "SHADOWKNIGHTS",
   "power": 218952735
  },
  {
   "server": 1214,
   "family": "Fungi",
   "power": 218018869
  },
  {
   "server": 1215,
   "family": "Jabberwocky’s",
   "power": 1087967877
  },
  {
   "server": 1215,
   "family": "StrikeForce",
   "power": 471566321
  },
  {
   "server": 1215,
   "family": "CelestialCity",
   "power": 303513348
  },
  {
   "server": 1215,
   "family": "SleepyShrooms",
   "power": 274615890
  },
  {
   "server": 1215,
   "family": "Mushimush",
   "power": 251925107
  },
  {
   "server": 1215,
   "family": "Toadstoolies",
   "power": 216177702
  },
  {
   "server": 1215,
   "family": "Pandaville",
   "power": 198236511
  },
  {
   "server": 1215,
   "family": "WeebNation",
   "power": 192636467
  },
  {
   "server": 1215,
   "family": "HuntersHub",
   "power": 169308688
  },
  {
   "server": 1215,
   "family": "BigKittyCity",
   "power": 125094508
  },
  {
   "server": 1216,
   "family": "NewMycelium",
   "power": 1019221636
  },
  {
   "server": 1216,
   "family": "Wombats",
   "power": 573524441
  },
  {
   "server": 1216,
   "family": "MagicShroom",
   "power": 308952729
  },
  {
   "server": 1216,
   "family": "DeadlyCaps",
   "power": 308414077
  },
  {
   "server": 1216,
   "family": "SporeForce",
   "power": 259969140
  },
  {
   "server": 1216,
   "family": "Spores",
   "power": 220194415
  },
  {
   "server": 1216,
   "family": "timelords",
   "power": 189517933
  },
  {
   "server": 1216,
   "family": "CanadianCartel",
   "power": 188425202
  },
  {
   "server": 1216,
   "family": "Fungailian",
   "power": 167313603
  },
  {
   "server": 1216,
   "family": "GLOGANG",
   "power": 129419081
  },
  {
   "server": 1217,
   "family": "Elevated",
   "power": 957521264
  },
  {
   "server": 1217,
   "family": "MellowMushroom",
   "power": 901256104
  },
  {
   "server": 1217,
   "family": "mush",
   "power": 310286691
  },
  {
   "server": 1217,
   "family": "SithLords",
   "power": 295121895
  },
  {
   "server": 1217,
   "family": "Reapershrooms",
   "power": 246952361
  },
  {
   "server": 1217,
   "family": "DoomShrooms",
   "power": 237701458
  },
  {
   "server": 1217,
   "family": "Zero",
   "power": 232512537
  },
  {
   "server": 1217,
   "family": "WeAvoidClan",
   "power": 228954219
  },
  {
   "server": 1217,
   "family": "GodDamn",
   "power": 194384871
  },
  {
   "server": 1217,
   "family": "Shiitake",
   "power": 189500422
  },
  {
   "server": 1218,
   "family": "WitchesBrew",
   "power": 961747126
  },
  {
   "server": 1218,
   "family": "LokisCircus",
   "power": 606428077
  },
  {
   "server": 1218,
   "family": "itachiselite",
   "power": 260160924
  },
  {
   "server": 1218,
   "family": "TheDeathCaps",
   "power": 238610782
  },
  {
   "server": 1218,
   "family": "AlmightyMush",
   "power": 223868755
  },
  {
   "server": 1218,
   "family": "Aincrad",
   "power": 221202337
  },
  {
   "server": 1218,
   "family": "shoominghard",
   "power": 220166300
  },
  {
   "server": 1218,
   "family": "theshrooms",
   "power": 215686075
  },
  {
   "server": 1218,
   "family": "ShroomKingdom",
   "power": 207592461
  },
  {
   "server": 1218,
   "family": "Striders",
   "power": 193870933
  },
  {
   "server": 1219,
   "family": "Osiris",
   "power": 1145461117
  },
  {
   "server": 1219,
   "family": "Mycelia",
   "power": 623588469
  },
  {
   "server": 1219,
   "family": "ChaosRun",
   "power": 290033434
  },
  {
   "server": 1219,
   "family": "GIRL_DINNER",
   "power": 269236926
  },
  {
   "server": 1219,
   "family": "Royalty",
   "power": 249695896
  },
  {
   "server": 1219,
   "family": "Mafia",
   "power": 243632174
  },
  {
   "server": 1219,
   "family": "MamasMob",
   "power": 242832704
  },
  {
   "server": 1219,
   "family": "funguys",
   "power": 219059469
  },
  {
   "server": 1219,
   "family": "Shrooms",
   "power": 194857448
  },
  {
   "server": 1219,
   "family": "Genghis",
   "power": 155260226
  },
  {
   "server": 1220,
   "family": "ShadowGarden",
   "power": 1145403206
  },
  {
   "server": 1220,
   "family": "FanClub",
   "power": 492976151
  },
  {
   "server": 1220,
   "family": "ShroomyFun",
   "power": 374940884
  },
  {
   "server": 1220,
   "family": "MilfHunters",
   "power": 354008902
  },
  {
   "server": 1220,
   "family": "TacoCity",
   "power": 346136526
  },
  {
   "server": 1220,
   "family": "DragonShrooms",
   "power": 313850507
  },
  {
   "server": 1220,
   "family": "Shroomnators",
   "power": 229816303
  },
  {
   "server": 1220,
   "family": "Dragons",
   "power": 196376173
  },
  {
   "server": 1220,
   "family": "MagicShroomys",
   "power": 187294251
  },
  {
   "server": 1220,
   "family": "Squiggles",
   "power": 164462017
  },
  {
   "server": 1221,
   "family": "Ascendant",
   "power": 1016561882
  },
  {
   "server": 1221,
   "family": "LomChampions",
   "power": 423949049
  },
  {
   "server": 1221,
   "family": "Deathcaps",
   "power": 283732127
  },
  {
   "server": 1221,
   "family": "Strawhats",
   "power": 277851466
  },
  {
   "server": 1221,
   "family": "Peacekeepers",
   "power": 275586410
  },
  {
   "server": 1221,
   "family": "MagicMushrooms",
   "power": 236213077
  },
  {
   "server": 1221,
   "family": "ShroomDominion",
   "power": 208207802
  },
  {
   "server": 1221,
   "family": "HellsAngels",
   "power": 181234637
  },
  {
   "server": 1221,
   "family": "Ace",
   "power": 177948391
  },
  {
   "server": 1221,
   "family": "Maple",
   "power": 174189183
  },
  {
   "server": 1222,
   "family": "FungiFighters",
   "power": 1096213916
  },
  {
   "server": 1222,
   "family": "MellowMushroom",
   "power": 534069559
  },
  {
   "server": 1222,
   "family": "EatersOfShroom",
   "power": 303518161
  },
  {
   "server": 1222,
   "family": "DaBois",
   "power": 294878361
  },
  {
   "server": 1222,
   "family": "ShroomStompers",
   "power": 276689999
  },
  {
   "server": 1222,
   "family": "MushroomSavers",
   "power": 269890542
  },
  {
   "server": 1222,
   "family": "WeedWeebs",
   "power": 263386563
  },
  {
   "server": 1222,
   "family": "KickStreaming",
   "power": 242444014
  },
  {
   "server": 1222,
   "family": "mushROOMIES",
   "power": 228980725
  },
  {
   "server": 1222,
   "family": "MorelMarauders",
   "power": 160677948
  },
  {
   "server": 1223,
   "family": "DarkSaintz",
   "power": 861492565
  },
  {
   "server": 1223,
   "family": "Tyceno",
   "power": 701481326
  },
  {
   "server": 1223,
   "family": "Starlight",
   "power": 560549638
  },
  {
   "server": 1223,
   "family": "Depresso",
   "power": 329922877
  },
  {
   "server": 1223,
   "family": "Darkness",
   "power": 327464687
  },
  {
   "server": 1223,
   "family": "ATK",
   "power": 326317482
  },
  {
   "server": 1223,
   "family": "Shadows",
   "power": 251265764
  },
  {
   "server": 1223,
   "family": "genshin",
   "power": 235743357
  },
  {
   "server": 1223,
   "family": "BrownBoyZ",
   "power": 190038986
  },
  {
   "server": 1223,
   "family": "SakuraTree",
   "power": 189239817
  },
  {
   "server": 1224,
   "family": "Deathrow",
   "power": 892104775
  },
  {
   "server": 1224,
   "family": "ShroomLegion",
   "power": 675061359
  },
  {
   "server": 1224,
   "family": "Arson",
   "power": 404749529
  },
  {
   "server": 1224,
   "family": "FIGHTERS",
   "power": 355636489
  },
  {
   "server": 1224,
   "family": "oldSpores",
   "power": 268198558
  },
  {
   "server": 1224,
   "family": "DevilMafia",
   "power": 244361091
  },
  {
   "server": 1224,
   "family": "RisingSpores",
   "power": 235006939
  },
  {
   "server": 1224,
   "family": "Monkeys",
   "power": 175129866
  },
  {
   "server": 1224,
   "family": "Graveyard",
   "power": 165144305
  },
  {
   "server": 1224,
   "family": "CornDogs",
   "power": 104796226
  },
  {
   "server": 1225,
   "family": "Lunaire",
   "power": 1008850172
  },
  {
   "server": 1225,
   "family": "Wicked",
   "power": 423441738
  },
  {
   "server": 1225,
   "family": "Tempest",
   "power": 398724998
  },
  {
   "server": 1225,
   "family": "SAC",
   "power": 283940308
  },
  {
   "server": 1225,
   "family": "Legacy",
   "power": 237752568
  },
  {
   "server": 1225,
   "family": "MushPit",
   "power": 210619167
  },
  {
   "server": 1225,
   "family": "fullmetal",
   "power": 175670633
  },
  {
   "server": 1225,
   "family": "Immortals710",
   "power": 162340983
  },
  {
   "server": 1225,
   "family": "Misfits",
   "power": 120830080
  },
  {
   "server": 1225,
   "family": "DabSquad",
   "power": 56628364
  },
  {
   "server": 1226,
   "family": "Angels",
   "power": 1004359073
  },
  {
   "server": 1226,
   "family": "Demons",
   "power": 516259261
  },
  {
   "server": 1226,
   "family": "420Shroomies",
   "power": 426609648
  },
  {
   "server": 1226,
   "family": "Sensation",
   "power": 382820184
  },
  {
   "server": 1226,
   "family": "Carnal",
   "power": 271326501
  },
  {
   "server": 1226,
   "family": "FreeForAll",
   "power": 245717686
  },
  {
   "server": 1226,
   "family": "Mushers",
   "power": 245608120
  },
  {
   "server": 1226,
   "family": "Canada",
   "power": 232417329
  },
  {
   "server": 1226,
   "family": "TopGlobal",
   "power": 180139817
  },
  {
   "server": 1226,
   "family": "Vikings",
   "power": 144363022
  },
  {
   "server": 1227,
   "family": "DREADNOUGHT",
   "power": 992460267
  },
  {
   "server": 1227,
   "family": "BC4Honey",
   "power": 603830734
  },
  {
   "server": 1227,
   "family": "Misfits",
   "power": 425372423
  },
  {
   "server": 1227,
   "family": "ParkinsonsPals",
   "power": 381200962
  },
  {
   "server": 1227,
   "family": "HighLife",
   "power": 345676291
  },
  {
   "server": 1227,
   "family": "Heaven",
   "power": 324140515
  },
  {
   "server": 1227,
   "family": "LoneWolves",
   "power": 291578592
  },
  {
   "server": 1227,
   "family": "StrayDogs",
   "power": 208006110
  },
  {
   "server": 1227,
   "family": "Brawlers",
   "power": 197616776
  },
  {
   "server": 1227,
   "family": "hi",
   "power": 122423297
  },
  {
   "server": 1228,
   "family": "KoopaTropaS",
   "power": 1085511233
  },
  {
   "server": 1228,
   "family": "X",
   "power": 628603959
  },
  {
   "server": 1228,
   "family": "Monkey’s",
   "power": 381757883
  },
  {
   "server": 1228,
   "family": "TheHiddenLeaf",
   "power": 276133364
  },
  {
   "server": 1228,
   "family": "Berserkers",
   "power": 268837642
  },
  {
   "server": 1228,
   "family": "legends",
   "power": 234568444
  },
  {
   "server": 1228,
   "family": "Valhalla",
   "power": 231965922
  },
  {
   "server": 1228,
   "family": "FamilyTides",
   "power": 210697188
  },
  {
   "server": 1228,
   "family": "DeathAcademy",
   "power": 163348807
  },
  {
   "server": 1228,
   "family": "Cantharellus",
   "power": 138147170
  },
  {
   "server": 1229,
   "family": "TOP",
   "power": 988780398
  },
  {
   "server": 1229,
   "family": "MushroomKNGDM",
   "power": 569533692
  },
  {
   "server": 1229,
   "family": "Tokers",
   "power": 418424855
  },
  {
   "server": 1229,
   "family": "godspeed",
   "power": 282274695
  },
  {
   "server": 1229,
   "family": "AlmightyShroom",
   "power": 264723061
  },
  {
   "server": 1229,
   "family": "Fam",
   "power": 245220936
  },
  {
   "server": 1229,
   "family": "MeowShroom",
   "power": 245210490
  },
  {
   "server": 1229,
   "family": "GG",
   "power": 242208205
  },
  {
   "server": 1229,
   "family": "LbDaYo",
   "power": 226663097
  },
  {
   "server": 1229,
   "family": "Shroomvile",
   "power": 197122155
  },
  {
   "server": 1230,
   "family": "Timekillers",
   "power": 902161675
  },
  {
   "server": 1230,
   "family": "MansonFamily",
   "power": 598136597
  },
  {
   "server": 1230,
   "family": "Umbreonican",
   "power": 349100786
  },
  {
   "server": 1230,
   "family": "Slayshrooms",
   "power": 264469818
  },
  {
   "server": 1230,
   "family": "Yeska",
   "power": 215672335
  },
  {
   "server": 1230,
   "family": "Wolf_Cry",
   "power": 209815685
  },
  {
   "server": 1230,
   "family": "akatsuki",
   "power": 195315687
  },
  {
   "server": 1230,
   "family": "VALHALLA",
   "power": 139016544
  },
  {
   "server": 1230,
   "family": "Goonmaxxing",
   "power": 136604159
  },
  {
   "server": 1230,
   "family": "ShroomAssassin",
   "power": 65574308
  },
  {
   "server": 1231,
   "family": "Çrèampìé",
   "power": 964987372
  },
  {
   "server": 1231,
   "family": "OmegaProject",
   "power": 594469057
  },
  {
   "server": 1231,
   "family": "chosens",
   "power": 325815276
  },
  {
   "server": 1231,
   "family": "Munchkins",
   "power": 312978321
  },
  {
   "server": 1231,
   "family": "StrawHats",
   "power": 303710952
  },
  {
   "server": 1231,
   "family": "Mushies",
   "power": 277398579
  },
  {
   "server": 1231,
   "family": "Art_of_War",
   "power": 265903485
  },
  {
   "server": 1231,
   "family": "home",
   "power": 234924010
  },
  {
   "server": 1231,
   "family": "psychMushies",
   "power": 216608554
  },
  {
   "server": 1231,
   "family": "Grind4Fun",
   "power": 192832093
  },
  {
   "server": 1232,
   "family": "KillerWhales",
   "power": 877395412
  },
  {
   "server": 1232,
   "family": "Malevolence",
   "power": 695093066
  },
  {
   "server": 1232,
   "family": "Count2Potato",
   "power": 339356027
  },
  {
   "server": 1232,
   "family": "MegaShrooms",
   "power": 309988651
  },
  {
   "server": 1232,
   "family": "AbyssalShrooms",
   "power": 288432196
  },
  {
   "server": 1232,
   "family": "Destruction",
   "power": 270537705
  },
  {
   "server": 1232,
   "family": "Demon",
   "power": 245763428
  },
  {
   "server": 1232,
   "family": "Chaos",
   "power": 239050108
  },
  {
   "server": 1232,
   "family": "Panda",
   "power": 237778597
  },
  {
   "server": 1232,
   "family": "BingBong",
   "power": 219743759
  },
  {
   "server": 1233,
   "family": "Themisfits",
   "power": 802364661
  },
  {
   "server": 1233,
   "family": "Shroomland",
   "power": 790110792
  },
  {
   "server": 1233,
   "family": "SlightlyActive",
   "power": 265049761
  },
  {
   "server": 1233,
   "family": "YOLO",
   "power": 256635827
  },
  {
   "server": 1233,
   "family": "TheWarriors",
   "power": 237188238
  },
  {
   "server": 1233,
   "family": "MushroomKing",
   "power": 224676443
  },
  {
   "server": 1233,
   "family": "NoGs",
   "power": 214276953
  },
  {
   "server": 1233,
   "family": "OnlyTrueShroom",
   "power": 211396745
  },
  {
   "server": 1233,
   "family": "ShroomBoomers",
   "power": 190562980
  },
  {
   "server": 1233,
   "family": "Ragnarok",
   "power": 183502361
  },
  {
   "server": 1234,
   "family": "Mafia",
   "power": 856946627
  },
  {
   "server": 1234,
   "family": "RiseOfMushroom",
   "power": 618826095
  },
  {
   "server": 1234,
   "family": "TheEmpire",
   "power": 250739771
  },
  {
   "server": 1234,
   "family": "Outsiderz",
   "power": 248120652
  },
  {
   "server": 1234,
   "family": "Family",
   "power": 234982072
  },
  {
   "server": 1234,
   "family": "Toadstool",
   "power": 211273029
  },
  {
   "server": 1234,
   "family": "Juggalofamily",
   "power": 197251036
  },
  {
   "server": 1234,
   "family": "RAGNAROK",
   "power": 188371674
  },
  {
   "server": 1234,
   "family": "HeroGuild",
   "power": 169376873
  },
  {
   "server": 1234,
   "family": "Fungicide",
   "power": 165890909
  },
  {
   "server": 1235,
   "family": "DeathGuard",
   "power": 890023248
  },
  {
   "server": 1235,
   "family": "TheShrooms",
   "power": 753253043
  },
  {
   "server": 1235,
   "family": "Unsociable",
   "power": 254809629
  },
  {
   "server": 1235,
   "family": "Horizon",
   "power": 232310377
  },
  {
   "server": 1235,
   "family": "Akatsuki",
   "power": 200948493
  },
  {
   "server": 1235,
   "family": "Meow",
   "power": 196832752
  },
  {
   "server": 1235,
   "family": "ShroomGods",
   "power": 190796557
  },
  {
   "server": 1235,
   "family": "Lycans",
   "power": 167206712
  },
  {
   "server": 1235,
   "family": "BOREDGANG",
   "power": 166647613
  },
  {
   "server": 1235,
   "family": "Le",
   "power": 143835589
  },
  {
   "server": 1236,
   "family": "AINCRAD",
   "power": 957642009
  },
  {
   "server": 1236,
   "family": "HiddenLeaf",
   "power": 507651681
  },
  {
   "server": 1236,
   "family": "fatthairyspore",
   "power": 366022802
  },
  {
   "server": 1236,
   "family": "NFK",
   "power": 251786393
  },
  {
   "server": 1236,
   "family": "RisqueBusiness",
   "power": 235041061
  },
  {
   "server": 1236,
   "family": "TheDeathCaps",
   "power": 215902963
  },
  {
   "server": 1236,
   "family": "achros",
   "power": 191593394
  },
  {
   "server": 1236,
   "family": "Mrgalaxy",
   "power": 191023660
  },
  {
   "server": 1236,
   "family": "Angelic",
   "power": 188827056
  },
  {
   "server": 1236,
   "family": "Euphoria",
   "power": 188223506
  },
  {
   "server": 1237,
   "family": "OnlyShrooms",
   "power": 895348709
  },
  {
   "server": 1237,
   "family": "Mushmellow",
   "power": 767784956
  },
  {
   "server": 1237,
   "family": "LampLegion",
   "power": 280758359
  },
  {
   "server": 1237,
   "family": "Shroomreapers",
   "power": 242213270
  },
  {
   "server": 1237,
   "family": "MysticShroom",
   "power": 236471588
  },
  {
   "server": 1237,
   "family": "TheChickenFam",
   "power": 183077222
  },
  {
   "server": 1237,
   "family": "Unstoppable",
   "power": 172941588
  },
  {
   "server": 1237,
   "family": "TheShrooms",
   "power": 169592177
  },
  {
   "server": 1237,
   "family": "GothIHOP",
   "power": 155699207
  },
  {
   "server": 1237,
   "family": "Shroomnation",
   "power": 138933206
  },
  {
   "server": 1238,
   "family": "Xhakyn",
   "power": 1062308417
  },
  {
   "server": 1238,
   "family": "DragonSlayers",
   "power": 560940755
  },
  {
   "server": 1238,
   "family": "LEGENDS",
   "power": 404920383
  },
  {
   "server": 1238,
   "family": "MysticMush",
   "power": 240593844
  },
  {
   "server": 1238,
   "family": "Mafia",
   "power": 236491221
  },
  {
   "server": 1238,
   "family": "Tip",
   "power": 202008254
  },
  {
   "server": 1238,
   "family": "fungi",
   "power": 191959984
  },
  {
   "server": 1238,
   "family": "Sapphire",
   "power": 176729567
  },
  {
   "server": 1238,
   "family": "KiwiShrooms",
   "power": 170373669
  },
  {
   "server": 1238,
   "family": "DeadFools",
   "power": 161038008
  },
  {
   "server": 1239,
   "family": "Shroomies",
   "power": 782053629
  },
  {
   "server": 1239,
   "family": "Straw_Hats",
   "power": 642348908
  },
  {
   "server": 1239,
   "family": "Wanted",
   "power": 293062527
  },
  {
   "server": 1239,
   "family": "SillySatanists",
   "power": 287603873
  },
  {
   "server": 1239,
   "family": "CanadiansRule",
   "power": 272914987
  },
  {
   "server": 1239,
   "family": "BlackClover",
   "power": 272866053
  },
  {
   "server": 1239,
   "family": "Azreguard",
   "power": 251198560
  },
  {
   "server": 1239,
   "family": "Section8",
   "power": 215270607
  },
  {
   "server": 1239,
   "family": "GoofyGøøbers",
   "power": 192775774
  },
  {
   "server": 1239,
   "family": "Shadows",
   "power": 167441657
  },
  {
   "server": 1240,
   "family": "WhiteLotus",
   "power": 929124525
  },
  {
   "server": 1240,
   "family": "KungfuKoalas",
   "power": 511865089
  },
  {
   "server": 1240,
   "family": "AceS",
   "power": 363742980
  },
  {
   "server": 1240,
   "family": "Knitsworth",
   "power": 262842560
  },
  {
   "server": 1240,
   "family": "Ragnarök",
   "power": 246833961
  },
  {
   "server": 1240,
   "family": "SleepyBois",
   "power": 239856320
  },
  {
   "server": 1240,
   "family": "QcMushroom",
   "power": 221353906
  },
  {
   "server": 1240,
   "family": "kumo",
   "power": 214699523
  },
  {
   "server": 1240,
   "family": "Tripp",
   "power": 199357760
  },
  {
   "server": 1240,
   "family": "Galaxus",
   "power": 169399490
  },
  {
   "server": 1241,
   "family": "Abnormal",
   "power": 993014824
  },
  {
   "server": 1241,
   "family": "TheShrooms",
   "power": 293147090
  },
  {
   "server": 1241,
   "family": "ThisIsSus",
   "power": 258022364
  },
  {
   "server": 1241,
   "family": "Anime",
   "power": 241930399
  },
  {
   "server": 1241,
   "family": "room2shroom",
   "power": 228790629
  },
  {
   "server": 1241,
   "family": "theEND",
   "power": 203247155
  },
  {
   "server": 1241,
   "family": "shroom247",
   "power": 201911542
  },
  {
   "server": 1241,
   "family": "Reaver",
   "power": 187000137
  },
  {
   "server": 1241,
   "family": "SimpleTimes",
   "power": 182934363
  },
  {
   "server": 1241,
   "family": "WeTakeShrooms",
   "power": 179444405
  },
  {
   "server": 1242,
   "family": "DevilsRejects",
   "power": 879272940
  },
  {
   "server": 1242,
   "family": "Luminescence",
   "power": 592209959
  },
  {
   "server": 1242,
   "family": "Ravens_Clan",
   "power": 235399708
  },
  {
   "server": 1242,
   "family": "finals",
   "power": 233104740
  },
  {
   "server": 1242,
   "family": "Mlonde",
   "power": 218325085
  },
  {
   "server": 1242,
   "family": "MushyBros",
   "power": 206822350
  },
  {
   "server": 1242,
   "family": "Reapers",
   "power": 192066978
  },
  {
   "server": 1242,
   "family": "WickedJesters",
   "power": 182454325
  },
  {
   "server": 1242,
   "family": "Overlords",
   "power": 161350199
  },
  {
   "server": 1242,
   "family": "GherkinEmpire",
   "power": 146318630
  },
  {
   "server": 1243,
   "family": "RAVENOUS",
   "power": 908623695
  },
  {
   "server": 1243,
   "family": "Shroomers",
   "power": 343908736
  },
  {
   "server": 1243,
   "family": "RoguesRevenge",
   "power": 331062437
  },
  {
   "server": 1243,
   "family": "HeavenlyShroom",
   "power": 330377992
  },
  {
   "server": 1243,
   "family": "TheCoolFamily",
   "power": 313108678
  },
  {
   "server": 1243,
   "family": "W33D",
   "power": 263060773
  },
  {
   "server": 1243,
   "family": "lightdragon",
   "power": 254600872
  },
  {
   "server": 1243,
   "family": "Dark_Legion",
   "power": 228135091
  },
  {
   "server": 1243,
   "family": "JV_THE_GODS",
   "power": 205552707
  },
  {
   "server": 1243,
   "family": "thefellas",
   "power": 203734202
  },
  {
   "server": 1244,
   "family": "3amZoomies",
   "power": 829871438
  },
  {
   "server": 1244,
   "family": "FunGuys",
   "power": 489470419
  },
  {
   "server": 1244,
   "family": "GhostMan",
   "power": 466960495
  },
  {
   "server": 1244,
   "family": "Bombastic",
   "power": 298055563
  },
  {
   "server": 1244,
   "family": "TheJizzards",
   "power": 296403974
  },
  {
   "server": 1244,
   "family": "Stereotypical",
   "power": 229714704
  },
  {
   "server": 1244,
   "family": "gamer",
   "power": 183185387
  },
  {
   "server": 1244,
   "family": "zygon",
   "power": 155803597
  },
  {
   "server": 1244,
   "family": "WolfsDen",
   "power": 155408892
  },
  {
   "server": 1244,
   "family": "minicrawlers",
   "power": 142146239
  },
  {
   "server": 1245,
   "family": "MostHated",
   "power": 912415779
  },
  {
   "server": 1245,
   "family": "Family",
   "power": 520141218
  },
  {
   "server": 1245,
   "family": "zenin",
   "power": 350060812
  },
  {
   "server": 1245,
   "family": "Primesupreme",
   "power": 314312905
  },
  {
   "server": 1245,
   "family": "shadow",
   "power": 284165089
  },
  {
   "server": 1245,
   "family": "Dmc",
   "power": 273918095
  },
  {
   "server": 1245,
   "family": "GODSOFWAR",
   "power": 263821590
  },
  {
   "server": 1245,
   "family": "ShroomHeads",
   "power": 239517159
  },
  {
   "server": 1245,
   "family": "hitheres",
   "power": 179016900
  },
  {
   "server": 1245,
   "family": "LunarShrooms",
   "power": 170358882
  },
  {
   "server": 1246,
   "family": "MoonlitPub",
   "power": 760748647
  },
  {
   "server": 1246,
   "family": "ShroomsOfDoom",
   "power": 536831419
  },
  {
   "server": 1246,
   "family": "Murphies",
   "power": 535216808
  },
  {
   "server": 1246,
   "family": "CrabPeople",
   "power": 279474274
  },
  {
   "server": 1246,
   "family": "Forsaken",
   "power": 225706314
  },
  {
   "server": 1246,
   "family": "Volunter",
   "power": 197008697
  },
  {
   "server": 1246,
   "family": "UK",
   "power": 190675012
  },
  {
   "server": 1246,
   "family": "Mushroom",
   "power": 182015765
  },
  {
   "server": 1246,
   "family": "CityX",
   "power": 179455221
  },
  {
   "server": 1246,
   "family": "Slayers",
   "power": 172183002
  },
  {
   "server": 1247,
   "family": "Olympus",
   "power": 888269492
  },
  {
   "server": 1247,
   "family": "ShroomLordz",
   "power": 723246187
  },
  {
   "server": 1247,
   "family": "ThePond",
   "power": 503400123
  },
  {
   "server": 1247,
   "family": "TheBoys",
   "power": 311091697
  },
  {
   "server": 1247,
   "family": "solem",
   "power": 307834024
  },
  {
   "server": 1247,
   "family": "huh",
   "power": 224410965
  },
  {
   "server": 1247,
   "family": "Kingdom",
   "power": 189514920
  },
  {
   "server": 1247,
   "family": "shroomed",
   "power": 158703076
  },
  {
   "server": 1247,
   "family": "Elementals",
   "power": 137953807
  },
  {
   "server": 1247,
   "family": "AdamsFamily",
   "power": 136055013
  },
  {
   "server": 1248,
   "family": "Purgatory",
   "power": 999411476
  },
  {
   "server": 1248,
   "family": "LampLovers",
   "power": 603045819
  },
  {
   "server": 1248,
   "family": "The_Fun_Guys",
   "power": 343148149
  },
  {
   "server": 1248,
   "family": "SHRooMS",
   "power": 244400992
  },
  {
   "server": 1248,
   "family": "shroomFam",
   "power": 236563463
  },
  {
   "server": 1248,
   "family": "Korrupt",
   "power": 233366938
  },
  {
   "server": 1248,
   "family": "VoidedXZ",
   "power": 221619718
  },
  {
   "server": 1248,
   "family": "BoxCompany",
   "power": 199484364
  },
  {
   "server": 1248,
   "family": "Lethals",
   "power": 195961442
  },
  {
   "server": 1248,
   "family": "Bergies",
   "power": 195084546
  },
  {
   "server": 1249,
   "family": "RamenShøp",
   "power": 842748332
  },
  {
   "server": 1249,
   "family": "LostShroomies",
   "power": 361685000
  },
  {
   "server": 1249,
   "family": "Incels",
   "power": 343248758
  },
  {
   "server": 1249,
   "family": "Mycelium",
   "power": 337037211
  },
  {
   "server": 1249,
   "family": "Zackontop",
   "power": 253422589
  },
  {
   "server": 1249,
   "family": "kingShrooms",
   "power": 243690373
  },
  {
   "server": 1249,
   "family": "TheKingz",
   "power": 236481230
  },
  {
   "server": 1249,
   "family": "420Chill",
   "power": 226569960
  },
  {
   "server": 1249,
   "family": "Lunasxs",
   "power": 209641421
  },
  {
   "server": 1249,
   "family": "Blazin42",
   "power": 172303755
  },
  {
   "server": 1250,
   "family": "SAO",
   "power": 880238160
  },
  {
   "server": 1250,
   "family": "Temptations",
   "power": 370835211
  },
  {
   "server": 1250,
   "family": "Stinkys",
   "power": 332427124
  },
  {
   "server": 1250,
   "family": "TheSaints",
   "power": 300365774
  },
  {
   "server": 1250,
   "family": "ReApErZ",
   "power": 231735763
  },
  {
   "server": 1250,
   "family": "afterPARTY",
   "power": 198518895
  },
  {
   "server": 1250,
   "family": "Fatal",
   "power": 188472039
  },
  {
   "server": 1250,
   "family": "laydbak",
   "power": 172391825
  },
  {
   "server": 1250,
   "family": "wolfpack",
   "power": 164418419
  },
  {
   "server": 1250,
   "family": "AbyssalKnights",
   "power": 161127134
  },
  {
   "server": 1251,
   "family": "AngelsOfWar",
   "power": 872963530
  },
  {
   "server": 1251,
   "family": "FunGuys",
   "power": 355362638
  },
  {
   "server": 1251,
   "family": "ButterShrooms",
   "power": 348964767
  },
  {
   "server": 1251,
   "family": "Chaychna",
   "power": 335887358
  },
  {
   "server": 1251,
   "family": "FungalFury",
   "power": 234630875
  },
  {
   "server": 1251,
   "family": "themunks",
   "power": 233198850
  },
  {
   "server": 1251,
   "family": "SnailTrail",
   "power": 202683463
  },
  {
   "server": 1251,
   "family": "Synthesis",
   "power": 199667429
  },
  {
   "server": 1251,
   "family": "Shroomers",
   "power": 177906954
  },
  {
   "server": 1251,
   "family": "Runtz",
   "power": 165053759
  },
  {
   "server": 1252,
   "family": "Arise",
   "power": 931151483
  },
  {
   "server": 1252,
   "family": "GoofyGoobers",
   "power": 491267912
  },
  {
   "server": 1252,
   "family": "HouseOfHope",
   "power": 343848384
  },
  {
   "server": 1252,
   "family": "Happiness",
   "power": 247958036
  },
  {
   "server": 1252,
   "family": "𝓢𝓴𝔂𝓱𝓲𝓰𝓱",
   "power": 229179664
  },
  {
   "server": 1252,
   "family": "Skywalkers",
   "power": 221611079
  },
  {
   "server": 1252,
   "family": "StrawHats",
   "power": 202699379
  },
  {
   "server": 1252,
   "family": "BADD",
   "power": 198628531
  },
  {
   "server": 1252,
   "family": "HazbinHotel",
   "power": 191167045
  },
  {
   "server": 1252,
   "family": "ShroomHeads",
   "power": 176994341
  },
  {
   "server": 1253,
   "family": "OnlyBops",
   "power": 829309622
  },
  {
   "server": 1253,
   "family": "420Shrooms",
   "power": 609113700
  },
  {
   "server": 1253,
   "family": "NoGameNoLife",
   "power": 298902250
  },
  {
   "server": 1253,
   "family": "Casuals",
   "power": 278416813
  },
  {
   "server": 1253,
   "family": "MYCELIUM",
   "power": 252634284
  },
  {
   "server": 1253,
   "family": "HiddenFate",
   "power": 246873092
  },
  {
   "server": 1253,
   "family": "Reapers",
   "power": 183667004
  },
  {
   "server": 1253,
   "family": "BcGrown",
   "power": 169628695
  },
  {
   "server": 1253,
   "family": "FUNGIS",
   "power": 139223043
  },
  {
   "server": 1253,
   "family": "Royalty",
   "power": 114206753
  },
  {
   "server": 1254,
   "family": "Omega",
   "power": 824202530
  },
  {
   "server": 1254,
   "family": "Elonville",
   "power": 562421539
  },
  {
   "server": 1254,
   "family": "Lube",
   "power": 274626281
  },
  {
   "server": 1254,
   "family": "AlpinaB6",
   "power": 273760144
  },
  {
   "server": 1254,
   "family": "Shampoo",
   "power": 244109829
  },
  {
   "server": 1254,
   "family": "NAZARICK",
   "power": 226475934
  },
  {
   "server": 1254,
   "family": "Meeks",
   "power": 212478664
  },
  {
   "server": 1254,
   "family": "Sanctury",
   "power": 204544209
  },
  {
   "server": 1254,
   "family": "shroomMafia86",
   "power": 204401358
  },
  {
   "server": 1254,
   "family": "sao",
   "power": 183068298
  },
  {
   "server": 1255,
   "family": "●LampLickers●",
   "power": 914290544
  },
  {
   "server": 1255,
   "family": "Mafia",
   "power": 365241612
  },
  {
   "server": 1255,
   "family": "TaintedPeaches",
   "power": 363866799
  },
  {
   "server": 1255,
   "family": "SporeAddicts",
   "power": 362955514
  },
  {
   "server": 1255,
   "family": "JustTheTip",
   "power": 221797283
  },
  {
   "server": 1255,
   "family": "DieselsDen",
   "power": 213022067
  },
  {
   "server": 1255,
   "family": "Mushle",
   "power": 208794977
  },
  {
   "server": 1255,
   "family": "HardlyActive",
   "power": 194860443
  },
  {
   "server": 1255,
   "family": "Arise",
   "power": 191484214
  },
  {
   "server": 1255,
   "family": "ShroomSmoothie",
   "power": 188308827
  },
  {
   "server": 1256,
   "family": "Ts",
   "power": 708479303
  },
  {
   "server": 1256,
   "family": "ONLYSHROOMS",
   "power": 505842735
  },
  {
   "server": 1256,
   "family": "TheFamily",
   "power": 346488927
  },
  {
   "server": 1256,
   "family": "CoppersFam",
   "power": 246993641
  },
  {
   "server": 1256,
   "family": "UnholyDarkChap",
   "power": 240766718
  },
  {
   "server": 1256,
   "family": "FoxGaming",
   "power": 222279013
  },
  {
   "server": 1256,
   "family": "HolyShroom",
   "power": 217193264
  },
  {
   "server": 1256,
   "family": "idkSomething",
   "power": 201333213
  },
  {
   "server": 1256,
   "family": "MMC",
   "power": 184116798
  },
  {
   "server": 1256,
   "family": "BloodHoney",
   "power": 179890028
  },
  {
   "server": 1257,
   "family": "Akatsuki",
   "power": 822801912
  },
  {
   "server": 1257,
   "family": "WolfPack",
   "power": 464026225
  },
  {
   "server": 1257,
   "family": "CreatorS",
   "power": 312016938
  },
  {
   "server": 1257,
   "family": "SlayQueen",
   "power": 225802941
  },
  {
   "server": 1257,
   "family": "Shiitake",
   "power": 218756244
  },
  {
   "server": 1257,
   "family": "boss",
   "power": 208828564
  },
  {
   "server": 1257,
   "family": "Seraphim",
   "power": 206020552
  },
  {
   "server": 1257,
   "family": "OurCrazyGroup",
   "power": 195834482
  },
  {
   "server": 1257,
   "family": "EvienceKramoor",
   "power": 192217726
  },
  {
   "server": 1257,
   "family": "Dark",
   "power": 177413124
  },
  {
   "server": 1258,
   "family": "LOVE",
   "power": 787506439
  },
  {
   "server": 1258,
   "family": "HATE",
   "power": 368424641
  },
  {
   "server": 1258,
   "family": "CatCartel",
   "power": 359418948
  },
  {
   "server": 1258,
   "family": "MushRoomies",
   "power": 277855913
  },
  {
   "server": 1258,
   "family": "amungus",
   "power": 258389910
  },
  {
   "server": 1258,
   "family": "shroomroom",
   "power": 249369734
  },
  {
   "server": 1258,
   "family": "FairyTail",
   "power": 228398954
  },
  {
   "server": 1258,
   "family": "Legends",
   "power": 212100453
  },
  {
   "server": 1258,
   "family": "Why",
   "power": 194999021
  },
  {
   "server": 1258,
   "family": "Godmode",
   "power": 167013245
  },
  {
   "server": 1259,
   "family": "IdentityTheft",
   "power": 761203819
  },
  {
   "server": 1259,
   "family": "BNK",
   "power": 526593871
  },
  {
   "server": 1259,
   "family": "Wickid",
   "power": 344592606
  },
  {
   "server": 1259,
   "family": "Hogwarts",
   "power": 298741396
  },
  {
   "server": 1259,
   "family": "zzzz",
   "power": 239758841
  },
  {
   "server": 1259,
   "family": "VALHALLA",
   "power": 220304487
  },
  {
   "server": 1259,
   "family": "ChillZone",
   "power": 199441267
  },
  {
   "server": 1259,
   "family": "4got10",
   "power": 183673555
  },
  {
   "server": 1259,
   "family": "NeverForget",
   "power": 180787341
  },
  {
   "server": 1259,
   "family": "Axle",
   "power": 177734308
  },
  {
   "server": 1260,
   "family": "Mycelium",
   "power": 692880760
  },
  {
   "server": 1260,
   "family": "Deadly",
   "power": 387938391
  },
  {
   "server": 1260,
   "family": "Shroomies",
   "power": 318874547
  },
  {
   "server": 1260,
   "family": "destroyers",
   "power": 296156823
  },
  {
   "server": 1260,
   "family": "Order2",
   "power": 242223596
  },
  {
   "server": 1260,
   "family": "0PIUM",
   "power": 236636375
  },
  {
   "server": 1260,
   "family": "Scout_Regiment",
   "power": 216059724
  },
  {
   "server": 1260,
   "family": "radicalbunnies",
   "power": 203920693
  },
  {
   "server": 1260,
   "family": "ShroomuraiClan",
   "power": 152485887
  },
  {
   "server": 1260,
   "family": "Akatsuki",
   "power": 131428277
  },
  {
   "server": 1261,
   "family": "RetirementHome",
   "power": 682687120
  },
  {
   "server": 1261,
   "family": "NeverKnowsBest",
   "power": 592292729
  },
  {
   "server": 1261,
   "family": "OnePiecE",
   "power": 299841700
  },
  {
   "server": 1261,
   "family": "OnlyVets",
   "power": 254399862
  },
  {
   "server": 1261,
   "family": "TheDeathCaps",
   "power": 246586485
  },
  {
   "server": 1261,
   "family": "shrooms",
   "power": 245793762
  },
  {
   "server": 1261,
   "family": "Gods",
   "power": 231432474
  },
  {
   "server": 1261,
   "family": "MushroomStamps",
   "power": 195986112
  },
  {
   "server": 1261,
   "family": "Ascensions",
   "power": 154843113
  },
  {
   "server": 1261,
   "family": "Oblock",
   "power": 154690263
  },
  {
   "server": 1262,
   "family": "ShroomCartel",
   "power": 765722436
  },
  {
   "server": 1262,
   "family": "Legends",
   "power": 354119396
  },
  {
   "server": 1262,
   "family": "TwoCrows",
   "power": 259238562
  },
  {
   "server": 1262,
   "family": "Noodles",
   "power": 251155432
  },
  {
   "server": 1262,
   "family": "Pweepepee",
   "power": 246180124
  },
  {
   "server": 1262,
   "family": "Magic",
   "power": 231418968
  },
  {
   "server": 1262,
   "family": "Famdamily",
   "power": 205697297
  },
  {
   "server": 1262,
   "family": "Potato115",
   "power": 203350807
  },
  {
   "server": 1262,
   "family": "Dreadnaught",
   "power": 200449120
  },
  {
   "server": 1262,
   "family": "Frogos",
   "power": 192457619
  },
  {
   "server": 1263,
   "family": "DegensUnited",
   "power": 755563968
  },
  {
   "server": 1263,
   "family": "Wano",
   "power": 547917501
  },
  {
   "server": 1263,
   "family": "MushLove",
   "power": 237456496
  },
  {
   "server": 1263,
   "family": "StrawHatCrew",
   "power": 227362825
  },
  {
   "server": 1263,
   "family": "RubyRebellion",
   "power": 201800878
  },
  {
   "server": 1263,
   "family": "CrimsonBlades",
   "power": 188822812
  },
  {
   "server": 1263,
   "family": "ShrroomGods",
   "power": 164053915
  },
  {
   "server": 1263,
   "family": "StrangeLandGC",
   "power": 161572613
  },
  {
   "server": 1263,
   "family": "YoshidaCľáñ",
   "power": 156039900
  },
  {
   "server": 1263,
   "family": "Legacy",
   "power": 132410069
  },
  {
   "server": 1264,
   "family": "NightWalkers",
   "power": 657892579
  },
  {
   "server": 1264,
   "family": "𝐒𝐇𝐑𝐎𝐎𝐌𝐒",
   "power": 272289899
  },
  {
   "server": 1264,
   "family": "BrokeBitches",
   "power": 271471764
  },
  {
   "server": 1264,
   "family": "DoNotP2W",
   "power": 232442487
  },
  {
   "server": 1264,
   "family": "Atramentaria",
   "power": 204350306
  },
  {
   "server": 1264,
   "family": "Pack",
   "power": 179832629
  },
  {
   "server": 1264,
   "family": "MushOnTop",
   "power": 173144248
  },
  {
   "server": 1264,
   "family": "NinthGate",
   "power": 135056007
  },
  {
   "server": 1264,
   "family": "DmaKat",
   "power": 120572974
  },
  {
   "server": 1264,
   "family": "Ragnarok",
   "power": 112046889
  },
  {
   "server": 1265,
   "family": "Apollyon",
   "power": 768396384
  },
  {
   "server": 1265,
   "family": "TripleCat",
   "power": 372540700
  },
  {
   "server": 1265,
   "family": "Dragonslayer",
   "power": 244312523
  },
  {
   "server": 1265,
   "family": "Godkiller",
   "power": 221400496
  },
  {
   "server": 1265,
   "family": "Mushdooms",
   "power": 220918299
  },
  {
   "server": 1265,
   "family": "GhostClub",
   "power": 201770156
  },
  {
   "server": 1265,
   "family": "Whitefang",
   "power": 201220271
  },
  {
   "server": 1265,
   "family": "StrawHatCrew",
   "power": 186423293
  },
  {
   "server": 1265,
   "family": "Girlkissers",
   "power": 183128503
  },
  {
   "server": 1265,
   "family": "Dragon",
   "power": 126980121
  },
  {
   "server": 1266,
   "family": "Chexmix",
   "power": 666313769
  },
  {
   "server": 1266,
   "family": "MushyKingdom",
   "power": 611339156
  },
  {
   "server": 1266,
   "family": "TheMunchkins",
   "power": 250405391
  },
  {
   "server": 1266,
   "family": "Shroomalicious",
   "power": 228776451
  },
  {
   "server": 1266,
   "family": "FungiFans",
   "power": 213802911
  },
  {
   "server": 1266,
   "family": "TruffleButtahs",
   "power": 201409812
  },
  {
   "server": 1266,
   "family": "TheOnyxLegion",
   "power": 199763779
  },
  {
   "server": 1266,
   "family": "shroomheadz",
   "power": 185822947
  },
  {
   "server": 1266,
   "family": "Adrian",
   "power": 160899884
  },
  {
   "server": 1266,
   "family": "Axios",
   "power": 157588657
  },
  {
   "server": 1267,
   "family": "SomethingSuper",
   "power": 740224786
  },
  {
   "server": 1267,
   "family": "SoulSociety",
   "power": 596323908
  },
  {
   "server": 1267,
   "family": "Funguys",
   "power": 265802112
  },
  {
   "server": 1267,
   "family": "Herd",
   "power": 223516220
  },
  {
   "server": 1267,
   "family": "Gabgoooooooooo",
   "power": 222395454
  },
  {
   "server": 1267,
   "family": "Soup",
   "power": 215915697
  },
  {
   "server": 1267,
   "family": "thegrandcircus",
   "power": 198002039
  },
  {
   "server": 1267,
   "family": "SumTingWong",
   "power": 196963548
  },
  {
   "server": 1267,
   "family": "Bitten",
   "power": 179992167
  },
  {
   "server": 1267,
   "family": "Shroomie",
   "power": 173557527
  },
  {
   "server": 1268,
   "family": "TOP",
   "power": 729743737
  },
  {
   "server": 1268,
   "family": "Envy",
   "power": 449904245
  },
  {
   "server": 1268,
   "family": "Misfits",
   "power": 355484953
  },
  {
   "server": 1268,
   "family": "FullShiitake",
   "power": 227157232
  },
  {
   "server": 1268,
   "family": "WeAreNice",
   "power": 212324972
  },
  {
   "server": 1268,
   "family": "shitake",
   "power": 194534301
  },
  {
   "server": 1268,
   "family": "HaveFun",
   "power": 188376622
  },
  {
   "server": 1268,
   "family": "BloodHoney",
   "power": 185869614
  },
  {
   "server": 1268,
   "family": "Valhalla",
   "power": 154816842
  },
  {
   "server": 1268,
   "family": "Weverse",
   "power": 132067441
  },
  {
   "server": 1269,
   "family": "NightOwls",
   "power": 676532469
  },
  {
   "server": 1269,
   "family": "ShroomLegion",
   "power": 627979715
  },
  {
   "server": 1269,
   "family": "Losmegachampi",
   "power": 249149635
  },
  {
   "server": 1269,
   "family": "Parkours",
   "power": 195531636
  },
  {
   "server": 1269,
   "family": "Queensland",
   "power": 188088677
  },
  {
   "server": 1269,
   "family": "AussieShrooms",
   "power": 173728971
  },
  {
   "server": 1269,
   "family": "Peanutbutter",
   "power": 170831945
  },
  {
   "server": 1269,
   "family": "Donny",
   "power": 163215719
  },
  {
   "server": 1269,
   "family": "stormshadow",
   "power": 158851106
  },
  {
   "server": 1269,
   "family": "StrawHatCrew",
   "power": 142649136
  },
  {
   "server": 1270,
   "family": "FungalFury",
   "power": 646636767
  },
  {
   "server": 1270,
   "family": "ShadowLegion",
   "power": 473970278
  },
  {
   "server": 1270,
   "family": "Abyss",
   "power": 229304972
  },
  {
   "server": 1270,
   "family": "Lunaire",
   "power": 222546054
  },
  {
   "server": 1270,
   "family": "Pineapple",
   "power": 220803265
  },
  {
   "server": 1270,
   "family": "AlucArdon",
   "power": 210349398
  },
  {
   "server": 1270,
   "family": "chomik",
   "power": 179017076
  },
  {
   "server": 1270,
   "family": "Franceswar",
   "power": 177131722
  },
  {
   "server": 1270,
   "family": "LOL",
   "power": 153044572
  },
  {
   "server": 1270,
   "family": "TheRedeemed",
   "power": 141143872
  },
  {
   "server": 1271,
   "family": "ShroomShire",
   "power": 684595577
  },
  {
   "server": 1271,
   "family": "Knights",
   "power": 289681901
  },
  {
   "server": 1271,
   "family": "PremiumBlend",
   "power": 253761150
  },
  {
   "server": 1271,
   "family": "Empire",
   "power": 206367979
  },
  {
   "server": 1271,
   "family": "Bigd",
   "power": 198396847
  },
  {
   "server": 1271,
   "family": "MusherShip9000",
   "power": 182853703
  },
  {
   "server": 1271,
   "family": "TheFunguys",
   "power": 171868533
  },
  {
   "server": 1271,
   "family": "King",
   "power": 155238731
  },
  {
   "server": 1271,
   "family": "LogHorizon",
   "power": 151937743
  },
  {
   "server": 1271,
   "family": "DuckyPond",
   "power": 150956397
  },
  {
   "server": 1272,
   "family": "Legacy",
   "power": 565353559
  },
  {
   "server": 1272,
   "family": "bbFamily",
   "power": 405433134
  },
  {
   "server": 1272,
   "family": "Offline",
   "power": 313528003
  },
  {
   "server": 1272,
   "family": "DarkFire",
   "power": 290465254
  },
  {
   "server": 1272,
   "family": "PH",
   "power": 218439050
  },
  {
   "server": 1272,
   "family": "NeverForget",
   "power": 188180349
  },
  {
   "server": 1272,
   "family": "Unkindled",
   "power": 183162886
  },
  {
   "server": 1272,
   "family": "Legends",
   "power": 141876887
  },
  {
   "server": 1272,
   "family": "SHOGUN",
   "power": 141173949
  },
  {
   "server": 1272,
   "family": "Femboys",
   "power": 117605175
  },
  {
   "server": 1273,
   "family": "Sins",
   "power": 721179323
  },
  {
   "server": 1273,
   "family": "ShadowRealm",
   "power": 315337841
  },
  {
   "server": 1273,
   "family": "TheManagers",
   "power": 224571373
  },
  {
   "server": 1273,
   "family": "MushyBoys",
   "power": 216105125
  },
  {
   "server": 1273,
   "family": "Hihihihihihihi",
   "power": 181206291
  },
  {
   "server": 1273,
   "family": "ShroomChooms",
   "power": 172698966
  },
  {
   "server": 1273,
   "family": "Legends",
   "power": 166880378
  },
  {
   "server": 1273,
   "family": "StonedKings",
   "power": 156949636
  },
  {
   "server": 1273,
   "family": "CrazyTown",
   "power": 146219380
  },
  {
   "server": 1273,
   "family": "mogger",
   "power": 142424645
  },
  {
   "server": 1274,
   "family": "SurveyCorps",
   "power": 476687452
  },
  {
   "server": 1274,
   "family": "LionsMane",
   "power": 285141184
  },
  {
   "server": 1274,
   "family": "YOUTUBE",
   "power": 274511686
  },
  {
   "server": 1274,
   "family": "FriedMushrooms",
   "power": 244240024
  },
  {
   "server": 1274,
   "family": "StrawHats",
   "power": 239590605
  },
  {
   "server": 1274,
   "family": "SmolPotatoes",
   "power": 182744249
  },
  {
   "server": 1274,
   "family": "MentalSpace",
   "power": 145224381
  },
  {
   "server": 1274,
   "family": "BioShock",
   "power": 135133257
  },
  {
   "server": 1274,
   "family": "ODYSSEY",
   "power": 133268034
  },
  {
   "server": 1274,
   "family": "pookie",
   "power": 127803202
  },
  {
   "server": 1275,
   "family": "Xeno",
   "power": 627467123
  },
  {
   "server": 1275,
   "family": "OrphicMoon",
   "power": 434092394
  },
  {
   "server": 1275,
   "family": "Xeno2",
   "power": 202433991
  },
  {
   "server": 1275,
   "family": "TheGarden",
   "power": 185629550
  },
  {
   "server": 1275,
   "family": "Shrooms",
   "power": 185373612
  },
  {
   "server": 1275,
   "family": "Coolcactus’s",
   "power": 174361819
  },
  {
   "server": 1275,
   "family": "BigBoys",
   "power": 161973866
  },
  {
   "server": 1275,
   "family": "hoj",
   "power": 130168447
  },
  {
   "server": 1275,
   "family": "RoseGold",
   "power": 114787483
  },
  {
   "server": 1275,
   "family": "Shmokerz420",
   "power": 94263426
  },
  {
   "server": 1276,
   "family": "MushInAss",
   "power": 460118621
  },
  {
   "server": 1276,
   "family": "Masters",
   "power": 452564898
  },
  {
   "server": 1276,
   "family": "TOXIC",
   "power": 227756069
  },
  {
   "server": 1276,
   "family": "Mycotyrants",
   "power": 224686481
  },
  {
   "server": 1276,
   "family": "Muzzshrooms",
   "power": 196252634
  },
  {
   "server": 1276,
   "family": "ShroomMonsoon",
   "power": 181199307
  },
  {
   "server": 1276,
   "family": "LGBTeam",
   "power": 181115683
  },
  {
   "server": 1276,
   "family": "Mexican",
   "power": 179453031
  },
  {
   "server": 1276,
   "family": "WheelieBins",
   "power": 161302100
  },
  {
   "server": 1276,
   "family": "Shrooms",
   "power": 157429559
  },
  {
   "server": 1277,
   "family": "Dumplings",
   "power": 626639422
  },
  {
   "server": 1277,
   "family": "Ghosts",
   "power": 273057591
  },
  {
   "server": 1277,
   "family": "Play4Fun",
   "power": 249892025
  },
  {
   "server": 1277,
   "family": "SpaceTrain",
   "power": 210399938
  },
  {
   "server": 1277,
   "family": "loltrip",
   "power": 187023799
  },
  {
   "server": 1277,
   "family": "Ashes_of_Eden",
   "power": 177407670
  },
  {
   "server": 1277,
   "family": "Mcgeeties",
   "power": 153287814
  },
  {
   "server": 1277,
   "family": "demons",
   "power": 152620979
  },
  {
   "server": 1277,
   "family": "Outcasts",
   "power": 137490582
  },
  {
   "server": 1277,
   "family": "Québec",
   "power": 115591483
  },
  {
   "server": 1278,
   "family": "ShadowGarden",
   "power": 594283323
  },
  {
   "server": 1278,
   "family": "ViolentStraws",
   "power": 431855378
  },
  {
   "server": 1278,
   "family": "Empire",
   "power": 318352368
  },
  {
   "server": 1278,
   "family": "FungusAmongUs",
   "power": 196593379
  },
  {
   "server": 1278,
   "family": "Family",
   "power": 186429019
  },
  {
   "server": 1278,
   "family": "Local_Losers",
   "power": 179270611
  },
  {
   "server": 1278,
   "family": "StrawHatCrew",
   "power": 162047881
  },
  {
   "server": 1278,
   "family": "enders666",
   "power": 155060377
  },
  {
   "server": 1278,
   "family": "Cordyceps",
   "power": 150964718
  },
  {
   "server": 1278,
   "family": "Arctic",
   "power": 87829685
  },
  {
   "server": 1279,
   "family": "FungalFreaks",
   "power": 637028986
  },
  {
   "server": 1279,
   "family": "Arise",
   "power": 488669020
  },
  {
   "server": 1279,
   "family": "MooShroom",
   "power": 205111142
  },
  {
   "server": 1279,
   "family": "nuhuh",
   "power": 185567832
  },
  {
   "server": 1279,
   "family": "CoffeeCrew",
   "power": 181931395
  },
  {
   "server": 1279,
   "family": "TheBois626",
   "power": 177403106
  },
  {
   "server": 1279,
   "family": "hunters",
   "power": 175776906
  },
  {
   "server": 1279,
   "family": "DivineMist",
   "power": 156931996
  },
  {
   "server": 1279,
   "family": "TheDemons",
   "power": 154097170
  },
  {
   "server": 1279,
   "family": "Clueless",
   "power": 151818982
  },
  {
   "server": 1280,
   "family": "Seraphim",
   "power": 543415245
  },
  {
   "server": 1280,
   "family": "LillysGarden",
   "power": 523787118
  },
  {
   "server": 1280,
   "family": "CheesyDegens",
   "power": 331996042
  },
  {
   "server": 1280,
   "family": "ChaoticOgres",
   "power": 211331336
  },
  {
   "server": 1280,
   "family": "ShroomShield",
   "power": 176205279
  },
  {
   "server": 1280,
   "family": "MoonShrooms",
   "power": 171980196
  },
  {
   "server": 1280,
   "family": "ShadowArmy",
   "power": 164507831
  },
  {
   "server": 1280,
   "family": "sololeveling",
   "power": 153064726
  },
  {
   "server": 1280,
   "family": "Mooshrooms",
   "power": 142307471
  },
  {
   "server": 1280,
   "family": "Limitless",
   "power": 140442550
  },
  {
   "server": 1281,
   "family": "ᵀᴴᴱKINGDOM",
   "power": 656291629
  },
  {
   "server": 1281,
   "family": "Fate",
   "power": 458979316
  },
  {
   "server": 1281,
   "family": "Cat",
   "power": 305328292
  },
  {
   "server": 1281,
   "family": "GODSOFWAR",
   "power": 231001870
  },
  {
   "server": 1281,
   "family": "DeathBringers",
   "power": 224008208
  },
  {
   "server": 1281,
   "family": "Immortals",
   "power": 222050495
  },
  {
   "server": 1281,
   "family": "Shadow",
   "power": 219116361
  },
  {
   "server": 1281,
   "family": "Umbra",
   "power": 178462364
  },
  {
   "server": 1281,
   "family": "BuDdIeS",
   "power": 177800450
  },
  {
   "server": 1281,
   "family": "Lawless",
   "power": 160334447
  },
  {
   "server": 1282,
   "family": "MoshiMushie",
   "power": 538456916
  },
  {
   "server": 1282,
   "family": "LegendaryFew",
   "power": 537225720
  },
  {
   "server": 1282,
   "family": "Shroomify",
   "power": 322385117
  },
  {
   "server": 1282,
   "family": "HouseAtreides",
   "power": 193910517
  },
  {
   "server": 1282,
   "family": "Jwavy999",
   "power": 187769633
  },
  {
   "server": 1282,
   "family": "ShroomFarm",
   "power": 141686052
  },
  {
   "server": 1282,
   "family": "NƏCRØPHÏLÏªCS",
   "power": 134231391
  },
  {
   "server": 1282,
   "family": "constantinefan",
   "power": 127826068
  },
  {
   "server": 1282,
   "family": "StrawHats",
   "power": 113923511
  },
  {
   "server": 1282,
   "family": "HolyShitake",
   "power": 107373585
  },
  {
   "server": 1283,
   "family": "MatchaMush",
   "power": 415408590
  },
  {
   "server": 1283,
   "family": "SuperFungus",
   "power": 272313337
  },
  {
   "server": 1283,
   "family": "Holy_Shiitake",
   "power": 230888800
  },
  {
   "server": 1283,
   "family": "SporeForceOne",
   "power": 228078064
  },
  {
   "server": 1283,
   "family": "Cheekies",
   "power": 203471656
  },
  {
   "server": 1283,
   "family": "Darkmoons",
   "power": 192576329
  },
  {
   "server": 1283,
   "family": "reaper",
   "power": 182020030
  },
  {
   "server": 1283,
   "family": "BigTips",
   "power": 167640074
  },
  {
   "server": 1283,
   "family": "Sonic",
   "power": 167351967
  },
  {
   "server": 1283,
   "family": "OnlyGoats",
   "power": 166904817
  },
  {
   "server": 1284,
   "family": "Cynefin",
   "power": 478424068
  },
  {
   "server": 1284,
   "family": "Veritas",
   "power": 391227459
  },
  {
   "server": 1284,
   "family": "Zaza",
   "power": 228031792
  },
  {
   "server": 1284,
   "family": "Stonetopia",
   "power": 198452847
  },
  {
   "server": 1284,
   "family": "xD",
   "power": 175328400
  },
  {
   "server": 1284,
   "family": "GodSquad",
   "power": 154179961
  },
  {
   "server": 1284,
   "family": "RoyalBeeings",
   "power": 135470667
  },
  {
   "server": 1284,
   "family": "TheSpooders",
   "power": 130209311
  },
  {
   "server": 1284,
   "family": "Faisoif",
   "power": 120779743
  },
  {
   "server": 1284,
   "family": "Chicken_Coop",
   "power": 118819643
  },
  {
   "server": 1285,
   "family": "TheMushroomTip",
   "power": 473829073
  },
  {
   "server": 1285,
   "family": "TubMafia",
   "power": 237384570
  },
  {
   "server": 1285,
   "family": "TheGasChamber",
   "power": 215814526
  },
  {
   "server": 1285,
   "family": "Berserk",
   "power": 159412795
  },
  {
   "server": 1285,
   "family": "supernatural",
   "power": 155886122
  },
  {
   "server": 1285,
   "family": "Theshroomcourt",
   "power": 153967710
  },
  {
   "server": 1285,
   "family": "Nightrulers",
   "power": 146826310
  },
  {
   "server": 1285,
   "family": "Champions",
   "power": 144090054
  },
  {
   "server": 1285,
   "family": "Eclipse",
   "power": 116664323
  },
  {
   "server": 1285,
   "family": "vanilly",
   "power": 74911815
  },
  {
   "server": 1286,
   "family": "DoomShrooms",
   "power": 552209783
  },
  {
   "server": 1286,
   "family": "HouseOfDragon",
   "power": 356659211
  },
  {
   "server": 1286,
   "family": "Alliance",
   "power": 241288887
  },
  {
   "server": 1286,
   "family": "Apex",
   "power": 230568469
  },
  {
   "server": 1286,
   "family": "MagicMushroom",
   "power": 189637032
  },
  {
   "server": 1286,
   "family": "KINGOFKINGS",
   "power": 165090779
  },
  {
   "server": 1286,
   "family": "Forbid",
   "power": 154969318
  },
  {
   "server": 1286,
   "family": "magnatas",
   "power": 134805163
  },
  {
   "server": 1286,
   "family": "shroomdemonium",
   "power": 132953919
  },
  {
   "server": 1286,
   "family": "shrooms",
   "power": 131312094
  },
  {
   "server": 1287,
   "family": "Arise",
   "power": 528493935
  },
  {
   "server": 1287,
   "family": "ArcadiaKnights",
   "power": 422315886
  },
  {
   "server": 1287,
   "family": "StonerKlub",
   "power": 257439973
  },
  {
   "server": 1287,
   "family": "DankNation",
   "power": 233042749
  },
  {
   "server": 1287,
   "family": "SniperGang",
   "power": 195789970
  },
  {
   "server": 1287,
   "family": "Vigilantes",
   "power": 152351932
  },
  {
   "server": 1287,
   "family": "GigaMonarchy",
   "power": 147538461
  },
  {
   "server": 1287,
   "family": "Wieners",
   "power": 133849552
  },
  {
   "server": 1287,
   "family": "Taco",
   "power": 125315834
  },
  {
   "server": 1287,
   "family": "Koolkidsklan",
   "power": 118158256
  },
  {
   "server": 1288,
   "family": "CHAMPIONS",
   "power": 596580141
  },
  {
   "server": 1288,
   "family": "CHAMPS2",
   "power": 327566065
  },
  {
   "server": 1288,
   "family": "GardenFungus",
   "power": 226670399
  },
  {
   "server": 1288,
   "family": "Illustrious",
   "power": 187168747
  },
  {
   "server": 1288,
   "family": "DenverREC",
   "power": 177464073
  },
  {
   "server": 1288,
   "family": "Mob",
   "power": 173266488
  },
  {
   "server": 1288,
   "family": "Stonedcold",
   "power": 154098897
  },
  {
   "server": 1288,
   "family": "budzeiros",
   "power": 142823318
  },
  {
   "server": 1288,
   "family": "PlagueDoctors",
   "power": 134302199
  },
  {
   "server": 1288,
   "family": "N1c",
   "power": 126924721
  },
  {
   "server": 1289,
   "family": "ShadowFist",
   "power": 529106424
  },
  {
   "server": 1289,
   "family": "ChaoticOrder",
   "power": 203612560
  },
  {
   "server": 1289,
   "family": "DragonSlayer",
   "power": 195761174
  },
  {
   "server": 1289,
   "family": "Valhalla",
   "power": 192002287
  },
  {
   "server": 1289,
   "family": "WeAreFarmers",
   "power": 174626165
  },
  {
   "server": 1289,
   "family": "ChaoticSlayers",
   "power": 163964594
  },
  {
   "server": 1289,
   "family": "naZguL",
   "power": 159518937
  },
  {
   "server": 1289,
   "family": "ThePack",
   "power": 151691264
  },
  {
   "server": 1289,
   "family": "Gerbur",
   "power": 146459488
  },
  {
   "server": 1289,
   "family": "BootyMunchers",
   "power": 121726787
  },
  {
   "server": 1290,
   "family": "FreakShrooms",
   "power": 518051790
  },
  {
   "server": 1290,
   "family": "Moola",
   "power": 367355965
  },
  {
   "server": 1290,
   "family": "ESPADA",
   "power": 305375625
  },
  {
   "server": 1290,
   "family": "Reapers",
   "power": 227974938
  },
  {
   "server": 1290,
   "family": "Inizio",
   "power": 168168249
  },
  {
   "server": 1290,
   "family": "MortalCombat",
   "power": 151619430
  },
  {
   "server": 1290,
   "family": "Clowns",
   "power": 143967636
  },
  {
   "server": 1290,
   "family": "Mushrooms",
   "power": 136769478
  },
  {
   "server": 1290,
   "family": "SocialAnxiety",
   "power": 131827266
  },
  {
   "server": 1290,
   "family": "Eclipse",
   "power": 123294830
  },
  {
   "server": 1291,
   "family": "Immortals",
   "power": 418333936
  },
  {
   "server": 1291,
   "family": "Shittalkies",
   "power": 335170343
  },
  {
   "server": 1291,
   "family": "RIZZOPOLY",
   "power": 235257952
  },
  {
   "server": 1291,
   "family": "SoulSociety",
   "power": 179321282
  },
  {
   "server": 1291,
   "family": "ELITE",
   "power": 159424372
  },
  {
   "server": 1291,
   "family": "Brakilaz",
   "power": 152477070
  },
  {
   "server": 1291,
   "family": "Purgatory",
   "power": 137214616
  },
  {
   "server": 1291,
   "family": "THEREINTHEWOOD",
   "power": 131146718
  },
  {
   "server": 1291,
   "family": "Phoenix420",
   "power": 124472003
  },
  {
   "server": 1291,
   "family": "Hunter",
   "power": 119410223
  },
  {
   "server": 1292,
   "family": "HellDivers",
   "power": 359843482
  },
  {
   "server": 1292,
   "family": "AllStars",
   "power": 314501464
  },
  {
   "server": 1292,
   "family": "MUSHSUPREMACY",
   "power": 211372369
  },
  {
   "server": 1292,
   "family": "Phoenix_Down",
   "power": 205984857
  },
  {
   "server": 1292,
   "family": "Nilderwess",
   "power": 163194288
  },
  {
   "server": 1292,
   "family": "Misfits",
   "power": 147514493
  },
  {
   "server": 1292,
   "family": "crank40s",
   "power": 135452964
  },
  {
   "server": 1292,
   "family": "BakedLettuce",
   "power": 126463578
  },
  {
   "server": 1292,
   "family": "Catchaos",
   "power": 120489795
  },
  {
   "server": 1292,
   "family": "Shatter",
   "power": 120400757
  },
  {
   "server": 1293,
   "family": "Eternal",
   "power": 439929034
  },
  {
   "server": 1293,
   "family": "Ares",
   "power": 292182799
  },
  {
   "server": 1293,
   "family": "Avirus",
   "power": 171578304
  },
  {
   "server": 1293,
   "family": "onePiece",
   "power": 147255999
  },
  {
   "server": 1293,
   "family": "Koolkidsklub",
   "power": 139706139
  },
  {
   "server": 1293,
   "family": "Wieners",
   "power": 138899579
  },
  {
   "server": 1293,
   "family": "ShroomKNGDM",
   "power": 138222830
  },
  {
   "server": 1293,
   "family": "Shroomengers",
   "power": 131681482
  },
  {
   "server": 1293,
   "family": "haters",
   "power": 125530198
  },
  {
   "server": 1293,
   "family": "Shroomies",
   "power": 116213432
  },
  {
   "server": 1294,
   "family": "TwoThieves",
   "power": 451477461
  },
  {
   "server": 1294,
   "family": "Divinity",
   "power": 423904807
  },
  {
   "server": 1294,
   "family": "WhiteLotus",
   "power": 189789613
  },
  {
   "server": 1294,
   "family": "TheLampRubbers",
   "power": 158980970
  },
  {
   "server": 1294,
   "family": "Gremlins",
   "power": 131407309
  },
  {
   "server": 1294,
   "family": "ShroomArmy",
   "power": 125042824
  },
  {
   "server": 1294,
   "family": "珠莠术",
   "power": 118199287
  },
  {
   "server": 1294,
   "family": "People",
   "power": 117920289
  },
  {
   "server": 1294,
   "family": "Shroomkingdom",
   "power": 115384251
  },
  {
   "server": 1294,
   "family": "Villian",
   "power": 103940041
  },
  {
   "server": 1295,
   "family": "MunchEmpire",
   "power": 450800806
  },
  {
   "server": 1295,
   "family": "FungusAmongUs",
   "power": 159434766
  },
  {
   "server": 1295,
   "family": "Shroomsters",
   "power": 158257742
  },
  {
   "server": 1295,
   "family": "mushrooms",
   "power": 142061324
  },
  {
   "server": 1295,
   "family": "HellDivers",
   "power": 135925628
  },
  {
   "server": 1295,
   "family": "BloodLegacy",
   "power": 130095847
  },
  {
   "server": 1295,
   "family": "Strongwolf",
   "power": 125954840
  },
  {
   "server": 1295,
   "family": "NEWBIE",
   "power": 120261199
  },
  {
   "server": 1295,
   "family": "Psilocybin",
   "power": 118088817
  },
  {
   "server": 1295,
   "family": "ₘycₑₗᵢᵤₘ",
   "power": 111599639
  },
  {
   "server": 1296,
   "family": "bloodhoney",
   "power": 415881781
  },
  {
   "server": 1296,
   "family": "ShroomLand",
   "power": 225798162
  },
  {
   "server": 1296,
   "family": "Starfall",
   "power": 180385158
  },
  {
   "server": 1296,
   "family": "PowerShroom",
   "power": 163957760
  },
  {
   "server": 1296,
   "family": "BlueCaps",
   "power": 158111156
  },
  {
   "server": 1296,
   "family": "we_are_men",
   "power": 118955366
  },
  {
   "server": 1296,
   "family": "sololeveling",
   "power": 111118116
  },
  {
   "server": 1296,
   "family": "Checkmate",
   "power": 99041984
  },
  {
   "server": 1296,
   "family": "Meep",
   "power": 98999856
  },
  {
   "server": 1296,
   "family": "kightsofmush",
   "power": 98938383
  },
  {
   "server": 1297,
   "family": "ShadowMonarch",
   "power": 395230186
  },
  {
   "server": 1297,
   "family": "TheForest",
   "power": 251056863
  },
  {
   "server": 1297,
   "family": "RedLotus",
   "power": 150976266
  },
  {
   "server": 1297,
   "family": "DSM",
   "power": 133244629
  },
  {
   "server": 1297,
   "family": "AsgardÆ",
   "power": 116164697
  },
  {
   "server": 1297,
   "family": "MoB",
   "power": 106183287
  },
  {
   "server": 1297,
   "family": "GODS",
   "power": 101498367
  },
  {
   "server": 1297,
   "family": "HiddenLeaf",
   "power": 101302978
  },
  {
   "server": 1297,
   "family": "Theriley",
   "power": 95954416
  },
  {
   "server": 1297,
   "family": "Türkiye",
   "power": 90410999
  },
  {
   "server": 1298,
   "family": "MoonLight",
   "power": 353506967
  },
  {
   "server": 1298,
   "family": "OriginalSins",
   "power": 306304990
  },
  {
   "server": 1298,
   "family": "WallyWorld",
   "power": 141037748
  },
  {
   "server": 1298,
   "family": "FunGuys",
   "power": 125779786
  },
  {
   "server": 1298,
   "family": "Akatsuki°W",
   "power": 105764351
  },
  {
   "server": 1298,
   "family": "Minty",
   "power": 105008572
  },
  {
   "server": 1298,
   "family": "Crystic",
   "power": 100071041
  },
  {
   "server": 1298,
   "family": "xXxstarmoonxXx",
   "power": 98711252
  },
  {
   "server": 1298,
   "family": "TROPA_ELITE",
   "power": 97082684
  },
  {
   "server": 1298,
   "family": "NSFW",
   "power": 96672557
  },
  {
   "server": 1299,
   "family": "Embrace",
   "power": 410348543
  },
  {
   "server": 1299,
   "family": "GodClan",
   "power": 229558777
  },
  {
   "server": 1299,
   "family": "Obsidian",
   "power": 183981505
  },
  {
   "server": 1299,
   "family": "wewinlosers",
   "power": 115936406
  },
  {
   "server": 1299,
   "family": "balancebreaker",
   "power": 99011461
  },
  {
   "server": 1299,
   "family": "ColdPhalanges",
   "power": 96136267
  },
  {
   "server": 1299,
   "family": "Underbelly",
   "power": 91780808
  },
  {
   "server": 1299,
   "family": "letgooo",
   "power": 85903593
  },
  {
   "server": 1299,
   "family": "Lifestyle",
   "power": 81677504
  },
  {
   "server": 1299,
   "family": "RebelWolves",
   "power": 70538416
  },
  {
   "server": 1300,
   "family": "Shroomin",
   "power": 342158920
  },
  {
   "server": 1300,
   "family": "SHROOMERS",
   "power": 150310312
  },
  {
   "server": 1300,
   "family": "Sakeshroom",
   "power": 148906064
  },
  {
   "server": 1300,
   "family": "bored",
   "power": 135029585
  },
  {
   "server": 1300,
   "family": "GUILDLESS",
   "power": 134202504
  },
  {
   "server": 1300,
   "family": "GHOSTFACE",
   "power": 112036200
  },
  {
   "server": 1300,
   "family": "Reverie",
   "power": 108075164
  },
  {
   "server": 1300,
   "family": "POWA",
   "power": 96830296
  },
  {
   "server": 1300,
   "family": "Ghost",
   "power": 96696561
  },
  {
   "server": 1300,
   "family": "DeviousOnes",
   "power": 80389302
  },
  {
   "server": 1301,
   "family": "Arise",
   "power": 284178269
  },
  {
   "server": 1301,
   "family": "Moist",
   "power": 213967009
  },
  {
   "server": 1301,
   "family": "BUFFSHROOMS",
   "power": 162079597
  },
  {
   "server": 1301,
   "family": "Eternal",
   "power": 140310905
  },
  {
   "server": 1301,
   "family": "Lemonwing",
   "power": 138053277
  },
  {
   "server": 1301,
   "family": "Akatsuki",
   "power": 116504942
  },
  {
   "server": 1301,
   "family": "Atlantis",
   "power": 116229566
  },
  {
   "server": 1301,
   "family": "VikingPrevails",
   "power": 109371623
  },
  {
   "server": 1301,
   "family": "Mushkingdom",
   "power": 107665152
  },
  {
   "server": 1301,
   "family": "PoisonShrooms",
   "power": 99140032
  },
  {
   "server": 1302,
   "family": "EternalBW",
   "power": 359314884
  },
  {
   "server": 1302,
   "family": "TokyoManjiGang",
   "power": 146437640
  },
  {
   "server": 1302,
   "family": "Alcateia",
   "power": 109553304
  },
  {
   "server": 1302,
   "family": "Deathking",
   "power": 104579232
  },
  {
   "server": 1302,
   "family": "0verlordz",
   "power": 95553082
  },
  {
   "server": 1302,
   "family": "Tips",
   "power": 92462739
  },
  {
   "server": 1302,
   "family": "SubZero",
   "power": 87222226
  },
  {
   "server": 1302,
   "family": "AtomicShrooms",
   "power": 84823280
  },
  {
   "server": 1302,
   "family": "ReLegacy",
   "power": 82739483
  },
  {
   "server": 1302,
   "family": "MEGAZORD",
   "power": 76741803
  },
  {
   "server": 1303,
   "family": "Cool_Kats",
   "power": 328392440
  },
  {
   "server": 1303,
   "family": "DeusVult",
   "power": 145615314
  },
  {
   "server": 1303,
   "family": "FunGuys",
   "power": 119548518
  },
  {
   "server": 1303,
   "family": "OdanEmpire",
   "power": 107075155
  },
  {
   "server": 1303,
   "family": "Mycelium",
   "power": 93168256
  },
  {
   "server": 1303,
   "family": "Walkingdead",
   "power": 89339115
  },
  {
   "server": 1303,
   "family": "Ashy",
   "power": 87775642
  },
  {
   "server": 1303,
   "family": "EqùallyBād",
   "power": 80513420
  },
  {
   "server": 1303,
   "family": "CursedFamily",
   "power": 79994593
  },
  {
   "server": 1303,
   "family": "Pikachu",
   "power": 74958483
  },
  {
   "server": 1304,
   "family": "Void",
   "power": 229041487
  },
  {
   "server": 1304,
   "family": "TheMovingCstle",
   "power": 198804836
  },
  {
   "server": 1304,
   "family": "Theloonybin",
   "power": 185997523
  },
  {
   "server": 1304,
   "family": "TheStrawHats",
   "power": 80089849
  },
  {
   "server": 1304,
   "family": "Death",
   "power": 79405597
  },
  {
   "server": 1304,
   "family": "MushyBois",
   "power": 78836789
  },
  {
   "server": 1304,
   "family": "DoomShroom",
   "power": 76681023
  },
  {
   "server": 1304,
   "family": "GoldenHope",
   "power": 74971395
  },
  {
   "server": 1304,
   "family": "Shroomz",
   "power": 72787344
  },
  {
   "server": 1304,
   "family": "DGK",
   "power": 68693037
  },
  {
   "server": 1305,
   "family": "Predators",
   "power": 210838671
  },
  {
   "server": 1305,
   "family": "RN_United",
   "power": 132498963
  },
  {
   "server": 1305,
   "family": "EmberFall",
   "power": 118808565
  },
  {
   "server": 1305,
   "family": "Shroomie",
   "power": 100386547
  },
  {
   "server": 1305,
   "family": "familiaMdZ",
   "power": 83273627
  },
  {
   "server": 1305,
   "family": "DarkAngels",
   "power": 78780385
  },
  {
   "server": 1305,
   "family": "StrixShroomies",
   "power": 74079228
  },
  {
   "server": 1305,
   "family": "WolfDen",
   "power": 70930088
  },
  {
   "server": 1305,
   "family": "HELL",
   "power": 66905296
  },
  {
   "server": 1305,
   "family": "thesigna",
   "power": 57062260
  },
  {
   "server": 1306,
   "family": "TrippingBalls",
   "power": 197858023
  },
  {
   "server": 1306,
   "family": "Purgatory",
   "power": 152677243
  },
  {
   "server": 1306,
   "family": "section8",
   "power": 74905288
  },
  {
   "server": 1306,
   "family": "Legends",
   "power": 71721849
  },
  {
   "server": 1306,
   "family": "Ryujin",
   "power": 65588066
  },
  {
   "server": 1306,
   "family": "Ritzs",
   "power": 64008658
  },
  {
   "server": 1306,
   "family": "Canadaeh",
   "power": 62824161
  },
  {
   "server": 1306,
   "family": "Psychedelic",
   "power": 62533948
  },
  {
   "server": 1306,
   "family": "INSTANTDEATH",
   "power": 58249673
  },
  {
   "server": 1306,
   "family": "Whoville",
   "power": 52743434
  },
  {
   "server": 1307,
   "family": "RoyalShrooms",
   "power": 141340123
  },
  {
   "server": 1307,
   "family": "Fortitude",
   "power": 121724555
  },
  {
   "server": 1307,
   "family": "SilverMoon",
   "power": 94068437
  },
  {
   "server": 1307,
   "family": "Olympus",
   "power": 54761409
  },
  {
   "server": 1307,
   "family": "SlimeFamily",
   "power": 54210834
  },
  {
   "server": 1307,
   "family": "Paradox",
   "power": 53975372
  },
  {
   "server": 1307,
   "family": "Depressed",
   "power": 51940835
  },
  {
   "server": 1307,
   "family": "Fadeout",
   "power": 51227777
  },
  {
   "server": 1307,
   "family": "ShroomRejectz",
   "power": 50591328
  },
  {
   "server": 1307,
   "family": "WompWomp",
   "power": 45870029
  },
  {
   "server": 1308,
   "family": "Shrooms",
   "power": 133985188
  },
  {
   "server": 1308,
   "family": "Moth",
   "power": 63894695
  },
  {
   "server": 1308,
   "family": "Neverwinter",
   "power": 63609874
  },
  {
   "server": 1308,
   "family": "KiNGS",
   "power": 59290305
  },
  {
   "server": 1308,
   "family": "Legends",
   "power": 57720428
  },
  {
   "server": 1308,
   "family": "HellDivers",
   "power": 57185440
  },
  {
   "server": 1308,
   "family": "BNRS",
   "power": 56755954
  },
  {
   "server": 1308,
   "family": "USA",
   "power": 55287301
  },
  {
   "server": 1308,
   "family": "stonerbros",
   "power": 54247190
  },
  {
   "server": 1308,
   "family": "femboys",
   "power": 47222151
  },
  {
   "server": 1309,
   "family": "Valencia",
   "power": 90312208
  },
  {
   "server": 1309,
   "family": "Southpark",
   "power": 74589370
  },
  {
   "server": 1309,
   "family": "ShroomSquad",
   "power": 68550723
  },
  {
   "server": 1309,
   "family": "CrispyGang2",
   "power": 56493007
  },
  {
   "server": 1309,
   "family": "ApexShroomies",
   "power": 53306494
  },
  {
   "server": 1309,
   "family": "Justbored",
   "power": 52477982
  },
  {
   "server": 1309,
   "family": "BlackRose",
   "power": 48714894
  },
  {
   "server": 1309,
   "family": "Apocalipse",
   "power": 44689727
  },
  {
   "server": 1309,
   "family": "just4fun",
   "power": 42581633
  },
  {
   "server": 1309,
   "family": "SerpentsBallad",
   "power": 36970769
  },
  {
   "server": 1310,
   "family": "Karuteru",
   "power": 76136208
  },
  {
   "server": 1310,
   "family": "JENOVA",
   "power": 67780688
  },
  {
   "server": 1310,
   "family": "StrawHats",
   "power": 48110451
  },
  {
   "server": 1310,
   "family": "AUXILIARY",
   "power": 42322618
  },
  {
   "server": 1310,
   "family": "Eternal",
   "power": 40915795
  },
  {
   "server": 1310,
   "family": "Sanctum",
   "power": 37120028
  },
  {
   "server": 1310,
   "family": "ShroomGang",
   "power": 34392043
  },
  {
   "server": 1310,
   "family": "DarkWraiths",
   "power": 34320426
  },
  {
   "server": 1310,
   "family": "Devotion",
   "power": 33884516
  },
  {
   "server": 1310,
   "family": "ButtPirates",
   "power": 30685494
  },
  {
   "server": 1311,
   "family": "Purgatory",
   "power": 75858493
  },
  {
   "server": 1311,
   "family": "Foundation",
   "power": 45757057
  },
  {
   "server": 1311,
   "family": "ShroomiePros",
   "power": 38951311
  },
  {
   "server": 1311,
   "family": "SoloLevelers",
   "power": 35260341
  },
  {
   "server": 1311,
   "family": "Xclusive",
   "power": 33576358
  },
  {
   "server": 1311,
   "family": "DeathAngels",
   "power": 32689348
  },
  {
   "server": 1311,
   "family": "Sharkman",
   "power": 32167715
  },
  {
   "server": 1311,
   "family": "yolo",
   "power": 31151151
  },
  {
   "server": 1311,
   "family": "Hahahahahahaha",
   "power": 25840252
  },
  {
   "server": 1311,
   "family": "RedDawnSqaud",
   "power": 16002953
  },
  {
   "server": 1312,
   "family": "Shiitake",
   "power": 51322370
  },
  {
   "server": 1312,
   "family": "Misfits",
   "power": 49173834
  },
  {
   "server": 1312,
   "family": "420lanez",
   "power": 38871436
  },
  {
   "server": 1312,
   "family": "Caffeine",
   "power": 38029717
  },
  {
   "server": 1312,
   "family": "1Cent",
   "power": 30691484
  },
  {
   "server": 1312,
   "family": "crusaders",
   "power": 29661054
  },
  {
   "server": 1312,
   "family": "GetB8kd",
   "power": 26525092
  },
  {
   "server": 1312,
   "family": "RedOrder",
   "power": 24994369
  },
  {
   "server": 1312,
   "family": "Psilocybin",
   "power": 24741376
  },
  {
   "server": 1312,
   "family": "Rebels",
   "power": 24291284
  },
  {
   "server": 1313,
   "family": "Infamous",
   "power": 41187274
  },
  {
   "server": 1313,
   "family": "HomiesUnited",
   "power": 35937803
  },
  {
   "server": 1313,
   "family": "Idol",
   "power": 31972619
  },
  {
   "server": 1313,
   "family": "FurBabies",
   "power": 29941937
  },
  {
   "server": 1313,
   "family": "Supertroopers",
   "power": 29436276
  },
  {
   "server": 1313,
   "family": "DEEZ",
   "power": 27562604
  },
  {
   "server": 1313,
   "family": "Legion",
   "power": 26836011
  },
  {
   "server": 1313,
   "family": "R6discord",
   "power": 26807491
  },
  {
   "server": 1313,
   "family": "Wargoth",
   "power": 10566352
  },
  {
   "server": 1313,
   "family": "BRASIL",
   "power": 7756904
  },
  {
   "server": 6001,
   "family": "LosXivatos",
   "power": 1254855580
  },
  {
   "server": 6001,
   "family": "AKATSUKI",
   "power": 1253563293
  },
  {
   "server": 6001,
   "family": "Zoológico",
   "power": 1201486756
  },
  {
   "server": 6001,
   "family": "AlienLegion",
   "power": 1136128425
  },
  {
   "server": 6001,
   "family": "Hispania",
   "power": 645857696
  },
  {
   "server": 6001,
   "family": "TopEspañoles",
   "power": 594740334
  },
  {
   "server": 6001,
   "family": "ChampHub",
   "power": 558989085
  },
  {
   "server": 6001,
   "family": "Madrid",
   "power": 510070192
  },
  {
   "server": 6001,
   "family": "JadiraEnjoyers",
   "power": 429489190
  },
  {
   "server": 6001,
   "family": "JUSTICE",
   "power": 391457662
  },
  {
   "server": 6002,
   "family": "Radiance",
   "power": 1766218109
  },
  {
   "server": 6002,
   "family": "Hispanos",
   "power": 1163402686
  },
  {
   "server": 6002,
   "family": "Vortex",
   "power": 1137088231
  },
  {
   "server": 6002,
   "family": "DarkGaliza",
   "power": 1131752058
  },
  {
   "server": 6002,
   "family": "Wz",
   "power": 1104434266
  },
  {
   "server": 6002,
   "family": "GODS",
   "power": 446821052
  },
  {
   "server": 6002,
   "family": "Asgard",
   "power": 375691222
  },
  {
   "server": 6002,
   "family": "ImperioEspañol",
   "power": 362341785
  },
  {
   "server": 6002,
   "family": "BoletusLegion",
   "power": 355969360
  },
  {
   "server": 6002,
   "family": "SpainWarriors",
   "power": 353964367
  },
  {
   "server": 6003,
   "family": "legends",
   "power": 1387750188
  },
  {
   "server": 6003,
   "family": "TeemoQuest",
   "power": 876888151
  },
  {
   "server": 6003,
   "family": "EspañaBbroja",
   "power": 786980742
  },
  {
   "server": 6003,
   "family": "GamerQuest2",
   "power": 557960973
  },
  {
   "server": 6003,
   "family": "BARBAAZUL",
   "power": 472271848
  },
  {
   "server": 6003,
   "family": "España",
   "power": 306988405
  },
  {
   "server": 6003,
   "family": "ChachasFumonas",
   "power": 296920538
  },
  {
   "server": 6003,
   "family": "Legendarios",
   "power": 230786360
  },
  {
   "server": 6003,
   "family": "Andalucía",
   "power": 204272312
  },
  {
   "server": 6003,
   "family": "honguitosfull",
   "power": 202849005
  },
  {
   "server": 6004,
   "family": "Destroyers",
   "power": 1348624611
  },
  {
   "server": 6004,
   "family": "Overlords",
   "power": 1329793241
  },
  {
   "server": 6004,
   "family": "DarkPhoenix",
   "power": 739337970
  },
  {
   "server": 6004,
   "family": "SpainCity",
   "power": 630206146
  },
  {
   "server": 6004,
   "family": "ESPAÑA",
   "power": 469763498
  },
  {
   "server": 6004,
   "family": "TopSpain",
   "power": 462019514
  },
  {
   "server": 6004,
   "family": "Valhalla",
   "power": 461483891
  },
  {
   "server": 6004,
   "family": "OLYMPUS",
   "power": 370616248
  },
  {
   "server": 6004,
   "family": "Pumarin",
   "power": 331884243
  },
  {
   "server": 6004,
   "family": "FUERAMOROS",
   "power": 300511420
  },
  {
   "server": 6005,
   "family": "EsPaÑa",
   "power": 323366838
  },
  {
   "server": 6005,
   "family": "espartacusEsp",
   "power": 241867808
  },
  {
   "server": 6005,
   "family": "Valhalla",
   "power": 238127213
  },
  {
   "server": 6005,
   "family": "Andalucía",
   "power": 212922566
  },
  {
   "server": 6005,
   "family": "Slayers",
   "power": 199906291
  },
  {
   "server": 6005,
   "family": "Heretics",
   "power": 136056351
  },
  {
   "server": 6005,
   "family": "legiónmaxumus",
   "power": 65951454
  },
  {
   "server": 6005,
   "family": "INDOMABLES",
   "power": 61694845
  },
  {
   "server": 6005,
   "family": "Navy",
   "power": 14647292
  },
  {
   "server": 6005,
   "family": "Inferno",
   "power": 9076472
  },
  {
   "server": 6006,
   "family": "LaMafia",
   "power": 1652508345
  },
  {
   "server": 6006,
   "family": "AMANECER",
   "power": 521125490
  },
  {
   "server": 6006,
   "family": "LaTaberna",
   "power": 486421927
  },
  {
   "server": 6006,
   "family": "Rebellion",
   "power": 347614407
  },
  {
   "server": 6006,
   "family": "España",
   "power": 262983149
  },
  {
   "server": 6006,
   "family": "Spain",
   "power": 242946496
  },
  {
   "server": 6006,
   "family": "BLADIMIR",
   "power": 174990668
  },
  {
   "server": 6006,
   "family": "Sakura",
   "power": 154895060
  },
  {
   "server": 6006,
   "family": "Arm",
   "power": 147729183
  },
  {
   "server": 6006,
   "family": "24M",
   "power": 3169103
  },
  {
   "server": 6007,
   "family": "×Mugiwaras×",
   "power": 1519854319
  },
  {
   "server": 6007,
   "family": "MushiKnights",
   "power": 1315714048
  },
  {
   "server": 6007,
   "family": "España",
   "power": 484552717
  },
  {
   "server": 6007,
   "family": "ARES",
   "power": 315645330
  },
  {
   "server": 6007,
   "family": "Illoamoajugah",
   "power": 259163109
  },
  {
   "server": 6007,
   "family": "SetasEspaña",
   "power": 240984234
  },
  {
   "server": 6007,
   "family": "MAGNERIDON",
   "power": 163852200
  },
  {
   "server": 6007,
   "family": "Xampileyends",
   "power": 137086670
  },
  {
   "server": 6007,
   "family": "FoxasForce",
   "power": 22129278
  },
  {
   "server": 6007,
   "family": "AncientOrigins",
   "power": 13604996
  },
  {
   "server": 6008,
   "family": "Angel_Of_Death",
   "power": 1527348255
  },
  {
   "server": 6008,
   "family": "Hispanos",
   "power": 1171733212
  },
  {
   "server": 6008,
   "family": "España",
   "power": 279107773
  },
  {
   "server": 6008,
   "family": "SunsetRavensES",
   "power": 239205030
  },
  {
   "server": 6008,
   "family": "EspañaLegends",
   "power": 238256158
  },
  {
   "server": 6008,
   "family": "Atomic",
   "power": 126435533
  },
  {
   "server": 6008,
   "family": "MÉXICO",
   "power": 52287102
  },
  {
   "server": 6008,
   "family": "Ivanova",
   "power": 11271465
  },
  {
   "server": 6008,
   "family": "INMORTALES",
   "power": 7671548
  },
  {
   "server": 6008,
   "family": "ClaseFormal",
   "power": 978651
  },
  {
   "server": 6009,
   "family": "ELITE",
   "power": 1511541069
  },
  {
   "server": 6009,
   "family": "ELITE_2",
   "power": 699143306
  },
  {
   "server": 6009,
   "family": "ESPAÑAGOD",
   "power": 356335954
  },
  {
   "server": 6009,
   "family": "Campiman",
   "power": 263884818
  },
  {
   "server": 6009,
   "family": "LEYENDAS",
   "power": 254123266
  },
  {
   "server": 6009,
   "family": "Champimon",
   "power": 164595678
  },
  {
   "server": 6009,
   "family": "Sololatinos",
   "power": 158663047
  },
  {
   "server": 6009,
   "family": "LatinGods",
   "power": 68676315
  },
  {
   "server": 6009,
   "family": "RAWR",
   "power": 46052466
  },
  {
   "server": 6009,
   "family": "alebije",
   "power": 4093342
  },
  {
   "server": 6010,
   "family": "Hunters",
   "power": 1308523405
  },
  {
   "server": 6010,
   "family": "ALPHA",
   "power": 776436921
  },
  {
   "server": 6010,
   "family": "Nyanshis",
   "power": 544784611
  },
  {
   "server": 6010,
   "family": "FoxXHoud",
   "power": 301955333
  },
  {
   "server": 6010,
   "family": "todospueden",
   "power": 191685235
  },
  {
   "server": 6010,
   "family": "FOLLADORES",
   "power": 136369577
  },
  {
   "server": 6010,
   "family": "Españaaaa",
   "power": 113518279
  },
  {
   "server": 6010,
   "family": "MushBloodSP",
   "power": 107427905
  },
  {
   "server": 6010,
   "family": "LatinosMx",
   "power": 88722549
  },
  {
   "server": 6010,
   "family": "DARK",
   "power": 59385347
  },
  {
   "server": 6011,
   "family": "CHAØS",
   "power": 930785643
  },
  {
   "server": 6011,
   "family": "Falkreath",
   "power": 654822946
  },
  {
   "server": 6011,
   "family": "HELIX",
   "power": 464417541
  },
  {
   "server": 6011,
   "family": "ZeroWings",
   "power": 231126674
  },
  {
   "server": 6011,
   "family": "DESERT",
   "power": 220382473
  },
  {
   "server": 6011,
   "family": "Barceloca",
   "power": 215559763
  },
  {
   "server": 6011,
   "family": "España",
   "power": 72872511
  },
  {
   "server": 6011,
   "family": "barcobasurero",
   "power": 72199853
  },
  {
   "server": 6011,
   "family": "Mugiwara",
   "power": 69553217
  },
  {
   "server": 6011,
   "family": "》ŔENEGADOS₩V₩《",
   "power": 42574639
  },
  {
   "server": 6012,
   "family": "Dulce_Reino",
   "power": 1235488968
  },
  {
   "server": 6012,
   "family": "RYŌIKI_TENKAI",
   "power": 888564856
  },
  {
   "server": 6012,
   "family": "CaídaDeAlbaz",
   "power": 303548560
  },
  {
   "server": 6012,
   "family": "DemonSlayer",
   "power": 285063717
  },
  {
   "server": 6012,
   "family": "Gnomos",
   "power": 189019982
  },
  {
   "server": 6012,
   "family": "Fairy_Tail",
   "power": 168521920
  },
  {
   "server": 6012,
   "family": "MushroomsOG",
   "power": 107185416
  },
  {
   "server": 6012,
   "family": "BlackMoon",
   "power": 57521372
  },
  {
   "server": 6012,
   "family": "Team_MORTALS",
   "power": 49396804
  },
  {
   "server": 6012,
   "family": "DEMONS",
   "power": 43700063
  },
  {
   "server": 6013,
   "family": "NoMercy",
   "power": 1188250312
  },
  {
   "server": 6013,
   "family": "ALONSISTAS",
   "power": 792316441
  },
  {
   "server": 6013,
   "family": "AKATSUKI",
   "power": 218349758
  },
  {
   "server": 6013,
   "family": "ALUCINÓGENOS",
   "power": 202895751
  },
  {
   "server": 6013,
   "family": "EsporaToxica",
   "power": 145379752
  },
  {
   "server": 6013,
   "family": "TheDragons",
   "power": 135391980
  },
  {
   "server": 6013,
   "family": "sayayines",
   "power": 125131326
  },
  {
   "server": 6013,
   "family": "Themewing",
   "power": 56427011
  },
  {
   "server": 6013,
   "family": "UCHIHA",
   "power": 54842310
  },
  {
   "server": 6013,
   "family": "Latinox",
   "power": 52271719
  },
  {
   "server": 6014,
   "family": "RealBetis",
   "power": 1150334659
  },
  {
   "server": 6014,
   "family": "Shadows",
   "power": 1063321295
  },
  {
   "server": 6014,
   "family": "ChampMasters",
   "power": 530734931
  },
  {
   "server": 6014,
   "family": "RuidoSpain",
   "power": 396311851
  },
  {
   "server": 6014,
   "family": "PUNKNOTDEAD",
   "power": 285657893
  },
  {
   "server": 6014,
   "family": "latinos",
   "power": 261640371
  },
  {
   "server": 6014,
   "family": "CANARIAS",
   "power": 206746094
  },
  {
   "server": 6014,
   "family": "BluffClan",
   "power": 203971829
  },
  {
   "server": 6014,
   "family": "Español",
   "power": 200544987
  },
  {
   "server": 6014,
   "family": "Championes",
   "power": 188141498
  },
  {
   "server": 6015,
   "family": "Hispanos",
   "power": 1354585751
  },
  {
   "server": 6015,
   "family": "Leviathan",
   "power": 1077675656
  },
  {
   "server": 6015,
   "family": "Españita",
   "power": 433265914
  },
  {
   "server": 6015,
   "family": "GLADIADORES",
   "power": 333355807
  },
  {
   "server": 6015,
   "family": "PAJA",
   "power": 329637135
  },
  {
   "server": 6015,
   "family": "España",
   "power": 302996734
  },
  {
   "server": 6015,
   "family": "TOADS",
   "power": 206512305
  },
  {
   "server": 6015,
   "family": "LosHongitos🤑",
   "power": 160533660
  },
  {
   "server": 6015,
   "family": "vikingsetas",
   "power": 138961090
  },
  {
   "server": 6015,
   "family": "Argentina",
   "power": 107240245
  },
  {
   "server": 6016,
   "family": "Españoles",
   "power": 1235331711
  },
  {
   "server": 6016,
   "family": "PERROSANCHE",
   "power": 474352476
  },
  {
   "server": 6016,
   "family": "Españolas",
   "power": 474207050
  },
  {
   "server": 6016,
   "family": "Dragon",
   "power": 311935186
  },
  {
   "server": 6016,
   "family": "©Ethernals",
   "power": 258559028
  },
  {
   "server": 6016,
   "family": "HISPANO",
   "power": 255615888
  },
  {
   "server": 6016,
   "family": "Champiñones",
   "power": 227115072
  },
  {
   "server": 6016,
   "family": "LaTiNoS",
   "power": 208930099
  },
  {
   "server": 6016,
   "family": "champi",
   "power": 176437781
  },
  {
   "server": 6016,
   "family": "champDIOS",
   "power": 172740657
  },
  {
   "server": 6017,
   "family": "SweeTDeatH",
   "power": 1333856524
  },
  {
   "server": 6017,
   "family": "TokyoManji",
   "power": 425382395
  },
  {
   "server": 6017,
   "family": "LATINOS",
   "power": 389676861
  },
  {
   "server": 6017,
   "family": "España",
   "power": 375027387
  },
  {
   "server": 6017,
   "family": "champihongos",
   "power": 359046521
  },
  {
   "server": 6017,
   "family": "Principes",
   "power": 255947807
  },
  {
   "server": 6017,
   "family": "yitos",
   "power": 229115444
  },
  {
   "server": 6017,
   "family": "Nido",
   "power": 180563820
  },
  {
   "server": 6017,
   "family": "Losrompetopos1",
   "power": 88532296
  },
  {
   "server": 6017,
   "family": "México",
   "power": 63877125
  },
  {
   "server": 6018,
   "family": "DISTRITO18",
   "power": 1147651397
  },
  {
   "server": 6018,
   "family": "INVICTUS",
   "power": 456637879
  },
  {
   "server": 6018,
   "family": "LEGENDS",
   "power": 404783944
  },
  {
   "server": 6018,
   "family": "VALHALLA",
   "power": 344672187
  },
  {
   "server": 6018,
   "family": "🤑DEAD",
   "power": 180463571
  },
  {
   "server": 6018,
   "family": "King_Champ",
   "power": 170963075
  },
  {
   "server": 6018,
   "family": "Viva_España",
   "power": 165325099
  },
  {
   "server": 6018,
   "family": "MushClan",
   "power": 136031967
  },
  {
   "server": 6018,
   "family": "SECTOR18",
   "power": 98708699
  },
  {
   "server": 6018,
   "family": "Killersss",
   "power": 91877291
  },
  {
   "server": 6019,
   "family": "SonsOfAnarchy",
   "power": 1124473046
  },
  {
   "server": 6019,
   "family": "OLIMPO",
   "power": 971854335
  },
  {
   "server": 6019,
   "family": "Akatsuki暁",
   "power": 322212772
  },
  {
   "server": 6019,
   "family": "Gordilones",
   "power": 269973989
  },
  {
   "server": 6019,
   "family": "EspañaHub",
   "power": 194711949
  },
  {
   "server": 6019,
   "family": "LATAM",
   "power": 177329400
  },
  {
   "server": 6019,
   "family": "Speedrunners",
   "power": 168909953
  },
  {
   "server": 6019,
   "family": "Mugiwaras",
   "power": 85196228
  },
  {
   "server": 6019,
   "family": "Ramenempire",
   "power": 78166510
  },
  {
   "server": 6019,
   "family": "StatusQu0",
   "power": 76267551
  },
  {
   "server": 6020,
   "family": "Musshu",
   "power": 1175659622
  },
  {
   "server": 6020,
   "family": "HispanosTop",
   "power": 1095446319
  },
  {
   "server": 6020,
   "family": "Gladorium",
   "power": 446857204
  },
  {
   "server": 6020,
   "family": "nineTOP",
   "power": 231254581
  },
  {
   "server": 6020,
   "family": "animeverse",
   "power": 186668198
  },
  {
   "server": 6020,
   "family": "Laycan",
   "power": 149192900
  },
  {
   "server": 6020,
   "family": "Sunshinne",
   "power": 147334426
  },
  {
   "server": 6020,
   "family": "sheeee",
   "power": 139776266
  },
  {
   "server": 6020,
   "family": "LOS_PIBES",
   "power": 91459686
  },
  {
   "server": 6020,
   "family": "aventureros",
   "power": 59917954
  },
  {
   "server": 6021,
   "family": "Olympus",
   "power": 1195760170
  },
  {
   "server": 6021,
   "family": "INFiNiTY",
   "power": 651766912
  },
  {
   "server": 6021,
   "family": "demonspanish",
   "power": 444299783
  },
  {
   "server": 6021,
   "family": "Ragnarok",
   "power": 300094261
  },
  {
   "server": 6021,
   "family": "Latinos",
   "power": 274656697
  },
  {
   "server": 6021,
   "family": "SenTineLs",
   "power": 260082189
  },
  {
   "server": 6021,
   "family": "SobaTetas",
   "power": 247861167
  },
  {
   "server": 6021,
   "family": "España",
   "power": 211310031
  },
  {
   "server": 6021,
   "family": "shadowlegacy",
   "power": 190625333
  },
  {
   "server": 6021,
   "family": "Barcelona",
   "power": 157897711
  },
  {
   "server": 6022,
   "family": "Aﬠєภgєгร",
   "power": 1478072900
  },
  {
   "server": 6022,
   "family": "WorldOlimpo",
   "power": 1135157302
  },
  {
   "server": 6022,
   "family": "Kil4TOR_CL4N",
   "power": 491756718
  },
  {
   "server": 6022,
   "family": "OrgXIII",
   "power": 303431263
  },
  {
   "server": 6022,
   "family": "VALINOR",
   "power": 243423775
  },
  {
   "server": 6022,
   "family": "ProClanX",
   "power": 236812697
  },
  {
   "server": 6022,
   "family": "VamoAJuga",
   "power": 228489275
  },
  {
   "server": 6022,
   "family": "pelones777",
   "power": 222613339
  },
  {
   "server": 6022,
   "family": "Los_hongos",
   "power": 203899424
  },
  {
   "server": 6022,
   "family": "Sakuratsu",
   "power": 203449164
  },
  {
   "server": 6023,
   "family": "TheOlympus",
   "power": 1329282084
  },
  {
   "server": 6023,
   "family": "resistencia",
   "power": 484663644
  },
  {
   "server": 6023,
   "family": "Alucinógenos",
   "power": 346301505
  },
  {
   "server": 6023,
   "family": "españoles",
   "power": 340853554
  },
  {
   "server": 6023,
   "family": "Simbióticos",
   "power": 319962791
  },
  {
   "server": 6023,
   "family": "GATUNO",
   "power": 249743314
  },
  {
   "server": 6023,
   "family": "GalaxyX",
   "power": 218434088
  },
  {
   "server": 6023,
   "family": "chiscuchampi",
   "power": 204875363
  },
  {
   "server": 6023,
   "family": "🥳PapuParty🥳",
   "power": 199967512
  },
  {
   "server": 6023,
   "family": "devastación",
   "power": 183351916
  },
  {
   "server": 6024,
   "family": "SecretSociety",
   "power": 1248175685
  },
  {
   "server": 6024,
   "family": "TU_KARMA",
   "power": 746529944
  },
  {
   "server": 6024,
   "family": "HoraDeAventura",
   "power": 713707824
  },
  {
   "server": 6024,
   "family": "España",
   "power": 288423528
  },
  {
   "server": 6024,
   "family": "LuckyFesst",
   "power": 256681228
  },
  {
   "server": 6024,
   "family": "CJNG",
   "power": 238064468
  },
  {
   "server": 6024,
   "family": "InsanoGuerrero",
   "power": 177113316
  },
  {
   "server": 6024,
   "family": "ANIQUILADORES",
   "power": 153790821
  },
  {
   "server": 6024,
   "family": "PAIN",
   "power": 139916946
  },
  {
   "server": 6024,
   "family": "LOS_SMURFCAT1",
   "power": 131265387
  },
  {
   "server": 6025,
   "family": "HC",
   "power": 1279792311
  },
  {
   "server": 6025,
   "family": "HC2",
   "power": 510992861
  },
  {
   "server": 6025,
   "family": "HonguitoMagico",
   "power": 343929672
  },
  {
   "server": 6025,
   "family": "AlmaMula",
   "power": 245797563
  },
  {
   "server": 6025,
   "family": "Terox",
   "power": 237452556
  },
  {
   "server": 6025,
   "family": "Olimpo",
   "power": 236480744
  },
  {
   "server": 6025,
   "family": "KTA4ALL",
   "power": 211402557
  },
  {
   "server": 6025,
   "family": "Esporas_Lambda",
   "power": 199363348
  },
  {
   "server": 6025,
   "family": "GALIZA",
   "power": 170168567
  },
  {
   "server": 6025,
   "family": "papas",
   "power": 154638023
  },
  {
   "server": 6026,
   "family": "AssasinsS",
   "power": 928548316
  },
  {
   "server": 6026,
   "family": "ImperioEspañol",
   "power": 775656613
  },
  {
   "server": 6026,
   "family": "PUYEYE",
   "power": 324827888
  },
  {
   "server": 6026,
   "family": "Latinos",
   "power": 286250015
  },
  {
   "server": 6026,
   "family": "MiClan",
   "power": 214577302
  },
  {
   "server": 6026,
   "family": "LIGA_CHAMPIÑON",
   "power": 208912537
  },
  {
   "server": 6026,
   "family": "LonguitoMagico",
   "power": 201555112
  },
  {
   "server": 6026,
   "family": "ESPAÑA",
   "power": 183409192
  },
  {
   "server": 6026,
   "family": "∆illuminati∆",
   "power": 182344442
  },
  {
   "server": 6026,
   "family": "facheritos",
   "power": 177952462
  },
  {
   "server": 6027,
   "family": "latinos",
   "power": 1295402240
  },
  {
   "server": 6027,
   "family": "REALEZA",
   "power": 854054035
  },
  {
   "server": 6027,
   "family": "Akatsuki",
   "power": 380749739
  },
  {
   "server": 6027,
   "family": "HalfLife",
   "power": 333639626
  },
  {
   "server": 6027,
   "family": "Champiteam",
   "power": 267504090
  },
  {
   "server": 6027,
   "family": "Nazarick",
   "power": 233240752
  },
  {
   "server": 6027,
   "family": "Champiclan",
   "power": 225390632
  },
  {
   "server": 6027,
   "family": "fino",
   "power": 152076066
  },
  {
   "server": 6027,
   "family": "Mercenarios",
   "power": 130245235
  },
  {
   "server": 6027,
   "family": "saquemen_latam",
   "power": 104664628
  },
  {
   "server": 6028,
   "family": "ReNeGa2",
   "power": 1357894705
  },
  {
   "server": 6028,
   "family": "Akatsuki",
   "power": 683695830
  },
  {
   "server": 6028,
   "family": "EspañaxLatam",
   "power": 372176965
  },
  {
   "server": 6028,
   "family": "ANDALUCIA",
   "power": 326546159
  },
  {
   "server": 6028,
   "family": "ESPARTINOS",
   "power": 300289220
  },
  {
   "server": 6028,
   "family": "LATAM",
   "power": 286975672
  },
  {
   "server": 6028,
   "family": "TeamArg",
   "power": 214183565
  },
  {
   "server": 6028,
   "family": "§ØMßRA§",
   "power": 209674691
  },
  {
   "server": 6028,
   "family": "ClanWarr",
   "power": 188153885
  },
  {
   "server": 6028,
   "family": "BERSERK",
   "power": 179559014
  },
  {
   "server": 6029,
   "family": "TOTI",
   "power": 1376914901
  },
  {
   "server": 6029,
   "family": "PSICODÉLICOS",
   "power": 554669747
  },
  {
   "server": 6029,
   "family": "Españita",
   "power": 246176964
  },
  {
   "server": 6029,
   "family": "TopSpain",
   "power": 211164674
  },
  {
   "server": 6029,
   "family": "Feliz",
   "power": 206905373
  },
  {
   "server": 6029,
   "family": "ViViDoReS",
   "power": 201864665
  },
  {
   "server": 6029,
   "family": "DeusExMushr00m",
   "power": 191617808
  },
  {
   "server": 6029,
   "family": "ESPARTANOS",
   "power": 185359268
  },
  {
   "server": 6029,
   "family": "DEMOLITION",
   "power": 177351702
  },
  {
   "server": 6029,
   "family": "“INMORTAL”",
   "power": 170728253
  },
  {
   "server": 6030,
   "family": "Resurrection",
   "power": 1237705711
  },
  {
   "server": 6030,
   "family": "NoobLegends",
   "power": 1175378459
  },
  {
   "server": 6030,
   "family": "MushroomCorp2",
   "power": 424090050
  },
  {
   "server": 6030,
   "family": "El_ChampiClan",
   "power": 402326623
  },
  {
   "server": 6030,
   "family": "fujin",
   "power": 223712135
  },
  {
   "server": 6030,
   "family": "Imperial",
   "power": 220648356
  },
  {
   "server": 6030,
   "family": "nerverland",
   "power": 204642728
  },
  {
   "server": 6030,
   "family": "Ragnarok",
   "power": 163001005
  },
  {
   "server": 6030,
   "family": "Los_Honguitos",
   "power": 153422985
  },
  {
   "server": 6030,
   "family": "Guishekillers",
   "power": 152326722
  },
  {
   "server": 6031,
   "family": "HummusSapiens",
   "power": 1049158829
  },
  {
   "server": 6031,
   "family": "LCSP",
   "power": 754252529
  },
  {
   "server": 6031,
   "family": "FateFansClub",
   "power": 369779084
  },
  {
   "server": 6031,
   "family": "Humility",
   "power": 316832408
  },
  {
   "server": 6031,
   "family": "ALPHAS",
   "power": 242564964
  },
  {
   "server": 6031,
   "family": "Escuad_Lobo",
   "power": 238691741
  },
  {
   "server": 6031,
   "family": "TOP",
   "power": 221473545
  },
  {
   "server": 6031,
   "family": "TeamBeast",
   "power": 211379828
  },
  {
   "server": 6031,
   "family": "MEXAMAFIA",
   "power": 193244497
  },
  {
   "server": 6031,
   "family": "Sinners",
   "power": 187380910
  },
  {
   "server": 6032,
   "family": "SPARTANS",
   "power": 1018405313
  },
  {
   "server": 6032,
   "family": "TopChamps",
   "power": 867901724
  },
  {
   "server": 6032,
   "family": "Radicalz",
   "power": 344013070
  },
  {
   "server": 6032,
   "family": "peakyblinders",
   "power": 310802809
  },
  {
   "server": 6032,
   "family": "Demons",
   "power": 290390825
  },
  {
   "server": 6032,
   "family": "PATRONES",
   "power": 264908109
  },
  {
   "server": 6032,
   "family": "Monster",
   "power": 251472818
  },
  {
   "server": 6032,
   "family": "Latinos",
   "power": 229586597
  },
  {
   "server": 6032,
   "family": "SUPERHONGUITOS",
   "power": 225948626
  },
  {
   "server": 6032,
   "family": "GenteMX",
   "power": 163674808
  },
  {
   "server": 6033,
   "family": "OrdenYCaos",
   "power": 1215406991
  },
  {
   "server": 6033,
   "family": " ͡° ͜ʖ ͡° ",
   "power": 755040303
  },
  {
   "server": 6033,
   "family": "BlackDragon",
   "power": 328824013
  },
  {
   "server": 6033,
   "family": "Leyendas",
   "power": 291064270
  },
  {
   "server": 6033,
   "family": "GhostShadow",
   "power": 284498217
  },
  {
   "server": 6033,
   "family": "FairyTail",
   "power": 267701561
  },
  {
   "server": 6033,
   "family": "Guerreros",
   "power": 264452575
  },
  {
   "server": 6033,
   "family": "México",
   "power": 255547236
  },
  {
   "server": 6033,
   "family": "THE_IMPERIO_MX",
   "power": 255129532
  },
  {
   "server": 6033,
   "family": "King",
   "power": 242816436
  },
  {
   "server": 6034,
   "family": "EspañolUnido",
   "power": 1025871786
  },
  {
   "server": 6034,
   "family": "Tetoners",
   "power": 953174677
  },
  {
   "server": 6034,
   "family": "espartacusEsp",
   "power": 641346532
  },
  {
   "server": 6034,
   "family": "GuerrerosZ",
   "power": 495389311
  },
  {
   "server": 6034,
   "family": "MëxäMäfîä",
   "power": 303148205
  },
  {
   "server": 6034,
   "family": "WHIT444",
   "power": 219953989
  },
  {
   "server": 6034,
   "family": "DevilMayCry",
   "power": 216301164
  },
  {
   "server": 6034,
   "family": "pickachuminy",
   "power": 188986885
  },
  {
   "server": 6034,
   "family": "cancelas",
   "power": 178416251
  },
  {
   "server": 6034,
   "family": "kingdom",
   "power": 178364652
  },
  {
   "server": 6035,
   "family": "SetasYPetas",
   "power": 1136337682
  },
  {
   "server": 6035,
   "family": "DRAGONBALL",
   "power": 894171905
  },
  {
   "server": 6035,
   "family": "REVOLUCIÓN",
   "power": 475609414
  },
  {
   "server": 6035,
   "family": "España",
   "power": 264923179
  },
  {
   "server": 6035,
   "family": "Pilares",
   "power": 263253910
  },
  {
   "server": 6035,
   "family": "LATAM",
   "power": 254296454
  },
  {
   "server": 6035,
   "family": "2B2T",
   "power": 197133360
  },
  {
   "server": 6035,
   "family": "mexico",
   "power": 151481445
  },
  {
   "server": 6035,
   "family": "latinoamerica",
   "power": 143181026
  },
  {
   "server": 6035,
   "family": "KonohaCorp",
   "power": 137614143
  },
  {
   "server": 6036,
   "family": "INFERNAL",
   "power": 1325369919
  },
  {
   "server": 6036,
   "family": "Bullying",
   "power": 412497940
  },
  {
   "server": 6036,
   "family": "GAGAAA",
   "power": 383820732
  },
  {
   "server": 6036,
   "family": "Akatsuki",
   "power": 314368079
  },
  {
   "server": 6036,
   "family": "SabDerzx",
   "power": 288468237
  },
  {
   "server": 6036,
   "family": "LostVayne",
   "power": 248567119
  },
  {
   "server": 6036,
   "family": "LATAM",
   "power": 245850585
  },
  {
   "server": 6036,
   "family": "ELITE",
   "power": 208092149
  },
  {
   "server": 6036,
   "family": "DesganadosFC",
   "power": 186528062
  },
  {
   "server": 6036,
   "family": "TheOne",
   "power": 143170119
  },
  {
   "server": 6037,
   "family": "ELITE",
   "power": 1143268098
  },
  {
   "server": 6037,
   "family": "Familia",
   "power": 899276486
  },
  {
   "server": 6037,
   "family": "Legendarios",
   "power": 366708520
  },
  {
   "server": 6037,
   "family": "Cordyceps",
   "power": 344469673
  },
  {
   "server": 6037,
   "family": "Reyes",
   "power": 303033927
  },
  {
   "server": 6037,
   "family": "minihongos",
   "power": 215260610
  },
  {
   "server": 6037,
   "family": "Codigo8",
   "power": 206840734
  },
  {
   "server": 6037,
   "family": "ANTEIKU",
   "power": 206651758
  },
  {
   "server": 6037,
   "family": "Ragnarôk",
   "power": 194247448
  },
  {
   "server": 6037,
   "family": "SKY",
   "power": 165129083
  },
  {
   "server": 6038,
   "family": "ALPHAS",
   "power": 1273501460
  },
  {
   "server": 6038,
   "family": "Legion",
   "power": 958268886
  },
  {
   "server": 6038,
   "family": "GRK",
   "power": 641488971
  },
  {
   "server": 6038,
   "family": "Champigods",
   "power": 394851456
  },
  {
   "server": 6038,
   "family": "ARGENTINA",
   "power": 321091939
  },
  {
   "server": 6038,
   "family": "MVP",
   "power": 260767086
  },
  {
   "server": 6038,
   "family": "wolves",
   "power": 219258047
  },
  {
   "server": 6038,
   "family": "©EthernalsBlod",
   "power": 200167899
  },
  {
   "server": 6038,
   "family": "PHOENIXESPAÑOL",
   "power": 196159619
  },
  {
   "server": 6038,
   "family": "CHIMUELOS",
   "power": 179676583
  },
  {
   "server": 6039,
   "family": "MAFIA",
   "power": 1224753241
  },
  {
   "server": 6039,
   "family": "BigSeta",
   "power": 840264607
  },
  {
   "server": 6039,
   "family": "WhiteKnights",
   "power": 507727861
  },
  {
   "server": 6039,
   "family": "Destructores",
   "power": 419649575
  },
  {
   "server": 6039,
   "family": "SEGADORES",
   "power": 310687808
  },
  {
   "server": 6039,
   "family": "MundoLatino",
   "power": 298245154
  },
  {
   "server": 6039,
   "family": "ESPARTA",
   "power": 294973233
  },
  {
   "server": 6039,
   "family": "Onic",
   "power": 203023973
  },
  {
   "server": 6039,
   "family": "MushroomWorld",
   "power": 170888948
  },
  {
   "server": 6039,
   "family": "Panteón",
   "power": 167058506
  },
  {
   "server": 6040,
   "family": "༺𝐺𝑜𝒅𝒔༻",
   "power": 1145139061
  },
  {
   "server": 6040,
   "family": "KingHunters",
   "power": 882686089
  },
  {
   "server": 6040,
   "family": "mewing",
   "power": 316285829
  },
  {
   "server": 6040,
   "family": "OLYMPUS",
   "power": 260272930
  },
  {
   "server": 6040,
   "family": "Paticano",
   "power": 248794481
  },
  {
   "server": 6040,
   "family": "SoloLeveling",
   "power": 245543730
  },
  {
   "server": 6040,
   "family": "WildRift",
   "power": 239686871
  },
  {
   "server": 6040,
   "family": "Mushroom_Latam",
   "power": 223982648
  },
  {
   "server": 6040,
   "family": "FairyTail",
   "power": 198131520
  },
  {
   "server": 6040,
   "family": "champilandia",
   "power": 145564701
  },
  {
   "server": 6041,
   "family": "Asgard",
   "power": 1298908208
  },
  {
   "server": 6041,
   "family": "Latinos",
   "power": 528054019
  },
  {
   "server": 6041,
   "family": "Astrales",
   "power": 433618349
  },
  {
   "server": 6041,
   "family": "PUYEYE",
   "power": 295828475
  },
  {
   "server": 6041,
   "family": "LunaEterna",
   "power": 278010825
  },
  {
   "server": 6041,
   "family": "Harkonnen",
   "power": 263260257
  },
  {
   "server": 6041,
   "family": "LĀTĪNŌS",
   "power": 209694104
  },
  {
   "server": 6041,
   "family": "MUGIWARAS",
   "power": 199951070
  },
  {
   "server": 6041,
   "family": "Mexicas",
   "power": 192496972
  },
  {
   "server": 6041,
   "family": "BOCA",
   "power": 181776051
  },
  {
   "server": 6042,
   "family": "FAIRYTOPIA",
   "power": 1229617951
  },
  {
   "server": 6042,
   "family": "OnlyDevs",
   "power": 1053926102
  },
  {
   "server": 6042,
   "family": "BlueDemons_2",
   "power": 487032927
  },
  {
   "server": 6042,
   "family": "INMORTALES",
   "power": 393691726
  },
  {
   "server": 6042,
   "family": "bbhouse",
   "power": 316845950
  },
  {
   "server": 6042,
   "family": "LosJefes",
   "power": 301744131
  },
  {
   "server": 6042,
   "family": "Faxtikusu",
   "power": 284469604
  },
  {
   "server": 6042,
   "family": "España",
   "power": 241091194
  },
  {
   "server": 6042,
   "family": "Argentum",
   "power": 237281521
  },
  {
   "server": 6042,
   "family": "Warriors",
   "power": 205551583
  },
  {
   "server": 6043,
   "family": "Atharaxia",
   "power": 1381205626
  },
  {
   "server": 6043,
   "family": "ensetados",
   "power": 829263616
  },
  {
   "server": 6043,
   "family": "COLOMBIANITOS",
   "power": 386674816
  },
  {
   "server": 6043,
   "family": "argentos",
   "power": 343940308
  },
  {
   "server": 6043,
   "family": "OLYMPUS",
   "power": 232404764
  },
  {
   "server": 6043,
   "family": "€£¥",
   "power": 224621310
  },
  {
   "server": 6043,
   "family": "DarkReborn",
   "power": 209909074
  },
  {
   "server": 6043,
   "family": "España",
   "power": 204851848
  },
  {
   "server": 6043,
   "family": "ArtoriasLegacy",
   "power": 198549333
  },
  {
   "server": 6043,
   "family": "🧐MACHIWI🧐",
   "power": 184315446
  },
  {
   "server": 6044,
   "family": "EminencE",
   "power": 1292908400
  },
  {
   "server": 6044,
   "family": "GameOver",
   "power": 667440277
  },
  {
   "server": 6044,
   "family": "White",
   "power": 456425981
  },
  {
   "server": 6044,
   "family": "PARANOIA",
   "power": 340984641
  },
  {
   "server": 6044,
   "family": "Legions",
   "power": 305862484
  },
  {
   "server": 6044,
   "family": "IMPERIAL",
   "power": 265753251
  },
  {
   "server": 6044,
   "family": "WARRIORS",
   "power": 242740809
  },
  {
   "server": 6044,
   "family": "MEXICO",
   "power": 216823245
  },
  {
   "server": 6044,
   "family": "Lospapus",
   "power": 192650550
  },
  {
   "server": 6044,
   "family": "Majestic",
   "power": 177473030
  },
  {
   "server": 6045,
   "family": "DeadArmy",
   "power": 1218447523
  },
  {
   "server": 6045,
   "family": "HispanosUnidos",
   "power": 1193926318
  },
  {
   "server": 6045,
   "family": "Apocalipsis",
   "power": 518492077
  },
  {
   "server": 6045,
   "family": "LaMafia",
   "power": 332981510
  },
  {
   "server": 6045,
   "family": "EspañaUnida",
   "power": 320133847
  },
  {
   "server": 6045,
   "family": "HEAVENLY",
   "power": 251906080
  },
  {
   "server": 6045,
   "family": "Ensetaos",
   "power": 214776948
  },
  {
   "server": 6045,
   "family": "TARISLAND",
   "power": 208160390
  },
  {
   "server": 6045,
   "family": "Xcalibur",
   "power": 202949318
  },
  {
   "server": 6045,
   "family": "SLK",
   "power": 196831406
  },
  {
   "server": 6046,
   "family": "ZLEGION",
   "power": 1136537293
  },
  {
   "server": 6046,
   "family": "SetasIbéricas",
   "power": 835521399
  },
  {
   "server": 6046,
   "family": "LATINOS_TEAM",
   "power": 451628128
  },
  {
   "server": 6046,
   "family": "Ecstasy",
   "power": 373875290
  },
  {
   "server": 6046,
   "family": "AtaudRisueño",
   "power": 296825397
  },
  {
   "server": 6046,
   "family": "Tomatito",
   "power": 293903020
  },
  {
   "server": 6046,
   "family": "DarkeBuild",
   "power": 289927215
  },
  {
   "server": 6046,
   "family": "DEATNOTE",
   "power": 251387628
  },
  {
   "server": 6046,
   "family": "Sanyes",
   "power": 222158762
  },
  {
   "server": 6046,
   "family": "MAFIA",
   "power": 201642087
  },
  {
   "server": 6047,
   "family": "Legions",
   "power": 1253987393
  },
  {
   "server": 6047,
   "family": "SetasAsesinas",
   "power": 1045451360
  },
  {
   "server": 6047,
   "family": "CallampinesCL",
   "power": 516417259
  },
  {
   "server": 6047,
   "family": "Los_Vrgs",
   "power": 486874806
  },
  {
   "server": 6047,
   "family": "LegendZ",
   "power": 357192953
  },
  {
   "server": 6047,
   "family": "TheLegends",
   "power": 353292269
  },
  {
   "server": 6047,
   "family": "GodsOfValhalla",
   "power": 321885842
  },
  {
   "server": 6047,
   "family": "Hellbourne",
   "power": 259055148
  },
  {
   "server": 6047,
   "family": "hongys",
   "power": 207445121
  },
  {
   "server": 6047,
   "family": "FLYstars",
   "power": 204602676
  },
  {
   "server": 6048,
   "family": "I𐌽𐍆I𐌽I𐍄𐍅",
   "power": 1188266728
  },
  {
   "server": 6048,
   "family": "LORDS_CHAMPI",
   "power": 908211830
  },
  {
   "server": 6048,
   "family": "Duxinz",
   "power": 488720779
  },
  {
   "server": 6048,
   "family": "KINGS",
   "power": 409861201
  },
  {
   "server": 6048,
   "family": "latinoamerica",
   "power": 346401940
  },
  {
   "server": 6048,
   "family": "COBRA_KAI",
   "power": 289147331
  },
  {
   "server": 6048,
   "family": "papus7",
   "power": 280678560
  },
  {
   "server": 6048,
   "family": "Fluxo",
   "power": 237047957
  },
  {
   "server": 6048,
   "family": "Akatsuki",
   "power": 221239727
  },
  {
   "server": 6048,
   "family": "Ovejos",
   "power": 218784381
  },
  {
   "server": 6049,
   "family": "ᴹᴳᵂMugiwaras",
   "power": 1192105128
  },
  {
   "server": 6049,
   "family": "Shadow",
   "power": 655454308
  },
  {
   "server": 6049,
   "family": "España",
   "power": 441317850
  },
  {
   "server": 6049,
   "family": "ARGENTINA",
   "power": 340505632
  },
  {
   "server": 6049,
   "family": "IceCream",
   "power": 319303290
  },
  {
   "server": 6049,
   "family": "La_PESADILLA",
   "power": 297675248
  },
  {
   "server": 6049,
   "family": "argentina",
   "power": 289359596
  },
  {
   "server": 6049,
   "family": "TuristaMundial",
   "power": 274920834
  },
  {
   "server": 6049,
   "family": "ARGENTO",
   "power": 227287514
  },
  {
   "server": 6049,
   "family": "RegionOfTerror",
   "power": 197321300
  },
  {
   "server": 6050,
   "family": "乂𝕂𝕚𝕟𝕘𝕤乂",
   "power": 1221100969
  },
  {
   "server": 6050,
   "family": "ᵖᵏ²¦ԍoᴅs¦ᴇvιʟs",
   "power": 774360707
  },
  {
   "server": 6050,
   "family": "͜͡яαgиαяσк乂",
   "power": 388448219
  },
  {
   "server": 6050,
   "family": "CELESTIALES",
   "power": 316665050
  },
  {
   "server": 6050,
   "family": "xOnlyFansヅ",
   "power": 310880164
  },
  {
   "server": 6050,
   "family": "MVP",
   "power": 248321549
  },
  {
   "server": 6050,
   "family": "Robellons",
   "power": 224974124
  },
  {
   "server": 6050,
   "family": "LegendsTop",
   "power": 214911705
  },
  {
   "server": 6050,
   "family": "dfenix",
   "power": 209899082
  },
  {
   "server": 6050,
   "family": "MESSI",
   "power": 187981212
  },
  {
   "server": 6051,
   "family": "𓆏HueBs𓆏",
   "power": 1255921826
  },
  {
   "server": 6051,
   "family": "Potterheads",
   "power": 771519990
  },
  {
   "server": 6051,
   "family": "LasCepas",
   "power": 308795743
  },
  {
   "server": 6051,
   "family": "PerroCallejero",
   "power": 306851357
  },
  {
   "server": 6051,
   "family": "ESPAÑOLES",
   "power": 301739463
  },
  {
   "server": 6051,
   "family": "LATINOS",
   "power": 240309817
  },
  {
   "server": 6051,
   "family": "LatinGods",
   "power": 231566735
  },
  {
   "server": 6051,
   "family": "ShadowMS",
   "power": 227293372
  },
  {
   "server": 6051,
   "family": "Chilenos",
   "power": 216281920
  },
  {
   "server": 6051,
   "family": "Clan",
   "power": 197662859
  },
  {
   "server": 6052,
   "family": "WeAreTheChamps",
   "power": 1097435776
  },
  {
   "server": 6052,
   "family": "HoneyRoyal©",
   "power": 956468419
  },
  {
   "server": 6052,
   "family": "VIKINGOS",
   "power": 330650255
  },
  {
   "server": 6052,
   "family": "Resistencia",
   "power": 318269156
  },
  {
   "server": 6052,
   "family": "PSICODÉLICS",
   "power": 233553795
  },
  {
   "server": 6052,
   "family": "Exiliados",
   "power": 212582121
  },
  {
   "server": 6052,
   "family": "AMANITAOCREATA",
   "power": 206094834
  },
  {
   "server": 6052,
   "family": "deaht",
   "power": 204461026
  },
  {
   "server": 6052,
   "family": "OverLords",
   "power": 194534352
  },
  {
   "server": 6052,
   "family": "LATINOS_UNIDOS",
   "power": 191376053
  },
  {
   "server": 6053,
   "family": "Virus",
   "power": 1270321930
  },
  {
   "server": 6053,
   "family": "VirusX",
   "power": 803331939
  },
  {
   "server": 6053,
   "family": "Españoles",
   "power": 499291262
  },
  {
   "server": 6053,
   "family": "LATINOS",
   "power": 430897068
  },
  {
   "server": 6053,
   "family": "SPRV",
   "power": 427731221
  },
  {
   "server": 6053,
   "family": "JDragonS",
   "power": 213162741
  },
  {
   "server": 6053,
   "family": "MexicanPower",
   "power": 209615109
  },
  {
   "server": 6053,
   "family": "GLADIADORES",
   "power": 200572637
  },
  {
   "server": 6053,
   "family": "Champichotas",
   "power": 178316852
  },
  {
   "server": 6053,
   "family": "Destiny",
   "power": 156600306
  },
  {
   "server": 6054,
   "family": "DEMONSQUAD",
   "power": 1207735547
  },
  {
   "server": 6054,
   "family": "SAS",
   "power": 525706069
  },
  {
   "server": 6054,
   "family": "ATÓMICO",
   "power": 443840615
  },
  {
   "server": 6054,
   "family": "Zone_Imperior",
   "power": 423214253
  },
  {
   "server": 6054,
   "family": "EspañaGods",
   "power": 372696864
  },
  {
   "server": 6054,
   "family": "ClanLatino",
   "power": 318677857
  },
  {
   "server": 6054,
   "family": "TopGods",
   "power": 268342515
  },
  {
   "server": 6054,
   "family": "MexicoGod",
   "power": 245783162
  },
  {
   "server": 6054,
   "family": "GreatestKingd",
   "power": 207115360
  },
  {
   "server": 6054,
   "family": "Latinos",
   "power": 197650796
  },
  {
   "server": 6055,
   "family": "SpainTop",
   "power": 1148154122
  },
  {
   "server": 6055,
   "family": "EMPERADORES",
   "power": 920187930
  },
  {
   "server": 6055,
   "family": "Chile",
   "power": 523255405
  },
  {
   "server": 6055,
   "family": "HongoLoco",
   "power": 353779193
  },
  {
   "server": 6055,
   "family": "demosn",
   "power": 349097113
  },
  {
   "server": 6055,
   "family": "CobraKai",
   "power": 300775748
  },
  {
   "server": 6055,
   "family": "ArgenPro",
   "power": 243574342
  },
  {
   "server": 6055,
   "family": "ResetSports",
   "power": 221150789
  },
  {
   "server": 6055,
   "family": "Colombianos",
   "power": 182708486
  },
  {
   "server": 6055,
   "family": "HongosHispanos",
   "power": 169988260
  },
  {
   "server": 6056,
   "family": "Sleepless",
   "power": 1199650574
  },
  {
   "server": 6056,
   "family": "LosMancos",
   "power": 770452569
  },
  {
   "server": 6056,
   "family": "PuroPow",
   "power": 607099295
  },
  {
   "server": 6056,
   "family": "Champiñones",
   "power": 363964896
  },
  {
   "server": 6056,
   "family": "España",
   "power": 308993229
  },
  {
   "server": 6056,
   "family": "carrascuas",
   "power": 266895793
  },
  {
   "server": 6056,
   "family": "obbatala",
   "power": 258297089
  },
  {
   "server": 6056,
   "family": "L4TINOSx",
   "power": 227802503
  },
  {
   "server": 6056,
   "family": "Leyenda",
   "power": 213484585
  },
  {
   "server": 6056,
   "family": "Nazzarth",
   "power": 206751318
  },
  {
   "server": 6057,
   "family": "𝘖𝘓𝘐𝘔𝘗𝘖",
   "power": 1132327469
  },
  {
   "server": 6057,
   "family": "WARNING",
   "power": 786707045
  },
  {
   "server": 6057,
   "family": "Asgard",
   "power": 369473614
  },
  {
   "server": 6057,
   "family": "ESPAÑA",
   "power": 328882294
  },
  {
   "server": 6057,
   "family": "TopColombia",
   "power": 307162108
  },
  {
   "server": 6057,
   "family": "LATAM_GOD",
   "power": 303884363
  },
  {
   "server": 6057,
   "family": "ASGARD",
   "power": 257049667
  },
  {
   "server": 6057,
   "family": "StrayDogs",
   "power": 226311541
  },
  {
   "server": 6057,
   "family": "Naruto",
   "power": 215459418
  },
  {
   "server": 6057,
   "family": "TheMasters",
   "power": 208317935
  },
  {
   "server": 6058,
   "family": "Kings",
   "power": 1133260850
  },
  {
   "server": 6058,
   "family": "APOCALIPSIS",
   "power": 1112240159
  },
  {
   "server": 6058,
   "family": "HERETICS",
   "power": 422227346
  },
  {
   "server": 6058,
   "family": "Vórtice",
   "power": 411788303
  },
  {
   "server": 6058,
   "family": "shadowGarden",
   "power": 300243886
  },
  {
   "server": 6058,
   "family": "MexaMafia",
   "power": 232365907
  },
  {
   "server": 6058,
   "family": "Valhalla",
   "power": 228693687
  },
  {
   "server": 6058,
   "family": "Hispania",
   "power": 218891785
  },
  {
   "server": 6058,
   "family": "Ouroboros",
   "power": 205363920
  },
  {
   "server": 6058,
   "family": "komix",
   "power": 205106493
  },
  {
   "server": 6059,
   "family": "HUNTERxHUNTER",
   "power": 1099334071
  },
  {
   "server": 6059,
   "family": "INFAMES",
   "power": 853237040
  },
  {
   "server": 6059,
   "family": "Champiñoles",
   "power": 399894803
  },
  {
   "server": 6059,
   "family": "Division_Cero",
   "power": 376201415
  },
  {
   "server": 6059,
   "family": "OverLords",
   "power": 339494384
  },
  {
   "server": 6059,
   "family": "ArgPitudos",
   "power": 316676533
  },
  {
   "server": 6059,
   "family": "The_Creators",
   "power": 281138079
  },
  {
   "server": 6059,
   "family": "DaddyChill",
   "power": 266508474
  },
  {
   "server": 6059,
   "family": "violatrol",
   "power": 236292949
  },
  {
   "server": 6059,
   "family": "AKATSUKI",
   "power": 220851374
  },
  {
   "server": 6060,
   "family": "Wewitos",
   "power": 1203235081
  },
  {
   "server": 6060,
   "family": "MANIAKS",
   "power": 793886231
  },
  {
   "server": 6060,
   "family": "VIRUS",
   "power": 317291462
  },
  {
   "server": 6060,
   "family": "LATINOS",
   "power": 305283343
  },
  {
   "server": 6060,
   "family": "Lestatcrow",
   "power": 295257190
  },
  {
   "server": 6060,
   "family": "CHAMPIÑONKING",
   "power": 292428588
  },
  {
   "server": 6060,
   "family": "JujutsuKaisen",
   "power": 290065690
  },
  {
   "server": 6060,
   "family": "FairyTail",
   "power": 279086188
  },
  {
   "server": 6060,
   "family": "Ouroboros",
   "power": 268608323
  },
  {
   "server": 6060,
   "family": "Gorditos",
   "power": 237556340
  },
  {
   "server": 6061,
   "family": "HGT°",
   "power": 1126709921
  },
  {
   "server": 6061,
   "family": "Valhalla",
   "power": 1007551241
  },
  {
   "server": 6061,
   "family": "LegionLatina",
   "power": 652740543
  },
  {
   "server": 6061,
   "family": "ChampiLand",
   "power": 454665725
  },
  {
   "server": 6061,
   "family": "LosChavales",
   "power": 343703020
  },
  {
   "server": 6061,
   "family": "Exiled",
   "power": 343104782
  },
  {
   "server": 6061,
   "family": "degenenerados2",
   "power": 276063704
  },
  {
   "server": 6061,
   "family": "EscuadronALFA",
   "power": 225519945
  },
  {
   "server": 6061,
   "family": "Ragnarok",
   "power": 204990078
  },
  {
   "server": 6061,
   "family": "ASIR",
   "power": 198500417
  },
  {
   "server": 6062,
   "family": "BaalOrder",
   "power": 989046567
  },
  {
   "server": 6062,
   "family": "FÉNIX",
   "power": 499290203
  },
  {
   "server": 6062,
   "family": "SUDADORES",
   "power": 406590537
  },
  {
   "server": 6062,
   "family": "Falkreath",
   "power": 390236553
  },
  {
   "server": 6062,
   "family": "Warriors",
   "power": 278057893
  },
  {
   "server": 6062,
   "family": "SSJ",
   "power": 260678589
  },
  {
   "server": 6062,
   "family": "INMORTALS",
   "power": 257232956
  },
  {
   "server": 6062,
   "family": "INMORTAL",
   "power": 252196845
  },
  {
   "server": 6062,
   "family": "Neolatinos",
   "power": 236011450
  },
  {
   "server": 6062,
   "family": "Kioto",
   "power": 190604652
  },
  {
   "server": 6063,
   "family": "Prophets",
   "power": 995423891
  },
  {
   "server": 6063,
   "family": "TorreArmy",
   "power": 856021430
  },
  {
   "server": 6063,
   "family": "latinos",
   "power": 606833731
  },
  {
   "server": 6063,
   "family": "LesCepas",
   "power": 462091754
  },
  {
   "server": 6063,
   "family": "FATE",
   "power": 264015259
  },
  {
   "server": 6063,
   "family": "IиรǺиØร【◣_◢】",
   "power": 249746767
  },
  {
   "server": 6063,
   "family": "kingShadow",
   "power": 229235229
  },
  {
   "server": 6063,
   "family": "GTL",
   "power": 211433248
  },
  {
   "server": 6063,
   "family": "MedioPollo",
   "power": 189363597
  },
  {
   "server": 6063,
   "family": "Latam",
   "power": 182893799
  },
  {
   "server": 6064,
   "family": "TopSecret",
   "power": 1124107896
  },
  {
   "server": 6064,
   "family": "DragonHeart",
   "power": 623333127
  },
  {
   "server": 6064,
   "family": "OLYMPUS",
   "power": 421236120
  },
  {
   "server": 6064,
   "family": "ChampiCrikos",
   "power": 325286775
  },
  {
   "server": 6064,
   "family": "PaTTanes_Kaoz",
   "power": 296109257
  },
  {
   "server": 6064,
   "family": "BlackList",
   "power": 262094878
  },
  {
   "server": 6064,
   "family": "España",
   "power": 261793741
  },
  {
   "server": 6064,
   "family": "White",
   "power": 249050230
  },
  {
   "server": 6064,
   "family": "BlackSport",
   "power": 228835190
  },
  {
   "server": 6064,
   "family": "Lobofrio",
   "power": 211978439
  },
  {
   "server": 6065,
   "family": "༒༺ᴋɴɪɢʜᴛ༻༒",
   "power": 959784384
  },
  {
   "server": 6065,
   "family": "Nova",
   "power": 574739487
  },
  {
   "server": 6065,
   "family": "ElClan",
   "power": 397842283
  },
  {
   "server": 6065,
   "family": "LATAM",
   "power": 360331434
  },
  {
   "server": 6065,
   "family": "LatinsFTW",
   "power": 286269204
  },
  {
   "server": 6065,
   "family": "RE4LG4LIFE",
   "power": 281129960
  },
  {
   "server": 6065,
   "family": "ShadowGhosts",
   "power": 271346214
  },
  {
   "server": 6065,
   "family": "ApexKings",
   "power": 256721795
  },
  {
   "server": 6065,
   "family": "TopSecret",
   "power": 223277014
  },
  {
   "server": 6065,
   "family": "ArgAtr",
   "power": 205915707
  },
  {
   "server": 6066,
   "family": "Active",
   "power": 1186566777
  },
  {
   "server": 6066,
   "family": "LEGIONARIOS",
   "power": 439412874
  },
  {
   "server": 6066,
   "family": "Legends",
   "power": 410835660
  },
  {
   "server": 6066,
   "family": "Amoongus",
   "power": 399635642
  },
  {
   "server": 6066,
   "family": "Latinoamérica",
   "power": 339951866
  },
  {
   "server": 6066,
   "family": "PORTOBELLO",
   "power": 326089048
  },
  {
   "server": 6066,
   "family": "INMorTALes",
   "power": 277161540
  },
  {
   "server": 6066,
   "family": "LASECTA",
   "power": 263621208
  },
  {
   "server": 6066,
   "family": "Supremacy",
   "power": 254865884
  },
  {
   "server": 6066,
   "family": "España",
   "power": 239517133
  },
  {
   "server": 6067,
   "family": "Legends",
   "power": 1152446386
  },
  {
   "server": 6067,
   "family": "LATIN_WARRIORS",
   "power": 665403954
  },
  {
   "server": 6067,
   "family": "GOT",
   "power": 624296433
  },
  {
   "server": 6067,
   "family": "RAIDER_LATAM",
   "power": 623751400
  },
  {
   "server": 6067,
   "family": "Chilean",
   "power": 352378204
  },
  {
   "server": 6067,
   "family": "Mexico",
   "power": 253821263
  },
  {
   "server": 6067,
   "family": "DARKPOWER",
   "power": 226987016
  },
  {
   "server": 6067,
   "family": "GeniosMalvados",
   "power": 221653843
  },
  {
   "server": 6067,
   "family": "SurAmerica",
   "power": 211211916
  },
  {
   "server": 6067,
   "family": "LOS_DIOSES",
   "power": 205569789
  },
  {
   "server": 6068,
   "family": "CROWN_HEROES",
   "power": 1120165263
  },
  {
   "server": 6068,
   "family": "Olympus",
   "power": 791459190
  },
  {
   "server": 6068,
   "family": "Nakamas",
   "power": 565693730
  },
  {
   "server": 6068,
   "family": "LEGENDARIOS",
   "power": 373178287
  },
  {
   "server": 6068,
   "family": "LEALTAD",
   "power": 303913613
  },
  {
   "server": 6068,
   "family": "ESENCIA",
   "power": 291129673
  },
  {
   "server": 6068,
   "family": "Skywalker",
   "power": 284352068
  },
  {
   "server": 6068,
   "family": "Piratesbear",
   "power": 246687625
  },
  {
   "server": 6068,
   "family": "Leyendas",
   "power": 240119484
  },
  {
   "server": 6068,
   "family": "PAIN",
   "power": 205945120
  },
  {
   "server": 6069,
   "family": "Ases",
   "power": 1131210811
  },
  {
   "server": 6069,
   "family": "あ・Yakuzas",
   "power": 793571633
  },
  {
   "server": 6069,
   "family": "Gallinero",
   "power": 618846168
  },
  {
   "server": 6069,
   "family": "Exiliados",
   "power": 374286471
  },
  {
   "server": 6069,
   "family": "TetasdeFlakked",
   "power": 356129880
  },
  {
   "server": 6069,
   "family": "ARGyPerU",
   "power": 346647360
  },
  {
   "server": 6069,
   "family": "SoloActivos",
   "power": 335159719
  },
  {
   "server": 6069,
   "family": "babyboo",
   "power": 249673435
  },
  {
   "server": 6069,
   "family": "PUTEROS",
   "power": 246846670
  },
  {
   "server": 6069,
   "family": "Ethereals",
   "power": 242952497
  },
  {
   "server": 6070,
   "family": "ZETAS",
   "power": 1008794740
  },
  {
   "server": 6070,
   "family": "LaFamilia",
   "power": 611987443
  },
  {
   "server": 6070,
   "family": "ElMejorClan",
   "power": 429478040
  },
  {
   "server": 6070,
   "family": "ASGARD",
   "power": 370651360
  },
  {
   "server": 6070,
   "family": "Mercenarios",
   "power": 303909007
  },
  {
   "server": 6070,
   "family": "Latinos",
   "power": 299373456
  },
  {
   "server": 6070,
   "family": "LosDinoPanas",
   "power": 265658893
  },
  {
   "server": 6070,
   "family": "HUNTER",
   "power": 245698419
  },
  {
   "server": 6070,
   "family": "LegionInfernal",
   "power": 196093043
  },
  {
   "server": 6070,
   "family": "Fumao",
   "power": 192468742
  },
  {
   "server": 6071,
   "family": "XxHUNTERxX",
   "power": 1024812205
  },
  {
   "server": 6071,
   "family": "Los7Pecados",
   "power": 517045158
  },
  {
   "server": 6071,
   "family": "ＲΛＧＮΛＲＯＫ",
   "power": 416231445
  },
  {
   "server": 6071,
   "family": "EliteSpain",
   "power": 312260754
  },
  {
   "server": 6071,
   "family": "Mugiwaras",
   "power": 275140702
  },
  {
   "server": 6071,
   "family": "Adept",
   "power": 273354375
  },
  {
   "server": 6071,
   "family": "LOS_MICHIS",
   "power": 260647229
  },
  {
   "server": 6071,
   "family": "Akatsuki",
   "power": 254015328
  },
  {
   "server": 6071,
   "family": "ᴅʟᴄⵌ¹ᴅᴇᴀᴛ※",
   "power": 227398870
  },
  {
   "server": 6071,
   "family": "OnePunchClan",
   "power": 211150746
  },
  {
   "server": 6072,
   "family": "OnePiece",
   "power": 974345087
  },
  {
   "server": 6072,
   "family": "BASGIATH",
   "power": 911661377
  },
  {
   "server": 6072,
   "family": "EscuadrónOmega",
   "power": 318117311
  },
  {
   "server": 6072,
   "family": "Family_Zeta",
   "power": 317958601
  },
  {
   "server": 6072,
   "family": "LEYENDS",
   "power": 307701179
  },
  {
   "server": 6072,
   "family": "Blood",
   "power": 285893230
  },
  {
   "server": 6072,
   "family": "legionespañola",
   "power": 265415964
  },
  {
   "server": 6072,
   "family": "SetaDeEscapar",
   "power": 240656461
  },
  {
   "server": 6072,
   "family": "ShadowOfHell",
   "power": 212281165
  },
  {
   "server": 6072,
   "family": "GenteLatino",
   "power": 184701870
  },
  {
   "server": 6073,
   "family": "INFERNALES",
   "power": 954594251
  },
  {
   "server": 6073,
   "family": "CDG",
   "power": 859079931
  },
  {
   "server": 6073,
   "family": "Renacidos",
   "power": 471821683
  },
  {
   "server": 6073,
   "family": "Paladines",
   "power": 291202868
  },
  {
   "server": 6073,
   "family": "ARG_OLIMPO",
   "power": 274513956
  },
  {
   "server": 6073,
   "family": "DragonSlayer",
   "power": 250830078
  },
  {
   "server": 6073,
   "family": "CosaNostra",
   "power": 244777526
  },
  {
   "server": 6073,
   "family": "Latinos",
   "power": 242916176
  },
  {
   "server": 6073,
   "family": "creta",
   "power": 234642909
  },
  {
   "server": 6073,
   "family": "SandStorm",
   "power": 203902646
  },
  {
   "server": 6074,
   "family": "armagedon",
   "power": 970145691
  },
  {
   "server": 6074,
   "family": "VIPes74",
   "power": 707519647
  },
  {
   "server": 6074,
   "family": "Los7Pecados",
   "power": 504314490
  },
  {
   "server": 6074,
   "family": "TheHearts",
   "power": 286657590
  },
  {
   "server": 6074,
   "family": "Vikingos",
   "power": 284120899
  },
  {
   "server": 6074,
   "family": "INKAKOLA",
   "power": 258625319
  },
  {
   "server": 6074,
   "family": "N1",
   "power": 233679061
  },
  {
   "server": 6074,
   "family": "༒CLANTOP༒",
   "power": 227834997
  },
  {
   "server": 6074,
   "family": "BadGirlCoven",
   "power": 223056342
  },
  {
   "server": 6074,
   "family": "MEXICANOS",
   "power": 213012960
  },
  {
   "server": 6075,
   "family": "ToeVanguard",
   "power": 957341434
  },
  {
   "server": 6075,
   "family": "OnlySmoke",
   "power": 865376752
  },
  {
   "server": 6075,
   "family": "SuPerSaYianS",
   "power": 392252404
  },
  {
   "server": 6075,
   "family": "Imparables",
   "power": 383101117
  },
  {
   "server": 6075,
   "family": "LATAM",
   "power": 292076100
  },
  {
   "server": 6075,
   "family": "MAPLETREE",
   "power": 288806334
  },
  {
   "server": 6075,
   "family": "Argentina",
   "power": 275526084
  },
  {
   "server": 6075,
   "family": "ᴀʀᴄᴀɴɢᴇʟ",
   "power": 268136399
  },
  {
   "server": 6075,
   "family": "HeelVanguard",
   "power": 251986464
  },
  {
   "server": 6075,
   "family": "Delux",
   "power": 225983538
  },
  {
   "server": 6076,
   "family": "LEGENDS",
   "power": 971470748
  },
  {
   "server": 6076,
   "family": "Revolution_Cat",
   "power": 610917019
  },
  {
   "server": 6076,
   "family": "OnlyFans",
   "power": 396949293
  },
  {
   "server": 6076,
   "family": "AMANECER",
   "power": 308325444
  },
  {
   "server": 6076,
   "family": "愛TilinesPrime",
   "power": 289992537
  },
  {
   "server": 6076,
   "family": "WarriorsOfWar",
   "power": 283102915
  },
  {
   "server": 6076,
   "family": "9zTeam",
   "power": 277730992
  },
  {
   "server": 6076,
   "family": "hard",
   "power": 247790169
  },
  {
   "server": 6076,
   "family": "LORDHADES",
   "power": 223610341
  },
  {
   "server": 6076,
   "family": "Pitufialdea",
   "power": 207408551
  },
  {
   "server": 6077,
   "family": "WarriorsOfWar",
   "power": 526102283
  },
  {
   "server": 6077,
   "family": "CachorrasMalas",
   "power": 485492985
  },
  {
   "server": 6077,
   "family": "Mugiwaras",
   "power": 328955496
  },
  {
   "server": 6077,
   "family": "tripulaciónMDL",
   "power": 293023508
  },
  {
   "server": 6077,
   "family": "Hattori",
   "power": 288928153
  },
  {
   "server": 6077,
   "family": "ChampiSecta",
   "power": 281258695
  },
  {
   "server": 6077,
   "family": "DARK",
   "power": 276478486
  },
  {
   "server": 6077,
   "family": "yakuza",
   "power": 274398583
  },
  {
   "server": 6077,
   "family": "Yakuza",
   "power": 257374296
  },
  {
   "server": 6077,
   "family": "Mimamamemima",
   "power": 254037508
  },
  {
   "server": 6078,
   "family": "MasterLegends",
   "power": 835961511
  },
  {
   "server": 6078,
   "family": "BLACKㅤBULLS",
   "power": 681895374
  },
  {
   "server": 6078,
   "family": "CocoLoco",
   "power": 356943264
  },
  {
   "server": 6078,
   "family": "CHAMPIONS",
   "power": 300992940
  },
  {
   "server": 6078,
   "family": "TopLegends",
   "power": 270227553
  },
  {
   "server": 6078,
   "family": "MADE_IN_SPAIN",
   "power": 247124948
  },
  {
   "server": 6078,
   "family": "Mushrriors",
   "power": 211989228
  },
  {
   "server": 6078,
   "family": "Darks",
   "power": 204677386
  },
  {
   "server": 6078,
   "family": "KABOOM",
   "power": 199664354
  },
  {
   "server": 6078,
   "family": "BunnY",
   "power": 186524943
  },
  {
   "server": 6079,
   "family": "TrendingToP",
   "power": 889511632
  },
  {
   "server": 6079,
   "family": "DRAGONBALLZ",
   "power": 531435432
  },
  {
   "server": 6079,
   "family": "BWC",
   "power": 327878195
  },
  {
   "server": 6079,
   "family": "Colombia",
   "power": 324769274
  },
  {
   "server": 6079,
   "family": "Champiñones",
   "power": 285284304
  },
  {
   "server": 6079,
   "family": "EvosLegend",
   "power": 258092820
  },
  {
   "server": 6079,
   "family": "VARSOF",
   "power": 233073273
  },
  {
   "server": 6079,
   "family": "LaPrimizaCuu",
   "power": 224714508
  },
  {
   "server": 6079,
   "family": "España",
   "power": 215684991
  },
  {
   "server": 6079,
   "family": "MURDERERS",
   "power": 207268143
  },
  {
   "server": 6080,
   "family": "OnePiece",
   "power": 875481902
  },
  {
   "server": 6080,
   "family": "CoolToP",
   "power": 690618837
  },
  {
   "server": 6080,
   "family": "LosPesetas",
   "power": 419814175
  },
  {
   "server": 6080,
   "family": "WIN",
   "power": 247131982
  },
  {
   "server": 6080,
   "family": "ImmortalThrone",
   "power": 244253458
  },
  {
   "server": 6080,
   "family": "BadboYs",
   "power": 240425585
  },
  {
   "server": 6080,
   "family": "GTX",
   "power": 229167260
  },
  {
   "server": 6080,
   "family": "LatinosON",
   "power": 223485225
  },
  {
   "server": 6080,
   "family": "tribu_gallega",
   "power": 183274455
  },
  {
   "server": 6080,
   "family": "Dragons",
   "power": 174279182
  },
  {
   "server": 6081,
   "family": "ONLYSMOKE",
   "power": 840403643
  },
  {
   "server": 6081,
   "family": "KingsOfChaos",
   "power": 811185746
  },
  {
   "server": 6081,
   "family": "Guerreros",
   "power": 358666169
  },
  {
   "server": 6081,
   "family": "clons",
   "power": 262534360
  },
  {
   "server": 6081,
   "family": "ARGENTINA",
   "power": 260657569
  },
  {
   "server": 6081,
   "family": "Aztekitas",
   "power": 237937877
  },
  {
   "server": 6081,
   "family": "Los3Piernas",
   "power": 233474954
  },
  {
   "server": 6081,
   "family": "GODS",
   "power": 226395400
  },
  {
   "server": 6081,
   "family": "invictosMX",
   "power": 222811674
  },
  {
   "server": 6081,
   "family": "COLOMBIA",
   "power": 218546487
  },
  {
   "server": 6082,
   "family": "CLANxMUSH",
   "power": 858935461
  },
  {
   "server": 6082,
   "family": "E〤ODUS",
   "power": 856136652
  },
  {
   "server": 6082,
   "family": "LEGION",
   "power": 366927836
  },
  {
   "server": 6082,
   "family": "RM7",
   "power": 312562635
  },
  {
   "server": 6082,
   "family": "ꄲꋊ꒒ꌦꊰꋬꋊꇙ",
   "power": 279054000
  },
  {
   "server": 6082,
   "family": "Scorpions",
   "power": 236964126
  },
  {
   "server": 6082,
   "family": "Multivers",
   "power": 214154421
  },
  {
   "server": 6082,
   "family": "SHINIGAMI",
   "power": 201634645
  },
  {
   "server": 6082,
   "family": "Rebeldes",
   "power": 176553818
  },
  {
   "server": 6082,
   "family": "Colombia",
   "power": 170546941
  },
  {
   "server": 6083,
   "family": "SuicideSquad",
   "power": 645775415
  },
  {
   "server": 6083,
   "family": "Hunters_UY",
   "power": 491638086
  },
  {
   "server": 6083,
   "family": "PRO_SPAIN",
   "power": 344213805
  },
  {
   "server": 6083,
   "family": "GODSLAYERS",
   "power": 282082276
  },
  {
   "server": 6083,
   "family": "ShadowPalace",
   "power": 263292623
  },
  {
   "server": 6083,
   "family": "GENESIS",
   "power": 257318562
  },
  {
   "server": 6083,
   "family": "DEMENTES",
   "power": 172361808
  },
  {
   "server": 6083,
   "family": "ZzDiablitoszZ",
   "power": 151269364
  },
  {
   "server": 6083,
   "family": "MASTERSOFMUSH",
   "power": 150174090
  },
  {
   "server": 6083,
   "family": "LosFree2Play",
   "power": 145114230
  },
  {
   "server": 6084,
   "family": "SwordArtOnline",
   "power": 666752378
  },
  {
   "server": 6084,
   "family": "SousouFrieren",
   "power": 527629360
  },
  {
   "server": 6084,
   "family": "RTMlatam",
   "power": 229527960
  },
  {
   "server": 6084,
   "family": "TMD",
   "power": 187463968
  },
  {
   "server": 6084,
   "family": "LegionDark",
   "power": 185179342
  },
  {
   "server": 6084,
   "family": "Parabelum",
   "power": 181328570
  },
  {
   "server": 6084,
   "family": "IgrisSoul",
   "power": 131150380
  },
  {
   "server": 6084,
   "family": "ChampiOnes",
   "power": 128096522
  },
  {
   "server": 6084,
   "family": "mozqueteños",
   "power": 99597724
  },
  {
   "server": 6084,
   "family": "latan",
   "power": 56316037
  },
  {
   "server": 6085,
   "family": "ChampiAdictos",
   "power": 636872185
  },
  {
   "server": 6085,
   "family": "NovaLegendsHC",
   "power": 523933148
  },
  {
   "server": 6085,
   "family": "Savage",
   "power": 248471239
  },
  {
   "server": 6085,
   "family": "hispanos",
   "power": 233416762
  },
  {
   "server": 6085,
   "family": "Olimpo¥",
   "power": 210986782
  },
  {
   "server": 6085,
   "family": "ARGENTINA",
   "power": 186178108
  },
  {
   "server": 6085,
   "family": "Malaventurados",
   "power": 145551958
  },
  {
   "server": 6085,
   "family": "Wizards",
   "power": 139074085
  },
  {
   "server": 6085,
   "family": "tateti",
   "power": 138499139
  },
  {
   "server": 6085,
   "family": "KingsOfRoma",
   "power": 66861778
  },
  {
   "server": 6086,
   "family": "AcidSquad",
   "power": 721755995
  },
  {
   "server": 6086,
   "family": "Saborines",
   "power": 337602213
  },
  {
   "server": 6086,
   "family": "LEGENDS",
   "power": 304631206
  },
  {
   "server": 6086,
   "family": "SMOKEFAMILY",
   "power": 248656723
  },
  {
   "server": 6086,
   "family": "COLOMBIANITOS",
   "power": 166407823
  },
  {
   "server": 6086,
   "family": "GuerrerosZ",
   "power": 158161528
  },
  {
   "server": 6086,
   "family": "Uneteeee",
   "power": 44213408
  },
  {
   "server": 6086,
   "family": "LuisRayo",
   "power": 28949396
  },
  {
   "server": 6086,
   "family": "HISPANIA",
   "power": 27968810
  },
  {
   "server": 6086,
   "family": "Chilenos",
   "power": 20297327
  },
  {
   "server": 6087,
   "family": "HoneyMTV",
   "power": 713006885
  },
  {
   "server": 6087,
   "family": "Fénix",
   "power": 411930973
  },
  {
   "server": 6087,
   "family": "ʜᴏᴏʟɪɢᴀɴꜱ亗",
   "power": 345968027
  },
  {
   "server": 6087,
   "family": "RT4ㅤTEAM",
   "power": 283117788
  },
  {
   "server": 6087,
   "family": "70GT",
   "power": 239676019
  },
  {
   "server": 6087,
   "family": "a",
   "power": 171560448
  },
  {
   "server": 6087,
   "family": "nosexd",
   "power": 156849166
  },
  {
   "server": 6087,
   "family": "españitaaa",
   "power": 148421488
  },
  {
   "server": 6087,
   "family": "MancosAlPoder",
   "power": 148144002
  },
  {
   "server": 6087,
   "family": "demonicsoul",
   "power": 105419742
  },
  {
   "server": 6088,
   "family": "IMPERIUM",
   "power": 630558393
  },
  {
   "server": 6088,
   "family": "SoloLeveling",
   "power": 351830022
  },
  {
   "server": 6088,
   "family": "Colombia",
   "power": 237337314
  },
  {
   "server": 6088,
   "family": "Arevalo",
   "power": 209739525
  },
  {
   "server": 6088,
   "family": "Fuego",
   "power": 204724089
  },
  {
   "server": 6088,
   "family": "tremosqueteros",
   "power": 181215120
  },
  {
   "server": 6088,
   "family": "PRØEsp",
   "power": 151344980
  },
  {
   "server": 6088,
   "family": "D4rckAbiss",
   "power": 135844641
  },
  {
   "server": 6088,
   "family": "gerrerosviking",
   "power": 91715786
  },
  {
   "server": 6088,
   "family": "BWㅤIsraㅤএ",
   "power": 19710170
  },
  {
   "server": 6089,
   "family": "Indestructible",
   "power": 494551692
  },
  {
   "server": 6089,
   "family": "Dominators",
   "power": 312861576
  },
  {
   "server": 6089,
   "family": "BLACKDRAGONS",
   "power": 311433276
  },
  {
   "server": 6089,
   "family": "DemonS",
   "power": 296974898
  },
  {
   "server": 6089,
   "family": "MexicanosGG",
   "power": 197258634
  },
  {
   "server": 6089,
   "family": "Chapines502",
   "power": 179889688
  },
  {
   "server": 6089,
   "family": "Quesillo",
   "power": 174587534
  },
  {
   "server": 6089,
   "family": "Yperrushh",
   "power": 129920048
  },
  {
   "server": 6089,
   "family": "Overlords2",
   "power": 79350383
  },
  {
   "server": 6089,
   "family": "Argentos",
   "power": 49640758
  },
  {
   "server": 6090,
   "family": "ElmoNiado",
   "power": 655070404
  },
  {
   "server": 6090,
   "family": "TheCrew",
   "power": 437196746
  },
  {
   "server": 6090,
   "family": "Terreneitors",
   "power": 257529554
  },
  {
   "server": 6090,
   "family": "nurelianos",
   "power": 239447789
  },
  {
   "server": 6090,
   "family": "Shaoranysakura",
   "power": 188385698
  },
  {
   "server": 6090,
   "family": "GoblinSlayer",
   "power": 168803204
  },
  {
   "server": 6090,
   "family": "Mushroomlife",
   "power": 156550590
  },
  {
   "server": 6090,
   "family": "skilers",
   "power": 154945205
  },
  {
   "server": 6090,
   "family": "Shrooms",
   "power": 142041971
  },
  {
   "server": 6090,
   "family": "Eternity",
   "power": 60658856
  },
  {
   "server": 6091,
   "family": "ḰaiʝinƬeikσ𝐤u",
   "power": 552642428
  },
  {
   "server": 6091,
   "family": "CoolTop",
   "power": 256850443
  },
  {
   "server": 6091,
   "family": "Callampines",
   "power": 204934620
  },
  {
   "server": 6091,
   "family": "TheShrooms",
   "power": 169574910
  },
  {
   "server": 6091,
   "family": "Clan07",
   "power": 155853312
  },
  {
   "server": 6091,
   "family": "TopTier",
   "power": 149299411
  },
  {
   "server": 6091,
   "family": "Quidam",
   "power": 117363516
  },
  {
   "server": 6091,
   "family": "Legion",
   "power": 105319261
  },
  {
   "server": 6091,
   "family": "《NewAventure》",
   "power": 94541347
  },
  {
   "server": 6091,
   "family": "kokoaland",
   "power": 24756257
  },
  {
   "server": 6092,
   "family": "Lunaria",
   "power": 563299306
  },
  {
   "server": 6092,
   "family": "OLYMPO°LM",
   "power": 281304000
  },
  {
   "server": 6092,
   "family": "TOPxCLANES",
   "power": 260886407
  },
  {
   "server": 6092,
   "family": "Champiamiguis",
   "power": 260178632
  },
  {
   "server": 6092,
   "family": "LaGrasaSDLG",
   "power": 156853023
  },
  {
   "server": 6092,
   "family": "Alucines",
   "power": 156764389
  },
  {
   "server": 6092,
   "family": "DANGEROUS",
   "power": 138870919
  },
  {
   "server": 6092,
   "family": "Suŋ_Mooŋ",
   "power": 132103685
  },
  {
   "server": 6092,
   "family": "Ragnarok",
   "power": 95523407
  },
  {
   "server": 6092,
   "family": "LeónCarmesí",
   "power": 75516158
  },
  {
   "server": 6093,
   "family": "Drakensang",
   "power": 544505403
  },
  {
   "server": 6093,
   "family": "AFCARTEL",
   "power": 275272344
  },
  {
   "server": 6093,
   "family": "Olimpo",
   "power": 221195999
  },
  {
   "server": 6093,
   "family": "Beaters",
   "power": 207905228
  },
  {
   "server": 6093,
   "family": "Españoles",
   "power": 156559996
  },
  {
   "server": 6093,
   "family": "ZLEGION",
   "power": 132579784
  },
  {
   "server": 6093,
   "family": "RG4",
   "power": 117837523
  },
  {
   "server": 6093,
   "family": "RoninPride",
   "power": 84293204
  },
  {
   "server": 6093,
   "family": "ACRIBILLADORES",
   "power": 19594824
  },
  {
   "server": 6093,
   "family": "ESPAÑOLES",
   "power": 13842088
  },
  {
   "server": 6094,
   "family": "𝙎𝙎𝙍",
   "power": 673313813
  },
  {
   "server": 6094,
   "family": "MaCUMberos",
   "power": 300870462
  },
  {
   "server": 6094,
   "family": "SantaFilomena",
   "power": 253287625
  },
  {
   "server": 6094,
   "family": "TÜRKİYE",
   "power": 235131798
  },
  {
   "server": 6094,
   "family": "SetasChampions",
   "power": 184646063
  },
  {
   "server": 6094,
   "family": "CDG",
   "power": 142061419
  },
  {
   "server": 6094,
   "family": "LATAM",
   "power": 134496710
  },
  {
   "server": 6094,
   "family": "loslorrd",
   "power": 133170803
  },
  {
   "server": 6094,
   "family": "ONE_PIECE",
   "power": 124008988
  },
  {
   "server": 6094,
   "family": "THExFAMILY",
   "power": 119686280
  },
  {
   "server": 6095,
   "family": "OnePiece",
   "power": 677664497
  },
  {
   "server": 6095,
   "family": "TheLastWar",
   "power": 417463006
  },
  {
   "server": 6095,
   "family": "MALAVENTURADOS",
   "power": 186274572
  },
  {
   "server": 6095,
   "family": "OremosHermanos",
   "power": 178959049
  },
  {
   "server": 6095,
   "family": "elcasador32415",
   "power": 164838901
  },
  {
   "server": 6095,
   "family": "AFKs",
   "power": 163959887
  },
  {
   "server": 6095,
   "family": "MUGIWARAS",
   "power": 161857254
  },
  {
   "server": 6095,
   "family": "¥Valhalla¥",
   "power": 154034869
  },
  {
   "server": 6095,
   "family": "Alphas",
   "power": 153399785
  },
  {
   "server": 6095,
   "family": "Alucinógenos",
   "power": 125609249
  },
  {
   "server": 6096,
   "family": "La_HoRdA",
   "power": 586454305
  },
  {
   "server": 6096,
   "family": "༒FamilyCrew",
   "power": 434889857
  },
  {
   "server": 6096,
   "family": "NÉMESIS",
   "power": 263980102
  },
  {
   "server": 6096,
   "family": "Valhalla",
   "power": 238477993
  },
  {
   "server": 6096,
   "family": "ATR",
   "power": 177985281
  },
  {
   "server": 6096,
   "family": "Estrellas",
   "power": 174928847
  },
  {
   "server": 6096,
   "family": "LUCIFER",
   "power": 173555255
  },
  {
   "server": 6096,
   "family": "FFJR",
   "power": 159628455
  },
  {
   "server": 6096,
   "family": "zetas",
   "power": 157467834
  },
  {
   "server": 6096,
   "family": "Clover",
   "power": 154892938
  },
  {
   "server": 6097,
   "family": "OLIMPO",
   "power": 500664862
  },
  {
   "server": 6097,
   "family": "Top_Army",
   "power": 350149116
  },
  {
   "server": 6097,
   "family": "The_Wardens",
   "power": 302340687
  },
  {
   "server": 6097,
   "family": "BLACKﾠBULLS",
   "power": 272877103
  },
  {
   "server": 6097,
   "family": "Reapers",
   "power": 208350356
  },
  {
   "server": 6097,
   "family": "VIPxCLAN",
   "power": 203798690
  },
  {
   "server": 6097,
   "family": "SevillaCity",
   "power": 160842874
  },
  {
   "server": 6097,
   "family": "GLOBAL",
   "power": 151055984
  },
  {
   "server": 6097,
   "family": "XxMugiwaraxX",
   "power": 145474377
  },
  {
   "server": 6097,
   "family": "Conquerors",
   "power": 142906379
  },
  {
   "server": 6098,
   "family": "LegionZombie",
   "power": 532948305
  },
  {
   "server": 6098,
   "family": "LATAMSTOP",
   "power": 335683501
  },
  {
   "server": 6098,
   "family": "SOLO_LEVELING",
   "power": 262757154
  },
  {
   "server": 6098,
   "family": "ArmadaLatina",
   "power": 231879745
  },
  {
   "server": 6098,
   "family": "Chiwas",
   "power": 221243572
  },
  {
   "server": 6098,
   "family": "MushroomGang",
   "power": 174058706
  },
  {
   "server": 6098,
   "family": "Menospreciados",
   "power": 164843138
  },
  {
   "server": 6098,
   "family": "DonChampiFc",
   "power": 152102609
  },
  {
   "server": 6098,
   "family": "LATAM",
   "power": 149449829
  },
  {
   "server": 6098,
   "family": "°°SPARTA°°",
   "power": 143622108
  },
  {
   "server": 6099,
   "family": "Bloodborne",
   "power": 427845680
  },
  {
   "server": 6099,
   "family": "srzodiaco",
   "power": 331400615
  },
  {
   "server": 6099,
   "family": "SRZODIACO",
   "power": 215288531
  },
  {
   "server": 6099,
   "family": "Akatsuki",
   "power": 175050810
  },
  {
   "server": 6099,
   "family": "LegionWorld",
   "power": 158869817
  },
  {
   "server": 6099,
   "family": "CrazyWarriors",
   "power": 154626556
  },
  {
   "server": 6099,
   "family": "elrisaslol",
   "power": 154522125
  },
  {
   "server": 6099,
   "family": "Arrakis88",
   "power": 146163447
  },
  {
   "server": 6099,
   "family": "Warriors",
   "power": 136190612
  },
  {
   "server": 6099,
   "family": "ZTZ",
   "power": 108306079
  },
  {
   "server": 6100,
   "family": "Akatsuki",
   "power": 398654609
  },
  {
   "server": 6100,
   "family": "Fenix",
   "power": 344501629
  },
  {
   "server": 6100,
   "family": "乂Assassins乂",
   "power": 329237554
  },
  {
   "server": 6100,
   "family": "ImortalKingdom",
   "power": 262611564
  },
  {
   "server": 6100,
   "family": "Byakko",
   "power": 260494662
  },
  {
   "server": 6100,
   "family": "忍Ōtsutsuki族",
   "power": 184357719
  },
  {
   "server": 6100,
   "family": "Legacy",
   "power": 172712814
  },
  {
   "server": 6100,
   "family": "ThisNarnia",
   "power": 124406848
  },
  {
   "server": 6100,
   "family": "POKEMON",
   "power": 114733160
  },
  {
   "server": 6100,
   "family": "ChampiLAC",
   "power": 106565791
  },
  {
   "server": 6101,
   "family": "INMORTAL",
   "power": 291102202
  },
  {
   "server": 6101,
   "family": "TopOlympus",
   "power": 285411868
  },
  {
   "server": 6101,
   "family": "OldSchool",
   "power": 213514593
  },
  {
   "server": 6101,
   "family": "SanVerganza",
   "power": 211117582
  },
  {
   "server": 6101,
   "family": "LATAM",
   "power": 210486924
  },
  {
   "server": 6101,
   "family": "ElCulto",
   "power": 140872382
  },
  {
   "server": 6101,
   "family": "Latinos",
   "power": 140361632
  },
  {
   "server": 6101,
   "family": "Demon",
   "power": 138804693
  },
  {
   "server": 6101,
   "family": "SnowFlake",
   "power": 125753014
  },
  {
   "server": 6101,
   "family": "LATINOS",
   "power": 112602979
  },
  {
   "server": 6102,
   "family": "DarkSouls",
   "power": 385731119
  },
  {
   "server": 6102,
   "family": "OnlyFans",
   "power": 329316313
  },
  {
   "server": 6102,
   "family": "latinos",
   "power": 183169810
  },
  {
   "server": 6102,
   "family": "The༒LOM༒United",
   "power": 165889836
  },
  {
   "server": 6102,
   "family": "OrdaVikinga",
   "power": 154699212
  },
  {
   "server": 6102,
   "family": "Newbie",
   "power": 143520270
  },
  {
   "server": 6102,
   "family": "Wethermon",
   "power": 138346410
  },
  {
   "server": 6102,
   "family": "OnePiece",
   "power": 134314088
  },
  {
   "server": 6102,
   "family": "CoolTop",
   "power": 120276655
  },
  {
   "server": 6102,
   "family": "YakuzaMafia",
   "power": 111913691
  },
  {
   "server": 6103,
   "family": "Los7Pecados",
   "power": 316083783
  },
  {
   "server": 6103,
   "family": "Wyverns",
   "power": 315237316
  },
  {
   "server": 6103,
   "family": "Ophiocordyceps",
   "power": 286882725
  },
  {
   "server": 6103,
   "family": "Espectral2024",
   "power": 199518771
  },
  {
   "server": 6103,
   "family": "Trauma2",
   "power": 198955202
  },
  {
   "server": 6103,
   "family": "HollowSK",
   "power": 162707759
  },
  {
   "server": 6103,
   "family": "LATINOS",
   "power": 131934396
  },
  {
   "server": 6103,
   "family": "LosChampiñArg",
   "power": 110830640
  },
  {
   "server": 6103,
   "family": "IMPERIO",
   "power": 102772317
  },
  {
   "server": 6103,
   "family": "Berserkers",
   "power": 74422150
  },
  {
   "server": 6104,
   "family": "OnlySmoke",
   "power": 216888954
  },
  {
   "server": 6104,
   "family": "Latin",
   "power": 163865119
  },
  {
   "server": 6104,
   "family": "BoB",
   "power": 155846214
  },
  {
   "server": 6104,
   "family": "NightRaid",
   "power": 121919072
  },
  {
   "server": 6104,
   "family": "VeneHongos",
   "power": 115825269
  },
  {
   "server": 6104,
   "family": "Huamanes",
   "power": 110958461
  },
  {
   "server": 6104,
   "family": "ATS",
   "power": 105486882
  },
  {
   "server": 6104,
   "family": "LEGENDS",
   "power": 95914893
  },
  {
   "server": 6104,
   "family": "TopLegenDs",
   "power": 85883910
  },
  {
   "server": 6104,
   "family": "DarkHole",
   "power": 82766787
  },
  {
   "server": 6105,
   "family": "SlayerKings",
   "power": 55488313
  },
  {
   "server": 6105,
   "family": "Guilty",
   "power": 36496576
  },
  {
   "server": 6105,
   "family": "TrueDemons",
   "power": 30413809
  },
  {
   "server": 6105,
   "family": "LatinHeroe",
   "power": 25909137
  },
  {
   "server": 6105,
   "family": "Latin",
   "power": 25111020
  },
  {
   "server": 6105,
   "family": "Academia_UA",
   "power": 23098278
  },
  {
   "server": 6105,
   "family": "Turtels",
   "power": 21653877
  },
  {
   "server": 6105,
   "family": "MapachesClub",
   "power": 20714617
  },
  {
   "server": 6105,
   "family": "j",
   "power": 20594054
  },
  {
   "server": 6105,
   "family": "Kamigami",
   "power": 20316234
  },
  {
   "server": 6106,
   "family": "xShiniGamiSx",
   "power": 0
  },
  {
   "server": 6106,
   "family": "ASGARD",
   "power": 0
  },
  {
   "server": 6106,
   "family": "DESERT",
   "power": 0
  },
  {
   "server": 6106,
   "family": "latinos",
   "power": 0
  },
  {
   "server": 6106,
   "family": "Sirs",
   "power": 0
  },
  {
   "server": 6106,
   "family": "Astro",
   "power": 0
  },
  {
   "server": 6106,
   "family": "DARK",
   "power": 0
  },
  {
   "server": 6106,
   "family": "Nirvana",
   "power": 0
  },
  {
   "server": 6106,
   "family": "WOLFGANG",
   "power": 0
  },
  {
   "server": 6106,
   "family": "CHUKE",
   "power": 0
  },
  {
   "server": 6107,
   "family": "TopGang",
   "power": 0
  },
  {
   "server": 6107,
   "family": "×CDG×",
   "power": 0
  },
  {
   "server": 6107,
   "family": "ZonaRoja",
   "power": 0
  },
  {
   "server": 6107,
   "family": "TheCrew",
   "power": 0
  },
  {
   "server": 6107,
   "family": "F4_ESPORTS",
   "power": 0
  },
  {
   "server": 6107,
   "family": "ORTZIGAMERyouT",
   "power": 0
  },
  {
   "server": 6107,
   "family": "AlwaysHappy",
   "power": 0
  },
  {
   "server": 6107,
   "family": "HongoDrogon",
   "power": 0
  },
  {
   "server": 6107,
   "family": "Puchunguitos",
   "power": 0
  },
  {
   "server": 6107,
   "family": "Legendary",
   "power": 0
  },
  {
   "server": 11001,
   "family": "ulsaN_ClaN",
   "power": 1689458951
  },
  {
   "server": 11001,
   "family": "OsViraLatas",
   "power": 1181224349
  },
  {
   "server": 11001,
   "family": "MiauMiau",
   "power": 1136318234
  },
  {
   "server": 11001,
   "family": "BrasilForce",
   "power": 988877892
  },
  {
   "server": 11001,
   "family": "Akatsuki",
   "power": 594075728
  },
  {
   "server": 11001,
   "family": "BRASIL",
   "power": 513674723
  },
  {
   "server": 11001,
   "family": "IronSky",
   "power": 282803998
  },
  {
   "server": 11001,
   "family": "BANG",
   "power": 261955712
  },
  {
   "server": 11001,
   "family": "MorningStars",
   "power": 250816233
  },
  {
   "server": 11001,
   "family": "LendasBr",
   "power": 237432894
  },
  {
   "server": 11002,
   "family": "Resistência",
   "power": 1405285020
  },
  {
   "server": 11002,
   "family": "YGGDRASIL",
   "power": 1275271207
  },
  {
   "server": 11002,
   "family": "Drakensang",
   "power": 968867504
  },
  {
   "server": 11002,
   "family": "YGG_ASGARD",
   "power": 624517879
  },
  {
   "server": 11002,
   "family": "BRASIL",
   "power": 418833150
  },
  {
   "server": 11002,
   "family": "WonderLand",
   "power": 392953616
  },
  {
   "server": 11002,
   "family": "CogumeloBrasil",
   "power": 359598842
  },
  {
   "server": 11002,
   "family": "ChaosMushrooms",
   "power": 359440673
  },
  {
   "server": 11002,
   "family": "Brasil",
   "power": 334706429
  },
  {
   "server": 11002,
   "family": "YakuzaBR",
   "power": 259612922
  },
  {
   "server": 11003,
   "family": "Blazzers",
   "power": 1642323816
  },
  {
   "server": 11003,
   "family": "KillForFunghi",
   "power": 1363531508
  },
  {
   "server": 11003,
   "family": "Bla2zers",
   "power": 947593110
  },
  {
   "server": 11003,
   "family": "SoulBR",
   "power": 544203385
  },
  {
   "server": 11003,
   "family": "CalvosAnonimos",
   "power": 395050023
  },
  {
   "server": 11003,
   "family": "HiTkill",
   "power": 388305990
  },
  {
   "server": 11003,
   "family": "NightRaid",
   "power": 301123708
  },
  {
   "server": 11003,
   "family": "AKATSUKI",
   "power": 253006101
  },
  {
   "server": 11003,
   "family": "4i20_BR",
   "power": 231748176
  },
  {
   "server": 11003,
   "family": "GLADIADORES",
   "power": 198207454
  },
  {
   "server": 11004,
   "family": "CARAMELOBR",
   "power": 1517835142
  },
  {
   "server": 11004,
   "family": "Avangers",
   "power": 917529925
  },
  {
   "server": 11004,
   "family": "EliteBR",
   "power": 641446326
  },
  {
   "server": 11004,
   "family": "BRmushrooms",
   "power": 640054156
  },
  {
   "server": 11004,
   "family": "Lucky",
   "power": 515995771
  },
  {
   "server": 11004,
   "family": "Brasil",
   "power": 294516033
  },
  {
   "server": 11004,
   "family": "ROCAN",
   "power": 267695981
  },
  {
   "server": 11004,
   "family": "AntiLGBT",
   "power": 227595539
  },
  {
   "server": 11004,
   "family": "Uchiha",
   "power": 216834598
  },
  {
   "server": 11004,
   "family": "Method",
   "power": 208091264
  },
  {
   "server": 11005,
   "family": "Ragnarok",
   "power": 1571051329
  },
  {
   "server": 11005,
   "family": "MushBR",
   "power": 954583729
  },
  {
   "server": 11005,
   "family": "Freekings",
   "power": 838107657
  },
  {
   "server": 11005,
   "family": "Brasileiros",
   "power": 461657965
  },
  {
   "server": 11005,
   "family": "Realeza",
   "power": 413312521
  },
  {
   "server": 11005,
   "family": "Valhala",
   "power": 240717464
  },
  {
   "server": 11005,
   "family": "BrasilTOP1",
   "power": 193968370
  },
  {
   "server": 11005,
   "family": "SoulEterium",
   "power": 186704804
  },
  {
   "server": 11005,
   "family": "FANATICOS",
   "power": 184983974
  },
  {
   "server": 11005,
   "family": "IsekaiMushroom",
   "power": 153110540
  },
  {
   "server": 11006,
   "family": "ʳᵍᵏㅤRagnarok",
   "power": 1463398594
  },
  {
   "server": 11006,
   "family": "BlackMushroom",
   "power": 1259509116
  },
  {
   "server": 11006,
   "family": "ƇꝒㅤⱿƸⱤø",
   "power": 668995773
  },
  {
   "server": 11006,
   "family": "Brasil",
   "power": 496235017
  },
  {
   "server": 11006,
   "family": "BR_IMPERIAL",
   "power": 334402514
  },
  {
   "server": 11006,
   "family": "Top_rank",
   "power": 277818108
  },
  {
   "server": 11006,
   "family": "IMPÉRIO",
   "power": 268708149
  },
  {
   "server": 11006,
   "family": "Magikarp",
   "power": 228817139
  },
  {
   "server": 11006,
   "family": "CAMP",
   "power": 227682568
  },
  {
   "server": 11006,
   "family": "TryHard",
   "power": 189242525
  },
  {
   "server": 11007,
   "family": "Nêmesis",
   "power": 1372466724
  },
  {
   "server": 11007,
   "family": "Ragnarok",
   "power": 1311787270
  },
  {
   "server": 11007,
   "family": "Ʀєвirτнッ",
   "power": 950221055
  },
  {
   "server": 11007,
   "family": "Ragnarok²",
   "power": 519866271
  },
  {
   "server": 11007,
   "family": "Cabaré",
   "power": 398219076
  },
  {
   "server": 11007,
   "family": "NoiasBR",
   "power": 303148228
  },
  {
   "server": 11007,
   "family": "HUNTERS",
   "power": 275813656
  },
  {
   "server": 11007,
   "family": "Blackcats",
   "power": 228246677
  },
  {
   "server": 11007,
   "family": "NaçãoBr",
   "power": 219949373
  },
  {
   "server": 11007,
   "family": "Brasil",
   "power": 209359221
  },
  {
   "server": 11008,
   "family": "Yggdrasil",
   "power": 1479560456
  },
  {
   "server": 11008,
   "family": "Fungi",
   "power": 627071459
  },
  {
   "server": 11008,
   "family": "assassinos",
   "power": 362527376
  },
  {
   "server": 11008,
   "family": "NAZARICK",
   "power": 266032236
  },
  {
   "server": 11008,
   "family": "winx",
   "power": 237073951
  },
  {
   "server": 11008,
   "family": "Fortune",
   "power": 189617317
  },
  {
   "server": 11008,
   "family": "AfterLife",
   "power": 157078452
  },
  {
   "server": 11008,
   "family": "Statera",
   "power": 131295655
  },
  {
   "server": 11008,
   "family": "BRZone",
   "power": 127032614
  },
  {
   "server": 11008,
   "family": "Shadow",
   "power": 401918
  },
  {
   "server": 11009,
   "family": "BrTeam",
   "power": 1550445679
  },
  {
   "server": 11009,
   "family": "Brasil_Team",
   "power": 1022614011
  },
  {
   "server": 11009,
   "family": "LosGrandesBR",
   "power": 193956102
  },
  {
   "server": 11009,
   "family": "TerraLa",
   "power": 183048883
  },
  {
   "server": 11009,
   "family": "LastLegacy",
   "power": 145799287
  },
  {
   "server": 11009,
   "family": "Draconic",
   "power": 145241477
  },
  {
   "server": 11009,
   "family": "BH_e_nois",
   "power": 118148415
  },
  {
   "server": 11009,
   "family": "ModaFocaMaple",
   "power": 118023261
  },
  {
   "server": 11009,
   "family": "Winx",
   "power": 26356289
  },
  {
   "server": 11009,
   "family": "Toptier",
   "power": 10631549
  },
  {
   "server": 11010,
   "family": "BlackBull",
   "power": 1639354178
  },
  {
   "server": 11010,
   "family": "Knight",
   "power": 1217800695
  },
  {
   "server": 11010,
   "family": "Elysium",
   "power": 550705877
  },
  {
   "server": 11010,
   "family": "Rexpeita",
   "power": 428877219
  },
  {
   "server": 11010,
   "family": "ASGARD",
   "power": 362857355
  },
  {
   "server": 11010,
   "family": "ETERNOS",
   "power": 237854398
  },
  {
   "server": 11010,
   "family": "HATAKE",
   "power": 185805983
  },
  {
   "server": 11010,
   "family": "BRASIL",
   "power": 134202432
  },
  {
   "server": 11010,
   "family": "Fenix",
   "power": 115328547
  },
  {
   "server": 11010,
   "family": "Bichiarovscla",
   "power": 11750489
  },
  {
   "server": 11011,
   "family": "G᥆DFᥲthᥱr",
   "power": 1594437967
  },
  {
   "server": 11011,
   "family": "LOUD",
   "power": 851006026
  },
  {
   "server": 11011,
   "family": "ONIPOTENTES",
   "power": 332714851
  },
  {
   "server": 11011,
   "family": "NATIVOS",
   "power": 270251742
  },
  {
   "server": 11011,
   "family": "FURIAA",
   "power": 228055405
  },
  {
   "server": 11011,
   "family": "DeadlyClaw_BR",
   "power": 226526124
  },
  {
   "server": 11011,
   "family": "Sear°",
   "power": 198128975
  },
  {
   "server": 11011,
   "family": "BR",
   "power": 152949581
  },
  {
   "server": 11011,
   "family": "AiinKalicas",
   "power": 57305970
  },
  {
   "server": 11011,
   "family": "CogumeloAmarel",
   "power": 31447234
  },
  {
   "server": 11014,
   "family": "UniTedBrothers",
   "power": 1352541191
  },
  {
   "server": 11014,
   "family": "PROJECT_BR",
   "power": 694747810
  },
  {
   "server": 11014,
   "family": "Brazucas",
   "power": 657323707
  },
  {
   "server": 11014,
   "family": "WarriorsBR",
   "power": 335387681
  },
  {
   "server": 11014,
   "family": "CoguCabeças",
   "power": 260413307
  },
  {
   "server": 11014,
   "family": "BERSERK",
   "power": 233537326
  },
  {
   "server": 11014,
   "family": "IMPUROsBR",
   "power": 193899250
  },
  {
   "server": 11014,
   "family": "UA_ACADEMY",
   "power": 174995398
  },
  {
   "server": 11014,
   "family": "RedBeastBR",
   "power": 165548578
  },
  {
   "server": 11014,
   "family": "Mushroons",
   "power": 158051876
  },
  {
   "server": 11015,
   "family": "Strix",
   "power": 1350462069
  },
  {
   "server": 11015,
   "family": "Sillence",
   "power": 671594396
  },
  {
   "server": 11015,
   "family": "Cogumelinhos",
   "power": 355196390
  },
  {
   "server": 11015,
   "family": "aleviou",
   "power": 319120073
  },
  {
   "server": 11015,
   "family": "Caçadorez",
   "power": 276178993
  },
  {
   "server": 11015,
   "family": "Berserk",
   "power": 254204460
  },
  {
   "server": 11015,
   "family": "Xvideos",
   "power": 246994379
  },
  {
   "server": 11015,
   "family": "Brazucas",
   "power": 218609856
  },
  {
   "server": 11015,
   "family": "BRASIL",
   "power": 207428354
  },
  {
   "server": 11015,
   "family": "VASCO",
   "power": 195733472
  },
  {
   "server": 11016,
   "family": "NightRaid",
   "power": 1261525495
  },
  {
   "server": 11016,
   "family": "NAZARICK",
   "power": 1121822778
  },
  {
   "server": 11016,
   "family": "One_Piece",
   "power": 483815915
  },
  {
   "server": 11016,
   "family": "GodofWar",
   "power": 298672487
  },
  {
   "server": 11016,
   "family": "CogumelosBR",
   "power": 266313787
  },
  {
   "server": 11016,
   "family": "Shadow",
   "power": 254018534
  },
  {
   "server": 11016,
   "family": "Moranguinhos",
   "power": 195870750
  },
  {
   "server": 11016,
   "family": "Monark",
   "power": 176050349
  },
  {
   "server": 11016,
   "family": "TeamŌkami",
   "power": 165763705
  },
  {
   "server": 11016,
   "family": "Ahjin",
   "power": 140242883
  },
  {
   "server": 11017,
   "family": "Brasil",
   "power": 1397191630
  },
  {
   "server": 11017,
   "family": "Yakuza",
   "power": 1095974131
  },
  {
   "server": 11017,
   "family": "CORRUPÇÃO",
   "power": 899032800
  },
  {
   "server": 11017,
   "family": "Valhalla",
   "power": 291365030
  },
  {
   "server": 11017,
   "family": "BRcarai",
   "power": 267416296
  },
  {
   "server": 11017,
   "family": "KingKogumelo",
   "power": 259357669
  },
  {
   "server": 11017,
   "family": "cogumeloLOCAO",
   "power": 227629793
  },
  {
   "server": 11017,
   "family": "TearsOfKingdom",
   "power": 153932597
  },
  {
   "server": 11017,
   "family": "MBL",
   "power": 136874944
  },
  {
   "server": 11017,
   "family": "TOPsBRASIL",
   "power": 126185879
  },
  {
   "server": 11018,
   "family": "MTC_MYSTIC",
   "power": 1206407297
  },
  {
   "server": 11018,
   "family": "AKATSUKI",
   "power": 496808413
  },
  {
   "server": 11018,
   "family": "LEGEND",
   "power": 467955499
  },
  {
   "server": 11018,
   "family": "Oblivion",
   "power": 374787277
  },
  {
   "server": 11018,
   "family": "●◉ＡＫＡＴＳＵＫＩ◉●",
   "power": 255413799
  },
  {
   "server": 11018,
   "family": "Punheteros",
   "power": 245141309
  },
  {
   "server": 11018,
   "family": "Rapaiz",
   "power": 225840078
  },
  {
   "server": 11018,
   "family": "IRMANDADE",
   "power": 169425234
  },
  {
   "server": 11018,
   "family": "Aliança",
   "power": 159375484
  },
  {
   "server": 11018,
   "family": "Brigata",
   "power": 124375393
  },
  {
   "server": 11019,
   "family": "Yakuza",
   "power": 1277883918
  },
  {
   "server": 11019,
   "family": "Coconuts",
   "power": 1263094235
  },
  {
   "server": 11019,
   "family": "Demon",
   "power": 454864933
  },
  {
   "server": 11019,
   "family": "brasil",
   "power": 301684041
  },
  {
   "server": 11019,
   "family": "Akatsuki°",
   "power": 228916501
  },
  {
   "server": 11019,
   "family": "brazilflips",
   "power": 200266046
  },
  {
   "server": 11019,
   "family": "CogumelosBR",
   "power": 170513298
  },
  {
   "server": 11019,
   "family": "WARRIORS_BR",
   "power": 168017269
  },
  {
   "server": 11019,
   "family": "topES",
   "power": 144644990
  },
  {
   "server": 11019,
   "family": "BR_Hunters",
   "power": 121544721
  },
  {
   "server": 11020,
   "family": "CaóticosBR",
   "power": 1360175667
  },
  {
   "server": 11020,
   "family": "LosPatitos",
   "power": 671192500
  },
  {
   "server": 11020,
   "family": "yggdrasil",
   "power": 507022343
  },
  {
   "server": 11020,
   "family": "Cogumelos",
   "power": 500670110
  },
  {
   "server": 11020,
   "family": "FamíliaBr",
   "power": 355529206
  },
  {
   "server": 11020,
   "family": "NewOrder",
   "power": 354884389
  },
  {
   "server": 11020,
   "family": "betterslicer",
   "power": 234483920
  },
  {
   "server": 11020,
   "family": "Lords",
   "power": 225578997
  },
  {
   "server": 11020,
   "family": "TITAN",
   "power": 183916642
  },
  {
   "server": 11020,
   "family": "Sharingan",
   "power": 155877544
  },
  {
   "server": 11021,
   "family": "FANTASY",
   "power": 1255764733
  },
  {
   "server": 11021,
   "family": "𝔇𝔢𝔪𝔬𝔫𝔰࿐ྂ",
   "power": 1005787376
  },
  {
   "server": 11021,
   "family": "BrSaoPaulo",
   "power": 324025869
  },
  {
   "server": 11021,
   "family": "Cães_de_guerra",
   "power": 301757389
  },
  {
   "server": 11021,
   "family": "Valhalla",
   "power": 280894133
  },
  {
   "server": 11021,
   "family": "Brasileiros",
   "power": 252286071
  },
  {
   "server": 11021,
   "family": "Alpha",
   "power": 234622862
  },
  {
   "server": 11021,
   "family": "Legião",
   "power": 206802374
  },
  {
   "server": 11021,
   "family": "Apocalipse",
   "power": 157329523
  },
  {
   "server": 11021,
   "family": "TBrasil",
   "power": 152442978
  },
  {
   "server": 11022,
   "family": "CAPANGAS",
   "power": 1234921974
  },
  {
   "server": 11022,
   "family": "Ragnarok",
   "power": 1075157144
  },
  {
   "server": 11022,
   "family": "MAFIA",
   "power": 309983620
  },
  {
   "server": 11022,
   "family": "Akatsuki",
   "power": 272708884
  },
  {
   "server": 11022,
   "family": "TopBRASIL",
   "power": 267415060
  },
  {
   "server": 11022,
   "family": "cogumelos",
   "power": 257466166
  },
  {
   "server": 11022,
   "family": "SERES",
   "power": 207129333
  },
  {
   "server": 11022,
   "family": "Pecados",
   "power": 188879529
  },
  {
   "server": 11022,
   "family": "Bope",
   "power": 168983569
  },
  {
   "server": 11022,
   "family": "MUSHROOM",
   "power": 128809924
  },
  {
   "server": 11023,
   "family": "Brasil",
   "power": 1198950570
  },
  {
   "server": 11023,
   "family": "Apocalipse",
   "power": 1095387623
  },
  {
   "server": 11023,
   "family": "Carnificina",
   "power": 350409724
  },
  {
   "server": 11023,
   "family": "Aventureiros",
   "power": 313390895
  },
  {
   "server": 11023,
   "family": "PaladinosBRsc",
   "power": 253349991
  },
  {
   "server": 11023,
   "family": "Intocáveis",
   "power": 217839288
  },
  {
   "server": 11023,
   "family": "EternalBr",
   "power": 217202031
  },
  {
   "server": 11023,
   "family": "ALPHA",
   "power": 172234404
  },
  {
   "server": 11023,
   "family": "GALÁCTICOS",
   "power": 158002287
  },
  {
   "server": 11023,
   "family": "ômega",
   "power": 107350945
  },
  {
   "server": 11024,
   "family": "°AVENGERS°",
   "power": 1382693364
  },
  {
   "server": 11024,
   "family": "Legionários",
   "power": 829368796
  },
  {
   "server": 11024,
   "family": "MERCENÁRIOS",
   "power": 523097658
  },
  {
   "server": 11024,
   "family": "BRASIL",
   "power": 495669468
  },
  {
   "server": 11024,
   "family": "alfa45",
   "power": 178112272
  },
  {
   "server": 11024,
   "family": "os_brabo_br",
   "power": 165168328
  },
  {
   "server": 11024,
   "family": "isekai",
   "power": 162173281
  },
  {
   "server": 11024,
   "family": "onepiece",
   "power": 96456839
  },
  {
   "server": 11024,
   "family": "Akatsuki",
   "power": 90594316
  },
  {
   "server": 11024,
   "family": "ANARCHY",
   "power": 89161099
  },
  {
   "server": 11025,
   "family": "Brzada",
   "power": 1276742443
  },
  {
   "server": 11025,
   "family": "CasaDaMãeJoana",
   "power": 1140458571
  },
  {
   "server": 11025,
   "family": "BLACKOUT",
   "power": 350008990
  },
  {
   "server": 11025,
   "family": "BrAZuKaS",
   "power": 324441650
  },
  {
   "server": 11025,
   "family": "EliteBrasil",
   "power": 300418842
  },
  {
   "server": 11025,
   "family": "Ordem",
   "power": 203385709
  },
  {
   "server": 11025,
   "family": "BrasilClan",
   "power": 177407143
  },
  {
   "server": 11025,
   "family": "ONEPUNCHMAN",
   "power": 172594070
  },
  {
   "server": 11025,
   "family": "GusuLan",
   "power": 163764287
  },
  {
   "server": 11025,
   "family": "serpenteNegra",
   "power": 156868031
  },
  {
   "server": 11026,
   "family": "SANCTUNBR",
   "power": 1389024610
  },
  {
   "server": 11026,
   "family": "TomorrowStar",
   "power": 834160343
  },
  {
   "server": 11026,
   "family": "StonkesBR",
   "power": 377830340
  },
  {
   "server": 11026,
   "family": "Guardiões",
   "power": 345423547
  },
  {
   "server": 11026,
   "family": "SHADOWS",
   "power": 340058299
  },
  {
   "server": 11026,
   "family": "horizon",
   "power": 283461271
  },
  {
   "server": 11026,
   "family": "BLACKmash",
   "power": 235236217
  },
  {
   "server": 11026,
   "family": "BlackClover",
   "power": 217534450
  },
  {
   "server": 11026,
   "family": "NÓIAS",
   "power": 211120020
  },
  {
   "server": 11026,
   "family": "oneㅤpieceㅤreal",
   "power": 203671668
  },
  {
   "server": 11027,
   "family": "MagicShrooms",
   "power": 1240725944
  },
  {
   "server": 11027,
   "family": "FAMILIABR",
   "power": 820687710
  },
  {
   "server": 11027,
   "family": "INFINITY",
   "power": 530221377
  },
  {
   "server": 11027,
   "family": "Yokai",
   "power": 245404435
  },
  {
   "server": 11027,
   "family": "xXxBRASILxXx",
   "power": 216164565
  },
  {
   "server": 11027,
   "family": "Brasil",
   "power": 211844112
  },
  {
   "server": 11027,
   "family": "DRAGONS",
   "power": 211748411
  },
  {
   "server": 11027,
   "family": "governo",
   "power": 200736426
  },
  {
   "server": 11027,
   "family": "brsparta",
   "power": 193049373
  },
  {
   "server": 11027,
   "family": "Ceifadores",
   "power": 183325457
  },
  {
   "server": 11028,
   "family": "MystSpores",
   "power": 1397697903
  },
  {
   "server": 11028,
   "family": "Dinasty",
   "power": 790416609
  },
  {
   "server": 11028,
   "family": "Brazil",
   "power": 398448672
  },
  {
   "server": 11028,
   "family": "Insane",
   "power": 309512980
  },
  {
   "server": 11028,
   "family": "Kuzumin",
   "power": 226213166
  },
  {
   "server": 11028,
   "family": "AKATSUKI🪽🦊",
   "power": 225281555
  },
  {
   "server": 11028,
   "family": "Akatsuki",
   "power": 224803278
  },
  {
   "server": 11028,
   "family": "Spry",
   "power": 192144607
  },
  {
   "server": 11028,
   "family": "×Cogumelos⁴⁰°",
   "power": 178084828
  },
  {
   "server": 11028,
   "family": "XVIDEOS",
   "power": 174486936
  },
  {
   "server": 11029,
   "family": "SANTAIGREJA",
   "power": 1368088765
  },
  {
   "server": 11029,
   "family": "Brasil_Kingdom",
   "power": 286044753
  },
  {
   "server": 11029,
   "family": "BR_Hunter",
   "power": 213341902
  },
  {
   "server": 11029,
   "family": "BR",
   "power": 195806491
  },
  {
   "server": 11029,
   "family": "BL4CKSUNBR",
   "power": 189548383
  },
  {
   "server": 11029,
   "family": "Escola_Jujutsu",
   "power": 180338363
  },
  {
   "server": 11029,
   "family": "DarkDragons",
   "power": 175251491
  },
  {
   "server": 11029,
   "family": "BOSS",
   "power": 171388376
  },
  {
   "server": 11029,
   "family": "Cogumelo_Br",
   "power": 170995394
  },
  {
   "server": 11029,
   "family": "DarkFenix",
   "power": 160226429
  },
  {
   "server": 11030,
   "family": "MIBR",
   "power": 1099811665
  },
  {
   "server": 11030,
   "family": "CogulandiaBR",
   "power": 628516889
  },
  {
   "server": 11030,
   "family": "Cogumelitos",
   "power": 289239315
  },
  {
   "server": 11030,
   "family": "DEUSES",
   "power": 261758141
  },
  {
   "server": 11030,
   "family": "TEMPEST",
   "power": 252507382
  },
  {
   "server": 11030,
   "family": "BRASIL",
   "power": 224233316
  },
  {
   "server": 11030,
   "family": "Monarcas",
   "power": 223546194
  },
  {
   "server": 11030,
   "family": "osLendários",
   "power": 168081236
  },
  {
   "server": 11030,
   "family": "PunhosDeFogo",
   "power": 154053765
  },
  {
   "server": 11030,
   "family": "AUTHENTIC",
   "power": 134010865
  },
  {
   "server": 11031,
   "family": "PRIME",
   "power": 1305306309
  },
  {
   "server": 11031,
   "family": "Hazit",
   "power": 819605419
  },
  {
   "server": 11031,
   "family": "ForteBr",
   "power": 312238550
  },
  {
   "server": 11031,
   "family": "LEGIONÁRIOS",
   "power": 216120149
  },
  {
   "server": 11031,
   "family": "ImperioBr",
   "power": 175157441
  },
  {
   "server": 11031,
   "family": "Jatumorre",
   "power": 160741603
  },
  {
   "server": 11031,
   "family": "NovaOrdem",
   "power": 157126216
  },
  {
   "server": 11031,
   "family": "psicodélico",
   "power": 98042445
  },
  {
   "server": 11031,
   "family": "so_lendarios",
   "power": 77566139
  },
  {
   "server": 11031,
   "family": "Recriar",
   "power": 66554984
  },
  {
   "server": 11032,
   "family": "𝕯i𝖓𝖆𝖘𝖙i𝖆",
   "power": 1461332497
  },
  {
   "server": 11032,
   "family": "૮ѳ૨đy૮૯ρઽ",
   "power": 534290771
  },
  {
   "server": 11032,
   "family": "Tsukimichi",
   "power": 488390573
  },
  {
   "server": 11032,
   "family": "442BR",
   "power": 399125395
  },
  {
   "server": 11032,
   "family": "Mugiwaras",
   "power": 230540313
  },
  {
   "server": 11032,
   "family": "Reis",
   "power": 186087169
  },
  {
   "server": 11032,
   "family": "COGUDEVIL",
   "power": 180030181
  },
  {
   "server": 11032,
   "family": "Gloriosos",
   "power": 139070335
  },
  {
   "server": 11032,
   "family": "sicklesBR",
   "power": 128258033
  },
  {
   "server": 11032,
   "family": "Brasil",
   "power": 68024063
  },
  {
   "server": 11033,
   "family": "Konoha",
   "power": 1263383441
  },
  {
   "server": 11033,
   "family": "TheNight",
   "power": 1064508090
  },
  {
   "server": 11033,
   "family": "DogsOfWar",
   "power": 295632087
  },
  {
   "server": 11033,
   "family": "Notoxicc",
   "power": 189893515
  },
  {
   "server": 11033,
   "family": "Mayhem",
   "power": 175557936
  },
  {
   "server": 11033,
   "family": "LOUCOMELLOS",
   "power": 145707623
  },
  {
   "server": 11033,
   "family": "Targaryen",
   "power": 134617448
  },
  {
   "server": 11033,
   "family": "rip_indra6",
   "power": 45716814
  },
  {
   "server": 11033,
   "family": "LGBT",
   "power": 34002513
  },
  {
   "server": 11033,
   "family": "lindinhosFC",
   "power": 8568957
  },
  {
   "server": 11034,
   "family": "LIØNS×BRs",
   "power": 1217547125
  },
  {
   "server": 11034,
   "family": "COGU",
   "power": 430709570
  },
  {
   "server": 11034,
   "family": "Brasill",
   "power": 289437112
  },
  {
   "server": 11034,
   "family": "Hell_AngelS",
   "power": 261505568
  },
  {
   "server": 11034,
   "family": "XxBRxX",
   "power": 243016105
  },
  {
   "server": 11034,
   "family": "Brasil",
   "power": 209971766
  },
  {
   "server": 11034,
   "family": "só_quem_e_pro",
   "power": 172440095
  },
  {
   "server": 11034,
   "family": "todt99",
   "power": 146284518
  },
  {
   "server": 11034,
   "family": "OnTopS",
   "power": 121403043
  },
  {
   "server": 11034,
   "family": "espadanegra",
   "power": 111500933
  },
  {
   "server": 11035,
   "family": "VeganS",
   "power": 1334397601
  },
  {
   "server": 11035,
   "family": "BRAZUKAS",
   "power": 558047374
  },
  {
   "server": 11035,
   "family": "Vipers",
   "power": 434991185
  },
  {
   "server": 11035,
   "family": "MIRACITY",
   "power": 285990138
  },
  {
   "server": 11035,
   "family": "brs",
   "power": 256000106
  },
  {
   "server": 11035,
   "family": "AltoFPS",
   "power": 249818702
  },
  {
   "server": 11035,
   "family": "Blacks",
   "power": 232294452
  },
  {
   "server": 11035,
   "family": "magos",
   "power": 230293474
  },
  {
   "server": 11035,
   "family": "Flexis",
   "power": 208733746
  },
  {
   "server": 11035,
   "family": "Destroyers",
   "power": 197056434
  },
  {
   "server": 11036,
   "family": "Millenium",
   "power": 1286006599
  },
  {
   "server": 11036,
   "family": "OsAvançados",
   "power": 771346474
  },
  {
   "server": 11036,
   "family": "TheMushrooms",
   "power": 270345016
  },
  {
   "server": 11036,
   "family": "Sturmabteilung",
   "power": 266928156
  },
  {
   "server": 11036,
   "family": "PacíficosBR",
   "power": 248842854
  },
  {
   "server": 11036,
   "family": "Bearszz",
   "power": 227774887
  },
  {
   "server": 11036,
   "family": "Deidara",
   "power": 192388574
  },
  {
   "server": 11036,
   "family": "UNIDOSPERDEMOS",
   "power": 182957795
  },
  {
   "server": 11036,
   "family": "Yakuza",
   "power": 174295613
  },
  {
   "server": 11036,
   "family": "DungeonOfDrago",
   "power": 150398866
  },
  {
   "server": 11037,
   "family": "Totalitários",
   "power": 1169659790
  },
  {
   "server": 11037,
   "family": "Paradise",
   "power": 312660939
  },
  {
   "server": 11037,
   "family": "Brasileiros",
   "power": 295074825
  },
  {
   "server": 11037,
   "family": "KingsBlack",
   "power": 231714512
  },
  {
   "server": 11037,
   "family": "MithrilBr",
   "power": 199881609
  },
  {
   "server": 11037,
   "family": "Konoha",
   "power": 190114216
  },
  {
   "server": 11037,
   "family": "Venerados",
   "power": 183481084
  },
  {
   "server": 11037,
   "family": "Ahjin",
   "power": 138498782
  },
  {
   "server": 11037,
   "family": "Cogumelos",
   "power": 96814449
  },
  {
   "server": 11037,
   "family": "UniãoBR",
   "power": 80568588
  },
  {
   "server": 11038,
   "family": "Olimpo",
   "power": 1315097824
  },
  {
   "server": 11038,
   "family": "Blood𝙼𝙾𝙾𝙽",
   "power": 876471830
  },
  {
   "server": 11038,
   "family": "Ligeirinhos",
   "power": 270770998
  },
  {
   "server": 11038,
   "family": "TropaCogumelo",
   "power": 261727328
  },
  {
   "server": 11038,
   "family": "KSame",
   "power": 173185839
  },
  {
   "server": 11038,
   "family": "BrasilPiece",
   "power": 162749864
  },
  {
   "server": 11038,
   "family": "Fungi",
   "power": 159489921
  },
  {
   "server": 11038,
   "family": "TheLordsBr",
   "power": 149635143
  },
  {
   "server": 11038,
   "family": "CogumelosBravo",
   "power": 148624179
  },
  {
   "server": 11038,
   "family": "Konoha",
   "power": 95455037
  },
  {
   "server": 11039,
   "family": "Lacoste",
   "power": 1203646251
  },
  {
   "server": 11039,
   "family": "ANJOSdaNOITE",
   "power": 442614075
  },
  {
   "server": 11039,
   "family": "tamojunto",
   "power": 230677714
  },
  {
   "server": 11039,
   "family": "Shichibukais",
   "power": 220946091
  },
  {
   "server": 11039,
   "family": "Honor_of_kings",
   "power": 162582142
  },
  {
   "server": 11039,
   "family": "tubarão",
   "power": 153337199
  },
  {
   "server": 11039,
   "family": "spf",
   "power": 139403007
  },
  {
   "server": 11039,
   "family": "TheBatlleRoyal",
   "power": 117513578
  },
  {
   "server": 11039,
   "family": "GØD",
   "power": 97293323
  },
  {
   "server": 11039,
   "family": "BLACK_COGUMELO",
   "power": 61654558
  },
  {
   "server": 11040,
   "family": "MountOlympuS",
   "power": 1386327766
  },
  {
   "server": 11040,
   "family": "SaiCachorro",
   "power": 483945750
  },
  {
   "server": 11040,
   "family": "INSS",
   "power": 435571619
  },
  {
   "server": 11040,
   "family": "50_ELITE",
   "power": 255438935
  },
  {
   "server": 11040,
   "family": "Wolfs",
   "power": 241444404
  },
  {
   "server": 11040,
   "family": "Hogwarts",
   "power": 211938719
  },
  {
   "server": 11040,
   "family": "BRASIL",
   "power": 122826571
  },
  {
   "server": 11040,
   "family": "CLÃ_DO_TROVÃO",
   "power": 116736295
  },
  {
   "server": 11040,
   "family": "império",
   "power": 107895616
  },
  {
   "server": 11040,
   "family": "AKATSUKI",
   "power": 103104800
  },
  {
   "server": 11041,
   "family": "Digiescolhidos",
   "power": 1214436682
  },
  {
   "server": 11041,
   "family": "LEGENDS",
   "power": 413252639
  },
  {
   "server": 11041,
   "family": "Brasil",
   "power": 317792807
  },
  {
   "server": 11041,
   "family": "GøldPhøenix",
   "power": 248894162
  },
  {
   "server": 11041,
   "family": "Akatsukibr",
   "power": 235187069
  },
  {
   "server": 11041,
   "family": "Konoha",
   "power": 202006566
  },
  {
   "server": 11041,
   "family": "ESCANOR_GG",
   "power": 178376985
  },
  {
   "server": 11041,
   "family": "Gamers",
   "power": 171856626
  },
  {
   "server": 11041,
   "family": "mercenários",
   "power": 142566321
  },
  {
   "server": 11041,
   "family": "Cogomelões",
   "power": 121286808
  },
  {
   "server": 11042,
   "family": "Outlaws",
   "power": 1048509915
  },
  {
   "server": 11042,
   "family": "NovaOrdem",
   "power": 975502367
  },
  {
   "server": 11042,
   "family": "VIKINGS",
   "power": 310401456
  },
  {
   "server": 11042,
   "family": "BRASIL",
   "power": 153107623
  },
  {
   "server": 11042,
   "family": "CovilBR",
   "power": 149756086
  },
  {
   "server": 11042,
   "family": "Dragon",
   "power": 130023095
  },
  {
   "server": 11042,
   "family": "éo_bronks",
   "power": 127917117
  },
  {
   "server": 11042,
   "family": "LOST LEGION",
   "power": 95374930
  },
  {
   "server": 11042,
   "family": "TROLSBR",
   "power": 73800352
  },
  {
   "server": 11042,
   "family": "LINE_X",
   "power": 44624879
  },
  {
   "server": 11043,
   "family": "MáfiaGesso",
   "power": 840748667
  },
  {
   "server": 11043,
   "family": "WAGesso",
   "power": 442820102
  },
  {
   "server": 11043,
   "family": "MushGrooms",
   "power": 261007185
  },
  {
   "server": 11043,
   "family": "LevelUP",
   "power": 210326097
  },
  {
   "server": 11043,
   "family": "Falcons",
   "power": 203328169
  },
  {
   "server": 11043,
   "family": "DESOCUPADOS",
   "power": 198845592
  },
  {
   "server": 11043,
   "family": "Os_Garças",
   "power": 118556126
  },
  {
   "server": 11043,
   "family": "deidecosta",
   "power": 94359778
  },
  {
   "server": 11043,
   "family": "Fraternity",
   "power": 49049143
  },
  {
   "server": 11043,
   "family": "Winchester",
   "power": 46213110
  },
  {
   "server": 11044,
   "family": "CaLabResO",
   "power": 1161509426
  },
  {
   "server": 11044,
   "family": "Adamantinos",
   "power": 476081119
  },
  {
   "server": 11044,
   "family": "linguico",
   "power": 273553373
  },
  {
   "server": 11044,
   "family": "Xerife",
   "power": 266948694
  },
  {
   "server": 11044,
   "family": "Akatsuki",
   "power": 221686360
  },
  {
   "server": 11044,
   "family": "Vultures",
   "power": 210793075
  },
  {
   "server": 11044,
   "family": "9Ângulos",
   "power": 201710616
  },
  {
   "server": 11044,
   "family": "BoaConduta",
   "power": 177379598
  },
  {
   "server": 11044,
   "family": "chalix",
   "power": 148514732
  },
  {
   "server": 11044,
   "family": "Akira",
   "power": 109812577
  },
  {
   "server": 11045,
   "family": "BrasilLegend",
   "power": 1226569569
  },
  {
   "server": 11045,
   "family": "Revoltz",
   "power": 1022800218
  },
  {
   "server": 11045,
   "family": "Brasil",
   "power": 268323829
  },
  {
   "server": 11045,
   "family": "Cogumelinhos",
   "power": 244978427
  },
  {
   "server": 11045,
   "family": "Dorime",
   "power": 229494856
  },
  {
   "server": 11045,
   "family": "Ortegga",
   "power": 227480731
  },
  {
   "server": 11045,
   "family": "YONKOS",
   "power": 218642533
  },
  {
   "server": 11045,
   "family": "Cogu_Darks",
   "power": 198974043
  },
  {
   "server": 11045,
   "family": "AkiraEterno",
   "power": 172502245
  },
  {
   "server": 11045,
   "family": "WolfBR",
   "power": 172468942
  },
  {
   "server": 11046,
   "family": "GeneiRyodan",
   "power": 1256234001
  },
  {
   "server": 11046,
   "family": "Noxus",
   "power": 389465098
  },
  {
   "server": 11046,
   "family": "R3negados",
   "power": 359895265
  },
  {
   "server": 11046,
   "family": "FourSeason",
   "power": 244882315
  },
  {
   "server": 11046,
   "family": "andarilhos",
   "power": 224594893
  },
  {
   "server": 11046,
   "family": "Kalvos",
   "power": 214604961
  },
  {
   "server": 11046,
   "family": "SANGUINÁRIOS",
   "power": 196702371
  },
  {
   "server": 11046,
   "family": "LOUD",
   "power": 167189535
  },
  {
   "server": 11046,
   "family": "OsBig",
   "power": 158348858
  },
  {
   "server": 11046,
   "family": "OsBrabos",
   "power": 152117328
  },
  {
   "server": 11047,
   "family": "TheKingdom",
   "power": 1245892197
  },
  {
   "server": 11047,
   "family": "THUNDERBOLTS",
   "power": 506621682
  },
  {
   "server": 11047,
   "family": "Invictus_BR",
   "power": 313421075
  },
  {
   "server": 11047,
   "family": "Fierce",
   "power": 271422183
  },
  {
   "server": 11047,
   "family": "IMPERIO",
   "power": 224624087
  },
  {
   "server": 11047,
   "family": "Pecadores",
   "power": 223357428
  },
  {
   "server": 11047,
   "family": "DeathWish",
   "power": 165643237
  },
  {
   "server": 11047,
   "family": "BrMania",
   "power": 150094564
  },
  {
   "server": 11047,
   "family": "TodoPoderosO",
   "power": 141725110
  },
  {
   "server": 11047,
   "family": "luffy",
   "power": 140179323
  },
  {
   "server": 11048,
   "family": "MaNiACosBR",
   "power": 1026443039
  },
  {
   "server": 11048,
   "family": "GhostGomelos",
   "power": 493625537
  },
  {
   "server": 11048,
   "family": "Cogulandia",
   "power": 396922960
  },
  {
   "server": 11048,
   "family": "Akatsuki",
   "power": 217573211
  },
  {
   "server": 11048,
   "family": "Annihilation",
   "power": 199946454
  },
  {
   "server": 11048,
   "family": "Nazarick",
   "power": 195378191
  },
  {
   "server": 11048,
   "family": "ALUCINAÇÃO",
   "power": 176201733
  },
  {
   "server": 11048,
   "family": "SABONETEIRA",
   "power": 160710837
  },
  {
   "server": 11048,
   "family": "ImperioMush",
   "power": 133466079
  },
  {
   "server": 11048,
   "family": "Killers",
   "power": 132688798
  },
  {
   "server": 11049,
   "family": "LastLegacy",
   "power": 1305823238
  },
  {
   "server": 11049,
   "family": "HuntersSA",
   "power": 750087251
  },
  {
   "server": 11049,
   "family": "Valhalla",
   "power": 307815330
  },
  {
   "server": 11049,
   "family": "BRAZUKAS",
   "power": 223329927
  },
  {
   "server": 11049,
   "family": "Hunters",
   "power": 174135974
  },
  {
   "server": 11049,
   "family": "DEMONS",
   "power": 172359617
  },
  {
   "server": 11049,
   "family": "ShadowBlade",
   "power": 172038679
  },
  {
   "server": 11049,
   "family": "MushLimes",
   "power": 154826659
  },
  {
   "server": 11049,
   "family": "shalala",
   "power": 139187824
  },
  {
   "server": 11049,
   "family": "FoXNiNe",
   "power": 121331885
  },
  {
   "server": 11050,
   "family": "Phoenix",
   "power": 1298465628
  },
  {
   "server": 11050,
   "family": "Futuristic",
   "power": 1050825371
  },
  {
   "server": 11050,
   "family": "CaosBR",
   "power": 222746220
  },
  {
   "server": 11050,
   "family": "UniãoBR",
   "power": 219188468
  },
  {
   "server": 11050,
   "family": "Seraphim",
   "power": 216265408
  },
  {
   "server": 11050,
   "family": "IMORTAIS",
   "power": 197437800
  },
  {
   "server": 11050,
   "family": "ReisDosFungos",
   "power": 181799679
  },
  {
   "server": 11050,
   "family": "Os_Lord",
   "power": 130137742
  },
  {
   "server": 11050,
   "family": "Arcanjos",
   "power": 89352523
  },
  {
   "server": 11050,
   "family": "INFERNO",
   "power": 85366479
  },
  {
   "server": 11051,
   "family": "TRYHARD’S",
   "power": 1304756651
  },
  {
   "server": 11051,
   "family": "Try_HarD_2",
   "power": 477460240
  },
  {
   "server": 11051,
   "family": "HASHIRAS¹⁵⁷",
   "power": 332006703
  },
  {
   "server": 11051,
   "family": "Gladiators",
   "power": 268858238
  },
  {
   "server": 11051,
   "family": "Flamengo",
   "power": 232585034
  },
  {
   "server": 11051,
   "family": "WarriorsBR",
   "power": 228370839
  },
  {
   "server": 11051,
   "family": "Brazukas",
   "power": 187861146
  },
  {
   "server": 11051,
   "family": "banguela",
   "power": 163800805
  },
  {
   "server": 11051,
   "family": "LegiãoBR",
   "power": 137972832
  },
  {
   "server": 11051,
   "family": "BRASILEIROS",
   "power": 134165155
  },
  {
   "server": 11052,
   "family": "AlcatraZ",
   "power": 1175854310
  },
  {
   "server": 11052,
   "family": "ESPARTA",
   "power": 1000889584
  },
  {
   "server": 11052,
   "family": "INSANOS",
   "power": 281088714
  },
  {
   "server": 11052,
   "family": "ESCORPION",
   "power": 273315457
  },
  {
   "server": 11052,
   "family": "Brazino",
   "power": 263660346
  },
  {
   "server": 11052,
   "family": "BrasilClan",
   "power": 213716490
  },
  {
   "server": 11052,
   "family": "COGUMELOS",
   "power": 144162352
  },
  {
   "server": 11052,
   "family": "legends",
   "power": 139996706
  },
  {
   "server": 11052,
   "family": "TOP_1",
   "power": 113499610
  },
  {
   "server": 11052,
   "family": "TryHARD",
   "power": 104395592
  },
  {
   "server": 11053,
   "family": "NaoEoCogumelo",
   "power": 1259941411
  },
  {
   "server": 11053,
   "family": "DragonsWar",
   "power": 418068362
  },
  {
   "server": 11053,
   "family": "TropaDoManTén",
   "power": 253126279
  },
  {
   "server": 11053,
   "family": "Batatinhas",
   "power": 234786593
  },
  {
   "server": 11053,
   "family": "RioDeJaneiro",
   "power": 214234114
  },
  {
   "server": 11053,
   "family": "La_Mafia",
   "power": 174986812
  },
  {
   "server": 11053,
   "family": "BRAZIL",
   "power": 163632565
  },
  {
   "server": 11053,
   "family": "cogumelorei",
   "power": 145659895
  },
  {
   "server": 11053,
   "family": "DeusesDaGuerra",
   "power": 131227457
  },
  {
   "server": 11053,
   "family": "VingançaBrasil",
   "power": 104322957
  },
  {
   "server": 11054,
   "family": "MIBR",
   "power": 942037384
  },
  {
   "server": 11054,
   "family": "Punish",
   "power": 514021040
  },
  {
   "server": 11054,
   "family": "Dragões",
   "power": 301973372
  },
  {
   "server": 11054,
   "family": "MyHeroAcademia",
   "power": 277608649
  },
  {
   "server": 11054,
   "family": "REAPERS",
   "power": 222262729
  },
  {
   "server": 11054,
   "family": "Brasileiros",
   "power": 157193740
  },
  {
   "server": 11054,
   "family": "makhinas",
   "power": 155661237
  },
  {
   "server": 11054,
   "family": "casadores",
   "power": 144762716
  },
  {
   "server": 11054,
   "family": "DeathﾠNote",
   "power": 140685725
  },
  {
   "server": 11054,
   "family": "_Ninja_",
   "power": 130095251
  },
  {
   "server": 11055,
   "family": "BrasiL",
   "power": 1328281257
  },
  {
   "server": 11055,
   "family": "TARGARYEN",
   "power": 399383712
  },
  {
   "server": 11055,
   "family": "KONOHA",
   "power": 375611128
  },
  {
   "server": 11055,
   "family": "Vingadores",
   "power": 231149850
  },
  {
   "server": 11055,
   "family": "Soberanos",
   "power": 222850522
  },
  {
   "server": 11055,
   "family": "Borderline",
   "power": 173861695
  },
  {
   "server": 11055,
   "family": "BelfordRoxo",
   "power": 167764061
  },
  {
   "server": 11055,
   "family": "MAGICMUSHROOM",
   "power": 150328252
  },
  {
   "server": 11055,
   "family": "BRAZIL",
   "power": 134107913
  },
  {
   "server": 11055,
   "family": "LENGENDARY",
   "power": 125778294
  },
  {
   "server": 11056,
   "family": "TOMAai",
   "power": 991586055
  },
  {
   "server": 11056,
   "family": "EliteYORDLES",
   "power": 802358834
  },
  {
   "server": 11056,
   "family": "IMPÉRIO",
   "power": 516407580
  },
  {
   "server": 11056,
   "family": "HitkiLL",
   "power": 429281645
  },
  {
   "server": 11056,
   "family": "WARRIORS",
   "power": 285781019
  },
  {
   "server": 11056,
   "family": "BRASIL",
   "power": 260880128
  },
  {
   "server": 11056,
   "family": "FENIX",
   "power": 229877238
  },
  {
   "server": 11056,
   "family": "Brasil",
   "power": 158255255
  },
  {
   "server": 11056,
   "family": "adolfpittler",
   "power": 142717364
  },
  {
   "server": 11056,
   "family": "BRNoobs",
   "power": 122803755
  },
  {
   "server": 11057,
   "family": "sɪɴɴᴇʀs",
   "power": 1300846893
  },
  {
   "server": 11057,
   "family": "Exilio",
   "power": 491446808
  },
  {
   "server": 11057,
   "family": "Lutadores",
   "power": 430814152
  },
  {
   "server": 11057,
   "family": "resenha_dos_br",
   "power": 362792195
  },
  {
   "server": 11057,
   "family": "The_Demons",
   "power": 278366973
  },
  {
   "server": 11057,
   "family": "fortes",
   "power": 238678665
  },
  {
   "server": 11057,
   "family": "Dracuria",
   "power": 227413868
  },
  {
   "server": 11057,
   "family": "Solo",
   "power": 225188969
  },
  {
   "server": 11057,
   "family": "DARKSKY",
   "power": 207111134
  },
  {
   "server": 11057,
   "family": "D̶E̶N̶V̶E̶R̶S̶",
   "power": 187575997
  },
  {
   "server": 11058,
   "family": "NEXT",
   "power": 1283523769
  },
  {
   "server": 11058,
   "family": "NEXT²",
   "power": 544220092
  },
  {
   "server": 11058,
   "family": "NovoMundo",
   "power": 542526568
  },
  {
   "server": 11058,
   "family": "HALLOWEEN",
   "power": 431320216
  },
  {
   "server": 11058,
   "family": "Legends_of",
   "power": 200642595
  },
  {
   "server": 11058,
   "family": "OzLombrados",
   "power": 180354724
  },
  {
   "server": 11058,
   "family": "DEUSES",
   "power": 180022206
  },
  {
   "server": 11058,
   "family": "Akatsuki",
   "power": 176969744
  },
  {
   "server": 11058,
   "family": "Muguiwara",
   "power": 170558041
  },
  {
   "server": 11058,
   "family": "LordsBR",
   "power": 135568134
  },
  {
   "server": 11059,
   "family": "SS59",
   "power": 1175937206
  },
  {
   "server": 11059,
   "family": "SS59²",
   "power": 411280293
  },
  {
   "server": 11059,
   "family": "RJ021",
   "power": 302991012
  },
  {
   "server": 11059,
   "family": "RENEGADOS",
   "power": 219138975
  },
  {
   "server": 11059,
   "family": "Firmo",
   "power": 179753092
  },
  {
   "server": 11059,
   "family": "Themushrooms",
   "power": 157792445
  },
  {
   "server": 11059,
   "family": "TRIVIUM",
   "power": 137648547
  },
  {
   "server": 11059,
   "family": "B4",
   "power": 119008872
  },
  {
   "server": 11059,
   "family": "Theﾠdragons",
   "power": 117815655
  },
  {
   "server": 11059,
   "family": "cogumelos",
   "power": 108935688
  },
  {
   "server": 11060,
   "family": "BRASIL",
   "power": 1100184415
  },
  {
   "server": 11060,
   "family": "INFINITY",
   "power": 466655528
  },
  {
   "server": 11060,
   "family": "InvictuS",
   "power": 318909886
  },
  {
   "server": 11060,
   "family": "Celestiais",
   "power": 275976435
  },
  {
   "server": 11060,
   "family": "ZENIN",
   "power": 211690336
  },
  {
   "server": 11060,
   "family": "Brazucas",
   "power": 159972186
  },
  {
   "server": 11060,
   "family": "SYNERGY",
   "power": 158360352
  },
  {
   "server": 11060,
   "family": "Heaven",
   "power": 152771201
  },
  {
   "server": 11060,
   "family": "ProPlayes",
   "power": 150177457
  },
  {
   "server": 11060,
   "family": "cogu_sangrento",
   "power": 136333766
  },
  {
   "server": 11061,
   "family": "SHADOW",
   "power": 1034933081
  },
  {
   "server": 11061,
   "family": "TheFriends",
   "power": 855762757
  },
  {
   "server": 11061,
   "family": "OsLendários",
   "power": 457679174
  },
  {
   "server": 11061,
   "family": "BRAZUCA",
   "power": 189633556
  },
  {
   "server": 11061,
   "family": "LegendMushBr",
   "power": 174658545
  },
  {
   "server": 11061,
   "family": "os_pro_zica",
   "power": 130921923
  },
  {
   "server": 11061,
   "family": "tropadocalvo",
   "power": 116581109
  },
  {
   "server": 11061,
   "family": "NewGuild",
   "power": 114088321
  },
  {
   "server": 11061,
   "family": "OsMacetaFirme",
   "power": 107935560
  },
  {
   "server": 11061,
   "family": "S1NI1STR0S",
   "power": 49378946
  },
  {
   "server": 11062,
   "family": "CAFEÉBOM",
   "power": 1039980361
  },
  {
   "server": 11062,
   "family": "DURATESTON",
   "power": 514002116
  },
  {
   "server": 11062,
   "family": "Massacre",
   "power": 399491183
  },
  {
   "server": 11062,
   "family": "Armagedon",
   "power": 347173531
  },
  {
   "server": 11062,
   "family": "Brasileiros",
   "power": 220963904
  },
  {
   "server": 11062,
   "family": "Brasil",
   "power": 157042869
  },
  {
   "server": 11062,
   "family": "Venom",
   "power": 154700318
  },
  {
   "server": 11062,
   "family": "BRAZIL",
   "power": 136636879
  },
  {
   "server": 11062,
   "family": "SHORYUKEN",
   "power": 91092734
  },
  {
   "server": 11062,
   "family": "NinjaTurtles",
   "power": 73673178
  },
  {
   "server": 11063,
   "family": "𝐆𝐡𝐨𝐬𝐭𝐬",
   "power": 1071653312
  },
  {
   "server": 11063,
   "family": "Elites",
   "power": 337550081
  },
  {
   "server": 11063,
   "family": "Demacia",
   "power": 304378808
  },
  {
   "server": 11063,
   "family": "PeakyBlinders",
   "power": 228509193
  },
  {
   "server": 11063,
   "family": "DemonSlayer",
   "power": 193992677
  },
  {
   "server": 11063,
   "family": "Império",
   "power": 172945726
  },
  {
   "server": 11063,
   "family": "BRBAZUKA",
   "power": 166658031
  },
  {
   "server": 11063,
   "family": "MG",
   "power": 157215038
  },
  {
   "server": 11063,
   "family": "DarkSiderz",
   "power": 151419729
  },
  {
   "server": 11063,
   "family": "PAPA_NOOB",
   "power": 134676708
  },
  {
   "server": 11064,
   "family": "WORLD",
   "power": 1192525249
  },
  {
   "server": 11064,
   "family": "NewAge",
   "power": 707769523
  },
  {
   "server": 11064,
   "family": "Mushroow",
   "power": 346128806
  },
  {
   "server": 11064,
   "family": "Capivara",
   "power": 268154437
  },
  {
   "server": 11064,
   "family": "ClanUchiha",
   "power": 267631532
  },
  {
   "server": 11064,
   "family": "Psyco",
   "power": 201906868
  },
  {
   "server": 11064,
   "family": "BRASILBR",
   "power": 196271749
  },
  {
   "server": 11064,
   "family": "MOICANOS",
   "power": 166090912
  },
  {
   "server": 11064,
   "family": "LEGIÃO",
   "power": 145109514
  },
  {
   "server": 11064,
   "family": "BRASIL",
   "power": 129349572
  },
  {
   "server": 11065,
   "family": "Brotherhood",
   "power": 1265272554
  },
  {
   "server": 11065,
   "family": "Brotherhoodᴬᶜʸ",
   "power": 503150478
  },
  {
   "server": 11065,
   "family": "BUTECO",
   "power": 500874227
  },
  {
   "server": 11065,
   "family": "magnatas",
   "power": 248791583
  },
  {
   "server": 11065,
   "family": "BLITZ",
   "power": 234752460
  },
  {
   "server": 11065,
   "family": "PAMSAS_157",
   "power": 208609365
  },
  {
   "server": 11065,
   "family": "Wakanda",
   "power": 172513132
  },
  {
   "server": 11065,
   "family": "DRAGONBALL",
   "power": 151590780
  },
  {
   "server": 11065,
   "family": "JAGATA",
   "power": 145660540
  },
  {
   "server": 11065,
   "family": "Uchiha",
   "power": 141214003
  },
  {
   "server": 11066,
   "family": "Abyss",
   "power": 1169737056
  },
  {
   "server": 11066,
   "family": "TeamBrasil",
   "power": 433104017
  },
  {
   "server": 11066,
   "family": "HEINEKEN",
   "power": 385270742
  },
  {
   "server": 11066,
   "family": "RAGNAROK",
   "power": 238190854
  },
  {
   "server": 11066,
   "family": "Dragões",
   "power": 235101327
  },
  {
   "server": 11066,
   "family": "generais_BR",
   "power": 213855484
  },
  {
   "server": 11066,
   "family": "Cogumelitos",
   "power": 164975373
  },
  {
   "server": 11066,
   "family": "ClanUchiha",
   "power": 160438093
  },
  {
   "server": 11066,
   "family": "coguland",
   "power": 154531351
  },
  {
   "server": 11066,
   "family": "cogulindos",
   "power": 127250414
  },
  {
   "server": 11067,
   "family": "ALIANÇA TX",
   "power": 1302780741
  },
  {
   "server": 11067,
   "family": "ACADEMY_TX",
   "power": 463970919
  },
  {
   "server": 11067,
   "family": "deathwalker",
   "power": 389008167
  },
  {
   "server": 11067,
   "family": "GOHST",
   "power": 343971942
  },
  {
   "server": 11067,
   "family": "MUSHROOM",
   "power": 315471133
  },
  {
   "server": 11067,
   "family": "LaCotte",
   "power": 245282549
  },
  {
   "server": 11067,
   "family": "OverPower",
   "power": 237263417
  },
  {
   "server": 11067,
   "family": "Playlandia",
   "power": 236775990
  },
  {
   "server": 11067,
   "family": "CasaDoPapai",
   "power": 204825845
  },
  {
   "server": 11067,
   "family": "KingMushroom",
   "power": 125310283
  },
  {
   "server": 11068,
   "family": "BRAZUKAS",
   "power": 1159720340
  },
  {
   "server": 11068,
   "family": "BRASILWAR",
   "power": 706929235
  },
  {
   "server": 11068,
   "family": "KILLERS",
   "power": 497605229
  },
  {
   "server": 11068,
   "family": "FREEDOM",
   "power": 279077915
  },
  {
   "server": 11068,
   "family": "OsBraziukas",
   "power": 258883886
  },
  {
   "server": 11068,
   "family": "Sunlight",
   "power": 236928192
  },
  {
   "server": 11068,
   "family": "morte",
   "power": 228519297
  },
  {
   "server": 11068,
   "family": "mtfrtatamrt",
   "power": 159553379
  },
  {
   "server": 11068,
   "family": "LOSTBLU",
   "power": 107731751
  },
  {
   "server": 11068,
   "family": "Vikings",
   "power": 103134488
  },
  {
   "server": 11069,
   "family": "BlackBulls",
   "power": 970765318
  },
  {
   "server": 11069,
   "family": "Hellsing",
   "power": 517245636
  },
  {
   "server": 11069,
   "family": "The_Brazil",
   "power": 254358748
  },
  {
   "server": 11069,
   "family": "APEXBRASIL",
   "power": 215627843
  },
  {
   "server": 11069,
   "family": "ILLUMINATIS",
   "power": 201837258
  },
  {
   "server": 11069,
   "family": "OnePiece",
   "power": 180023774
  },
  {
   "server": 11069,
   "family": "americangods",
   "power": 159918996
  },
  {
   "server": 11069,
   "family": "Ningt",
   "power": 143899931
  },
  {
   "server": 11069,
   "family": "macaco■atômico",
   "power": 140528227
  },
  {
   "server": 11069,
   "family": "Akatsuk",
   "power": 119808584
  },
  {
   "server": 11070,
   "family": "FamíliaBR",
   "power": 1250834258
  },
  {
   "server": 11070,
   "family": "AcademyBR",
   "power": 413414084
  },
  {
   "server": 11070,
   "family": "LENDARIOS",
   "power": 351402418
  },
  {
   "server": 11070,
   "family": "YAKUZA",
   "power": 338196610
  },
  {
   "server": 11070,
   "family": "lovecats",
   "power": 307232792
  },
  {
   "server": 11070,
   "family": "Para_o_futuro",
   "power": 209033791
  },
  {
   "server": 11070,
   "family": "RAU4I",
   "power": 177324100
  },
  {
   "server": 11070,
   "family": "champignons",
   "power": 177201195
  },
  {
   "server": 11070,
   "family": "Kings",
   "power": 124557151
  },
  {
   "server": 11070,
   "family": "imortais",
   "power": 84668523
  },
  {
   "server": 11071,
   "family": "Alcateia",
   "power": 1210243625
  },
  {
   "server": 11071,
   "family": "Goetia",
   "power": 1086524970
  },
  {
   "server": 11071,
   "family": "Akatsuki",
   "power": 412962300
  },
  {
   "server": 11071,
   "family": "Alucinógenos",
   "power": 321304760
  },
  {
   "server": 11071,
   "family": "LordsBrasil",
   "power": 220116498
  },
  {
   "server": 11071,
   "family": "imperadores",
   "power": 211048827
  },
  {
   "server": 11071,
   "family": "birulinha",
   "power": 203890749
  },
  {
   "server": 11071,
   "family": "fafnir",
   "power": 192821953
  },
  {
   "server": 11071,
   "family": "私は強いbr",
   "power": 153645853
  },
  {
   "server": 11071,
   "family": "FAMILIABR",
   "power": 153505230
  },
  {
   "server": 11072,
   "family": "Winx  Club",
   "power": 1294611079
  },
  {
   "server": 11072,
   "family": "Revolution",
   "power": 486161080
  },
  {
   "server": 11072,
   "family": "imortais",
   "power": 321507365
  },
  {
   "server": 11072,
   "family": "SANGUINÁRIOS",
   "power": 310437327
  },
  {
   "server": 11072,
   "family": "WolfgangBR",
   "power": 216064108
  },
  {
   "server": 11072,
   "family": "Neo",
   "power": 190250734
  },
  {
   "server": 11072,
   "family": "_SECRETS_",
   "power": 175740804
  },
  {
   "server": 11072,
   "family": "LIBERTY",
   "power": 169235096
  },
  {
   "server": 11072,
   "family": "TavolaRedonda",
   "power": 147845846
  },
  {
   "server": 11072,
   "family": "Bandodofalcão",
   "power": 146057012
  },
  {
   "server": 11073,
   "family": "FimoseDragons",
   "power": 1280869147
  },
  {
   "server": 11073,
   "family": "Valhalla",
   "power": 657151260
  },
  {
   "server": 11073,
   "family": "BØPË",
   "power": 445341878
  },
  {
   "server": 11073,
   "family": "Brasileirão",
   "power": 400286252
  },
  {
   "server": 11073,
   "family": "Zed",
   "power": 273411983
  },
  {
   "server": 11073,
   "family": "TimeFlash",
   "power": 270328538
  },
  {
   "server": 11073,
   "family": "ArcanjosBr",
   "power": 229662488
  },
  {
   "server": 11073,
   "family": "ghosts44444",
   "power": 175585802
  },
  {
   "server": 11073,
   "family": "GARRA",
   "power": 162522872
  },
  {
   "server": 11073,
   "family": "KAMIKAZE",
   "power": 127378677
  },
  {
   "server": 11074,
   "family": "°𝔉𝔲𝔰𝔦𝔬𝔫",
   "power": 1239107746
  },
  {
   "server": 11074,
   "family": "AKATSUKI",
   "power": 539142869
  },
  {
   "server": 11074,
   "family": "caramelBR",
   "power": 494243152
  },
  {
   "server": 11074,
   "family": "Lucky",
   "power": 275479547
  },
  {
   "server": 11074,
   "family": "TheKings",
   "power": 259214356
  },
  {
   "server": 11074,
   "family": "Apóstolos",
   "power": 179226049
  },
  {
   "server": 11074,
   "family": "₲hs_tté",
   "power": 176541764
  },
  {
   "server": 11074,
   "family": "ʲʲᵏ",
   "power": 156785272
  },
  {
   "server": 11074,
   "family": "Cultoas8",
   "power": 110813588
  },
  {
   "server": 11074,
   "family": "Kings",
   "power": 80860451
  },
  {
   "server": 11075,
   "family": "Olimpo",
   "power": 1091881561
  },
  {
   "server": 11075,
   "family": "Coveiros",
   "power": 1014484229
  },
  {
   "server": 11075,
   "family": "Oxidoido",
   "power": 369240136
  },
  {
   "server": 11075,
   "family": "DesmondVazio",
   "power": 234734976
  },
  {
   "server": 11075,
   "family": "AmigosBR",
   "power": 230788015
  },
  {
   "server": 11075,
   "family": "WOW",
   "power": 186168097
  },
  {
   "server": 11075,
   "family": "ômega",
   "power": 182269597
  },
  {
   "server": 11075,
   "family": "GM",
   "power": 175106366
  },
  {
   "server": 11075,
   "family": "BRASIL",
   "power": 173254865
  },
  {
   "server": 11075,
   "family": "CRONOS",
   "power": 165295615
  },
  {
   "server": 11076,
   "family": "BHZ",
   "power": 1209553613
  },
  {
   "server": 11076,
   "family": "Anarkia99",
   "power": 1076699255
  },
  {
   "server": 11076,
   "family": "BRASIL",
   "power": 352559218
  },
  {
   "server": 11076,
   "family": "BrasilOnLine",
   "power": 320842257
  },
  {
   "server": 11076,
   "family": "TopBRs",
   "power": 301645033
  },
  {
   "server": 11076,
   "family": "ᙇLIBERTY",
   "power": 240787406
  },
  {
   "server": 11076,
   "family": "BrasilLegend",
   "power": 225450118
  },
  {
   "server": 11076,
   "family": "Lordsbr",
   "power": 215476651
  },
  {
   "server": 11076,
   "family": "CogulaBR",
   "power": 160114379
  },
  {
   "server": 11076,
   "family": "ReinoDoHaxixe",
   "power": 158195820
  },
  {
   "server": 11077,
   "family": "ASGARD",
   "power": 1336476089
  },
  {
   "server": 11077,
   "family": "TRIBO",
   "power": 678940583
  },
  {
   "server": 11077,
   "family": "Brasileiros",
   "power": 369852927
  },
  {
   "server": 11077,
   "family": "KonoSuba",
   "power": 341143992
  },
  {
   "server": 11077,
   "family": "Nosbrabos",
   "power": 338680994
  },
  {
   "server": 11077,
   "family": "brasukas",
   "power": 305650026
  },
  {
   "server": 11077,
   "family": "jolieblack",
   "power": 270552909
  },
  {
   "server": 11077,
   "family": "AKTSUKI",
   "power": 186010283
  },
  {
   "server": 11077,
   "family": "Black_Monkey",
   "power": 172610540
  },
  {
   "server": 11077,
   "family": "Champignons",
   "power": 162607071
  },
  {
   "server": 11078,
   "family": "Tempest",
   "power": 1283060572
  },
  {
   "server": 11078,
   "family": "TheBest",
   "power": 910002583
  },
  {
   "server": 11078,
   "family": "BrasilBR",
   "power": 379588736
  },
  {
   "server": 11078,
   "family": "IMPÉRIO",
   "power": 300353382
  },
  {
   "server": 11078,
   "family": "Imparaveis",
   "power": 297267658
  },
  {
   "server": 11078,
   "family": "CDM",
   "power": 251516817
  },
  {
   "server": 11078,
   "family": "ELITEㅤBR",
   "power": 233775422
  },
  {
   "server": 11078,
   "family": "Overlord",
   "power": 197156509
  },
  {
   "server": 11078,
   "family": "God_Of_Fungus",
   "power": 166578874
  },
  {
   "server": 11078,
   "family": "CalacaCatrina",
   "power": 121354580
  },
  {
   "server": 11079,
   "family": "IMPÉRIOS",
   "power": 1132731078
  },
  {
   "server": 11079,
   "family": "LogHorizon",
   "power": 465390063
  },
  {
   "server": 11079,
   "family": "SkyofStars",
   "power": 372829299
  },
  {
   "server": 11079,
   "family": "PsyTrance",
   "power": 249228821
  },
  {
   "server": 11079,
   "family": "INVICTOS",
   "power": 239704595
  },
  {
   "server": 11079,
   "family": "AKATSUKI",
   "power": 236208969
  },
  {
   "server": 11079,
   "family": "SpartansBR",
   "power": 213755964
  },
  {
   "server": 11079,
   "family": "Brasil",
   "power": 186227263
  },
  {
   "server": 11079,
   "family": "FLUXO",
   "power": 170388135
  },
  {
   "server": 11079,
   "family": "ArrowKillers",
   "power": 167284366
  },
  {
   "server": 11080,
   "family": "MONSTERS",
   "power": 1049704370
  },
  {
   "server": 11080,
   "family": "JujutsuKaisen",
   "power": 1036764965
  },
  {
   "server": 11080,
   "family": "LendariosBR",
   "power": 307841986
  },
  {
   "server": 11080,
   "family": "Valhalla_BR",
   "power": 288990495
  },
  {
   "server": 11080,
   "family": "HELL",
   "power": 277588528
  },
  {
   "server": 11080,
   "family": "TheKillers",
   "power": 240831892
  },
  {
   "server": 11080,
   "family": "OVERLORD",
   "power": 213383624
  },
  {
   "server": 11080,
   "family": "PARADOXXX",
   "power": 202639424
  },
  {
   "server": 11080,
   "family": "KnightsBr",
   "power": 159226515
  },
  {
   "server": 11080,
   "family": "wFin",
   "power": 151869005
  },
  {
   "server": 11081,
   "family": "ChapéudePalha",
   "power": 1220501118
  },
  {
   "server": 11081,
   "family": "LegendsBR",
   "power": 695681171
  },
  {
   "server": 11081,
   "family": "GUMELANDIA",
   "power": 327426739
  },
  {
   "server": 11081,
   "family": "BANDO_DO_LUFFY",
   "power": 278055553
  },
  {
   "server": 11081,
   "family": "BRASIL",
   "power": 248528091
  },
  {
   "server": 11081,
   "family": "Tundra",
   "power": 190589392
  },
  {
   "server": 11081,
   "family": "jgdsvb",
   "power": 154390351
  },
  {
   "server": 11081,
   "family": "RENEGADOS",
   "power": 108543518
  },
  {
   "server": 11081,
   "family": "Phoenix",
   "power": 105398693
  },
  {
   "server": 11081,
   "family": "Lunáticos",
   "power": 74145486
  },
  {
   "server": 11082,
   "family": "AKATSUKI",
   "power": 1133371814
  },
  {
   "server": 11082,
   "family": "Sentinels",
   "power": 861051264
  },
  {
   "server": 11082,
   "family": "AKATSUKI_2",
   "power": 347762533
  },
  {
   "server": 11082,
   "family": "YAKUSA",
   "power": 314426267
  },
  {
   "server": 11082,
   "family": "ShowTime",
   "power": 282251683
  },
  {
   "server": 11082,
   "family": "Remanescente",
   "power": 187613814
  },
  {
   "server": 11082,
   "family": "Sentinels²",
   "power": 177276214
  },
  {
   "server": 11082,
   "family": "Brasileirinhas",
   "power": 172002110
  },
  {
   "server": 11082,
   "family": "Bigulos",
   "power": 127893805
  },
  {
   "server": 11082,
   "family": "ImperioBr",
   "power": 122844459
  },
  {
   "server": 11083,
   "family": "DrakenGods",
   "power": 1335745170
  },
  {
   "server": 11083,
   "family": "ELITEBR",
   "power": 826698178
  },
  {
   "server": 11083,
   "family": "Sunshine",
   "power": 328484035
  },
  {
   "server": 11083,
   "family": "BANDO°DO°LUFFY",
   "power": 274446610
  },
  {
   "server": 11083,
   "family": "OzBaTuTiNhAs",
   "power": 243278464
  },
  {
   "server": 11083,
   "family": "Ceifadores",
   "power": 199230475
  },
  {
   "server": 11083,
   "family": "ᴅɪsᴛᴜʀʙᴇᴅ",
   "power": 184838730
  },
  {
   "server": 11083,
   "family": "Clãcaramelo",
   "power": 141800563
  },
  {
   "server": 11083,
   "family": "011_E_O_DDD",
   "power": 139109692
  },
  {
   "server": 11083,
   "family": "Hashiras",
   "power": 126811106
  },
  {
   "server": 11084,
   "family": "Bailarinas",
   "power": 1309877872
  },
  {
   "server": 11084,
   "family": "TheAvengers",
   "power": 657604385
  },
  {
   "server": 11084,
   "family": "firstline",
   "power": 457087695
  },
  {
   "server": 11084,
   "family": "ClãChupaGrelo",
   "power": 256550901
  },
  {
   "server": 11084,
   "family": "BangBang",
   "power": 207044273
  },
  {
   "server": 11084,
   "family": "TheKillers",
   "power": 198945698
  },
  {
   "server": 11084,
   "family": "cogumelos",
   "power": 193364079
  },
  {
   "server": 11084,
   "family": "iwnl",
   "power": 184093678
  },
  {
   "server": 11084,
   "family": "Fairy tail",
   "power": 172587222
  },
  {
   "server": 11084,
   "family": "RAGNAROK",
   "power": 171103184
  },
  {
   "server": 11085,
   "family": "Valhalla",
   "power": 1264139673
  },
  {
   "server": 11085,
   "family": "SwordArtOnline",
   "power": 743524914
  },
  {
   "server": 11085,
   "family": "PROHERD",
   "power": 302886073
  },
  {
   "server": 11085,
   "family": "Katsuki",
   "power": 268730967
  },
  {
   "server": 11085,
   "family": "DragonFlyDemon",
   "power": 236889454
  },
  {
   "server": 11085,
   "family": "𝕯𝖆𝖗𝖐𝕱𝖔𝖝",
   "power": 198783003
  },
  {
   "server": 11085,
   "family": "Corinthians",
   "power": 153348058
  },
  {
   "server": 11085,
   "family": "Cudeapitos",
   "power": 149485226
  },
  {
   "server": 11085,
   "family": "Bilada",
   "power": 146597247
  },
  {
   "server": 11085,
   "family": "RLKCHAMPS",
   "power": 118696248
  },
  {
   "server": 11086,
   "family": "SantoGraal",
   "power": 1014319569
  },
  {
   "server": 11086,
   "family": "Brazino",
   "power": 675393240
  },
  {
   "server": 11086,
   "family": "KINGS",
   "power": 336597043
  },
  {
   "server": 11086,
   "family": "WarLords",
   "power": 243717562
  },
  {
   "server": 11086,
   "family": "TheBrs",
   "power": 196961194
  },
  {
   "server": 11086,
   "family": "Technoblade",
   "power": 191698143
  },
  {
   "server": 11086,
   "family": "vitor",
   "power": 186055201
  },
  {
   "server": 11086,
   "family": "RAGNAROKBR",
   "power": 170763405
  },
  {
   "server": 11086,
   "family": "WhiteTiger",
   "power": 158447335
  },
  {
   "server": 11086,
   "family": "Tóxicos",
   "power": 146199078
  },
  {
   "server": 11087,
   "family": "ImpérioBR",
   "power": 1261871751
  },
  {
   "server": 11087,
   "family": "xXSKLxSPRXx",
   "power": 1086556534
  },
  {
   "server": 11087,
   "family": "Shadowhunters",
   "power": 382514327
  },
  {
   "server": 11087,
   "family": "HiTkill",
   "power": 291052647
  },
  {
   "server": 11087,
   "family": "brasildagurra",
   "power": 229547982
  },
  {
   "server": 11087,
   "family": "Falcons",
   "power": 228614418
  },
  {
   "server": 11087,
   "family": "NAZARICK",
   "power": 214922790
  },
  {
   "server": 11087,
   "family": "Shalke04",
   "power": 214089738
  },
  {
   "server": 11087,
   "family": "xXSKLxSPRXxII",
   "power": 210926816
  },
  {
   "server": 11087,
   "family": "DOMINADORES",
   "power": 181051443
  },
  {
   "server": 11088,
   "family": "Destruidores",
   "power": 1070002326
  },
  {
   "server": 11088,
   "family": "Hazit",
   "power": 589879266
  },
  {
   "server": 11088,
   "family": "BrazucaBR",
   "power": 384530291
  },
  {
   "server": 11088,
   "family": "KLL",
   "power": 260096167
  },
  {
   "server": 11088,
   "family": "lsad",
   "power": 233121313
  },
  {
   "server": 11088,
   "family": "BRt°BrasilTeam",
   "power": 205364839
  },
  {
   "server": 11088,
   "family": "BRASIL",
   "power": 161979222
  },
  {
   "server": 11088,
   "family": "xGOKU",
   "power": 144029650
  },
  {
   "server": 11088,
   "family": "MARRENTOS",
   "power": 138814016
  },
  {
   "server": 11088,
   "family": "Legendaries",
   "power": 138340873
  },
  {
   "server": 11089,
   "family": "NewØrder",
   "power": 1211307563
  },
  {
   "server": 11089,
   "family": "SUN",
   "power": 364969714
  },
  {
   "server": 11089,
   "family": "KAMIKAZE",
   "power": 294521437
  },
  {
   "server": 11089,
   "family": "darknight35",
   "power": 270388246
  },
  {
   "server": 11089,
   "family": "dcgyh",
   "power": 222076130
  },
  {
   "server": 11089,
   "family": "Storm",
   "power": 200396026
  },
  {
   "server": 11089,
   "family": "YZX",
   "power": 175669750
  },
  {
   "server": 11089,
   "family": "VALHALLA",
   "power": 167186085
  },
  {
   "server": 11089,
   "family": "MASTERS",
   "power": 161298315
  },
  {
   "server": 11089,
   "family": "AceDragons",
   "power": 127320292
  },
  {
   "server": 11090,
   "family": "TheOriginals",
   "power": 1009101502
  },
  {
   "server": 11090,
   "family": "Deus",
   "power": 491459657
  },
  {
   "server": 11090,
   "family": "Legendários",
   "power": 378135714
  },
  {
   "server": 11090,
   "family": "BlackdooG",
   "power": 318882779
  },
  {
   "server": 11090,
   "family": "PRIMORDIAL",
   "power": 232677795
  },
  {
   "server": 11090,
   "family": "FireKitsunes",
   "power": 173836172
  },
  {
   "server": 11090,
   "family": "anime",
   "power": 163597990
  },
  {
   "server": 11090,
   "family": "Marvel²",
   "power": 156748178
  },
  {
   "server": 11090,
   "family": "VIEXX",
   "power": 154620546
  },
  {
   "server": 11090,
   "family": "calcinhapreta",
   "power": 140409059
  },
  {
   "server": 11091,
   "family": "PARADOXXX",
   "power": 1174857890
  },
  {
   "server": 11091,
   "family": "Ascension",
   "power": 392347980
  },
  {
   "server": 11091,
   "family": "Pentakill",
   "power": 383069631
  },
  {
   "server": 11091,
   "family": "TryHard",
   "power": 264400089
  },
  {
   "server": 11091,
   "family": "Hell",
   "power": 240751561
  },
  {
   "server": 11091,
   "family": "Uchiha",
   "power": 165964025
  },
  {
   "server": 11091,
   "family": "MiBR",
   "power": 144739387
  },
  {
   "server": 11091,
   "family": "YAKUZA",
   "power": 138189824
  },
  {
   "server": 11091,
   "family": "eusabo",
   "power": 105844504
  },
  {
   "server": 11091,
   "family": "Atomic",
   "power": 93257901
  },
  {
   "server": 11092,
   "family": "FusionBR",
   "power": 1288520476
  },
  {
   "server": 11092,
   "family": "FusionBR²",
   "power": 732112013
  },
  {
   "server": 11092,
   "family": "Retalhadores",
   "power": 344038532
  },
  {
   "server": 11092,
   "family": "ArmadaBrᣔᣘᔿ",
   "power": 251534031
  },
  {
   "server": 11092,
   "family": "Brazil",
   "power": 222383321
  },
  {
   "server": 11092,
   "family": "SHIMEJIS",
   "power": 173666269
  },
  {
   "server": 11092,
   "family": "OzPintudos",
   "power": 148002264
  },
  {
   "server": 11092,
   "family": "TheDragons",
   "power": 136520142
  },
  {
   "server": 11092,
   "family": "APÓSTOLOS",
   "power": 135740817
  },
  {
   "server": 11092,
   "family": "KingsBR",
   "power": 117812828
  },
  {
   "server": 11093,
   "family": "ELITE",
   "power": 1135863623
  },
  {
   "server": 11093,
   "family": "INFERNO",
   "power": 841777805
  },
  {
   "server": 11093,
   "family": "Asgard",
   "power": 212427023
  },
  {
   "server": 11093,
   "family": "Illuminati",
   "power": 211696122
  },
  {
   "server": 11093,
   "family": "YZX",
   "power": 206343864
  },
  {
   "server": 11093,
   "family": "darkmushroom",
   "power": 200337094
  },
  {
   "server": 11093,
   "family": "aturmadofundão",
   "power": 171394644
  },
  {
   "server": 11093,
   "family": "Deicidio",
   "power": 170267283
  },
  {
   "server": 11093,
   "family": "OLÍMPIO",
   "power": 132421469
  },
  {
   "server": 11093,
   "family": "GOD",
   "power": 82196741
  },
  {
   "server": 11094,
   "family": "Cataclysm",
   "power": 1106058020
  },
  {
   "server": 11094,
   "family": "MataRind0",
   "power": 956484477
  },
  {
   "server": 11094,
   "family": "FAIRY_TAIL",
   "power": 375137003
  },
  {
   "server": 11094,
   "family": "LuaMorel",
   "power": 274086232
  },
  {
   "server": 11094,
   "family": "BR",
   "power": 247544076
  },
  {
   "server": 11094,
   "family": "BRAZUKAS",
   "power": 227721147
  },
  {
   "server": 11094,
   "family": "ᴷᴼᴺᴼᴴᴬ",
   "power": 211890698
  },
  {
   "server": 11094,
   "family": "Utopia",
   "power": 172017956
  },
  {
   "server": 11094,
   "family": "GDGGuardioesBr",
   "power": 161660567
  },
  {
   "server": 11094,
   "family": "GroveStreet2",
   "power": 157971249
  },
  {
   "server": 11095,
   "family": "UNIÃO",
   "power": 1008669939
  },
  {
   "server": 11095,
   "family": "HYDRA",
   "power": 538220991
  },
  {
   "server": 11095,
   "family": "BRS",
   "power": 294767579
  },
  {
   "server": 11095,
   "family": "CogumelosDoMaL",
   "power": 273525802
  },
  {
   "server": 11095,
   "family": "WinterChaos",
   "power": 263297282
  },
  {
   "server": 11095,
   "family": "TEMPLARIOS",
   "power": 239671443
  },
  {
   "server": 11095,
   "family": "Abismo",
   "power": 189713597
  },
  {
   "server": 11095,
   "family": "Iniciantes",
   "power": 162659985
  },
  {
   "server": 11095,
   "family": "Akatsuki",
   "power": 155050691
  },
  {
   "server": 11095,
   "family": "Elite",
   "power": 137844000
  },
  {
   "server": 11096,
   "family": "InfernoBr",
   "power": 1184788761
  },
  {
   "server": 11096,
   "family": "LEGO",
   "power": 465011800
  },
  {
   "server": 11096,
   "family": "Alcatéia",
   "power": 303734179
  },
  {
   "server": 11096,
   "family": "Hit_Kill",
   "power": 274191463
  },
  {
   "server": 11096,
   "family": "RANKS",
   "power": 261209584
  },
  {
   "server": 11096,
   "family": "NokuBrasil",
   "power": 251356812
  },
  {
   "server": 11096,
   "family": "otakos",
   "power": 208537835
  },
  {
   "server": 11096,
   "family": "BRASILπ",
   "power": 173027887
  },
  {
   "server": 11096,
   "family": "BrasilOFC",
   "power": 161831520
  },
  {
   "server": 11096,
   "family": "Luffy",
   "power": 161823865
  },
  {
   "server": 11097,
   "family": "Olimpo",
   "power": 1196529872
  },
  {
   "server": 11097,
   "family": "CaninosBranco",
   "power": 627768340
  },
  {
   "server": 11097,
   "family": "Gods_Divisão_2",
   "power": 488351615
  },
  {
   "server": 11097,
   "family": "Seyfadores",
   "power": 277731782
  },
  {
   "server": 11097,
   "family": "cogumeloo",
   "power": 272898768
  },
  {
   "server": 11097,
   "family": "THEBRS",
   "power": 187170135
  },
  {
   "server": 11097,
   "family": "Naruto",
   "power": 123618040
  },
  {
   "server": 11097,
   "family": "DIVINOS",
   "power": 57433108
  },
  {
   "server": 11097,
   "family": "Ahjin_SL",
   "power": 39703914
  },
  {
   "server": 11097,
   "family": "slotscassino",
   "power": 35247238
  },
  {
   "server": 11098,
   "family": "ShroomGang",
   "power": 1191657722
  },
  {
   "server": 11098,
   "family": "JujutsuKaisen",
   "power": 732264655
  },
  {
   "server": 11098,
   "family": "LEGENDARY",
   "power": 311725921
  },
  {
   "server": 11098,
   "family": "TOP1",
   "power": 252208856
  },
  {
   "server": 11098,
   "family": "LifeInvader",
   "power": 208408101
  },
  {
   "server": 11098,
   "family": "SrhungusLqmugu",
   "power": 207976906
  },
  {
   "server": 11098,
   "family": "pulse",
   "power": 157155119
  },
  {
   "server": 11098,
   "family": "ShangriLa",
   "power": 139121414
  },
  {
   "server": 11098,
   "family": "stoics",
   "power": 134621758
  },
  {
   "server": 11098,
   "family": "Galeroso",
   "power": 132173776
  },
  {
   "server": 11099,
   "family": "ᴼᴾ°OnePiece",
   "power": 1178020095
  },
  {
   "server": 11099,
   "family": "TROLLS",
   "power": 797040724
  },
  {
   "server": 11099,
   "family": "bosonaro2026",
   "power": 328144358
  },
  {
   "server": 11099,
   "family": "Valhalla",
   "power": 280519844
  },
  {
   "server": 11099,
   "family": "VDL",
   "power": 269259653
  },
  {
   "server": 11099,
   "family": "The_Dragons",
   "power": 203025662
  },
  {
   "server": 11099,
   "family": "BRAZINO",
   "power": 186236272
  },
  {
   "server": 11099,
   "family": "BRGG",
   "power": 161978132
  },
  {
   "server": 11099,
   "family": "ZUMBILANDIA",
   "power": 160558005
  },
  {
   "server": 11099,
   "family": "PinkPussy",
   "power": 120572378
  },
  {
   "server": 11100,
   "family": "Akatsuki",
   "power": 1062599964
  },
  {
   "server": 11100,
   "family": "KINGS",
   "power": 659518163
  },
  {
   "server": 11100,
   "family": "BRAZUKAS",
   "power": 473316634
  },
  {
   "server": 11100,
   "family": "VIPs",
   "power": 273624879
  },
  {
   "server": 11100,
   "family": "AKATSUKI",
   "power": 248190129
  },
  {
   "server": 11100,
   "family": "Alucinógenos",
   "power": 246775038
  },
  {
   "server": 11100,
   "family": "Brasil",
   "power": 203856232
  },
  {
   "server": 11100,
   "family": "Brasileiros",
   "power": 202280353
  },
  {
   "server": 11100,
   "family": "Fudidøs",
   "power": 201647617
  },
  {
   "server": 11100,
   "family": "KINGS魔",
   "power": 176813335
  },
  {
   "server": 11101,
   "family": "FÊNIX",
   "power": 1202303780
  },
  {
   "server": 11101,
   "family": "DARKS",
   "power": 655699697
  },
  {
   "server": 11101,
   "family": "SANMELOS",
   "power": 296002626
  },
  {
   "server": 11101,
   "family": "DOMINADORES",
   "power": 272621694
  },
  {
   "server": 11101,
   "family": "Champignon",
   "power": 260542896
  },
  {
   "server": 11101,
   "family": "Tops",
   "power": 206885632
  },
  {
   "server": 11101,
   "family": "Shinigamis",
   "power": 201978799
  },
  {
   "server": 11101,
   "family": "cogumelitos",
   "power": 167952364
  },
  {
   "server": 11101,
   "family": "Fúrias",
   "power": 165375113
  },
  {
   "server": 11101,
   "family": "ARDAL",
   "power": 137508564
  },
  {
   "server": 11102,
   "family": "Supremacy",
   "power": 1195942482
  },
  {
   "server": 11102,
   "family": "Leveling",
   "power": 493452980
  },
  {
   "server": 11102,
   "family": "King_of_shadow",
   "power": 455096394
  },
  {
   "server": 11102,
   "family": "Demoníacos",
   "power": 381018016
  },
  {
   "server": 11102,
   "family": "BrZera",
   "power": 228163706
  },
  {
   "server": 11102,
   "family": "HEINEKEN",
   "power": 226534373
  },
  {
   "server": 11102,
   "family": "Galácticos",
   "power": 204309977
  },
  {
   "server": 11102,
   "family": "HTCian",
   "power": 181016139
  },
  {
   "server": 11102,
   "family": "PODEROSOS",
   "power": 161321927
  },
  {
   "server": 11102,
   "family": "TopBr",
   "power": 139198935
  },
  {
   "server": 11103,
   "family": "𝙊𝙡𝙞𝙢𝙥𝙤",
   "power": 1151943120
  },
  {
   "server": 11103,
   "family": "R𝙰𝙶𝙽𝙰𝚁𝙾k",
   "power": 791151090
  },
  {
   "server": 11103,
   "family": "limbo",
   "power": 336397148
  },
  {
   "server": 11103,
   "family": "KDA",
   "power": 215978899
  },
  {
   "server": 11103,
   "family": "rei_cogumelo",
   "power": 209044939
  },
  {
   "server": 11103,
   "family": "SOMBRASBR",
   "power": 180806038
  },
  {
   "server": 11103,
   "family": "CBFbrasil",
   "power": 169349052
  },
  {
   "server": 11103,
   "family": "LegendMushroom",
   "power": 158402495
  },
  {
   "server": 11103,
   "family": "LOUDGG",
   "power": 127034872
  },
  {
   "server": 11103,
   "family": "Evolution",
   "power": 98264952
  },
  {
   "server": 11104,
   "family": "DarkAngels🪽",
   "power": 1105787846
  },
  {
   "server": 11104,
   "family": "YAKUZA",
   "power": 966825103
  },
  {
   "server": 11104,
   "family": "Dopamina",
   "power": 294188497
  },
  {
   "server": 11104,
   "family": "OverLords",
   "power": 240907331
  },
  {
   "server": 11104,
   "family": "KINGS",
   "power": 233941874
  },
  {
   "server": 11104,
   "family": "FLAMENGO",
   "power": 202438571
  },
  {
   "server": 11104,
   "family": "imortais",
   "power": 174018410
  },
  {
   "server": 11104,
   "family": "IммσятαLร",
   "power": 146062073
  },
  {
   "server": 11104,
   "family": "OLIMPO",
   "power": 134982034
  },
  {
   "server": 11104,
   "family": "M€LI∆NT€S",
   "power": 134141572
  },
  {
   "server": 11105,
   "family": "KRD",
   "power": 1234759926
  },
  {
   "server": 11105,
   "family": "KRD2",
   "power": 555956486
  },
  {
   "server": 11105,
   "family": "KRD3",
   "power": 545157916
  },
  {
   "server": 11105,
   "family": "WOLFGANG",
   "power": 344021028
  },
  {
   "server": 11105,
   "family": "Br",
   "power": 282959196
  },
  {
   "server": 11105,
   "family": "RIOKAIS",
   "power": 216890109
  },
  {
   "server": 11105,
   "family": "ELITE",
   "power": 213490097
  },
  {
   "server": 11105,
   "family": "bosonaroparsp",
   "power": 174508385
  },
  {
   "server": 11105,
   "family": "OsLendarios",
   "power": 168111317
  },
  {
   "server": 11105,
   "family": "Warriors",
   "power": 157225432
  },
  {
   "server": 11106,
   "family": "MUGIWARAS",
   "power": 1120861445
  },
  {
   "server": 11106,
   "family": "InSaNoS",
   "power": 872018527
  },
  {
   "server": 11106,
   "family": "OsMercenários",
   "power": 356621464
  },
  {
   "server": 11106,
   "family": "FaizueLi",
   "power": 253353060
  },
  {
   "server": 11106,
   "family": "MARRENTOS",
   "power": 233691581
  },
  {
   "server": 11106,
   "family": "amanhecer",
   "power": 225856162
  },
  {
   "server": 11106,
   "family": "XTREME",
   "power": 215763670
  },
  {
   "server": 11106,
   "family": "VALHALA",
   "power": 192948521
  },
  {
   "server": 11106,
   "family": "Destroyers",
   "power": 184231142
  },
  {
   "server": 11106,
   "family": "Wolfsrudel",
   "power": 159733883
  },
  {
   "server": 11107,
   "family": "Aesir",
   "power": 1179822726
  },
  {
   "server": 11107,
   "family": "Aesir²",
   "power": 715091373
  },
  {
   "server": 11107,
   "family": "ア100NOMEヅ然",
   "power": 425835132
  },
  {
   "server": 11107,
   "family": "TeamBRASIL",
   "power": 396070771
  },
  {
   "server": 11107,
   "family": "jhegol",
   "power": 215155835
  },
  {
   "server": 11107,
   "family": "BLITZ",
   "power": 204851522
  },
  {
   "server": 11107,
   "family": "Imortais",
   "power": 192382265
  },
  {
   "server": 11107,
   "family": "KINGªDRAGON",
   "power": 189182394
  },
  {
   "server": 11107,
   "family": "saw",
   "power": 181184895
  },
  {
   "server": 11107,
   "family": "INAXSilva",
   "power": 180109093
  },
  {
   "server": 11108,
   "family": "SUPREMACY",
   "power": 1111294693
  },
  {
   "server": 11108,
   "family": "black_bulls",
   "power": 542355211
  },
  {
   "server": 11108,
   "family": "THE_WARRIORS",
   "power": 366676209
  },
  {
   "server": 11108,
   "family": "NexTLevel",
   "power": 277512211
  },
  {
   "server": 11108,
   "family": "IronMaiden",
   "power": 267633516
  },
  {
   "server": 11108,
   "family": "SeaHeros",
   "power": 251143324
  },
  {
   "server": 11108,
   "family": "Legendários",
   "power": 217889334
  },
  {
   "server": 11108,
   "family": "Shadow°Garden",
   "power": 205443210
  },
  {
   "server": 11108,
   "family": "Banana",
   "power": 195295705
  },
  {
   "server": 11108,
   "family": "A_Liberdade",
   "power": 101539467
  },
  {
   "server": 11109,
   "family": "FiatUno",
   "power": 1214538849
  },
  {
   "server": 11109,
   "family": "LegendsBR",
   "power": 603506397
  },
  {
   "server": 11109,
   "family": "Brasileiros",
   "power": 362316865
  },
  {
   "server": 11109,
   "family": "FT",
   "power": 333985886
  },
  {
   "server": 11109,
   "family": "Líderes",
   "power": 294978476
  },
  {
   "server": 11109,
   "family": "ChapeuDePalha",
   "power": 237774031
  },
  {
   "server": 11109,
   "family": "《AKATSUKI》",
   "power": 230836564
  },
  {
   "server": 11109,
   "family": "Konoha",
   "power": 221046915
  },
  {
   "server": 11109,
   "family": "saiDaFrente",
   "power": 187125324
  },
  {
   "server": 11109,
   "family": "TIME_7",
   "power": 179626333
  },
  {
   "server": 11110,
   "family": "BLACKDRAGONS",
   "power": 1207247783
  },
  {
   "server": 11110,
   "family": "EnergyMonster",
   "power": 703556601
  },
  {
   "server": 11110,
   "family": "BloodRoots",
   "power": 446762985
  },
  {
   "server": 11110,
   "family": "Fenix",
   "power": 378723374
  },
  {
   "server": 11110,
   "family": "CRF_FLAMENGO",
   "power": 336987341
  },
  {
   "server": 11110,
   "family": "Overlords",
   "power": 325333716
  },
  {
   "server": 11110,
   "family": "MONARCAS",
   "power": 271229119
  },
  {
   "server": 11110,
   "family": "OsMaisFortes",
   "power": 218791589
  },
  {
   "server": 11110,
   "family": "FLAMENGUISTAS",
   "power": 191117039
  },
  {
   "server": 11110,
   "family": "TropaDoSemAmor",
   "power": 183429403
  },
  {
   "server": 11111,
   "family": "CARAMELOS",
   "power": 925245230
  },
  {
   "server": 11111,
   "family": "𝘚𝘖𝘓𝘈𝘐𝘙𝘌",
   "power": 917775502
  },
  {
   "server": 11111,
   "family": "TourosNegros",
   "power": 365824666
  },
  {
   "server": 11111,
   "family": "DODGERS",
   "power": 302282828
  },
  {
   "server": 11111,
   "family": "Sayajins",
   "power": 282606521
  },
  {
   "server": 11111,
   "family": "Heaven",
   "power": 276363080
  },
  {
   "server": 11111,
   "family": "DemonsKing",
   "power": 248981688
  },
  {
   "server": 11111,
   "family": "Desafiantes",
   "power": 243196008
  },
  {
   "server": 11111,
   "family": "GodsOfWar",
   "power": 158386887
  },
  {
   "server": 11111,
   "family": "ＤＲＡＧＯＮＳＤＯＧＭＡ",
   "power": 124420235
  },
  {
   "server": 11112,
   "family": "BRASIL",
   "power": 1176709576
  },
  {
   "server": 11112,
   "family": "PsilocybeClub",
   "power": 591790783
  },
  {
   "server": 11112,
   "family": "forçaportugal",
   "power": 219706521
  },
  {
   "server": 11112,
   "family": "Valhalla",
   "power": 218397232
  },
  {
   "server": 11112,
   "family": "DEMONIOS_PT",
   "power": 211731974
  },
  {
   "server": 11112,
   "family": "YGGDRASIL",
   "power": 208492369
  },
  {
   "server": 11112,
   "family": "ᴄʜᴇʀɴᴏʙʏʟ",
   "power": 185085467
  },
  {
   "server": 11112,
   "family": "FLUXO_BR",
   "power": 174223596
  },
  {
   "server": 11112,
   "family": "OS_PSICOS",
   "power": 169424528
  },
  {
   "server": 11112,
   "family": "Force_Brasil",
   "power": 168258431
  },
  {
   "server": 11113,
   "family": "UNION",
   "power": 1200224920
  },
  {
   "server": 11113,
   "family": "ShadowGarden",
   "power": 593384321
  },
  {
   "server": 11113,
   "family": "Nazarick",
   "power": 324498246
  },
  {
   "server": 11113,
   "family": "YZX",
   "power": 299776573
  },
  {
   "server": 11113,
   "family": "death",
   "power": 248766077
  },
  {
   "server": 11113,
   "family": "OlhaOTop1",
   "power": 223499116
  },
  {
   "server": 11113,
   "family": "LifeInvader",
   "power": 213413429
  },
  {
   "server": 11113,
   "family": "Imperial",
   "power": 167302856
  },
  {
   "server": 11113,
   "family": "IMPERIOiNSANO",
   "power": 148589345
  },
  {
   "server": 11113,
   "family": "MushBR",
   "power": 133845714
  },
  {
   "server": 11114,
   "family": "LEGENDS",
   "power": 1034346424
  },
  {
   "server": 11114,
   "family": "Konoha",
   "power": 788791783
  },
  {
   "server": 11114,
   "family": "Nightmares_br",
   "power": 473063103
  },
  {
   "server": 11114,
   "family": "TrupeFantasma",
   "power": 338464697
  },
  {
   "server": 11114,
   "family": "RAGNAROK",
   "power": 295568681
  },
  {
   "server": 11114,
   "family": "BrazilianTeam",
   "power": 281800389
  },
  {
   "server": 11114,
   "family": "RED_DRAGONS",
   "power": 247182841
  },
  {
   "server": 11114,
   "family": "꧁ঔৣARCANJOS",
   "power": 215988407
  },
  {
   "server": 11114,
   "family": "ASTRA",
   "power": 190784036
  },
  {
   "server": 11114,
   "family": "TeamOP",
   "power": 187902796
  },
  {
   "server": 11115,
   "family": "Valhalla",
   "power": 1156573143
  },
  {
   "server": 11115,
   "family": "Valhalla2",
   "power": 532074905
  },
  {
   "server": 11115,
   "family": "𓂀ƦЄƝЄƓƛƊƠƧ𓂀",
   "power": 482394282
  },
  {
   "server": 11115,
   "family": "WarLords",
   "power": 345344645
  },
  {
   "server": 11115,
   "family": "overlord",
   "power": 270632153
  },
  {
   "server": 11115,
   "family": "Alasca",
   "power": 238178919
  },
  {
   "server": 11115,
   "family": "Os_Gumelos",
   "power": 237243703
  },
  {
   "server": 11115,
   "family": "Gl0ry",
   "power": 236563088
  },
  {
   "server": 11115,
   "family": "Asgard",
   "power": 232803035
  },
  {
   "server": 11115,
   "family": "NoLiKe",
   "power": 222820798
  },
  {
   "server": 11116,
   "family": "PHTeam",
   "power": 1227264984
  },
  {
   "server": 11116,
   "family": "WNX",
   "power": 468761277
  },
  {
   "server": 11116,
   "family": "KTRON",
   "power": 460139764
  },
  {
   "server": 11116,
   "family": "JointBR",
   "power": 395236885
  },
  {
   "server": 11116,
   "family": "Akatsuki",
   "power": 266588200
  },
  {
   "server": 11116,
   "family": "AtivosBR",
   "power": 263003869
  },
  {
   "server": 11116,
   "family": "NEKROZ",
   "power": 227420239
  },
  {
   "server": 11116,
   "family": "GUERREIRUS",
   "power": 172232699
  },
  {
   "server": 11116,
   "family": "Vikings",
   "power": 163928431
  },
  {
   "server": 11116,
   "family": "xvideos",
   "power": 162718141
  },
  {
   "server": 11117,
   "family": "EL_SUICIDAS",
   "power": 1119349036
  },
  {
   "server": 11117,
   "family": "IMBATÍVEIS",
   "power": 713955713
  },
  {
   "server": 11117,
   "family": "Akatsuki",
   "power": 391430400
  },
  {
   "server": 11117,
   "family": "BRAZUKAS",
   "power": 275190054
  },
  {
   "server": 11117,
   "family": "AurumImperium",
   "power": 230905467
  },
  {
   "server": 11117,
   "family": "BrasilBR",
   "power": 207471534
  },
  {
   "server": 11117,
   "family": "AGL_SCORPION",
   "power": 186554890
  },
  {
   "server": 11117,
   "family": "BeserkersBR",
   "power": 166539955
  },
  {
   "server": 11117,
   "family": "Supremacia_DVA",
   "power": 140132671
  },
  {
   "server": 11117,
   "family": "OS_VICIADOS",
   "power": 128813988
  },
  {
   "server": 11118,
   "family": "ALPHAᶜᴮ",
   "power": 1128015375
  },
  {
   "server": 11118,
   "family": "VIKINGS",
   "power": 409172955
  },
  {
   "server": 11118,
   "family": "kalvos",
   "power": 363473410
  },
  {
   "server": 11118,
   "family": "KillingSpree",
   "power": 358557362
  },
  {
   "server": 11118,
   "family": "RENEGADOS",
   "power": 310633276
  },
  {
   "server": 11118,
   "family": "DarkAngels",
   "power": 294575880
  },
  {
   "server": 11118,
   "family": "NETWORK",
   "power": 275220666
  },
  {
   "server": 11118,
   "family": "Royalty",
   "power": 230655722
  },
  {
   "server": 11118,
   "family": "LedasCogumelos",
   "power": 171160573
  },
  {
   "server": 11118,
   "family": "silver",
   "power": 167210397
  },
  {
   "server": 11119,
   "family": "GameØver",
   "power": 1050280589
  },
  {
   "server": 11119,
   "family": "DELICIAS",
   "power": 937008343
  },
  {
   "server": 11119,
   "family": "Humildes",
   "power": 461787651
  },
  {
   "server": 11119,
   "family": "CogMagic",
   "power": 330411754
  },
  {
   "server": 11119,
   "family": "Dragons",
   "power": 237065688
  },
  {
   "server": 11119,
   "family": "LADRÃO",
   "power": 186325666
  },
  {
   "server": 11119,
   "family": "LOUDgg",
   "power": 175810330
  },
  {
   "server": 11119,
   "family": "Buyatchaca",
   "power": 169435411
  },
  {
   "server": 11119,
   "family": "Brazuca",
   "power": 168448846
  },
  {
   "server": 11119,
   "family": "Falidos",
   "power": 159226784
  },
  {
   "server": 11120,
   "family": "Olimpo",
   "power": 1091155217
  },
  {
   "server": 11120,
   "family": "X0T4",
   "power": 803659692
  },
  {
   "server": 11120,
   "family": "akatsuki",
   "power": 319634797
  },
  {
   "server": 11120,
   "family": "BRAZUKA",
   "power": 262900760
  },
  {
   "server": 11120,
   "family": "Brasileirinhos",
   "power": 259727854
  },
  {
   "server": 11120,
   "family": "MadeinBrazil",
   "power": 249310037
  },
  {
   "server": 11120,
   "family": "TOP1",
   "power": 220646522
  },
  {
   "server": 11120,
   "family": "NNBoys®",
   "power": 209978967
  },
  {
   "server": 11120,
   "family": "ou",
   "power": 196875790
  },
  {
   "server": 11120,
   "family": "FairyTail",
   "power": 163866117
  },
  {
   "server": 11121,
   "family": "NewOrder",
   "power": 1061863715
  },
  {
   "server": 11121,
   "family": "MadeInBrasil",
   "power": 948971033
  },
  {
   "server": 11121,
   "family": "ALCATÉIA_ALFA",
   "power": 326832850
  },
  {
   "server": 11121,
   "family": "HellsAngels",
   "power": 234317313
  },
  {
   "server": 11121,
   "family": "Legend_OF_Mush",
   "power": 221998229
  },
  {
   "server": 11121,
   "family": "REVOADA",
   "power": 192123926
  },
  {
   "server": 11121,
   "family": "TROYA",
   "power": 191634822
  },
  {
   "server": 11121,
   "family": "RAPOSA",
   "power": 152086924
  },
  {
   "server": 11121,
   "family": "Sereitei",
   "power": 147616632
  },
  {
   "server": 11121,
   "family": "tk_king",
   "power": 134117886
  },
  {
   "server": 11122,
   "family": "NEMESIS",
   "power": 1030076420
  },
  {
   "server": 11122,
   "family": "VIKINGS",
   "power": 820513660
  },
  {
   "server": 11122,
   "family": "Elite_BR",
   "power": 449978534
  },
  {
   "server": 11122,
   "family": "AKATSUKI_BR",
   "power": 368751956
  },
  {
   "server": 11122,
   "family": "PALERMAS",
   "power": 267973925
  },
  {
   "server": 11122,
   "family": "FLUXO",
   "power": 201663577
  },
  {
   "server": 11122,
   "family": "NEVER",
   "power": 187502958
  },
  {
   "server": 11122,
   "family": "Minato",
   "power": 171593097
  },
  {
   "server": 11122,
   "family": "AHJIN",
   "power": 169794109
  },
  {
   "server": 11122,
   "family": "yakuza013",
   "power": 158759325
  },
  {
   "server": 11123,
   "family": "AHJIN",
   "power": 1005272937
  },
  {
   "server": 11123,
   "family": "SSS",
   "power": 953980793
  },
  {
   "server": 11123,
   "family": "INVICTOS",
   "power": 393037241
  },
  {
   "server": 11123,
   "family": "LOWFI",
   "power": 381471950
  },
  {
   "server": 11123,
   "family": "OnePiece",
   "power": 351743713
  },
  {
   "server": 11123,
   "family": "MANIKOMIO",
   "power": 183382688
  },
  {
   "server": 11123,
   "family": "MÁFIA",
   "power": 172699828
  },
  {
   "server": 11123,
   "family": "ÁGUIAS",
   "power": 131955682
  },
  {
   "server": 11123,
   "family": "RikH",
   "power": 56522978
  },
  {
   "server": 11123,
   "family": "Demon",
   "power": 43140382
  },
  {
   "server": 11124,
   "family": "Hogwarts",
   "power": 1073520064
  },
  {
   "server": 11124,
   "family": "F4CCION4DOS",
   "power": 613808136
  },
  {
   "server": 11124,
   "family": "clt431",
   "power": 450542282
  },
  {
   "server": 11124,
   "family": "Dragons",
   "power": 328217397
  },
  {
   "server": 11124,
   "family": "Chandra",
   "power": 320703518
  },
  {
   "server": 11124,
   "family": "BLACKDRAGONS",
   "power": 240140501
  },
  {
   "server": 11124,
   "family": "BRBosque",
   "power": 215559662
  },
  {
   "server": 11124,
   "family": "Shadow",
   "power": 165135530
  },
  {
   "server": 11124,
   "family": "thelosers",
   "power": 161813198
  },
  {
   "server": 11124,
   "family": "FIM",
   "power": 161118217
  },
  {
   "server": 11125,
   "family": "Polters",
   "power": 1108520950
  },
  {
   "server": 11125,
   "family": "Kalashnikov47",
   "power": 726835234
  },
  {
   "server": 11125,
   "family": "FAMABR",
   "power": 351176652
  },
  {
   "server": 11125,
   "family": "Brothers",
   "power": 270218376
  },
  {
   "server": 11125,
   "family": "bRaSiL",
   "power": 255825196
  },
  {
   "server": 11125,
   "family": "AkatsukiGang",
   "power": 206330407
  },
  {
   "server": 11125,
   "family": "RIP_GLACEON",
   "power": 205604814
  },
  {
   "server": 11125,
   "family": "AMANT3MÚSICAS",
   "power": 198407955
  },
  {
   "server": 11125,
   "family": "YTBSuperdark21",
   "power": 171865330
  },
  {
   "server": 11125,
   "family": "LOUD",
   "power": 166382616
  },
  {
   "server": 11126,
   "family": "メNoCash",
   "power": 913708102
  },
  {
   "server": 11126,
   "family": "Asgard",
   "power": 799316835
  },
  {
   "server": 11126,
   "family": "IMPÉRIOS",
   "power": 272078614
  },
  {
   "server": 11126,
   "family": "CaçadoresBR",
   "power": 259133015
  },
  {
   "server": 11126,
   "family": "ĈÁĽÄƁŔËŜŐṢ",
   "power": 216447023
  },
  {
   "server": 11126,
   "family": "Castlevania🦇",
   "power": 211354200
  },
  {
   "server": 11126,
   "family": "OPRESSORES",
   "power": 198244966
  },
  {
   "server": 11126,
   "family": "revolução",
   "power": 168091715
  },
  {
   "server": 11126,
   "family": "Liberty",
   "power": 164473867
  },
  {
   "server": 11126,
   "family": "Pablojuan87",
   "power": 150720155
  },
  {
   "server": 11127,
   "family": "Omega",
   "power": 1037365010
  },
  {
   "server": 11127,
   "family": "INVICTOS",
   "power": 899127192
  },
  {
   "server": 11127,
   "family": "ONE_PIECE",
   "power": 822886700
  },
  {
   "server": 11127,
   "family": "V4mp",
   "power": 281609789
  },
  {
   "server": 11127,
   "family": "Nanatsu",
   "power": 154123167
  },
  {
   "server": 11127,
   "family": "Suavegame",
   "power": 150285184
  },
  {
   "server": 11127,
   "family": "NEXT",
   "power": 149466216
  },
  {
   "server": 11127,
   "family": "PowBrasil",
   "power": 149462404
  },
  {
   "server": 11127,
   "family": "OsFree",
   "power": 140608569
  },
  {
   "server": 11127,
   "family": "HellFamily",
   "power": 138588673
  },
  {
   "server": 11128,
   "family": "ᴛᴏᴋʏᴏᴍᴀɴᴊɪ",
   "power": 892611641
  },
  {
   "server": 11128,
   "family": "RAGNAROK",
   "power": 569460240
  },
  {
   "server": 11128,
   "family": "BRAZUCAS",
   "power": 404019482
  },
  {
   "server": 11128,
   "family": "HOSGOV",
   "power": 349256556
  },
  {
   "server": 11128,
   "family": "SOLO_LEVELING",
   "power": 259448045
  },
  {
   "server": 11128,
   "family": "7KING",
   "power": 216323992
  },
  {
   "server": 11128,
   "family": "EliteBr",
   "power": 207471177
  },
  {
   "server": 11128,
   "family": "HogwartsBR",
   "power": 191650158
  },
  {
   "server": 11128,
   "family": "BURNED",
   "power": 169667612
  },
  {
   "server": 11128,
   "family": "Infernnum",
   "power": 158060246
  },
  {
   "server": 11129,
   "family": "Olimpo",
   "power": 1096935398
  },
  {
   "server": 11129,
   "family": "𝗢𝘇𝗖𝗥𝗜𝗔𝗦",
   "power": 534011893
  },
  {
   "server": 11129,
   "family": "TryHard",
   "power": 350542952
  },
  {
   "server": 11129,
   "family": "Vaders",
   "power": 335154625
  },
  {
   "server": 11129,
   "family": "HellGhost",
   "power": 332781711
  },
  {
   "server": 11129,
   "family": "OsTourosNegros",
   "power": 256640465
  },
  {
   "server": 11129,
   "family": "BlackDragons",
   "power": 253695174
  },
  {
   "server": 11129,
   "family": "Cães_de_Guerra",
   "power": 229060351
  },
  {
   "server": 11129,
   "family": "WhiteDrangons",
   "power": 218269578
  },
  {
   "server": 11129,
   "family": "Noiados",
   "power": 198022955
  },
  {
   "server": 11130,
   "family": "MASTERS",
   "power": 1111830781
  },
  {
   "server": 11130,
   "family": "WINX",
   "power": 883674408
  },
  {
   "server": 11130,
   "family": "Queen",
   "power": 461664093
  },
  {
   "server": 11130,
   "family": "INVICTUSπ",
   "power": 317037621
  },
  {
   "server": 11130,
   "family": "Bankainnaluss",
   "power": 252378447
  },
  {
   "server": 11130,
   "family": "MiB",
   "power": 216222787
  },
  {
   "server": 11130,
   "family": "Akatsuki",
   "power": 213179692
  },
  {
   "server": 11130,
   "family": "brothers",
   "power": 212348717
  },
  {
   "server": 11130,
   "family": "WARRIORS",
   "power": 211099479
  },
  {
   "server": 11130,
   "family": "Cogumelinho",
   "power": 176054823
  },
  {
   "server": 11131,
   "family": "TAMAGOSHI",
   "power": 1005163296
  },
  {
   "server": 11131,
   "family": "Supreme",
   "power": 446468141
  },
  {
   "server": 11131,
   "family": "Mystic",
   "power": 358151964
  },
  {
   "server": 11131,
   "family": "CLUBEDOCARIMBO",
   "power": 279025943
  },
  {
   "server": 11131,
   "family": "Eclipse",
   "power": 268087888
  },
  {
   "server": 11131,
   "family": "BRASIL",
   "power": 222450875
  },
  {
   "server": 11131,
   "family": "Brazuka",
   "power": 217055135
  },
  {
   "server": 11131,
   "family": "soulSoucity",
   "power": 212291612
  },
  {
   "server": 11131,
   "family": "Fúria",
   "power": 185907882
  },
  {
   "server": 11131,
   "family": "Infinity999",
   "power": 154999040
  },
  {
   "server": 11132,
   "family": "Game–Over",
   "power": 1046661113
  },
  {
   "server": 11132,
   "family": "CogulandiaBR",
   "power": 906078613
  },
  {
   "server": 11132,
   "family": "Dracarys",
   "power": 396119682
  },
  {
   "server": 11132,
   "family": "COG   Academy",
   "power": 374250466
  },
  {
   "server": 11132,
   "family": "Escavenger",
   "power": 316394537
  },
  {
   "server": 11132,
   "family": "TheCrøxs",
   "power": 310869717
  },
  {
   "server": 11132,
   "family": "CALVOS",
   "power": 259549801
  },
  {
   "server": 11132,
   "family": "osgrifo",
   "power": 230542827
  },
  {
   "server": 11132,
   "family": "LENDÁRIOS",
   "power": 218469534
  },
  {
   "server": 11132,
   "family": "MATINHO",
   "power": 192032998
  },
  {
   "server": 11133,
   "family": "ElGodsHouse",
   "power": 1041155321
  },
  {
   "server": 11133,
   "family": "ElGodsHousell",
   "power": 488353840
  },
  {
   "server": 11133,
   "family": "Sparta",
   "power": 322774520
  },
  {
   "server": 11133,
   "family": "Jungle_br",
   "power": 274624337
  },
  {
   "server": 11133,
   "family": "BLITZ",
   "power": 252186309
  },
  {
   "server": 11133,
   "family": "Conquistador",
   "power": 234734345
  },
  {
   "server": 11133,
   "family": "Estelares",
   "power": 225111194
  },
  {
   "server": 11133,
   "family": "OLIMPO",
   "power": 190294103
  },
  {
   "server": 11133,
   "family": "Hope",
   "power": 189201524
  },
  {
   "server": 11133,
   "family": "SKIDROW",
   "power": 164670758
  },
  {
   "server": 11134,
   "family": "Leveling",
   "power": 1025795239
  },
  {
   "server": 11134,
   "family": "champignons",
   "power": 638580241
  },
  {
   "server": 11134,
   "family": "Vikings",
   "power": 340999692
  },
  {
   "server": 11134,
   "family": "Jaguaras",
   "power": 323031640
  },
  {
   "server": 11134,
   "family": "TOP1",
   "power": 307841506
  },
  {
   "server": 11134,
   "family": "HASHIRAS",
   "power": 240190825
  },
  {
   "server": 11134,
   "family": "Libertad",
   "power": 211250335
  },
  {
   "server": 11134,
   "family": "Laele",
   "power": 208840208
  },
  {
   "server": 11134,
   "family": "CaçaBaleias",
   "power": 188616824
  },
  {
   "server": 11134,
   "family": "NEXUS",
   "power": 186090697
  },
  {
   "server": 11135,
   "family": "Hazit",
   "power": 1063798165
  },
  {
   "server": 11135,
   "family": "ѵıłα",
   "power": 756919254
  },
  {
   "server": 11135,
   "family": "INFERNUS",
   "power": 656676476
  },
  {
   "server": 11135,
   "family": "Legends",
   "power": 386683711
  },
  {
   "server": 11135,
   "family": "ΔĿΜĮŖΔŇŦΣ",
   "power": 267912239
  },
  {
   "server": 11135,
   "family": "Urzeke",
   "power": 204700519
  },
  {
   "server": 11135,
   "family": "MonHorck",
   "power": 180532442
  },
  {
   "server": 11135,
   "family": "CocaCola",
   "power": 178311790
  },
  {
   "server": 11135,
   "family": "UNGOC",
   "power": 175084680
  },
  {
   "server": 11135,
   "family": "BLACK彡DRAGONS",
   "power": 174512633
  },
  {
   "server": 11136,
   "family": "NoGs",
   "power": 906774712
  },
  {
   "server": 11136,
   "family": "iMØRTAiS",
   "power": 510515954
  },
  {
   "server": 11136,
   "family": "TROPA_BR",
   "power": 333194805
  },
  {
   "server": 11136,
   "family": "Fungi",
   "power": 282518579
  },
  {
   "server": 11136,
   "family": "Clandestinos",
   "power": 260840513
  },
  {
   "server": 11136,
   "family": "TEMPLÁRIOS",
   "power": 220117579
  },
  {
   "server": 11136,
   "family": "FÊNIX",
   "power": 143351688
  },
  {
   "server": 11136,
   "family": "DRAGON",
   "power": 141981759
  },
  {
   "server": 11136,
   "family": "XUPAessaMANGA",
   "power": 140080682
  },
  {
   "server": 11136,
   "family": "INFERNAIS",
   "power": 133485238
  },
  {
   "server": 11137,
   "family": "Tadala",
   "power": 815928187
  },
  {
   "server": 11137,
   "family": "Bifrost",
   "power": 767135953
  },
  {
   "server": 11137,
   "family": "ButecoBR",
   "power": 430082547
  },
  {
   "server": 11137,
   "family": "ᎠᎪᏁᎶᎬᏒ",
   "power": 295447066
  },
  {
   "server": 11137,
   "family": "Nomades",
   "power": 286879632
  },
  {
   "server": 11137,
   "family": "Hunters",
   "power": 196426493
  },
  {
   "server": 11137,
   "family": "Atumalaca",
   "power": 196322159
  },
  {
   "server": 11137,
   "family": "Av4gers",
   "power": 154567550
  },
  {
   "server": 11137,
   "family": "Konoha",
   "power": 148609707
  },
  {
   "server": 11137,
   "family": "Alcatraz",
   "power": 124549008
  },
  {
   "server": 11138,
   "family": "BR",
   "power": 1065383319
  },
  {
   "server": 11138,
   "family": "Vácuo",
   "power": 607545967
  },
  {
   "server": 11138,
   "family": "HEROS",
   "power": 502739340
  },
  {
   "server": 11138,
   "family": "Darck",
   "power": 261649148
  },
  {
   "server": 11138,
   "family": "Brasil",
   "power": 260416696
  },
  {
   "server": 11138,
   "family": "IMPÉRIO",
   "power": 256422310
  },
  {
   "server": 11138,
   "family": "BRASIL",
   "power": 240057638
  },
  {
   "server": 11138,
   "family": "Elite",
   "power": 225074158
  },
  {
   "server": 11138,
   "family": "pcs",
   "power": 158066496
  },
  {
   "server": 11138,
   "family": "007s",
   "power": 155244119
  },
  {
   "server": 11139,
   "family": "ALLIANCE¹",
   "power": 1017230789
  },
  {
   "server": 11139,
   "family": "_RENEGADOS_",
   "power": 465868070
  },
  {
   "server": 11139,
   "family": "ALLIANCE²",
   "power": 457037803
  },
  {
   "server": 11139,
   "family": "ONE PIECE",
   "power": 443241018
  },
  {
   "server": 11139,
   "family": "BLACKOUT",
   "power": 312305712
  },
  {
   "server": 11139,
   "family": "PREDADORES",
   "power": 231525816
  },
  {
   "server": 11139,
   "family": "Theviking",
   "power": 230449681
  },
  {
   "server": 11139,
   "family": "chinfrin",
   "power": 228895537
  },
  {
   "server": 11139,
   "family": "HASHIRA",
   "power": 211845026
  },
  {
   "server": 11139,
   "family": "nanatsu",
   "power": 177536444
  },
  {
   "server": 11140,
   "family": "GuardianS",
   "power": 962984916
  },
  {
   "server": 11140,
   "family": "Baehyungs",
   "power": 761433506
  },
  {
   "server": 11140,
   "family": "Ascencion",
   "power": 585498154
  },
  {
   "server": 11140,
   "family": "AFK",
   "power": 348087307
  },
  {
   "server": 11140,
   "family": "Akatsuki",
   "power": 215502900
  },
  {
   "server": 11140,
   "family": "Gladiadores",
   "power": 208202340
  },
  {
   "server": 11140,
   "family": "IMPÉRIO",
   "power": 204118764
  },
  {
   "server": 11140,
   "family": "Asgard",
   "power": 178754116
  },
  {
   "server": 11140,
   "family": "SOLOㅤLEVELING",
   "power": 174630622
  },
  {
   "server": 11140,
   "family": "Excalibur",
   "power": 157053936
  },
  {
   "server": 11141,
   "family": "VIKINGS",
   "power": 885306679
  },
  {
   "server": 11141,
   "family": "NOVA",
   "power": 804611566
  },
  {
   "server": 11141,
   "family": "BRclan",
   "power": 452060951
  },
  {
   "server": 11141,
   "family": "Dark",
   "power": 295930733
  },
  {
   "server": 11141,
   "family": "ØS_PARÇAS",
   "power": 231757421
  },
  {
   "server": 11141,
   "family": "GOOD",
   "power": 219489899
  },
  {
   "server": 11141,
   "family": "smokers",
   "power": 188063967
  },
  {
   "server": 11141,
   "family": "ĐRAGØNS",
   "power": 176268855
  },
  {
   "server": 11141,
   "family": "atoman",
   "power": 138303272
  },
  {
   "server": 11141,
   "family": "Draconia",
   "power": 116703929
  },
  {
   "server": 11142,
   "family": "Senzala",
   "power": 911774888
  },
  {
   "server": 11142,
   "family": "BRKx",
   "power": 672986386
  },
  {
   "server": 11142,
   "family": "TABASCÃO",
   "power": 362933068
  },
  {
   "server": 11142,
   "family": "Royalty",
   "power": 340848650
  },
  {
   "server": 11142,
   "family": "BRAZUKAS",
   "power": 337175668
  },
  {
   "server": 11142,
   "family": "brasileiro",
   "power": 293862597
  },
  {
   "server": 11142,
   "family": "CavalheiroFAM",
   "power": 219484468
  },
  {
   "server": 11142,
   "family": "Hárpias",
   "power": 206420886
  },
  {
   "server": 11142,
   "family": "DragonBR",
   "power": 149805528
  },
  {
   "server": 11142,
   "family": "Columelo",
   "power": 147690773
  },
  {
   "server": 11143,
   "family": "Yakuza",
   "power": 871869301
  },
  {
   "server": 11143,
   "family": "Targaryen",
   "power": 698076833
  },
  {
   "server": 11143,
   "family": "Esparta",
   "power": 597032850
  },
  {
   "server": 11143,
   "family": "Ragnarök",
   "power": 294531933
  },
  {
   "server": 11143,
   "family": "MoonLight",
   "power": 281807641
  },
  {
   "server": 11143,
   "family": "Toman",
   "power": 223472421
  },
  {
   "server": 11143,
   "family": "BR_TOMAM",
   "power": 187783495
  },
  {
   "server": 11143,
   "family": "CasaDaMoeda",
   "power": 168903026
  },
  {
   "server": 11143,
   "family": "Burned",
   "power": 168024851
  },
  {
   "server": 11143,
   "family": "PTugaUnited",
   "power": 158145129
  },
  {
   "server": 11144,
   "family": "TopMushᵀᴹㅤ",
   "power": 956321372
  },
  {
   "server": 11144,
   "family": "TheKingLegion",
   "power": 521627845
  },
  {
   "server": 11144,
   "family": "Lost",
   "power": 308048556
  },
  {
   "server": 11144,
   "family": "TopMushAcademy",
   "power": 249823043
  },
  {
   "server": 11144,
   "family": "BR_Cogumelo",
   "power": 212778025
  },
  {
   "server": 11144,
   "family": "RAGNAROK",
   "power": 200196425
  },
  {
   "server": 11144,
   "family": "ZnSClãn",
   "power": 186540463
  },
  {
   "server": 11144,
   "family": "Pamonheiros",
   "power": 183733631
  },
  {
   "server": 11144,
   "family": "PAODEQUEIJO",
   "power": 182803794
  },
  {
   "server": 11144,
   "family": "moskhousegreen",
   "power": 133015017
  },
  {
   "server": 11145,
   "family": "FoiaAmarela",
   "power": 907302691
  },
  {
   "server": 11145,
   "family": "OnePiece",
   "power": 718305313
  },
  {
   "server": 11145,
   "family": "Royalty",
   "power": 355210804
  },
  {
   "server": 11145,
   "family": "kenway",
   "power": 306604546
  },
  {
   "server": 11145,
   "family": "OsSemTerra",
   "power": 257836062
  },
  {
   "server": 11145,
   "family": "BABILON_BR",
   "power": 229055774
  },
  {
   "server": 11145,
   "family": "VLL_VALRALA",
   "power": 204525262
  },
  {
   "server": 11145,
   "family": "AKATSUKI",
   "power": 191457009
  },
  {
   "server": 11145,
   "family": "OS_IMORIVEIS",
   "power": 189687782
  },
  {
   "server": 11145,
   "family": "CROMATICO",
   "power": 175259394
  },
  {
   "server": 11146,
   "family": "RAGNAROK",
   "power": 1054211616
  },
  {
   "server": 11146,
   "family": "RedDead",
   "power": 440891793
  },
  {
   "server": 11146,
   "family": "brasileiros",
   "power": 336993879
  },
  {
   "server": 11146,
   "family": "Resistência",
   "power": 324888720
  },
  {
   "server": 11146,
   "family": "FLAMENGO MDL",
   "power": 268395104
  },
  {
   "server": 11146,
   "family": "JointBr",
   "power": 209649157
  },
  {
   "server": 11146,
   "family": "pxerium",
   "power": 196936360
  },
  {
   "server": 11146,
   "family": "THE KINGDOM",
   "power": 190386347
  },
  {
   "server": 11146,
   "family": "OneMushroom",
   "power": 170440583
  },
  {
   "server": 11146,
   "family": "Toadtool",
   "power": 156256291
  },
  {
   "server": 11147,
   "family": "GodSlayer",
   "power": 982437960
  },
  {
   "server": 11147,
   "family": "New_World",
   "power": 678855249
  },
  {
   "server": 11147,
   "family": "ᴼᴾ°OnePiece",
   "power": 446943893
  },
  {
   "server": 11147,
   "family": "oficinadobolo",
   "power": 314163134
  },
  {
   "server": 11147,
   "family": "CháDeCogumelo",
   "power": 244816310
  },
  {
   "server": 11147,
   "family": "TG",
   "power": 218225550
  },
  {
   "server": 11147,
   "family": "BRAZUKA",
   "power": 161728880
  },
  {
   "server": 11147,
   "family": "Brasil",
   "power": 160238908
  },
  {
   "server": 11147,
   "family": "Olimpo",
   "power": 135440171
  },
  {
   "server": 11147,
   "family": "PROSLAYER",
   "power": 129220780
  },
  {
   "server": 11148,
   "family": "ELEMENTARES",
   "power": 881187930
  },
  {
   "server": 11148,
   "family": "Hashiras",
   "power": 699923246
  },
  {
   "server": 11148,
   "family": "PROERD",
   "power": 367950878
  },
  {
   "server": 11148,
   "family": "TurmaDoBairro",
   "power": 260470773
  },
  {
   "server": 11148,
   "family": "ZODÍACOS",
   "power": 249955346
  },
  {
   "server": 11148,
   "family": "TEAMOP",
   "power": 226041718
  },
  {
   "server": 11148,
   "family": "FAIRY_TAIL",
   "power": 223658672
  },
  {
   "server": 11148,
   "family": "CEIFADORES",
   "power": 197869816
  },
  {
   "server": 11148,
   "family": "GUERREIROS",
   "power": 176931094
  },
  {
   "server": 11148,
   "family": "UPADORES",
   "power": 169895729
  },
  {
   "server": 11149,
   "family": "BerserkersBR",
   "power": 916146962
  },
  {
   "server": 11149,
   "family": "STARS",
   "power": 728438621
  },
  {
   "server": 11149,
   "family": "Fluxo",
   "power": 338854289
  },
  {
   "server": 11149,
   "family": "DESTINO",
   "power": 218293450
  },
  {
   "server": 11149,
   "family": "GUILDA",
   "power": 209023427
  },
  {
   "server": 11149,
   "family": "MushMasters",
   "power": 207687328
  },
  {
   "server": 11149,
   "family": "BRAZUKAs",
   "power": 198848379
  },
  {
   "server": 11149,
   "family": "Mush",
   "power": 186642484
  },
  {
   "server": 11149,
   "family": "Elite",
   "power": 172119949
  },
  {
   "server": 11149,
   "family": "LΞGIãФ",
   "power": 165160663
  },
  {
   "server": 11150,
   "family": "MiauMiau²",
   "power": 885085598
  },
  {
   "server": 11150,
   "family": "ᶠᵘˡˡOLÍMPO",
   "power": 750241607
  },
  {
   "server": 11150,
   "family": "AKATSUKI",
   "power": 251397965
  },
  {
   "server": 11150,
   "family": "TheKingsBR",
   "power": 244966231
  },
  {
   "server": 11150,
   "family": "HellRaisers",
   "power": 241432903
  },
  {
   "server": 11150,
   "family": "RAGNAROK",
   "power": 235313482
  },
  {
   "server": 11150,
   "family": "BR",
   "power": 208608652
  },
  {
   "server": 11150,
   "family": "DRAGON",
   "power": 199738084
  },
  {
   "server": 11150,
   "family": "Brasil",
   "power": 198279570
  },
  {
   "server": 11150,
   "family": "OtakusBR",
   "power": 170129931
  },
  {
   "server": 11151,
   "family": "CODEX",
   "power": 958336573
  },
  {
   "server": 11151,
   "family": "OnePiece",
   "power": 293001411
  },
  {
   "server": 11151,
   "family": "TheKings",
   "power": 195288616
  },
  {
   "server": 11151,
   "family": "Alliance",
   "power": 192006213
  },
  {
   "server": 11151,
   "family": "MaxPowers",
   "power": 185569339
  },
  {
   "server": 11151,
   "family": "Fênix",
   "power": 184901129
  },
  {
   "server": 11151,
   "family": "Daddy",
   "power": 0
  },
  {
   "server": 11151,
   "family": "Lucca",
   "power": 0
  },
  {
   "server": 11151,
   "family": "Lunar",
   "power": 0
  },
  {
   "server": 11151,
   "family": "Sinuquinha",
   "power": 0
  },
  {
   "server": 11152,
   "family": "BRAZUKAs",
   "power": 956686527
  },
  {
   "server": 11152,
   "family": "LegendSC",
   "power": 606398525
  },
  {
   "server": 11152,
   "family": "Firestarters",
   "power": 393395894
  },
  {
   "server": 11152,
   "family": "OsAchocolatado",
   "power": 216935253
  },
  {
   "server": 11152,
   "family": "Leviathan",
   "power": 212286001
  },
  {
   "server": 11152,
   "family": "OsBaianos",
   "power": 204601129
  },
  {
   "server": 11152,
   "family": "BrZada",
   "power": 178482629
  },
  {
   "server": 11152,
   "family": "Bobinhos",
   "power": 175371986
  },
  {
   "server": 11152,
   "family": "Marialé",
   "power": 152795758
  },
  {
   "server": 11152,
   "family": "PROSKOP",
   "power": 150164635
  },
  {
   "server": 11153,
   "family": "ALIANÇA_TxE",
   "power": 845873130
  },
  {
   "server": 11153,
   "family": "ACADEMIA_TxE",
   "power": 508544337
  },
  {
   "server": 11153,
   "family": "Lendários",
   "power": 274017160
  },
  {
   "server": 11153,
   "family": "TROPA_F2P",
   "power": 261552261
  },
  {
   "server": 11153,
   "family": "∆_IMPÉRIO_BR",
   "power": 205107747
  },
  {
   "server": 11153,
   "family": "REDBULL",
   "power": 194468939
  },
  {
   "server": 11153,
   "family": "Yakuza",
   "power": 149003902
  },
  {
   "server": 11153,
   "family": "luffyguear5",
   "power": 137518654
  },
  {
   "server": 11153,
   "family": "Valhalla",
   "power": 123765081
  },
  {
   "server": 11153,
   "family": "MONSTER",
   "power": 66883827
  },
  {
   "server": 11154,
   "family": "𝙺𝚘𝚗𝚘𝚑𝚊",
   "power": 780903503
  },
  {
   "server": 11154,
   "family": "DFG_CALVOS",
   "power": 334580350
  },
  {
   "server": 11154,
   "family": "brs",
   "power": 306548742
  },
  {
   "server": 11154,
   "family": "Akatsuki",
   "power": 302809769
  },
  {
   "server": 11154,
   "family": "VIKINGS",
   "power": 250173910
  },
  {
   "server": 11154,
   "family": "PurpleIce",
   "power": 153892158
  },
  {
   "server": 11154,
   "family": "DESTRUIDORES",
   "power": 122165748
  },
  {
   "server": 11154,
   "family": "Kings",
   "power": 108037462
  },
  {
   "server": 11154,
   "family": "SkogensAndar",
   "power": 85363418
  },
  {
   "server": 11154,
   "family": "PublicEnemy",
   "power": 63497699
  },
  {
   "server": 11155,
   "family": "Brasil",
   "power": 868179215
  },
  {
   "server": 11155,
   "family": "Lider",
   "power": 322697342
  },
  {
   "server": 11155,
   "family": "Overlord",
   "power": 267003882
  },
  {
   "server": 11155,
   "family": "TrupeBrasil",
   "power": 250528148
  },
  {
   "server": 11155,
   "family": "420stoners",
   "power": 243698069
  },
  {
   "server": 11155,
   "family": "BROtherHood",
   "power": 219242866
  },
  {
   "server": 11155,
   "family": "BroThersWar",
   "power": 209058845
  },
  {
   "server": 11155,
   "family": "NaçãoBR",
   "power": 190147810
  },
  {
   "server": 11155,
   "family": "Baehyungs",
   "power": 171173109
  },
  {
   "server": 11155,
   "family": "BaSingSlay",
   "power": 164543779
  },
  {
   "server": 11156,
   "family": "Hogwarts",
   "power": 763728525
  },
  {
   "server": 11156,
   "family": "OnlyFans",
   "power": 380826207
  },
  {
   "server": 11156,
   "family": "BRASIL",
   "power": 273537182
  },
  {
   "server": 11156,
   "family": "Brazino777",
   "power": 236490608
  },
  {
   "server": 11156,
   "family": "NAZARICK",
   "power": 193638877
  },
  {
   "server": 11156,
   "family": "ʏᴏɴᴋᴏᴜ",
   "power": 166561234
  },
  {
   "server": 11156,
   "family": "arcanjos",
   "power": 152303899
  },
  {
   "server": 11156,
   "family": "《Anonymos》",
   "power": 103303912
  },
  {
   "server": 11156,
   "family": "RAGNAROK",
   "power": 81601505
  },
  {
   "server": 11156,
   "family": "Soneca",
   "power": 32025479
  },
  {
   "server": 11157,
   "family": "Ragnarok",
   "power": 682897548
  },
  {
   "server": 11157,
   "family": "TeamOP",
   "power": 597210918
  },
  {
   "server": 11157,
   "family": "BRASIL",
   "power": 303154209
  },
  {
   "server": 11157,
   "family": "PROS°BRASIL",
   "power": 276482755
  },
  {
   "server": 11157,
   "family": "Vikings",
   "power": 265739525
  },
  {
   "server": 11157,
   "family": "WarriorsBrs",
   "power": 179499679
  },
  {
   "server": 11157,
   "family": "FENIX",
   "power": 177954631
  },
  {
   "server": 11157,
   "family": "Vengeance",
   "power": 147135622
  },
  {
   "server": 11157,
   "family": "ZecaPauGordinh",
   "power": 130200130
  },
  {
   "server": 11157,
   "family": "COMANF",
   "power": 62570714
  },
  {
   "server": 11158,
   "family": "4FUN",
   "power": 747821999
  },
  {
   "server": 11158,
   "family": "Helheim",
   "power": 660990096
  },
  {
   "server": 11158,
   "family": "MysticMages",
   "power": 251306586
  },
  {
   "server": 11158,
   "family": "DRAGONFLY",
   "power": 180877179
  },
  {
   "server": 11158,
   "family": "LosBrabos",
   "power": 177237908
  },
  {
   "server": 11158,
   "family": "Uzumaki",
   "power": 161284103
  },
  {
   "server": 11158,
   "family": "KAMI",
   "power": 153086590
  },
  {
   "server": 11158,
   "family": "BRAZUKAs",
   "power": 144100205
  },
  {
   "server": 11158,
   "family": "𝔸𝕨𝕒𝕜𝕖𝕟",
   "power": 140709926
  },
  {
   "server": 11158,
   "family": "axl07",
   "power": 123936884
  },
  {
   "server": 11159,
   "family": "RAGNAROK",
   "power": 749153138
  },
  {
   "server": 11159,
   "family": "BRAZUKAS",
   "power": 290226524
  },
  {
   "server": 11159,
   "family": "BRASIL",
   "power": 245359283
  },
  {
   "server": 11159,
   "family": "Olympia",
   "power": 222233176
  },
  {
   "server": 11159,
   "family": "LOUD",
   "power": 196385814
  },
  {
   "server": 11159,
   "family": "IMMORTALS",
   "power": 163969084
  },
  {
   "server": 11159,
   "family": "MonteOlimpo",
   "power": 149428125
  },
  {
   "server": 11159,
   "family": "dragonborn",
   "power": 119823795
  },
  {
   "server": 11159,
   "family": "cogumelos",
   "power": 45795887
  },
  {
   "server": 11159,
   "family": "ZRO",
   "power": 28861188
  },
  {
   "server": 11160,
   "family": "TBR`ELITE",
   "power": 785615651
  },
  {
   "server": 11160,
   "family": "BlackSheep",
   "power": 499679946
  },
  {
   "server": 11160,
   "family": "BRASIL",
   "power": 276336151
  },
  {
   "server": 11160,
   "family": "TropaBR`2",
   "power": 195836116
  },
  {
   "server": 11160,
   "family": "THE_KINGDOM",
   "power": 178173952
  },
  {
   "server": 11160,
   "family": "TemOrigils",
   "power": 157357676
  },
  {
   "server": 11160,
   "family": "》PURGATÓRIO▪︎",
   "power": 151711023
  },
  {
   "server": 11160,
   "family": "AnarchyS1",
   "power": 145983364
  },
  {
   "server": 11160,
   "family": "BR_Cogumelos",
   "power": 143950018
  },
  {
   "server": 11160,
   "family": "Seitadusexo",
   "power": 131116645
  },
  {
   "server": 11161,
   "family": "AKATSUKI",
   "power": 587768415
  },
  {
   "server": 11161,
   "family": "Ensaboados",
   "power": 477703475
  },
  {
   "server": 11161,
   "family": "AKATSUKI_2",
   "power": 327602968
  },
  {
   "server": 11161,
   "family": "SUPREMACIA",
   "power": 314147895
  },
  {
   "server": 11161,
   "family": "BRASIL",
   "power": 190389612
  },
  {
   "server": 11161,
   "family": "OLD_AliancE",
   "power": 169408668
  },
  {
   "server": 11161,
   "family": "Hashiras",
   "power": 126556141
  },
  {
   "server": 11161,
   "family": "Dysnatia",
   "power": 114384694
  },
  {
   "server": 11161,
   "family": "HUNTERS",
   "power": 91857337
  },
  {
   "server": 11161,
   "family": "uchiha",
   "power": 60433710
  },
  {
   "server": 11162,
   "family": "OnlyBasic",
   "power": 689402015
  },
  {
   "server": 11162,
   "family": "OnePiece",
   "power": 593654461
  },
  {
   "server": 11162,
   "family": "Titans",
   "power": 312983862
  },
  {
   "server": 11162,
   "family": "BRASIL",
   "power": 277167357
  },
  {
   "server": 11162,
   "family": "《Toka_Terror》",
   "power": 159386674
  },
  {
   "server": 11162,
   "family": "Escravos",
   "power": 134461222
  },
  {
   "server": 11162,
   "family": "VØID",
   "power": 128097540
  },
  {
   "server": 11162,
   "family": "soul‐society",
   "power": 114940725
  },
  {
   "server": 11162,
   "family": "TROPADOCDC",
   "power": 83726515
  },
  {
   "server": 11162,
   "family": "ATLAS",
   "power": 57538277
  },
  {
   "server": 11163,
   "family": "MONTE_OLIMPO",
   "power": 695417291
  },
  {
   "server": 11163,
   "family": "MONTE_OLIMPO2",
   "power": 364934998
  },
  {
   "server": 11163,
   "family": "RAGNAROK",
   "power": 307061061
  },
  {
   "server": 11163,
   "family": "CogumeloFans",
   "power": 294714040
  },
  {
   "server": 11163,
   "family": "XoXoTeam",
   "power": 169128454
  },
  {
   "server": 11163,
   "family": "Ceifadores",
   "power": 152201484
  },
  {
   "server": 11163,
   "family": "MidNightClan",
   "power": 139751549
  },
  {
   "server": 11163,
   "family": "tudo_de_bom",
   "power": 131322464
  },
  {
   "server": 11163,
   "family": "Mugiwaras",
   "power": 74800177
  },
  {
   "server": 11163,
   "family": "Jojoba",
   "power": 58639551
  },
  {
   "server": 11164,
   "family": "Savage",
   "power": 625507892
  },
  {
   "server": 11164,
   "family": "LEGIÃO",
   "power": 542634591
  },
  {
   "server": 11164,
   "family": "XOTA",
   "power": 436119282
  },
  {
   "server": 11164,
   "family": "Jojoba",
   "power": 202481846
  },
  {
   "server": 11164,
   "family": "ﾑズﾑｲ丂ひズﾉ",
   "power": 187258378
  },
  {
   "server": 11164,
   "family": "BRAZUKAS",
   "power": 162788669
  },
  {
   "server": 11164,
   "family": "FungiFaction",
   "power": 141920047
  },
  {
   "server": 11164,
   "family": "TopperBR",
   "power": 125681416
  },
  {
   "server": 11164,
   "family": "Valhalla",
   "power": 108859354
  },
  {
   "server": 11164,
   "family": "hazit",
   "power": 100478184
  },
  {
   "server": 11165,
   "family": "GGBR",
   "power": 731038717
  },
  {
   "server": 11165,
   "family": "UP GAMING",
   "power": 437815539
  },
  {
   "server": 11165,
   "family": "osGOsArapido",
   "power": 192366163
  },
  {
   "server": 11165,
   "family": "CasalDaErVa",
   "power": 187412191
  },
  {
   "server": 11165,
   "family": "HEROS",
   "power": 182458164
  },
  {
   "server": 11165,
   "family": "DragonBR",
   "power": 179141241
  },
  {
   "server": 11165,
   "family": "Aetherellis",
   "power": 160765764
  },
  {
   "server": 11165,
   "family": "𝒪𝓁𝒾𝓂𝓅𝑜",
   "power": 130838933
  },
  {
   "server": 11165,
   "family": "BRASILEIROS",
   "power": 79403116
  },
  {
   "server": 11165,
   "family": "WEED",
   "power": 73897010
  },
  {
   "server": 11166,
   "family": "𝒪𝓁𝒾𝓂𝓅𝑜",
   "power": 618142381
  },
  {
   "server": 11166,
   "family": "ᴄᴏʀʀɪᴅᴀﾠᴍᴀʟᴜᴄᴀ",
   "power": 368962094
  },
  {
   "server": 11166,
   "family": "TDH",
   "power": 285381833
  },
  {
   "server": 11166,
   "family": "ConscaBR",
   "power": 258590069
  },
  {
   "server": 11166,
   "family": "GαмєOvєя",
   "power": 221566876
  },
  {
   "server": 11166,
   "family": "xGhostArmyX",
   "power": 202206522
  },
  {
   "server": 11166,
   "family": "ASGARD",
   "power": 130985376
  },
  {
   "server": 11166,
   "family": "COE_BR",
   "power": 129838191
  },
  {
   "server": 11166,
   "family": "ninja5zero",
   "power": 105894215
  },
  {
   "server": 11166,
   "family": "leveling",
   "power": 83761356
  },
  {
   "server": 11167,
   "family": "𝙑𝙄𝙆𝙄𝙉𝙂𝙎",
   "power": 668779022
  },
  {
   "server": 11167,
   "family": "Olimpy",
   "power": 452163833
  },
  {
   "server": 11167,
   "family": "ALC°Dourado",
   "power": 215222357
  },
  {
   "server": 11167,
   "family": "TEMPLÁRIOS",
   "power": 211715120
  },
  {
   "server": 11167,
   "family": "SoLaZeR",
   "power": 184598357
  },
  {
   "server": 11167,
   "family": "Ragnarok",
   "power": 166754322
  },
  {
   "server": 11167,
   "family": "Akatsuki_2073",
   "power": 160276846
  },
  {
   "server": 11167,
   "family": "Lúcifer",
   "power": 138308760
  },
  {
   "server": 11167,
   "family": "BrAsiL",
   "power": 133304460
  },
  {
   "server": 11167,
   "family": "NeverLand",
   "power": 91175729
  },
  {
   "server": 11168,
   "family": "Vøid",
   "power": 653598624
  },
  {
   "server": 11168,
   "family": "MushBoyZ",
   "power": 306610618
  },
  {
   "server": 11168,
   "family": "BESERKERS",
   "power": 254814380
  },
  {
   "server": 11168,
   "family": "MUGIWARAS",
   "power": 247359190
  },
  {
   "server": 11168,
   "family": "FairyTail",
   "power": 240674309
  },
  {
   "server": 11168,
   "family": "𝐈𝐍𝐒4𝐍𝐎𝐒",
   "power": 213203660
  },
  {
   "server": 11168,
   "family": "kuhaku",
   "power": 209482256
  },
  {
   "server": 11168,
   "family": "Burned",
   "power": 185559210
  },
  {
   "server": 11168,
   "family": "Toxic",
   "power": 184472482
  },
  {
   "server": 11168,
   "family": "RAGNAROK",
   "power": 148893954
  },
  {
   "server": 11169,
   "family": "Lótus",
   "power": 648088933
  },
  {
   "server": 11169,
   "family": "RetaliarDivino",
   "power": 446998540
  },
  {
   "server": 11169,
   "family": "ꄲꋪ꒐ꍌ꒐ꋊ",
   "power": 369849142
  },
  {
   "server": 11169,
   "family": "TEMPLÁRIOS",
   "power": 358670563
  },
  {
   "server": 11169,
   "family": "AFK",
   "power": 200802938
  },
  {
   "server": 11169,
   "family": "ARKUS",
   "power": 174159495
  },
  {
   "server": 11169,
   "family": "PeakBlinders",
   "power": 152280641
  },
  {
   "server": 11169,
   "family": "LAG",
   "power": 140812002
  },
  {
   "server": 11169,
   "family": "BRAZUKAS",
   "power": 133550730
  },
  {
   "server": 11169,
   "family": "OutOfControl",
   "power": 127541369
  },
  {
   "server": 11170,
   "family": "Invictus",
   "power": 641130487
  },
  {
   "server": 11170,
   "family": "InfinityPower",
   "power": 489706515
  },
  {
   "server": 11170,
   "family": "Shitakes",
   "power": 262884345
  },
  {
   "server": 11170,
   "family": "OficinaDoBolo",
   "power": 240193034
  },
  {
   "server": 11170,
   "family": "chapados",
   "power": 227679723
  },
  {
   "server": 11170,
   "family": "GOGUMELOBRASIL",
   "power": 203508717
  },
  {
   "server": 11170,
   "family": "BRASIL",
   "power": 183610403
  },
  {
   "server": 11170,
   "family": "Azeonn",
   "power": 173102287
  },
  {
   "server": 11170,
   "family": "ANJOS",
   "power": 163506774
  },
  {
   "server": 11170,
   "family": "Excalibur",
   "power": 159575026
  },
  {
   "server": 11171,
   "family": "Excalibur",
   "power": 667931829
  },
  {
   "server": 11171,
   "family": "Os_Furafato",
   "power": 365722665
  },
  {
   "server": 11171,
   "family": "TOPBRS",
   "power": 303837285
  },
  {
   "server": 11171,
   "family": "BRAZUKAS",
   "power": 294765882
  },
  {
   "server": 11171,
   "family": "CruxDivinum",
   "power": 252467567
  },
  {
   "server": 11171,
   "family": "RAGNAROK",
   "power": 222488749
  },
  {
   "server": 11171,
   "family": "Shadows",
   "power": 165057817
  },
  {
   "server": 11171,
   "family": "KAUZ²³",
   "power": 116437595
  },
  {
   "server": 11171,
   "family": "COGﾠIMORTAIS",
   "power": 105239759
  },
  {
   "server": 11171,
   "family": "Onlyfans",
   "power": 105220093
  },
  {
   "server": 11172,
   "family": "KingBr",
   "power": 556038538
  },
  {
   "server": 11172,
   "family": "NewOrdem",
   "power": 449048043
  },
  {
   "server": 11172,
   "family": "⁸⁸⁸VILONS",
   "power": 226635136
  },
  {
   "server": 11172,
   "family": "bandidos_BN6",
   "power": 201324055
  },
  {
   "server": 11172,
   "family": "Brasil",
   "power": 199369092
  },
  {
   "server": 11172,
   "family": "ᴱᴸᴵᵀᴱ",
   "power": 174571267
  },
  {
   "server": 11172,
   "family": "Supremo",
   "power": 165978617
  },
  {
   "server": 11172,
   "family": "TropaDoCogumel",
   "power": 157820330
  },
  {
   "server": 11172,
   "family": "ATLÂNTICOS",
   "power": 141412232
  },
  {
   "server": 11172,
   "family": "Wolfs",
   "power": 138626261
  },
  {
   "server": 11173,
   "family": "HellNBack",
   "power": 535246192
  },
  {
   "server": 11173,
   "family": "Mafia",
   "power": 462098331
  },
  {
   "server": 11173,
   "family": "FairyTailBR",
   "power": 250179599
  },
  {
   "server": 11173,
   "family": "GALAXY",
   "power": 213580900
  },
  {
   "server": 11173,
   "family": "BRASIL",
   "power": 210894905
  },
  {
   "server": 11173,
   "family": "Ragnarok",
   "power": 183234508
  },
  {
   "server": 11173,
   "family": "HuntersSa",
   "power": 182471813
  },
  {
   "server": 11173,
   "family": "OLIMPO",
   "power": 166958706
  },
  {
   "server": 11173,
   "family": "5Kings",
   "power": 156228949
  },
  {
   "server": 11173,
   "family": "YAKUZA",
   "power": 122807104
  },
  {
   "server": 11174,
   "family": "NovaOrdem",
   "power": 474821803
  },
  {
   "server": 11174,
   "family": "Diginin",
   "power": 340187050
  },
  {
   "server": 11174,
   "family": "∞ƖƝƑƖƝƖƬ",
   "power": 259768773
  },
  {
   "server": 11174,
   "family": "TopBR",
   "power": 249536517
  },
  {
   "server": 11174,
   "family": "TeamØP",
   "power": 210962698
  },
  {
   "server": 11174,
   "family": "Xvideos",
   "power": 181588620
  },
  {
   "server": 11174,
   "family": "Ragnarok",
   "power": 158582675
  },
  {
   "server": 11174,
   "family": "ᵖⁱⁿᵏ𝔸𝕟𝕘𝕖𝕝",
   "power": 151962359
  },
  {
   "server": 11174,
   "family": "LenDárioS",
   "power": 149513475
  },
  {
   "server": 11174,
   "family": "RED_BULL",
   "power": 113350586
  },
  {
   "server": 11175,
   "family": "LÓTUS",
   "power": 398490913
  },
  {
   "server": 11175,
   "family": "MushBullKiller",
   "power": 252905625
  },
  {
   "server": 11175,
   "family": "HeadHunters",
   "power": 229667162
  },
  {
   "server": 11175,
   "family": "BRAZUKAS",
   "power": 181909560
  },
  {
   "server": 11175,
   "family": "¥HELLISHSTORM¥",
   "power": 141334649
  },
  {
   "server": 11175,
   "family": "PITBULLS",
   "power": 137166873
  },
  {
   "server": 11175,
   "family": "REDBULLS",
   "power": 135193183
  },
  {
   "server": 11175,
   "family": "TOP1",
   "power": 132893178
  },
  {
   "server": 11175,
   "family": "Informáticos",
   "power": 121822836
  },
  {
   "server": 11175,
   "family": "ᶜʰᵃᵐᵖᶦᵍⁿᵒⁿ",
   "power": 116270040
  },
  {
   "server": 11176,
   "family": "DragonBallz",
   "power": 480628968
  },
  {
   "server": 11176,
   "family": "》AKATSUKI《",
   "power": 361039444
  },
  {
   "server": 11176,
   "family": "BRAZUKAS",
   "power": 307581946
  },
  {
   "server": 11176,
   "family": "Quartel",
   "power": 172452856
  },
  {
   "server": 11176,
   "family": "SpeedRun",
   "power": 151701979
  },
  {
   "server": 11176,
   "family": "MONTE_OLIMPO",
   "power": 150737411
  },
  {
   "server": 11176,
   "family": "SWORD",
   "power": 130192569
  },
  {
   "server": 11176,
   "family": "Mafiosos",
   "power": 109263009
  },
  {
   "server": 11176,
   "family": "morfinho",
   "power": 106998861
  },
  {
   "server": 11176,
   "family": "HuntersBR",
   "power": 90198971
  },
  {
   "server": 11177,
   "family": "NewEra",
   "power": 480671665
  },
  {
   "server": 11177,
   "family": "LosGoti",
   "power": 229744923
  },
  {
   "server": 11177,
   "family": "YAKUZA",
   "power": 227524741
  },
  {
   "server": 11177,
   "family": "Lótus",
   "power": 200231006
  },
  {
   "server": 11177,
   "family": "RAGNAROK",
   "power": 169505068
  },
  {
   "server": 11177,
   "family": "TugaPower",
   "power": 147807618
  },
  {
   "server": 11177,
   "family": "PaladinoS",
   "power": 144359121
  },
  {
   "server": 11177,
   "family": "Hunters",
   "power": 140453595
  },
  {
   "server": 11177,
   "family": "Legionários",
   "power": 136133152
  },
  {
   "server": 11177,
   "family": "ELITE",
   "power": 132089043
  },
  {
   "server": 11178,
   "family": "NightShadow",
   "power": 428782996
  },
  {
   "server": 11178,
   "family": "ZETA",
   "power": 282066213
  },
  {
   "server": 11178,
   "family": "ᴏғғ ɢᴀᴍɪɴɢ",
   "power": 242673205
  },
  {
   "server": 11178,
   "family": "Origami",
   "power": 198841857
  },
  {
   "server": 11178,
   "family": "KINDRED",
   "power": 180718339
  },
  {
   "server": 11178,
   "family": "BATALHAS",
   "power": 139003143
  },
  {
   "server": 11178,
   "family": "mugwaras",
   "power": 133531911
  },
  {
   "server": 11178,
   "family": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
   "power": 126737640
  },
  {
   "server": 11178,
   "family": "BR",
   "power": 126523523
  },
  {
   "server": 11178,
   "family": "ZYmush",
   "power": 121743601
  },
  {
   "server": 11179,
   "family": "RAGNAROK",
   "power": 379433262
  },
  {
   "server": 11179,
   "family": "THE_GODS",
   "power": 317453581
  },
  {
   "server": 11179,
   "family": "Imortals",
   "power": 170037516
  },
  {
   "server": 11179,
   "family": "COLD",
   "power": 150923879
  },
  {
   "server": 11179,
   "family": "Brasileiros",
   "power": 143587581
  },
  {
   "server": 11179,
   "family": "●BLITZ●",
   "power": 140247325
  },
  {
   "server": 11179,
   "family": "TITANS",
   "power": 134259230
  },
  {
   "server": 11179,
   "family": "MALDISÃO",
   "power": 125647437
  },
  {
   "server": 11179,
   "family": "RENEGADOS",
   "power": 121593422
  },
  {
   "server": 11179,
   "family": "TropaDaFolha",
   "power": 117826750
  },
  {
   "server": 11180,
   "family": "MushroomKiller",
   "power": 331245903
  },
  {
   "server": 11180,
   "family": "AKATSUKI",
   "power": 330703722
  },
  {
   "server": 11180,
   "family": "MIANTRO",
   "power": 197981263
  },
  {
   "server": 11180,
   "family": "VANGUARD",
   "power": 134833292
  },
  {
   "server": 11180,
   "family": "Matarazzo",
   "power": 130065171
  },
  {
   "server": 11180,
   "family": "SINNERS",
   "power": 126161512
  },
  {
   "server": 11180,
   "family": "RED_BULL",
   "power": 114552409
  },
  {
   "server": 11180,
   "family": "Brasileiros",
   "power": 106893230
  },
  {
   "server": 11180,
   "family": "WINX",
   "power": 95706916
  },
  {
   "server": 11180,
   "family": "OverLord",
   "power": 87197277
  },
  {
   "server": 11181,
   "family": "ALIANCE1",
   "power": 264576118
  },
  {
   "server": 11181,
   "family": "WANTED",
   "power": 249857927
  },
  {
   "server": 11181,
   "family": "Brasil",
   "power": 173513182
  },
  {
   "server": 11181,
   "family": "Caos",
   "power": 148246444
  },
  {
   "server": 11181,
   "family": "hospício",
   "power": 134254358
  },
  {
   "server": 11181,
   "family": "ALIANCE3",
   "power": 123340994
  },
  {
   "server": 11181,
   "family": "ALIANCE2",
   "power": 122197860
  },
  {
   "server": 11181,
   "family": "YoT",
   "power": 121280873
  },
  {
   "server": 11181,
   "family": "Shadow",
   "power": 102196256
  },
  {
   "server": 11181,
   "family": "BRAZINO",
   "power": 94799100
  },
  {
   "server": 11182,
   "family": "BRAZUKAS",
   "power": 197455373
  },
  {
   "server": 11182,
   "family": "FAMÍLIA",
   "power": 158909599
  },
  {
   "server": 11182,
   "family": "Phoenix",
   "power": 144650015
  },
  {
   "server": 11182,
   "family": "KONOHA",
   "power": 137801782
  },
  {
   "server": 11182,
   "family": "ᴏғғ ɢᴀᴍɪɴɢ",
   "power": 104551556
  },
  {
   "server": 11182,
   "family": "DrackBurk",
   "power": 91609448
  },
  {
   "server": 11182,
   "family": "MW",
   "power": 85753636
  },
  {
   "server": 11182,
   "family": "ShadowReapers",
   "power": 76104598
  },
  {
   "server": 11182,
   "family": "Akatsuki",
   "power": 73828016
  },
  {
   "server": 11182,
   "family": "Pain",
   "power": 65763531
  },
  {
   "server": 11183,
   "family": "FALCOES",
   "power": 157553904
  },
  {
   "server": 11183,
   "family": "HUNTERS",
   "power": 133459551
  },
  {
   "server": 11183,
   "family": "WarLords",
   "power": 118465400
  },
  {
   "server": 11183,
   "family": "AKATSUKI",
   "power": 102136676
  },
  {
   "server": 11183,
   "family": "HuntersSA",
   "power": 81179728
  },
  {
   "server": 11183,
   "family": "LegiãoBR",
   "power": 79875970
  },
  {
   "server": 11183,
   "family": "KAOZ",
   "power": 74466812
  },
  {
   "server": 11183,
   "family": "Insanos",
   "power": 67065619
  },
  {
   "server": 11183,
   "family": "Rodrigues",
   "power": 65796412
  },
  {
   "server": 11183,
   "family": "YAKUZA",
   "power": 51549507
  },
  {
   "server": 11184,
   "family": "NewShadow",
   "power": 0
  },
  {
   "server": 11184,
   "family": "RED_BULL",
   "power": 0
  },
  {
   "server": 11184,
   "family": "Danger",
   "power": 0
  },
  {
   "server": 11184,
   "family": "BRASIL",
   "power": 0
  },
  {
   "server": 11184,
   "family": "THELEGION",
   "power": 0
  },
  {
   "server": 11184,
   "family": "osgerreirosdo6",
   "power": 0
  },
  {
   "server": 11184,
   "family": "ĀRCANJOṢ",
   "power": 0
  },
  {
   "server": 11184,
   "family": "Coe",
   "power": 0
  },
  {
   "server": 11184,
   "family": "JR",
   "power": 0
  },
  {
   "server": 11184,
   "family": "alucinados",
   "power": 0
  },
  {
   "server": 11185,
   "family": "CNA",
   "power": 0
  },
  {
   "server": 11185,
   "family": "NewEra",
   "power": 0
  },
  {
   "server": 11185,
   "family": "OsCria",
   "power": 0
  },
  {
   "server": 11185,
   "family": "VIKINGS",
   "power": 0
  },
  {
   "server": 11185,
   "family": "HellMushroom",
   "power": 0
  },
  {
   "server": 11185,
   "family": "Imortais",
   "power": 0
  },
  {
   "server": 11185,
   "family": "BlackSheep",
   "power": 0
  },
  {
   "server": 11185,
   "family": "DRUNKSOULS",
   "power": 0
  },
  {
   "server": 11185,
   "family": "ioio",
   "power": 0
  },
  {
   "server": 11185,
   "family": "UltmateClan",
   "power": 0
  },
  {
   "server": 11186,
   "family": "AKATSUKI_BR",
   "power": 0
  },
  {
   "server": 11186,
   "family": "MushBoomᴹᴮ",
   "power": 0
  },
  {
   "server": 11186,
   "family": "Fox_games",
   "power": 0
  },
  {
   "server": 11186,
   "family": "Shadow",
   "power": 0
  },
  {
   "server": 11186,
   "family": "bungas",
   "power": 0
  },
  {
   "server": 11186,
   "family": "XARKE",
   "power": 0
  },
  {
   "server": 11186,
   "family": "SOLARIE",
   "power": 0
  },
  {
   "server": 11186,
   "family": "Ilha_Das_Lenda",
   "power": 0
  },
  {
   "server": 11186,
   "family": "YAKUZA",
   "power": 0
  },
  {
   "server": 11186,
   "family": "SANTUÁRIO",
   "power": 0
  },
  {
   "server": 11187,
   "family": "Super_Nova",
   "power": 0
  },
  {
   "server": 11187,
   "family": "Toxic",
   "power": 0
  },
  {
   "server": 11187,
   "family": "OnePiece",
   "power": 0
  },
  {
   "server": 11187,
   "family": "FEB",
   "power": 0
  },
  {
   "server": 11187,
   "family": "FX_DO_MAL",
   "power": 0
  },
  {
   "server": 11187,
   "family": "New_World",
   "power": 0
  },
  {
   "server": 11187,
   "family": "CELESTIAL",
   "power": 0
  },
  {
   "server": 11187,
   "family": "VIP",
   "power": 0
  },
  {
   "server": 11187,
   "family": "good",
   "power": 0
  },
  {
   "server": 11187,
   "family": "LUXOR",
   "power": 0
  },
  {
   "server": 11188,
   "family": "OLIMPO",
   "power": 0
  },
  {
   "server": 11188,
   "family": "Fênix",
   "power": 0
  },
  {
   "server": 11188,
   "family": "𝔚𝔞𝔯𝔯𝔦𝔬𝔯",
   "power": 0
  },
  {
   "server": 11188,
   "family": "ELITE",
   "power": 0
  },
  {
   "server": 11188,
   "family": "SPARTANS",
   "power": 0
  },
  {
   "server": 11188,
   "family": "GUNS_N_ROSES",
   "power": 0
  },
  {
   "server": 11188,
   "family": "Legion",
   "power": 0
  },
  {
   "server": 11188,
   "family": "Venom",
   "power": 0
  },
  {
   "server": 11188,
   "family": "DESTINY",
   "power": 0
  },
  {
   "server": 11188,
   "family": "Mercenarios",
   "power": 0
  },
  {
   "server": 30001,
   "family": "DarkSouls",
   "power": 1736632470
  },
  {
   "server": 30001,
   "family": "WorthyShrooms",
   "power": 1449071109
  },
  {
   "server": 30001,
   "family": "shrooms",
   "power": 1401996695
  },
  {
   "server": 30001,
   "family": "Paragon",
   "power": 1277823715
  },
  {
   "server": 30001,
   "family": "Solar",
   "power": 990599800
  },
  {
   "server": 30001,
   "family": "WorthyShrooms2",
   "power": 659419134
  },
  {
   "server": 30001,
   "family": "FightersClub",
   "power": 547937950
  },
  {
   "server": 30001,
   "family": "GrimReapers",
   "power": 474081194
  },
  {
   "server": 30001,
   "family": "Lumina",
   "power": 310405804
  },
  {
   "server": 30001,
   "family": "PinkMushroom",
   "power": 301523284
  },
  {
   "server": 30002,
   "family": "Empire",
   "power": 1651613533
  },
  {
   "server": 30002,
   "family": "FungusOrder",
   "power": 1491789928
  },
  {
   "server": 30002,
   "family": "ShroomKnights",
   "power": 975684798
  },
  {
   "server": 30002,
   "family": "TheHearth",
   "power": 763338643
  },
  {
   "server": 30002,
   "family": "Toad",
   "power": 670020444
  },
  {
   "server": 30002,
   "family": "Funguys",
   "power": 454547764
  },
  {
   "server": 30002,
   "family": "Goomba",
   "power": 439248216
  },
  {
   "server": 30002,
   "family": "MagicMashroom",
   "power": 394783242
  },
  {
   "server": 30002,
   "family": "ThePsychWard",
   "power": 343690855
  },
  {
   "server": 30002,
   "family": "Nederland",
   "power": 285906233
  },
  {
   "server": 30003,
   "family": "HighOnMushroom",
   "power": 1549342022
  },
  {
   "server": 30003,
   "family": "METALLICA",
   "power": 1524276307
  },
  {
   "server": 30003,
   "family": "LowOnMushroom",
   "power": 703897020
  },
  {
   "server": 30003,
   "family": "ATHENA",
   "power": 417763739
  },
  {
   "server": 30003,
   "family": "MushroomHouse",
   "power": 372850661
  },
  {
   "server": 30003,
   "family": "FreshShroomies",
   "power": 313476175
  },
  {
   "server": 30003,
   "family": "Demons",
   "power": 312834772
  },
  {
   "server": 30003,
   "family": "Legacies",
   "power": 296414513
  },
  {
   "server": 30003,
   "family": "FrogPals",
   "power": 268951362
  },
  {
   "server": 30003,
   "family": "Bruh",
   "power": 230197610
  },
  {
   "server": 30004,
   "family": "MCID",
   "power": 1728472822
  },
  {
   "server": 30004,
   "family": "Pudding",
   "power": 1196956458
  },
  {
   "server": 30004,
   "family": "Avengers",
   "power": 910186449
  },
  {
   "server": 30004,
   "family": "DonnyTheRabbit",
   "power": 529038664
  },
  {
   "server": 30004,
   "family": "MushroomHeaven",
   "power": 300895328
  },
  {
   "server": 30004,
   "family": "OnDaShrooms",
   "power": 261117334
  },
  {
   "server": 30004,
   "family": "simpsVillage",
   "power": 250552574
  },
  {
   "server": 30004,
   "family": "Casual",
   "power": 220027157
  },
  {
   "server": 30004,
   "family": "Shroomfies",
   "power": 203374689
  },
  {
   "server": 30004,
   "family": "shroomies",
   "power": 182899146
  },
  {
   "server": 30005,
   "family": "Tyranny",
   "power": 1458264248
  },
  {
   "server": 30005,
   "family": "Supreme",
   "power": 1363299353
  },
  {
   "server": 30005,
   "family": "Instinct",
   "power": 572999841
  },
  {
   "server": 30005,
   "family": "Shrooms",
   "power": 418257456
  },
  {
   "server": 30005,
   "family": "EDL",
   "power": 326050977
  },
  {
   "server": 30005,
   "family": "TheStrawhats",
   "power": 300734972
  },
  {
   "server": 30005,
   "family": "Elite",
   "power": 225489820
  },
  {
   "server": 30005,
   "family": "Moonlight",
   "power": 222565577
  },
  {
   "server": 30005,
   "family": "501stEmpire",
   "power": 199681740
  },
  {
   "server": 30005,
   "family": "DayOne",
   "power": 183511048
  },
  {
   "server": 30006,
   "family": "Meowshroom",
   "power": 1399482458
  },
  {
   "server": 30006,
   "family": "DragonHunters",
   "power": 523221358
  },
  {
   "server": 30006,
   "family": "Orphans",
   "power": 505342218
  },
  {
   "server": 30006,
   "family": "GodBirth",
   "power": 290882204
  },
  {
   "server": 30006,
   "family": "Dragon",
   "power": 274720354
  },
  {
   "server": 30006,
   "family": "Mushrevolution",
   "power": 241268245
  },
  {
   "server": 30006,
   "family": "DragonSlayers",
   "power": 229344673
  },
  {
   "server": 30006,
   "family": "Exile",
   "power": 177102761
  },
  {
   "server": 30006,
   "family": "Aura",
   "power": 98923275
  },
  {
   "server": 30006,
   "family": "TheRealWorld",
   "power": 61364732
  },
  {
   "server": 30007,
   "family": "Elite",
   "power": 1274017325
  },
  {
   "server": 30007,
   "family": "Funguys",
   "power": 459977191
  },
  {
   "server": 30007,
   "family": "Anthem",
   "power": 336319717
  },
  {
   "server": 30007,
   "family": "Waffles",
   "power": 334669894
  },
  {
   "server": 30007,
   "family": "WeOnTop",
   "power": 245978565
  },
  {
   "server": 30007,
   "family": "Shadowhunters",
   "power": 210456082
  },
  {
   "server": 30007,
   "family": "BestFamily",
   "power": 119290062
  },
  {
   "server": 30007,
   "family": "Iehfhurjc",
   "power": 96867252
  },
  {
   "server": 30007,
   "family": "Shroomcrew",
   "power": 65898443
  },
  {
   "server": 30007,
   "family": "TheShroomies",
   "power": 47952308
  },
  {
   "server": 30008,
   "family": "KING",
   "power": 1498947726
  },
  {
   "server": 30008,
   "family": "TheBlackBulls",
   "power": 808130236
  },
  {
   "server": 30008,
   "family": "Mushroom",
   "power": 549054854
  },
  {
   "server": 30008,
   "family": "MonkeyLand",
   "power": 340613341
  },
  {
   "server": 30008,
   "family": "TTTShroomies",
   "power": 194445214
  },
  {
   "server": 30008,
   "family": "KoolKidsKlan",
   "power": 190337267
  },
  {
   "server": 30008,
   "family": "ShadowRealm",
   "power": 169991511
  },
  {
   "server": 30008,
   "family": "Theshroomers",
   "power": 167544918
  },
  {
   "server": 30008,
   "family": "Warriors",
   "power": 130450473
  },
  {
   "server": 30008,
   "family": "Patesozolives",
   "power": 123155833
  },
  {
   "server": 30009,
   "family": "OREOWARRIORS",
   "power": 229612875
  },
  {
   "server": 30009,
   "family": "TheMushMen",
   "power": 139388161
  },
  {
   "server": 30009,
   "family": "DaBomb",
   "power": 128209455
  },
  {
   "server": 30009,
   "family": "Gamergirls",
   "power": 51156652
  },
  {
   "server": 30009,
   "family": "NLmushroom",
   "power": 31046919
  },
  {
   "server": 30009,
   "family": "ukwarriors",
   "power": 28799191
  },
  {
   "server": 30009,
   "family": "chunli",
   "power": 21165321
  },
  {
   "server": 30009,
   "family": "LMKA",
   "power": 21010623
  },
  {
   "server": 30009,
   "family": "SweElite",
   "power": 14004345
  },
  {
   "server": 30009,
   "family": "People",
   "power": 12563565
  },
  {
   "server": 30010,
   "family": "𝐂𝐑𝐎𝐖𝐍",
   "power": 1517480199
  },
  {
   "server": 30010,
   "family": "Crownless",
   "power": 800502974
  },
  {
   "server": 30010,
   "family": "2ndEverFam",
   "power": 429870183
  },
  {
   "server": 30010,
   "family": "HighOnShrooms",
   "power": 226825026
  },
  {
   "server": 30010,
   "family": "AstaResistance",
   "power": 213353106
  },
  {
   "server": 30010,
   "family": "SkinWalkers",
   "power": 186258329
  },
  {
   "server": 30010,
   "family": "TheStrawHats",
   "power": 176740689
  },
  {
   "server": 30010,
   "family": "cheesyahmed",
   "power": 146343592
  },
  {
   "server": 30010,
   "family": "Helldivers",
   "power": 75874210
  },
  {
   "server": 30010,
   "family": "Nederlanders",
   "power": 64497313
  },
  {
   "server": 30011,
   "family": "SHROOMSUK",
   "power": 1437040768
  },
  {
   "server": 30011,
   "family": "Deadend",
   "power": 289085274
  },
  {
   "server": 30011,
   "family": "Overlord",
   "power": 258718743
  },
  {
   "server": 30011,
   "family": "BlueDragon",
   "power": 234209183
  },
  {
   "server": 30011,
   "family": "shroomers",
   "power": 166729599
  },
  {
   "server": 30011,
   "family": "bestclan",
   "power": 139590308
  },
  {
   "server": 30011,
   "family": "brexitbuddies",
   "power": 129144535
  },
  {
   "server": 30011,
   "family": "MUSHUK",
   "power": 104582647
  },
  {
   "server": 30011,
   "family": "Chaos",
   "power": 84218380
  },
  {
   "server": 30011,
   "family": "Shrooms",
   "power": 48728105
  },
  {
   "server": 30012,
   "family": "Warriors",
   "power": 1417329379
  },
  {
   "server": 30012,
   "family": "TripleTrouble",
   "power": 307033173
  },
  {
   "server": 30012,
   "family": "KitsuneWarrior",
   "power": 300444879
  },
  {
   "server": 30012,
   "family": "Bomboclat",
   "power": 242410818
  },
  {
   "server": 30012,
   "family": "ORPHANS",
   "power": 235549353
  },
  {
   "server": 30012,
   "family": "ToadMogs",
   "power": 229598801
  },
  {
   "server": 30012,
   "family": "Deathcaps",
   "power": 181350156
  },
  {
   "server": 30012,
   "family": "Shroomies",
   "power": 142827638
  },
  {
   "server": 30012,
   "family": "SOLDIERS",
   "power": 85551389
  },
  {
   "server": 30012,
   "family": "MagicMush",
   "power": 32563095
  },
  {
   "server": 30013,
   "family": "Mushrooms",
   "power": 1133976245
  },
  {
   "server": 30013,
   "family": "N3THERWORLD",
   "power": 372503746
  },
  {
   "server": 30013,
   "family": "ShroomSquad",
   "power": 311062240
  },
  {
   "server": 30013,
   "family": "Fungalminge",
   "power": 276989438
  },
  {
   "server": 30013,
   "family": "Gooners",
   "power": 231468448
  },
  {
   "server": 30013,
   "family": "ToadGank",
   "power": 132927066
  },
  {
   "server": 30013,
   "family": "Elite",
   "power": 89797456
  },
  {
   "server": 30013,
   "family": "SHROOMITE",
   "power": 84104347
  },
  {
   "server": 30013,
   "family": "Necromipodders",
   "power": 44627334
  },
  {
   "server": 30013,
   "family": "DogeFam",
   "power": 38151049
  },
  {
   "server": 30014,
   "family": "Dune",
   "power": 1114410806
  },
  {
   "server": 30014,
   "family": "FungiAcademy",
   "power": 378940244
  },
  {
   "server": 30014,
   "family": "braindead",
   "power": 323673944
  },
  {
   "server": 30014,
   "family": "scribs",
   "power": 202578262
  },
  {
   "server": 30014,
   "family": "MushroomKings",
   "power": 184474319
  },
  {
   "server": 30014,
   "family": "9886clan",
   "power": 91713163
  },
  {
   "server": 30014,
   "family": "Sanctuary",
   "power": 57621341
  },
  {
   "server": 30014,
   "family": "DeVescy",
   "power": 34589533
  },
  {
   "server": 30014,
   "family": "UptheBoys",
   "power": 30695595
  },
  {
   "server": 30014,
   "family": "Yapperschina",
   "power": 28589919
  },
  {
   "server": 30015,
   "family": "Gods",
   "power": 1314871794
  },
  {
   "server": 30015,
   "family": "STRAWHATS",
   "power": 473411396
  },
  {
   "server": 30015,
   "family": "Megs",
   "power": 407991745
  },
  {
   "server": 30015,
   "family": "X",
   "power": 282362243
  },
  {
   "server": 30015,
   "family": "Spectrum",
   "power": 259007817
  },
  {
   "server": 30015,
   "family": "Auschw1tzgank",
   "power": 212038619
  },
  {
   "server": 30015,
   "family": "SillyGANG",
   "power": 169952384
  },
  {
   "server": 30015,
   "family": "bob",
   "power": 150438537
  },
  {
   "server": 30015,
   "family": "Goodvibes",
   "power": 78317264
  },
  {
   "server": 30015,
   "family": "Bazingaaa",
   "power": 64271516
  },
  {
   "server": 30016,
   "family": "Conquerors",
   "power": 1275946796
  },
  {
   "server": 30016,
   "family": "AllTheLosers",
   "power": 752887354
  },
  {
   "server": 30016,
   "family": "Tesla",
   "power": 450441506
  },
  {
   "server": 30016,
   "family": "Champignons",
   "power": 301870844
  },
  {
   "server": 30016,
   "family": "npc_hub",
   "power": 229823070
  },
  {
   "server": 30016,
   "family": "noodles",
   "power": 174799918
  },
  {
   "server": 30016,
   "family": "FamilyGuys",
   "power": 151291160
  },
  {
   "server": 30016,
   "family": "KingdomOfGods",
   "power": 136565821
  },
  {
   "server": 30016,
   "family": "WhiteDragons",
   "power": 89429782
  },
  {
   "server": 30016,
   "family": "CREAMPIE4LIFE",
   "power": 29548086
  },
  {
   "server": 30017,
   "family": "Blue",
   "power": 1311214833
  },
  {
   "server": 30017,
   "family": "Dark_Angels",
   "power": 1137781163
  },
  {
   "server": 30017,
   "family": "Ace",
   "power": 461814975
  },
  {
   "server": 30017,
   "family": "TrueFriends",
   "power": 352124153
  },
  {
   "server": 30017,
   "family": "SmeggyMenz",
   "power": 268972331
  },
  {
   "server": 30017,
   "family": "Wah",
   "power": 213950610
  },
  {
   "server": 30017,
   "family": "the_mushrooms",
   "power": 188406076
  },
  {
   "server": 30017,
   "family": "Wolves",
   "power": 154956265
  },
  {
   "server": 30017,
   "family": "Luan",
   "power": 139786474
  },
  {
   "server": 30017,
   "family": "PolskaHusaria",
   "power": 71390899
  },
  {
   "server": 30018,
   "family": "Oven",
   "power": 1432288747
  },
  {
   "server": 30018,
   "family": "MushroomCastle",
   "power": 655002932
  },
  {
   "server": 30018,
   "family": "Sakura",
   "power": 296122618
  },
  {
   "server": 30018,
   "family": "TheOne",
   "power": 290107970
  },
  {
   "server": 30018,
   "family": "Baggelonium",
   "power": 242038888
  },
  {
   "server": 30018,
   "family": "LokisArmy",
   "power": 232885399
  },
  {
   "server": 30018,
   "family": "Stronger",
   "power": 229354804
  },
  {
   "server": 30018,
   "family": "Playhouse",
   "power": 206803713
  },
  {
   "server": 30018,
   "family": "Goatedlads",
   "power": 145101977
  },
  {
   "server": 30018,
   "family": "spiderlily",
   "power": 41838179
  },
  {
   "server": 30019,
   "family": "Hivemind",
   "power": 1267160246
  },
  {
   "server": 30019,
   "family": "HideYourRice",
   "power": 703296065
  },
  {
   "server": 30019,
   "family": "MushGoonz",
   "power": 389964990
  },
  {
   "server": 30019,
   "family": "BEST",
   "power": 369563331
  },
  {
   "server": 30019,
   "family": "Restarts",
   "power": 311246124
  },
  {
   "server": 30019,
   "family": "Shroomfighters",
   "power": 263220505
  },
  {
   "server": 30019,
   "family": "GildedGuzzlers",
   "power": 195758208
  },
  {
   "server": 30019,
   "family": "ThePhoenix",
   "power": 194005993
  },
  {
   "server": 30019,
   "family": "Theharrisons",
   "power": 111275744
  },
  {
   "server": 30019,
   "family": "potatoes",
   "power": 87399348
  },
  {
   "server": 30020,
   "family": "Shoormlets",
   "power": 1226856080
  },
  {
   "server": 30020,
   "family": "TheShrooms",
   "power": 529831727
  },
  {
   "server": 30020,
   "family": "Weebs",
   "power": 352528098
  },
  {
   "server": 30020,
   "family": "LaFamilia",
   "power": 308502567
  },
  {
   "server": 30020,
   "family": "Mushymush",
   "power": 219737467
  },
  {
   "server": 30020,
   "family": "ShroomsRus",
   "power": 211545596
  },
  {
   "server": 30020,
   "family": "JustTheTip",
   "power": 204877313
  },
  {
   "server": 30020,
   "family": "Unknown",
   "power": 84447402
  },
  {
   "server": 30020,
   "family": "90s",
   "power": 62541219
  },
  {
   "server": 30020,
   "family": "Bros",
   "power": 50083510
  },
  {
   "server": 30021,
   "family": "ShadowGarden",
   "power": 1269326029
  },
  {
   "server": 30021,
   "family": "HighLands",
   "power": 694738201
  },
  {
   "server": 30021,
   "family": "Europa",
   "power": 257940035
  },
  {
   "server": 30021,
   "family": "cheats",
   "power": 206975582
  },
  {
   "server": 30021,
   "family": "DELTAFORCE",
   "power": 194548045
  },
  {
   "server": 30021,
   "family": "peggers",
   "power": 143787990
  },
  {
   "server": 30021,
   "family": "El_Shroomies",
   "power": 69237821
  },
  {
   "server": 30021,
   "family": "ARABFAMILY",
   "power": 51370108
  },
  {
   "server": 30021,
   "family": "MyLittleShroom",
   "power": 37129775
  },
  {
   "server": 30021,
   "family": "VaultTec",
   "power": 23829724
  },
  {
   "server": 30022,
   "family": "FireGlobal",
   "power": 1407555265
  },
  {
   "server": 30022,
   "family": "FungicidalArmy",
   "power": 369082499
  },
  {
   "server": 30022,
   "family": "Sum",
   "power": 350851756
  },
  {
   "server": 30022,
   "family": "Inquisition",
   "power": 332862126
  },
  {
   "server": 30022,
   "family": "ChaosLegion",
   "power": 210185864
  },
  {
   "server": 30022,
   "family": "Beans",
   "power": 208765554
  },
  {
   "server": 30022,
   "family": "Rotterdam",
   "power": 183089210
  },
  {
   "server": 30022,
   "family": "ALWAYSTRIPPING",
   "power": 116084519
  },
  {
   "server": 30022,
   "family": "Fuzzsters",
   "power": 63633704
  },
  {
   "server": 30022,
   "family": "Potatisarna",
   "power": 59125783
  },
  {
   "server": 30023,
   "family": "Luna",
   "power": 1333116964
  },
  {
   "server": 30023,
   "family": "TheEMPIRE",
   "power": 723246746
  },
  {
   "server": 30023,
   "family": "RainbowRaiders",
   "power": 311998012
  },
  {
   "server": 30023,
   "family": "Shroomfies",
   "power": 230661046
  },
  {
   "server": 30023,
   "family": "AKUMA",
   "power": 221898101
  },
  {
   "server": 30023,
   "family": "RealHitSquad",
   "power": 210661210
  },
  {
   "server": 30023,
   "family": "Shroomventure",
   "power": 192545468
  },
  {
   "server": 30023,
   "family": "Eternal",
   "power": 149388772
  },
  {
   "server": 30023,
   "family": "WWJL",
   "power": 124225359
  },
  {
   "server": 30023,
   "family": "Hyrule",
   "power": 89957193
  },
  {
   "server": 30024,
   "family": "⭐️Universe",
   "power": 1385076740
  },
  {
   "server": 30024,
   "family": "FunGhetto",
   "power": 1164269569
  },
  {
   "server": 30024,
   "family": "GoofyGoobers",
   "power": 381576352
  },
  {
   "server": 30024,
   "family": "Furry",
   "power": 202800450
  },
  {
   "server": 30024,
   "family": "Friendly",
   "power": 148689720
  },
  {
   "server": 30024,
   "family": "PEEPEEPOOPOO",
   "power": 147616896
  },
  {
   "server": 30024,
   "family": "NewTopDogs",
   "power": 119605733
  },
  {
   "server": 30024,
   "family": "Spidsnøgenhat",
   "power": 119487425
  },
  {
   "server": 30024,
   "family": "P1won",
   "power": 118536086
  },
  {
   "server": 30024,
   "family": "plebs",
   "power": 95022758
  },
  {
   "server": 30025,
   "family": "CAT",
   "power": 1259887878
  },
  {
   "server": 30025,
   "family": "BunchOfFunguys",
   "power": 742875885
  },
  {
   "server": 30025,
   "family": "MightyShroomy",
   "power": 353188458
  },
  {
   "server": 30025,
   "family": "Pingu33s_Crib",
   "power": 328121683
  },
  {
   "server": 30025,
   "family": "MushyMushy",
   "power": 196161005
  },
  {
   "server": 30025,
   "family": "Reflection",
   "power": 163455324
  },
  {
   "server": 30025,
   "family": "Mushygang",
   "power": 142240330
  },
  {
   "server": 30025,
   "family": "Vengeance",
   "power": 80173370
  },
  {
   "server": 30025,
   "family": "Ryu",
   "power": 73615074
  },
  {
   "server": 30025,
   "family": "BOSS",
   "power": 65978667
  },
  {
   "server": 30026,
   "family": "Eclipse",
   "power": 1291803163
  },
  {
   "server": 30026,
   "family": "EWA",
   "power": 756565604
  },
  {
   "server": 30026,
   "family": "HellFire",
   "power": 410339563
  },
  {
   "server": 30026,
   "family": "Valhalla",
   "power": 265997790
  },
  {
   "server": 30026,
   "family": "GayFrogNShark",
   "power": 179877472
  },
  {
   "server": 30026,
   "family": "ToxicGamers",
   "power": 153352848
  },
  {
   "server": 30026,
   "family": "welovethc",
   "power": 150603816
  },
  {
   "server": 30026,
   "family": "SeventhHeaven",
   "power": 144486871
  },
  {
   "server": 30026,
   "family": "Polska",
   "power": 106176668
  },
  {
   "server": 30026,
   "family": "The_only_best",
   "power": 63597226
  },
  {
   "server": 30027,
   "family": "Retribution",
   "power": 1406550285
  },
  {
   "server": 30027,
   "family": "Legends",
   "power": 421591552
  },
  {
   "server": 30027,
   "family": "CALAMITY",
   "power": 377718812
  },
  {
   "server": 30027,
   "family": "BigFatWilles",
   "power": 283859444
  },
  {
   "server": 30027,
   "family": "ForkTounges",
   "power": 201758109
  },
  {
   "server": 30027,
   "family": "DoubleDutch",
   "power": 161436524
  },
  {
   "server": 30027,
   "family": "Mystic",
   "power": 138431717
  },
  {
   "server": 30027,
   "family": "TheGemyBois",
   "power": 126886461
  },
  {
   "server": 30027,
   "family": "KingCatClan",
   "power": 107788280
  },
  {
   "server": 30027,
   "family": "mycelium",
   "power": 104814464
  },
  {
   "server": 30028,
   "family": "Privateers",
   "power": 1401975880
  },
  {
   "server": 30028,
   "family": "Hallucinating",
   "power": 610420376
  },
  {
   "server": 30028,
   "family": "TwitchStreamin",
   "power": 333504111
  },
  {
   "server": 30028,
   "family": "Black_Lotus",
   "power": 315559454
  },
  {
   "server": 30028,
   "family": "Champs",
   "power": 277669582
  },
  {
   "server": 30028,
   "family": "The_boys",
   "power": 238310354
  },
  {
   "server": 30028,
   "family": "AngryMushroom",
   "power": 190195758
  },
  {
   "server": 30028,
   "family": "acoustic",
   "power": 165185533
  },
  {
   "server": 30028,
   "family": "QCHARGE",
   "power": 146353693
  },
  {
   "server": 30028,
   "family": "Legends",
   "power": 112448108
  },
  {
   "server": 30029,
   "family": "Supreme",
   "power": 1421411629
  },
  {
   "server": 30029,
   "family": "Confusion",
   "power": 1186894930
  },
  {
   "server": 30029,
   "family": "Bozo",
   "power": 408522775
  },
  {
   "server": 30029,
   "family": "Psilocybin",
   "power": 275657863
  },
  {
   "server": 30029,
   "family": "Legends",
   "power": 204093511
  },
  {
   "server": 30029,
   "family": "Champions",
   "power": 198120032
  },
  {
   "server": 30029,
   "family": "Habibi",
   "power": 181738966
  },
  {
   "server": 30029,
   "family": "RL",
   "power": 167296377
  },
  {
   "server": 30029,
   "family": "noobs",
   "power": 166731711
  },
  {
   "server": 30029,
   "family": "Hazbin",
   "power": 151748486
  },
  {
   "server": 30030,
   "family": "Potheads",
   "power": 1189595528
  },
  {
   "server": 30030,
   "family": "ArcWave",
   "power": 703338868
  },
  {
   "server": 30030,
   "family": "WarriorsHouse",
   "power": 311559012
  },
  {
   "server": 30030,
   "family": "Claymore",
   "power": 184110902
  },
  {
   "server": 30030,
   "family": "inTop",
   "power": 180456980
  },
  {
   "server": 30030,
   "family": "Smushers",
   "power": 150723209
  },
  {
   "server": 30030,
   "family": "Shroomers",
   "power": 139683797
  },
  {
   "server": 30030,
   "family": "Rhfamilytree",
   "power": 104637584
  },
  {
   "server": 30030,
   "family": "H3llh0und5",
   "power": 64008075
  },
  {
   "server": 30030,
   "family": "ToadFam",
   "power": 52923218
  },
  {
   "server": 30031,
   "family": "InfiniteDucks",
   "power": 1359761168
  },
  {
   "server": 30031,
   "family": "UpRise",
   "power": 851820534
  },
  {
   "server": 30031,
   "family": "UpRisers",
   "power": 476913603
  },
  {
   "server": 30031,
   "family": "MagicShrooms",
   "power": 344701148
  },
  {
   "server": 30031,
   "family": "Kraken_Army",
   "power": 274780907
  },
  {
   "server": 30031,
   "family": "PARLIAMENT",
   "power": 160455569
  },
  {
   "server": 30031,
   "family": "GoodOmen",
   "power": 153619646
  },
  {
   "server": 30031,
   "family": "D028",
   "power": 80174543
  },
  {
   "server": 30031,
   "family": "KFC",
   "power": 48627803
  },
  {
   "server": 30031,
   "family": "werecoolest",
   "power": 48585748
  },
  {
   "server": 30032,
   "family": "Shroom_Lords",
   "power": 993969114
  },
  {
   "server": 30032,
   "family": "shroomshire",
   "power": 554304758
  },
  {
   "server": 30032,
   "family": "Victorious",
   "power": 396553436
  },
  {
   "server": 30032,
   "family": "pillu",
   "power": 325164175
  },
  {
   "server": 30032,
   "family": "LEGENDS",
   "power": 207772572
  },
  {
   "server": 30032,
   "family": "fluffyfellows",
   "power": 154742623
  },
  {
   "server": 30032,
   "family": "BATTLEshrooms",
   "power": 150721441
  },
  {
   "server": 30032,
   "family": "TheSnowpack",
   "power": 147515636
  },
  {
   "server": 30032,
   "family": "TheGiftsvamps",
   "power": 138080743
  },
  {
   "server": 30032,
   "family": "ClashRoyal",
   "power": 63015609
  },
  {
   "server": 30033,
   "family": "ForsakenS33",
   "power": 1466999631
  },
  {
   "server": 30033,
   "family": "Meow",
   "power": 512827280
  },
  {
   "server": 30033,
   "family": "demonZ",
   "power": 402719541
  },
  {
   "server": 30033,
   "family": "ShitakeHappens",
   "power": 384900074
  },
  {
   "server": 30033,
   "family": "TheMushroomTip",
   "power": 350354142
  },
  {
   "server": 30033,
   "family": "Paradise",
   "power": 295345929
  },
  {
   "server": 30033,
   "family": "RAFC",
   "power": 295301712
  },
  {
   "server": 30033,
   "family": "ferrys",
   "power": 202345864
  },
  {
   "server": 30033,
   "family": "Brotherhood",
   "power": 193673420
  },
  {
   "server": 30033,
   "family": "LazyPanda",
   "power": 189682608
  },
  {
   "server": 30034,
   "family": "Anarchy",
   "power": 1277169146
  },
  {
   "server": 30034,
   "family": "ToadstoolClub",
   "power": 994790864
  },
  {
   "server": 30034,
   "family": "Grubbers",
   "power": 369164944
  },
  {
   "server": 30034,
   "family": "TheHorde",
   "power": 366872495
  },
  {
   "server": 30034,
   "family": "hell2theno",
   "power": 315400204
  },
  {
   "server": 30034,
   "family": "ShroomAcadmy",
   "power": 222294067
  },
  {
   "server": 30034,
   "family": "FrogSpawns",
   "power": 216653460
  },
  {
   "server": 30034,
   "family": "Munem",
   "power": 180345932
  },
  {
   "server": 30034,
   "family": "TheCrackden",
   "power": 180034313
  },
  {
   "server": 30034,
   "family": "Hess",
   "power": 176664279
  },
  {
   "server": 30035,
   "family": "Mystic",
   "power": 1324540812
  },
  {
   "server": 30035,
   "family": "ShroomMcElite",
   "power": 1088547143
  },
  {
   "server": 30035,
   "family": "SuperFive",
   "power": 327442863
  },
  {
   "server": 30035,
   "family": "flokiflock",
   "power": 318438553
  },
  {
   "server": 30035,
   "family": "Toodfam",
   "power": 246887174
  },
  {
   "server": 30035,
   "family": "ATAbros",
   "power": 187201605
  },
  {
   "server": 30035,
   "family": "mushrooms",
   "power": 168200127
  },
  {
   "server": 30035,
   "family": "derpAherpa",
   "power": 167521943
  },
  {
   "server": 30035,
   "family": "meowers",
   "power": 139138482
  },
  {
   "server": 30035,
   "family": "EliteShrooms",
   "power": 65108711
  },
  {
   "server": 30036,
   "family": "DarknessR3BORN",
   "power": 1336729757
  },
  {
   "server": 30036,
   "family": "Hell_Hounds",
   "power": 683329536
  },
  {
   "server": 30036,
   "family": "Mushroom",
   "power": 556339462
  },
  {
   "server": 30036,
   "family": "DreamShroom",
   "power": 303153792
  },
  {
   "server": 30036,
   "family": "Death",
   "power": 282612793
  },
  {
   "server": 30036,
   "family": "Astral",
   "power": 271760143
  },
  {
   "server": 30036,
   "family": "RAGNAROK",
   "power": 264011811
  },
  {
   "server": 30036,
   "family": "Avengers",
   "power": 155387306
  },
  {
   "server": 30036,
   "family": "Moggers",
   "power": 139893700
  },
  {
   "server": 30036,
   "family": "Supernovas",
   "power": 132651055
  },
  {
   "server": 30037,
   "family": "SilverStars",
   "power": 1119104966
  },
  {
   "server": 30037,
   "family": "UK",
   "power": 844051428
  },
  {
   "server": 30037,
   "family": "FungiGang",
   "power": 661201344
  },
  {
   "server": 30037,
   "family": "fungusWorlds",
   "power": 456586773
  },
  {
   "server": 30037,
   "family": "MushLords",
   "power": 364670157
  },
  {
   "server": 30037,
   "family": "Otherworld",
   "power": 290184584
  },
  {
   "server": 30037,
   "family": "LEGEND",
   "power": 194904349
  },
  {
   "server": 30037,
   "family": "TeaParty",
   "power": 186356268
  },
  {
   "server": 30037,
   "family": "легушка",
   "power": 147773478
  },
  {
   "server": 30037,
   "family": "op",
   "power": 118162765
  },
  {
   "server": 30038,
   "family": "OnlyTheBrave",
   "power": 1254540138
  },
  {
   "server": 30038,
   "family": "Hyperize",
   "power": 575899223
  },
  {
   "server": 30038,
   "family": "RagingUnicorn",
   "power": 363657599
  },
  {
   "server": 30038,
   "family": "Legends",
   "power": 334781358
  },
  {
   "server": 30038,
   "family": "GOON",
   "power": 310894478
  },
  {
   "server": 30038,
   "family": "The_Gods",
   "power": 250119708
  },
  {
   "server": 30038,
   "family": "Krew",
   "power": 191049168
  },
  {
   "server": 30038,
   "family": "Schroomlegends",
   "power": 180304847
  },
  {
   "server": 30038,
   "family": "FallenAngels",
   "power": 169386766
  },
  {
   "server": 30038,
   "family": "urmum",
   "power": 94303057
  },
  {
   "server": 30039,
   "family": "Elite",
   "power": 1339534575
  },
  {
   "server": 30039,
   "family": "Coley",
   "power": 538471662
  },
  {
   "server": 30039,
   "family": "Brazucas",
   "power": 335584623
  },
  {
   "server": 30039,
   "family": "Guardians",
   "power": 289336969
  },
  {
   "server": 30039,
   "family": "Falcons",
   "power": 269640524
  },
  {
   "server": 30039,
   "family": "ShroomRoom",
   "power": 259647185
  },
  {
   "server": 30039,
   "family": "FOXHOUND",
   "power": 237357531
  },
  {
   "server": 30039,
   "family": "Specials",
   "power": 226234616
  },
  {
   "server": 30039,
   "family": "Kitsune",
   "power": 175888612
  },
  {
   "server": 30039,
   "family": "Suomiperkele",
   "power": 153522669
  },
  {
   "server": 30040,
   "family": "Radiance",
   "power": 1018722726
  },
  {
   "server": 30040,
   "family": "Justice",
   "power": 966866779
  },
  {
   "server": 30040,
   "family": "Mythic",
   "power": 411237919
  },
  {
   "server": 30040,
   "family": "SpecialCrew",
   "power": 393890346
  },
  {
   "server": 30040,
   "family": "Pebroom",
   "power": 268301034
  },
  {
   "server": 30040,
   "family": "Kingeraal",
   "power": 220585687
  },
  {
   "server": 30040,
   "family": "TopEN",
   "power": 201356961
  },
  {
   "server": 30040,
   "family": "free",
   "power": 192947599
  },
  {
   "server": 30040,
   "family": "LGC",
   "power": 192899823
  },
  {
   "server": 30040,
   "family": "EnglishShrooms",
   "power": 158826925
  },
  {
   "server": 30041,
   "family": "Nocturnals",
   "power": 1418245713
  },
  {
   "server": 30041,
   "family": "bad",
   "power": 547868232
  },
  {
   "server": 30041,
   "family": "fireglobal",
   "power": 518323282
  },
  {
   "server": 30041,
   "family": "Night",
   "power": 370212911
  },
  {
   "server": 30041,
   "family": "shroomvill",
   "power": 286594696
  },
  {
   "server": 30041,
   "family": "Yipee",
   "power": 217365702
  },
  {
   "server": 30041,
   "family": "DrakenGuards",
   "power": 183986961
  },
  {
   "server": 30041,
   "family": "LightningMush",
   "power": 148322640
  },
  {
   "server": 30041,
   "family": "Jim2touchey",
   "power": 127826057
  },
  {
   "server": 30041,
   "family": "SporeLosers",
   "power": 86046785
  },
  {
   "server": 30042,
   "family": "WalkingDead",
   "power": 1115479989
  },
  {
   "server": 30042,
   "family": "VIP",
   "power": 1044366008
  },
  {
   "server": 30042,
   "family": "DewDog",
   "power": 429154521
  },
  {
   "server": 30042,
   "family": "reapers",
   "power": 328395050
  },
  {
   "server": 30042,
   "family": "DemonSlayers",
   "power": 277846248
  },
  {
   "server": 30042,
   "family": "PALERMO",
   "power": 264528424
  },
  {
   "server": 30042,
   "family": "Lol",
   "power": 235602700
  },
  {
   "server": 30042,
   "family": "Olympe",
   "power": 175236795
  },
  {
   "server": 30042,
   "family": "Legendary",
   "power": 128166592
  },
  {
   "server": 30042,
   "family": "Glitch",
   "power": 61651972
  },
  {
   "server": 30043,
   "family": "TruffleMakers",
   "power": 1240470462
  },
  {
   "server": 30043,
   "family": "Exiled༒Ones",
   "power": 909151765
  },
  {
   "server": 30043,
   "family": "FungRoom",
   "power": 415905871
  },
  {
   "server": 30043,
   "family": "Mshrm",
   "power": 250031820
  },
  {
   "server": 30043,
   "family": "Gods",
   "power": 233387344
  },
  {
   "server": 30043,
   "family": "deangy38",
   "power": 205589421
  },
  {
   "server": 30043,
   "family": "tubi…⁠ᘛ⁠⁐̤⁠ᕐ⁠ᐷ",
   "power": 202938710
  },
  {
   "server": 30043,
   "family": "MushWarriors",
   "power": 178154172
  },
  {
   "server": 30043,
   "family": "ShadowWalkerZ",
   "power": 167711974
  },
  {
   "server": 30043,
   "family": "Ceffettino",
   "power": 122662168
  },
  {
   "server": 30044,
   "family": "XLbullyboys",
   "power": 1147503298
  },
  {
   "server": 30044,
   "family": "SuicideSquad",
   "power": 831426106
  },
  {
   "server": 30044,
   "family": "Yggdrasil",
   "power": 251415306
  },
  {
   "server": 30044,
   "family": "Kenno’s",
   "power": 229898246
  },
  {
   "server": 30044,
   "family": "THE420FAM",
   "power": 214785543
  },
  {
   "server": 30044,
   "family": "JustTheTip",
   "power": 153351792
  },
  {
   "server": 30044,
   "family": "Skrevsvamp",
   "power": 142238412
  },
  {
   "server": 30044,
   "family": "Olympe",
   "power": 102627147
  },
  {
   "server": 30044,
   "family": "furrys",
   "power": 38414773
  },
  {
   "server": 30044,
   "family": "DummiS",
   "power": 38352016
  },
  {
   "server": 30045,
   "family": "NewImperium",
   "power": 1258737176
  },
  {
   "server": 30045,
   "family": "LostPlace",
   "power": 486193674
  },
  {
   "server": 30045,
   "family": "Limitless",
   "power": 305583637
  },
  {
   "server": 30045,
   "family": "BlackCat",
   "power": 276082905
  },
  {
   "server": 30045,
   "family": "RavensCroft",
   "power": 249687770
  },
  {
   "server": 30045,
   "family": "MagicShrooms",
   "power": 232304591
  },
  {
   "server": 30045,
   "family": "Fungais",
   "power": 181973114
  },
  {
   "server": 30045,
   "family": "Arctic",
   "power": 160333465
  },
  {
   "server": 30045,
   "family": "Framzone",
   "power": 112832180
  },
  {
   "server": 30045,
   "family": "underdogs",
   "power": 102451638
  },
  {
   "server": 30046,
   "family": "opinionists",
   "power": 1056665834
  },
  {
   "server": 30046,
   "family": "Unity",
   "power": 839897063
  },
  {
   "server": 30046,
   "family": "Cute",
   "power": 441594046
  },
  {
   "server": 30046,
   "family": "Shroomville",
   "power": 426082477
  },
  {
   "server": 30046,
   "family": "walkingshrooms",
   "power": 240661590
  },
  {
   "server": 30046,
   "family": "Coucout",
   "power": 218934623
  },
  {
   "server": 30046,
   "family": "thewolfs",
   "power": 157790467
  },
  {
   "server": 30046,
   "family": "Legends_3",
   "power": 154040069
  },
  {
   "server": 30046,
   "family": "TheSquidd",
   "power": 143760875
  },
  {
   "server": 30046,
   "family": "OmiAlliance",
   "power": 125110310
  },
  {
   "server": 30047,
   "family": "FAMILY",
   "power": 1227787290
  },
  {
   "server": 30047,
   "family": "Funguys",
   "power": 514418179
  },
  {
   "server": 30047,
   "family": "England",
   "power": 320137341
  },
  {
   "server": 30047,
   "family": "BOOM",
   "power": 232419683
  },
  {
   "server": 30047,
   "family": "zombies",
   "power": 226837096
  },
  {
   "server": 30047,
   "family": "GG",
   "power": 210335382
  },
  {
   "server": 30047,
   "family": "toastie",
   "power": 179244448
  },
  {
   "server": 30047,
   "family": "AnimeTemple",
   "power": 175630421
  },
  {
   "server": 30047,
   "family": "specialunit",
   "power": 167629173
  },
  {
   "server": 30047,
   "family": "SSSHunter",
   "power": 166207133
  },
  {
   "server": 30048,
   "family": "Alpacalypse",
   "power": 1429916757
  },
  {
   "server": 30048,
   "family": "ShroOmateS",
   "power": 586675608
  },
  {
   "server": 30048,
   "family": "Scottishshroom",
   "power": 408809611
  },
  {
   "server": 30048,
   "family": "Alpacademy",
   "power": 379560825
  },
  {
   "server": 30048,
   "family": "ForTheClueless",
   "power": 318462415
  },
  {
   "server": 30048,
   "family": "TheSinas",
   "power": 227861813
  },
  {
   "server": 30048,
   "family": "TheMarauders",
   "power": 210088802
  },
  {
   "server": 30048,
   "family": "Shrooms4Life",
   "power": 208555561
  },
  {
   "server": 30048,
   "family": "stranger",
   "power": 199262490
  },
  {
   "server": 30048,
   "family": "TheboTs",
   "power": 189565651
  },
  {
   "server": 30049,
   "family": "Tormentium",
   "power": 1323259157
  },
  {
   "server": 30049,
   "family": "NoPainNoGain",
   "power": 873888452
  },
  {
   "server": 30049,
   "family": "Fam420",
   "power": 324964579
  },
  {
   "server": 30049,
   "family": "Poêlée",
   "power": 324006418
  },
  {
   "server": 30049,
   "family": "MIDNIGHT",
   "power": 283379152
  },
  {
   "server": 30049,
   "family": "sololeveling",
   "power": 262517339
  },
  {
   "server": 30049,
   "family": "Animal_Thrower",
   "power": 254645099
  },
  {
   "server": 30049,
   "family": "nerf",
   "power": 182933204
  },
  {
   "server": 30049,
   "family": "British",
   "power": 171394685
  },
  {
   "server": 30049,
   "family": "mushroombeater",
   "power": 162986797
  },
  {
   "server": 30050,
   "family": "ULTIMA",
   "power": 1171681663
  },
  {
   "server": 30050,
   "family": "OP",
   "power": 975872877
  },
  {
   "server": 30050,
   "family": "Lucozade",
   "power": 731838593
  },
  {
   "server": 30050,
   "family": "MapleTree",
   "power": 341071037
  },
  {
   "server": 30050,
   "family": "OG",
   "power": 283927957
  },
  {
   "server": 30050,
   "family": "SYMNERD",
   "power": 267199141
  },
  {
   "server": 30050,
   "family": "420camp",
   "power": 203685541
  },
  {
   "server": 30050,
   "family": "BangBros",
   "power": 202365977
  },
  {
   "server": 30050,
   "family": "Smileyriley",
   "power": 199634767
  },
  {
   "server": 30050,
   "family": "501st",
   "power": 157849087
  },
  {
   "server": 30051,
   "family": "SmashSquad",
   "power": 1219820139
  },
  {
   "server": 30051,
   "family": "Nightingales",
   "power": 469913685
  },
  {
   "server": 30051,
   "family": "StaffsSquad",
   "power": 440440904
  },
  {
   "server": 30051,
   "family": "Shroomtale",
   "power": 373465644
  },
  {
   "server": 30051,
   "family": "ItalyLegion",
   "power": 264049215
  },
  {
   "server": 30051,
   "family": "OnePiece",
   "power": 220384809
  },
  {
   "server": 30051,
   "family": "KarmineCorp",
   "power": 206087246
  },
  {
   "server": 30051,
   "family": "mawsteam",
   "power": 201056327
  },
  {
   "server": 30051,
   "family": "højris",
   "power": 196046996
  },
  {
   "server": 30051,
   "family": "ShadowMushroms",
   "power": 142727311
  },
  {
   "server": 30052,
   "family": "SoloLeveling",
   "power": 1169234200
  },
  {
   "server": 30052,
   "family": "LuckyStrike",
   "power": 770433131
  },
  {
   "server": 30052,
   "family": "Devils_Rejects",
   "power": 461593903
  },
  {
   "server": 30052,
   "family": "KarmineCorp",
   "power": 424550709
  },
  {
   "server": 30052,
   "family": "funguy",
   "power": 270773554
  },
  {
   "server": 30052,
   "family": "MicroWave",
   "power": 268640574
  },
  {
   "server": 30052,
   "family": "MushroomCity",
   "power": 250879075
  },
  {
   "server": 30052,
   "family": "nodribblers",
   "power": 201037135
  },
  {
   "server": 30052,
   "family": "Mushies",
   "power": 195205151
  },
  {
   "server": 30052,
   "family": "FamilyHouse",
   "power": 193835485
  },
  {
   "server": 30053,
   "family": "EUNations",
   "power": 1238145400
  },
  {
   "server": 30053,
   "family": "EUNationsII",
   "power": 567773883
  },
  {
   "server": 30053,
   "family": "EUphoria",
   "power": 405069109
  },
  {
   "server": 30053,
   "family": "Justiceshroom",
   "power": 249112791
  },
  {
   "server": 30053,
   "family": "MUSH_ITA",
   "power": 246287268
  },
  {
   "server": 30053,
   "family": "Death_Cap",
   "power": 226825644
  },
  {
   "server": 30053,
   "family": "HuntersGuild",
   "power": 225256322
  },
  {
   "server": 30053,
   "family": "toaster",
   "power": 197283018
  },
  {
   "server": 30053,
   "family": "TurdBurglars",
   "power": 160430048
  },
  {
   "server": 30053,
   "family": "UKShrooms",
   "power": 154914297
  },
  {
   "server": 30054,
   "family": "OP",
   "power": 1232446991
  },
  {
   "server": 30054,
   "family": "DarkShroomz",
   "power": 434857256
  },
  {
   "server": 30054,
   "family": "JBL",
   "power": 321437602
  },
  {
   "server": 30054,
   "family": "GG",
   "power": 308578100
  },
  {
   "server": 30054,
   "family": "Kankrouth",
   "power": 287534089
  },
  {
   "server": 30054,
   "family": "MagicMushrooms",
   "power": 251082548
  },
  {
   "server": 30054,
   "family": "DaRatFamily",
   "power": 222801149
  },
  {
   "server": 30054,
   "family": "PinkPanther",
   "power": 158313789
  },
  {
   "server": 30054,
   "family": "Fox",
   "power": 142146116
  },
  {
   "server": 30054,
   "family": "Devils",
   "power": 120436088
  },
  {
   "server": 30055,
   "family": "SlayerZ",
   "power": 1227316878
  },
  {
   "server": 30055,
   "family": "CrimsonDynasty",
   "power": 881071073
  },
  {
   "server": 30055,
   "family": "ZULMİKÂR",
   "power": 399441510
  },
  {
   "server": 30055,
   "family": "Shrooms",
   "power": 291680203
  },
  {
   "server": 30055,
   "family": "Limitless",
   "power": 269046005
  },
  {
   "server": 30055,
   "family": "shadow_wolf666",
   "power": 247432694
  },
  {
   "server": 30055,
   "family": "CHARIZARD",
   "power": 228017687
  },
  {
   "server": 30055,
   "family": "Deutschland",
   "power": 207498182
  },
  {
   "server": 30055,
   "family": "CAT_FAMILY",
   "power": 148293748
  },
  {
   "server": 30055,
   "family": "Operators",
   "power": 130833387
  },
  {
   "server": 30056,
   "family": "Polska",
   "power": 1155267864
  },
  {
   "server": 30056,
   "family": "UNITY",
   "power": 505072170
  },
  {
   "server": 30056,
   "family": "KC_Familly",
   "power": 397903215
  },
  {
   "server": 30056,
   "family": "cool_people",
   "power": 330812017
  },
  {
   "server": 30056,
   "family": "TnP",
   "power": 239340546
  },
  {
   "server": 30056,
   "family": "legends",
   "power": 235637686
  },
  {
   "server": 30056,
   "family": "Showmeurs",
   "power": 207104570
  },
  {
   "server": 30056,
   "family": "OnePiece",
   "power": 205235309
  },
  {
   "server": 30056,
   "family": "MagicMushroom",
   "power": 200819115
  },
  {
   "server": 30056,
   "family": "Homeboys",
   "power": 190462207
  },
  {
   "server": 30057,
   "family": "NOMADS",
   "power": 1197361523
  },
  {
   "server": 30057,
   "family": "LaFamilia",
   "power": 517527169
  },
  {
   "server": 30057,
   "family": "darkclan",
   "power": 349637316
  },
  {
   "server": 30057,
   "family": "WePlayDaily",
   "power": 324043003
  },
  {
   "server": 30057,
   "family": "Saints",
   "power": 319105808
  },
  {
   "server": 30057,
   "family": "HolyTemple",
   "power": 312800721
  },
  {
   "server": 30057,
   "family": "PolLandia",
   "power": 251137875
  },
  {
   "server": 30057,
   "family": "Nutters",
   "power": 229761313
  },
  {
   "server": 30057,
   "family": "Ohyeah",
   "power": 210054161
  },
  {
   "server": 30057,
   "family": "FGuysandFGirls",
   "power": 194118753
  },
  {
   "server": 30058,
   "family": "DragoniteS",
   "power": 1215501923
  },
  {
   "server": 30058,
   "family": "Dragonite5",
   "power": 646941790
  },
  {
   "server": 30058,
   "family": "Psilovybin",
   "power": 534059035
  },
  {
   "server": 30058,
   "family": "We_Eat_Ass",
   "power": 327493255
  },
  {
   "server": 30058,
   "family": "Sexyshrooms",
   "power": 279252307
  },
  {
   "server": 30058,
   "family": "Family",
   "power": 236756800
  },
  {
   "server": 30058,
   "family": "Teemo",
   "power": 229742733
  },
  {
   "server": 30058,
   "family": "Elites",
   "power": 215436642
  },
  {
   "server": 30058,
   "family": "BlackKnights",
   "power": 163141821
  },
  {
   "server": 30058,
   "family": "Psychedelic",
   "power": 131754541
  },
  {
   "server": 30059,
   "family": "Sky",
   "power": 1057892771
  },
  {
   "server": 30059,
   "family": "Grubbers",
   "power": 385534192
  },
  {
   "server": 30059,
   "family": "TwinFlames",
   "power": 356168630
  },
  {
   "server": 30059,
   "family": "IRAN",
   "power": 301379398
  },
  {
   "server": 30059,
   "family": "Mushroomgang",
   "power": 200932275
  },
  {
   "server": 30059,
   "family": "TheTribe",
   "power": 186018277
  },
  {
   "server": 30059,
   "family": "Fullmoon",
   "power": 181476332
  },
  {
   "server": 30059,
   "family": "Pantheon",
   "power": 165470662
  },
  {
   "server": 30059,
   "family": "SilverForce",
   "power": 162446909
  },
  {
   "server": 30059,
   "family": "No1family",
   "power": 154368303
  },
  {
   "server": 30060,
   "family": "MagicSmilers",
   "power": 1271614719
  },
  {
   "server": 30060,
   "family": "LizardLickers",
   "power": 874558013
  },
  {
   "server": 30060,
   "family": "FreeToWin",
   "power": 408482260
  },
  {
   "server": 30060,
   "family": "Interstellar",
   "power": 290963283
  },
  {
   "server": 30060,
   "family": "Funguys",
   "power": 230843310
  },
  {
   "server": 30060,
   "family": "Moomoo",
   "power": 229114084
  },
  {
   "server": 30060,
   "family": "NumberOne",
   "power": 199378090
  },
  {
   "server": 30060,
   "family": "Manicomio",
   "power": 125189653
  },
  {
   "server": 30060,
   "family": "Fungus_Italy",
   "power": 123206289
  },
  {
   "server": 30060,
   "family": "FireGlobal",
   "power": 114166042
  },
  {
   "server": 30061,
   "family": "Fearless",
   "power": 1212490101
  },
  {
   "server": 30061,
   "family": "Akatsuki",
   "power": 865812360
  },
  {
   "server": 30061,
   "family": "the420fam",
   "power": 365965320
  },
  {
   "server": 30061,
   "family": "RadiantGarden",
   "power": 341176762
  },
  {
   "server": 30061,
   "family": "AgentsAreGo",
   "power": 306936546
  },
  {
   "server": 30061,
   "family": "WonkyShroomis",
   "power": 227024486
  },
  {
   "server": 30061,
   "family": "PhantomFungus",
   "power": 222367693
  },
  {
   "server": 30061,
   "family": "Penumbra",
   "power": 207826049
  },
  {
   "server": 30061,
   "family": "DESTROYERS",
   "power": 187394378
  },
  {
   "server": 30061,
   "family": "FireGlobal",
   "power": 150592138
  },
  {
   "server": 30062,
   "family": "ShroomCrew",
   "power": 1041646933
  },
  {
   "server": 30062,
   "family": "ShiitakeStrike",
   "power": 865858016
  },
  {
   "server": 30062,
   "family": "NewHorizon",
   "power": 330018929
  },
  {
   "server": 30062,
   "family": "Notmushroom",
   "power": 323063452
  },
  {
   "server": 30062,
   "family": "Crackheads",
   "power": 276515034
  },
  {
   "server": 30062,
   "family": "SafeHaven",
   "power": 238894755
  },
  {
   "server": 30062,
   "family": "Globbers",
   "power": 213707919
  },
  {
   "server": 30062,
   "family": "ScoutRegiment",
   "power": 213619018
  },
  {
   "server": 30062,
   "family": "VictoryRoad",
   "power": 213266759
  },
  {
   "server": 30062,
   "family": "LATVIJA🫣",
   "power": 198307669
  },
  {
   "server": 30063,
   "family": "HomelessWhales",
   "power": 1092672987
  },
  {
   "server": 30063,
   "family": "Mycelium",
   "power": 498123785
  },
  {
   "server": 30063,
   "family": "TopShrooms",
   "power": 450705608
  },
  {
   "server": 30063,
   "family": "legacy",
   "power": 367355166
  },
  {
   "server": 30063,
   "family": "WuTangClan",
   "power": 298983168
  },
  {
   "server": 30063,
   "family": "SailorShroom",
   "power": 284214251
  },
  {
   "server": 30063,
   "family": "bloodwolfs",
   "power": 270637350
  },
  {
   "server": 30063,
   "family": "norway",
   "power": 253042006
  },
  {
   "server": 30063,
   "family": "AnitaDump",
   "power": 236476926
  },
  {
   "server": 30063,
   "family": "UnitedKingdom",
   "power": 224645684
  },
  {
   "server": 30064,
   "family": "RiseOfShrooms",
   "power": 1124001477
  },
  {
   "server": 30064,
   "family": "MystykCheese",
   "power": 784388195
  },
  {
   "server": 30064,
   "family": "Crue",
   "power": 328767983
  },
  {
   "server": 30064,
   "family": "Shroomies",
   "power": 257693137
  },
  {
   "server": 30064,
   "family": "SwiftShadows",
   "power": 255049691
  },
  {
   "server": 30064,
   "family": "TheGoats",
   "power": 253046401
  },
  {
   "server": 30064,
   "family": "ShadowzRooms",
   "power": 244571459
  },
  {
   "server": 30064,
   "family": "JuicyGang",
   "power": 237248213
  },
  {
   "server": 30064,
   "family": "FeartheScots",
   "power": 219346793
  },
  {
   "server": 30064,
   "family": "ITA",
   "power": 136999302
  },
  {
   "server": 30065,
   "family": "SarielHood",
   "power": 1215268277
  },
  {
   "server": 30065,
   "family": "SarielHood2",
   "power": 676493378
  },
  {
   "server": 30065,
   "family": "Shroomies",
   "power": 397294367
  },
  {
   "server": 30065,
   "family": "SarielHood3",
   "power": 281567342
  },
  {
   "server": 30065,
   "family": "MushVibes",
   "power": 264886672
  },
  {
   "server": 30065,
   "family": "Aartaples",
   "power": 249775849
  },
  {
   "server": 30065,
   "family": "DungeonDudes",
   "power": 237687849
  },
  {
   "server": 30065,
   "family": "Mushrooms",
   "power": 201239615
  },
  {
   "server": 30065,
   "family": "crusaders",
   "power": 199123088
  },
  {
   "server": 30065,
   "family": "ZNation",
   "power": 176787896
  },
  {
   "server": 30066,
   "family": "OP",
   "power": 1039062750
  },
  {
   "server": 30066,
   "family": "Ownage",
   "power": 479678423
  },
  {
   "server": 30066,
   "family": "Mushrooms",
   "power": 422247147
  },
  {
   "server": 30066,
   "family": "Olympus",
   "power": 348745370
  },
  {
   "server": 30066,
   "family": "Toxic",
   "power": 346516496
  },
  {
   "server": 30066,
   "family": "Opium",
   "power": 234176318
  },
  {
   "server": 30066,
   "family": "FunGuy",
   "power": 226274351
  },
  {
   "server": 30066,
   "family": "Otherworld",
   "power": 225701568
  },
  {
   "server": 30066,
   "family": "Gladiators",
   "power": 198967891
  },
  {
   "server": 30066,
   "family": "Italia",
   "power": 163989693
  },
  {
   "server": 30067,
   "family": "Pirates",
   "power": 1063215362
  },
  {
   "server": 30067,
   "family": "TheFunGuys",
   "power": 561183420
  },
  {
   "server": 30067,
   "family": "Frenchactif",
   "power": 446821220
  },
  {
   "server": 30067,
   "family": "russian",
   "power": 326092069
  },
  {
   "server": 30067,
   "family": "Phoenix",
   "power": 293833993
  },
  {
   "server": 30067,
   "family": "NOOBS",
   "power": 243281718
  },
  {
   "server": 30067,
   "family": "Family",
   "power": 233681919
  },
  {
   "server": 30067,
   "family": "Pilzkrieger",
   "power": 227295741
  },
  {
   "server": 30067,
   "family": "Holigans",
   "power": 216156868
  },
  {
   "server": 30067,
   "family": "GermanyNextLvL",
   "power": 189881651
  },
  {
   "server": 30068,
   "family": "PMU",
   "power": 957263665
  },
  {
   "server": 30068,
   "family": "FearLess",
   "power": 478598616
  },
  {
   "server": 30068,
   "family": "MushroomArmy",
   "power": 401846376
  },
  {
   "server": 30068,
   "family": "Elite",
   "power": 320919674
  },
  {
   "server": 30068,
   "family": "DragonSquad",
   "power": 272105419
  },
  {
   "server": 30068,
   "family": "ShroomLegends",
   "power": 258039952
  },
  {
   "server": 30068,
   "family": "Ultrawings",
   "power": 257762221
  },
  {
   "server": 30068,
   "family": "NumberOne",
   "power": 256189877
  },
  {
   "server": 30068,
   "family": "Rustynails",
   "power": 229357443
  },
  {
   "server": 30068,
   "family": "Infected",
   "power": 199879282
  },
  {
   "server": 30069,
   "family": "Serenity",
   "power": 944747730
  },
  {
   "server": 30069,
   "family": "Gods",
   "power": 804778577
  },
  {
   "server": 30069,
   "family": "Barbie",
   "power": 333360564
  },
  {
   "server": 30069,
   "family": "McSauces",
   "power": 296020923
  },
  {
   "server": 30069,
   "family": "Star",
   "power": 250536863
  },
  {
   "server": 30069,
   "family": "Shroomies4life",
   "power": 249172596
  },
  {
   "server": 30069,
   "family": "BLTfamily",
   "power": 246960958
  },
  {
   "server": 30069,
   "family": "TheGOATfamily",
   "power": 198504264
  },
  {
   "server": 30069,
   "family": "BOBBAS",
   "power": 167756930
  },
  {
   "server": 30069,
   "family": "Goombas",
   "power": 138078305
  },
  {
   "server": 30070,
   "family": "Peshmerga",
   "power": 1015200660
  },
  {
   "server": 30070,
   "family": "ShroomsLovers",
   "power": 605214738
  },
  {
   "server": 30070,
   "family": "Funghetti",
   "power": 448754969
  },
  {
   "server": 30070,
   "family": "Ryse_Empire",
   "power": 248964817
  },
  {
   "server": 30070,
   "family": "cc5859",
   "power": 241224715
  },
  {
   "server": 30070,
   "family": "Mycelium",
   "power": 240437222
  },
  {
   "server": 30070,
   "family": "ČeskéHouby",
   "power": 209526218
  },
  {
   "server": 30070,
   "family": "friend",
   "power": 198518020
  },
  {
   "server": 30070,
   "family": "ScoobySnacks",
   "power": 186753484
  },
  {
   "server": 30070,
   "family": "yowaimo",
   "power": 70431817
  },
  {
   "server": 30071,
   "family": "Shadows",
   "power": 951896597
  },
  {
   "server": 30071,
   "family": "Dominators",
   "power": 531909946
  },
  {
   "server": 30071,
   "family": "Hogwarts",
   "power": 387218958
  },
  {
   "server": 30071,
   "family": "Dark",
   "power": 303783304
  },
  {
   "server": 30071,
   "family": "Dragon_Riders",
   "power": 279126739
  },
  {
   "server": 30071,
   "family": "Jupes",
   "power": 275495075
  },
  {
   "server": 30071,
   "family": "itas",
   "power": 223545852
  },
  {
   "server": 30071,
   "family": "Lions",
   "power": 199375967
  },
  {
   "server": 30071,
   "family": "ShadowGarden",
   "power": 178864385
  },
  {
   "server": 30071,
   "family": "Egg",
   "power": 158094605
  },
  {
   "server": 30072,
   "family": "Monarchs",
   "power": 816763884
  },
  {
   "server": 30072,
   "family": "HORDE",
   "power": 457899967
  },
  {
   "server": 30072,
   "family": "SleepyPanda",
   "power": 291267247
  },
  {
   "server": 30072,
   "family": "OP",
   "power": 274023567
  },
  {
   "server": 30072,
   "family": "STR",
   "power": 250243705
  },
  {
   "server": 30072,
   "family": "DaBoys",
   "power": 224638684
  },
  {
   "server": 30072,
   "family": "Mushyland",
   "power": 200042669
  },
  {
   "server": 30072,
   "family": "greengang",
   "power": 181630806
  },
  {
   "server": 30072,
   "family": "SithLegacy",
   "power": 158081425
  },
  {
   "server": 30072,
   "family": "Trippy",
   "power": 157437678
  },
  {
   "server": 30073,
   "family": "Berserkers",
   "power": 847435122
  },
  {
   "server": 30073,
   "family": "Legends",
   "power": 408066212
  },
  {
   "server": 30073,
   "family": "Overlord",
   "power": 285100193
  },
  {
   "server": 30073,
   "family": "HighStatus",
   "power": 206258793
  },
  {
   "server": 30073,
   "family": "BAB",
   "power": 205643545
  },
  {
   "server": 30073,
   "family": "Kobra",
   "power": 191687880
  },
  {
   "server": 30073,
   "family": "CzechStoners",
   "power": 184495660
  },
  {
   "server": 30073,
   "family": "DreamTeam",
   "power": 177999052
  },
  {
   "server": 30073,
   "family": "Azarions",
   "power": 175363509
  },
  {
   "server": 30073,
   "family": "theGAMERS",
   "power": 161829533
  },
  {
   "server": 30074,
   "family": "Divinity",
   "power": 783630449
  },
  {
   "server": 30074,
   "family": "Here4Fun",
   "power": 338244696
  },
  {
   "server": 30074,
   "family": "1forAll",
   "power": 330896204
  },
  {
   "server": 30074,
   "family": "MedCartel",
   "power": 301406064
  },
  {
   "server": 30074,
   "family": "Geofamily",
   "power": 256716270
  },
  {
   "server": 30074,
   "family": "BlackShroomies",
   "power": 237371430
  },
  {
   "server": 30074,
   "family": "Shroomers",
   "power": 206648034
  },
  {
   "server": 30074,
   "family": "CtrlAltDel",
   "power": 188496367
  },
  {
   "server": 30074,
   "family": "ForTheEmpire",
   "power": 174332670
  },
  {
   "server": 30074,
   "family": "слоник",
   "power": 168174039
  },
  {
   "server": 30075,
   "family": "SOLSTICE",
   "power": 992175230
  },
  {
   "server": 30075,
   "family": "АКТИВНІ",
   "power": 551380710
  },
  {
   "server": 30075,
   "family": "Legends",
   "power": 369638256
  },
  {
   "server": 30075,
   "family": "Abyss",
   "power": 272016197
  },
  {
   "server": 30075,
   "family": "MoggingMushes",
   "power": 256912263
  },
  {
   "server": 30075,
   "family": "FT",
   "power": 230416942
  },
  {
   "server": 30075,
   "family": "LunarticMoon28",
   "power": 195828240
  },
  {
   "server": 30075,
   "family": "Magyarok",
   "power": 191412315
  },
  {
   "server": 30075,
   "family": "UKShrooms",
   "power": 189780123
  },
  {
   "server": 30075,
   "family": "PrimalShrooms",
   "power": 163658821
  },
  {
   "server": 30076,
   "family": "Warriors",
   "power": 943761362
  },
  {
   "server": 30076,
   "family": "Fearless",
   "power": 641590054
  },
  {
   "server": 30076,
   "family": "ToadStool",
   "power": 523244331
  },
  {
   "server": 30076,
   "family": "Ashtebex",
   "power": 245966577
  },
  {
   "server": 30076,
   "family": "Fighters",
   "power": 245627799
  },
  {
   "server": 30076,
   "family": "TeamBeast",
   "power": 240341426
  },
  {
   "server": 30076,
   "family": "demons",
   "power": 238990555
  },
  {
   "server": 30076,
   "family": "Ninja_Clan",
   "power": 183100252
  },
  {
   "server": 30076,
   "family": "HalaMadrid",
   "power": 168936744
  },
  {
   "server": 30076,
   "family": "RedDragons",
   "power": 148771941
  },
  {
   "server": 30077,
   "family": "TwinFlames",
   "power": 760286307
  },
  {
   "server": 30077,
   "family": "NgFrench",
   "power": 581307234
  },
  {
   "server": 30077,
   "family": "SiyahSancak",
   "power": 347515319
  },
  {
   "server": 30077,
   "family": "Darkness",
   "power": 294685672
  },
  {
   "server": 30077,
   "family": "Germany",
   "power": 237064997
  },
  {
   "server": 30077,
   "family": "InFlames",
   "power": 235177677
  },
  {
   "server": 30077,
   "family": "Rebellion",
   "power": 215830240
  },
  {
   "server": 30077,
   "family": "Grubbers",
   "power": 170714255
  },
  {
   "server": 30077,
   "family": "toriyamasaiyan",
   "power": 159007547
  },
  {
   "server": 30077,
   "family": "Frenchyy",
   "power": 145754074
  },
  {
   "server": 30078,
   "family": "demonZ",
   "power": 908513474
  },
  {
   "server": 30078,
   "family": "Grubbers",
   "power": 472176309
  },
  {
   "server": 30078,
   "family": "Nightmares",
   "power": 290375532
  },
  {
   "server": 30078,
   "family": "magicshrooms",
   "power": 282320231
  },
  {
   "server": 30078,
   "family": "Ohana",
   "power": 250549933
  },
  {
   "server": 30078,
   "family": "OP",
   "power": 208977870
  },
  {
   "server": 30078,
   "family": "Demon_Slayer",
   "power": 193670282
  },
  {
   "server": 30078,
   "family": "Shroomies🤍",
   "power": 178030864
  },
  {
   "server": 30078,
   "family": "melloncatgang",
   "power": 176810448
  },
  {
   "server": 30078,
   "family": "Ege",
   "power": 158873025
  },
  {
   "server": 30079,
   "family": "Noctunals",
   "power": 715568933
  },
  {
   "server": 30079,
   "family": "Legends",
   "power": 617633787
  },
  {
   "server": 30079,
   "family": "EliteShrooms",
   "power": 308976767
  },
  {
   "server": 30079,
   "family": "communism",
   "power": 257752655
  },
  {
   "server": 30079,
   "family": "ILikeRocks",
   "power": 228016052
  },
  {
   "server": 30079,
   "family": "hyper",
   "power": 220654473
  },
  {
   "server": 30079,
   "family": "CzechFamily",
   "power": 187059744
  },
  {
   "server": 30079,
   "family": "FreeloaderBro",
   "power": 181540680
  },
  {
   "server": 30079,
   "family": "KingPins",
   "power": 151259143
  },
  {
   "server": 30079,
   "family": "Bighunter",
   "power": 137963194
  },
  {
   "server": 30080,
   "family": "F2P",
   "power": 827049082
  },
  {
   "server": 30080,
   "family": "Legends",
   "power": 478408757
  },
  {
   "server": 30080,
   "family": "shroomydoomy",
   "power": 219094043
  },
  {
   "server": 30080,
   "family": "Evolve",
   "power": 189215441
  },
  {
   "server": 30080,
   "family": "SkCz",
   "power": 187747038
  },
  {
   "server": 30080,
   "family": "Atlas",
   "power": 180725144
  },
  {
   "server": 30080,
   "family": "teemo",
   "power": 175369921
  },
  {
   "server": 30080,
   "family": "GRANS_ARMY",
   "power": 172983158
  },
  {
   "server": 30080,
   "family": "Abrokilla",
   "power": 152185447
  },
  {
   "server": 30080,
   "family": "Family",
   "power": 88884195
  },
  {
   "server": 30081,
   "family": "Warriors",
   "power": 869700635
  },
  {
   "server": 30081,
   "family": "KINGS",
   "power": 390596974
  },
  {
   "server": 30081,
   "family": "Dutchies",
   "power": 208623766
  },
  {
   "server": 30081,
   "family": "Focus",
   "power": 201027397
  },
  {
   "server": 30081,
   "family": "MegaShrooms",
   "power": 177227538
  },
  {
   "server": 30081,
   "family": "Svenskasvampar",
   "power": 172166495
  },
  {
   "server": 30081,
   "family": "EternalLegends",
   "power": 168944563
  },
  {
   "server": 30081,
   "family": "MushroomHill",
   "power": 155303017
  },
  {
   "server": 30081,
   "family": "Slovak_Cech",
   "power": 153743722
  },
  {
   "server": 30081,
   "family": "Gronk",
   "power": 64799482
  },
  {
   "server": 30082,
   "family": "MushPit82",
   "power": 905246195
  },
  {
   "server": 30082,
   "family": "JujutsuKaisen",
   "power": 384825956
  },
  {
   "server": 30082,
   "family": "ITALIA",
   "power": 327056457
  },
  {
   "server": 30082,
   "family": "Truffles",
   "power": 306449679
  },
  {
   "server": 30082,
   "family": "loyals",
   "power": 197265787
  },
  {
   "server": 30082,
   "family": "MightyMush",
   "power": 193812606
  },
  {
   "server": 30082,
   "family": "ÁguaDasPedras",
   "power": 182869186
  },
  {
   "server": 30082,
   "family": "Shroom_Garden",
   "power": 176320412
  },
  {
   "server": 30082,
   "family": "hello",
   "power": 138989936
  },
  {
   "server": 30082,
   "family": "RuiN",
   "power": 40023678
  },
  {
   "server": 30083,
   "family": "SHROOMS",
   "power": 734844783
  },
  {
   "server": 30083,
   "family": "ShroomOrder",
   "power": 429267039
  },
  {
   "server": 30083,
   "family": "Legion",
   "power": 178551399
  },
  {
   "server": 30083,
   "family": "Tea",
   "power": 162338277
  },
  {
   "server": 30083,
   "family": "GANJALF",
   "power": 160275795
  },
  {
   "server": 30083,
   "family": "Myrmidones",
   "power": 152407522
  },
  {
   "server": 30083,
   "family": "Cokeine",
   "power": 149507786
  },
  {
   "server": 30083,
   "family": "EUNATIONS",
   "power": 92849263
  },
  {
   "server": 30083,
   "family": "Clove",
   "power": 74055788
  },
  {
   "server": 30083,
   "family": "Assassins",
   "power": 46285746
  },
  {
   "server": 30084,
   "family": "HakunaMatata",
   "power": 565382732
  },
  {
   "server": 30084,
   "family": "LordOfTheRings",
   "power": 261729490
  },
  {
   "server": 30084,
   "family": "KING",
   "power": 252290850
  },
  {
   "server": 30084,
   "family": "MagyarGombák",
   "power": 158404393
  },
  {
   "server": 30084,
   "family": "Deeeeeaaaaaath",
   "power": 153157907
  },
  {
   "server": 30084,
   "family": "iammooshroom",
   "power": 148905046
  },
  {
   "server": 30084,
   "family": "4fun",
   "power": 121744498
  },
  {
   "server": 30084,
   "family": "ZUG",
   "power": 102691268
  },
  {
   "server": 30084,
   "family": "Talented",
   "power": 71353298
  },
  {
   "server": 30084,
   "family": "StOnErS4LiFe",
   "power": 44169221
  },
  {
   "server": 30085,
   "family": "NightWalkers",
   "power": 664189898
  },
  {
   "server": 30085,
   "family": "AddavadaiCorp",
   "power": 551344491
  },
  {
   "server": 30085,
   "family": "ZeroClub",
   "power": 328822844
  },
  {
   "server": 30085,
   "family": "Musshies",
   "power": 303278062
  },
  {
   "server": 30085,
   "family": "Munchies",
   "power": 261561351
  },
  {
   "server": 30085,
   "family": "Falango",
   "power": 223055374
  },
  {
   "server": 30085,
   "family": "giggity",
   "power": 119330185
  },
  {
   "server": 30085,
   "family": "CZEaSVK",
   "power": 115933611
  },
  {
   "server": 30085,
   "family": "TreeOfLife",
   "power": 53726480
  },
  {
   "server": 30085,
   "family": "TheCraker_clan",
   "power": 48391036
  },
  {
   "server": 30086,
   "family": "Legacy",
   "power": 708748983
  },
  {
   "server": 30086,
   "family": "Immortals",
   "power": 417571492
  },
  {
   "server": 30086,
   "family": "Gigi",
   "power": 228452619
  },
  {
   "server": 30086,
   "family": "Mushrooms",
   "power": 212096730
  },
  {
   "server": 30086,
   "family": "CasualTrippers",
   "power": 206468499
  },
  {
   "server": 30086,
   "family": "ATOM",
   "power": 204527872
  },
  {
   "server": 30086,
   "family": "Mushgang",
   "power": 181161859
  },
  {
   "server": 30086,
   "family": "teemo",
   "power": 153178293
  },
  {
   "server": 30086,
   "family": "BurmeseFamily",
   "power": 32933044
  },
  {
   "server": 30086,
   "family": "EMPERORS",
   "power": 30085724
  },
  {
   "server": 30087,
   "family": "Monster",
   "power": 641079120
  },
  {
   "server": 30087,
   "family": "Alpha",
   "power": 234463342
  },
  {
   "server": 30087,
   "family": "Darkness",
   "power": 212871732
  },
  {
   "server": 30087,
   "family": "immortals",
   "power": 202948564
  },
  {
   "server": 30087,
   "family": "KING",
   "power": 182925329
  },
  {
   "server": 30087,
   "family": "Dark",
   "power": 171374271
  },
  {
   "server": 30087,
   "family": "roadmen",
   "power": 170995470
  },
  {
   "server": 30087,
   "family": "jellybeans",
   "power": 136605703
  },
  {
   "server": 30087,
   "family": "Losstrawhats",
   "power": 83956631
  },
  {
   "server": 30087,
   "family": "Darksiders",
   "power": 20435907
  },
  {
   "server": 30088,
   "family": "OnlyTheBest",
   "power": 585824573
  },
  {
   "server": 30088,
   "family": "ANARCHY",
   "power": 550799910
  },
  {
   "server": 30088,
   "family": "GodFathers",
   "power": 209726450
  },
  {
   "server": 30088,
   "family": "Shroompire",
   "power": 196451475
  },
  {
   "server": 30088,
   "family": "MushKingdom",
   "power": 180531806
  },
  {
   "server": 30088,
   "family": "elites",
   "power": 169033014
  },
  {
   "server": 30088,
   "family": "Yeboi",
   "power": 157624552
  },
  {
   "server": 30088,
   "family": "MushSoup",
   "power": 154660861
  },
  {
   "server": 30088,
   "family": "TeamEurope",
   "power": 154142196
  },
  {
   "server": 30088,
   "family": "Shroomski",
   "power": 135176051
  },
  {
   "server": 30089,
   "family": "Elites",
   "power": 558315132
  },
  {
   "server": 30089,
   "family": "Immortals",
   "power": 538682913
  },
  {
   "server": 30089,
   "family": "reet",
   "power": 299516884
  },
  {
   "server": 30089,
   "family": "LORDS",
   "power": 168528084
  },
  {
   "server": 30089,
   "family": "MANITARIA",
   "power": 163917543
  },
  {
   "server": 30089,
   "family": "Better",
   "power": 142144372
  },
  {
   "server": 30089,
   "family": "money£12",
   "power": 127958558
  },
  {
   "server": 30089,
   "family": "shroomers",
   "power": 94902693
  },
  {
   "server": 30089,
   "family": "yesir",
   "power": 82891467
  },
  {
   "server": 30089,
   "family": "KeepersOfLight",
   "power": 82047941
  },
  {
   "server": 30090,
   "family": "Legends",
   "power": 661477748
  },
  {
   "server": 30090,
   "family": "ShadowArmy",
   "power": 251615524
  },
  {
   "server": 30090,
   "family": "thefungiys",
   "power": 205544924
  },
  {
   "server": 30090,
   "family": "MoggingMushes",
   "power": 197016311
  },
  {
   "server": 30090,
   "family": "Fellowship",
   "power": 155106496
  },
  {
   "server": 30090,
   "family": "AToMY",
   "power": 142461240
  },
  {
   "server": 30090,
   "family": "Elite",
   "power": 124424293
  },
  {
   "server": 30090,
   "family": "Legacy",
   "power": 106740363
  },
  {
   "server": 30090,
   "family": "oogabooga",
   "power": 89992004
  },
  {
   "server": 30090,
   "family": "Darksouls",
   "power": 48709343
  },
  {
   "server": 30091,
   "family": "CrustyKrabs",
   "power": 612133872
  },
  {
   "server": 30091,
   "family": "Coins’R’us",
   "power": 316726753
  },
  {
   "server": 30091,
   "family": "Kings",
   "power": 289543626
  },
  {
   "server": 30091,
   "family": "TheFam",
   "power": 225722146
  },
  {
   "server": 30091,
   "family": "immortals",
   "power": 186852224
  },
  {
   "server": 30091,
   "family": "Degenerates",
   "power": 154477289
  },
  {
   "server": 30091,
   "family": "DeBrickas",
   "power": 140848536
  },
  {
   "server": 30091,
   "family": "CzechoSlovakia",
   "power": 136335853
  },
  {
   "server": 30091,
   "family": "HocusPocus",
   "power": 127283431
  },
  {
   "server": 30091,
   "family": "Peperoni",
   "power": 83049574
  },
  {
   "server": 30092,
   "family": "Rigged",
   "power": 533784473
  },
  {
   "server": 30092,
   "family": "TropicMorte",
   "power": 296557535
  },
  {
   "server": 30092,
   "family": "ShadowGarden",
   "power": 193598703
  },
  {
   "server": 30092,
   "family": "Death",
   "power": 167371025
  },
  {
   "server": 30092,
   "family": "Legends",
   "power": 164396936
  },
  {
   "server": 30092,
   "family": "Greekshrooms",
   "power": 159419203
  },
  {
   "server": 30092,
   "family": "WrathOfShroom",
   "power": 147078232
  },
  {
   "server": 30092,
   "family": "shroomers",
   "power": 136654063
  },
  {
   "server": 30092,
   "family": "Overlord",
   "power": 50336963
  },
  {
   "server": 30092,
   "family": "GOOSE",
   "power": 40650835
  },
  {
   "server": 30093,
   "family": "Traitors",
   "power": 528586198
  },
  {
   "server": 30093,
   "family": "MushKingsUK",
   "power": 367161665
  },
  {
   "server": 30093,
   "family": "Hellas",
   "power": 284421609
  },
  {
   "server": 30093,
   "family": "TheHell",
   "power": 193573676
  },
  {
   "server": 30093,
   "family": "Overlords",
   "power": 167671537
  },
  {
   "server": 30093,
   "family": "Sativa",
   "power": 143291533
  },
  {
   "server": 30093,
   "family": "Void",
   "power": 131838942
  },
  {
   "server": 30093,
   "family": "Serenity",
   "power": 113543187
  },
  {
   "server": 30093,
   "family": "panther1black",
   "power": 109796452
  },
  {
   "server": 30093,
   "family": "malaxeurdeburn",
   "power": 88740140
  },
  {
   "server": 30094,
   "family": "WARRIORS",
   "power": 701037170
  },
  {
   "server": 30094,
   "family": "Divine",
   "power": 274405233
  },
  {
   "server": 30094,
   "family": "HUNTERS",
   "power": 225580906
  },
  {
   "server": 30094,
   "family": "Munchers",
   "power": 223387882
  },
  {
   "server": 30094,
   "family": "Mugiwara",
   "power": 176966599
  },
  {
   "server": 30094,
   "family": "ZINZINSPACE",
   "power": 162606250
  },
  {
   "server": 30094,
   "family": "DutchWarrior",
   "power": 161816258
  },
  {
   "server": 30094,
   "family": "AlphaPack",
   "power": 157649378
  },
  {
   "server": 30094,
   "family": "Amanita",
   "power": 114918024
  },
  {
   "server": 30094,
   "family": "GoldenEagle",
   "power": 105142714
  },
  {
   "server": 30095,
   "family": "TheLasTSaviorS",
   "power": 543598360
  },
  {
   "server": 30095,
   "family": "TheImmortals",
   "power": 486271188
  },
  {
   "server": 30095,
   "family": "ToxicFamily",
   "power": 355709765
  },
  {
   "server": 30095,
   "family": "ShroomFriends",
   "power": 246683009
  },
  {
   "server": 30095,
   "family": "SINNERS",
   "power": 233814116
  },
  {
   "server": 30095,
   "family": "BratiaSlovaci",
   "power": 184040381
  },
  {
   "server": 30095,
   "family": "younglaRats",
   "power": 183683868
  },
  {
   "server": 30095,
   "family": "WeedTM",
   "power": 121967985
  },
  {
   "server": 30095,
   "family": "Firmworm",
   "power": 112131999
  },
  {
   "server": 30095,
   "family": "the_enders",
   "power": 84482902
  },
  {
   "server": 30096,
   "family": "APE",
   "power": 592437820
  },
  {
   "server": 30096,
   "family": "crouwn",
   "power": 286899446
  },
  {
   "server": 30096,
   "family": "JustTheTip",
   "power": 258535495
  },
  {
   "server": 30096,
   "family": "CRObros",
   "power": 206121304
  },
  {
   "server": 30096,
   "family": "Mooshies",
   "power": 175871092
  },
  {
   "server": 30096,
   "family": "MushroomWars",
   "power": 173702744
  },
  {
   "server": 30096,
   "family": "charlizard",
   "power": 148461272
  },
  {
   "server": 30096,
   "family": "GoonShrooms",
   "power": 117942399
  },
  {
   "server": 30096,
   "family": "MushyMushroom",
   "power": 111729122
  },
  {
   "server": 30096,
   "family": "Breadbuns",
   "power": 97522197
  },
  {
   "server": 30097,
   "family": "DrunkenShrooms",
   "power": 608702527
  },
  {
   "server": 30097,
   "family": "Puppysquad",
   "power": 302483537
  },
  {
   "server": 30097,
   "family": "BigBears",
   "power": 217293808
  },
  {
   "server": 30097,
   "family": "Secret",
   "power": 190298857
  },
  {
   "server": 30097,
   "family": "TheBest",
   "power": 186376095
  },
  {
   "server": 30097,
   "family": "Boisa",
   "power": 175192737
  },
  {
   "server": 30097,
   "family": "Grzibyyy",
   "power": 161006731
  },
  {
   "server": 30097,
   "family": "MushroomMercy",
   "power": 160058906
  },
  {
   "server": 30097,
   "family": "MushroomLegend",
   "power": 157175899
  },
  {
   "server": 30097,
   "family": "AhJin",
   "power": 26079612
  },
  {
   "server": 30098,
   "family": "Legion",
   "power": 468640619
  },
  {
   "server": 30098,
   "family": "LegionMane",
   "power": 217224336
  },
  {
   "server": 30098,
   "family": "SAMARITANS",
   "power": 208538804
  },
  {
   "server": 30098,
   "family": "HighOnMushroom",
   "power": 194391550
  },
  {
   "server": 30098,
   "family": "BeastSlayers",
   "power": 190573080
  },
  {
   "server": 30098,
   "family": "Mushrooms",
   "power": 145230114
  },
  {
   "server": 30098,
   "family": "moooshrooms",
   "power": 144528772
  },
  {
   "server": 30098,
   "family": "Danes",
   "power": 136169807
  },
  {
   "server": 30098,
   "family": "no",
   "power": 101050788
  },
  {
   "server": 30098,
   "family": "Finland",
   "power": 84887286
  },
  {
   "server": 30099,
   "family": "Pokémon",
   "power": 631935148
  },
  {
   "server": 30099,
   "family": "ShroomsShire",
   "power": 201238150
  },
  {
   "server": 30099,
   "family": "TroubleClub",
   "power": 190527371
  },
  {
   "server": 30099,
   "family": "CashDollaMoney",
   "power": 188595996
  },
  {
   "server": 30099,
   "family": "PokéAcademy",
   "power": 182152814
  },
  {
   "server": 30099,
   "family": "DLJarmy",
   "power": 173887367
  },
  {
   "server": 30099,
   "family": "ShroomGang",
   "power": 167905338
  },
  {
   "server": 30099,
   "family": "TinderForever",
   "power": 166301688
  },
  {
   "server": 30099,
   "family": "symbiotic",
   "power": 160278892
  },
  {
   "server": 30099,
   "family": "MushROOM",
   "power": 69874291
  },
  {
   "server": 30100,
   "family": "OP",
   "power": 534592682
  },
  {
   "server": 30100,
   "family": "NOOBS",
   "power": 338077981
  },
  {
   "server": 30100,
   "family": "GoldenEagles",
   "power": 194761863
  },
  {
   "server": 30100,
   "family": "FireFist",
   "power": 165351004
  },
  {
   "server": 30100,
   "family": "SpyXFamily",
   "power": 152344783
  },
  {
   "server": 30100,
   "family": "megaverse",
   "power": 135456425
  },
  {
   "server": 30100,
   "family": "Gēñøçídē",
   "power": 109738536
  },
  {
   "server": 30100,
   "family": "W○W○",
   "power": 66427396
  },
  {
   "server": 30100,
   "family": "Lamikov",
   "power": 30039024
  },
  {
   "server": 30100,
   "family": "BigBootyBitch",
   "power": 15896010
  },
  {
   "server": 30101,
   "family": "GoldGunz",
   "power": 498324128
  },
  {
   "server": 30101,
   "family": "Burninglight",
   "power": 344714018
  },
  {
   "server": 30101,
   "family": "EinsNeun",
   "power": 326849488
  },
  {
   "server": 30101,
   "family": "Akatsuki",
   "power": 281227026
  },
  {
   "server": 30101,
   "family": "alright",
   "power": 156569354
  },
  {
   "server": 30101,
   "family": "SupaNicka",
   "power": 151731413
  },
  {
   "server": 30101,
   "family": "Legacy",
   "power": 138850308
  },
  {
   "server": 30101,
   "family": "luznalelsi",
   "power": 135100771
  },
  {
   "server": 30101,
   "family": "EscanorTheOne",
   "power": 125702990
  },
  {
   "server": 30101,
   "family": "SinnerS",
   "power": 125290775
  },
  {
   "server": 30102,
   "family": "Toadstool",
   "power": 436939825
  },
  {
   "server": 30102,
   "family": "Spartans",
   "power": 366377954
  },
  {
   "server": 30102,
   "family": "TheImmortals",
   "power": 357202296
  },
  {
   "server": 30102,
   "family": "GiggleShrooms",
   "power": 165943995
  },
  {
   "server": 30102,
   "family": "Psyfamily",
   "power": 157857651
  },
  {
   "server": 30102,
   "family": "familyfungi",
   "power": 156253059
  },
  {
   "server": 30102,
   "family": "GodShroom",
   "power": 147384413
  },
  {
   "server": 30102,
   "family": "BearlyShrooms",
   "power": 142185390
  },
  {
   "server": 30102,
   "family": "TopG",
   "power": 124434698
  },
  {
   "server": 30102,
   "family": "Godfathers",
   "power": 122231419
  },
  {
   "server": 30103,
   "family": "Judgement",
   "power": 379650040
  },
  {
   "server": 30103,
   "family": "MAGIC",
   "power": 362187387
  },
  {
   "server": 30103,
   "family": "FACTION4",
   "power": 179013839
  },
  {
   "server": 30103,
   "family": "striker",
   "power": 169559658
  },
  {
   "server": 30103,
   "family": "EL_MEU_OVO",
   "power": 150068539
  },
  {
   "server": 30103,
   "family": "Road2Glory",
   "power": 143324489
  },
  {
   "server": 30103,
   "family": "WildCats",
   "power": 137679876
  },
  {
   "server": 30103,
   "family": "poaahh",
   "power": 99879077
  },
  {
   "server": 30103,
   "family": "FreundesClan",
   "power": 81998472
  },
  {
   "server": 30103,
   "family": "TonnodiFuoco",
   "power": 51654737
  },
  {
   "server": 30104,
   "family": "Mycelium",
   "power": 384892364
  },
  {
   "server": 30104,
   "family": "Mvp",
   "power": 261986166
  },
  {
   "server": 30104,
   "family": "Peebs",
   "power": 253449822
  },
  {
   "server": 30104,
   "family": "PROUD_MUSHROOM",
   "power": 167683240
  },
  {
   "server": 30104,
   "family": "Dreadnaughts",
   "power": 130371147
  },
  {
   "server": 30104,
   "family": "Family",
   "power": 120495281
  },
  {
   "server": 30104,
   "family": "codegoofy",
   "power": 119097834
  },
  {
   "server": 30104,
   "family": "R4CH",
   "power": 116483500
  },
  {
   "server": 30104,
   "family": "LDogs",
   "power": 114814339
  },
  {
   "server": 30104,
   "family": "10k_above",
   "power": 111507322
  },
  {
   "server": 30105,
   "family": "DoomShrooms",
   "power": 456335416
  },
  {
   "server": 30105,
   "family": "Truth",
   "power": 306691059
  },
  {
   "server": 30105,
   "family": "Furrys",
   "power": 287115968
  },
  {
   "server": 30105,
   "family": "NiceOnes",
   "power": 138263637
  },
  {
   "server": 30105,
   "family": "Pantheon",
   "power": 132816755
  },
  {
   "server": 30105,
   "family": "Warriors",
   "power": 130778229
  },
  {
   "server": 30105,
   "family": "Aimex",
   "power": 120032867
  },
  {
   "server": 30105,
   "family": "Legends",
   "power": 113376463
  },
  {
   "server": 30105,
   "family": "Therock",
   "power": 113071175
  },
  {
   "server": 30105,
   "family": "Czech",
   "power": 102320853
  },
  {
   "server": 30106,
   "family": "Orchid",
   "power": 218073894
  },
  {
   "server": 30106,
   "family": "Verge",
   "power": 183175985
  },
  {
   "server": 30106,
   "family": "UnNainConnu",
   "power": 180674140
  },
  {
   "server": 30106,
   "family": "Spartans",
   "power": 179455016
  },
  {
   "server": 30106,
   "family": "something",
   "power": 148154440
  },
  {
   "server": 30106,
   "family": "ShadowGarden",
   "power": 143522952
  },
  {
   "server": 30106,
   "family": "RedBull",
   "power": 136838188
  },
  {
   "server": 30106,
   "family": "Avengers",
   "power": 130625558
  },
  {
   "server": 30106,
   "family": "Legends",
   "power": 130125734
  },
  {
   "server": 30106,
   "family": "Coupains",
   "power": 64983107
  },
  {
   "server": 30107,
   "family": "Shroomies",
   "power": 359305070
  },
  {
   "server": 30107,
   "family": "schroomunity",
   "power": 255729416
  },
  {
   "server": 30107,
   "family": "Valhalla",
   "power": 201205355
  },
  {
   "server": 30107,
   "family": "Gusters",
   "power": 173339446
  },
  {
   "server": 30107,
   "family": "Dragonball",
   "power": 171718148
  },
  {
   "server": 30107,
   "family": "420Kings",
   "power": 166551867
  },
  {
   "server": 30107,
   "family": "Sporetacular",
   "power": 162904773
  },
  {
   "server": 30107,
   "family": "ShroomArmy",
   "power": 133647058
  },
  {
   "server": 30107,
   "family": "shroomies",
   "power": 128908018
  },
  {
   "server": 30107,
   "family": "JmCr",
   "power": 115518897
  },
  {
   "server": 30108,
   "family": "WhiteLotus🪷",
   "power": 343217447
  },
  {
   "server": 30108,
   "family": "Pokemon",
   "power": 198015553
  },
  {
   "server": 30108,
   "family": "lightsouls",
   "power": 182329342
  },
  {
   "server": 30108,
   "family": "SteelTitans",
   "power": 153626383
  },
  {
   "server": 30108,
   "family": "Kazoku",
   "power": 144121675
  },
  {
   "server": 30108,
   "family": "Mushmellow",
   "power": 133162699
  },
  {
   "server": 30108,
   "family": "DumSpiroSpero",
   "power": 118710737
  },
  {
   "server": 30108,
   "family": "ALPHAPACK",
   "power": 115108066
  },
  {
   "server": 30108,
   "family": "Muchroomers",
   "power": 108721878
  },
  {
   "server": 30108,
   "family": "MushroomFam",
   "power": 104166480
  },
  {
   "server": 30109,
   "family": "NGOs",
   "power": 313886225
  },
  {
   "server": 30109,
   "family": "Panetina",
   "power": 212343914
  },
  {
   "server": 30109,
   "family": "KingDom",
   "power": 202009386
  },
  {
   "server": 30109,
   "family": "Hogwarts",
   "power": 174140495
  },
  {
   "server": 30109,
   "family": "Family",
   "power": 164257150
  },
  {
   "server": 30109,
   "family": "Poxon’s",
   "power": 156740548
  },
  {
   "server": 30109,
   "family": "UAE",
   "power": 155222617
  },
  {
   "server": 30109,
   "family": "RAWR",
   "power": 118350534
  },
  {
   "server": 30109,
   "family": "Derp",
   "power": 115002256
  },
  {
   "server": 30109,
   "family": "alpachino",
   "power": 113898271
  },
  {
   "server": 30110,
   "family": "Legends",
   "power": 210362528
  },
  {
   "server": 30110,
   "family": "Uchiha",
   "power": 180273605
  },
  {
   "server": 30110,
   "family": "Smellygang",
   "power": 166207922
  },
  {
   "server": 30110,
   "family": "ApexLegends",
   "power": 164166438
  },
  {
   "server": 30110,
   "family": "shroomies",
   "power": 149723910
  },
  {
   "server": 30110,
   "family": "GoldenShrooms",
   "power": 146923184
  },
  {
   "server": 30110,
   "family": "TrapHouse",
   "power": 118984468
  },
  {
   "server": 30110,
   "family": "Mushrooms",
   "power": 109362158
  },
  {
   "server": 30110,
   "family": "no1",
   "power": 97455818
  },
  {
   "server": 30110,
   "family": "ElShroom",
   "power": 72354017
  },
  {
   "server": 30111,
   "family": "NightRaid",
   "power": 244798994
  },
  {
   "server": 30111,
   "family": "ABC",
   "power": 160477050
  },
  {
   "server": 30111,
   "family": "Vanguard",
   "power": 132501900
  },
  {
   "server": 30111,
   "family": "OP",
   "power": 127205865
  },
  {
   "server": 30111,
   "family": "bingus",
   "power": 120855591
  },
  {
   "server": 30111,
   "family": "Smažky",
   "power": 101861912
  },
  {
   "server": 30111,
   "family": "pizzza",
   "power": 99295242
  },
  {
   "server": 30111,
   "family": "DARK",
   "power": 99003080
  },
  {
   "server": 30111,
   "family": "thespacyshroom",
   "power": 89881887
  },
  {
   "server": 30111,
   "family": "Meow",
   "power": 39826373
  },
  {
   "server": 30112,
   "family": "OP",
   "power": 300680591
  },
  {
   "server": 30112,
   "family": "Shroommates",
   "power": 192656233
  },
  {
   "server": 30112,
   "family": "Immortals",
   "power": 115865465
  },
  {
   "server": 30112,
   "family": "Eclipse",
   "power": 93701992
  },
  {
   "server": 30112,
   "family": "Bob",
   "power": 88911531
  },
  {
   "server": 30112,
   "family": "hanban",
   "power": 87325678
  },
  {
   "server": 30112,
   "family": "SmashRooms",
   "power": 81461085
  },
  {
   "server": 30112,
   "family": "Breadcrumbs",
   "power": 73684945
  },
  {
   "server": 30112,
   "family": "Vortex",
   "power": 63377482
  },
  {
   "server": 30112,
   "family": "Champignoneurs",
   "power": 8490544
  },
  {
   "server": 30113,
   "family": "Mycelia",
   "power": 233576045
  },
  {
   "server": 30113,
   "family": "SaiyanBlood",
   "power": 140143725
  },
  {
   "server": 30113,
   "family": "Masters",
   "power": 78337310
  },
  {
   "server": 30113,
   "family": "Galaxy",
   "power": 77031255
  },
  {
   "server": 30113,
   "family": "Aura",
   "power": 76045535
  },
  {
   "server": 30113,
   "family": "Shroomies",
   "power": 69121571
  },
  {
   "server": 30113,
   "family": "Rotters",
   "power": 65066735
  },
  {
   "server": 30113,
   "family": "Pay2win",
   "power": 64960084
  },
  {
   "server": 30113,
   "family": "Distric",
   "power": 64897308
  },
  {
   "server": 30113,
   "family": "thecartelfam",
   "power": 5784128
  },
  {
   "server": 33001,
   "family": "LesTruffles",
   "power": 1538953558
  },
  {
   "server": 33001,
   "family": "FungusDivinus",
   "power": 1485427568
  },
  {
   "server": 33001,
   "family": "PilzBunker",
   "power": 1427424495
  },
  {
   "server": 33001,
   "family": "MagicMushrooms",
   "power": 1230926325
  },
  {
   "server": 33001,
   "family": "EQUILIBRIUM",
   "power": 1200057536
  },
  {
   "server": 33001,
   "family": "TheOriginals",
   "power": 1135489289
  },
  {
   "server": 33001,
   "family": "Overlord",
   "power": 1106488718
  },
  {
   "server": 33001,
   "family": "TheMushrooms",
   "power": 638136742
  },
  {
   "server": 33001,
   "family": "Germany",
   "power": 423289573
  },
  {
   "server": 33001,
   "family": "Azuris",
   "power": 395888460
  },
  {
   "server": 33002,
   "family": "Endgame",
   "power": 1614751391
  },
  {
   "server": 33002,
   "family": "LaCuisine",
   "power": 1414498268
  },
  {
   "server": 33002,
   "family": "germansektion",
   "power": 1176846006
  },
  {
   "server": 33002,
   "family": "OdinS_Army",
   "power": 1058949048
  },
  {
   "server": 33002,
   "family": "GerMushMasters",
   "power": 1001788384
  },
  {
   "server": 33002,
   "family": "GermanElite",
   "power": 907111193
  },
  {
   "server": 33002,
   "family": "SchmalerTaler",
   "power": 545251670
  },
  {
   "server": 33002,
   "family": "Germanfighter",
   "power": 353272448
  },
  {
   "server": 33002,
   "family": "Darksouls",
   "power": 306235940
  },
  {
   "server": 33002,
   "family": "Pilzkopfbande",
   "power": 262678544
  },
  {
   "server": 33003,
   "family": "Intimpilze",
   "power": 1746639335
  },
  {
   "server": 33003,
   "family": "Demons",
   "power": 1464430133
  },
  {
   "server": 33003,
   "family": "APShroomies",
   "power": 1135189443
  },
  {
   "server": 33003,
   "family": "Warriors",
   "power": 657789583
  },
  {
   "server": 33003,
   "family": "Frostwölfe",
   "power": 566965135
  },
  {
   "server": 33003,
   "family": "Deutschland",
   "power": 465876598
  },
  {
   "server": 33003,
   "family": "DiePilzkrieger",
   "power": 367995491
  },
  {
   "server": 33003,
   "family": "Pilzrisotto",
   "power": 365245706
  },
  {
   "server": 33003,
   "family": "Angels",
   "power": 361899549
  },
  {
   "server": 33003,
   "family": "Germany",
   "power": 347899456
  },
  {
   "server": 33004,
   "family": "Psychadelics",
   "power": 1721664869
  },
  {
   "server": 33004,
   "family": "༺GERMANEN༻",
   "power": 1515286578
  },
  {
   "server": 33004,
   "family": "༺eternal༻",
   "power": 1064351853
  },
  {
   "server": 33004,
   "family": "Psychas",
   "power": 868797656
  },
  {
   "server": 33004,
   "family": "Irrenhaus",
   "power": 866244691
  },
  {
   "server": 33004,
   "family": "ScheidenPilz",
   "power": 528767848
  },
  {
   "server": 33004,
   "family": "ToxicSpores",
   "power": 480221549
  },
  {
   "server": 33004,
   "family": "Pilzkrieger",
   "power": 447203322
  },
  {
   "server": 33004,
   "family": "Legends",
   "power": 302646483
  },
  {
   "server": 33004,
   "family": "Destroyers",
   "power": 271238724
  },
  {
   "server": 33005,
   "family": "Pilzkrieger",
   "power": 1530090252
  },
  {
   "server": 33005,
   "family": "Sporentrupp",
   "power": 1468740334
  },
  {
   "server": 33005,
   "family": "Pandora",
   "power": 1371639258
  },
  {
   "server": 33005,
   "family": "Mushroom",
   "power": 594832915
  },
  {
   "server": 33005,
   "family": "F23_SQAUD",
   "power": 522639405
  },
  {
   "server": 33005,
   "family": "Heros",
   "power": 505449087
  },
  {
   "server": 33005,
   "family": "HoneyWeed",
   "power": 437400073
  },
  {
   "server": 33005,
   "family": "Wiederkehrer",
   "power": 399356728
  },
  {
   "server": 33005,
   "family": "GermanMafia",
   "power": 376684508
  },
  {
   "server": 33005,
   "family": "Deutschland",
   "power": 306694649
  },
  {
   "server": 33006,
   "family": "Germanyx",
   "power": 1661335486
  },
  {
   "server": 33006,
   "family": "VALHALLA",
   "power": 1311692691
  },
  {
   "server": 33006,
   "family": "Dr3ams",
   "power": 957980448
  },
  {
   "server": 33006,
   "family": "Pilzköpfe",
   "power": 790605867
  },
  {
   "server": 33006,
   "family": "Deutschland",
   "power": 772070524
  },
  {
   "server": 33006,
   "family": "GermanUnited",
   "power": 462491029
  },
  {
   "server": 33006,
   "family": "TheFirstClan",
   "power": 271177691
  },
  {
   "server": 33006,
   "family": "HarrySchnotter",
   "power": 259774795
  },
  {
   "server": 33006,
   "family": "DeutschesPilz",
   "power": 258680001
  },
  {
   "server": 33006,
   "family": "TENGRI",
   "power": 244753283
  },
  {
   "server": 33007,
   "family": "GermanKnights",
   "power": 1365327598
  },
  {
   "server": 33007,
   "family": "7DeadlySins",
   "power": 1221808881
  },
  {
   "server": 33007,
   "family": "Legends",
   "power": 1208365482
  },
  {
   "server": 33007,
   "family": "Wildschweinhut",
   "power": 391508385
  },
  {
   "server": 33007,
   "family": "BubatzBande",
   "power": 359497195
  },
  {
   "server": 33007,
   "family": "GermanKnights2",
   "power": 353453848
  },
  {
   "server": 33007,
   "family": "KnightsAcademy",
   "power": 322986631
  },
  {
   "server": 33007,
   "family": "CELESTIAL",
   "power": 285144689
  },
  {
   "server": 33007,
   "family": "GermanFighters",
   "power": 272426670
  },
  {
   "server": 33007,
   "family": "Atombruder",
   "power": 240005973
  },
  {
   "server": 33008,
   "family": "Dragonborn",
   "power": 1626882796
  },
  {
   "server": 33008,
   "family": "GlücksPilze",
   "power": 1144682869
  },
  {
   "server": 33008,
   "family": "Anime",
   "power": 1012341333
  },
  {
   "server": 33008,
   "family": "Toads",
   "power": 889673823
  },
  {
   "server": 33008,
   "family": "Horde",
   "power": 481902982
  },
  {
   "server": 33008,
   "family": "StrohhutPilze",
   "power": 377669821
  },
  {
   "server": 33008,
   "family": "MagicMushroom",
   "power": 371778941
  },
  {
   "server": 33008,
   "family": "GermanMushroom",
   "power": 257086430
  },
  {
   "server": 33008,
   "family": "DiePilze",
   "power": 251185699
  },
  {
   "server": 33008,
   "family": "Pilzkrieger",
   "power": 212001590
  },
  {
   "server": 33009,
   "family": "OnePiece",
   "power": 1562207137
  },
  {
   "server": 33009,
   "family": "Killerpilze",
   "power": 1176441388
  },
  {
   "server": 33009,
   "family": "TrueSlimes",
   "power": 836449802
  },
  {
   "server": 33009,
   "family": "Pilzbefall",
   "power": 785648989
  },
  {
   "server": 33009,
   "family": "Killerpilzchen",
   "power": 416641002
  },
  {
   "server": 33009,
   "family": "DämonenPilze",
   "power": 367738338
  },
  {
   "server": 33009,
   "family": "Schattenwölfe",
   "power": 312039318
  },
  {
   "server": 33009,
   "family": "Shadow_pilze",
   "power": 296687039
  },
  {
   "server": 33009,
   "family": "FariyGer",
   "power": 290517215
  },
  {
   "server": 33009,
   "family": "ToTheTop",
   "power": 280487464
  },
  {
   "server": 33010,
   "family": "SoloLeveling",
   "power": 1440132378
  },
  {
   "server": 33010,
   "family": "STROHHUTBANDE",
   "power": 1354458428
  },
  {
   "server": 33010,
   "family": "Shinigamis",
   "power": 935366452
  },
  {
   "server": 33010,
   "family": "Anime",
   "power": 755010515
  },
  {
   "server": 33010,
   "family": "AkustikGaming",
   "power": 354597169
  },
  {
   "server": 33010,
   "family": "ASGARD",
   "power": 332044136
  },
  {
   "server": 33010,
   "family": "einfachnurso",
   "power": 264047313
  },
  {
   "server": 33010,
   "family": "Darkness",
   "power": 251237531
  },
  {
   "server": 33010,
   "family": "Vollhonkz",
   "power": 213366861
  },
  {
   "server": 33010,
   "family": "Hölle",
   "power": 142676844
  },
  {
   "server": 33011,
   "family": "Extravagant",
   "power": 1513699087
  },
  {
   "server": 33011,
   "family": "꧁PHÖNIX꧂",
   "power": 1304102928
  },
  {
   "server": 33011,
   "family": "Akatsuki",
   "power": 621660014
  },
  {
   "server": 33011,
   "family": "Gamania",
   "power": 448084964
  },
  {
   "server": 33011,
   "family": "FairyTail",
   "power": 416250371
  },
  {
   "server": 33011,
   "family": "ONEPUNCHMAN",
   "power": 230415741
  },
  {
   "server": 33011,
   "family": "StrawHats",
   "power": 219968516
  },
  {
   "server": 33011,
   "family": "Die_Deutschen",
   "power": 189797088
  },
  {
   "server": 33011,
   "family": "GermanFighters",
   "power": 184902078
  },
  {
   "server": 33011,
   "family": "DieWölfe",
   "power": 182469615
  },
  {
   "server": 33012,
   "family": "OnlyShrooms",
   "power": 1291160317
  },
  {
   "server": 33012,
   "family": "_ALPHA_",
   "power": 934596190
  },
  {
   "server": 33012,
   "family": "Trödeltrupp",
   "power": 920679549
  },
  {
   "server": 33012,
   "family": "TeamKugelblitz",
   "power": 561003251
  },
  {
   "server": 33012,
   "family": "Mushrooms",
   "power": 529305233
  },
  {
   "server": 33012,
   "family": "road2rank1",
   "power": 435621854
  },
  {
   "server": 33012,
   "family": "Nutrix",
   "power": 403563995
  },
  {
   "server": 33012,
   "family": "Strohhutbande",
   "power": 215493497
  },
  {
   "server": 33012,
   "family": "Germans",
   "power": 200958793
  },
  {
   "server": 33012,
   "family": "AffenMitWaffen",
   "power": 125670287
  },
  {
   "server": 33013,
   "family": "NoxusDE",
   "power": 1237122729
  },
  {
   "server": 33013,
   "family": "Tonnenschwer",
   "power": 1137453938
  },
  {
   "server": 33013,
   "family": "RŌNIN",
   "power": 585366128
  },
  {
   "server": 33013,
   "family": "MapleStory",
   "power": 464869737
  },
  {
   "server": 33013,
   "family": "InDieBiotonne",
   "power": 424244941
  },
  {
   "server": 33013,
   "family": "GermanLegends",
   "power": 363210323
  },
  {
   "server": 33013,
   "family": "DieDeutschen",
   "power": 346465012
  },
  {
   "server": 33013,
   "family": "PilzFamilie",
   "power": 344308296
  },
  {
   "server": 33013,
   "family": "InfinityDE",
   "power": 248212435
  },
  {
   "server": 33013,
   "family": "Allianz",
   "power": 226603354
  },
  {
   "server": 33014,
   "family": "LastLegion",
   "power": 1549679415
  },
  {
   "server": 33014,
   "family": "Shadowgarden",
   "power": 992288940
  },
  {
   "server": 33014,
   "family": "Overlords",
   "power": 670494052
  },
  {
   "server": 33014,
   "family": "CozyGaming",
   "power": 585499853
  },
  {
   "server": 33014,
   "family": "Drachengruft",
   "power": 452404776
  },
  {
   "server": 33014,
   "family": "BernOstkurve",
   "power": 256797429
  },
  {
   "server": 33014,
   "family": "chiwauwaus",
   "power": 247569651
  },
  {
   "server": 33014,
   "family": "PeachesLakaien",
   "power": 229380153
  },
  {
   "server": 33014,
   "family": "GerShroomheads",
   "power": 174947260
  },
  {
   "server": 33014,
   "family": "Knecht",
   "power": 166036380
  },
  {
   "server": 33015,
   "family": "DemonDragons",
   "power": 933950878
  },
  {
   "server": 33015,
   "family": "YSL",
   "power": 688305503
  },
  {
   "server": 33015,
   "family": "MagicMushrooms",
   "power": 561212701
  },
  {
   "server": 33015,
   "family": "Pilzsuppe",
   "power": 499407036
  },
  {
   "server": 33015,
   "family": "HomeSweetHome",
   "power": 421057402
  },
  {
   "server": 33015,
   "family": "MonKings",
   "power": 359234293
  },
  {
   "server": 33015,
   "family": "YD",
   "power": 281528615
  },
  {
   "server": 33015,
   "family": "German",
   "power": 207306120
  },
  {
   "server": 33015,
   "family": "Sturmmäntel",
   "power": 155132509
  },
  {
   "server": 33015,
   "family": "Gnadenlos",
   "power": 154690800
  },
  {
   "server": 33016,
   "family": "DemonSlayer",
   "power": 1468225032
  },
  {
   "server": 33016,
   "family": "Celestial",
   "power": 1109341719
  },
  {
   "server": 33016,
   "family": "UniteDPower",
   "power": 425664478
  },
  {
   "server": 33016,
   "family": "GerRebelle",
   "power": 400047330
  },
  {
   "server": 33016,
   "family": "german",
   "power": 357827366
  },
  {
   "server": 33016,
   "family": "German2",
   "power": 229401197
  },
  {
   "server": 33016,
   "family": "Lakuzars",
   "power": 214935427
  },
  {
   "server": 33016,
   "family": "ThePapes",
   "power": 185879823
  },
  {
   "server": 33016,
   "family": "Gewinner",
   "power": 159656660
  },
  {
   "server": 33016,
   "family": "Nazarick",
   "power": 120948570
  },
  {
   "server": 33017,
   "family": "HöllenPilze",
   "power": 1394472192
  },
  {
   "server": 33017,
   "family": "ToadsMinions",
   "power": 816534757
  },
  {
   "server": 33017,
   "family": "GermanClan",
   "power": 655165986
  },
  {
   "server": 33017,
   "family": "Schadow",
   "power": 335575919
  },
  {
   "server": 33017,
   "family": "FallenShrooms",
   "power": 218475512
  },
  {
   "server": 33017,
   "family": "DieKatzen",
   "power": 211482260
  },
  {
   "server": 33017,
   "family": "Deutschland",
   "power": 203071706
  },
  {
   "server": 33017,
   "family": "spoky",
   "power": 145357094
  },
  {
   "server": 33017,
   "family": "Germanplayz",
   "power": 60602340
  },
  {
   "server": 33017,
   "family": "SilverCoin",
   "power": 53962981
  },
  {
   "server": 33018,
   "family": "Pilzhutbande",
   "power": 1394817966
  },
  {
   "server": 33018,
   "family": "OverHeaven",
   "power": 615372632
  },
  {
   "server": 33018,
   "family": "Parsec",
   "power": 470621391
  },
  {
   "server": 33018,
   "family": "Schattenpilze",
   "power": 440264188
  },
  {
   "server": 33018,
   "family": "Rasselbande",
   "power": 329361492
  },
  {
   "server": 33018,
   "family": "Die_Giftzwerge",
   "power": 293763348
  },
  {
   "server": 33018,
   "family": "Void",
   "power": 199974839
  },
  {
   "server": 33018,
   "family": "PilzHorde",
   "power": 154976301
  },
  {
   "server": 33018,
   "family": "Kellerkinder",
   "power": 137844937
  },
  {
   "server": 33018,
   "family": "Pilzpfanne",
   "power": 106163058
  },
  {
   "server": 33019,
   "family": "Akatsuki",
   "power": 1225311405
  },
  {
   "server": 33019,
   "family": "Trüffeltrupp",
   "power": 1054215822
  },
  {
   "server": 33019,
   "family": "Yggdrasil",
   "power": 881443545
  },
  {
   "server": 33019,
   "family": "Germany",
   "power": 354735978
  },
  {
   "server": 33019,
   "family": "GermanCocks",
   "power": 352875920
  },
  {
   "server": 33019,
   "family": "TheFariway",
   "power": 274564716
  },
  {
   "server": 33019,
   "family": "TeamGermany",
   "power": 172312040
  },
  {
   "server": 33019,
   "family": "DieElite",
   "power": 148878980
  },
  {
   "server": 33019,
   "family": "Warriors",
   "power": 131096938
  },
  {
   "server": 33019,
   "family": "GermanMasters",
   "power": 70303266
  },
  {
   "server": 33020,
   "family": "Endtime",
   "power": 1437128195
  },
  {
   "server": 33020,
   "family": "German",
   "power": 1224913304
  },
  {
   "server": 33020,
   "family": "ONEPIECE",
   "power": 514875187
  },
  {
   "server": 33020,
   "family": "DeutscherPilz",
   "power": 297838333
  },
  {
   "server": 33020,
   "family": "AwayFromKills",
   "power": 279366077
  },
  {
   "server": 33020,
   "family": "Pilzfarm",
   "power": 236568041
  },
  {
   "server": 33020,
   "family": "nixda",
   "power": 222296342
  },
  {
   "server": 33020,
   "family": "Candidiasis",
   "power": 216122233
  },
  {
   "server": 33020,
   "family": "Deutschland",
   "power": 215631627
  },
  {
   "server": 33020,
   "family": "kumalogia",
   "power": 175355976
  },
  {
   "server": 33021,
   "family": "ZOO",
   "power": 1560878934
  },
  {
   "server": 33021,
   "family": "Fliegenpilz",
   "power": 1028707806
  },
  {
   "server": 33021,
   "family": "Baddest",
   "power": 405050678
  },
  {
   "server": 33021,
   "family": "HartzIVTreff",
   "power": 354600203
  },
  {
   "server": 33021,
   "family": "HappyGuild",
   "power": 346330977
  },
  {
   "server": 33021,
   "family": "Zauberpilzli",
   "power": 305408830
  },
  {
   "server": 33021,
   "family": "DieBesten",
   "power": 275560797
  },
  {
   "server": 33021,
   "family": "Deutschland",
   "power": 255675494
  },
  {
   "server": 33021,
   "family": "Fuchs",
   "power": 156974898
  },
  {
   "server": 33021,
   "family": "HighOnShroom",
   "power": 127280301
  },
  {
   "server": 33022,
   "family": "Legion",
   "power": 1491368993
  },
  {
   "server": 33022,
   "family": "Pilzbande",
   "power": 734413401
  },
  {
   "server": 33022,
   "family": "FairyTail",
   "power": 587209726
  },
  {
   "server": 33022,
   "family": "Germans",
   "power": 360467144
  },
  {
   "server": 33022,
   "family": "TrashGamehunt",
   "power": 320692183
  },
  {
   "server": 33022,
   "family": "Futtermampf",
   "power": 209066070
  },
  {
   "server": 33022,
   "family": "HARDCOREGABBER",
   "power": 164343329
  },
  {
   "server": 33022,
   "family": "GermanWolves",
   "power": 121400636
  },
  {
   "server": 33022,
   "family": "DiePilze_XD",
   "power": 119872260
  },
  {
   "server": 33022,
   "family": "RaynationDE",
   "power": 109520154
  },
  {
   "server": 33023,
   "family": "Erntehelfer",
   "power": 1460735756
  },
  {
   "server": 33023,
   "family": "Uchiha",
   "power": 972957286
  },
  {
   "server": 33023,
   "family": "Sumeru",
   "power": 786785167
  },
  {
   "server": 33023,
   "family": "INVICTUS",
   "power": 427790587
  },
  {
   "server": 33023,
   "family": "The_Mushrooms",
   "power": 335676470
  },
  {
   "server": 33023,
   "family": "German",
   "power": 295706876
  },
  {
   "server": 33023,
   "family": "GermansTop",
   "power": 219334010
  },
  {
   "server": 33023,
   "family": "Anonymous",
   "power": 216274403
  },
  {
   "server": 33023,
   "family": "Walhalla",
   "power": 213444952
  },
  {
   "server": 33023,
   "family": "Germany",
   "power": 196691629
  },
  {
   "server": 33024,
   "family": "Disney",
   "power": 1276766566
  },
  {
   "server": 33024,
   "family": "GetRekt",
   "power": 879054900
  },
  {
   "server": 33024,
   "family": "xXPilzköppeXx",
   "power": 612133724
  },
  {
   "server": 33024,
   "family": "Pilz",
   "power": 414038130
  },
  {
   "server": 33024,
   "family": "Dragonfly",
   "power": 396553614
  },
  {
   "server": 33024,
   "family": "GermanHeros",
   "power": 393728003
  },
  {
   "server": 33024,
   "family": "DGT",
   "power": 298113627
  },
  {
   "server": 33024,
   "family": "GermanKings",
   "power": 217800340
  },
  {
   "server": 33024,
   "family": "deutsch",
   "power": 171467070
  },
  {
   "server": 33024,
   "family": "Babypopo",
   "power": 119271369
  },
  {
   "server": 33025,
   "family": "Lost",
   "power": 1273901156
  },
  {
   "server": 33025,
   "family": "Buschmatratzen",
   "power": 889108938
  },
  {
   "server": 33025,
   "family": "KnightsOfBlood",
   "power": 513246525
  },
  {
   "server": 33025,
   "family": "Holzhausen",
   "power": 387859985
  },
  {
   "server": 33025,
   "family": "Phoenix",
   "power": 370053397
  },
  {
   "server": 33025,
   "family": "Finanzamt",
   "power": 294181798
  },
  {
   "server": 33025,
   "family": "MADknights",
   "power": 240424778
  },
  {
   "server": 33025,
   "family": "GermanWolf",
   "power": 147647520
  },
  {
   "server": 33025,
   "family": "SwordArtOnline",
   "power": 137151639
  },
  {
   "server": 33025,
   "family": "Wunderland",
   "power": 130809388
  },
  {
   "server": 33026,
   "family": "Nemesis",
   "power": 1338508352
  },
  {
   "server": 33026,
   "family": "TheChosenOnes",
   "power": 1103018501
  },
  {
   "server": 33026,
   "family": "Nightmare",
   "power": 688159512
  },
  {
   "server": 33026,
   "family": "MetaNemesis",
   "power": 548271098
  },
  {
   "server": 33026,
   "family": "Bruderschaft",
   "power": 379801454
  },
  {
   "server": 33026,
   "family": "MugiWara",
   "power": 315186634
  },
  {
   "server": 33026,
   "family": "OneUnit",
   "power": 308181843
  },
  {
   "server": 33026,
   "family": "Eagles",
   "power": 220490789
  },
  {
   "server": 33026,
   "family": "Berlin",
   "power": 207705928
  },
  {
   "server": 33026,
   "family": "Kampfmacht",
   "power": 77786167
  },
  {
   "server": 33027,
   "family": "Mushroomworld",
   "power": 1452848004
  },
  {
   "server": 33027,
   "family": "Pilzjäger",
   "power": 1031311650
  },
  {
   "server": 33027,
   "family": "MagicMushrooms",
   "power": 525725143
  },
  {
   "server": 33027,
   "family": "mausis",
   "power": 339220079
  },
  {
   "server": 33027,
   "family": "Awakening",
   "power": 314583875
  },
  {
   "server": 33027,
   "family": "LegendGER",
   "power": 306297711
  },
  {
   "server": 33027,
   "family": "CooleMistis",
   "power": 282042247
  },
  {
   "server": 33027,
   "family": "IdkBinDeutsch",
   "power": 235173790
  },
  {
   "server": 33027,
   "family": "SuperPilzeUWU",
   "power": 232503152
  },
  {
   "server": 33027,
   "family": "Toxic",
   "power": 215034381
  },
  {
   "server": 33028,
   "family": "MagicMushis",
   "power": 1452219107
  },
  {
   "server": 33028,
   "family": "DieBesten",
   "power": 791567219
  },
  {
   "server": 33028,
   "family": "UmpaLumpas",
   "power": 724773439
  },
  {
   "server": 33028,
   "family": "AnimeGuild",
   "power": 411343957
  },
  {
   "server": 33028,
   "family": "SoloLeveling",
   "power": 337297570
  },
  {
   "server": 33028,
   "family": "fitre",
   "power": 300843715
  },
  {
   "server": 33028,
   "family": "BerlinerBären",
   "power": 269687806
  },
  {
   "server": 33028,
   "family": "Pilzhutbande",
   "power": 267824194
  },
  {
   "server": 33028,
   "family": "SonsOfAnarchy",
   "power": 189033934
  },
  {
   "server": 33028,
   "family": "DreamTeam",
   "power": 127231719
  },
  {
   "server": 33029,
   "family": "Blacklite",
   "power": 1515581993
  },
  {
   "server": 33029,
   "family": "United",
   "power": 745970987
  },
  {
   "server": 33029,
   "family": "DeutscheCrew",
   "power": 531829183
  },
  {
   "server": 33029,
   "family": "mushroomsins",
   "power": 481487529
  },
  {
   "server": 33029,
   "family": "GermanVictory",
   "power": 386639725
  },
  {
   "server": 33029,
   "family": "German",
   "power": 313446159
  },
  {
   "server": 33029,
   "family": "LostGermany",
   "power": 273275973
  },
  {
   "server": 33029,
   "family": "Fische",
   "power": 208023157
  },
  {
   "server": 33029,
   "family": "GermanElite",
   "power": 187931400
  },
  {
   "server": 33029,
   "family": "NightRider",
   "power": 155928573
  },
  {
   "server": 33030,
   "family": "GermanElite",
   "power": 1478073079
  },
  {
   "server": 33030,
   "family": "DieWohngruppe",
   "power": 971798451
  },
  {
   "server": 33030,
   "family": "shroomsde",
   "power": 881621158
  },
  {
   "server": 33030,
   "family": "Seelensammler",
   "power": 584200589
  },
  {
   "server": 33030,
   "family": "Pilzkönigreich",
   "power": 441442342
  },
  {
   "server": 33030,
   "family": "MeisterProper",
   "power": 274853824
  },
  {
   "server": 33030,
   "family": "Germanya",
   "power": 169931765
  },
  {
   "server": 33030,
   "family": "DieAnfänger",
   "power": 145940022
  },
  {
   "server": 33030,
   "family": "FairyTail",
   "power": 123431947
  },
  {
   "server": 33030,
   "family": "GermanUnity",
   "power": 120037129
  },
  {
   "server": 33031,
   "family": "Rage",
   "power": 1475710853
  },
  {
   "server": 33031,
   "family": "Fusspilze",
   "power": 681279457
  },
  {
   "server": 33031,
   "family": "GermanElite",
   "power": 671903536
  },
  {
   "server": 33031,
   "family": "Germanoutlaws",
   "power": 473195006
  },
  {
   "server": 33031,
   "family": "EliteGerman",
   "power": 419086507
  },
  {
   "server": 33031,
   "family": "Gottheiten",
   "power": 390312436
  },
  {
   "server": 33031,
   "family": "hyk",
   "power": 301830904
  },
  {
   "server": 33031,
   "family": "ShadowGarden",
   "power": 300830145
  },
  {
   "server": 33031,
   "family": "Aschenblüte",
   "power": 269625155
  },
  {
   "server": 33031,
   "family": "bingobongo",
   "power": 109635367
  },
  {
   "server": 33032,
   "family": "PEAK",
   "power": 1569477019
  },
  {
   "server": 33032,
   "family": "MagicMushrooms",
   "power": 710102233
  },
  {
   "server": 33032,
   "family": "PfifferlingeDE",
   "power": 420551793
  },
  {
   "server": 33032,
   "family": "MashroomKings",
   "power": 320940840
  },
  {
   "server": 33032,
   "family": "OnlyGermany",
   "power": 319114275
  },
  {
   "server": 33032,
   "family": "Pfifferlinge",
   "power": 281117725
  },
  {
   "server": 33032,
   "family": "beekayjunior",
   "power": 241678800
  },
  {
   "server": 33032,
   "family": "Matthias1912",
   "power": 119341577
  },
  {
   "server": 33032,
   "family": "KongoKeulen",
   "power": 74387094
  },
  {
   "server": 33032,
   "family": "Eichelpilz",
   "power": 73249543
  },
  {
   "server": 33033,
   "family": "Skyrockets",
   "power": 1369300976
  },
  {
   "server": 33033,
   "family": "SuicideSquad",
   "power": 1006551990
  },
  {
   "server": 33033,
   "family": "Akatsuki",
   "power": 795850576
  },
  {
   "server": 33033,
   "family": "Krümelmonster",
   "power": 676398868
  },
  {
   "server": 33033,
   "family": "FallingDragons",
   "power": 270881782
  },
  {
   "server": 33033,
   "family": "Zauberpilze",
   "power": 221500443
  },
  {
   "server": 33033,
   "family": "Darkside",
   "power": 203880435
  },
  {
   "server": 33033,
   "family": "Canesten",
   "power": 180981766
  },
  {
   "server": 33033,
   "family": "madafaka",
   "power": 146939728
  },
  {
   "server": 33033,
   "family": "diebuntenpilze",
   "power": 146535841
  },
  {
   "server": 33034,
   "family": "Reapers",
   "power": 1532484009
  },
  {
   "server": 33034,
   "family": "ToadLand",
   "power": 772830978
  },
  {
   "server": 33034,
   "family": "Weed",
   "power": 513594478
  },
  {
   "server": 33034,
   "family": "MOON",
   "power": 465476383
  },
  {
   "server": 33034,
   "family": "GobelusDE",
   "power": 406640227
  },
  {
   "server": 33034,
   "family": "Bierkneipe",
   "power": 399194322
  },
  {
   "server": 33034,
   "family": "DrAgOoN",
   "power": 386840217
  },
  {
   "server": 33034,
   "family": "Just4Fun",
   "power": 277677195
  },
  {
   "server": 33034,
   "family": "RIPchen",
   "power": 253741802
  },
  {
   "server": 33034,
   "family": "PilzMeister",
   "power": 222911672
  },
  {
   "server": 33035,
   "family": "MushroomArmy",
   "power": 1542673367
  },
  {
   "server": 33035,
   "family": "GERMANY",
   "power": 768233489
  },
  {
   "server": 33035,
   "family": "Unlimited",
   "power": 616446674
  },
  {
   "server": 33035,
   "family": "MagicMushrooms",
   "power": 591467919
  },
  {
   "server": 33035,
   "family": "CatMania",
   "power": 487283963
  },
  {
   "server": 33035,
   "family": "MushroomArmy2",
   "power": 406861376
  },
  {
   "server": 33035,
   "family": "Strohhüte",
   "power": 368853180
  },
  {
   "server": 33035,
   "family": "DarkCall",
   "power": 325068530
  },
  {
   "server": 33035,
   "family": "Schwarzherz",
   "power": 285831017
  },
  {
   "server": 33035,
   "family": "Germankings",
   "power": 263452077
  },
  {
   "server": 33036,
   "family": "MagicMushroom",
   "power": 1388946660
  },
  {
   "server": 33036,
   "family": "Buttertrüffel",
   "power": 1182602601
  },
  {
   "server": 33036,
   "family": "Pilzpfanne",
   "power": 605104466
  },
  {
   "server": 33036,
   "family": "Germany",
   "power": 515444101
  },
  {
   "server": 33036,
   "family": "FairyTail",
   "power": 341509740
  },
  {
   "server": 33036,
   "family": "Deutschland",
   "power": 317469469
  },
  {
   "server": 33036,
   "family": "RamenMitPilzen",
   "power": 306819991
  },
  {
   "server": 33036,
   "family": "chaosclub",
   "power": 279397888
  },
  {
   "server": 33036,
   "family": "Ruhrpottpilze",
   "power": 189118177
  },
  {
   "server": 33036,
   "family": "Bienenstock",
   "power": 159349731
  },
  {
   "server": 33037,
   "family": "NEVER_LOSE",
   "power": 1558351661
  },
  {
   "server": 33037,
   "family": "FightClub",
   "power": 500273698
  },
  {
   "server": 33037,
   "family": "Ultras",
   "power": 417707789
  },
  {
   "server": 33037,
   "family": "DieStrohhüte",
   "power": 362217178
  },
  {
   "server": 33037,
   "family": "NR1",
   "power": 341016821
  },
  {
   "server": 33037,
   "family": "Germans",
   "power": 292899390
  },
  {
   "server": 33037,
   "family": "MagicMushrooms",
   "power": 288120752
  },
  {
   "server": 33037,
   "family": "CrazyShrooms",
   "power": 278864500
  },
  {
   "server": 33037,
   "family": "Demons",
   "power": 175946186
  },
  {
   "server": 33037,
   "family": "Wölfe",
   "power": 160830960
  },
  {
   "server": 33038,
   "family": "TheLions",
   "power": 1467678748
  },
  {
   "server": 33038,
   "family": "Dragons",
   "power": 888224400
  },
  {
   "server": 33038,
   "family": "PilzKöpfe",
   "power": 514920801
  },
  {
   "server": 33038,
   "family": "Valhalla",
   "power": 408618740
  },
  {
   "server": 33038,
   "family": "Wolfpack",
   "power": 316523797
  },
  {
   "server": 33038,
   "family": "MadDoggs",
   "power": 245472386
  },
  {
   "server": 33038,
   "family": "FlyingMushroom",
   "power": 226643493
  },
  {
   "server": 33038,
   "family": "zack",
   "power": 214299685
  },
  {
   "server": 33038,
   "family": "Virux",
   "power": 178841608
  },
  {
   "server": 33038,
   "family": "Divine",
   "power": 163290343
  },
  {
   "server": 33039,
   "family": "Legends",
   "power": 1516216433
  },
  {
   "server": 33039,
   "family": "Pelzköpfe",
   "power": 1088550937
  },
  {
   "server": 33039,
   "family": "Darkness",
   "power": 866140069
  },
  {
   "server": 33039,
   "family": "GermanyCompanY",
   "power": 471593688
  },
  {
   "server": 33039,
   "family": "Deutschland",
   "power": 421067064
  },
  {
   "server": 33039,
   "family": "Pilzbefall",
   "power": 370715817
  },
  {
   "server": 33039,
   "family": "GermanHub",
   "power": 335128766
  },
  {
   "server": 33039,
   "family": "Pizza059",
   "power": 265276948
  },
  {
   "server": 33039,
   "family": "Pilzeintopf",
   "power": 240349670
  },
  {
   "server": 33039,
   "family": "Deutsch",
   "power": 224208166
  },
  {
   "server": 33040,
   "family": "Grace",
   "power": 1464508229
  },
  {
   "server": 33040,
   "family": "MonKings",
   "power": 721831666
  },
  {
   "server": 33040,
   "family": "PilzBunker",
   "power": 502565833
  },
  {
   "server": 33040,
   "family": "Finsterwacht",
   "power": 383414788
  },
  {
   "server": 33040,
   "family": "BlackDevil",
   "power": 381575664
  },
  {
   "server": 33040,
   "family": "Demons",
   "power": 280622977
  },
  {
   "server": 33040,
   "family": "Sacknasen",
   "power": 275613528
  },
  {
   "server": 33040,
   "family": "Germany",
   "power": 247697524
  },
  {
   "server": 33040,
   "family": "Tempest",
   "power": 227433984
  },
  {
   "server": 33040,
   "family": "MagischePilze",
   "power": 218832903
  },
  {
   "server": 33041,
   "family": "TeaParty",
   "power": 1459910373
  },
  {
   "server": 33041,
   "family": "PHÖNIX",
   "power": 993072517
  },
  {
   "server": 33041,
   "family": "BubabtzClub",
   "power": 624366662
  },
  {
   "server": 33041,
   "family": "German",
   "power": 276172666
  },
  {
   "server": 33041,
   "family": "DeadEnd",
   "power": 262091291
  },
  {
   "server": 33041,
   "family": "Drachenschanze",
   "power": 259530233
  },
  {
   "server": 33041,
   "family": "Nagelpilz",
   "power": 220195292
  },
  {
   "server": 33041,
   "family": "Pilzsuppe",
   "power": 173992421
  },
  {
   "server": 33041,
   "family": "DieBlutritter",
   "power": 143557481
  },
  {
   "server": 33041,
   "family": "schweiz",
   "power": 105850120
  },
  {
   "server": 33042,
   "family": "Legends",
   "power": 1322900545
  },
  {
   "server": 33042,
   "family": "GermanElite",
   "power": 1168338443
  },
  {
   "server": 33042,
   "family": "Strohhutbande",
   "power": 1054568395
  },
  {
   "server": 33042,
   "family": "Champions",
   "power": 672509252
  },
  {
   "server": 33042,
   "family": "Fairytail",
   "power": 451212405
  },
  {
   "server": 33042,
   "family": "Valhalla",
   "power": 384467134
  },
  {
   "server": 33042,
   "family": "Veldora",
   "power": 328493243
  },
  {
   "server": 33042,
   "family": "Unlimited",
   "power": 321396193
  },
  {
   "server": 33042,
   "family": "Rheinlandpfalz",
   "power": 318824906
  },
  {
   "server": 33042,
   "family": "420BuDs",
   "power": 267838682
  },
  {
   "server": 33043,
   "family": "NoExcuse",
   "power": 1359088795
  },
  {
   "server": 33043,
   "family": "DieNeulinge",
   "power": 1197389305
  },
  {
   "server": 33043,
   "family": "Strohhutbande",
   "power": 1182356581
  },
  {
   "server": 33043,
   "family": "grünesPesto",
   "power": 809173386
  },
  {
   "server": 33043,
   "family": "Pilzsammlerᵗᵒᵖ",
   "power": 688916088
  },
  {
   "server": 33043,
   "family": "Waldpilze",
   "power": 270464307
  },
  {
   "server": 33043,
   "family": "KönigToad",
   "power": 238908903
  },
  {
   "server": 33043,
   "family": "Helldivers",
   "power": 213245438
  },
  {
   "server": 33043,
   "family": "DieDeutschen",
   "power": 212286899
  },
  {
   "server": 33043,
   "family": "wolf",
   "power": 156286996
  },
  {
   "server": 33044,
   "family": "Elite",
   "power": 1372288198
  },
  {
   "server": 33044,
   "family": "Germany",
   "power": 1089345455
  },
  {
   "server": 33044,
   "family": "Germans",
   "power": 469357863
  },
  {
   "server": 33044,
   "family": "PilzInfanterie",
   "power": 365672001
  },
  {
   "server": 33044,
   "family": "TheCrack",
   "power": 365008519
  },
  {
   "server": 33044,
   "family": "SpaßamSpiel",
   "power": 234223174
  },
  {
   "server": 33044,
   "family": "PilzBunker",
   "power": 225182367
  },
  {
   "server": 33044,
   "family": "StrawHats",
   "power": 196781748
  },
  {
   "server": 33044,
   "family": "Hellraiser",
   "power": 184285462
  },
  {
   "server": 33044,
   "family": "Rostockerhanse",
   "power": 180117476
  },
  {
   "server": 33045,
   "family": "GummiPilzBande",
   "power": 1342272093
  },
  {
   "server": 33045,
   "family": "CityofSin",
   "power": 867462446
  },
  {
   "server": 33045,
   "family": "●GPB●Akademie",
   "power": 835386770
  },
  {
   "server": 33045,
   "family": "GermanElite",
   "power": 418957251
  },
  {
   "server": 33045,
   "family": "BlackClover",
   "power": 331668948
  },
  {
   "server": 33045,
   "family": "Kartoffelpüree",
   "power": 244511988
  },
  {
   "server": 33045,
   "family": "HAHAHAHAHAXD",
   "power": 215764319
  },
  {
   "server": 33045,
   "family": "GermanyElite",
   "power": 214051228
  },
  {
   "server": 33045,
   "family": "Wolkenbruch",
   "power": 172233821
  },
  {
   "server": 33045,
   "family": "Shroomboom",
   "power": 104785121
  },
  {
   "server": 33046,
   "family": "Legends",
   "power": 1492033933
  },
  {
   "server": 33046,
   "family": "NoxNoctis",
   "power": 1167158786
  },
  {
   "server": 33046,
   "family": "PartyCrashers",
   "power": 552873054
  },
  {
   "server": 33046,
   "family": "Deutschland2",
   "power": 423390354
  },
  {
   "server": 33046,
   "family": "Outcasts404",
   "power": 417423130
  },
  {
   "server": 33046,
   "family": "AffenMitWaffen",
   "power": 409333262
  },
  {
   "server": 33046,
   "family": "SoloLeveling",
   "power": 374376145
  },
  {
   "server": 33046,
   "family": "HempelsSofa",
   "power": 329398123
  },
  {
   "server": 33046,
   "family": "OnePilzArmy",
   "power": 291807355
  },
  {
   "server": 33046,
   "family": "ElitePilze",
   "power": 241673736
  },
  {
   "server": 33047,
   "family": "DieChaoten",
   "power": 1271332456
  },
  {
   "server": 33047,
   "family": "GroßerPilz",
   "power": 1234328651
  },
  {
   "server": 33047,
   "family": "Deutschland",
   "power": 533650551
  },
  {
   "server": 33047,
   "family": "Hades",
   "power": 338048891
  },
  {
   "server": 33047,
   "family": "Nexon",
   "power": 248260825
  },
  {
   "server": 33047,
   "family": "TheGoldenMush",
   "power": 230383265
  },
  {
   "server": 33047,
   "family": "FliegendePilze",
   "power": 186092442
  },
  {
   "server": 33047,
   "family": "TheMushrooms",
   "power": 180244066
  },
  {
   "server": 33047,
   "family": "Pilzpower",
   "power": 163743852
  },
  {
   "server": 33047,
   "family": "Taubsi",
   "power": 153759265
  },
  {
   "server": 33048,
   "family": "Eternal",
   "power": 1348166671
  },
  {
   "server": 33048,
   "family": "Phönix",
   "power": 1173065552
  },
  {
   "server": 33048,
   "family": "TheChampignons",
   "power": 419517470
  },
  {
   "server": 33048,
   "family": "Fliegenpilze",
   "power": 370763549
  },
  {
   "server": 33048,
   "family": "Wolfers",
   "power": 313916276
  },
  {
   "server": 33048,
   "family": "AnimeSchweiz1",
   "power": 249776321
  },
  {
   "server": 33048,
   "family": "Fischmarkt",
   "power": 236028933
  },
  {
   "server": 33048,
   "family": "SuperSonic",
   "power": 233672969
  },
  {
   "server": 33048,
   "family": "animegerman",
   "power": 218036480
  },
  {
   "server": 33048,
   "family": "Tohr",
   "power": 214693619
  },
  {
   "server": 33049,
   "family": "TheGang",
   "power": 1306508175
  },
  {
   "server": 33049,
   "family": "Duality",
   "power": 1000897056
  },
  {
   "server": 33049,
   "family": "TodesEngel",
   "power": 478538072
  },
  {
   "server": 33049,
   "family": "Katzenmilch",
   "power": 475163531
  },
  {
   "server": 33049,
   "family": "DrachenReiter",
   "power": 470490590
  },
  {
   "server": 33049,
   "family": "420s",
   "power": 462460310
  },
  {
   "server": 33049,
   "family": "BHOB",
   "power": 400831019
  },
  {
   "server": 33049,
   "family": "GlÜcKsPiLzE",
   "power": 336336635
  },
  {
   "server": 33049,
   "family": "Strohhutbande",
   "power": 335302924
  },
  {
   "server": 33049,
   "family": "ZwiebelPilze",
   "power": 254033671
  },
  {
   "server": 33050,
   "family": "Elysium",
   "power": 1362558792
  },
  {
   "server": 33050,
   "family": "Zipfelklatsche",
   "power": 1172451792
  },
  {
   "server": 33050,
   "family": "TrüffelLegends",
   "power": 890917466
  },
  {
   "server": 33050,
   "family": "Bürgergeld",
   "power": 672834371
  },
  {
   "server": 33050,
   "family": "SoloLeveling",
   "power": 331017042
  },
  {
   "server": 33050,
   "family": "Pfifferlinge",
   "power": 255780242
  },
  {
   "server": 33050,
   "family": "Rollatorgang",
   "power": 215138504
  },
  {
   "server": 33050,
   "family": "Schwammerl",
   "power": 189084384
  },
  {
   "server": 33050,
   "family": "WolfSRudeL",
   "power": 149595142
  },
  {
   "server": 33050,
   "family": "Shroomboom",
   "power": 115147202
  },
  {
   "server": 33051,
   "family": "Legends",
   "power": 1173396084
  },
  {
   "server": 33051,
   "family": "Avengers",
   "power": 1033332809
  },
  {
   "server": 33051,
   "family": "DieQueens",
   "power": 785853596
  },
  {
   "server": 33051,
   "family": "Futterluke",
   "power": 476984333
  },
  {
   "server": 33051,
   "family": "diedachdecker",
   "power": 310880525
  },
  {
   "server": 33051,
   "family": "DeutscherWald",
   "power": 295096764
  },
  {
   "server": 33051,
   "family": "DeutscheArmada",
   "power": 284324867
  },
  {
   "server": 33051,
   "family": "Villedor",
   "power": 242732193
  },
  {
   "server": 33051,
   "family": "DieGreise",
   "power": 229857292
  },
  {
   "server": 33051,
   "family": "gerWERWÖLFEdeu",
   "power": 162550874
  },
  {
   "server": 33052,
   "family": "SoloLeveling",
   "power": 1291337477
  },
  {
   "server": 33052,
   "family": "CrimsonShrooms",
   "power": 1248810421
  },
  {
   "server": 33052,
   "family": "LEVELUP",
   "power": 757826305
  },
  {
   "server": 33052,
   "family": "Error",
   "power": 307679653
  },
  {
   "server": 33052,
   "family": "Pilzclan",
   "power": 254933448
  },
  {
   "server": 33052,
   "family": "TBF",
   "power": 235817014
  },
  {
   "server": 33052,
   "family": "PilzRevolution",
   "power": 208897451
  },
  {
   "server": 33052,
   "family": "PilzCup",
   "power": 205029615
  },
  {
   "server": 33052,
   "family": "GermanSquad",
   "power": 187440920
  },
  {
   "server": 33052,
   "family": "legendmashroom",
   "power": 171446142
  },
  {
   "server": 33053,
   "family": "NoGameNoLife",
   "power": 1174866454
  },
  {
   "server": 33053,
   "family": "Akatzuki",
   "power": 946810877
  },
  {
   "server": 33053,
   "family": "Ekliptik",
   "power": 431657048
  },
  {
   "server": 33053,
   "family": "AntiFußpilz",
   "power": 430374210
  },
  {
   "server": 33053,
   "family": "Schlumpfhausen",
   "power": 420582424
  },
  {
   "server": 33053,
   "family": "Schlümpfe",
   "power": 373385081
  },
  {
   "server": 33053,
   "family": "SchattenPilze",
   "power": 361481895
  },
  {
   "server": 33053,
   "family": "Mashle",
   "power": 352674206
  },
  {
   "server": 33053,
   "family": "Back2Basic",
   "power": 258682693
  },
  {
   "server": 33053,
   "family": "FlügelPilze",
   "power": 252293632
  },
  {
   "server": 33054,
   "family": "Frontpilze",
   "power": 991416588
  },
  {
   "server": 33054,
   "family": "TreeOfGondor",
   "power": 450987218
  },
  {
   "server": 33054,
   "family": "Seniorentreff",
   "power": 387064785
  },
  {
   "server": 33054,
   "family": "German_Anime",
   "power": 359493833
  },
  {
   "server": 33054,
   "family": "DEU",
   "power": 343245988
  },
  {
   "server": 33054,
   "family": "Pubnasen",
   "power": 282211420
  },
  {
   "server": 33054,
   "family": "Pilzepasta",
   "power": 281482719
  },
  {
   "server": 33054,
   "family": "WinxClub",
   "power": 273613928
  },
  {
   "server": 33054,
   "family": "Pilzhausen",
   "power": 225254313
  },
  {
   "server": 33054,
   "family": "SoloLeveling",
   "power": 222082134
  },
  {
   "server": 33055,
   "family": "Pilzbande",
   "power": 1311806497
  },
  {
   "server": 33055,
   "family": "DiesüßenPilze",
   "power": 744638597
  },
  {
   "server": 33055,
   "family": "SnowWhite",
   "power": 481959017
  },
  {
   "server": 33055,
   "family": "Powerpilze",
   "power": 430665279
  },
  {
   "server": 33055,
   "family": "MashroomCity",
   "power": 381377488
  },
  {
   "server": 33055,
   "family": "OhMyMushroom",
   "power": 359105386
  },
  {
   "server": 33055,
   "family": "Pfifferlinge",
   "power": 348454846
  },
  {
   "server": 33055,
   "family": "PilzHeadHunter",
   "power": 325829199
  },
  {
   "server": 33055,
   "family": "RauschKraut",
   "power": 304736692
  },
  {
   "server": 33055,
   "family": "Allianz",
   "power": 290290577
  },
  {
   "server": 33056,
   "family": "Champignons",
   "power": 1464498714
  },
  {
   "server": 33056,
   "family": "Pfifferlinge",
   "power": 1109901599
  },
  {
   "server": 33056,
   "family": "WeißerLotus",
   "power": 457677932
  },
  {
   "server": 33056,
   "family": "Bembelgauner",
   "power": 449673976
  },
  {
   "server": 33056,
   "family": "Yggdrasil",
   "power": 393217053
  },
  {
   "server": 33056,
   "family": "5gegenWilli",
   "power": 286827958
  },
  {
   "server": 33056,
   "family": "Toads",
   "power": 269088375
  },
  {
   "server": 33056,
   "family": "Pilzmine",
   "power": 231507552
  },
  {
   "server": 33056,
   "family": "Shroomboom",
   "power": 218871643
  },
  {
   "server": 33056,
   "family": "Blackwolfs",
   "power": 215590455
  },
  {
   "server": 33057,
   "family": "Pilzsuppe",
   "power": 1301327349
  },
  {
   "server": 33057,
   "family": "Poison",
   "power": 1049390780
  },
  {
   "server": 33057,
   "family": "GHGFlauschig",
   "power": 829110642
  },
  {
   "server": 33057,
   "family": "Knights",
   "power": 644554417
  },
  {
   "server": 33057,
   "family": "KönigsPilze",
   "power": 320667040
  },
  {
   "server": 33057,
   "family": "pandemushrioom",
   "power": 261255318
  },
  {
   "server": 33057,
   "family": "GeileTypen",
   "power": 245422502
  },
  {
   "server": 33057,
   "family": "FlauschigGHG",
   "power": 234971460
  },
  {
   "server": 33057,
   "family": "DragonFight",
   "power": 226618999
  },
  {
   "server": 33057,
   "family": "MontanaBlack88",
   "power": 171900656
  },
  {
   "server": 33058,
   "family": "RoyalFlush",
   "power": 1495669307
  },
  {
   "server": 33058,
   "family": "Unikat",
   "power": 1111750020
  },
  {
   "server": 33058,
   "family": "DieGummibären",
   "power": 914705942
  },
  {
   "server": 33058,
   "family": "HakunaMatata",
   "power": 476048539
  },
  {
   "server": 33058,
   "family": "TheLight",
   "power": 307330647
  },
  {
   "server": 33058,
   "family": "Hayvans",
   "power": 279239850
  },
  {
   "server": 33058,
   "family": "Bloodmoon",
   "power": 212309379
  },
  {
   "server": 33058,
   "family": "GermanElite",
   "power": 173405052
  },
  {
   "server": 33058,
   "family": "Germany24",
   "power": 168005417
  },
  {
   "server": 33058,
   "family": "EiEiEi",
   "power": 166150571
  },
  {
   "server": 33059,
   "family": "Pilzhub",
   "power": 1209265741
  },
  {
   "server": 33059,
   "family": "Newbies",
   "power": 1019902030
  },
  {
   "server": 33059,
   "family": "OnLyPiLz",
   "power": 974205141
  },
  {
   "server": 33059,
   "family": "GermanyOnTop",
   "power": 564072814
  },
  {
   "server": 33059,
   "family": "FungiZid",
   "power": 518942871
  },
  {
   "server": 33059,
   "family": "GermanClan",
   "power": 360143321
  },
  {
   "server": 33059,
   "family": "Pilzbier",
   "power": 325784891
  },
  {
   "server": 33059,
   "family": "Bloodmoon",
   "power": 235432663
  },
  {
   "server": 33059,
   "family": "Germany",
   "power": 227510957
  },
  {
   "server": 33059,
   "family": "HeavenGER",
   "power": 219990373
  },
  {
   "server": 33060,
   "family": "MagicMushrooms",
   "power": 1149438896
  },
  {
   "server": 33060,
   "family": "Aincrad",
   "power": 1072606035
  },
  {
   "server": 33060,
   "family": "AFK",
   "power": 829209222
  },
  {
   "server": 33060,
   "family": "German_Fighter",
   "power": 509919527
  },
  {
   "server": 33060,
   "family": "FairyTail",
   "power": 418463184
  },
  {
   "server": 33060,
   "family": "AutSiderz",
   "power": 372896374
  },
  {
   "server": 33060,
   "family": "BADBOYS",
   "power": 284688380
  },
  {
   "server": 33060,
   "family": "Rooms",
   "power": 262296509
  },
  {
   "server": 33060,
   "family": "Idioten",
   "power": 181671680
  },
  {
   "server": 33060,
   "family": "Akatsuki",
   "power": 139297817
  },
  {
   "server": 33061,
   "family": "Shadow_Garden",
   "power": 1244521689
  },
  {
   "server": 33061,
   "family": "PilzSociety",
   "power": 1078732059
  },
  {
   "server": 33061,
   "family": "KillerPilze",
   "power": 692094419
  },
  {
   "server": 33061,
   "family": "Sunset_Ravens",
   "power": 581122824
  },
  {
   "server": 33061,
   "family": "Dragons",
   "power": 359258412
  },
  {
   "server": 33061,
   "family": "ToyotaStein",
   "power": 330709561
  },
  {
   "server": 33061,
   "family": "Germany",
   "power": 306991674
  },
  {
   "server": 33061,
   "family": "Pommesbude",
   "power": 290073042
  },
  {
   "server": 33061,
   "family": "N1ghtfall",
   "power": 259379068
  },
  {
   "server": 33061,
   "family": "pfanddiebe",
   "power": 215504599
  },
  {
   "server": 33062,
   "family": "ViribusUnitis",
   "power": 1197471438
  },
  {
   "server": 33062,
   "family": "Knochenbrecher",
   "power": 590385087
  },
  {
   "server": 33062,
   "family": "GermanWolves",
   "power": 436017291
  },
  {
   "server": 33062,
   "family": "Welcome",
   "power": 390261880
  },
  {
   "server": 33062,
   "family": "ViribusUnitis2",
   "power": 340554533
  },
  {
   "server": 33062,
   "family": "PizzaFunghi",
   "power": 335042052
  },
  {
   "server": 33062,
   "family": "Giftpilz",
   "power": 332381520
  },
  {
   "server": 33062,
   "family": "RizzHerUp",
   "power": 221085530
  },
  {
   "server": 33062,
   "family": "Fliegenpilz",
   "power": 178575171
  },
  {
   "server": 33062,
   "family": "AnimeWorld",
   "power": 155522572
  },
  {
   "server": 33063,
   "family": "ARBEITSAMT",
   "power": 1338159059
  },
  {
   "server": 33063,
   "family": "LOM’s",
   "power": 917432250
  },
  {
   "server": 33063,
   "family": "Rebellen",
   "power": 893171801
  },
  {
   "server": 33063,
   "family": "Mastershrooms",
   "power": 637587140
  },
  {
   "server": 33063,
   "family": "Timeless",
   "power": 475797058
  },
  {
   "server": 33063,
   "family": "Pilzbrut",
   "power": 412557511
  },
  {
   "server": 33063,
   "family": "Shroomis",
   "power": 369788956
  },
  {
   "server": 33063,
   "family": "MagicMushrooms",
   "power": 241226891
  },
  {
   "server": 33063,
   "family": "Strohhüte",
   "power": 224056879
  },
  {
   "server": 33063,
   "family": "107Hb",
   "power": 180095349
  },
  {
   "server": 33064,
   "family": "Todesengel",
   "power": 1038519964
  },
  {
   "server": 33064,
   "family": "Glückspilze",
   "power": 963010482
  },
  {
   "server": 33064,
   "family": "CosaNostra",
   "power": 831690683
  },
  {
   "server": 33064,
   "family": "GER_Pilzbande",
   "power": 762299300
  },
  {
   "server": 33064,
   "family": "⭐_Starlight_⭐",
   "power": 689753728
  },
  {
   "server": 33064,
   "family": "Champignons",
   "power": 293273036
  },
  {
   "server": 33064,
   "family": "Just4Fun",
   "power": 285110797
  },
  {
   "server": 33064,
   "family": "KSKGOHST",
   "power": 150990277
  },
  {
   "server": 33064,
   "family": "OnePiece",
   "power": 149520756
  },
  {
   "server": 33064,
   "family": "AtomPilz",
   "power": 134896999
  },
  {
   "server": 33065,
   "family": "GameOver",
   "power": 1185269601
  },
  {
   "server": 33065,
   "family": "GermanHero",
   "power": 1183104888
  },
  {
   "server": 33065,
   "family": "Imperium",
   "power": 802395334
  },
  {
   "server": 33065,
   "family": "GermanElite",
   "power": 428873659
  },
  {
   "server": 33065,
   "family": "Nordlichter",
   "power": 360729820
  },
  {
   "server": 33065,
   "family": "PhantomPilze",
   "power": 294472635
  },
  {
   "server": 33065,
   "family": "Assassination",
   "power": 286202588
  },
  {
   "server": 33065,
   "family": "Pilzsammler",
   "power": 226250166
  },
  {
   "server": 33065,
   "family": "Miyunity",
   "power": 223482740
  },
  {
   "server": 33065,
   "family": "DiePilsTrinker",
   "power": 218964149
  },
  {
   "server": 33066,
   "family": "†Arise†",
   "power": 1205228954
  },
  {
   "server": 33066,
   "family": "Starlight",
   "power": 1147615286
  },
  {
   "server": 33066,
   "family": "Godlike",
   "power": 492418528
  },
  {
   "server": 33066,
   "family": "Germania",
   "power": 401457450
  },
  {
   "server": 33066,
   "family": "AriseV3",
   "power": 357284126
  },
  {
   "server": 33066,
   "family": "PilzBunker",
   "power": 348210048
  },
  {
   "server": 33066,
   "family": "MagicMushrooms",
   "power": 276167540
  },
  {
   "server": 33066,
   "family": "DinoNuggets",
   "power": 269369313
  },
  {
   "server": 33066,
   "family": "Prinzen",
   "power": 242511521
  },
  {
   "server": 33066,
   "family": "√endetta",
   "power": 233369256
  },
  {
   "server": 33067,
   "family": "Fußpilz",
   "power": 1242032073
  },
  {
   "server": 33067,
   "family": "Dragons",
   "power": 1069889643
  },
  {
   "server": 33067,
   "family": "SalzPilze",
   "power": 588396725
  },
  {
   "server": 33067,
   "family": "Pilzkönigreich",
   "power": 501306289
  },
  {
   "server": 33067,
   "family": "FirstMush",
   "power": 360486849
  },
  {
   "server": 33067,
   "family": "Altersheim",
   "power": 350219937
  },
  {
   "server": 33067,
   "family": "Grounder",
   "power": 315418698
  },
  {
   "server": 33067,
   "family": "Trachatza",
   "power": 309821340
  },
  {
   "server": 33067,
   "family": "Utopia",
   "power": 279847721
  },
  {
   "server": 33067,
   "family": "Terminatoren",
   "power": 186402442
  },
  {
   "server": 33068,
   "family": "Mushpit",
   "power": 1098519652
  },
  {
   "server": 33068,
   "family": "Stammtisch",
   "power": 1005070161
  },
  {
   "server": 33068,
   "family": "PilzKönigreich",
   "power": 970278255
  },
  {
   "server": 33068,
   "family": "Germanien",
   "power": 424332823
  },
  {
   "server": 33068,
   "family": "PilzFarm",
   "power": 360952009
  },
  {
   "server": 33068,
   "family": "GermanElite",
   "power": 310666544
  },
  {
   "server": 33068,
   "family": "Pilzkönig",
   "power": 260094143
  },
  {
   "server": 33068,
   "family": "WeebTower",
   "power": 248414311
  },
  {
   "server": 33068,
   "family": "FairyTale",
   "power": 245385871
  },
  {
   "server": 33068,
   "family": "Ostfriesen",
   "power": 171709098
  },
  {
   "server": 33069,
   "family": "SoulSociety",
   "power": 1191772440
  },
  {
   "server": 33069,
   "family": "SoloLeveling",
   "power": 790995360
  },
  {
   "server": 33069,
   "family": "Helldogs",
   "power": 704196528
  },
  {
   "server": 33069,
   "family": "StartUP",
   "power": 570078027
  },
  {
   "server": 33069,
   "family": "Schwänze",
   "power": 280751373
  },
  {
   "server": 33069,
   "family": "Solo",
   "power": 270739692
  },
  {
   "server": 33069,
   "family": "danger",
   "power": 265132199
  },
  {
   "server": 33069,
   "family": "Anime",
   "power": 249998544
  },
  {
   "server": 33069,
   "family": "MeowMeow",
   "power": 181252121
  },
  {
   "server": 33069,
   "family": "Einheit",
   "power": 152479953
  },
  {
   "server": 33070,
   "family": "Pfifferlinge",
   "power": 901388640
  },
  {
   "server": 33070,
   "family": "PilzBanger",
   "power": 698359322
  },
  {
   "server": 33070,
   "family": "Fluffies",
   "power": 567803728
  },
  {
   "server": 33070,
   "family": "PilzigerOrden",
   "power": 527654605
  },
  {
   "server": 33070,
   "family": "Oblivion",
   "power": 492544534
  },
  {
   "server": 33070,
   "family": "WölfeOdins",
   "power": 293467748
  },
  {
   "server": 33070,
   "family": "Sololeveling",
   "power": 287520085
  },
  {
   "server": 33070,
   "family": "WAYBEL",
   "power": 273781240
  },
  {
   "server": 33070,
   "family": "Ruppendorf",
   "power": 231571430
  },
  {
   "server": 33070,
   "family": "Die_Schieber",
   "power": 227679397
  },
  {
   "server": 33071,
   "family": "LastEternity",
   "power": 1253016907
  },
  {
   "server": 33071,
   "family": "Wallhal",
   "power": 947029981
  },
  {
   "server": 33071,
   "family": "MentosVitamin",
   "power": 542425415
  },
  {
   "server": 33071,
   "family": "EsstmehrPilze",
   "power": 454269598
  },
  {
   "server": 33071,
   "family": "Classics",
   "power": 399838714
  },
  {
   "server": 33071,
   "family": "Eureka",
   "power": 343497030
  },
  {
   "server": 33071,
   "family": "Schneckensquad",
   "power": 319875332
  },
  {
   "server": 33071,
   "family": "PilzBefall",
   "power": 245776262
  },
  {
   "server": 33071,
   "family": "Akatsuki",
   "power": 180876844
  },
  {
   "server": 33071,
   "family": "MagierGilde",
   "power": 142666264
  },
  {
   "server": 33072,
   "family": "Heldenhaft",
   "power": 1233717890
  },
  {
   "server": 33072,
   "family": "Mushrooms",
   "power": 1006919298
  },
  {
   "server": 33072,
   "family": "technobunker",
   "power": 431451619
  },
  {
   "server": 33072,
   "family": "DemonKingdom",
   "power": 402767791
  },
  {
   "server": 33072,
   "family": "StarkeTruppe",
   "power": 373663716
  },
  {
   "server": 33072,
   "family": "myProject",
   "power": 318097579
  },
  {
   "server": 33072,
   "family": "Rasselbande",
   "power": 262463761
  },
  {
   "server": 33072,
   "family": "AtomPlize",
   "power": 242605471
  },
  {
   "server": 33072,
   "family": "Pilzeintopf",
   "power": 240363554
  },
  {
   "server": 33072,
   "family": "Kongo",
   "power": 240239079
  },
  {
   "server": 33073,
   "family": "UwU",
   "power": 1306128752
  },
  {
   "server": 33073,
   "family": "Walhalla",
   "power": 733047997
  },
  {
   "server": 33073,
   "family": "Pilzfamilie",
   "power": 711909077
  },
  {
   "server": 33073,
   "family": "EndlessFantasy",
   "power": 510912257
  },
  {
   "server": 33073,
   "family": "GermanyDragon",
   "power": 427483781
  },
  {
   "server": 33073,
   "family": "Syndicate",
   "power": 301363625
  },
  {
   "server": 33073,
   "family": "TheLastLord",
   "power": 300740626
  },
  {
   "server": 33073,
   "family": "BohnenBande",
   "power": 296069196
  },
  {
   "server": 33073,
   "family": "GHG",
   "power": 275344836
  },
  {
   "server": 33073,
   "family": "HyperActive",
   "power": 248960166
  },
  {
   "server": 33074,
   "family": "INVICTUM",
   "power": 1036811570
  },
  {
   "server": 33074,
   "family": "Pilz_Family",
   "power": 951248151
  },
  {
   "server": 33074,
   "family": "Pilzmania",
   "power": 823305566
  },
  {
   "server": 33074,
   "family": "SpandauerPilze",
   "power": 516449758
  },
  {
   "server": 33074,
   "family": "Flitzpiepen",
   "power": 298089951
  },
  {
   "server": 33074,
   "family": "MeckPommPilze",
   "power": 288663287
  },
  {
   "server": 33074,
   "family": "Starter",
   "power": 280791189
  },
  {
   "server": 33074,
   "family": "DieBumis",
   "power": 261132054
  },
  {
   "server": 33074,
   "family": "hust",
   "power": 235681255
  },
  {
   "server": 33074,
   "family": "skorpionlion",
   "power": 223475880
  },
  {
   "server": 33075,
   "family": "Valhalla",
   "power": 1303410736
  },
  {
   "server": 33075,
   "family": "Bloody‘s",
   "power": 785469718
  },
  {
   "server": 33075,
   "family": "PilzBunker",
   "power": 764426439
  },
  {
   "server": 33075,
   "family": "oldMushrooms",
   "power": 678012096
  },
  {
   "server": 33075,
   "family": "HGD",
   "power": 433565984
  },
  {
   "server": 33075,
   "family": "Bavaria",
   "power": 359971523
  },
  {
   "server": 33075,
   "family": "EZ_Gundulas",
   "power": 311624077
  },
  {
   "server": 33075,
   "family": "Pilzbande",
   "power": 307879148
  },
  {
   "server": 33075,
   "family": "Pilzis",
   "power": 228659882
  },
  {
   "server": 33075,
   "family": "FreeDreams",
   "power": 187970051
  },
  {
   "server": 33076,
   "family": "Brownie",
   "power": 1215265508
  },
  {
   "server": 33076,
   "family": "EmP",
   "power": 886723073
  },
  {
   "server": 33076,
   "family": "Skyfall",
   "power": 598918290
  },
  {
   "server": 33076,
   "family": "OVL_Overlord",
   "power": 437808128
  },
  {
   "server": 33076,
   "family": "Cry",
   "power": 415520168
  },
  {
   "server": 33076,
   "family": "DeutschePilze",
   "power": 390065319
  },
  {
   "server": 33076,
   "family": "MagicMushrooms",
   "power": 320271771
  },
  {
   "server": 33076,
   "family": "Fairytail",
   "power": 289757219
  },
  {
   "server": 33076,
   "family": "Deutschland",
   "power": 289400015
  },
  {
   "server": 33076,
   "family": "Moin",
   "power": 286402401
  },
  {
   "server": 33077,
   "family": "DarkWinter",
   "power": 1292825906
  },
  {
   "server": 33077,
   "family": "Predators",
   "power": 686918771
  },
  {
   "server": 33077,
   "family": "RisingPhoenix",
   "power": 482594090
  },
  {
   "server": 33077,
   "family": "Unicornclan",
   "power": 374267601
  },
  {
   "server": 33077,
   "family": "Würstchenparty",
   "power": 367602001
  },
  {
   "server": 33077,
   "family": "Germania",
   "power": 302891466
  },
  {
   "server": 33077,
   "family": "MagicMush",
   "power": 299889294
  },
  {
   "server": 33077,
   "family": "Germany",
   "power": 298789544
  },
  {
   "server": 33077,
   "family": "Society",
   "power": 296627589
  },
  {
   "server": 33077,
   "family": "Deutschland",
   "power": 286578892
  },
  {
   "server": 33078,
   "family": "PilzArmee",
   "power": 1282960725
  },
  {
   "server": 33078,
   "family": "PilzBörse",
   "power": 807677861
  },
  {
   "server": 33078,
   "family": "DeathNote",
   "power": 761541078
  },
  {
   "server": 33078,
   "family": "Meow",
   "power": 556587232
  },
  {
   "server": 33078,
   "family": "DieVonGestern",
   "power": 338740888
  },
  {
   "server": 33078,
   "family": "German_Hate",
   "power": 321933478
  },
  {
   "server": 33078,
   "family": "Technobunker",
   "power": 319182465
  },
  {
   "server": 33078,
   "family": "Seniorentreff",
   "power": 231309021
  },
  {
   "server": 33078,
   "family": "Legion",
   "power": 218612810
  },
  {
   "server": 33078,
   "family": "501st",
   "power": 194409010
  },
  {
   "server": 33079,
   "family": "PilzPudding",
   "power": 1087503350
  },
  {
   "server": 33079,
   "family": "PilzHunter",
   "power": 801213758
  },
  {
   "server": 33079,
   "family": "PilzSammler",
   "power": 683959861
  },
  {
   "server": 33079,
   "family": "TFZ",
   "power": 516980754
  },
  {
   "server": 33079,
   "family": "ElitePilze",
   "power": 398482227
  },
  {
   "server": 33079,
   "family": "Teddybären",
   "power": 359468394
  },
  {
   "server": 33079,
   "family": "Puddings",
   "power": 321989109
  },
  {
   "server": 33079,
   "family": "FUNGUS",
   "power": 231368950
  },
  {
   "server": 33079,
   "family": "Pilzsuppe",
   "power": 217106990
  },
  {
   "server": 33079,
   "family": "AOF",
   "power": 185064320
  },
  {
   "server": 33080,
   "family": "AnotherOne",
   "power": 1205861882
  },
  {
   "server": 33080,
   "family": "YSL",
   "power": 866758812
  },
  {
   "server": 33080,
   "family": "AllStars",
   "power": 788792973
  },
  {
   "server": 33080,
   "family": "LEGENDS",
   "power": 330335063
  },
  {
   "server": 33080,
   "family": "DieSchlümpfe",
   "power": 329747158
  },
  {
   "server": 33080,
   "family": "Germanpilze",
   "power": 278350701
  },
  {
   "server": 33080,
   "family": "ENDGEGNER",
   "power": 274420588
  },
  {
   "server": 33080,
   "family": "Hurricane",
   "power": 202666362
  },
  {
   "server": 33080,
   "family": "Happy",
   "power": 194792184
  },
  {
   "server": 33080,
   "family": "GER",
   "power": 187601549
  },
  {
   "server": 33081,
   "family": "TopShrooms",
   "power": 985974555
  },
  {
   "server": 33081,
   "family": "TOAD_CLUB",
   "power": 524883379
  },
  {
   "server": 33081,
   "family": "Ascender",
   "power": 494216365
  },
  {
   "server": 33081,
   "family": "GNADENLOS",
   "power": 435046741
  },
  {
   "server": 33081,
   "family": "Wallhalla",
   "power": 298708665
  },
  {
   "server": 33081,
   "family": "WasGehtAb",
   "power": 261151366
  },
  {
   "server": 33081,
   "family": "OXYGEN",
   "power": 230407724
  },
  {
   "server": 33081,
   "family": "Gewinner",
   "power": 215706138
  },
  {
   "server": 33081,
   "family": "Himmelsflügel",
   "power": 213802066
  },
  {
   "server": 33081,
   "family": "MushroomArmy",
   "power": 176411593
  },
  {
   "server": 33082,
   "family": "DeathNote",
   "power": 1148127650
  },
  {
   "server": 33082,
   "family": "PilzHub",
   "power": 841940794
  },
  {
   "server": 33082,
   "family": "LonelySouls",
   "power": 731020344
  },
  {
   "server": 33082,
   "family": "TerbrackClan",
   "power": 348826878
  },
  {
   "server": 33082,
   "family": "WildCats",
   "power": 317629357
  },
  {
   "server": 33082,
   "family": "technobunker",
   "power": 315175409
  },
  {
   "server": 33082,
   "family": "Dönerbox",
   "power": 288859366
  },
  {
   "server": 33082,
   "family": "Actimelisiert",
   "power": 196374335
  },
  {
   "server": 33082,
   "family": "MaxHax",
   "power": 190473443
  },
  {
   "server": 33082,
   "family": "green",
   "power": 173923823
  },
  {
   "server": 33083,
   "family": "FirstBlood",
   "power": 1180956198
  },
  {
   "server": 33083,
   "family": "Limitless",
   "power": 734028906
  },
  {
   "server": 33083,
   "family": "HIGHLIFE",
   "power": 481188202
  },
  {
   "server": 33083,
   "family": "TheHighGround",
   "power": 451147615
  },
  {
   "server": 33083,
   "family": "UwUTangClan",
   "power": 408864529
  },
  {
   "server": 33083,
   "family": "MondWolf",
   "power": 387707374
  },
  {
   "server": 33083,
   "family": "Theoretisch",
   "power": 259480971
  },
  {
   "server": 33083,
   "family": "DieSuchtProfis",
   "power": 231819179
  },
  {
   "server": 33083,
   "family": "stabilität",
   "power": 226157536
  },
  {
   "server": 33083,
   "family": "Furzknäuse",
   "power": 127123413
  },
  {
   "server": 33084,
   "family": "Reborn",
   "power": 1070109345
  },
  {
   "server": 33084,
   "family": "2ndChance",
   "power": 1048758642
  },
  {
   "server": 33084,
   "family": "DeutscherAdler",
   "power": 327578947
  },
  {
   "server": 33084,
   "family": "Sandkastenboys",
   "power": 307844601
  },
  {
   "server": 33084,
   "family": "StonerElite",
   "power": 303299391
  },
  {
   "server": 33084,
   "family": "PilsVomFass",
   "power": 254252608
  },
  {
   "server": 33084,
   "family": "1Leafe",
   "power": 203237442
  },
  {
   "server": 33084,
   "family": "GLS",
   "power": 203126225
  },
  {
   "server": 33084,
   "family": "Sporenpilz",
   "power": 200960023
  },
  {
   "server": 33084,
   "family": "RAss3lBAnd3",
   "power": 192604014
  },
  {
   "server": 33085,
   "family": "Top_Shrooms",
   "power": 1019860814
  },
  {
   "server": 33085,
   "family": "LastHope",
   "power": 898915254
  },
  {
   "server": 33085,
   "family": "DieVerlorenen",
   "power": 721221588
  },
  {
   "server": 33085,
   "family": "NewHorizon",
   "power": 588542654
  },
  {
   "server": 33085,
   "family": "Unkreativ",
   "power": 324583195
  },
  {
   "server": 33085,
   "family": "DiePilze",
   "power": 320684319
  },
  {
   "server": 33085,
   "family": "Schnuffels",
   "power": 230905591
  },
  {
   "server": 33085,
   "family": "ALPHA",
   "power": 205950777
  },
  {
   "server": 33085,
   "family": "kingdom",
   "power": 193820139
  },
  {
   "server": 33085,
   "family": "Fliegenpilze",
   "power": 179874726
  },
  {
   "server": 33086,
   "family": "PilzArmee",
   "power": 953788910
  },
  {
   "server": 33086,
   "family": "DieEichelpilze",
   "power": 666104968
  },
  {
   "server": 33086,
   "family": "Berserker",
   "power": 488201337
  },
  {
   "server": 33086,
   "family": "GG",
   "power": 429847289
  },
  {
   "server": 33086,
   "family": "Ravenclaw",
   "power": 308428168
  },
  {
   "server": 33086,
   "family": "PilzeImWald",
   "power": 300350210
  },
  {
   "server": 33086,
   "family": "Legends",
   "power": 246473222
  },
  {
   "server": 33086,
   "family": "Psychedelics",
   "power": 216868530
  },
  {
   "server": 33086,
   "family": "Pilz_Family",
   "power": 194800946
  },
  {
   "server": 33086,
   "family": "Meow",
   "power": 194395989
  },
  {
   "server": 33087,
   "family": "Vollstrecker",
   "power": 806137002
  },
  {
   "server": 33087,
   "family": "ShadowGarden",
   "power": 576721616
  },
  {
   "server": 33087,
   "family": "Schattenreiter",
   "power": 533621146
  },
  {
   "server": 33087,
   "family": "PilzSuppe",
   "power": 498302780
  },
  {
   "server": 33087,
   "family": "FreizeitPilze",
   "power": 393573412
  },
  {
   "server": 33087,
   "family": "DasPils",
   "power": 329534742
  },
  {
   "server": 33087,
   "family": "PilzGermanen",
   "power": 292954655
  },
  {
   "server": 33087,
   "family": "Blutmondclan",
   "power": 285401529
  },
  {
   "server": 33087,
   "family": "Crim",
   "power": 276968554
  },
  {
   "server": 33087,
   "family": "SuperMarioBros",
   "power": 224688447
  },
  {
   "server": 33088,
   "family": "Gummibärchen",
   "power": 896370267
  },
  {
   "server": 33088,
   "family": "uchia",
   "power": 848454812
  },
  {
   "server": 33088,
   "family": "DarkKnight",
   "power": 832257076
  },
  {
   "server": 33088,
   "family": "Deutschland",
   "power": 352903627
  },
  {
   "server": 33088,
   "family": "MushroomElite",
   "power": 275512825
  },
  {
   "server": 33088,
   "family": "Paradox",
   "power": 260421848
  },
  {
   "server": 33088,
   "family": "SortArtOnline",
   "power": 224987038
  },
  {
   "server": 33088,
   "family": "murshfighters",
   "power": 204600090
  },
  {
   "server": 33088,
   "family": "Inferno",
   "power": 182811632
  },
  {
   "server": 33088,
   "family": "Deppentreff",
   "power": 175099322
  },
  {
   "server": 33089,
   "family": "ToadsFamily",
   "power": 1081704723
  },
  {
   "server": 33089,
   "family": "Shroomville",
   "power": 822461021
  },
  {
   "server": 33089,
   "family": "Titans",
   "power": 392623566
  },
  {
   "server": 33089,
   "family": "Pilzköpfe",
   "power": 313301829
  },
  {
   "server": 33089,
   "family": "NSFW",
   "power": 269510869
  },
  {
   "server": 33089,
   "family": "Enten",
   "power": 260726099
  },
  {
   "server": 33089,
   "family": "Inkognito420",
   "power": 251582576
  },
  {
   "server": 33089,
   "family": "Nordsee",
   "power": 246101753
  },
  {
   "server": 33089,
   "family": "Klobürste",
   "power": 184955927
  },
  {
   "server": 33089,
   "family": "Loyalität",
   "power": 162924616
  },
  {
   "server": 33090,
   "family": "shroomys",
   "power": 1036971412
  },
  {
   "server": 33090,
   "family": "TeamKugelblitz",
   "power": 722931208
  },
  {
   "server": 33090,
   "family": "PilzkopfBande",
   "power": 471179258
  },
  {
   "server": 33090,
   "family": "SoloLeveling",
   "power": 360282958
  },
  {
   "server": 33090,
   "family": "rTacoos",
   "power": 337817256
  },
  {
   "server": 33090,
   "family": "GuteNudeln",
   "power": 314780072
  },
  {
   "server": 33090,
   "family": "KillingSpree",
   "power": 297940223
  },
  {
   "server": 33090,
   "family": "TeamKugelBlitz",
   "power": 282581906
  },
  {
   "server": 33090,
   "family": "Mushroomkings",
   "power": 257429421
  },
  {
   "server": 33090,
   "family": "TeamKugelblitZ",
   "power": 180648300
  },
  {
   "server": 33091,
   "family": "PilzElite",
   "power": 928379930
  },
  {
   "server": 33091,
   "family": "Pilzköpfe",
   "power": 768999294
  },
  {
   "server": 33091,
   "family": "GameOver",
   "power": 637817236
  },
  {
   "server": 33091,
   "family": "Sanctuary",
   "power": 308023685
  },
  {
   "server": 33091,
   "family": "PhantomPilze",
   "power": 245380720
  },
  {
   "server": 33091,
   "family": "BlackDragon",
   "power": 216619461
  },
  {
   "server": 33091,
   "family": "Die_Deutschen",
   "power": 213198726
  },
  {
   "server": 33091,
   "family": "SaarBrigade",
   "power": 196708079
  },
  {
   "server": 33091,
   "family": "GHG",
   "power": 182814000
  },
  {
   "server": 33091,
   "family": "MagicMushrooms",
   "power": 165230663
  },
  {
   "server": 33092,
   "family": "ChaosCrew",
   "power": 981052553
  },
  {
   "server": 33092,
   "family": "Akatsuki",
   "power": 836302547
  },
  {
   "server": 33092,
   "family": "Elite",
   "power": 433739173
  },
  {
   "server": 33092,
   "family": "Wolfsblut",
   "power": 377081915
  },
  {
   "server": 33092,
   "family": "D4C",
   "power": 293458393
  },
  {
   "server": 33092,
   "family": "VoodooGarden",
   "power": 235700069
  },
  {
   "server": 33092,
   "family": "OnePiece",
   "power": 205524284
  },
  {
   "server": 33092,
   "family": "MagicMushrooms",
   "power": 186885766
  },
  {
   "server": 33092,
   "family": "TopShrooms",
   "power": 173725848
  },
  {
   "server": 33092,
   "family": "Pilzsuppe",
   "power": 163672115
  },
  {
   "server": 33093,
   "family": "Damage",
   "power": 832122093
  },
  {
   "server": 33093,
   "family": "SINNERS",
   "power": 593440316
  },
  {
   "server": 33093,
   "family": "MagicChampions",
   "power": 462025420
  },
  {
   "server": 33093,
   "family": "Horde",
   "power": 339947529
  },
  {
   "server": 33093,
   "family": "Gregoronkh",
   "power": 295208483
  },
  {
   "server": 33093,
   "family": "Bratwurst",
   "power": 280480997
  },
  {
   "server": 33093,
   "family": "Klobürsten",
   "power": 279596929
  },
  {
   "server": 33093,
   "family": "Ronin",
   "power": 238208438
  },
  {
   "server": 33093,
   "family": "Der_Beste",
   "power": 233719086
  },
  {
   "server": 33093,
   "family": "F2P",
   "power": 217771721
  },
  {
   "server": 33094,
   "family": "Unglaublich",
   "power": 920434674
  },
  {
   "server": 33094,
   "family": "ProMushroom",
   "power": 707184661
  },
  {
   "server": 33094,
   "family": "NewMoons",
   "power": 306520107
  },
  {
   "server": 33094,
   "family": "IchAlleine",
   "power": 297515045
  },
  {
   "server": 33094,
   "family": "Sporentrupp",
   "power": 250947429
  },
  {
   "server": 33094,
   "family": "Loyals",
   "power": 248436800
  },
  {
   "server": 33094,
   "family": "AlceunEmpire",
   "power": 235520247
  },
  {
   "server": 33094,
   "family": "Drachenreiter",
   "power": 231977741
  },
  {
   "server": 33094,
   "family": "Raum17",
   "power": 191745215
  },
  {
   "server": 33094,
   "family": "BlackClan",
   "power": 191440728
  },
  {
   "server": 33095,
   "family": "InfinityManji",
   "power": 965173464
  },
  {
   "server": 33095,
   "family": "LiveFast",
   "power": 886725656
  },
  {
   "server": 33095,
   "family": "Echo",
   "power": 531635112
  },
  {
   "server": 33095,
   "family": "DämonenParade",
   "power": 421841914
  },
  {
   "server": 33095,
   "family": "Astral",
   "power": 311092957
  },
  {
   "server": 33095,
   "family": "Tempest",
   "power": 272895372
  },
  {
   "server": 33095,
   "family": "Brot_brot",
   "power": 235646598
  },
  {
   "server": 33095,
   "family": "GermanAngels",
   "power": 234081008
  },
  {
   "server": 33095,
   "family": "Stammtisch",
   "power": 228839244
  },
  {
   "server": 33095,
   "family": "FairyTail",
   "power": 202316200
  },
  {
   "server": 33096,
   "family": "MushroomArmy",
   "power": 832133384
  },
  {
   "server": 33096,
   "family": "Germanyx",
   "power": 659271281
  },
  {
   "server": 33096,
   "family": "FairyTail",
   "power": 403349618
  },
  {
   "server": 33096,
   "family": "Schwabbel",
   "power": 396574207
  },
  {
   "server": 33096,
   "family": "Fruchtpilze",
   "power": 245903353
  },
  {
   "server": 33096,
   "family": "ImpactGaming",
   "power": 225301888
  },
  {
   "server": 33096,
   "family": "GetSchwifty",
   "power": 200440174
  },
  {
   "server": 33096,
   "family": "Teufelskerle",
   "power": 189894595
  },
  {
   "server": 33096,
   "family": "DasTrio",
   "power": 189159143
  },
  {
   "server": 33096,
   "family": "DieGiftpilze",
   "power": 167989276
  },
  {
   "server": 33097,
   "family": "BloodSoaked",
   "power": 865386719
  },
  {
   "server": 33097,
   "family": "⭐_Gummibären_⭐",
   "power": 511399315
  },
  {
   "server": 33097,
   "family": "🥷Akatsuki🥷",
   "power": 497795486
  },
  {
   "server": 33097,
   "family": "GER",
   "power": 409491172
  },
  {
   "server": 33097,
   "family": "FairyTail",
   "power": 376549681
  },
  {
   "server": 33097,
   "family": "DieBösenBuben",
   "power": 296150627
  },
  {
   "server": 33097,
   "family": "ElPrimo",
   "power": 247110033
  },
  {
   "server": 33097,
   "family": "Bubatz",
   "power": 246362291
  },
  {
   "server": 33097,
   "family": "DiePilze",
   "power": 208449318
  },
  {
   "server": 33097,
   "family": "Fliegenpilz",
   "power": 200026032
  },
  {
   "server": 33098,
   "family": "Astelic",
   "power": 830855600
  },
  {
   "server": 33098,
   "family": "MondGlanz",
   "power": 713109171
  },
  {
   "server": 33098,
   "family": "Luxeaterna",
   "power": 365201076
  },
  {
   "server": 33098,
   "family": "HalterOberflur",
   "power": 322216997
  },
  {
   "server": 33098,
   "family": "Angel_Of_Chaos",
   "power": 292287982
  },
  {
   "server": 33098,
   "family": "Pandora",
   "power": 281024349
  },
  {
   "server": 33098,
   "family": "MagicShrooms",
   "power": 268851233
  },
  {
   "server": 33098,
   "family": "lions",
   "power": 219648333
  },
  {
   "server": 33098,
   "family": "RisingMushroom",
   "power": 204593063
  },
  {
   "server": 33098,
   "family": "Nrw",
   "power": 192627666
  },
  {
   "server": 33099,
   "family": "Fuzzy",
   "power": 821340323
  },
  {
   "server": 33099,
   "family": "Germania",
   "power": 662199393
  },
  {
   "server": 33099,
   "family": "Deadlyrooms",
   "power": 346396061
  },
  {
   "server": 33099,
   "family": "PsyMushrooms",
   "power": 344732128
  },
  {
   "server": 33099,
   "family": "DieVolstrecker",
   "power": 287339403
  },
  {
   "server": 33099,
   "family": "Strohhüte",
   "power": 283085555
  },
  {
   "server": 33099,
   "family": "OnlyGermany",
   "power": 264290544
  },
  {
   "server": 33099,
   "family": "WCYD",
   "power": 264043998
  },
  {
   "server": 33099,
   "family": "Elmussy",
   "power": 237593961
  },
  {
   "server": 33099,
   "family": "königlichestor",
   "power": 202631307
  },
  {
   "server": 33100,
   "family": "MonKings",
   "power": 713537775
  },
  {
   "server": 33100,
   "family": "DieRatlosen",
   "power": 677115333
  },
  {
   "server": 33100,
   "family": "Fliegenpilze",
   "power": 673223421
  },
  {
   "server": 33100,
   "family": "Unlucky",
   "power": 539374325
  },
  {
   "server": 33100,
   "family": "Elite",
   "power": 281733386
  },
  {
   "server": 33100,
   "family": "Nordlinge",
   "power": 257580863
  },
  {
   "server": 33100,
   "family": "Phönix",
   "power": 250586755
  },
  {
   "server": 33100,
   "family": "POPHKAS",
   "power": 238794344
  },
  {
   "server": 33100,
   "family": "Untherapierbar",
   "power": 226245787
  },
  {
   "server": 33100,
   "family": "Akatsuki",
   "power": 225329920
  },
  {
   "server": 33101,
   "family": "Ehrenmänner",
   "power": 771384057
  },
  {
   "server": 33101,
   "family": "Heldenhaft",
   "power": 516155176
  },
  {
   "server": 33101,
   "family": "shadow_garden",
   "power": 420881387
  },
  {
   "server": 33101,
   "family": "DEmpire",
   "power": 326450865
  },
  {
   "server": 33101,
   "family": "KillerPilze",
   "power": 274647301
  },
  {
   "server": 33101,
   "family": "diePilze",
   "power": 234221755
  },
  {
   "server": 33101,
   "family": "Pilzregatta",
   "power": 233168252
  },
  {
   "server": 33101,
   "family": "Magic_Mushroom",
   "power": 230971424
  },
  {
   "server": 33101,
   "family": "KingZ",
   "power": 230971362
  },
  {
   "server": 33101,
   "family": "Schroomtrooper",
   "power": 174051953
  },
  {
   "server": 33102,
   "family": "StarShrooms",
   "power": 730167972
  },
  {
   "server": 33102,
   "family": "Clap4Us",
   "power": 594820005
  },
  {
   "server": 33102,
   "family": "420nShrooms",
   "power": 342565079
  },
  {
   "server": 33102,
   "family": "BlackofDays",
   "power": 315091612
  },
  {
   "server": 33102,
   "family": "DieChaoten",
   "power": 235684380
  },
  {
   "server": 33102,
   "family": "StonerShrooms",
   "power": 231933238
  },
  {
   "server": 33102,
   "family": "Verpesstung",
   "power": 205544294
  },
  {
   "server": 33102,
   "family": "Silberpilz",
   "power": 198854704
  },
  {
   "server": 33102,
   "family": "Shaggers",
   "power": 192969923
  },
  {
   "server": 33102,
   "family": "Residenz",
   "power": 191663215
  },
  {
   "server": 33103,
   "family": "Legends",
   "power": 709290868
  },
  {
   "server": 33103,
   "family": "MagicMushroom",
   "power": 375225314
  },
  {
   "server": 33103,
   "family": "ILLIRIA",
   "power": 369570372
  },
  {
   "server": 33103,
   "family": "JOKERz",
   "power": 268529694
  },
  {
   "server": 33103,
   "family": "FettSäckeAG",
   "power": 242638448
  },
  {
   "server": 33103,
   "family": "S44_Elite",
   "power": 234737381
  },
  {
   "server": 33103,
   "family": "Deutsch",
   "power": 215421514
  },
  {
   "server": 33103,
   "family": "ArbeitsamV2",
   "power": 191950114
  },
  {
   "server": 33103,
   "family": "Pilzerama",
   "power": 187287317
  },
  {
   "server": 33103,
   "family": "FungiFusion",
   "power": 123409907
  },
  {
   "server": 33104,
   "family": "Pilzbunker",
   "power": 597051999
  },
  {
   "server": 33104,
   "family": "PilzKönige",
   "power": 405812525
  },
  {
   "server": 33104,
   "family": "DarkEvils",
   "power": 388456603
  },
  {
   "server": 33104,
   "family": "Diablo",
   "power": 250064314
  },
  {
   "server": 33104,
   "family": "Pilzbande",
   "power": 228007068
  },
  {
   "server": 33104,
   "family": "Vogtland",
   "power": 210897140
  },
  {
   "server": 33104,
   "family": "Dieeierlecker",
   "power": 193286329
  },
  {
   "server": 33104,
   "family": "ReadyOasis",
   "power": 182215673
  },
  {
   "server": 33104,
   "family": "SoulsofBlood",
   "power": 164404950
  },
  {
   "server": 33104,
   "family": "Antimykotikum",
   "power": 154316120
  },
  {
   "server": 33105,
   "family": "ILoveCookies",
   "power": 526712228
  },
  {
   "server": 33105,
   "family": "Pay2Lose",
   "power": 416586198
  },
  {
   "server": 33105,
   "family": "NoFoxGiven",
   "power": 284871639
  },
  {
   "server": 33105,
   "family": "Germany",
   "power": 239062664
  },
  {
   "server": 33105,
   "family": "Misfits",
   "power": 227092953
  },
  {
   "server": 33105,
   "family": "Giftzwerge",
   "power": 206867613
  },
  {
   "server": 33105,
   "family": "NoWayOut",
   "power": 173019630
  },
  {
   "server": 33105,
   "family": "Deutschland",
   "power": 153888062
  },
  {
   "server": 33105,
   "family": "Lust",
   "power": 128206821
  },
  {
   "server": 33105,
   "family": "Krombacher",
   "power": 55763536
  },
  {
   "server": 33106,
   "family": "Namikaze",
   "power": 655975590
  },
  {
   "server": 33106,
   "family": "Pilzanstalt",
   "power": 429907010
  },
  {
   "server": 33106,
   "family": "豈187豈",
   "power": 308792073
  },
  {
   "server": 33106,
   "family": "Uchiha_Clan",
   "power": 264265957
  },
  {
   "server": 33106,
   "family": "DiePilzis",
   "power": 252116258
  },
  {
   "server": 33106,
   "family": "Schlumpfhausen",
   "power": 249230259
  },
  {
   "server": 33106,
   "family": "Deutschland",
   "power": 214676201
  },
  {
   "server": 33106,
   "family": "ShroomSmurf",
   "power": 207660922
  },
  {
   "server": 33106,
   "family": "H",
   "power": 152175993
  },
  {
   "server": 33106,
   "family": "SKAS",
   "power": 132787573
  },
  {
   "server": 33107,
   "family": "ExTinCTiOn",
   "power": 619373740
  },
  {
   "server": 33107,
   "family": "Pilzköppe",
   "power": 517524145
  },
  {
   "server": 33107,
   "family": "MushroomKings",
   "power": 341877697
  },
  {
   "server": 33107,
   "family": "LOMGerman",
   "power": 320052848
  },
  {
   "server": 33107,
   "family": "420Club",
   "power": 217884083
  },
  {
   "server": 33107,
   "family": "Saftladen",
   "power": 210152873
  },
  {
   "server": 33107,
   "family": "MagicMushrooms",
   "power": 181001119
  },
  {
   "server": 33107,
   "family": "BlutrauschGER",
   "power": 177238431
  },
  {
   "server": 33107,
   "family": "BS_CLAN",
   "power": 167276589
  },
  {
   "server": 33107,
   "family": "DiePilzköpfe",
   "power": 151939185
  },
  {
   "server": 33108,
   "family": "DevilClub",
   "power": 560801059
  },
  {
   "server": 33108,
   "family": "JuraWald",
   "power": 462921666
  },
  {
   "server": 33108,
   "family": "Pussypilze",
   "power": 321750749
  },
  {
   "server": 33108,
   "family": "DiePilzkrieger",
   "power": 260206823
  },
  {
   "server": 33108,
   "family": "Medusa",
   "power": 202147800
  },
  {
   "server": 33108,
   "family": "pilzköppe",
   "power": 184132903
  },
  {
   "server": 33108,
   "family": "ClanDesGrauens",
   "power": 184059882
  },
  {
   "server": 33108,
   "family": "RankOne",
   "power": 177306046
  },
  {
   "server": 33108,
   "family": "DiePilsBude",
   "power": 155318238
  },
  {
   "server": 33108,
   "family": "Valhalla",
   "power": 149878503
  },
  {
   "server": 33109,
   "family": "FourTwenty",
   "power": 483163540
  },
  {
   "server": 33109,
   "family": "NEKO",
   "power": 312452247
  },
  {
   "server": 33109,
   "family": "BloodyS",
   "power": 255545982
  },
  {
   "server": 33109,
   "family": "Ragnarök",
   "power": 198201395
  },
  {
   "server": 33109,
   "family": "Rubinrot",
   "power": 186162037
  },
  {
   "server": 33109,
   "family": "Shroomies",
   "power": 179607000
  },
  {
   "server": 33109,
   "family": "FrankenpowerTv",
   "power": 179249336
  },
  {
   "server": 33109,
   "family": "KampfPilze",
   "power": 172966847
  },
  {
   "server": 33109,
   "family": "Anime",
   "power": 164009757
  },
  {
   "server": 33109,
   "family": "Kampftruppe",
   "power": 157614275
  },
  {
   "server": 33110,
   "family": "BlackTrüffels",
   "power": 439466380
  },
  {
   "server": 33110,
   "family": "Fruchtpilze",
   "power": 403438764
  },
  {
   "server": 33110,
   "family": "PilzchenBoyz",
   "power": 247177795
  },
  {
   "server": 33110,
   "family": "Palia",
   "power": 239110368
  },
  {
   "server": 33110,
   "family": "AKATSUKI",
   "power": 200057731
  },
  {
   "server": 33110,
   "family": "Ahjin_Guild",
   "power": 175518759
  },
  {
   "server": 33110,
   "family": "DieGummibären",
   "power": 166963564
  },
  {
   "server": 33110,
   "family": "Träumer",
   "power": 151825243
  },
  {
   "server": 33110,
   "family": "Blackhawks",
   "power": 147039010
  },
  {
   "server": 33110,
   "family": "7deadlySins",
   "power": 146312290
  },
  {
   "server": 33111,
   "family": "h2k",
   "power": 474099322
  },
  {
   "server": 33111,
   "family": "Nutrix",
   "power": 279051431
  },
  {
   "server": 33111,
   "family": "GermanWarrior",
   "power": 256756779
  },
  {
   "server": 33111,
   "family": "FairyTail",
   "power": 230635061
  },
  {
   "server": 33111,
   "family": "Pilzköpfe",
   "power": 200859985
  },
  {
   "server": 33111,
   "family": "German",
   "power": 159671266
  },
  {
   "server": 33111,
   "family": "Musherport",
   "power": 155069808
  },
  {
   "server": 33111,
   "family": "Shadow",
   "power": 154820302
  },
  {
   "server": 33111,
   "family": "Honorificus",
   "power": 149686480
  },
  {
   "server": 33111,
   "family": "Minato",
   "power": 138366014
  },
  {
   "server": 33112,
   "family": "SoulSociety",
   "power": 359884982
  },
  {
   "server": 33112,
   "family": "No€NoClan",
   "power": 296853238
  },
  {
   "server": 33112,
   "family": "Pilzfreunde",
   "power": 248977097
  },
  {
   "server": 33112,
   "family": "BierPiraten",
   "power": 217032062
  },
  {
   "server": 33112,
   "family": "EinhornLand",
   "power": 180835820
  },
  {
   "server": 33112,
   "family": "D4RK",
   "power": 175835367
  },
  {
   "server": 33112,
   "family": "DeWalhalla",
   "power": 174864996
  },
  {
   "server": 33112,
   "family": "MagicMushroom",
   "power": 155210612
  },
  {
   "server": 33112,
   "family": "Wikings",
   "power": 143493771
  },
  {
   "server": 33112,
   "family": "KingsOfChaos",
   "power": 129842674
  },
  {
   "server": 33113,
   "family": "Gol_D_Mushroom",
   "power": 274931972
  },
  {
   "server": 33113,
   "family": "Pilzköpfe",
   "power": 201045380
  },
  {
   "server": 33113,
   "family": "RubbelLampen",
   "power": 141417210
  },
  {
   "server": 33113,
   "family": "Pilztopia",
   "power": 141049904
  },
  {
   "server": 33113,
   "family": "Pilzbude",
   "power": 139103821
  },
  {
   "server": 33113,
   "family": "Legends",
   "power": 129943075
  },
  {
   "server": 33113,
   "family": "Clubderpilze",
   "power": 121639415
  },
  {
   "server": 33113,
   "family": "Pilzhausen",
   "power": 106260713
  },
  {
   "server": 33113,
   "family": "PilzSuppe",
   "power": 98950874
  },
  {
   "server": 33113,
   "family": "GermanBude",
   "power": 53497578
  },
  {
   "server": 33114,
   "family": "Noir",
   "power": 229143027
  },
  {
   "server": 33114,
   "family": "OG_Pilze",
   "power": 216138012
  },
  {
   "server": 33114,
   "family": "PilzSuppe",
   "power": 172188703
  },
  {
   "server": 33114,
   "family": "TeamDiff",
   "power": 163727387
  },
  {
   "server": 33114,
   "family": "Vennskap",
   "power": 152093891
  },
  {
   "server": 33114,
   "family": "DieGestoerten",
   "power": 135730724
  },
  {
   "server": 33114,
   "family": "7DeadlyHats",
   "power": 129701426
  },
  {
   "server": 33114,
   "family": "R33_Pilze",
   "power": 119611284
  },
  {
   "server": 33114,
   "family": "HalleSaale",
   "power": 109988646
  },
  {
   "server": 33114,
   "family": "Strohüte",
   "power": 72405789
  },
  {
   "server": 36001,
   "family": "All Star",
   "power": 1766273356
  },
  {
   "server": 36001,
   "family": "Kapitals",
   "power": 1405300891
  },
  {
   "server": 36001,
   "family": "Neo Star",
   "power": 1371330472
  },
  {
   "server": 36001,
   "family": "Arcadia",
   "power": 1317657958
  },
  {
   "server": 36001,
   "family": "Log_Horizon",
   "power": 1278468357
  },
  {
   "server": 36001,
   "family": "LaRoseDuTigre",
   "power": 1150554820
  },
  {
   "server": 36001,
   "family": "MagesRouges",
   "power": 1027867322
  },
  {
   "server": 36001,
   "family": "Wild_Star",
   "power": 973460825
  },
  {
   "server": 36001,
   "family": "Baby_Stars",
   "power": 838707994
  },
  {
   "server": 36001,
   "family": "GFR",
   "power": 796794676
  },
  {
   "server": 36002,
   "family": "DragonsNoirs",
   "power": 1428767655
  },
  {
   "server": 36002,
   "family": "DragonsBleus",
   "power": 1210216951
  },
  {
   "server": 36002,
   "family": "Ashes",
   "power": 1185085139
  },
  {
   "server": 36002,
   "family": "DragonsRouges",
   "power": 1134750870
  },
  {
   "server": 36002,
   "family": "BlackTides",
   "power": 1021800420
  },
  {
   "server": 36002,
   "family": "FranceConnect",
   "power": 834312655
  },
  {
   "server": 36002,
   "family": "Infinity_Fr",
   "power": 655049488
  },
  {
   "server": 36002,
   "family": "DragonsBlanc",
   "power": 486394355
  },
  {
   "server": 36002,
   "family": "FRcorp",
   "power": 414976575
  },
  {
   "server": 36002,
   "family": "ETERNAL",
   "power": 390273535
  },
  {
   "server": 36003,
   "family": "MushroomTale",
   "power": 1488563295
  },
  {
   "server": 36003,
   "family": "L’Amanite",
   "power": 1417999198
  },
  {
   "server": 36003,
   "family": "NoName",
   "power": 1317833949
  },
  {
   "server": 36003,
   "family": "spartaFR",
   "power": 1097987631
  },
  {
   "server": 36003,
   "family": "MocheRoom",
   "power": 616103653
  },
  {
   "server": 36003,
   "family": "Naturia",
   "power": 541408110
  },
  {
   "server": 36003,
   "family": "Tchernobyl",
   "power": 539663806
  },
  {
   "server": 36003,
   "family": "LesNoobzzz",
   "power": 512222808
  },
  {
   "server": 36003,
   "family": "Filtre2_0",
   "power": 511278252
  },
  {
   "server": 36003,
   "family": "FairytailFR",
   "power": 334659878
  },
  {
   "server": 36004,
   "family": "OnTheTop",
   "power": 1588141451
  },
  {
   "server": 36004,
   "family": "TheLastHope",
   "power": 1426648831
  },
  {
   "server": 36004,
   "family": "Mugiwara",
   "power": 1130305211
  },
  {
   "server": 36004,
   "family": "ChampESport",
   "power": 1091097532
  },
  {
   "server": 36004,
   "family": "HariboGang",
   "power": 1033728095
  },
  {
   "server": 36004,
   "family": "GuildeFR",
   "power": 973457067
  },
  {
   "server": 36004,
   "family": "TryhardFr",
   "power": 953088930
  },
  {
   "server": 36004,
   "family": "legendaryFR",
   "power": 372931892
  },
  {
   "server": 36004,
   "family": "Yggdrasil",
   "power": 370710196
  },
  {
   "server": 36004,
   "family": "Cringeland",
   "power": 351548228
  },
  {
   "server": 36005,
   "family": "LesSchtroumpfs",
   "power": 1614708192
  },
  {
   "server": 36005,
   "family": "꧁Arkana꧂",
   "power": 1382294044
  },
  {
   "server": 36005,
   "family": "lesSchtroumpf2",
   "power": 1149938134
  },
  {
   "server": 36005,
   "family": "LastLegend",
   "power": 1140891802
  },
  {
   "server": 36005,
   "family": "LesTrolls",
   "power": 996479483
  },
  {
   "server": 36005,
   "family": "LesSchtroumpf3",
   "power": 517227287
  },
  {
   "server": 36005,
   "family": "Nymphéa",
   "power": 506505730
  },
  {
   "server": 36005,
   "family": "Apocalypse",
   "power": 345885266
  },
  {
   "server": 36005,
   "family": "Dragoon",
   "power": 331252437
  },
  {
   "server": 36005,
   "family": "frenchclan",
   "power": 307674169
  },
  {
   "server": 36006,
   "family": "Avalanche",
   "power": 1468757229
  },
  {
   "server": 36006,
   "family": "FRANCE",
   "power": 1420453426
  },
  {
   "server": 36006,
   "family": "TeamPanda44",
   "power": 968082549
  },
  {
   "server": 36006,
   "family": "Apocalypse",
   "power": 947199397
  },
  {
   "server": 36006,
   "family": "fc_copain",
   "power": 752756566
  },
  {
   "server": 36006,
   "family": "champiland",
   "power": 520636377
  },
  {
   "server": 36006,
   "family": "FrenchCore",
   "power": 433782982
  },
  {
   "server": 36006,
   "family": "ChampiAtomique",
   "power": 344216958
  },
  {
   "server": 36006,
   "family": "Toad_Family",
   "power": 310614698
  },
  {
   "server": 36006,
   "family": "One_Piece",
   "power": 276443818
  },
  {
   "server": 36007,
   "family": "UmbrellaCorps",
   "power": 1494791434
  },
  {
   "server": 36007,
   "family": "Exodias",
   "power": 1358147766
  },
  {
   "server": 36007,
   "family": "Moonlight",
   "power": 1174709248
  },
  {
   "server": 36007,
   "family": "Supremacy",
   "power": 773495934
  },
  {
   "server": 36007,
   "family": "LesGros",
   "power": 535642047
  },
  {
   "server": 36007,
   "family": "France",
   "power": 507519776
  },
  {
   "server": 36007,
   "family": "Frenchill",
   "power": 374054881
  },
  {
   "server": 36007,
   "family": "Frenchmushroom",
   "power": 335064080
  },
  {
   "server": 36007,
   "family": "champiforce",
   "power": 288039887
  },
  {
   "server": 36007,
   "family": "ShadowMonarch",
   "power": 285411282
  },
  {
   "server": 36008,
   "family": "Renaissance",
   "power": 1312489798
  },
  {
   "server": 36008,
   "family": "Legandary",
   "power": 1249453265
  },
  {
   "server": 36008,
   "family": "Kaamelott",
   "power": 1233974624
  },
  {
   "server": 36008,
   "family": "Casanostra",
   "power": 1177994556
  },
  {
   "server": 36008,
   "family": "French",
   "power": 533103318
  },
  {
   "server": 36008,
   "family": "France",
   "power": 454506026
  },
  {
   "server": 36008,
   "family": "MUGIWARAS",
   "power": 359232199
  },
  {
   "server": 36008,
   "family": "InspiDuSoir",
   "power": 322916629
  },
  {
   "server": 36008,
   "family": "TeamGamer",
   "power": 320688770
  },
  {
   "server": 36008,
   "family": "VogueMerry",
   "power": 309044226
  },
  {
   "server": 36009,
   "family": "Mycélium",
   "power": 1382306306
  },
  {
   "server": 36009,
   "family": "Shadow",
   "power": 1198421754
  },
  {
   "server": 36009,
   "family": "ÉcarlateFR",
   "power": 683831747
  },
  {
   "server": 36009,
   "family": "MushiStorm",
   "power": 662801930
  },
  {
   "server": 36009,
   "family": "DéterrésAuRhum",
   "power": 633082550
  },
  {
   "server": 36009,
   "family": "KrustyClan",
   "power": 563999996
  },
  {
   "server": 36009,
   "family": "LBG",
   "power": 399430856
  },
  {
   "server": 36009,
   "family": "FairyTail",
   "power": 314328223
  },
  {
   "server": 36009,
   "family": "SUN",
   "power": 285305586
  },
  {
   "server": 36009,
   "family": "YouTubeFR",
   "power": 259627094
  },
  {
   "server": 36010,
   "family": "FR10",
   "power": 1485141906
  },
  {
   "server": 36010,
   "family": "Sixtoy",
   "power": 1253726068
  },
  {
   "server": 36010,
   "family": "FrenchEmpire",
   "power": 1131462737
  },
  {
   "server": 36010,
   "family": "Toad",
   "power": 1032131708
  },
  {
   "server": 36010,
   "family": "TamurilFamily",
   "power": 907696984
  },
  {
   "server": 36010,
   "family": "Clan",
   "power": 421786542
  },
  {
   "server": 36010,
   "family": "BlueMoon",
   "power": 402011596
  },
  {
   "server": 36010,
   "family": "FrenchBaguette",
   "power": 388551714
  },
  {
   "server": 36010,
   "family": "Akuma",
   "power": 302921058
  },
  {
   "server": 36010,
   "family": "France",
   "power": 299706669
  },
  {
   "server": 36011,
   "family": "P2W",
   "power": 1488371779
  },
  {
   "server": 36011,
   "family": "COSANOSTRA",
   "power": 975610310
  },
  {
   "server": 36011,
   "family": "BelleFrance",
   "power": 744968583
  },
  {
   "server": 36011,
   "family": "F2P",
   "power": 695212036
  },
  {
   "server": 36011,
   "family": "French_Touch",
   "power": 633153096
  },
  {
   "server": 36011,
   "family": "La_Beuverie_Fr",
   "power": 372480596
  },
  {
   "server": 36011,
   "family": "Champ",
   "power": 332508801
  },
  {
   "server": 36011,
   "family": "Nova",
   "power": 271662440
  },
  {
   "server": 36011,
   "family": "Le_Champignar",
   "power": 197787184
  },
  {
   "server": 36011,
   "family": "SBG",
   "power": 197098400
  },
  {
   "server": 36012,
   "family": "Kaamelott",
   "power": 1484082307
  },
  {
   "server": 36012,
   "family": "FlanUfhiwa",
   "power": 1286145467
  },
  {
   "server": 36012,
   "family": "Tempest",
   "power": 614403671
  },
  {
   "server": 36012,
   "family": "monstreandco",
   "power": 600712271
  },
  {
   "server": 36012,
   "family": "ChampiTeam_FR",
   "power": 405056546
  },
  {
   "server": 36012,
   "family": "ChampiFR",
   "power": 343947516
  },
  {
   "server": 36012,
   "family": "Mushroom_fr",
   "power": 285202391
  },
  {
   "server": 36012,
   "family": "noname",
   "power": 281330946
  },
  {
   "server": 36012,
   "family": "Vrac",
   "power": 225907458
  },
  {
   "server": 36012,
   "family": "Frcompagnie",
   "power": 225832178
  },
  {
   "server": 36013,
   "family": "MushroomLvLUP",
   "power": 1541806169
  },
  {
   "server": 36013,
   "family": "Champipoulpes",
   "power": 1018454380
  },
  {
   "server": 36013,
   "family": "Raouuuh🦖",
   "power": 851005552
  },
  {
   "server": 36013,
   "family": "France",
   "power": 421275613
  },
  {
   "server": 36013,
   "family": "RoisDuChaos",
   "power": 421147901
  },
  {
   "server": 36013,
   "family": "BDsClan",
   "power": 392135219
  },
  {
   "server": 36013,
   "family": "MushVoid",
   "power": 364842767
  },
  {
   "server": 36013,
   "family": "Lune",
   "power": 280377000
  },
  {
   "server": 36013,
   "family": "Devilcats",
   "power": 229190901
  },
  {
   "server": 36013,
   "family": "Avalon",
   "power": 222802015
  },
  {
   "server": 36014,
   "family": "EgocentriK",
   "power": 1431770533
  },
  {
   "server": 36014,
   "family": "EgocentriK2",
   "power": 908488659
  },
  {
   "server": 36014,
   "family": "Les_Français",
   "power": 735337417
  },
  {
   "server": 36014,
   "family": "Sweetkorn",
   "power": 657001848
  },
  {
   "server": 36014,
   "family": "WolfGarden",
   "power": 412113888
  },
  {
   "server": 36014,
   "family": "Trentenaires",
   "power": 407888565
  },
  {
   "server": 36014,
   "family": "FrenchChampi",
   "power": 352389613
  },
  {
   "server": 36014,
   "family": "ChampiChampoFR",
   "power": 243925734
  },
  {
   "server": 36014,
   "family": "TheShadow",
   "power": 218652250
  },
  {
   "server": 36014,
   "family": "Akatsuki",
   "power": 174825665
  },
  {
   "server": 36015,
   "family": "Exiled",
   "power": 1592950195
  },
  {
   "server": 36015,
   "family": "MyChampiTeam",
   "power": 1080717104
  },
  {
   "server": 36015,
   "family": "ExiledX",
   "power": 794310039
  },
  {
   "server": 36015,
   "family": "MushWarriors",
   "power": 499414903
  },
  {
   "server": 36015,
   "family": "EzeimFR",
   "power": 477353317
  },
  {
   "server": 36015,
   "family": "TOADCLANS",
   "power": 347878942
  },
  {
   "server": 36015,
   "family": "Noxus",
   "power": 305517389
  },
  {
   "server": 36015,
   "family": "franchmonster",
   "power": 297221106
  },
  {
   "server": 36015,
   "family": "Sinystra",
   "power": 287757709
  },
  {
   "server": 36015,
   "family": "onizuguilde",
   "power": 271860551
  },
  {
   "server": 36016,
   "family": "ChallenGer",
   "power": 1430393599
  },
  {
   "server": 36016,
   "family": "UCHIWA",
   "power": 1104681722
  },
  {
   "server": 36016,
   "family": "ChampiFrench",
   "power": 1070126196
  },
  {
   "server": 36016,
   "family": "FRx468",
   "power": 725305996
  },
  {
   "server": 36016,
   "family": "FrenchArmy",
   "power": 378003786
  },
  {
   "server": 36016,
   "family": "france",
   "power": 351740469
  },
  {
   "server": 36016,
   "family": "Champiclub",
   "power": 296275651
  },
  {
   "server": 36016,
   "family": "chamchampi",
   "power": 294550303
  },
  {
   "server": 36016,
   "family": "BaseDesNeuille",
   "power": 293442168
  },
  {
   "server": 36016,
   "family": "GenesisFr",
   "power": 229155664
  },
  {
   "server": 36017,
   "family": "FR_CLUB",
   "power": 1340861641
  },
  {
   "server": 36017,
   "family": "Champions",
   "power": 1215201441
  },
  {
   "server": 36017,
   "family": "Mushroom_Army",
   "power": 755656973
  },
  {
   "server": 36017,
   "family": "Frenchies",
   "power": 543717805
  },
  {
   "server": 36017,
   "family": "Leveling",
   "power": 497930849
  },
  {
   "server": 36017,
   "family": "FR_DIVISION",
   "power": 494683089
  },
  {
   "server": 36017,
   "family": "FR_Oxygen",
   "power": 452241526
  },
  {
   "server": 36017,
   "family": "Les_Champis",
   "power": 363952344
  },
  {
   "server": 36017,
   "family": "dinguos",
   "power": 265073130
  },
  {
   "server": 36017,
   "family": "Champitié",
   "power": 248974407
  },
  {
   "server": 36018,
   "family": "AiRaliUm",
   "power": 1475667568
  },
  {
   "server": 36018,
   "family": "Spirit",
   "power": 1213606307
  },
  {
   "server": 36018,
   "family": "Kinoko",
   "power": 664425596
  },
  {
   "server": 36018,
   "family": "Baguette",
   "power": 534826338
  },
  {
   "server": 36018,
   "family": "CLAN_FR_TOP1",
   "power": 450185715
  },
  {
   "server": 36018,
   "family": "Akasaki",
   "power": 403764114
  },
  {
   "server": 36018,
   "family": "Mugiwaras",
   "power": 340531969
  },
  {
   "server": 36018,
   "family": "Akatsuki",
   "power": 338341524
  },
  {
   "server": 36018,
   "family": "frenchMonkey",
   "power": 327771965
  },
  {
   "server": 36018,
   "family": "Royal",
   "power": 302178921
  },
  {
   "server": 36019,
   "family": "AKATSUKI",
   "power": 1417827665
  },
  {
   "server": 36019,
   "family": "Champipi",
   "power": 1404832957
  },
  {
   "server": 36019,
   "family": "LaCrypte",
   "power": 1217090060
  },
  {
   "server": 36019,
   "family": "Champa",
   "power": 481324370
  },
  {
   "server": 36019,
   "family": "LaCrème",
   "power": 326637357
  },
  {
   "server": 36019,
   "family": "FranceElite",
   "power": 262340060
  },
  {
   "server": 36019,
   "family": "france",
   "power": 245966360
  },
  {
   "server": 36019,
   "family": "Asuna",
   "power": 222915799
  },
  {
   "server": 36019,
   "family": "French_ActiMel",
   "power": 213772837
  },
  {
   "server": 36019,
   "family": "Psyl●",
   "power": 201422111
  },
  {
   "server": 36020,
   "family": "FranceOmega",
   "power": 1305608432
  },
  {
   "server": 36020,
   "family": "Akatsuki",
   "power": 1226982715
  },
  {
   "server": 36020,
   "family": "LesMycoses",
   "power": 998559806
  },
  {
   "server": 36020,
   "family": "Ehpad",
   "power": 975230165
  },
  {
   "server": 36020,
   "family": "LesMenaces",
   "power": 572579151
  },
  {
   "server": 36020,
   "family": "LaTaverne",
   "power": 252544663
  },
  {
   "server": 36020,
   "family": "金",
   "power": 205975229
  },
  {
   "server": 36020,
   "family": "LesEnragés",
   "power": 201049262
  },
  {
   "server": 36020,
   "family": "wildcats",
   "power": 152694722
  },
  {
   "server": 36020,
   "family": "bjrlesgens",
   "power": 150153212
  },
  {
   "server": 36021,
   "family": "LesFongicides",
   "power": 1531200619
  },
  {
   "server": 36021,
   "family": "Conquérants",
   "power": 1199677224
  },
  {
   "server": 36021,
   "family": "Royal",
   "power": 1107115787
  },
  {
   "server": 36021,
   "family": "KCORP",
   "power": 452645254
  },
  {
   "server": 36021,
   "family": "shadow",
   "power": 380048795
  },
  {
   "server": 36021,
   "family": "France",
   "power": 350288208
  },
  {
   "server": 36021,
   "family": "TeamFrance",
   "power": 287622459
  },
  {
   "server": 36021,
   "family": "GodlyMushroom",
   "power": 254224862
  },
  {
   "server": 36021,
   "family": "lesbelge",
   "power": 236681275
  },
  {
   "server": 36021,
   "family": "Solarium",
   "power": 221016844
  },
  {
   "server": 36022,
   "family": "Lotus",
   "power": 1182065388
  },
  {
   "server": 36022,
   "family": "Nevrosia",
   "power": 953088010
  },
  {
   "server": 36022,
   "family": "MushBreaker",
   "power": 707285374
  },
  {
   "server": 36022,
   "family": "vivelaFrance",
   "power": 307821594
  },
  {
   "server": 36022,
   "family": "Champinoir",
   "power": 293237077
  },
  {
   "server": 36022,
   "family": "AntiRatz",
   "power": 252491053
  },
  {
   "server": 36022,
   "family": "Petitmushroom",
   "power": 224666058
  },
  {
   "server": 36022,
   "family": "musherfucker",
   "power": 127080635
  },
  {
   "server": 36022,
   "family": "légionnaire",
   "power": 125472877
  },
  {
   "server": 36022,
   "family": "P2W",
   "power": 122908465
  },
  {
   "server": 36023,
   "family": "Renaissance",
   "power": 1065529794
  },
  {
   "server": 36023,
   "family": "Hera",
   "power": 914955618
  },
  {
   "server": 36023,
   "family": "Frenchriviera",
   "power": 579101599
  },
  {
   "server": 36023,
   "family": "LesAlcoolHic",
   "power": 444423910
  },
  {
   "server": 36023,
   "family": "Asgard",
   "power": 221138101
  },
  {
   "server": 36023,
   "family": "Rengoku",
   "power": 218286999
  },
  {
   "server": 36023,
   "family": "Arcadia",
   "power": 202103991
  },
  {
   "server": 36023,
   "family": "la_meute",
   "power": 192590854
  },
  {
   "server": 36023,
   "family": "soiréepizza",
   "power": 190138610
  },
  {
   "server": 36023,
   "family": "PeakyBlinders",
   "power": 183236648
  },
  {
   "server": 36024,
   "family": "TEMPESTO",
   "power": 1287633704
  },
  {
   "server": 36024,
   "family": "GénérationY",
   "power": 1069299678
  },
  {
   "server": 36024,
   "family": "FrenchArmy",
   "power": 901470808
  },
  {
   "server": 36024,
   "family": "France2",
   "power": 361613385
  },
  {
   "server": 36024,
   "family": "freedom",
   "power": 345808454
  },
  {
   "server": 36024,
   "family": "fairytail",
   "power": 311132798
  },
  {
   "server": 36024,
   "family": "Baguette",
   "power": 244454399
  },
  {
   "server": 36024,
   "family": "Tcorp",
   "power": 174035595
  },
  {
   "server": 36024,
   "family": "Northguild",
   "power": 155479855
  },
  {
   "server": 36024,
   "family": "DeadMan",
   "power": 152754983
  },
  {
   "server": 36025,
   "family": "FR1",
   "power": 1356927062
  },
  {
   "server": 36025,
   "family": "Shujin",
   "power": 1277509944
  },
  {
   "server": 36025,
   "family": "ZinZinks",
   "power": 539076623
  },
  {
   "server": 36025,
   "family": "CANARD",
   "power": 463107168
  },
  {
   "server": 36025,
   "family": "FR3",
   "power": 333029170
  },
  {
   "server": 36025,
   "family": "Zatral",
   "power": 327415257
  },
  {
   "server": 36025,
   "family": "phoenixfr",
   "power": 307461184
  },
  {
   "server": 36025,
   "family": "deglingo85",
   "power": 256554486
  },
  {
   "server": 36025,
   "family": "Champipotes",
   "power": 245393266
  },
  {
   "server": 36025,
   "family": "LafactionBZH",
   "power": 210767932
  },
  {
   "server": 36026,
   "family": "Universal",
   "power": 1380109146
  },
  {
   "server": 36026,
   "family": "Legendary",
   "power": 1293623978
  },
  {
   "server": 36026,
   "family": "MithrandirFR",
   "power": 914522949
  },
  {
   "server": 36026,
   "family": "Phantasy",
   "power": 391429012
  },
  {
   "server": 36026,
   "family": "FireFR",
   "power": 374388653
  },
  {
   "server": 36026,
   "family": "LeRoyaume",
   "power": 310266967
  },
  {
   "server": 36026,
   "family": "Léviathan",
   "power": 268508411
  },
  {
   "server": 36026,
   "family": "Trinity",
   "power": 253616682
  },
  {
   "server": 36026,
   "family": "TheFrenchArmy",
   "power": 248619506
  },
  {
   "server": 36026,
   "family": "FrenchLigue",
   "power": 248409288
  },
  {
   "server": 36027,
   "family": "Eudaimonia",
   "power": 1231385143
  },
  {
   "server": 36027,
   "family": "Antisocial",
   "power": 1180267766
  },
  {
   "server": 36027,
   "family": "Aeternum",
   "power": 452992608
  },
  {
   "server": 36027,
   "family": "Les_Goats",
   "power": 339026476
  },
  {
   "server": 36027,
   "family": "TheFrenchGuild",
   "power": 252721932
  },
  {
   "server": 36027,
   "family": "Voff_FR",
   "power": 231742818
  },
  {
   "server": 36027,
   "family": "Clan_Chill_FR",
   "power": 218488269
  },
  {
   "server": 36027,
   "family": "ClanDesVieux30",
   "power": 209347522
  },
  {
   "server": 36027,
   "family": "french_legions",
   "power": 209172566
  },
  {
   "server": 36027,
   "family": "leclanfr",
   "power": 205460636
  },
  {
   "server": 36028,
   "family": "DOLA",
   "power": 1180331354
  },
  {
   "server": 36028,
   "family": "Rt_France",
   "power": 991551950
  },
  {
   "server": 36028,
   "family": "FrenchPower",
   "power": 918023363
  },
  {
   "server": 36028,
   "family": "first",
   "power": 385195768
  },
  {
   "server": 36028,
   "family": "Les_Gameurs",
   "power": 374990900
  },
  {
   "server": 36028,
   "family": "RoyalMushroom",
   "power": 333084960
  },
  {
   "server": 36028,
   "family": "Goldenteache",
   "power": 304462682
  },
  {
   "server": 36028,
   "family": "champignons",
   "power": 295933112
  },
  {
   "server": 36028,
   "family": "Fr",
   "power": 229754033
  },
  {
   "server": 36028,
   "family": "Francewarrior",
   "power": 214818774
  },
  {
   "server": 36029,
   "family": "Legionary",
   "power": 1305077059
  },
  {
   "server": 36029,
   "family": "LaRenDesChoux",
   "power": 921046005
  },
  {
   "server": 36029,
   "family": "CocoJojo🤠",
   "power": 797898111
  },
  {
   "server": 36029,
   "family": "Champignons",
   "power": 416830752
  },
  {
   "server": 36029,
   "family": "Wonkru",
   "power": 319530209
  },
  {
   "server": 36029,
   "family": "VoleursDeChoux",
   "power": 243687461
  },
  {
   "server": 36029,
   "family": "Prout’Land",
   "power": 221830717
  },
  {
   "server": 36029,
   "family": "French",
   "power": 205257924
  },
  {
   "server": 36029,
   "family": "Ydra",
   "power": 192485827
  },
  {
   "server": 36029,
   "family": "FRANÇAIS",
   "power": 180180744
  },
  {
   "server": 36030,
   "family": "Elysium",
   "power": 1423265980
  },
  {
   "server": 36030,
   "family": "Mortuim",
   "power": 1021700341
  },
  {
   "server": 36030,
   "family": "OKLM",
   "power": 685760250
  },
  {
   "server": 36030,
   "family": "FRANCE",
   "power": 450041793
  },
  {
   "server": 36030,
   "family": "DarksideFR",
   "power": 311393838
  },
  {
   "server": 36030,
   "family": "LapinHood",
   "power": 291273352
  },
  {
   "server": 36030,
   "family": "Byakugan",
   "power": 266368356
  },
  {
   "server": 36030,
   "family": "BaguetteArmy",
   "power": 226709725
  },
  {
   "server": 36030,
   "family": "morty",
   "power": 178825112
  },
  {
   "server": 36030,
   "family": "uwu",
   "power": 158817535
  },
  {
   "server": 36031,
   "family": "Mercenaires",
   "power": 1446493745
  },
  {
   "server": 36031,
   "family": "VALHALLA",
   "power": 720678986
  },
  {
   "server": 36031,
   "family": "LaGrotte",
   "power": 614767791
  },
  {
   "server": 36031,
   "family": "Les_Français",
   "power": 585656675
  },
  {
   "server": 36031,
   "family": "GODLIKE",
   "power": 421028309
  },
  {
   "server": 36031,
   "family": "tempest",
   "power": 320675714
  },
  {
   "server": 36031,
   "family": "Aube",
   "power": 294793561
  },
  {
   "server": 36031,
   "family": "France",
   "power": 267303585
  },
  {
   "server": 36031,
   "family": "Runecelte",
   "power": 204946137
  },
  {
   "server": 36031,
   "family": "bistouquette",
   "power": 132671107
  },
  {
   "server": 36032,
   "family": "TheFirst",
   "power": 1380274386
  },
  {
   "server": 36032,
   "family": "๛Mushroom𓆃",
   "power": 1220584146
  },
  {
   "server": 36032,
   "family": "TeamFr",
   "power": 592510268
  },
  {
   "server": 36032,
   "family": "ToadFr",
   "power": 515117239
  },
  {
   "server": 36032,
   "family": "FunGuy",
   "power": 345920027
  },
  {
   "server": 36032,
   "family": "Lesphœnixnoirs",
   "power": 305430160
  },
  {
   "server": 36032,
   "family": "ignominie",
   "power": 257429973
  },
  {
   "server": 36032,
   "family": "L’EMPIRE",
   "power": 227301553
  },
  {
   "server": 36032,
   "family": "FairyTail",
   "power": 193721999
  },
  {
   "server": 36032,
   "family": "Carpe_Diem",
   "power": 128791377
  },
  {
   "server": 36033,
   "family": "NightRaid",
   "power": 1383515457
  },
  {
   "server": 36033,
   "family": "TeamChampote",
   "power": 1120285578
  },
  {
   "server": 36033,
   "family": "MushroomFR",
   "power": 686067423
  },
  {
   "server": 36033,
   "family": "ClanDeGrand",
   "power": 411747053
  },
  {
   "server": 36033,
   "family": "FrenchOnly",
   "power": 351094421
  },
  {
   "server": 36033,
   "family": "FallenAngels",
   "power": 305906971
  },
  {
   "server": 36033,
   "family": "LesZigotos",
   "power": 239715700
  },
  {
   "server": 36033,
   "family": "tsuku",
   "power": 216059056
  },
  {
   "server": 36033,
   "family": "frenchpredator",
   "power": 191480558
  },
  {
   "server": 36033,
   "family": "champignon",
   "power": 146594420
  },
  {
   "server": 36034,
   "family": "Kamuî",
   "power": 1424003418
  },
  {
   "server": 36034,
   "family": "Mushriors",
   "power": 1294569089
  },
  {
   "server": 36034,
   "family": "Fungi",
   "power": 1242846040
  },
  {
   "server": 36034,
   "family": "ELITE",
   "power": 459227376
  },
  {
   "server": 36034,
   "family": "FTC_FR",
   "power": 451356259
  },
  {
   "server": 36034,
   "family": "Tartare",
   "power": 365813693
  },
  {
   "server": 36034,
   "family": "LaToadFamily",
   "power": 349801944
  },
  {
   "server": 36034,
   "family": "CallOfChampi",
   "power": 307508842
  },
  {
   "server": 36034,
   "family": "Atena",
   "power": 293333878
  },
  {
   "server": 36034,
   "family": "ChampigoatFR",
   "power": 244583429
  },
  {
   "server": 36035,
   "family": "Amnesya",
   "power": 1559672082
  },
  {
   "server": 36035,
   "family": "Dynastie",
   "power": 968633908
  },
  {
   "server": 36035,
   "family": "Obscure",
   "power": 815511235
  },
  {
   "server": 36035,
   "family": "ProjectSquad",
   "power": 706657679
  },
  {
   "server": 36035,
   "family": "Akatsuki",
   "power": 483016450
  },
  {
   "server": 36035,
   "family": "LaSaintePizza",
   "power": 360224642
  },
  {
   "server": 36035,
   "family": "MushFR",
   "power": 353160058
  },
  {
   "server": 36035,
   "family": "LeChalet",
   "power": 350165779
  },
  {
   "server": 36035,
   "family": "shroomjustice",
   "power": 232823064
  },
  {
   "server": 36035,
   "family": "MCHD",
   "power": 186355760
  },
  {
   "server": 36036,
   "family": "LightInHole",
   "power": 1311836864
  },
  {
   "server": 36036,
   "family": "France",
   "power": 1088363242
  },
  {
   "server": 36036,
   "family": "rip",
   "power": 655754511
  },
  {
   "server": 36036,
   "family": "Kaamelott",
   "power": 401278761
  },
  {
   "server": 36036,
   "family": "Petites_fleurs",
   "power": 375308051
  },
  {
   "server": 36036,
   "family": "jeux_cool",
   "power": 303836505
  },
  {
   "server": 36036,
   "family": "OverDiablo",
   "power": 293864046
  },
  {
   "server": 36036,
   "family": "Shadow",
   "power": 247943637
  },
  {
   "server": 36036,
   "family": "BelgiumTeam",
   "power": 228272616
  },
  {
   "server": 36036,
   "family": "Neuille",
   "power": 220310201
  },
  {
   "server": 36037,
   "family": "HallOfLegends",
   "power": 1530823883
  },
  {
   "server": 36037,
   "family": "PiratesDeMars2",
   "power": 1373364414
  },
  {
   "server": 36037,
   "family": "PiratesDeMars",
   "power": 1351285249
  },
  {
   "server": 36037,
   "family": "PiratesDeMars4",
   "power": 1199049910
  },
  {
   "server": 36037,
   "family": "HallOfLegends2",
   "power": 1177064599
  },
  {
   "server": 36037,
   "family": "LeZoo",
   "power": 1013810687
  },
  {
   "server": 36037,
   "family": "PiratesDeMars3",
   "power": 837841690
  },
  {
   "server": 36037,
   "family": "animeteam",
   "power": 688650486
  },
  {
   "server": 36037,
   "family": "PiratesDeMars7",
   "power": 627349213
  },
  {
   "server": 36037,
   "family": "PiratesDeMars8",
   "power": 572905926
  },
  {
   "server": 36038,
   "family": "Empire",
   "power": 1443325858
  },
  {
   "server": 36038,
   "family": "Hydra",
   "power": 799790476
  },
  {
   "server": 36038,
   "family": "chillax",
   "power": 598795790
  },
  {
   "server": 36038,
   "family": "SoloLeveling",
   "power": 451612657
  },
  {
   "server": 36038,
   "family": "Frenchcore",
   "power": 301919718
  },
  {
   "server": 36038,
   "family": "Tchamp",
   "power": 271721580
  },
  {
   "server": 36038,
   "family": "lafrance",
   "power": 200838485
  },
  {
   "server": 36038,
   "family": "Sunridas",
   "power": 194120679
  },
  {
   "server": 36038,
   "family": "PTDQ",
   "power": 189089626
  },
  {
   "server": 36038,
   "family": "Toad",
   "power": 163855867
  },
  {
   "server": 36039,
   "family": "FORESTIA",
   "power": 1453228929
  },
  {
   "server": 36039,
   "family": "STSO",
   "power": 1054601298
  },
  {
   "server": 36039,
   "family": "Champiland",
   "power": 961969271
  },
  {
   "server": 36039,
   "family": "PARCIMONIA",
   "power": 827993871
  },
  {
   "server": 36039,
   "family": "AngeDéchu",
   "power": 317467556
  },
  {
   "server": 36039,
   "family": "L’oroJackson",
   "power": 239276252
  },
  {
   "server": 36039,
   "family": "Project",
   "power": 200429430
  },
  {
   "server": 36039,
   "family": "YugiTeam",
   "power": 189722551
  },
  {
   "server": 36039,
   "family": "TaNCteam",
   "power": 168189283
  },
  {
   "server": 36039,
   "family": "MIAMIAM",
   "power": 159217622
  },
  {
   "server": 36040,
   "family": "Tempest",
   "power": 1288028439
  },
  {
   "server": 36040,
   "family": "Beescuiterie",
   "power": 1104913852
  },
  {
   "server": 36040,
   "family": "HADES",
   "power": 848094916
  },
  {
   "server": 36040,
   "family": "SoulLessSpirit",
   "power": 847323786
  },
  {
   "server": 36040,
   "family": "JambonBeurre",
   "power": 578525879
  },
  {
   "server": 36040,
   "family": "Zeus",
   "power": 294074189
  },
  {
   "server": 36040,
   "family": "Omega",
   "power": 233474679
  },
  {
   "server": 36040,
   "family": "SoloLeveling",
   "power": 218168297
  },
  {
   "server": 36040,
   "family": "ABYSS",
   "power": 180777380
  },
  {
   "server": 36040,
   "family": "zeubi",
   "power": 176288103
  },
  {
   "server": 36041,
   "family": "Némésis",
   "power": 1460682315
  },
  {
   "server": 36041,
   "family": "NémésisCorp",
   "power": 1049366520
  },
  {
   "server": 36041,
   "family": "NeverGiveUp",
   "power": 1010203205
  },
  {
   "server": 36041,
   "family": "Phénix",
   "power": 618015489
  },
  {
   "server": 36041,
   "family": "NeverGiveUp3",
   "power": 516762242
  },
  {
   "server": 36041,
   "family": "Horizon",
   "power": 473805419
  },
  {
   "server": 36041,
   "family": "NeverGiveUp2",
   "power": 397763909
  },
  {
   "server": 36041,
   "family": "Trinity",
   "power": 383498379
  },
  {
   "server": 36041,
   "family": "FR",
   "power": 320653978
  },
  {
   "server": 36041,
   "family": "pupuce",
   "power": 261155720
  },
  {
   "server": 36042,
   "family": "Reaper",
   "power": 1475297260
  },
  {
   "server": 36042,
   "family": "Pokéflex",
   "power": 1288810241
  },
  {
   "server": 36042,
   "family": "Cendawan",
   "power": 1016067053
  },
  {
   "server": 36042,
   "family": "Winterfell",
   "power": 505620309
  },
  {
   "server": 36042,
   "family": "Walpurgis_FR",
   "power": 435423486
  },
  {
   "server": 36042,
   "family": "Saturne",
   "power": 328118893
  },
  {
   "server": 36042,
   "family": "premierfr",
   "power": 292213150
  },
  {
   "server": 36042,
   "family": "phoenixfr",
   "power": 279650254
  },
  {
   "server": 36042,
   "family": "ClanFR",
   "power": 261478217
  },
  {
   "server": 36042,
   "family": "Ūtopia",
   "power": 207187811
  },
  {
   "server": 36043,
   "family": "Olympe",
   "power": 1311461200
  },
  {
   "server": 36043,
   "family": "Nebula",
   "power": 1172579226
  },
  {
   "server": 36043,
   "family": "ToadArmy",
   "power": 964712060
  },
  {
   "server": 36043,
   "family": "FlopSquad",
   "power": 407970810
  },
  {
   "server": 36043,
   "family": "BadGones",
   "power": 351604157
  },
  {
   "server": 36043,
   "family": "GuezTapo",
   "power": 320652968
  },
  {
   "server": 36043,
   "family": "ChampiGnons",
   "power": 310730441
  },
  {
   "server": 36043,
   "family": "FRANCE",
   "power": 229935020
  },
  {
   "server": 36043,
   "family": "Champidolf",
   "power": 229266771
  },
  {
   "server": 36043,
   "family": "DarckFox",
   "power": 221478007
  },
  {
   "server": 36044,
   "family": "TakeDown",
   "power": 1161642943
  },
  {
   "server": 36044,
   "family": "Drokanis",
   "power": 1065681386
  },
  {
   "server": 36044,
   "family": "Meteora",
   "power": 564615965
  },
  {
   "server": 36044,
   "family": "InSomnia",
   "power": 526716475
  },
  {
   "server": 36044,
   "family": "Dragonniers",
   "power": 416494606
  },
  {
   "server": 36044,
   "family": "Ephedia",
   "power": 407337905
  },
  {
   "server": 36044,
   "family": "Valhalla",
   "power": 342353789
  },
  {
   "server": 36044,
   "family": "Anonymous",
   "power": 339616020
  },
  {
   "server": 36044,
   "family": "FRANCE",
   "power": 335351851
  },
  {
   "server": 36044,
   "family": "Noopy",
   "power": 299664432
  },
  {
   "server": 36045,
   "family": "Midgard",
   "power": 1389856179
  },
  {
   "server": 36045,
   "family": "TheEbonyBlade",
   "power": 662369081
  },
  {
   "server": 36045,
   "family": "2jz",
   "power": 415545772
  },
  {
   "server": 36045,
   "family": "crocclanfr",
   "power": 412594332
  },
  {
   "server": 36045,
   "family": "Olympe",
   "power": 318545960
  },
  {
   "server": 36045,
   "family": "Shadow",
   "power": 310355341
  },
  {
   "server": 36045,
   "family": "Champenois",
   "power": 294904794
  },
  {
   "server": 36045,
   "family": "HeavenQuest",
   "power": 272524291
  },
  {
   "server": 36045,
   "family": "Osiris",
   "power": 261428869
  },
  {
   "server": 36045,
   "family": "LesMenaces",
   "power": 218565265
  },
  {
   "server": 36046,
   "family": "Nuit",
   "power": 1439501923
  },
  {
   "server": 36046,
   "family": "The_Legends",
   "power": 1168230942
  },
  {
   "server": 36046,
   "family": "FRANCE_TRYHARD",
   "power": 672387518
  },
  {
   "server": 36046,
   "family": "DESTINY",
   "power": 410237967
  },
  {
   "server": 36046,
   "family": "Valhalla",
   "power": 395146133
  },
  {
   "server": 36046,
   "family": "xXrevoXx",
   "power": 307215774
  },
  {
   "server": 36046,
   "family": "ChampiMeuh",
   "power": 286037150
  },
  {
   "server": 36046,
   "family": "Akatsuki",
   "power": 279417148
  },
  {
   "server": 36046,
   "family": "FR",
   "power": 262541009
  },
  {
   "server": 36046,
   "family": "Wktm",
   "power": 247397157
  },
  {
   "server": 36047,
   "family": "Akezya",
   "power": 1314652748
  },
  {
   "server": 36047,
   "family": "ChampiFrance",
   "power": 1100959574
  },
  {
   "server": 36047,
   "family": "PateAPouf",
   "power": 865513914
  },
  {
   "server": 36047,
   "family": "France",
   "power": 457144930
  },
  {
   "server": 36047,
   "family": "FrenchFamily",
   "power": 436536696
  },
  {
   "server": 36047,
   "family": "L’Akatsuki",
   "power": 434717181
  },
  {
   "server": 36047,
   "family": "Py79Zoo",
   "power": 331541570
  },
  {
   "server": 36047,
   "family": "ouaisouais",
   "power": 271194185
  },
  {
   "server": 36047,
   "family": "LesPopsix",
   "power": 270357741
  },
  {
   "server": 36047,
   "family": "TheFrenchTeam",
   "power": 267934679
  },
  {
   "server": 36048,
   "family": "LeagueOfMush",
   "power": 1218822072
  },
  {
   "server": 36048,
   "family": "RevencyaFR",
   "power": 1174545585
  },
  {
   "server": 36048,
   "family": "RevencyaFR2",
   "power": 738051762
  },
  {
   "server": 36048,
   "family": "BlueRain",
   "power": 564346103
  },
  {
   "server": 36048,
   "family": "LegendOmega",
   "power": 521457393
  },
  {
   "server": 36048,
   "family": "ChampisFR",
   "power": 440181664
  },
  {
   "server": 36048,
   "family": "DeusChampi",
   "power": 418974383
  },
  {
   "server": 36048,
   "family": "girolle",
   "power": 346971676
  },
  {
   "server": 36048,
   "family": "Bestfrclan",
   "power": 313647792
  },
  {
   "server": 36048,
   "family": "FRspore",
   "power": 250860570
  },
  {
   "server": 36049,
   "family": "Rédemption",
   "power": 1269301523
  },
  {
   "server": 36049,
   "family": "Eclipse",
   "power": 988068480
  },
  {
   "server": 36049,
   "family": "Genesis",
   "power": 973992711
  },
  {
   "server": 36049,
   "family": "LaHorde_FR",
   "power": 484295226
  },
  {
   "server": 36049,
   "family": "FRANCE",
   "power": 403793232
  },
  {
   "server": 36049,
   "family": "LesCreusoisFR",
   "power": 401434933
  },
  {
   "server": 36049,
   "family": "Unions",
   "power": 313880317
  },
  {
   "server": 36049,
   "family": "LaSimca1000",
   "power": 310786015
  },
  {
   "server": 36049,
   "family": "BubuleTeam",
   "power": 273531225
  },
  {
   "server": 36049,
   "family": "NOLIMIT",
   "power": 247817765
  },
  {
   "server": 36050,
   "family": "Mugiwara",
   "power": 1415113847
  },
  {
   "server": 36050,
   "family": "FrenchRevo",
   "power": 1284901201
  },
  {
   "server": 36050,
   "family": "Sinister",
   "power": 581921685
  },
  {
   "server": 36050,
   "family": "TeamFrance",
   "power": 298966577
  },
  {
   "server": 36050,
   "family": "Moonlight",
   "power": 259911360
  },
  {
   "server": 36050,
   "family": "Synopsis",
   "power": 234567772
  },
  {
   "server": 36050,
   "family": "Overlord",
   "power": 231841399
  },
  {
   "server": 36050,
   "family": "Frōmage",
   "power": 172710866
  },
  {
   "server": 36050,
   "family": "LEROYAUME",
   "power": 166505914
  },
  {
   "server": 36050,
   "family": "FrenchEvo",
   "power": 161352157
  },
  {
   "server": 36051,
   "family": "FrenchReborn",
   "power": 1176997998
  },
  {
   "server": 36051,
   "family": "Eclipse_FR",
   "power": 1165283758
  },
  {
   "server": 36051,
   "family": "Fr_Universe",
   "power": 1090918702
  },
  {
   "server": 36051,
   "family": "Champichou",
   "power": 504352614
  },
  {
   "server": 36051,
   "family": "Azap",
   "power": 312929211
  },
  {
   "server": 36051,
   "family": "Shadow",
   "power": 286012740
  },
  {
   "server": 36051,
   "family": "IceDragon",
   "power": 266949274
  },
  {
   "server": 36051,
   "family": "Vallhala",
   "power": 257966329
  },
  {
   "server": 36051,
   "family": "UNLESS_V",
   "power": 225571778
  },
  {
   "server": 36051,
   "family": "Eagles",
   "power": 221544723
  },
  {
   "server": 36052,
   "family": "BornToWin",
   "power": 1421359986
  },
  {
   "server": 36052,
   "family": "TeamFR",
   "power": 1369740380
  },
  {
   "server": 36052,
   "family": "BADCOMPANY",
   "power": 1046653183
  },
  {
   "server": 36052,
   "family": "BornToWin2",
   "power": 729307182
  },
  {
   "server": 36052,
   "family": "Fr",
   "power": 534519230
  },
  {
   "server": 36052,
   "family": "FrenchReapers",
   "power": 496149608
  },
  {
   "server": 36052,
   "family": "ArbreSacré",
   "power": 281616704
  },
  {
   "server": 36052,
   "family": "Kavaress",
   "power": 276056648
  },
  {
   "server": 36052,
   "family": "Arkadia",
   "power": 242149598
  },
  {
   "server": 36052,
   "family": "WarriorOfSpart",
   "power": 238824234
  },
  {
   "server": 36053,
   "family": "LionHeart",
   "power": 1427220883
  },
  {
   "server": 36053,
   "family": "Nova",
   "power": 1159289295
  },
  {
   "server": 36053,
   "family": "BXW",
   "power": 892139417
  },
  {
   "server": 36053,
   "family": "Bobsleigh",
   "power": 362505734
  },
  {
   "server": 36053,
   "family": "Neuillemalice",
   "power": 360094622
  },
  {
   "server": 36053,
   "family": "Moonwhite",
   "power": 326539318
  },
  {
   "server": 36053,
   "family": "SheyArchy",
   "power": 318224705
  },
  {
   "server": 36053,
   "family": "HIPPOPOTEAM",
   "power": 310571672
  },
  {
   "server": 36053,
   "family": "PouetPouet",
   "power": 280917898
  },
  {
   "server": 36053,
   "family": "France",
   "power": 273512050
  },
  {
   "server": 36054,
   "family": "MushEvils",
   "power": 1443827198
  },
  {
   "server": 36054,
   "family": "LumberJack",
   "power": 1256671878
  },
  {
   "server": 36054,
   "family": "Yonkos",
   "power": 721556943
  },
  {
   "server": 36054,
   "family": "LesMajeurs",
   "power": 372747691
  },
  {
   "server": 36054,
   "family": "Yolo",
   "power": 318069348
  },
  {
   "server": 36054,
   "family": "Phénix",
   "power": 307505302
  },
  {
   "server": 36054,
   "family": "Eternia",
   "power": 213516118
  },
  {
   "server": 36054,
   "family": "zepocacabidou",
   "power": 206465424
  },
  {
   "server": 36054,
   "family": "twich_boss4567",
   "power": 182349595
  },
  {
   "server": 36054,
   "family": "Champidragon",
   "power": 165661907
  },
  {
   "server": 36055,
   "family": "Liones",
   "power": 1591561113
  },
  {
   "server": 36055,
   "family": "LionesAcademy",
   "power": 1054251897
  },
  {
   "server": 36055,
   "family": "Amaterasu",
   "power": 629405847
  },
  {
   "server": 36055,
   "family": "LesGirolles",
   "power": 455211733
  },
  {
   "server": 36055,
   "family": "CasualFamily",
   "power": 348257084
  },
  {
   "server": 36055,
   "family": "french",
   "power": 256504946
  },
  {
   "server": 36055,
   "family": "onob",
   "power": 246410831
  },
  {
   "server": 36055,
   "family": "Shadow",
   "power": 241739653
  },
  {
   "server": 36055,
   "family": "NEGROLAND",
   "power": 235379328
  },
  {
   "server": 36055,
   "family": "Granola",
   "power": 214375302
  },
  {
   "server": 36056,
   "family": "FranceBZH",
   "power": 1504324806
  },
  {
   "server": 36056,
   "family": "Kinoko",
   "power": 1232595440
  },
  {
   "server": 36056,
   "family": "Kïnoko",
   "power": 741982128
  },
  {
   "server": 36056,
   "family": "LegendarySmurf",
   "power": 401649944
  },
  {
   "server": 36056,
   "family": "MagicTwo",
   "power": 333041924
  },
  {
   "server": 36056,
   "family": "Champifamilly",
   "power": 280045677
  },
  {
   "server": 36056,
   "family": "therules1",
   "power": 211656702
  },
  {
   "server": 36056,
   "family": "AfterAll",
   "power": 206698277
  },
  {
   "server": 36056,
   "family": "NeedPull",
   "power": 202355865
  },
  {
   "server": 36056,
   "family": "Champiland",
   "power": 192123754
  },
  {
   "server": 36057,
   "family": "SHÌNE",
   "power": 1266291399
  },
  {
   "server": 36057,
   "family": "LaTeamChill",
   "power": 1032525654
  },
  {
   "server": 36057,
   "family": "LECLANRANDOM",
   "power": 622743040
  },
  {
   "server": 36057,
   "family": "Hallucinogènes",
   "power": 601769469
  },
  {
   "server": 36057,
   "family": "France",
   "power": 575255900
  },
  {
   "server": 36057,
   "family": "FRANCE",
   "power": 445925703
  },
  {
   "server": 36057,
   "family": "LaFrance",
   "power": 368387055
  },
  {
   "server": 36057,
   "family": "ChampiFrancais",
   "power": 349822902
  },
  {
   "server": 36057,
   "family": "Tempest",
   "power": 349269884
  },
  {
   "server": 36057,
   "family": "Frenchfirst",
   "power": 305557260
  },
  {
   "server": 36058,
   "family": "ATLAS",
   "power": 1264235440
  },
  {
   "server": 36058,
   "family": "NoMercy",
   "power": 1253676849
  },
  {
   "server": 36058,
   "family": "0mbra",
   "power": 1025624243
  },
  {
   "server": 36058,
   "family": "HÉRACLÈS",
   "power": 647270376
  },
  {
   "server": 36058,
   "family": "TeamFrench",
   "power": 583952852
  },
  {
   "server": 36058,
   "family": "HassoulII",
   "power": 433766150
  },
  {
   "server": 36058,
   "family": "JeSaisPas",
   "power": 394700301
  },
  {
   "server": 36058,
   "family": "Ahjin",
   "power": 390354221
  },
  {
   "server": 36058,
   "family": "MushVroum",
   "power": 373410471
  },
  {
   "server": 36058,
   "family": "newgate",
   "power": 373155940
  },
  {
   "server": 36059,
   "family": "Phénomène",
   "power": 1438282359
  },
  {
   "server": 36059,
   "family": "Frelite",
   "power": 1100376433
  },
  {
   "server": 36059,
   "family": "Aincrad",
   "power": 975780174
  },
  {
   "server": 36059,
   "family": "TeamChampi",
   "power": 678882726
  },
  {
   "server": 36059,
   "family": "CarpeDiem",
   "power": 450508671
  },
  {
   "server": 36059,
   "family": "France",
   "power": 384952101
  },
  {
   "server": 36059,
   "family": "BlackWolf",
   "power": 353921786
  },
  {
   "server": 36059,
   "family": "LeLocal",
   "power": 268520133
  },
  {
   "server": 36059,
   "family": "LeagueOfToads",
   "power": 264372603
  },
  {
   "server": 36059,
   "family": "HeinekenFR",
   "power": 264227829
  },
  {
   "server": 36060,
   "family": "AzElite",
   "power": 1491453303
  },
  {
   "server": 36060,
   "family": "DarkEternya",
   "power": 1324336808
  },
  {
   "server": 36060,
   "family": "AzElite2",
   "power": 992868092
  },
  {
   "server": 36060,
   "family": "667Ekip",
   "power": 785882162
  },
  {
   "server": 36060,
   "family": "LightEternya",
   "power": 709248675
  },
  {
   "server": 36060,
   "family": "Death",
   "power": 541765516
  },
  {
   "server": 36060,
   "family": "ClubSandwich",
   "power": 524969372
  },
  {
   "server": 36060,
   "family": "Bricodepot",
   "power": 454042567
  },
  {
   "server": 36060,
   "family": "Symphonia",
   "power": 394790827
  },
  {
   "server": 36060,
   "family": "CHAMPIGANG",
   "power": 359219202
  },
  {
   "server": 36061,
   "family": "LeagueOfMush",
   "power": 1469684737
  },
  {
   "server": 36061,
   "family": "FungiSyndicate",
   "power": 1112731607
  },
  {
   "server": 36061,
   "family": "Les_Mugiwara",
   "power": 1008457107
  },
  {
   "server": 36061,
   "family": "lafireforce",
   "power": 811101147
  },
  {
   "server": 36061,
   "family": "FunkyFungi",
   "power": 765049286
  },
  {
   "server": 36061,
   "family": "TerraTerre",
   "power": 732473396
  },
  {
   "server": 36061,
   "family": "FrenchMonster",
   "power": 522171496
  },
  {
   "server": 36061,
   "family": "LakersWorld",
   "power": 457378216
  },
  {
   "server": 36061,
   "family": "AZERTY_Clan",
   "power": 395921589
  },
  {
   "server": 36061,
   "family": "Caricrew",
   "power": 374458452
  },
  {
   "server": 36062,
   "family": "Apocalypse",
   "power": 1287726691
  },
  {
   "server": 36062,
   "family": "Pewee",
   "power": 1227960205
  },
  {
   "server": 36062,
   "family": "GoodVibes",
   "power": 1019423152
  },
  {
   "server": 36062,
   "family": "risingstars",
   "power": 838539415
  },
  {
   "server": 36062,
   "family": "Sunny",
   "power": 730161297
  },
  {
   "server": 36062,
   "family": "ruination",
   "power": 487716337
  },
  {
   "server": 36062,
   "family": "OnePieceFR",
   "power": 385134089
  },
  {
   "server": 36062,
   "family": "LaConfrérie",
   "power": 384743077
  },
  {
   "server": 36062,
   "family": "URSSAF",
   "power": 370473063
  },
  {
   "server": 36062,
   "family": "BZH",
   "power": 351870003
  },
  {
   "server": 36063,
   "family": "BornToWin",
   "power": 1447111453
  },
  {
   "server": 36063,
   "family": "Astralead",
   "power": 1128768313
  },
  {
   "server": 36063,
   "family": "TeamFr",
   "power": 918012607
  },
  {
   "server": 36063,
   "family": "LegendNk",
   "power": 532546366
  },
  {
   "server": 36063,
   "family": "Hunters",
   "power": 515671330
  },
  {
   "server": 36063,
   "family": "nouveau",
   "power": 420837275
  },
  {
   "server": 36063,
   "family": "GANGSMUSHS1FR",
   "power": 349229674
  },
  {
   "server": 36063,
   "family": "Lotus",
   "power": 336864130
  },
  {
   "server": 36063,
   "family": "Nutella",
   "power": 273160983
  },
  {
   "server": 36063,
   "family": "mars37",
   "power": 263431878
  },
  {
   "server": 36064,
   "family": "Panthéon",
   "power": 1483047172
  },
  {
   "server": 36064,
   "family": "HR",
   "power": 1088956453
  },
  {
   "server": 36064,
   "family": "ChampiFR",
   "power": 908533197
  },
  {
   "server": 36064,
   "family": "PanthéonAC",
   "power": 892594204
  },
  {
   "server": 36064,
   "family": "HellFire",
   "power": 566520520
  },
  {
   "server": 36064,
   "family": "BladeFR",
   "power": 483984352
  },
  {
   "server": 36064,
   "family": "Maxgi_",
   "power": 412308096
  },
  {
   "server": 36064,
   "family": "VikingFR",
   "power": 380640589
  },
  {
   "server": 36064,
   "family": "FR_Chill",
   "power": 369171604
  },
  {
   "server": 36064,
   "family": "Mycélium",
   "power": 358483159
  },
  {
   "server": 36065,
   "family": "NightFall",
   "power": 1399127547
  },
  {
   "server": 36065,
   "family": "Champix666",
   "power": 1321076185
  },
  {
   "server": 36065,
   "family": "Phœnix",
   "power": 1036685076
  },
  {
   "server": 36065,
   "family": "RESURRECTION",
   "power": 757630940
  },
  {
   "server": 36065,
   "family": "divisionfr",
   "power": 506647334
  },
  {
   "server": 36065,
   "family": "ShinyHunters",
   "power": 480052724
  },
  {
   "server": 36065,
   "family": "Français",
   "power": 382214915
  },
  {
   "server": 36065,
   "family": "FranceClan",
   "power": 372616679
  },
  {
   "server": 36065,
   "family": "les_Carpo",
   "power": 364350134
  },
  {
   "server": 36065,
   "family": "BusterCall",
   "power": 353238441
  },
  {
   "server": 36066,
   "family": "Pompélup",
   "power": 1253846524
  },
  {
   "server": 36066,
   "family": "Annihilation",
   "power": 1158170283
  },
  {
   "server": 36066,
   "family": "azerquio",
   "power": 983497315
  },
  {
   "server": 36066,
   "family": "Amanite",
   "power": 913788488
  },
  {
   "server": 36066,
   "family": "LesWeebs",
   "power": 378295063
  },
  {
   "server": 36066,
   "family": "France",
   "power": 373050338
  },
  {
   "server": 36066,
   "family": "crystal",
   "power": 360409348
  },
  {
   "server": 36066,
   "family": "EVETrials",
   "power": 351600085
  },
  {
   "server": 36066,
   "family": "LesVieux",
   "power": 319037553
  },
  {
   "server": 36066,
   "family": "SayKom",
   "power": 308553661
  },
  {
   "server": 36067,
   "family": "LesTruffesFR",
   "power": 1396293132
  },
  {
   "server": 36067,
   "family": "AKATSUKI",
   "power": 1088040152
  },
  {
   "server": 36067,
   "family": "Fr_Moldus",
   "power": 1072881278
  },
  {
   "server": 36067,
   "family": "solo_leveling",
   "power": 541393318
  },
  {
   "server": 36067,
   "family": "FranceClan",
   "power": 425855907
  },
  {
   "server": 36067,
   "family": "Gryffondor_Fr",
   "power": 408314321
  },
  {
   "server": 36067,
   "family": "Destin",
   "power": 371776568
  },
  {
   "server": 36067,
   "family": "ClanDébutants",
   "power": 330824799
  },
  {
   "server": 36067,
   "family": "AlisterFR",
   "power": 280388542
  },
  {
   "server": 36067,
   "family": "𝕷𝖚𝖓𝖆𝖗𝕮𝖑",
   "power": 274361945
  },
  {
   "server": 36068,
   "family": "Poupignon",
   "power": 1400164357
  },
  {
   "server": 36068,
   "family": "Troph",
   "power": 1315252730
  },
  {
   "server": 36068,
   "family": "fenri",
   "power": 1029381353
  },
  {
   "server": 36068,
   "family": "Atala",
   "power": 1009754551
  },
  {
   "server": 36068,
   "family": "REDROSE",
   "power": 538473151
  },
  {
   "server": 36068,
   "family": "ASocialClub",
   "power": 504527395
  },
  {
   "server": 36068,
   "family": "SporesMystique",
   "power": 486126116
  },
  {
   "server": 36068,
   "family": "Karma",
   "power": 403878167
  },
  {
   "server": 36068,
   "family": "lesbg",
   "power": 369670992
  },
  {
   "server": 36068,
   "family": "ClanFrance",
   "power": 347051857
  },
  {
   "server": 36069,
   "family": "ZEVO",
   "power": 1343088580
  },
  {
   "server": 36069,
   "family": "Tartiflette",
   "power": 1136535708
  },
  {
   "server": 36069,
   "family": "TOADS",
   "power": 1100452688
  },
  {
   "server": 36069,
   "family": "WarriorsFR",
   "power": 624922052
  },
  {
   "server": 36069,
   "family": "NothingFR",
   "power": 500557747
  },
  {
   "server": 36069,
   "family": "DidouFR",
   "power": 396288553
  },
  {
   "server": 36069,
   "family": "HélioWar",
   "power": 395516629
  },
  {
   "server": 36069,
   "family": "MycoMorph",
   "power": 352162200
  },
  {
   "server": 36069,
   "family": "Fr",
   "power": 282356432
  },
  {
   "server": 36069,
   "family": "LimuleFR",
   "power": 280717688
  },
  {
   "server": 36070,
   "family": "Pepouze",
   "power": 1224531738
  },
  {
   "server": 36070,
   "family": "Shinsetsu",
   "power": 1213969473
  },
  {
   "server": 36070,
   "family": "Omega",
   "power": 1086900166
  },
  {
   "server": 36070,
   "family": "Valhalla",
   "power": 532857269
  },
  {
   "server": 36070,
   "family": "minazuki",
   "power": 387780965
  },
  {
   "server": 36070,
   "family": "NocTurno",
   "power": 381382311
  },
  {
   "server": 36070,
   "family": "FR_Lonies",
   "power": 357182517
  },
  {
   "server": 36070,
   "family": "ChampisGang",
   "power": 351141327
  },
  {
   "server": 36070,
   "family": "Gaulois",
   "power": 347817917
  },
  {
   "server": 36070,
   "family": "CP0",
   "power": 344227965
  },
  {
   "server": 36071,
   "family": "Goats",
   "power": 1475013778
  },
  {
   "server": 36071,
   "family": "FrenchTeam",
   "power": 1253338822
  },
  {
   "server": 36071,
   "family": "kurogi",
   "power": 960128085
  },
  {
   "server": 36071,
   "family": "NightmareFR",
   "power": 885188299
  },
  {
   "server": 36071,
   "family": "MUSHANT",
   "power": 815378634
  },
  {
   "server": 36071,
   "family": "Berserker",
   "power": 516956017
  },
  {
   "server": 36071,
   "family": "MushLAnd",
   "power": 404609561
  },
  {
   "server": 36071,
   "family": "Les_Anarchiste",
   "power": 316968690
  },
  {
   "server": 36071,
   "family": "pioufitak",
   "power": 311071064
  },
  {
   "server": 36071,
   "family": "rapido37",
   "power": 290550372
  },
  {
   "server": 36072,
   "family": "Ragnarok",
   "power": 1353921282
  },
  {
   "server": 36072,
   "family": "Monarchs",
   "power": 1273207048
  },
  {
   "server": 36072,
   "family": "SIOFr",
   "power": 1090561712
  },
  {
   "server": 36072,
   "family": "LesBretons",
   "power": 695052178
  },
  {
   "server": 36072,
   "family": "FrenchFamily",
   "power": 524089002
  },
  {
   "server": 36072,
   "family": "FRchampi",
   "power": 506474845
  },
  {
   "server": 36072,
   "family": "CRCI",
   "power": 429285291
  },
  {
   "server": 36072,
   "family": "LesTruffes",
   "power": 406523931
  },
  {
   "server": 36072,
   "family": "planètefr",
   "power": 403613255
  },
  {
   "server": 36072,
   "family": "Valhalla",
   "power": 345593554
  },
  {
   "server": 36073,
   "family": "LesNullos",
   "power": 1303890296
  },
  {
   "server": 36073,
   "family": "MushroomsFR",
   "power": 1023231189
  },
  {
   "server": 36073,
   "family": "AKdemie",
   "power": 986560999
  },
  {
   "server": 36073,
   "family": "COD_fr",
   "power": 563658978
  },
  {
   "server": 36073,
   "family": "EmpirePsylo",
   "power": 546716304
  },
  {
   "server": 36073,
   "family": "Erebus",
   "power": 538483916
  },
  {
   "server": 36073,
   "family": "EmpireShodpiss",
   "power": 500665717
  },
  {
   "server": 36073,
   "family": "Anubis",
   "power": 388878304
  },
  {
   "server": 36073,
   "family": "Belgia",
   "power": 349404459
  },
  {
   "server": 36073,
   "family": "loveandblood",
   "power": 325205532
  },
  {
   "server": 36074,
   "family": "HakiDesRois",
   "power": 1472915465
  },
  {
   "server": 36074,
   "family": "BaltrouLovers",
   "power": 1341853744
  },
  {
   "server": 36074,
   "family": "Fearless",
   "power": 1153272602
  },
  {
   "server": 36074,
   "family": "Eclipse",
   "power": 889958306
  },
  {
   "server": 36074,
   "family": "LesDiablotins",
   "power": 855652496
  },
  {
   "server": 36074,
   "family": "FullTryTry",
   "power": 841939654
  },
  {
   "server": 36074,
   "family": "BoletZerker",
   "power": 752976805
  },
  {
   "server": 36074,
   "family": "champiclan",
   "power": 750567171
  },
  {
   "server": 36074,
   "family": "DEVARMY",
   "power": 715777046
  },
  {
   "server": 36074,
   "family": "HumbleMates",
   "power": 642326782
  },
  {
   "server": 36075,
   "family": "Olympe",
   "power": 1379233734
  },
  {
   "server": 36075,
   "family": "Hécate",
   "power": 1256217422
  },
  {
   "server": 36075,
   "family": "Sons_Of_Toad",
   "power": 1158993330
  },
  {
   "server": 36075,
   "family": "Benzou",
   "power": 977561793
  },
  {
   "server": 36075,
   "family": "TTR",
   "power": 572009257
  },
  {
   "server": 36075,
   "family": "FamilyArbre",
   "power": 481826775
  },
  {
   "server": 36075,
   "family": "lesfirst",
   "power": 457915336
  },
  {
   "server": 36075,
   "family": "NSI",
   "power": 436888893
  },
  {
   "server": 36075,
   "family": "Champdeparis",
   "power": 367225975
  },
  {
   "server": 36075,
   "family": "Clanfr",
   "power": 322720223
  },
  {
   "server": 36076,
   "family": "Genesis",
   "power": 1516650855
  },
  {
   "server": 36076,
   "family": "KoKa",
   "power": 1466060548
  },
  {
   "server": 36076,
   "family": "LEGENDS",
   "power": 1299996817
  },
  {
   "server": 36076,
   "family": "Sexo",
   "power": 890683372
  },
  {
   "server": 36076,
   "family": "Cèpes",
   "power": 840366048
  },
  {
   "server": 36076,
   "family": "ChampiGrognon",
   "power": 671613007
  },
  {
   "server": 36076,
   "family": "LeLocal",
   "power": 540453020
  },
  {
   "server": 36076,
   "family": "FrBoucan",
   "power": 487055801
  },
  {
   "server": 36076,
   "family": "Baguette",
   "power": 426767505
  },
  {
   "server": 36076,
   "family": "Unless2",
   "power": 423585024
  },
  {
   "server": 36077,
   "family": "Omega",
   "power": 1422333734
  },
  {
   "server": 36077,
   "family": "Bechamel_IV",
   "power": 1290842340
  },
  {
   "server": 36077,
   "family": "Elsker",
   "power": 1200853769
  },
  {
   "server": 36077,
   "family": "napoworld",
   "power": 1076571464
  },
  {
   "server": 36077,
   "family": "Kcorp",
   "power": 1019847309
  },
  {
   "server": 36077,
   "family": "PapyPirate",
   "power": 807822519
  },
  {
   "server": 36077,
   "family": "LaMalaGang",
   "power": 588130602
  },
  {
   "server": 36077,
   "family": "solohelping",
   "power": 412004003
  },
  {
   "server": 36077,
   "family": "Juniors",
   "power": 400789336
  },
  {
   "server": 36077,
   "family": "LaMeute",
   "power": 372836761
  },
  {
   "server": 36078,
   "family": "KC_ULTRA",
   "power": 1385635205
  },
  {
   "server": 36078,
   "family": "AdAstra",
   "power": 1340743355
  },
  {
   "server": 36078,
   "family": "SacredGroove",
   "power": 948742003
  },
  {
   "server": 36078,
   "family": "Les_KCrapules",
   "power": 794623448
  },
  {
   "server": 36078,
   "family": "KC_TRYHARD",
   "power": 615968152
  },
  {
   "server": 36078,
   "family": "LesFraudes",
   "power": 498558303
  },
  {
   "server": 36078,
   "family": "M8_Ultra",
   "power": 471804310
  },
  {
   "server": 36078,
   "family": "Insomnia",
   "power": 469577578
  },
  {
   "server": 36078,
   "family": "Quoikoupotos",
   "power": 460923003
  },
  {
   "server": 36078,
   "family": "LittleWorld",
   "power": 448196633
  },
  {
   "server": 36079,
   "family": "Crown",
   "power": 1437107689
  },
  {
   "server": 36079,
   "family": "Bluewall",
   "power": 1228981709
  },
  {
   "server": 36079,
   "family": "L’Inglorium",
   "power": 1078496853
  },
  {
   "server": 36079,
   "family": "Sunny",
   "power": 695631338
  },
  {
   "server": 36079,
   "family": "Aubiwan",
   "power": 545810469
  },
  {
   "server": 36079,
   "family": "Auzary",
   "power": 500250175
  },
  {
   "server": 36079,
   "family": "🤓",
   "power": 455780746
  },
  {
   "server": 36079,
   "family": "KCorpQG",
   "power": 423674871
  },
  {
   "server": 36079,
   "family": "France",
   "power": 360425985
  },
  {
   "server": 36079,
   "family": "lesfarfadets",
   "power": 351013153
  },
  {
   "server": 36080,
   "family": "Hermès",
   "power": 1320038558
  },
  {
   "server": 36080,
   "family": "Dracarys",
   "power": 1207090792
  },
  {
   "server": 36080,
   "family": "Konoha",
   "power": 1073719450
  },
  {
   "server": 36080,
   "family": "AkatsukiV3",
   "power": 742886879
  },
  {
   "server": 36080,
   "family": "KC_Blue",
   "power": 630223685
  },
  {
   "server": 36080,
   "family": "LesKorogus",
   "power": 418210491
  },
  {
   "server": 36080,
   "family": "Vivitlaire",
   "power": 325023226
  },
  {
   "server": 36080,
   "family": "warriorsgame",
   "power": 321789153
  },
  {
   "server": 36080,
   "family": "FrenchLigue",
   "power": 318990128
  },
  {
   "server": 36080,
   "family": "Royaumechampi",
   "power": 290996346
  },
  {
   "server": 36081,
   "family": "KarmineCorp",
   "power": 1542014029
  },
  {
   "server": 36081,
   "family": "ChampiChampion",
   "power": 1260729974
  },
  {
   "server": 36081,
   "family": "NewGen",
   "power": 1251105783
  },
  {
   "server": 36081,
   "family": "BlueStars",
   "power": 1059897578
  },
  {
   "server": 36081,
   "family": "Chlamydia",
   "power": 1037649296
  },
  {
   "server": 36081,
   "family": "TEAM_CHAMPI",
   "power": 914178219
  },
  {
   "server": 36081,
   "family": "HakiDesRois",
   "power": 668115641
  },
  {
   "server": 36081,
   "family": "KCDQ",
   "power": 624814915
  },
  {
   "server": 36081,
   "family": "GentlemanClub",
   "power": 593330734
  },
  {
   "server": 36081,
   "family": "Konoha",
   "power": 586616554
  },
  {
   "server": 36082,
   "family": "PoopooKrav",
   "power": 1358546967
  },
  {
   "server": 36082,
   "family": "STRIKEFORCE",
   "power": 1261777553
  },
  {
   "server": 36082,
   "family": "Fake",
   "power": 1258695363
  },
  {
   "server": 36082,
   "family": "Novaeres",
   "power": 889711360
  },
  {
   "server": 36082,
   "family": "FrCrew",
   "power": 877571830
  },
  {
   "server": 36082,
   "family": "Nigloland",
   "power": 860277046
  },
  {
   "server": 36082,
   "family": "Antagonista",
   "power": 466241980
  },
  {
   "server": 36082,
   "family": "Noomo",
   "power": 458214928
  },
  {
   "server": 36082,
   "family": "CSB",
   "power": 438168973
  },
  {
   "server": 36082,
   "family": "GentleMates",
   "power": 374632938
  },
  {
   "server": 36083,
   "family": "Poulpi",
   "power": 1298243837
  },
  {
   "server": 36083,
   "family": "CityGang",
   "power": 1227492678
  },
  {
   "server": 36083,
   "family": "Mugiwara",
   "power": 1168177447
  },
  {
   "server": 36083,
   "family": "LesSudistes",
   "power": 539778788
  },
  {
   "server": 36083,
   "family": "ChampiToad",
   "power": 516862384
  },
  {
   "server": 36083,
   "family": "japanvie",
   "power": 452465307
  },
  {
   "server": 36083,
   "family": "KarmineCorp",
   "power": 445738348
  },
  {
   "server": 36083,
   "family": "Gaulois",
   "power": 437700449
  },
  {
   "server": 36083,
   "family": "LesGolmons",
   "power": 385290139
  },
  {
   "server": 36083,
   "family": "français",
   "power": 358596609
  },
  {
   "server": 36084,
   "family": "Requiem",
   "power": 1368793907
  },
  {
   "server": 36084,
   "family": "Taverne",
   "power": 1276327581
  },
  {
   "server": 36084,
   "family": "KarmineCorp",
   "power": 1070515510
  },
  {
   "server": 36084,
   "family": "SoloLevelingFR",
   "power": 896231602
  },
  {
   "server": 36084,
   "family": "Alliance",
   "power": 740076129
  },
  {
   "server": 36084,
   "family": "MushLand",
   "power": 590903029
  },
  {
   "server": 36084,
   "family": "FrenchTeam",
   "power": 535929272
  },
  {
   "server": 36084,
   "family": "1erRPIMa",
   "power": 519489167
  },
  {
   "server": 36084,
   "family": "LeNoyau",
   "power": 409220863
  },
  {
   "server": 36084,
   "family": "ClanDébutant",
   "power": 388442781
  },
  {
   "server": 36085,
   "family": "MushParadis",
   "power": 1385671695
  },
  {
   "server": 36085,
   "family": "Malveillance",
   "power": 1068396348
  },
  {
   "server": 36085,
   "family": "CHAMPIX",
   "power": 753395212
  },
  {
   "server": 36085,
   "family": "UNIS_VERS",
   "power": 740200128
  },
  {
   "server": 36085,
   "family": "Phœnix",
   "power": 708337384
  },
  {
   "server": 36085,
   "family": "Ryokan",
   "power": 643517534
  },
  {
   "server": 36085,
   "family": "AKATSUKI",
   "power": 511237829
  },
  {
   "server": 36085,
   "family": "TeamFrance",
   "power": 439488494
  },
  {
   "server": 36085,
   "family": "Basicfrites",
   "power": 432397284
  },
  {
   "server": 36085,
   "family": "Mushroom_verse",
   "power": 429148682
  },
  {
   "server": 36086,
   "family": "Olympe",
   "power": 1258665908
  },
  {
   "server": 36086,
   "family": "L’alliance",
   "power": 1121550080
  },
  {
   "server": 36086,
   "family": "SoloLevelingFR",
   "power": 1104261749
  },
  {
   "server": 36086,
   "family": "Bistouquette",
   "power": 912743374
  },
  {
   "server": 36086,
   "family": "AKdemie",
   "power": 613231762
  },
  {
   "server": 36086,
   "family": "France",
   "power": 400898034
  },
  {
   "server": 36086,
   "family": "KANABIS",
   "power": 371634922
  },
  {
   "server": 36086,
   "family": "Fr57",
   "power": 328236904
  },
  {
   "server": 36086,
   "family": "phoenyx",
   "power": 319141121
  },
  {
   "server": 36086,
   "family": "LesZommes",
   "power": 258004903
  },
  {
   "server": 36087,
   "family": "ιмρєяιυм",
   "power": 1459885508
  },
  {
   "server": 36087,
   "family": "DarkPhœnix",
   "power": 1048884065
  },
  {
   "server": 36087,
   "family": "GOJOCORPS",
   "power": 1033098111
  },
  {
   "server": 36087,
   "family": "LesBaroudEure",
   "power": 967828723
  },
  {
   "server": 36087,
   "family": "LaHordElfiq",
   "power": 674959530
  },
  {
   "server": 36087,
   "family": "KarmineCorp",
   "power": 485417340
  },
  {
   "server": 36087,
   "family": "KARMINE",
   "power": 484051829
  },
  {
   "server": 36087,
   "family": "TeamNaps",
   "power": 410765582
  },
  {
   "server": 36087,
   "family": "KarmineCorp1",
   "power": 409634641
  },
  {
   "server": 36087,
   "family": "Andromeda",
   "power": 403065856
  },
  {
   "server": 36088,
   "family": "revenge",
   "power": 1332608344
  },
  {
   "server": 36088,
   "family": "Pourfendeurs",
   "power": 1044216919
  },
  {
   "server": 36088,
   "family": "Hollow",
   "power": 1022683403
  },
  {
   "server": 36088,
   "family": "Champotes",
   "power": 574760626
  },
  {
   "server": 36088,
   "family": "Redroom",
   "power": 492164629
  },
  {
   "server": 36088,
   "family": "Lafrenchteam",
   "power": 486145542
  },
  {
   "server": 36088,
   "family": "Legends",
   "power": 464573248
  },
  {
   "server": 36088,
   "family": "AxDem",
   "power": 439911117
  },
  {
   "server": 36088,
   "family": "DnDCrew",
   "power": 382124168
  },
  {
   "server": 36088,
   "family": "Karmine_Corp",
   "power": 377141581
  },
  {
   "server": 36089,
   "family": "BlueChampi",
   "power": 1287179328
  },
  {
   "server": 36089,
   "family": "Odyssey",
   "power": 1141129801
  },
  {
   "server": 36089,
   "family": "MaitresBolets",
   "power": 977444750
  },
  {
   "server": 36089,
   "family": "Rebirth",
   "power": 883392570
  },
  {
   "server": 36089,
   "family": "BlueWall",
   "power": 509046797
  },
  {
   "server": 36089,
   "family": "CAF",
   "power": 379842887
  },
  {
   "server": 36089,
   "family": "France",
   "power": 378641132
  },
  {
   "server": 36089,
   "family": "Sun",
   "power": 358650212
  },
  {
   "server": 36089,
   "family": "Mugiwara",
   "power": 326827677
  },
  {
   "server": 36089,
   "family": "Imprium",
   "power": 320112833
  },
  {
   "server": 36090,
   "family": "FADE",
   "power": 1255314246
  },
  {
   "server": 36090,
   "family": "MUGIWARA",
   "power": 1223975935
  },
  {
   "server": 36090,
   "family": "VikingFR3",
   "power": 791136767
  },
  {
   "server": 36090,
   "family": "MusheroomNat",
   "power": 554254122
  },
  {
   "server": 36090,
   "family": "LaZone",
   "power": 540724369
  },
  {
   "server": 36090,
   "family": "KarmineCorp",
   "power": 487405999
  },
  {
   "server": 36090,
   "family": "Warzazate",
   "power": 425624366
  },
  {
   "server": 36090,
   "family": "Equinox",
   "power": 400807772
  },
  {
   "server": 36090,
   "family": "France",
   "power": 342623028
  },
  {
   "server": 36090,
   "family": "Wolfgang",
   "power": 334029034
  },
  {
   "server": 36091,
   "family": "SUPRA",
   "power": 1358576941
  },
  {
   "server": 36091,
   "family": "Rebellium",
   "power": 1178568224
  },
  {
   "server": 36091,
   "family": "Pubertax",
   "power": 875506028
  },
  {
   "server": 36091,
   "family": "leclandezamis",
   "power": 756977993
  },
  {
   "server": 36091,
   "family": "gang_pouletos",
   "power": 639782168
  },
  {
   "server": 36091,
   "family": "France",
   "power": 533158960
  },
  {
   "server": 36091,
   "family": "Pdbl",
   "power": 450340105
  },
  {
   "server": 36091,
   "family": "BoletsFR",
   "power": 416042433
  },
  {
   "server": 36091,
   "family": "GentleMates",
   "power": 354725192
  },
  {
   "server": 36091,
   "family": "Eternity",
   "power": 343685016
  },
  {
   "server": 36092,
   "family": "azulite",
   "power": 1259618286
  },
  {
   "server": 36092,
   "family": "Mercenaires",
   "power": 1024206722
  },
  {
   "server": 36092,
   "family": "Olympe",
   "power": 813192615
  },
  {
   "server": 36092,
   "family": "DesertEagle",
   "power": 767797200
  },
  {
   "server": 36092,
   "family": "TheBlueWall",
   "power": 670295697
  },
  {
   "server": 36092,
   "family": "Akatsuki",
   "power": 617596594
  },
  {
   "server": 36092,
   "family": "Parazyte",
   "power": 587198496
  },
  {
   "server": 36092,
   "family": "FRdémons",
   "power": 488282549
  },
  {
   "server": 36092,
   "family": "FRSquad",
   "power": 362491236
  },
  {
   "server": 36092,
   "family": "GBClub",
   "power": 341286454
  },
  {
   "server": 36093,
   "family": "FireDragon",
   "power": 1184079934
  },
  {
   "server": 36093,
   "family": "SoloLeveling",
   "power": 932729466
  },
  {
   "server": 36093,
   "family": "French_Touch",
   "power": 844418421
  },
  {
   "server": 36093,
   "family": "Destined2See",
   "power": 807664251
  },
  {
   "server": 36093,
   "family": "Achéron",
   "power": 473051556
  },
  {
   "server": 36093,
   "family": "oméga",
   "power": 379867920
  },
  {
   "server": 36093,
   "family": "IVREICH",
   "power": 373666009
  },
  {
   "server": 36093,
   "family": "démon",
   "power": 341223629
  },
  {
   "server": 36093,
   "family": "patataclan",
   "power": 298051335
  },
  {
   "server": 36093,
   "family": "OmeletteChampi",
   "power": 296669262
  },
  {
   "server": 36094,
   "family": "Nebula_Knights",
   "power": 1364527163
  },
  {
   "server": 36094,
   "family": "StellarKnights",
   "power": 1080024535
  },
  {
   "server": 36094,
   "family": "GOAT",
   "power": 1013320578
  },
  {
   "server": 36094,
   "family": "MushéMéchant",
   "power": 942259791
  },
  {
   "server": 36094,
   "family": "LégendeZ",
   "power": 712130601
  },
  {
   "server": 36094,
   "family": "GentleMates",
   "power": 490670218
  },
  {
   "server": 36094,
   "family": "Teemo19100",
   "power": 400411059
  },
  {
   "server": 36094,
   "family": "MushPotes",
   "power": 383140006
  },
  {
   "server": 36094,
   "family": "Plazhius",
   "power": 339396290
  },
  {
   "server": 36094,
   "family": "ACS",
   "power": 336947677
  },
  {
   "server": 36095,
   "family": "MushWarrior",
   "power": 1289269440
  },
  {
   "server": 36095,
   "family": "SHIELD",
   "power": 1135523453
  },
  {
   "server": 36095,
   "family": "Harmony",
   "power": 1076920310
  },
  {
   "server": 36095,
   "family": "GloryForOlympe",
   "power": 933132703
  },
  {
   "server": 36095,
   "family": "CringeNuts",
   "power": 813730973
  },
  {
   "server": 36095,
   "family": "LesTennysons",
   "power": 497095077
  },
  {
   "server": 36095,
   "family": "Galaxie",
   "power": 445854616
  },
  {
   "server": 36095,
   "family": "AntiMugiwara",
   "power": 424828976
  },
  {
   "server": 36095,
   "family": "Akatsuki",
   "power": 424659995
  },
  {
   "server": 36095,
   "family": "Amnesya",
   "power": 418097269
  },
  {
   "server": 36096,
   "family": "KELAWIN",
   "power": 1349565793
  },
  {
   "server": 36096,
   "family": "CHAMPIONS",
   "power": 1044199090
  },
  {
   "server": 36096,
   "family": "Rêverie",
   "power": 1009971745
  },
  {
   "server": 36096,
   "family": "NAKAMAS",
   "power": 946310853
  },
  {
   "server": 36096,
   "family": "HUNTERS",
   "power": 887699897
  },
  {
   "server": 36096,
   "family": "Zone51",
   "power": 599032100
  },
  {
   "server": 36096,
   "family": "Kaamelott",
   "power": 563633418
  },
  {
   "server": 36096,
   "family": "AnesBetes",
   "power": 369178057
  },
  {
   "server": 36096,
   "family": "NFX",
   "power": 351799768
  },
  {
   "server": 36096,
   "family": "Français",
   "power": 347525026
  },
  {
   "server": 36097,
   "family": "Dogfighterever",
   "power": 1176113905
  },
  {
   "server": 36097,
   "family": "Chanpions",
   "power": 1108033601
  },
  {
   "server": 36097,
   "family": "Champimignons",
   "power": 1018119748
  },
  {
   "server": 36097,
   "family": "AKATSUKI_V4",
   "power": 577378060
  },
  {
   "server": 36097,
   "family": "oméga",
   "power": 453495328
  },
  {
   "server": 36097,
   "family": "ShadowGarden",
   "power": 438400927
  },
  {
   "server": 36097,
   "family": "KarmineCorp",
   "power": 430471288
  },
  {
   "server": 36097,
   "family": "LesPagnions",
   "power": 394900262
  },
  {
   "server": 36097,
   "family": "Chacalerie",
   "power": 390530226
  },
  {
   "server": 36097,
   "family": "Zeus",
   "power": 381037731
  },
  {
   "server": 36098,
   "family": "LesAlcoolHic",
   "power": 1167591352
  },
  {
   "server": 36098,
   "family": "Scorp",
   "power": 1012974957
  },
  {
   "server": 36098,
   "family": "Clan2Legende",
   "power": 814668391
  },
  {
   "server": 36098,
   "family": "génocide",
   "power": 763335976
  },
  {
   "server": 36098,
   "family": "Chatpas_dheure",
   "power": 601977403
  },
  {
   "server": 36098,
   "family": "FRANCEzen",
   "power": 500450045
  },
  {
   "server": 36098,
   "family": "BOUZIN",
   "power": 328584306
  },
  {
   "server": 36098,
   "family": "Genesis",
   "power": 309480061
  },
  {
   "server": 36098,
   "family": "MaxiChad",
   "power": 290044386
  },
  {
   "server": 36098,
   "family": "UnNianConnu",
   "power": 283928124
  },
  {
   "server": 36099,
   "family": "BLITZ",
   "power": 1164598278
  },
  {
   "server": 36099,
   "family": "NEXUS",
   "power": 1130819189
  },
  {
   "server": 36099,
   "family": "KCORP",
   "power": 1017741671
  },
  {
   "server": 36099,
   "family": "Respawn",
   "power": 901374255
  },
  {
   "server": 36099,
   "family": "TTAVDO",
   "power": 641253942
  },
  {
   "server": 36099,
   "family": "Sous_Champi",
   "power": 624298002
  },
  {
   "server": 36099,
   "family": "freedom",
   "power": 513616041
  },
  {
   "server": 36099,
   "family": "KCBLUE",
   "power": 414869960
  },
  {
   "server": 36099,
   "family": "Bouyakasha",
   "power": 397265892
  },
  {
   "server": 36099,
   "family": "Michel",
   "power": 385806240
  },
  {
   "server": 36100,
   "family": "LesTempliers",
   "power": 1286729286
  },
  {
   "server": 36100,
   "family": "MushroomOnTop",
   "power": 1149192306
  },
  {
   "server": 36100,
   "family": "LaConfrérie",
   "power": 869206362
  },
  {
   "server": 36100,
   "family": "Wolf",
   "power": 830777342
  },
  {
   "server": 36100,
   "family": "FrenchFamily",
   "power": 658098290
  },
  {
   "server": 36100,
   "family": "LesSamouraïs",
   "power": 512444261
  },
  {
   "server": 36100,
   "family": "Tempest",
   "power": 487562420
  },
  {
   "server": 36100,
   "family": "Zeus",
   "power": 451313694
  },
  {
   "server": 36100,
   "family": "La107",
   "power": 444554584
  },
  {
   "server": 36100,
   "family": "Saucisson",
   "power": 437963345
  },
  {
   "server": 36101,
   "family": "Heaven",
   "power": 1198026028
  },
  {
   "server": 36101,
   "family": "BlueMillenium",
   "power": 1175033265
  },
  {
   "server": 36101,
   "family": "FullControl",
   "power": 980456369
  },
  {
   "server": 36101,
   "family": "ChamPirate",
   "power": 730707172
  },
  {
   "server": 36101,
   "family": "La_Main_Noire",
   "power": 482124277
  },
  {
   "server": 36101,
   "family": "HighCarry",
   "power": 468605294
  },
  {
   "server": 36101,
   "family": "champifrance",
   "power": 359098770
  },
  {
   "server": 36101,
   "family": "BlueWall",
   "power": 325748792
  },
  {
   "server": 36101,
   "family": "SorryToBeGod",
   "power": 318235142
  },
  {
   "server": 36101,
   "family": "Bienvenue",
   "power": 317181986
  },
  {
   "server": 36102,
   "family": "Infamy",
   "power": 1258933791
  },
  {
   "server": 36102,
   "family": "kcclan",
   "power": 1090523988
  },
  {
   "server": 36102,
   "family": "LVAS",
   "power": 1010565466
  },
  {
   "server": 36102,
   "family": "Olympus",
   "power": 998585248
  },
  {
   "server": 36102,
   "family": "Team_Picchu",
   "power": 704582522
  },
  {
   "server": 36102,
   "family": "AkyChampi",
   "power": 671283647
  },
  {
   "server": 36102,
   "family": "Cordyceps",
   "power": 641536520
  },
  {
   "server": 36102,
   "family": "MiseEnBouche",
   "power": 488593870
  },
  {
   "server": 36102,
   "family": "Mushroom",
   "power": 407251718
  },
  {
   "server": 36102,
   "family": "DarkChamp",
   "power": 406839594
  },
  {
   "server": 36103,
   "family": "Fallen Angels",
   "power": 1114363966
  },
  {
   "server": 36103,
   "family": "IMMORTAL",
   "power": 1031114702
  },
  {
   "server": 36103,
   "family": "SopEmpire",
   "power": 1021570173
  },
  {
   "server": 36103,
   "family": "Malveillance",
   "power": 640319526
  },
  {
   "server": 36103,
   "family": "KARMINECORP",
   "power": 557631879
  },
  {
   "server": 36103,
   "family": "teamFrance",
   "power": 519462864
  },
  {
   "server": 36103,
   "family": "LaTaverne",
   "power": 450941422
  },
  {
   "server": 36103,
   "family": "omega",
   "power": 390181053
  },
  {
   "server": 36103,
   "family": "GAVROCHE",
   "power": 337571437
  },
  {
   "server": 36103,
   "family": "KCrapules",
   "power": 322951106
  },
  {
   "server": 36104,
   "family": "HighCarry",
   "power": 1243591964
  },
  {
   "server": 36104,
   "family": "LaConfrérie",
   "power": 1032886983
  },
  {
   "server": 36104,
   "family": "KCORP",
   "power": 1004267616
  },
  {
   "server": 36104,
   "family": "Midnight",
   "power": 800213157
  },
  {
   "server": 36104,
   "family": "FranceTopFR",
   "power": 593518818
  },
  {
   "server": 36104,
   "family": "Lesking",
   "power": 517432450
  },
  {
   "server": 36104,
   "family": "BestFR",
   "power": 492970316
  },
  {
   "server": 36104,
   "family": "FcDidier",
   "power": 424316366
  },
  {
   "server": 36104,
   "family": "Nampignon",
   "power": 406400055
  },
  {
   "server": 36104,
   "family": "CanardHeureux",
   "power": 360927440
  },
  {
   "server": 36105,
   "family": "Akatsukî",
   "power": 1244577394
  },
  {
   "server": 36105,
   "family": "KarmineCorp",
   "power": 941146516
  },
  {
   "server": 36105,
   "family": "Croustillants",
   "power": 891220738
  },
  {
   "server": 36105,
   "family": "top1fr",
   "power": 796975737
  },
  {
   "server": 36105,
   "family": "FARFADETS",
   "power": 655184756
  },
  {
   "server": 36105,
   "family": "Kankrouth",
   "power": 550808336
  },
  {
   "server": 36105,
   "family": "IreliaMains",
   "power": 498283991
  },
  {
   "server": 36105,
   "family": "KCORP",
   "power": 448179322
  },
  {
   "server": 36105,
   "family": "1STI2D",
   "power": 389395583
  },
  {
   "server": 36105,
   "family": "Malveillance",
   "power": 353893363
  },
  {
   "server": 36106,
   "family": "Bonobo",
   "power": 1100842502
  },
  {
   "server": 36106,
   "family": "LaDictature",
   "power": 1055681008
  },
  {
   "server": 36106,
   "family": "LesCopains",
   "power": 819160179
  },
  {
   "server": 36106,
   "family": "LaZone",
   "power": 744444953
  },
  {
   "server": 36106,
   "family": "LEGENDS",
   "power": 590143759
  },
  {
   "server": 36106,
   "family": "SainteKarmine",
   "power": 500737872
  },
  {
   "server": 36106,
   "family": "Champipignouf",
   "power": 417586611
  },
  {
   "server": 36106,
   "family": "nulnasu",
   "power": 310306293
  },
  {
   "server": 36106,
   "family": "FrenchBeast",
   "power": 294032533
  },
  {
   "server": 36106,
   "family": "LarmeDoree",
   "power": 254393864
  },
  {
   "server": 36107,
   "family": "Nemesis",
   "power": 1053274185
  },
  {
   "server": 36107,
   "family": "Matrice",
   "power": 1006991102
  },
  {
   "server": 36107,
   "family": "iledeMrEpstein",
   "power": 959842616
  },
  {
   "server": 36107,
   "family": "Legends",
   "power": 895359025
  },
  {
   "server": 36107,
   "family": "Phœnix",
   "power": 694934420
  },
  {
   "server": 36107,
   "family": "VikingsFR4",
   "power": 488681159
  },
  {
   "server": 36107,
   "family": "Mushle",
   "power": 467912512
  },
  {
   "server": 36107,
   "family": "BalladeBoisée",
   "power": 439748973
  },
  {
   "server": 36107,
   "family": "LeCacaMiam",
   "power": 412575398
  },
  {
   "server": 36107,
   "family": "Grofiac",
   "power": 388406855
  },
  {
   "server": 36108,
   "family": "Metronom",
   "power": 1179396079
  },
  {
   "server": 36108,
   "family": "LEC2025",
   "power": 743373174
  },
  {
   "server": 36108,
   "family": "CaraChimay",
   "power": 722742429
  },
  {
   "server": 36108,
   "family": "Amanitemouche",
   "power": 674957709
  },
  {
   "server": 36108,
   "family": "ChampiGang",
   "power": 519781322
  },
  {
   "server": 36108,
   "family": "lesNomads",
   "power": 498155537
  },
  {
   "server": 36108,
   "family": "Fr",
   "power": 420084891
  },
  {
   "server": 36108,
   "family": "PapyPirate",
   "power": 367453351
  },
  {
   "server": 36108,
   "family": "Olympe",
   "power": 360775345
  },
  {
   "server": 36108,
   "family": "FrenchCrew",
   "power": 308938883
  },
  {
   "server": 36109,
   "family": "Invictus",
   "power": 1139854782
  },
  {
   "server": 36109,
   "family": "Reborn",
   "power": 942077736
  },
  {
   "server": 36109,
   "family": "V2",
   "power": 848746743
  },
  {
   "server": 36109,
   "family": "Rebørn",
   "power": 805831233
  },
  {
   "server": 36109,
   "family": "Zéro0",
   "power": 563659715
  },
  {
   "server": 36109,
   "family": "lesfrancais",
   "power": 377824716
  },
  {
   "server": 36109,
   "family": "LaPiraterie",
   "power": 368072247
  },
  {
   "server": 36109,
   "family": "Tokyo",
   "power": 334481728
  },
  {
   "server": 36109,
   "family": "Nekocompagnie",
   "power": 324212206
  },
  {
   "server": 36109,
   "family": "francais",
   "power": 315494229
  },
  {
   "server": 36110,
   "family": "NEMESIS",
   "power": 1093337295
  },
  {
   "server": 36110,
   "family": "ICEFIRE",
   "power": 978905939
  },
  {
   "server": 36110,
   "family": "AKATSUKI",
   "power": 816852214
  },
  {
   "server": 36110,
   "family": "ICEFIRE2",
   "power": 710412328
  },
  {
   "server": 36110,
   "family": "TopFrance",
   "power": 428000725
  },
  {
   "server": 36110,
   "family": "Fraudz",
   "power": 416332227
  },
  {
   "server": 36110,
   "family": "ShadowGarden",
   "power": 357075791
  },
  {
   "server": 36110,
   "family": "Petitlapinroux",
   "power": 338840706
  },
  {
   "server": 36110,
   "family": "Destiny",
   "power": 335543281
  },
  {
   "server": 36110,
   "family": "Darkshroom",
   "power": 275737169
  },
  {
   "server": 36111,
   "family": "scars",
   "power": 1116061182
  },
  {
   "server": 36111,
   "family": "Legitima",
   "power": 788105573
  },
  {
   "server": 36111,
   "family": "Urukawaï",
   "power": 782097127
  },
  {
   "server": 36111,
   "family": "Ladictatur",
   "power": 618308587
  },
  {
   "server": 36111,
   "family": "Hakaifc",
   "power": 461734377
  },
  {
   "server": 36111,
   "family": "DIAMOND",
   "power": 425194286
  },
  {
   "server": 36111,
   "family": "warsearfr",
   "power": 404167763
  },
  {
   "server": 36111,
   "family": "FR_Gang",
   "power": 373975234
  },
  {
   "server": 36111,
   "family": "French_Frayeur",
   "power": 307746192
  },
  {
   "server": 36111,
   "family": "UnionFr",
   "power": 282265688
  },
  {
   "server": 36112,
   "family": "Pokédex",
   "power": 1130473139
  },
  {
   "server": 36112,
   "family": "Aegis",
   "power": 882033298
  },
  {
   "server": 36112,
   "family": "Flowaves",
   "power": 857038346
  },
  {
   "server": 36112,
   "family": "LesZarlequins",
   "power": 499382183
  },
  {
   "server": 36112,
   "family": "Arkant",
   "power": 485531804
  },
  {
   "server": 36112,
   "family": "Spartiates",
   "power": 402059557
  },
  {
   "server": 36112,
   "family": "LaCabane",
   "power": 296031749
  },
  {
   "server": 36112,
   "family": "S06SU7",
   "power": 284193209
  },
  {
   "server": 36112,
   "family": "TeamEQ",
   "power": 265683864
  },
  {
   "server": 36112,
   "family": "Top1",
   "power": 244833819
  },
  {
   "server": 36113,
   "family": "Nebula",
   "power": 1040109861
  },
  {
   "server": 36113,
   "family": "Shroomies",
   "power": 970346941
  },
  {
   "server": 36113,
   "family": "FamilyTeam",
   "power": 829003038
  },
  {
   "server": 36113,
   "family": "Onigashima",
   "power": 637376241
  },
  {
   "server": 36113,
   "family": "Mushroom",
   "power": 532551711
  },
  {
   "server": 36113,
   "family": "Bluewall",
   "power": 340992768
  },
  {
   "server": 36113,
   "family": "FairyTail",
   "power": 334818624
  },
  {
   "server": 36113,
   "family": "Quintessence",
   "power": 323818976
  },
  {
   "server": 36113,
   "family": "Neptune",
   "power": 320744166
  },
  {
   "server": 36113,
   "family": "CLANFRANÇAIS",
   "power": 286585568
  },
  {
   "server": 36114,
   "family": "Olympe",
   "power": 1044647643
  },
  {
   "server": 36114,
   "family": "BlackCats",
   "power": 1016138077
  },
  {
   "server": 36114,
   "family": "Ahjin",
   "power": 614226319
  },
  {
   "server": 36114,
   "family": "StarkFR",
   "power": 494823013
  },
  {
   "server": 36114,
   "family": "HanamiFr",
   "power": 468650240
  },
  {
   "server": 36114,
   "family": "Perona",
   "power": 408020820
  },
  {
   "server": 36114,
   "family": "Valhalla_Fr",
   "power": 393160723
  },
  {
   "server": 36114,
   "family": "Asgard",
   "power": 348597202
  },
  {
   "server": 36114,
   "family": "THEKING_FR",
   "power": 324798892
  },
  {
   "server": 36114,
   "family": "exodiusFR",
   "power": 283282728
  },
  {
   "server": 36115,
   "family": "LegendsUnion",
   "power": 1058093354
  },
  {
   "server": 36115,
   "family": "Phœnix",
   "power": 820856363
  },
  {
   "server": 36115,
   "family": "LegendsUnionII",
   "power": 736214246
  },
  {
   "server": 36115,
   "family": "Jyvas",
   "power": 627858134
  },
  {
   "server": 36115,
   "family": "LesChampikings",
   "power": 575048498
  },
  {
   "server": 36115,
   "family": "LBEB",
   "power": 473053818
  },
  {
   "server": 36115,
   "family": "RISE",
   "power": 399663422
  },
  {
   "server": 36115,
   "family": "Seedfamily",
   "power": 380443228
  },
  {
   "server": 36115,
   "family": "Mushiiies",
   "power": 375016824
  },
  {
   "server": 36115,
   "family": "France",
   "power": 281317852
  },
  {
   "server": 36116,
   "family": "TopFrance",
   "power": 972192992
  },
  {
   "server": 36116,
   "family": "Mushiwara",
   "power": 866244692
  },
  {
   "server": 36116,
   "family": "ShadowGarden",
   "power": 805728543
  },
  {
   "server": 36116,
   "family": "FrenchChampi",
   "power": 450122327
  },
  {
   "server": 36116,
   "family": "Outsider",
   "power": 412555524
  },
  {
   "server": 36116,
   "family": "Weed_Shop",
   "power": 400607789
  },
  {
   "server": 36116,
   "family": "KCDQ",
   "power": 350797044
  },
  {
   "server": 36116,
   "family": "PanamaBende",
   "power": 320765498
  },
  {
   "server": 36116,
   "family": "TOP1France",
   "power": 312811619
  },
  {
   "server": 36116,
   "family": "BrothersIA",
   "power": 305401670
  },
  {
   "server": 36117,
   "family": "Erezia",
   "power": 998370217
  },
  {
   "server": 36117,
   "family": "LAB",
   "power": 890566733
  },
  {
   "server": 36117,
   "family": "EreziAcademy",
   "power": 644034145
  },
  {
   "server": 36117,
   "family": "LAA",
   "power": 501722983
  },
  {
   "server": 36117,
   "family": "Method",
   "power": 466990202
  },
  {
   "server": 36117,
   "family": "LesTruffesFR",
   "power": 336754563
  },
  {
   "server": 36117,
   "family": "team_france",
   "power": 333495675
  },
  {
   "server": 36117,
   "family": "France",
   "power": 288164533
  },
  {
   "server": 36117,
   "family": "UltimeAlliance",
   "power": 268072485
  },
  {
   "server": 36117,
   "family": "france",
   "power": 264798131
  },
  {
   "server": 36118,
   "family": "JDF",
   "power": 1028359168
  },
  {
   "server": 36118,
   "family": "GEARSECOND",
   "power": 907199421
  },
  {
   "server": 36118,
   "family": "League",
   "power": 824268732
  },
  {
   "server": 36118,
   "family": "Champitox",
   "power": 579482120
  },
  {
   "server": 36118,
   "family": "KONOHA",
   "power": 415106854
  },
  {
   "server": 36118,
   "family": "Phoenyx",
   "power": 352248409
  },
  {
   "server": 36118,
   "family": "LBTAZ",
   "power": 342726765
  },
  {
   "server": 36118,
   "family": "Mushleroom",
   "power": 336319938
  },
  {
   "server": 36118,
   "family": "Ramen",
   "power": 315486977
  },
  {
   "server": 36118,
   "family": "Champomix",
   "power": 314978882
  },
  {
   "server": 36119,
   "family": "LÉGION",
   "power": 1037195625
  },
  {
   "server": 36119,
   "family": "AdAstra",
   "power": 938582372
  },
  {
   "server": 36119,
   "family": "Fungiwara",
   "power": 679843872
  },
  {
   "server": 36119,
   "family": "GOAT",
   "power": 535467377
  },
  {
   "server": 36119,
   "family": "Rêverie",
   "power": 452611253
  },
  {
   "server": 36119,
   "family": "Rookies",
   "power": 349457073
  },
  {
   "server": 36119,
   "family": "SiLuMa",
   "power": 336571499
  },
  {
   "server": 36119,
   "family": "Le_Toman",
   "power": 333561124
  },
  {
   "server": 36119,
   "family": "LégionAcademy",
   "power": 331754859
  },
  {
   "server": 36119,
   "family": "GetOnTop",
   "power": 279495325
  },
  {
   "server": 36120,
   "family": "FrenchReborn",
   "power": 889862729
  },
  {
   "server": 36120,
   "family": "VINLAND",
   "power": 666379952
  },
  {
   "server": 36120,
   "family": "ZaneXKCorp",
   "power": 658350543
  },
  {
   "server": 36120,
   "family": "LogHorizon",
   "power": 613152183
  },
  {
   "server": 36120,
   "family": "Kinoko",
   "power": 581681286
  },
  {
   "server": 36120,
   "family": "MythFr",
   "power": 473195429
  },
  {
   "server": 36120,
   "family": "KCorpB",
   "power": 340382343
  },
  {
   "server": 36120,
   "family": "Varois",
   "power": 306126681
  },
  {
   "server": 36120,
   "family": "Konoha",
   "power": 302398118
  },
  {
   "server": 36120,
   "family": "couteau_suiss",
   "power": 278352004
  },
  {
   "server": 36121,
   "family": "OnlyTheFamily",
   "power": 896428385
  },
  {
   "server": 36121,
   "family": "Jinxed",
   "power": 721808144
  },
  {
   "server": 36121,
   "family": "Hope",
   "power": 654945306
  },
  {
   "server": 36121,
   "family": "Ness",
   "power": 540486946
  },
  {
   "server": 36121,
   "family": "CouillesLanta",
   "power": 402492926
  },
  {
   "server": 36121,
   "family": "viking",
   "power": 370070822
  },
  {
   "server": 36121,
   "family": "Titan",
   "power": 357518008
  },
  {
   "server": 36121,
   "family": "Konoha",
   "power": 354540119
  },
  {
   "server": 36121,
   "family": "FranceOfficiel",
   "power": 345530449
  },
  {
   "server": 36121,
   "family": "NAVI",
   "power": 324647390
  },
  {
   "server": 36122,
   "family": "TopFrance",
   "power": 919244298
  },
  {
   "server": 36122,
   "family": "KC_CorP",
   "power": 883639649
  },
  {
   "server": 36122,
   "family": "Feldbrau",
   "power": 660398155
  },
  {
   "server": 36122,
   "family": "La_familia",
   "power": 423548795
  },
  {
   "server": 36122,
   "family": "LaFaille",
   "power": 367624185
  },
  {
   "server": 36122,
   "family": "Neptunium",
   "power": 353575647
  },
  {
   "server": 36122,
   "family": "Hydrazil",
   "power": 307797493
  },
  {
   "server": 36122,
   "family": "Solglissant",
   "power": 287673071
  },
  {
   "server": 36122,
   "family": "infinity_goat",
   "power": 252971912
  },
  {
   "server": 36122,
   "family": "Foot2Rue",
   "power": 246819285
  },
  {
   "server": 36123,
   "family": "Harmony",
   "power": 994348726
  },
  {
   "server": 36123,
   "family": "Fungi",
   "power": 728509850
  },
  {
   "server": 36123,
   "family": "JujutsuHight",
   "power": 616489417
  },
  {
   "server": 36123,
   "family": "Skuulll",
   "power": 605425467
  },
  {
   "server": 36123,
   "family": "Vital",
   "power": 417771740
  },
  {
   "server": 36123,
   "family": "SuperNova",
   "power": 399811319
  },
  {
   "server": 36123,
   "family": "KCFORCE",
   "power": 312955132
  },
  {
   "server": 36123,
   "family": "LesLouLoutes",
   "power": 300715201
  },
  {
   "server": 36123,
   "family": "France",
   "power": 296706815
  },
  {
   "server": 36123,
   "family": "Sbhfr",
   "power": 285534113
  },
  {
   "server": 36124,
   "family": "Luv_TheGoat",
   "power": 884653061
  },
  {
   "server": 36124,
   "family": "BrigadeFantome",
   "power": 801114820
  },
  {
   "server": 36124,
   "family": "StellaR",
   "power": 756583504
  },
  {
   "server": 36124,
   "family": "QIN",
   "power": 439383085
  },
  {
   "server": 36124,
   "family": "Amnesia",
   "power": 353238070
  },
  {
   "server": 36124,
   "family": "StrongestMan",
   "power": 318713971
  },
  {
   "server": 36124,
   "family": "frérot",
   "power": 274336622
  },
  {
   "server": 36124,
   "family": "Devil’sFriend",
   "power": 264702865
  },
  {
   "server": 36124,
   "family": "GeekCorp",
   "power": 240805171
  },
  {
   "server": 36124,
   "family": "pasletemps",
   "power": 234769234
  },
  {
   "server": 36125,
   "family": "STAY",
   "power": 895152355
  },
  {
   "server": 36125,
   "family": "Tatsuya",
   "power": 810577638
  },
  {
   "server": 36125,
   "family": "BadBeach",
   "power": 748223368
  },
  {
   "server": 36125,
   "family": "TikyLovers",
   "power": 476719961
  },
  {
   "server": 36125,
   "family": "BardellaFR",
   "power": 361166688
  },
  {
   "server": 36125,
   "family": "FreeLoot",
   "power": 314731110
  },
  {
   "server": 36125,
   "family": "PMU",
   "power": 305603820
  },
  {
   "server": 36125,
   "family": "HRS315",
   "power": 256001363
  },
  {
   "server": 36125,
   "family": "Fromage",
   "power": 249226925
  },
  {
   "server": 36125,
   "family": "fairy_tail",
   "power": 241144502
  },
  {
   "server": 36126,
   "family": "FRSH",
   "power": 809820062
  },
  {
   "server": 36126,
   "family": "Teikō",
   "power": 763431942
  },
  {
   "server": 36126,
   "family": "Arise",
   "power": 714011520
  },
  {
   "server": 36126,
   "family": "LPF",
   "power": 356498122
  },
  {
   "server": 36126,
   "family": "GentleMates",
   "power": 336812306
  },
  {
   "server": 36126,
   "family": "beuvrages",
   "power": 316902351
  },
  {
   "server": 36126,
   "family": "PurpleAnchor",
   "power": 228640259
  },
  {
   "server": 36126,
   "family": "TeamFightClub",
   "power": 220806581
  },
  {
   "server": 36126,
   "family": "Addictif",
   "power": 219066727
  },
  {
   "server": 36126,
   "family": "Invictus",
   "power": 217282690
  },
  {
   "server": 36127,
   "family": "Top1",
   "power": 743542090
  },
  {
   "server": 36127,
   "family": "FairyGarden",
   "power": 694625529
  },
  {
   "server": 36127,
   "family": "Marchombres",
   "power": 564555555
  },
  {
   "server": 36127,
   "family": "Badmushroom",
   "power": 563365912
  },
  {
   "server": 36127,
   "family": "frencharmy",
   "power": 355128162
  },
  {
   "server": 36127,
   "family": "oOSweetKillsOo",
   "power": 333943616
  },
  {
   "server": 36127,
   "family": "Fuzion",
   "power": 261500205
  },
  {
   "server": 36127,
   "family": "farfadets",
   "power": 260836176
  },
  {
   "server": 36127,
   "family": "Bakaland",
   "power": 255200702
  },
  {
   "server": 36127,
   "family": "Potaitoz",
   "power": 248026513
  },
  {
   "server": 36128,
   "family": "Kings",
   "power": 835955310
  },
  {
   "server": 36128,
   "family": "Olympe",
   "power": 716448057
  },
  {
   "server": 36128,
   "family": "OXYMORE",
   "power": 443836739
  },
  {
   "server": 36128,
   "family": "Valhalla",
   "power": 369946746
  },
  {
   "server": 36128,
   "family": "Aogiri",
   "power": 335137276
  },
  {
   "server": 36128,
   "family": "KCORP",
   "power": 265907126
  },
  {
   "server": 36128,
   "family": "LeMerry",
   "power": 251323365
  },
  {
   "server": 36128,
   "family": "Saiyanchampy",
   "power": 241932325
  },
  {
   "server": 36128,
   "family": "ARRACHEZ_VOUS",
   "power": 223576500
  },
  {
   "server": 36128,
   "family": "Ramen",
   "power": 216412233
  },
  {
   "server": 36129,
   "family": "Reborn",
   "power": 756325595
  },
  {
   "server": 36129,
   "family": "Mushroom",
   "power": 732249628
  },
  {
   "server": 36129,
   "family": "AhJin",
   "power": 467963564
  },
  {
   "server": 36129,
   "family": "JustDance",
   "power": 464392129
  },
  {
   "server": 36129,
   "family": "Mushgroom",
   "power": 364377534
  },
  {
   "server": 36129,
   "family": "Chepagro",
   "power": 311845331
  },
  {
   "server": 36129,
   "family": "La_famille",
   "power": 266953784
  },
  {
   "server": 36129,
   "family": "MushLegendary",
   "power": 227182714
  },
  {
   "server": 36129,
   "family": "Millénium",
   "power": 206379405
  },
  {
   "server": 36129,
   "family": "LaFafa",
   "power": 202177849
  },
  {
   "server": 36130,
   "family": "Mayhem",
   "power": 771176775
  },
  {
   "server": 36130,
   "family": "APES",
   "power": 689867491
  },
  {
   "server": 36130,
   "family": "Flex",
   "power": 595987765
  },
  {
   "server": 36130,
   "family": "FranceAlpha",
   "power": 391944036
  },
  {
   "server": 36130,
   "family": "Exodia",
   "power": 376593099
  },
  {
   "server": 36130,
   "family": "psilocybe",
   "power": 286538019
  },
  {
   "server": 36130,
   "family": "Dynastie",
   "power": 239715131
  },
  {
   "server": 36130,
   "family": "SoloLeveling",
   "power": 221136795
  },
  {
   "server": 36130,
   "family": "KCORP",
   "power": 218591220
  },
  {
   "server": 36130,
   "family": "Zarnix",
   "power": 210363912
  },
  {
   "server": 36131,
   "family": "Apocalypse",
   "power": 678034676
  },
  {
   "server": 36131,
   "family": "Articssun",
   "power": 676317174
  },
  {
   "server": 36131,
   "family": "MushWarriors",
   "power": 669411841
  },
  {
   "server": 36131,
   "family": "LaGrinta",
   "power": 384211621
  },
  {
   "server": 36131,
   "family": "KCWIN",
   "power": 371444897
  },
  {
   "server": 36131,
   "family": "LeChenil",
   "power": 277447667
  },
  {
   "server": 36131,
   "family": "LeCulteDuPain",
   "power": 268435835
  },
  {
   "server": 36131,
   "family": "LumberJack",
   "power": 258787136
  },
  {
   "server": 36131,
   "family": "lesbrascassé",
   "power": 239859736
  },
  {
   "server": 36131,
   "family": "SuperNova",
   "power": 218779036
  },
  {
   "server": 36132,
   "family": "Shinigami",
   "power": 768563061
  },
  {
   "server": 36132,
   "family": "Kaos",
   "power": 572206903
  },
  {
   "server": 36132,
   "family": "Olympe",
   "power": 501867761
  },
  {
   "server": 36132,
   "family": "HARMONY",
   "power": 484455688
  },
  {
   "server": 36132,
   "family": "PSE_ChampiGang",
   "power": 427211977
  },
  {
   "server": 36132,
   "family": "ASGARD",
   "power": 304156676
  },
  {
   "server": 36132,
   "family": "XCrewFrance",
   "power": 292913018
  },
  {
   "server": 36132,
   "family": "Inactif",
   "power": 241243064
  },
  {
   "server": 36132,
   "family": "LaCage",
   "power": 224468496
  },
  {
   "server": 36132,
   "family": "BabaAuRhum",
   "power": 199172137
  },
  {
   "server": 36133,
   "family": "Ramen",
   "power": 648429503
  },
  {
   "server": 36133,
   "family": "IMMANITY",
   "power": 617070036
  },
  {
   "server": 36133,
   "family": "SeinenKaisers",
   "power": 414567910
  },
  {
   "server": 36133,
   "family": "Panthéon",
   "power": 351421415
  },
  {
   "server": 36133,
   "family": "wolfgang",
   "power": 320294705
  },
  {
   "server": 36133,
   "family": "Olympe",
   "power": 307849430
  },
  {
   "server": 36133,
   "family": "MTX",
   "power": 271895100
  },
  {
   "server": 36133,
   "family": "Nightfall",
   "power": 257600288
  },
  {
   "server": 36133,
   "family": "UwU",
   "power": 221261044
  },
  {
   "server": 36133,
   "family": "TerreDeFrance",
   "power": 216468507
  },
  {
   "server": 36134,
   "family": "LesKarps",
   "power": 640168435
  },
  {
   "server": 36134,
   "family": "Akatsuki",
   "power": 631315749
  },
  {
   "server": 36134,
   "family": "MacaroniCorp",
   "power": 592854122
  },
  {
   "server": 36134,
   "family": "Mamamoo",
   "power": 440601118
  },
  {
   "server": 36134,
   "family": "LOS_HERMANOS",
   "power": 250011748
  },
  {
   "server": 36134,
   "family": "LeRoyaume",
   "power": 233978078
  },
  {
   "server": 36134,
   "family": "Slupe",
   "power": 233436728
  },
  {
   "server": 36134,
   "family": "CSB",
   "power": 220960094
  },
  {
   "server": 36134,
   "family": "fairytail",
   "power": 216924838
  },
  {
   "server": 36134,
   "family": "NewHorizon",
   "power": 189851957
  },
  {
   "server": 36135,
   "family": "Destiny",
   "power": 531803680
  },
  {
   "server": 36135,
   "family": "Célestes",
   "power": 178013913
  },
  {
   "server": 36135,
   "family": "Supremacy",
   "power": 114876916
  },
  {
   "server": 36135,
   "family": "Reimsdoigt",
   "power": 20492188
  },
  {
   "server": 36135,
   "family": "FamilyHouse",
   "power": 20084485
  },
  {
   "server": 36135,
   "family": "Léboloss",
   "power": 11262619
  },
  {
   "server": 36135,
   "family": "odk",
   "power": 2898661
  },
  {
   "server": 36135,
   "family": "FurFamily",
   "power": 1674648
  },
  {
   "server": 36135,
   "family": "leveling",
   "power": 1047515
  },
  {
   "server": 36135,
   "family": "MTX",
   "power": 348880
  },
  {
   "server": 36136,
   "family": "BHFamily",
   "power": 645995804
  },
  {
   "server": 36136,
   "family": "LeTaureauNoir",
   "power": 515495157
  },
  {
   "server": 36136,
   "family": "Aozora",
   "power": 376020861
  },
  {
   "server": 36136,
   "family": "ElCartel",
   "power": 352150564
  },
  {
   "server": 36136,
   "family": "LeagueOfChampi",
   "power": 273294632
  },
  {
   "server": 36136,
   "family": "Vicking",
   "power": 241016475
  },
  {
   "server": 36136,
   "family": "Amygdales",
   "power": 222900348
  },
  {
   "server": 36136,
   "family": "UNIS",
   "power": 214039043
  },
  {
   "server": 36136,
   "family": "FishAndTurtule",
   "power": 191334444
  },
  {
   "server": 36136,
   "family": "Mugiwara",
   "power": 188663949
  },
  {
   "server": 36137,
   "family": "Kakappa",
   "power": 591846686
  },
  {
   "server": 36137,
   "family": "Wysteria",
   "power": 572212751
  },
  {
   "server": 36137,
   "family": "ChampiMagique",
   "power": 435535780
  },
  {
   "server": 36137,
   "family": "Face2raie",
   "power": 394004341
  },
  {
   "server": 36137,
   "family": "Mystical",
   "power": 330007306
  },
  {
   "server": 36137,
   "family": "Hubert",
   "power": 315520758
  },
  {
   "server": 36137,
   "family": "Gouffre",
   "power": 259299662
  },
  {
   "server": 36137,
   "family": "Foutrefous",
   "power": 227509278
  },
  {
   "server": 36137,
   "family": "VaeVictis",
   "power": 200865358
  },
  {
   "server": 36137,
   "family": "Coup_D_Etat",
   "power": 198632165
  },
  {
   "server": 36138,
   "family": "AllStar",
   "power": 571681926
  },
  {
   "server": 36138,
   "family": "Supremacy",
   "power": 545247955
  },
  {
   "server": 36138,
   "family": "Elysium",
   "power": 443705522
  },
  {
   "server": 36138,
   "family": "Éclipse",
   "power": 358417422
  },
  {
   "server": 36138,
   "family": "LP4H",
   "power": 358313857
  },
  {
   "server": 36138,
   "family": "LesVraisFr",
   "power": 209774342
  },
  {
   "server": 36138,
   "family": "Tartaros",
   "power": 203914323
  },
  {
   "server": 36138,
   "family": "vjcjfudj",
   "power": 193273603
  },
  {
   "server": 36138,
   "family": "Fr",
   "power": 178209924
  },
  {
   "server": 36138,
   "family": "Vilipendeurs",
   "power": 176203769
  },
  {
   "server": 36139,
   "family": "TheØrigine",
   "power": 557118687
  },
  {
   "server": 36139,
   "family": "Amanite",
   "power": 518922269
  },
  {
   "server": 36139,
   "family": "ITM",
   "power": 474818744
  },
  {
   "server": 36139,
   "family": "KCorp",
   "power": 369614583
  },
  {
   "server": 36139,
   "family": "MST",
   "power": 270187830
  },
  {
   "server": 36139,
   "family": "LPTM",
   "power": 234536418
  },
  {
   "server": 36139,
   "family": "Regalia",
   "power": 210114535
  },
  {
   "server": 36139,
   "family": "BrigadeFantôme",
   "power": 195174393
  },
  {
   "server": 36139,
   "family": "Batcave",
   "power": 185215637
  },
  {
   "server": 36139,
   "family": "TheLot",
   "power": 178779774
  },
  {
   "server": 36140,
   "family": "McMush",
   "power": 589316814
  },
  {
   "server": 36140,
   "family": "TikyTaka",
   "power": 387144582
  },
  {
   "server": 36140,
   "family": "OVERLORD",
   "power": 307033452
  },
  {
   "server": 36140,
   "family": "Pasta",
   "power": 277553155
  },
  {
   "server": 36140,
   "family": "Champotes",
   "power": 251819657
  },
  {
   "server": 36140,
   "family": "CramptesFamily",
   "power": 244976885
  },
  {
   "server": 36140,
   "family": "Uni",
   "power": 238115538
  },
  {
   "server": 36140,
   "family": "Kaamelott",
   "power": 192639060
  },
  {
   "server": 36140,
   "family": "lafrance",
   "power": 184110329
  },
  {
   "server": 36140,
   "family": "Ahjin",
   "power": 183482602
  },
  {
   "server": 36141,
   "family": "Genesis",
   "power": 475288855
  },
  {
   "server": 36141,
   "family": "DivineEmpire",
   "power": 422336150
  },
  {
   "server": 36141,
   "family": "French_pipo",
   "power": 415792816
  },
  {
   "server": 36141,
   "family": "Batcave",
   "power": 372821868
  },
  {
   "server": 36141,
   "family": "EpicFail",
   "power": 338930090
  },
  {
   "server": 36141,
   "family": "KarmineCorp",
   "power": 258028082
  },
  {
   "server": 36141,
   "family": "Lesyakuzadu60",
   "power": 217026217
  },
  {
   "server": 36141,
   "family": "SCP",
   "power": 168727919
  },
  {
   "server": 36141,
   "family": "TKO",
   "power": 164737156
  },
  {
   "server": 36141,
   "family": "Maggrozbeat",
   "power": 156727204
  },
  {
   "server": 36142,
   "family": "Requiem",
   "power": 527051184
  },
  {
   "server": 36142,
   "family": "Bounty",
   "power": 432343865
  },
  {
   "server": 36142,
   "family": "LaYogaClub",
   "power": 267378785
  },
  {
   "server": 36142,
   "family": "L’asile",
   "power": 264720553
  },
  {
   "server": 36142,
   "family": "Crooks",
   "power": 253631914
  },
  {
   "server": 36142,
   "family": "Phoenix",
   "power": 233393106
  },
  {
   "server": 36142,
   "family": "ToddLand",
   "power": 201809197
  },
  {
   "server": 36142,
   "family": "Renaissance",
   "power": 191044294
  },
  {
   "server": 36142,
   "family": "FrenchReborn",
   "power": 186547655
  },
  {
   "server": 36142,
   "family": "France",
   "power": 170371907
  },
  {
   "server": 36143,
   "family": "Fear",
   "power": 454718884
  },
  {
   "server": 36143,
   "family": "Moudugland",
   "power": 454023835
  },
  {
   "server": 36143,
   "family": "LesSentinelles",
   "power": 314482224
  },
  {
   "server": 36143,
   "family": "Flex",
   "power": 302125926
  },
  {
   "server": 36143,
   "family": "Shinseku",
   "power": 240632103
  },
  {
   "server": 36143,
   "family": "Noyaux",
   "power": 197775806
  },
  {
   "server": 36143,
   "family": "Outlast",
   "power": 184858246
  },
  {
   "server": 36143,
   "family": "nightraid",
   "power": 172838314
  },
  {
   "server": 36143,
   "family": "Boredom",
   "power": 142853153
  },
  {
   "server": 36143,
   "family": "THC_ALPHA",
   "power": 142314136
  },
  {
   "server": 36144,
   "family": "WAB",
   "power": 465197584
  },
  {
   "server": 36144,
   "family": "mushroom",
   "power": 283034764
  },
  {
   "server": 36144,
   "family": "Olympe",
   "power": 277720542
  },
  {
   "server": 36144,
   "family": "NightKids",
   "power": 244866909
  },
  {
   "server": 36144,
   "family": "FrBest",
   "power": 193363777
  },
  {
   "server": 36144,
   "family": "FireForce",
   "power": 181675835
  },
  {
   "server": 36144,
   "family": "Inazuma",
   "power": 162263823
  },
  {
   "server": 36144,
   "family": "France",
   "power": 141162384
  },
  {
   "server": 36144,
   "family": "Exotique",
   "power": 140005518
  },
  {
   "server": 36144,
   "family": "MocheRoom",
   "power": 138011524
  },
  {
   "server": 36145,
   "family": "Akatsuki",
   "power": 257212746
  },
  {
   "server": 36145,
   "family": "LEGEND",
   "power": 214779810
  },
  {
   "server": 36145,
   "family": "FrenchArmy",
   "power": 179442626
  },
  {
   "server": 36145,
   "family": "UNITY",
   "power": 173017108
  },
  {
   "server": 36145,
   "family": "coucoulenoir",
   "power": 147666224
  },
  {
   "server": 36145,
   "family": "TokyoGhoul",
   "power": 133207228
  },
  {
   "server": 36145,
   "family": "Bardella2027",
   "power": 130787333
  },
  {
   "server": 36145,
   "family": "Viking",
   "power": 126119749
  },
  {
   "server": 36145,
   "family": "chapignouf",
   "power": 116676802
  },
  {
   "server": 36145,
   "family": "BoganLegacy",
   "power": 102407322
  },
  {
   "server": 36146,
   "family": "Saphir",
   "power": 255236562
  },
  {
   "server": 36146,
   "family": "Solo_Leveling",
   "power": 223813854
  },
  {
   "server": 36146,
   "family": "PrimosAncestro",
   "power": 186029311
  },
  {
   "server": 36146,
   "family": "DECIMUSH",
   "power": 153043863
  },
  {
   "server": 36146,
   "family": "Gentil",
   "power": 137053751
  },
  {
   "server": 36146,
   "family": "Mugiwara",
   "power": 129835731
  },
  {
   "server": 36146,
   "family": "ILLUMINATEAM",
   "power": 117613366
  },
  {
   "server": 36146,
   "family": "LÉGION",
   "power": 116856369
  },
  {
   "server": 36146,
   "family": "Kingdom",
   "power": 108126529
  },
  {
   "server": 36146,
   "family": "BloodMoon",
   "power": 107853294
  },
  {
   "server": 36147,
   "family": "Lightning",
   "power": 221604252
  },
  {
   "server": 36147,
   "family": "LesRatz",
   "power": 213231512
  },
  {
   "server": 36147,
   "family": "Meeting",
   "power": 187221696
  },
  {
   "server": 36147,
   "family": "Lord_FKL",
   "power": 162003709
  },
  {
   "server": 36147,
   "family": "Frenchteam",
   "power": 152185926
  },
  {
   "server": 36147,
   "family": "EpsyloneFR",
   "power": 136850159
  },
  {
   "server": 36147,
   "family": "Dynastie",
   "power": 133573500
  },
  {
   "server": 36147,
   "family": "KcBelloBito",
   "power": 109448113
  },
  {
   "server": 36147,
   "family": "mugiwara",
   "power": 108007570
  },
  {
   "server": 36147,
   "family": "FrenchGoodClub",
   "power": 86347405
  },
  {
   "server": 42001,
   "family": "espada",
   "power": 1572308524
  },
  {
   "server": 42001,
   "family": "NORTH",
   "power": 1395032470
  },
  {
   "server": 42001,
   "family": "Mushrooms",
   "power": 531322031
  },
  {
   "server": 42001,
   "family": "_BLACK_ORDER_",
   "power": 374159588
  },
  {
   "server": 42001,
   "family": "RUSSIA",
   "power": 342942354
  },
  {
   "server": 42001,
   "family": "МухоМор",
   "power": 302872807
  },
  {
   "server": 42001,
   "family": "Nazarik",
   "power": 263243596
  },
  {
   "server": 42001,
   "family": "Gods_Cat",
   "power": 167837872
  },
  {
   "server": 42001,
   "family": "АкадемкаEspada",
   "power": 165651368
  },
  {
   "server": 42001,
   "family": "Грибнойсуп",
   "power": 154539747
  },
  {
   "server": 42002,
   "family": "Россия",
   "power": 1318660026
  },
  {
   "server": 42002,
   "family": "Mushrooms",
   "power": 1004242740
  },
  {
   "server": 42002,
   "family": "Russia",
   "power": 348593347
  },
  {
   "server": 42002,
   "family": "NumberOne",
   "power": 257880210
  },
  {
   "server": 42002,
   "family": "Spiders",
   "power": 217497783
  },
  {
   "server": 42002,
   "family": "ᴍᴀɢɪᴄ",
   "power": 168812463
  },
  {
   "server": 42002,
   "family": "Best_Mushroom",
   "power": 138359444
  },
  {
   "server": 42002,
   "family": "Avangard",
   "power": 119251133
  },
  {
   "server": 42002,
   "family": "Par",
   "power": 93448969
  },
  {
   "server": 42002,
   "family": "Русские",
   "power": 82352184
  },
  {
   "server": 42003,
   "family": "FirstPlace",
   "power": 1143977875
  },
  {
   "server": 42003,
   "family": "БРАТСТВО",
   "power": 1125553123
  },
  {
   "server": 42003,
   "family": "Русские",
   "power": 641014449
  },
  {
   "server": 42003,
   "family": "WORLD",
   "power": 216415357
  },
  {
   "server": 42003,
   "family": "3Gend",
   "power": 184567960
  },
  {
   "server": 42003,
   "family": "Kazakhstan",
   "power": 147558692
  },
  {
   "server": 42003,
   "family": "ArmyRussian",
   "power": 132947043
  },
  {
   "server": 42003,
   "family": "Шашлычок",
   "power": 116015312
  },
  {
   "server": 42003,
   "family": "Миротворцы",
   "power": 108070267
  },
  {
   "server": 42003,
   "family": "KAZAKHSTAN2",
   "power": 52777524
  },
  {
   "server": 42004,
   "family": "СССР",
   "power": 1235029887
  },
  {
   "server": 42004,
   "family": "PRIVILEGE",
   "power": 1137649676
  },
  {
   "server": 42004,
   "family": "HIGHER",
   "power": 603054230
  },
  {
   "server": 42004,
   "family": "Силовички",
   "power": 275304083
  },
  {
   "server": 42004,
   "family": "ХРАМ_НАЗАРИК",
   "power": 263706205
  },
  {
   "server": 42004,
   "family": "ReZeRoHaYs",
   "power": 207767037
  },
  {
   "server": 42004,
   "family": "Russia",
   "power": 201151041
  },
  {
   "server": 42004,
   "family": "Дружина",
   "power": 179842363
  },
  {
   "server": 42004,
   "family": "LeGeNdArY",
   "power": 155896026
  },
  {
   "server": 42004,
   "family": "Belarus",
   "power": 124809367
  },
  {
   "server": 42005,
   "family": "ELITTA",
   "power": 1417032903
  },
  {
   "server": 42005,
   "family": "Odium",
   "power": 974292789
  },
  {
   "server": 42005,
   "family": "Пустые",
   "power": 754626803
  },
  {
   "server": 42005,
   "family": "6PM",
   "power": 270134941
  },
  {
   "server": 42005,
   "family": "Грибники",
   "power": 200414902
  },
  {
   "server": 42005,
   "family": "BURN",
   "power": 157017746
  },
  {
   "server": 42005,
   "family": "Afterlight",
   "power": 104933141
  },
  {
   "server": 42005,
   "family": "HARD",
   "power": 81483048
  },
  {
   "server": 42005,
   "family": "PhoeniX",
   "power": 45115934
  },
  {
   "server": 42005,
   "family": "SMERT",
   "power": 35406152
  },
  {
   "server": 42006,
   "family": "INSANE",
   "power": 1446459396
  },
  {
   "server": 42006,
   "family": "XCorurage",
   "power": 999399363
  },
  {
   "server": 42006,
   "family": "Dark■Angels",
   "power": 725133906
  },
  {
   "server": 42006,
   "family": "ПодГрибами",
   "power": 369549914
  },
  {
   "server": 42006,
   "family": "ᴋᴀᴛᴏɴ",
   "power": 335891013
  },
  {
   "server": 42006,
   "family": "Darkness",
   "power": 291171783
  },
  {
   "server": 42006,
   "family": "Царство",
   "power": 281574466
  },
  {
   "server": 42006,
   "family": "АД_ПРЕИСПОДНЯ",
   "power": 171478078
  },
  {
   "server": 42006,
   "family": "FrozyGameYT",
   "power": 145122810
  },
  {
   "server": 42006,
   "family": "InceptionHub",
   "power": 85333241
  },
  {
   "server": 42007,
   "family": "EternalKnights",
   "power": 1397873467
  },
  {
   "server": 42007,
   "family": "ЭлизиуМ",
   "power": 712680550
  },
  {
   "server": 42007,
   "family": "Pawuchki",
   "power": 643484925
  },
  {
   "server": 42007,
   "family": "Урал",
   "power": 556454771
  },
  {
   "server": 42007,
   "family": "Чаепитие",
   "power": 502319660
  },
  {
   "server": 42007,
   "family": "Russia",
   "power": 201995107
  },
  {
   "server": 42007,
   "family": "АНИМЕШНИКИ",
   "power": 181693411
  },
  {
   "server": 42007,
   "family": "чисто_топ_клан",
   "power": 168684161
  },
  {
   "server": 42007,
   "family": "REDEYES",
   "power": 162469741
  },
  {
   "server": 42007,
   "family": "Альянс",
   "power": 156073273
  },
  {
   "server": 42008,
   "family": "9CirclesOfHell",
   "power": 1394575677
  },
  {
   "server": 42008,
   "family": "Spirit",
   "power": 1174004474
  },
  {
   "server": 42008,
   "family": "Кубничка",
   "power": 756130903
  },
  {
   "server": 42008,
   "family": "MidnightBeaver",
   "power": 362372216
  },
  {
   "server": 42008,
   "family": "Cerberus",
   "power": 328289343
  },
  {
   "server": 42008,
   "family": "Hell",
   "power": 317048663
  },
  {
   "server": 42008,
   "family": "Неизвестность",
   "power": 223015213
  },
  {
   "server": 42008,
   "family": "Arctic",
   "power": 208195218
  },
  {
   "server": 42008,
   "family": "Lazur",
   "power": 167372233
  },
  {
   "server": 42008,
   "family": "konoha",
   "power": 130256031
  },
  {
   "server": 42009,
   "family": "฿ESHKA",
   "power": 1553631250
  },
  {
   "server": 42009,
   "family": "24ﾉ7",
   "power": 869212021
  },
  {
   "server": 42009,
   "family": "SHK",
   "power": 646998244
  },
  {
   "server": 42009,
   "family": "ПокойХаоса",
   "power": 479271280
  },
  {
   "server": 42009,
   "family": "Лисий_Храм",
   "power": 310710788
  },
  {
   "server": 42009,
   "family": "Game_Over",
   "power": 304257795
  },
  {
   "server": 42009,
   "family": "ГрибоЕДЫ",
   "power": 235368392
  },
  {
   "server": 42009,
   "family": "Zero",
   "power": 206090384
  },
  {
   "server": 42009,
   "family": "HypeTrain",
   "power": 162629052
  },
  {
   "server": 42009,
   "family": "GameOver",
   "power": 156128487
  },
  {
   "server": 42010,
   "family": "Shadow",
   "power": 1307355750
  },
  {
   "server": 42010,
   "family": "MADNESS",
   "power": 1229279301
  },
  {
   "server": 42010,
   "family": "СССР",
   "power": 628719439
  },
  {
   "server": 42010,
   "family": "Sankt_Legion",
   "power": 494150820
  },
  {
   "server": 42010,
   "family": "InTeam",
   "power": 444426155
  },
  {
   "server": 42010,
   "family": "котики",
   "power": 318511094
  },
  {
   "server": 42010,
   "family": "Chaos",
   "power": 273779205
  },
  {
   "server": 42010,
   "family": "Alfa",
   "power": 182357082
  },
  {
   "server": 42010,
   "family": "ШирайРю",
   "power": 181363341
  },
  {
   "server": 42010,
   "family": "Мухаморы",
   "power": 150154285
  },
  {
   "server": 42011,
   "family": "Ragnarok",
   "power": 1448154132
  },
  {
   "server": 42011,
   "family": "FoRFuN",
   "power": 977665761
  },
  {
   "server": 42011,
   "family": "GoD",
   "power": 820224781
  },
  {
   "server": 42011,
   "family": "Слышу_ZoV",
   "power": 472214744
  },
  {
   "server": 42011,
   "family": "НегрыВПрипяти",
   "power": 411127291
  },
  {
   "server": 42011,
   "family": "SeRaTHiM",
   "power": 364754980
  },
  {
   "server": 42011,
   "family": "ПодПивасник",
   "power": 299696136
  },
  {
   "server": 42011,
   "family": "грибной_суп",
   "power": 289691612
  },
  {
   "server": 42011,
   "family": "joydivision",
   "power": 227830423
  },
  {
   "server": 42011,
   "family": "Тамплиеры",
   "power": 216317827
  },
  {
   "server": 42012,
   "family": "UTOPIA",
   "power": 1219199532
  },
  {
   "server": 42012,
   "family": "Семья",
   "power": 1062370406
  },
  {
   "server": 42012,
   "family": "Omega",
   "power": 963421748
  },
  {
   "server": 42012,
   "family": "PANDORA",
   "power": 493291929
  },
  {
   "server": 42012,
   "family": "BezDonata",
   "power": 257764570
  },
  {
   "server": 42012,
   "family": "GODS",
   "power": 257648872
  },
  {
   "server": 42012,
   "family": "Evil",
   "power": 254146017
  },
  {
   "server": 42012,
   "family": "кугуар",
   "power": 227907768
  },
  {
   "server": 42012,
   "family": "LegionOfDoom",
   "power": 219609299
  },
  {
   "server": 42012,
   "family": "Башня_Магии",
   "power": 213513888
  },
  {
   "server": 42013,
   "family": "Фистоболс",
   "power": 1332096147
  },
  {
   "server": 42013,
   "family": "ForgottenWorld",
   "power": 1003548248
  },
  {
   "server": 42013,
   "family": "Evil",
   "power": 517090266
  },
  {
   "server": 42013,
   "family": "Dragon",
   "power": 429783095
  },
  {
   "server": 42013,
   "family": "ZBS",
   "power": 403662451
  },
  {
   "server": 42013,
   "family": "WaGneR",
   "power": 320467050
  },
  {
   "server": 42013,
   "family": "RuSSkullS",
   "power": 285562423
  },
  {
   "server": 42013,
   "family": "Crocodiles",
   "power": 281902416
  },
  {
   "server": 42013,
   "family": "дракон",
   "power": 255342320
  },
  {
   "server": 42013,
   "family": "КотятьяНорка",
   "power": 231647136
  },
  {
   "server": 42014,
   "family": "Gods_of_Chaos",
   "power": 1019622485
  },
  {
   "server": 42014,
   "family": "MidnightBobr",
   "power": 1019183646
  },
  {
   "server": 42014,
   "family": "DemonKings",
   "power": 819617138
  },
  {
   "server": 42014,
   "family": "Котлетосы",
   "power": 427002419
  },
  {
   "server": 42014,
   "family": "Грибочки",
   "power": 348739174
  },
  {
   "server": 42014,
   "family": "SanPees",
   "power": 276790306
  },
  {
   "server": 42014,
   "family": "БуйныеГрибы",
   "power": 238020310
  },
  {
   "server": 42014,
   "family": "HuskiEAsports",
   "power": 231248922
  },
  {
   "server": 42014,
   "family": "Империя",
   "power": 228225039
  },
  {
   "server": 42014,
   "family": "Поганки",
   "power": 208046215
  },
  {
   "server": 42015,
   "family": "Спирит",
   "power": 1144159865
  },
  {
   "server": 42015,
   "family": "ГОДЛАНД",
   "power": 934570776
  },
  {
   "server": 42015,
   "family": "Черный_Клевер",
   "power": 619853569
  },
  {
   "server": 42015,
   "family": "Гильдия",
   "power": 583922715
  },
  {
   "server": 42015,
   "family": "⸎ꁒꐇꌚꑛ꒓ꆂꆂꁒꌚ⸎",
   "power": 575448780
  },
  {
   "server": 42015,
   "family": "IceCool",
   "power": 434607759
  },
  {
   "server": 42015,
   "family": "Legion",
   "power": 274611765
  },
  {
   "server": 42015,
   "family": "ДОВОД",
   "power": 257877390
  },
  {
   "server": 42015,
   "family": "ЛисийДом",
   "power": 255123369
  },
  {
   "server": 42015,
   "family": "БелыйТигр",
   "power": 212685710
  },
  {
   "server": 42016,
   "family": "SinsFamily",
   "power": 1146643965
  },
  {
   "server": 42016,
   "family": "Despot",
   "power": 908569558
  },
  {
   "server": 42016,
   "family": "НеБеСа",
   "power": 635551183
  },
  {
   "server": 42016,
   "family": "Sparta",
   "power": 468594163
  },
  {
   "server": 42016,
   "family": "GAIN",
   "power": 462889330
  },
  {
   "server": 42016,
   "family": "zavoevatelu",
   "power": 390379406
  },
  {
   "server": 42016,
   "family": "Samoxa_11_RUS",
   "power": 280576606
  },
  {
   "server": 42016,
   "family": "Пустые",
   "power": 261766977
  },
  {
   "server": 42016,
   "family": "PoXyIsT",
   "power": 187327997
  },
  {
   "server": 42016,
   "family": "Грибочкино",
   "power": 165542252
  },
  {
   "server": 42017,
   "family": "Espada",
   "power": 1177597973
  },
  {
   "server": 42017,
   "family": "Ｇ∆ＣＨＩＦＩＧＨＴＣＬＶＢ",
   "power": 820144456
  },
  {
   "server": 42017,
   "family": "TeamVIBE",
   "power": 605161807
  },
  {
   "server": 42017,
   "family": "СПАРТА",
   "power": 505385254
  },
  {
   "server": 42017,
   "family": "LiberumAves",
   "power": 304772022
  },
  {
   "server": 42017,
   "family": "соло",
   "power": 218317099
  },
  {
   "server": 42017,
   "family": "ВСАДНИКИ³",
   "power": 193771957
  },
  {
   "server": 42017,
   "family": "SAD_TENEI",
   "power": 182892625
  },
  {
   "server": 42017,
   "family": "HorusHeresy",
   "power": 159491363
  },
  {
   "server": 42017,
   "family": "Fenix",
   "power": 141719565
  },
  {
   "server": 42018,
   "family": "ГрибноеДерево",
   "power": 1086465056
  },
  {
   "server": 42018,
   "family": "NachalnikiPMC",
   "power": 1019085759
  },
  {
   "server": 42018,
   "family": "Дерзкие",
   "power": 844501756
  },
  {
   "server": 42018,
   "family": "Вавилон",
   "power": 611814511
  },
  {
   "server": 42018,
   "family": "Мухоморы",
   "power": 337880643
  },
  {
   "server": 42018,
   "family": "Царство_Грибов",
   "power": 296035355
  },
  {
   "server": 42018,
   "family": "Поганки",
   "power": 266447068
  },
  {
   "server": 42018,
   "family": "تАДت",
   "power": 262162768
  },
  {
   "server": 42018,
   "family": "SubZero",
   "power": 206504705
  },
  {
   "server": 42018,
   "family": "ГрибыСглазам",
   "power": 202208185
  },
  {
   "server": 42019,
   "family": "DARKFOREST",
   "power": 1104522486
  },
  {
   "server": 42019,
   "family": "DARKFOREST₩2",
   "power": 576544734
  },
  {
   "server": 42019,
   "family": "GAMING",
   "power": 556585377
  },
  {
   "server": 42019,
   "family": "Учиха",
   "power": 386145595
  },
  {
   "server": 42019,
   "family": "TRIADA",
   "power": 353712951
  },
  {
   "server": 42019,
   "family": "Moonshine",
   "power": 352814363
  },
  {
   "server": 42019,
   "family": "SuicideSquad",
   "power": 325863404
  },
  {
   "server": 42019,
   "family": "Россия",
   "power": 322207268
  },
  {
   "server": 42019,
   "family": "Демон",
   "power": 316331867
  },
  {
   "server": 42019,
   "family": "GRIBOK",
   "power": 270723588
  },
  {
   "server": 42020,
   "family": "Dreamers",
   "power": 1144758747
  },
  {
   "server": 42020,
   "family": "Despot",
   "power": 959927558
  },
  {
   "server": 42020,
   "family": "GENESIS",
   "power": 549036643
  },
  {
   "server": 42020,
   "family": "Грибчики",
   "power": 479724102
  },
  {
   "server": 42020,
   "family": "Лисиськи",
   "power": 376424012
  },
  {
   "server": 42020,
   "family": "Нагибаторы",
   "power": 369191718
  },
  {
   "server": 42020,
   "family": "боровики",
   "power": 284203684
  },
  {
   "server": 42020,
   "family": "БелыйГриБ",
   "power": 275659756
  },
  {
   "server": 42020,
   "family": "ТриЕнота",
   "power": 266537322
  },
  {
   "server": 42020,
   "family": "High_Magician",
   "power": 255320148
  },
  {
   "server": 42021,
   "family": "人DOLBIKI人",
   "power": 1067955988
  },
  {
   "server": 42021,
   "family": "HOSPITAL",
   "power": 970241638
  },
  {
   "server": 42021,
   "family": "Altroom",
   "power": 538488417
  },
  {
   "server": 42021,
   "family": "SolidLegion",
   "power": 470666571
  },
  {
   "server": 42021,
   "family": "КусьКусьКлан",
   "power": 462123594
  },
  {
   "server": 42021,
   "family": "KEFIR",
   "power": 415265658
  },
  {
   "server": 42021,
   "family": "GoldenCat",
   "power": 351845763
  },
  {
   "server": 42021,
   "family": "Gorillaz",
   "power": 319719141
  },
  {
   "server": 42021,
   "family": "Дикий",
   "power": 278976552
  },
  {
   "server": 42021,
   "family": "DERSKAY_WL",
   "power": 265294537
  },
  {
   "server": 42022,
   "family": "GRIBNICA",
   "power": 1074666676
  },
  {
   "server": 42022,
   "family": "Мухоморы",
   "power": 404037509
  },
  {
   "server": 42022,
   "family": "RedRoze",
   "power": 376709329
  },
  {
   "server": 42022,
   "family": "ПоКайфу",
   "power": 370021819
  },
  {
   "server": 42022,
   "family": "Спирит",
   "power": 358354848
  },
  {
   "server": 42022,
   "family": "MOMERIES",
   "power": 348284377
  },
  {
   "server": 42022,
   "family": "ПруД",
   "power": 312174205
  },
  {
   "server": 42022,
   "family": "Exfighter",
   "power": 258105795
  },
  {
   "server": 42022,
   "family": "Кефир",
   "power": 255952969
  },
  {
   "server": 42022,
   "family": "ДурмаН",
   "power": 235988503
  },
  {
   "server": 42023,
   "family": "Начало",
   "power": 840272703
  },
  {
   "server": 42023,
   "family": "Toxic",
   "power": 621167300
  },
  {
   "server": 42023,
   "family": "Кайф",
   "power": 526344358
  },
  {
   "server": 42023,
   "family": "Darth",
   "power": 444658608
  },
  {
   "server": 42023,
   "family": "SPARTA",
   "power": 332416188
  },
  {
   "server": 42023,
   "family": "Doflamingo",
   "power": 287906475
  },
  {
   "server": 42023,
   "family": "Дисгардиум",
   "power": 273360139
  },
  {
   "server": 42023,
   "family": "BBCS",
   "power": 258732420
  },
  {
   "server": 42023,
   "family": "Псилоцибиновые",
   "power": 253987239
  },
  {
   "server": 42023,
   "family": "Колокольчик",
   "power": 249073754
  },
  {
   "server": 42024,
   "family": "Империя",
   "power": 824595956
  },
  {
   "server": 42024,
   "family": "PAGANKA",
   "power": 737147504
  },
  {
   "server": 42024,
   "family": "TheFireGem",
   "power": 678363441
  },
  {
   "server": 42024,
   "family": "Утопия",
   "power": 416412840
  },
  {
   "server": 42024,
   "family": "империя",
   "power": 328026521
  },
  {
   "server": 42024,
   "family": "Darksiders",
   "power": 289985064
  },
  {
   "server": 42024,
   "family": "__xxBoSSxx__",
   "power": 260507222
  },
  {
   "server": 42024,
   "family": "Ukraine_team",
   "power": 243291089
  },
  {
   "server": 42024,
   "family": "Liga",
   "power": 242936466
  },
  {
   "server": 42024,
   "family": "Chaos",
   "power": 221940228
  },
  {
   "server": 42025,
   "family": "Мухоморчики",
   "power": 739958997
  },
  {
   "server": 42025,
   "family": "подпивасник",
   "power": 592112183
  },
  {
   "server": 42025,
   "family": "Regards",
   "power": 578267015
  },
  {
   "server": 42025,
   "family": "ДеТи_АдА",
   "power": 310600188
  },
  {
   "server": 42025,
   "family": "Коффеин",
   "power": 305584133
  },
  {
   "server": 42025,
   "family": "Grib_tim",
   "power": 278341286
  },
  {
   "server": 42025,
   "family": "Jackie",
   "power": 225404400
  },
  {
   "server": 42025,
   "family": "Hellheim",
   "power": 225216443
  },
  {
   "server": 42025,
   "family": "Karuno",
   "power": 216480427
  },
  {
   "server": 42025,
   "family": "ЗАВОД",
   "power": 213477003
  },
  {
   "server": 42026,
   "family": "Kingdom",
   "power": 932425872
  },
  {
   "server": 42026,
   "family": "SnowTeam",
   "power": 508731945
  },
  {
   "server": 42026,
   "family": "Хантеры",
   "power": 379854634
  },
  {
   "server": 42026,
   "family": "UmbrellaCorp",
   "power": 322075800
  },
  {
   "server": 42026,
   "family": "ГрибПарк",
   "power": 313514280
  },
  {
   "server": 42026,
   "family": "сила",
   "power": 263949507
  },
  {
   "server": 42026,
   "family": "EjikGames",
   "power": 241731068
  },
  {
   "server": 42026,
   "family": "Serendipity",
   "power": 228875531
  },
  {
   "server": 42026,
   "family": "СМУ",
   "power": 223555694
  },
  {
   "server": 42026,
   "family": "тулун",
   "power": 211470297
  },
  {
   "server": 42027,
   "family": "Каноха",
   "power": 784175089
  },
  {
   "server": 42027,
   "family": "AKATSUKI",
   "power": 528913108
  },
  {
   "server": 42027,
   "family": "Leveling",
   "power": 385232937
  },
  {
   "server": 42027,
   "family": "JUDIK",
   "power": 337970116
  },
  {
   "server": 42027,
   "family": "ЛëдТьмы",
   "power": 299639701
  },
  {
   "server": 42027,
   "family": "Malye",
   "power": 293070484
  },
  {
   "server": 42027,
   "family": "𝕭𝕬𝕷𝕯𝕸𝕬N",
   "power": 270387809
  },
  {
   "server": 42027,
   "family": "HORNETS",
   "power": 202905881
  },
  {
   "server": 42027,
   "family": "Честь",
   "power": 194388464
  },
  {
   "server": 42027,
   "family": "RTK",
   "power": 191364937
  },
  {
   "server": 42028,
   "family": "BeaZEDYouTube",
   "power": 843898863
  },
  {
   "server": 42028,
   "family": "Лисиськи",
   "power": 622332779
  },
  {
   "server": 42028,
   "family": "КусьКусьКлан",
   "power": 494495291
  },
  {
   "server": 42028,
   "family": "Nightters",
   "power": 369290518
  },
  {
   "server": 42028,
   "family": "Folklèr",
   "power": 275623872
  },
  {
   "server": 42028,
   "family": "ааааааа",
   "power": 225793254
  },
  {
   "server": 42028,
   "family": "Грибовня",
   "power": 200868408
  },
  {
   "server": 42028,
   "family": "СусликиЗло",
   "power": 200031804
  },
  {
   "server": 42028,
   "family": "FireAndSword",
   "power": 182911858
  },
  {
   "server": 42028,
   "family": "LEGION",
   "power": 177690563
  },
  {
   "server": 42029,
   "family": "LimitedEdition",
   "power": 840951506
  },
  {
   "server": 42029,
   "family": "Север",
   "power": 670880950
  },
  {
   "server": 42029,
   "family": "Грибнойсуп",
   "power": 509688723
  },
  {
   "server": 42029,
   "family": "релакс",
   "power": 312895083
  },
  {
   "server": 42029,
   "family": "ᴀʙsᴏʟᴜᴛᴇ",
   "power": 301908323
  },
  {
   "server": 42029,
   "family": "Спарта",
   "power": 242160936
  },
  {
   "server": 42029,
   "family": "25СМ",
   "power": 236453511
  },
  {
   "server": 42029,
   "family": "AniFanDub",
   "power": 233098534
  },
  {
   "server": 42029,
   "family": "Outcast",
   "power": 216835577
  },
  {
   "server": 42029,
   "family": "Дединсайдеры",
   "power": 182317784
  },
  {
   "server": 42030,
   "family": "Moonlight",
   "power": 701436185
  },
  {
   "server": 42030,
   "family": "Гриберия",
   "power": 670775268
  },
  {
   "server": 42030,
   "family": "скитальцы",
   "power": 311598483
  },
  {
   "server": 42030,
   "family": "СССР",
   "power": 295139119
  },
  {
   "server": 42030,
   "family": "smertniki",
   "power": 257718442
  },
  {
   "server": 42030,
   "family": "кофейня",
   "power": 242651642
  },
  {
   "server": 42030,
   "family": "AMAZONKA",
   "power": 232396661
  },
  {
   "server": 42030,
   "family": "EmeraldFury",
   "power": 229496635
  },
  {
   "server": 42030,
   "family": "么NatVinser么",
   "power": 222783141
  },
  {
   "server": 42030,
   "family": "Fire",
   "power": 195575258
  },
  {
   "server": 42031,
   "family": "Имбанутые",
   "power": 734694616
  },
  {
   "server": 42031,
   "family": "БОРОВИЧКИ",
   "power": 458051399
  },
  {
   "server": 42031,
   "family": "Дружина",
   "power": 440676075
  },
  {
   "server": 42031,
   "family": "SHADOWS_SQUD",
   "power": 345362816
  },
  {
   "server": 42031,
   "family": "Absolute",
   "power": 250944449
  },
  {
   "server": 42031,
   "family": "CCCP",
   "power": 250772116
  },
  {
   "server": 42031,
   "family": "Империум",
   "power": 245571473
  },
  {
   "server": 42031,
   "family": "каноха",
   "power": 224537769
  },
  {
   "server": 42031,
   "family": "Поляночка",
   "power": 219408002
  },
  {
   "server": 42031,
   "family": "EmeraldFury",
   "power": 211374382
  },
  {
   "server": 42032,
   "family": "Alion",
   "power": 719974426
  },
  {
   "server": 42032,
   "family": "ТОПовые",
   "power": 537220985
  },
  {
   "server": 42032,
   "family": "Rtims",
   "power": 401603976
  },
  {
   "server": 42032,
   "family": "ГребницА",
   "power": 372195105
  },
  {
   "server": 42032,
   "family": "ТАЙФУН",
   "power": 280545567
  },
  {
   "server": 42032,
   "family": "Банан4ик",
   "power": 269867716
  },
  {
   "server": 42032,
   "family": "KittyCats",
   "power": 238166039
  },
  {
   "server": 42032,
   "family": "Eternity",
   "power": 234180494
  },
  {
   "server": 42032,
   "family": "СССР",
   "power": 169394154
  },
  {
   "server": 42032,
   "family": "Перехват",
   "power": 163679307
  },
  {
   "server": 42033,
   "family": "Имбанутые",
   "power": 556920972
  },
  {
   "server": 42033,
   "family": "Quarks",
   "power": 460224829
  },
  {
   "server": 42033,
   "family": "RedMoon",
   "power": 298835753
  },
  {
   "server": 42033,
   "family": "FriendlyFire",
   "power": 266973783
  },
  {
   "server": 42033,
   "family": "МагическийГриб",
   "power": 235261793
  },
  {
   "server": 42033,
   "family": "Bonus",
   "power": 211613962
  },
  {
   "server": 42033,
   "family": "Феникс",
   "power": 208206962
  },
  {
   "server": 42033,
   "family": "недонатеры",
   "power": 201723849
  },
  {
   "server": 42033,
   "family": "Hellequin",
   "power": 198821588
  },
  {
   "server": 42033,
   "family": "ГрибоМаги",
   "power": 164440761
  },
  {
   "server": 42034,
   "family": "Psychokids",
   "power": 460658104
  },
  {
   "server": 42034,
   "family": "NewAge",
   "power": 423570771
  },
  {
   "server": 42034,
   "family": "перехват",
   "power": 261035508
  },
  {
   "server": 42034,
   "family": "HentaiAcademy",
   "power": 200078168
  },
  {
   "server": 42034,
   "family": "negr",
   "power": 191544825
  },
  {
   "server": 42034,
   "family": "МыТипаГрибы",
   "power": 188391135
  },
  {
   "server": 42034,
   "family": "варвары",
   "power": 188199900
  },
  {
   "server": 42034,
   "family": "Покачерушки",
   "power": 187162750
  },
  {
   "server": 42034,
   "family": "PortalVR",
   "power": 185205106
  },
  {
   "server": 42034,
   "family": "ZaРусь",
   "power": 177430091
  },
  {
   "server": 42035,
   "family": "DragonCastle",
   "power": 400433667
  },
  {
   "server": 42035,
   "family": "LostParadise",
   "power": 271037938
  },
  {
   "server": 42035,
   "family": "Россия",
   "power": 239704166
  },
  {
   "server": 42035,
   "family": "ГрибПати",
   "power": 236671924
  },
  {
   "server": 42035,
   "family": "DumSpiroSpero",
   "power": 170544103
  },
  {
   "server": 42035,
   "family": "AmateurBaking",
   "power": 169052666
  },
  {
   "server": 42035,
   "family": "Империя",
   "power": 155144970
  },
  {
   "server": 42035,
   "family": "RTK",
   "power": 140733931
  },
  {
   "server": 42035,
   "family": "Toxic",
   "power": 139266058
  },
  {
   "server": 42035,
   "family": "Легенды",
   "power": 129939422
  },
  {
   "server": 42036,
   "family": "Family",
   "power": 281145120
  },
  {
   "server": 42036,
   "family": "Ragnarök",
   "power": 225793197
  },
  {
   "server": 42036,
   "family": "ATG",
   "power": 189377410
  },
  {
   "server": 42036,
   "family": "Русичи",
   "power": 141380021
  },
  {
   "server": 42036,
   "family": "ГЛЮКИ",
   "power": 137972371
  },
  {
   "server": 42036,
   "family": "LegendaryMush",
   "power": 136379465
  },
  {
   "server": 42036,
   "family": "WoR",
   "power": 134344130
  },
  {
   "server": 42036,
   "family": "Блекджек",
   "power": 127212811
  },
  {
   "server": 42036,
   "family": "HellDivers",
   "power": 119974472
  },
  {
   "server": 42036,
   "family": "MementoMori",
   "power": 105037134
  }
].sort((a, b) => b.power - a.power).slice(0, 500);
/* DATA */

const rowsPerPage = 10;
let currentPage = 1;

const rankingTable = document.querySelector("#ranking-table tbody");
const pagination = document.querySelector("#pagination");
const totalCountSpan = document.querySelector("#total-count");

function updateTable(page) {
  rankingTable.innerHTML = "";
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const dataToShow = familyPowers.slice(start, end);

  dataToShow.forEach((item, index) => {
    const row = document.createElement("tr");
    row.classList.add(
      "odd:bg-white",
      "odd:dark:bg-gray-900",
      "even:bg-gray-50",
      "even:dark:bg-gray-800"
    );
    row.innerHTML = `
      <td class="py-4 text-center">${start + index + 1}</td>
      <td class="px-4 py-4 text-center">${item.family}</td>
      <td class="px-4 py-4 text-center">${item.server}</td>
      <td class="py-4 text-center">${item.power.toLocaleString('en', { maximumFractionDigits: 0 })}</td>
    `;
    rankingTable.appendChild(row);
  });

  document.getElementById("page-start").textContent = start + 1;
  document.getElementById("page-end").textContent = Math.min(
    end,
    familyPowers.length
  );
}

function updatePagination() {
  const pageButtonClasses = pagination.querySelector("#example")?.classList;
  const elements = pagination.querySelectorAll(".generated-dinamically");
  elements?.forEach((element) => {
    element.remove();
  });
  let pages = [];

  const numPages = Math.ceil(familyPowers.length / rowsPerPage);

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(numPages, currentPage + 2);
  
  for (let i = start; i <= end; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.textContent = i;
    a.classList.add(...pageButtonClasses, "generated-dinamically");
    a.classList.remove("hidden");

    a.addEventListener("click", () => {
      currentPage = parseInt(a.textContent);
      updateTable(currentPage);
      updatePagination();
    });

    li.appendChild(a);
    pagination.insertBefore(
      li,
      pagination.children[pagination.children.length - 2]
    );
    pages = [...pages, a];

    updatePageSelected();
  }

  //const prevBtn = pagination.querySelector(".prev a ");
  const firstBtn = pagination.querySelector(".first a");
  //const nextBtn = pagination.querySelector(".next a");
  const lastBtn = pagination.querySelector(".last a");

  /*
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateTable(currentPage);
      updatePageSelected();
    }
  });
  */

  firstBtn.addEventListener("click", () => {
      currentPage = 1;
      updateTable(currentPage);
      updatePagination();
  });

  /*
  nextBtn.addEventListener("click", () => {
    if (currentPage < numPages) {
      currentPage++;
      updateTable(currentPage);
      updatePageSelected();
    }
  });
  */

  lastBtn.addEventListener("click", () => {
    currentPage = numPages;
    updateTable(currentPage);
    updatePagination();
  });

  totalCountSpan.textContent = familyPowers.length;
}

function updatePageSelected() {
  const pageButtons = pagination.querySelectorAll(".generated-dinamically");
  pageButtons.forEach((button) => {
    if (button.textContent === currentPage.toString()) {
      button.classList.add("text-white", "font-semibold");
      button.setAttribute("aria-current", "page");
    } else {
      button.classList.remove("text-white", "font-semibold");
      button.removeAttribute("aria-current");
    }
  });
}

updateTable(currentPage);
updatePagination();

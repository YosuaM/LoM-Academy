/* DATA */
const familyPowers = [
  {
   "server": 1001,
   "family": "Origin",
   "power": 2065430495
  },
  {
   "server": 1001,
   "family": "TriadPhoenix",
   "power": 1737949514
  },
  {
   "server": 1001,
   "family": "Vaultcity",
   "power": 1694749453
  },
  {
   "server": 1001,
   "family": "TriadFenrir",
   "power": 1482541184
  },
  {
   "server": 1001,
   "family": "TriadHorus",
   "power": 580888965
  },
  {
   "server": 1001,
   "family": "Clannabis",
   "power": 498278777
  },
  {
   "server": 1001,
   "family": "BeyondTheWall",
   "power": 496059414
  },
  {
   "server": 1001,
   "family": "Aces",
   "power": 490529463
  },
  {
   "server": 1001,
   "family": "GastroShrooms",
   "power": 295387003
  },
  {
   "server": 1001,
   "family": "Originll",
   "power": 292571954
  },
  {
   "server": 1002,
   "family": "EGC",
   "power": 2257497943
  },
  {
   "server": 1002,
   "family": "ChaoticMushies",
   "power": 1440744137
  },
  {
   "server": 1002,
   "family": "CoffeeBreak",
   "power": 1291998441
  },
  {
   "server": 1002,
   "family": "Anonymous",
   "power": 1244909214
  },
  {
   "server": 1002,
   "family": "Purgatory",
   "power": 1145690054
  },
  {
   "server": 1002,
   "family": "The_OG_Shrooms",
   "power": 616914532
  },
  {
   "server": 1002,
   "family": "Mushies",
   "power": 607545240
  },
  {
   "server": 1002,
   "family": "Terrasen",
   "power": 501165971
  },
  {
   "server": 1002,
   "family": "DooM",
   "power": 341351564
  },
  {
   "server": 1002,
   "family": "《Tempare》",
   "power": 340474799
  },
  {
   "server": 1003,
   "family": "UnitY",
   "power": 2107853383
  },
  {
   "server": 1003,
   "family": "TheCoop",
   "power": 1757270127
  },
  {
   "server": 1003,
   "family": "ShroomFactory",
   "power": 1474632063
  },
  {
   "server": 1003,
   "family": "Unityll",
   "power": 1157895075
  },
  {
   "server": 1003,
   "family": "chicken",
   "power": 713673296
  },
  {
   "server": 1003,
   "family": "SycoTherapy",
   "power": 559055532
  },
  {
   "server": 1003,
   "family": "Olympus",
   "power": 435368139
  },
  {
   "server": 1003,
   "family": "KarnageRealm",
   "power": 267664441
  },
  {
   "server": 1003,
   "family": "ETERNALS",
   "power": 263754075
  },
  {
   "server": 1003,
   "family": "Mafia",
   "power": 239502826
  },
  {
   "server": 1004,
   "family": "HIVE",
   "power": 2243482896
  },
  {
   "server": 1004,
   "family": "MagicMushrooms",
   "power": 1773243821
  },
  {
   "server": 1004,
   "family": "PowerBottoms",
   "power": 1312686722
  },
  {
   "server": 1004,
   "family": "Exodus",
   "power": 989554918
  },
  {
   "server": 1004,
   "family": "FRIED",
   "power": 658941113
  },
  {
   "server": 1004,
   "family": "ShroomZone",
   "power": 446381406
  },
  {
   "server": 1004,
   "family": "Shroomies",
   "power": 437910814
  },
  {
   "server": 1004,
   "family": "RANK1",
   "power": 385827071
  },
  {
   "server": 1004,
   "family": "GlitterFarts",
   "power": 378864012
  },
  {
   "server": 1004,
   "family": "Dragonkin",
   "power": 349368259
  },
  {
   "server": 1005,
   "family": "Mycelia",
   "power": 2098765195
  },
  {
   "server": 1005,
   "family": "Akatsuki",
   "power": 1669347763
  },
  {
   "server": 1005,
   "family": "CCDeclined",
   "power": 1298914436
  },
  {
   "server": 1005,
   "family": "TheChickens",
   "power": 541259602
  },
  {
   "server": 1005,
   "family": "Shroomacon",
   "power": 520549270
  },
  {
   "server": 1005,
   "family": "Shroomates",
   "power": 442551542
  },
  {
   "server": 1005,
   "family": "CelestialRose",
   "power": 435351635
  },
  {
   "server": 1005,
   "family": "Shroomdom",
   "power": 281081964
  },
  {
   "server": 1005,
   "family": "idk",
   "power": 216867339
  },
  {
   "server": 1005,
   "family": "TeaParty",
   "power": 185425581
  },
  {
   "server": 1006,
   "family": "FairyTale",
   "power": 1999099012
  },
  {
   "server": 1006,
   "family": "HoneyJade",
   "power": 1595697942
  },
  {
   "server": 1006,
   "family": "OpiuMush",
   "power": 1125523908
  },
  {
   "server": 1006,
   "family": "Unseen",
   "power": 549205503
  },
  {
   "server": 1006,
   "family": "Shroom_Power",
   "power": 316470672
  },
  {
   "server": 1006,
   "family": "Luminous",
   "power": 270757987
  },
  {
   "server": 1006,
   "family": "Alfheim",
   "power": 264739668
  },
  {
   "server": 1006,
   "family": "Phoenix",
   "power": 227648032
  },
  {
   "server": 1006,
   "family": "Powershrooms",
   "power": 193332243
  },
  {
   "server": 1006,
   "family": "ZazaLand",
   "power": 170160383
  },
  {
   "server": 1007,
   "family": "PANTHEON",
   "power": 2227054907
  },
  {
   "server": 1007,
   "family": "CthuwuFwtagn",
   "power": 1201362139
  },
  {
   "server": 1007,
   "family": "SnuggleHuddle",
   "power": 1006015427
  },
  {
   "server": 1007,
   "family": "Heaven",
   "power": 859114206
  },
  {
   "server": 1007,
   "family": "Evergreen",
   "power": 814187606
  },
  {
   "server": 1007,
   "family": "Lethal",
   "power": 336644130
  },
  {
   "server": 1007,
   "family": "RAGNAROK",
   "power": 321387499
  },
  {
   "server": 1007,
   "family": "Shroomywoomy",
   "power": 270558447
  },
  {
   "server": 1007,
   "family": "YeahBuddy",
   "power": 262217503
  },
  {
   "server": 1007,
   "family": "Valhalla",
   "power": 226007545
  },
  {
   "server": 1008,
   "family": "Rebirth",
   "power": 2159635275
  },
  {
   "server": 1008,
   "family": "psychedelic",
   "power": 1540541644
  },
  {
   "server": 1008,
   "family": "LampShit",
   "power": 969927431
  },
  {
   "server": 1008,
   "family": "٭𝔾ood𝕍ibes٭",
   "power": 674451704
  },
  {
   "server": 1008,
   "family": "THESMURFS",
   "power": 338831077
  },
  {
   "server": 1008,
   "family": "Light",
   "power": 279470840
  },
  {
   "server": 1008,
   "family": "mantras",
   "power": 267021928
  },
  {
   "server": 1008,
   "family": "Snowfall",
   "power": 261896416
  },
  {
   "server": 1008,
   "family": "Topshroom",
   "power": 261424694
  },
  {
   "server": 1008,
   "family": "Geese",
   "power": 236058936
  },
  {
   "server": 1009,
   "family": "LostShrooms",
   "power": 1885496758
  },
  {
   "server": 1009,
   "family": "Tempest",
   "power": 1377117274
  },
  {
   "server": 1009,
   "family": "SolCovenant",
   "power": 487344274
  },
  {
   "server": 1009,
   "family": "ShroominOut",
   "power": 454392718
  },
  {
   "server": 1009,
   "family": "TopShelfShroom",
   "power": 353349727
  },
  {
   "server": 1009,
   "family": "MintyGang",
   "power": 282268005
  },
  {
   "server": 1009,
   "family": "ShadowWarriors",
   "power": 281107490
  },
  {
   "server": 1009,
   "family": "HellsDragons",
   "power": 229583968
  },
  {
   "server": 1009,
   "family": "Mushroom",
   "power": 219452935
  },
  {
   "server": 1009,
   "family": "RavensNest",
   "power": 170330557
  },
  {
   "server": 1010,
   "family": "Legends",
   "power": 2162071327
  },
  {
   "server": 1010,
   "family": "Myths",
   "power": 927876162
  },
  {
   "server": 1010,
   "family": "OnePiece",
   "power": 462396784
  },
  {
   "server": 1010,
   "family": "Stoners",
   "power": 390369640
  },
  {
   "server": 1010,
   "family": "Day1s",
   "power": 318865688
  },
  {
   "server": 1010,
   "family": "DRUNKInSHROOMs",
   "power": 310807100
  },
  {
   "server": 1010,
   "family": "Genesis",
   "power": 289942411
  },
  {
   "server": 1010,
   "family": "Kindness",
   "power": 262524668
  },
  {
   "server": 1010,
   "family": "FungiFam",
   "power": 240414090
  },
  {
   "server": 1010,
   "family": "Nazgûl",
   "power": 227403929
  },
  {
   "server": 1011,
   "family": "MagicMushrooms",
   "power": 1889259665
  },
  {
   "server": 1011,
   "family": "Strawhats",
   "power": 1172223198
  },
  {
   "server": 1011,
   "family": "InsomniaShroom",
   "power": 799155830
  },
  {
   "server": 1011,
   "family": "BoomShrooms",
   "power": 319693307
  },
  {
   "server": 1011,
   "family": "SuperShrooms",
   "power": 285371026
  },
  {
   "server": 1011,
   "family": "Psych",
   "power": 227986251
  },
  {
   "server": 1011,
   "family": "Toadfamily",
   "power": 209229204
  },
  {
   "server": 1011,
   "family": "Shroomery",
   "power": 193499792
  },
  {
   "server": 1011,
   "family": "FungiEmpire",
   "power": 180894097
  },
  {
   "server": 1011,
   "family": "RICEnBEANS",
   "power": 164310470
  },
  {
   "server": 1012,
   "family": "Celestial",
   "power": 1954953360
  },
  {
   "server": 1012,
   "family": "Mycelium",
   "power": 1305964241
  },
  {
   "server": 1012,
   "family": "Darkspore",
   "power": 1269912103
  },
  {
   "server": 1012,
   "family": "Mushroom",
   "power": 350392840
  },
  {
   "server": 1012,
   "family": "NARNIA",
   "power": 319596014
  },
  {
   "server": 1012,
   "family": "TheCouncil",
   "power": 293379656
  },
  {
   "server": 1012,
   "family": "ShadowGarden",
   "power": 236911443
  },
  {
   "server": 1012,
   "family": "PowerShrooms",
   "power": 200255241
  },
  {
   "server": 1012,
   "family": "Psychedelic",
   "power": 178882534
  },
  {
   "server": 1012,
   "family": "Scrooms",
   "power": 175092242
  },
  {
   "server": 1013,
   "family": "Void",
   "power": 1926975131
  },
  {
   "server": 1013,
   "family": "WaffleHouse",
   "power": 1438548349
  },
  {
   "server": 1013,
   "family": "Onepiece",
   "power": 588684308
  },
  {
   "server": 1013,
   "family": "RavenMoore",
   "power": 431214689
  },
  {
   "server": 1013,
   "family": "Rebellious",
   "power": 380386938
  },
  {
   "server": 1013,
   "family": "MoonPalace",
   "power": 364579395
  },
  {
   "server": 1013,
   "family": "Pineapple",
   "power": 249930651
  },
  {
   "server": 1013,
   "family": "AnorLondo",
   "power": 209070364
  },
  {
   "server": 1013,
   "family": "Shiitake",
   "power": 197198163
  },
  {
   "server": 1013,
   "family": "DeadlySlimes",
   "power": 176286863
  },
  {
   "server": 1014,
   "family": "Family",
   "power": 2252924293
  },
  {
   "server": 1014,
   "family": "Dashrooms",
   "power": 1165855326
  },
  {
   "server": 1014,
   "family": "DrunkPandas",
   "power": 667172738
  },
  {
   "server": 1014,
   "family": "SHROOMIN",
   "power": 461383196
  },
  {
   "server": 1014,
   "family": "Loveloyalty",
   "power": 330836530
  },
  {
   "server": 1014,
   "family": "DaBois",
   "power": 302785211
  },
  {
   "server": 1014,
   "family": "FungusFamily",
   "power": 264675271
  },
  {
   "server": 1014,
   "family": "Shadow",
   "power": 257626233
  },
  {
   "server": 1014,
   "family": "bbc",
   "power": 211723874
  },
  {
   "server": 1014,
   "family": "OGShroomers",
   "power": 203710803
  },
  {
   "server": 1015,
   "family": "Wonderland",
   "power": 1901467623
  },
  {
   "server": 1015,
   "family": "Skywalkers",
   "power": 1753110054
  },
  {
   "server": 1015,
   "family": "MushStompas",
   "power": 727892769
  },
  {
   "server": 1015,
   "family": "Shroomlings",
   "power": 495582727
  },
  {
   "server": 1015,
   "family": "USA",
   "power": 266499046
  },
  {
   "server": 1015,
   "family": "Traveleurs",
   "power": 242595293
  },
  {
   "server": 1015,
   "family": "MagicShroomies",
   "power": 242460464
  },
  {
   "server": 1015,
   "family": "Ascension",
   "power": 237573992
  },
  {
   "server": 1015,
   "family": "ITsADiddyParty",
   "power": 223179664
  },
  {
   "server": 1015,
   "family": "Trippyshrooms",
   "power": 177196454
  },
  {
   "server": 1016,
   "family": "Vamp🦇",
   "power": 1758048647
  },
  {
   "server": 1016,
   "family": "Mycophobia",
   "power": 1270507593
  },
  {
   "server": 1016,
   "family": "Legends",
   "power": 893637182
  },
  {
   "server": 1016,
   "family": "SporeTorn",
   "power": 734763409
  },
  {
   "server": 1016,
   "family": "Shroomsies",
   "power": 333600945
  },
  {
   "server": 1016,
   "family": "LegionOfShroom",
   "power": 268182281
  },
  {
   "server": 1016,
   "family": "SporeSquad",
   "power": 264385112
  },
  {
   "server": 1016,
   "family": "flameheart",
   "power": 243570913
  },
  {
   "server": 1016,
   "family": "DeathCult",
   "power": 240242506
  },
  {
   "server": 1016,
   "family": "shroomdoom",
   "power": 217590423
  },
  {
   "server": 1017,
   "family": "ShroomWalker",
   "power": 1724205273
  },
  {
   "server": 1017,
   "family": "StrawHats",
   "power": 1514043553
  },
  {
   "server": 1017,
   "family": "Alpha",
   "power": 1242048044
  },
  {
   "server": 1017,
   "family": "TheRider",
   "power": 360168239
  },
  {
   "server": 1017,
   "family": "Myconids",
   "power": 326182421
  },
  {
   "server": 1017,
   "family": "FungiFanatics",
   "power": 313060847
  },
  {
   "server": 1017,
   "family": "MagicMushrooms",
   "power": 268494292
  },
  {
   "server": 1017,
   "family": "Hellsing",
   "power": 252080168
  },
  {
   "server": 1017,
   "family": "ImmortalFamily",
   "power": 216467036
  },
  {
   "server": 1017,
   "family": "JurassicPark",
   "power": 185308810
  },
  {
   "server": 1018,
   "family": "WeAreGay",
   "power": 1982931245
  },
  {
   "server": 1018,
   "family": "FruityPebbles",
   "power": 1669401801
  },
  {
   "server": 1018,
   "family": "SnakTopia",
   "power": 707963099
  },
  {
   "server": 1018,
   "family": "SPORE",
   "power": 347277649
  },
  {
   "server": 1018,
   "family": "ShroomWarriors",
   "power": 335072960
  },
  {
   "server": 1018,
   "family": "KingdomShoom",
   "power": 247244039
  },
  {
   "server": 1018,
   "family": "Sinister",
   "power": 245676197
  },
  {
   "server": 1018,
   "family": "Vikings",
   "power": 189936616
  },
  {
   "server": 1018,
   "family": "Void",
   "power": 133333924
  },
  {
   "server": 1018,
   "family": "Bigshroom",
   "power": 116662611
  },
  {
   "server": 1019,
   "family": "ThiccFans",
   "power": 1843651118
  },
  {
   "server": 1019,
   "family": "Moomoo",
   "power": 1223386054
  },
  {
   "server": 1019,
   "family": "Thicc",
   "power": 800274188
  },
  {
   "server": 1019,
   "family": "Synodic",
   "power": 376027632
  },
  {
   "server": 1019,
   "family": "TheParthenon",
   "power": 312828626
  },
  {
   "server": 1019,
   "family": "Akatsuki",
   "power": 292767287
  },
  {
   "server": 1019,
   "family": "Oricalcos",
   "power": 219229286
  },
  {
   "server": 1019,
   "family": "HighElfs",
   "power": 202985468
  },
  {
   "server": 1019,
   "family": "GothsUnite",
   "power": 166502145
  },
  {
   "server": 1019,
   "family": "CrimsonTide",
   "power": 165483094
  },
  {
   "server": 1020,
   "family": "The_OGs",
   "power": 2016215746
  },
  {
   "server": 1020,
   "family": "LEGION",
   "power": 1121414499
  },
  {
   "server": 1020,
   "family": "GoldShrooms",
   "power": 786667228
  },
  {
   "server": 1020,
   "family": "MagicMushies",
   "power": 709271909
  },
  {
   "server": 1020,
   "family": "Asheholes",
   "power": 552848524
  },
  {
   "server": 1020,
   "family": "SporeCookies",
   "power": 415767880
  },
  {
   "server": 1020,
   "family": "MushMadness",
   "power": 308578296
  },
  {
   "server": 1020,
   "family": "ShroomGods",
   "power": 281363596
  },
  {
   "server": 1020,
   "family": "Nazarick",
   "power": 229477314
  },
  {
   "server": 1020,
   "family": "Shroomies",
   "power": 227649605
  },
  {
   "server": 1021,
   "family": "420Shrooms",
   "power": 1810636283
  },
  {
   "server": 1021,
   "family": "MushyRooms",
   "power": 1111532686
  },
  {
   "server": 1021,
   "family": "Immortals",
   "power": 997328955
  },
  {
   "server": 1021,
   "family": "Chromatica",
   "power": 398937110
  },
  {
   "server": 1021,
   "family": "DemonsInc",
   "power": 335660918
  },
  {
   "server": 1021,
   "family": "ShroomLand",
   "power": 277521464
  },
  {
   "server": 1021,
   "family": "FungusRaiders",
   "power": 221206755
  },
  {
   "server": 1021,
   "family": "Shroomies",
   "power": 194168191
  },
  {
   "server": 1021,
   "family": "ShroomShootas",
   "power": 180787611
  },
  {
   "server": 1021,
   "family": "LGBT",
   "power": 169020671
  },
  {
   "server": 1022,
   "family": "DragonAge",
   "power": 1907169999
  },
  {
   "server": 1022,
   "family": "shrooms",
   "power": 1396158221
  },
  {
   "server": 1022,
   "family": "OwO",
   "power": 674200264
  },
  {
   "server": 1022,
   "family": "JustChilln",
   "power": 462828996
  },
  {
   "server": 1022,
   "family": "BadDragons",
   "power": 274735945
  },
  {
   "server": 1022,
   "family": "Valhalla",
   "power": 228779961
  },
  {
   "server": 1022,
   "family": "Mushrooms",
   "power": 216325413
  },
  {
   "server": 1022,
   "family": "MagicMushroom",
   "power": 210694557
  },
  {
   "server": 1022,
   "family": "MapleTree",
   "power": 210130394
  },
  {
   "server": 1022,
   "family": "weed",
   "power": 206786067
  },
  {
   "server": 1023,
   "family": "Elite",
   "power": 1788733522
  },
  {
   "server": 1023,
   "family": "Mush_Supremacy",
   "power": 1202766030
  },
  {
   "server": 1023,
   "family": "LitShrooms",
   "power": 936345715
  },
  {
   "server": 1023,
   "family": "Pengu",
   "power": 607713969
  },
  {
   "server": 1023,
   "family": "ShroomBlades",
   "power": 368526287
  },
  {
   "server": 1023,
   "family": "MushroomGang",
   "power": 269611530
  },
  {
   "server": 1023,
   "family": "The_Pickle_Jar",
   "power": 246325862
  },
  {
   "server": 1023,
   "family": "JujutsuKaisen",
   "power": 244659137
  },
  {
   "server": 1023,
   "family": "Psychy_shrooms",
   "power": 218084159
  },
  {
   "server": 1023,
   "family": "Reapers",
   "power": 212883983
  },
  {
   "server": 1024,
   "family": "Shroomys",
   "power": 1905447209
  },
  {
   "server": 1024,
   "family": "Misfits",
   "power": 1252900534
  },
  {
   "server": 1024,
   "family": "ArchDevils",
   "power": 1216737248
  },
  {
   "server": 1024,
   "family": "ShroomKingdom",
   "power": 339727573
  },
  {
   "server": 1024,
   "family": "SithShrooms",
   "power": 324825738
  },
  {
   "server": 1024,
   "family": "WitchyCoven",
   "power": 317504050
  },
  {
   "server": 1024,
   "family": "THESTRONGEST",
   "power": 303120536
  },
  {
   "server": 1024,
   "family": "Shrooms",
   "power": 298731169
  },
  {
   "server": 1024,
   "family": "Shroomieland",
   "power": 198161176
  },
  {
   "server": 1024,
   "family": "HotPotGang",
   "power": 191317570
  },
  {
   "server": 1025,
   "family": "Mushi",
   "power": 1824723000
  },
  {
   "server": 1025,
   "family": "Voids",
   "power": 1401686328
  },
  {
   "server": 1025,
   "family": "Remnant",
   "power": 1224777426
  },
  {
   "server": 1025,
   "family": "Rebels",
   "power": 612017217
  },
  {
   "server": 1025,
   "family": "HunkyShrooms",
   "power": 435503027
  },
  {
   "server": 1025,
   "family": "CutieShrooms",
   "power": 326117129
  },
  {
   "server": 1025,
   "family": "IMMORTAL",
   "power": 278931925
  },
  {
   "server": 1025,
   "family": "Hollow",
   "power": 271965036
  },
  {
   "server": 1025,
   "family": "WhoGotShroomz",
   "power": 211967590
  },
  {
   "server": 1025,
   "family": "Roundtable",
   "power": 173746581
  },
  {
   "server": 1026,
   "family": "RISE",
   "power": 1736402698
  },
  {
   "server": 1026,
   "family": "Lampcult",
   "power": 673286863
  },
  {
   "server": 1026,
   "family": "SnailGang",
   "power": 597436136
  },
  {
   "server": 1026,
   "family": "LazyShrooms",
   "power": 445202845
  },
  {
   "server": 1026,
   "family": "CHAØ§",
   "power": 420365452
  },
  {
   "server": 1026,
   "family": "Akatsuki",
   "power": 373838417
  },
  {
   "server": 1026,
   "family": "TheStonedOnes",
   "power": 360119166
  },
  {
   "server": 1026,
   "family": "Shroomnite",
   "power": 300248445
  },
  {
   "server": 1026,
   "family": "BonkSquad",
   "power": 277971897
  },
  {
   "server": 1026,
   "family": "MUSHROOMS",
   "power": 261588563
  },
  {
   "server": 1027,
   "family": "SporeHouse",
   "power": 1567311706
  },
  {
   "server": 1027,
   "family": "REDACTED",
   "power": 1268497838
  },
  {
   "server": 1027,
   "family": "Mazoku",
   "power": 965888133
  },
  {
   "server": 1027,
   "family": "EliteShrooms",
   "power": 571651975
  },
  {
   "server": 1027,
   "family": "flame",
   "power": 455049543
  },
  {
   "server": 1027,
   "family": "Shroomies",
   "power": 335620659
  },
  {
   "server": 1027,
   "family": "Shadow",
   "power": 241949255
  },
  {
   "server": 1027,
   "family": "Shroomers",
   "power": 221273441
  },
  {
   "server": 1027,
   "family": "gasserkingfam",
   "power": 206662020
  },
  {
   "server": 1027,
   "family": "amogus",
   "power": 186547479
  },
  {
   "server": 1028,
   "family": "Shrooms",
   "power": 1759096069
  },
  {
   "server": 1028,
   "family": "BOOTYBLASTERS",
   "power": 1575572166
  },
  {
   "server": 1028,
   "family": "ForsakenShroom",
   "power": 676423445
  },
  {
   "server": 1028,
   "family": "ShroomDoom",
   "power": 432220567
  },
  {
   "server": 1028,
   "family": "Valhalla",
   "power": 394961652
  },
  {
   "server": 1028,
   "family": "ogshrooms",
   "power": 300206751
  },
  {
   "server": 1028,
   "family": "MVP",
   "power": 268131831
  },
  {
   "server": 1028,
   "family": "NOTGFY",
   "power": 258120633
  },
  {
   "server": 1028,
   "family": "Boosted",
   "power": 191204098
  },
  {
   "server": 1028,
   "family": "Somnus",
   "power": 125516675
  },
  {
   "server": 1029,
   "family": "Binkies",
   "power": 1796693650
  },
  {
   "server": 1029,
   "family": "TrippyKids",
   "power": 970041325
  },
  {
   "server": 1029,
   "family": "MadMushrooms",
   "power": 782635333
  },
  {
   "server": 1029,
   "family": "JustTheTip",
   "power": 335666157
  },
  {
   "server": 1029,
   "family": "ShinyShroom",
   "power": 323878002
  },
  {
   "server": 1029,
   "family": "Oblivion",
   "power": 306778018
  },
  {
   "server": 1029,
   "family": "Mushrooms",
   "power": 290467856
  },
  {
   "server": 1029,
   "family": "SHROOMYTIPS",
   "power": 241769825
  },
  {
   "server": 1029,
   "family": "WintersTears",
   "power": 214803504
  },
  {
   "server": 1029,
   "family": "Doomshrooms",
   "power": 122478536
  },
  {
   "server": 1030,
   "family": "IMPACT",
   "power": 1470877959
  },
  {
   "server": 1030,
   "family": "ShroomerSquad",
   "power": 1241285255
  },
  {
   "server": 1030,
   "family": "ToadTown",
   "power": 486356712
  },
  {
   "server": 1030,
   "family": "Shroomicide",
   "power": 344458308
  },
  {
   "server": 1030,
   "family": "GrimBlossom",
   "power": 327159850
  },
  {
   "server": 1030,
   "family": "TheGoldencaps",
   "power": 270720987
  },
  {
   "server": 1030,
   "family": "BoBrOsS",
   "power": 259755400
  },
  {
   "server": 1030,
   "family": "HyruleShrooms",
   "power": 246021064
  },
  {
   "server": 1030,
   "family": "Intrepid",
   "power": 232769805
  },
  {
   "server": 1030,
   "family": "Shroomdoom",
   "power": 225358958
  },
  {
   "server": 1031,
   "family": "Byakko",
   "power": 1894852229
  },
  {
   "server": 1031,
   "family": "BlackWingKings",
   "power": 1240259810
  },
  {
   "server": 1031,
   "family": "Shroomville",
   "power": 352381361
  },
  {
   "server": 1031,
   "family": "PandaCubs",
   "power": 273624605
  },
  {
   "server": 1031,
   "family": "Etheria",
   "power": 245752173
  },
  {
   "server": 1031,
   "family": "Portobello",
   "power": 195385705
  },
  {
   "server": 1031,
   "family": "DinoNuggies",
   "power": 164321453
  },
  {
   "server": 1031,
   "family": "OnlyFans",
   "power": 163691459
  },
  {
   "server": 1031,
   "family": "Solo",
   "power": 145159169
  },
  {
   "server": 1031,
   "family": "Divinity",
   "power": 141510399
  },
  {
   "server": 1032,
   "family": "Legacy",
   "power": 1948735656
  },
  {
   "server": 1032,
   "family": "SunsetRavens",
   "power": 635093761
  },
  {
   "server": 1032,
   "family": "Titans",
   "power": 564998616
  },
  {
   "server": 1032,
   "family": "shroomies",
   "power": 407040089
  },
  {
   "server": 1032,
   "family": "Olympians",
   "power": 299447852
  },
  {
   "server": 1032,
   "family": "Epoch",
   "power": 253401747
  },
  {
   "server": 1032,
   "family": "Goobers",
   "power": 236918077
  },
  {
   "server": 1032,
   "family": "Eschaton",
   "power": 198177484
  },
  {
   "server": 1032,
   "family": "Astral",
   "power": 169654247
  },
  {
   "server": 1032,
   "family": "CitrusBrunch",
   "power": 61162979
  },
  {
   "server": 1033,
   "family": "Tempest",
   "power": 1654976358
  },
  {
   "server": 1033,
   "family": "Nuggets",
   "power": 441344617
  },
  {
   "server": 1033,
   "family": "BambooForest",
   "power": 382192661
  },
  {
   "server": 1033,
   "family": "ToastyCoconut",
   "power": 310042798
  },
  {
   "server": 1033,
   "family": "WompWomp",
   "power": 272336025
  },
  {
   "server": 1033,
   "family": "HamsterHammond",
   "power": 242035258
  },
  {
   "server": 1033,
   "family": "Crispy",
   "power": 232109568
  },
  {
   "server": 1033,
   "family": "Shadow",
   "power": 206583899
  },
  {
   "server": 1033,
   "family": "Quantum",
   "power": 154546945
  },
  {
   "server": 1033,
   "family": "SHROOMIES",
   "power": 97624084
  },
  {
   "server": 1034,
   "family": "Eclipse",
   "power": 1483301374
  },
  {
   "server": 1034,
   "family": "Ragnarök",
   "power": 622556290
  },
  {
   "server": 1034,
   "family": "KitsuneShin",
   "power": 394245398
  },
  {
   "server": 1034,
   "family": "OxC",
   "power": 317711109
  },
  {
   "server": 1034,
   "family": "MorelSupport",
   "power": 191577279
  },
  {
   "server": 1034,
   "family": "RatCult",
   "power": 171471717
  },
  {
   "server": 1034,
   "family": "OnePiece",
   "power": 163322249
  },
  {
   "server": 1034,
   "family": "StrawHats",
   "power": 160086114
  },
  {
   "server": 1034,
   "family": "DragonsDen",
   "power": 151733896
  },
  {
   "server": 1034,
   "family": "ＥＸＯＤＵＳ",
   "power": 115643328
  },
  {
   "server": 1035,
   "family": "MVP",
   "power": 1531316676
  },
  {
   "server": 1035,
   "family": "Shroomies",
   "power": 435427237
  },
  {
   "server": 1035,
   "family": "Overlord",
   "power": 417850643
  },
  {
   "server": 1035,
   "family": "kittens",
   "power": 232133813
  },
  {
   "server": 1035,
   "family": "ShroomHunters",
   "power": 194132957
  },
  {
   "server": 1035,
   "family": "nerd_emoji",
   "power": 190631024
  },
  {
   "server": 1035,
   "family": "ShroomyStoners",
   "power": 160778086
  },
  {
   "server": 1035,
   "family": "Solstice",
   "power": 157386264
  },
  {
   "server": 1035,
   "family": "Goobers",
   "power": 103627141
  },
  {
   "server": 1035,
   "family": "deadlyshrooms",
   "power": 72400330
  },
  {
   "server": 1036,
   "family": "ChosenOnes",
   "power": 1550696451
  },
  {
   "server": 1036,
   "family": "Koifish",
   "power": 789549484
  },
  {
   "server": 1036,
   "family": "zen",
   "power": 383320702
  },
  {
   "server": 1036,
   "family": "shroomville",
   "power": 303587946
  },
  {
   "server": 1036,
   "family": "Moon_Spell",
   "power": 203586985
  },
  {
   "server": 1036,
   "family": "Kings",
   "power": 152644003
  },
  {
   "server": 1036,
   "family": "Megamoxxed",
   "power": 75948833
  },
  {
   "server": 1036,
   "family": "Ducks",
   "power": 64893162
  },
  {
   "server": 1036,
   "family": "Nation",
   "power": 61671100
  },
  {
   "server": 1036,
   "family": "IronLotus",
   "power": 59940567
  },
  {
   "server": 1037,
   "family": "Legion",
   "power": 1409260515
  },
  {
   "server": 1037,
   "family": "Mandalorians",
   "power": 825908544
  },
  {
   "server": 1037,
   "family": "Shadows",
   "power": 625896228
  },
  {
   "server": 1037,
   "family": "Deathcaps",
   "power": 291126603
  },
  {
   "server": 1037,
   "family": "TheMushies",
   "power": 266050945
  },
  {
   "server": 1037,
   "family": "Nobility",
   "power": 260096900
  },
  {
   "server": 1037,
   "family": "LoserLover",
   "power": 206004967
  },
  {
   "server": 1037,
   "family": "ValiantSouls",
   "power": 137659592
  },
  {
   "server": 1037,
   "family": "ShroomGarden",
   "power": 128335115
  },
  {
   "server": 1037,
   "family": "Unicorn",
   "power": 95534682
  },
  {
   "server": 1038,
   "family": "Legends",
   "power": 1721857176
  },
  {
   "server": 1038,
   "family": "OG",
   "power": 473350302
  },
  {
   "server": 1038,
   "family": "300ĞŁĄĐÏÀŤÖŔ",
   "power": 346264102
  },
  {
   "server": 1038,
   "family": "Capybara",
   "power": 275817009
  },
  {
   "server": 1038,
   "family": "OppaStoppa",
   "power": 252247715
  },
  {
   "server": 1038,
   "family": "TheGods",
   "power": 193251599
  },
  {
   "server": 1038,
   "family": "Fungi’s",
   "power": 178753236
  },
  {
   "server": 1038,
   "family": "Krakens",
   "power": 168722884
  },
  {
   "server": 1038,
   "family": "Thepotatos",
   "power": 122875679
  },
  {
   "server": 1038,
   "family": "the7deadlysins",
   "power": 67052477
  },
  {
   "server": 1039,
   "family": "Mycena",
   "power": 1704108272
  },
  {
   "server": 1039,
   "family": "LilFluffGang",
   "power": 868517951
  },
  {
   "server": 1039,
   "family": "MUSHYKINGDOM",
   "power": 327325488
  },
  {
   "server": 1039,
   "family": "Legion",
   "power": 320763004
  },
  {
   "server": 1039,
   "family": "PokéGang",
   "power": 224949284
  },
  {
   "server": 1039,
   "family": "heheman",
   "power": 199687905
  },
  {
   "server": 1039,
   "family": "Shiitake",
   "power": 127290337
  },
  {
   "server": 1039,
   "family": "ShroomyEmpire",
   "power": 93125970
  },
  {
   "server": 1039,
   "family": "SagesDestiny",
   "power": 82875321
  },
  {
   "server": 1039,
   "family": "FungiFactory",
   "power": 34549629
  },
  {
   "server": 1040,
   "family": "Ascension",
   "power": 1687875000
  },
  {
   "server": 1040,
   "family": "McPoyles",
   "power": 848399655
  },
  {
   "server": 1040,
   "family": "KingsNQueens",
   "power": 442228157
  },
  {
   "server": 1040,
   "family": "Lostinspace",
   "power": 336806020
  },
  {
   "server": 1040,
   "family": "InBloom",
   "power": 236019773
  },
  {
   "server": 1040,
   "family": "InfiniteVoid",
   "power": 218933049
  },
  {
   "server": 1040,
   "family": "Silly",
   "power": 202159267
  },
  {
   "server": 1040,
   "family": "Akatsuki",
   "power": 106462649
  },
  {
   "server": 1040,
   "family": "Immortals",
   "power": 101096564
  },
  {
   "server": 1040,
   "family": "TheNobody’s",
   "power": 71805469
  },
  {
   "server": 1041,
   "family": "OnlyShrooms",
   "power": 1696880793
  },
  {
   "server": 1041,
   "family": "ZoomyShroomy",
   "power": 612222857
  },
  {
   "server": 1041,
   "family": "Toads",
   "power": 575357606
  },
  {
   "server": 1041,
   "family": "Strawhats",
   "power": 333309215
  },
  {
   "server": 1041,
   "family": "FungusMafia",
   "power": 138168859
  },
  {
   "server": 1041,
   "family": "Deathgods",
   "power": 121395116
  },
  {
   "server": 1041,
   "family": "Basidiomycota",
   "power": 91277225
  },
  {
   "server": 1041,
   "family": "Pandas",
   "power": 90816334
  },
  {
   "server": 1041,
   "family": "SoloLevelling",
   "power": 83348702
  },
  {
   "server": 1041,
   "family": "BigBoys",
   "power": 76908592
  },
  {
   "server": 1042,
   "family": "Paradox",
   "power": 1514122840
  },
  {
   "server": 1042,
   "family": "GodSpeed",
   "power": 1461590482
  },
  {
   "server": 1042,
   "family": "Silly_lil_guys",
   "power": 216682272
  },
  {
   "server": 1042,
   "family": "MacrazyClan",
   "power": 200910441
  },
  {
   "server": 1042,
   "family": "MushroomKaisen",
   "power": 169647414
  },
  {
   "server": 1042,
   "family": "Illuminati",
   "power": 140409696
  },
  {
   "server": 1042,
   "family": "Legends",
   "power": 129329516
  },
  {
   "server": 1042,
   "family": "Tempest",
   "power": 112115482
  },
  {
   "server": 1042,
   "family": "Chill_House_QC",
   "power": 70051247
  },
  {
   "server": 1042,
   "family": "DeathCaps",
   "power": 67765591
  },
  {
   "server": 1043,
   "family": "MilkTax",
   "power": 1879581744
  },
  {
   "server": 1043,
   "family": "Crimson_Moon",
   "power": 741924801
  },
  {
   "server": 1043,
   "family": "Fungus",
   "power": 667620964
  },
  {
   "server": 1043,
   "family": "Elite",
   "power": 302333772
  },
  {
   "server": 1043,
   "family": "WINNERS",
   "power": 230551861
  },
  {
   "server": 1043,
   "family": "toptiercooch",
   "power": 208555631
  },
  {
   "server": 1043,
   "family": "ShadowGlitch",
   "power": 111117652
  },
  {
   "server": 1043,
   "family": "LaBONBON",
   "power": 54512278
  },
  {
   "server": 1043,
   "family": "BrkenGlassKids",
   "power": 23062350
  },
  {
   "server": 1043,
   "family": "NeallyRigga",
   "power": 19618826
  },
  {
   "server": 1044,
   "family": "Deathcaps",
   "power": 1702614643
  },
  {
   "server": 1044,
   "family": "NOXIOUS_TRAP",
   "power": 516378913
  },
  {
   "server": 1044,
   "family": "Mushmellows",
   "power": 455535709
  },
  {
   "server": 1044,
   "family": "funguys",
   "power": 255172856
  },
  {
   "server": 1044,
   "family": "CashFamily",
   "power": 218885872
  },
  {
   "server": 1044,
   "family": "7DeadySins",
   "power": 191408363
  },
  {
   "server": 1044,
   "family": "Portobello",
   "power": 190400029
  },
  {
   "server": 1044,
   "family": "Shrooms",
   "power": 181032466
  },
  {
   "server": 1044,
   "family": "angels",
   "power": 168006252
  },
  {
   "server": 1044,
   "family": "monkey",
   "power": 163793476
  },
  {
   "server": 1045,
   "family": "BuffFungi",
   "power": 1819126460
  },
  {
   "server": 1045,
   "family": "HouseOfBravo",
   "power": 646064349
  },
  {
   "server": 1045,
   "family": "BuffShrooms",
   "power": 453872106
  },
  {
   "server": 1045,
   "family": "MudWhistle",
   "power": 265429786
  },
  {
   "server": 1045,
   "family": "Mythic",
   "power": 202571319
  },
  {
   "server": 1045,
   "family": "Spartans",
   "power": 190383861
  },
  {
   "server": 1045,
   "family": "Cult",
   "power": 185910263
  },
  {
   "server": 1045,
   "family": "DragonFlame",
   "power": 103053505
  },
  {
   "server": 1045,
   "family": "LazyLRanch",
   "power": 58023417
  },
  {
   "server": 1045,
   "family": "PCubensis",
   "power": 47837037
  },
  {
   "server": 1046,
   "family": "FirstFamily",
   "power": 1529005223
  },
  {
   "server": 1046,
   "family": "Legends",
   "power": 596417114
  },
  {
   "server": 1046,
   "family": "Shroomland",
   "power": 556592084
  },
  {
   "server": 1046,
   "family": "Youngbludz",
   "power": 274053735
  },
  {
   "server": 1046,
   "family": "FriedShroomies",
   "power": 215209587
  },
  {
   "server": 1046,
   "family": "SHROOMIES",
   "power": 172730200
  },
  {
   "server": 1046,
   "family": "Mafia",
   "power": 164589097
  },
  {
   "server": 1046,
   "family": "FuriousFungi",
   "power": 147152419
  },
  {
   "server": 1046,
   "family": "fairytale",
   "power": 136952852
  },
  {
   "server": 1046,
   "family": "Fungicides",
   "power": 87814246
  },
  {
   "server": 1047,
   "family": "Royale",
   "power": 1650350705
  },
  {
   "server": 1047,
   "family": "SporeSyndicate",
   "power": 677193645
  },
  {
   "server": 1047,
   "family": "MushroomKingdm",
   "power": 623927557
  },
  {
   "server": 1047,
   "family": "WhatTheFungus",
   "power": 361579672
  },
  {
   "server": 1047,
   "family": "LeadToHead",
   "power": 159168928
  },
  {
   "server": 1047,
   "family": "Wnf",
   "power": 139020153
  },
  {
   "server": 1047,
   "family": "Adopted",
   "power": 54677553
  },
  {
   "server": 1047,
   "family": "Lightz",
   "power": 41235512
  },
  {
   "server": 1047,
   "family": "gonerogue",
   "power": 34637733
  },
  {
   "server": 1047,
   "family": "FungusAmongus",
   "power": 32952305
  },
  {
   "server": 1048,
   "family": "TOP1",
   "power": 1430620791
  },
  {
   "server": 1048,
   "family": "Potatoes",
   "power": 1217821189
  },
  {
   "server": 1048,
   "family": "Divinity",
   "power": 248174405
  },
  {
   "server": 1048,
   "family": "TeamMisplay",
   "power": 242469047
  },
  {
   "server": 1048,
   "family": "Cordyceps",
   "power": 215170538
  },
  {
   "server": 1048,
   "family": "Teemos",
   "power": 190983012
  },
  {
   "server": 1048,
   "family": "shadowdemons",
   "power": 110716624
  },
  {
   "server": 1048,
   "family": "SoaringPhoenix",
   "power": 76192563
  },
  {
   "server": 1048,
   "family": "Pawg",
   "power": 56375329
  },
  {
   "server": 1048,
   "family": "BANNANA",
   "power": 42611175
  },
  {
   "server": 1049,
   "family": "Deadlantis",
   "power": 1942237747
  },
  {
   "server": 1049,
   "family": "Shroomlantis",
   "power": 643950453
  },
  {
   "server": 1049,
   "family": "Psilocybins",
   "power": 363866930
  },
  {
   "server": 1049,
   "family": "JJK",
   "power": 248130925
  },
  {
   "server": 1049,
   "family": "Ronin",
   "power": 236032133
  },
  {
   "server": 1049,
   "family": "Lunaris",
   "power": 206399584
  },
  {
   "server": 1049,
   "family": "FairyTail",
   "power": 200424703
  },
  {
   "server": 1049,
   "family": "BEANS",
   "power": 190906801
  },
  {
   "server": 1049,
   "family": "GraveDiggers",
   "power": 117268979
  },
  {
   "server": 1049,
   "family": "TapTapShrooms",
   "power": 86945459
  },
  {
   "server": 1050,
   "family": "ShroomSquad",
   "power": 1553414491
  },
  {
   "server": 1050,
   "family": "StrawHats",
   "power": 435847198
  },
  {
   "server": 1050,
   "family": "TheFoxxFam",
   "power": 338321772
  },
  {
   "server": 1050,
   "family": "ninja",
   "power": 274272106
  },
  {
   "server": 1050,
   "family": "immortal4242",
   "power": 246004996
  },
  {
   "server": 1050,
   "family": "Legendz",
   "power": 201866190
  },
  {
   "server": 1050,
   "family": "MagicShrooms",
   "power": 185309654
  },
  {
   "server": 1050,
   "family": "🦝",
   "power": 174734782
  },
  {
   "server": 1050,
   "family": "VietNam",
   "power": 138062701
  },
  {
   "server": 1050,
   "family": "Smokeweed",
   "power": 114614607
  },
  {
   "server": 1051,
   "family": "നythril",
   "power": 1982958430
  },
  {
   "server": 1051,
   "family": "mushies",
   "power": 422448591
  },
  {
   "server": 1051,
   "family": "Shroomies",
   "power": 324902241
  },
  {
   "server": 1051,
   "family": "Weebs",
   "power": 245513218
  },
  {
   "server": 1051,
   "family": "immortalized",
   "power": 239976236
  },
  {
   "server": 1051,
   "family": "The_Ballers",
   "power": 237113683
  },
  {
   "server": 1051,
   "family": "ShroomArmy",
   "power": 224621539
  },
  {
   "server": 1051,
   "family": "Radient",
   "power": 177354183
  },
  {
   "server": 1051,
   "family": "TheCursedFam",
   "power": 126319504
  },
  {
   "server": 1051,
   "family": "Soulfire",
   "power": 105516728
  },
  {
   "server": 1052,
   "family": "Bone",
   "power": 1777937596
  },
  {
   "server": 1052,
   "family": "FunGuys",
   "power": 358284407
  },
  {
   "server": 1052,
   "family": "ToadFamily",
   "power": 338716223
  },
  {
   "server": 1052,
   "family": "Mushys",
   "power": 273621100
  },
  {
   "server": 1052,
   "family": "snozberries",
   "power": 174401046
  },
  {
   "server": 1052,
   "family": "SinfulSaints",
   "power": 148000579
  },
  {
   "server": 1052,
   "family": "bubbles",
   "power": 118405713
  },
  {
   "server": 1052,
   "family": "MushroomCult",
   "power": 112680234
  },
  {
   "server": 1052,
   "family": "Greyhawk",
   "power": 109264448
  },
  {
   "server": 1052,
   "family": "Sori",
   "power": 34866198
  },
  {
   "server": 1053,
   "family": "Akatsuki",
   "power": 1607534148
  },
  {
   "server": 1053,
   "family": "Shroom_Kings",
   "power": 565410559
  },
  {
   "server": 1053,
   "family": "Erm",
   "power": 485745566
  },
  {
   "server": 1053,
   "family": "Fortuitous",
   "power": 255809452
  },
  {
   "server": 1053,
   "family": "mushrooms",
   "power": 222262177
  },
  {
   "server": 1053,
   "family": "Toadstools",
   "power": 168481112
  },
  {
   "server": 1053,
   "family": "Sporeson",
   "power": 150150649
  },
  {
   "server": 1053,
   "family": "Psilocybin",
   "power": 119564607
  },
  {
   "server": 1053,
   "family": "Sporstuction",
   "power": 104217931
  },
  {
   "server": 1053,
   "family": "HardcoreSpores",
   "power": 103396073
  },
  {
   "server": 1054,
   "family": "Nebula",
   "power": 1350260383
  },
  {
   "server": 1054,
   "family": "Fortnite",
   "power": 352284350
  },
  {
   "server": 1054,
   "family": "Fungi’s",
   "power": 334725845
  },
  {
   "server": 1054,
   "family": "Day1",
   "power": 287367073
  },
  {
   "server": 1054,
   "family": "ez",
   "power": 280446129
  },
  {
   "server": 1054,
   "family": "Ashen",
   "power": 263501928
  },
  {
   "server": 1054,
   "family": "Shrooms",
   "power": 183354612
  },
  {
   "server": 1054,
   "family": "Canada",
   "power": 172384086
  },
  {
   "server": 1054,
   "family": "Ogs",
   "power": 151538849
  },
  {
   "server": 1054,
   "family": "Kil’Garden",
   "power": 149188231
  },
  {
   "server": 1055,
   "family": "MUSHROOMS",
   "power": 1875556139
  },
  {
   "server": 1055,
   "family": "Strawhats",
   "power": 761152166
  },
  {
   "server": 1055,
   "family": "Psilocybin",
   "power": 371827654
  },
  {
   "server": 1055,
   "family": "Shroomington",
   "power": 250579296
  },
  {
   "server": 1055,
   "family": "ShroomArmy",
   "power": 242871738
  },
  {
   "server": 1055,
   "family": "ToadsVilliage",
   "power": 211335671
  },
  {
   "server": 1055,
   "family": "chill",
   "power": 98209609
  },
  {
   "server": 1055,
   "family": "QuietHills",
   "power": 45562161
  },
  {
   "server": 1055,
   "family": "AlaskaMafia",
   "power": 40970385
  },
  {
   "server": 1055,
   "family": "Portalgods",
   "power": 39310312
  },
  {
   "server": 1056,
   "family": "Drowsy",
   "power": 1678069016
  },
  {
   "server": 1056,
   "family": "Proletarian",
   "power": 311792119
  },
  {
   "server": 1056,
   "family": "LandOfGods",
   "power": 273618302
  },
  {
   "server": 1056,
   "family": "Da_Bois",
   "power": 194325786
  },
  {
   "server": 1056,
   "family": "Tempest",
   "power": 160870558
  },
  {
   "server": 1056,
   "family": "Lions_Mane",
   "power": 146311180
  },
  {
   "server": 1056,
   "family": "doomshrooms",
   "power": 130888883
  },
  {
   "server": 1056,
   "family": "Deathcap",
   "power": 126550045
  },
  {
   "server": 1056,
   "family": "Climbingup",
   "power": 123357174
  },
  {
   "server": 1056,
   "family": "Broken_Rice",
   "power": 109976437
  },
  {
   "server": 1057,
   "family": "EKX",
   "power": 1411865052
  },
  {
   "server": 1057,
   "family": "Fungicide",
   "power": 641924949
  },
  {
   "server": 1057,
   "family": "CreamyShrooms",
   "power": 521826333
  },
  {
   "server": 1057,
   "family": "WeebNation",
   "power": 328398235
  },
  {
   "server": 1057,
   "family": "Trashy",
   "power": 249944589
  },
  {
   "server": 1057,
   "family": "MushroomEmpir",
   "power": 229481188
  },
  {
   "server": 1057,
   "family": "ShroombaTribe",
   "power": 155446965
  },
  {
   "server": 1057,
   "family": "Homos",
   "power": 151172753
  },
  {
   "server": 1057,
   "family": "Koolkidsklub",
   "power": 136017744
  },
  {
   "server": 1057,
   "family": "ChillShrooms",
   "power": 106526401
  },
  {
   "server": 1058,
   "family": "Uchiha",
   "power": 1857357431
  },
  {
   "server": 1058,
   "family": "DeathCaps",
   "power": 495968989
  },
  {
   "server": 1058,
   "family": "Shroomies",
   "power": 295165371
  },
  {
   "server": 1058,
   "family": "Ace2Aces",
   "power": 241920206
  },
  {
   "server": 1058,
   "family": "VoLocity",
   "power": 188639876
  },
  {
   "server": 1058,
   "family": "VOID",
   "power": 167397142
  },
  {
   "server": 1058,
   "family": "ABYSS",
   "power": 160195071
  },
  {
   "server": 1058,
   "family": "God",
   "power": 120452019
  },
  {
   "server": 1058,
   "family": "TheCozyCafe",
   "power": 47791256
  },
  {
   "server": 1058,
   "family": "Trickster",
   "power": 34042475
  },
  {
   "server": 1059,
   "family": "ETERNALS",
   "power": 1401608959
  },
  {
   "server": 1059,
   "family": "DragonEmpire",
   "power": 708895782
  },
  {
   "server": 1059,
   "family": "Sentinels",
   "power": 329381292
  },
  {
   "server": 1059,
   "family": "Lesgooo",
   "power": 229500146
  },
  {
   "server": 1059,
   "family": "Shroommasters",
   "power": 211286345
  },
  {
   "server": 1059,
   "family": "strungout_cats",
   "power": 192982811
  },
  {
   "server": 1059,
   "family": "Opium",
   "power": 143627099
  },
  {
   "server": 1059,
   "family": "Pfutzengilde",
   "power": 137382494
  },
  {
   "server": 1059,
   "family": "Spore",
   "power": 127547592
  },
  {
   "server": 1059,
   "family": "PandaShroomies",
   "power": 90588344
  },
  {
   "server": 1060,
   "family": "firedom",
   "power": 1392881116
  },
  {
   "server": 1060,
   "family": "2C4U",
   "power": 985121048
  },
  {
   "server": 1060,
   "family": "Legion",
   "power": 322346815
  },
  {
   "server": 1060,
   "family": "titan",
   "power": 263886750
  },
  {
   "server": 1060,
   "family": "JustForFun",
   "power": 98774735
  },
  {
   "server": 1060,
   "family": "Whalesquad",
   "power": 63548838
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
   "server": 1060,
   "family": "Shroomed",
   "power": 28346902
  },
  {
   "server": 1061,
   "family": "Genesis",
   "power": 1750897847
  },
  {
   "server": 1061,
   "family": "Gladiators",
   "power": 304113359
  },
  {
   "server": 1061,
   "family": "Vindicated",
   "power": 255931383
  },
  {
   "server": 1061,
   "family": "ArchAngels",
   "power": 242875815
  },
  {
   "server": 1061,
   "family": "KoiFishes",
   "power": 238106137
  },
  {
   "server": 1061,
   "family": "Halloweentown",
   "power": 226223609
  },
  {
   "server": 1061,
   "family": "GreyFruitGuild",
   "power": 185398503
  },
  {
   "server": 1061,
   "family": "TheFungi",
   "power": 168826470
  },
  {
   "server": 1061,
   "family": "Mandalorians",
   "power": 102463427
  },
  {
   "server": 1061,
   "family": "ShitakeSaiyans",
   "power": 63163299
  },
  {
   "server": 1062,
   "family": "Beggars",
   "power": 1719554798
  },
  {
   "server": 1062,
   "family": "Cutecats",
   "power": 596213089
  },
  {
   "server": 1062,
   "family": "Temptation",
   "power": 447230163
  },
  {
   "server": 1062,
   "family": "grimdragons",
   "power": 197662538
  },
  {
   "server": 1062,
   "family": "StonerClub",
   "power": 182996107
  },
  {
   "server": 1062,
   "family": "Mushrooms",
   "power": 168634212
  },
  {
   "server": 1062,
   "family": "Scarlet_cup",
   "power": 155398072
  },
  {
   "server": 1062,
   "family": "YummyRamen",
   "power": 132210500
  },
  {
   "server": 1062,
   "family": "Furia",
   "power": 116947443
  },
  {
   "server": 1062,
   "family": "Doom_Shrooms",
   "power": 99084973
  },
  {
   "server": 1063,
   "family": "7eaven",
   "power": 1371523498
  },
  {
   "server": 1063,
   "family": "ManicShrooms",
   "power": 540059760
  },
  {
   "server": 1063,
   "family": "ApocalypsePets",
   "power": 417724044
  },
  {
   "server": 1063,
   "family": "hehe",
   "power": 283200890
  },
  {
   "server": 1063,
   "family": "Aurous",
   "power": 221577536
  },
  {
   "server": 1063,
   "family": "Shroom",
   "power": 162619107
  },
  {
   "server": 1063,
   "family": "crybbyfam",
   "power": 138008368
  },
  {
   "server": 1063,
   "family": "TheCoalition",
   "power": 67192999
  },
  {
   "server": 1063,
   "family": "FlamingoCove",
   "power": 55154507
  },
  {
   "server": 1063,
   "family": "TheScrapYard",
   "power": 52299690
  },
  {
   "server": 1064,
   "family": "BlackLotus",
   "power": 1590126144
  },
  {
   "server": 1064,
   "family": "WhiteLotus",
   "power": 509041713
  },
  {
   "server": 1064,
   "family": "ZoomShrooms",
   "power": 329561719
  },
  {
   "server": 1064,
   "family": "FurryMushrooms",
   "power": 255067496
  },
  {
   "server": 1064,
   "family": "WELOVESHROOMS",
   "power": 242709209
  },
  {
   "server": 1064,
   "family": "TempleOfAthena",
   "power": 185128428
  },
  {
   "server": 1064,
   "family": "koinoyokan",
   "power": 136571415
  },
  {
   "server": 1064,
   "family": "Theawesomest1",
   "power": 119995000
  },
  {
   "server": 1064,
   "family": "MementoOfWar",
   "power": 87303702
  },
  {
   "server": 1064,
   "family": "Ohana",
   "power": 69592912
  },
  {
   "server": 1065,
   "family": "TheBestBuddies",
   "power": 1353314832
  },
  {
   "server": 1065,
   "family": "MagicMushies",
   "power": 432605725
  },
  {
   "server": 1065,
   "family": "EXILED",
   "power": 346848152
  },
  {
   "server": 1065,
   "family": "WolfPack",
   "power": 330199091
  },
  {
   "server": 1065,
   "family": "MagicShroomies",
   "power": 287265517
  },
  {
   "server": 1065,
   "family": "Shroomies",
   "power": 231817695
  },
  {
   "server": 1065,
   "family": "FürDieEhre",
   "power": 144819159
  },
  {
   "server": 1065,
   "family": "GaygarPokemon",
   "power": 98944952
  },
  {
   "server": 1065,
   "family": "BamBoom",
   "power": 40593030
  },
  {
   "server": 1065,
   "family": "Smiski",
   "power": 39640913
  },
  {
   "server": 1066,
   "family": "Eden",
   "power": 1857559349
  },
  {
   "server": 1066,
   "family": "2Much4You",
   "power": 558800326
  },
  {
   "server": 1066,
   "family": "TheGarden",
   "power": 431645941
  },
  {
   "server": 1066,
   "family": "Gravity",
   "power": 329690986
  },
  {
   "server": 1066,
   "family": "ShroomySages",
   "power": 266228354
  },
  {
   "server": 1066,
   "family": "og",
   "power": 182951702
  },
  {
   "server": 1066,
   "family": "Shroomeri",
   "power": 176421202
  },
  {
   "server": 1066,
   "family": "novastar",
   "power": 150137442
  },
  {
   "server": 1066,
   "family": "Juicygobble",
   "power": 84837986
  },
  {
   "server": 1066,
   "family": "Shrooms",
   "power": 61805573
  },
  {
   "server": 1067,
   "family": "Hellguard",
   "power": 1536930591
  },
  {
   "server": 1067,
   "family": "Wendys",
   "power": 411849059
  },
  {
   "server": 1067,
   "family": "Shroom",
   "power": 250999036
  },
  {
   "server": 1067,
   "family": "Rivals",
   "power": 149568930
  },
  {
   "server": 1067,
   "family": "gangnem",
   "power": 96023482
  },
  {
   "server": 1067,
   "family": "Weed",
   "power": 94636877
  },
  {
   "server": 1067,
   "family": "SautéShroomies",
   "power": 75385769
  },
  {
   "server": 1067,
   "family": "Truckers",
   "power": 31790633
  },
  {
   "server": 1067,
   "family": "Morelands",
   "power": 20466934
  },
  {
   "server": 1067,
   "family": "GoofyGoobers",
   "power": 15827850
  },
  {
   "server": 1068,
   "family": "BurningDragons",
   "power": 1646951212
  },
  {
   "server": 1068,
   "family": "ŞþðřëŞÿñďïċäťë",
   "power": 551328981
  },
  {
   "server": 1068,
   "family": "LateNighters",
   "power": 361644768
  },
  {
   "server": 1068,
   "family": "TheShrooms",
   "power": 173107440
  },
  {
   "server": 1068,
   "family": "GameWarriorS",
   "power": 162357007
  },
  {
   "server": 1068,
   "family": "ShroomKings",
   "power": 157785512
  },
  {
   "server": 1068,
   "family": "YoureShroomed",
   "power": 142455928
  },
  {
   "server": 1068,
   "family": "Bruh_team",
   "power": 97137470
  },
  {
   "server": 1068,
   "family": "BloodDragons",
   "power": 95227283
  },
  {
   "server": 1068,
   "family": "TheBombers",
   "power": 34779250
  },
  {
   "server": 1069,
   "family": "TheShroomans",
   "power": 1501924974
  },
  {
   "server": 1069,
   "family": "FunGuys",
   "power": 401507735
  },
  {
   "server": 1069,
   "family": "Fairytale",
   "power": 366511188
  },
  {
   "server": 1069,
   "family": "Godshrooms",
   "power": 226648575
  },
  {
   "server": 1069,
   "family": "GoDz",
   "power": 164693336
  },
  {
   "server": 1069,
   "family": "TheMonsterMush",
   "power": 148984489
  },
  {
   "server": 1069,
   "family": "Shroomin’",
   "power": 105306826
  },
  {
   "server": 1069,
   "family": "Wevewevewevewe",
   "power": 48724767
  },
  {
   "server": 1069,
   "family": "nytrokitty",
   "power": 40582329
  },
  {
   "server": 1069,
   "family": "Psilocybin",
   "power": 36116617
  },
  {
   "server": 1070,
   "family": "KDAR",
   "power": 1438453373
  },
  {
   "server": 1070,
   "family": "Parasitic",
   "power": 523790145
  },
  {
   "server": 1070,
   "family": "Just4Fun",
   "power": 296108140
  },
  {
   "server": 1070,
   "family": "Nazarick",
   "power": 178871805
  },
  {
   "server": 1070,
   "family": "JujuShroom",
   "power": 145173519
  },
  {
   "server": 1070,
   "family": "Hedliane",
   "power": 90283307
  },
  {
   "server": 1070,
   "family": "HighLife",
   "power": 82798310
  },
  {
   "server": 1070,
   "family": "LEGION",
   "power": 67871001
  },
  {
   "server": 1070,
   "family": "The_RoadDawgs",
   "power": 39776470
  },
  {
   "server": 1070,
   "family": "Weirdz",
   "power": 25383281
  },
  {
   "server": 1071,
   "family": "HarmFarm",
   "power": 1613046519
  },
  {
   "server": 1071,
   "family": "Excalivus",
   "power": 772557387
  },
  {
   "server": 1071,
   "family": "Enoki",
   "power": 203856049
  },
  {
   "server": 1071,
   "family": "Gang",
   "power": 163487501
  },
  {
   "server": 1071,
   "family": "TheUnionHall",
   "power": 159231915
  },
  {
   "server": 1071,
   "family": "WeLuvShrooms",
   "power": 148342143
  },
  {
   "server": 1071,
   "family": "FungusAmongUs",
   "power": 54326569
  },
  {
   "server": 1071,
   "family": "ShroomGrower",
   "power": 47332801
  },
  {
   "server": 1071,
   "family": "LokiSpiders",
   "power": 38720726
  },
  {
   "server": 1071,
   "family": "TheFirst",
   "power": 36608146
  },
  {
   "server": 1072,
   "family": "Mushy",
   "power": 1524396979
  },
  {
   "server": 1072,
   "family": "Mushis",
   "power": 290768925
  },
  {
   "server": 1072,
   "family": "TheGang🤫",
   "power": 274507377
  },
  {
   "server": 1072,
   "family": "shroom",
   "power": 246096739
  },
  {
   "server": 1072,
   "family": "OVERKILLERS",
   "power": 240888264
  },
  {
   "server": 1072,
   "family": "Lotus",
   "power": 177550796
  },
  {
   "server": 1072,
   "family": "Bsquared",
   "power": 112892631
  },
  {
   "server": 1072,
   "family": "MapleTree",
   "power": 94640120
  },
  {
   "server": 1072,
   "family": "Akatsuki",
   "power": 80901431
  },
  {
   "server": 1072,
   "family": "CHAMPIONS",
   "power": 51741885
  },
  {
   "server": 1073,
   "family": "Envy",
   "power": 1654740801
  },
  {
   "server": 1073,
   "family": "Vongola",
   "power": 361462859
  },
  {
   "server": 1073,
   "family": "GodTier",
   "power": 356221827
  },
  {
   "server": 1073,
   "family": "ItzLemonzzz",
   "power": 302871759
  },
  {
   "server": 1073,
   "family": "High_Lyfe",
   "power": 241348729
  },
  {
   "server": 1073,
   "family": "UchihaClan",
   "power": 204767003
  },
  {
   "server": 1073,
   "family": "Icons",
   "power": 200273575
  },
  {
   "server": 1073,
   "family": "ShroomZone",
   "power": 143175801
  },
  {
   "server": 1073,
   "family": "HashDabs",
   "power": 82224341
  },
  {
   "server": 1073,
   "family": "Kleptomaniacs",
   "power": 58151302
  },
  {
   "server": 1074,
   "family": "Fools",
   "power": 1764637769
  },
  {
   "server": 1074,
   "family": "Redemption",
   "power": 789856466
  },
  {
   "server": 1074,
   "family": "Shadow_Reapers",
   "power": 316928200
  },
  {
   "server": 1074,
   "family": "DemonSlayer",
   "power": 236619726
  },
  {
   "server": 1074,
   "family": "Bloodlust",
   "power": 199554203
  },
  {
   "server": 1074,
   "family": "uwu",
   "power": 174772208
  },
  {
   "server": 1074,
   "family": "Mushroomland",
   "power": 105834782
  },
  {
   "server": 1074,
   "family": "SharkArmy",
   "power": 99059148
  },
  {
   "server": 1074,
   "family": "Champinon",
   "power": 37129213
  },
  {
   "server": 1074,
   "family": "COOKIES4life",
   "power": 33073671
  },
  {
   "server": 1075,
   "family": "Superiore",
   "power": 1496408153
  },
  {
   "server": 1075,
   "family": "Requiem",
   "power": 1120899662
  },
  {
   "server": 1075,
   "family": "Gooms",
   "power": 395808086
  },
  {
   "server": 1075,
   "family": "Goat_Town",
   "power": 378075534
  },
  {
   "server": 1075,
   "family": "Squishy",
   "power": 214845658
  },
  {
   "server": 1075,
   "family": "Ghosts",
   "power": 148721643
  },
  {
   "server": 1075,
   "family": "Pulps",
   "power": 138767777
  },
  {
   "server": 1075,
   "family": "Wolfpack",
   "power": 54375960
  },
  {
   "server": 1075,
   "family": "pickles",
   "power": 30361419
  },
  {
   "server": 1075,
   "family": "Plushies4Life",
   "power": 29020846
  },
  {
   "server": 1076,
   "family": "ELITE",
   "power": 1260442261
  },
  {
   "server": 1076,
   "family": "Enoki",
   "power": 905351969
  },
  {
   "server": 1076,
   "family": "Killjoy",
   "power": 744779102
  },
  {
   "server": 1076,
   "family": "Notorious",
   "power": 523368686
  },
  {
   "server": 1076,
   "family": "GlitchMob",
   "power": 496430716
  },
  {
   "server": 1076,
   "family": "StrawHatCrew",
   "power": 203696171
  },
  {
   "server": 1076,
   "family": "KingdomOfFungi",
   "power": 199959661
  },
  {
   "server": 1076,
   "family": "Halfpence",
   "power": 117306762
  },
  {
   "server": 1076,
   "family": "disciples",
   "power": 74348642
  },
  {
   "server": 1076,
   "family": "FreeShrooms",
   "power": 32421391
  },
  {
   "server": 1077,
   "family": "MonkeyBusiness",
   "power": 1862236604
  },
  {
   "server": 1077,
   "family": "ShroomMates",
   "power": 600661500
  },
  {
   "server": 1077,
   "family": "ShroomDynasty",
   "power": 345887912
  },
  {
   "server": 1077,
   "family": "Life",
   "power": 251978428
  },
  {
   "server": 1077,
   "family": "cigarettes",
   "power": 249790849
  },
  {
   "server": 1077,
   "family": "shroomies",
   "power": 223064722
  },
  {
   "server": 1077,
   "family": "MyceliumMates",
   "power": 218490336
  },
  {
   "server": 1077,
   "family": "SmurfsVillage",
   "power": 141462073
  },
  {
   "server": 1077,
   "family": "LomGods",
   "power": 136293578
  },
  {
   "server": 1077,
   "family": "Watchers",
   "power": 134068544
  },
  {
   "server": 1078,
   "family": "Angels",
   "power": 1592071740
  },
  {
   "server": 1078,
   "family": "Spore",
   "power": 695704421
  },
  {
   "server": 1078,
   "family": "DEMONS",
   "power": 505673401
  },
  {
   "server": 1078,
   "family": "EMS",
   "power": 332302546
  },
  {
   "server": 1078,
   "family": "ShroomKingdom",
   "power": 156765167
  },
  {
   "server": 1078,
   "family": "4X¥",
   "power": 143378086
  },
  {
   "server": 1078,
   "family": "TheFunGuys",
   "power": 106352192
  },
  {
   "server": 1078,
   "family": "shroomlife",
   "power": 67993693
  },
  {
   "server": 1078,
   "family": "SwiftyyShrooms",
   "power": 67330866
  },
  {
   "server": 1078,
   "family": "SmokersTable",
   "power": 66981371
  },
  {
   "server": 1079,
   "family": "SERAPHIM",
   "power": 1865291180
  },
  {
   "server": 1079,
   "family": "Chaotica",
   "power": 913309322
  },
  {
   "server": 1079,
   "family": "Fairytail",
   "power": 359694415
  },
  {
   "server": 1079,
   "family": "Akatsuki",
   "power": 337935481
  },
  {
   "server": 1079,
   "family": "MadMushrooms",
   "power": 269183040
  },
  {
   "server": 1079,
   "family": "Invictus",
   "power": 228790249
  },
  {
   "server": 1079,
   "family": "Bobsarmy",
   "power": 209953478
  },
  {
   "server": 1079,
   "family": "limarooms",
   "power": 200745783
  },
  {
   "server": 1079,
   "family": "Dunghouse",
   "power": 130891574
  },
  {
   "server": 1079,
   "family": "Tapei",
   "power": 82839786
  },
  {
   "server": 1080,
   "family": "GoldenShrooms",
   "power": 1904231928
  },
  {
   "server": 1080,
   "family": "Ducks",
   "power": 1046031033
  },
  {
   "server": 1080,
   "family": "TheDarKRose",
   "power": 381610891
  },
  {
   "server": 1080,
   "family": "SithEmpire",
   "power": 218295773
  },
  {
   "server": 1080,
   "family": "SmokeBuddies",
   "power": 206327914
  },
  {
   "server": 1080,
   "family": "FurrySpores",
   "power": 205341328
  },
  {
   "server": 1080,
   "family": "Mushromies",
   "power": 204214178
  },
  {
   "server": 1080,
   "family": "Winterfell",
   "power": 150050080
  },
  {
   "server": 1080,
   "family": "Genesis",
   "power": 55332392
  },
  {
   "server": 1080,
   "family": "Unwell",
   "power": 39927766
  },
  {
   "server": 1081,
   "family": "GoofTroops",
   "power": 1774942082
  },
  {
   "server": 1081,
   "family": "Shroominators",
   "power": 414999434
  },
  {
   "server": 1081,
   "family": "Shroomies",
   "power": 356264609
  },
  {
   "server": 1081,
   "family": "Mushroom",
   "power": 334719324
  },
  {
   "server": 1081,
   "family": "OrphanBros",
   "power": 270648321
  },
  {
   "server": 1081,
   "family": "Shrooms",
   "power": 248566405
  },
  {
   "server": 1081,
   "family": "FrozenHeartz",
   "power": 147884090
  },
  {
   "server": 1081,
   "family": "Lords",
   "power": 138518284
  },
  {
   "server": 1081,
   "family": "TheGreats",
   "power": 134777762
  },
  {
   "server": 1081,
   "family": "Caffinated",
   "power": 134680604
  },
  {
   "server": 1082,
   "family": "𖤐『ғᴏʀsᴀᴋᴇɴ』𖤐",
   "power": 1665151950
  },
  {
   "server": 1082,
   "family": "SwordArtOnline",
   "power": 552108912
  },
  {
   "server": 1082,
   "family": "APEX",
   "power": 335141325
  },
  {
   "server": 1082,
   "family": "MagicShrooms",
   "power": 281640086
  },
  {
   "server": 1082,
   "family": "Laughingcoffin",
   "power": 211632798
  },
  {
   "server": 1082,
   "family": "StrawHats",
   "power": 186570404
  },
  {
   "server": 1082,
   "family": "ShroomzRus",
   "power": 162086019
  },
  {
   "server": 1082,
   "family": "iShowShrooms",
   "power": 154823652
  },
  {
   "server": 1082,
   "family": "BlueOyster",
   "power": 107837560
  },
  {
   "server": 1082,
   "family": "StormyWeather",
   "power": 70725947
  },
  {
   "server": 1083,
   "family": "Rejects",
   "power": 1793829866
  },
  {
   "server": 1083,
   "family": "Wizards",
   "power": 389715382
  },
  {
   "server": 1083,
   "family": "NANDOSfamily",
   "power": 389138393
  },
  {
   "server": 1083,
   "family": "DarkArmy",
   "power": 358457223
  },
  {
   "server": 1083,
   "family": "SporePlay",
   "power": 319583641
  },
  {
   "server": 1083,
   "family": "SquirtleSquad",
   "power": 269937803
  },
  {
   "server": 1083,
   "family": "LUVNTIDDIES",
   "power": 246584830
  },
  {
   "server": 1083,
   "family": "Doominator",
   "power": 126583678
  },
  {
   "server": 1083,
   "family": "Quantum",
   "power": 106292728
  },
  {
   "server": 1083,
   "family": "Bru",
   "power": 97021712
  },
  {
   "server": 1084,
   "family": "SGB",
   "power": 1791440703
  },
  {
   "server": 1084,
   "family": "Essence",
   "power": 559203848
  },
  {
   "server": 1084,
   "family": "MythicalKings",
   "power": 325935339
  },
  {
   "server": 1084,
   "family": "FALLEN",
   "power": 261561355
  },
  {
   "server": 1084,
   "family": "SmokedShrooms",
   "power": 174133584
  },
  {
   "server": 1084,
   "family": "evil",
   "power": 163319204
  },
  {
   "server": 1084,
   "family": "Death_Caps",
   "power": 132027871
  },
  {
   "server": 1084,
   "family": "Hope",
   "power": 112041421
  },
  {
   "server": 1084,
   "family": "Mushrooms",
   "power": 108685017
  },
  {
   "server": 1084,
   "family": "Ewok_Familia",
   "power": 75304704
  },
  {
   "server": 1085,
   "family": "Atrium",
   "power": 1821985621
  },
  {
   "server": 1085,
   "family": "Psychedelic",
   "power": 475044102
  },
  {
   "server": 1085,
   "family": "MagicMushrooms",
   "power": 325553862
  },
  {
   "server": 1085,
   "family": "Fellas",
   "power": 290515318
  },
  {
   "server": 1085,
   "family": "SHADOWGHOST",
   "power": 273987531
  },
  {
   "server": 1085,
   "family": "Polarbear",
   "power": 223318607
  },
  {
   "server": 1085,
   "family": "Apathy",
   "power": 204848350
  },
  {
   "server": 1085,
   "family": "Psilovibin",
   "power": 174903692
  },
  {
   "server": 1085,
   "family": "Sakeshroom",
   "power": 168263303
  },
  {
   "server": 1085,
   "family": "PinkPosse",
   "power": 122672795
  },
  {
   "server": 1086,
   "family": "WhiteLotus",
   "power": 1624313395
  },
  {
   "server": 1086,
   "family": "420club",
   "power": 1090637053
  },
  {
   "server": 1086,
   "family": "Nightshades",
   "power": 386654911
  },
  {
   "server": 1086,
   "family": "Robonia",
   "power": 252378862
  },
  {
   "server": 1086,
   "family": "chaos",
   "power": 243167347
  },
  {
   "server": 1086,
   "family": "Yamato",
   "power": 152434090
  },
  {
   "server": 1086,
   "family": "TheBurrow",
   "power": 144870127
  },
  {
   "server": 1086,
   "family": "ApocalypseMush",
   "power": 116802773
  },
  {
   "server": 1086,
   "family": "MushMen",
   "power": 58659115
  },
  {
   "server": 1086,
   "family": "Darkphoenix052",
   "power": 51655809
  },
  {
   "server": 1087,
   "family": "808Kingdom",
   "power": 1268348935
  },
  {
   "server": 1087,
   "family": "Debauchery",
   "power": 461993947
  },
  {
   "server": 1087,
   "family": "LegendOfShroom",
   "power": 429916932
  },
  {
   "server": 1087,
   "family": "TheFunGuys",
   "power": 367481706
  },
  {
   "server": 1087,
   "family": "MONSTERSof420",
   "power": 283579466
  },
  {
   "server": 1087,
   "family": "Kuriboh",
   "power": 226746644
  },
  {
   "server": 1087,
   "family": "Togoodtobetrue",
   "power": 170642453
  },
  {
   "server": 1087,
   "family": "Wallstreetbets",
   "power": 121379480
  },
  {
   "server": 1087,
   "family": "Buh",
   "power": 88720687
  },
  {
   "server": 1087,
   "family": "TransRights",
   "power": 86602447
  },
  {
   "server": 1088,
   "family": "LostSouls",
   "power": 1742212490
  },
  {
   "server": 1088,
   "family": "DarkKnights",
   "power": 309385662
  },
  {
   "server": 1088,
   "family": "DeathStar",
   "power": 298607968
  },
  {
   "server": 1088,
   "family": "Crackheads",
   "power": 264754390
  },
  {
   "server": 1088,
   "family": "MUSHROOMKFCLAN",
   "power": 258502406
  },
  {
   "server": 1088,
   "family": "darkened420",
   "power": 258439939
  },
  {
   "server": 1088,
   "family": "Hanahaki",
   "power": 203069046
  },
  {
   "server": 1088,
   "family": "Ravenclaw",
   "power": 139414349
  },
  {
   "server": 1088,
   "family": "Indoctrinated",
   "power": 121395329
  },
  {
   "server": 1088,
   "family": "HazbinFamily",
   "power": 110313085
  },
  {
   "server": 1089,
   "family": "LaughingCoffin",
   "power": 1188812111
  },
  {
   "server": 1089,
   "family": "Afterlife",
   "power": 1188120528
  },
  {
   "server": 1089,
   "family": "Haven",
   "power": 549423146
  },
  {
   "server": 1089,
   "family": "BLANK",
   "power": 252577654
  },
  {
   "server": 1089,
   "family": "ThatWhtSheSaid",
   "power": 228091235
  },
  {
   "server": 1089,
   "family": "Mandalore",
   "power": 185116073
  },
  {
   "server": 1089,
   "family": "SuperFamily",
   "power": 184587676
  },
  {
   "server": 1089,
   "family": "mcpuffins",
   "power": 160308864
  },
  {
   "server": 1089,
   "family": "SoulOfShrooms",
   "power": 143963669
  },
  {
   "server": 1089,
   "family": "FDP",
   "power": 81600905
  },
  {
   "server": 1090,
   "family": "BigOlYellaWood",
   "power": 1749353256
  },
  {
   "server": 1090,
   "family": "Disney",
   "power": 1274483656
  },
  {
   "server": 1090,
   "family": "ShadyFields",
   "power": 449222305
  },
  {
   "server": 1090,
   "family": "MooshMooshFam",
   "power": 255485215
  },
  {
   "server": 1090,
   "family": "ALMIGHTY",
   "power": 135322398
  },
  {
   "server": 1090,
   "family": "Fungi",
   "power": 91762640
  },
  {
   "server": 1090,
   "family": "Casual",
   "power": 63886719
  },
  {
   "server": 1090,
   "family": "Infected",
   "power": 54872557
  },
  {
   "server": 1090,
   "family": "FamilySpore",
   "power": 53950046
  },
  {
   "server": 1090,
   "family": "LaidBackGamers",
   "power": 21993542
  },
  {
   "server": 1091,
   "family": "Cafe",
   "power": 1758519555
  },
  {
   "server": 1091,
   "family": "Chill",
   "power": 925698240
  },
  {
   "server": 1091,
   "family": "ThaKillers",
   "power": 304793979
  },
  {
   "server": 1091,
   "family": "Lilith",
   "power": 293543260
  },
  {
   "server": 1091,
   "family": "TRXSH",
   "power": 226771358
  },
  {
   "server": 1091,
   "family": "Rebels",
   "power": 209711123
  },
  {
   "server": 1091,
   "family": "shroom",
   "power": 188522893
  },
  {
   "server": 1091,
   "family": "Poobis",
   "power": 155404449
  },
  {
   "server": 1091,
   "family": "TheShiitakes",
   "power": 105408279
  },
  {
   "server": 1091,
   "family": "Thegang",
   "power": 59135180
  },
  {
   "server": 1092,
   "family": "Warlords",
   "power": 1760588918
  },
  {
   "server": 1092,
   "family": "Empire",
   "power": 494866781
  },
  {
   "server": 1092,
   "family": "SternEchelon",
   "power": 435742786
  },
  {
   "server": 1092,
   "family": "ROYALS",
   "power": 420975652
  },
  {
   "server": 1092,
   "family": "SpaceCowboys",
   "power": 386394695
  },
  {
   "server": 1092,
   "family": "strawhats",
   "power": 321508245
  },
  {
   "server": 1092,
   "family": "Legion",
   "power": 192704606
  },
  {
   "server": 1092,
   "family": "Nirvana",
   "power": 185416089
  },
  {
   "server": 1092,
   "family": "BlackPaw",
   "power": 180208231
  },
  {
   "server": 1092,
   "family": "RedStars",
   "power": 37563416
  },
  {
   "server": 1093,
   "family": "Mermaid",
   "power": 1813281181
  },
  {
   "server": 1093,
   "family": "Lords",
   "power": 630802381
  },
  {
   "server": 1093,
   "family": "OnePiece",
   "power": 346235747
  },
  {
   "server": 1093,
   "family": "M4DN3SS",
   "power": 300026671
  },
  {
   "server": 1093,
   "family": "DoomShroom",
   "power": 250959156
  },
  {
   "server": 1093,
   "family": "Ramen",
   "power": 228353861
  },
  {
   "server": 1093,
   "family": "Bratticus",
   "power": 197450751
  },
  {
   "server": 1093,
   "family": "FairyTail",
   "power": 153538563
  },
  {
   "server": 1093,
   "family": "ShroomTea",
   "power": 149543204
  },
  {
   "server": 1093,
   "family": "EorziaBound",
   "power": 146548111
  },
  {
   "server": 1094,
   "family": "Amoonguss",
   "power": 1745646214
  },
  {
   "server": 1094,
   "family": "SETA",
   "power": 546730685
  },
  {
   "server": 1094,
   "family": "InsomniacsRus",
   "power": 388635787
  },
  {
   "server": 1094,
   "family": "zeroknight",
   "power": 375390385
  },
  {
   "server": 1094,
   "family": "Kingdom",
   "power": 354323125
  },
  {
   "server": 1094,
   "family": "blackmagic",
   "power": 333460090
  },
  {
   "server": 1094,
   "family": "CrowsNest",
   "power": 324767628
  },
  {
   "server": 1094,
   "family": "TheFamily",
   "power": 215348545
  },
  {
   "server": 1094,
   "family": "TRIP",
   "power": 151626772
  },
  {
   "server": 1094,
   "family": "Funguys",
   "power": 89087982
  },
  {
   "server": 1095,
   "family": "Shrooms",
   "power": 1653921524
  },
  {
   "server": 1095,
   "family": "Glitch",
   "power": 1259500540
  },
  {
   "server": 1095,
   "family": "B0rky",
   "power": 350498860
  },
  {
   "server": 1095,
   "family": "USA",
   "power": 240223837
  },
  {
   "server": 1095,
   "family": "TheGnomes",
   "power": 216496203
  },
  {
   "server": 1095,
   "family": "Hawks",
   "power": 212725132
  },
  {
   "server": 1095,
   "family": "MagicMushrooms",
   "power": 132583979
  },
  {
   "server": 1095,
   "family": "kings",
   "power": 128621159
  },
  {
   "server": 1095,
   "family": "Reapers",
   "power": 128613302
  },
  {
   "server": 1095,
   "family": "Rinascita",
   "power": 127331521
  },
  {
   "server": 1096,
   "family": "TheWhales",
   "power": 1740587311
  },
  {
   "server": 1096,
   "family": "Rawr",
   "power": 1156902941
  },
  {
   "server": 1096,
   "family": "DragonSect",
   "power": 393297964
  },
  {
   "server": 1096,
   "family": "MagicMushrooms",
   "power": 206228382
  },
  {
   "server": 1096,
   "family": "Villains",
   "power": 170614706
  },
  {
   "server": 1096,
   "family": "Champions",
   "power": 165526731
  },
  {
   "server": 1096,
   "family": "GOATS",
   "power": 114200872
  },
  {
   "server": 1096,
   "family": "Mushies",
   "power": 53737872
  },
  {
   "server": 1096,
   "family": "grim_Reaper",
   "power": 47776538
  },
  {
   "server": 1096,
   "family": "Inferno",
   "power": 47760526
  },
  {
   "server": 1097,
   "family": "Fungi",
   "power": 1551384321
  },
  {
   "server": 1097,
   "family": "Skilldap",
   "power": 1055088362
  },
  {
   "server": 1097,
   "family": "HouseForsaken",
   "power": 470615200
  },
  {
   "server": 1097,
   "family": "Lucky",
   "power": 190750624
  },
  {
   "server": 1097,
   "family": "Ajin",
   "power": 185054781
  },
  {
   "server": 1097,
   "family": "Trippyfam",
   "power": 170964545
  },
  {
   "server": 1097,
   "family": "Isekai",
   "power": 99946077
  },
  {
   "server": 1097,
   "family": "TheMemeTeam",
   "power": 98575301
  },
  {
   "server": 1097,
   "family": "MushroomClan",
   "power": 89528529
  },
  {
   "server": 1097,
   "family": "Tyranny",
   "power": 59086530
  },
  {
   "server": 1098,
   "family": "§atansAngels",
   "power": 1925746817
  },
  {
   "server": 1098,
   "family": "Camelot",
   "power": 871862044
  },
  {
   "server": 1098,
   "family": "Tyrants",
   "power": 275089353
  },
  {
   "server": 1098,
   "family": "Novea",
   "power": 165392254
  },
  {
   "server": 1098,
   "family": "WigWam",
   "power": 150160815
  },
  {
   "server": 1098,
   "family": "Mothership",
   "power": 106332582
  },
  {
   "server": 1098,
   "family": "TheShroomery",
   "power": 91149939
  },
  {
   "server": 1098,
   "family": "thicklargebig",
   "power": 87898155
  },
  {
   "server": 1098,
   "family": "CherryLove",
   "power": 61396167
  },
  {
   "server": 1098,
   "family": "Cyber",
   "power": 59341996
  },
  {
   "server": 1099,
   "family": "Cryptic",
   "power": 1858709676
  },
  {
   "server": 1099,
   "family": "FairyTail",
   "power": 937882165
  },
  {
   "server": 1099,
   "family": "Primordial",
   "power": 293409705
  },
  {
   "server": 1099,
   "family": "Mush",
   "power": 243944959
  },
  {
   "server": 1099,
   "family": "ShvroomVillage",
   "power": 233936102
  },
  {
   "server": 1099,
   "family": "Marseille",
   "power": 189629405
  },
  {
   "server": 1099,
   "family": "Cloud9",
   "power": 179277069
  },
  {
   "server": 1099,
   "family": "BadAssery",
   "power": 161357006
  },
  {
   "server": 1099,
   "family": "OathKnights",
   "power": 142202869
  },
  {
   "server": 1099,
   "family": "Myconids",
   "power": 135129676
  },
  {
   "server": 1100,
   "family": "ShrooMates",
   "power": 1432685334
  },
  {
   "server": 1100,
   "family": "Ambition",
   "power": 597760892
  },
  {
   "server": 1100,
   "family": "Noodles",
   "power": 502221289
  },
  {
   "server": 1100,
   "family": "MagicMUSH",
   "power": 442392397
  },
  {
   "server": 1100,
   "family": "Legends",
   "power": 337783253
  },
  {
   "server": 1100,
   "family": "LosersOnly",
   "power": 293015985
  },
  {
   "server": 1100,
   "family": "Shroomzerk",
   "power": 266646478
  },
  {
   "server": 1100,
   "family": "Purgatory",
   "power": 231245461
  },
  {
   "server": 1100,
   "family": "AngelFairy702",
   "power": 225186050
  },
  {
   "server": 1100,
   "family": "Shroominators",
   "power": 216657191
  },
  {
   "server": 1101,
   "family": "ShitakeHappens",
   "power": 1876093821
  },
  {
   "server": 1101,
   "family": "ShroomEmpire1",
   "power": 1289068098
  },
  {
   "server": 1101,
   "family": "TakiGang",
   "power": 373818669
  },
  {
   "server": 1101,
   "family": "ShroomBoom",
   "power": 316879013
  },
  {
   "server": 1101,
   "family": "Solaris",
   "power": 301610270
  },
  {
   "server": 1101,
   "family": "Hentai",
   "power": 171860547
  },
  {
   "server": 1101,
   "family": "FunGuyz",
   "power": 122000303
  },
  {
   "server": 1101,
   "family": "Shroomies",
   "power": 105510801
  },
  {
   "server": 1101,
   "family": "Monkeymushroom",
   "power": 46118914
  },
  {
   "server": 1101,
   "family": "MushroomStamp",
   "power": 43035141
  },
  {
   "server": 1102,
   "family": "Nova",
   "power": 1627269528
  },
  {
   "server": 1102,
   "family": "Purgatory",
   "power": 941018758
  },
  {
   "server": 1102,
   "family": "Tempest",
   "power": 462193178
  },
  {
   "server": 1102,
   "family": "SCPFoundation",
   "power": 311478056
  },
  {
   "server": 1102,
   "family": "Degenerates",
   "power": 219966608
  },
  {
   "server": 1102,
   "family": "HippieHermits",
   "power": 187259857
  },
  {
   "server": 1102,
   "family": "mushrooms",
   "power": 108906068
  },
  {
   "server": 1102,
   "family": "REAPERS",
   "power": 72050714
  },
  {
   "server": 1102,
   "family": "EggsNtoast",
   "power": 34020315
  },
  {
   "server": 1102,
   "family": "Brightside",
   "power": 24851785
  },
  {
   "server": 1103,
   "family": "ShroomArmy",
   "power": 1708728168
  },
  {
   "server": 1103,
   "family": "SaintsOfPoison",
   "power": 716595079
  },
  {
   "server": 1103,
   "family": "1UP",
   "power": 385592070
  },
  {
   "server": 1103,
   "family": "SHROOMS",
   "power": 327982378
  },
  {
   "server": 1103,
   "family": "Doom_Makers",
   "power": 253202564
  },
  {
   "server": 1103,
   "family": "Stormyzz",
   "power": 224270654
  },
  {
   "server": 1103,
   "family": "Destroyer",
   "power": 194696747
  },
  {
   "server": 1103,
   "family": "ShroomySweets",
   "power": 192355131
  },
  {
   "server": 1103,
   "family": "GreenFn",
   "power": 128935888
  },
  {
   "server": 1103,
   "family": "Psilocybros",
   "power": 80959825
  },
  {
   "server": 1104,
   "family": "Chrysanthemum",
   "power": 1865350747
  },
  {
   "server": 1104,
   "family": "Malevolent",
   "power": 492268988
  },
  {
   "server": 1104,
   "family": "MagicMushies",
   "power": 463731604
  },
  {
   "server": 1104,
   "family": "Meeps",
   "power": 239194995
  },
  {
   "server": 1104,
   "family": "Bingo",
   "power": 219124959
  },
  {
   "server": 1104,
   "family": "SporeSquad",
   "power": 189134577
  },
  {
   "server": 1104,
   "family": "Psycellia",
   "power": 169259045
  },
  {
   "server": 1104,
   "family": "ShadowKnights",
   "power": 50676347
  },
  {
   "server": 1104,
   "family": "RoyalShrooms",
   "power": 46873213
  },
  {
   "server": 1104,
   "family": "Moonlight",
   "power": 36878204
  },
  {
   "server": 1105,
   "family": "GoonerVile",
   "power": 1325169813
  },
  {
   "server": 1105,
   "family": "Mushlords",
   "power": 661665283
  },
  {
   "server": 1105,
   "family": "Blu’sDemons",
   "power": 485971421
  },
  {
   "server": 1105,
   "family": "goobergangster",
   "power": 364806758
  },
  {
   "server": 1105,
   "family": "shroomsntaters",
   "power": 358621634
  },
  {
   "server": 1105,
   "family": "20KGLORY",
   "power": 322364414
  },
  {
   "server": 1105,
   "family": "Flacidpeen",
   "power": 294192475
  },
  {
   "server": 1105,
   "family": "PeppaSteppas",
   "power": 164170143
  },
  {
   "server": 1105,
   "family": "Gods",
   "power": 144462354
  },
  {
   "server": 1105,
   "family": "TheMushies",
   "power": 73238538
  },
  {
   "server": 1106,
   "family": "MagicShrooms",
   "power": 1603466050
  },
  {
   "server": 1106,
   "family": "BloodRaven",
   "power": 1081774213
  },
  {
   "server": 1106,
   "family": "ChaosShrooms",
   "power": 429650770
  },
  {
   "server": 1106,
   "family": "LobsterBaby",
   "power": 390896179
  },
  {
   "server": 1106,
   "family": "Gods",
   "power": 287745814
  },
  {
   "server": 1106,
   "family": "Shroomsniffers",
   "power": 276785694
  },
  {
   "server": 1106,
   "family": "Shroomies",
   "power": 271427970
  },
  {
   "server": 1106,
   "family": "Sporadix",
   "power": 155359641
  },
  {
   "server": 1106,
   "family": "MagikarpKing",
   "power": 106281560
  },
  {
   "server": 1106,
   "family": "FlyingPickles",
   "power": 87750056
  },
  {
   "server": 1107,
   "family": "Origami",
   "power": 1709566160
  },
  {
   "server": 1107,
   "family": "RAWR",
   "power": 512878134
  },
  {
   "server": 1107,
   "family": "DUCKMODE",
   "power": 362994905
  },
  {
   "server": 1107,
   "family": "Toadstool",
   "power": 332759228
  },
  {
   "server": 1107,
   "family": "Ashfall",
   "power": 273817011
  },
  {
   "server": 1107,
   "family": "Goonsquad",
   "power": 263828443
  },
  {
   "server": 1107,
   "family": "MushroomRoyals",
   "power": 212772180
  },
  {
   "server": 1107,
   "family": "ShroomHaven",
   "power": 157899443
  },
  {
   "server": 1107,
   "family": "⭐️Lunar⭐️",
   "power": 142821753
  },
  {
   "server": 1107,
   "family": "femboys",
   "power": 86033196
  },
  {
   "server": 1108,
   "family": "IMMORTALS",
   "power": 1547864064
  },
  {
   "server": 1108,
   "family": "Predators",
   "power": 1332115237
  },
  {
   "server": 1108,
   "family": "HolyShitake",
   "power": 373405504
  },
  {
   "server": 1108,
   "family": "Epitome",
   "power": 296469195
  },
  {
   "server": 1108,
   "family": "MathMeeps",
   "power": 187641443
  },
  {
   "server": 1108,
   "family": "Deadly_Shrooms",
   "power": 170164788
  },
  {
   "server": 1108,
   "family": "DEATHCAP",
   "power": 168451410
  },
  {
   "server": 1108,
   "family": "TRICHYY’S",
   "power": 133226627
  },
  {
   "server": 1108,
   "family": "Liquidarmy",
   "power": 107759433
  },
  {
   "server": 1108,
   "family": "LilWolves",
   "power": 67784750
  },
  {
   "server": 1109,
   "family": "Jutsu",
   "power": 1698005096
  },
  {
   "server": 1109,
   "family": "Clone_Jutsu",
   "power": 526072034
  },
  {
   "server": 1109,
   "family": "Sage",
   "power": 462806826
  },
  {
   "server": 1109,
   "family": "Philippines",
   "power": 376104413
  },
  {
   "server": 1109,
   "family": "Elysium",
   "power": 281928702
  },
  {
   "server": 1109,
   "family": "Poisonmushroom",
   "power": 265279523
  },
  {
   "server": 1109,
   "family": "Wings_of_Aura",
   "power": 259826666
  },
  {
   "server": 1109,
   "family": "DEEzSHROOMz",
   "power": 205740678
  },
  {
   "server": 1109,
   "family": "Legends",
   "power": 193612240
  },
  {
   "server": 1109,
   "family": "Chaos",
   "power": 36509391
  },
  {
   "server": 1110,
   "family": "Chaos",
   "power": 1725035621
  },
  {
   "server": 1110,
   "family": "FatalFoxx",
   "power": 1156348615
  },
  {
   "server": 1110,
   "family": "Yggdrasil",
   "power": 429686149
  },
  {
   "server": 1110,
   "family": "Mojimoji",
   "power": 363406518
  },
  {
   "server": 1110,
   "family": "ShroomRaiders",
   "power": 329773791
  },
  {
   "server": 1110,
   "family": "NoFoxxGiven",
   "power": 273100784
  },
  {
   "server": 1110,
   "family": "Free2Play",
   "power": 272624198
  },
  {
   "server": 1110,
   "family": "ACDSHROOMS",
   "power": 231396833
  },
  {
   "server": 1110,
   "family": "Shroomato’s",
   "power": 117630042
  },
  {
   "server": 1110,
   "family": "MouseShroomies",
   "power": 112941953
  },
  {
   "server": 1111,
   "family": "MushroomBros",
   "power": 1784042133
  },
  {
   "server": 1111,
   "family": "EliteDragons",
   "power": 878202293
  },
  {
   "server": 1111,
   "family": "TomuaraCLAN",
   "power": 461617986
  },
  {
   "server": 1111,
   "family": "ShadowGarden",
   "power": 289252540
  },
  {
   "server": 1111,
   "family": "ThousandGods",
   "power": 279621875
  },
  {
   "server": 1111,
   "family": "Nebula",
   "power": 248042456
  },
  {
   "server": 1111,
   "family": "DivineMycelium",
   "power": 211624810
  },
  {
   "server": 1111,
   "family": "blackdiamond",
   "power": 193626083
  },
  {
   "server": 1111,
   "family": "TheCrusaders",
   "power": 189795465
  },
  {
   "server": 1111,
   "family": "DumbledorsArmy",
   "power": 92390980
  },
  {
   "server": 1112,
   "family": "BustACap",
   "power": 1755597238
  },
  {
   "server": 1112,
   "family": "DaFungiPlague",
   "power": 1092294376
  },
  {
   "server": 1112,
   "family": "Unstoppables",
   "power": 537675807
  },
  {
   "server": 1112,
   "family": "SKillzM4dNess",
   "power": 328211470
  },
  {
   "server": 1112,
   "family": "MEMBERSONLY",
   "power": 285981180
  },
  {
   "server": 1112,
   "family": "reaperz",
   "power": 276807141
  },
  {
   "server": 1112,
   "family": "TheShrooms",
   "power": 249439626
  },
  {
   "server": 1112,
   "family": "Cmplex",
   "power": 230531534
  },
  {
   "server": 1112,
   "family": "ShroomieBoys",
   "power": 127086548
  },
  {
   "server": 1112,
   "family": "moonlight",
   "power": 85808475
  },
  {
   "server": 1113,
   "family": "Legends",
   "power": 1761439230
  },
  {
   "server": 1113,
   "family": "Versals",
   "power": 533335287
  },
  {
   "server": 1113,
   "family": "ShroomBurn",
   "power": 275669892
  },
  {
   "server": 1113,
   "family": "Fungis",
   "power": 212969649
  },
  {
   "server": 1113,
   "family": "Celestials",
   "power": 211924484
  },
  {
   "server": 1113,
   "family": "Gods",
   "power": 201198788
  },
  {
   "server": 1113,
   "family": "Loyalty",
   "power": 197509439
  },
  {
   "server": 1113,
   "family": "dragons",
   "power": 160577644
  },
  {
   "server": 1113,
   "family": "Shroombussy",
   "power": 154240404
  },
  {
   "server": 1113,
   "family": "DEATHNDARKNESS",
   "power": 122320442
  },
  {
   "server": 1114,
   "family": "PSILOCYBIN",
   "power": 1505602185
  },
  {
   "server": 1114,
   "family": "BananaRepublic",
   "power": 1465629232
  },
  {
   "server": 1114,
   "family": "ScarletReapers",
   "power": 220259057
  },
  {
   "server": 1114,
   "family": "Gyatt2Win",
   "power": 216882182
  },
  {
   "server": 1114,
   "family": "FungusAmong’us",
   "power": 210659617
  },
  {
   "server": 1114,
   "family": "Chxllz",
   "power": 147933125
  },
  {
   "server": 1114,
   "family": "shroomfam",
   "power": 138435176
  },
  {
   "server": 1114,
   "family": "Psychedelic",
   "power": 120764485
  },
  {
   "server": 1114,
   "family": "TheFallen",
   "power": 120189986
  },
  {
   "server": 1114,
   "family": "Hippyslayers",
   "power": 79141450
  },
  {
   "server": 1115,
   "family": "Schrooms",
   "power": 1319330669
  },
  {
   "server": 1115,
   "family": "3amZoomies",
   "power": 1287390008
  },
  {
   "server": 1115,
   "family": "beastz",
   "power": 358784518
  },
  {
   "server": 1115,
   "family": "TheHunters",
   "power": 312785118
  },
  {
   "server": 1115,
   "family": "Mooshrooms",
   "power": 279541730
  },
  {
   "server": 1115,
   "family": "Swarm",
   "power": 271520549
  },
  {
   "server": 1115,
   "family": "Gooners",
   "power": 258064695
  },
  {
   "server": 1115,
   "family": "Crypticomen",
   "power": 251668904
  },
  {
   "server": 1115,
   "family": "Introverts",
   "power": 251551345
  },
  {
   "server": 1115,
   "family": "hazbinhotel",
   "power": 137151900
  },
  {
   "server": 1116,
   "family": "Psychedelics",
   "power": 1757739016
  },
  {
   "server": 1116,
   "family": "Reapers",
   "power": 1612547229
  },
  {
   "server": 1116,
   "family": "Reapers2",
   "power": 620005306
  },
  {
   "server": 1116,
   "family": "MapleTree",
   "power": 223107970
  },
  {
   "server": 1116,
   "family": "Midgard",
   "power": 210864521
  },
  {
   "server": 1116,
   "family": "TransPride",
   "power": 193003660
  },
  {
   "server": 1116,
   "family": "MushyLegends",
   "power": 165101372
  },
  {
   "server": 1116,
   "family": "MicroDose",
   "power": 139765015
  },
  {
   "server": 1116,
   "family": "mushroom",
   "power": 112212332
  },
  {
   "server": 1116,
   "family": "Valhalla",
   "power": 57815178
  },
  {
   "server": 1117,
   "family": "BloodySins",
   "power": 1817984139
  },
  {
   "server": 1117,
   "family": "ClayPots",
   "power": 675224335
  },
  {
   "server": 1117,
   "family": "DeathHasAName",
   "power": 572690024
  },
  {
   "server": 1117,
   "family": "WarringShrooms",
   "power": 491616589
  },
  {
   "server": 1117,
   "family": "whyyyy",
   "power": 260734591
  },
  {
   "server": 1117,
   "family": "Cordyceps",
   "power": 190178582
  },
  {
   "server": 1117,
   "family": "ShroomMilitia",
   "power": 141315863
  },
  {
   "server": 1117,
   "family": "Shroomsters",
   "power": 128302265
  },
  {
   "server": 1117,
   "family": "CreamyMushroom",
   "power": 70065422
  },
  {
   "server": 1117,
   "family": "Eagles",
   "power": 53829701
  },
  {
   "server": 1118,
   "family": "TheCollective",
   "power": 1873071891
  },
  {
   "server": 1118,
   "family": "RiceRockets",
   "power": 871766002
  },
  {
   "server": 1118,
   "family": "Hazbin_Hotel",
   "power": 821108741
  },
  {
   "server": 1118,
   "family": "Slaying",
   "power": 371149312
  },
  {
   "server": 1118,
   "family": "Soulfire",
   "power": 366573953
  },
  {
   "server": 1118,
   "family": "FarFarAway",
   "power": 290478465
  },
  {
   "server": 1118,
   "family": "SpudsUnited",
   "power": 193202015
  },
  {
   "server": 1118,
   "family": "Myconids",
   "power": 190950966
  },
  {
   "server": 1118,
   "family": "FOREVERKILLING",
   "power": 189137239
  },
  {
   "server": 1118,
   "family": "Unstoppable",
   "power": 148766931
  },
  {
   "server": 1119,
   "family": "———Queen———",
   "power": 1603238899
  },
  {
   "server": 1119,
   "family": "DemonLords",
   "power": 773068514
  },
  {
   "server": 1119,
   "family": "Noobs",
   "power": 455399997
  },
  {
   "server": 1119,
   "family": "idk",
   "power": 355457709
  },
  {
   "server": 1119,
   "family": "MAGICMUSHYS",
   "power": 351769310
  },
  {
   "server": 1119,
   "family": "TheGods",
   "power": 329261698
  },
  {
   "server": 1119,
   "family": "Psychedelic",
   "power": 321035045
  },
  {
   "server": 1119,
   "family": "Elites",
   "power": 311245209
  },
  {
   "server": 1119,
   "family": "Mushiest",
   "power": 267243740
  },
  {
   "server": 1119,
   "family": "Efif_Musse",
   "power": 74702438
  },
  {
   "server": 1120,
   "family": "Celestial",
   "power": 1676498601
  },
  {
   "server": 1120,
   "family": "SEES",
   "power": 1039942258
  },
  {
   "server": 1120,
   "family": "Bugs",
   "power": 772368197
  },
  {
   "server": 1120,
   "family": "MushroomROAD",
   "power": 652449947
  },
  {
   "server": 1120,
   "family": "Unknowns",
   "power": 423275405
  },
  {
   "server": 1120,
   "family": "Xenocide",
   "power": 280797605
  },
  {
   "server": 1120,
   "family": "house_of_fungu",
   "power": 213767829
  },
  {
   "server": 1120,
   "family": "Zomb33land",
   "power": 206600941
  },
  {
   "server": 1120,
   "family": "ShroomKingdom",
   "power": 182740838
  },
  {
   "server": 1120,
   "family": "MushroomMafia",
   "power": 140403805
  },
  {
   "server": 1121,
   "family": "BloodSpore",
   "power": 1875574157
  },
  {
   "server": 1121,
   "family": "Ahjin",
   "power": 1122571807
  },
  {
   "server": 1121,
   "family": "The_Hero_Party",
   "power": 471389934
  },
  {
   "server": 1121,
   "family": "Warriors",
   "power": 360895116
  },
  {
   "server": 1121,
   "family": "Happy",
   "power": 305924293
  },
  {
   "server": 1121,
   "family": "Bioluminescent",
   "power": 290540954
  },
  {
   "server": 1121,
   "family": "SQUAD",
   "power": 266221819
  },
  {
   "server": 1121,
   "family": "Pinguelos",
   "power": 224599463
  },
  {
   "server": 1121,
   "family": "DragonBall",
   "power": 201193504
  },
  {
   "server": 1121,
   "family": "Salamanders",
   "power": 147115156
  },
  {
   "server": 1122,
   "family": "Delinquents",
   "power": 1828863625
  },
  {
   "server": 1122,
   "family": "Degenerates",
   "power": 966827680
  },
  {
   "server": 1122,
   "family": "shroomsRfun420",
   "power": 532462935
  },
  {
   "server": 1122,
   "family": "Mooshrooms",
   "power": 499593374
  },
  {
   "server": 1122,
   "family": "berserk",
   "power": 305846297
  },
  {
   "server": 1122,
   "family": "Doofenshmirtz",
   "power": 291926833
  },
  {
   "server": 1122,
   "family": "Just4fun",
   "power": 104801442
  },
  {
   "server": 1122,
   "family": "TheShroomRoom",
   "power": 91129029
  },
  {
   "server": 1122,
   "family": "Shroomtopia",
   "power": 90658819
  },
  {
   "server": 1122,
   "family": "AutoBots",
   "power": 64027467
  },
  {
   "server": 1123,
   "family": "ShroomzNation",
   "power": 1891717089
  },
  {
   "server": 1123,
   "family": "Shrimp",
   "power": 678076940
  },
  {
   "server": 1123,
   "family": "Fiddleheads",
   "power": 350166242
  },
  {
   "server": 1123,
   "family": "MirrorStars",
   "power": 330833520
  },
  {
   "server": 1123,
   "family": "ShroomsMen",
   "power": 328088183
  },
  {
   "server": 1123,
   "family": "soulblades",
   "power": 229255228
  },
  {
   "server": 1123,
   "family": "Shroomtastic",
   "power": 211377208
  },
  {
   "server": 1123,
   "family": "GANG",
   "power": 207368646
  },
  {
   "server": 1123,
   "family": "Smaug",
   "power": 102747197
  },
  {
   "server": 1123,
   "family": "OnE",
   "power": 63587293
  },
  {
   "server": 1124,
   "family": "OnlyLamps",
   "power": 1616223496
  },
  {
   "server": 1124,
   "family": "Kingz",
   "power": 611565090
  },
  {
   "server": 1124,
   "family": "ShadowGarden",
   "power": 315263495
  },
  {
   "server": 1124,
   "family": "FunGuy",
   "power": 237901203
  },
  {
   "server": 1124,
   "family": "ShroomGods",
   "power": 230496589
  },
  {
   "server": 1124,
   "family": "EliteFiends",
   "power": 228711015
  },
  {
   "server": 1124,
   "family": "Dragonquest",
   "power": 193778335
  },
  {
   "server": 1124,
   "family": "Wonderland",
   "power": 108793830
  },
  {
   "server": 1124,
   "family": "Aeterna",
   "power": 40523758
  },
  {
   "server": 1124,
   "family": "StickyJohn",
   "power": 34720420
  },
  {
   "server": 1125,
   "family": "AssaultTeam",
   "power": 1854550788
  },
  {
   "server": 1125,
   "family": "BloodBorne",
   "power": 854775985
  },
  {
   "server": 1125,
   "family": "SwagKings",
   "power": 397704624
  },
  {
   "server": 1125,
   "family": "GardenGate",
   "power": 217316911
  },
  {
   "server": 1125,
   "family": "FingerBlasters",
   "power": 166029836
  },
  {
   "server": 1125,
   "family": "ShroomHeroes",
   "power": 138456941
  },
  {
   "server": 1125,
   "family": "Demonsouls",
   "power": 98043366
  },
  {
   "server": 1125,
   "family": "shoom",
   "power": 90227827
  },
  {
   "server": 1125,
   "family": "StrawHats",
   "power": 89326714
  },
  {
   "server": 1125,
   "family": "Roughnecks",
   "power": 85231333
  },
  {
   "server": 1126,
   "family": "Gods",
   "power": 1701087909
  },
  {
   "server": 1126,
   "family": "TheShroomies",
   "power": 526150838
  },
  {
   "server": 1126,
   "family": "Angels",
   "power": 387873790
  },
  {
   "server": 1126,
   "family": "Limitless",
   "power": 341954349
  },
  {
   "server": 1126,
   "family": "StrawHats",
   "power": 258056777
  },
  {
   "server": 1126,
   "family": "Yggdrasil",
   "power": 252024196
  },
  {
   "server": 1126,
   "family": "OnePiece",
   "power": 241509681
  },
  {
   "server": 1126,
   "family": "Shroomers",
   "power": 188729191
  },
  {
   "server": 1126,
   "family": "Shroomihut",
   "power": 184414132
  },
  {
   "server": 1126,
   "family": "420Fam",
   "power": 179851433
  },
  {
   "server": 1127,
   "family": "CookieGods",
   "power": 1898272092
  },
  {
   "server": 1127,
   "family": "Shroomates",
   "power": 1003968006
  },
  {
   "server": 1127,
   "family": "Moon",
   "power": 424597547
  },
  {
   "server": 1127,
   "family": "7DeadlyFungi",
   "power": 282413246
  },
  {
   "server": 1127,
   "family": "CookieFathers",
   "power": 262708438
  },
  {
   "server": 1127,
   "family": "Elite",
   "power": 225983334
  },
  {
   "server": 1127,
   "family": "TransRights",
   "power": 199088267
  },
  {
   "server": 1127,
   "family": "Myconids",
   "power": 157086647
  },
  {
   "server": 1127,
   "family": "MoltenMushroom",
   "power": 155116128
  },
  {
   "server": 1127,
   "family": "MyShroomies",
   "power": 79330842
  },
  {
   "server": 1128,
   "family": "Skylla",
   "power": 1927055213
  },
  {
   "server": 1128,
   "family": "ClownHouse",
   "power": 941703696
  },
  {
   "server": 1128,
   "family": "DaKimz",
   "power": 362640984
  },
  {
   "server": 1128,
   "family": "Equinox",
   "power": 330792673
  },
  {
   "server": 1128,
   "family": "MistVillage",
   "power": 319847514
  },
  {
   "server": 1128,
   "family": "Strawhats",
   "power": 266545216
  },
  {
   "server": 1128,
   "family": "Paradox",
   "power": 215479114
  },
  {
   "server": 1128,
   "family": "Amanita",
   "power": 179836534
  },
  {
   "server": 1128,
   "family": "Typhon",
   "power": 157428021
  },
  {
   "server": 1128,
   "family": "ShroomDoom",
   "power": 152645936
  },
  {
   "server": 1129,
   "family": "Apex",
   "power": 1291355066
  },
  {
   "server": 1129,
   "family": "TheNation",
   "power": 559217220
  },
  {
   "server": 1129,
   "family": "psychedelics",
   "power": 446554793
  },
  {
   "server": 1129,
   "family": "Villains",
   "power": 353708201
  },
  {
   "server": 1129,
   "family": "Slimegang",
   "power": 333151133
  },
  {
   "server": 1129,
   "family": "ALOHA",
   "power": 256299732
  },
  {
   "server": 1129,
   "family": "bakedshroom",
   "power": 220311561
  },
  {
   "server": 1129,
   "family": "BET",
   "power": 198520487
  },
  {
   "server": 1129,
   "family": "Stormraven",
   "power": 169316111
  },
  {
   "server": 1129,
   "family": "Eldritchfamily",
   "power": 71807473
  },
  {
   "server": 1130,
   "family": "Rapture",
   "power": 1738872948
  },
  {
   "server": 1130,
   "family": "CaveDwellers",
   "power": 1269397353
  },
  {
   "server": 1130,
   "family": "DeathWish",
   "power": 396052337
  },
  {
   "server": 1130,
   "family": "LEGENDS",
   "power": 341791894
  },
  {
   "server": 1130,
   "family": "IcedCoffee",
   "power": 283411205
  },
  {
   "server": 1130,
   "family": "Storm",
   "power": 271942105
  },
  {
   "server": 1130,
   "family": "DevilTown",
   "power": 233172081
  },
  {
   "server": 1130,
   "family": "shroomville",
   "power": 227918704
  },
  {
   "server": 1130,
   "family": "Ragnarok",
   "power": 216205875
  },
  {
   "server": 1130,
   "family": "SAKURA",
   "power": 156806650
  },
  {
   "server": 1131,
   "family": "GothicsRUs",
   "power": 1354474547
  },
  {
   "server": 1131,
   "family": "DeathCap",
   "power": 1301810085
  },
  {
   "server": 1131,
   "family": "Monarchs",
   "power": 1247961894
  },
  {
   "server": 1131,
   "family": "ShroomSlayers",
   "power": 321849946
  },
  {
   "server": 1131,
   "family": "starfire",
   "power": 200380060
  },
  {
   "server": 1131,
   "family": "Mushrooms",
   "power": 192926779
  },
  {
   "server": 1131,
   "family": "Funguys",
   "power": 177984905
  },
  {
   "server": 1131,
   "family": "EDENS",
   "power": 116953021
  },
  {
   "server": 1131,
   "family": "TheHubStars",
   "power": 108256688
  },
  {
   "server": 1131,
   "family": "Isekaied",
   "power": 87642550
  },
  {
   "server": 1132,
   "family": "TheFinalNut",
   "power": 1849395089
  },
  {
   "server": 1132,
   "family": "FunGuy",
   "power": 808137271
  },
  {
   "server": 1132,
   "family": "FUNgi",
   "power": 423881509
  },
  {
   "server": 1132,
   "family": "Shroomies",
   "power": 406421001
  },
  {
   "server": 1132,
   "family": "Deathfromabove",
   "power": 205900366
  },
  {
   "server": 1132,
   "family": "legends",
   "power": 158135994
  },
  {
   "server": 1132,
   "family": "FurGamers",
   "power": 136563805
  },
  {
   "server": 1132,
   "family": "Funging",
   "power": 136499474
  },
  {
   "server": 1132,
   "family": "Mushlings",
   "power": 122890819
  },
  {
   "server": 1132,
   "family": "Hi",
   "power": 93960716
  },
  {
   "server": 1133,
   "family": "Whales",
   "power": 1854064507
  },
  {
   "server": 1133,
   "family": "SoloLeveling",
   "power": 776054948
  },
  {
   "server": 1133,
   "family": "DeathWish",
   "power": 580073169
  },
  {
   "server": 1133,
   "family": "Ghost",
   "power": 284433059
  },
  {
   "server": 1133,
   "family": "FormidablShrom",
   "power": 274468823
  },
  {
   "server": 1133,
   "family": "BEROFF",
   "power": 268632884
  },
  {
   "server": 1133,
   "family": "Legendary",
   "power": 226937734
  },
  {
   "server": 1133,
   "family": "Karma",
   "power": 224365743
  },
  {
   "server": 1133,
   "family": "ShroomMagicks",
   "power": 217818944
  },
  {
   "server": 1133,
   "family": "MUSHROOMFAMILY",
   "power": 68754254
  },
  {
   "server": 1134,
   "family": "Bløssøm",
   "power": 1552757025
  },
  {
   "server": 1134,
   "family": "WildOnes",
   "power": 1075760741
  },
  {
   "server": 1134,
   "family": "SharkesOcean",
   "power": 930678586
  },
  {
   "server": 1134,
   "family": "Toad",
   "power": 377348407
  },
  {
   "server": 1134,
   "family": "Fffffffffff",
   "power": 249185126
  },
  {
   "server": 1134,
   "family": "Shroomies",
   "power": 221702235
  },
  {
   "server": 1134,
   "family": "SleepRose",
   "power": 180541783
  },
  {
   "server": 1134,
   "family": "CutiePatooties",
   "power": 162977061
  },
  {
   "server": 1134,
   "family": "Canada",
   "power": 140438385
  },
  {
   "server": 1134,
   "family": "UnderWorld",
   "power": 104642302
  },
  {
   "server": 1135,
   "family": "ᴛᴇᴀᴍғᴏᴜʀsᴛᴀʀ",
   "power": 1888949105
  },
  {
   "server": 1135,
   "family": "Shroomys",
   "power": 494217901
  },
  {
   "server": 1135,
   "family": "Cookies",
   "power": 463546846
  },
  {
   "server": 1135,
   "family": "NormalPeople",
   "power": 319040026
  },
  {
   "server": 1135,
   "family": "LOM",
   "power": 275216688
  },
  {
   "server": 1135,
   "family": "Twister",
   "power": 254796624
  },
  {
   "server": 1135,
   "family": "Shrooms",
   "power": 230303959
  },
  {
   "server": 1135,
   "family": "Nazarick",
   "power": 214687195
  },
  {
   "server": 1135,
   "family": "Divine",
   "power": 184830779
  },
  {
   "server": 1135,
   "family": "FunGuys",
   "power": 120735563
  },
  {
   "server": 1136,
   "family": "OnlyShrooms",
   "power": 1761041330
  },
  {
   "server": 1136,
   "family": "Shiitake",
   "power": 721810547
  },
  {
   "server": 1136,
   "family": "SporeSomeMore",
   "power": 398813430
  },
  {
   "server": 1136,
   "family": "CunningStunts",
   "power": 359577068
  },
  {
   "server": 1136,
   "family": "semars",
   "power": 335560773
  },
  {
   "server": 1136,
   "family": "ChungusFungus",
   "power": 221925186
  },
  {
   "server": 1136,
   "family": "GalaxyShrooms",
   "power": 198808464
  },
  {
   "server": 1136,
   "family": "MuffinStuffers",
   "power": 87355865
  },
  {
   "server": 1136,
   "family": "mushheads",
   "power": 82077341
  },
  {
   "server": 1136,
   "family": "TruffleButter",
   "power": 79015131
  },
  {
   "server": 1137,
   "family": "Fate",
   "power": 1533833443
  },
  {
   "server": 1137,
   "family": "MapleStory",
   "power": 792647261
  },
  {
   "server": 1137,
   "family": "Shrooms",
   "power": 531570255
  },
  {
   "server": 1137,
   "family": "crazyshroom",
   "power": 283431916
  },
  {
   "server": 1137,
   "family": "Yes",
   "power": 250966663
  },
  {
   "server": 1137,
   "family": "Legendary",
   "power": 236179104
  },
  {
   "server": 1137,
   "family": "Divinity",
   "power": 227521663
  },
  {
   "server": 1137,
   "family": "MagicFungus",
   "power": 213807262
  },
  {
   "server": 1137,
   "family": "TheKings",
   "power": 210426681
  },
  {
   "server": 1137,
   "family": "Origin",
   "power": 199329312
  },
  {
   "server": 1138,
   "family": "Frogs",
   "power": 1588688581
  },
  {
   "server": 1138,
   "family": "Akatsuki",
   "power": 780494994
  },
  {
   "server": 1138,
   "family": "FourHorsemen",
   "power": 588098768
  },
  {
   "server": 1138,
   "family": "GalacticShroom",
   "power": 382268878
  },
  {
   "server": 1138,
   "family": "COSMICS",
   "power": 347653821
  },
  {
   "server": 1138,
   "family": "BlackIce",
   "power": 310150397
  },
  {
   "server": 1138,
   "family": "Pheonix",
   "power": 259032113
  },
  {
   "server": 1138,
   "family": "Shromenators",
   "power": 220929120
  },
  {
   "server": 1138,
   "family": "Shroomsnu",
   "power": 188003482
  },
  {
   "server": 1138,
   "family": "DragonsDen",
   "power": 179595643
  },
  {
   "server": 1139,
   "family": "Mushers",
   "power": 1852144197
  },
  {
   "server": 1139,
   "family": "Wagwan",
   "power": 1530526344
  },
  {
   "server": 1139,
   "family": "Troubledesk",
   "power": 504609788
  },
  {
   "server": 1139,
   "family": "frenchteam",
   "power": 366834112
  },
  {
   "server": 1139,
   "family": "片工卞卞工ヨ己",
   "power": 332267812
  },
  {
   "server": 1139,
   "family": "SkittleSquad",
   "power": 293373033
  },
  {
   "server": 1139,
   "family": "ShroomgoVroom",
   "power": 187494607
  },
  {
   "server": 1139,
   "family": "Freak_Nation",
   "power": 186405643
  },
  {
   "server": 1139,
   "family": "OnePiece",
   "power": 146473596
  },
  {
   "server": 1139,
   "family": "TippyTakis",
   "power": 86304497
  },
  {
   "server": 1140,
   "family": "TG",
   "power": 1442212644
  },
  {
   "server": 1140,
   "family": "MasterPiece",
   "power": 1271348424
  },
  {
   "server": 1140,
   "family": "ShroomHalks",
   "power": 413883783
  },
  {
   "server": 1140,
   "family": "POISON",
   "power": 305280943
  },
  {
   "server": 1140,
   "family": "Valhalla",
   "power": 289175696
  },
  {
   "server": 1140,
   "family": "MagicMushroom",
   "power": 280495252
  },
  {
   "server": 1140,
   "family": "MilkOfZaddy",
   "power": 240720325
  },
  {
   "server": 1140,
   "family": "DayTrippers",
   "power": 237630654
  },
  {
   "server": 1140,
   "family": "Toadstools",
   "power": 202224429
  },
  {
   "server": 1140,
   "family": "KURTYDORES",
   "power": 161539952
  },
  {
   "server": 1141,
   "family": "Leviathan",
   "power": 1830877542
  },
  {
   "server": 1141,
   "family": "Adventure⭐Time",
   "power": 667361006
  },
  {
   "server": 1141,
   "family": "Uprising",
   "power": 618271611
  },
  {
   "server": 1141,
   "family": "LE",
   "power": 397969311
  },
  {
   "server": 1141,
   "family": "Spore4Spore",
   "power": 385351005
  },
  {
   "server": 1141,
   "family": "Shrooms",
   "power": 364987888
  },
  {
   "server": 1141,
   "family": "SporeNexus",
   "power": 201806114
  },
  {
   "server": 1141,
   "family": "FeistyFungi",
   "power": 145395808
  },
  {
   "server": 1141,
   "family": "H3llFire",
   "power": 108627928
  },
  {
   "server": 1141,
   "family": "SporeSociety",
   "power": 104945426
  },
  {
   "server": 1142,
   "family": "Royalty",
   "power": 1584621716
  },
  {
   "server": 1142,
   "family": "Boba",
   "power": 1034114190
  },
  {
   "server": 1142,
   "family": "weirdos",
   "power": 307208464
  },
  {
   "server": 1142,
   "family": "Nebula",
   "power": 299487758
  },
  {
   "server": 1142,
   "family": "SOA",
   "power": 265316603
  },
  {
   "server": 1142,
   "family": "kanekis_family",
   "power": 251827519
  },
  {
   "server": 1142,
   "family": "MagicShrooms",
   "power": 193435292
  },
  {
   "server": 1142,
   "family": "FUBAR",
   "power": 158989973
  },
  {
   "server": 1142,
   "family": "Dharan",
   "power": 125528455
  },
  {
   "server": 1142,
   "family": "FriedChicken",
   "power": 108472762
  },
  {
   "server": 1143,
   "family": "Hell_Hounds",
   "power": 1908602932
  },
  {
   "server": 1143,
   "family": "WeAreShroom",
   "power": 566440981
  },
  {
   "server": 1143,
   "family": "FriedChicken",
   "power": 508020582
  },
  {
   "server": 1143,
   "family": "RamenLOVERS",
   "power": 288018923
  },
  {
   "server": 1143,
   "family": "shroomlovers",
   "power": 272537370
  },
  {
   "server": 1143,
   "family": "Reaper",
   "power": 238312972
  },
  {
   "server": 1143,
   "family": "Solo",
   "power": 211565696
  },
  {
   "server": 1143,
   "family": "DIABLO",
   "power": 144570510
  },
  {
   "server": 1143,
   "family": "420Fam",
   "power": 137555808
  },
  {
   "server": 1143,
   "family": "Familia",
   "power": 120822770
  },
  {
   "server": 1144,
   "family": "HazyShrooms",
   "power": 1482848830
  },
  {
   "server": 1144,
   "family": "Yggdrasil",
   "power": 819303308
  },
  {
   "server": 1144,
   "family": "FungusAmongus",
   "power": 534941059
  },
  {
   "server": 1144,
   "family": "SadisticSpores",
   "power": 383930257
  },
  {
   "server": 1144,
   "family": "Gods",
   "power": 328493808
  },
  {
   "server": 1144,
   "family": "InnocentZero",
   "power": 318659458
  },
  {
   "server": 1144,
   "family": "GodIsKing",
   "power": 277271215
  },
  {
   "server": 1144,
   "family": "Eternia",
   "power": 208956995
  },
  {
   "server": 1144,
   "family": "Kittens",
   "power": 143541630
  },
  {
   "server": 1144,
   "family": "Azathoth_Cult",
   "power": 130251081
  },
  {
   "server": 1145,
   "family": "OnlyShrooms",
   "power": 1775651659
  },
  {
   "server": 1145,
   "family": "NeonGhosts",
   "power": 889998969
  },
  {
   "server": 1145,
   "family": "§KINGDOM§",
   "power": 525454612
  },
  {
   "server": 1145,
   "family": "PENUMBRA",
   "power": 384783524
  },
  {
   "server": 1145,
   "family": "RavenClaw",
   "power": 308928460
  },
  {
   "server": 1145,
   "family": "LeafVillage",
   "power": 231731867
  },
  {
   "server": 1145,
   "family": "SporeKnight",
   "power": 218004450
  },
  {
   "server": 1145,
   "family": "Femboyfriendly",
   "power": 169784474
  },
  {
   "server": 1145,
   "family": "BBL",
   "power": 149904181
  },
  {
   "server": 1145,
   "family": "EvilShroom",
   "power": 106087223
  },
  {
   "server": 1146,
   "family": "Shiitake",
   "power": 1876554314
  },
  {
   "server": 1146,
   "family": "LowIQShrooms",
   "power": 1299202689
  },
  {
   "server": 1146,
   "family": "Feet",
   "power": 348762133
  },
  {
   "server": 1146,
   "family": "Akatsuki",
   "power": 270252299
  },
  {
   "server": 1146,
   "family": "Knights",
   "power": 263553623
  },
  {
   "server": 1146,
   "family": "Reaper",
   "power": 263101726
  },
  {
   "server": 1146,
   "family": "BagOfBones",
   "power": 245227450
  },
  {
   "server": 1146,
   "family": "🧀",
   "power": 226511202
  },
  {
   "server": 1146,
   "family": "Shroomies",
   "power": 219976927
  },
  {
   "server": 1146,
   "family": "Eaer",
   "power": 218274401
  },
  {
   "server": 1147,
   "family": "Prophecy",
   "power": 1549708924
  },
  {
   "server": 1147,
   "family": "ShroomCity",
   "power": 1429968416
  },
  {
   "server": 1147,
   "family": "Mafia",
   "power": 358322796
  },
  {
   "server": 1147,
   "family": "OnTop",
   "power": 315225556
  },
  {
   "server": 1147,
   "family": "Ducks",
   "power": 307886988
  },
  {
   "server": 1147,
   "family": "TheSyndicate",
   "power": 257166381
  },
  {
   "server": 1147,
   "family": "ADHDisaB",
   "power": 202559244
  },
  {
   "server": 1147,
   "family": "QCChampieKings",
   "power": 194262541
  },
  {
   "server": 1147,
   "family": "InnerCircle",
   "power": 193816203
  },
  {
   "server": 1147,
   "family": "stoneyhomie420",
   "power": 125991979
  },
  {
   "server": 1148,
   "family": "Aesthetica",
   "power": 1897345023
  },
  {
   "server": 1148,
   "family": "Snowflake",
   "power": 644250894
  },
  {
   "server": 1148,
   "family": "XsunstriderX",
   "power": 431009658
  },
  {
   "server": 1148,
   "family": "M_Cult_M",
   "power": 298427794
  },
  {
   "server": 1148,
   "family": "Psilocybin",
   "power": 298185855
  },
  {
   "server": 1148,
   "family": "SnowyHideaway",
   "power": 284545871
  },
  {
   "server": 1148,
   "family": "Doji",
   "power": 262223276
  },
  {
   "server": 1148,
   "family": "rougarou",
   "power": 230047222
  },
  {
   "server": 1148,
   "family": "TheVoid",
   "power": 224497583
  },
  {
   "server": 1148,
   "family": "shroomington",
   "power": 211938231
  },
  {
   "server": 1149,
   "family": "SteelShrooms",
   "power": 1686346473
  },
  {
   "server": 1149,
   "family": "FungalFury",
   "power": 764379045
  },
  {
   "server": 1149,
   "family": "makeAwish",
   "power": 483990786
  },
  {
   "server": 1149,
   "family": "Roomies",
   "power": 418662999
  },
  {
   "server": 1149,
   "family": "Shroompies",
   "power": 387366343
  },
  {
   "server": 1149,
   "family": "TheWildZ",
   "power": 261257365
  },
  {
   "server": 1149,
   "family": "Chaos",
   "power": 182256545
  },
  {
   "server": 1149,
   "family": "BrasilLegend",
   "power": 116772647
  },
  {
   "server": 1149,
   "family": "Freelo",
   "power": 72967294
  },
  {
   "server": 1149,
   "family": "FaeFam",
   "power": 50069982
  },
  {
   "server": 1150,
   "family": "Yggdrasil",
   "power": 1790292696
  },
  {
   "server": 1150,
   "family": "Devastation",
   "power": 514088699
  },
  {
   "server": 1150,
   "family": "Creampuffs",
   "power": 338699278
  },
  {
   "server": 1150,
   "family": "Psychedelic",
   "power": 296795206
  },
  {
   "server": 1150,
   "family": "DemonShroom",
   "power": 287815571
  },
  {
   "server": 1150,
   "family": "out4blood",
   "power": 225038192
  },
  {
   "server": 1150,
   "family": "banana",
   "power": 224321085
  },
  {
   "server": 1150,
   "family": "Dreams",
   "power": 180855169
  },
  {
   "server": 1150,
   "family": "LickWindows",
   "power": 143485490
  },
  {
   "server": 1150,
   "family": "LostShrooms",
   "power": 96066647
  },
  {
   "server": 1151,
   "family": "IronGods",
   "power": 1678170693
  },
  {
   "server": 1151,
   "family": "RAMEN",
   "power": 545740096
  },
  {
   "server": 1151,
   "family": "Sybil",
   "power": 422327228
  },
  {
   "server": 1151,
   "family": "Placido",
   "power": 365187874
  },
  {
   "server": 1151,
   "family": "HtF",
   "power": 294642043
  },
  {
   "server": 1151,
   "family": "AoA",
   "power": 262375622
  },
  {
   "server": 1151,
   "family": "Hallownest",
   "power": 229193639
  },
  {
   "server": 1151,
   "family": "Kami",
   "power": 221240558
  },
  {
   "server": 1151,
   "family": "AlphaShroomz",
   "power": 215575161
  },
  {
   "server": 1151,
   "family": "Shroomish",
   "power": 213429126
  },
  {
   "server": 1152,
   "family": "Shroomageddon",
   "power": 1465248046
  },
  {
   "server": 1152,
   "family": "ᴅᴀʀᴋꜱᴛᴀʀ",
   "power": 1225557909
  },
  {
   "server": 1152,
   "family": "Valhalla",
   "power": 788386633
  },
  {
   "server": 1152,
   "family": "ShroomLords",
   "power": 559255114
  },
  {
   "server": 1152,
   "family": "WompWomp",
   "power": 284645577
  },
  {
   "server": 1152,
   "family": "Felonious",
   "power": 262656041
  },
  {
   "server": 1152,
   "family": "DootsHouse",
   "power": 235155200
  },
  {
   "server": 1152,
   "family": "HoshiBochi",
   "power": 198254471
  },
  {
   "server": 1152,
   "family": "Black",
   "power": 167472427
  },
  {
   "server": 1152,
   "family": "Nextgenz",
   "power": 104764133
  },
  {
   "server": 1153,
   "family": "MushLords",
   "power": 1256825315
  },
  {
   "server": 1153,
   "family": "LittleShrooms",
   "power": 1224888329
  },
  {
   "server": 1153,
   "family": "Crazycrackers",
   "power": 547935751
  },
  {
   "server": 1153,
   "family": "DoubleCheekdUp",
   "power": 256910680
  },
  {
   "server": 1153,
   "family": "RebelShrooms",
   "power": 233124387
  },
  {
   "server": 1153,
   "family": "toasts",
   "power": 226752473
  },
  {
   "server": 1153,
   "family": "Mushroomlings",
   "power": 201925333
  },
  {
   "server": 1153,
   "family": "Dragons",
   "power": 191921986
  },
  {
   "server": 1153,
   "family": "goofyshrooms",
   "power": 189487183
  },
  {
   "server": 1153,
   "family": "Fairytail",
   "power": 174269843
  },
  {
   "server": 1154,
   "family": "HiddenOutpost",
   "power": 1827379075
  },
  {
   "server": 1154,
   "family": "Immortals",
   "power": 780431012
  },
  {
   "server": 1154,
   "family": "SLAYFULBADDIES",
   "power": 403155959
  },
  {
   "server": 1154,
   "family": "WolfPack",
   "power": 383996510
  },
  {
   "server": 1154,
   "family": "nobodys",
   "power": 366717219
  },
  {
   "server": 1154,
   "family": "GrownFolk",
   "power": 351649102
  },
  {
   "server": 1154,
   "family": "Lucky",
   "power": 279113330
  },
  {
   "server": 1154,
   "family": "MushroomTrip",
   "power": 269248065
  },
  {
   "server": 1154,
   "family": "Deathcaps",
   "power": 154287773
  },
  {
   "server": 1154,
   "family": "NewOrder",
   "power": 140469220
  },
  {
   "server": 1155,
   "family": "Funguys",
   "power": 1595240421
  },
  {
   "server": 1155,
   "family": "Caratmakers",
   "power": 811531585
  },
  {
   "server": 1155,
   "family": "Shrooms",
   "power": 476145126
  },
  {
   "server": 1155,
   "family": "Salty",
   "power": 394996980
  },
  {
   "server": 1155,
   "family": "Noobers",
   "power": 393854272
  },
  {
   "server": 1155,
   "family": "Valhalla",
   "power": 287535939
  },
  {
   "server": 1155,
   "family": "TheValley",
   "power": 275783642
  },
  {
   "server": 1155,
   "family": "Spored",
   "power": 274456690
  },
  {
   "server": 1155,
   "family": "MushSquad",
   "power": 260746646
  },
  {
   "server": 1155,
   "family": "shroomvibes",
   "power": 230597069
  },
  {
   "server": 1156,
   "family": "shroomless",
   "power": 1777270825
  },
  {
   "server": 1156,
   "family": "Shrooms",
   "power": 574755431
  },
  {
   "server": 1156,
   "family": "MacDaddyShroom",
   "power": 279981463
  },
  {
   "server": 1156,
   "family": "501st_legion",
   "power": 265939979
  },
  {
   "server": 1156,
   "family": "MythicShrooms",
   "power": 256583088
  },
  {
   "server": 1156,
   "family": "psyllium",
   "power": 243439548
  },
  {
   "server": 1156,
   "family": "ShadowStalkers",
   "power": 228582918
  },
  {
   "server": 1156,
   "family": "Tempest",
   "power": 221567996
  },
  {
   "server": 1156,
   "family": "ShroomVille",
   "power": 165301226
  },
  {
   "server": 1156,
   "family": "Assassins",
   "power": 139204705
  },
  {
   "server": 1157,
   "family": "topFAMILY",
   "power": 1715551115
  },
  {
   "server": 1157,
   "family": "MushroomVilla",
   "power": 622114444
  },
  {
   "server": 1157,
   "family": "MushroomEmpire",
   "power": 436195902
  },
  {
   "server": 1157,
   "family": "Shroomish",
   "power": 388828969
  },
  {
   "server": 1157,
   "family": "Trippy",
   "power": 260938257
  },
  {
   "server": 1157,
   "family": "Dragon",
   "power": 224535356
  },
  {
   "server": 1157,
   "family": "FrungyLeague",
   "power": 196928954
  },
  {
   "server": 1157,
   "family": "Arcadie",
   "power": 182615634
  },
  {
   "server": 1157,
   "family": "ShroomieAgenda",
   "power": 120156931
  },
  {
   "server": 1157,
   "family": "Knoyx",
   "power": 113644727
  },
  {
   "server": 1158,
   "family": "𝟐𝐋𝐔𝐂𝐊𝐘",
   "power": 1858627372
  },
  {
   "server": 1158,
   "family": "Valhalla",
   "power": 642572652
  },
  {
   "server": 1158,
   "family": "2UNLucky",
   "power": 593277772
  },
  {
   "server": 1158,
   "family": "Shameless",
   "power": 455194878
  },
  {
   "server": 1158,
   "family": "Fungi",
   "power": 335569459
  },
  {
   "server": 1158,
   "family": "TheBlackRose",
   "power": 266051386
  },
  {
   "server": 1158,
   "family": "Power",
   "power": 242298242
  },
  {
   "server": 1158,
   "family": "RAT",
   "power": 172524179
  },
  {
   "server": 1158,
   "family": "DoomShrooms",
   "power": 160592369
  },
  {
   "server": 1158,
   "family": "FairyCircle",
   "power": 137947293
  },
  {
   "server": 1159,
   "family": "ᵂᵉ’ʳᵉᴼⁿˢʰʳᵒᵒᵐˢ",
   "power": 1406847796
  },
  {
   "server": 1159,
   "family": "Ronin",
   "power": 1046691861
  },
  {
   "server": 1159,
   "family": "Doomshrooms",
   "power": 424606680
  },
  {
   "server": 1159,
   "family": "G59",
   "power": 364765984
  },
  {
   "server": 1159,
   "family": "HitmansShrooms",
   "power": 312172411
  },
  {
   "server": 1159,
   "family": "FungiArmada",
   "power": 249993024
  },
  {
   "server": 1159,
   "family": "DragonBall",
   "power": 217633017
  },
  {
   "server": 1159,
   "family": "Fungi",
   "power": 188644186
  },
  {
   "server": 1159,
   "family": "DOOM_SHROOMS",
   "power": 165924129
  },
  {
   "server": 1159,
   "family": "TurtlePower",
   "power": 136533847
  },
  {
   "server": 1160,
   "family": "Shrooms",
   "power": 1661201503
  },
  {
   "server": 1160,
   "family": "StarbiesUnited",
   "power": 1329032878
  },
  {
   "server": 1160,
   "family": "SOS",
   "power": 508061746
  },
  {
   "server": 1160,
   "family": "CanadianPower",
   "power": 261630936
  },
  {
   "server": 1160,
   "family": "1000Sunny",
   "power": 211258644
  },
  {
   "server": 1160,
   "family": "DeathRow",
   "power": 208614561
  },
  {
   "server": 1160,
   "family": "Nicksfamily",
   "power": 194490216
  },
  {
   "server": 1160,
   "family": "PartyShrooms",
   "power": 192920642
  },
  {
   "server": 1160,
   "family": "mushroomsoup",
   "power": 140377967
  },
  {
   "server": 1160,
   "family": "MushroomGuys",
   "power": 122374987
  },
  {
   "server": 1161,
   "family": "Grind4Fun",
   "power": 1762282258
  },
  {
   "server": 1161,
   "family": "Creampufflover",
   "power": 1217586791
  },
  {
   "server": 1161,
   "family": "Solaria",
   "power": 519281063
  },
  {
   "server": 1161,
   "family": "HellsNation",
   "power": 268683036
  },
  {
   "server": 1161,
   "family": "7DeadlyShrooms",
   "power": 254019832
  },
  {
   "server": 1161,
   "family": "Akatsuki",
   "power": 253855349
  },
  {
   "server": 1161,
   "family": "Nest",
   "power": 249404981
  },
  {
   "server": 1161,
   "family": "Cake",
   "power": 162724650
  },
  {
   "server": 1161,
   "family": "Eden",
   "power": 131863215
  },
  {
   "server": 1161,
   "family": "DivineFungus",
   "power": 124282443
  },
  {
   "server": 1162,
   "family": "Night",
   "power": 1777507999
  },
  {
   "server": 1162,
   "family": "VALHALLA",
   "power": 777369091
  },
  {
   "server": 1162,
   "family": "Elite",
   "power": 569264212
  },
  {
   "server": 1162,
   "family": "Paytowin",
   "power": 313876663
  },
  {
   "server": 1162,
   "family": "OppenHeimer",
   "power": 313305082
  },
  {
   "server": 1162,
   "family": "420canada",
   "power": 225851869
  },
  {
   "server": 1162,
   "family": "mccorp",
   "power": 219164470
  },
  {
   "server": 1162,
   "family": "ToadsFamily",
   "power": 200988070
  },
  {
   "server": 1162,
   "family": "Nomads",
   "power": 188144108
  },
  {
   "server": 1162,
   "family": "mommieshummers",
   "power": 187263874
  },
  {
   "server": 1163,
   "family": "animado",
   "power": 1612362231
  },
  {
   "server": 1163,
   "family": "Shromies",
   "power": 773734672
  },
  {
   "server": 1163,
   "family": "FungalDecay",
   "power": 355154360
  },
  {
   "server": 1163,
   "family": "Sicilia",
   "power": 296294631
  },
  {
   "server": 1163,
   "family": "haters",
   "power": 291027633
  },
  {
   "server": 1163,
   "family": "Spore",
   "power": 280572597
  },
  {
   "server": 1163,
   "family": "MushroomQueen",
   "power": 244346688
  },
  {
   "server": 1163,
   "family": "WhiteLotus",
   "power": 216176499
  },
  {
   "server": 1163,
   "family": "ShroomCrimeFam",
   "power": 194052656
  },
  {
   "server": 1163,
   "family": "Pros",
   "power": 181560447
  },
  {
   "server": 1164,
   "family": "GoonShrooms",
   "power": 1679631603
  },
  {
   "server": 1164,
   "family": "Deathbringers",
   "power": 755504625
  },
  {
   "server": 1164,
   "family": "Strawhats",
   "power": 608128525
  },
  {
   "server": 1164,
   "family": "Vagabonds",
   "power": 418490206
  },
  {
   "server": 1164,
   "family": "FinalFantasy",
   "power": 330673800
  },
  {
   "server": 1164,
   "family": "Shroomers",
   "power": 229254525
  },
  {
   "server": 1164,
   "family": "itchyonions",
   "power": 207259408
  },
  {
   "server": 1164,
   "family": "TheOfficeFans",
   "power": 196480567
  },
  {
   "server": 1164,
   "family": "ShroomFest",
   "power": 179149348
  },
  {
   "server": 1164,
   "family": "Security",
   "power": 107166472
  },
  {
   "server": 1165,
   "family": "Synergy",
   "power": 1645854193
  },
  {
   "server": 1165,
   "family": "SHROOMTASTIC",
   "power": 1289201298
  },
  {
   "server": 1165,
   "family": "MFs",
   "power": 374578620
  },
  {
   "server": 1165,
   "family": "ShroomLine",
   "power": 280621236
  },
  {
   "server": 1165,
   "family": "WeAreGroot",
   "power": 267043837
  },
  {
   "server": 1165,
   "family": "ShroomVilla",
   "power": 239284732
  },
  {
   "server": 1165,
   "family": "Olympus",
   "power": 211390171
  },
  {
   "server": 1165,
   "family": "MooseClan",
   "power": 145600402
  },
  {
   "server": 1165,
   "family": "HOWLERS",
   "power": 121024211
  },
  {
   "server": 1165,
   "family": "lilyfamily",
   "power": 79583737
  },
  {
   "server": 1166,
   "family": "KAΩS",
   "power": 1830655934
  },
  {
   "server": 1166,
   "family": "GodlessHeathen",
   "power": 646840778
  },
  {
   "server": 1166,
   "family": "ChaoticInkCaps",
   "power": 496906023
  },
  {
   "server": 1166,
   "family": "TaterChips",
   "power": 399863326
  },
  {
   "server": 1166,
   "family": "Aurous",
   "power": 350663477
  },
  {
   "server": 1166,
   "family": "shroomarmy",
   "power": 284293339
  },
  {
   "server": 1166,
   "family": "StonerLife",
   "power": 231827164
  },
  {
   "server": 1166,
   "family": "KINGS",
   "power": 179304050
  },
  {
   "server": 1166,
   "family": "pack",
   "power": 159607594
  },
  {
   "server": 1166,
   "family": "WhoCares",
   "power": 110043342
  },
  {
   "server": 1167,
   "family": "Chaotic",
   "power": 1552303106
  },
  {
   "server": 1167,
   "family": "WARCRAFT",
   "power": 775778773
  },
  {
   "server": 1167,
   "family": "MilTownMshRoom",
   "power": 276473480
  },
  {
   "server": 1167,
   "family": "blazed",
   "power": 270737611
  },
  {
   "server": 1167,
   "family": "Crucified",
   "power": 261475434
  },
  {
   "server": 1167,
   "family": "TheAzylum",
   "power": 260845991
  },
  {
   "server": 1167,
   "family": "MushroomArmy",
   "power": 240997133
  },
  {
   "server": 1167,
   "family": "WolfPack",
   "power": 189515570
  },
  {
   "server": 1167,
   "family": "EverFlame",
   "power": 174688399
  },
  {
   "server": 1167,
   "family": "Infernos",
   "power": 135152875
  },
  {
   "server": 1168,
   "family": "BTS",
   "power": 1587729303
  },
  {
   "server": 1168,
   "family": "DeathCaps",
   "power": 1177538090
  },
  {
   "server": 1168,
   "family": "NoGameNoLife",
   "power": 1090299615
  },
  {
   "server": 1168,
   "family": "the_shrooms",
   "power": 256322348
  },
  {
   "server": 1168,
   "family": "HighOnShrooms",
   "power": 233900075
  },
  {
   "server": 1168,
   "family": "death",
   "power": 187358362
  },
  {
   "server": 1168,
   "family": "dragons",
   "power": 181840882
  },
  {
   "server": 1168,
   "family": "RamRaids",
   "power": 178056978
  },
  {
   "server": 1168,
   "family": "RainbowMafia",
   "power": 171888680
  },
  {
   "server": 1168,
   "family": "powerboys",
   "power": 168862676
  },
  {
   "server": 1169,
   "family": "Chefs一R一Us",
   "power": 1706813125
  },
  {
   "server": 1169,
   "family": "OnePiece",
   "power": 622480176
  },
  {
   "server": 1169,
   "family": "Lemon",
   "power": 401816676
  },
  {
   "server": 1169,
   "family": "theFam",
   "power": 343538306
  },
  {
   "server": 1169,
   "family": "Limitless",
   "power": 323755931
  },
  {
   "server": 1169,
   "family": "ShroomLife",
   "power": 300653541
  },
  {
   "server": 1169,
   "family": "Happy",
   "power": 277463528
  },
  {
   "server": 1169,
   "family": "Poison",
   "power": 220818075
  },
  {
   "server": 1169,
   "family": "Yakuza",
   "power": 216981809
  },
  {
   "server": 1169,
   "family": "ShroomCo",
   "power": 179353369
  },
  {
   "server": 1170,
   "family": "M3rkpocalypse",
   "power": 1561683217
  },
  {
   "server": 1170,
   "family": "Pinnacle",
   "power": 1099290442
  },
  {
   "server": 1170,
   "family": "Quantum7",
   "power": 480761821
  },
  {
   "server": 1170,
   "family": "Gym",
   "power": 319273963
  },
  {
   "server": 1170,
   "family": "MushromKingdom",
   "power": 253454622
  },
  {
   "server": 1170,
   "family": "Slytherin",
   "power": 244098118
  },
  {
   "server": 1170,
   "family": "TheToastPeople",
   "power": 228276121
  },
  {
   "server": 1170,
   "family": "Cake",
   "power": 210167350
  },
  {
   "server": 1170,
   "family": "Mushroomcult",
   "power": 173730745
  },
  {
   "server": 1170,
   "family": "Dragonball",
   "power": 130813011
  },
  {
   "server": 1171,
   "family": "FilthySpores",
   "power": 1430931709
  },
  {
   "server": 1171,
   "family": "RiseOfMushroom",
   "power": 707910384
  },
  {
   "server": 1171,
   "family": "LionsMainMen",
   "power": 342700603
  },
  {
   "server": 1171,
   "family": "MushroomArmy",
   "power": 323837546
  },
  {
   "server": 1171,
   "family": "LiverMushrooms",
   "power": 289333515
  },
  {
   "server": 1171,
   "family": "SporesńMores",
   "power": 276046993
  },
  {
   "server": 1171,
   "family": "Immortals",
   "power": 239581453
  },
  {
   "server": 1171,
   "family": "Aces",
   "power": 213147524
  },
  {
   "server": 1171,
   "family": "FungusFam",
   "power": 204380794
  },
  {
   "server": 1171,
   "family": "AbsolutChaos",
   "power": 187605435
  },
  {
   "server": 1172,
   "family": "Sporium",
   "power": 1735613719
  },
  {
   "server": 1172,
   "family": "Champignons",
   "power": 679623644
  },
  {
   "server": 1172,
   "family": "FungiFlock",
   "power": 490742047
  },
  {
   "server": 1172,
   "family": "DaJokesters",
   "power": 328965068
  },
  {
   "server": 1172,
   "family": "Mushalorians",
   "power": 276298361
  },
  {
   "server": 1172,
   "family": "BloodBorne",
   "power": 274124262
  },
  {
   "server": 1172,
   "family": "MushGrove",
   "power": 226952885
  },
  {
   "server": 1172,
   "family": "Frogpad",
   "power": 156231401
  },
  {
   "server": 1172,
   "family": "HaveFun",
   "power": 86198603
  },
  {
   "server": 1172,
   "family": "Maincharacters",
   "power": 71431447
  },
  {
   "server": 1173,
   "family": "SOULS",
   "power": 1618357783
  },
  {
   "server": 1173,
   "family": "TrippyShrooms",
   "power": 620691075
  },
  {
   "server": 1173,
   "family": "PSILOCYBES",
   "power": 516530365
  },
  {
   "server": 1173,
   "family": "FreedomFighter",
   "power": 341314935
  },
  {
   "server": 1173,
   "family": "TheCult",
   "power": 249191996
  },
  {
   "server": 1173,
   "family": "HabitatKings",
   "power": 246572004
  },
  {
   "server": 1173,
   "family": "Vikings",
   "power": 217778076
  },
  {
   "server": 1173,
   "family": "RedShrooms",
   "power": 195482546
  },
  {
   "server": 1173,
   "family": "DeathShrooms",
   "power": 160571664
  },
  {
   "server": 1173,
   "family": "Coolshrooms",
   "power": 146486045
  },
  {
   "server": 1174,
   "family": "Akatsuki",
   "power": 1526155070
  },
  {
   "server": 1174,
   "family": "DeathRats",
   "power": 1094505225
  },
  {
   "server": 1174,
   "family": "Shadowfox",
   "power": 397138077
  },
  {
   "server": 1174,
   "family": "MagicSHROOM420",
   "power": 323662203
  },
  {
   "server": 1174,
   "family": "TheHolyFamily",
   "power": 247391695
  },
  {
   "server": 1174,
   "family": "kushykush",
   "power": 178210073
  },
  {
   "server": 1174,
   "family": "creepitshroom",
   "power": 177061342
  },
  {
   "server": 1174,
   "family": "Doge",
   "power": 169666752
  },
  {
   "server": 1174,
   "family": "FOSTERS",
   "power": 116957204
  },
  {
   "server": 1174,
   "family": "Deathcaps",
   "power": 115164316
  },
  {
   "server": 1175,
   "family": "Dopamine",
   "power": 1491008210
  },
  {
   "server": 1175,
   "family": "BrunchTime",
   "power": 1341005518
  },
  {
   "server": 1175,
   "family": "SporeCorps",
   "power": 421403073
  },
  {
   "server": 1175,
   "family": "BigC_Empire",
   "power": 278458413
  },
  {
   "server": 1175,
   "family": "Loa",
   "power": 268912264
  },
  {
   "server": 1175,
   "family": "TheCoffeeDen",
   "power": 218255067
  },
  {
   "server": 1175,
   "family": "Hotpot",
   "power": 184529999
  },
  {
   "server": 1175,
   "family": "Nightshade",
   "power": 182302214
  },
  {
   "server": 1175,
   "family": "ChumBucket",
   "power": 165543762
  },
  {
   "server": 1175,
   "family": "TheAzylum",
   "power": 147961470
  },
  {
   "server": 1176,
   "family": "Awesomesauce",
   "power": 1768680497
  },
  {
   "server": 1176,
   "family": "CommieCorner",
   "power": 567529646
  },
  {
   "server": 1176,
   "family": "Raiders",
   "power": 567436837
  },
  {
   "server": 1176,
   "family": "HaHaCienda",
   "power": 241369814
  },
  {
   "server": 1176,
   "family": "Jingoku",
   "power": 231881817
  },
  {
   "server": 1176,
   "family": "ShroomGods",
   "power": 225041975
  },
  {
   "server": 1176,
   "family": "Shrooms",
   "power": 211064517
  },
  {
   "server": 1176,
   "family": "FungiFoxes",
   "power": 202016934
  },
  {
   "server": 1176,
   "family": "Theshrooms",
   "power": 201494294
  },
  {
   "server": 1176,
   "family": "TopShroomz",
   "power": 131684084
  },
  {
   "server": 1177,
   "family": "Boba🧋",
   "power": 1817961411
  },
  {
   "server": 1177,
   "family": "DaFunGuys",
   "power": 748704811
  },
  {
   "server": 1177,
   "family": "BrainGemPirate",
   "power": 378159646
  },
  {
   "server": 1177,
   "family": "Guardians",
   "power": 279939685
  },
  {
   "server": 1177,
   "family": "SporeExplorer",
   "power": 256289863
  },
  {
   "server": 1177,
   "family": "throwinghands",
   "power": 232215059
  },
  {
   "server": 1177,
   "family": "Hunters",
   "power": 216595796
  },
  {
   "server": 1177,
   "family": "Cheese",
   "power": 213614737
  },
  {
   "server": 1177,
   "family": "SuperEarth",
   "power": 206312221
  },
  {
   "server": 1177,
   "family": "StrawHats",
   "power": 141530387
  },
  {
   "server": 1178,
   "family": "MagicMushrooms",
   "power": 1769588844
  },
  {
   "server": 1178,
   "family": "Elysia",
   "power": 727488928
  },
  {
   "server": 1178,
   "family": "Murder_Inc",
   "power": 691636527
  },
  {
   "server": 1178,
   "family": "OpiumHQ",
   "power": 518741718
  },
  {
   "server": 1178,
   "family": "TossMyTrundle",
   "power": 493512249
  },
  {
   "server": 1178,
   "family": "SHROOMS",
   "power": 226028983
  },
  {
   "server": 1178,
   "family": "HitMyHyde",
   "power": 193043581
  },
  {
   "server": 1178,
   "family": "gdgbfcxh",
   "power": 177622525
  },
  {
   "server": 1178,
   "family": "TheShikigamis",
   "power": 144401898
  },
  {
   "server": 1178,
   "family": "victory",
   "power": 120532524
  },
  {
   "server": 1179,
   "family": "GoodVibeTribe",
   "power": 1371961515
  },
  {
   "server": 1179,
   "family": "Wonderland",
   "power": 812377347
  },
  {
   "server": 1179,
   "family": "Idleon",
   "power": 553213541
  },
  {
   "server": 1179,
   "family": "TheShroomGang",
   "power": 187431762
  },
  {
   "server": 1179,
   "family": "FungFuMushroom",
   "power": 161224860
  },
  {
   "server": 1179,
   "family": "StrawHats",
   "power": 146536341
  },
  {
   "server": 1179,
   "family": "VikingShrooms",
   "power": 131421494
  },
  {
   "server": 1179,
   "family": "MrX",
   "power": 123817580
  },
  {
   "server": 1179,
   "family": "Hooligynz",
   "power": 116084970
  },
  {
   "server": 1179,
   "family": "ShroomShed",
   "power": 60871830
  },
  {
   "server": 1180,
   "family": "Degens",
   "power": 1772884688
  },
  {
   "server": 1180,
   "family": "ShroomLife",
   "power": 874052135
  },
  {
   "server": 1180,
   "family": "Gremlins",
   "power": 373666540
  },
  {
   "server": 1180,
   "family": "DMT",
   "power": 301060280
  },
  {
   "server": 1180,
   "family": "Sunagakure",
   "power": 297127594
  },
  {
   "server": 1180,
   "family": "CreamDream",
   "power": 275105029
  },
  {
   "server": 1180,
   "family": "BangarangSquad",
   "power": 67022157
  },
  {
   "server": 1180,
   "family": "ShadowRage",
   "power": 60394868
  },
  {
   "server": 1180,
   "family": "THC",
   "power": 41099281
  },
  {
   "server": 1180,
   "family": "GirthQuakers",
   "power": 34066478
  },
  {
   "server": 1181,
   "family": "DragonLegacy",
   "power": 1690108855
  },
  {
   "server": 1181,
   "family": "ThePeeps",
   "power": 425982306
  },
  {
   "server": 1181,
   "family": "Nope",
   "power": 378529277
  },
  {
   "server": 1181,
   "family": "LogHorizon",
   "power": 295723679
  },
  {
   "server": 1181,
   "family": "Sunlight",
   "power": 281664247
  },
  {
   "server": 1181,
   "family": "FungusAmongus",
   "power": 264093078
  },
  {
   "server": 1181,
   "family": "Magical",
   "power": 236649102
  },
  {
   "server": 1181,
   "family": "InfinitiShroom",
   "power": 219014254
  },
  {
   "server": 1181,
   "family": "Popcorn",
   "power": 154757619
  },
  {
   "server": 1181,
   "family": "Akatsuki",
   "power": 141935381
  },
  {
   "server": 1182,
   "family": "Mortality",
   "power": 1708665062
  },
  {
   "server": 1182,
   "family": "Villainous",
   "power": 509034992
  },
  {
   "server": 1182,
   "family": "AbyssKnights",
   "power": 356696780
  },
  {
   "server": 1182,
   "family": "Ravenclaw",
   "power": 288615255
  },
  {
   "server": 1182,
   "family": "Shroomlords",
   "power": 257932469
  },
  {
   "server": 1182,
   "family": "Tsukuyomi",
   "power": 255510938
  },
  {
   "server": 1182,
   "family": "Midknights",
   "power": 190738351
  },
  {
   "server": 1182,
   "family": "winners",
   "power": 173925364
  },
  {
   "server": 1182,
   "family": "FungusAmongUs",
   "power": 160458585
  },
  {
   "server": 1182,
   "family": "BoomShrooms",
   "power": 149281027
  },
  {
   "server": 1183,
   "family": "Snackpack",
   "power": 1696585362
  },
  {
   "server": 1183,
   "family": "SinfulShrooms",
   "power": 643362359
  },
  {
   "server": 1183,
   "family": "Zfighters",
   "power": 556171687
  },
  {
   "server": 1183,
   "family": "RabidShrooms",
   "power": 303387952
  },
  {
   "server": 1183,
   "family": "Noobs",
   "power": 247335755
  },
  {
   "server": 1183,
   "family": "Exorcists",
   "power": 243245449
  },
  {
   "server": 1183,
   "family": "DaDan",
   "power": 168594022
  },
  {
   "server": 1183,
   "family": "drknghts",
   "power": 108013304
  },
  {
   "server": 1183,
   "family": "Ultra",
   "power": 67948678
  },
  {
   "server": 1183,
   "family": "Warlords",
   "power": 58313406
  },
  {
   "server": 1184,
   "family": "GoodestBois",
   "power": 1589306223
  },
  {
   "server": 1184,
   "family": "DogHouse",
   "power": 980541503
  },
  {
   "server": 1184,
   "family": "Keres",
   "power": 604340524
  },
  {
   "server": 1184,
   "family": "Atrium",
   "power": 364292975
  },
  {
   "server": 1184,
   "family": "mushroomlove",
   "power": 265786753
  },
  {
   "server": 1184,
   "family": "GOONZSquad",
   "power": 263866239
  },
  {
   "server": 1184,
   "family": "KamiKasy",
   "power": 238408471
  },
  {
   "server": 1184,
   "family": "Yggdrasil",
   "power": 214257516
  },
  {
   "server": 1184,
   "family": "EliteOutlaws",
   "power": 191208774
  },
  {
   "server": 1184,
   "family": "Shroomyshrooms",
   "power": 184555337
  },
  {
   "server": 1185,
   "family": "Unknown",
   "power": 1738071192
  },
  {
   "server": 1185,
   "family": "UnitedShrooms",
   "power": 460812606
  },
  {
   "server": 1185,
   "family": "Toads",
   "power": 379164227
  },
  {
   "server": 1185,
   "family": "BigHut",
   "power": 279111253
  },
  {
   "server": 1185,
   "family": "Anonymous",
   "power": 254348494
  },
  {
   "server": 1185,
   "family": "blazingkittens",
   "power": 244188516
  },
  {
   "server": 1185,
   "family": "FunGuys",
   "power": 243669893
  },
  {
   "server": 1185,
   "family": "HypnoticAdv",
   "power": 232932584
  },
  {
   "server": 1185,
   "family": "Reapers",
   "power": 215520564
  },
  {
   "server": 1185,
   "family": "Diabolos",
   "power": 111110020
  },
  {
   "server": 1186,
   "family": "OnlyShrooMs",
   "power": 1149577967
  },
  {
   "server": 1186,
   "family": "Legends",
   "power": 1090402544
  },
  {
   "server": 1186,
   "family": "Valhalla",
   "power": 542440986
  },
  {
   "server": 1186,
   "family": "GoodGame",
   "power": 274629704
  },
  {
   "server": 1186,
   "family": "Heartless",
   "power": 271079556
  },
  {
   "server": 1186,
   "family": "SCAVENGERS",
   "power": 211517912
  },
  {
   "server": 1186,
   "family": "ShroomLife",
   "power": 175573046
  },
  {
   "server": 1186,
   "family": "Shroomtastic",
   "power": 165274930
  },
  {
   "server": 1186,
   "family": "Mushy",
   "power": 147135258
  },
  {
   "server": 1186,
   "family": "EPIC",
   "power": 121421875
  },
  {
   "server": 1187,
   "family": "Fungi_Force",
   "power": 1400355132
  },
  {
   "server": 1187,
   "family": "Death_Caps",
   "power": 799697760
  },
  {
   "server": 1187,
   "family": "FungusAmongus",
   "power": 609365492
  },
  {
   "server": 1187,
   "family": "Hollow",
   "power": 269678788
  },
  {
   "server": 1187,
   "family": "SmokePit",
   "power": 253503038
  },
  {
   "server": 1187,
   "family": "AEB",
   "power": 242884722
  },
  {
   "server": 1187,
   "family": "MONKEYZZ",
   "power": 209053630
  },
  {
   "server": 1187,
   "family": "Vicinity",
   "power": 161164234
  },
  {
   "server": 1187,
   "family": "Bandits",
   "power": 152441130
  },
  {
   "server": 1187,
   "family": "KINGS",
   "power": 137748753
  },
  {
   "server": 1188,
   "family": "venom",
   "power": 1642560662
  },
  {
   "server": 1188,
   "family": "Antivenom",
   "power": 1185710646
  },
  {
   "server": 1188,
   "family": "Psilocybin",
   "power": 533686535
  },
  {
   "server": 1188,
   "family": "TheChosen",
   "power": 324187960
  },
  {
   "server": 1188,
   "family": "DaNewbs",
   "power": 267304899
  },
  {
   "server": 1188,
   "family": "MapleTree",
   "power": 258185293
  },
  {
   "server": 1188,
   "family": "TheYeagerist",
   "power": 253635698
  },
  {
   "server": 1188,
   "family": "PantsOptional",
   "power": 166090786
  },
  {
   "server": 1188,
   "family": "DoomShroom",
   "power": 136009611
  },
  {
   "server": 1188,
   "family": "yuzu_shroomy",
   "power": 116318526
  },
  {
   "server": 1189,
   "family": "Forsaken",
   "power": 1758354191
  },
  {
   "server": 1189,
   "family": "WolvesWrath",
   "power": 642506446
  },
  {
   "server": 1189,
   "family": "Maple",
   "power": 554027499
  },
  {
   "server": 1189,
   "family": "trippin",
   "power": 325214838
  },
  {
   "server": 1189,
   "family": "shroom_room",
   "power": 298640561
  },
  {
   "server": 1189,
   "family": "SmokeSumPurP",
   "power": 283813722
  },
  {
   "server": 1189,
   "family": "Doom_shrooms",
   "power": 260802736
  },
  {
   "server": 1189,
   "family": "MushieArmy",
   "power": 219849083
  },
  {
   "server": 1189,
   "family": "Bag_o_Shrooms",
   "power": 161990719
  },
  {
   "server": 1189,
   "family": "ThiccBoiis",
   "power": 152488055
  },
  {
   "server": 1190,
   "family": "NightCaps",
   "power": 1477769481
  },
  {
   "server": 1190,
   "family": "Eternium",
   "power": 1196486886
  },
  {
   "server": 1190,
   "family": "Rebirth",
   "power": 471158827
  },
  {
   "server": 1190,
   "family": "Hestia",
   "power": 268962904
  },
  {
   "server": 1190,
   "family": "Valhalla",
   "power": 247711494
  },
  {
   "server": 1190,
   "family": "LivingLegends",
   "power": 243850803
  },
  {
   "server": 1190,
   "family": "AnimeLovers",
   "power": 220658026
  },
  {
   "server": 1190,
   "family": "Nightmares",
   "power": 192795003
  },
  {
   "server": 1190,
   "family": "Rainbowshrooms",
   "power": 187520319
  },
  {
   "server": 1190,
   "family": "ShroomBoom",
   "power": 148719489
  },
  {
   "server": 1191,
   "family": "Aincrad",
   "power": 1595543284
  },
  {
   "server": 1191,
   "family": "ShroomLords",
   "power": 997028922
  },
  {
   "server": 1191,
   "family": "PumpkinPatch",
   "power": 982973967
  },
  {
   "server": 1191,
   "family": "Taiwan",
   "power": 333263472
  },
  {
   "server": 1191,
   "family": "FLOW",
   "power": 303164691
  },
  {
   "server": 1191,
   "family": "OtherWorld",
   "power": 259586834
  },
  {
   "server": 1191,
   "family": "HellsMinions",
   "power": 255794477
  },
  {
   "server": 1191,
   "family": "shroomz4life",
   "power": 250572144
  },
  {
   "server": 1191,
   "family": "HOLYSHROOMERS",
   "power": 231803227
  },
  {
   "server": 1191,
   "family": "Tempest",
   "power": 178954052
  },
  {
   "server": 1192,
   "family": "Manifest",
   "power": 1590237849
  },
  {
   "server": 1192,
   "family": "TheColony",
   "power": 1067638429
  },
  {
   "server": 1192,
   "family": "DragonsDen",
   "power": 490030591
  },
  {
   "server": 1192,
   "family": "Vault_33",
   "power": 270175242
  },
  {
   "server": 1192,
   "family": "Wildlands",
   "power": 254667294
  },
  {
   "server": 1192,
   "family": "ChipiChapaClan",
   "power": 234790398
  },
  {
   "server": 1192,
   "family": "MARVEL",
   "power": 215188588
  },
  {
   "server": 1192,
   "family": "TuneSquad",
   "power": 186911877
  },
  {
   "server": 1192,
   "family": "Bestfamever",
   "power": 184290241
  },
  {
   "server": 1192,
   "family": "LEGENDS",
   "power": 147209252
  },
  {
   "server": 1193,
   "family": "BadgerDen",
   "power": 1747771782
  },
  {
   "server": 1193,
   "family": "Enticer",
   "power": 856891689
  },
  {
   "server": 1193,
   "family": "WeOnShrooms",
   "power": 731231992
  },
  {
   "server": 1193,
   "family": "Anime4Ever",
   "power": 364292426
  },
  {
   "server": 1193,
   "family": "Enoki",
   "power": 289297842
  },
  {
   "server": 1193,
   "family": "mushyPho",
   "power": 279546157
  },
  {
   "server": 1193,
   "family": "funguys",
   "power": 226132259
  },
  {
   "server": 1193,
   "family": "PandaHut",
   "power": 177189791
  },
  {
   "server": 1193,
   "family": "ροωεr",
   "power": 166725508
  },
  {
   "server": 1193,
   "family": "Shroomies",
   "power": 157148898
  },
  {
   "server": 1194,
   "family": "OnlyLamps",
   "power": 1692974647
  },
  {
   "server": 1194,
   "family": "Niteshade",
   "power": 1340774399
  },
  {
   "server": 1194,
   "family": "SuperCats",
   "power": 663599149
  },
  {
   "server": 1194,
   "family": "funinja",
   "power": 298398319
  },
  {
   "server": 1194,
   "family": "Ouroboros",
   "power": 282756700
  },
  {
   "server": 1194,
   "family": "THE_PRO_PLAYER",
   "power": 256719501
  },
  {
   "server": 1194,
   "family": "SIGMAMALES",
   "power": 242420039
  },
  {
   "server": 1194,
   "family": "Shroomers",
   "power": 228197570
  },
  {
   "server": 1194,
   "family": "SillyGooseClub",
   "power": 210298691
  },
  {
   "server": 1194,
   "family": "TurtlesAreCool",
   "power": 208717992
  },
  {
   "server": 1195,
   "family": "Avengers",
   "power": 1567497704
  },
  {
   "server": 1195,
   "family": "LampRubbers",
   "power": 1255845779
  },
  {
   "server": 1195,
   "family": "Heroes_Academy",
   "power": 495695277
  },
  {
   "server": 1195,
   "family": "Freedom",
   "power": 227683518
  },
  {
   "server": 1195,
   "family": "TheGoingMerry",
   "power": 207140927
  },
  {
   "server": 1195,
   "family": "Shroomers",
   "power": 193827383
  },
  {
   "server": 1195,
   "family": "ANONYMOUS",
   "power": 173106411
  },
  {
   "server": 1195,
   "family": "Shrooms",
   "power": 164888800
  },
  {
   "server": 1195,
   "family": "Tempest",
   "power": 139584557
  },
  {
   "server": 1195,
   "family": "Soulbond",
   "power": 131080316
  },
  {
   "server": 1196,
   "family": "Slayers",
   "power": 1546139132
  },
  {
   "server": 1196,
   "family": "Psilocybin",
   "power": 856248720
  },
  {
   "server": 1196,
   "family": "UCHIHA",
   "power": 463253145
  },
  {
   "server": 1196,
   "family": "Shroomtown",
   "power": 386338919
  },
  {
   "server": 1196,
   "family": "NordicWolfs",
   "power": 299274853
  },
  {
   "server": 1196,
   "family": "PubKnights",
   "power": 278406110
  },
  {
   "server": 1196,
   "family": "AGENCY",
   "power": 246666334
  },
  {
   "server": 1196,
   "family": "chill",
   "power": 213938088
  },
  {
   "server": 1196,
   "family": "MushFitz",
   "power": 143909594
  },
  {
   "server": 1196,
   "family": "Shroomville",
   "power": 142325002
  },
  {
   "server": 1197,
   "family": "OutLawZ",
   "power": 1722819675
  },
  {
   "server": 1197,
   "family": "NewEra",
   "power": 776354288
  },
  {
   "server": 1197,
   "family": "TheMafia",
   "power": 559418136
  },
  {
   "server": 1197,
   "family": "DemiGodz",
   "power": 256461685
  },
  {
   "server": 1197,
   "family": "ShroomFellows",
   "power": 254196728
  },
  {
   "server": 1197,
   "family": "OneOfGus",
   "power": 242236884
  },
  {
   "server": 1197,
   "family": "MushyBoys",
   "power": 216238093
  },
  {
   "server": 1197,
   "family": "ShroomTown",
   "power": 213281980
  },
  {
   "server": 1197,
   "family": "ShroomCity",
   "power": 207606010
  },
  {
   "server": 1197,
   "family": "LethalMushroom",
   "power": 194673840
  },
  {
   "server": 1198,
   "family": "NightRaid",
   "power": 1582636532
  },
  {
   "server": 1198,
   "family": "Province",
   "power": 625257447
  },
  {
   "server": 1198,
   "family": "Spores",
   "power": 561402082
  },
  {
   "server": 1198,
   "family": "TheFunGuys",
   "power": 360195545
  },
  {
   "server": 1198,
   "family": "ShroomGarden",
   "power": 302794913
  },
  {
   "server": 1198,
   "family": "Kimchi",
   "power": 216290823
  },
  {
   "server": 1198,
   "family": "ETHEREAL",
   "power": 200463486
  },
  {
   "server": 1198,
   "family": "Ocean",
   "power": 198846412
  },
  {
   "server": 1198,
   "family": "Elmo",
   "power": 171926282
  },
  {
   "server": 1198,
   "family": "Adams",
   "power": 117610413
  },
  {
   "server": 1199,
   "family": "PhantomShrooms",
   "power": 1738405042
  },
  {
   "server": 1199,
   "family": "MagikShroom",
   "power": 1144190312
  },
  {
   "server": 1199,
   "family": "Fungi",
   "power": 357749027
  },
  {
   "server": 1199,
   "family": "Hoesandbros",
   "power": 235734972
  },
  {
   "server": 1199,
   "family": "PsychoShrooms",
   "power": 229309647
  },
  {
   "server": 1199,
   "family": "WerewolfFeast",
   "power": 220864098
  },
  {
   "server": 1199,
   "family": "DeathWatch",
   "power": 215803998
  },
  {
   "server": 1199,
   "family": "MushroomTips",
   "power": 171011618
  },
  {
   "server": 1199,
   "family": "warriors",
   "power": 164657365
  },
  {
   "server": 1199,
   "family": "TheDuck",
   "power": 149080487
  },
  {
   "server": 1200,
   "family": "ChildSupport",
   "power": 1368556401
  },
  {
   "server": 1200,
   "family": "SAO",
   "power": 728175890
  },
  {
   "server": 1200,
   "family": "SupremeShrooms",
   "power": 375136938
  },
  {
   "server": 1200,
   "family": "Loyalty",
   "power": 250926867
  },
  {
   "server": 1200,
   "family": "Knightsdark",
   "power": 233475328
  },
  {
   "server": 1200,
   "family": "Bloodlust",
   "power": 221941636
  },
  {
   "server": 1200,
   "family": "mushroom45gang",
   "power": 212193867
  },
  {
   "server": 1200,
   "family": "L0gH0rizon",
   "power": 196416144
  },
  {
   "server": 1200,
   "family": "Crusade",
   "power": 190129096
  },
  {
   "server": 1200,
   "family": "DEATH",
   "power": 128501953
  },
  {
   "server": 1201,
   "family": "Fortitude",
   "power": 1773878620
  },
  {
   "server": 1201,
   "family": "ARISE",
   "power": 637974075
  },
  {
   "server": 1201,
   "family": "Hallowseve",
   "power": 265468194
  },
  {
   "server": 1201,
   "family": "Grind4Fun",
   "power": 243543257
  },
  {
   "server": 1201,
   "family": "TheWorkshop",
   "power": 234191196
  },
  {
   "server": 1201,
   "family": "Utopia",
   "power": 198049198
  },
  {
   "server": 1201,
   "family": "LaughingCoffin",
   "power": 188538893
  },
  {
   "server": 1201,
   "family": "ShroomNchill",
   "power": 169114642
  },
  {
   "server": 1201,
   "family": "Shadow",
   "power": 155208884
  },
  {
   "server": 1201,
   "family": "Jhereg",
   "power": 149989219
  },
  {
   "server": 1202,
   "family": "Gatekeepers",
   "power": 1615469949
  },
  {
   "server": 1202,
   "family": "Shrooms",
   "power": 694728303
  },
  {
   "server": 1202,
   "family": "AINCRAD",
   "power": 439770842
  },
  {
   "server": 1202,
   "family": "Faded",
   "power": 286408114
  },
  {
   "server": 1202,
   "family": "OTV",
   "power": 240265386
  },
  {
   "server": 1202,
   "family": "Hell",
   "power": 230294888
  },
  {
   "server": 1202,
   "family": "Duck",
   "power": 200163166
  },
  {
   "server": 1202,
   "family": "Ragnarok",
   "power": 198737559
  },
  {
   "server": 1202,
   "family": "Shroomtrail",
   "power": 197030799
  },
  {
   "server": 1202,
   "family": "DPS",
   "power": 146180250
  },
  {
   "server": 1203,
   "family": "Ragnarok",
   "power": 1609153707
  },
  {
   "server": 1203,
   "family": "Immortalz",
   "power": 543517090
  },
  {
   "server": 1203,
   "family": "TheAsylum",
   "power": 536780203
  },
  {
   "server": 1203,
   "family": "LegionofKings",
   "power": 439970617
  },
  {
   "server": 1203,
   "family": "SoloLeveling",
   "power": 353419163
  },
  {
   "server": 1203,
   "family": "Addicted",
   "power": 340906429
  },
  {
   "server": 1203,
   "family": "MidWestFam",
   "power": 276468038
  },
  {
   "server": 1203,
   "family": "Shroomies",
   "power": 245436049
  },
  {
   "server": 1203,
   "family": "A4H",
   "power": 224781879
  },
  {
   "server": 1203,
   "family": "Unattended",
   "power": 138841986
  },
  {
   "server": 1204,
   "family": "ShroomCorps",
   "power": 1787994549
  },
  {
   "server": 1204,
   "family": "SisterCorps",
   "power": 748435827
  },
  {
   "server": 1204,
   "family": "goodvibes",
   "power": 390415093
  },
  {
   "server": 1204,
   "family": "Bromosexuals",
   "power": 289033659
  },
  {
   "server": 1204,
   "family": "Caramelo",
   "power": 273563162
  },
  {
   "server": 1204,
   "family": "DragonLegacy",
   "power": 218008787
  },
  {
   "server": 1204,
   "family": "LampLighters",
   "power": 192612445
  },
  {
   "server": 1204,
   "family": "Vikings",
   "power": 185448514
  },
  {
   "server": 1204,
   "family": "shroomville",
   "power": 163324134
  },
  {
   "server": 1204,
   "family": "Team_Boricua",
   "power": 123278533
  },
  {
   "server": 1205,
   "family": "Stonecutters",
   "power": 1499092255
  },
  {
   "server": 1205,
   "family": "MAUSOLEUM",
   "power": 649427890
  },
  {
   "server": 1205,
   "family": "DREADNOUGHT",
   "power": 387051517
  },
  {
   "server": 1205,
   "family": "MAGICMUSHROOMS",
   "power": 307728621
  },
  {
   "server": 1205,
   "family": "44Legions",
   "power": 270042478
  },
  {
   "server": 1205,
   "family": "DemonShroom",
   "power": 250129266
  },
  {
   "server": 1205,
   "family": "Dhickdawgs",
   "power": 244625520
  },
  {
   "server": 1205,
   "family": "D4M4G3D",
   "power": 240065392
  },
  {
   "server": 1205,
   "family": "litrina",
   "power": 227173112
  },
  {
   "server": 1205,
   "family": "FAMILY",
   "power": 179710391
  },
  {
   "server": 1206,
   "family": "HAVOC",
   "power": 1574860681
  },
  {
   "server": 1206,
   "family": "Voided",
   "power": 849248150
  },
  {
   "server": 1206,
   "family": "BarBearians",
   "power": 624466679
  },
  {
   "server": 1206,
   "family": "Kaizen",
   "power": 388660405
  },
  {
   "server": 1206,
   "family": "Magic",
   "power": 236610236
  },
  {
   "server": 1206,
   "family": "Funguys",
   "power": 230118750
  },
  {
   "server": 1206,
   "family": "SHROOMIES",
   "power": 220799180
  },
  {
   "server": 1206,
   "family": "Draconis",
   "power": 140192213
  },
  {
   "server": 1206,
   "family": "Shroomers",
   "power": 139778688
  },
  {
   "server": 1206,
   "family": "BigShroomers",
   "power": 129929098
  },
  {
   "server": 1207,
   "family": "MushroomGang",
   "power": 1570540739
  },
  {
   "server": 1207,
   "family": "LegionofShroom",
   "power": 1133310979
  },
  {
   "server": 1207,
   "family": "ShroomBuns",
   "power": 404611512
  },
  {
   "server": 1207,
   "family": "KrokaVarna",
   "power": 265084779
  },
  {
   "server": 1207,
   "family": "AlphaMush",
   "power": 203438555
  },
  {
   "server": 1207,
   "family": "shroompot",
   "power": 183413128
  },
  {
   "server": 1207,
   "family": "Beetlejuice",
   "power": 176005111
  },
  {
   "server": 1207,
   "family": "OrphanWarriors",
   "power": 174786414
  },
  {
   "server": 1207,
   "family": "Tekkadan",
   "power": 91599360
  },
  {
   "server": 1207,
   "family": "Thunder",
   "power": 83957700
  },
  {
   "server": 1208,
   "family": "Legends",
   "power": 1691888904
  },
  {
   "server": 1208,
   "family": "Myths",
   "power": 793450159
  },
  {
   "server": 1208,
   "family": "ŤĥêŔéãpèř§",
   "power": 436652788
  },
  {
   "server": 1208,
   "family": "Spores",
   "power": 203448689
  },
  {
   "server": 1208,
   "family": "SylvanFam",
   "power": 181297466
  },
  {
   "server": 1208,
   "family": "Olympus",
   "power": 173693044
  },
  {
   "server": 1208,
   "family": "Sumeria",
   "power": 169750310
  },
  {
   "server": 1208,
   "family": "Australia",
   "power": 151510957
  },
  {
   "server": 1208,
   "family": "ShroomTown",
   "power": 107359918
  },
  {
   "server": 1208,
   "family": "regionals",
   "power": 97513846
  },
  {
   "server": 1209,
   "family": "Spores",
   "power": 1685349379
  },
  {
   "server": 1209,
   "family": "Light",
   "power": 600391048
  },
  {
   "server": 1209,
   "family": "Legion135",
   "power": 363014718
  },
  {
   "server": 1209,
   "family": "Kings",
   "power": 268654267
  },
  {
   "server": 1209,
   "family": "Miscreants",
   "power": 246013163
  },
  {
   "server": 1209,
   "family": "popi",
   "power": 211944335
  },
  {
   "server": 1209,
   "family": "Judgement",
   "power": 200352175
  },
  {
   "server": 1209,
   "family": "Shroomyarmy",
   "power": 164549749
  },
  {
   "server": 1209,
   "family": "Hustlers",
   "power": 148733328
  },
  {
   "server": 1209,
   "family": "ShroomsOfDoom",
   "power": 82083820
  },
  {
   "server": 1210,
   "family": "ValhallaCalls",
   "power": 1526741078
  },
  {
   "server": 1210,
   "family": "Fate",
   "power": 880749886
  },
  {
   "server": 1210,
   "family": "OhShiitake",
   "power": 451903058
  },
  {
   "server": 1210,
   "family": "Souls",
   "power": 276000986
  },
  {
   "server": 1210,
   "family": "shroomyTown",
   "power": 264082322
  },
  {
   "server": 1210,
   "family": "_N_I_N_J_A_",
   "power": 245680116
  },
  {
   "server": 1210,
   "family": "RatPack",
   "power": 224028383
  },
  {
   "server": 1210,
   "family": "OceanGang",
   "power": 190639533
  },
  {
   "server": 1210,
   "family": "WARDRAGON",
   "power": 169413222
  },
  {
   "server": 1210,
   "family": "Oblivion",
   "power": 168363171
  },
  {
   "server": 1211,
   "family": "Gods",
   "power": 1583475314
  },
  {
   "server": 1211,
   "family": "Dragonslayer75",
   "power": 592086154
  },
  {
   "server": 1211,
   "family": "Goobers",
   "power": 434874227
  },
  {
   "server": 1211,
   "family": "Celestial",
   "power": 384727949
  },
  {
   "server": 1211,
   "family": "BombSquad",
   "power": 361799134
  },
  {
   "server": 1211,
   "family": "Legends",
   "power": 312452648
  },
  {
   "server": 1211,
   "family": "ShroomKingdom",
   "power": 271186273
  },
  {
   "server": 1211,
   "family": "Ment2Bee",
   "power": 224371103
  },
  {
   "server": 1211,
   "family": "ShroomZone",
   "power": 206388265
  },
  {
   "server": 1211,
   "family": "KushKillerz",
   "power": 180492711
  },
  {
   "server": 1212,
   "family": "ShroomVille",
   "power": 1439584893
  },
  {
   "server": 1212,
   "family": "Riot",
   "power": 1213776701
  },
  {
   "server": 1212,
   "family": "ThePalFrends",
   "power": 327227144
  },
  {
   "server": 1212,
   "family": "SporeCore",
   "power": 241412984
  },
  {
   "server": 1212,
   "family": "shroomsofmagic",
   "power": 226042109
  },
  {
   "server": 1212,
   "family": "EternalKingz",
   "power": 224275083
  },
  {
   "server": 1212,
   "family": "cainshroom",
   "power": 184394970
  },
  {
   "server": 1212,
   "family": "ChronosInc",
   "power": 148496182
  },
  {
   "server": 1212,
   "family": "BaconGods",
   "power": 140735720
  },
  {
   "server": 1212,
   "family": "MagicAcademy",
   "power": 84654311
  },
  {
   "server": 1213,
   "family": "Legacy",
   "power": 1743612107
  },
  {
   "server": 1213,
   "family": "AfterDark",
   "power": 737772644
  },
  {
   "server": 1213,
   "family": "Hentai",
   "power": 551103139
  },
  {
   "server": 1213,
   "family": "DoomShrooms",
   "power": 373595821
  },
  {
   "server": 1213,
   "family": "Lol",
   "power": 294724744
  },
  {
   "server": 1213,
   "family": "Funguys",
   "power": 218567942
  },
  {
   "server": 1213,
   "family": "StrawHatPir8s",
   "power": 203854276
  },
  {
   "server": 1213,
   "family": "NomNomNoms",
   "power": 191277970
  },
  {
   "server": 1213,
   "family": "4PF",
   "power": 167395586
  },
  {
   "server": 1213,
   "family": "ShroomShack",
   "power": 161362953
  },
  {
   "server": 1214,
   "family": "Royalty",
   "power": 1894021710
  },
  {
   "server": 1214,
   "family": "RainFall",
   "power": 1004933947
  },
  {
   "server": 1214,
   "family": "GamerShrub",
   "power": 546774569
  },
  {
   "server": 1214,
   "family": "Fungi",
   "power": 250158416
  },
  {
   "server": 1214,
   "family": "Olympus",
   "power": 240849448
  },
  {
   "server": 1214,
   "family": "Inferno",
   "power": 240233743
  },
  {
   "server": 1214,
   "family": "Asura",
   "power": 237968976
  },
  {
   "server": 1214,
   "family": "Dripkings",
   "power": 214794102
  },
  {
   "server": 1214,
   "family": "SHADOWKNIGHTS",
   "power": 189927619
  },
  {
   "server": 1214,
   "family": "NotoriousFam",
   "power": 185276644
  },
  {
   "server": 1215,
   "family": "Jabberwocky’s",
   "power": 1570508061
  },
  {
   "server": 1215,
   "family": "StrikeForce",
   "power": 469729461
  },
  {
   "server": 1215,
   "family": "CelestialCity",
   "power": 364618694
  },
  {
   "server": 1215,
   "family": "SleepyShrooms",
   "power": 277974088
  },
  {
   "server": 1215,
   "family": "Mushimush",
   "power": 229471469
  },
  {
   "server": 1215,
   "family": "WeebNation",
   "power": 204995968
  },
  {
   "server": 1215,
   "family": "Pandaville",
   "power": 180829680
  },
  {
   "server": 1215,
   "family": "Toadstoolies",
   "power": 157389258
  },
  {
   "server": 1215,
   "family": "HuntersHub",
   "power": 155437560
  },
  {
   "server": 1215,
   "family": "ShroomKingdom",
   "power": 126401154
  },
  {
   "server": 1216,
   "family": "NewMycelium",
   "power": 1477043454
  },
  {
   "server": 1216,
   "family": "DeadlyCaps",
   "power": 457203817
  },
  {
   "server": 1216,
   "family": "MagicShroom",
   "power": 434000337
  },
  {
   "server": 1216,
   "family": "Crusaders",
   "power": 306107772
  },
  {
   "server": 1216,
   "family": "SporeForce",
   "power": 282024162
  },
  {
   "server": 1216,
   "family": "Spores",
   "power": 256918087
  },
  {
   "server": 1216,
   "family": "timelords",
   "power": 207839777
  },
  {
   "server": 1216,
   "family": "CanadianCartel",
   "power": 173084448
  },
  {
   "server": 1216,
   "family": "Yggdrasil",
   "power": 110268811
  },
  {
   "server": 1216,
   "family": "DemonSlayer",
   "power": 80282078
  },
  {
   "server": 1217,
   "family": "Elevated",
   "power": 1302247465
  },
  {
   "server": 1217,
   "family": "MellowMushroom",
   "power": 1250863360
  },
  {
   "server": 1217,
   "family": "SithLords",
   "power": 343410972
  },
  {
   "server": 1217,
   "family": "Zero",
   "power": 256151702
  },
  {
   "server": 1217,
   "family": "Reapershrooms",
   "power": 255733848
  },
  {
   "server": 1217,
   "family": "DoomShrooms",
   "power": 255328420
  },
  {
   "server": 1217,
   "family": "GodDamn",
   "power": 207761195
  },
  {
   "server": 1217,
   "family": "psychedelicXx",
   "power": 204384205
  },
  {
   "server": 1217,
   "family": "WeAvoidClan",
   "power": 192729882
  },
  {
   "server": 1217,
   "family": "WitchBrew",
   "power": 177720087
  },
  {
   "server": 1218,
   "family": "KingsOfShroom",
   "power": 1358127113
  },
  {
   "server": 1218,
   "family": "LokisCircus",
   "power": 556935102
  },
  {
   "server": 1218,
   "family": "itachiselite",
   "power": 325075484
  },
  {
   "server": 1218,
   "family": "AlmightyMush",
   "power": 234542122
  },
  {
   "server": 1218,
   "family": "shoominghard",
   "power": 232736169
  },
  {
   "server": 1218,
   "family": "Striders",
   "power": 218194934
  },
  {
   "server": 1218,
   "family": "PORTOBELLOS",
   "power": 213009008
  },
  {
   "server": 1218,
   "family": "ShroomKingdom",
   "power": 213001500
  },
  {
   "server": 1218,
   "family": "Aincrad",
   "power": 183859704
  },
  {
   "server": 1218,
   "family": "TheDeathCaps",
   "power": 180512561
  },
  {
   "server": 1219,
   "family": "Osiris",
   "power": 1690604326
  },
  {
   "server": 1219,
   "family": "Mycelia",
   "power": 912683182
  },
  {
   "server": 1219,
   "family": "Royalty",
   "power": 310090213
  },
  {
   "server": 1219,
   "family": "ChaosRun",
   "power": 295916317
  },
  {
   "server": 1219,
   "family": "GIRL_DINNER",
   "power": 279433451
  },
  {
   "server": 1219,
   "family": "funguys",
   "power": 210885515
  },
  {
   "server": 1219,
   "family": "Mafia",
   "power": 205912998
  },
  {
   "server": 1219,
   "family": "Shrooms",
   "power": 169744167
  },
  {
   "server": 1219,
   "family": "Genghis",
   "power": 142478451
  },
  {
   "server": 1219,
   "family": "MamasMob",
   "power": 136916183
  },
  {
   "server": 1220,
   "family": "ShadowGarden",
   "power": 1710968626
  },
  {
   "server": 1220,
   "family": "FanClub",
   "power": 689792222
  },
  {
   "server": 1220,
   "family": "ShroomyFun",
   "power": 489090607
  },
  {
   "server": 1220,
   "family": "TacoCity",
   "power": 348469035
  },
  {
   "server": 1220,
   "family": "MilfHunters",
   "power": 329256395
  },
  {
   "server": 1220,
   "family": "DragonShrooms",
   "power": 227842403
  },
  {
   "server": 1220,
   "family": "Dragons",
   "power": 209625828
  },
  {
   "server": 1220,
   "family": "Shroomnators",
   "power": 204194439
  },
  {
   "server": 1220,
   "family": "MagicShroomys",
   "power": 199014477
  },
  {
   "server": 1220,
   "family": "Squiggles",
   "power": 161016102
  },
  {
   "server": 1221,
   "family": "Ascendant",
   "power": 1550017176
  },
  {
   "server": 1221,
   "family": "Peacekeepers",
   "power": 557238145
  },
  {
   "server": 1221,
   "family": "LomChampions",
   "power": 353379748
  },
  {
   "server": 1221,
   "family": "Strawhats",
   "power": 283899506
  },
  {
   "server": 1221,
   "family": "MagicMushrooms",
   "power": 230016862
  },
  {
   "server": 1221,
   "family": "ShroomDominion",
   "power": 226596641
  },
  {
   "server": 1221,
   "family": "HellsAngels",
   "power": 206344074
  },
  {
   "server": 1221,
   "family": "Deathcaps",
   "power": 190459622
  },
  {
   "server": 1221,
   "family": "Maple",
   "power": 174245835
  },
  {
   "server": 1221,
   "family": "GoonSquad",
   "power": 169735072
  },
  {
   "server": 1222,
   "family": "JoinOrDie",
   "power": 1595364154
  },
  {
   "server": 1222,
   "family": "MellowMushroom",
   "power": 775803335
  },
  {
   "server": 1222,
   "family": "EatersOfShroom",
   "power": 363483859
  },
  {
   "server": 1222,
   "family": "WeedWeebs",
   "power": 287460922
  },
  {
   "server": 1222,
   "family": "MushroomSavers",
   "power": 279516421
  },
  {
   "server": 1222,
   "family": "DaBois",
   "power": 274485939
  },
  {
   "server": 1222,
   "family": "Relentless",
   "power": 261197877
  },
  {
   "server": 1222,
   "family": "ShroomStompers",
   "power": 252143680
  },
  {
   "server": 1222,
   "family": "mushROOMIES",
   "power": 233863435
  },
  {
   "server": 1222,
   "family": "mushroomheros",
   "power": 164310554
  },
  {
   "server": 1223,
   "family": "Starlight",
   "power": 1417640553
  },
  {
   "server": 1223,
   "family": "Tyceno",
   "power": 900871441
  },
  {
   "server": 1223,
   "family": "DarkSaintz",
   "power": 853008185
  },
  {
   "server": 1223,
   "family": "Depresso",
   "power": 330854163
  },
  {
   "server": 1223,
   "family": "Darkness",
   "power": 328277005
  },
  {
   "server": 1223,
   "family": "Shadows",
   "power": 247093069
  },
  {
   "server": 1223,
   "family": "genshin",
   "power": 211395990
  },
  {
   "server": 1223,
   "family": "SakuraTree",
   "power": 203443156
  },
  {
   "server": 1223,
   "family": "Roundtable",
   "power": 202836289
  },
  {
   "server": 1223,
   "family": "BrownBoyZ",
   "power": 161173332
  },
  {
   "server": 1224,
   "family": "Deathrow",
   "power": 1308983511
  },
  {
   "server": 1224,
   "family": "ShroomLegion",
   "power": 936174547
  },
  {
   "server": 1224,
   "family": "Arson",
   "power": 537667430
  },
  {
   "server": 1224,
   "family": "RisingSpores",
   "power": 295990779
  },
  {
   "server": 1224,
   "family": "oldSpores",
   "power": 273886013
  },
  {
   "server": 1224,
   "family": "DevilMafia",
   "power": 241539058
  },
  {
   "server": 1224,
   "family": "Graveyard",
   "power": 175356270
  },
  {
   "server": 1224,
   "family": "Monkeys",
   "power": 166330074
  },
  {
   "server": 1224,
   "family": "CornDogs",
   "power": 97606903
  },
  {
   "server": 1224,
   "family": "Silvermoon",
   "power": 75238302
  },
  {
   "server": 1225,
   "family": "Lunaire",
   "power": 1627621933
  },
  {
   "server": 1225,
   "family": "SAC",
   "power": 350166150
  },
  {
   "server": 1225,
   "family": "Tempest",
   "power": 349807353
  },
  {
   "server": 1225,
   "family": "MushPit",
   "power": 226689289
  },
  {
   "server": 1225,
   "family": "Legacy",
   "power": 212640735
  },
  {
   "server": 1225,
   "family": "fullmetal",
   "power": 173034135
  },
  {
   "server": 1225,
   "family": "Wicked",
   "power": 157360600
  },
  {
   "server": 1225,
   "family": "Immortals710",
   "power": 157219553
  },
  {
   "server": 1225,
   "family": "Misfits",
   "power": 131115423
  },
  {
   "server": 1225,
   "family": "DabSquad",
   "power": 47545561
  },
  {
   "server": 1226,
   "family": "Angels",
   "power": 1340961195
  },
  {
   "server": 1226,
   "family": "Demons",
   "power": 852963735
  },
  {
   "server": 1226,
   "family": "Sensation",
   "power": 462520841
  },
  {
   "server": 1226,
   "family": "420Shroomies",
   "power": 359083901
  },
  {
   "server": 1226,
   "family": "Carnal",
   "power": 285626851
  },
  {
   "server": 1226,
   "family": "FreeForAll",
   "power": 262623267
  },
  {
   "server": 1226,
   "family": "Canada",
   "power": 244087905
  },
  {
   "server": 1226,
   "family": "Mushers",
   "power": 241732973
  },
  {
   "server": 1226,
   "family": "Vikings",
   "power": 153503381
  },
  {
   "server": 1226,
   "family": "TopGlobal",
   "power": 151588735
  },
  {
   "server": 1227,
   "family": "BC4Honey",
   "power": 1532697093
  },
  {
   "server": 1227,
   "family": "ParkinsonsPals",
   "power": 457185396
  },
  {
   "server": 1227,
   "family": "Misfits",
   "power": 414320495
  },
  {
   "server": 1227,
   "family": "HighLife",
   "power": 395172170
  },
  {
   "server": 1227,
   "family": "DREADNOUGHT",
   "power": 317904513
  },
  {
   "server": 1227,
   "family": "LoneWolves",
   "power": 287896556
  },
  {
   "server": 1227,
   "family": "Heaven",
   "power": 270011322
  },
  {
   "server": 1227,
   "family": "Brawlers",
   "power": 212564334
  },
  {
   "server": 1227,
   "family": "StrayDogs",
   "power": 186056292
  },
  {
   "server": 1227,
   "family": "hi",
   "power": 106364897
  },
  {
   "server": 1228,
   "family": "KoopaTropaS",
   "power": 1562313871
  },
  {
   "server": 1228,
   "family": "X",
   "power": 971616183
  },
  {
   "server": 1228,
   "family": "Kaizen",
   "power": 309802370
  },
  {
   "server": 1228,
   "family": "TheHiddenLeaf",
   "power": 294560477
  },
  {
   "server": 1228,
   "family": "Berserkers",
   "power": 284748621
  },
  {
   "server": 1228,
   "family": "legends",
   "power": 252920682
  },
  {
   "server": 1228,
   "family": "Valhalla",
   "power": 239538384
  },
  {
   "server": 1228,
   "family": "FamilyTides",
   "power": 171410124
  },
  {
   "server": 1228,
   "family": "DeathAcademy",
   "power": 162542026
  },
  {
   "server": 1228,
   "family": "Cantharellus",
   "power": 130808922
  },
  {
   "server": 1229,
   "family": "TOP",
   "power": 1567853515
  },
  {
   "server": 1229,
   "family": "MushroomKNGDM",
   "power": 989934253
  },
  {
   "server": 1229,
   "family": "godspeed",
   "power": 277372042
  },
  {
   "server": 1229,
   "family": "MeowShroom",
   "power": 216783825
  },
  {
   "server": 1229,
   "family": "Shroomvile",
   "power": 216188899
  },
  {
   "server": 1229,
   "family": "Tokers",
   "power": 204784327
  },
  {
   "server": 1229,
   "family": "BrokeBois",
   "power": 182064160
  },
  {
   "server": 1229,
   "family": "Fam",
   "power": 179113874
  },
  {
   "server": 1229,
   "family": "TheClamFam",
   "power": 165310266
  },
  {
   "server": 1229,
   "family": "GG",
   "power": 162365365
  },
  {
   "server": 1230,
   "family": "Timekillers",
   "power": 1366762641
  },
  {
   "server": 1230,
   "family": "MansonFamily",
   "power": 697101989
  },
  {
   "server": 1230,
   "family": "Umbreonican",
   "power": 426687302
  },
  {
   "server": 1230,
   "family": "Slayshrooms",
   "power": 256528928
  },
  {
   "server": 1230,
   "family": "Yeska",
   "power": 253696690
  },
  {
   "server": 1230,
   "family": "Wolf_Cry",
   "power": 230215491
  },
  {
   "server": 1230,
   "family": "akatsuki",
   "power": 171447066
  },
  {
   "server": 1230,
   "family": "Goonmaxxing",
   "power": 143077346
  },
  {
   "server": 1230,
   "family": "VALHALLA",
   "power": 122149735
  },
  {
   "server": 1230,
   "family": "ShroomAssassin",
   "power": 56259266
  },
  {
   "server": 1231,
   "family": "ChosenFew",
   "power": 1389747814
  },
  {
   "server": 1231,
   "family": "OmegaProject",
   "power": 915003972
  },
  {
   "server": 1231,
   "family": "StrawHats",
   "power": 350854416
  },
  {
   "server": 1231,
   "family": "Art_of_War",
   "power": 276637087
  },
  {
   "server": 1231,
   "family": "home",
   "power": 236770206
  },
  {
   "server": 1231,
   "family": "Mushies",
   "power": 230402812
  },
  {
   "server": 1231,
   "family": "Munchkins",
   "power": 209607982
  },
  {
   "server": 1231,
   "family": "psychMushies",
   "power": 208784174
  },
  {
   "server": 1231,
   "family": "Grind4Fun",
   "power": 196587282
  },
  {
   "server": 1231,
   "family": "fungusamongus",
   "power": 183494786
  },
  {
   "server": 1232,
   "family": "KillerWhales",
   "power": 1408385364
  },
  {
   "server": 1232,
   "family": "Malevolence",
   "power": 1230742707
  },
  {
   "server": 1232,
   "family": "MegaShrooms",
   "power": 314794075
  },
  {
   "server": 1232,
   "family": "Chaos",
   "power": 269170259
  },
  {
   "server": 1232,
   "family": "AbyssalShrooms",
   "power": 259310093
  },
  {
   "server": 1232,
   "family": "Demon",
   "power": 244814451
  },
  {
   "server": 1232,
   "family": "BingBong",
   "power": 229807617
  },
  {
   "server": 1232,
   "family": "Panda",
   "power": 220519270
  },
  {
   "server": 1232,
   "family": "Destruction",
   "power": 219278649
  },
  {
   "server": 1232,
   "family": "GodOfWar",
   "power": 116601075
  },
  {
   "server": 1233,
   "family": "Shroomland",
   "power": 1255384684
  },
  {
   "server": 1233,
   "family": "Themisfits",
   "power": 1170438101
  },
  {
   "server": 1233,
   "family": "YOLO",
   "power": 391313443
  },
  {
   "server": 1233,
   "family": "SlightlyActive",
   "power": 231493696
  },
  {
   "server": 1233,
   "family": "NoGs",
   "power": 213511547
  },
  {
   "server": 1233,
   "family": "OnlyTrueShroom",
   "power": 207752132
  },
  {
   "server": 1233,
   "family": "Ragnarok",
   "power": 185673063
  },
  {
   "server": 1233,
   "family": "TheWarriors",
   "power": 172631283
  },
  {
   "server": 1233,
   "family": "DEMON_LORDS",
   "power": 164420730
  },
  {
   "server": 1233,
   "family": "MushroomKing",
   "power": 161653464
  },
  {
   "server": 1234,
   "family": "OnlyLamps",
   "power": 1486888321
  },
  {
   "server": 1234,
   "family": "FreshStart",
   "power": 452960926
  },
  {
   "server": 1234,
   "family": "TheEmpire",
   "power": 322680141
  },
  {
   "server": 1234,
   "family": "Outsiderz",
   "power": 264541002
  },
  {
   "server": 1234,
   "family": "Family",
   "power": 238003512
  },
  {
   "server": 1234,
   "family": "RAGNAROK",
   "power": 181588738
  },
  {
   "server": 1234,
   "family": "Juggalofamily",
   "power": 178900064
  },
  {
   "server": 1234,
   "family": "HeroGuild",
   "power": 177468526
  },
  {
   "server": 1234,
   "family": "Fungicide",
   "power": 170895349
  },
  {
   "server": 1234,
   "family": "Toadstool",
   "power": 153991472
  },
  {
   "server": 1235,
   "family": "DeathGuard",
   "power": 1633935737
  },
  {
   "server": 1235,
   "family": "Horizon",
   "power": 461671938
  },
  {
   "server": 1235,
   "family": "MagicMushrooms",
   "power": 445796305
  },
  {
   "server": 1235,
   "family": "Unsociable",
   "power": 256548816
  },
  {
   "server": 1235,
   "family": "BOREDGANG",
   "power": 176329838
  },
  {
   "server": 1235,
   "family": "Akatsuki",
   "power": 173886447
  },
  {
   "server": 1235,
   "family": "ShroomGods",
   "power": 172711618
  },
  {
   "server": 1235,
   "family": "Lycans",
   "power": 163820621
  },
  {
   "server": 1235,
   "family": "Le",
   "power": 138144832
  },
  {
   "server": 1235,
   "family": "Meow",
   "power": 108764443
  },
  {
   "server": 1236,
   "family": "AINCRAD",
   "power": 1410314422
  },
  {
   "server": 1236,
   "family": "HiddenLeaf",
   "power": 839646896
  },
  {
   "server": 1236,
   "family": "NFK",
   "power": 314823435
  },
  {
   "server": 1236,
   "family": "TheDeathCaps",
   "power": 253626501
  },
  {
   "server": 1236,
   "family": "GoWitThaFlow",
   "power": 219771192
  },
  {
   "server": 1236,
   "family": "achros",
   "power": 206580548
  },
  {
   "server": 1236,
   "family": "Mrgalaxy",
   "power": 189766182
  },
  {
   "server": 1236,
   "family": "Euphoria",
   "power": 188463754
  },
  {
   "server": 1236,
   "family": "fatthairyspore",
   "power": 181412986
  },
  {
   "server": 1236,
   "family": "Angelic",
   "power": 174175295
  },
  {
   "server": 1237,
   "family": "OnlyShrooms",
   "power": 1304851660
  },
  {
   "server": 1237,
   "family": "Mushmellow",
   "power": 1111690263
  },
  {
   "server": 1237,
   "family": "Shroomreapers",
   "power": 326743413
  },
  {
   "server": 1237,
   "family": "MysticShroom",
   "power": 236273921
  },
  {
   "server": 1237,
   "family": "PandaPirates",
   "power": 219904093
  },
  {
   "server": 1237,
   "family": "TheChickenFam",
   "power": 202718841
  },
  {
   "server": 1237,
   "family": "Unstoppable",
   "power": 176318585
  },
  {
   "server": 1237,
   "family": "Shroomnation",
   "power": 158080733
  },
  {
   "server": 1237,
   "family": "꧁༒Aveภgerຮ༒꧂",
   "power": 148073030
  },
  {
   "server": 1237,
   "family": "TheShrooms",
   "power": 133393900
  },
  {
   "server": 1238,
   "family": "MushieKingdom",
   "power": 1616233541
  },
  {
   "server": 1238,
   "family": "LEGENDS",
   "power": 860110175
  },
  {
   "server": 1238,
   "family": "MysticMush",
   "power": 412953356
  },
  {
   "server": 1238,
   "family": "Tip",
   "power": 217193251
  },
  {
   "server": 1238,
   "family": "Xhakyn",
   "power": 176164536
  },
  {
   "server": 1238,
   "family": "fungi",
   "power": 174570747
  },
  {
   "server": 1238,
   "family": "Sapphire",
   "power": 171139940
  },
  {
   "server": 1238,
   "family": "KiwiShrooms",
   "power": 163091413
  },
  {
   "server": 1238,
   "family": "DeadFools",
   "power": 155289891
  },
  {
   "server": 1238,
   "family": "Mafia",
   "power": 148395266
  },
  {
   "server": 1239,
   "family": "Straw_Hats",
   "power": 1400215262
  },
  {
   "server": 1239,
   "family": "Shroomies",
   "power": 572517393
  },
  {
   "server": 1239,
   "family": "Wanted",
   "power": 372818426
  },
  {
   "server": 1239,
   "family": "CanadiansRule",
   "power": 287773183
  },
  {
   "server": 1239,
   "family": "BlackClover",
   "power": 277686486
  },
  {
   "server": 1239,
   "family": "Azreguard",
   "power": 260944880
  },
  {
   "server": 1239,
   "family": "Section8",
   "power": 209405030
  },
  {
   "server": 1239,
   "family": "GoofyGøøbers",
   "power": 199439739
  },
  {
   "server": 1239,
   "family": "demonhunter",
   "power": 171683829
  },
  {
   "server": 1239,
   "family": "Shadows",
   "power": 137224085
  },
  {
   "server": 1240,
   "family": "WhiteLotus",
   "power": 1496354527
  },
  {
   "server": 1240,
   "family": "KungfuKoalas",
   "power": 630690656
  },
  {
   "server": 1240,
   "family": "AceS",
   "power": 373301969
  },
  {
   "server": 1240,
   "family": "QcMushroom",
   "power": 271782236
  },
  {
   "server": 1240,
   "family": "Knitsworth",
   "power": 266649319
  },
  {
   "server": 1240,
   "family": "BadMoonBois",
   "power": 224181217
  },
  {
   "server": 1240,
   "family": "Ragnarök",
   "power": 223678002
  },
  {
   "server": 1240,
   "family": "kumo",
   "power": 220227301
  },
  {
   "server": 1240,
   "family": "Tripp",
   "power": 176782285
  },
  {
   "server": 1240,
   "family": "PhantomTroupe",
   "power": 176183595
  },
  {
   "server": 1241,
   "family": "Abnormal",
   "power": 1554791408
  },
  {
   "server": 1241,
   "family": "Anime",
   "power": 454901815
  },
  {
   "server": 1241,
   "family": "TheShrooms",
   "power": 362595473
  },
  {
   "server": 1241,
   "family": "ThisIsSus",
   "power": 302195446
  },
  {
   "server": 1241,
   "family": "theEND",
   "power": 212745301
  },
  {
   "server": 1241,
   "family": "room2shroom",
   "power": 209660859
  },
  {
   "server": 1241,
   "family": "SimpleTimes",
   "power": 209426817
  },
  {
   "server": 1241,
   "family": "Evening_arrow",
   "power": 203652817
  },
  {
   "server": 1241,
   "family": "Reaver",
   "power": 194196101
  },
  {
   "server": 1241,
   "family": "shroom247",
   "power": 179938983
  },
  {
   "server": 1242,
   "family": "DevilsRejects",
   "power": 1444939164
  },
  {
   "server": 1242,
   "family": "Luminescence",
   "power": 974591935
  },
  {
   "server": 1242,
   "family": "finals",
   "power": 283948807
  },
  {
   "server": 1242,
   "family": "Mlonde",
   "power": 240464548
  },
  {
   "server": 1242,
   "family": "mushy’s",
   "power": 233601649
  },
  {
   "server": 1242,
   "family": "Overlords",
   "power": 168698166
  },
  {
   "server": 1242,
   "family": "Reapers",
   "power": 153873635
  },
  {
   "server": 1242,
   "family": "Demon_Clan",
   "power": 149641679
  },
  {
   "server": 1242,
   "family": "onion",
   "power": 145240938
  },
  {
   "server": 1242,
   "family": "MilkandCookies",
   "power": 136282344
  },
  {
   "server": 1243,
   "family": "RAVENOUS",
   "power": 1441251608
  },
  {
   "server": 1243,
   "family": "RoguesRevenge",
   "power": 539777302
  },
  {
   "server": 1243,
   "family": "Shroomers",
   "power": 376597275
  },
  {
   "server": 1243,
   "family": "TheCoolFamily",
   "power": 297781546
  },
  {
   "server": 1243,
   "family": "W33D",
   "power": 296374803
  },
  {
   "server": 1243,
   "family": "HeavenlyShroom",
   "power": 269754378
  },
  {
   "server": 1243,
   "family": "lightdragon",
   "power": 248850491
  },
  {
   "server": 1243,
   "family": "Dark_Legion",
   "power": 219436706
  },
  {
   "server": 1243,
   "family": "thefellas",
   "power": 210051697
  },
  {
   "server": 1243,
   "family": "JV_THE_GODS",
   "power": 185492321
  },
  {
   "server": 1244,
   "family": "3amZoomies",
   "power": 1300319134
  },
  {
   "server": 1244,
   "family": "FunGuys",
   "power": 696737369
  },
  {
   "server": 1244,
   "family": "GhostMan",
   "power": 696342992
  },
  {
   "server": 1244,
   "family": "TheJizzards",
   "power": 320153280
  },
  {
   "server": 1244,
   "family": "Bombastic",
   "power": 273704723
  },
  {
   "server": 1244,
   "family": "Stereotypical",
   "power": 234923208
  },
  {
   "server": 1244,
   "family": "gamer",
   "power": 195044721
  },
  {
   "server": 1244,
   "family": "WolfsDen",
   "power": 162366754
  },
  {
   "server": 1244,
   "family": "zygon",
   "power": 156593862
  },
  {
   "server": 1244,
   "family": "minicrawlers",
   "power": 146764507
  },
  {
   "server": 1245,
   "family": "MostHated",
   "power": 1469281493
  },
  {
   "server": 1245,
   "family": "Family",
   "power": 395745655
  },
  {
   "server": 1245,
   "family": "MushiesUnited",
   "power": 364722243
  },
  {
   "server": 1245,
   "family": "Primesupreme",
   "power": 338104088
  },
  {
   "server": 1245,
   "family": "TheBombDotCom",
   "power": 295439362
  },
  {
   "server": 1245,
   "family": "GODSOFWAR",
   "power": 287698534
  },
  {
   "server": 1245,
   "family": "ShroomHeads",
   "power": 242950440
  },
  {
   "server": 1245,
   "family": "Dmc",
   "power": 211216923
  },
  {
   "server": 1245,
   "family": "hitheres",
   "power": 196630341
  },
  {
   "server": 1245,
   "family": "LunarShrooms",
   "power": 182418742
  },
  {
   "server": 1246,
   "family": "MoonlitPub",
   "power": 1249617553
  },
  {
   "server": 1246,
   "family": "SolarPub",
   "power": 1142041115
  },
  {
   "server": 1246,
   "family": "CrabPeople",
   "power": 311202288
  },
  {
   "server": 1246,
   "family": "Murphies",
   "power": 282039272
  },
  {
   "server": 1246,
   "family": "Forsaken",
   "power": 216943325
  },
  {
   "server": 1246,
   "family": "Volunter",
   "power": 215957240
  },
  {
   "server": 1246,
   "family": "UK",
   "power": 209105527
  },
  {
   "server": 1246,
   "family": "Mushroom",
   "power": 184037317
  },
  {
   "server": 1246,
   "family": "Slayers",
   "power": 161659809
  },
  {
   "server": 1246,
   "family": "Dark",
   "power": 160689806
  },
  {
   "server": 1247,
   "family": "Olympus",
   "power": 1348260976
  },
  {
   "server": 1247,
   "family": "ShroomLordz",
   "power": 1138869435
  },
  {
   "server": 1247,
   "family": "ThePond",
   "power": 422230740
  },
  {
   "server": 1247,
   "family": "solem",
   "power": 387425264
  },
  {
   "server": 1247,
   "family": "TheBoys",
   "power": 346416465
  },
  {
   "server": 1247,
   "family": "FungusFam",
   "power": 244029240
  },
  {
   "server": 1247,
   "family": "Kingdom",
   "power": 207086443
  },
  {
   "server": 1247,
   "family": "ThorsHammer",
   "power": 171621922
  },
  {
   "server": 1247,
   "family": "shroomed",
   "power": 158140116
  },
  {
   "server": 1247,
   "family": "Elementals",
   "power": 157330393
  },
  {
   "server": 1248,
   "family": "Purgatory",
   "power": 1414004708
  },
  {
   "server": 1248,
   "family": "LampLovers",
   "power": 916149711
  },
  {
   "server": 1248,
   "family": "The_Fun_Guys",
   "power": 476815729
  },
  {
   "server": 1248,
   "family": "shroomFam",
   "power": 258486963
  },
  {
   "server": 1248,
   "family": "SHRooMS",
   "power": 255949214
  },
  {
   "server": 1248,
   "family": "Korrupt",
   "power": 237609822
  },
  {
   "server": 1248,
   "family": "VoidedXZ",
   "power": 216916779
  },
  {
   "server": 1248,
   "family": "Ruthlesselite",
   "power": 210700515
  },
  {
   "server": 1248,
   "family": "Bergies",
   "power": 205702729
  },
  {
   "server": 1248,
   "family": "BoxCompany",
   "power": 205512136
  },
  {
   "server": 1249,
   "family": "RamenShøp",
   "power": 1408393943
  },
  {
   "server": 1249,
   "family": "LostShroomies",
   "power": 646281677
  },
  {
   "server": 1249,
   "family": "Mycelium",
   "power": 462821882
  },
  {
   "server": 1249,
   "family": "kingShrooms",
   "power": 259207000
  },
  {
   "server": 1249,
   "family": "Zackontop",
   "power": 246302923
  },
  {
   "server": 1249,
   "family": "TheKingz",
   "power": 241568296
  },
  {
   "server": 1249,
   "family": "Lunasxs",
   "power": 223975567
  },
  {
   "server": 1249,
   "family": "Incels",
   "power": 214662755
  },
  {
   "server": 1249,
   "family": "420Chill",
   "power": 211818824
  },
  {
   "server": 1249,
   "family": "FlamenHamen",
   "power": 184532130
  },
  {
   "server": 1250,
   "family": "SAO",
   "power": 1258812937
  },
  {
   "server": 1250,
   "family": "TheSaints",
   "power": 723284032
  },
  {
   "server": 1250,
   "family": "Temptations",
   "power": 397933850
  },
  {
   "server": 1250,
   "family": "ReApErZ",
   "power": 206905350
  },
  {
   "server": 1250,
   "family": "Stinky",
   "power": 206428571
  },
  {
   "server": 1250,
   "family": "afterPARTY",
   "power": 205054435
  },
  {
   "server": 1250,
   "family": "SGShroom",
   "power": 196485278
  },
  {
   "server": 1250,
   "family": "AbyssalKnights",
   "power": 177699813
  },
  {
   "server": 1250,
   "family": "Fatal",
   "power": 173453169
  },
  {
   "server": 1250,
   "family": "wolfpack",
   "power": 168116027
  },
  {
   "server": 1251,
   "family": "AngelsOfWar",
   "power": 1362637736
  },
  {
   "server": 1251,
   "family": "ButterShrooms",
   "power": 475043733
  },
  {
   "server": 1251,
   "family": "Chaychna",
   "power": 406297945
  },
  {
   "server": 1251,
   "family": "FunGuys",
   "power": 294263148
  },
  {
   "server": 1251,
   "family": "FungalFury",
   "power": 254801228
  },
  {
   "server": 1251,
   "family": "themunks",
   "power": 216161724
  },
  {
   "server": 1251,
   "family": "Tʰᵉ۝Gᵃᵗʰᵉʳⁱⁿᵍ",
   "power": 213166731
  },
  {
   "server": 1251,
   "family": "Synthesis",
   "power": 192713690
  },
  {
   "server": 1251,
   "family": "Shroomers",
   "power": 182294048
  },
  {
   "server": 1251,
   "family": "Runtz",
   "power": 177101392
  },
  {
   "server": 1252,
   "family": "Arise",
   "power": 1479517547
  },
  {
   "server": 1252,
   "family": "GoofyGoobers",
   "power": 759268838
  },
  {
   "server": 1252,
   "family": "HouseOfHope",
   "power": 427415325
  },
  {
   "server": 1252,
   "family": "Happiness",
   "power": 268504311
  },
  {
   "server": 1252,
   "family": "𝓢𝓴𝔂𝓱𝓲𝓰𝓱",
   "power": 236230502
  },
  {
   "server": 1252,
   "family": "Skywalkers",
   "power": 228393600
  },
  {
   "server": 1252,
   "family": "BADD",
   "power": 217437370
  },
  {
   "server": 1252,
   "family": "HazbinHotel",
   "power": 187919969
  },
  {
   "server": 1252,
   "family": "ShroomHeads",
   "power": 163080059
  },
  {
   "server": 1252,
   "family": "StrawHats",
   "power": 130153370
  },
  {
   "server": 1253,
   "family": "OnlyBops",
   "power": 1227117713
  },
  {
   "server": 1253,
   "family": "420Shrooms",
   "power": 1049667236
  },
  {
   "server": 1253,
   "family": "NoGameNoLife",
   "power": 359056939
  },
  {
   "server": 1253,
   "family": "MYCELIUM",
   "power": 284729594
  },
  {
   "server": 1253,
   "family": "ⱧłĐĐɆ₦₣₳₮Ɇ",
   "power": 273593495
  },
  {
   "server": 1253,
   "family": "Reapers",
   "power": 199665940
  },
  {
   "server": 1253,
   "family": "Casuals",
   "power": 197687988
  },
  {
   "server": 1253,
   "family": "BcGrown",
   "power": 187037204
  },
  {
   "server": 1253,
   "family": "FUNGIS",
   "power": 150178535
  },
  {
   "server": 1253,
   "family": "Royalty",
   "power": 98661181
  },
  {
   "server": 1254,
   "family": "Omega",
   "power": 1181203375
  },
  {
   "server": 1254,
   "family": "Elonville",
   "power": 823076003
  },
  {
   "server": 1254,
   "family": "Lube",
   "power": 398940751
  },
  {
   "server": 1254,
   "family": "Shampoo",
   "power": 258960740
  },
  {
   "server": 1254,
   "family": "Meeks",
   "power": 233745769
  },
  {
   "server": 1254,
   "family": "NAZARICK",
   "power": 228407581
  },
  {
   "server": 1254,
   "family": "ShroomieUnite",
   "power": 226944400
  },
  {
   "server": 1254,
   "family": "Sanctury",
   "power": 220830432
  },
  {
   "server": 1254,
   "family": "shroomMafia86",
   "power": 184331239
  },
  {
   "server": 1254,
   "family": "Yourmom",
   "power": 167573035
  },
  {
   "server": 1255,
   "family": "AgentsOfChaos¿",
   "power": 1446824470
  },
  {
   "server": 1255,
   "family": "TaintedPeaches",
   "power": 587229578
  },
  {
   "server": 1255,
   "family": "SporeAddicts",
   "power": 499839253
  },
  {
   "server": 1255,
   "family": "Mafia",
   "power": 398878850
  },
  {
   "server": 1255,
   "family": "JustTheTip",
   "power": 249915339
  },
  {
   "server": 1255,
   "family": "Mushle",
   "power": 219833038
  },
  {
   "server": 1255,
   "family": "ShroomSmoothie",
   "power": 216607949
  },
  {
   "server": 1255,
   "family": "DieselsDen",
   "power": 204194660
  },
  {
   "server": 1255,
   "family": "HardlyActive",
   "power": 189964571
  },
  {
   "server": 1255,
   "family": "Arise",
   "power": 185612418
  },
  {
   "server": 1256,
   "family": "Ts",
   "power": 981738426
  },
  {
   "server": 1256,
   "family": "ONLYSHROOMS",
   "power": 715817764
  },
  {
   "server": 1256,
   "family": "TheFamily",
   "power": 317425216
  },
  {
   "server": 1256,
   "family": "UnholyDarkChap",
   "power": 250472571
  },
  {
   "server": 1256,
   "family": "CoppersFam",
   "power": 246426589
  },
  {
   "server": 1256,
   "family": "FoxGaming",
   "power": 233869030
  },
  {
   "server": 1256,
   "family": "HolyShroom",
   "power": 233208146
  },
  {
   "server": 1256,
   "family": "idkSomething",
   "power": 208898406
  },
  {
   "server": 1256,
   "family": "MMC",
   "power": 195792362
  },
  {
   "server": 1256,
   "family": "BloodHoney",
   "power": 169992524
  },
  {
   "server": 1257,
   "family": "Athotski",
   "power": 1265617198
  },
  {
   "server": 1257,
   "family": "CreatorS",
   "power": 562772603
  },
  {
   "server": 1257,
   "family": "WolfPack",
   "power": 481173539
  },
  {
   "server": 1257,
   "family": "SlayQueen",
   "power": 258230479
  },
  {
   "server": 1257,
   "family": "boss",
   "power": 231894775
  },
  {
   "server": 1257,
   "family": "Shiitake",
   "power": 225153896
  },
  {
   "server": 1257,
   "family": "EvienceKramoor",
   "power": 225002101
  },
  {
   "server": 1257,
   "family": "Seraphim",
   "power": 218669351
  },
  {
   "server": 1257,
   "family": "OurCrazyGroup",
   "power": 209656600
  },
  {
   "server": 1257,
   "family": "Dark",
   "power": 163928570
  },
  {
   "server": 1258,
   "family": "LOVE",
   "power": 1274802817
  },
  {
   "server": 1258,
   "family": "HATE",
   "power": 616622276
  },
  {
   "server": 1258,
   "family": "CatCartel",
   "power": 399314649
  },
  {
   "server": 1258,
   "family": "amungus",
   "power": 296253956
  },
  {
   "server": 1258,
   "family": "shroomroom",
   "power": 288782183
  },
  {
   "server": 1258,
   "family": "MushRoomies",
   "power": 272546164
  },
  {
   "server": 1258,
   "family": "PsiloVibin",
   "power": 216747869
  },
  {
   "server": 1258,
   "family": "FairyTail",
   "power": 186056032
  },
  {
   "server": 1258,
   "family": "TheDarkness",
   "power": 175749774
  },
  {
   "server": 1258,
   "family": "Legends",
   "power": 169932742
  },
  {
   "server": 1259,
   "family": "SpyXFamily",
   "power": 1339485005
  },
  {
   "server": 1259,
   "family": "BNK",
   "power": 857774272
  },
  {
   "server": 1259,
   "family": "Hogwarts",
   "power": 529521376
  },
  {
   "server": 1259,
   "family": "zzzz",
   "power": 255438449
  },
  {
   "server": 1259,
   "family": "ChillZone",
   "power": 215191456
  },
  {
   "server": 1259,
   "family": "NeverForget",
   "power": 201110349
  },
  {
   "server": 1259,
   "family": "Axle",
   "power": 200341079
  },
  {
   "server": 1259,
   "family": "VALHALLA",
   "power": 190082475
  },
  {
   "server": 1259,
   "family": "NuggetSyrup",
   "power": 187771684
  },
  {
   "server": 1259,
   "family": "DeadlyGnomes",
   "power": 183277016
  },
  {
   "server": 1260,
   "family": "Mycelium",
   "power": 1314708130
  },
  {
   "server": 1260,
   "family": "Shroomies",
   "power": 505625751
  },
  {
   "server": 1260,
   "family": "Deadly",
   "power": 429703451
  },
  {
   "server": 1260,
   "family": "destroyers",
   "power": 347919168
  },
  {
   "server": 1260,
   "family": "Order2",
   "power": 301620036
  },
  {
   "server": 1260,
   "family": "0PIUM",
   "power": 279913756
  },
  {
   "server": 1260,
   "family": "Scout_Regiment",
   "power": 217125188
  },
  {
   "server": 1260,
   "family": "radicalbunnies",
   "power": 213666217
  },
  {
   "server": 1260,
   "family": "FunGamers",
   "power": 139527334
  },
  {
   "server": 1260,
   "family": "FoxDragonFam",
   "power": 139400029
  },
  {
   "server": 1261,
   "family": "RetirementHome",
   "power": 1353066171
  },
  {
   "server": 1261,
   "family": "NeverKnowsBest",
   "power": 837218187
  },
  {
   "server": 1261,
   "family": "VetsŘH",
   "power": 386648244
  },
  {
   "server": 1261,
   "family": "Gods",
   "power": 262887166
  },
  {
   "server": 1261,
   "family": "shrooms",
   "power": 262635750
  },
  {
   "server": 1261,
   "family": "TheDeathCaps",
   "power": 213542162
  },
  {
   "server": 1261,
   "family": "OnePiecE",
   "power": 201573482
  },
  {
   "server": 1261,
   "family": "MushroomStamps",
   "power": 177261781
  },
  {
   "server": 1261,
   "family": "Ascensions",
   "power": 150834790
  },
  {
   "server": 1261,
   "family": "TheGangatron",
   "power": 144158689
  },
  {
   "server": 1262,
   "family": "ShroomCartel",
   "power": 1314061966
  },
  {
   "server": 1262,
   "family": "Legends",
   "power": 926787320
  },
  {
   "server": 1262,
   "family": "Pweepepee",
   "power": 395781920
  },
  {
   "server": 1262,
   "family": "Famdamily",
   "power": 240860759
  },
  {
   "server": 1262,
   "family": "TwoCrows",
   "power": 234202769
  },
  {
   "server": 1262,
   "family": "Noodles",
   "power": 234078003
  },
  {
   "server": 1262,
   "family": "Dreadnaught",
   "power": 193456187
  },
  {
   "server": 1262,
   "family": "Tempest",
   "power": 189904233
  },
  {
   "server": 1262,
   "family": "Frogos",
   "power": 184427210
  },
  {
   "server": 1262,
   "family": "Onlyspores",
   "power": 173710957
  },
  {
   "server": 1263,
   "family": "DegensUnited",
   "power": 1444787269
  },
  {
   "server": 1263,
   "family": "CircusClowns",
   "power": 477289753
  },
  {
   "server": 1263,
   "family": "MushLove",
   "power": 337859309
  },
  {
   "server": 1263,
   "family": "StrawHatCrew",
   "power": 237565720
  },
  {
   "server": 1263,
   "family": "CrimsonBlades",
   "power": 206188821
  },
  {
   "server": 1263,
   "family": "StrangeLandGC",
   "power": 200243515
  },
  {
   "server": 1263,
   "family": "YoshidaCľáñ",
   "power": 175693600
  },
  {
   "server": 1263,
   "family": "Legacy",
   "power": 169256563
  },
  {
   "server": 1263,
   "family": "ShrroomGods",
   "power": 166441277
  },
  {
   "server": 1263,
   "family": "ChaoticOrder",
   "power": 137613384
  },
  {
   "server": 1264,
   "family": "NightWalkers",
   "power": 1180363409
  },
  {
   "server": 1264,
   "family": "𝐒𝐇𝐑𝐎𝐎𝐌𝐒",
   "power": 447585882
  },
  {
   "server": 1264,
   "family": "BrokeBitches",
   "power": 362646142
  },
  {
   "server": 1264,
   "family": "ShroomPirates",
   "power": 256907355
  },
  {
   "server": 1264,
   "family": "Atramentaria",
   "power": 219728364
  },
  {
   "server": 1264,
   "family": "MushOnTop",
   "power": 202062384
  },
  {
   "server": 1264,
   "family": "Pack",
   "power": 176925512
  },
  {
   "server": 1264,
   "family": "Mushed",
   "power": 134352881
  },
  {
   "server": 1264,
   "family": "NinthGate",
   "power": 115166737
  },
  {
   "server": 1264,
   "family": "Ragnarok",
   "power": 107545493
  },
  {
   "server": 1265,
   "family": "Apollyon",
   "power": 1338580589
  },
  {
   "server": 1265,
   "family": "Whitefang",
   "power": 412545252
  },
  {
   "server": 1265,
   "family": "Dragonslayer",
   "power": 357012909
  },
  {
   "server": 1265,
   "family": "TripleCat",
   "power": 284647308
  },
  {
   "server": 1265,
   "family": "StrawHatCrew",
   "power": 257845748
  },
  {
   "server": 1265,
   "family": "Mushdooms",
   "power": 254876669
  },
  {
   "server": 1265,
   "family": "Godkiller",
   "power": 254802250
  },
  {
   "server": 1265,
   "family": "Dragon",
   "power": 177365097
  },
  {
   "server": 1265,
   "family": "BloodHoney",
   "power": 174645847
  },
  {
   "server": 1265,
   "family": "Girlkissers",
   "power": 167579201
  },
  {
   "server": 1266,
   "family": "Chexmix",
   "power": 1245292165
  },
  {
   "server": 1266,
   "family": "MushyKingdom",
   "power": 1085123677
  },
  {
   "server": 1266,
   "family": "Shroomalicious",
   "power": 391813046
  },
  {
   "server": 1266,
   "family": "TheMunchkins",
   "power": 246390063
  },
  {
   "server": 1266,
   "family": "Strife",
   "power": 235645011
  },
  {
   "server": 1266,
   "family": "FungiFans",
   "power": 185604032
  },
  {
   "server": 1266,
   "family": "TheOnyxLegion",
   "power": 180486699
  },
  {
   "server": 1266,
   "family": "Thars_Shrooms",
   "power": 175076979
  },
  {
   "server": 1266,
   "family": "shroomheadz",
   "power": 171573284
  },
  {
   "server": 1266,
   "family": "Axios",
   "power": 140283383
  },
  {
   "server": 1267,
   "family": "SomethingSuper",
   "power": 1241388337
  },
  {
   "server": 1267,
   "family": "SoulSociety",
   "power": 980981606
  },
  {
   "server": 1267,
   "family": "Funguys",
   "power": 448411721
  },
  {
   "server": 1267,
   "family": "Soup",
   "power": 274032288
  },
  {
   "server": 1267,
   "family": "Herd",
   "power": 250415810
  },
  {
   "server": 1267,
   "family": "Gabgoooooooooo",
   "power": 225155531
  },
  {
   "server": 1267,
   "family": "SumTingWong",
   "power": 223933078
  },
  {
   "server": 1267,
   "family": "thegrandcircus",
   "power": 195599448
  },
  {
   "server": 1267,
   "family": "Bitten",
   "power": 179581727
  },
  {
   "server": 1267,
   "family": "Superfuntime",
   "power": 166176553
  },
  {
   "server": 1268,
   "family": "TOP",
   "power": 1276444085
  },
  {
   "server": 1268,
   "family": "Misfits",
   "power": 630837895
  },
  {
   "server": 1268,
   "family": "Envy",
   "power": 547559133
  },
  {
   "server": 1268,
   "family": "FullShiitake",
   "power": 249401674
  },
  {
   "server": 1268,
   "family": "WeAreNice",
   "power": 247175239
  },
  {
   "server": 1268,
   "family": "shitake",
   "power": 229966645
  },
  {
   "server": 1268,
   "family": "Lamentation",
   "power": 197692369
  },
  {
   "server": 1268,
   "family": "BloodHoney",
   "power": 178272470
  },
  {
   "server": 1268,
   "family": "Valhalla",
   "power": 171190393
  },
  {
   "server": 1268,
   "family": "Weverse",
   "power": 148324339
  },
  {
   "server": 1269,
   "family": "NightOwls",
   "power": 1249743718
  },
  {
   "server": 1269,
   "family": "ShroomLegion",
   "power": 833820692
  },
  {
   "server": 1269,
   "family": "Losmegachampi",
   "power": 316854757
  },
  {
   "server": 1269,
   "family": "Queensland",
   "power": 229343450
  },
  {
   "server": 1269,
   "family": "Peanutbutter",
   "power": 215574922
  },
  {
   "server": 1269,
   "family": "Parkours",
   "power": 182836535
  },
  {
   "server": 1269,
   "family": "Donny",
   "power": 173318364
  },
  {
   "server": 1269,
   "family": "stormshadow",
   "power": 157880620
  },
  {
   "server": 1269,
   "family": "StrawHatCrew",
   "power": 149961157
  },
  {
   "server": 1269,
   "family": "AussieShrooms",
   "power": 141780226
  },
  {
   "server": 1270,
   "family": "FungalFury",
   "power": 1133277181
  },
  {
   "server": 1270,
   "family": "ShadowLegion",
   "power": 848978247
  },
  {
   "server": 1270,
   "family": "Lunaire",
   "power": 336299420
  },
  {
   "server": 1270,
   "family": "Abyss",
   "power": 257392408
  },
  {
   "server": 1270,
   "family": "AlucArdon",
   "power": 223827924
  },
  {
   "server": 1270,
   "family": "Franceswar",
   "power": 178112530
  },
  {
   "server": 1270,
   "family": "Pineapple",
   "power": 174307392
  },
  {
   "server": 1270,
   "family": "chomik",
   "power": 168366053
  },
  {
   "server": 1270,
   "family": "TheRedeemed",
   "power": 155502868
  },
  {
   "server": 1270,
   "family": "LOL",
   "power": 147776691
  },
  {
   "server": 1271,
   "family": "ShroomShire",
   "power": 1282038627
  },
  {
   "server": 1271,
   "family": "PremiumBlend",
   "power": 465907406
  },
  {
   "server": 1271,
   "family": "King",
   "power": 320858575
  },
  {
   "server": 1271,
   "family": "Empire",
   "power": 245627140
  },
  {
   "server": 1271,
   "family": "shroomush",
   "power": 237640754
  },
  {
   "server": 1271,
   "family": "MusherShip9000",
   "power": 217007778
  },
  {
   "server": 1271,
   "family": "LionsMane",
   "power": 212598300
  },
  {
   "server": 1271,
   "family": "TheFunguys",
   "power": 185852508
  },
  {
   "server": 1271,
   "family": "DuckyPond",
   "power": 166419273
  },
  {
   "server": 1271,
   "family": "Tripz",
   "power": 98209427
  },
  {
   "server": 1272,
   "family": "Legacy",
   "power": 1219902535
  },
  {
   "server": 1272,
   "family": "bbFamily",
   "power": 786904897
  },
  {
   "server": 1272,
   "family": "LegacyLite",
   "power": 381176511
  },
  {
   "server": 1272,
   "family": "Unkindled",
   "power": 252895494
  },
  {
   "server": 1272,
   "family": "NeverForget",
   "power": 215185782
  },
  {
   "server": 1272,
   "family": "SHOGUN",
   "power": 186727856
  },
  {
   "server": 1272,
   "family": "PH",
   "power": 161071330
  },
  {
   "server": 1272,
   "family": "Chaos",
   "power": 152526198
  },
  {
   "server": 1272,
   "family": "Femboys",
   "power": 139425169
  },
  {
   "server": 1272,
   "family": "Legends",
   "power": 114699883
  },
  {
   "server": 1273,
   "family": "Sins",
   "power": 1322425454
  },
  {
   "server": 1273,
   "family": "ShadowRealm",
   "power": 540564986
  },
  {
   "server": 1273,
   "family": "TheManagers",
   "power": 397810627
  },
  {
   "server": 1273,
   "family": "magicMushrooms",
   "power": 215229291
  },
  {
   "server": 1273,
   "family": "MushyBoys",
   "power": 214471438
  },
  {
   "server": 1273,
   "family": "StonedKings",
   "power": 189050004
  },
  {
   "server": 1273,
   "family": "GodsFlesh",
   "power": 177965623
  },
  {
   "server": 1273,
   "family": "CrazyTown",
   "power": 159274612
  },
  {
   "server": 1273,
   "family": "mogger",
   "power": 154596829
  },
  {
   "server": 1273,
   "family": "Legends",
   "power": 147875706
  },
  {
   "server": 1274,
   "family": "SurveyCorps",
   "power": 1164080587
  },
  {
   "server": 1274,
   "family": "Silly_Stoners",
   "power": 441504485
  },
  {
   "server": 1274,
   "family": "YOUTUBE",
   "power": 381032709
  },
  {
   "server": 1274,
   "family": "SmolPotatoes",
   "power": 214407847
  },
  {
   "server": 1274,
   "family": "FriedMushrooms",
   "power": 201291065
  },
  {
   "server": 1274,
   "family": "MentalSpace",
   "power": 173451672
  },
  {
   "server": 1274,
   "family": "ODYSSEY",
   "power": 154143545
  },
  {
   "server": 1274,
   "family": "pookie",
   "power": 149766036
  },
  {
   "server": 1274,
   "family": "DownHazardous",
   "power": 142765119
  },
  {
   "server": 1274,
   "family": "BioShock",
   "power": 140080145
  },
  {
   "server": 1275,
   "family": "Xeno",
   "power": 1191485487
  },
  {
   "server": 1275,
   "family": "BambooBrigade²",
   "power": 685387872
  },
  {
   "server": 1275,
   "family": "CoolForSchool",
   "power": 269453491
  },
  {
   "server": 1275,
   "family": "TheGarden",
   "power": 198846230
  },
  {
   "server": 1275,
   "family": "Xeno2",
   "power": 172754899
  },
  {
   "server": 1275,
   "family": "BigBoys",
   "power": 157044816
  },
  {
   "server": 1275,
   "family": "RoseGold",
   "power": 148678579
  },
  {
   "server": 1275,
   "family": "hoj",
   "power": 143738919
  },
  {
   "server": 1275,
   "family": "Coolcactus’s",
   "power": 116804630
  },
  {
   "server": 1275,
   "family": "Shmokerz420",
   "power": 95223027
  },
  {
   "server": 1276,
   "family": "Masters",
   "power": 972359912
  },
  {
   "server": 1276,
   "family": "MushInAss",
   "power": 876663262
  },
  {
   "server": 1276,
   "family": "TOXIC",
   "power": 384509216
  },
  {
   "server": 1276,
   "family": "Mycotyrants",
   "power": 224204960
  },
  {
   "server": 1276,
   "family": "ShroomMonsoon",
   "power": 208760804
  },
  {
   "server": 1276,
   "family": "Muzzshrooms",
   "power": 207440636
  },
  {
   "server": 1276,
   "family": "LGBTeam",
   "power": 189335713
  },
  {
   "server": 1276,
   "family": "WheelieBins",
   "power": 163390154
  },
  {
   "server": 1276,
   "family": "Shrooms",
   "power": 145531499
  },
  {
   "server": 1276,
   "family": "Mexican",
   "power": 134487793
  },
  {
   "server": 1277,
   "family": "Dumplings",
   "power": 1204107696
  },
  {
   "server": 1277,
   "family": "Ghosts",
   "power": 676987690
  },
  {
   "server": 1277,
   "family": "loltrip",
   "power": 315468288
  },
  {
   "server": 1277,
   "family": "SpaceTrain",
   "power": 183405742
  },
  {
   "server": 1277,
   "family": "Ashes_of_Eden",
   "power": 182905159
  },
  {
   "server": 1277,
   "family": "demons",
   "power": 175395360
  },
  {
   "server": 1277,
   "family": "Mcgeeties",
   "power": 168090584
  },
  {
   "server": 1277,
   "family": "Outcasts",
   "power": 149860610
  },
  {
   "server": 1277,
   "family": "Play4Fun",
   "power": 143830209
  },
  {
   "server": 1277,
   "family": "Québec",
   "power": 131447077
  },
  {
   "server": 1278,
   "family": "ShadowGarden",
   "power": 1212316325
  },
  {
   "server": 1278,
   "family": "HollowPurple",
   "power": 684399201
  },
  {
   "server": 1278,
   "family": "Empire",
   "power": 503964905
  },
  {
   "server": 1278,
   "family": "Family",
   "power": 230835664
  },
  {
   "server": 1278,
   "family": "enders666",
   "power": 198765913
  },
  {
   "server": 1278,
   "family": "FungusAmongUs",
   "power": 198399375
  },
  {
   "server": 1278,
   "family": "Cordyceps",
   "power": 175947947
  },
  {
   "server": 1278,
   "family": "StrawHatCrew",
   "power": 174757316
  },
  {
   "server": 1278,
   "family": "Silly_Stoners",
   "power": 127005352
  },
  {
   "server": 1278,
   "family": "Arctic",
   "power": 98168906
  },
  {
   "server": 1279,
   "family": "FungalFreaks",
   "power": 1179348362
  },
  {
   "server": 1279,
   "family": "Arise",
   "power": 993605392
  },
  {
   "server": 1279,
   "family": "MooShroom",
   "power": 233724332
  },
  {
   "server": 1279,
   "family": "hunters",
   "power": 200743513
  },
  {
   "server": 1279,
   "family": "CoffeeCrew",
   "power": 197084210
  },
  {
   "server": 1279,
   "family": "nuhuh",
   "power": 161109791
  },
  {
   "server": 1279,
   "family": "TheDemons",
   "power": 153154849
  },
  {
   "server": 1279,
   "family": "Clueless",
   "power": 145519134
  },
  {
   "server": 1279,
   "family": "DivineMist",
   "power": 144246858
  },
  {
   "server": 1279,
   "family": "TheBois420",
   "power": 113559430
  },
  {
   "server": 1280,
   "family": "LillysGarden",
   "power": 1320389500
  },
  {
   "server": 1280,
   "family": "Villians",
   "power": 839440896
  },
  {
   "server": 1280,
   "family": "CheesyDegens",
   "power": 329922186
  },
  {
   "server": 1280,
   "family": "ChaoticOgres",
   "power": 210827864
  },
  {
   "server": 1280,
   "family": "MoonShrooms",
   "power": 206153060
  },
  {
   "server": 1280,
   "family": "ShroomShield",
   "power": 181549994
  },
  {
   "server": 1280,
   "family": "ShadowArmy",
   "power": 181116571
  },
  {
   "server": 1280,
   "family": "sololeveling",
   "power": 175817326
  },
  {
   "server": 1280,
   "family": "Limitless",
   "power": 150828098
  },
  {
   "server": 1280,
   "family": "Mooshrooms",
   "power": 117038436
  },
  {
   "server": 1281,
   "family": "ᵀᴴᴱKINGDOM",
   "power": 1307627505
  },
  {
   "server": 1281,
   "family": "Fate",
   "power": 952209286
  },
  {
   "server": 1281,
   "family": "Cat",
   "power": 623520405
  },
  {
   "server": 1281,
   "family": "DeathBringers",
   "power": 293439383
  },
  {
   "server": 1281,
   "family": "Immortals",
   "power": 288152696
  },
  {
   "server": 1281,
   "family": "Umbra",
   "power": 260812663
  },
  {
   "server": 1281,
   "family": "Shadow",
   "power": 214696005
  },
  {
   "server": 1281,
   "family": "BuDdIeS",
   "power": 182452705
  },
  {
   "server": 1281,
   "family": "GODSOFWAR",
   "power": 179953433
  },
  {
   "server": 1281,
   "family": "souleaterclan",
   "power": 169836353
  },
  {
   "server": 1282,
   "family": "MoshiMushie",
   "power": 1147135819
  },
  {
   "server": 1282,
   "family": "LegendaryFew",
   "power": 1064742485
  },
  {
   "server": 1282,
   "family": "Shroomify",
   "power": 361737822
  },
  {
   "server": 1282,
   "family": "HouseAtreides",
   "power": 214013293
  },
  {
   "server": 1282,
   "family": "constantinefan",
   "power": 164081733
  },
  {
   "server": 1282,
   "family": "Dreamshrooms",
   "power": 160378652
  },
  {
   "server": 1282,
   "family": "NƏCRØPHÏLÏªCS",
   "power": 157108721
  },
  {
   "server": 1282,
   "family": "ShroomFarm",
   "power": 156761447
  },
  {
   "server": 1282,
   "family": "HolyShitake",
   "power": 143513006
  },
  {
   "server": 1282,
   "family": "HorseApples",
   "power": 125393215
  },
  {
   "server": 1283,
   "family": "MatchaMush",
   "power": 936088496
  },
  {
   "server": 1283,
   "family": "OnlyGoats",
   "power": 609050514
  },
  {
   "server": 1283,
   "family": "HolyShiitake",
   "power": 571302363
  },
  {
   "server": 1283,
   "family": "Cheekies",
   "power": 233885302
  },
  {
   "server": 1283,
   "family": "Darkmoons",
   "power": 212673126
  },
  {
   "server": 1283,
   "family": "reaper",
   "power": 201952102
  },
  {
   "server": 1283,
   "family": "SporeForceOne",
   "power": 192638651
  },
  {
   "server": 1283,
   "family": "BigTips",
   "power": 182664223
  },
  {
   "server": 1283,
   "family": "Fallout",
   "power": 167420099
  },
  {
   "server": 1283,
   "family": "Sonic",
   "power": 164473903
  },
  {
   "server": 1284,
   "family": "NewAge",
   "power": 1185431580
  },
  {
   "server": 1284,
   "family": "Zaza",
   "power": 480394442
  },
  {
   "server": 1284,
   "family": "Stonetopia",
   "power": 371003575
  },
  {
   "server": 1284,
   "family": "xD",
   "power": 196432797
  },
  {
   "server": 1284,
   "family": "Chicken_Coop",
   "power": 180126479
  },
  {
   "server": 1284,
   "family": "TheSpooders",
   "power": 153850924
  },
  {
   "server": 1284,
   "family": "RoyalBeeings",
   "power": 139187402
  },
  {
   "server": 1284,
   "family": "PATHFINDERS",
   "power": 134637095
  },
  {
   "server": 1284,
   "family": "Veritas",
   "power": 132929536
  },
  {
   "server": 1284,
   "family": "Faisoif",
   "power": 128603717
  },
  {
   "server": 1285,
   "family": "TheMushroomTip",
   "power": 1084289719
  },
  {
   "server": 1285,
   "family": "TheGasChamber",
   "power": 575579002
  },
  {
   "server": 1285,
   "family": "TubMafia",
   "power": 401640366
  },
  {
   "server": 1285,
   "family": "Champions",
   "power": 180267165
  },
  {
   "server": 1285,
   "family": "Nightrulers",
   "power": 157800862
  },
  {
   "server": 1285,
   "family": "supernatural",
   "power": 156974300
  },
  {
   "server": 1285,
   "family": "Berserk",
   "power": 153323726
  },
  {
   "server": 1285,
   "family": "Theshroomcourt",
   "power": 110838562
  },
  {
   "server": 1285,
   "family": "Eclipse",
   "power": 109484356
  },
  {
   "server": 1285,
   "family": "vanilly",
   "power": 76709172
  },
  {
   "server": 1286,
   "family": "DoomShrooms",
   "power": 1070734773
  },
  {
   "server": 1286,
   "family": "HouseOfDragon",
   "power": 744371926
  },
  {
   "server": 1286,
   "family": "Alliance",
   "power": 719685121
  },
  {
   "server": 1286,
   "family": "Apex",
   "power": 267570986
  },
  {
   "server": 1286,
   "family": "Forbid",
   "power": 167210625
  },
  {
   "server": 1286,
   "family": "MagicMushroom",
   "power": 165510152
  },
  {
   "server": 1286,
   "family": "KINGOFKINGS",
   "power": 130609111
  },
  {
   "server": 1286,
   "family": "shrooms",
   "power": 118968781
  },
  {
   "server": 1286,
   "family": "magnatas",
   "power": 118735940
  },
  {
   "server": 1286,
   "family": "shroomdemonium",
   "power": 98954636
  },
  {
   "server": 1287,
   "family": "Arise",
   "power": 1241730340
  },
  {
   "server": 1287,
   "family": "StonerKlub",
   "power": 623672031
  },
  {
   "server": 1287,
   "family": "DankNation",
   "power": 430142347
  },
  {
   "server": 1287,
   "family": "ArcadiaKnights",
   "power": 293215555
  },
  {
   "server": 1287,
   "family": "SniperGang",
   "power": 256359181
  },
  {
   "server": 1287,
   "family": "Taco",
   "power": 155612881
  },
  {
   "server": 1287,
   "family": "Wieners",
   "power": 149912408
  },
  {
   "server": 1287,
   "family": "Ghostbusters",
   "power": 137835046
  },
  {
   "server": 1287,
   "family": "Koolkidsklan",
   "power": 135726417
  },
  {
   "server": 1287,
   "family": "Vigilantes",
   "power": 133417964
  },
  {
   "server": 1288,
   "family": "CHAMPIONS",
   "power": 1168337179
  },
  {
   "server": 1288,
   "family": "GardenFungus",
   "power": 753821999
  },
  {
   "server": 1288,
   "family": "CHAMPS2",
   "power": 503971106
  },
  {
   "server": 1288,
   "family": "Illustrious",
   "power": 224113188
  },
  {
   "server": 1288,
   "family": "PlagueDoctors",
   "power": 182207973
  },
  {
   "server": 1288,
   "family": "DenverREC",
   "power": 151297154
  },
  {
   "server": 1288,
   "family": "ÐRĒĄMĒRZ",
   "power": 141344213
  },
  {
   "server": 1288,
   "family": "Shroomies",
   "power": 116610103
  },
  {
   "server": 1288,
   "family": "Stonedcold",
   "power": 115285691
  },
  {
   "server": 1288,
   "family": "N1c",
   "power": 111886961
  },
  {
   "server": 1289,
   "family": "ShadowFist",
   "power": 1041941287
  },
  {
   "server": 1289,
   "family": "ChaoticOrder",
   "power": 451157208
  },
  {
   "server": 1289,
   "family": "DragonSlayer",
   "power": 340356166
  },
  {
   "server": 1289,
   "family": "ChaoticSlayers",
   "power": 215364802
  },
  {
   "server": 1289,
   "family": "ThePack",
   "power": 208928263
  },
  {
   "server": 1289,
   "family": "Valhalla",
   "power": 169091835
  },
  {
   "server": 1289,
   "family": "BootyMunchers",
   "power": 166067616
  },
  {
   "server": 1289,
   "family": "Gerbur",
   "power": 152374453
  },
  {
   "server": 1289,
   "family": "Pookie",
   "power": 126397433
  },
  {
   "server": 1289,
   "family": "Kittyfam",
   "power": 125902585
  },
  {
   "server": 1290,
   "family": "FreakShrooms",
   "power": 1137964819
  },
  {
   "server": 1290,
   "family": "ESPADA",
   "power": 695802918
  },
  {
   "server": 1290,
   "family": "Reapers",
   "power": 556232087
  },
  {
   "server": 1290,
   "family": "RoyalFamily",
   "power": 195553505
  },
  {
   "server": 1290,
   "family": "Clowns",
   "power": 192450692
  },
  {
   "server": 1290,
   "family": "SocialAnxiety",
   "power": 189580125
  },
  {
   "server": 1290,
   "family": "Inizio",
   "power": 185745543
  },
  {
   "server": 1290,
   "family": "MortalCombat",
   "power": 171423922
  },
  {
   "server": 1290,
   "family": "Mushrooms",
   "power": 167896192
  },
  {
   "server": 1290,
   "family": "Eclipse",
   "power": 162166100
  },
  {
   "server": 1291,
   "family": "Immortals",
   "power": 1014078104
  },
  {
   "server": 1291,
   "family": "Shittalkies",
   "power": 946202345
  },
  {
   "server": 1291,
   "family": "Brakilaz",
   "power": 316317877
  },
  {
   "server": 1291,
   "family": "RIZZOPOLY",
   "power": 187562119
  },
  {
   "server": 1291,
   "family": "Purgatory",
   "power": 178918586
  },
  {
   "server": 1291,
   "family": "SoulSociety",
   "power": 172020746
  },
  {
   "server": 1291,
   "family": "ELITE",
   "power": 159848117
  },
  {
   "server": 1291,
   "family": "Hunter",
   "power": 145957672
  },
  {
   "server": 1291,
   "family": "HellzGate",
   "power": 123232955
  },
  {
   "server": 1291,
   "family": "Phoenix420",
   "power": 119368852
  },
  {
   "server": 1292,
   "family": "Phoenix",
   "power": 1128027886
  },
  {
   "server": 1292,
   "family": "Phoenix_Down",
   "power": 584536929
  },
  {
   "server": 1292,
   "family": "AllStars",
   "power": 316706961
  },
  {
   "server": 1292,
   "family": "MUSHSUPREMACY",
   "power": 199128271
  },
  {
   "server": 1292,
   "family": "Misfits",
   "power": 188801409
  },
  {
   "server": 1292,
   "family": "Nilderwess",
   "power": 170166208
  },
  {
   "server": 1292,
   "family": "crank40s",
   "power": 155950510
  },
  {
   "server": 1292,
   "family": "Shatter",
   "power": 136170767
  },
  {
   "server": 1292,
   "family": "BakedLettuce",
   "power": 135829250
  },
  {
   "server": 1292,
   "family": "Chevelure",
   "power": 129012218
  },
  {
   "server": 1293,
   "family": "Eternal",
   "power": 1102602756
  },
  {
   "server": 1293,
   "family": "Ares",
   "power": 622549182
  },
  {
   "server": 1293,
   "family": "Avirus",
   "power": 430354376
  },
  {
   "server": 1293,
   "family": "haters",
   "power": 190863172
  },
  {
   "server": 1293,
   "family": "ShroomKNGDM",
   "power": 177331803
  },
  {
   "server": 1293,
   "family": "Shroomengers",
   "power": 177325741
  },
  {
   "server": 1293,
   "family": "Koolkidsklub",
   "power": 170773853
  },
  {
   "server": 1293,
   "family": "onePiece",
   "power": 159856480
  },
  {
   "server": 1293,
   "family": "Shroomies",
   "power": 144118621
  },
  {
   "server": 1293,
   "family": "ForgettaShroom",
   "power": 116947887
  },
  {
   "server": 1294,
   "family": "TwoThieves",
   "power": 1135367998
  },
  {
   "server": 1294,
   "family": "Divinity",
   "power": 751569370
  },
  {
   "server": 1294,
   "family": "WhiteLotus",
   "power": 500570704
  },
  {
   "server": 1294,
   "family": "Gremlins",
   "power": 192940463
  },
  {
   "server": 1294,
   "family": "TheLampRubbers",
   "power": 184593272
  },
  {
   "server": 1294,
   "family": "ShroomArmy",
   "power": 169609505
  },
  {
   "server": 1294,
   "family": "珠莠术",
   "power": 125945590
  },
  {
   "server": 1294,
   "family": "Villian",
   "power": 124967434
  },
  {
   "server": 1294,
   "family": "Shroomkingdom",
   "power": 111437164
  },
  {
   "server": 1294,
   "family": "BlueSrooms",
   "power": 103087788
  },
  {
   "server": 1295,
   "family": "dumplings",
   "power": 1062550892
  },
  {
   "server": 1295,
   "family": "FungusAmongUs",
   "power": 392453637
  },
  {
   "server": 1295,
   "family": "mushrooms",
   "power": 229293945
  },
  {
   "server": 1295,
   "family": "BloodLegacy",
   "power": 171704309
  },
  {
   "server": 1295,
   "family": "Psilocybin",
   "power": 171651752
  },
  {
   "server": 1295,
   "family": "HellDivers",
   "power": 162465711
  },
  {
   "server": 1295,
   "family": "Strongwolf",
   "power": 160599335
  },
  {
   "server": 1295,
   "family": "NEWBIE",
   "power": 156708268
  },
  {
   "server": 1295,
   "family": "Shroomsters",
   "power": 130740696
  },
  {
   "server": 1295,
   "family": "ₘycₑₗᵢᵤₘ",
   "power": 125735857
  },
  {
   "server": 1296,
   "family": "bloodhoney",
   "power": 1085148923
  },
  {
   "server": 1296,
   "family": "ShroomLand",
   "power": 491324879
  },
  {
   "server": 1296,
   "family": "BlueCaps",
   "power": 348030688
  },
  {
   "server": 1296,
   "family": "PowerShroom",
   "power": 266156788
  },
  {
   "server": 1296,
   "family": "All_For_One",
   "power": 190109721
  },
  {
   "server": 1296,
   "family": "Checkmate",
   "power": 134508451
  },
  {
   "server": 1296,
   "family": "kightsofmush",
   "power": 133388928
  },
  {
   "server": 1296,
   "family": "Meep",
   "power": 121363658
  },
  {
   "server": 1296,
   "family": "POWA",
   "power": 121171157
  },
  {
   "server": 1296,
   "family": "checkmaster",
   "power": 100213771
  },
  {
   "server": 1297,
   "family": "TheForest",
   "power": 1096918879
  },
  {
   "server": 1297,
   "family": "RedLotus",
   "power": 382485778
  },
  {
   "server": 1297,
   "family": "DSM",
   "power": 294518153
  },
  {
   "server": 1297,
   "family": "HiddenLeaf",
   "power": 138272721
  },
  {
   "server": 1297,
   "family": "MoB",
   "power": 134381234
  },
  {
   "server": 1297,
   "family": "Asgard",
   "power": 129807780
  },
  {
   "server": 1297,
   "family": "Theriley",
   "power": 124482012
  },
  {
   "server": 1297,
   "family": "Türkiye",
   "power": 123757319
  },
  {
   "server": 1297,
   "family": "GODS",
   "power": 111177142
  },
  {
   "server": 1297,
   "family": "ForestsShadow",
   "power": 109965236
  },
  {
   "server": 1298,
   "family": "MoonLight",
   "power": 992689752
  },
  {
   "server": 1298,
   "family": "OriginalSins",
   "power": 939632048
  },
  {
   "server": 1298,
   "family": "WallyWorld",
   "power": 326451633
  },
  {
   "server": 1298,
   "family": "FunGuys",
   "power": 171621994
  },
  {
   "server": 1298,
   "family": "Akatsuki°W",
   "power": 142198539
  },
  {
   "server": 1298,
   "family": "UnoriginalSins",
   "power": 124133831
  },
  {
   "server": 1298,
   "family": "Minty",
   "power": 105884119
  },
  {
   "server": 1298,
   "family": "xXxstarmoonxXx",
   "power": 98152697
  },
  {
   "server": 1298,
   "family": "Crystic",
   "power": 85293680
  },
  {
   "server": 1298,
   "family": "Chamil",
   "power": 84501905
  },
  {
   "server": 1299,
   "family": "Embrace",
   "power": 1063275741
  },
  {
   "server": 1299,
   "family": "Immortalz",
   "power": 737190029
  },
  {
   "server": 1299,
   "family": "GodClan",
   "power": 379098486
  },
  {
   "server": 1299,
   "family": "ColdPhalanges",
   "power": 149676941
  },
  {
   "server": 1299,
   "family": "wewinlosers",
   "power": 142547170
  },
  {
   "server": 1299,
   "family": "RebelWolves",
   "power": 121188563
  },
  {
   "server": 1299,
   "family": "Underbelly",
   "power": 109934661
  },
  {
   "server": 1299,
   "family": "balancebreaker",
   "power": 108259267
  },
  {
   "server": 1299,
   "family": "Lifestyle",
   "power": 99356766
  },
  {
   "server": 1299,
   "family": "hifamily",
   "power": 87970577
  },
  {
   "server": 1300,
   "family": "Shroomin",
   "power": 1099294648
  },
  {
   "server": 1300,
   "family": "bored",
   "power": 582444652
  },
  {
   "server": 1300,
   "family": "GUILDLESS",
   "power": 403344142
  },
  {
   "server": 1300,
   "family": "SHROOMERS",
   "power": 155959614
  },
  {
   "server": 1300,
   "family": "GHOSTFACE",
   "power": 152097563
  },
  {
   "server": 1300,
   "family": "DeviousOnes",
   "power": 124298776
  },
  {
   "server": 1300,
   "family": "Reverie",
   "power": 122678897
  },
  {
   "server": 1300,
   "family": "Sakeshroom",
   "power": 120782185
  },
  {
   "server": 1300,
   "family": "VeiledLady",
   "power": 114064119
  },
  {
   "server": 1300,
   "family": "Ghost",
   "power": 113032663
  },
  {
   "server": 1301,
   "family": "Arise",
   "power": 917574856
  },
  {
   "server": 1301,
   "family": "Fairytail",
   "power": 912137685
  },
  {
   "server": 1301,
   "family": "Eternal",
   "power": 295552221
  },
  {
   "server": 1301,
   "family": "BUFFSHROOMS",
   "power": 189074455
  },
  {
   "server": 1301,
   "family": "Lemonwing",
   "power": 174846933
  },
  {
   "server": 1301,
   "family": "Atlantis",
   "power": 169997549
  },
  {
   "server": 1301,
   "family": "Omnia",
   "power": 159287446
  },
  {
   "server": 1301,
   "family": "VikingPrevails",
   "power": 146988927
  },
  {
   "server": 1301,
   "family": "Mushkingdom",
   "power": 124422960
  },
  {
   "server": 1301,
   "family": "PoisonShrooms",
   "power": 110823304
  },
  {
   "server": 1302,
   "family": "EternalBW",
   "power": 1059876167
  },
  {
   "server": 1302,
   "family": "Deathking",
   "power": 347074607
  },
  {
   "server": 1302,
   "family": "TokyoManjiGang",
   "power": 315101828
  },
  {
   "server": 1302,
   "family": "0verlordz",
   "power": 165214517
  },
  {
   "server": 1302,
   "family": "Tips",
   "power": 156054587
  },
  {
   "server": 1302,
   "family": "SubZero",
   "power": 151989020
  },
  {
   "server": 1302,
   "family": "AtomicShrooms",
   "power": 138135045
  },
  {
   "server": 1302,
   "family": "Alcateia",
   "power": 127688212
  },
  {
   "server": 1302,
   "family": "ReLegacy",
   "power": 121068224
  },
  {
   "server": 1302,
   "family": "EternallyOM",
   "power": 120013925
  },
  {
   "server": 1303,
   "family": "JadePalace",
   "power": 1055644115
  },
  {
   "server": 1303,
   "family": "DeusVult",
   "power": 470351645
  },
  {
   "server": 1303,
   "family": "OdanEmpire",
   "power": 346519224
  },
  {
   "server": 1303,
   "family": "Starshroom",
   "power": 150993785
  },
  {
   "server": 1303,
   "family": "Walkingdead",
   "power": 144123169
  },
  {
   "server": 1303,
   "family": "Ashy",
   "power": 141450337
  },
  {
   "server": 1303,
   "family": "Mycelium",
   "power": 128455755
  },
  {
   "server": 1303,
   "family": "CursedFamily",
   "power": 115505280
  },
  {
   "server": 1303,
   "family": "Pikachu",
   "power": 110764376
  },
  {
   "server": 1303,
   "family": "EqùallyBād",
   "power": 92400904
  },
  {
   "server": 1304,
   "family": "TheMovingCstle",
   "power": 828862019
  },
  {
   "server": 1304,
   "family": "Siege",
   "power": 698478455
  },
  {
   "server": 1304,
   "family": "Void",
   "power": 220228858
  },
  {
   "server": 1304,
   "family": "GoldenHope",
   "power": 154230566
  },
  {
   "server": 1304,
   "family": "TheStrawHats",
   "power": 138790670
  },
  {
   "server": 1304,
   "family": "Death",
   "power": 131761376
  },
  {
   "server": 1304,
   "family": "MushyBois",
   "power": 121833437
  },
  {
   "server": 1304,
   "family": "Shroomz",
   "power": 120006682
  },
  {
   "server": 1304,
   "family": "DoomShroom",
   "power": 114803910
  },
  {
   "server": 1304,
   "family": "candyland",
   "power": 108891629
  },
  {
   "server": 1305,
   "family": "Predators",
   "power": 1008652757
  },
  {
   "server": 1305,
   "family": "EmberFall",
   "power": 383517507
  },
  {
   "server": 1305,
   "family": "RN_United",
   "power": 304655378
  },
  {
   "server": 1305,
   "family": "Shroomie",
   "power": 195314217
  },
  {
   "server": 1305,
   "family": "familiaMdZ",
   "power": 153908835
  },
  {
   "server": 1305,
   "family": "StrixShroomies",
   "power": 145504126
  },
  {
   "server": 1305,
   "family": "WolfDen",
   "power": 145262738
  },
  {
   "server": 1305,
   "family": "DarkAngels",
   "power": 122180811
  },
  {
   "server": 1305,
   "family": "HELL",
   "power": 106066836
  },
  {
   "server": 1305,
   "family": "kliftted",
   "power": 95268160
  },
  {
   "server": 1306,
   "family": "TrippingBalls",
   "power": 841959914
  },
  {
   "server": 1306,
   "family": "Purgatory",
   "power": 763657391
  },
  {
   "server": 1306,
   "family": "Psychedelic",
   "power": 310299606
  },
  {
   "server": 1306,
   "family": "section8",
   "power": 140167823
  },
  {
   "server": 1306,
   "family": "Canadaeh",
   "power": 125235842
  },
  {
   "server": 1306,
   "family": "Legends",
   "power": 113199143
  },
  {
   "server": 1306,
   "family": "INSTANTDEATH",
   "power": 113104856
  },
  {
   "server": 1306,
   "family": "Whoville",
   "power": 90948844
  },
  {
   "server": 1306,
   "family": "Ritzs",
   "power": 88386671
  },
  {
   "server": 1306,
   "family": "Ryujin",
   "power": 85868214
  },
  {
   "server": 1307,
   "family": "RoyalShrooms",
   "power": 853850275
  },
  {
   "server": 1307,
   "family": "SilverMoon",
   "power": 731692408
  },
  {
   "server": 1307,
   "family": "Fungis",
   "power": 279311266
  },
  {
   "server": 1307,
   "family": "WolfPack",
   "power": 159379319
  },
  {
   "server": 1307,
   "family": "DAPPOLOGP",
   "power": 127729078
  },
  {
   "server": 1307,
   "family": "SlimeFamily",
   "power": 121144811
  },
  {
   "server": 1307,
   "family": "WompWomp",
   "power": 116078006
  },
  {
   "server": 1307,
   "family": "Olympus",
   "power": 114346075
  },
  {
   "server": 1307,
   "family": "ShroomRejectz",
   "power": 113515621
  },
  {
   "server": 1307,
   "family": "Paradox",
   "power": 112740539
  },
  {
   "server": 1308,
   "family": "Anteiku",
   "power": 906851259
  },
  {
   "server": 1308,
   "family": "Legends",
   "power": 382621898
  },
  {
   "server": 1308,
   "family": "stonerbros",
   "power": 337344026
  },
  {
   "server": 1308,
   "family": "KiNGS",
   "power": 153432115
  },
  {
   "server": 1308,
   "family": "Moth",
   "power": 135863243
  },
  {
   "server": 1308,
   "family": "HellDivers",
   "power": 129478059
  },
  {
   "server": 1308,
   "family": "femboys",
   "power": 128833427
  },
  {
   "server": 1308,
   "family": "Neverwinter",
   "power": 120850507
  },
  {
   "server": 1308,
   "family": "USA",
   "power": 120288141
  },
  {
   "server": 1308,
   "family": "BNRS",
   "power": 118452360
  },
  {
   "server": 1309,
   "family": "BlackRose",
   "power": 896530811
  },
  {
   "server": 1309,
   "family": "Southpark",
   "power": 437962505
  },
  {
   "server": 1309,
   "family": "ApexShroomies",
   "power": 312050851
  },
  {
   "server": 1309,
   "family": "ShroomSquad",
   "power": 124674815
  },
  {
   "server": 1309,
   "family": "Apocalipse",
   "power": 117608245
  },
  {
   "server": 1309,
   "family": "SerpentsBallad",
   "power": 112606886
  },
  {
   "server": 1309,
   "family": "AFungus",
   "power": 112234055
  },
  {
   "server": 1309,
   "family": "Justbored",
   "power": 102583436
  },
  {
   "server": 1309,
   "family": "Salty",
   "power": 99636465
  },
  {
   "server": 1309,
   "family": "TheRedNotice",
   "power": 86687793
  },
  {
   "server": 1310,
   "family": "JENOVA",
   "power": 993824266
  },
  {
   "server": 1310,
   "family": "StrawHats",
   "power": 357029136
  },
  {
   "server": 1310,
   "family": "Karuteru",
   "power": 291721358
  },
  {
   "server": 1310,
   "family": "Sanctum",
   "power": 130414462
  },
  {
   "server": 1310,
   "family": "AUXILIARY",
   "power": 127681192
  },
  {
   "server": 1310,
   "family": "ShroomGang",
   "power": 109218631
  },
  {
   "server": 1310,
   "family": "Devotion",
   "power": 104619105
  },
  {
   "server": 1310,
   "family": "ButtPirates",
   "power": 104193690
  },
  {
   "server": 1310,
   "family": "DarkWraiths",
   "power": 100160064
  },
  {
   "server": 1310,
   "family": "Eternal",
   "power": 83551119
  },
  {
   "server": 1311,
   "family": "Purgatory",
   "power": 831601969
  },
  {
   "server": 1311,
   "family": "SoloLevelers",
   "power": 404255939
  },
  {
   "server": 1311,
   "family": "Foundation",
   "power": 300189666
  },
  {
   "server": 1311,
   "family": "Goonsquad",
   "power": 116040663
  },
  {
   "server": 1311,
   "family": "Xclusive",
   "power": 111071651
  },
  {
   "server": 1311,
   "family": "Sharkman",
   "power": 109250473
  },
  {
   "server": 1311,
   "family": "RedDawnSqaud",
   "power": 104910419
  },
  {
   "server": 1311,
   "family": "Hahahahahahaha",
   "power": 95930504
  },
  {
   "server": 1311,
   "family": "yolo",
   "power": 80798055
  },
  {
   "server": 1311,
   "family": "ShroomiePros",
   "power": 72006035
  },
  {
   "server": 1312,
   "family": "Misfits",
   "power": 690725820
  },
  {
   "server": 1312,
   "family": "Shiitake",
   "power": 690131256
  },
  {
   "server": 1312,
   "family": "420lanez",
   "power": 438162684
  },
  {
   "server": 1312,
   "family": "Rebels",
   "power": 102724578
  },
  {
   "server": 1312,
   "family": "crusaders",
   "power": 101163874
  },
  {
   "server": 1312,
   "family": "Caffeine",
   "power": 91402729
  },
  {
   "server": 1312,
   "family": "GetB8kd",
   "power": 79323908
  },
  {
   "server": 1312,
   "family": "F2P",
   "power": 70605650
  },
  {
   "server": 1312,
   "family": "Arise",
   "power": 64575119
  },
  {
   "server": 1312,
   "family": "1Cent",
   "power": 62367178
  },
  {
   "server": 1313,
   "family": "HomiesUnited",
   "power": 691082596
  },
  {
   "server": 1313,
   "family": "Labyrinth",
   "power": 643437532
  },
  {
   "server": 1313,
   "family": "DEEZ",
   "power": 577145891
  },
  {
   "server": 1313,
   "family": "FurBabies",
   "power": 138244371
  },
  {
   "server": 1313,
   "family": "Infamous",
   "power": 110250275
  },
  {
   "server": 1313,
   "family": "R6discord",
   "power": 90567283
  },
  {
   "server": 1313,
   "family": "Legion",
   "power": 81006495
  },
  {
   "server": 1313,
   "family": "Wargoth",
   "power": 77672435
  },
  {
   "server": 1313,
   "family": "Idol",
   "power": 75354443
  },
  {
   "server": 1313,
   "family": "Supertroopers",
   "power": 67827852
  },
  {
   "server": 1314,
   "family": "DIVINE",
   "power": 808668161
  },
  {
   "server": 1314,
   "family": "Genesis",
   "power": 457429726
  },
  {
   "server": 1314,
   "family": "MushClub",
   "power": 320327717
  },
  {
   "server": 1314,
   "family": "GodOfSnoot",
   "power": 118760577
  },
  {
   "server": 1314,
   "family": "ShadeMaster",
   "power": 102686043
  },
  {
   "server": 1314,
   "family": "DevilsRejects",
   "power": 91268703
  },
  {
   "server": 1314,
   "family": "TheCottage",
   "power": 87366512
  },
  {
   "server": 1314,
   "family": "FriendlyGhosts",
   "power": 67075949
  },
  {
   "server": 1314,
   "family": "TKOFM",
   "power": 63347327
  },
  {
   "server": 1314,
   "family": "Heartris",
   "power": 61658865
  },
  {
   "server": 1315,
   "family": "MyceliumMaster",
   "power": 845998754
  },
  {
   "server": 1315,
   "family": "AllOrNothing",
   "power": 398130317
  },
  {
   "server": 1315,
   "family": "MushCats",
   "power": 261520017
  },
  {
   "server": 1315,
   "family": "Mar1oLo1",
   "power": 90901834
  },
  {
   "server": 1315,
   "family": "Blizzard",
   "power": 86281615
  },
  {
   "server": 1315,
   "family": "Taco_Clan",
   "power": 68229930
  },
  {
   "server": 1315,
   "family": "SHROOMS",
   "power": 67814579
  },
  {
   "server": 1315,
   "family": "PartyofBanter",
   "power": 66392813
  },
  {
   "server": 1315,
   "family": "Protectors",
   "power": 62148401
  },
  {
   "server": 1315,
   "family": "Warriors",
   "power": 58807249
  },
  {
   "server": 1316,
   "family": "PURGATORY",
   "power": 651352015
  },
  {
   "server": 1316,
   "family": "Kaijus",
   "power": 498706046
  },
  {
   "server": 1316,
   "family": "SERENITY",
   "power": 436048488
  },
  {
   "server": 1316,
   "family": "Prodigy",
   "power": 80088731
  },
  {
   "server": 1316,
   "family": "Fartdragons",
   "power": 74145883
  },
  {
   "server": 1316,
   "family": "Death_Blight",
   "power": 67385922
  },
  {
   "server": 1316,
   "family": "Yggdrasil",
   "power": 62769738
  },
  {
   "server": 1316,
   "family": "Anime",
   "power": 62262457
  },
  {
   "server": 1316,
   "family": "Defenders",
   "power": 58625754
  },
  {
   "server": 1316,
   "family": "ToBeUnKnow",
   "power": 58319766
  },
  {
   "server": 1317,
   "family": "ROYALTY",
   "power": 797451384
  },
  {
   "server": 1317,
   "family": "Reapers",
   "power": 328104955
  },
  {
   "server": 1317,
   "family": "ShroomLords",
   "power": 254684208
  },
  {
   "server": 1317,
   "family": "Wassup",
   "power": 89741575
  },
  {
   "server": 1317,
   "family": "HeadHunters",
   "power": 88963896
  },
  {
   "server": 1317,
   "family": "Stoners",
   "power": 79717187
  },
  {
   "server": 1317,
   "family": "Shroomers",
   "power": 78244745
  },
  {
   "server": 1317,
   "family": "EZ",
   "power": 77895474
  },
  {
   "server": 1317,
   "family": "Slayers",
   "power": 63675866
  },
  {
   "server": 1317,
   "family": "Lightness",
   "power": 56490534
  },
  {
   "server": 1319,
   "family": "🜲TinyMushGang",
   "power": 770399683
  },
  {
   "server": 1319,
   "family": "PrisonBreakers",
   "power": 340865136
  },
  {
   "server": 1319,
   "family": "Lamp",
   "power": 264799173
  },
  {
   "server": 1319,
   "family": "TOAST",
   "power": 66010607
  },
  {
   "server": 1319,
   "family": "CrockOfShitake",
   "power": 65377201
  },
  {
   "server": 1319,
   "family": "TruffleTribe",
   "power": 64474396
  },
  {
   "server": 1319,
   "family": "MiFamilia",
   "power": 64468282
  },
  {
   "server": 1319,
   "family": "BLASPHEMY",
   "power": 60479619
  },
  {
   "server": 1319,
   "family": "Lovethefam",
   "power": 56597363
  },
  {
   "server": 1319,
   "family": "cool_kats",
   "power": 50581047
  },
  {
   "server": 1320,
   "family": "ROYALTY",
   "power": 725425530
  },
  {
   "server": 1320,
   "family": "Wildcard",
   "power": 241978307
  },
  {
   "server": 1320,
   "family": "Prodigy",
   "power": 157951978
  },
  {
   "server": 1320,
   "family": "DirtNap",
   "power": 90224167
  },
  {
   "server": 1320,
   "family": "ShroomKnights",
   "power": 73732167
  },
  {
   "server": 1320,
   "family": "mooshiee",
   "power": 68757365
  },
  {
   "server": 1320,
   "family": "GloomyShroomy",
   "power": 67331074
  },
  {
   "server": 1320,
   "family": "Idiots",
   "power": 57176820
  },
  {
   "server": 1320,
   "family": "BarbiexKen",
   "power": 57060704
  },
  {
   "server": 1320,
   "family": "Khazâdgathol",
   "power": 53466301
  },
  {
   "server": 1323,
   "family": "Void",
   "power": 715238636
  },
  {
   "server": 1323,
   "family": "CastleintheSky",
   "power": 257775083
  },
  {
   "server": 1323,
   "family": "finnablow",
   "power": 148701128
  },
  {
   "server": 1323,
   "family": "Frost",
   "power": 0
  },
  {
   "server": 1323,
   "family": "DarkAngels",
   "power": 0
  },
  {
   "server": 1323,
   "family": "Loveducks",
   "power": 0
  },
  {
   "server": 1323,
   "family": "TekShroom",
   "power": 0
  },
  {
   "server": 1323,
   "family": "pokisfeet",
   "power": 0
  },
  {
   "server": 1323,
   "family": "Walmart5929",
   "power": 0
  },
  {
   "server": 1323,
   "family": "THICKSHROOMIE",
   "power": 0
  },
  {
   "server": 1324,
   "family": "Eternal",
   "power": 192742964
  },
  {
   "server": 1324,
   "family": "ONLYSHROOMS",
   "power": 190588189
  },
  {
   "server": 1324,
   "family": "Atomic",
   "power": 140210533
  },
  {
   "server": 1324,
   "family": "StrawHats",
   "power": 0
  },
  {
   "server": 1324,
   "family": "lordox",
   "power": 0
  },
  {
   "server": 1324,
   "family": "Valhalla",
   "power": 0
  },
  {
   "server": 1324,
   "family": "Brawlstars",
   "power": 0
  },
  {
   "server": 1324,
   "family": "leer",
   "power": 0
  },
  {
   "server": 1324,
   "family": "AnimeWeebs",
   "power": 0
  },
  {
   "server": 1324,
   "family": "Murface",
   "power": 0
  },
  {
   "server": 1325,
   "family": "Halloween",
   "power": 611172419
  },
  {
   "server": 1325,
   "family": "dontsleep",
   "power": 206456171
  },
  {
   "server": 1325,
   "family": "Tempest",
   "power": 159139073
  },
  {
   "server": 1325,
   "family": "CaveOfCummies",
   "power": 0
  },
  {
   "server": 1325,
   "family": "Quack",
   "power": 0
  },
  {
   "server": 1325,
   "family": "Nuggets",
   "power": 0
  },
  {
   "server": 1325,
   "family": "y",
   "power": 0
  },
  {
   "server": 1325,
   "family": "42O",
   "power": 0
  },
  {
   "server": 1325,
   "family": "idkbored",
   "power": 0
  },
  {
   "server": 1325,
   "family": "Ogrebuddy",
   "power": 0
  },
  {
   "server": 1326,
   "family": "Cougarcallers",
   "power": 165450211
  },
  {
   "server": 1326,
   "family": "relikias",
   "power": 146333540
  },
  {
   "server": 1326,
   "family": "THEREALGODS",
   "power": 128029046
  },
  {
   "server": 1326,
   "family": "Glorious",
   "power": 0
  },
  {
   "server": 1326,
   "family": "OpiumHQ",
   "power": 0
  },
  {
   "server": 1326,
   "family": "UniversalLove",
   "power": 0
  },
  {
   "server": 1326,
   "family": "We’re_FRIED",
   "power": 0
  },
  {
   "server": 1326,
   "family": "SmartFellas",
   "power": 0
  },
  {
   "server": 1326,
   "family": "FJB",
   "power": 0
  },
  {
   "server": 1326,
   "family": "cosmohoes",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Ahjin",
   "power": 487185032
  },
  {
   "server": 1327,
   "family": "Millenium",
   "power": 144762999
  },
  {
   "server": 1327,
   "family": "Synthesis",
   "power": 131023842
  },
  {
   "server": 1327,
   "family": "MINENOTYOURS",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Shiitake",
   "power": 0
  },
  {
   "server": 1327,
   "family": "JuggaloFamily",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Thepicboss",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Royalty",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Hallucinogenic",
   "power": 0
  },
  {
   "server": 1327,
   "family": "Sad",
   "power": 0
  },
  {
   "server": 1328,
   "family": "Valkyrie",
   "power": 220660802
  },
  {
   "server": 1328,
   "family": "Valhalla",
   "power": 136671773
  },
  {
   "server": 1328,
   "family": "NewJeans",
   "power": 105323192
  },
  {
   "server": 1328,
   "family": "Blaze",
   "power": 0
  },
  {
   "server": 1328,
   "family": "ShroomKru",
   "power": 0
  },
  {
   "server": 1328,
   "family": "Twice",
   "power": 0
  },
  {
   "server": 1328,
   "family": "DemonSlayers",
   "power": 0
  },
  {
   "server": 1328,
   "family": "Derp",
   "power": 0
  },
  {
   "server": 1328,
   "family": "FungiPalace",
   "power": 0
  },
  {
   "server": 1328,
   "family": "hi",
   "power": 0
  },
  {
   "server": 1329,
   "family": "Nova",
   "power": 452997154
  },
  {
   "server": 1329,
   "family": "gigashroom",
   "power": 429632239
  },
  {
   "server": 1329,
   "family": "SEVENDEADLYSIN",
   "power": 113893338
  },
  {
   "server": 1329,
   "family": "Sonic",
   "power": 0
  },
  {
   "server": 1329,
   "family": "TheFam",
   "power": 0
  },
  {
   "server": 1329,
   "family": "CoffeeSloots",
   "power": 0
  },
  {
   "server": 1329,
   "family": "soulsociety",
   "power": 0
  },
  {
   "server": 1329,
   "family": "vets",
   "power": 0
  },
  {
   "server": 1329,
   "family": "Belu_Squad",
   "power": 0
  },
  {
   "server": 1329,
   "family": "nothankyou",
   "power": 0
  },
  {
   "server": 1330,
   "family": "LEGION",
   "power": 354457637
  },
  {
   "server": 1330,
   "family": "Skyrim",
   "power": 151014258
  },
  {
   "server": 1330,
   "family": "Valhalla",
   "power": 115081261
  },
  {
   "server": 1330,
   "family": "NotDizzy",
   "power": 0
  },
  {
   "server": 1330,
   "family": "StarFall",
   "power": 0
  },
  {
   "server": 1330,
   "family": "JuraTempest",
   "power": 0
  },
  {
   "server": 1330,
   "family": "Rivia",
   "power": 0
  },
  {
   "server": 1330,
   "family": "LeTsunami",
   "power": 0
  },
  {
   "server": 1330,
   "family": "Fartsalot67",
   "power": 0
  },
  {
   "server": 1330,
   "family": "SoupStore",
   "power": 0
  },
  {
   "server": 1331,
   "family": "Void",
   "power": 478141180
  },
  {
   "server": 1331,
   "family": "Draggos",
   "power": 133034498
  },
  {
   "server": 1331,
   "family": "DoomShrooms",
   "power": 120304005
  },
  {
   "server": 1331,
   "family": "LostArcanium",
   "power": 0
  },
  {
   "server": 1331,
   "family": "Pappa_Johns",
   "power": 0
  },
  {
   "server": 1331,
   "family": "ThePepe’s",
   "power": 0
  },
  {
   "server": 1331,
   "family": "shrooms",
   "power": 0
  },
  {
   "server": 1331,
   "family": "Elysia",
   "power": 0
  },
  {
   "server": 1331,
   "family": "ᴛᴇᴍᴘᴇsᴛ",
   "power": 0
  },
  {
   "server": 1331,
   "family": "Dragons",
   "power": 0
  },
  {
   "server": 1332,
   "family": "TheMafia",
   "power": 417445231
  },
  {
   "server": 1332,
   "family": "Anxishrooms",
   "power": 209691376
  },
  {
   "server": 1332,
   "family": "Shroomies",
   "power": 157680208
  },
  {
   "server": 1332,
   "family": "Yggdrasil",
   "power": 0
  },
  {
   "server": 1332,
   "family": "monkeys",
   "power": 0
  },
  {
   "server": 1332,
   "family": "Ye_big_boys",
   "power": 0
  },
  {
   "server": 1332,
   "family": "ClanCochrane",
   "power": 0
  },
  {
   "server": 1332,
   "family": "Kitty",
   "power": 0
  },
  {
   "server": 1332,
   "family": "eclipse",
   "power": 0
  },
  {
   "server": 1332,
   "family": "Dream",
   "power": 0
  },
  {
   "server": 1333,
   "family": "Destructors",
   "power": 151242714
  },
  {
   "server": 1333,
   "family": "DemiGlory",
   "power": 107357788
  },
  {
   "server": 1333,
   "family": "Ahjin",
   "power": 66052295
  },
  {
   "server": 1333,
   "family": "capybaras",
   "power": 0
  },
  {
   "server": 1333,
   "family": "Valhalla",
   "power": 0
  },
  {
   "server": 1333,
   "family": "Sagebloom",
   "power": 0
  },
  {
   "server": 1333,
   "family": "SocietyDecode",
   "power": 0
  },
  {
   "server": 1333,
   "family": "Rizzy",
   "power": 0
  },
  {
   "server": 1333,
   "family": "Qct",
   "power": 0
  },
  {
   "server": 1333,
   "family": "tnation",
   "power": 0
  },
  {
   "server": 1334,
   "family": "Shroomy",
   "power": 132163384
  },
  {
   "server": 1334,
   "family": "BREAD",
   "power": 130384056
  },
  {
   "server": 1334,
   "family": "Kaos",
   "power": 98578956
  },
  {
   "server": 1334,
   "family": "hiddenleaf",
   "power": 0
  },
  {
   "server": 1334,
   "family": "shrooms",
   "power": 0
  },
  {
   "server": 1334,
   "family": "CalamityofSoul",
   "power": 0
  },
  {
   "server": 1334,
   "family": "FourthWing",
   "power": 0
  },
  {
   "server": 1334,
   "family": "KittyForce",
   "power": 0
  },
  {
   "server": 1334,
   "family": "SeSss",
   "power": 0
  },
  {
   "server": 1334,
   "family": "monsterdestroy",
   "power": 0
  },
  {
   "server": 1335,
   "family": "GigaShroom",
   "power": 544909456
  },
  {
   "server": 1335,
   "family": "Shroomies",
   "power": 160346829
  },
  {
   "server": 1335,
   "family": "Pizza",
   "power": 128656407
  },
  {
   "server": 1335,
   "family": "UnholyKillers",
   "power": 0
  },
  {
   "server": 1335,
   "family": "Grimreapers",
   "power": 0
  },
  {
   "server": 1335,
   "family": "greenFN",
   "power": 0
  },
  {
   "server": 1335,
   "family": "SoulTakers",
   "power": 0
  },
  {
   "server": 1335,
   "family": "TrippingShroom",
   "power": 0
  },
  {
   "server": 1335,
   "family": "MagesONTOP",
   "power": 0
  },
  {
   "server": 1335,
   "family": "noggas",
   "power": 0
  },
  {
   "server": 1336,
   "family": "bloodhoney",
   "power": 135565872
  },
  {
   "server": 1336,
   "family": "beanrz",
   "power": 104841234
  },
  {
   "server": 1336,
   "family": "Spiicy",
   "power": 103215180
  },
  {
   "server": 1336,
   "family": "Ozmosis",
   "power": 0
  },
  {
   "server": 1336,
   "family": "CaspersGhosts",
   "power": 0
  },
  {
   "server": 1336,
   "family": "Mn_on_top",
   "power": 0
  },
  {
   "server": 1336,
   "family": "Reyes",
   "power": 0
  },
  {
   "server": 1336,
   "family": "Vamp",
   "power": 0
  },
  {
   "server": 1336,
   "family": "Deliverance",
   "power": 0
  },
  {
   "server": 1336,
   "family": "FumbleburgerYT",
   "power": 0
  },
  {
   "server": 1337,
   "family": "OnlyBops",
   "power": 447826653
  },
  {
   "server": 1337,
   "family": "Murder",
   "power": 258745770
  },
  {
   "server": 1337,
   "family": "KINGS",
   "power": 113753894
  },
  {
   "server": 1337,
   "family": "Derpalicious",
   "power": 0
  },
  {
   "server": 1337,
   "family": "Drk_legion",
   "power": 0
  },
  {
   "server": 1337,
   "family": "rat",
   "power": 0
  },
  {
   "server": 1337,
   "family": "Nightwing",
   "power": 0
  },
  {
   "server": 1337,
   "family": "Hi",
   "power": 0
  },
  {
   "server": 1337,
   "family": "idkfam",
   "power": 0
  },
  {
   "server": 1337,
   "family": "KoolKidsKlub",
   "power": 0
  },
  {
   "server": 1338,
   "family": "Nightcord_N25",
   "power": 189170528
  },
  {
   "server": 1338,
   "family": "Templar_Order",
   "power": 166592928
  },
  {
   "server": 1338,
   "family": "OLIMPO",
   "power": 153560120
  },
  {
   "server": 1338,
   "family": "PandaFam",
   "power": 0
  },
  {
   "server": 1338,
   "family": "HTFUDragon",
   "power": 0
  },
  {
   "server": 1338,
   "family": "Mushroomfarm",
   "power": 0
  },
  {
   "server": 1338,
   "family": "boysonly",
   "power": 0
  },
  {
   "server": 1338,
   "family": "ConeSmokas",
   "power": 0
  },
  {
   "server": 1338,
   "family": "rapé",
   "power": 0
  },
  {
   "server": 1338,
   "family": "Jiggerboo",
   "power": 0
  },
  {
   "server": 1339,
   "family": "ElfenLiege",
   "power": 505337923
  },
  {
   "server": 1339,
   "family": "Bitches",
   "power": 113481902
  },
  {
   "server": 1339,
   "family": "Joogyland",
   "power": 96343010
  },
  {
   "server": 1339,
   "family": "OnePiece",
   "power": 0
  },
  {
   "server": 1339,
   "family": "Dfjhfdr",
   "power": 0
  },
  {
   "server": 1339,
   "family": "bellers",
   "power": 0
  },
  {
   "server": 1339,
   "family": "Mushroom",
   "power": 0
  },
  {
   "server": 1339,
   "family": "House_of_Fungi",
   "power": 0
  },
  {
   "server": 1339,
   "family": "Mine",
   "power": 0
  },
  {
   "server": 1339,
   "family": "UpTheWahs",
   "power": 0
  },
  {
   "server": 1340,
   "family": "Phoenix",
   "power": 318137490
  },
  {
   "server": 1340,
   "family": "BugzEstate",
   "power": 163530394
  },
  {
   "server": 1340,
   "family": "Gourmet",
   "power": 118944997
  },
  {
   "server": 1340,
   "family": "ETotDeR",
   "power": 0
  },
  {
   "server": 1340,
   "family": "Chicken",
   "power": 0
  },
  {
   "server": 1340,
   "family": "wompwomp",
   "power": 0
  },
  {
   "server": 1340,
   "family": "lilmeatgang",
   "power": 0
  },
  {
   "server": 1340,
   "family": "tbone",
   "power": 0
  },
  {
   "server": 1340,
   "family": "FentTakers",
   "power": 0
  },
  {
   "server": 1340,
   "family": "shroomworld",
   "power": 0
  },
  {
   "server": 1341,
   "family": "Rise",
   "power": 266677226
  },
  {
   "server": 1341,
   "family": "Ueudhudje",
   "power": 128286595
  },
  {
   "server": 1341,
   "family": "Trikru",
   "power": 108487293
  },
  {
   "server": 1341,
   "family": "Greenhome",
   "power": 0
  },
  {
   "server": 1341,
   "family": "SoloLeveling",
   "power": 0
  },
  {
   "server": 1341,
   "family": "Haven",
   "power": 0
  },
  {
   "server": 1341,
   "family": "KinitoPET",
   "power": 0
  },
  {
   "server": 1341,
   "family": "fantasyland",
   "power": 0
  },
  {
   "server": 1341,
   "family": "GamersLounge",
   "power": 0
  },
  {
   "server": 1341,
   "family": "planetofshroom",
   "power": 0
  },
  {
   "server": 1342,
   "family": "StrawHats",
   "power": 127561675
  },
  {
   "server": 1342,
   "family": "SeaMans",
   "power": 1248383
  },
  {
   "server": 1342,
   "family": "name",
   "power": 921134
  },
  {
   "server": 1342,
   "family": "Ghostz",
   "power": 0
  },
  {
   "server": 1342,
   "family": "NaBros",
   "power": 0
  },
  {
   "server": 1342,
   "family": "unwanted",
   "power": 0
  },
  {
   "server": 1342,
   "family": "GangGang",
   "power": 0
  },
  {
   "server": 1342,
   "family": "GodChildern",
   "power": 0
  },
  {
   "server": 1342,
   "family": "HEESAY",
   "power": 0
  },
  {
   "server": 1342,
   "family": "Hose",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Purgatory",
   "power": 382633655
  },
  {
   "server": 1343,
   "family": "No_Life",
   "power": 97486251
  },
  {
   "server": 1343,
   "family": "Beast",
   "power": 95521456
  },
  {
   "server": 1343,
   "family": "thegods",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Sloobers",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Ascent",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Badass",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Highfold",
   "power": 0
  },
  {
   "server": 1343,
   "family": "MapleTree",
   "power": 0
  },
  {
   "server": 1343,
   "family": "Ganja_village",
   "power": 0
  },
  {
   "server": 1349,
   "family": "SoA",
   "power": 59429899
  },
  {
   "server": 1349,
   "family": "Topgun",
   "power": 50214219
  },
  {
   "server": 1349,
   "family": "Unrivaled",
   "power": 43717712
  },
  {
   "server": 1349,
   "family": "FPYWARRIORS",
   "power": 0
  },
  {
   "server": 1349,
   "family": "Casuals",
   "power": 0
  },
  {
   "server": 1349,
   "family": "SmokinDoinks",
   "power": 0
  },
  {
   "server": 1349,
   "family": "ShroomHeads",
   "power": 0
  },
  {
   "server": 1349,
   "family": "Trevorpgaming",
   "power": 0
  },
  {
   "server": 1349,
   "family": "SYN",
   "power": 0
  },
  {
   "server": 1349,
   "family": "ShadowRealm",
   "power": 0
  },
  {
   "server": 1350,
   "family": "Empire",
   "power": 46917498
  },
  {
   "server": 1350,
   "family": "Lords",
   "power": 32835368
  },
  {
   "server": 1350,
   "family": "FROST",
   "power": 32689811
  },
  {
   "server": 1350,
   "family": "SBSC",
   "power": 0
  },
  {
   "server": 1350,
   "family": "Floggers",
   "power": 0
  },
  {
   "server": 1350,
   "family": "EternalBW",
   "power": 0
  },
  {
   "server": 1350,
   "family": "TheWetBacks",
   "power": 0
  },
  {
   "server": 1350,
   "family": "relaxedaussies",
   "power": 0
  },
  {
   "server": 1350,
   "family": "Psilocybin",
   "power": 0
  },
  {
   "server": 1350,
   "family": "PartyofBanter",
   "power": 0
  },
  {
   "server": 1351,
   "family": "FunGuys",
   "power": 60098830
  },
  {
   "server": 1351,
   "family": "MushroomGods",
   "power": 39973012
  },
  {
   "server": 1351,
   "family": "thestrangeones",
   "power": 33439408
  },
  {
   "server": 1351,
   "family": "MUSHROOMCITY",
   "power": 0
  },
  {
   "server": 1351,
   "family": "Blame",
   "power": 0
  },
  {
   "server": 1351,
   "family": "Psychedelics",
   "power": 0
  },
  {
   "server": 1351,
   "family": "Psilocybin",
   "power": 0
  },
  {
   "server": 1351,
   "family": "KingOfShrooms",
   "power": 0
  },
  {
   "server": 1351,
   "family": "Cooldudes",
   "power": 0
  },
  {
   "server": 1351,
   "family": "skullheads78",
   "power": 0
  },
  {
   "server": 1352,
   "family": "TheTavern",
   "power": 56388483
  },
  {
   "server": 1352,
   "family": "Benz",
   "power": 38689739
  },
  {
   "server": 1352,
   "family": "boarhat",
   "power": 31045793
  },
  {
   "server": 1352,
   "family": "Blue",
   "power": 0
  },
  {
   "server": 1352,
   "family": "TheChillLounge",
   "power": 0
  },
  {
   "server": 1352,
   "family": "Espada",
   "power": 0
  },
  {
   "server": 1352,
   "family": "420killers",
   "power": 0
  },
  {
   "server": 1352,
   "family": "Torment",
   "power": 0
  },
  {
   "server": 1352,
   "family": "slumericans",
   "power": 0
  },
  {
   "server": 1352,
   "family": "Shrooms",
   "power": 0
  },
  {
   "server": 1353,
   "family": "UrbanGod",
   "power": 1799710
  },
  {
   "server": 1353,
   "family": "CalamityXDeus",
   "power": 881874
  },
  {
   "server": 1353,
   "family": "Throb",
   "power": 0
  },
  {
   "server": 1353,
   "family": "KnightsOfNi",
   "power": 0
  },
  {
   "server": 1353,
   "family": "BillyBobJoe",
   "power": 0
  },
  {
   "server": 1353,
   "family": "LampRubbers",
   "power": 0
  },
  {
   "server": 1353,
   "family": "yep",
   "power": 0
  },
  {
   "server": 1353,
   "family": "Legion",
   "power": 0
  },
  {
   "server": 1353,
   "family": "Chronozst",
   "power": 0
  },
  {
   "server": 1353,
   "family": "Carebears",
   "power": 0
  },
  {
   "server": 6001,
   "family": "SoloLeveling",
   "power": 2147022643
  },
  {
   "server": 6001,
   "family": "AKATSUKI",
   "power": 1541272724
  },
  {
   "server": 6001,
   "family": "Zoológico",
   "power": 1527686081
  },
  {
   "server": 6001,
   "family": "AlienLegion",
   "power": 1380445939
  },
  {
   "server": 6001,
   "family": "LosXivatos",
   "power": 1367103214
  },
  {
   "server": 6001,
   "family": "Hispania",
   "power": 672344748
  },
  {
   "server": 6001,
   "family": "TopEspañoles",
   "power": 644927931
  },
  {
   "server": 6001,
   "family": "ChampHub",
   "power": 612700995
  },
  {
   "server": 6001,
   "family": "VivaEspaña",
   "power": 433973922
  },
  {
   "server": 6001,
   "family": "JUSTICE",
   "power": 397283685
  },
  {
   "server": 6002,
   "family": "Radiance",
   "power": 2374568018
  },
  {
   "server": 6002,
   "family": "Vortex",
   "power": 1701219915
  },
  {
   "server": 6002,
   "family": "Hispanos",
   "power": 1461368159
  },
  {
   "server": 6002,
   "family": "DarkGaliza",
   "power": 1332940422
  },
  {
   "server": 6002,
   "family": "Wz",
   "power": 530811060
  },
  {
   "server": 6002,
   "family": "GODS",
   "power": 515496022
  },
  {
   "server": 6002,
   "family": "SpainWarriors",
   "power": 390561654
  },
  {
   "server": 6002,
   "family": "ImperioEspañol",
   "power": 365167552
  },
  {
   "server": 6002,
   "family": "BoletusLegion",
   "power": 359171893
  },
  {
   "server": 6002,
   "family": "españita",
   "power": 344911754
  },
  {
   "server": 6003,
   "family": "꧁️Շѧмѯ_️θѵэя꧂",
   "power": 2035593364
  },
  {
   "server": 6003,
   "family": "ɢᴀᴍᴇʀQᴜᴇꜱᴛ",
   "power": 1326607093
  },
  {
   "server": 6003,
   "family": "Patólogos",
   "power": 1197261447
  },
  {
   "server": 6003,
   "family": "REPUDIADOS",
   "power": 510017694
  },
  {
   "server": 6003,
   "family": "GamerQuest2",
   "power": 491406222
  },
  {
   "server": 6003,
   "family": "España",
   "power": 343662887
  },
  {
   "server": 6003,
   "family": "ChachasFumonas",
   "power": 313408378
  },
  {
   "server": 6003,
   "family": "Legendarios",
   "power": 236428964
  },
  {
   "server": 6003,
   "family": "Andalucía",
   "power": 225964203
  },
  {
   "server": 6003,
   "family": "honguitosfull",
   "power": 210242280
  },
  {
   "server": 6004,
   "family": "Overlords",
   "power": 1654030247
  },
  {
   "server": 6004,
   "family": "Destroyers",
   "power": 1581006099
  },
  {
   "server": 6004,
   "family": "DarkPhoenix",
   "power": 614065544
  },
  {
   "server": 6004,
   "family": "SpainCity",
   "power": 532767890
  },
  {
   "server": 6004,
   "family": "ESPAÑA",
   "power": 484670955
  },
  {
   "server": 6004,
   "family": "Valhalla",
   "power": 482077165
  },
  {
   "server": 6004,
   "family": "TopSpain",
   "power": 466987922
  },
  {
   "server": 6004,
   "family": "OLYMPUS",
   "power": 365461838
  },
  {
   "server": 6004,
   "family": "Pumarin",
   "power": 342069439
  },
  {
   "server": 6004,
   "family": "FUERAMOROS",
   "power": 319281311
  },
  {
   "server": 6005,
   "family": "Nexus",
   "power": 2026324418
  },
  {
   "server": 6005,
   "family": "Setas",
   "power": 725313178
  },
  {
   "server": 6005,
   "family": "espartacusEsp",
   "power": 256921017
  },
  {
   "server": 6005,
   "family": "EsPaÑa",
   "power": 255314089
  },
  {
   "server": 6005,
   "family": "Valhalla",
   "power": 253367828
  },
  {
   "server": 6005,
   "family": "Slayers",
   "power": 201939175
  },
  {
   "server": 6005,
   "family": "Andalucía",
   "power": 190605253
  },
  {
   "server": 6005,
   "family": "Heretics",
   "power": 128718615
  },
  {
   "server": 6005,
   "family": "ESPAÑA",
   "power": 110400139
  },
  {
   "server": 6005,
   "family": "EspañitaTop",
   "power": 106056563
  },
  {
   "server": 6006,
   "family": "LaMafia",
   "power": 2006716090
  },
  {
   "server": 6006,
   "family": "CosaNostra",
   "power": 1017425945
  },
  {
   "server": 6006,
   "family": "LaTaberna",
   "power": 486593023
  },
  {
   "server": 6006,
   "family": "AMANECER",
   "power": 455958331
  },
  {
   "server": 6006,
   "family": "Rebellion",
   "power": 363204510
  },
  {
   "server": 6006,
   "family": "ManolosClan",
   "power": 275883709
  },
  {
   "server": 6006,
   "family": "España",
   "power": 270163153
  },
  {
   "server": 6006,
   "family": "Españoles",
   "power": 255181045
  },
  {
   "server": 6006,
   "family": "Spain",
   "power": 241281967
  },
  {
   "server": 6006,
   "family": "BLADIMIR",
   "power": 192032048
  },
  {
   "server": 6007,
   "family": "×Mugiwaras×",
   "power": 1804260237
  },
  {
   "server": 6007,
   "family": "MushiKnights",
   "power": 1473745373
  },
  {
   "server": 6007,
   "family": "España",
   "power": 465199871
  },
  {
   "server": 6007,
   "family": "༒LEGIÓN༒",
   "power": 299120037
  },
  {
   "server": 6007,
   "family": "Illoamoajugah",
   "power": 297080372
  },
  {
   "server": 6007,
   "family": "CELESTIALES",
   "power": 260601827
  },
  {
   "server": 6007,
   "family": "ARES",
   "power": 241210368
  },
  {
   "server": 6007,
   "family": "SetasEspaña",
   "power": 237984966
  },
  {
   "server": 6007,
   "family": "MAGNERIDON",
   "power": 161856358
  },
  {
   "server": 6007,
   "family": "Xampileyends",
   "power": 137699913
  },
  {
   "server": 6008,
   "family": "Angel_Of_Death",
   "power": 1768981402
  },
  {
   "server": 6008,
   "family": "Hispanos",
   "power": 1349027787
  },
  {
   "server": 6008,
   "family": "Thë༒LOM༒Ünïtëd",
   "power": 347160944
  },
  {
   "server": 6008,
   "family": "EspañaLegends",
   "power": 339209576
  },
  {
   "server": 6008,
   "family": "España",
   "power": 270449624
  },
  {
   "server": 6008,
   "family": "SunsetRavensES",
   "power": 239530464
  },
  {
   "server": 6008,
   "family": "MUSHROOMSKILL",
   "power": 175385937
  },
  {
   "server": 6008,
   "family": "Atomic",
   "power": 114371307
  },
  {
   "server": 6008,
   "family": "Spain",
   "power": 112726846
  },
  {
   "server": 6008,
   "family": "MÉXICO",
   "power": 56599251
  },
  {
   "server": 6009,
   "family": "ELITE",
   "power": 1788197290
  },
  {
   "server": 6009,
   "family": "ELITE_2",
   "power": 779273793
  },
  {
   "server": 6009,
   "family": "IMPERIOESPAÑOL",
   "power": 766034729
  },
  {
   "server": 6009,
   "family": "SAYANS",
   "power": 414158196
  },
  {
   "server": 6009,
   "family": "ESPAÑAGOD",
   "power": 338424958
  },
  {
   "server": 6009,
   "family": "Campiman",
   "power": 273455821
  },
  {
   "server": 6009,
   "family": "LEYENDAS",
   "power": 263520540
  },
  {
   "server": 6009,
   "family": "Champimon",
   "power": 172425313
  },
  {
   "server": 6009,
   "family": "Sololatinos",
   "power": 164234025
  },
  {
   "server": 6009,
   "family": "Mexicanos",
   "power": 100438158
  },
  {
   "server": 6010,
   "family": "Hunters",
   "power": 1703312661
  },
  {
   "server": 6010,
   "family": "ALPHA",
   "power": 1000893425
  },
  {
   "server": 6010,
   "family": "Nyanshis",
   "power": 488401437
  },
  {
   "server": 6010,
   "family": "FoxXHoud",
   "power": 316482973
  },
  {
   "server": 6010,
   "family": "todospueden",
   "power": 187788267
  },
  {
   "server": 6010,
   "family": "FOLLADORES",
   "power": 156631707
  },
  {
   "server": 6010,
   "family": "Españaaaa",
   "power": 125526728
  },
  {
   "server": 6010,
   "family": "LatinosMx",
   "power": 99410869
  },
  {
   "server": 6010,
   "family": "MushBloodSP",
   "power": 71871344
  },
  {
   "server": 6010,
   "family": "DARK",
   "power": 60142563
  },
  {
   "server": 6011,
   "family": "Ølimpø®",
   "power": 1301249306
  },
  {
   "server": 6011,
   "family": "Falkreath",
   "power": 877837292
  },
  {
   "server": 6011,
   "family": "Deadlysins",
   "power": 873739675
  },
  {
   "server": 6011,
   "family": "HELIX",
   "power": 435941707
  },
  {
   "server": 6011,
   "family": "Barceloca",
   "power": 227488942
  },
  {
   "server": 6011,
   "family": "ZeroWings",
   "power": 223170748
  },
  {
   "server": 6011,
   "family": "§BOOF§",
   "power": 215989816
  },
  {
   "server": 6011,
   "family": "España",
   "power": 75992832
  },
  {
   "server": 6011,
   "family": "Mugiwara",
   "power": 71607408
  },
  {
   "server": 6011,
   "family": "barcobasurero",
   "power": 71145040
  },
  {
   "server": 6012,
   "family": "Dulce_Reino",
   "power": 1390239635
  },
  {
   "server": 6012,
   "family": "RYŌIKI_TENKAI",
   "power": 1035223748
  },
  {
   "server": 6012,
   "family": "CaídaDeAlbaz",
   "power": 359350585
  },
  {
   "server": 6012,
   "family": "DemonSlayer",
   "power": 292446338
  },
  {
   "server": 6012,
   "family": "Fairy_Tail",
   "power": 168521920
  },
  {
   "server": 6012,
   "family": "Gnomos",
   "power": 165893181
  },
  {
   "server": 6012,
   "family": "MushroomsOG",
   "power": 78659486
  },
  {
   "server": 6012,
   "family": "BlackMoon",
   "power": 60818606
  },
  {
   "server": 6012,
   "family": "DEMONS",
   "power": 51614791
  },
  {
   "server": 6012,
   "family": "Team_MORTALS",
   "power": 49531377
  },
  {
   "server": 6013,
   "family": "NoMercy",
   "power": 1398583556
  },
  {
   "server": 6013,
   "family": "ALONSISTAS",
   "power": 884995165
  },
  {
   "server": 6013,
   "family": "ALUCINÓGENOS",
   "power": 234180269
  },
  {
   "server": 6013,
   "family": "AKATSUKI",
   "power": 223149204
  },
  {
   "server": 6013,
   "family": "EsporaToxica",
   "power": 150922845
  },
  {
   "server": 6013,
   "family": "TheDragons",
   "power": 130526622
  },
  {
   "server": 6013,
   "family": "sayayines",
   "power": 128482279
  },
  {
   "server": 6013,
   "family": "Themewing",
   "power": 57656365
  },
  {
   "server": 6013,
   "family": "Latinox",
   "power": 57391350
  },
  {
   "server": 6013,
   "family": "UCHIHA",
   "power": 49585310
  },
  {
   "server": 6014,
   "family": "RealBetis",
   "power": 1361722168
  },
  {
   "server": 6014,
   "family": "ChampMasters",
   "power": 1247515830
  },
  {
   "server": 6014,
   "family": "SHADOWS",
   "power": 1009216414
  },
  {
   "server": 6014,
   "family": "RuidoSpain",
   "power": 446486203
  },
  {
   "server": 6014,
   "family": "Español",
   "power": 277678553
  },
  {
   "server": 6014,
   "family": "PUNKNOTDEAD",
   "power": 232002860
  },
  {
   "server": 6014,
   "family": "BluffClan",
   "power": 207918134
  },
  {
   "server": 6014,
   "family": "Championes",
   "power": 189086408
  },
  {
   "server": 6014,
   "family": "TRX",
   "power": 159442516
  },
  {
   "server": 6014,
   "family": "CANARIAS",
   "power": 138666771
  },
  {
   "server": 6015,
   "family": "Hispanos",
   "power": 1915420329
  },
  {
   "server": 6015,
   "family": "Leviathan",
   "power": 1155743215
  },
  {
   "server": 6015,
   "family": "Españita",
   "power": 644485218
  },
  {
   "server": 6015,
   "family": "GLADIADORES",
   "power": 458918510
  },
  {
   "server": 6015,
   "family": "PAJA",
   "power": 342975206
  },
  {
   "server": 6015,
   "family": "LosHongitos🤑",
   "power": 190913260
  },
  {
   "server": 6015,
   "family": "TOADS",
   "power": 148147728
  },
  {
   "server": 6015,
   "family": "vikingsetas",
   "power": 128762921
  },
  {
   "server": 6015,
   "family": "OLIMPO",
   "power": 109209280
  },
  {
   "server": 6015,
   "family": "JURA_PAJA",
   "power": 106630036
  },
  {
   "server": 6016,
   "family": "Españoles",
   "power": 1437942566
  },
  {
   "server": 6016,
   "family": "Españolas",
   "power": 582586443
  },
  {
   "server": 6016,
   "family": "PERROSANCHE",
   "power": 454327813
  },
  {
   "server": 6016,
   "family": "Dragon",
   "power": 348479056
  },
  {
   "server": 6016,
   "family": "HISPANO",
   "power": 281840373
  },
  {
   "server": 6016,
   "family": "Champiñones",
   "power": 222794956
  },
  {
   "server": 6016,
   "family": "LaTiNoS",
   "power": 194995088
  },
  {
   "server": 6016,
   "family": "champi",
   "power": 182232842
  },
  {
   "server": 6016,
   "family": "champDIOS",
   "power": 181303375
  },
  {
   "server": 6016,
   "family": "xxX_Sin_Perfil",
   "power": 113077996
  },
  {
   "server": 6017,
   "family": "SweeTDeatH",
   "power": 1602063647
  },
  {
   "server": 6017,
   "family": "LATINOS",
   "power": 454817389
  },
  {
   "server": 6017,
   "family": "TokyoManji",
   "power": 439472204
  },
  {
   "server": 6017,
   "family": "España",
   "power": 400401239
  },
  {
   "server": 6017,
   "family": "champihongos",
   "power": 375777026
  },
  {
   "server": 6017,
   "family": "Principes",
   "power": 246272600
  },
  {
   "server": 6017,
   "family": "yitos",
   "power": 241046426
  },
  {
   "server": 6017,
   "family": "Nido",
   "power": 209227309
  },
  {
   "server": 6017,
   "family": "Losrompetopos1",
   "power": 91118156
  },
  {
   "server": 6017,
   "family": "México",
   "power": 64708156
  },
  {
   "server": 6018,
   "family": "DISTRITO18",
   "power": 1441269692
  },
  {
   "server": 6018,
   "family": "LEGENDS",
   "power": 518086860
  },
  {
   "server": 6018,
   "family": "INVICTUS",
   "power": 471851390
  },
  {
   "server": 6018,
   "family": "VALHALLA",
   "power": 341988802
  },
  {
   "server": 6018,
   "family": "🤑DEAD",
   "power": 201549451
  },
  {
   "server": 6018,
   "family": "Viva_España",
   "power": 176421064
  },
  {
   "server": 6018,
   "family": "King_Champ",
   "power": 172329094
  },
  {
   "server": 6018,
   "family": "MushClan",
   "power": 139634228
  },
  {
   "server": 6018,
   "family": "SECTOR18",
   "power": 100025898
  },
  {
   "server": 6018,
   "family": "Killersss",
   "power": 98640825
  },
  {
   "server": 6019,
   "family": "SonsOfKittens",
   "power": 1691567178
  },
  {
   "server": 6019,
   "family": "SonsOfKittens2",
   "power": 454499468
  },
  {
   "server": 6019,
   "family": "Akatsuki暁",
   "power": 349213414
  },
  {
   "server": 6019,
   "family": "Champions",
   "power": 266819753
  },
  {
   "server": 6019,
   "family": "EspañaHub",
   "power": 208121735
  },
  {
   "server": 6019,
   "family": "LATAM",
   "power": 185227142
  },
  {
   "server": 6019,
   "family": "Speedrunners",
   "power": 172358815
  },
  {
   "server": 6019,
   "family": "Mugiwaras",
   "power": 88411851
  },
  {
   "server": 6019,
   "family": "guerreros",
   "power": 81835461
  },
  {
   "server": 6019,
   "family": "Ramenempire",
   "power": 81215651
  },
  {
   "server": 6020,
   "family": "Musshu",
   "power": 1602666198
  },
  {
   "server": 6020,
   "family": "HispanosTop",
   "power": 672908854
  },
  {
   "server": 6020,
   "family": "Gladorium",
   "power": 471542878
  },
  {
   "server": 6020,
   "family": "animeverse",
   "power": 197472009
  },
  {
   "server": 6020,
   "family": "Sunshinne",
   "power": 159872244
  },
  {
   "server": 6020,
   "family": "Laycan",
   "power": 154139690
  },
  {
   "server": 6020,
   "family": "sheeee",
   "power": 139829692
  },
  {
   "server": 6020,
   "family": "nineTOP",
   "power": 96328215
  },
  {
   "server": 6020,
   "family": "LOS_PIBES",
   "power": 94187249
  },
  {
   "server": 6020,
   "family": "aventureros",
   "power": 63112068
  },
  {
   "server": 6021,
   "family": "Olympus",
   "power": 1564277270
  },
  {
   "server": 6021,
   "family": "demonspanish",
   "power": 536042471
  },
  {
   "server": 6021,
   "family": "Ragnarok",
   "power": 332253363
  },
  {
   "server": 6021,
   "family": "Latinos",
   "power": 289119789
  },
  {
   "server": 6021,
   "family": "SenTineLs",
   "power": 287626295
  },
  {
   "server": 6021,
   "family": "SobaTetas",
   "power": 262085812
  },
  {
   "server": 6021,
   "family": "España",
   "power": 216168927
  },
  {
   "server": 6021,
   "family": "LatinosUnidos",
   "power": 201948732
  },
  {
   "server": 6021,
   "family": "INFiNiTY",
   "power": 174885702
  },
  {
   "server": 6021,
   "family": "Barcelona",
   "power": 167651006
  },
  {
   "server": 6022,
   "family": "JųгaTє๓ρεรT",
   "power": 1939043582
  },
  {
   "server": 6022,
   "family": "JųгaTє๓ρεรT2",
   "power": 1015591322
  },
  {
   "server": 6022,
   "family": "Kil4TOR_CL4N",
   "power": 569578537
  },
  {
   "server": 6022,
   "family": "ChampiEscuela",
   "power": 301221509
  },
  {
   "server": 6022,
   "family": "VALINOR",
   "power": 299797583
  },
  {
   "server": 6022,
   "family": "OrgXIII",
   "power": 299396457
  },
  {
   "server": 6022,
   "family": "ProClanX",
   "power": 254259907
  },
  {
   "server": 6022,
   "family": "pelones777",
   "power": 235324909
  },
  {
   "server": 6022,
   "family": "VamoAJuga",
   "power": 223148828
  },
  {
   "server": 6022,
   "family": "Los_hongos",
   "power": 208431756
  },
  {
   "server": 6023,
   "family": "TheOlympus",
   "power": 1762144681
  },
  {
   "server": 6023,
   "family": "resistencia",
   "power": 607469349
  },
  {
   "server": 6023,
   "family": "Simbióticos",
   "power": 394483133
  },
  {
   "server": 6023,
   "family": "chiscuchampi",
   "power": 286869747
  },
  {
   "server": 6023,
   "family": "españoles",
   "power": 283661080
  },
  {
   "server": 6023,
   "family": "GalaxyX",
   "power": 282170948
  },
  {
   "server": 6023,
   "family": "Alucinógenos",
   "power": 200711649
  },
  {
   "server": 6023,
   "family": "Champiñones",
   "power": 191205875
  },
  {
   "server": 6023,
   "family": "🥳PapuParty🥳",
   "power": 188489161
  },
  {
   "server": 6023,
   "family": "devastación",
   "power": 185970561
  },
  {
   "server": 6024,
   "family": "SecretSociety",
   "power": 1509996520
  },
  {
   "server": 6024,
   "family": "TU_KARMA",
   "power": 996700368
  },
  {
   "server": 6024,
   "family": "HoraDeAventura",
   "power": 733158469
  },
  {
   "server": 6024,
   "family": "España",
   "power": 312496333
  },
  {
   "server": 6024,
   "family": "LuckyFesst",
   "power": 288099298
  },
  {
   "server": 6024,
   "family": "CJNG",
   "power": 247998853
  },
  {
   "server": 6024,
   "family": "InsanoGuerrero",
   "power": 172396922
  },
  {
   "server": 6024,
   "family": "ANIQUILADORES",
   "power": 155147342
  },
  {
   "server": 6024,
   "family": "PAIN",
   "power": 142879057
  },
  {
   "server": 6024,
   "family": "latinos_unidos",
   "power": 112654110
  },
  {
   "server": 6025,
   "family": "HC",
   "power": 1707178248
  },
  {
   "server": 6025,
   "family": "HC2",
   "power": 588589469
  },
  {
   "server": 6025,
   "family": "HonguitoMagico",
   "power": 415437101
  },
  {
   "server": 6025,
   "family": "Olimpo",
   "power": 281354609
  },
  {
   "server": 6025,
   "family": "AlmaMula",
   "power": 266992602
  },
  {
   "server": 6025,
   "family": "KTA4ALL",
   "power": 224564202
  },
  {
   "server": 6025,
   "family": "Terox",
   "power": 222653033
  },
  {
   "server": 6025,
   "family": "Esporas_Lambda",
   "power": 202867110
  },
  {
   "server": 6025,
   "family": "GALIZA",
   "power": 168228912
  },
  {
   "server": 6025,
   "family": "papas",
   "power": 161990198
  },
  {
   "server": 6026,
   "family": "AssasinsS",
   "power": 1463497119
  },
  {
   "server": 6026,
   "family": "ImperioEspañol",
   "power": 571927130
  },
  {
   "server": 6026,
   "family": "PUYEYE",
   "power": 357967081
  },
  {
   "server": 6026,
   "family": "Latinos",
   "power": 291137998
  },
  {
   "server": 6026,
   "family": "MiClan",
   "power": 238073023
  },
  {
   "server": 6026,
   "family": "LIGA_CHAMPIÑON",
   "power": 219302496
  },
  {
   "server": 6026,
   "family": "LonguitoMagico",
   "power": 204030542
  },
  {
   "server": 6026,
   "family": "facheritos",
   "power": 188712697
  },
  {
   "server": 6026,
   "family": "ESPAÑA",
   "power": 188031871
  },
  {
   "server": 6026,
   "family": "Hentai",
   "power": 149824595
  },
  {
   "server": 6027,
   "family": "latinos",
   "power": 1570179752
  },
  {
   "server": 6027,
   "family": "REALEZA",
   "power": 1091522229
  },
  {
   "server": 6027,
   "family": "Akatsuki",
   "power": 380515747
  },
  {
   "server": 6027,
   "family": "HalfLife",
   "power": 308398838
  },
  {
   "server": 6027,
   "family": "Champiteam",
   "power": 295870673
  },
  {
   "server": 6027,
   "family": "Nazarick",
   "power": 269882770
  },
  {
   "server": 6027,
   "family": "Champiclan",
   "power": 248924094
  },
  {
   "server": 6027,
   "family": "Mercenarios",
   "power": 126946401
  },
  {
   "server": 6027,
   "family": "Insanos",
   "power": 105973742
  },
  {
   "server": 6027,
   "family": "saquemen_latam",
   "power": 96496807
  },
  {
   "server": 6028,
   "family": "ReNeGa2",
   "power": 1840700819
  },
  {
   "server": 6028,
   "family": "Akatsuki",
   "power": 577562794
  },
  {
   "server": 6028,
   "family": "EspañaxLatam",
   "power": 404718771
  },
  {
   "server": 6028,
   "family": "ANDALUCIA",
   "power": 349859255
  },
  {
   "server": 6028,
   "family": "LATAM",
   "power": 299093420
  },
  {
   "server": 6028,
   "family": "TeamArg",
   "power": 256596599
  },
  {
   "server": 6028,
   "family": "§ØMßRA§",
   "power": 236535356
  },
  {
   "server": 6028,
   "family": "BERSERK",
   "power": 216341062
  },
  {
   "server": 6028,
   "family": "TopsMundiales",
   "power": 212326014
  },
  {
   "server": 6028,
   "family": "ESPARTINOS",
   "power": 207248953
  },
  {
   "server": 6029,
   "family": "TOTI",
   "power": 1803578793
  },
  {
   "server": 6029,
   "family": "PSICODÉLICOS",
   "power": 618973329
  },
  {
   "server": 6029,
   "family": "DEMOLITION",
   "power": 429277110
  },
  {
   "server": 6029,
   "family": "Españita",
   "power": 238584232
  },
  {
   "server": 6029,
   "family": "ViViDoReS",
   "power": 226866213
  },
  {
   "server": 6029,
   "family": "Feliz",
   "power": 210965679
  },
  {
   "server": 6029,
   "family": "TopSpain",
   "power": 196911265
  },
  {
   "server": 6029,
   "family": "LaMafilia",
   "power": 179365444
  },
  {
   "server": 6029,
   "family": "Masturboys",
   "power": 174108673
  },
  {
   "server": 6029,
   "family": "“INMORTAL”",
   "power": 157700014
  },
  {
   "server": 6030,
   "family": "Resurrection",
   "power": 1460807059
  },
  {
   "server": 6030,
   "family": "NoobLegends",
   "power": 1277900076
  },
  {
   "server": 6030,
   "family": "El_ChampiClan",
   "power": 397675659
  },
  {
   "server": 6030,
   "family": "fujin",
   "power": 231860437
  },
  {
   "server": 6030,
   "family": "nerverland",
   "power": 223601799
  },
  {
   "server": 6030,
   "family": "Imperial",
   "power": 222457512
  },
  {
   "server": 6030,
   "family": "Ragnarok",
   "power": 179744373
  },
  {
   "server": 6030,
   "family": "UniónChampiñon",
   "power": 174932536
  },
  {
   "server": 6030,
   "family": "Guishekillers",
   "power": 167468534
  },
  {
   "server": 6030,
   "family": "MushroomCorp2",
   "power": 159091319
  },
  {
   "server": 6031,
   "family": "HummusSapiens",
   "power": 1509254150
  },
  {
   "server": 6031,
   "family": "LCSP",
   "power": 1020281154
  },
  {
   "server": 6031,
   "family": "FateFansClub",
   "power": 419418278
  },
  {
   "server": 6031,
   "family": "Humility",
   "power": 341490175
  },
  {
   "server": 6031,
   "family": "ALPHAS",
   "power": 281156791
  },
  {
   "server": 6031,
   "family": "Escuad_Lobo",
   "power": 207371518
  },
  {
   "server": 6031,
   "family": "MEXAMAFIA",
   "power": 192878453
  },
  {
   "server": 6031,
   "family": "HISPANIA",
   "power": 192081484
  },
  {
   "server": 6031,
   "family": "Sinners",
   "power": 181666731
  },
  {
   "server": 6031,
   "family": "TOP",
   "power": 175154205
  },
  {
   "server": 6032,
   "family": "SPARTANS",
   "power": 1189228384
  },
  {
   "server": 6032,
   "family": "TopChamps",
   "power": 1140818131
  },
  {
   "server": 6032,
   "family": "Radicalz",
   "power": 399675817
  },
  {
   "server": 6032,
   "family": "PATRONES",
   "power": 280917023
  },
  {
   "server": 6032,
   "family": "Monster",
   "power": 279579553
  },
  {
   "server": 6032,
   "family": "peakyblinders",
   "power": 266306578
  },
  {
   "server": 6032,
   "family": "Demons",
   "power": 254064544
  },
  {
   "server": 6032,
   "family": "SUPERHONGUITOS",
   "power": 209746775
  },
  {
   "server": 6032,
   "family": "Latinos",
   "power": 209520243
  },
  {
   "server": 6032,
   "family": "GenteMX",
   "power": 174254354
  },
  {
   "server": 6033,
   "family": "OrdenYCaos",
   "power": 1415375634
  },
  {
   "server": 6033,
   "family": " ͡° ͜ʖ ͡° ",
   "power": 940464608
  },
  {
   "server": 6033,
   "family": "FairyTail",
   "power": 382245973
  },
  {
   "server": 6033,
   "family": "BlackDragon",
   "power": 338101537
  },
  {
   "server": 6033,
   "family": "GhostShadow",
   "power": 313596715
  },
  {
   "server": 6033,
   "family": "THE_IMPERIO_MX",
   "power": 288699404
  },
  {
   "server": 6033,
   "family": "México",
   "power": 265734003
  },
  {
   "server": 6033,
   "family": "Guerreros",
   "power": 265641875
  },
  {
   "server": 6033,
   "family": "King",
   "power": 249082600
  },
  {
   "server": 6033,
   "family": "RichVagos",
   "power": 242414595
  },
  {
   "server": 6034,
   "family": "EspañolUnido",
   "power": 1516736679
  },
  {
   "server": 6034,
   "family": "Tetoners",
   "power": 1396764513
  },
  {
   "server": 6034,
   "family": "GuerrerosZ",
   "power": 558868368
  },
  {
   "server": 6034,
   "family": "F2P",
   "power": 496236489
  },
  {
   "server": 6034,
   "family": "MëxäMäfîä",
   "power": 276708742
  },
  {
   "server": 6034,
   "family": "WHIT444",
   "power": 219270844
  },
  {
   "server": 6034,
   "family": "DevilMayCry",
   "power": 190166329
  },
  {
   "server": 6034,
   "family": "kingdom",
   "power": 189329052
  },
  {
   "server": 6034,
   "family": "CusCusClan",
   "power": 179641881
  },
  {
   "server": 6034,
   "family": "pickachuminy",
   "power": 174263378
  },
  {
   "server": 6035,
   "family": "SetasYPetas",
   "power": 1406374058
  },
  {
   "server": 6035,
   "family": "DRAGONBALL",
   "power": 1358851205
  },
  {
   "server": 6035,
   "family": "REVOLUCIÓN",
   "power": 506885917
  },
  {
   "server": 6035,
   "family": "Pilares",
   "power": 303670084
  },
  {
   "server": 6035,
   "family": "España",
   "power": 293253365
  },
  {
   "server": 6035,
   "family": "LATAM",
   "power": 255656441
  },
  {
   "server": 6035,
   "family": "2B2T",
   "power": 193007570
  },
  {
   "server": 6035,
   "family": "mexico",
   "power": 167864880
  },
  {
   "server": 6035,
   "family": "Giardians",
   "power": 134884910
  },
  {
   "server": 6035,
   "family": "latinoamerica",
   "power": 126631694
  },
  {
   "server": 6036,
   "family": "INFERNAL",
   "power": 1676940765
  },
  {
   "server": 6036,
   "family": "GAGAAA",
   "power": 408388240
  },
  {
   "server": 6036,
   "family": "Bullying",
   "power": 405613402
  },
  {
   "server": 6036,
   "family": "Akatsuki",
   "power": 331086187
  },
  {
   "server": 6036,
   "family": "SabDerzx",
   "power": 315430951
  },
  {
   "server": 6036,
   "family": "HISPANIA",
   "power": 304007302
  },
  {
   "server": 6036,
   "family": "LostVayne",
   "power": 263917734
  },
  {
   "server": 6036,
   "family": "DesganadosFC",
   "power": 214862109
  },
  {
   "server": 6036,
   "family": "ELITE",
   "power": 198019063
  },
  {
   "server": 6036,
   "family": "TheOne",
   "power": 142542570
  },
  {
   "server": 6037,
   "family": "ELITE",
   "power": 1480008840
  },
  {
   "server": 6037,
   "family": "Familia",
   "power": 887774316
  },
  {
   "server": 6037,
   "family": "Legendarios",
   "power": 406825099
  },
  {
   "server": 6037,
   "family": "Cordyceps",
   "power": 387852110
  },
  {
   "server": 6037,
   "family": "Reyes",
   "power": 321832158
  },
  {
   "server": 6037,
   "family": "Codigo8",
   "power": 223918216
  },
  {
   "server": 6037,
   "family": "minihongos",
   "power": 221475448
  },
  {
   "server": 6037,
   "family": "ANTEIKU",
   "power": 215355579
  },
  {
   "server": 6037,
   "family": "Ragnarôk",
   "power": 202598362
  },
  {
   "server": 6037,
   "family": "SKY",
   "power": 182226574
  },
  {
   "server": 6038,
   "family": "ALPHAS",
   "power": 1720770855
  },
  {
   "server": 6038,
   "family": "Legion",
   "power": 1179612655
  },
  {
   "server": 6038,
   "family": "Champigods",
   "power": 456780906
  },
  {
   "server": 6038,
   "family": "ARGENTINA",
   "power": 368437087
  },
  {
   "server": 6038,
   "family": "GRK",
   "power": 358816113
  },
  {
   "server": 6038,
   "family": "©EthernalsBlod",
   "power": 229593782
  },
  {
   "server": 6038,
   "family": "wolves",
   "power": 217781896
  },
  {
   "server": 6038,
   "family": "PHOENIXESPAÑOL",
   "power": 216985838
  },
  {
   "server": 6038,
   "family": "CHIMUELOS",
   "power": 195398277
  },
  {
   "server": 6038,
   "family": "MVP",
   "power": 168331548
  },
  {
   "server": 6039,
   "family": "MAFIA",
   "power": 1525665283
  },
  {
   "server": 6039,
   "family": "BigSeta",
   "power": 1019928638
  },
  {
   "server": 6039,
   "family": "WhiteKnights",
   "power": 900745040
  },
  {
   "server": 6039,
   "family": "Destructores",
   "power": 388382499
  },
  {
   "server": 6039,
   "family": "MundoLatino",
   "power": 344097577
  },
  {
   "server": 6039,
   "family": "SEGADORES",
   "power": 331703850
  },
  {
   "server": 6039,
   "family": "ESPARTA",
   "power": 237449696
  },
  {
   "server": 6039,
   "family": "Onic",
   "power": 208586279
  },
  {
   "server": 6039,
   "family": "MushroomWorld",
   "power": 182516982
  },
  {
   "server": 6039,
   "family": "ATLANTIS",
   "power": 170088201
  },
  {
   "server": 6040,
   "family": "༺𝐺𝑜𝒅𝒔༻",
   "power": 1417453568
  },
  {
   "server": 6040,
   "family": "KingHunters",
   "power": 1363849575
  },
  {
   "server": 6040,
   "family": "mewing",
   "power": 367655696
  },
  {
   "server": 6040,
   "family": "WildRift",
   "power": 268004762
  },
  {
   "server": 6040,
   "family": "OLYMPUS",
   "power": 248514226
  },
  {
   "server": 6040,
   "family": "Paticano",
   "power": 240749165
  },
  {
   "server": 6040,
   "family": "FairyTail",
   "power": 197932436
  },
  {
   "server": 6040,
   "family": "Mushroom_Latam",
   "power": 194332026
  },
  {
   "server": 6040,
   "family": "SoloLeveling",
   "power": 171424573
  },
  {
   "server": 6040,
   "family": "champilandia",
   "power": 113954105
  },
  {
   "server": 6041,
   "family": "Asgard",
   "power": 1724131534
  },
  {
   "server": 6041,
   "family": "Latinos",
   "power": 699935226
  },
  {
   "server": 6041,
   "family": "Astrales",
   "power": 451472958
  },
  {
   "server": 6041,
   "family": "PUYEYE",
   "power": 321039987
  },
  {
   "server": 6041,
   "family": "LunaEterna",
   "power": 290387319
  },
  {
   "server": 6041,
   "family": "Harkonnen",
   "power": 279610223
  },
  {
   "server": 6041,
   "family": "Mexicas",
   "power": 198039861
  },
  {
   "server": 6041,
   "family": "MUGIWARAS",
   "power": 194277893
  },
  {
   "server": 6041,
   "family": "Iluminatis",
   "power": 190003140
  },
  {
   "server": 6041,
   "family": "chupete",
   "power": 188458064
  },
  {
   "server": 6042,
   "family": "FAIRYTOPIA",
   "power": 1662764912
  },
  {
   "server": 6042,
   "family": "FairyAcademy",
   "power": 1287287227
  },
  {
   "server": 6042,
   "family": "BlueDemons_2",
   "power": 632368295
  },
  {
   "server": 6042,
   "family": "INMORTALES",
   "power": 454070733
  },
  {
   "server": 6042,
   "family": "Faxtikusu",
   "power": 332622720
  },
  {
   "server": 6042,
   "family": "bbhouse",
   "power": 325267358
  },
  {
   "server": 6042,
   "family": "España",
   "power": 263134495
  },
  {
   "server": 6042,
   "family": "KillersReturns",
   "power": 252691960
  },
  {
   "server": 6042,
   "family": "deymod",
   "power": 224312835
  },
  {
   "server": 6042,
   "family": "Warriors",
   "power": 218315054
  },
  {
   "server": 6043,
   "family": "Atharaxia",
   "power": 1695957624
  },
  {
   "server": 6043,
   "family": "COLOMBIANITOS",
   "power": 942999092
  },
  {
   "server": 6043,
   "family": "ensetados",
   "power": 942756034
  },
  {
   "server": 6043,
   "family": "argentos",
   "power": 371552334
  },
  {
   "server": 6043,
   "family": "DarkReborn",
   "power": 237408155
  },
  {
   "server": 6043,
   "family": "OLYMPUS",
   "power": 218890004
  },
  {
   "server": 6043,
   "family": "España",
   "power": 213915207
  },
  {
   "server": 6043,
   "family": "€£¥",
   "power": 199714536
  },
  {
   "server": 6043,
   "family": "🧐MACHIWI🧐",
   "power": 198305424
  },
  {
   "server": 6043,
   "family": "ArtoriasLegacy",
   "power": 189904580
  },
  {
   "server": 6044,
   "family": "EminencE",
   "power": 1795626470
  },
  {
   "server": 6044,
   "family": "GameOver",
   "power": 657457061
  },
  {
   "server": 6044,
   "family": "White",
   "power": 518452977
  },
  {
   "server": 6044,
   "family": "PARANOIA",
   "power": 363821166
  },
  {
   "server": 6044,
   "family": "IMPERIAL",
   "power": 283671138
  },
  {
   "server": 6044,
   "family": "WARRIORS",
   "power": 276359958
  },
  {
   "server": 6044,
   "family": "Legions",
   "power": 254546714
  },
  {
   "server": 6044,
   "family": "Lospapus",
   "power": 223148093
  },
  {
   "server": 6044,
   "family": "BLACKDOG",
   "power": 193050109
  },
  {
   "server": 6044,
   "family": "lucifer",
   "power": 186396460
  },
  {
   "server": 6045,
   "family": "HispanosUnidos",
   "power": 1700285775
  },
  {
   "server": 6045,
   "family": "DeadArmy",
   "power": 1198027301
  },
  {
   "server": 6045,
   "family": "Apocalipsis",
   "power": 541644139
  },
  {
   "server": 6045,
   "family": "LaMafia",
   "power": 336341812
  },
  {
   "server": 6045,
   "family": "EspañaUnida",
   "power": 332378093
  },
  {
   "server": 6045,
   "family": "Ensetaos",
   "power": 259162755
  },
  {
   "server": 6045,
   "family": "HEAVENLY",
   "power": 242322545
  },
  {
   "server": 6045,
   "family": "SLK",
   "power": 217173208
  },
  {
   "server": 6045,
   "family": "Xcalibur",
   "power": 212094903
  },
  {
   "server": 6045,
   "family": "OnePiece",
   "power": 183068043
  },
  {
   "server": 6046,
   "family": "ZLEGION",
   "power": 1559746864
  },
  {
   "server": 6046,
   "family": "SetasIbéricas",
   "power": 837607638
  },
  {
   "server": 6046,
   "family": "LATINOS_TEAM",
   "power": 626715203
  },
  {
   "server": 6046,
   "family": "Ecstasy",
   "power": 396660988
  },
  {
   "server": 6046,
   "family": "Champi",
   "power": 312586839
  },
  {
   "server": 6046,
   "family": "DarkeBuild",
   "power": 286590078
  },
  {
   "server": 6046,
   "family": "DEATNOTE",
   "power": 250630022
  },
  {
   "server": 6046,
   "family": "AtaudRisueño",
   "power": 249210046
  },
  {
   "server": 6046,
   "family": "Sanyes",
   "power": 238516163
  },
  {
   "server": 6046,
   "family": "DRACARYS",
   "power": 173969472
  },
  {
   "server": 6047,
   "family": "Legions",
   "power": 1512999147
  },
  {
   "server": 6047,
   "family": "SetasAsesinas",
   "power": 1388775207
  },
  {
   "server": 6047,
   "family": "CallampinesCL",
   "power": 531984663
  },
  {
   "server": 6047,
   "family": "Los_Vrgs",
   "power": 410918196
  },
  {
   "server": 6047,
   "family": "TheLegends",
   "power": 345498568
  },
  {
   "server": 6047,
   "family": "GodsOfValhalla",
   "power": 326668755
  },
  {
   "server": 6047,
   "family": "LegendZ",
   "power": 325168555
  },
  {
   "server": 6047,
   "family": "Hellbourne",
   "power": 275263619
  },
  {
   "server": 6047,
   "family": "FLYstars",
   "power": 200769932
  },
  {
   "server": 6047,
   "family": "PuroPelon",
   "power": 199403980
  },
  {
   "server": 6048,
   "family": "I𐌽𐍆I𐌽I𐍄𐍅",
   "power": 1717269371
  },
  {
   "server": 6048,
   "family": "LORDS_CHAMPI",
   "power": 1226803077
  },
  {
   "server": 6048,
   "family": "Duxinz",
   "power": 613766708
  },
  {
   "server": 6048,
   "family": "COBRA_KAI",
   "power": 304097785
  },
  {
   "server": 6048,
   "family": "papus7",
   "power": 296848387
  },
  {
   "server": 6048,
   "family": "Fluxo",
   "power": 292420936
  },
  {
   "server": 6048,
   "family": "latinoamerica",
   "power": 289237306
  },
  {
   "server": 6048,
   "family": "KINGS",
   "power": 256285385
  },
  {
   "server": 6048,
   "family": "Akatsuki",
   "power": 228321286
  },
  {
   "server": 6048,
   "family": "Realeza",
   "power": 223706040
  },
  {
   "server": 6049,
   "family": "ᴹᴳᵂMugiwaras",
   "power": 1672198031
  },
  {
   "server": 6049,
   "family": "España",
   "power": 484523265
  },
  {
   "server": 6049,
   "family": "ARGENTINA",
   "power": 378665909
  },
  {
   "server": 6049,
   "family": "La_PESADILLA",
   "power": 332479800
  },
  {
   "server": 6049,
   "family": "argentina",
   "power": 310423292
  },
  {
   "server": 6049,
   "family": "TuristaMundial",
   "power": 283556793
  },
  {
   "server": 6049,
   "family": "IceCream",
   "power": 263406586
  },
  {
   "server": 6049,
   "family": "ARGENTO",
   "power": 248666170
  },
  {
   "server": 6049,
   "family": "Shadow",
   "power": 210332972
  },
  {
   "server": 6049,
   "family": "mugiwara",
   "power": 198849327
  },
  {
   "server": 6050,
   "family": "ᵖᵏ²¦ԍoᴅs¦ᴇvιʟs",
   "power": 1196817104
  },
  {
   "server": 6050,
   "family": "Ragnarok",
   "power": 1088715603
  },
  {
   "server": 6050,
   "family": "𝓝𝓔𝓦_𝓔𝓡𝓐",
   "power": 1070217383
  },
  {
   "server": 6050,
   "family": "xOnlyFansヅ",
   "power": 349307762
  },
  {
   "server": 6050,
   "family": "CELESTIALES",
   "power": 231292800
  },
  {
   "server": 6050,
   "family": "Robellons",
   "power": 223697619
  },
  {
   "server": 6050,
   "family": "dfenix",
   "power": 210464969
  },
  {
   "server": 6050,
   "family": "MESSI",
   "power": 190521110
  },
  {
   "server": 6050,
   "family": "ArgenTop",
   "power": 178359658
  },
  {
   "server": 6050,
   "family": "Mërcenarios",
   "power": 171609780
  },
  {
   "server": 6051,
   "family": "𓆏HueBs𓆏",
   "power": 1621203998
  },
  {
   "server": 6051,
   "family": "Potterheads",
   "power": 1050610565
  },
  {
   "server": 6051,
   "family": "LasCepas",
   "power": 331046450
  },
  {
   "server": 6051,
   "family": "ESPAÑOLES",
   "power": 305225480
  },
  {
   "server": 6051,
   "family": "LATINOS",
   "power": 283187642
  },
  {
   "server": 6051,
   "family": "LatinGods",
   "power": 276319445
  },
  {
   "server": 6051,
   "family": "Clan",
   "power": 261667650
  },
  {
   "server": 6051,
   "family": "Chilenos",
   "power": 238177995
  },
  {
   "server": 6051,
   "family": "Hyperion",
   "power": 170637748
  },
  {
   "server": 6051,
   "family": "PerroCallejero",
   "power": 170627038
  },
  {
   "server": 6052,
   "family": "WeAreTheChamps",
   "power": 1396065381
  },
  {
   "server": 6052,
   "family": "HoneyRoyal©",
   "power": 1238643703
  },
  {
   "server": 6052,
   "family": "VIKINGOS",
   "power": 336789280
  },
  {
   "server": 6052,
   "family": "Resistencia",
   "power": 274396112
  },
  {
   "server": 6052,
   "family": "PSICODÉLICS",
   "power": 232560435
  },
  {
   "server": 6052,
   "family": "Exiliados",
   "power": 213301120
  },
  {
   "server": 6052,
   "family": "OverLords",
   "power": 204760051
  },
  {
   "server": 6052,
   "family": "LATINOS_UNIDOS",
   "power": 200431330
  },
  {
   "server": 6052,
   "family": "deaht",
   "power": 196859449
  },
  {
   "server": 6052,
   "family": "AMANITAOCREATA",
   "power": 195803182
  },
  {
   "server": 6053,
   "family": "Virus",
   "power": 1718500292
  },
  {
   "server": 6053,
   "family": "LATINOS",
   "power": 764468139
  },
  {
   "server": 6053,
   "family": "Españoles",
   "power": 682607193
  },
  {
   "server": 6053,
   "family": "SPRV",
   "power": 483111800
  },
  {
   "server": 6053,
   "family": "JDragonS",
   "power": 233087149
  },
  {
   "server": 6053,
   "family": "MexicanPower",
   "power": 233054182
  },
  {
   "server": 6053,
   "family": "GLADIADORES",
   "power": 210451418
  },
  {
   "server": 6053,
   "family": "Acribilladores",
   "power": 188060504
  },
  {
   "server": 6053,
   "family": "Destiny",
   "power": 184148672
  },
  {
   "server": 6053,
   "family": "Mxleveling",
   "power": 167380166
  },
  {
   "server": 6054,
   "family": "DEMONSQUAD",
   "power": 1642137944
  },
  {
   "server": 6054,
   "family": "SAS",
   "power": 767928879
  },
  {
   "server": 6054,
   "family": "ATÓMICO",
   "power": 532883674
  },
  {
   "server": 6054,
   "family": "Zone_Imperior",
   "power": 501574372
  },
  {
   "server": 6054,
   "family": "EspañaGods",
   "power": 383709088
  },
  {
   "server": 6054,
   "family": "ClanLatino",
   "power": 351630116
  },
  {
   "server": 6054,
   "family": "MexicoGod",
   "power": 307233605
  },
  {
   "server": 6054,
   "family": "TopGods",
   "power": 291269243
  },
  {
   "server": 6054,
   "family": "Latinos",
   "power": 218228569
  },
  {
   "server": 6054,
   "family": "Jcompany",
   "power": 183070175
  },
  {
   "server": 6055,
   "family": "SpainTop",
   "power": 1579137454
  },
  {
   "server": 6055,
   "family": "EMPERADORES",
   "power": 1251821627
  },
  {
   "server": 6055,
   "family": "Chile",
   "power": 703105920
  },
  {
   "server": 6055,
   "family": "demosn",
   "power": 342712376
  },
  {
   "server": 6055,
   "family": "HongoLoco",
   "power": 328739589
  },
  {
   "server": 6055,
   "family": "CobraKai",
   "power": 313248349
  },
  {
   "server": 6055,
   "family": "ArgenPro",
   "power": 251188107
  },
  {
   "server": 6055,
   "family": "ResetSports",
   "power": 207317033
  },
  {
   "server": 6055,
   "family": "Colombianos",
   "power": 175663780
  },
  {
   "server": 6055,
   "family": "Latam",
   "power": 171477069
  },
  {
   "server": 6056,
   "family": "Sleepless",
   "power": 1565918279
  },
  {
   "server": 6056,
   "family": "LosMancos",
   "power": 961512015
  },
  {
   "server": 6056,
   "family": "PuroPow",
   "power": 961064408
  },
  {
   "server": 6056,
   "family": "Champiñones",
   "power": 427435213
  },
  {
   "server": 6056,
   "family": "España",
   "power": 329421950
  },
  {
   "server": 6056,
   "family": "obbatala",
   "power": 291666925
  },
  {
   "server": 6056,
   "family": "carrascuas",
   "power": 272554493
  },
  {
   "server": 6056,
   "family": "Spaxium",
   "power": 241239057
  },
  {
   "server": 6056,
   "family": "Leyenda",
   "power": 237699677
  },
  {
   "server": 6056,
   "family": "L4TINOSx",
   "power": 236328090
  },
  {
   "server": 6057,
   "family": "𝘖𝘓𝘐𝘔𝘗𝘖",
   "power": 1404496862
  },
  {
   "server": 6057,
   "family": "WARNING",
   "power": 1049460483
  },
  {
   "server": 6057,
   "family": "Asgard",
   "power": 409795670
  },
  {
   "server": 6057,
   "family": "ESPAÑA",
   "power": 336766122
  },
  {
   "server": 6057,
   "family": "LATAM_GOD",
   "power": 336062270
  },
  {
   "server": 6057,
   "family": "TopColombia",
   "power": 326798950
  },
  {
   "server": 6057,
   "family": "StrayDogs",
   "power": 226008172
  },
  {
   "server": 6057,
   "family": "Naruto",
   "power": 225520271
  },
  {
   "server": 6057,
   "family": "TheMasters",
   "power": 223181432
  },
  {
   "server": 6057,
   "family": "FallenAngels",
   "power": 183228079
  },
  {
   "server": 6058,
   "family": "Kings",
   "power": 1616278551
  },
  {
   "server": 6058,
   "family": "APOCALIPSIS",
   "power": 1502503669
  },
  {
   "server": 6058,
   "family": "Vórtice",
   "power": 366588818
  },
  {
   "server": 6058,
   "family": "shadowGarden",
   "power": 329697988
  },
  {
   "server": 6058,
   "family": "Valhalla",
   "power": 281124461
  },
  {
   "server": 6058,
   "family": "MexaMafia",
   "power": 269715760
  },
  {
   "server": 6058,
   "family": "HERETICS",
   "power": 232138398
  },
  {
   "server": 6058,
   "family": "komix",
   "power": 229826514
  },
  {
   "server": 6058,
   "family": "MuSH_DMoNS",
   "power": 214373645
  },
  {
   "server": 6058,
   "family": "Hispania",
   "power": 211493912
  },
  {
   "server": 6059,
   "family": "HUNTERxHUNTER",
   "power": 1560874103
  },
  {
   "server": 6059,
   "family": "INFAMES",
   "power": 1380661416
  },
  {
   "server": 6059,
   "family": "Champiñoles",
   "power": 421779257
  },
  {
   "server": 6059,
   "family": "Division_Cero",
   "power": 388155943
  },
  {
   "server": 6059,
   "family": "OverLords",
   "power": 379332545
  },
  {
   "server": 6059,
   "family": "The_Creators",
   "power": 318920077
  },
  {
   "server": 6059,
   "family": "ArgPitudos",
   "power": 311884582
  },
  {
   "server": 6059,
   "family": "DaddyChill",
   "power": 298500923
  },
  {
   "server": 6059,
   "family": "violatrol",
   "power": 281436429
  },
  {
   "server": 6059,
   "family": "pantuflas",
   "power": 220743587
  },
  {
   "server": 6060,
   "family": "Wewitos",
   "power": 1605005368
  },
  {
   "server": 6060,
   "family": "MANIAKS",
   "power": 1092843664
  },
  {
   "server": 6060,
   "family": "Lestatcrow",
   "power": 388118231
  },
  {
   "server": 6060,
   "family": "FairyTail",
   "power": 346146364
  },
  {
   "server": 6060,
   "family": "Ouroboros",
   "power": 335497351
  },
  {
   "server": 6060,
   "family": "VIRUS",
   "power": 332211738
  },
  {
   "server": 6060,
   "family": "LATINOS",
   "power": 327527745
  },
  {
   "server": 6060,
   "family": "JujutsuKaisen",
   "power": 318493279
  },
  {
   "server": 6060,
   "family": "CHAMPIÑONKING",
   "power": 292868059
  },
  {
   "server": 6060,
   "family": "Gorditos",
   "power": 280334638
  },
  {
   "server": 6061,
   "family": "HGT°",
   "power": 1541278567
  },
  {
   "server": 6061,
   "family": "Valhalla",
   "power": 1269564949
  },
  {
   "server": 6061,
   "family": "LegionLatina",
   "power": 766268763
  },
  {
   "server": 6061,
   "family": "ChampiLand",
   "power": 542761074
  },
  {
   "server": 6061,
   "family": "Ragnarok",
   "power": 382183427
  },
  {
   "server": 6061,
   "family": "degenenerados2",
   "power": 310285904
  },
  {
   "server": 6061,
   "family": "EscuadronALFA",
   "power": 269377056
  },
  {
   "server": 6061,
   "family": "ASIR",
   "power": 238011267
  },
  {
   "server": 6061,
   "family": "Solitarios",
   "power": 187621968
  },
  {
   "server": 6061,
   "family": "LaTinV93",
   "power": 185804436
  },
  {
   "server": 6062,
   "family": "𝐫ⱥოᴩ𝐚𝚐",
   "power": 1545190303
  },
  {
   "server": 6062,
   "family": "Falkreath",
   "power": 913524661
  },
  {
   "server": 6062,
   "family": "FÉNIX",
   "power": 847813632
  },
  {
   "server": 6062,
   "family": "SUDADORES",
   "power": 425600446
  },
  {
   "server": 6062,
   "family": "Warriors",
   "power": 336597793
  },
  {
   "server": 6062,
   "family": "INMORTAL",
   "power": 281586795
  },
  {
   "server": 6062,
   "family": "INMORTALS",
   "power": 271066717
  },
  {
   "server": 6062,
   "family": "SSJ",
   "power": 239454071
  },
  {
   "server": 6062,
   "family": "Kioto",
   "power": 211789207
  },
  {
   "server": 6062,
   "family": "Latinos",
   "power": 189927913
  },
  {
   "server": 6063,
   "family": "Prophets",
   "power": 1514770727
  },
  {
   "server": 6063,
   "family": "TorreArmy",
   "power": 914322910
  },
  {
   "server": 6063,
   "family": "latinos",
   "power": 837585925
  },
  {
   "server": 6063,
   "family": "LesCepas",
   "power": 512115919
  },
  {
   "server": 6063,
   "family": "kingShadow",
   "power": 277246585
  },
  {
   "server": 6063,
   "family": "FATE",
   "power": 274576359
  },
  {
   "server": 6063,
   "family": "IиรǺиØร【◣_◢】",
   "power": 237677635
  },
  {
   "server": 6063,
   "family": "GTL",
   "power": 235875733
  },
  {
   "server": 6063,
   "family": "Latam",
   "power": 208395807
  },
  {
   "server": 6063,
   "family": "MedioPollo",
   "power": 201607935
  },
  {
   "server": 6064,
   "family": "TopSecret",
   "power": 1625860275
  },
  {
   "server": 6064,
   "family": "DragonHeart",
   "power": 985270301
  },
  {
   "server": 6064,
   "family": "ChampiCrikos",
   "power": 491760684
  },
  {
   "server": 6064,
   "family": "OLYMPUS",
   "power": 418738714
  },
  {
   "server": 6064,
   "family": "BlackList",
   "power": 322024397
  },
  {
   "server": 6064,
   "family": "PaTTanes_Kaoz",
   "power": 315355262
  },
  {
   "server": 6064,
   "family": "AKATSUKI",
   "power": 291414750
  },
  {
   "server": 6064,
   "family": "White",
   "power": 266288388
  },
  {
   "server": 6064,
   "family": "BK2S",
   "power": 261490150
  },
  {
   "server": 6064,
   "family": "LATAM",
   "power": 253631415
  },
  {
   "server": 6065,
   "family": "Knight",
   "power": 1621725783
  },
  {
   "server": 6065,
   "family": "Nova",
   "power": 785355830
  },
  {
   "server": 6065,
   "family": "ElClan",
   "power": 397985951
  },
  {
   "server": 6065,
   "family": "ShadowGhosts",
   "power": 337281884
  },
  {
   "server": 6065,
   "family": "RE4LG4LIFE",
   "power": 334211761
  },
  {
   "server": 6065,
   "family": "ApexKings",
   "power": 288371490
  },
  {
   "server": 6065,
   "family": "LatinsFTW",
   "power": 287516277
  },
  {
   "server": 6065,
   "family": "ArgAtr",
   "power": 244653200
  },
  {
   "server": 6065,
   "family": "TopSecret",
   "power": 242717737
  },
  {
   "server": 6065,
   "family": "Antartic",
   "power": 214646742
  },
  {
   "server": 6066,
   "family": "Active",
   "power": 1675623732
  },
  {
   "server": 6066,
   "family": "Amoongus",
   "power": 827390114
  },
  {
   "server": 6066,
   "family": "LEGIONARIOS",
   "power": 619445249
  },
  {
   "server": 6066,
   "family": "Legends",
   "power": 443035336
  },
  {
   "server": 6066,
   "family": "Latinoamérica",
   "power": 376149543
  },
  {
   "server": 6066,
   "family": "INMorTALes",
   "power": 309504684
  },
  {
   "server": 6066,
   "family": "Supremacy",
   "power": 264155975
  },
  {
   "server": 6066,
   "family": "España",
   "power": 219176347
  },
  {
   "server": 6066,
   "family": "LASECTA",
   "power": 197331328
  },
  {
   "server": 6066,
   "family": "TheDemonKings",
   "power": 191485281
  },
  {
   "server": 6067,
   "family": "Legends",
   "power": 1585127583
  },
  {
   "server": 6067,
   "family": "LATIN_WARRIORS",
   "power": 939926639
  },
  {
   "server": 6067,
   "family": "GOT",
   "power": 916869385
  },
  {
   "server": 6067,
   "family": "RAIDER_LATAM",
   "power": 761208195
  },
  {
   "server": 6067,
   "family": "Mexico",
   "power": 315988226
  },
  {
   "server": 6067,
   "family": "Chilean",
   "power": 288054526
  },
  {
   "server": 6067,
   "family": "DARKPOWER",
   "power": 245389524
  },
  {
   "server": 6067,
   "family": "vieve",
   "power": 211669412
  },
  {
   "server": 6067,
   "family": "colombianos",
   "power": 202122051
  },
  {
   "server": 6067,
   "family": "LOS_DIOSES",
   "power": 188968817
  },
  {
   "server": 6068,
   "family": "CROWN_HEROES",
   "power": 1582279401
  },
  {
   "server": 6068,
   "family": "CLOWN_HEROES",
   "power": 908020640
  },
  {
   "server": 6068,
   "family": "Nakamas",
   "power": 717624579
  },
  {
   "server": 6068,
   "family": "LEGENDARIOS",
   "power": 486651661
  },
  {
   "server": 6068,
   "family": "Skywalker",
   "power": 380699700
  },
  {
   "server": 6068,
   "family": "LEALTAD",
   "power": 347641388
  },
  {
   "server": 6068,
   "family": "Piratesbear",
   "power": 301289400
  },
  {
   "server": 6068,
   "family": "PAIN",
   "power": 227022021
  },
  {
   "server": 6068,
   "family": "Leyendas",
   "power": 225298937
  },
  {
   "server": 6068,
   "family": "ColoColoChile",
   "power": 223015869
  },
  {
   "server": 6069,
   "family": "Ases",
   "power": 1691194655
  },
  {
   "server": 6069,
   "family": "Gallinero",
   "power": 1121667444
  },
  {
   "server": 6069,
   "family": "あ・Yakuzas",
   "power": 940366143
  },
  {
   "server": 6069,
   "family": "ARGyPerU",
   "power": 386808737
  },
  {
   "server": 6069,
   "family": "SoloActivos",
   "power": 340647173
  },
  {
   "server": 6069,
   "family": "TetasdeFlakked",
   "power": 333072036
  },
  {
   "server": 6069,
   "family": "Exiliados",
   "power": 284339353
  },
  {
   "server": 6069,
   "family": "babyboo",
   "power": 262907569
  },
  {
   "server": 6069,
   "family": "Ethereals",
   "power": 247907166
  },
  {
   "server": 6069,
   "family": "Gamer4Ever",
   "power": 226818570
  },
  {
   "server": 6070,
   "family": "ZETAS",
   "power": 1536767779
  },
  {
   "server": 6070,
   "family": "LaFamilia",
   "power": 912675947
  },
  {
   "server": 6070,
   "family": "ASGARD",
   "power": 409696010
  },
  {
   "server": 6070,
   "family": "Latinos",
   "power": 349184064
  },
  {
   "server": 6070,
   "family": "Mercenarios",
   "power": 312683998
  },
  {
   "server": 6070,
   "family": "ElMejorClan",
   "power": 283308733
  },
  {
   "server": 6070,
   "family": "LosDinoPanas",
   "power": 267728801
  },
  {
   "server": 6070,
   "family": "HUNTER",
   "power": 253906247
  },
  {
   "server": 6070,
   "family": "FemPower",
   "power": 233697180
  },
  {
   "server": 6070,
   "family": "PsycoTiers",
   "power": 215289184
  },
  {
   "server": 6071,
   "family": "XxHUNTERxX",
   "power": 1490036173
  },
  {
   "server": 6071,
   "family": "ＲΛＧＮΛＲＯＫ",
   "power": 447429354
  },
  {
   "server": 6071,
   "family": "Los7Pecados",
   "power": 425889441
  },
  {
   "server": 6071,
   "family": "Mugiwaras",
   "power": 335300442
  },
  {
   "server": 6071,
   "family": "EliteSpain",
   "power": 316295651
  },
  {
   "server": 6071,
   "family": "Adept",
   "power": 304238083
  },
  {
   "server": 6071,
   "family": "LOS_MICHIS",
   "power": 286444570
  },
  {
   "server": 6071,
   "family": "Akatsuki",
   "power": 267349486
  },
  {
   "server": 6071,
   "family": "OnePunchClan",
   "power": 258284239
  },
  {
   "server": 6071,
   "family": "ᴅʟᴄⵌ¹ᴅᴇᴀᴛ※",
   "power": 237851797
  },
  {
   "server": 6072,
   "family": "OnePiece",
   "power": 1522030907
  },
  {
   "server": 6072,
   "family": "BASGIATH",
   "power": 669496077
  },
  {
   "server": 6072,
   "family": "EscuadrónOmega",
   "power": 368772108
  },
  {
   "server": 6072,
   "family": "LEYENDS",
   "power": 361637706
  },
  {
   "server": 6072,
   "family": "legionespañola",
   "power": 335128447
  },
  {
   "server": 6072,
   "family": "Family_Zeta",
   "power": 331727576
  },
  {
   "server": 6072,
   "family": "Blood",
   "power": 323312879
  },
  {
   "server": 6072,
   "family": "SetaDeEscapar",
   "power": 270937474
  },
  {
   "server": 6072,
   "family": "ShadowOfHell",
   "power": 229314901
  },
  {
   "server": 6072,
   "family": "PayToWin",
   "power": 208269463
  },
  {
   "server": 6073,
   "family": "CDG",
   "power": 1166401781
  },
  {
   "server": 6073,
   "family": "INFERNALES",
   "power": 985851746
  },
  {
   "server": 6073,
   "family": "Renacidos",
   "power": 665786435
  },
  {
   "server": 6073,
   "family": "Paladines",
   "power": 354974990
  },
  {
   "server": 6073,
   "family": "CosaNostra",
   "power": 269969214
  },
  {
   "server": 6073,
   "family": "creta",
   "power": 263608459
  },
  {
   "server": 6073,
   "family": "Latinos",
   "power": 257756453
  },
  {
   "server": 6073,
   "family": "ARG_OLIMPO",
   "power": 256592112
  },
  {
   "server": 6073,
   "family": "DragonSlayer",
   "power": 244807287
  },
  {
   "server": 6073,
   "family": "ComunistasNo",
   "power": 228928676
  },
  {
   "server": 6074,
   "family": "armagedon",
   "power": 1447322294
  },
  {
   "server": 6074,
   "family": "VIPes74",
   "power": 1207309686
  },
  {
   "server": 6074,
   "family": "INKAKOLA",
   "power": 406997309
  },
  {
   "server": 6074,
   "family": "Los7Pecados",
   "power": 342539194
  },
  {
   "server": 6074,
   "family": "TheHearts",
   "power": 327952234
  },
  {
   "server": 6074,
   "family": "Vikingos",
   "power": 310151142
  },
  {
   "server": 6074,
   "family": "MapleStory",
   "power": 278928886
  },
  {
   "server": 6074,
   "family": "PUROMEXICANO🥑",
   "power": 264832431
  },
  {
   "server": 6074,
   "family": "༒CLANTOP༒",
   "power": 257910708
  },
  {
   "server": 6074,
   "family": "MEXICANOS",
   "power": 248551952
  },
  {
   "server": 6075,
   "family": "ToeVanguard",
   "power": 1385428461
  },
  {
   "server": 6075,
   "family": "OnlySmoke",
   "power": 1350437915
  },
  {
   "server": 6075,
   "family": "Imparables",
   "power": 472869997
  },
  {
   "server": 6075,
   "family": "Argentina",
   "power": 395132232
  },
  {
   "server": 6075,
   "family": "LATAM",
   "power": 317290846
  },
  {
   "server": 6075,
   "family": "MAPLETREE",
   "power": 316363133
  },
  {
   "server": 6075,
   "family": "ᴀʀᴄᴀɴɢᴇʟ",
   "power": 304576500
  },
  {
   "server": 6075,
   "family": "SuPerSaYianS",
   "power": 284027766
  },
  {
   "server": 6075,
   "family": "Delux",
   "power": 270383658
  },
  {
   "server": 6075,
   "family": "HeelVanguard",
   "power": 222622937
  },
  {
   "server": 6076,
   "family": "LEGENDS",
   "power": 1504048713
  },
  {
   "server": 6076,
   "family": "Revolution_Cat",
   "power": 864058160
  },
  {
   "server": 6076,
   "family": "9zTeam",
   "power": 432793097
  },
  {
   "server": 6076,
   "family": "WarriorsOfWar",
   "power": 342675583
  },
  {
   "server": 6076,
   "family": "愛TilinesPrime",
   "power": 341358217
  },
  {
   "server": 6076,
   "family": "AMANECER",
   "power": 341089407
  },
  {
   "server": 6076,
   "family": "hard",
   "power": 314976078
  },
  {
   "server": 6076,
   "family": "Pitufialdea",
   "power": 236709750
  },
  {
   "server": 6076,
   "family": "Mongolitos",
   "power": 232941312
  },
  {
   "server": 6076,
   "family": "LORDHADES",
   "power": 228540693
  },
  {
   "server": 6077,
   "family": "CachorrasMalas",
   "power": 1456904920
  },
  {
   "server": 6077,
   "family": "WarriorsOfWar",
   "power": 970681549
  },
  {
   "server": 6077,
   "family": "DARK",
   "power": 480439659
  },
  {
   "server": 6077,
   "family": "Hattori",
   "power": 398399880
  },
  {
   "server": 6077,
   "family": "Mugiwaras",
   "power": 386527980
  },
  {
   "server": 6077,
   "family": "Asuras",
   "power": 339835449
  },
  {
   "server": 6077,
   "family": "ChampiSecta",
   "power": 329341635
  },
  {
   "server": 6077,
   "family": "Mimamamemima",
   "power": 327648193
  },
  {
   "server": 6077,
   "family": "Yakuza",
   "power": 313538534
  },
  {
   "server": 6077,
   "family": "waltpadre",
   "power": 275581301
  },
  {
   "server": 6078,
   "family": "UnitedLegacy",
   "power": 1502811894
  },
  {
   "server": 6078,
   "family": "UnitedDestiny",
   "power": 1011754549
  },
  {
   "server": 6078,
   "family": "CocoLoco",
   "power": 424764157
  },
  {
   "server": 6078,
   "family": "CHAMPIONS",
   "power": 357200776
  },
  {
   "server": 6078,
   "family": "YKZMafia",
   "power": 356725582
  },
  {
   "server": 6078,
   "family": "MADE_IN_SPAIN",
   "power": 287152176
  },
  {
   "server": 6078,
   "family": "Darks",
   "power": 245671239
  },
  {
   "server": 6078,
   "family": "Mushrriors",
   "power": 229346464
  },
  {
   "server": 6078,
   "family": "KABOOM",
   "power": 218667222
  },
  {
   "server": 6078,
   "family": "₂₄ᵏ║OFICIAL",
   "power": 202978341
  },
  {
   "server": 6079,
   "family": "TrendingToP",
   "power": 1438515144
  },
  {
   "server": 6079,
   "family": "DRAGONBALLZ",
   "power": 851081031
  },
  {
   "server": 6079,
   "family": "BWC",
   "power": 536006487
  },
  {
   "server": 6079,
   "family": "Colombia",
   "power": 331786493
  },
  {
   "server": 6079,
   "family": "MURDERERS",
   "power": 309278016
  },
  {
   "server": 6079,
   "family": "EvosLegend",
   "power": 257462351
  },
  {
   "server": 6079,
   "family": "LaPrimizaCuu",
   "power": 251383083
  },
  {
   "server": 6079,
   "family": "VARSOF",
   "power": 231943223
  },
  {
   "server": 6079,
   "family": "Latinos",
   "power": 230410997
  },
  {
   "server": 6079,
   "family": "MÉXICO",
   "power": 212038621
  },
  {
   "server": 6080,
   "family": "HighTower",
   "power": 1373535192
  },
  {
   "server": 6080,
   "family": "CoolToP",
   "power": 1013444691
  },
  {
   "server": 6080,
   "family": "LosPesetas",
   "power": 503486600
  },
  {
   "server": 6080,
   "family": "ImmortalThrone",
   "power": 401857841
  },
  {
   "server": 6080,
   "family": "BadboYs",
   "power": 356685008
  },
  {
   "server": 6080,
   "family": "LatinosON",
   "power": 330876314
  },
  {
   "server": 6080,
   "family": "tribu_gallega",
   "power": 229355145
  },
  {
   "server": 6080,
   "family": "WIN",
   "power": 195984500
  },
  {
   "server": 6080,
   "family": "PocosPeroLocos",
   "power": 195381570
  },
  {
   "server": 6080,
   "family": "FachasLoks",
   "power": 187020963
  },
  {
   "server": 6081,
   "family": "KingsOfChaos",
   "power": 1172953590
  },
  {
   "server": 6081,
   "family": "ONLYSMOKE",
   "power": 994027452
  },
  {
   "server": 6081,
   "family": "Guerreros",
   "power": 539737543
  },
  {
   "server": 6081,
   "family": "ARGENTINA",
   "power": 382209713
  },
  {
   "server": 6081,
   "family": "clons",
   "power": 312972214
  },
  {
   "server": 6081,
   "family": "Aztekitas",
   "power": 264464497
  },
  {
   "server": 6081,
   "family": "COLOMBIA",
   "power": 258456997
  },
  {
   "server": 6081,
   "family": "GODS",
   "power": 248033955
  },
  {
   "server": 6081,
   "family": "LATINOAMÉRICA",
   "power": 230894324
  },
  {
   "server": 6081,
   "family": "Īŋmołal§",
   "power": 222149465
  },
  {
   "server": 6082,
   "family": "E〤ODUS",
   "power": 1224399755
  },
  {
   "server": 6082,
   "family": "CLANxMUSH",
   "power": 1193871458
  },
  {
   "server": 6082,
   "family": "LEGION",
   "power": 540701467
  },
  {
   "server": 6082,
   "family": "ꄲꋊ꒒ꌦꊰꋬꋊꇙ",
   "power": 330550183
  },
  {
   "server": 6082,
   "family": "RM7",
   "power": 309833225
  },
  {
   "server": 6082,
   "family": "EDT",
   "power": 261342758
  },
  {
   "server": 6082,
   "family": "Multivers",
   "power": 248911330
  },
  {
   "server": 6082,
   "family": "SHINIGAMI",
   "power": 239593618
  },
  {
   "server": 6082,
   "family": "messias",
   "power": 196802732
  },
  {
   "server": 6082,
   "family": "Rebeldes",
   "power": 187768311
  },
  {
   "server": 6083,
   "family": "Hunters_UY",
   "power": 1193578046
  },
  {
   "server": 6083,
   "family": "PRO_SPAIN",
   "power": 479318096
  },
  {
   "server": 6083,
   "family": "GrumpysRamen",
   "power": 405737115
  },
  {
   "server": 6083,
   "family": "GODSLAYERS",
   "power": 317253558
  },
  {
   "server": 6083,
   "family": "ShadowPalace",
   "power": 306416204
  },
  {
   "server": 6083,
   "family": "GENESIS",
   "power": 273183106
  },
  {
   "server": 6083,
   "family": "DEMENTES",
   "power": 204971129
  },
  {
   "server": 6083,
   "family": "MASTERSOFMUSH",
   "power": 176984779
  },
  {
   "server": 6083,
   "family": "LosFree2Play",
   "power": 162342931
  },
  {
   "server": 6083,
   "family": "ZzDiablitoszZ",
   "power": 157824747
  },
  {
   "server": 6084,
   "family": "SwordArtOnline",
   "power": 977654642
  },
  {
   "server": 6084,
   "family": "SousouFrieren",
   "power": 910603599
  },
  {
   "server": 6084,
   "family": "RTMlatam",
   "power": 293249191
  },
  {
   "server": 6084,
   "family": "Parabelum",
   "power": 222060117
  },
  {
   "server": 6084,
   "family": "LegionDark",
   "power": 173387412
  },
  {
   "server": 6084,
   "family": "ChampiOnes",
   "power": 158139368
  },
  {
   "server": 6084,
   "family": "IgrisSoul",
   "power": 128145447
  },
  {
   "server": 6084,
   "family": "mozqueteños",
   "power": 109711044
  },
  {
   "server": 6084,
   "family": "latan",
   "power": 65978636
  },
  {
   "server": 6084,
   "family": "insanos",
   "power": 25640723
  },
  {
   "server": 6085,
   "family": "ChampiAdictos",
   "power": 1044911347
  },
  {
   "server": 6085,
   "family": "NovaLegendsHC",
   "power": 677099122
  },
  {
   "server": 6085,
   "family": "Savage",
   "power": 295785762
  },
  {
   "server": 6085,
   "family": "Olimpo¥",
   "power": 260740658
  },
  {
   "server": 6085,
   "family": "hispanos",
   "power": 247671507
  },
  {
   "server": 6085,
   "family": "ARGENTINA",
   "power": 183664951
  },
  {
   "server": 6085,
   "family": "tateti",
   "power": 155648188
  },
  {
   "server": 6085,
   "family": "Malaventurados",
   "power": 148331123
  },
  {
   "server": 6085,
   "family": "Wizards",
   "power": 143256355
  },
  {
   "server": 6085,
   "family": "Champiñons",
   "power": 67957551
  },
  {
   "server": 6086,
   "family": "AcidSquad",
   "power": 1174891302
  },
  {
   "server": 6086,
   "family": "Saborines",
   "power": 386276098
  },
  {
   "server": 6086,
   "family": "LEGENDS",
   "power": 255565740
  },
  {
   "server": 6086,
   "family": "SMOKEFAMILY",
   "power": 214921916
  },
  {
   "server": 6086,
   "family": "GuerrerosZ",
   "power": 210995558
  },
  {
   "server": 6086,
   "family": "COLOMBIANITOS",
   "power": 185701119
  },
  {
   "server": 6086,
   "family": "Uneteeee",
   "power": 59233264
  },
  {
   "server": 6086,
   "family": "HISPANIA",
   "power": 31139434
  },
  {
   "server": 6086,
   "family": "LuisRayo",
   "power": 26692293
  },
  {
   "server": 6086,
   "family": "LosDormilones",
   "power": 12842057
  },
  {
   "server": 6087,
   "family": "HoneyMTV",
   "power": 1125682324
  },
  {
   "server": 6087,
   "family": "RT4ㅤTEAM",
   "power": 639320349
  },
  {
   "server": 6087,
   "family": "ʜᴏᴏʟɪɢᴀɴꜱ亗",
   "power": 412018594
  },
  {
   "server": 6087,
   "family": "Fénix",
   "power": 357380492
  },
  {
   "server": 6087,
   "family": "70GT",
   "power": 204893319
  },
  {
   "server": 6087,
   "family": "nosexd",
   "power": 163380938
  },
  {
   "server": 6087,
   "family": "a",
   "power": 158093098
  },
  {
   "server": 6087,
   "family": "demonicsoul",
   "power": 114457666
  },
  {
   "server": 6087,
   "family": "MancosAlPoder",
   "power": 113338181
  },
  {
   "server": 6087,
   "family": "españitaaa",
   "power": 109225731
  },
  {
   "server": 6088,
   "family": "IMPERIUM",
   "power": 1166064021
  },
  {
   "server": 6088,
   "family": "Colombia",
   "power": 354275839
  },
  {
   "server": 6088,
   "family": "Arevalo",
   "power": 255104400
  },
  {
   "server": 6088,
   "family": "PRØEsp",
   "power": 203741913
  },
  {
   "server": 6088,
   "family": "SoloLeveling",
   "power": 188002111
  },
  {
   "server": 6088,
   "family": "tremosqueteros",
   "power": 173912493
  },
  {
   "server": 6088,
   "family": "D4rckAbiss",
   "power": 136338853
  },
  {
   "server": 6088,
   "family": "Fuego",
   "power": 129460088
  },
  {
   "server": 6088,
   "family": "gerrerosviking",
   "power": 104636480
  },
  {
   "server": 6088,
   "family": "Santuario",
   "power": 25357715
  },
  {
   "server": 6089,
   "family": "Indestructible",
   "power": 722450881
  },
  {
   "server": 6089,
   "family": "Dominators",
   "power": 586126873
  },
  {
   "server": 6089,
   "family": "BLACKDRAGONS",
   "power": 498373009
  },
  {
   "server": 6089,
   "family": "MexicanosGG",
   "power": 216888602
  },
  {
   "server": 6089,
   "family": "Chapines502",
   "power": 155747419
  },
  {
   "server": 6089,
   "family": "Quesillo",
   "power": 151465975
  },
  {
   "server": 6089,
   "family": "Yperrushh",
   "power": 151168133
  },
  {
   "server": 6089,
   "family": "Argentos",
   "power": 82508313
  },
  {
   "server": 6089,
   "family": "Overlords2",
   "power": 75381631
  },
  {
   "server": 6089,
   "family": "Legends",
   "power": 32228597
  },
  {
   "server": 6090,
   "family": "꧁BlackClover꧂",
   "power": 1228052754
  },
  {
   "server": 6090,
   "family": "TheCrew",
   "power": 457532182
  },
  {
   "server": 6090,
   "family": "Terreneitors",
   "power": 353122774
  },
  {
   "server": 6090,
   "family": "nurelianos",
   "power": 286283434
  },
  {
   "server": 6090,
   "family": "GoblinSlayer",
   "power": 184150942
  },
  {
   "server": 6090,
   "family": "skilers",
   "power": 180367193
  },
  {
   "server": 6090,
   "family": "Mushroomlife",
   "power": 168902951
  },
  {
   "server": 6090,
   "family": "Shrooms",
   "power": 122166354
  },
  {
   "server": 6090,
   "family": "Shaoranysakura",
   "power": 81907529
  },
  {
   "server": 6090,
   "family": "Eternity",
   "power": 81482874
  },
  {
   "server": 6091,
   "family": "ḰaiʝinƬeikσ𝐤u",
   "power": 1009833671
  },
  {
   "server": 6091,
   "family": "CoolTop",
   "power": 280706115
  },
  {
   "server": 6091,
   "family": "Callampines",
   "power": 255814893
  },
  {
   "server": 6091,
   "family": "TheShrooms",
   "power": 195920874
  },
  {
   "server": 6091,
   "family": "TopTier",
   "power": 177557208
  },
  {
   "server": 6091,
   "family": "Clan07",
   "power": 146108696
  },
  {
   "server": 6091,
   "family": "Quidam",
   "power": 136180483
  },
  {
   "server": 6091,
   "family": "《NewAventure》",
   "power": 131237453
  },
  {
   "server": 6091,
   "family": "Legion",
   "power": 100225203
  },
  {
   "server": 6091,
   "family": "kokoaland",
   "power": 35973453
  },
  {
   "server": 6092,
   "family": "Lunaria",
   "power": 1044848646
  },
  {
   "server": 6092,
   "family": "Solaris",
   "power": 558929110
  },
  {
   "server": 6092,
   "family": "TOPxCLANES",
   "power": 352727557
  },
  {
   "server": 6092,
   "family": "OLYMPO°LM",
   "power": 255098536
  },
  {
   "server": 6092,
   "family": "Alucines",
   "power": 202701109
  },
  {
   "server": 6092,
   "family": "Suŋ_Mooŋ",
   "power": 158361676
  },
  {
   "server": 6092,
   "family": "DANGEROUS",
   "power": 140251714
  },
  {
   "server": 6092,
   "family": "LaGrasaSDLG",
   "power": 138237808
  },
  {
   "server": 6092,
   "family": "Ragnarok",
   "power": 89085715
  },
  {
   "server": 6092,
   "family": "LeónCarmesí",
   "power": 73784350
  },
  {
   "server": 6093,
   "family": "AFCARTEL",
   "power": 929753895
  },
  {
   "server": 6093,
   "family": "Olimpo",
   "power": 315445099
  },
  {
   "server": 6093,
   "family": "Beaters",
   "power": 250483925
  },
  {
   "server": 6093,
   "family": "Españoles",
   "power": 204479415
  },
  {
   "server": 6093,
   "family": "Drakensang",
   "power": 174772532
  },
  {
   "server": 6093,
   "family": "RG4",
   "power": 158734099
  },
  {
   "server": 6093,
   "family": "ZLEGION",
   "power": 136387512
  },
  {
   "server": 6093,
   "family": "RoninPride",
   "power": 95394562
  },
  {
   "server": 6093,
   "family": "ACRIBILLADORES",
   "power": 18278246
  },
  {
   "server": 6093,
   "family": "DYNASTYmx",
   "power": 14888097
  },
  {
   "server": 6094,
   "family": "𝙎𝙎𝙍",
   "power": 1143933229
  },
  {
   "server": 6094,
   "family": "MaCUMberos",
   "power": 511969872
  },
  {
   "server": 6094,
   "family": "SantaFilomena",
   "power": 364845461
  },
  {
   "server": 6094,
   "family": "TÜRKİYE",
   "power": 287540634
  },
  {
   "server": 6094,
   "family": "SetasChampions",
   "power": 206406016
  },
  {
   "server": 6094,
   "family": "LATAM",
   "power": 189561501
  },
  {
   "server": 6094,
   "family": "OLIMPO",
   "power": 163516670
  },
  {
   "server": 6094,
   "family": "loslorrd",
   "power": 159663802
  },
  {
   "server": 6094,
   "family": "Peru",
   "power": 153554391
  },
  {
   "server": 6094,
   "family": "THExFAMILY",
   "power": 146322269
  },
  {
   "server": 6095,
   "family": "OnePiece",
   "power": 1082942354
  },
  {
   "server": 6095,
   "family": "TheLastWar",
   "power": 826185188
  },
  {
   "server": 6095,
   "family": "KONOHA",
   "power": 240908133
  },
  {
   "server": 6095,
   "family": "Alphas",
   "power": 219308979
  },
  {
   "server": 6095,
   "family": "MALAVENTURADOS",
   "power": 205285507
  },
  {
   "server": 6095,
   "family": "AFKs",
   "power": 189439051
  },
  {
   "server": 6095,
   "family": "Alucinógenos",
   "power": 167028311
  },
  {
   "server": 6095,
   "family": "elcasador32415",
   "power": 161074923
  },
  {
   "server": 6095,
   "family": "LKWOLF",
   "power": 141329765
  },
  {
   "server": 6095,
   "family": "Funjiworld",
   "power": 125546436
  },
  {
   "server": 6096,
   "family": "La_HoRdA",
   "power": 1155598237
  },
  {
   "server": 6096,
   "family": "༒FamilyCrew",
   "power": 1021020369
  },
  {
   "server": 6096,
   "family": "NÉMESIS",
   "power": 357748730
  },
  {
   "server": 6096,
   "family": "Valhalla",
   "power": 344977103
  },
  {
   "server": 6096,
   "family": "ATR",
   "power": 209709178
  },
  {
   "server": 6096,
   "family": "LUCIFER",
   "power": 196137852
  },
  {
   "server": 6096,
   "family": "FFJR",
   "power": 195834738
  },
  {
   "server": 6096,
   "family": "Clover",
   "power": 195712392
  },
  {
   "server": 6096,
   "family": "zetas",
   "power": 185405386
  },
  {
   "server": 6096,
   "family": "LEGEND",
   "power": 157954846
  },
  {
   "server": 6097,
   "family": "OLIMPO",
   "power": 1127827359
  },
  {
   "server": 6097,
   "family": "The_Wardens",
   "power": 732047373
  },
  {
   "server": 6097,
   "family": "Top_Army",
   "power": 403829648
  },
  {
   "server": 6097,
   "family": "GLOBAL",
   "power": 332374345
  },
  {
   "server": 6097,
   "family": "BLACKﾠBULLS",
   "power": 327315733
  },
  {
   "server": 6097,
   "family": "VIPxCLAN",
   "power": 257184992
  },
  {
   "server": 6097,
   "family": "Conquerors",
   "power": 219951446
  },
  {
   "server": 6097,
   "family": "SevillaCity",
   "power": 192871775
  },
  {
   "server": 6097,
   "family": "TENKO",
   "power": 150336169
  },
  {
   "server": 6097,
   "family": "ᴺⁱⁿᵗᵉⁿᵈᵒ®",
   "power": 146993324
  },
  {
   "server": 6098,
   "family": "LegionZombie",
   "power": 1038059657
  },
  {
   "server": 6098,
   "family": "LATAMSTOP",
   "power": 950348051
  },
  {
   "server": 6098,
   "family": "SOLO_LEVELING",
   "power": 384554320
  },
  {
   "server": 6098,
   "family": "ArmadaLatina",
   "power": 232089950
  },
  {
   "server": 6098,
   "family": "MushroomGang",
   "power": 224497492
  },
  {
   "server": 6098,
   "family": "°°SPARTA°°",
   "power": 220638111
  },
  {
   "server": 6098,
   "family": "Champiñonesgod",
   "power": 214676018
  },
  {
   "server": 6098,
   "family": "ReinoChampiñon",
   "power": 194023787
  },
  {
   "server": 6098,
   "family": "LatinKings",
   "power": 189496787
  },
  {
   "server": 6098,
   "family": "Chiwas",
   "power": 180671105
  },
  {
   "server": 6099,
   "family": "Bloodborne",
   "power": 781948843
  },
  {
   "server": 6099,
   "family": "srzodiaco",
   "power": 658534963
  },
  {
   "server": 6099,
   "family": "LegionWorld",
   "power": 501875673
  },
  {
   "server": 6099,
   "family": "CrazyWarriors",
   "power": 330885057
  },
  {
   "server": 6099,
   "family": "〘Ł€Ꮆ€ŇĐ〙",
   "power": 253985603
  },
  {
   "server": 6099,
   "family": "Akatsuki",
   "power": 249004160
  },
  {
   "server": 6099,
   "family": "Cónclave",
   "power": 183832816
  },
  {
   "server": 6099,
   "family": "Alucinógenos",
   "power": 169105339
  },
  {
   "server": 6099,
   "family": "champis",
   "power": 162501569
  },
  {
   "server": 6099,
   "family": "Warriors",
   "power": 158381100
  },
  {
   "server": 6100,
   "family": "Fenix",
   "power": 976093664
  },
  {
   "server": 6100,
   "family": "Assassins",
   "power": 890285565
  },
  {
   "server": 6100,
   "family": "Byakko",
   "power": 844867874
  },
  {
   "server": 6100,
   "family": "Legacy",
   "power": 256871745
  },
  {
   "server": 6100,
   "family": "忍Ōtsutsuki族",
   "power": 222195832
  },
  {
   "server": 6100,
   "family": "Top100",
   "power": 205242343
  },
  {
   "server": 6100,
   "family": "ㄨBANDIDOSㄨ",
   "power": 183614544
  },
  {
   "server": 6100,
   "family": "ThisNarnia",
   "power": 179229536
  },
  {
   "server": 6100,
   "family": "parteCULOS",
   "power": 177052681
  },
  {
   "server": 6100,
   "family": "Akatsuki",
   "power": 165459839
  },
  {
   "server": 6101,
   "family": "TopOlympus",
   "power": 957380327
  },
  {
   "server": 6101,
   "family": "Latinos",
   "power": 818643945
  },
  {
   "server": 6101,
   "family": "SanVerganza",
   "power": 535991418
  },
  {
   "server": 6101,
   "family": "SnowFlake",
   "power": 286065986
  },
  {
   "server": 6101,
   "family": "CrazyGang",
   "power": 229445620
  },
  {
   "server": 6101,
   "family": "ElCulto",
   "power": 218791346
  },
  {
   "server": 6101,
   "family": "BLACK·WOLF",
   "power": 202927363
  },
  {
   "server": 6101,
   "family": "OldSchool",
   "power": 159357326
  },
  {
   "server": 6101,
   "family": "ClanPe",
   "power": 155367745
  },
  {
   "server": 6101,
   "family": "FurryLand",
   "power": 150465653
  },
  {
   "server": 6102,
   "family": "DarkSouls",
   "power": 967686849
  },
  {
   "server": 6102,
   "family": "OnlyFans",
   "power": 794013129
  },
  {
   "server": 6102,
   "family": "OrdaVikinga",
   "power": 325633788
  },
  {
   "server": 6102,
   "family": "The༒LOM༒United",
   "power": 243354555
  },
  {
   "server": 6102,
   "family": "𝔸𝕣𝕚𝕖𝕤",
   "power": 223532903
  },
  {
   "server": 6102,
   "family": "latinos",
   "power": 221634502
  },
  {
   "server": 6102,
   "family": "Xvideos",
   "power": 203964671
  },
  {
   "server": 6102,
   "family": "Newbie",
   "power": 203679725
  },
  {
   "server": 6102,
   "family": "OnePiece",
   "power": 180580088
  },
  {
   "server": 6102,
   "family": "LostHumanity",
   "power": 168828557
  },
  {
   "server": 6103,
   "family": "Los7Pecados",
   "power": 987264626
  },
  {
   "server": 6103,
   "family": "Wyverns",
   "power": 484475465
  },
  {
   "server": 6103,
   "family": "Espectral2024",
   "power": 475031964
  },
  {
   "server": 6103,
   "family": "Trauma2",
   "power": 378341447
  },
  {
   "server": 6103,
   "family": "HollowSK",
   "power": 294788178
  },
  {
   "server": 6103,
   "family": "LATINOS",
   "power": 258115302
  },
  {
   "server": 6103,
   "family": "IMPERIO",
   "power": 177837184
  },
  {
   "server": 6103,
   "family": "LaMafilia",
   "power": 176943491
  },
  {
   "server": 6103,
   "family": "REYES",
   "power": 162572525
  },
  {
   "server": 6103,
   "family": "TheBrokenHeart",
   "power": 158956070
  },
  {
   "server": 6104,
   "family": "OnlySmoke",
   "power": 909520525
  },
  {
   "server": 6104,
   "family": "Latin",
   "power": 490365736
  },
  {
   "server": 6104,
   "family": "BoB",
   "power": 340356320
  },
  {
   "server": 6104,
   "family": "MONSTERSH",
   "power": 242063074
  },
  {
   "server": 6104,
   "family": "LEGENDS",
   "power": 230899533
  },
  {
   "server": 6104,
   "family": "FurryCampus",
   "power": 228639919
  },
  {
   "server": 6104,
   "family": "DarkHole",
   "power": 208949970
  },
  {
   "server": 6104,
   "family": "NightRaid",
   "power": 199392046
  },
  {
   "server": 6104,
   "family": "PerkaHolics",
   "power": 185658860
  },
  {
   "server": 6104,
   "family": "TopLegenDs",
   "power": 177993962
  },
  {
   "server": 6105,
   "family": "Guilty",
   "power": 902753804
  },
  {
   "server": 6105,
   "family": "Valhalla",
   "power": 573125886
  },
  {
   "server": 6105,
   "family": "MapachesClub",
   "power": 458407011
  },
  {
   "server": 6105,
   "family": "SlayerKings",
   "power": 219615225
  },
  {
   "server": 6105,
   "family": "Berserkers",
   "power": 216250313
  },
  {
   "server": 6105,
   "family": "LatinHeroe",
   "power": 188566410
  },
  {
   "server": 6105,
   "family": "TrueDemons",
   "power": 180960826
  },
  {
   "server": 6105,
   "family": "Titanes",
   "power": 162332280
  },
  {
   "server": 6105,
   "family": "Turtels",
   "power": 153888219
  },
  {
   "server": 6105,
   "family": "Teemo",
   "power": 151941773
  },
  {
   "server": 6106,
   "family": "ChampionLeague",
   "power": 752678404
  },
  {
   "server": 6106,
   "family": "AStars",
   "power": 524374562
  },
  {
   "server": 6106,
   "family": "OrtziGamerYOUt",
   "power": 391948163
  },
  {
   "server": 6106,
   "family": "clan_TM",
   "power": 282233765
  },
  {
   "server": 6106,
   "family": "Irreversible",
   "power": 244578847
  },
  {
   "server": 6106,
   "family": "Nirvana",
   "power": 159527637
  },
  {
   "server": 6106,
   "family": "Astro",
   "power": 136991613
  },
  {
   "server": 6106,
   "family": "DARK",
   "power": 130940757
  },
  {
   "server": 6106,
   "family": "ASGARD",
   "power": 127561463
  },
  {
   "server": 6106,
   "family": "latinos",
   "power": 122259304
  },
  {
   "server": 6107,
   "family": "TopGang",
   "power": 745480423
  },
  {
   "server": 6107,
   "family": "ZonaRoja",
   "power": 547669297
  },
  {
   "server": 6107,
   "family": "Legendary",
   "power": 467743576
  },
  {
   "server": 6107,
   "family": "TkxSuicide",
   "power": 245028919
  },
  {
   "server": 6107,
   "family": "HongoDrogon",
   "power": 174649102
  },
  {
   "server": 6107,
   "family": "ElTopo",
   "power": 173409719
  },
  {
   "server": 6107,
   "family": "Nakamas",
   "power": 164548704
  },
  {
   "server": 6107,
   "family": "Pirats",
   "power": 155504470
  },
  {
   "server": 6107,
   "family": "Puchunguitos",
   "power": 155001852
  },
  {
   "server": 6107,
   "family": "Ares",
   "power": 140541133
  },
  {
   "server": 6111,
   "family": "Chaos亗Santuar",
   "power": 509505126
  },
  {
   "server": 6111,
   "family": "ᴸᴱᴳᴵᴼᴺㅤᴼᴾ",
   "power": 490932280
  },
  {
   "server": 6111,
   "family": "OrtziGamerYouT",
   "power": 169372856
  },
  {
   "server": 6111,
   "family": "FÉNIX",
   "power": 97166520
  },
  {
   "server": 6111,
   "family": "Infernus",
   "power": 90293343
  },
  {
   "server": 6111,
   "family": "LosPaleros",
   "power": 90183140
  },
  {
   "server": 6111,
   "family": "Paradise",
   "power": 80050685
  },
  {
   "server": 6111,
   "family": "Némesis",
   "power": 76502020
  },
  {
   "server": 6111,
   "family": "Inefable",
   "power": 73609348
  },
  {
   "server": 6111,
   "family": "666_TokioManji",
   "power": 69390897
  },
  {
   "server": 6112,
   "family": "The_Wardens",
   "power": 387236455
  },
  {
   "server": 6112,
   "family": "FamilyChampi",
   "power": 274282149
  },
  {
   "server": 6112,
   "family": "KANTO",
   "power": 239174259
  },
  {
   "server": 6112,
   "family": "LEGENDS",
   "power": 43760850
  },
  {
   "server": 6112,
   "family": "PoderLatino",
   "power": 42480351
  },
  {
   "server": 6112,
   "family": "LosMancos",
   "power": 39726319
  },
  {
   "server": 6112,
   "family": "WindBreaker",
   "power": 37770001
  },
  {
   "server": 6112,
   "family": "NAMELESS",
   "power": 36293942
  },
  {
   "server": 6112,
   "family": "KorpsDeCrieg",
   "power": 22117978
  },
  {
   "server": 6112,
   "family": "SUPREME",
   "power": 12255255
  },
  {
   "server": 6113,
   "family": "XxNightSlayeRx",
   "power": 10558477
  },
  {
   "server": 6113,
   "family": "THEbigsword",
   "power": 2476374
  },
  {
   "server": 6113,
   "family": "Valhalla",
   "power": 883967
  },
  {
   "server": 6113,
   "family": "IMMORTALFAMILY",
   "power": 0
  },
  {
   "server": 6113,
   "family": "TeamChile",
   "power": 0
  },
  {
   "server": 6113,
   "family": "Boletaires",
   "power": 0
  },
  {
   "server": 6113,
   "family": "NoLimits",
   "power": 0
  },
  {
   "server": 6113,
   "family": "WarriorsOfWar",
   "power": 0
  },
  {
   "server": 6113,
   "family": "OlimpoDeDioses",
   "power": 0
  },
  {
   "server": 6113,
   "family": "FairyTail",
   "power": 0
  },
  {
   "server": 6114,
   "family": "Top_Army",
   "power": 118242013
  },
  {
   "server": 6114,
   "family": "𝓡𝓪𝓰𝓷𝓪𝓻",
   "power": 45778454
  },
  {
   "server": 6114,
   "family": "DIABLO",
   "power": 36242822
  },
  {
   "server": 6114,
   "family": "HDM",
   "power": 0
  },
  {
   "server": 6114,
   "family": "Avengers╰‿╯",
   "power": 0
  },
  {
   "server": 6114,
   "family": "JųгaTє๓ρεรT",
   "power": 0
  },
  {
   "server": 6114,
   "family": "Latinos",
   "power": 0
  },
  {
   "server": 6114,
   "family": "Hispanos",
   "power": 0
  },
  {
   "server": 6114,
   "family": "TeamLatins",
   "power": 0
  },
  {
   "server": 6114,
   "family": "𝐁𝐥𝐚𝐲𝐛𝐨𝐲",
   "power": 0
  },
  {
   "server": 6115,
   "family": "OnlyWarrior",
   "power": 59524129
  },
  {
   "server": 6115,
   "family": "NUECES",
   "power": 31210265
  },
  {
   "server": 6115,
   "family": "OldSchool",
   "power": 18264393
  },
  {
   "server": 6115,
   "family": "LOS_BÉLICOS",
   "power": 0
  },
  {
   "server": 6115,
   "family": "champion",
   "power": 0
  },
  {
   "server": 6115,
   "family": "samuel",
   "power": 0
  },
  {
   "server": 6115,
   "family": "Nemura",
   "power": 0
  },
  {
   "server": 6115,
   "family": "FunGusClan",
   "power": 0
  },
  {
   "server": 6115,
   "family": "CELESTIALFORTE",
   "power": 0
  },
  {
   "server": 6115,
   "family": "VMLM",
   "power": 0
  },
  {
   "server": 11001,
   "family": "UlsaN_ClaN",
   "power": 2075922400
  },
  {
   "server": 11001,
   "family": "BrasilForce",
   "power": 1581875101
  },
  {
   "server": 11001,
   "family": "MiauMiau",
   "power": 1496114034
  },
  {
   "server": 11001,
   "family": "OsViraLatas",
   "power": 1400092584
  },
  {
   "server": 11001,
   "family": "Akatsuki",
   "power": 767058368
  },
  {
   "server": 11001,
   "family": "BRASIL",
   "power": 651359315
  },
  {
   "server": 11001,
   "family": "IronSky",
   "power": 325049095
  },
  {
   "server": 11001,
   "family": "BANG",
   "power": 262550148
  },
  {
   "server": 11001,
   "family": "MorningStars",
   "power": 255691160
  },
  {
   "server": 11001,
   "family": "Ahjin",
   "power": 230842236
  },
  {
   "server": 11002,
   "family": "Resistência",
   "power": 2103655407
  },
  {
   "server": 11002,
   "family": "YGGDRASIL",
   "power": 1971728918
  },
  {
   "server": 11002,
   "family": "YGG_ASGARD",
   "power": 986227123
  },
  {
   "server": 11002,
   "family": "Drakensang",
   "power": 513044059
  },
  {
   "server": 11002,
   "family": "WonderLand",
   "power": 499647305
  },
  {
   "server": 11002,
   "family": "BRASIL",
   "power": 471409299
  },
  {
   "server": 11002,
   "family": "CogumeloBrasil",
   "power": 390790442
  },
  {
   "server": 11002,
   "family": "Brasil",
   "power": 374269089
  },
  {
   "server": 11002,
   "family": "ChaosMushrooms",
   "power": 363336748
  },
  {
   "server": 11002,
   "family": "YakuzaBR",
   "power": 268166533
  },
  {
   "server": 11003,
   "family": "Blazzers",
   "power": 2032316172
  },
  {
   "server": 11003,
   "family": "KillForFunghi",
   "power": 1706693110
  },
  {
   "server": 11003,
   "family": "Bla2zers",
   "power": 914992863
  },
  {
   "server": 11003,
   "family": "SoulBR",
   "power": 619250631
  },
  {
   "server": 11003,
   "family": "HiTkill",
   "power": 413564016
  },
  {
   "server": 11003,
   "family": "CalvosAnonimos",
   "power": 383448743
  },
  {
   "server": 11003,
   "family": "NightRaid",
   "power": 313235677
  },
  {
   "server": 11003,
   "family": "AKATSUKI",
   "power": 254009219
  },
  {
   "server": 11003,
   "family": "4i20_BR",
   "power": 245599068
  },
  {
   "server": 11003,
   "family": "reis",
   "power": 172152176
  },
  {
   "server": 11004,
   "family": "CARAMELOBR",
   "power": 1690282301
  },
  {
   "server": 11004,
   "family": "Avangers",
   "power": 1232529528
  },
  {
   "server": 11004,
   "family": "EliteBR",
   "power": 733740015
  },
  {
   "server": 11004,
   "family": "Lucky",
   "power": 655690863
  },
  {
   "server": 11004,
   "family": "BRmushrooms",
   "power": 569926061
  },
  {
   "server": 11004,
   "family": "Brasil",
   "power": 562358232
  },
  {
   "server": 11004,
   "family": "ROCAN",
   "power": 249783478
  },
  {
   "server": 11004,
   "family": "AntiLGBT",
   "power": 241911909
  },
  {
   "server": 11004,
   "family": "Method",
   "power": 223540300
  },
  {
   "server": 11004,
   "family": "BRAZUKAS",
   "power": 209091697
  },
  {
   "server": 11005,
   "family": "Ragnarok",
   "power": 1998338615
  },
  {
   "server": 11005,
   "family": "𓃮FIERCE𓃮",
   "power": 1470001183
  },
  {
   "server": 11005,
   "family": "Brasileiros",
   "power": 464872378
  },
  {
   "server": 11005,
   "family": "Realeza",
   "power": 391287589
  },
  {
   "server": 11005,
   "family": "FANATICOS",
   "power": 214100190
  },
  {
   "server": 11005,
   "family": "Valhala",
   "power": 211153521
  },
  {
   "server": 11005,
   "family": "BrasilTOP1",
   "power": 209626579
  },
  {
   "server": 11005,
   "family": "SoulEterium",
   "power": 187513533
  },
  {
   "server": 11005,
   "family": "IsekaiMushroom",
   "power": 175318042
  },
  {
   "server": 11005,
   "family": "Freekings",
   "power": 105449283
  },
  {
   "server": 11006,
   "family": "ʳᵍᵏㅤRagnarok",
   "power": 1593287107
  },
  {
   "server": 11006,
   "family": "BlackMushroom",
   "power": 1493337381
  },
  {
   "server": 11006,
   "family": "ƇꝒㅤⱿƸⱤø",
   "power": 913183988
  },
  {
   "server": 11006,
   "family": "Brasil",
   "power": 532864429
  },
  {
   "server": 11006,
   "family": "BR_IMPERIAL",
   "power": 347858270
  },
  {
   "server": 11006,
   "family": "Top_rank",
   "power": 283717313
  },
  {
   "server": 11006,
   "family": "IMPÉRIO",
   "power": 281558361
  },
  {
   "server": 11006,
   "family": "TryHard",
   "power": 246131122
  },
  {
   "server": 11006,
   "family": "CAMP",
   "power": 232946846
  },
  {
   "server": 11006,
   "family": "Magikarp",
   "power": 232649504
  },
  {
   "server": 11007,
   "family": "Espartanos",
   "power": 1762039239
  },
  {
   "server": 11007,
   "family": "ᴀᴘᴏᴄᴀʟʏᴘsᴇッ",
   "power": 1638997634
  },
  {
   "server": 11007,
   "family": "Tebanos",
   "power": 597266858
  },
  {
   "server": 11007,
   "family": "Ʀєвirτнッ",
   "power": 476559867
  },
  {
   "server": 11007,
   "family": "Cabaré",
   "power": 437100918
  },
  {
   "server": 11007,
   "family": "NoiasBR",
   "power": 346505338
  },
  {
   "server": 11007,
   "family": "HUNTERS",
   "power": 303956717
  },
  {
   "server": 11007,
   "family": "Blackcats",
   "power": 274073328
  },
  {
   "server": 11007,
   "family": "NaçãoBr",
   "power": 267764058
  },
  {
   "server": 11007,
   "family": "BlackOut",
   "power": 203569507
  },
  {
   "server": 11008,
   "family": "Midgard",
   "power": 925116011
  },
  {
   "server": 11008,
   "family": "Yggdrasil",
   "power": 907399733
  },
  {
   "server": 11008,
   "family": "AstralBR",
   "power": 846853920
  },
  {
   "server": 11008,
   "family": "Asgard",
   "power": 593989520
  },
  {
   "server": 11008,
   "family": "assassinos",
   "power": 360080939
  },
  {
   "server": 11008,
   "family": "Fortune",
   "power": 230539909
  },
  {
   "server": 11008,
   "family": "BRAZUKAS",
   "power": 228813141
  },
  {
   "server": 11008,
   "family": "winx",
   "power": 216725481
  },
  {
   "server": 11008,
   "family": "NAZARICK",
   "power": 211214627
  },
  {
   "server": 11008,
   "family": "AfterLife",
   "power": 166640101
  },
  {
   "server": 11009,
   "family": "BrTeam",
   "power": 1861603799
  },
  {
   "server": 11009,
   "family": "Brasil_Team",
   "power": 1297965027
  },
  {
   "server": 11009,
   "family": "FOXBR",
   "power": 813034834
  },
  {
   "server": 11009,
   "family": "VelhaGuardaBR",
   "power": 589567094
  },
  {
   "server": 11009,
   "family": "LosGrandesBR",
   "power": 205818106
  },
  {
   "server": 11009,
   "family": "TerraLa",
   "power": 189571322
  },
  {
   "server": 11009,
   "family": "BR_SPORTS",
   "power": 178495307
  },
  {
   "server": 11009,
   "family": "YggBrasil",
   "power": 168823816
  },
  {
   "server": 11009,
   "family": "LastLegacy",
   "power": 164081804
  },
  {
   "server": 11009,
   "family": "TropaBrasil",
   "power": 157841181
  },
  {
   "server": 11010,
   "family": "BlackBull",
   "power": 1966183042
  },
  {
   "server": 11010,
   "family": "Knight",
   "power": 1363248020
  },
  {
   "server": 11010,
   "family": "Elysium",
   "power": 565267577
  },
  {
   "server": 11010,
   "family": "Rexpeita",
   "power": 425640333
  },
  {
   "server": 11010,
   "family": "ASGARD",
   "power": 351868954
  },
  {
   "server": 11010,
   "family": "corporaçãobr",
   "power": 297732546
  },
  {
   "server": 11010,
   "family": "ETERNOS",
   "power": 241757600
  },
  {
   "server": 11010,
   "family": "Hanatome",
   "power": 237233510
  },
  {
   "server": 11010,
   "family": "HATAKE",
   "power": 195532178
  },
  {
   "server": 11010,
   "family": "BRASIL",
   "power": 134407126
  },
  {
   "server": 11011,
   "family": "G᥆DFᥲthᥱr",
   "power": 1881633280
  },
  {
   "server": 11011,
   "family": "LOUD",
   "power": 757057404
  },
  {
   "server": 11011,
   "family": "Brasil",
   "power": 349411199
  },
  {
   "server": 11011,
   "family": "ONIPOTENTES",
   "power": 315674738
  },
  {
   "server": 11011,
   "family": "GodFather",
   "power": 273101252
  },
  {
   "server": 11011,
   "family": "Brazucas",
   "power": 270640268
  },
  {
   "server": 11011,
   "family": "NATIVOS",
   "power": 268609859
  },
  {
   "server": 11011,
   "family": "FURIAA",
   "power": 234500419
  },
  {
   "server": 11011,
   "family": "DeadlyClaw_BR",
   "power": 221250388
  },
  {
   "server": 11011,
   "family": "ELLITEBR",
   "power": 199935625
  },
  {
   "server": 11014,
   "family": "UniTedBrothers",
   "power": 1300425648
  },
  {
   "server": 11014,
   "family": "Brazucas",
   "power": 941189893
  },
  {
   "server": 11014,
   "family": "PROJECT_BR",
   "power": 917155737
  },
  {
   "server": 11014,
   "family": "CoguCabeças",
   "power": 286471790
  },
  {
   "server": 11014,
   "family": "BERSERK",
   "power": 231491944
  },
  {
   "server": 11014,
   "family": "WarriorsBR",
   "power": 205510377
  },
  {
   "server": 11014,
   "family": "UA_ACADEMY",
   "power": 194516540
  },
  {
   "server": 11014,
   "family": "IMPUROsBR",
   "power": 188048668
  },
  {
   "server": 11014,
   "family": "Mushroons",
   "power": 179067144
  },
  {
   "server": 11014,
   "family": "SkyClã",
   "power": 91634981
  },
  {
   "server": 11015,
   "family": "Strix",
   "power": 1682316476
  },
  {
   "server": 11015,
   "family": "Sillence",
   "power": 959448654
  },
  {
   "server": 11015,
   "family": "DARKSIDE",
   "power": 455000141
  },
  {
   "server": 11015,
   "family": "aleviou",
   "power": 365236566
  },
  {
   "server": 11015,
   "family": "Caçadorez",
   "power": 263755656
  },
  {
   "server": 11015,
   "family": "Berserk",
   "power": 257738126
  },
  {
   "server": 11015,
   "family": "Xvideos",
   "power": 253213999
  },
  {
   "server": 11015,
   "family": "Brazucas",
   "power": 243380153
  },
  {
   "server": 11015,
   "family": "BRASIL",
   "power": 198909607
  },
  {
   "server": 11015,
   "family": "VASCO",
   "power": 182442317
  },
  {
   "server": 11016,
   "family": "NAZARICK",
   "power": 1531236911
  },
  {
   "server": 11016,
   "family": "NightRaid",
   "power": 1296559889
  },
  {
   "server": 11016,
   "family": "One_Piece",
   "power": 511292450
  },
  {
   "server": 11016,
   "family": "Shadow",
   "power": 290252884
  },
  {
   "server": 11016,
   "family": "GodofWar",
   "power": 276349442
  },
  {
   "server": 11016,
   "family": "TeamŌkami",
   "power": 194180217
  },
  {
   "server": 11016,
   "family": "Moranguinhos",
   "power": 193654476
  },
  {
   "server": 11016,
   "family": "Monark",
   "power": 185466232
  },
  {
   "server": 11016,
   "family": "CogumelosBR",
   "power": 153024119
  },
  {
   "server": 11016,
   "family": "Ahjin",
   "power": 145839531
  },
  {
   "server": 11017,
   "family": "Brasil",
   "power": 1570900652
  },
  {
   "server": 11017,
   "family": "Yakuza",
   "power": 1385214001
  },
  {
   "server": 11017,
   "family": "CORRUPÇÃO",
   "power": 1218074349
  },
  {
   "server": 11017,
   "family": "Valhalla",
   "power": 271658471
  },
  {
   "server": 11017,
   "family": "KingKogumelo",
   "power": 238563013
  },
  {
   "server": 11017,
   "family": "BRcarai",
   "power": 236336956
  },
  {
   "server": 11017,
   "family": "cogumeloLOCAO",
   "power": 233506486
  },
  {
   "server": 11017,
   "family": "BLITZ",
   "power": 156471171
  },
  {
   "server": 11017,
   "family": "TOPsBRASIL",
   "power": 148508660
  },
  {
   "server": 11017,
   "family": "MBL",
   "power": 130775387
  },
  {
   "server": 11018,
   "family": "MTC_MYSTIC",
   "power": 1697451032
  },
  {
   "server": 11018,
   "family": "Oblivion",
   "power": 518597818
  },
  {
   "server": 11018,
   "family": "●◉ＡＫＡＴＳＵＫＩ◉●",
   "power": 300420717
  },
  {
   "server": 11018,
   "family": "LEGEND",
   "power": 285639391
  },
  {
   "server": 11018,
   "family": "Rapaiz",
   "power": 255791100
  },
  {
   "server": 11018,
   "family": "AKATSUKI",
   "power": 249024220
  },
  {
   "server": 11018,
   "family": "Punheteros",
   "power": 182127579
  },
  {
   "server": 11018,
   "family": "IRMANDADE",
   "power": 160419667
  },
  {
   "server": 11018,
   "family": "Aliança",
   "power": 154780272
  },
  {
   "server": 11018,
   "family": "Brigata",
   "power": 128691575
  },
  {
   "server": 11019,
   "family": "Yakuza",
   "power": 1590096524
  },
  {
   "server": 11019,
   "family": "Coconuts",
   "power": 1476808693
  },
  {
   "server": 11019,
   "family": "Demon",
   "power": 494803364
  },
  {
   "server": 11019,
   "family": "brasil",
   "power": 364661268
  },
  {
   "server": 11019,
   "family": "Akatsuki°",
   "power": 250322515
  },
  {
   "server": 11019,
   "family": "brazilflips",
   "power": 207572013
  },
  {
   "server": 11019,
   "family": "topES",
   "power": 164294405
  },
  {
   "server": 11019,
   "family": "WARRIORS_BR",
   "power": 159485248
  },
  {
   "server": 11019,
   "family": "CogumelosBR",
   "power": 157475822
  },
  {
   "server": 11019,
   "family": "BRAZIL",
   "power": 114026280
  },
  {
   "server": 11020,
   "family": "CaóticosBR",
   "power": 1691443841
  },
  {
   "server": 11020,
   "family": "Cogumelos",
   "power": 742447957
  },
  {
   "server": 11020,
   "family": "LosPatitos",
   "power": 727174173
  },
  {
   "server": 11020,
   "family": "yggdrasil",
   "power": 558464001
  },
  {
   "server": 11020,
   "family": "FamíliaBr",
   "power": 389879179
  },
  {
   "server": 11020,
   "family": "NewOrder",
   "power": 341502963
  },
  {
   "server": 11020,
   "family": "betterslicer",
   "power": 243564596
  },
  {
   "server": 11020,
   "family": "Lords",
   "power": 210824913
  },
  {
   "server": 11020,
   "family": "TITAN",
   "power": 193941593
  },
  {
   "server": 11020,
   "family": "Sharingan",
   "power": 168193046
  },
  {
   "server": 11021,
   "family": "FANTASY",
   "power": 1518852798
  },
  {
   "server": 11021,
   "family": "𝔇𝔢𝔪𝔬𝔫𝔰࿐ྂ",
   "power": 1333140233
  },
  {
   "server": 11021,
   "family": "Valhalla",
   "power": 320956388
  },
  {
   "server": 11021,
   "family": "Brasileiros",
   "power": 304285446
  },
  {
   "server": 11021,
   "family": "Cães_de_guerra",
   "power": 260808838
  },
  {
   "server": 11021,
   "family": "BrSaoPaulo",
   "power": 239147847
  },
  {
   "server": 11021,
   "family": "FLAMENGO",
   "power": 156549335
  },
  {
   "server": 11021,
   "family": "Apocalipse",
   "power": 156035600
  },
  {
   "server": 11021,
   "family": "TBrasil",
   "power": 133444870
  },
  {
   "server": 11021,
   "family": "Legião",
   "power": 131626293
  },
  {
   "server": 11022,
   "family": "CAPANGAS",
   "power": 1529090898
  },
  {
   "server": 11022,
   "family": "Ragnarok",
   "power": 1437494649
  },
  {
   "server": 11022,
   "family": "Akatsuki",
   "power": 331053496
  },
  {
   "server": 11022,
   "family": "MAFIA",
   "power": 281253735
  },
  {
   "server": 11022,
   "family": "cogumelos",
   "power": 243950173
  },
  {
   "server": 11022,
   "family": "TopBRASIL",
   "power": 242728418
  },
  {
   "server": 11022,
   "family": "Bope",
   "power": 187616860
  },
  {
   "server": 11022,
   "family": "SERES",
   "power": 185004501
  },
  {
   "server": 11022,
   "family": "Pecados",
   "power": 179499826
  },
  {
   "server": 11022,
   "family": "MUSHROOM",
   "power": 137350500
  },
  {
   "server": 11023,
   "family": "Brasil",
   "power": 1664769410
  },
  {
   "server": 11023,
   "family": "OsProcurados",
   "power": 1566273889
  },
  {
   "server": 11023,
   "family": "Carnificina",
   "power": 351744626
  },
  {
   "server": 11023,
   "family": "EternalBr",
   "power": 234926753
  },
  {
   "server": 11023,
   "family": "PaladinosBRsc",
   "power": 226184636
  },
  {
   "server": 11023,
   "family": "Aventureiros",
   "power": 181399093
  },
  {
   "server": 11023,
   "family": "Intocáveis",
   "power": 176267348
  },
  {
   "server": 11023,
   "family": "ALPHA",
   "power": 163767122
  },
  {
   "server": 11023,
   "family": "GALÁCTICOS",
   "power": 163427411
  },
  {
   "server": 11023,
   "family": "Cogumilous",
   "power": 94380770
  },
  {
   "server": 11024,
   "family": "°AVENGERS°",
   "power": 1560821675
  },
  {
   "server": 11024,
   "family": "Legionários",
   "power": 933085847
  },
  {
   "server": 11024,
   "family": "BRASIL",
   "power": 623245943
  },
  {
   "server": 11024,
   "family": "MERCENÁRIOS",
   "power": 442213527
  },
  {
   "server": 11024,
   "family": "alfa45",
   "power": 188808892
  },
  {
   "server": 11024,
   "family": "isekai",
   "power": 173942255
  },
  {
   "server": 11024,
   "family": "Intrépidos",
   "power": 90006735
  },
  {
   "server": 11024,
   "family": "Akatsuki",
   "power": 88565831
  },
  {
   "server": 11024,
   "family": "onepiece",
   "power": 84974053
  },
  {
   "server": 11024,
   "family": "ASGARD",
   "power": 84496455
  },
  {
   "server": 11025,
   "family": "CasaDaMãeJoana",
   "power": 1332876995
  },
  {
   "server": 11025,
   "family": "Brzada",
   "power": 1243316544
  },
  {
   "server": 11025,
   "family": "BrAZuKaS",
   "power": 350801458
  },
  {
   "server": 11025,
   "family": "BLACKOUT",
   "power": 339363541
  },
  {
   "server": 11025,
   "family": "EliteBrasil",
   "power": 313275775
  },
  {
   "server": 11025,
   "family": "Ordem",
   "power": 215525007
  },
  {
   "server": 11025,
   "family": "BrasilClan",
   "power": 190618451
  },
  {
   "server": 11025,
   "family": "serpenteNegra",
   "power": 175108836
  },
  {
   "server": 11025,
   "family": "ONEPUNCHMAN",
   "power": 170193568
  },
  {
   "server": 11025,
   "family": "GusuLan",
   "power": 167618632
  },
  {
   "server": 11026,
   "family": "SANCTUNBR",
   "power": 1635006104
  },
  {
   "server": 11026,
   "family": "TomorrowStar",
   "power": 1352379481
  },
  {
   "server": 11026,
   "family": "SHADOWS",
   "power": 367792879
  },
  {
   "server": 11026,
   "family": "StonkesBR",
   "power": 346581460
  },
  {
   "server": 11026,
   "family": "Guardiões",
   "power": 329843057
  },
  {
   "server": 11026,
   "family": "horizon",
   "power": 267007049
  },
  {
   "server": 11026,
   "family": "BlackClover",
   "power": 235745320
  },
  {
   "server": 11026,
   "family": "BLACKmash",
   "power": 233022601
  },
  {
   "server": 11026,
   "family": "oneㅤpieceㅤreal",
   "power": 218390837
  },
  {
   "server": 11026,
   "family": "NÓIAS",
   "power": 180754294
  },
  {
   "server": 11027,
   "family": "MagicShrooms",
   "power": 1463738593
  },
  {
   "server": 11027,
   "family": "FAMILIABR",
   "power": 1037304781
  },
  {
   "server": 11027,
   "family": "INFINITY",
   "power": 921919190
  },
  {
   "server": 11027,
   "family": "xXxBRASILxXx",
   "power": 285350718
  },
  {
   "server": 11027,
   "family": "brsparta",
   "power": 228173893
  },
  {
   "server": 11027,
   "family": "IMPÉRIO",
   "power": 187758661
  },
  {
   "server": 11027,
   "family": "Hyuga",
   "power": 169363799
  },
  {
   "server": 11027,
   "family": "DRAGONS",
   "power": 161247441
  },
  {
   "server": 11027,
   "family": "Ceifadores",
   "power": 137933697
  },
  {
   "server": 11027,
   "family": "Brasileiros",
   "power": 116041986
  },
  {
   "server": 11028,
   "family": "MystSpores",
   "power": 1558342076
  },
  {
   "server": 11028,
   "family": "Dinasty",
   "power": 543570440
  },
  {
   "server": 11028,
   "family": "Insane",
   "power": 357790979
  },
  {
   "server": 11028,
   "family": "Brazil",
   "power": 241000548
  },
  {
   "server": 11028,
   "family": "Akatsuki",
   "power": 233217378
  },
  {
   "server": 11028,
   "family": "AKATSUKI🪽🦊",
   "power": 232876853
  },
  {
   "server": 11028,
   "family": "Kuzumin",
   "power": 232136440
  },
  {
   "server": 11028,
   "family": "Spry",
   "power": 195267478
  },
  {
   "server": 11028,
   "family": "×Cogumelos⁴⁰°",
   "power": 181404949
  },
  {
   "server": 11028,
   "family": "XVIDEOS",
   "power": 177139696
  },
  {
   "server": 11029,
   "family": "SANTAIGREJA",
   "power": 1626836848
  },
  {
   "server": 11029,
   "family": "Brasil_Kingdom",
   "power": 347637007
  },
  {
   "server": 11029,
   "family": "BR",
   "power": 308528655
  },
  {
   "server": 11029,
   "family": "BR_Hunter",
   "power": 197552537
  },
  {
   "server": 11029,
   "family": "BL4CKSUNBR",
   "power": 194890794
  },
  {
   "server": 11029,
   "family": "DarkDragons",
   "power": 187552639
  },
  {
   "server": 11029,
   "family": "Cogumelo_Br",
   "power": 170029246
  },
  {
   "server": 11029,
   "family": "Escola_Jujutsu",
   "power": 165350445
  },
  {
   "server": 11029,
   "family": "BOSS",
   "power": 154367300
  },
  {
   "server": 11029,
   "family": "DarkFenix",
   "power": 144324568
  },
  {
   "server": 11030,
   "family": "MIBR",
   "power": 1334177738
  },
  {
   "server": 11030,
   "family": "CogulandiaBR",
   "power": 1056499230
  },
  {
   "server": 11030,
   "family": "Cogumelitos",
   "power": 321556078
  },
  {
   "server": 11030,
   "family": "DEUSES",
   "power": 295098161
  },
  {
   "server": 11030,
   "family": "TEMPEST",
   "power": 270918653
  },
  {
   "server": 11030,
   "family": "BRASIL",
   "power": 239273687
  },
  {
   "server": 11030,
   "family": "Monarcas",
   "power": 184977502
  },
  {
   "server": 11030,
   "family": "osLendários",
   "power": 164873685
  },
  {
   "server": 11030,
   "family": "Mercenários",
   "power": 149641254
  },
  {
   "server": 11030,
   "family": "AUTHENTIC",
   "power": 140365673
  },
  {
   "server": 11031,
   "family": "PRIME",
   "power": 1543214927
  },
  {
   "server": 11031,
   "family": "Hazit",
   "power": 1022537282
  },
  {
   "server": 11031,
   "family": "ForteBr",
   "power": 332303538
  },
  {
   "server": 11031,
   "family": "NovaOrdem",
   "power": 164612455
  },
  {
   "server": 11031,
   "family": "ImperioBr",
   "power": 159649429
  },
  {
   "server": 11031,
   "family": "Jatumorre",
   "power": 141908923
  },
  {
   "server": 11031,
   "family": "LEGIONÁRIOS",
   "power": 121798393
  },
  {
   "server": 11031,
   "family": "psicodélico",
   "power": 73026393
  },
  {
   "server": 11031,
   "family": "Recriar",
   "power": 66639309
  },
  {
   "server": 11031,
   "family": "cu",
   "power": 35629009
  },
  {
   "server": 11032,
   "family": "𝕯i𝖓𝖆𝖘𝖙i𝖆",
   "power": 1736405214
  },
  {
   "server": 11032,
   "family": "૮ѳ૨đy૮૯ρઽ",
   "power": 760831730
  },
  {
   "server": 11032,
   "family": "442BR",
   "power": 470901880
  },
  {
   "server": 11032,
   "family": "Tsukimichi",
   "power": 403650957
  },
  {
   "server": 11032,
   "family": "Mugiwaras",
   "power": 263141004
  },
  {
   "server": 11032,
   "family": "Reis",
   "power": 178008724
  },
  {
   "server": 11032,
   "family": "COGUDEVIL",
   "power": 158278283
  },
  {
   "server": 11032,
   "family": "Gloriosos",
   "power": 139021997
  },
  {
   "server": 11032,
   "family": "Brasil",
   "power": 77017581
  },
  {
   "server": 11032,
   "family": "DreamﾠHard",
   "power": 46270635
  },
  {
   "server": 11033,
   "family": "Konoha",
   "power": 1417413630
  },
  {
   "server": 11033,
   "family": "TheNight",
   "power": 1286687514
  },
  {
   "server": 11033,
   "family": "DogsOfWar",
   "power": 322826609
  },
  {
   "server": 11033,
   "family": "Mayhem",
   "power": 185575570
  },
  {
   "server": 11033,
   "family": "Brasil",
   "power": 182799109
  },
  {
   "server": 11033,
   "family": "Notoxicc",
   "power": 173683572
  },
  {
   "server": 11033,
   "family": "Targaryen",
   "power": 135038057
  },
  {
   "server": 11033,
   "family": "LOUCOMELLOS",
   "power": 126804953
  },
  {
   "server": 11033,
   "family": "rip_indra6",
   "power": 63725567
  },
  {
   "server": 11033,
   "family": "pegados",
   "power": 46814132
  },
  {
   "server": 11034,
   "family": "LIØNS×BRs",
   "power": 1617920150
  },
  {
   "server": 11034,
   "family": "COGU",
   "power": 494154010
  },
  {
   "server": 11034,
   "family": "XxBRxX",
   "power": 326496672
  },
  {
   "server": 11034,
   "family": "Brasill",
   "power": 299828610
  },
  {
   "server": 11034,
   "family": "Hell_AngelS",
   "power": 266159325
  },
  {
   "server": 11034,
   "family": "todt99",
   "power": 161718750
  },
  {
   "server": 11034,
   "family": "Brasil",
   "power": 154065979
  },
  {
   "server": 11034,
   "family": "espadanegra",
   "power": 134372478
  },
  {
   "server": 11034,
   "family": "OnTopS",
   "power": 133307207
  },
  {
   "server": 11034,
   "family": "Leviatãs",
   "power": 126024685
  },
  {
   "server": 11035,
   "family": "VeganS",
   "power": 1607395105
  },
  {
   "server": 11035,
   "family": "BRAZUKAS",
   "power": 694234276
  },
  {
   "server": 11035,
   "family": "Vipers",
   "power": 536098477
  },
  {
   "server": 11035,
   "family": "AltoFPS",
   "power": 250402125
  },
  {
   "server": 11035,
   "family": "magos",
   "power": 248442718
  },
  {
   "server": 11035,
   "family": "brs",
   "power": 238031613
  },
  {
   "server": 11035,
   "family": "Blacks",
   "power": 234333935
  },
  {
   "server": 11035,
   "family": "Flexis",
   "power": 226480520
  },
  {
   "server": 11035,
   "family": "Destroyers",
   "power": 205195475
  },
  {
   "server": 11035,
   "family": "GOAT",
   "power": 197360314
  },
  {
   "server": 11036,
   "family": "Horda",
   "power": 1555187868
  },
  {
   "server": 11036,
   "family": "OsAvançados",
   "power": 693309967
  },
  {
   "server": 11036,
   "family": "Sturmabteilung",
   "power": 273661304
  },
  {
   "server": 11036,
   "family": "TheMushrooms",
   "power": 261483917
  },
  {
   "server": 11036,
   "family": "PacíficosBR",
   "power": 258087280
  },
  {
   "server": 11036,
   "family": "Bearszz",
   "power": 250378739
  },
  {
   "server": 11036,
   "family": "Deidara",
   "power": 214646544
  },
  {
   "server": 11036,
   "family": "UNIDOSPERDEMOS",
   "power": 196197544
  },
  {
   "server": 11036,
   "family": "Yakuza",
   "power": 181107622
  },
  {
   "server": 11036,
   "family": "DungeonOfDrago",
   "power": 162418653
  },
  {
   "server": 11037,
   "family": "Totalitários",
   "power": 1482016346
  },
  {
   "server": 11037,
   "family": "Paradise",
   "power": 417879648
  },
  {
   "server": 11037,
   "family": "Brasileiros",
   "power": 297956879
  },
  {
   "server": 11037,
   "family": "MithrilBr",
   "power": 237913478
  },
  {
   "server": 11037,
   "family": "KingsBlack",
   "power": 230819629
  },
  {
   "server": 11037,
   "family": "Venerados",
   "power": 215088753
  },
  {
   "server": 11037,
   "family": "Konoha",
   "power": 180350723
  },
  {
   "server": 11037,
   "family": "Ahjin",
   "power": 141620005
  },
  {
   "server": 11037,
   "family": "Cogumelos",
   "power": 102002120
  },
  {
   "server": 11037,
   "family": "UniãoBR",
   "power": 80613494
  },
  {
   "server": 11038,
   "family": "Olimpo",
   "power": 1613686863
  },
  {
   "server": 11038,
   "family": "Blood𝙼𝙾𝙾𝙽",
   "power": 1038388897
  },
  {
   "server": 11038,
   "family": "Ligeirinhos",
   "power": 328381818
  },
  {
   "server": 11038,
   "family": "TropaCogumelo",
   "power": 277831523
  },
  {
   "server": 11038,
   "family": "KSame",
   "power": 177276877
  },
  {
   "server": 11038,
   "family": "BrasilPiece",
   "power": 166308595
  },
  {
   "server": 11038,
   "family": "Fungi",
   "power": 160014791
  },
  {
   "server": 11038,
   "family": "CogumelosBravo",
   "power": 159137410
  },
  {
   "server": 11038,
   "family": "TheLordsBr",
   "power": 138830561
  },
  {
   "server": 11038,
   "family": "Konoha",
   "power": 95078543
  },
  {
   "server": 11039,
   "family": "Lacoste",
   "power": 1557185486
  },
  {
   "server": 11039,
   "family": "ANJOSdaNOITE",
   "power": 515742940
  },
  {
   "server": 11039,
   "family": "tamojunto",
   "power": 286416021
  },
  {
   "server": 11039,
   "family": "Shichibukais",
   "power": 253673444
  },
  {
   "server": 11039,
   "family": "Honor_of_kings",
   "power": 190413553
  },
  {
   "server": 11039,
   "family": "tubarão",
   "power": 157985847
  },
  {
   "server": 11039,
   "family": "spf",
   "power": 152841913
  },
  {
   "server": 11039,
   "family": "TheBatlleRoyal",
   "power": 79502623
  },
  {
   "server": 11039,
   "family": "BLACK_COGUMELO",
   "power": 61654558
  },
  {
   "server": 11039,
   "family": "GØD",
   "power": 54234435
  },
  {
   "server": 11040,
   "family": "MountOlympuS",
   "power": 1796396430
  },
  {
   "server": 11040,
   "family": "SaiCachorro",
   "power": 552450796
  },
  {
   "server": 11040,
   "family": "INSS",
   "power": 509750113
  },
  {
   "server": 11040,
   "family": "Hogwarts",
   "power": 280851294
  },
  {
   "server": 11040,
   "family": "Wolfs",
   "power": 222156788
  },
  {
   "server": 11040,
   "family": "BRASIL",
   "power": 126537634
  },
  {
   "server": 11040,
   "family": "CLÃ_DO_TROVÃO",
   "power": 120934175
  },
  {
   "server": 11040,
   "family": "império",
   "power": 112646467
  },
  {
   "server": 11040,
   "family": "AKATSUKI",
   "power": 103520612
  },
  {
   "server": 11040,
   "family": "BlackStar",
   "power": 73541170
  },
  {
   "server": 11041,
   "family": "Digiescolhidos",
   "power": 1390554061
  },
  {
   "server": 11041,
   "family": "Brasil",
   "power": 333522808
  },
  {
   "server": 11041,
   "family": "NINJAS",
   "power": 319771407
  },
  {
   "server": 11041,
   "family": "GøldPhøenix",
   "power": 284450233
  },
  {
   "server": 11041,
   "family": "Akatsukibr",
   "power": 241251186
  },
  {
   "server": 11041,
   "family": "Konoha",
   "power": 216609880
  },
  {
   "server": 11041,
   "family": "Gamers",
   "power": 187914790
  },
  {
   "server": 11041,
   "family": "ESCANOR_GG",
   "power": 184885839
  },
  {
   "server": 11041,
   "family": "mercenários",
   "power": 155637672
  },
  {
   "server": 11041,
   "family": "MORNACASSS",
   "power": 119718410
  },
  {
   "server": 11042,
   "family": "Outlaws",
   "power": 1191333586
  },
  {
   "server": 11042,
   "family": "NovaOrdem",
   "power": 1187648713
  },
  {
   "server": 11042,
   "family": "VIKINGS",
   "power": 373771126
  },
  {
   "server": 11042,
   "family": "BRASIL",
   "power": 158051343
  },
  {
   "server": 11042,
   "family": "Dragon",
   "power": 147519826
  },
  {
   "server": 11042,
   "family": "CovilBR",
   "power": 142844382
  },
  {
   "server": 11042,
   "family": "éo_bronks",
   "power": 136590825
  },
  {
   "server": 11042,
   "family": "LOST LEGION",
   "power": 87909611
  },
  {
   "server": 11042,
   "family": "TROLSBR",
   "power": 75259382
  },
  {
   "server": 11042,
   "family": "lendarios",
   "power": 49320955
  },
  {
   "server": 11043,
   "family": "MáfiaGesso",
   "power": 1498253864
  },
  {
   "server": 11043,
   "family": "WAGesso",
   "power": 478808135
  },
  {
   "server": 11043,
   "family": "MushGrooms",
   "power": 297984604
  },
  {
   "server": 11043,
   "family": "DESOCUPADOS",
   "power": 277233181
  },
  {
   "server": 11043,
   "family": "LevelUP",
   "power": 259108742
  },
  {
   "server": 11043,
   "family": "Falcons",
   "power": 253706030
  },
  {
   "server": 11043,
   "family": "Os_Garças",
   "power": 146121232
  },
  {
   "server": 11043,
   "family": "KUZANAGI",
   "power": 102946413
  },
  {
   "server": 11043,
   "family": "BRAZIL",
   "power": 56443076
  },
  {
   "server": 11043,
   "family": "Fraternity",
   "power": 52303571
  },
  {
   "server": 11044,
   "family": "CaLabResO",
   "power": 1350799209
  },
  {
   "server": 11044,
   "family": "Adamantinos",
   "power": 585410141
  },
  {
   "server": 11044,
   "family": "linguico",
   "power": 237242262
  },
  {
   "server": 11044,
   "family": "9Ângulos",
   "power": 228586453
  },
  {
   "server": 11044,
   "family": "Akatsuki",
   "power": 208411594
  },
  {
   "server": 11044,
   "family": "BoaConduta",
   "power": 194199257
  },
  {
   "server": 11044,
   "family": "Vultures",
   "power": 153547067
  },
  {
   "server": 11044,
   "family": "chalix",
   "power": 151281077
  },
  {
   "server": 11044,
   "family": "Xerife",
   "power": 146982615
  },
  {
   "server": 11044,
   "family": "Akira",
   "power": 113530863
  },
  {
   "server": 11045,
   "family": "BrasilLegend",
   "power": 1626475388
  },
  {
   "server": 11045,
   "family": "Revoltz",
   "power": 1073970065
  },
  {
   "server": 11045,
   "family": "Brasil",
   "power": 269700815
  },
  {
   "server": 11045,
   "family": "Cogumelinhos",
   "power": 263272388
  },
  {
   "server": 11045,
   "family": "Ortegga",
   "power": 258011445
  },
  {
   "server": 11045,
   "family": "Dorime",
   "power": 244476703
  },
  {
   "server": 11045,
   "family": "YONKOS",
   "power": 224873765
  },
  {
   "server": 11045,
   "family": "Cogu_Darks",
   "power": 199652608
  },
  {
   "server": 11045,
   "family": "BigBang",
   "power": 190172069
  },
  {
   "server": 11045,
   "family": "AkiraEterno",
   "power": 183008455
  },
  {
   "server": 11046,
   "family": "GeneiRyodan",
   "power": 1667101417
  },
  {
   "server": 11046,
   "family": "R3negados",
   "power": 519110704
  },
  {
   "server": 11046,
   "family": "FourSeason",
   "power": 344722336
  },
  {
   "server": 11046,
   "family": "andarilhos",
   "power": 241095166
  },
  {
   "server": 11046,
   "family": "Kalvos",
   "power": 218095552
  },
  {
   "server": 11046,
   "family": "GeneiRyodan2",
   "power": 211080962
  },
  {
   "server": 11046,
   "family": "SANGUINÁRIOS",
   "power": 205003132
  },
  {
   "server": 11046,
   "family": "OsBig",
   "power": 165701254
  },
  {
   "server": 11046,
   "family": "WIN",
   "power": 157014514
  },
  {
   "server": 11046,
   "family": "Tempest",
   "power": 146130671
  },
  {
   "server": 11047,
   "family": "TheKingdom",
   "power": 1525972288
  },
  {
   "server": 11047,
   "family": "THUNDERBOLTS",
   "power": 498132202
  },
  {
   "server": 11047,
   "family": "Invictus_BR",
   "power": 324911604
  },
  {
   "server": 11047,
   "family": "Fierce",
   "power": 287232263
  },
  {
   "server": 11047,
   "family": "Pecadores",
   "power": 275933046
  },
  {
   "server": 11047,
   "family": "IMPERIO",
   "power": 262296037
  },
  {
   "server": 11047,
   "family": "DeathWish",
   "power": 163291956
  },
  {
   "server": 11047,
   "family": "BrMania",
   "power": 154705206
  },
  {
   "server": 11047,
   "family": "TodoPoderosO",
   "power": 138354403
  },
  {
   "server": 11047,
   "family": "cladoscabecudo",
   "power": 135509636
  },
  {
   "server": 11048,
   "family": "MaNiACosBR",
   "power": 1584328989
  },
  {
   "server": 11048,
   "family": "GhostGomelos",
   "power": 634599133
  },
  {
   "server": 11048,
   "family": "garoto_abusads",
   "power": 310968132
  },
  {
   "server": 11048,
   "family": "Annihilation",
   "power": 229293625
  },
  {
   "server": 11048,
   "family": "Nazarick",
   "power": 219947712
  },
  {
   "server": 11048,
   "family": "SABONETEIRA",
   "power": 154324827
  },
  {
   "server": 11048,
   "family": "Killers",
   "power": 134262993
  },
  {
   "server": 11048,
   "family": "ALUCINAÇÃO",
   "power": 131084533
  },
  {
   "server": 11048,
   "family": "Valente",
   "power": 106564722
  },
  {
   "server": 11048,
   "family": "ImperioMush",
   "power": 106458246
  },
  {
   "server": 11049,
   "family": "LastLegacy",
   "power": 1593200698
  },
  {
   "server": 11049,
   "family": "HuntersSA",
   "power": 825432831
  },
  {
   "server": 11049,
   "family": "Valhalla",
   "power": 333684748
  },
  {
   "server": 11049,
   "family": "DEMONS",
   "power": 259895213
  },
  {
   "server": 11049,
   "family": "BRAZUKAS",
   "power": 243209170
  },
  {
   "server": 11049,
   "family": "Hunters",
   "power": 193352558
  },
  {
   "server": 11049,
   "family": "ShadowBlade",
   "power": 179780920
  },
  {
   "server": 11049,
   "family": "MushLimes",
   "power": 143075310
  },
  {
   "server": 11049,
   "family": "FoXNiNe",
   "power": 124666934
  },
  {
   "server": 11049,
   "family": "gladiators",
   "power": 72766243
  },
  {
   "server": 11050,
   "family": "Phoenix",
   "power": 1520076179
  },
  {
   "server": 11050,
   "family": "Futuristic",
   "power": 1216628113
  },
  {
   "server": 11050,
   "family": "IMORTAIS",
   "power": 266367940
  },
  {
   "server": 11050,
   "family": "CaosBR",
   "power": 242563442
  },
  {
   "server": 11050,
   "family": "UniãoBR",
   "power": 241332253
  },
  {
   "server": 11050,
   "family": "Seraphim",
   "power": 225537831
  },
  {
   "server": 11050,
   "family": "ReisDosFungos",
   "power": 174916340
  },
  {
   "server": 11050,
   "family": "Arcanjos",
   "power": 98698429
  },
  {
   "server": 11050,
   "family": "INFERNO",
   "power": 85160849
  },
  {
   "server": 11050,
   "family": "juninho",
   "power": 44858012
  },
  {
   "server": 11051,
   "family": "TRYHARD’S",
   "power": 1603770314
  },
  {
   "server": 11051,
   "family": "HASHIRAS¹⁵⁷",
   "power": 468111690
  },
  {
   "server": 11051,
   "family": "WarriorsBR",
   "power": 311118029
  },
  {
   "server": 11051,
   "family": "Gladiators",
   "power": 256224195
  },
  {
   "server": 11051,
   "family": "Flamengo",
   "power": 232701033
  },
  {
   "server": 11051,
   "family": "Brazukas",
   "power": 191510223
  },
  {
   "server": 11051,
   "family": "Try_HarD_2",
   "power": 171848501
  },
  {
   "server": 11051,
   "family": "banguela",
   "power": 168223904
  },
  {
   "server": 11051,
   "family": "LegiãoBR",
   "power": 154735363
  },
  {
   "server": 11051,
   "family": "BRASILEIROS",
   "power": 132345130
  },
  {
   "server": 11052,
   "family": "AlcatraZ",
   "power": 1593885342
  },
  {
   "server": 11052,
   "family": "ESCORPION",
   "power": 421217063
  },
  {
   "server": 11052,
   "family": "INSANOS",
   "power": 359714593
  },
  {
   "server": 11052,
   "family": "ESPARTA",
   "power": 332748553
  },
  {
   "server": 11052,
   "family": "BrasilClan",
   "power": 301119910
  },
  {
   "server": 11052,
   "family": "COGUMELOS",
   "power": 279822512
  },
  {
   "server": 11052,
   "family": "legends",
   "power": 147545753
  },
  {
   "server": 11052,
   "family": "TOP_1",
   "power": 120781321
  },
  {
   "server": 11052,
   "family": "Wizards",
   "power": 100680715
  },
  {
   "server": 11052,
   "family": "SemDinheiro",
   "power": 93075161
  },
  {
   "server": 11053,
   "family": "NaoEoCogumelo",
   "power": 1418637565
  },
  {
   "server": 11053,
   "family": "DragonsWar",
   "power": 512990011
  },
  {
   "server": 11053,
   "family": "Batatinhas",
   "power": 250343911
  },
  {
   "server": 11053,
   "family": "TropaDoManTén",
   "power": 220779217
  },
  {
   "server": 11053,
   "family": "RioDeJaneiro",
   "power": 215670906
  },
  {
   "server": 11053,
   "family": "BRAZIL",
   "power": 174633472
  },
  {
   "server": 11053,
   "family": "La_Mafia",
   "power": 165420605
  },
  {
   "server": 11053,
   "family": "DeusesDaGuerra",
   "power": 160722866
  },
  {
   "server": 11053,
   "family": "cogumelorei",
   "power": 145127789
  },
  {
   "server": 11053,
   "family": "VingançaBrasil",
   "power": 111902797
  },
  {
   "server": 11054,
   "family": "MIBR",
   "power": 1286867176
  },
  {
   "server": 11054,
   "family": "Punish",
   "power": 723895795
  },
  {
   "server": 11054,
   "family": "Dragões",
   "power": 332202836
  },
  {
   "server": 11054,
   "family": "MyHeroAcademia",
   "power": 278500031
  },
  {
   "server": 11054,
   "family": "Brasileiros",
   "power": 179752425
  },
  {
   "server": 11054,
   "family": "makhinas",
   "power": 160306081
  },
  {
   "server": 11054,
   "family": "REAPERS",
   "power": 159792432
  },
  {
   "server": 11054,
   "family": "casadores",
   "power": 154741230
  },
  {
   "server": 11054,
   "family": "DeathﾠNote",
   "power": 151427250
  },
  {
   "server": 11054,
   "family": "RAGNAROK",
   "power": 142574180
  },
  {
   "server": 11055,
   "family": "BrasiL",
   "power": 1633814201
  },
  {
   "server": 11055,
   "family": "TARGARYEN",
   "power": 483763645
  },
  {
   "server": 11055,
   "family": "KONOHA",
   "power": 393331249
  },
  {
   "server": 11055,
   "family": "Vingadores",
   "power": 225899099
  },
  {
   "server": 11055,
   "family": "Soberanos",
   "power": 199926194
  },
  {
   "server": 11055,
   "family": "BelfordRoxo",
   "power": 180855671
  },
  {
   "server": 11055,
   "family": "Borderline",
   "power": 180615536
  },
  {
   "server": 11055,
   "family": "BRAZIL",
   "power": 167305971
  },
  {
   "server": 11055,
   "family": "MAGICMUSHROOM",
   "power": 158035695
  },
  {
   "server": 11055,
   "family": "LENGENDARY",
   "power": 131468992
  },
  {
   "server": 11056,
   "family": "TOMAai",
   "power": 1170775119
  },
  {
   "server": 11056,
   "family": "EliteYORDLES",
   "power": 1064575415
  },
  {
   "server": 11056,
   "family": "IMPÉRIO",
   "power": 527378748
  },
  {
   "server": 11056,
   "family": "WARRIORS",
   "power": 304583485
  },
  {
   "server": 11056,
   "family": "BRASIL",
   "power": 295288014
  },
  {
   "server": 11056,
   "family": "FENIX",
   "power": 235630274
  },
  {
   "server": 11056,
   "family": "Brasil",
   "power": 164010634
  },
  {
   "server": 11056,
   "family": "adolfpittler",
   "power": 153006950
  },
  {
   "server": 11056,
   "family": "HELL",
   "power": 125579476
  },
  {
   "server": 11056,
   "family": "BRNoobs",
   "power": 116064274
  },
  {
   "server": 11057,
   "family": "sɪɴɴᴇʀs",
   "power": 1543414259
  },
  {
   "server": 11057,
   "family": "Lutadores",
   "power": 555915052
  },
  {
   "server": 11057,
   "family": "Exilio",
   "power": 488658132
  },
  {
   "server": 11057,
   "family": "resenha_dos_br",
   "power": 368152513
  },
  {
   "server": 11057,
   "family": "The_Demons",
   "power": 319439556
  },
  {
   "server": 11057,
   "family": "fortes",
   "power": 250595784
  },
  {
   "server": 11057,
   "family": "black_clover",
   "power": 245305755
  },
  {
   "server": 11057,
   "family": "Solo",
   "power": 203606616
  },
  {
   "server": 11057,
   "family": "D̶E̶N̶V̶E̶R̶S̶",
   "power": 201171746
  },
  {
   "server": 11057,
   "family": "DARKSKY",
   "power": 198551183
  },
  {
   "server": 11058,
   "family": "NEXT",
   "power": 1700813745
  },
  {
   "server": 11058,
   "family": "NEXT²",
   "power": 710463677
  },
  {
   "server": 11058,
   "family": "NovoMundo",
   "power": 497551728
  },
  {
   "server": 11058,
   "family": "HALLOWEEN",
   "power": 466127383
  },
  {
   "server": 11058,
   "family": "Legends_of",
   "power": 229645680
  },
  {
   "server": 11058,
   "family": "DEUSES",
   "power": 211613287
  },
  {
   "server": 11058,
   "family": "OzLombrados",
   "power": 186445433
  },
  {
   "server": 11058,
   "family": "Muguiwara",
   "power": 159136049
  },
  {
   "server": 11058,
   "family": "LordsBR",
   "power": 156366408
  },
  {
   "server": 11058,
   "family": "TheBest",
   "power": 74653073
  },
  {
   "server": 11059,
   "family": "SS59",
   "power": 1647715519
  },
  {
   "server": 11059,
   "family": "SS59²",
   "power": 460902182
  },
  {
   "server": 11059,
   "family": "RJ021",
   "power": 319880375
  },
  {
   "server": 11059,
   "family": "RENEGADOS",
   "power": 229431911
  },
  {
   "server": 11059,
   "family": "Firmo",
   "power": 200373673
  },
  {
   "server": 11059,
   "family": "Themushrooms",
   "power": 162762581
  },
  {
   "server": 11059,
   "family": "TRIVIUM",
   "power": 146673694
  },
  {
   "server": 11059,
   "family": "Theﾠdragons",
   "power": 135444711
  },
  {
   "server": 11059,
   "family": "cogumelosbros",
   "power": 131872671
  },
  {
   "server": 11059,
   "family": "B4",
   "power": 131852197
  },
  {
   "server": 11060,
   "family": "BRASIL",
   "power": 1451994548
  },
  {
   "server": 11060,
   "family": "INFINITY",
   "power": 507700988
  },
  {
   "server": 11060,
   "family": "InvictuS",
   "power": 416281946
  },
  {
   "server": 11060,
   "family": "Celestiais",
   "power": 273477567
  },
  {
   "server": 11060,
   "family": "ZENIN",
   "power": 227028256
  },
  {
   "server": 11060,
   "family": "SYNERGY",
   "power": 165682952
  },
  {
   "server": 11060,
   "family": "Heaven",
   "power": 160561260
  },
  {
   "server": 11060,
   "family": "ProPlayes",
   "power": 159720663
  },
  {
   "server": 11060,
   "family": "cogu_sangrento",
   "power": 141906442
  },
  {
   "server": 11060,
   "family": "Brazucas",
   "power": 131813329
  },
  {
   "server": 11061,
   "family": "SHADOW",
   "power": 1354939558
  },
  {
   "server": 11061,
   "family": "TheFriends",
   "power": 1070029656
  },
  {
   "server": 11061,
   "family": "OsLendários",
   "power": 432765786
  },
  {
   "server": 11061,
   "family": "BRAZUCA",
   "power": 195123047
  },
  {
   "server": 11061,
   "family": "LegendMushBr",
   "power": 161300310
  },
  {
   "server": 11061,
   "family": "tropadocalvo",
   "power": 124020209
  },
  {
   "server": 11061,
   "family": "TRUPE༒FANTASMA",
   "power": 116478356
  },
  {
   "server": 11061,
   "family": "OsMacetaFirme",
   "power": 114495398
  },
  {
   "server": 11061,
   "family": "NewGuild",
   "power": 108650735
  },
  {
   "server": 11061,
   "family": "DARKSiHDE",
   "power": 33372100
  },
  {
   "server": 11062,
   "family": "CAFEÉBOM",
   "power": 1096369876
  },
  {
   "server": 11062,
   "family": "Akatsuki",
   "power": 849343435
  },
  {
   "server": 11062,
   "family": "Massacre",
   "power": 437318404
  },
  {
   "server": 11062,
   "family": "Armagedon",
   "power": 346457696
  },
  {
   "server": 11062,
   "family": "Brasileiros",
   "power": 249908732
  },
  {
   "server": 11062,
   "family": "Brasil",
   "power": 151945231
  },
  {
   "server": 11062,
   "family": "Venom",
   "power": 150770745
  },
  {
   "server": 11062,
   "family": "BRAZIL",
   "power": 150330534
  },
  {
   "server": 11062,
   "family": "SHORYUKEN",
   "power": 87280670
  },
  {
   "server": 11062,
   "family": "NinjaTurtles",
   "power": 80541977
  },
  {
   "server": 11063,
   "family": "𝐆𝐡𝐨𝐬𝐭𝐬",
   "power": 1259507096
  },
  {
   "server": 11063,
   "family": "Elites",
   "power": 404062393
  },
  {
   "server": 11063,
   "family": "Demacia",
   "power": 352646064
  },
  {
   "server": 11063,
   "family": "PeakyBlinders",
   "power": 309238524
  },
  {
   "server": 11063,
   "family": "DemonSlayer",
   "power": 213996306
  },
  {
   "server": 11063,
   "family": "Império",
   "power": 186267329
  },
  {
   "server": 11063,
   "family": "BRBAZUKA",
   "power": 181039805
  },
  {
   "server": 11063,
   "family": "DarkSiderz",
   "power": 180927373
  },
  {
   "server": 11063,
   "family": "MG",
   "power": 160303966
  },
  {
   "server": 11063,
   "family": "PAPA_NOOB",
   "power": 116411096
  },
  {
   "server": 11064,
   "family": "WORLD",
   "power": 1549998623
  },
  {
   "server": 11064,
   "family": "NewAge",
   "power": 790121259
  },
  {
   "server": 11064,
   "family": "Mushroow",
   "power": 380292230
  },
  {
   "server": 11064,
   "family": "Capivara",
   "power": 304005662
  },
  {
   "server": 11064,
   "family": "ClanUchiha",
   "power": 284026597
  },
  {
   "server": 11064,
   "family": "BRASILBR",
   "power": 244638004
  },
  {
   "server": 11064,
   "family": "Psyco",
   "power": 219985531
  },
  {
   "server": 11064,
   "family": "MOICANOS",
   "power": 166559427
  },
  {
   "server": 11064,
   "family": "LEGIÃO",
   "power": 138445415
  },
  {
   "server": 11064,
   "family": "F1_Marijuana",
   "power": 125028621
  },
  {
   "server": 11065,
   "family": "Brotherhood",
   "power": 1773723530
  },
  {
   "server": 11065,
   "family": "BUTECO",
   "power": 544841719
  },
  {
   "server": 11065,
   "family": "Brotherhoodᴬᶜʸ",
   "power": 408823767
  },
  {
   "server": 11065,
   "family": "BLITZ",
   "power": 324606009
  },
  {
   "server": 11065,
   "family": "magnatas",
   "power": 263682900
  },
  {
   "server": 11065,
   "family": "PAMSAS_157",
   "power": 221275753
  },
  {
   "server": 11065,
   "family": "DRAGONBALL",
   "power": 203773823
  },
  {
   "server": 11065,
   "family": "Wakanda",
   "power": 202868203
  },
  {
   "server": 11065,
   "family": "JAGATA",
   "power": 150857958
  },
  {
   "server": 11065,
   "family": "Brasil",
   "power": 142466104
  },
  {
   "server": 11066,
   "family": "Abyss",
   "power": 1642299067
  },
  {
   "server": 11066,
   "family": "HEINEKEN",
   "power": 391966852
  },
  {
   "server": 11066,
   "family": "Dragões",
   "power": 332019968
  },
  {
   "server": 11066,
   "family": "RAGNAROK",
   "power": 241182962
  },
  {
   "server": 11066,
   "family": "ClanUchiha",
   "power": 165425009
  },
  {
   "server": 11066,
   "family": "Cogumelitos",
   "power": 160717610
  },
  {
   "server": 11066,
   "family": "coguland",
   "power": 155319658
  },
  {
   "server": 11066,
   "family": "kohaku",
   "power": 134540531
  },
  {
   "server": 11066,
   "family": "cogulindos",
   "power": 130505440
  },
  {
   "server": 11066,
   "family": "XXX",
   "power": 116613560
  },
  {
   "server": 11067,
   "family": "ALIANÇA TX",
   "power": 1683074718
  },
  {
   "server": 11067,
   "family": "ACADEMY_TX",
   "power": 554795612
  },
  {
   "server": 11067,
   "family": "deathwalker",
   "power": 417721113
  },
  {
   "server": 11067,
   "family": "GOHST",
   "power": 408241074
  },
  {
   "server": 11067,
   "family": "MUSHROOM",
   "power": 335798414
  },
  {
   "server": 11067,
   "family": "LaCotte",
   "power": 246248653
  },
  {
   "server": 11067,
   "family": "Playlandia",
   "power": 231461783
  },
  {
   "server": 11067,
   "family": "OverPower",
   "power": 229297793
  },
  {
   "server": 11067,
   "family": "CasaDoPapai",
   "power": 185961211
  },
  {
   "server": 11067,
   "family": "TOPBRASIL",
   "power": 140142369
  },
  {
   "server": 11068,
   "family": "BRAZUKAS",
   "power": 1530270607
  },
  {
   "server": 11068,
   "family": "KILLERS",
   "power": 525937737
  },
  {
   "server": 11068,
   "family": "BRASILWAR",
   "power": 348197845
  },
  {
   "server": 11068,
   "family": "OsBraziukas",
   "power": 285674887
  },
  {
   "server": 11068,
   "family": "FREEDOM",
   "power": 282674961
  },
  {
   "server": 11068,
   "family": "Sunlight",
   "power": 277243509
  },
  {
   "server": 11068,
   "family": "morte",
   "power": 241281057
  },
  {
   "server": 11068,
   "family": "mtfrtatamrt",
   "power": 125085027
  },
  {
   "server": 11068,
   "family": "Vikings",
   "power": 113986470
  },
  {
   "server": 11068,
   "family": "LOSTBLU",
   "power": 110055213
  },
  {
   "server": 11069,
   "family": "BlackBulls",
   "power": 1506339606
  },
  {
   "server": 11069,
   "family": "Hellsing",
   "power": 691026970
  },
  {
   "server": 11069,
   "family": "APEXBRASIL",
   "power": 356496741
  },
  {
   "server": 11069,
   "family": "ILLUMINATIS",
   "power": 258511189
  },
  {
   "server": 11069,
   "family": "OnePiece",
   "power": 215460480
  },
  {
   "server": 11069,
   "family": "Ningt",
   "power": 150619942
  },
  {
   "server": 11069,
   "family": "americangods",
   "power": 146515934
  },
  {
   "server": 11069,
   "family": "macaco■atômico",
   "power": 138035817
  },
  {
   "server": 11069,
   "family": "Cletoniodus",
   "power": 117659687
  },
  {
   "server": 11069,
   "family": "The_Brazil",
   "power": 108340652
  },
  {
   "server": 11070,
   "family": "FamíliaBR",
   "power": 1502919908
  },
  {
   "server": 11070,
   "family": "AcademyBR",
   "power": 551685467
  },
  {
   "server": 11070,
   "family": "LENDARIOS",
   "power": 363749478
  },
  {
   "server": 11070,
   "family": "YAKUZA",
   "power": 339197149
  },
  {
   "server": 11070,
   "family": "lovecats",
   "power": 304346624
  },
  {
   "server": 11070,
   "family": "Para_o_futuro",
   "power": 240349886
  },
  {
   "server": 11070,
   "family": "RAU4I",
   "power": 187916793
  },
  {
   "server": 11070,
   "family": "champignons",
   "power": 160491948
  },
  {
   "server": 11070,
   "family": "Kings",
   "power": 101771785
  },
  {
   "server": 11070,
   "family": "imortais",
   "power": 95116975
  },
  {
   "server": 11071,
   "family": "Alcateia",
   "power": 1486483019
  },
  {
   "server": 11071,
   "family": "Goetia",
   "power": 1403464845
  },
  {
   "server": 11071,
   "family": "Akatsuki",
   "power": 468870735
  },
  {
   "server": 11071,
   "family": "Alucinógenos",
   "power": 347520963
  },
  {
   "server": 11071,
   "family": "LordsBrasil",
   "power": 265956038
  },
  {
   "server": 11071,
   "family": "FAMILIABR",
   "power": 251025823
  },
  {
   "server": 11071,
   "family": "fafnir",
   "power": 224386851
  },
  {
   "server": 11071,
   "family": "imperadores",
   "power": 192689430
  },
  {
   "server": 11071,
   "family": "私は強いbr",
   "power": 144802801
  },
  {
   "server": 11071,
   "family": "NAMEK",
   "power": 115993579
  },
  {
   "server": 11072,
   "family": "Winx  Club",
   "power": 1604724727
  },
  {
   "server": 11072,
   "family": "Revolution",
   "power": 922023603
  },
  {
   "server": 11072,
   "family": "imortais",
   "power": 391359585
  },
  {
   "server": 11072,
   "family": "SANGUINÁRIOS",
   "power": 318968846
  },
  {
   "server": 11072,
   "family": "LIBERTY",
   "power": 260088298
  },
  {
   "server": 11072,
   "family": "WolfgangBR",
   "power": 249785987
  },
  {
   "server": 11072,
   "family": "Neo",
   "power": 187013303
  },
  {
   "server": 11072,
   "family": "_SECRETS_",
   "power": 184360511
  },
  {
   "server": 11072,
   "family": "TavolaRedonda",
   "power": 151745141
  },
  {
   "server": 11072,
   "family": "BR",
   "power": 147861444
  },
  {
   "server": 11073,
   "family": "ForceDynasty",
   "power": 1738088462
  },
  {
   "server": 11073,
   "family": "Valhalla",
   "power": 618198709
  },
  {
   "server": 11073,
   "family": "BØPË",
   "power": 588261265
  },
  {
   "server": 11073,
   "family": "Brasileirão",
   "power": 380334234
  },
  {
   "server": 11073,
   "family": "TimeFlash",
   "power": 290952716
  },
  {
   "server": 11073,
   "family": "Zed",
   "power": 277233098
  },
  {
   "server": 11073,
   "family": "ArcanjosBr",
   "power": 201135653
  },
  {
   "server": 11073,
   "family": "ghosts44444",
   "power": 182120040
  },
  {
   "server": 11073,
   "family": "GARRA",
   "power": 170155099
  },
  {
   "server": 11073,
   "family": "KAMIKAZE",
   "power": 140221013
  },
  {
   "server": 11074,
   "family": "°𝔉𝔲𝔰𝔦𝔬𝔫",
   "power": 1682923687
  },
  {
   "server": 11074,
   "family": "caramelBR",
   "power": 678812562
  },
  {
   "server": 11074,
   "family": "AKATSUKI",
   "power": 623669048
  },
  {
   "server": 11074,
   "family": "Lucky",
   "power": 332043222
  },
  {
   "server": 11074,
   "family": "TheKings",
   "power": 267190042
  },
  {
   "server": 11074,
   "family": "Apóstolos",
   "power": 193695728
  },
  {
   "server": 11074,
   "family": "ʲʲᵏ",
   "power": 167088177
  },
  {
   "server": 11074,
   "family": "₲hs_tté",
   "power": 119184860
  },
  {
   "server": 11074,
   "family": "Cultoas8",
   "power": 115791099
  },
  {
   "server": 11074,
   "family": "Anarquia",
   "power": 104489527
  },
  {
   "server": 11075,
   "family": "Olimpo",
   "power": 1290178157
  },
  {
   "server": 11075,
   "family": "Coveiros",
   "power": 1030371515
  },
  {
   "server": 11075,
   "family": "Oxidoido",
   "power": 412819677
  },
  {
   "server": 11075,
   "family": "AmigosBR",
   "power": 268579834
  },
  {
   "server": 11075,
   "family": "DesmondVazio",
   "power": 255650370
  },
  {
   "server": 11075,
   "family": "WOW",
   "power": 239194396
  },
  {
   "server": 11075,
   "family": "ômega",
   "power": 195900548
  },
  {
   "server": 11075,
   "family": "GM",
   "power": 178708102
  },
  {
   "server": 11075,
   "family": "CRONOS",
   "power": 160201797
  },
  {
   "server": 11075,
   "family": "BRASIL",
   "power": 148557578
  },
  {
   "server": 11076,
   "family": "BHZ",
   "power": 1655331234
  },
  {
   "server": 11076,
   "family": "Anarkia99",
   "power": 1323111449
  },
  {
   "server": 11076,
   "family": "BrasilLegend",
   "power": 439622345
  },
  {
   "server": 11076,
   "family": "BRASIL",
   "power": 369565479
  },
  {
   "server": 11076,
   "family": "BrasilOnLine",
   "power": 350320396
  },
  {
   "server": 11076,
   "family": "ᙇLIBERTY",
   "power": 266845438
  },
  {
   "server": 11076,
   "family": "AFalangeImorta",
   "power": 242436742
  },
  {
   "server": 11076,
   "family": "Lordsbr",
   "power": 224395862
  },
  {
   "server": 11076,
   "family": "ReinoDoHaxixe",
   "power": 183251677
  },
  {
   "server": 11076,
   "family": "demons",
   "power": 109099456
  },
  {
   "server": 11077,
   "family": "ASGARD",
   "power": 1720213307
  },
  {
   "server": 11077,
   "family": "TRIBO",
   "power": 1009284219
  },
  {
   "server": 11077,
   "family": "Brasileiros",
   "power": 419703997
  },
  {
   "server": 11077,
   "family": "KonoSuba",
   "power": 375914259
  },
  {
   "server": 11077,
   "family": "Nosbrabos",
   "power": 331418197
  },
  {
   "server": 11077,
   "family": "brasukas",
   "power": 316870621
  },
  {
   "server": 11077,
   "family": "jolieblack",
   "power": 293688753
  },
  {
   "server": 11077,
   "family": "AKTSUKI",
   "power": 193426024
  },
  {
   "server": 11077,
   "family": "ENYGMA",
   "power": 178025251
  },
  {
   "server": 11077,
   "family": "Black_Monkey",
   "power": 173996393
  },
  {
   "server": 11078,
   "family": "Tempest",
   "power": 1650291369
  },
  {
   "server": 11078,
   "family": "TheBest",
   "power": 1216432932
  },
  {
   "server": 11078,
   "family": "BrasilBR",
   "power": 408192619
  },
  {
   "server": 11078,
   "family": "IMPÉRIO",
   "power": 330541601
  },
  {
   "server": 11078,
   "family": "Imparaveis",
   "power": 316140278
  },
  {
   "server": 11078,
   "family": "CDM",
   "power": 257979522
  },
  {
   "server": 11078,
   "family": "ELITEㅤBR",
   "power": 241343479
  },
  {
   "server": 11078,
   "family": "Overlord",
   "power": 192743076
  },
  {
   "server": 11078,
   "family": "God_Of_Fungus",
   "power": 134483203
  },
  {
   "server": 11078,
   "family": "CalacaCatrina",
   "power": 117863565
  },
  {
   "server": 11079,
   "family": "IMPÉRIOS",
   "power": 1525725524
  },
  {
   "server": 11079,
   "family": "ØUTLAWS",
   "power": 581570276
  },
  {
   "server": 11079,
   "family": "SkyofStars",
   "power": 387785809
  },
  {
   "server": 11079,
   "family": "PsyTrance",
   "power": 309131245
  },
  {
   "server": 11079,
   "family": "SpartansBR",
   "power": 259252184
  },
  {
   "server": 11079,
   "family": "AKATSUKI",
   "power": 233552562
  },
  {
   "server": 11079,
   "family": "FLUXO",
   "power": 190277318
  },
  {
   "server": 11079,
   "family": "ArrowKillers",
   "power": 182499224
  },
  {
   "server": 11079,
   "family": "ElementFire",
   "power": 180347255
  },
  {
   "server": 11079,
   "family": "Brasil",
   "power": 150200312
  },
  {
   "server": 11080,
   "family": "JujutsuKaisen",
   "power": 1241185049
  },
  {
   "server": 11080,
   "family": "MONSTERS",
   "power": 1218906859
  },
  {
   "server": 11080,
   "family": "LendariosBR",
   "power": 360749178
  },
  {
   "server": 11080,
   "family": "Valhalla_BR",
   "power": 295164387
  },
  {
   "server": 11080,
   "family": "TheKillers",
   "power": 290418379
  },
  {
   "server": 11080,
   "family": "HELL",
   "power": 288299411
  },
  {
   "server": 11080,
   "family": "OVERLORD",
   "power": 277800753
  },
  {
   "server": 11080,
   "family": "PARADOXXX",
   "power": 188742235
  },
  {
   "server": 11080,
   "family": "KnightsBr",
   "power": 170429309
  },
  {
   "server": 11080,
   "family": "wolfpackbr",
   "power": 35135564
  },
  {
   "server": 11081,
   "family": "ChapéudePalha",
   "power": 1393166109
  },
  {
   "server": 11081,
   "family": "LegendsBR",
   "power": 1120127855
  },
  {
   "server": 11081,
   "family": "GUMELANDIA",
   "power": 349708982
  },
  {
   "server": 11081,
   "family": "BRASIL",
   "power": 291113041
  },
  {
   "server": 11081,
   "family": "BANDO_DO_LUFFY",
   "power": 288411730
  },
  {
   "server": 11081,
   "family": "Tundra",
   "power": 204589602
  },
  {
   "server": 11081,
   "family": "jgdsvb",
   "power": 152693756
  },
  {
   "server": 11081,
   "family": "Phoenix",
   "power": 111628178
  },
  {
   "server": 11081,
   "family": "ÁREA51",
   "power": 84654168
  },
  {
   "server": 11081,
   "family": "Lunáticos",
   "power": 82999784
  },
  {
   "server": 11082,
   "family": "AKATSUKI",
   "power": 1421291946
  },
  {
   "server": 11082,
   "family": "Sentinels",
   "power": 1398860165
  },
  {
   "server": 11082,
   "family": "PowerOfFungis",
   "power": 321205797
  },
  {
   "server": 11082,
   "family": "ShowTime",
   "power": 284122662
  },
  {
   "server": 11082,
   "family": "AKATSUKI_2",
   "power": 208909835
  },
  {
   "server": 11082,
   "family": "Remanescente",
   "power": 203813361
  },
  {
   "server": 11082,
   "family": "Brasileirinhas",
   "power": 176971275
  },
  {
   "server": 11082,
   "family": "Bigulos",
   "power": 157833426
  },
  {
   "server": 11082,
   "family": "LORD",
   "power": 132980078
  },
  {
   "server": 11082,
   "family": "Star",
   "power": 123561288
  },
  {
   "server": 11083,
   "family": "DrakenGods",
   "power": 1728401617
  },
  {
   "server": 11083,
   "family": "ELITEBR",
   "power": 1047351688
  },
  {
   "server": 11083,
   "family": "Sunshine",
   "power": 386809607
  },
  {
   "server": 11083,
   "family": "BANDO°DO°LUFFY",
   "power": 235373140
  },
  {
   "server": 11083,
   "family": "Ceifadores",
   "power": 211236939
  },
  {
   "server": 11083,
   "family": "OzBaTuTiNhAs",
   "power": 199847848
  },
  {
   "server": 11083,
   "family": "ᴅɪsᴛᴜʀʙᴇᴅ",
   "power": 191316759
  },
  {
   "server": 11083,
   "family": "Clãcaramelo",
   "power": 166051097
  },
  {
   "server": 11083,
   "family": "011_E_O_DDD",
   "power": 145768776
  },
  {
   "server": 11083,
   "family": "Hashiras",
   "power": 133586971
  },
  {
   "server": 11084,
   "family": "Bailarinas",
   "power": 1645416075
  },
  {
   "server": 11084,
   "family": "TheAvengers",
   "power": 739785863
  },
  {
   "server": 11084,
   "family": "Croosguild",
   "power": 312605334
  },
  {
   "server": 11084,
   "family": "ClãChupaGrelo",
   "power": 278201472
  },
  {
   "server": 11084,
   "family": "BangBang",
   "power": 224496157
  },
  {
   "server": 11084,
   "family": "iwnl",
   "power": 201921294
  },
  {
   "server": 11084,
   "family": "cogumelos",
   "power": 192553135
  },
  {
   "server": 11084,
   "family": "TheKillers",
   "power": 191729215
  },
  {
   "server": 11084,
   "family": "Fairy tail",
   "power": 176625694
  },
  {
   "server": 11084,
   "family": "RAGNAROK",
   "power": 176616710
  },
  {
   "server": 11085,
   "family": "Valhalla",
   "power": 1718774314
  },
  {
   "server": 11085,
   "family": "SwordArtOnline",
   "power": 885159545
  },
  {
   "server": 11085,
   "family": "PROHERD",
   "power": 369364435
  },
  {
   "server": 11085,
   "family": "Katsuki",
   "power": 287471230
  },
  {
   "server": 11085,
   "family": "DragonFlyDemon",
   "power": 263927258
  },
  {
   "server": 11085,
   "family": "𝕯𝖆𝖗𝖐𝕱𝖔𝖝",
   "power": 238613473
  },
  {
   "server": 11085,
   "family": "Corinthians",
   "power": 173812110
  },
  {
   "server": 11085,
   "family": "RLKCHAMPS",
   "power": 129113498
  },
  {
   "server": 11085,
   "family": "RankBrasil",
   "power": 90662434
  },
  {
   "server": 11085,
   "family": "tropadafaiytai",
   "power": 83757419
  },
  {
   "server": 11086,
   "family": "SantoGraal",
   "power": 1262196129
  },
  {
   "server": 11086,
   "family": "Brazino",
   "power": 837713848
  },
  {
   "server": 11086,
   "family": "KINGS",
   "power": 410628182
  },
  {
   "server": 11086,
   "family": "WarLords",
   "power": 243618118
  },
  {
   "server": 11086,
   "family": "Technoblade",
   "power": 217199640
  },
  {
   "server": 11086,
   "family": "vitor",
   "power": 187621696
  },
  {
   "server": 11086,
   "family": "TheBrs",
   "power": 180968673
  },
  {
   "server": 11086,
   "family": "RAGNAROKBR",
   "power": 167148359
  },
  {
   "server": 11086,
   "family": "Tóxicos",
   "power": 159674970
  },
  {
   "server": 11086,
   "family": "WhiteTiger",
   "power": 157722478
  },
  {
   "server": 11087,
   "family": "ImpérioBR",
   "power": 1597733258
  },
  {
   "server": 11087,
   "family": "xXSKLxSPRXx",
   "power": 1173247371
  },
  {
   "server": 11087,
   "family": "Shadowhunters",
   "power": 473565961
  },
  {
   "server": 11087,
   "family": "HiTkill",
   "power": 337896365
  },
  {
   "server": 11087,
   "family": "brasildagurra",
   "power": 256217639
  },
  {
   "server": 11087,
   "family": "Shalke04",
   "power": 246192958
  },
  {
   "server": 11087,
   "family": "Falcons",
   "power": 234367243
  },
  {
   "server": 11087,
   "family": "NAZARICK",
   "power": 207409455
  },
  {
   "server": 11087,
   "family": "DOMINADORES",
   "power": 195684742
  },
  {
   "server": 11087,
   "family": "xXSKLxSPRXxII",
   "power": 187087522
  },
  {
   "server": 11088,
   "family": "Destruidores",
   "power": 1585519693
  },
  {
   "server": 11088,
   "family": "Hazit",
   "power": 490630170
  },
  {
   "server": 11088,
   "family": "BrazucaBR",
   "power": 426309338
  },
  {
   "server": 11088,
   "family": "KLL",
   "power": 289658095
  },
  {
   "server": 11088,
   "family": "lsad",
   "power": 243680997
  },
  {
   "server": 11088,
   "family": "BRt°BrasilTeam",
   "power": 223224644
  },
  {
   "server": 11088,
   "family": "BRASIL",
   "power": 162601339
  },
  {
   "server": 11088,
   "family": "MARRENTOS",
   "power": 146677848
  },
  {
   "server": 11088,
   "family": "Legendaries",
   "power": 140135192
  },
  {
   "server": 11088,
   "family": "xGOKU",
   "power": 111851756
  },
  {
   "server": 11089,
   "family": "NewØrder",
   "power": 1727492802
  },
  {
   "server": 11089,
   "family": "KAMIKAZE",
   "power": 384650646
  },
  {
   "server": 11089,
   "family": "SUN",
   "power": 346434853
  },
  {
   "server": 11089,
   "family": "darknight35",
   "power": 287385565
  },
  {
   "server": 11089,
   "family": "dcgyh",
   "power": 248283285
  },
  {
   "server": 11089,
   "family": "Storm",
   "power": 221648579
  },
  {
   "server": 11089,
   "family": "YZX",
   "power": 181210767
  },
  {
   "server": 11089,
   "family": "VALHALLA",
   "power": 174917458
  },
  {
   "server": 11089,
   "family": "MASTERS",
   "power": 151552319
  },
  {
   "server": 11089,
   "family": "darkwold",
   "power": 142471491
  },
  {
   "server": 11090,
   "family": "TheOriginals",
   "power": 1299000937
  },
  {
   "server": 11090,
   "family": "Legendários",
   "power": 373344565
  },
  {
   "server": 11090,
   "family": "Deus",
   "power": 287488635
  },
  {
   "server": 11090,
   "family": "BlackdooG",
   "power": 281399935
  },
  {
   "server": 11090,
   "family": "PRIMORDIAL",
   "power": 249992221
  },
  {
   "server": 11090,
   "family": "Marvel²",
   "power": 188881319
  },
  {
   "server": 11090,
   "family": "FireKitsunes",
   "power": 180980249
  },
  {
   "server": 11090,
   "family": "anime",
   "power": 169237549
  },
  {
   "server": 11090,
   "family": "VIEXX",
   "power": 164858225
  },
  {
   "server": 11090,
   "family": "Apocalipse",
   "power": 153283007
  },
  {
   "server": 11091,
   "family": "PARADOXXX",
   "power": 1543826522
  },
  {
   "server": 11091,
   "family": "Winx",
   "power": 800771190
  },
  {
   "server": 11091,
   "family": "Ascension",
   "power": 329706735
  },
  {
   "server": 11091,
   "family": "Hell",
   "power": 274914875
  },
  {
   "server": 11091,
   "family": "TryHard",
   "power": 261580308
  },
  {
   "server": 11091,
   "family": "Uchiha",
   "power": 189717160
  },
  {
   "server": 11091,
   "family": "YAKUZA",
   "power": 150593524
  },
  {
   "server": 11091,
   "family": "MiBR",
   "power": 137403952
  },
  {
   "server": 11091,
   "family": "eusabo",
   "power": 127996020
  },
  {
   "server": 11091,
   "family": "Aragon",
   "power": 87273674
  },
  {
   "server": 11092,
   "family": "FusionBR",
   "power": 1724543077
  },
  {
   "server": 11092,
   "family": "FusionBR²",
   "power": 864476234
  },
  {
   "server": 11092,
   "family": "Retalhadores",
   "power": 418532123
  },
  {
   "server": 11092,
   "family": "Brazil",
   "power": 254532135
  },
  {
   "server": 11092,
   "family": "ArmadaBrᣔᣘᔿ",
   "power": 201543832
  },
  {
   "server": 11092,
   "family": "OzPintudos",
   "power": 197696867
  },
  {
   "server": 11092,
   "family": "KingsBR",
   "power": 179630032
  },
  {
   "server": 11092,
   "family": "APÓSTOLOS",
   "power": 173101334
  },
  {
   "server": 11092,
   "family": "SHIMEJIS",
   "power": 157790944
  },
  {
   "server": 11092,
   "family": "Rennegados",
   "power": 150790177
  },
  {
   "server": 11093,
   "family": "ELITE",
   "power": 1514036140
  },
  {
   "server": 11093,
   "family": "INFERNO",
   "power": 1039573395
  },
  {
   "server": 11093,
   "family": "YZX",
   "power": 272469297
  },
  {
   "server": 11093,
   "family": "Asgard",
   "power": 224656666
  },
  {
   "server": 11093,
   "family": "Illuminati",
   "power": 198606687
  },
  {
   "server": 11093,
   "family": "darkmushroom",
   "power": 192027059
  },
  {
   "server": 11093,
   "family": "Deicidio",
   "power": 173773490
  },
  {
   "server": 11093,
   "family": "OLÍMPIO",
   "power": 134879974
  },
  {
   "server": 11093,
   "family": "aturmadofundão",
   "power": 115701802
  },
  {
   "server": 11093,
   "family": "ASSASINS",
   "power": 75454920
  },
  {
   "server": 11094,
   "family": "𝐍𝐞𝐫𝐨",
   "power": 1452064754
  },
  {
   "server": 11094,
   "family": "MataRind0",
   "power": 1192206150
  },
  {
   "server": 11094,
   "family": "FAIRY_TAIL",
   "power": 373647901
  },
  {
   "server": 11094,
   "family": "BR",
   "power": 339967744
  },
  {
   "server": 11094,
   "family": "LuaMorel",
   "power": 266739220
  },
  {
   "server": 11094,
   "family": "Utopia",
   "power": 190832885
  },
  {
   "server": 11094,
   "family": "GDGGuardioesBr",
   "power": 167202851
  },
  {
   "server": 11094,
   "family": "BRAZUKAS",
   "power": 153208747
  },
  {
   "server": 11094,
   "family": "GroveStreet2",
   "power": 142071030
  },
  {
   "server": 11094,
   "family": "winx",
   "power": 135431868
  },
  {
   "server": 11095,
   "family": "Ragnarök",
   "power": 1541627453
  },
  {
   "server": 11095,
   "family": "HYDRA",
   "power": 1092772504
  },
  {
   "server": 11095,
   "family": "BRS",
   "power": 368079756
  },
  {
   "server": 11095,
   "family": "WinterChaos",
   "power": 252884013
  },
  {
   "server": 11095,
   "family": "Iniciantes",
   "power": 224651674
  },
  {
   "server": 11095,
   "family": "CogumelosDoMaL",
   "power": 205212826
  },
  {
   "server": 11095,
   "family": "Abismo",
   "power": 197086238
  },
  {
   "server": 11095,
   "family": "TEMPLARIOS",
   "power": 168383435
  },
  {
   "server": 11095,
   "family": "Elite",
   "power": 167454088
  },
  {
   "server": 11095,
   "family": "Akatsuki",
   "power": 147542795
  },
  {
   "server": 11096,
   "family": "InfernoBr",
   "power": 1635164836
  },
  {
   "server": 11096,
   "family": "LEGO",
   "power": 548569488
  },
  {
   "server": 11096,
   "family": "Alcatéia",
   "power": 426965140
  },
  {
   "server": 11096,
   "family": "NokuBrasil",
   "power": 316651511
  },
  {
   "server": 11096,
   "family": "Hit_Kill",
   "power": 275620874
  },
  {
   "server": 11096,
   "family": "RANKS",
   "power": 251315458
  },
  {
   "server": 11096,
   "family": "otakos",
   "power": 215514380
  },
  {
   "server": 11096,
   "family": "BRASILπ",
   "power": 179767682
  },
  {
   "server": 11096,
   "family": "Luffy",
   "power": 167607921
  },
  {
   "server": 11096,
   "family": "BrasilOFC",
   "power": 167283702
  },
  {
   "server": 11097,
   "family": "Olimpo",
   "power": 1548884627
  },
  {
   "server": 11097,
   "family": "Dark_Alliance",
   "power": 729873952
  },
  {
   "server": 11097,
   "family": "Gods_Divisão_2",
   "power": 506146814
  },
  {
   "server": 11097,
   "family": "Seyfadores",
   "power": 348949421
  },
  {
   "server": 11097,
   "family": "cogumeloo",
   "power": 282860216
  },
  {
   "server": 11097,
   "family": "THEBRS",
   "power": 154808250
  },
  {
   "server": 11097,
   "family": "Naruto",
   "power": 92737235
  },
  {
   "server": 11097,
   "family": "DIVINOS",
   "power": 54129142
  },
  {
   "server": 11097,
   "family": "Ninjago",
   "power": 44948835
  },
  {
   "server": 11097,
   "family": "COGOLOKO2024",
   "power": 39096942
  },
  {
   "server": 11098,
   "family": "ShroomGang",
   "power": 1596237645
  },
  {
   "server": 11098,
   "family": "JujutsuKaisen",
   "power": 749211073
  },
  {
   "server": 11098,
   "family": "TOP1",
   "power": 351214655
  },
  {
   "server": 11098,
   "family": "LEGENDARY",
   "power": 298235032
  },
  {
   "server": 11098,
   "family": "SrhungusLqmugu",
   "power": 230797205
  },
  {
   "server": 11098,
   "family": "ShangriLa",
   "power": 174683419
  },
  {
   "server": 11098,
   "family": "stoics",
   "power": 138494846
  },
  {
   "server": 11098,
   "family": "LifeInvader",
   "power": 128164078
  },
  {
   "server": 11098,
   "family": "pulse",
   "power": 121071714
  },
  {
   "server": 11098,
   "family": "Galeroso",
   "power": 94667706
  },
  {
   "server": 11099,
   "family": "ᴼᴾ°OnePiece",
   "power": 1520450199
  },
  {
   "server": 11099,
   "family": "TROLLS",
   "power": 912250580
  },
  {
   "server": 11099,
   "family": "bosonaro2026",
   "power": 375340383
  },
  {
   "server": 11099,
   "family": "Valhalla",
   "power": 288060829
  },
  {
   "server": 11099,
   "family": "VDL",
   "power": 280845751
  },
  {
   "server": 11099,
   "family": "The_Dragons",
   "power": 221750252
  },
  {
   "server": 11099,
   "family": "BRAZINO",
   "power": 193192065
  },
  {
   "server": 11099,
   "family": "BRGG",
   "power": 173828899
  },
  {
   "server": 11099,
   "family": "ZUMBILANDIA",
   "power": 169214135
  },
  {
   "server": 11099,
   "family": "PinkPussy",
   "power": 123115668
  },
  {
   "server": 11100,
   "family": "Akatsuki",
   "power": 1405500403
  },
  {
   "server": 11100,
   "family": "KINGS",
   "power": 1017103009
  },
  {
   "server": 11100,
   "family": "BRAZUKAS",
   "power": 415888798
  },
  {
   "server": 11100,
   "family": "VIPs",
   "power": 267266728
  },
  {
   "server": 11100,
   "family": "Alucinógenos",
   "power": 261567992
  },
  {
   "server": 11100,
   "family": "Fudidøs",
   "power": 232468862
  },
  {
   "server": 11100,
   "family": "Brasil",
   "power": 175299251
  },
  {
   "server": 11100,
   "family": "Clawthornes",
   "power": 174157325
  },
  {
   "server": 11100,
   "family": "KINGS魔",
   "power": 169260266
  },
  {
   "server": 11100,
   "family": "Favelinha",
   "power": 158383744
  },
  {
   "server": 11101,
   "family": "FÊNIX",
   "power": 1659774289
  },
  {
   "server": 11101,
   "family": "DARKS",
   "power": 662466731
  },
  {
   "server": 11101,
   "family": "SANMELOS",
   "power": 301919141
  },
  {
   "server": 11101,
   "family": "Champignon",
   "power": 260845047
  },
  {
   "server": 11101,
   "family": "Tops",
   "power": 229369265
  },
  {
   "server": 11101,
   "family": "Fúrias",
   "power": 175286977
  },
  {
   "server": 11101,
   "family": "Shinigamis",
   "power": 171606212
  },
  {
   "server": 11101,
   "family": "TARGARYEN",
   "power": 156216090
  },
  {
   "server": 11101,
   "family": "cogumelitos",
   "power": 152590142
  },
  {
   "server": 11101,
   "family": "ARDAL",
   "power": 135451564
  },
  {
   "server": 11102,
   "family": "Supremacy",
   "power": 1634713476
  },
  {
   "server": 11102,
   "family": "King_of_shadow",
   "power": 654393065
  },
  {
   "server": 11102,
   "family": "Leveling",
   "power": 321154521
  },
  {
   "server": 11102,
   "family": "Demoníacos",
   "power": 305863917
  },
  {
   "server": 11102,
   "family": "HEINEKEN",
   "power": 238119874
  },
  {
   "server": 11102,
   "family": "BrZera",
   "power": 223876172
  },
  {
   "server": 11102,
   "family": "Galácticos",
   "power": 188085722
  },
  {
   "server": 11102,
   "family": "LogHorizon",
   "power": 186684100
  },
  {
   "server": 11102,
   "family": "PODEROSOS",
   "power": 168211337
  },
  {
   "server": 11102,
   "family": "TopBr",
   "power": 155963758
  },
  {
   "server": 11103,
   "family": "𝙊𝙡𝙞𝙢𝙥𝙤",
   "power": 1616316773
  },
  {
   "server": 11103,
   "family": "R𝙰𝙶𝙽𝙰𝚁𝙾k",
   "power": 788531576
  },
  {
   "server": 11103,
   "family": "limbo",
   "power": 283604231
  },
  {
   "server": 11103,
   "family": "KDA",
   "power": 250528720
  },
  {
   "server": 11103,
   "family": "rei_cogumelo",
   "power": 212519633
  },
  {
   "server": 11103,
   "family": "SOMBRASBR",
   "power": 180075345
  },
  {
   "server": 11103,
   "family": "CBFbrasil",
   "power": 141259607
  },
  {
   "server": 11103,
   "family": "LegendMushroom",
   "power": 123902385
  },
  {
   "server": 11103,
   "family": "LOUDGG",
   "power": 114624600
  },
  {
   "server": 11103,
   "family": "Evolution",
   "power": 98143788
  },
  {
   "server": 11104,
   "family": "DarkAngels🪽",
   "power": 1545984966
  },
  {
   "server": 11104,
   "family": "YAKUZA",
   "power": 1065318765
  },
  {
   "server": 11104,
   "family": "Dopamina",
   "power": 361028224
  },
  {
   "server": 11104,
   "family": "KINGS",
   "power": 223187535
  },
  {
   "server": 11104,
   "family": "FLAMENGO",
   "power": 195682702
  },
  {
   "server": 11104,
   "family": "OverLords",
   "power": 195255136
  },
  {
   "server": 11104,
   "family": "imortais",
   "power": 159327169
  },
  {
   "server": 11104,
   "family": "IммσятαLร",
   "power": 155842077
  },
  {
   "server": 11104,
   "family": "M€LI∆NT€S",
   "power": 137988255
  },
  {
   "server": 11104,
   "family": "império",
   "power": 127563359
  },
  {
   "server": 11105,
   "family": "KRD",
   "power": 1371620389
  },
  {
   "server": 11105,
   "family": "KRD3",
   "power": 645149865
  },
  {
   "server": 11105,
   "family": "KRD2",
   "power": 396753105
  },
  {
   "server": 11105,
   "family": "WOLFGANG",
   "power": 359552658
  },
  {
   "server": 11105,
   "family": "ELITE",
   "power": 246794125
  },
  {
   "server": 11105,
   "family": "dark",
   "power": 205614824
  },
  {
   "server": 11105,
   "family": "bosonaroparsp",
   "power": 200811096
  },
  {
   "server": 11105,
   "family": "Br",
   "power": 197460712
  },
  {
   "server": 11105,
   "family": "celetiais",
   "power": 166305275
  },
  {
   "server": 11105,
   "family": "dragon",
   "power": 164762917
  },
  {
   "server": 11106,
   "family": "MUGIWARAS",
   "power": 1489417522
  },
  {
   "server": 11106,
   "family": "InSaNoS",
   "power": 1165481058
  },
  {
   "server": 11106,
   "family": "OsMercenários",
   "power": 440344302
  },
  {
   "server": 11106,
   "family": "amanhecer",
   "power": 340816859
  },
  {
   "server": 11106,
   "family": "FaizueLi",
   "power": 194580803
  },
  {
   "server": 11106,
   "family": "MARRENTOS",
   "power": 193411271
  },
  {
   "server": 11106,
   "family": "Destroyers",
   "power": 163567223
  },
  {
   "server": 11106,
   "family": "RAGNAROK",
   "power": 157165732
  },
  {
   "server": 11106,
   "family": "XTREME",
   "power": 155523793
  },
  {
   "server": 11106,
   "family": "Wolfsrudel",
   "power": 153560768
  },
  {
   "server": 11107,
   "family": "Aesir",
   "power": 1761020812
  },
  {
   "server": 11107,
   "family": "Aesir²",
   "power": 617681378
  },
  {
   "server": 11107,
   "family": "ア100NOMEヅ然",
   "power": 476560923
  },
  {
   "server": 11107,
   "family": "TeamBRASIL",
   "power": 423762843
  },
  {
   "server": 11107,
   "family": "Imortais",
   "power": 226595560
  },
  {
   "server": 11107,
   "family": "KINGªDRAGON",
   "power": 218472571
  },
  {
   "server": 11107,
   "family": "INAXSilva",
   "power": 217171980
  },
  {
   "server": 11107,
   "family": "saw",
   "power": 199930052
  },
  {
   "server": 11107,
   "family": "Brazucas_2",
   "power": 199462035
  },
  {
   "server": 11107,
   "family": "jhegol",
   "power": 196699900
  },
  {
   "server": 11108,
   "family": "SUPREMACY",
   "power": 1564512559
  },
  {
   "server": 11108,
   "family": "black_bulls",
   "power": 799722623
  },
  {
   "server": 11108,
   "family": "IronMaiden",
   "power": 427114729
  },
  {
   "server": 11108,
   "family": "THE_WARRIORS",
   "power": 348713356
  },
  {
   "server": 11108,
   "family": "SeaHeros",
   "power": 269800020
  },
  {
   "server": 11108,
   "family": "Shadow°Garden",
   "power": 241731592
  },
  {
   "server": 11108,
   "family": "Banana",
   "power": 200356874
  },
  {
   "server": 11108,
   "family": "Legendários",
   "power": 155771915
  },
  {
   "server": 11108,
   "family": "A_Liberdade",
   "power": 97847225
  },
  {
   "server": 11108,
   "family": "ragnarok",
   "power": 80007480
  },
  {
   "server": 11109,
   "family": "FiatUno",
   "power": 1603485078
  },
  {
   "server": 11109,
   "family": "LegendsBR",
   "power": 642890847
  },
  {
   "server": 11109,
   "family": "Brasileiros",
   "power": 385364344
  },
  {
   "server": 11109,
   "family": "FT",
   "power": 347566331
  },
  {
   "server": 11109,
   "family": "Líderes",
   "power": 306712863
  },
  {
   "server": 11109,
   "family": "《AKATSUKI》",
   "power": 259318234
  },
  {
   "server": 11109,
   "family": "ChapeuDePalha",
   "power": 248773365
  },
  {
   "server": 11109,
   "family": "Konoha",
   "power": 237721041
  },
  {
   "server": 11109,
   "family": "saiDaFrente",
   "power": 223411394
  },
  {
   "server": 11109,
   "family": "TIME_7",
   "power": 189491183
  },
  {
   "server": 11110,
   "family": "BLACKDRAGONS",
   "power": 1647679069
  },
  {
   "server": 11110,
   "family": "EnergyMonster",
   "power": 590501622
  },
  {
   "server": 11110,
   "family": "BloodRoots",
   "power": 440654449
  },
  {
   "server": 11110,
   "family": "Overlords",
   "power": 377279180
  },
  {
   "server": 11110,
   "family": "MONARCAS",
   "power": 276009881
  },
  {
   "server": 11110,
   "family": "OsMaisFortes",
   "power": 228365578
  },
  {
   "server": 11110,
   "family": "FLAMENGUISTAS",
   "power": 202215471
  },
  {
   "server": 11110,
   "family": "INTZ",
   "power": 197509004
  },
  {
   "server": 11110,
   "family": "CRF_FLAMENGO",
   "power": 195658518
  },
  {
   "server": 11110,
   "family": "TropaDoSemAmor",
   "power": 187202591
  },
  {
   "server": 11111,
   "family": "CARAMELOS",
   "power": 1502936084
  },
  {
   "server": 11111,
   "family": "𝘚𝘖𝘓𝘈𝘐𝘙𝘌",
   "power": 377467011
  },
  {
   "server": 11111,
   "family": "DODGERS",
   "power": 305188082
  },
  {
   "server": 11111,
   "family": "Heaven",
   "power": 298109091
  },
  {
   "server": 11111,
   "family": "Sayajins",
   "power": 268041473
  },
  {
   "server": 11111,
   "family": "Desafiantes",
   "power": 243838843
  },
  {
   "server": 11111,
   "family": "TourosNegros",
   "power": 202537496
  },
  {
   "server": 11111,
   "family": "ElementFire",
   "power": 158237494
  },
  {
   "server": 11111,
   "family": "GodsOfWar",
   "power": 150042144
  },
  {
   "server": 11111,
   "family": "DemonsKing",
   "power": 142358850
  },
  {
   "server": 11112,
   "family": "BRASIL",
   "power": 1555779806
  },
  {
   "server": 11112,
   "family": "PsilocybeClub",
   "power": 648744555
  },
  {
   "server": 11112,
   "family": "LOVEKILLER",
   "power": 363229667
  },
  {
   "server": 11112,
   "family": "Valhalla",
   "power": 255286772
  },
  {
   "server": 11112,
   "family": "forçaportugal",
   "power": 241859190
  },
  {
   "server": 11112,
   "family": "DEMONIOS_PT",
   "power": 221009554
  },
  {
   "server": 11112,
   "family": "OS_PSICOS",
   "power": 179442389
  },
  {
   "server": 11112,
   "family": "FLUXO_BR",
   "power": 173213676
  },
  {
   "server": 11112,
   "family": "GUMELANDIA",
   "power": 164510502
  },
  {
   "server": 11112,
   "family": "Force_Brasil",
   "power": 117023257
  },
  {
   "server": 11113,
   "family": "UNION",
   "power": 1688951868
  },
  {
   "server": 11113,
   "family": "ShadowGarden",
   "power": 629642145
  },
  {
   "server": 11113,
   "family": "Nazarick",
   "power": 404326851
  },
  {
   "server": 11113,
   "family": "YZX",
   "power": 310125535
  },
  {
   "server": 11113,
   "family": "death",
   "power": 226335125
  },
  {
   "server": 11113,
   "family": "OlhaOTop1",
   "power": 212105659
  },
  {
   "server": 11113,
   "family": "Imperial",
   "power": 188027684
  },
  {
   "server": 11113,
   "family": "LifeInvader",
   "power": 185343420
  },
  {
   "server": 11113,
   "family": "IMPERIOiNSANO",
   "power": 147033859
  },
  {
   "server": 11113,
   "family": "MushroomWorld",
   "power": 121573767
  },
  {
   "server": 11114,
   "family": "LEGENDS",
   "power": 1481826267
  },
  {
   "server": 11114,
   "family": "Konoha",
   "power": 889421967
  },
  {
   "server": 11114,
   "family": "Nightmares_br",
   "power": 412201437
  },
  {
   "server": 11114,
   "family": "TrupeFantasma",
   "power": 294563817
  },
  {
   "server": 11114,
   "family": "RAGNAROK",
   "power": 291537203
  },
  {
   "server": 11114,
   "family": "BrazilianTeam",
   "power": 285273453
  },
  {
   "server": 11114,
   "family": "RED_DRAGONS",
   "power": 258185480
  },
  {
   "server": 11114,
   "family": "꧁ঔৣARCANJOS",
   "power": 187964225
  },
  {
   "server": 11114,
   "family": "TeamOP",
   "power": 186758434
  },
  {
   "server": 11114,
   "family": "LEVEL_ONE",
   "power": 173338530
  },
  {
   "server": 11115,
   "family": "Valhalla",
   "power": 1604253589
  },
  {
   "server": 11115,
   "family": "Valhalla2",
   "power": 637232658
  },
  {
   "server": 11115,
   "family": "𓂀ƦЄƝЄƓƛƊƠƧ𓂀",
   "power": 549143648
  },
  {
   "server": 11115,
   "family": "WarLords",
   "power": 318329910
  },
  {
   "server": 11115,
   "family": "overlord",
   "power": 291910656
  },
  {
   "server": 11115,
   "family": "Os_Gumelos",
   "power": 254761983
  },
  {
   "server": 11115,
   "family": "NoLiKe",
   "power": 253621670
  },
  {
   "server": 11115,
   "family": "Gl0ry",
   "power": 243947795
  },
  {
   "server": 11115,
   "family": "SHADOW_CULT",
   "power": 237911673
  },
  {
   "server": 11115,
   "family": "Alasca",
   "power": 229733593
  },
  {
   "server": 11116,
   "family": "PHTeam",
   "power": 1711915767
  },
  {
   "server": 11116,
   "family": "THCOGUMELO",
   "power": 632234704
  },
  {
   "server": 11116,
   "family": "WNX",
   "power": 521501520
  },
  {
   "server": 11116,
   "family": "AtivosBR",
   "power": 288830995
  },
  {
   "server": 11116,
   "family": "Akatsuki",
   "power": 284212383
  },
  {
   "server": 11116,
   "family": "NEKROZ",
   "power": 188900871
  },
  {
   "server": 11116,
   "family": "xvideos",
   "power": 183162264
  },
  {
   "server": 11116,
   "family": "CearaBr",
   "power": 166860658
  },
  {
   "server": 11116,
   "family": "GUERREIRUS",
   "power": 152849522
  },
  {
   "server": 11116,
   "family": "Vikings",
   "power": 151260733
  },
  {
   "server": 11117,
   "family": "EL_SUICIDAS",
   "power": 1461085438
  },
  {
   "server": 11117,
   "family": "IMBATÍVEIS",
   "power": 1003967814
  },
  {
   "server": 11117,
   "family": "BrasilBR",
   "power": 282131410
  },
  {
   "server": 11117,
   "family": "AurumImperium",
   "power": 238114036
  },
  {
   "server": 11117,
   "family": "AGL_SCORPION",
   "power": 221736551
  },
  {
   "server": 11117,
   "family": "Akatsuki",
   "power": 217616069
  },
  {
   "server": 11117,
   "family": "BRAZUKAS",
   "power": 152680244
  },
  {
   "server": 11117,
   "family": "Supremacia_DVA",
   "power": 141336478
  },
  {
   "server": 11117,
   "family": "OS_VICIADOS",
   "power": 134845722
  },
  {
   "server": 11117,
   "family": "oiiii",
   "power": 121933145
  },
  {
   "server": 11118,
   "family": "ALPHAᶜᴮ",
   "power": 1537411221
  },
  {
   "server": 11118,
   "family": "kalvos",
   "power": 489174490
  },
  {
   "server": 11118,
   "family": "KillingSpree",
   "power": 460496991
  },
  {
   "server": 11118,
   "family": "³⁰⁰VIKINGS",
   "power": 336028032
  },
  {
   "server": 11118,
   "family": "DarkAngels",
   "power": 308335715
  },
  {
   "server": 11118,
   "family": "NETWORK",
   "power": 292666851
  },
  {
   "server": 11118,
   "family": "Royalty",
   "power": 242453131
  },
  {
   "server": 11118,
   "family": "RENEGADOS",
   "power": 191112810
  },
  {
   "server": 11118,
   "family": "LedasCogumelos",
   "power": 172693177
  },
  {
   "server": 11118,
   "family": "BRASIL69",
   "power": 154577661
  },
  {
   "server": 11119,
   "family": "GameØver",
   "power": 1437555613
  },
  {
   "server": 11119,
   "family": "DELICIAS",
   "power": 1274986511
  },
  {
   "server": 11119,
   "family": "CogMagic",
   "power": 401527592
  },
  {
   "server": 11119,
   "family": "Humildes",
   "power": 258820058
  },
  {
   "server": 11119,
   "family": "Dragons",
   "power": 256234708
  },
  {
   "server": 11119,
   "family": "LOUDgg",
   "power": 196581979
  },
  {
   "server": 11119,
   "family": "Buyatchaca",
   "power": 169615832
  },
  {
   "server": 11119,
   "family": "LADRÃO",
   "power": 165456462
  },
  {
   "server": 11119,
   "family": "Brazuca",
   "power": 158706920
  },
  {
   "server": 11119,
   "family": "Falidos",
   "power": 148397539
  },
  {
   "server": 11120,
   "family": "Olimpo",
   "power": 1271953868
  },
  {
   "server": 11120,
   "family": "X0T4",
   "power": 1107055992
  },
  {
   "server": 11120,
   "family": "Brasileirinhos",
   "power": 302397525
  },
  {
   "server": 11120,
   "family": "BRAZUKA",
   "power": 288483220
  },
  {
   "server": 11120,
   "family": "akatsuki",
   "power": 267788337
  },
  {
   "server": 11120,
   "family": "MadeinBrazil",
   "power": 262764626
  },
  {
   "server": 11120,
   "family": "TOP1",
   "power": 246371280
  },
  {
   "server": 11120,
   "family": "ou",
   "power": 206019353
  },
  {
   "server": 11120,
   "family": "NNBoys®",
   "power": 184399510
  },
  {
   "server": 11120,
   "family": "FairyTail",
   "power": 163743553
  },
  {
   "server": 11121,
   "family": "NewOrder",
   "power": 1444980806
  },
  {
   "server": 11121,
   "family": "MadeInBrasil",
   "power": 1277722087
  },
  {
   "server": 11121,
   "family": "Legend_OF_Mush",
   "power": 370038803
  },
  {
   "server": 11121,
   "family": "ALCATÉIA_ALFA",
   "power": 269592131
  },
  {
   "server": 11121,
   "family": "HellsAngels",
   "power": 177873895
  },
  {
   "server": 11121,
   "family": "REVOADA",
   "power": 176738046
  },
  {
   "server": 11121,
   "family": "TROYA",
   "power": 171703069
  },
  {
   "server": 11121,
   "family": "RAPOSA",
   "power": 163314897
  },
  {
   "server": 11121,
   "family": "nikolas",
   "power": 116853159
  },
  {
   "server": 11121,
   "family": "tk_king",
   "power": 115816187
  },
  {
   "server": 11122,
   "family": "VIKINGS",
   "power": 1434634765
  },
  {
   "server": 11122,
   "family": "ELITE_BR",
   "power": 555104497
  },
  {
   "server": 11122,
   "family": "NEMESIS",
   "power": 487890477
  },
  {
   "server": 11122,
   "family": "AKATSUKI_BR",
   "power": 329793228
  },
  {
   "server": 11122,
   "family": "PALERMAS",
   "power": 261538668
  },
  {
   "server": 11122,
   "family": "NEVER",
   "power": 198429300
  },
  {
   "server": 11122,
   "family": "FLUXO",
   "power": 184402505
  },
  {
   "server": 11122,
   "family": "TheMaestros",
   "power": 181304829
  },
  {
   "server": 11122,
   "family": "AHJIN",
   "power": 169367151
  },
  {
   "server": 11122,
   "family": "yakuza013",
   "power": 163588593
  },
  {
   "server": 11123,
   "family": "AHJIN",
   "power": 1445499245
  },
  {
   "server": 11123,
   "family": "SSS",
   "power": 1186297459
  },
  {
   "server": 11123,
   "family": "OnePiece",
   "power": 402068457
  },
  {
   "server": 11123,
   "family": "INVICTOS",
   "power": 358103688
  },
  {
   "server": 11123,
   "family": "LOWFI",
   "power": 277065405
  },
  {
   "server": 11123,
   "family": "MÁFIA",
   "power": 168776908
  },
  {
   "server": 11123,
   "family": "MANIKOMIO",
   "power": 156573263
  },
  {
   "server": 11123,
   "family": "ÁGUIAS",
   "power": 132181809
  },
  {
   "server": 11123,
   "family": "RikH",
   "power": 71933929
  },
  {
   "server": 11123,
   "family": "PlayerSolo",
   "power": 34318501
  },
  {
   "server": 11124,
   "family": "Hogwarts",
   "power": 1479531454
  },
  {
   "server": 11124,
   "family": "F4CCION4DOS",
   "power": 781143258
  },
  {
   "server": 11124,
   "family": "clt431",
   "power": 621772593
  },
  {
   "server": 11124,
   "family": "Chandra",
   "power": 383812541
  },
  {
   "server": 11124,
   "family": "Dragons",
   "power": 274411611
  },
  {
   "server": 11124,
   "family": "Shadow",
   "power": 222150470
  },
  {
   "server": 11124,
   "family": "BRBosque",
   "power": 184410608
  },
  {
   "server": 11124,
   "family": "FIM",
   "power": 177206862
  },
  {
   "server": 11124,
   "family": "os_darkes",
   "power": 110295979
  },
  {
   "server": 11124,
   "family": "thelosers",
   "power": 106434839
  },
  {
   "server": 11125,
   "family": "Polters",
   "power": 1443277786
  },
  {
   "server": 11125,
   "family": "Kalashnikov47",
   "power": 688112841
  },
  {
   "server": 11125,
   "family": "Brothers",
   "power": 327113655
  },
  {
   "server": 11125,
   "family": "bRaSiL",
   "power": 284367436
  },
  {
   "server": 11125,
   "family": "AkatsukiGang",
   "power": 271665748
  },
  {
   "server": 11125,
   "family": "AMANT3MÚSICAS",
   "power": 240271365
  },
  {
   "server": 11125,
   "family": "RIP_GLACEON",
   "power": 232522878
  },
  {
   "server": 11125,
   "family": "YTBSuperdark21",
   "power": 190618800
  },
  {
   "server": 11125,
   "family": "ᴛʜᴇﾠᴡɪᴢᴀʀᴅs",
   "power": 148471361
  },
  {
   "server": 11125,
   "family": "LOUD",
   "power": 137060316
  },
  {
   "server": 11126,
   "family": "Asgard",
   "power": 1273557107
  },
  {
   "server": 11126,
   "family": "メNoCash",
   "power": 1086710721
  },
  {
   "server": 11126,
   "family": "CaçadoresBR",
   "power": 283938684
  },
  {
   "server": 11126,
   "family": "ĈÁĽÄƁŔËŜŐṢ",
   "power": 238550638
  },
  {
   "server": 11126,
   "family": "revolução",
   "power": 188262361
  },
  {
   "server": 11126,
   "family": "Pablojuan87",
   "power": 181815930
  },
  {
   "server": 11126,
   "family": "Liberty",
   "power": 174575775
  },
  {
   "server": 11126,
   "family": "OPRESSORES",
   "power": 173568176
  },
  {
   "server": 11126,
   "family": "IMPÉRIOS",
   "power": 158205733
  },
  {
   "server": 11126,
   "family": "BRAZUKA",
   "power": 136782864
  },
  {
   "server": 11127,
   "family": "Omega",
   "power": 1392673257
  },
  {
   "server": 11127,
   "family": "INVICTOS",
   "power": 1225696332
  },
  {
   "server": 11127,
   "family": "ONE_PIECE",
   "power": 1076798076
  },
  {
   "server": 11127,
   "family": "V4mp",
   "power": 252525904
  },
  {
   "server": 11127,
   "family": "AKATSUKI",
   "power": 151418111
  },
  {
   "server": 11127,
   "family": "Nanatsu",
   "power": 139042808
  },
  {
   "server": 11127,
   "family": "HellFamily",
   "power": 132725507
  },
  {
   "server": 11127,
   "family": "NEXT",
   "power": 132421643
  },
  {
   "server": 11127,
   "family": "OsFree",
   "power": 122390994
  },
  {
   "server": 11127,
   "family": "DDragons",
   "power": 122007199
  },
  {
   "server": 11128,
   "family": "ᴛᴏᴋʏᴏᴍᴀɴᴊɪ",
   "power": 1285940960
  },
  {
   "server": 11128,
   "family": "CavaleirosZODI",
   "power": 678273274
  },
  {
   "server": 11128,
   "family": "BRAZUCAS",
   "power": 458998635
  },
  {
   "server": 11128,
   "family": "HOSGOV",
   "power": 412554482
  },
  {
   "server": 11128,
   "family": "SOLO_LEVELING",
   "power": 311739189
  },
  {
   "server": 11128,
   "family": "HogwartsBR",
   "power": 210100635
  },
  {
   "server": 11128,
   "family": "EliteBr",
   "power": 203485381
  },
  {
   "server": 11128,
   "family": "7KING",
   "power": 200701206
  },
  {
   "server": 11128,
   "family": "Infernnum",
   "power": 185355081
  },
  {
   "server": 11128,
   "family": "Spartan",
   "power": 157340128
  },
  {
   "server": 11129,
   "family": "Olimpo",
   "power": 1438297869
  },
  {
   "server": 11129,
   "family": "GOD_OF_WAR",
   "power": 830104588
  },
  {
   "server": 11129,
   "family": "TryHard",
   "power": 426787404
  },
  {
   "server": 11129,
   "family": "BlackDragons",
   "power": 373901584
  },
  {
   "server": 11129,
   "family": "OsTourosNegros",
   "power": 321184771
  },
  {
   "server": 11129,
   "family": "WhiteDrangons",
   "power": 256755192
  },
  {
   "server": 11129,
   "family": "Noiados",
   "power": 216671029
  },
  {
   "server": 11129,
   "family": "Akatsuki",
   "power": 189413540
  },
  {
   "server": 11129,
   "family": "triple",
   "power": 185376771
  },
  {
   "server": 11129,
   "family": "Cães_de_Guerra",
   "power": 115657901
  },
  {
   "server": 11130,
   "family": "MASTERS",
   "power": 1467269676
  },
  {
   "server": 11130,
   "family": "WINX",
   "power": 1279262971
  },
  {
   "server": 11130,
   "family": "Bankainnaluss",
   "power": 356710286
  },
  {
   "server": 11130,
   "family": "Queen",
   "power": 278362508
  },
  {
   "server": 11130,
   "family": "INVICTUSπ",
   "power": 218801411
  },
  {
   "server": 11130,
   "family": "WARRIORS",
   "power": 215086480
  },
  {
   "server": 11130,
   "family": "MiB",
   "power": 156413196
  },
  {
   "server": 11130,
   "family": "brothers",
   "power": 152483316
  },
  {
   "server": 11130,
   "family": "MarchaClub",
   "power": 152107601
  },
  {
   "server": 11130,
   "family": "Akatsuki",
   "power": 137325554
  },
  {
   "server": 11131,
   "family": "TAMAGOSHI",
   "power": 1451166242
  },
  {
   "server": 11131,
   "family": "Supreme",
   "power": 593670241
  },
  {
   "server": 11131,
   "family": "Mystic",
   "power": 392470729
  },
  {
   "server": 11131,
   "family": "Eclipse",
   "power": 294727172
  },
  {
   "server": 11131,
   "family": "BRASIL",
   "power": 267975682
  },
  {
   "server": 11131,
   "family": "CLUBEDOCARIMBO",
   "power": 221176788
  },
  {
   "server": 11131,
   "family": "Brazuka",
   "power": 183604519
  },
  {
   "server": 11131,
   "family": "Fúria",
   "power": 178829377
  },
  {
   "server": 11131,
   "family": "Infinity999",
   "power": 164872323
  },
  {
   "server": 11131,
   "family": "soulSoucity",
   "power": 153257738
  },
  {
   "server": 11132,
   "family": "Game–Over",
   "power": 1478813968
  },
  {
   "server": 11132,
   "family": "CogulandiaBR",
   "power": 886488993
  },
  {
   "server": 11132,
   "family": "Dracarys",
   "power": 475950966
  },
  {
   "server": 11132,
   "family": "🦋Escavenger🦋",
   "power": 397190676
  },
  {
   "server": 11132,
   "family": "TheCrøxs",
   "power": 328086885
  },
  {
   "server": 11132,
   "family": "osgrifo",
   "power": 261839480
  },
  {
   "server": 11132,
   "family": "LENDÁRIOS",
   "power": 248570676
  },
  {
   "server": 11132,
   "family": "COG   Academy",
   "power": 210729233
  },
  {
   "server": 11132,
   "family": "esquizoides",
   "power": 129623289
  },
  {
   "server": 11132,
   "family": "INVICTUS",
   "power": 118909483
  },
  {
   "server": 11133,
   "family": "ElGodsHouse",
   "power": 1470216105
  },
  {
   "server": 11133,
   "family": "ElGodsHousell",
   "power": 563093797
  },
  {
   "server": 11133,
   "family": "Jungle_br",
   "power": 433648360
  },
  {
   "server": 11133,
   "family": "BLITZ",
   "power": 266658132
  },
  {
   "server": 11133,
   "family": "Conquistador",
   "power": 262598019
  },
  {
   "server": 11133,
   "family": "Sparta",
   "power": 215763815
  },
  {
   "server": 11133,
   "family": "Deuar",
   "power": 177310534
  },
  {
   "server": 11133,
   "family": "OLIMPO",
   "power": 168753618
  },
  {
   "server": 11133,
   "family": "SoloLeveling",
   "power": 124370488
  },
  {
   "server": 11133,
   "family": "FamilyCorleone",
   "power": 90600003
  },
  {
   "server": 11134,
   "family": "Leveling",
   "power": 1497646196
  },
  {
   "server": 11134,
   "family": "Jaguaras",
   "power": 524101932
  },
  {
   "server": 11134,
   "family": "TOP1",
   "power": 330594806
  },
  {
   "server": 11134,
   "family": "Vikings",
   "power": 299733205
  },
  {
   "server": 11134,
   "family": "HASHIRAS",
   "power": 244904615
  },
  {
   "server": 11134,
   "family": "Laele",
   "power": 228023140
  },
  {
   "server": 11134,
   "family": "Libertad",
   "power": 209803097
  },
  {
   "server": 11134,
   "family": "NEXUS",
   "power": 207074813
  },
  {
   "server": 11134,
   "family": "SALVADOR_BA",
   "power": 198929109
  },
  {
   "server": 11134,
   "family": "CaçaBaleias",
   "power": 197157275
  },
  {
   "server": 11135,
   "family": "Hazit",
   "power": 1492211880
  },
  {
   "server": 11135,
   "family": "ѵıłα",
   "power": 951709157
  },
  {
   "server": 11135,
   "family": "INFERNUS",
   "power": 812377365
  },
  {
   "server": 11135,
   "family": "Legends",
   "power": 347346952
  },
  {
   "server": 11135,
   "family": "Urzeke",
   "power": 246916627
  },
  {
   "server": 11135,
   "family": "BLACK彡DRAGONS",
   "power": 207939446
  },
  {
   "server": 11135,
   "family": "MonHorck",
   "power": 180311243
  },
  {
   "server": 11135,
   "family": "Carniceiros",
   "power": 164529516
  },
  {
   "server": 11135,
   "family": "ACKERMAN",
   "power": 147971076
  },
  {
   "server": 11135,
   "family": "CocaCola",
   "power": 138992291
  },
  {
   "server": 11136,
   "family": "NoGs",
   "power": 1394457161
  },
  {
   "server": 11136,
   "family": "Clandestinos",
   "power": 406997052
  },
  {
   "server": 11136,
   "family": "Fungi",
   "power": 344695707
  },
  {
   "server": 11136,
   "family": "TROPA_BR",
   "power": 251352592
  },
  {
   "server": 11136,
   "family": "TEMPLÁRIOS",
   "power": 218070993
  },
  {
   "server": 11136,
   "family": "iMØRTAiS",
   "power": 153255949
  },
  {
   "server": 11136,
   "family": "DRAGON",
   "power": 145344084
  },
  {
   "server": 11136,
   "family": "XUPAessaMANGA",
   "power": 139037783
  },
  {
   "server": 11136,
   "family": "SeaAlts",
   "power": 133935893
  },
  {
   "server": 11136,
   "family": "FÊNIX",
   "power": 124822904
  },
  {
   "server": 11137,
   "family": "Tadala",
   "power": 1170330082
  },
  {
   "server": 11137,
   "family": "Bifrost",
   "power": 1017565245
  },
  {
   "server": 11137,
   "family": "Supreme",
   "power": 413205979
  },
  {
   "server": 11137,
   "family": "Atumalaca",
   "power": 252842839
  },
  {
   "server": 11137,
   "family": "Hunters",
   "power": 220009624
  },
  {
   "server": 11137,
   "family": "ButecoBR",
   "power": 203484352
  },
  {
   "server": 11137,
   "family": "Konoha",
   "power": 181220570
  },
  {
   "server": 11137,
   "family": "Av4gers",
   "power": 162714932
  },
  {
   "server": 11137,
   "family": "Alcatraz",
   "power": 135610461
  },
  {
   "server": 11137,
   "family": "moon",
   "power": 94157176
  },
  {
   "server": 11138,
   "family": "BR",
   "power": 1505342040
  },
  {
   "server": 11138,
   "family": "Vácuo",
   "power": 626694030
  },
  {
   "server": 11138,
   "family": "HEROS",
   "power": 537019018
  },
  {
   "server": 11138,
   "family": "Brasil",
   "power": 411218833
  },
  {
   "server": 11138,
   "family": "BRASIL",
   "power": 293874243
  },
  {
   "server": 11138,
   "family": "IMPÉRIO",
   "power": 283849376
  },
  {
   "server": 11138,
   "family": "Darck",
   "power": 245888748
  },
  {
   "server": 11138,
   "family": "DARKs",
   "power": 176985028
  },
  {
   "server": 11138,
   "family": "pcs",
   "power": 169787391
  },
  {
   "server": 11138,
   "family": "BRAZZERS",
   "power": 149902963
  },
  {
   "server": 11139,
   "family": "ALLIANCE¹",
   "power": 1524605371
  },
  {
   "server": 11139,
   "family": "ALLIANCE²",
   "power": 706910046
  },
  {
   "server": 11139,
   "family": "_RENEGADOS_",
   "power": 403251720
  },
  {
   "server": 11139,
   "family": "ONE PIECE",
   "power": 379335481
  },
  {
   "server": 11139,
   "family": "BLACKOUT",
   "power": 313566529
  },
  {
   "server": 11139,
   "family": "Theviking",
   "power": 289766241
  },
  {
   "server": 11139,
   "family": "PREDADORES",
   "power": 267751949
  },
  {
   "server": 11139,
   "family": "chinfrin",
   "power": 257378076
  },
  {
   "server": 11139,
   "family": "nanatsu",
   "power": 201137951
  },
  {
   "server": 11139,
   "family": "HASHIRAS",
   "power": 183069177
  },
  {
   "server": 11140,
   "family": "MãoNegra",
   "power": 1457062905
  },
  {
   "server": 11140,
   "family": "Baehyungs",
   "power": 1011733072
  },
  {
   "server": 11140,
   "family": "Ascencion",
   "power": 521948553
  },
  {
   "server": 11140,
   "family": "AFK",
   "power": 346380527
  },
  {
   "server": 11140,
   "family": "Gladiadores",
   "power": 224740785
  },
  {
   "server": 11140,
   "family": "Akatsuki",
   "power": 206094015
  },
  {
   "server": 11140,
   "family": "mobilefalidos",
   "power": 156996563
  },
  {
   "server": 11140,
   "family": "Excalibur",
   "power": 153613332
  },
  {
   "server": 11140,
   "family": "SOLOㅤLEVELING",
   "power": 153146624
  },
  {
   "server": 11140,
   "family": "IMPÉRIO",
   "power": 151941385
  },
  {
   "server": 11141,
   "family": "NOVA",
   "power": 1359201559
  },
  {
   "server": 11141,
   "family": "VIKINGS",
   "power": 1098501004
  },
  {
   "server": 11141,
   "family": "BRclan",
   "power": 498385461
  },
  {
   "server": 11141,
   "family": "ØS_PARÇAS",
   "power": 259271076
  },
  {
   "server": 11141,
   "family": "GOOD",
   "power": 233428940
  },
  {
   "server": 11141,
   "family": "Dark",
   "power": 199871931
  },
  {
   "server": 11141,
   "family": "ĐRAGØNS",
   "power": 198095573
  },
  {
   "server": 11141,
   "family": "atoman",
   "power": 181427514
  },
  {
   "server": 11141,
   "family": "smokers",
   "power": 180105917
  },
  {
   "server": 11141,
   "family": "Draconia",
   "power": 164067777
  },
  {
   "server": 11142,
   "family": "Senzala",
   "power": 1286500232
  },
  {
   "server": 11142,
   "family": "BRKx",
   "power": 933743170
  },
  {
   "server": 11142,
   "family": "BRAZUKAS",
   "power": 334358453
  },
  {
   "server": 11142,
   "family": "alcateia",
   "power": 329254378
  },
  {
   "server": 11142,
   "family": "Royalty",
   "power": 312531453
  },
  {
   "server": 11142,
   "family": "Hárpias",
   "power": 237233275
  },
  {
   "server": 11142,
   "family": "CavalheiroFAM",
   "power": 200946539
  },
  {
   "server": 11142,
   "family": "brasileiro",
   "power": 168682609
  },
  {
   "server": 11142,
   "family": "DragonBR",
   "power": 162626936
  },
  {
   "server": 11142,
   "family": "Columelo",
   "power": 156897580
  },
  {
   "server": 11143,
   "family": "Yakuza",
   "power": 1304456743
  },
  {
   "server": 11143,
   "family": "Tigrinho",
   "power": 1249520860
  },
  {
   "server": 11143,
   "family": "MoonLight",
   "power": 359951072
  },
  {
   "server": 11143,
   "family": "Ragnarök",
   "power": 311732624
  },
  {
   "server": 11143,
   "family": "༒Demon_Lords༒",
   "power": 207622043
  },
  {
   "server": 11143,
   "family": "BR_TOMAM",
   "power": 206353630
  },
  {
   "server": 11143,
   "family": "MVP",
   "power": 149754628
  },
  {
   "server": 11143,
   "family": "PTugaUnited",
   "power": 148787611
  },
  {
   "server": 11143,
   "family": "CasaDaMoeda",
   "power": 106919890
  },
  {
   "server": 11143,
   "family": "FLAMENGO",
   "power": 57680305
  },
  {
   "server": 11144,
   "family": "MAFIA",
   "power": 1231199579
  },
  {
   "server": 11144,
   "family": "TheKingLegion",
   "power": 363559644
  },
  {
   "server": 11144,
   "family": "TopMushAcademy",
   "power": 248254796
  },
  {
   "server": 11144,
   "family": "Lost",
   "power": 242204486
  },
  {
   "server": 11144,
   "family": "BR_Cogumelo",
   "power": 229910071
  },
  {
   "server": 11144,
   "family": "ZnSClãn",
   "power": 205581496
  },
  {
   "server": 11144,
   "family": "PAODEQUEIJO",
   "power": 193209323
  },
  {
   "server": 11144,
   "family": "Pamonheiros",
   "power": 186838479
  },
  {
   "server": 11144,
   "family": "TopMushᵀᴹ",
   "power": 169058124
  },
  {
   "server": 11144,
   "family": "moskhousegreen",
   "power": 149106313
  },
  {
   "server": 11145,
   "family": "FoiaAmarela",
   "power": 1348797307
  },
  {
   "server": 11145,
   "family": "OnePiece",
   "power": 1047853548
  },
  {
   "server": 11145,
   "family": "BABILON_BR",
   "power": 289255352
  },
  {
   "server": 11145,
   "family": "Royalty",
   "power": 256825413
  },
  {
   "server": 11145,
   "family": "kenway",
   "power": 239404838
  },
  {
   "server": 11145,
   "family": "OsSemTerra",
   "power": 231391913
  },
  {
   "server": 11145,
   "family": "VLL_VALRALA",
   "power": 204283261
  },
  {
   "server": 11145,
   "family": "CROMATICO",
   "power": 173737550
  },
  {
   "server": 11145,
   "family": "AKATSUKI",
   "power": 173590026
  },
  {
   "server": 11145,
   "family": "Fifisões",
   "power": 139266477
  },
  {
   "server": 11146,
   "family": "RAGNAROK",
   "power": 1213748391
  },
  {
   "server": 11146,
   "family": "Solo_Leveling",
   "power": 860833369
  },
  {
   "server": 11146,
   "family": "RedDead",
   "power": 499629008
  },
  {
   "server": 11146,
   "family": "brasileiros",
   "power": 460799055
  },
  {
   "server": 11146,
   "family": "FLAMENGO MDL",
   "power": 244964708
  },
  {
   "server": 11146,
   "family": "JointBr",
   "power": 238343084
  },
  {
   "server": 11146,
   "family": "pxerium",
   "power": 200906522
  },
  {
   "server": 11146,
   "family": "Toadtool",
   "power": 186994428
  },
  {
   "server": 11146,
   "family": "OneMushroom",
   "power": 173326871
  },
  {
   "server": 11146,
   "family": "FATALITTY",
   "power": 158575449
  },
  {
   "server": 11147,
   "family": "GodSlayer",
   "power": 1328390880
  },
  {
   "server": 11147,
   "family": "New_World",
   "power": 896725993
  },
  {
   "server": 11147,
   "family": "ᴼᴾ°OnePiece",
   "power": 671876763
  },
  {
   "server": 11147,
   "family": "Grifinoria",
   "power": 411827288
  },
  {
   "server": 11147,
   "family": "TG",
   "power": 255643313
  },
  {
   "server": 11147,
   "family": "CháDeCogumelo",
   "power": 171346255
  },
  {
   "server": 11147,
   "family": "Brasil",
   "power": 147887470
  },
  {
   "server": 11147,
   "family": "PROSLAYER",
   "power": 138238110
  },
  {
   "server": 11147,
   "family": "BRAZUKA",
   "power": 136206522
  },
  {
   "server": 11147,
   "family": "Átrios",
   "power": 129659429
  },
  {
   "server": 11148,
   "family": "ELEMENTARES",
   "power": 1074415078
  },
  {
   "server": 11148,
   "family": "Hashiras",
   "power": 979738971
  },
  {
   "server": 11148,
   "family": "ZODÍACOS",
   "power": 374349701
  },
  {
   "server": 11148,
   "family": "TurmaDoBairro",
   "power": 271862161
  },
  {
   "server": 11148,
   "family": "TEAMOP",
   "power": 257329607
  },
  {
   "server": 11148,
   "family": "FAIRY_TAIL",
   "power": 233008458
  },
  {
   "server": 11148,
   "family": "GUERREIROS",
   "power": 203870718
  },
  {
   "server": 11148,
   "family": "CEIFADORES",
   "power": 183211385
  },
  {
   "server": 11148,
   "family": "UPADORES",
   "power": 167072686
  },
  {
   "server": 11148,
   "family": "Vikings",
   "power": 134911135
  },
  {
   "server": 11149,
   "family": "THE_KINGDOM",
   "power": 1231045182
  },
  {
   "server": 11149,
   "family": "STARS",
   "power": 1055683579
  },
  {
   "server": 11149,
   "family": "Fluxo",
   "power": 542744596
  },
  {
   "server": 11149,
   "family": "DESTINO",
   "power": 264607508
  },
  {
   "server": 11149,
   "family": "BRAZUKAs",
   "power": 218875564
  },
  {
   "server": 11149,
   "family": "Mush",
   "power": 202199340
  },
  {
   "server": 11149,
   "family": "Elite",
   "power": 190437183
  },
  {
   "server": 11149,
   "family": "Kings",
   "power": 161731141
  },
  {
   "server": 11149,
   "family": "GUILDA",
   "power": 151521284
  },
  {
   "server": 11149,
   "family": "LΞGIãФ",
   "power": 129555224
  },
  {
   "server": 11150,
   "family": "MiauMiau²",
   "power": 1151572306
  },
  {
   "server": 11150,
   "family": "ᶠᵘˡˡOLÍMPO",
   "power": 1074492631
  },
  {
   "server": 11150,
   "family": "TheKingsBR",
   "power": 308134255
  },
  {
   "server": 11150,
   "family": "RAGNAROK",
   "power": 254812933
  },
  {
   "server": 11150,
   "family": "HellRaisers",
   "power": 241630945
  },
  {
   "server": 11150,
   "family": "DRAGON",
   "power": 237700152
  },
  {
   "server": 11150,
   "family": "Brasil",
   "power": 208498376
  },
  {
   "server": 11150,
   "family": "CHUNJO",
   "power": 180313969
  },
  {
   "server": 11150,
   "family": "CogosLocos",
   "power": 167912750
  },
  {
   "server": 11150,
   "family": "OtakusBR",
   "power": 155319323
  },
  {
   "server": 11151,
   "family": "CODEX",
   "power": 1208549514
  },
  {
   "server": 11151,
   "family": "PrivateWar",
   "power": 911024641
  },
  {
   "server": 11151,
   "family": "OnePiece",
   "power": 290420627
  },
  {
   "server": 11151,
   "family": "Odin",
   "power": 249960484
  },
  {
   "server": 11151,
   "family": "AnarchyS1",
   "power": 246847010
  },
  {
   "server": 11151,
   "family": "MaxPowers",
   "power": 205266669
  },
  {
   "server": 11151,
   "family": "PapiTchulo",
   "power": 184777284
  },
  {
   "server": 11151,
   "family": "Fênix",
   "power": 128772971
  },
  {
   "server": 11151,
   "family": "TheKings",
   "power": 116104597
  },
  {
   "server": 11151,
   "family": "Alliance",
   "power": 92775217
  },
  {
   "server": 11152,
   "family": "BRAZUKAs",
   "power": 1397316125
  },
  {
   "server": 11152,
   "family": "LegendSC",
   "power": 600923600
  },
  {
   "server": 11152,
   "family": "OsBaianos",
   "power": 341475074
  },
  {
   "server": 11152,
   "family": "Leviathan",
   "power": 245867203
  },
  {
   "server": 11152,
   "family": "OsAchocolatado",
   "power": 233545822
  },
  {
   "server": 11152,
   "family": "BrZada",
   "power": 205278974
  },
  {
   "server": 11152,
   "family": "Marialé",
   "power": 168829408
  },
  {
   "server": 11152,
   "family": "Bobinhos",
   "power": 164187654
  },
  {
   "server": 11152,
   "family": "PakiBlinders",
   "power": 161238416
  },
  {
   "server": 11152,
   "family": "Infinityz",
   "power": 146309342
  },
  {
   "server": 11153,
   "family": "ALIANÇA_TxE",
   "power": 1308619637
  },
  {
   "server": 11153,
   "family": "TROPA_F2P",
   "power": 438186663
  },
  {
   "server": 11153,
   "family": "Lendários",
   "power": 202047579
  },
  {
   "server": 11153,
   "family": "∆_IMPÉRIO_BR",
   "power": 190620828
  },
  {
   "server": 11153,
   "family": "ACADEMIA_TxE",
   "power": 162973238
  },
  {
   "server": 11153,
   "family": "Yakuza",
   "power": 155820604
  },
  {
   "server": 11153,
   "family": "luffyguear5",
   "power": 143787705
  },
  {
   "server": 11153,
   "family": "Valhalla",
   "power": 139828019
  },
  {
   "server": 11153,
   "family": "REDBULL",
   "power": 122445525
  },
  {
   "server": 11153,
   "family": "MONSTER",
   "power": 85895246
  },
  {
   "server": 11154,
   "family": "𝙺𝚘𝚗𝚘𝚑𝚊",
   "power": 1155306446
  },
  {
   "server": 11154,
   "family": "DFG_CALVOS",
   "power": 371240667
  },
  {
   "server": 11154,
   "family": "brs",
   "power": 256617128
  },
  {
   "server": 11154,
   "family": "VIKINGS",
   "power": 251227446
  },
  {
   "server": 11154,
   "family": "Akatsuki",
   "power": 237791692
  },
  {
   "server": 11154,
   "family": "PurpleIce",
   "power": 166588982
  },
  {
   "server": 11154,
   "family": "DESTRUIDORES",
   "power": 117546612
  },
  {
   "server": 11154,
   "family": "Kings",
   "power": 111015275
  },
  {
   "server": 11154,
   "family": "SkogensAndar",
   "power": 84763432
  },
  {
   "server": 11154,
   "family": "PublicEnemy",
   "power": 59299792
  },
  {
   "server": 11155,
   "family": "MVP",
   "power": 1342036107
  },
  {
   "server": 11155,
   "family": "Overlord",
   "power": 418051911
  },
  {
   "server": 11155,
   "family": "Lider",
   "power": 314348351
  },
  {
   "server": 11155,
   "family": "TrupeBrasil",
   "power": 286203691
  },
  {
   "server": 11155,
   "family": "420stoners",
   "power": 279693390
  },
  {
   "server": 11155,
   "family": "BaSingSlay",
   "power": 210694813
  },
  {
   "server": 11155,
   "family": "BroThersWar",
   "power": 203489163
  },
  {
   "server": 11155,
   "family": "Baehyungs",
   "power": 167025201
  },
  {
   "server": 11155,
   "family": "Rebelião",
   "power": 153731097
  },
  {
   "server": 11155,
   "family": "BROtherHood",
   "power": 153050655
  },
  {
   "server": 11156,
   "family": "Hogwarts",
   "power": 1127562480
  },
  {
   "server": 11156,
   "family": "OnlyFans",
   "power": 489606520
  },
  {
   "server": 11156,
   "family": "BRASIL",
   "power": 349347827
  },
  {
   "server": 11156,
   "family": "NAZARICK",
   "power": 279360808
  },
  {
   "server": 11156,
   "family": "arcanjos",
   "power": 169716440
  },
  {
   "server": 11156,
   "family": "《Anonymos》",
   "power": 133590868
  },
  {
   "server": 11156,
   "family": "RAGNAROK",
   "power": 119972668
  },
  {
   "server": 11156,
   "family": "M𝑎𝑔𝑛𝑎𝑡𝑎",
   "power": 35968934
  },
  {
   "server": 11156,
   "family": "Soneca",
   "power": 32403695
  },
  {
   "server": 11156,
   "family": "JustOneDolar",
   "power": 27858185
  },
  {
   "server": 11157,
   "family": "ƦƛƓƝƛƦƠƘ",
   "power": 1143714508
  },
  {
   "server": 11157,
   "family": "TeamOP",
   "power": 435049328
  },
  {
   "server": 11157,
   "family": "BRASIL",
   "power": 402934324
  },
  {
   "server": 11157,
   "family": "PROS°BRASIL",
   "power": 271126381
  },
  {
   "server": 11157,
   "family": "Vikings",
   "power": 215635677
  },
  {
   "server": 11157,
   "family": "WarriorsBrs",
   "power": 139179305
  },
  {
   "server": 11157,
   "family": "ZecaPauGordinh",
   "power": 131789479
  },
  {
   "server": 11157,
   "family": "Vengeance",
   "power": 124148668
  },
  {
   "server": 11157,
   "family": "FENIX",
   "power": 112723125
  },
  {
   "server": 11157,
   "family": "COMANF",
   "power": 69858926
  },
  {
   "server": 11158,
   "family": "Helheim",
   "power": 966277177
  },
  {
   "server": 11158,
   "family": "4FUN",
   "power": 916968329
  },
  {
   "server": 11158,
   "family": "MysticMages",
   "power": 305216311
  },
  {
   "server": 11158,
   "family": "DRAGONFLY",
   "power": 164322681
  },
  {
   "server": 11158,
   "family": "KAMI",
   "power": 159400050
  },
  {
   "server": 11158,
   "family": "Blackout",
   "power": 159222458
  },
  {
   "server": 11158,
   "family": "Uzumaki",
   "power": 144794828
  },
  {
   "server": 11158,
   "family": "BRAZUKAs",
   "power": 130591408
  },
  {
   "server": 11158,
   "family": "𝔸𝕨𝕒𝕜𝕖𝕟",
   "power": 126458584
  },
  {
   "server": 11158,
   "family": "solitários",
   "power": 83987512
  },
  {
   "server": 11159,
   "family": "𝐕𝐈𝐊𝐈𝐍𝐆𝐒",
   "power": 1031400508
  },
  {
   "server": 11159,
   "family": "BRASIL",
   "power": 362606862
  },
  {
   "server": 11159,
   "family": "Olympia",
   "power": 199331837
  },
  {
   "server": 11159,
   "family": "LOUD",
   "power": 170592830
  },
  {
   "server": 11159,
   "family": "BRAZUKAS",
   "power": 131165634
  },
  {
   "server": 11159,
   "family": "dragonborn",
   "power": 107453599
  },
  {
   "server": 11159,
   "family": "MonteOlimpo",
   "power": 103914705
  },
  {
   "server": 11159,
   "family": "IMMORTALS",
   "power": 101041797
  },
  {
   "server": 11159,
   "family": "ZRO",
   "power": 29049032
  },
  {
   "server": 11159,
   "family": "NeverForget",
   "power": 24055849
  },
  {
   "server": 11160,
   "family": "TBR`ELITE",
   "power": 1235766485
  },
  {
   "server": 11160,
   "family": "BlackSheep",
   "power": 594398271
  },
  {
   "server": 11160,
   "family": "BRASIL",
   "power": 398997817
  },
  {
   "server": 11160,
   "family": "TropaBR`2",
   "power": 218314112
  },
  {
   "server": 11160,
   "family": "TemOrigils",
   "power": 164324702
  },
  {
   "server": 11160,
   "family": "THE_KINGDOM",
   "power": 159710772
  },
  {
   "server": 11160,
   "family": "BR_Cogumelos",
   "power": 129933464
  },
  {
   "server": 11160,
   "family": "Seitadusexo",
   "power": 120341905
  },
  {
   "server": 11160,
   "family": "》PURGATÓRIO▪︎",
   "power": 112611060
  },
  {
   "server": 11160,
   "family": "ENDLESS",
   "power": 105754273
  },
  {
   "server": 11161,
   "family": "AKATSUKI",
   "power": 1229554069
  },
  {
   "server": 11161,
   "family": "SUPREMACIA",
   "power": 535107330
  },
  {
   "server": 11161,
   "family": "Ensaboados",
   "power": 420679862
  },
  {
   "server": 11161,
   "family": "BRASIL",
   "power": 194299501
  },
  {
   "server": 11161,
   "family": "Alcateia₹",
   "power": 130345196
  },
  {
   "server": 11161,
   "family": "AKATSUKI_2",
   "power": 130025189
  },
  {
   "server": 11161,
   "family": "Dysnatia",
   "power": 126153212
  },
  {
   "server": 11161,
   "family": "HUNTERS",
   "power": 117256743
  },
  {
   "server": 11161,
   "family": "lendário",
   "power": 50927968
  },
  {
   "server": 11161,
   "family": "OLD_AliancE",
   "power": 47902029
  },
  {
   "server": 11162,
   "family": "OnlyBasic",
   "power": 1206782141
  },
  {
   "server": 11162,
   "family": "BRASIL",
   "power": 481434276
  },
  {
   "server": 11162,
   "family": "Titans",
   "power": 433788347
  },
  {
   "server": 11162,
   "family": "OnePiece",
   "power": 186676750
  },
  {
   "server": 11162,
   "family": "《Toka_Terror》",
   "power": 159789918
  },
  {
   "server": 11162,
   "family": "VØID",
   "power": 115910098
  },
  {
   "server": 11162,
   "family": "soul‐society",
   "power": 113173511
  },
  {
   "server": 11162,
   "family": "Escravos",
   "power": 113051806
  },
  {
   "server": 11162,
   "family": "TROPADOCDC",
   "power": 70493694
  },
  {
   "server": 11162,
   "family": "ATLAS",
   "power": 46101895
  },
  {
   "server": 11163,
   "family": "MONTE_OLIMPO",
   "power": 1149079339
  },
  {
   "server": 11163,
   "family": "MONTE_OLIMPO2",
   "power": 480864997
  },
  {
   "server": 11163,
   "family": "CogumeloFans",
   "power": 429542665
  },
  {
   "server": 11163,
   "family": "RAGNAROK",
   "power": 175859521
  },
  {
   "server": 11163,
   "family": "Ceifadores",
   "power": 132816767
  },
  {
   "server": 11163,
   "family": "XoXoTeam",
   "power": 126840031
  },
  {
   "server": 11163,
   "family": "Cla_da_yakuza",
   "power": 115585994
  },
  {
   "server": 11163,
   "family": "MidNightClan",
   "power": 76558483
  },
  {
   "server": 11163,
   "family": "Mugiwaras",
   "power": 74061168
  },
  {
   "server": 11163,
   "family": "Jojoba",
   "power": 54442819
  },
  {
   "server": 11164,
   "family": "Savage",
   "power": 1027418368
  },
  {
   "server": 11164,
   "family": "LEGIÃO",
   "power": 889883020
  },
  {
   "server": 11164,
   "family": "XOTA",
   "power": 718284218
  },
  {
   "server": 11164,
   "family": "Jojoba",
   "power": 152447137
  },
  {
   "server": 11164,
   "family": "ﾑズﾑｲ丂ひズﾉ",
   "power": 146446776
  },
  {
   "server": 11164,
   "family": "BRAZUKAS",
   "power": 131431040
  },
  {
   "server": 11164,
   "family": "TopperBR",
   "power": 107792252
  },
  {
   "server": 11164,
   "family": "Valhalla",
   "power": 103830265
  },
  {
   "server": 11164,
   "family": "FungiFaction",
   "power": 94950698
  },
  {
   "server": 11164,
   "family": "hazit",
   "power": 71590982
  },
  {
   "server": 11165,
   "family": "GGBR",
   "power": 1123685931
  },
  {
   "server": 11165,
   "family": "UP GAMING",
   "power": 395322028
  },
  {
   "server": 11165,
   "family": "CasalDaErVa",
   "power": 334533679
  },
  {
   "server": 11165,
   "family": "DragonBR",
   "power": 182926322
  },
  {
   "server": 11165,
   "family": "HEROS",
   "power": 158652973
  },
  {
   "server": 11165,
   "family": "𝒪𝓁𝒾𝓂𝓅𝑜",
   "power": 137358467
  },
  {
   "server": 11165,
   "family": "Aetherellis",
   "power": 123755730
  },
  {
   "server": 11165,
   "family": "osGOsArapido",
   "power": 118496522
  },
  {
   "server": 11165,
   "family": "LesDz",
   "power": 78652716
  },
  {
   "server": 11165,
   "family": "BRASILEIROS",
   "power": 64437243
  },
  {
   "server": 11166,
   "family": "𝒪𝓁𝒾𝓂𝓅𝑜",
   "power": 1115217925
  },
  {
   "server": 11166,
   "family": "TDH",
   "power": 366525068
  },
  {
   "server": 11166,
   "family": "ᴄᴏʀʀɪᴅᴀﾠᴍᴀʟᴜᴄᴀ",
   "power": 275932795
  },
  {
   "server": 11166,
   "family": "xGhostArmyX",
   "power": 216488084
  },
  {
   "server": 11166,
   "family": "GαмєOvєя",
   "power": 206148919
  },
  {
   "server": 11166,
   "family": "ASGARD",
   "power": 140989177
  },
  {
   "server": 11166,
   "family": "COE_BR",
   "power": 115162523
  },
  {
   "server": 11166,
   "family": "ninja5zero",
   "power": 112509089
  },
  {
   "server": 11166,
   "family": "leveling",
   "power": 81782552
  },
  {
   "server": 11166,
   "family": "TheDragons",
   "power": 56706581
  },
  {
   "server": 11167,
   "family": "𝙑𝙄𝙆𝙄𝙉𝙂𝙎",
   "power": 1109780423
  },
  {
   "server": 11167,
   "family": "Olimpy",
   "power": 576683087
  },
  {
   "server": 11167,
   "family": "TEMPLÁRIOS",
   "power": 198795558
  },
  {
   "server": 11167,
   "family": "ALC°Dourado",
   "power": 165020079
  },
  {
   "server": 11167,
   "family": "Akatsuki_2073",
   "power": 147210193
  },
  {
   "server": 11167,
   "family": "SoLaZeR",
   "power": 142302885
  },
  {
   "server": 11167,
   "family": "Ragnarok",
   "power": 139358483
  },
  {
   "server": 11167,
   "family": "Lúcifer",
   "power": 120630137
  },
  {
   "server": 11167,
   "family": "BrAsiL",
   "power": 113605862
  },
  {
   "server": 11167,
   "family": "billymen",
   "power": 93606275
  },
  {
   "server": 11168,
   "family": "Vøid",
   "power": 996071602
  },
  {
   "server": 11168,
   "family": "FairyTail",
   "power": 568529735
  },
  {
   "server": 11168,
   "family": "MushBoyZ",
   "power": 300999031
  },
  {
   "server": 11168,
   "family": "MUGIWARAS",
   "power": 260954182
  },
  {
   "server": 11168,
   "family": "BESERKERS",
   "power": 256453503
  },
  {
   "server": 11168,
   "family": "kuhaku",
   "power": 212746059
  },
  {
   "server": 11168,
   "family": "𝐈𝐍𝐒4𝐍𝐎𝐒",
   "power": 174212557
  },
  {
   "server": 11168,
   "family": "Toxic",
   "power": 168807897
  },
  {
   "server": 11168,
   "family": "RAGNAROK",
   "power": 156057647
  },
  {
   "server": 11168,
   "family": "Burned",
   "power": 149287031
  },
  {
   "server": 11169,
   "family": "ꄲꋪ꒐ꍌ꒐ꋊ",
   "power": 1077030744
  },
  {
   "server": 11169,
   "family": "ЯeSiStÊnCiA",
   "power": 819388550
  },
  {
   "server": 11169,
   "family": "Vortex",
   "power": 474697270
  },
  {
   "server": 11169,
   "family": "ARKUS",
   "power": 194125018
  },
  {
   "server": 11169,
   "family": "OutOfControl",
   "power": 174754743
  },
  {
   "server": 11169,
   "family": "PeakBlinders",
   "power": 162356041
  },
  {
   "server": 11169,
   "family": "FORWIN",
   "power": 125107718
  },
  {
   "server": 11169,
   "family": "BRAZUKAS",
   "power": 80075671
  },
  {
   "server": 11169,
   "family": "LAG",
   "power": 74889936
  },
  {
   "server": 11169,
   "family": "Mugiwaras",
   "power": 66797254
  },
  {
   "server": 11170,
   "family": "ValhallaOne",
   "power": 1080182488
  },
  {
   "server": 11170,
   "family": "ValhallaTwo",
   "power": 748513865
  },
  {
   "server": 11170,
   "family": "chapados",
   "power": 339591293
  },
  {
   "server": 11170,
   "family": "GOGUMELOBRASIL",
   "power": 184390244
  },
  {
   "server": 11170,
   "family": "BRASIL",
   "power": 168684575
  },
  {
   "server": 11170,
   "family": "Azeonn",
   "power": 162990364
  },
  {
   "server": 11170,
   "family": "AFK_CALVOS",
   "power": 161137556
  },
  {
   "server": 11170,
   "family": "Excalibur",
   "power": 154500939
  },
  {
   "server": 11170,
   "family": "ANJOS",
   "power": 153532083
  },
  {
   "server": 11170,
   "family": "Yakuza",
   "power": 149537459
  },
  {
   "server": 11171,
   "family": "Excalibur",
   "power": 1118412826
  },
  {
   "server": 11171,
   "family": "¹⁷¹Gang",
   "power": 875612006
  },
  {
   "server": 11171,
   "family": "TOPBRS",
   "power": 466768627
  },
  {
   "server": 11171,
   "family": "BRAZUKAS",
   "power": 248810306
  },
  {
   "server": 11171,
   "family": "RAGNAROK",
   "power": 205037488
  },
  {
   "server": 11171,
   "family": "Shadows",
   "power": 152189571
  },
  {
   "server": 11171,
   "family": "CruxDivinum",
   "power": 133899643
  },
  {
   "server": 11171,
   "family": "Akatsuki",
   "power": 118783026
  },
  {
   "server": 11171,
   "family": "Onlyfans",
   "power": 95936454
  },
  {
   "server": 11171,
   "family": "COGﾠIMORTAIS",
   "power": 94243035
  },
  {
   "server": 11172,
   "family": "NewOrdem",
   "power": 934880342
  },
  {
   "server": 11172,
   "family": "Hagekori",
   "power": 824989638
  },
  {
   "server": 11172,
   "family": "KingBr",
   "power": 209357296
  },
  {
   "server": 11172,
   "family": "Brasil",
   "power": 160289839
  },
  {
   "server": 11172,
   "family": "Supremo",
   "power": 158313868
  },
  {
   "server": 11172,
   "family": "ELITE",
   "power": 156004264
  },
  {
   "server": 11172,
   "family": "⁸⁸⁸VILONS",
   "power": 151479189
  },
  {
   "server": 11172,
   "family": "ATLÂNTICOS",
   "power": 145262147
  },
  {
   "server": 11172,
   "family": "TropaDoCogumel",
   "power": 133451504
  },
  {
   "server": 11172,
   "family": "Wolfs",
   "power": 129265920
  },
  {
   "server": 11173,
   "family": "Soul Society",
   "power": 1031021309
  },
  {
   "server": 11173,
   "family": "HellNBack",
   "power": 781430595
  },
  {
   "server": 11173,
   "family": "Thanatos",
   "power": 252554145
  },
  {
   "server": 11173,
   "family": "BRASIL",
   "power": 199680757
  },
  {
   "server": 11173,
   "family": "Ragnarok",
   "power": 167751278
  },
  {
   "server": 11173,
   "family": "5Kings",
   "power": 162249488
  },
  {
   "server": 11173,
   "family": "HuntersSa",
   "power": 135388799
  },
  {
   "server": 11173,
   "family": "YAKUZA",
   "power": 114585844
  },
  {
   "server": 11173,
   "family": "GALAXY",
   "power": 114477225
  },
  {
   "server": 11173,
   "family": "THE_WEAK",
   "power": 102903171
  },
  {
   "server": 11174,
   "family": "NovaOrdem",
   "power": 912121518
  },
  {
   "server": 11174,
   "family": "Diginin",
   "power": 856263148
  },
  {
   "server": 11174,
   "family": "TeamØP",
   "power": 561891838
  },
  {
   "server": 11174,
   "family": "TopBR",
   "power": 184446453
  },
  {
   "server": 11174,
   "family": "LenDárioS",
   "power": 167943441
  },
  {
   "server": 11174,
   "family": "ᵖⁱⁿᵏ𝔸𝕟𝕘𝕖𝕝",
   "power": 132449583
  },
  {
   "server": 11174,
   "family": "Xvideos",
   "power": 114818468
  },
  {
   "server": 11174,
   "family": "TNT",
   "power": 113349958
  },
  {
   "server": 11174,
   "family": "∞ƖƝƑƖƝƖƬ",
   "power": 109295379
  },
  {
   "server": 11174,
   "family": "SANTAIGREJA",
   "power": 77778069
  },
  {
   "server": 11175,
   "family": "HeadHunters",
   "power": 980494975
  },
  {
   "server": 11175,
   "family": "BRAZUKAS",
   "power": 610770072
  },
  {
   "server": 11175,
   "family": "LÓTUS",
   "power": 228440466
  },
  {
   "server": 11175,
   "family": "MushBullKiller",
   "power": 208574009
  },
  {
   "server": 11175,
   "family": "TOP1",
   "power": 136247824
  },
  {
   "server": 11175,
   "family": "¥HELLISHSTORM¥",
   "power": 130877161
  },
  {
   "server": 11175,
   "family": "Informáticos",
   "power": 123133639
  },
  {
   "server": 11175,
   "family": "IMPERIUM",
   "power": 111883206
  },
  {
   "server": 11175,
   "family": "ᶜʰᵃᵐᵖᶦᵍⁿᵒⁿ",
   "power": 107791496
  },
  {
   "server": 11175,
   "family": "preferenciais",
   "power": 96917012
  },
  {
   "server": 11176,
   "family": "DragonBallz",
   "power": 1033577484
  },
  {
   "server": 11176,
   "family": "》AKATSUKI《",
   "power": 872321062
  },
  {
   "server": 11176,
   "family": "BRAZUKAS",
   "power": 372479713
  },
  {
   "server": 11176,
   "family": "SpeedRun",
   "power": 121666287
  },
  {
   "server": 11176,
   "family": "MONTE_OLIMPO",
   "power": 101779507
  },
  {
   "server": 11176,
   "family": "Mafiosos",
   "power": 89725276
  },
  {
   "server": 11176,
   "family": "morfinho",
   "power": 87643673
  },
  {
   "server": 11176,
   "family": "VALHALLA",
   "power": 83934583
  },
  {
   "server": 11176,
   "family": "Quartel",
   "power": 69464847
  },
  {
   "server": 11176,
   "family": "HuntersBR",
   "power": 60129838
  },
  {
   "server": 11177,
   "family": "NewEra",
   "power": 822430686
  },
  {
   "server": 11177,
   "family": "UniãoGL",
   "power": 687985845
  },
  {
   "server": 11177,
   "family": "YAKUZA",
   "power": 527180970
  },
  {
   "server": 11177,
   "family": "Hunters",
   "power": 148818447
  },
  {
   "server": 11177,
   "family": "PaladinoS",
   "power": 137450551
  },
  {
   "server": 11177,
   "family": "RAGNAROK",
   "power": 136586653
  },
  {
   "server": 11177,
   "family": "ELITE",
   "power": 126027059
  },
  {
   "server": 11177,
   "family": "Legionários",
   "power": 112307211
  },
  {
   "server": 11177,
   "family": "LosGoti",
   "power": 90249459
  },
  {
   "server": 11177,
   "family": "TugaPower",
   "power": 85100885
  },
  {
   "server": 11178,
   "family": "NightShadow",
   "power": 982320343
  },
  {
   "server": 11178,
   "family": "Origami",
   "power": 442319679
  },
  {
   "server": 11178,
   "family": "ZETA",
   "power": 346234345
  },
  {
   "server": 11178,
   "family": "ᴏғғ ɢᴀᴍɪɴɢ",
   "power": 169021790
  },
  {
   "server": 11178,
   "family": "KINDRED",
   "power": 155655645
  },
  {
   "server": 11178,
   "family": "mugwaras",
   "power": 122878817
  },
  {
   "server": 11178,
   "family": "TDC",
   "power": 120476360
  },
  {
   "server": 11178,
   "family": "BATALHAS",
   "power": 117612612
  },
  {
   "server": 11178,
   "family": "BR",
   "power": 114757930
  },
  {
   "server": 11178,
   "family": "konoha",
   "power": 112300015
  },
  {
   "server": 11179,
   "family": "THE_GODS",
   "power": 905436571
  },
  {
   "server": 11179,
   "family": "RAGNAROK",
   "power": 872066776
  },
  {
   "server": 11179,
   "family": "Imortals",
   "power": 256648917
  },
  {
   "server": 11179,
   "family": "Brasileiros",
   "power": 126749930
  },
  {
   "server": 11179,
   "family": "TITANS",
   "power": 114648140
  },
  {
   "server": 11179,
   "family": "MALDISÃO",
   "power": 105962198
  },
  {
   "server": 11179,
   "family": "TropaDaFolha",
   "power": 101536411
  },
  {
   "server": 11179,
   "family": "RENEGADOS",
   "power": 99508331
  },
  {
   "server": 11179,
   "family": "●BLITZ●",
   "power": 95029304
  },
  {
   "server": 11179,
   "family": "ØMĘGÅ",
   "power": 93962522
  },
  {
   "server": 11180,
   "family": "AKATSUKI",
   "power": 777819805
  },
  {
   "server": 11180,
   "family": "MushroomKiller",
   "power": 693054453
  },
  {
   "server": 11180,
   "family": "MIANTRO",
   "power": 269139524
  },
  {
   "server": 11180,
   "family": "TaLiBanS",
   "power": 138133031
  },
  {
   "server": 11180,
   "family": "Matarazzo",
   "power": 137499425
  },
  {
   "server": 11180,
   "family": "SINNERS",
   "power": 121574844
  },
  {
   "server": 11180,
   "family": "VANGUARD",
   "power": 120146595
  },
  {
   "server": 11180,
   "family": "Brasileiros",
   "power": 103263480
  },
  {
   "server": 11180,
   "family": "RED_BULL",
   "power": 101222529
  },
  {
   "server": 11180,
   "family": "OverLord",
   "power": 79517261
  },
  {
   "server": 11181,
   "family": "WANTED",
   "power": 791263931
  },
  {
   "server": 11181,
   "family": "ALIANCE1",
   "power": 570514998
  },
  {
   "server": 11181,
   "family": "Brasil",
   "power": 299553535
  },
  {
   "server": 11181,
   "family": "AKATSUKI",
   "power": 136533347
  },
  {
   "server": 11181,
   "family": "ALIANCE2",
   "power": 136003133
  },
  {
   "server": 11181,
   "family": "hospício",
   "power": 130029766
  },
  {
   "server": 11181,
   "family": "Caos",
   "power": 104451058
  },
  {
   "server": 11181,
   "family": "Shadow",
   "power": 97396277
  },
  {
   "server": 11181,
   "family": "YoT",
   "power": 86012255
  },
  {
   "server": 11181,
   "family": "BRAZINO",
   "power": 84957786
  },
  {
   "server": 11182,
   "family": "BRAZUKAS",
   "power": 825984291
  },
  {
   "server": 11182,
   "family": "FAMÍLIA",
   "power": 630269578
  },
  {
   "server": 11182,
   "family": "KONOHA",
   "power": 568436663
  },
  {
   "server": 11182,
   "family": "ᴏғғ ɢᴀᴍɪɴɢ",
   "power": 122620844
  },
  {
   "server": 11182,
   "family": "NinjaVip",
   "power": 99920359
  },
  {
   "server": 11182,
   "family": "Phoenix",
   "power": 96129849
  },
  {
   "server": 11182,
   "family": "MW",
   "power": 91100405
  },
  {
   "server": 11182,
   "family": "DrackBurk",
   "power": 87471115
  },
  {
   "server": 11182,
   "family": "Pain",
   "power": 82023521
  },
  {
   "server": 11182,
   "family": "ShadowReapers",
   "power": 73736465
  },
  {
   "server": 11183,
   "family": "WarLords",
   "power": 920561387
  },
  {
   "server": 11183,
   "family": "Desconhecidos",
   "power": 639857845
  },
  {
   "server": 11183,
   "family": "AKATSUKI",
   "power": 396961475
  },
  {
   "server": 11183,
   "family": "T7KㅤACADENY",
   "power": 90582623
  },
  {
   "server": 11183,
   "family": "《SHIELD》",
   "power": 85857976
  },
  {
   "server": 11183,
   "family": "MAFIA",
   "power": 85455554
  },
  {
   "server": 11183,
   "family": "HuntersSA",
   "power": 74478938
  },
  {
   "server": 11183,
   "family": "Rodrigues",
   "power": 70202524
  },
  {
   "server": 11183,
   "family": "IMPÉRIO",
   "power": 63494019
  },
  {
   "server": 11183,
   "family": "FALCOES",
   "power": 60455912
  },
  {
   "server": 11184,
   "family": "WarLords",
   "power": 876294482
  },
  {
   "server": 11184,
   "family": "ĀRCANJOṢ",
   "power": 376072558
  },
  {
   "server": 11184,
   "family": "WarLords²",
   "power": 246042079
  },
  {
   "server": 11184,
   "family": "Danger",
   "power": 109222687
  },
  {
   "server": 11184,
   "family": "alucinados",
   "power": 102042818
  },
  {
   "server": 11184,
   "family": "RED_BULL",
   "power": 97683177
  },
  {
   "server": 11184,
   "family": "JR",
   "power": 85585233
  },
  {
   "server": 11184,
   "family": "THELEGION",
   "power": 79962079
  },
  {
   "server": 11184,
   "family": "BRASIL",
   "power": 79059786
  },
  {
   "server": 11184,
   "family": "BlackMushroom",
   "power": 71440932
  },
  {
   "server": 11185,
   "family": "NewEra",
   "power": 838860877
  },
  {
   "server": 11185,
   "family": "REVOLUTION",
   "power": 714848519
  },
  {
   "server": 11185,
   "family": "Asgard",
   "power": 311637967
  },
  {
   "server": 11185,
   "family": "Dragons",
   "power": 74562875
  },
  {
   "server": 11185,
   "family": "BlackSheep",
   "power": 65249127
  },
  {
   "server": 11185,
   "family": "UltmateClan",
   "power": 63309988
  },
  {
   "server": 11185,
   "family": "OsCria",
   "power": 62081071
  },
  {
   "server": 11185,
   "family": "HellMushroom",
   "power": 60776469
  },
  {
   "server": 11185,
   "family": "Hasgard",
   "power": 51567759
  },
  {
   "server": 11185,
   "family": "Imortais",
   "power": 51154125
  },
  {
   "server": 11186,
   "family": "SoloLeveling",
   "power": 818428731
  },
  {
   "server": 11186,
   "family": "Resistência_Br",
   "power": 285001956
  },
  {
   "server": 11186,
   "family": "Shadow",
   "power": 150776696
  },
  {
   "server": 11186,
   "family": "MushBoomᴹᴮ",
   "power": 100632911
  },
  {
   "server": 11186,
   "family": "AKATSUKI_BR",
   "power": 100459480
  },
  {
   "server": 11186,
   "family": "SOLARIE",
   "power": 67059382
  },
  {
   "server": 11186,
   "family": "BerserkersBR",
   "power": 63909229
  },
  {
   "server": 11186,
   "family": "Ordem",
   "power": 63522212
  },
  {
   "server": 11186,
   "family": "BRASIL",
   "power": 60439811
  },
  {
   "server": 11186,
   "family": "InsiderS",
   "power": 58594101
  },
  {
   "server": 11187,
   "family": "OnePiece",
   "power": 703110283
  },
  {
   "server": 11187,
   "family": "CELESTIAL",
   "power": 648388977
  },
  {
   "server": 11187,
   "family": "RAGNAROK",
   "power": 286365081
  },
  {
   "server": 11187,
   "family": "Super_Nova",
   "power": 67004723
  },
  {
   "server": 11187,
   "family": "OIO",
   "power": 60398875
  },
  {
   "server": 11187,
   "family": "Nazarek",
   "power": 60329858
  },
  {
   "server": 11187,
   "family": "New_World",
   "power": 57602338
  },
  {
   "server": 11187,
   "family": "Toxic",
   "power": 47530206
  },
  {
   "server": 11187,
   "family": "FEB",
   "power": 47528139
  },
  {
   "server": 11187,
   "family": "NewAge",
   "power": 45103460
  },
  {
   "server": 11188,
   "family": "𝔚𝔞𝔯𝔯𝔦𝔬𝔯",
   "power": 691919636
  },
  {
   "server": 11188,
   "family": "OLIMPO",
   "power": 581636566
  },
  {
   "server": 11188,
   "family": "OVERLORD",
   "power": 132275436
  },
  {
   "server": 11188,
   "family": "Legion",
   "power": 56110143
  },
  {
   "server": 11188,
   "family": "Ragnarok",
   "power": 52388548
  },
  {
   "server": 11188,
   "family": "Fênix",
   "power": 51218162
  },
  {
   "server": 11188,
   "family": "SKYGODS",
   "power": 48377415
  },
  {
   "server": 11188,
   "family": "DESTINY",
   "power": 41069066
  },
  {
   "server": 11188,
   "family": "GUNS_N_ROSES",
   "power": 39299102
  },
  {
   "server": 11188,
   "family": "Venom",
   "power": 36021192
  },
  {
   "server": 11189,
   "family": "NightShadow",
   "power": 616621313
  },
  {
   "server": 11189,
   "family": "Akatsuki",
   "power": 592283642
  },
  {
   "server": 11189,
   "family": "UniãoBR",
   "power": 245298052
  },
  {
   "server": 11189,
   "family": "MaguMelos",
   "power": 0
  },
  {
   "server": 11189,
   "family": "BRASILSP",
   "power": 0
  },
  {
   "server": 11189,
   "family": "RetireesOFF",
   "power": 0
  },
  {
   "server": 11189,
   "family": "OsCalabreSos",
   "power": 0
  },
  {
   "server": 11189,
   "family": "TD3Talibã🥉",
   "power": 0
  },
  {
   "server": 11189,
   "family": "Suicidas",
   "power": 0
  },
  {
   "server": 11189,
   "family": "CHAPÉUSDEPALHA",
   "power": 0
  },
  {
   "server": 11190,
   "family": "ＢＡＮＫＡｉ",
   "power": 662178611
  },
  {
   "server": 11190,
   "family": "DragonBorn",
   "power": 143493999
  },
  {
   "server": 11190,
   "family": "OsCalabreSos",
   "power": 134299248
  },
  {
   "server": 11190,
   "family": "𝑯𝑶𝑵𝑶𝑹𝑺",
   "power": 0
  },
  {
   "server": 11190,
   "family": "ALDEIA²",
   "power": 0
  },
  {
   "server": 11190,
   "family": "GrimReaprs",
   "power": 0
  },
  {
   "server": 11190,
   "family": "supremacia",
   "power": 0
  },
  {
   "server": 11190,
   "family": "KOF",
   "power": 0
  },
  {
   "server": 11190,
   "family": "MafiaMushroom",
   "power": 0
  },
  {
   "server": 11190,
   "family": "Jorge_Lag",
   "power": 0
  },
  {
   "server": 11191,
   "family": "Tιgᥱr᥉",
   "power": 191630685
  },
  {
   "server": 11191,
   "family": "Viking’S",
   "power": 126602457
  },
  {
   "server": 11191,
   "family": "KING",
   "power": 103355293
  },
  {
   "server": 11191,
   "family": "XingLing",
   "power": 0
  },
  {
   "server": 11191,
   "family": "ONE_PIECE",
   "power": 0
  },
  {
   "server": 11191,
   "family": "7°Pėčådøs",
   "power": 0
  },
  {
   "server": 11191,
   "family": "Ragnarok",
   "power": 0
  },
  {
   "server": 11191,
   "family": "FamíliaMLG",
   "power": 0
  },
  {
   "server": 11191,
   "family": "Legendary",
   "power": 0
  },
  {
   "server": 11191,
   "family": "New_World",
   "power": 0
  },
  {
   "server": 11192,
   "family": "VALHALA",
   "power": 588488709
  },
  {
   "server": 11192,
   "family": "RAGNAROK",
   "power": 290895587
  },
  {
   "server": 11192,
   "family": "ØLIMPO",
   "power": 121602125
  },
  {
   "server": 11192,
   "family": "BRLogHorizon",
   "power": 0
  },
  {
   "server": 11192,
   "family": "shadowgarden",
   "power": 0
  },
  {
   "server": 11192,
   "family": "error3333666",
   "power": 0
  },
  {
   "server": 11192,
   "family": "pauzudos",
   "power": 0
  },
  {
   "server": 11192,
   "family": "FENIX",
   "power": 0
  },
  {
   "server": 11192,
   "family": "fenix",
   "power": 0
  },
  {
   "server": 11192,
   "family": "Jeguenaudo",
   "power": 0
  },
  {
   "server": 11193,
   "family": "PARADOX",
   "power": 450081827
  },
  {
   "server": 11193,
   "family": "SeekAndDestroy",
   "power": 225831060
  },
  {
   "server": 11193,
   "family": "BlackSheep",
   "power": 199881067
  },
  {
   "server": 11193,
   "family": "TG",
   "power": 0
  },
  {
   "server": 11193,
   "family": "konoha",
   "power": 0
  },
  {
   "server": 11193,
   "family": "Cristãos",
   "power": 0
  },
  {
   "server": 11193,
   "family": "capybara",
   "power": 0
  },
  {
   "server": 11193,
   "family": "AlcatraZ",
   "power": 0
  },
  {
   "server": 11193,
   "family": "Invictos",
   "power": 0
  },
  {
   "server": 11193,
   "family": "Dungeons",
   "power": 0
  },
  {
   "server": 11194,
   "family": "HitKill",
   "power": 578428403
  },
  {
   "server": 11194,
   "family": "world",
   "power": 136087628
  },
  {
   "server": 11194,
   "family": "xmztx",
   "power": 88471785
  },
  {
   "server": 11194,
   "family": "blackhuars",
   "power": 0
  },
  {
   "server": 11194,
   "family": "BRASIL",
   "power": 0
  },
  {
   "server": 11194,
   "family": "Sobrenatural",
   "power": 0
  },
  {
   "server": 11194,
   "family": "WholeTeam",
   "power": 0
  },
  {
   "server": 11194,
   "family": "BrazukaSLZ",
   "power": 0
  },
  {
   "server": 11194,
   "family": "TURKISHPOWER",
   "power": 0
  },
  {
   "server": 11194,
   "family": "AlvegzPower",
   "power": 0
  },
  {
   "server": 11195,
   "family": "AHJIN_SLㅤ195",
   "power": 487480850
  },
  {
   "server": 11195,
   "family": "®Brs®B4stardoS",
   "power": 162108287
  },
  {
   "server": 11195,
   "family": "SecretGarden",
   "power": 116492586
  },
  {
   "server": 11195,
   "family": "sgt",
   "power": 0
  },
  {
   "server": 11195,
   "family": "Olimpia",
   "power": 0
  },
  {
   "server": 11195,
   "family": "Carnificina",
   "power": 0
  },
  {
   "server": 11195,
   "family": "OTAKUSﾠBR",
   "power": 0
  },
  {
   "server": 11195,
   "family": "king×legacy",
   "power": 0
  },
  {
   "server": 11195,
   "family": "CoguTempest",
   "power": 0
  },
  {
   "server": 11195,
   "family": "ESCARLATY",
   "power": 0
  },
  {
   "server": 11196,
   "family": "DarKLegioN",
   "power": 431074151
  },
  {
   "server": 11196,
   "family": "WORLD",
   "power": 83205756
  },
  {
   "server": 11196,
   "family": "ᴄᴀʙᴀʀᴇ́",
   "power": 83183877
  },
  {
   "server": 11196,
   "family": "Dragon",
   "power": 0
  },
  {
   "server": 11196,
   "family": "Reis_BR",
   "power": 0
  },
  {
   "server": 11196,
   "family": "ABADDONSHEOL",
   "power": 0
  },
  {
   "server": 11196,
   "family": "DarkSide",
   "power": 0
  },
  {
   "server": 11196,
   "family": "caçadores",
   "power": 0
  },
  {
   "server": 11196,
   "family": "RedLan",
   "power": 0
  },
  {
   "server": 11196,
   "family": "BrAkiras",
   "power": 0
  },
  {
   "server": 11197,
   "family": "𝘋𝘪𝘢𝘣𝘭𝘰",
   "power": 160483267
  },
  {
   "server": 11197,
   "family": "OnlySmoke",
   "power": 136237972
  },
  {
   "server": 11197,
   "family": "VirtusPro",
   "power": 113241675
  },
  {
   "server": 11197,
   "family": "OVERLORD",
   "power": 0
  },
  {
   "server": 11197,
   "family": "TrupFantasma",
   "power": 0
  },
  {
   "server": 11197,
   "family": "1nsec",
   "power": 0
  },
  {
   "server": 11197,
   "family": "Derskay_wl",
   "power": 0
  },
  {
   "server": 11197,
   "family": "TOXIC",
   "power": 0
  },
  {
   "server": 11197,
   "family": "CALANGUINHOS",
   "power": 0
  },
  {
   "server": 11197,
   "family": "GreamRipers",
   "power": 0
  },
  {
   "server": 11198,
   "family": "ELEMENTARES",
   "power": 150604878
  },
  {
   "server": 11198,
   "family": "DragonBall",
   "power": 103454575
  },
  {
   "server": 11198,
   "family": "BRAZIL",
   "power": 95778222
  },
  {
   "server": 11198,
   "family": "YSL",
   "power": 0
  },
  {
   "server": 11198,
   "family": "paroooo",
   "power": 0
  },
  {
   "server": 11198,
   "family": "MegarushBr",
   "power": 0
  },
  {
   "server": 11198,
   "family": "DINASTY",
   "power": 0
  },
  {
   "server": 11198,
   "family": "NTP",
   "power": 0
  },
  {
   "server": 11198,
   "family": "XD",
   "power": 0
  },
  {
   "server": 11198,
   "family": "hellbringers",
   "power": 0
  },
  {
   "server": 11199,
   "family": "Tr0LLBr",
   "power": 208860350
  },
  {
   "server": 11199,
   "family": "Serasa",
   "power": 33530610
  },
  {
   "server": 11199,
   "family": "_FERAS_",
   "power": 0
  },
  {
   "server": 11199,
   "family": "RetaliarDivino",
   "power": 0
  },
  {
   "server": 11199,
   "family": "_spc_",
   "power": 0
  },
  {
   "server": 11199,
   "family": "Lendarios",
   "power": 0
  },
  {
   "server": 11199,
   "family": "Blackmonkey",
   "power": 0
  },
  {
   "server": 11199,
   "family": "noob",
   "power": 0
  },
  {
   "server": 11199,
   "family": "FukumaMizushi",
   "power": 0
  },
  {
   "server": 11199,
   "family": "DeathTargeT",
   "power": 0
  },
  {
   "server": 11200,
   "family": "GGNOXTE⁹⁹⁹",
   "power": 73748672
  },
  {
   "server": 11200,
   "family": "RedTube",
   "power": 6545771
  },
  {
   "server": 11200,
   "family": "Ouro",
   "power": 611840
  },
  {
   "server": 11200,
   "family": "Legends",
   "power": 0
  },
  {
   "server": 11200,
   "family": "GoldenGlory",
   "power": 0
  },
  {
   "server": 11200,
   "family": "Alvorada",
   "power": 0
  },
  {
   "server": 11200,
   "family": "MiauMiau³",
   "power": 0
  },
  {
   "server": 11200,
   "family": "Fênix",
   "power": 0
  },
  {
   "server": 11200,
   "family": "KONOHA",
   "power": 0
  },
  {
   "server": 11200,
   "family": "Darkness",
   "power": 0
  },
  {
   "server": 11201,
   "family": "Olimpo",
   "power": 305633914
  },
  {
   "server": 11201,
   "family": "Akatsuki",
   "power": 259101978
  },
  {
   "server": 11201,
   "family": "WANTED",
   "power": 79309221
  },
  {
   "server": 11201,
   "family": "TROPA_244",
   "power": 0
  },
  {
   "server": 11201,
   "family": "MeChupe",
   "power": 0
  },
  {
   "server": 11201,
   "family": "Blackmoon",
   "power": 0
  },
  {
   "server": 11201,
   "family": "FREE_PLAYERS",
   "power": 0
  },
  {
   "server": 11201,
   "family": "Alzerians",
   "power": 0
  },
  {
   "server": 11201,
   "family": "Crazy3House",
   "power": 0
  },
  {
   "server": 11201,
   "family": "gojo",
   "power": 0
  },
  {
   "server": 30001,
   "family": "DarkSouls",
   "power": 2189756191
  },
  {
   "server": 30001,
   "family": "shrooms",
   "power": 1772376184
  },
  {
   "server": 30001,
   "family": "WorthyShrooms",
   "power": 1643605637
  },
  {
   "server": 30001,
   "family": "Paragon",
   "power": 1541116797
  },
  {
   "server": 30001,
   "family": "Solar",
   "power": 1215360527
  },
  {
   "server": 30001,
   "family": "WorthyShrooms2",
   "power": 749464724
  },
  {
   "server": 30001,
   "family": "FightersClub",
   "power": 624163200
  },
  {
   "server": 30001,
   "family": "GrimReapers",
   "power": 504858346
  },
  {
   "server": 30001,
   "family": "PinkMushroom",
   "power": 333402656
  },
  {
   "server": 30001,
   "family": "Lumina",
   "power": 309817553
  },
  {
   "server": 30002,
   "family": "Empire",
   "power": 2153903047
  },
  {
   "server": 30002,
   "family": "FungusOrder",
   "power": 1919860879
  },
  {
   "server": 30002,
   "family": "TheHearth",
   "power": 1383513103
  },
  {
   "server": 30002,
   "family": "Toad",
   "power": 701119564
  },
  {
   "server": 30002,
   "family": "Goomba",
   "power": 624307161
  },
  {
   "server": 30002,
   "family": "Funguys",
   "power": 487700060
  },
  {
   "server": 30002,
   "family": "Backgroundgame",
   "power": 293957636
  },
  {
   "server": 30002,
   "family": "MagicMashroom",
   "power": 271181232
  },
  {
   "server": 30002,
   "family": "Wolfpack",
   "power": 254082266
  },
  {
   "server": 30002,
   "family": "PowerRangers",
   "power": 190031800
  },
  {
   "server": 30003,
   "family": "METALLICA",
   "power": 2118097374
  },
  {
   "server": 30003,
   "family": "HighOnMushroom",
   "power": 1405641038
  },
  {
   "server": 30003,
   "family": "LowOnMushroom",
   "power": 848719046
  },
  {
   "server": 30003,
   "family": "ATHENA",
   "power": 428087845
  },
  {
   "server": 30003,
   "family": "MushroomHouse",
   "power": 369373468
  },
  {
   "server": 30003,
   "family": "FreshShroomies",
   "power": 351273571
  },
  {
   "server": 30003,
   "family": "Demons",
   "power": 326842285
  },
  {
   "server": 30003,
   "family": "Legacies",
   "power": 298886745
  },
  {
   "server": 30003,
   "family": "FrogPals",
   "power": 261322961
  },
  {
   "server": 30003,
   "family": "Bruh",
   "power": 249287825
  },
  {
   "server": 30004,
   "family": "MCID",
   "power": 2175255751
  },
  {
   "server": 30004,
   "family": "Pudding",
   "power": 1558566040
  },
  {
   "server": 30004,
   "family": "Avengers",
   "power": 682065556
  },
  {
   "server": 30004,
   "family": "MCIDTR",
   "power": 591663468
  },
  {
   "server": 30004,
   "family": "MushroomHeaven",
   "power": 308200961
  },
  {
   "server": 30004,
   "family": "OnDaShrooms",
   "power": 280411808
  },
  {
   "server": 30004,
   "family": "simpsVillage",
   "power": 254338658
  },
  {
   "server": 30004,
   "family": "Casual",
   "power": 235593585
  },
  {
   "server": 30004,
   "family": "Shroomfies",
   "power": 221168968
  },
  {
   "server": 30004,
   "family": "UzumakiClan",
   "power": 187653933
  },
  {
   "server": 30005,
   "family": "Tyranny",
   "power": 1884607844
  },
  {
   "server": 30005,
   "family": "Supreme",
   "power": 1772908963
  },
  {
   "server": 30005,
   "family": "Instinct",
   "power": 524351452
  },
  {
   "server": 30005,
   "family": "Shrooms",
   "power": 454778680
  },
  {
   "server": 30005,
   "family": "EDL",
   "power": 343611285
  },
  {
   "server": 30005,
   "family": "TheStrawhats",
   "power": 299169550
  },
  {
   "server": 30005,
   "family": "Elite",
   "power": 250387988
  },
  {
   "server": 30005,
   "family": "Moonlight",
   "power": 225719342
  },
  {
   "server": 30005,
   "family": "PigArmyOnTop",
   "power": 193661059
  },
  {
   "server": 30005,
   "family": "DayOne",
   "power": 187778019
  },
  {
   "server": 30006,
   "family": "Meowshroom",
   "power": 1768275006
  },
  {
   "server": 30006,
   "family": "Orphans",
   "power": 600945024
  },
  {
   "server": 30006,
   "family": "AbyssWalkers",
   "power": 323951433
  },
  {
   "server": 30006,
   "family": "Dragon",
   "power": 284027948
  },
  {
   "server": 30006,
   "family": "Mushrevolution",
   "power": 241845026
  },
  {
   "server": 30006,
   "family": "DragonSlayers",
   "power": 233958151
  },
  {
   "server": 30006,
   "family": "GodBirth",
   "power": 210757179
  },
  {
   "server": 30006,
   "family": "Exile",
   "power": 194320067
  },
  {
   "server": 30006,
   "family": "Aura",
   "power": 88805510
  },
  {
   "server": 30006,
   "family": "TheRealWorld",
   "power": 76032751
  },
  {
   "server": 30007,
   "family": "Elite",
   "power": 1552477672
  },
  {
   "server": 30007,
   "family": "Funguys",
   "power": 539737794
  },
  {
   "server": 30007,
   "family": "Anthem",
   "power": 364680558
  },
  {
   "server": 30007,
   "family": "Waffles",
   "power": 303942770
  },
  {
   "server": 30007,
   "family": "WeOnTop",
   "power": 253964819
  },
  {
   "server": 30007,
   "family": "Shadowhunters",
   "power": 228357490
  },
  {
   "server": 30007,
   "family": "BestFamily",
   "power": 119620399
  },
  {
   "server": 30007,
   "family": "Iehfhurjc",
   "power": 94722797
  },
  {
   "server": 30007,
   "family": "Shroomcrew",
   "power": 70865382
  },
  {
   "server": 30007,
   "family": "TheShroomies",
   "power": 50929000
  },
  {
   "server": 30008,
   "family": "KING",
   "power": 1889635356
  },
  {
   "server": 30008,
   "family": "TheBlackBulls",
   "power": 907712556
  },
  {
   "server": 30008,
   "family": "Candy",
   "power": 589901570
  },
  {
   "server": 30008,
   "family": "MonkeyLand",
   "power": 365511697
  },
  {
   "server": 30008,
   "family": "KoolKidsKlan",
   "power": 195733856
  },
  {
   "server": 30008,
   "family": "Warriors",
   "power": 176437215
  },
  {
   "server": 30008,
   "family": "Theshroomers",
   "power": 97405126
  },
  {
   "server": 30008,
   "family": "Phoenix",
   "power": 86799655
  },
  {
   "server": 30008,
   "family": "dragonslayers",
   "power": 70239776
  },
  {
   "server": 30008,
   "family": "Patesozolives",
   "power": 68489813
  },
  {
   "server": 30009,
   "family": "OREOWARRIORS",
   "power": 249826979
  },
  {
   "server": 30009,
   "family": "DaBomb",
   "power": 146452475
  },
  {
   "server": 30009,
   "family": "TheMushMen",
   "power": 142877687
  },
  {
   "server": 30009,
   "family": "Gamergirls",
   "power": 53500023
  },
  {
   "server": 30009,
   "family": "NLmushroom",
   "power": 31814791
  },
  {
   "server": 30009,
   "family": "chunli",
   "power": 21165321
  },
  {
   "server": 30009,
   "family": "LMKA",
   "power": 21126597
  },
  {
   "server": 30009,
   "family": "Soppfolket",
   "power": 15093553
  },
  {
   "server": 30009,
   "family": "DMS",
   "power": 14515143
  },
  {
   "server": 30009,
   "family": "SweElite",
   "power": 14004345
  },
  {
   "server": 30010,
   "family": "𝐂𝐑𝐎𝐖𝐍",
   "power": 1925909998
  },
  {
   "server": 30010,
   "family": "Crownless",
   "power": 846439334
  },
  {
   "server": 30010,
   "family": "2ndEverFam",
   "power": 517468712
  },
  {
   "server": 30010,
   "family": "HighOnShrooms",
   "power": 233759990
  },
  {
   "server": 30010,
   "family": "AstaResistance",
   "power": 230234628
  },
  {
   "server": 30010,
   "family": "SkinWalkers",
   "power": 181890441
  },
  {
   "server": 30010,
   "family": "TheStrawHats",
   "power": 172941083
  },
  {
   "server": 30010,
   "family": "cheesyahmed",
   "power": 151388642
  },
  {
   "server": 30010,
   "family": "Helldivers",
   "power": 89146817
  },
  {
   "server": 30010,
   "family": "Nederlanders",
   "power": 78739479
  },
  {
   "server": 30011,
   "family": "SHROOMSUK",
   "power": 1761650279
  },
  {
   "server": 30011,
   "family": "BlueDragon",
   "power": 436343733
  },
  {
   "server": 30011,
   "family": "Overlord",
   "power": 316567943
  },
  {
   "server": 30011,
   "family": "Deadend",
   "power": 276312525
  },
  {
   "server": 30011,
   "family": "shroomers",
   "power": 168116332
  },
  {
   "server": 30011,
   "family": "MUSHUK",
   "power": 157154390
  },
  {
   "server": 30011,
   "family": "brexitbuddies",
   "power": 120574700
  },
  {
   "server": 30011,
   "family": "Chaos",
   "power": 84392824
  },
  {
   "server": 30011,
   "family": "Shrooms",
   "power": 51063156
  },
  {
   "server": 30011,
   "family": "Winters",
   "power": 44830651
  },
  {
   "server": 30012,
   "family": "Warriors",
   "power": 1841597276
  },
  {
   "server": 30012,
   "family": "TripleTrouble",
   "power": 331300407
  },
  {
   "server": 30012,
   "family": "ORPHANS",
   "power": 256609087
  },
  {
   "server": 30012,
   "family": "Bomboclat",
   "power": 231414766
  },
  {
   "server": 30012,
   "family": "Deathcaps",
   "power": 200166812
  },
  {
   "server": 30012,
   "family": "KitsuneWarrior",
   "power": 176697379
  },
  {
   "server": 30012,
   "family": "ToadMogs",
   "power": 171558276
  },
  {
   "server": 30012,
   "family": "Shroomies",
   "power": 137346535
  },
  {
   "server": 30012,
   "family": "SOLDIERS",
   "power": 87605879
  },
  {
   "server": 30012,
   "family": "MagicMush",
   "power": 34261412
  },
  {
   "server": 30013,
   "family": "Mushrooms",
   "power": 1603943213
  },
  {
   "server": 30013,
   "family": "ShroomSquad",
   "power": 348654509
  },
  {
   "server": 30013,
   "family": "Fungalminge",
   "power": 259708543
  },
  {
   "server": 30013,
   "family": "Gooners",
   "power": 211938200
  },
  {
   "server": 30013,
   "family": "N3THERWORLD",
   "power": 167054734
  },
  {
   "server": 30013,
   "family": "ToadGank",
   "power": 140094121
  },
  {
   "server": 30013,
   "family": "SHROOMITE",
   "power": 94412048
  },
  {
   "server": 30013,
   "family": "Elite",
   "power": 88037233
  },
  {
   "server": 30013,
   "family": "Necromipodders",
   "power": 45800238
  },
  {
   "server": 30013,
   "family": "FannyCradock",
   "power": 36679374
  },
  {
   "server": 30014,
   "family": "Dune",
   "power": 1622051843
  },
  {
   "server": 30014,
   "family": "FungiAcademy",
   "power": 455264364
  },
  {
   "server": 30014,
   "family": "braindead",
   "power": 352868791
  },
  {
   "server": 30014,
   "family": "scribs",
   "power": 219652695
  },
  {
   "server": 30014,
   "family": "MushroomKings",
   "power": 177037821
  },
  {
   "server": 30014,
   "family": "9886clan",
   "power": 83270221
  },
  {
   "server": 30014,
   "family": "Sanctuary",
   "power": 57621341
  },
  {
   "server": 30014,
   "family": "DeVescy",
   "power": 37016520
  },
  {
   "server": 30014,
   "family": "UptheBoys",
   "power": 31181223
  },
  {
   "server": 30014,
   "family": "Yapperschina",
   "power": 28734114
  },
  {
   "server": 30015,
   "family": "Gods",
   "power": 1618599011
  },
  {
   "server": 30015,
   "family": "Megs",
   "power": 640251354
  },
  {
   "server": 30015,
   "family": "STRAWHATS",
   "power": 559381225
  },
  {
   "server": 30015,
   "family": "X",
   "power": 299638105
  },
  {
   "server": 30015,
   "family": "Auschw1tzgank",
   "power": 216851428
  },
  {
   "server": 30015,
   "family": "Spectrum",
   "power": 161283790
  },
  {
   "server": 30015,
   "family": "bob",
   "power": 74445980
  },
  {
   "server": 30015,
   "family": "Bazingaaa",
   "power": 67735965
  },
  {
   "server": 30015,
   "family": "Silvercops",
   "power": 62770998
  },
  {
   "server": 30015,
   "family": "Goodvibes",
   "power": 62357244
  },
  {
   "server": 30016,
   "family": "Conquerors",
   "power": 1998197708
  },
  {
   "server": 30016,
   "family": "AllTheLosers",
   "power": 1037885662
  },
  {
   "server": 30016,
   "family": "Tesla",
   "power": 395668215
  },
  {
   "server": 30016,
   "family": "Champignons",
   "power": 345282139
  },
  {
   "server": 30016,
   "family": "npc_hub",
   "power": 215789768
  },
  {
   "server": 30016,
   "family": "noodles",
   "power": 177574271
  },
  {
   "server": 30016,
   "family": "FamilyGuys",
   "power": 175315975
  },
  {
   "server": 30016,
   "family": "KingdomOfGods",
   "power": 141671011
  },
  {
   "server": 30016,
   "family": "WhiteDragons",
   "power": 90911804
  },
  {
   "server": 30016,
   "family": "CREAMPIE4LIFE",
   "power": 30904896
  },
  {
   "server": 30017,
   "family": "Blue",
   "power": 1507601734
  },
  {
   "server": 30017,
   "family": "Dark_Angels",
   "power": 1292101424
  },
  {
   "server": 30017,
   "family": "Ace",
   "power": 516616235
  },
  {
   "server": 30017,
   "family": "TrueFriends",
   "power": 351789657
  },
  {
   "server": 30017,
   "family": "SmeggyMenz",
   "power": 282278330
  },
  {
   "server": 30017,
   "family": "Wah",
   "power": 231595404
  },
  {
   "server": 30017,
   "family": "foodshop",
   "power": 192307258
  },
  {
   "server": 30017,
   "family": "Wolves",
   "power": 147815455
  },
  {
   "server": 30017,
   "family": "Luan",
   "power": 144719563
  },
  {
   "server": 30017,
   "family": "PolskaHusaria",
   "power": 71898076
  },
  {
   "server": 30018,
   "family": "Oven",
   "power": 1890562611
  },
  {
   "server": 30018,
   "family": "MushroomCastle",
   "power": 404112096
  },
  {
   "server": 30018,
   "family": "TheOne",
   "power": 303823304
  },
  {
   "server": 30018,
   "family": "LokisArmy",
   "power": 263000155
  },
  {
   "server": 30018,
   "family": "Stronger",
   "power": 251788455
  },
  {
   "server": 30018,
   "family": "Playhouse",
   "power": 230806730
  },
  {
   "server": 30018,
   "family": "Baggelonium",
   "power": 224589985
  },
  {
   "server": 30018,
   "family": "Sakura",
   "power": 208957942
  },
  {
   "server": 30018,
   "family": "Goatedlads",
   "power": 142935377
  },
  {
   "server": 30018,
   "family": "spiderlily",
   "power": 44247229
  },
  {
   "server": 30019,
   "family": "Hivemind",
   "power": 1594431987
  },
  {
   "server": 30019,
   "family": "HideYourRice",
   "power": 509881052
  },
  {
   "server": 30019,
   "family": "MushGoonz",
   "power": 438111868
  },
  {
   "server": 30019,
   "family": "Restarts",
   "power": 326926514
  },
  {
   "server": 30019,
   "family": "Shroomfighters",
   "power": 252705195
  },
  {
   "server": 30019,
   "family": "BEST",
   "power": 249857327
  },
  {
   "server": 30019,
   "family": "GildedGuzzlers",
   "power": 222224702
  },
  {
   "server": 30019,
   "family": "ThePhoenix",
   "power": 211454111
  },
  {
   "server": 30019,
   "family": "Theharrisons",
   "power": 115460030
  },
  {
   "server": 30019,
   "family": "potatoes",
   "power": 90470668
  },
  {
   "server": 30020,
   "family": "Shoormlets",
   "power": 1530228406
  },
  {
   "server": 30020,
   "family": "TheShrooms",
   "power": 537862474
  },
  {
   "server": 30020,
   "family": "LaFamilia",
   "power": 401134653
  },
  {
   "server": 30020,
   "family": "Weebs",
   "power": 338001079
  },
  {
   "server": 30020,
   "family": "Mushymush",
   "power": 222403794
  },
  {
   "server": 30020,
   "family": "ShroomsRus",
   "power": 218617860
  },
  {
   "server": 30020,
   "family": "JustTheTip",
   "power": 200014285
  },
  {
   "server": 30020,
   "family": "Unknown",
   "power": 80548965
  },
  {
   "server": 30020,
   "family": "90s",
   "power": 70289790
  },
  {
   "server": 30020,
   "family": "Bros",
   "power": 52263999
  },
  {
   "server": 30021,
   "family": "ShadowGarden",
   "power": 1462232176
  },
  {
   "server": 30021,
   "family": "HighLands",
   "power": 830912785
  },
  {
   "server": 30021,
   "family": "Europa",
   "power": 294960157
  },
  {
   "server": 30021,
   "family": "cheats",
   "power": 219041676
  },
  {
   "server": 30021,
   "family": "peggers",
   "power": 170813970
  },
  {
   "server": 30021,
   "family": "DELTAFORCE",
   "power": 125737745
  },
  {
   "server": 30021,
   "family": "El_Shroomies",
   "power": 76617138
  },
  {
   "server": 30021,
   "family": "ARABFAMILY",
   "power": 51705515
  },
  {
   "server": 30021,
   "family": "MyLittleShroom",
   "power": 45494504
  },
  {
   "server": 30021,
   "family": "VaultTec",
   "power": 25248620
  },
  {
   "server": 30022,
   "family": "FireGlobal",
   "power": 1705257872
  },
  {
   "server": 30022,
   "family": "FungicidalArmy",
   "power": 540994644
  },
  {
   "server": 30022,
   "family": "Sum",
   "power": 323627524
  },
  {
   "server": 30022,
   "family": "Inquisition",
   "power": 316720660
  },
  {
   "server": 30022,
   "family": "Rotterdam",
   "power": 183488250
  },
  {
   "server": 30022,
   "family": "Moonriders",
   "power": 120807322
  },
  {
   "server": 30022,
   "family": "ChaosLegion",
   "power": 92084128
  },
  {
   "server": 30022,
   "family": "Fuzzsters",
   "power": 64221334
  },
  {
   "server": 30022,
   "family": "Potatisarna",
   "power": 59177043
  },
  {
   "server": 30022,
   "family": "Funguys",
   "power": 40574420
  },
  {
   "server": 30023,
   "family": "Luna",
   "power": 1698904483
  },
  {
   "server": 30023,
   "family": "TheEMPIRE",
   "power": 1073820735
  },
  {
   "server": 30023,
   "family": "RainbowRaiders",
   "power": 274740267
  },
  {
   "server": 30023,
   "family": "Shroomfies",
   "power": 251896994
  },
  {
   "server": 30023,
   "family": "AKUMA",
   "power": 232504004
  },
  {
   "server": 30023,
   "family": "Shroomventure",
   "power": 207870470
  },
  {
   "server": 30023,
   "family": "RealHitSquad",
   "power": 178935494
  },
  {
   "server": 30023,
   "family": "WWJL",
   "power": 128057068
  },
  {
   "server": 30023,
   "family": "Eternal",
   "power": 105601326
  },
  {
   "server": 30023,
   "family": "Hyrule",
   "power": 92797546
  },
  {
   "server": 30024,
   "family": "⭐️Universe",
   "power": 1688177676
  },
  {
   "server": 30024,
   "family": "FunGhetto",
   "power": 1469525747
  },
  {
   "server": 30024,
   "family": "GoofyGoobers",
   "power": 408343749
  },
  {
   "server": 30024,
   "family": "Friendly",
   "power": 197197117
  },
  {
   "server": 30024,
   "family": "Furry",
   "power": 177746656
  },
  {
   "server": 30024,
   "family": "PEEPEEPOOPOO",
   "power": 151608825
  },
  {
   "server": 30024,
   "family": "P1won",
   "power": 119488753
  },
  {
   "server": 30024,
   "family": "plebs",
   "power": 102435694
  },
  {
   "server": 30024,
   "family": "Spidsnøgenhat",
   "power": 102244817
  },
  {
   "server": 30024,
   "family": "Mafia",
   "power": 95937866
  },
  {
   "server": 30025,
   "family": "CAT",
   "power": 1591221049
  },
  {
   "server": 30025,
   "family": "BunchOfFunguys",
   "power": 1000175657
  },
  {
   "server": 30025,
   "family": "MightyShroomy",
   "power": 422160945
  },
  {
   "server": 30025,
   "family": "Pingu33s_Crib",
   "power": 232022180
  },
  {
   "server": 30025,
   "family": "MushyMushy",
   "power": 223604244
  },
  {
   "server": 30025,
   "family": "Reflection",
   "power": 108965811
  },
  {
   "server": 30025,
   "family": "Vengeance",
   "power": 84547308
  },
  {
   "server": 30025,
   "family": "BOSS",
   "power": 77872281
  },
  {
   "server": 30025,
   "family": "GOAT",
   "power": 38794421
  },
  {
   "server": 30025,
   "family": "caratland",
   "power": 34841428
  },
  {
   "server": 30026,
   "family": "Eclipse",
   "power": 1801676274
  },
  {
   "server": 30026,
   "family": "EWA",
   "power": 849461334
  },
  {
   "server": 30026,
   "family": "HellFire",
   "power": 433427703
  },
  {
   "server": 30026,
   "family": "Valhalla",
   "power": 299349907
  },
  {
   "server": 30026,
   "family": "welovethc",
   "power": 175223105
  },
  {
   "server": 30026,
   "family": "SeventhHeaven",
   "power": 170715456
  },
  {
   "server": 30026,
   "family": "ToxicGamers",
   "power": 150089967
  },
  {
   "server": 30026,
   "family": "GayFrogNShark",
   "power": 127762779
  },
  {
   "server": 30026,
   "family": "Polska",
   "power": 94803600
  },
  {
   "server": 30026,
   "family": "The_only_best",
   "power": 63621051
  },
  {
   "server": 30027,
   "family": "Retribution",
   "power": 1829405221
  },
  {
   "server": 30027,
   "family": "Legends",
   "power": 449937029
  },
  {
   "server": 30027,
   "family": "CALAMITY",
   "power": 377090430
  },
  {
   "server": 30027,
   "family": "BigFatGypsies",
   "power": 346177582
  },
  {
   "server": 30027,
   "family": "SonsofDoom",
   "power": 208027713
  },
  {
   "server": 30027,
   "family": "DoubleDutch",
   "power": 193312696
  },
  {
   "server": 30027,
   "family": "TheGemyBois",
   "power": 131998621
  },
  {
   "server": 30027,
   "family": "Mystic",
   "power": 125333143
  },
  {
   "server": 30027,
   "family": "KingCatClan",
   "power": 110127551
  },
  {
   "server": 30027,
   "family": "mycelium",
   "power": 108906192
  },
  {
   "server": 30028,
   "family": "Privateers",
   "power": 1802474712
  },
  {
   "server": 30028,
   "family": "Hallucinating",
   "power": 667208990
  },
  {
   "server": 30028,
   "family": "TwitchStreamin",
   "power": 371463902
  },
  {
   "server": 30028,
   "family": "Champs",
   "power": 325017915
  },
  {
   "server": 30028,
   "family": "The_boys",
   "power": 246521629
  },
  {
   "server": 30028,
   "family": "Black_Lotus",
   "power": 225639088
  },
  {
   "server": 30028,
   "family": "AngryMushroom",
   "power": 209050627
  },
  {
   "server": 30028,
   "family": "QCHARGE",
   "power": 165299148
  },
  {
   "server": 30028,
   "family": "Legends",
   "power": 119533406
  },
  {
   "server": 30028,
   "family": "acoustic",
   "power": 81310037
  },
  {
   "server": 30029,
   "family": "Supreme",
   "power": 1937682759
  },
  {
   "server": 30029,
   "family": "Confusion",
   "power": 670759240
  },
  {
   "server": 30029,
   "family": "Bozo",
   "power": 464813868
  },
  {
   "server": 30029,
   "family": "Psilocybin",
   "power": 344908243
  },
  {
   "server": 30029,
   "family": "Habibi",
   "power": 191610668
  },
  {
   "server": 30029,
   "family": "noobs",
   "power": 175668445
  },
  {
   "server": 30029,
   "family": "Hazbin",
   "power": 166792307
  },
  {
   "server": 30029,
   "family": "RL",
   "power": 135386593
  },
  {
   "server": 30029,
   "family": "Champions",
   "power": 125004117
  },
  {
   "server": 30029,
   "family": "Legends",
   "power": 120168753
  },
  {
   "server": 30030,
   "family": "Potheads",
   "power": 1559984059
  },
  {
   "server": 30030,
   "family": "ArcWave",
   "power": 593759124
  },
  {
   "server": 30030,
   "family": "WarriorsHouse",
   "power": 325638828
  },
  {
   "server": 30030,
   "family": "Claymore",
   "power": 196337773
  },
  {
   "server": 30030,
   "family": "inTop",
   "power": 179324173
  },
  {
   "server": 30030,
   "family": "Smushers",
   "power": 166527549
  },
  {
   "server": 30030,
   "family": "Shroomers",
   "power": 128378526
  },
  {
   "server": 30030,
   "family": "Rhfamilytree",
   "power": 95956762
  },
  {
   "server": 30030,
   "family": "H3llh0und5",
   "power": 65209713
  },
  {
   "server": 30030,
   "family": "ToadFam",
   "power": 50396590
  },
  {
   "server": 30031,
   "family": "InfiniteDucks",
   "power": 1703641619
  },
  {
   "server": 30031,
   "family": "UpRise",
   "power": 906884111
  },
  {
   "server": 30031,
   "family": "UpRisers",
   "power": 557634778
  },
  {
   "server": 30031,
   "family": "MagicShrooms",
   "power": 334088944
  },
  {
   "server": 30031,
   "family": "Kraken_Army",
   "power": 254979301
  },
  {
   "server": 30031,
   "family": "Greek",
   "power": 161051080
  },
  {
   "server": 30031,
   "family": "D028",
   "power": 68811945
  },
  {
   "server": 30031,
   "family": "KFC",
   "power": 53750877
  },
  {
   "server": 30031,
   "family": "furiously_fast",
   "power": 50887318
  },
  {
   "server": 30031,
   "family": "werecoolest",
   "power": 50878777
  },
  {
   "server": 30032,
   "family": "Shroom_Lords",
   "power": 1506204537
  },
  {
   "server": 30032,
   "family": "shroomshire",
   "power": 665671969
  },
  {
   "server": 30032,
   "family": "pillu",
   "power": 402784701
  },
  {
   "server": 30032,
   "family": "LEGENDS",
   "power": 293572451
  },
  {
   "server": 30032,
   "family": "BATTLEshrooms",
   "power": 155592161
  },
  {
   "server": 30032,
   "family": "TheSnowpack",
   "power": 149630044
  },
  {
   "server": 30032,
   "family": "fluffyfellows",
   "power": 141732387
  },
  {
   "server": 30032,
   "family": "TheGiftsvamps",
   "power": 140270321
  },
  {
   "server": 30032,
   "family": "ClashRoyal",
   "power": 63674395
  },
  {
   "server": 30032,
   "family": "MushyMushrooms",
   "power": 25139032
  },
  {
   "server": 30033,
   "family": "ForsakenS33",
   "power": 1947873417
  },
  {
   "server": 30033,
   "family": "ShitakeHappens",
   "power": 502156582
  },
  {
   "server": 30033,
   "family": "Meow",
   "power": 474920479
  },
  {
   "server": 30033,
   "family": "TheMushroomTip",
   "power": 355876542
  },
  {
   "server": 30033,
   "family": "demonZ",
   "power": 351335128
  },
  {
   "server": 30033,
   "family": "RAFC",
   "power": 291187110
  },
  {
   "server": 30033,
   "family": "Paradise",
   "power": 276641921
  },
  {
   "server": 30033,
   "family": "Brotherhood",
   "power": 198856480
  },
  {
   "server": 30033,
   "family": "LazyPanda",
   "power": 196232373
  },
  {
   "server": 30033,
   "family": "ferrys",
   "power": 187877816
  },
  {
   "server": 30034,
   "family": "ToadstoolClub",
   "power": 1704794250
  },
  {
   "server": 30034,
   "family": "Grubbers",
   "power": 414653419
  },
  {
   "server": 30034,
   "family": "TheHorde",
   "power": 406947217
  },
  {
   "server": 30034,
   "family": "hell2theno",
   "power": 316814608
  },
  {
   "server": 30034,
   "family": "Anarchy",
   "power": 295005253
  },
  {
   "server": 30034,
   "family": "ShroomAcadmy",
   "power": 257730168
  },
  {
   "server": 30034,
   "family": "FrogSpawns",
   "power": 224022288
  },
  {
   "server": 30034,
   "family": "Hess",
   "power": 196296356
  },
  {
   "server": 30034,
   "family": "Munem",
   "power": 190996568
  },
  {
   "server": 30034,
   "family": "TheCrackden",
   "power": 186159595
  },
  {
   "server": 30035,
   "family": "𝑴𝒚𝒔𝒕𝒊𝒄",
   "power": 1702089186
  },
  {
   "server": 30035,
   "family": "TheRealFamily",
   "power": 1405203086
  },
  {
   "server": 30035,
   "family": "flokiflock",
   "power": 426275162
  },
  {
   "server": 30035,
   "family": "Toodfam",
   "power": 217029010
  },
  {
   "server": 30035,
   "family": "ATAbros",
   "power": 194692011
  },
  {
   "server": 30035,
   "family": "mushrooms",
   "power": 177688397
  },
  {
   "server": 30035,
   "family": "derpAherpa",
   "power": 171309174
  },
  {
   "server": 30035,
   "family": "meowers",
   "power": 131652701
  },
  {
   "server": 30035,
   "family": "EliteShrooms",
   "power": 80554480
  },
  {
   "server": 30035,
   "family": "DILFS",
   "power": 38463339
  },
  {
   "server": 30036,
   "family": "DarknessR3BORN",
   "power": 1827777569
  },
  {
   "server": 30036,
   "family": "DarknesR3BORN2",
   "power": 722211387
  },
  {
   "server": 30036,
   "family": "Mushroom",
   "power": 633141136
  },
  {
   "server": 30036,
   "family": "Death",
   "power": 317234262
  },
  {
   "server": 30036,
   "family": "RAGNAROK",
   "power": 273011221
  },
  {
   "server": 30036,
   "family": "DreamShroom",
   "power": 260085608
  },
  {
   "server": 30036,
   "family": "Hell_Hounds",
   "power": 144656935
  },
  {
   "server": 30036,
   "family": "Moggers",
   "power": 134518553
  },
  {
   "server": 30036,
   "family": "Supernovas",
   "power": 120082728
  },
  {
   "server": 30036,
   "family": "Overlord",
   "power": 102805431
  },
  {
   "server": 30037,
   "family": "SilverStars",
   "power": 1648529555
  },
  {
   "server": 30037,
   "family": "FungiGang",
   "power": 1000349522
  },
  {
   "server": 30037,
   "family": "fungusWorlds",
   "power": 506792145
  },
  {
   "server": 30037,
   "family": "UK",
   "power": 317745654
  },
  {
   "server": 30037,
   "family": "NightShrooms",
   "power": 191828335
  },
  {
   "server": 30037,
   "family": "LEGEND",
   "power": 190377909
  },
  {
   "server": 30037,
   "family": "TeaParty",
   "power": 176025615
  },
  {
   "server": 30037,
   "family": "легушка",
   "power": 154149511
  },
  {
   "server": 30037,
   "family": "WreckingCrew",
   "power": 101550817
  },
  {
   "server": 30037,
   "family": "Otherworld",
   "power": 89654057
  },
  {
   "server": 30038,
   "family": "OnlyTheBrave",
   "power": 1702854084
  },
  {
   "server": 30038,
   "family": "Hyperize",
   "power": 856144107
  },
  {
   "server": 30038,
   "family": "RagingUnicorn",
   "power": 409381396
  },
  {
   "server": 30038,
   "family": "GOON",
   "power": 335571463
  },
  {
   "server": 30038,
   "family": "Legends",
   "power": 253654127
  },
  {
   "server": 30038,
   "family": "The_Gods",
   "power": 224801826
  },
  {
   "server": 30038,
   "family": "Schroomlegends",
   "power": 185685773
  },
  {
   "server": 30038,
   "family": "Krew",
   "power": 182374650
  },
  {
   "server": 30038,
   "family": "FallenAngels",
   "power": 150814307
  },
  {
   "server": 30038,
   "family": "urmum",
   "power": 83739071
  },
  {
   "server": 30039,
   "family": "Elite",
   "power": 1797700909
  },
  {
   "server": 30039,
   "family": "Coley",
   "power": 645392685
  },
  {
   "server": 30039,
   "family": "Brazucas",
   "power": 344676092
  },
  {
   "server": 30039,
   "family": "Guardians",
   "power": 317642907
  },
  {
   "server": 30039,
   "family": "ShroomRoom",
   "power": 280448413
  },
  {
   "server": 30039,
   "family": "Falcons",
   "power": 278956966
  },
  {
   "server": 30039,
   "family": "FOXHOUND",
   "power": 253325073
  },
  {
   "server": 30039,
   "family": "Specials",
   "power": 188676121
  },
  {
   "server": 30039,
   "family": "Kitsune",
   "power": 175741689
  },
  {
   "server": 30039,
   "family": "Suomiperkele",
   "power": 169036658
  },
  {
   "server": 30040,
   "family": "Radiance",
   "power": 1443420208
  },
  {
   "server": 30040,
   "family": "Justice",
   "power": 1064345488
  },
  {
   "server": 30040,
   "family": "SpecialCrew",
   "power": 411513321
  },
  {
   "server": 30040,
   "family": "Brasov",
   "power": 302652881
  },
  {
   "server": 30040,
   "family": "Pebroom",
   "power": 286077678
  },
  {
   "server": 30040,
   "family": "Kingeraal",
   "power": 247622359
  },
  {
   "server": 30040,
   "family": "free",
   "power": 223621847
  },
  {
   "server": 30040,
   "family": "LGC",
   "power": 197932881
  },
  {
   "server": 30040,
   "family": "TopEN",
   "power": 194963685
  },
  {
   "server": 30040,
   "family": "EnglishShrooms",
   "power": 128919924
  },
  {
   "server": 30041,
   "family": "Nocturnals",
   "power": 1633884918
  },
  {
   "server": 30041,
   "family": "fireglobal",
   "power": 768325694
  },
  {
   "server": 30041,
   "family": "bad",
   "power": 607135312
  },
  {
   "server": 30041,
   "family": "shroomvill",
   "power": 301896252
  },
  {
   "server": 30041,
   "family": "Night",
   "power": 230948355
  },
  {
   "server": 30041,
   "family": "Yipee",
   "power": 229341009
  },
  {
   "server": 30041,
   "family": "DrakenGuards",
   "power": 202574829
  },
  {
   "server": 30041,
   "family": "LightningMush",
   "power": 121652496
  },
  {
   "server": 30041,
   "family": "Jim2touchey",
   "power": 102728705
  },
  {
   "server": 30041,
   "family": "Decepticons",
   "power": 84834062
  },
  {
   "server": 30042,
   "family": "WalkingDead",
   "power": 1514959152
  },
  {
   "server": 30042,
   "family": "VIP",
   "power": 1369604549
  },
  {
   "server": 30042,
   "family": "DewDog",
   "power": 494337176
  },
  {
   "server": 30042,
   "family": "Paradoxy",
   "power": 319181690
  },
  {
   "server": 30042,
   "family": "PALERMO",
   "power": 297304237
  },
  {
   "server": 30042,
   "family": "Olympe",
   "power": 218978446
  },
  {
   "server": 30042,
   "family": "DemonSlayers",
   "power": 150686605
  },
  {
   "server": 30042,
   "family": "Legendary",
   "power": 123919268
  },
  {
   "server": 30042,
   "family": "Lol",
   "power": 118837561
  },
  {
   "server": 30042,
   "family": "CrazyShrooms",
   "power": 52129514
  },
  {
   "server": 30043,
   "family": "TruffleMakers",
   "power": 1567878837
  },
  {
   "server": 30043,
   "family": "Exiled༒Ones",
   "power": 1325442594
  },
  {
   "server": 30043,
   "family": "Mshrm",
   "power": 273209205
  },
  {
   "server": 30043,
   "family": "Gone4aTea",
   "power": 209024721
  },
  {
   "server": 30043,
   "family": "Fallout",
   "power": 208149271
  },
  {
   "server": 30043,
   "family": "FungRoom",
   "power": 180399426
  },
  {
   "server": 30043,
   "family": "Gods",
   "power": 179376759
  },
  {
   "server": 30043,
   "family": "ShadowWalkerZ",
   "power": 169755274
  },
  {
   "server": 30043,
   "family": "deangy38",
   "power": 167548879
  },
  {
   "server": 30043,
   "family": "Requiem",
   "power": 157189180
  },
  {
   "server": 30044,
   "family": "TheNightCaps",
   "power": 988533548
  },
  {
   "server": 30044,
   "family": "CozyNightCaps",
   "power": 947647512
  },
  {
   "server": 30044,
   "family": "Yggdrasil",
   "power": 354338298
  },
  {
   "server": 30044,
   "family": "Kenno’s",
   "power": 242082915
  },
  {
   "server": 30044,
   "family": "THE420FAM",
   "power": 222843840
  },
  {
   "server": 30044,
   "family": "Skrevsvamp",
   "power": 161195039
  },
  {
   "server": 30044,
   "family": "JustTheTip",
   "power": 159657647
  },
  {
   "server": 30044,
   "family": "Olympe",
   "power": 92775023
  },
  {
   "server": 30044,
   "family": "DummiS",
   "power": 41469801
  },
  {
   "server": 30044,
   "family": "furrys",
   "power": 40185387
  },
  {
   "server": 30045,
   "family": "NewImperium",
   "power": 1658754304
  },
  {
   "server": 30045,
   "family": "LostPlace",
   "power": 583135674
  },
  {
   "server": 30045,
   "family": "BlackCat",
   "power": 360655860
  },
  {
   "server": 30045,
   "family": "Limitless",
   "power": 262774606
  },
  {
   "server": 30045,
   "family": "RavensCroft",
   "power": 246159520
  },
  {
   "server": 30045,
   "family": "MagicShrooms",
   "power": 232384919
  },
  {
   "server": 30045,
   "family": "Fungais",
   "power": 188442915
  },
  {
   "server": 30045,
   "family": "Arctic",
   "power": 169801463
  },
  {
   "server": 30045,
   "family": "Framzone",
   "power": 121517070
  },
  {
   "server": 30045,
   "family": "underdogs",
   "power": 96310197
  },
  {
   "server": 30046,
   "family": "opinionists",
   "power": 1305557450
  },
  {
   "server": 30046,
   "family": "Unity",
   "power": 1249432293
  },
  {
   "server": 30046,
   "family": "Cute",
   "power": 640962212
  },
  {
   "server": 30046,
   "family": "walkingshrooms",
   "power": 259461610
  },
  {
   "server": 30046,
   "family": "༺Øtoxar༻",
   "power": 257565993
  },
  {
   "server": 30046,
   "family": "TheSquidd",
   "power": 158281038
  },
  {
   "server": 30046,
   "family": "Legends_3",
   "power": 156854494
  },
  {
   "server": 30046,
   "family": "Shroomville",
   "power": 95242293
  },
  {
   "server": 30046,
   "family": "Shuuush",
   "power": 85999529
  },
  {
   "server": 30046,
   "family": "Angels",
   "power": 43890300
  },
  {
   "server": 30047,
   "family": "FAMILY",
   "power": 1764967564
  },
  {
   "server": 30047,
   "family": "Funguys",
   "power": 557448234
  },
  {
   "server": 30047,
   "family": "zombies",
   "power": 278448534
  },
  {
   "server": 30047,
   "family": "BOOM",
   "power": 230480290
  },
  {
   "server": 30047,
   "family": "England",
   "power": 210966157
  },
  {
   "server": 30047,
   "family": "GG",
   "power": 203441477
  },
  {
   "server": 30047,
   "family": "toastie",
   "power": 188596934
  },
  {
   "server": 30047,
   "family": "specialunit",
   "power": 176715459
  },
  {
   "server": 30047,
   "family": "SSSHunter",
   "power": 156874505
  },
  {
   "server": 30047,
   "family": "Jack",
   "power": 156724233
  },
  {
   "server": 30048,
   "family": "Alpacalypse",
   "power": 1829121013
  },
  {
   "server": 30048,
   "family": "ShroOmateS",
   "power": 848151311
  },
  {
   "server": 30048,
   "family": "Alpacademy",
   "power": 490890673
  },
  {
   "server": 30048,
   "family": "Scottishshroom",
   "power": 427390373
  },
  {
   "server": 30048,
   "family": "stranger",
   "power": 250424569
  },
  {
   "server": 30048,
   "family": "TheSinas",
   "power": 248144124
  },
  {
   "server": 30048,
   "family": "TheMarauders",
   "power": 223650124
  },
  {
   "server": 30048,
   "family": "ForTheClueless",
   "power": 207842370
  },
  {
   "server": 30048,
   "family": "Spores",
   "power": 204029912
  },
  {
   "server": 30048,
   "family": "Shrooms4Life",
   "power": 180765675
  },
  {
   "server": 30049,
   "family": "Tormentium",
   "power": 1756283725
  },
  {
   "server": 30049,
   "family": "NoPainNoGain",
   "power": 976887332
  },
  {
   "server": 30049,
   "family": "Poêlée",
   "power": 440138897
  },
  {
   "server": 30049,
   "family": "Fam420",
   "power": 353787753
  },
  {
   "server": 30049,
   "family": "sololeveling",
   "power": 314701644
  },
  {
   "server": 30049,
   "family": "Animal_Thrower",
   "power": 275631904
  },
  {
   "server": 30049,
   "family": "nerf",
   "power": 204961732
  },
  {
   "server": 30049,
   "family": "MIDNIGHT",
   "power": 201514130
  },
  {
   "server": 30049,
   "family": "British",
   "power": 192592038
  },
  {
   "server": 30049,
   "family": "Legends",
   "power": 161438622
  },
  {
   "server": 30050,
   "family": "ULTIMA",
   "power": 1675157000
  },
  {
   "server": 30050,
   "family": "OP",
   "power": 1176187631
  },
  {
   "server": 30050,
   "family": "Lucozade",
   "power": 775473272
  },
  {
   "server": 30050,
   "family": "MapleTree",
   "power": 347602713
  },
  {
   "server": 30050,
   "family": "SYMNERD",
   "power": 276853378
  },
  {
   "server": 30050,
   "family": "Smileyriley",
   "power": 220496021
  },
  {
   "server": 30050,
   "family": "420camp",
   "power": 212498118
  },
  {
   "server": 30050,
   "family": "OG",
   "power": 204499363
  },
  {
   "server": 30050,
   "family": "BangBros",
   "power": 203510520
  },
  {
   "server": 30050,
   "family": "501st",
   "power": 162697698
  },
  {
   "server": 30051,
   "family": "SmashSquad",
   "power": 1772673804
  },
  {
   "server": 30051,
   "family": "Shroomtale",
   "power": 621602300
  },
  {
   "server": 30051,
   "family": "Nightingales",
   "power": 510222384
  },
  {
   "server": 30051,
   "family": "ItalyLegion",
   "power": 325265238
  },
  {
   "server": 30051,
   "family": "OnePiece",
   "power": 256689101
  },
  {
   "server": 30051,
   "family": "KarmineCorp",
   "power": 227882152
  },
  {
   "server": 30051,
   "family": "ShadowMushroms",
   "power": 222392999
  },
  {
   "server": 30051,
   "family": "højris",
   "power": 203644931
  },
  {
   "server": 30051,
   "family": "mawsteam",
   "power": 184518669
  },
  {
   "server": 30051,
   "family": "thegang",
   "power": 66742183
  },
  {
   "server": 30052,
   "family": "SoloLeveling",
   "power": 1668241467
  },
  {
   "server": 30052,
   "family": "Devils_Rejects",
   "power": 830997155
  },
  {
   "server": 30052,
   "family": "LuckyStrike",
   "power": 622931405
  },
  {
   "server": 30052,
   "family": "MicroWave",
   "power": 286117091
  },
  {
   "server": 30052,
   "family": "funguy",
   "power": 278466025
  },
  {
   "server": 30052,
   "family": "WAKAWArmy",
   "power": 275545485
  },
  {
   "server": 30052,
   "family": "MushroomCity",
   "power": 264330528
  },
  {
   "server": 30052,
   "family": "nodribblers",
   "power": 232207700
  },
  {
   "server": 30052,
   "family": "Mushies",
   "power": 206602469
  },
  {
   "server": 30052,
   "family": "FamilyHouse",
   "power": 196906362
  },
  {
   "server": 30053,
   "family": "EUNations",
   "power": 1613207355
  },
  {
   "server": 30053,
   "family": "EUNationsII",
   "power": 856322395
  },
  {
   "server": 30053,
   "family": "EUphoria",
   "power": 424202455
  },
  {
   "server": 30053,
   "family": "Death_Cap",
   "power": 285374702
  },
  {
   "server": 30053,
   "family": "Justiceshroom",
   "power": 281975633
  },
  {
   "server": 30053,
   "family": "MUSH_ITA",
   "power": 263439828
  },
  {
   "server": 30053,
   "family": "toaster",
   "power": 177515176
  },
  {
   "server": 30053,
   "family": "UKShrooms",
   "power": 163770649
  },
  {
   "server": 30053,
   "family": "TurdBurglars",
   "power": 158027601
  },
  {
   "server": 30053,
   "family": "Bonsai",
   "power": 129451372
  },
  {
   "server": 30054,
   "family": "OP",
   "power": 1777523986
  },
  {
   "server": 30054,
   "family": "DarkShroomz",
   "power": 470429041
  },
  {
   "server": 30054,
   "family": "JBL",
   "power": 334660233
  },
  {
   "server": 30054,
   "family": "Kankrouth",
   "power": 312715357
  },
  {
   "server": 30054,
   "family": "MagicMushrooms",
   "power": 286562351
  },
  {
   "server": 30054,
   "family": "Antagonists",
   "power": 247194026
  },
  {
   "server": 30054,
   "family": "PinkPanther",
   "power": 191935111
  },
  {
   "server": 30054,
   "family": "DaRatFamily",
   "power": 163342546
  },
  {
   "server": 30054,
   "family": "Fox",
   "power": 141354410
  },
  {
   "server": 30054,
   "family": "Devils",
   "power": 140590566
  },
  {
   "server": 30055,
   "family": "SlayerZ",
   "power": 1858162546
  },
  {
   "server": 30055,
   "family": "CrimsonDynasty",
   "power": 1318786524
  },
  {
   "server": 30055,
   "family": "ApexBandits",
   "power": 452026340
  },
  {
   "server": 30055,
   "family": "Shrooms",
   "power": 363479850
  },
  {
   "server": 30055,
   "family": "shadow_wolf666",
   "power": 280176308
  },
  {
   "server": 30055,
   "family": "Limitless",
   "power": 269023969
  },
  {
   "server": 30055,
   "family": "CHARIZARD",
   "power": 256270890
  },
  {
   "server": 30055,
   "family": "Deutschland",
   "power": 235292945
  },
  {
   "server": 30055,
   "family": "FunghiItaliani",
   "power": 121939925
  },
  {
   "server": 30055,
   "family": "Thiha",
   "power": 118991441
  },
  {
   "server": 30056,
   "family": "Apex",
   "power": 1542534428
  },
  {
   "server": 30056,
   "family": "Apex_Academy",
   "power": 498730979
  },
  {
   "server": 30056,
   "family": "KC_Familly",
   "power": 436333804
  },
  {
   "server": 30056,
   "family": "cool_people",
   "power": 378418864
  },
  {
   "server": 30056,
   "family": "TnP",
   "power": 300418772
  },
  {
   "server": 30056,
   "family": "Legends",
   "power": 237294563
  },
  {
   "server": 30056,
   "family": "MagicMushroom",
   "power": 235113448
  },
  {
   "server": 30056,
   "family": "Showmeurs",
   "power": 218163605
  },
  {
   "server": 30056,
   "family": "OnePiece",
   "power": 194737158
  },
  {
   "server": 30056,
   "family": "MapleTree",
   "power": 191843790
  },
  {
   "server": 30057,
   "family": "NOMADS",
   "power": 1748573832
  },
  {
   "server": 30057,
   "family": "LaFamilia",
   "power": 523056385
  },
  {
   "server": 30057,
   "family": "HolyTemple",
   "power": 404541435
  },
  {
   "server": 30057,
   "family": "darkclan",
   "power": 396018845
  },
  {
   "server": 30057,
   "family": "WePlayDaily",
   "power": 367278376
  },
  {
   "server": 30057,
   "family": "Saints",
   "power": 335450277
  },
  {
   "server": 30057,
   "family": "PolLandia",
   "power": 292850936
  },
  {
   "server": 30057,
   "family": "Nutters",
   "power": 252472447
  },
  {
   "server": 30057,
   "family": "Ohyeah",
   "power": 221041232
  },
  {
   "server": 30057,
   "family": "FGuysandFGirls",
   "power": 213451760
  },
  {
   "server": 30058,
   "family": "DragoniteS",
   "power": 1680382530
  },
  {
   "server": 30058,
   "family": "Dragonite5",
   "power": 751963173
  },
  {
   "server": 30058,
   "family": "Psilovybin",
   "power": 704173073
  },
  {
   "server": 30058,
   "family": "We_Eat_Ass",
   "power": 391591507
  },
  {
   "server": 30058,
   "family": "Sexyshrooms",
   "power": 312092766
  },
  {
   "server": 30058,
   "family": "Family",
   "power": 281232357
  },
  {
   "server": 30058,
   "family": "GreenBanshees",
   "power": 229646117
  },
  {
   "server": 30058,
   "family": "Elites",
   "power": 196987481
  },
  {
   "server": 30058,
   "family": "BlackKnights",
   "power": 186325885
  },
  {
   "server": 30058,
   "family": "PilipinoSquad",
   "power": 130603522
  },
  {
   "server": 30059,
   "family": "Sky",
   "power": 1410386280
  },
  {
   "server": 30059,
   "family": "Grubbers",
   "power": 561734958
  },
  {
   "server": 30059,
   "family": "TwinFlames",
   "power": 462875157
  },
  {
   "server": 30059,
   "family": "IRAN",
   "power": 336828004
  },
  {
   "server": 30059,
   "family": "Mushroomgang",
   "power": 245487670
  },
  {
   "server": 30059,
   "family": "SilverForce",
   "power": 186021655
  },
  {
   "server": 30059,
   "family": "Pantheon",
   "power": 179929066
  },
  {
   "server": 30059,
   "family": "Fullmoon",
   "power": 163452279
  },
  {
   "server": 30059,
   "family": "Utopia",
   "power": 48269339
  },
  {
   "server": 30059,
   "family": "IMMORTALS",
   "power": 46806882
  },
  {
   "server": 30060,
   "family": "MagicSmilers",
   "power": 1723617113
  },
  {
   "server": 30060,
   "family": "LizardLickers",
   "power": 1154030808
  },
  {
   "server": 30060,
   "family": "Interstellar",
   "power": 317767990
  },
  {
   "server": 30060,
   "family": "Moomoo",
   "power": 258197414
  },
  {
   "server": 30060,
   "family": "FreeToWin",
   "power": 234800543
  },
  {
   "server": 30060,
   "family": "Funguys",
   "power": 228589218
  },
  {
   "server": 30060,
   "family": "NumberOne",
   "power": 200219668
  },
  {
   "server": 30060,
   "family": "Manicomio",
   "power": 152786981
  },
  {
   "server": 30060,
   "family": "FireGlobal",
   "power": 141557659
  },
  {
   "server": 30060,
   "family": "Fungus_Italy",
   "power": 125727811
  },
  {
   "server": 30061,
   "family": "Fearless",
   "power": 1657508180
  },
  {
   "server": 30061,
   "family": "Akatsuki",
   "power": 1419963001
  },
  {
   "server": 30061,
   "family": "the420fam",
   "power": 396555182
  },
  {
   "server": 30061,
   "family": "RadiantGarden",
   "power": 369258651
  },
  {
   "server": 30061,
   "family": "AgentsAreGo",
   "power": 358447996
  },
  {
   "server": 30061,
   "family": "WonkyShroomis",
   "power": 242598102
  },
  {
   "server": 30061,
   "family": "Penumbra",
   "power": 234300612
  },
  {
   "server": 30061,
   "family": "PhantomFungus",
   "power": 198179485
  },
  {
   "server": 30061,
   "family": "DESTROYERS",
   "power": 183548662
  },
  {
   "server": 30061,
   "family": "FireGlobal",
   "power": 147895824
  },
  {
   "server": 30062,
   "family": "ShroomCrew",
   "power": 1495074010
  },
  {
   "server": 30062,
   "family": "ShiitakeStrike",
   "power": 1065493142
  },
  {
   "server": 30062,
   "family": "Crackheads",
   "power": 355207240
  },
  {
   "server": 30062,
   "family": "Notmushroom",
   "power": 301877863
  },
  {
   "server": 30062,
   "family": "SafeHaven",
   "power": 245771613
  },
  {
   "server": 30062,
   "family": "Happyshrooms",
   "power": 226639933
  },
  {
   "server": 30062,
   "family": "LATVIJA🫣",
   "power": 216958447
  },
  {
   "server": 30062,
   "family": "TheNewWorld",
   "power": 214100501
  },
  {
   "server": 30062,
   "family": "Globbers",
   "power": 211909080
  },
  {
   "server": 30062,
   "family": "VictoryRoad",
   "power": 198608489
  },
  {
   "server": 30063,
   "family": "HomelessWhales",
   "power": 1597637856
  },
  {
   "server": 30063,
   "family": "Mycelium",
   "power": 661428299
  },
  {
   "server": 30063,
   "family": "TopShrooms",
   "power": 569715491
  },
  {
   "server": 30063,
   "family": "legacy",
   "power": 429536092
  },
  {
   "server": 30063,
   "family": "SailorShroom",
   "power": 397260267
  },
  {
   "server": 30063,
   "family": "bloodwolfs",
   "power": 316007963
  },
  {
   "server": 30063,
   "family": "WuTangClan",
   "power": 282441177
  },
  {
   "server": 30063,
   "family": "AnitaDump",
   "power": 259214146
  },
  {
   "server": 30063,
   "family": "norway",
   "power": 231386619
  },
  {
   "server": 30063,
   "family": "UnitedKingdom",
   "power": 187412225
  },
  {
   "server": 30064,
   "family": "RiseOfShrooms",
   "power": 1726218752
  },
  {
   "server": 30064,
   "family": "MystykCheese",
   "power": 927050286
  },
  {
   "server": 30064,
   "family": "Crue",
   "power": 542626559
  },
  {
   "server": 30064,
   "family": "TheGoats",
   "power": 305489206
  },
  {
   "server": 30064,
   "family": "Shroomies",
   "power": 297712394
  },
  {
   "server": 30064,
   "family": "JuicyGang",
   "power": 278030122
  },
  {
   "server": 30064,
   "family": "FeartheScots",
   "power": 237729019
  },
  {
   "server": 30064,
   "family": "ShadowzRooms",
   "power": 173701996
  },
  {
   "server": 30064,
   "family": "ITA",
   "power": 146548194
  },
  {
   "server": 30064,
   "family": "FireBanshee",
   "power": 129155326
  },
  {
   "server": 30065,
   "family": "SarielHood",
   "power": 1553762003
  },
  {
   "server": 30065,
   "family": "Magickshrooms",
   "power": 1104415373
  },
  {
   "server": 30065,
   "family": "Shroomies",
   "power": 531212864
  },
  {
   "server": 30065,
   "family": "MushVibes",
   "power": 312235082
  },
  {
   "server": 30065,
   "family": "DungeonDudes",
   "power": 294258790
  },
  {
   "server": 30065,
   "family": "SarielHood3",
   "power": 250756675
  },
  {
   "server": 30065,
   "family": "Aartaples",
   "power": 210387345
  },
  {
   "server": 30065,
   "family": "Weezards",
   "power": 148272506
  },
  {
   "server": 30065,
   "family": "Mushrooms",
   "power": 138285858
  },
  {
   "server": 30065,
   "family": "Hato",
   "power": 127067536
  },
  {
   "server": 30066,
   "family": "OP",
   "power": 1486109014
  },
  {
   "server": 30066,
   "family": "Olympus",
   "power": 1102285407
  },
  {
   "server": 30066,
   "family": "Otherworld",
   "power": 478373535
  },
  {
   "server": 30066,
   "family": "Mushrooms",
   "power": 382183985
  },
  {
   "server": 30066,
   "family": "ToxicShrooms",
   "power": 214646991
  },
  {
   "server": 30066,
   "family": "Ownage",
   "power": 210704861
  },
  {
   "server": 30066,
   "family": "Opium",
   "power": 208609314
  },
  {
   "server": 30066,
   "family": "Italia",
   "power": 187291096
  },
  {
   "server": 30066,
   "family": "Gladiators",
   "power": 120890663
  },
  {
   "server": 30066,
   "family": "Toxic",
   "power": 92548231
  },
  {
   "server": 30067,
   "family": "Pirates",
   "power": 1436188823
  },
  {
   "server": 30067,
   "family": "TheFunGuys",
   "power": 946296266
  },
  {
   "server": 30067,
   "family": "russian",
   "power": 452495426
  },
  {
   "server": 30067,
   "family": "Phoenix",
   "power": 349670893
  },
  {
   "server": 30067,
   "family": "NOOBS",
   "power": 296751115
  },
  {
   "server": 30067,
   "family": "Frenchactif",
   "power": 295109732
  },
  {
   "server": 30067,
   "family": "Holigans",
   "power": 255283563
  },
  {
   "server": 30067,
   "family": "Pilzkrieger",
   "power": 250007856
  },
  {
   "server": 30067,
   "family": "GermanyNextLvL",
   "power": 216924957
  },
  {
   "server": 30067,
   "family": "Family",
   "power": 121667556
  },
  {
   "server": 30068,
   "family": "PMU",
   "power": 1448671493
  },
  {
   "server": 30068,
   "family": "Elite",
   "power": 644570063
  },
  {
   "server": 30068,
   "family": "FearLess",
   "power": 583156370
  },
  {
   "server": 30068,
   "family": "ShroomLegends",
   "power": 327666523
  },
  {
   "server": 30068,
   "family": "DragonSquad",
   "power": 301797057
  },
  {
   "server": 30068,
   "family": "MushroomArmy",
   "power": 296500128
  },
  {
   "server": 30068,
   "family": "Ultrawings",
   "power": 276884997
  },
  {
   "server": 30068,
   "family": "NumberOne",
   "power": 270460208
  },
  {
   "server": 30068,
   "family": "Infected",
   "power": 210905723
  },
  {
   "server": 30068,
   "family": "IronBlood",
   "power": 198270043
  },
  {
   "server": 30069,
   "family": "Serenity",
   "power": 1315882574
  },
  {
   "server": 30069,
   "family": "Gods",
   "power": 1216322763
  },
  {
   "server": 30069,
   "family": "Barbie",
   "power": 348244746
  },
  {
   "server": 30069,
   "family": "Shroomies4life",
   "power": 297126658
  },
  {
   "server": 30069,
   "family": "Star",
   "power": 255868709
  },
  {
   "server": 30069,
   "family": "BOBBAS",
   "power": 227540965
  },
  {
   "server": 30069,
   "family": "BLTfamily",
   "power": 226594431
  },
  {
   "server": 30069,
   "family": "McSauces",
   "power": 178954994
  },
  {
   "server": 30069,
   "family": "TheGOATfamily",
   "power": 175618025
  },
  {
   "server": 30069,
   "family": "Goombas",
   "power": 122738160
  },
  {
   "server": 30070,
   "family": "Peshmerga",
   "power": 1414555865
  },
  {
   "server": 30070,
   "family": "ShroomsLovers",
   "power": 755610831
  },
  {
   "server": 30070,
   "family": "Funghetti",
   "power": 522771235
  },
  {
   "server": 30070,
   "family": "Ryse_Empire",
   "power": 269586143
  },
  {
   "server": 30070,
   "family": "cc5859",
   "power": 253321127
  },
  {
   "server": 30070,
   "family": "Mycelium",
   "power": 238466494
  },
  {
   "server": 30070,
   "family": "friend",
   "power": 231835634
  },
  {
   "server": 30070,
   "family": "ČeskéHouby",
   "power": 211087888
  },
  {
   "server": 30070,
   "family": "ScoobySnacks",
   "power": 193093632
  },
  {
   "server": 30070,
   "family": "yowaimo",
   "power": 75622898
  },
  {
   "server": 30071,
   "family": "Shadows",
   "power": 1461957211
  },
  {
   "server": 30071,
   "family": "Dominators",
   "power": 829011446
  },
  {
   "server": 30071,
   "family": "Hogwarts",
   "power": 510924166
  },
  {
   "server": 30071,
   "family": "Dark",
   "power": 317010314
  },
  {
   "server": 30071,
   "family": "Dragon_Riders",
   "power": 312128268
  },
  {
   "server": 30071,
   "family": "Jupes",
   "power": 303816595
  },
  {
   "server": 30071,
   "family": "itas",
   "power": 258261973
  },
  {
   "server": 30071,
   "family": "ShadowGarden",
   "power": 205360441
  },
  {
   "server": 30071,
   "family": "Lions",
   "power": 202070244
  },
  {
   "server": 30071,
   "family": "Infinite",
   "power": 175335749
  },
  {
   "server": 30072,
   "family": "Monarchs",
   "power": 1427995122
  },
  {
   "server": 30072,
   "family": "OP",
   "power": 581025972
  },
  {
   "server": 30072,
   "family": "SleepyPanda",
   "power": 344570708
  },
  {
   "server": 30072,
   "family": "STR",
   "power": 300617582
  },
  {
   "server": 30072,
   "family": "Mushyland",
   "power": 298207947
  },
  {
   "server": 30072,
   "family": "DaBoys",
   "power": 269279343
  },
  {
   "server": 30072,
   "family": "greengang",
   "power": 225043891
  },
  {
   "server": 30072,
   "family": "HORDE",
   "power": 192270588
  },
  {
   "server": 30072,
   "family": "Trippy",
   "power": 190801908
  },
  {
   "server": 30072,
   "family": "SithLegacy",
   "power": 177185252
  },
  {
   "server": 30073,
   "family": "Berserkers",
   "power": 1349801317
  },
  {
   "server": 30073,
   "family": "Overlord",
   "power": 441517612
  },
  {
   "server": 30073,
   "family": "HighStatus",
   "power": 370659709
  },
  {
   "server": 30073,
   "family": "RISOTTO",
   "power": 278676486
  },
  {
   "server": 30073,
   "family": "robchocky",
   "power": 241101882
  },
  {
   "server": 30073,
   "family": "BAB",
   "power": 226582468
  },
  {
   "server": 30073,
   "family": "Azarions",
   "power": 220862128
  },
  {
   "server": 30073,
   "family": "DreamTeam",
   "power": 190979021
  },
  {
   "server": 30073,
   "family": "theGAMERS",
   "power": 189664572
  },
  {
   "server": 30073,
   "family": "Kobra",
   "power": 160697579
  },
  {
   "server": 30074,
   "family": "Divinity",
   "power": 1309037847
  },
  {
   "server": 30074,
   "family": "MedCartel",
   "power": 441245569
  },
  {
   "server": 30074,
   "family": "1forAll",
   "power": 329677028
  },
  {
   "server": 30074,
   "family": "Geofamily",
   "power": 319156677
  },
  {
   "server": 30074,
   "family": "Here4Fun",
   "power": 248228494
  },
  {
   "server": 30074,
   "family": "BlackShroomies",
   "power": 228249524
  },
  {
   "server": 30074,
   "family": "ForTheEmpire",
   "power": 213153550
  },
  {
   "server": 30074,
   "family": "Shroomers",
   "power": 208466259
  },
  {
   "server": 30074,
   "family": "слоник",
   "power": 178289966
  },
  {
   "server": 30074,
   "family": "OP",
   "power": 169213522
  },
  {
   "server": 30075,
   "family": "NUGDOME",
   "power": 1424365571
  },
  {
   "server": 30075,
   "family": "АКТИВНІ",
   "power": 616010888
  },
  {
   "server": 30075,
   "family": "Legends",
   "power": 563003758
  },
  {
   "server": 30075,
   "family": "FT",
   "power": 309656561
  },
  {
   "server": 30075,
   "family": "MoggingMushes",
   "power": 302463918
  },
  {
   "server": 30075,
   "family": "UKShrooms",
   "power": 247988023
  },
  {
   "server": 30075,
   "family": "Magyarok",
   "power": 240573311
  },
  {
   "server": 30075,
   "family": "LunarticMoon28",
   "power": 194841129
  },
  {
   "server": 30075,
   "family": "PrimalShrooms",
   "power": 180871269
  },
  {
   "server": 30075,
   "family": "GloryHole",
   "power": 162439137
  },
  {
   "server": 30076,
   "family": "Funguys",
   "power": 1441048210
  },
  {
   "server": 30076,
   "family": "Fearless",
   "power": 814299000
  },
  {
   "server": 30076,
   "family": "ToadStool",
   "power": 402121530
  },
  {
   "server": 30076,
   "family": "Ashtebex",
   "power": 354008758
  },
  {
   "server": 30076,
   "family": "Fighters",
   "power": 322792939
  },
  {
   "server": 30076,
   "family": "demons",
   "power": 291628802
  },
  {
   "server": 30076,
   "family": "TeamBeast",
   "power": 285893778
  },
  {
   "server": 30076,
   "family": "Ninja_Clan",
   "power": 206607529
  },
  {
   "server": 30076,
   "family": "LuccaRegna",
   "power": 170156582
  },
  {
   "server": 30076,
   "family": "RedDragons",
   "power": 157624091
  },
  {
   "server": 30077,
   "family": "TwinFlames",
   "power": 1235473196
  },
  {
   "server": 30077,
   "family": "NgFrench",
   "power": 796951367
  },
  {
   "server": 30077,
   "family": "SiyahSancak",
   "power": 426897587
  },
  {
   "server": 30077,
   "family": "Darkness",
   "power": 408477681
  },
  {
   "server": 30077,
   "family": "InFlames",
   "power": 312227296
  },
  {
   "server": 30077,
   "family": "Germany",
   "power": 298539040
  },
  {
   "server": 30077,
   "family": "Rebellion",
   "power": 250588355
  },
  {
   "server": 30077,
   "family": "Grubbers",
   "power": 221459551
  },
  {
   "server": 30077,
   "family": "NoLiMiT",
   "power": 172941116
  },
  {
   "server": 30077,
   "family": "toriyamasaiyan",
   "power": 152119502
  },
  {
   "server": 30078,
   "family": "magicshrooms",
   "power": 946641482
  },
  {
   "server": 30078,
   "family": "demonZ",
   "power": 750940828
  },
  {
   "server": 30078,
   "family": "Grubbers",
   "power": 736572604
  },
  {
   "server": 30078,
   "family": "Nightmares",
   "power": 292897782
  },
  {
   "server": 30078,
   "family": "Ohana",
   "power": 274658007
  },
  {
   "server": 30078,
   "family": "OP",
   "power": 234368652
  },
  {
   "server": 30078,
   "family": "Shroomies🤍",
   "power": 191049220
  },
  {
   "server": 30078,
   "family": "melloncatgang",
   "power": 188945053
  },
  {
   "server": 30078,
   "family": "DieGefährten",
   "power": 174991223
  },
  {
   "server": 30078,
   "family": "Ege",
   "power": 167123429
  },
  {
   "server": 30079,
   "family": "Legends",
   "power": 1295952263
  },
  {
   "server": 30079,
   "family": "ILikeRocks",
   "power": 575664519
  },
  {
   "server": 30079,
   "family": "EliteShrooms",
   "power": 502775854
  },
  {
   "server": 30079,
   "family": "CzechFamily",
   "power": 321414369
  },
  {
   "server": 30079,
   "family": "hyper",
   "power": 252509827
  },
  {
   "server": 30079,
   "family": "FreeloaderBro",
   "power": 248266006
  },
  {
   "server": 30079,
   "family": "ANIME",
   "power": 170801805
  },
  {
   "server": 30079,
   "family": "Bighunter",
   "power": 163152244
  },
  {
   "server": 30079,
   "family": "guffy",
   "power": 127431046
  },
  {
   "server": 30079,
   "family": "KingPins",
   "power": 105000535
  },
  {
   "server": 30080,
   "family": "F2P",
   "power": 1271007631
  },
  {
   "server": 30080,
   "family": "Legends",
   "power": 631221370
  },
  {
   "server": 30080,
   "family": "shroomydoomy",
   "power": 249167909
  },
  {
   "server": 30080,
   "family": "GRANS_ARMY",
   "power": 243562537
  },
  {
   "server": 30080,
   "family": "SkCz",
   "power": 219697680
  },
  {
   "server": 30080,
   "family": "Abrokilla",
   "power": 189894347
  },
  {
   "server": 30080,
   "family": "Atlas",
   "power": 182835957
  },
  {
   "server": 30080,
   "family": "DarkSide",
   "power": 181910747
  },
  {
   "server": 30080,
   "family": "teemo",
   "power": 174334250
  },
  {
   "server": 30080,
   "family": "Familyworld",
   "power": 99367483
  },
  {
   "server": 30081,
   "family": "Warriors",
   "power": 1307803442
  },
  {
   "server": 30081,
   "family": "KINGS",
   "power": 529752609
  },
  {
   "server": 30081,
   "family": "Focus",
   "power": 274464884
  },
  {
   "server": 30081,
   "family": "MegaShrooms",
   "power": 216815535
  },
  {
   "server": 30081,
   "family": "Dutchies",
   "power": 208307114
  },
  {
   "server": 30081,
   "family": "MushroomHill",
   "power": 201405158
  },
  {
   "server": 30081,
   "family": "EternalLegends",
   "power": 199173967
  },
  {
   "server": 30081,
   "family": "Svenskasvampar",
   "power": 140625993
  },
  {
   "server": 30081,
   "family": "Slovak_Cech",
   "power": 135639810
  },
  {
   "server": 30081,
   "family": "Gronk",
   "power": 68378207
  },
  {
   "server": 30082,
   "family": "MushPit82",
   "power": 1385583592
  },
  {
   "server": 30082,
   "family": "JujutsuKaisen",
   "power": 734389001
  },
  {
   "server": 30082,
   "family": "Truffles",
   "power": 564872241
  },
  {
   "server": 30082,
   "family": "ITALIA",
   "power": 252181080
  },
  {
   "server": 30082,
   "family": "MightyMush",
   "power": 186515007
  },
  {
   "server": 30082,
   "family": "ÁguaDasPedras",
   "power": 181918407
  },
  {
   "server": 30082,
   "family": "Shroom_Garden",
   "power": 140628280
  },
  {
   "server": 30082,
   "family": "hello",
   "power": 128467902
  },
  {
   "server": 30082,
   "family": "RuiN",
   "power": 46279704
  },
  {
   "server": 30082,
   "family": "Blacklisted",
   "power": 37894369
  },
  {
   "server": 30083,
   "family": "SHROOMS",
   "power": 1113289450
  },
  {
   "server": 30083,
   "family": "ShroomOrder",
   "power": 645034215
  },
  {
   "server": 30083,
   "family": "Tea",
   "power": 240735719
  },
  {
   "server": 30083,
   "family": "Legion",
   "power": 169808623
  },
  {
   "server": 30083,
   "family": "Myrmidones",
   "power": 161362624
  },
  {
   "server": 30083,
   "family": "Cokeine",
   "power": 158562149
  },
  {
   "server": 30083,
   "family": "GANJALF",
   "power": 130598739
  },
  {
   "server": 30083,
   "family": "EUNATIONS",
   "power": 91758337
  },
  {
   "server": 30083,
   "family": "Assassins",
   "power": 53995141
  },
  {
   "server": 30083,
   "family": "Clove",
   "power": 52152626
  },
  {
   "server": 30084,
   "family": "HakunaMatata",
   "power": 1110736806
  },
  {
   "server": 30084,
   "family": "LordOfTheRings",
   "power": 370794418
  },
  {
   "server": 30084,
   "family": "KING",
   "power": 193222342
  },
  {
   "server": 30084,
   "family": "Deeeeeaaaaaath",
   "power": 168776580
  },
  {
   "server": 30084,
   "family": "iammooshroom",
   "power": 161897666
  },
  {
   "server": 30084,
   "family": "MagyarGombák",
   "power": 153673210
  },
  {
   "server": 30084,
   "family": "4fun",
   "power": 137809312
  },
  {
   "server": 30084,
   "family": "Talented",
   "power": 89840619
  },
  {
   "server": 30084,
   "family": "MCAD",
   "power": 25245898
  },
  {
   "server": 30084,
   "family": "The…",
   "power": 9737674
  },
  {
   "server": 30085,
   "family": "NightWalkers",
   "power": 1091851518
  },
  {
   "server": 30085,
   "family": "AddavadaiCorp",
   "power": 885453717
  },
  {
   "server": 30085,
   "family": "ZeroClub",
   "power": 424960206
  },
  {
   "server": 30085,
   "family": "Falango",
   "power": 306413163
  },
  {
   "server": 30085,
   "family": "Munchies",
   "power": 294858870
  },
  {
   "server": 30085,
   "family": "giggity",
   "power": 155783238
  },
  {
   "server": 30085,
   "family": "CZEaSVK",
   "power": 152060717
  },
  {
   "server": 30085,
   "family": "TheCraker_clan",
   "power": 54308379
  },
  {
   "server": 30085,
   "family": "TreeOfLife",
   "power": 48564215
  },
  {
   "server": 30085,
   "family": "czsk",
   "power": 21417522
  },
  {
   "server": 30086,
   "family": "Legacy",
   "power": 1084339250
  },
  {
   "server": 30086,
   "family": "Immortals",
   "power": 665360587
  },
  {
   "server": 30086,
   "family": "CasualTrippers",
   "power": 294029096
  },
  {
   "server": 30086,
   "family": "ATOM",
   "power": 234289336
  },
  {
   "server": 30086,
   "family": "Mushrooms",
   "power": 191316319
  },
  {
   "server": 30086,
   "family": "Mushgang",
   "power": 152703299
  },
  {
   "server": 30086,
   "family": "teemo",
   "power": 138337610
  },
  {
   "server": 30086,
   "family": "EMPERORS",
   "power": 30840230
  },
  {
   "server": 30086,
   "family": "BurmeseFamily",
   "power": 29242626
  },
  {
   "server": 30086,
   "family": "DemonLordsArmy",
   "power": 15310189
  },
  {
   "server": 30087,
   "family": "Monster",
   "power": 1250018980
  },
  {
   "server": 30087,
   "family": "Alpha",
   "power": 300731441
  },
  {
   "server": 30087,
   "family": "Darkness",
   "power": 231575154
  },
  {
   "server": 30087,
   "family": "immortals",
   "power": 177475906
  },
  {
   "server": 30087,
   "family": "roadmen",
   "power": 153235705
  },
  {
   "server": 30087,
   "family": "KING",
   "power": 149701869
  },
  {
   "server": 30087,
   "family": "Dark",
   "power": 147653893
  },
  {
   "server": 30087,
   "family": "jellybeans",
   "power": 139087310
  },
  {
   "server": 30087,
   "family": "Losstrawhats",
   "power": 65610674
  },
  {
   "server": 30087,
   "family": "Darksiders",
   "power": 24151529
  },
  {
   "server": 30088,
   "family": "OnlyTheBest",
   "power": 1205985426
  },
  {
   "server": 30088,
   "family": "ANARCHY",
   "power": 557872304
  },
  {
   "server": 30088,
   "family": "GodFathers",
   "power": 252213328
  },
  {
   "server": 30088,
   "family": "Shroompire",
   "power": 238503739
  },
  {
   "server": 30088,
   "family": "elites",
   "power": 183982488
  },
  {
   "server": 30088,
   "family": "MushKingdom",
   "power": 175999508
  },
  {
   "server": 30088,
   "family": "MushSoup",
   "power": 171023027
  },
  {
   "server": 30088,
   "family": "TeamEurope",
   "power": 163419415
  },
  {
   "server": 30088,
   "family": "Shroomski",
   "power": 130794130
  },
  {
   "server": 30088,
   "family": "Motherworld",
   "power": 105234416
  },
  {
   "server": 30089,
   "family": "Immortals",
   "power": 868434910
  },
  {
   "server": 30089,
   "family": "Elites",
   "power": 817699884
  },
  {
   "server": 30089,
   "family": "reet",
   "power": 414738746
  },
  {
   "server": 30089,
   "family": "MANITARIA",
   "power": 177192557
  },
  {
   "server": 30089,
   "family": "LORDS",
   "power": 172623250
  },
  {
   "server": 30089,
   "family": "Better",
   "power": 141521088
  },
  {
   "server": 30089,
   "family": "shroomers",
   "power": 97799574
  },
  {
   "server": 30089,
   "family": "KeepersOfLight",
   "power": 88103163
  },
  {
   "server": 30089,
   "family": "yesir",
   "power": 83190117
  },
  {
   "server": 30089,
   "family": "Jólvanezígy",
   "power": 12676490
  },
  {
   "server": 30090,
   "family": "Legends",
   "power": 1127915316
  },
  {
   "server": 30090,
   "family": "ShadowArmy",
   "power": 246118748
  },
  {
   "server": 30090,
   "family": "MoggingMushes",
   "power": 189241339
  },
  {
   "server": 30090,
   "family": "thefungiys",
   "power": 170631176
  },
  {
   "server": 30090,
   "family": "Fellowship",
   "power": 150840086
  },
  {
   "server": 30090,
   "family": "AToMY",
   "power": 121379023
  },
  {
   "server": 30090,
   "family": "Elite",
   "power": 118236755
  },
  {
   "server": 30090,
   "family": "Legacy",
   "power": 106322585
  },
  {
   "server": 30090,
   "family": "oogabooga",
   "power": 67385323
  },
  {
   "server": 30090,
   "family": "Darksouls",
   "power": 53703624
  },
  {
   "server": 30091,
   "family": "CrustyKrabs",
   "power": 1154232485
  },
  {
   "server": 30091,
   "family": "Coins’R’us",
   "power": 378820975
  },
  {
   "server": 30091,
   "family": "Kings",
   "power": 293658854
  },
  {
   "server": 30091,
   "family": "TheFam",
   "power": 170788100
  },
  {
   "server": 30091,
   "family": "immortals",
   "power": 163148521
  },
  {
   "server": 30091,
   "family": "Grecce88Gela",
   "power": 151402649
  },
  {
   "server": 30091,
   "family": "DeBrickas",
   "power": 128621171
  },
  {
   "server": 30091,
   "family": "FamilyName",
   "power": 127291403
  },
  {
   "server": 30091,
   "family": "HocusPocus",
   "power": 121992839
  },
  {
   "server": 30091,
   "family": "Peperoni",
   "power": 78326750
  },
  {
   "server": 30092,
   "family": "Corleone",
   "power": 930127469
  },
  {
   "server": 30092,
   "family": "TropicMorte",
   "power": 344474752
  },
  {
   "server": 30092,
   "family": "Greekshrooms",
   "power": 241568266
  },
  {
   "server": 30092,
   "family": "Death",
   "power": 161900344
  },
  {
   "server": 30092,
   "family": "Psilonauts",
   "power": 156442786
  },
  {
   "server": 30092,
   "family": "Legends",
   "power": 151430420
  },
  {
   "server": 30092,
   "family": "shroomers",
   "power": 143360245
  },
  {
   "server": 30092,
   "family": "Overlord",
   "power": 42757543
  },
  {
   "server": 30092,
   "family": "GOOSE",
   "power": 42389796
  },
  {
   "server": 30092,
   "family": "Honey_Badgers",
   "power": 18307535
  },
  {
   "server": 30093,
   "family": "Veterans",
   "power": 1086693947
  },
  {
   "server": 30093,
   "family": "MushKings",
   "power": 545847088
  },
  {
   "server": 30093,
   "family": "Hellas",
   "power": 360147842
  },
  {
   "server": 30093,
   "family": "TheHell",
   "power": 157369159
  },
  {
   "server": 30093,
   "family": "Overlords",
   "power": 151914855
  },
  {
   "server": 30093,
   "family": "panther1black",
   "power": 112720745
  },
  {
   "server": 30093,
   "family": "Serenity",
   "power": 112247274
  },
  {
   "server": 30093,
   "family": "Sativa",
   "power": 104371516
  },
  {
   "server": 30093,
   "family": "Void",
   "power": 98747139
  },
  {
   "server": 30093,
   "family": "malaxeurdeburn",
   "power": 53593252
  },
  {
   "server": 30094,
   "family": "WARRIORS",
   "power": 1127175422
  },
  {
   "server": 30094,
   "family": "Divine",
   "power": 634908186
  },
  {
   "server": 30094,
   "family": "Munchers",
   "power": 374237374
  },
  {
   "server": 30094,
   "family": "DutchWarrior",
   "power": 175119719
  },
  {
   "server": 30094,
   "family": "ZINZINSPACE",
   "power": 172677920
  },
  {
   "server": 30094,
   "family": "Mugiwara",
   "power": 166103246
  },
  {
   "server": 30094,
   "family": "AlphaPack",
   "power": 151399896
  },
  {
   "server": 30094,
   "family": "GoldenEagle",
   "power": 84233145
  },
  {
   "server": 30094,
   "family": "moongarden",
   "power": 72144955
  },
  {
   "server": 30094,
   "family": "mushyboiss",
   "power": 65084696
  },
  {
   "server": 30095,
   "family": "ToxicFamily",
   "power": 956975467
  },
  {
   "server": 30095,
   "family": "TheLasTSaviorS",
   "power": 836145144
  },
  {
   "server": 30095,
   "family": "TheImmortals",
   "power": 265591470
  },
  {
   "server": 30095,
   "family": "ShroomFriends",
   "power": 234041827
  },
  {
   "server": 30095,
   "family": "SINNERS",
   "power": 198268788
  },
  {
   "server": 30095,
   "family": "younglaRats",
   "power": 187417004
  },
  {
   "server": 30095,
   "family": "BratiaSlovaci",
   "power": 170323598
  },
  {
   "server": 30095,
   "family": "WeedTM",
   "power": 108823042
  },
  {
   "server": 30095,
   "family": "Firmworm",
   "power": 101204717
  },
  {
   "server": 30095,
   "family": "the_enders",
   "power": 70996925
  },
  {
   "server": 30096,
   "family": "APE",
   "power": 1035684423
  },
  {
   "server": 30096,
   "family": "JustTheTip",
   "power": 697468787
  },
  {
   "server": 30096,
   "family": "crouwn",
   "power": 358160888
  },
  {
   "server": 30096,
   "family": "Mooshies",
   "power": 180165300
  },
  {
   "server": 30096,
   "family": "MushroomWars",
   "power": 165159339
  },
  {
   "server": 30096,
   "family": "charlizard",
   "power": 151514320
  },
  {
   "server": 30096,
   "family": "Gwardia",
   "power": 148473107
  },
  {
   "server": 30096,
   "family": "MushyMushroom",
   "power": 126332973
  },
  {
   "server": 30096,
   "family": "GoonShrooms",
   "power": 113620574
  },
  {
   "server": 30096,
   "family": "Breadbuns",
   "power": 78342215
  },
  {
   "server": 30097,
   "family": "DrunkenShrooms",
   "power": 1147172179
  },
  {
   "server": 30097,
   "family": "KILLASQUAD",
   "power": 368072936
  },
  {
   "server": 30097,
   "family": "BigBears",
   "power": 305177530
  },
  {
   "server": 30097,
   "family": "TheBest",
   "power": 192320413
  },
  {
   "server": 30097,
   "family": "Secret",
   "power": 186958347
  },
  {
   "server": 30097,
   "family": "Boisa",
   "power": 157619713
  },
  {
   "server": 30097,
   "family": "Grzibyyy",
   "power": 157259500
  },
  {
   "server": 30097,
   "family": "MushroomLegend",
   "power": 154634265
  },
  {
   "server": 30097,
   "family": "MushroomMercy",
   "power": 151758130
  },
  {
   "server": 30097,
   "family": "Champiñones",
   "power": 15749081
  },
  {
   "server": 30098,
   "family": "Legion",
   "power": 1249704720
  },
  {
   "server": 30098,
   "family": "LegionMane",
   "power": 722048603
  },
  {
   "server": 30098,
   "family": "HighOnMushroom",
   "power": 232239390
  },
  {
   "server": 30098,
   "family": "BeastSlayers",
   "power": 179943821
  },
  {
   "server": 30098,
   "family": "SAMARITANS",
   "power": 157593863
  },
  {
   "server": 30098,
   "family": "Mushrooms",
   "power": 156977702
  },
  {
   "server": 30098,
   "family": "moooshrooms",
   "power": 143093703
  },
  {
   "server": 30098,
   "family": "Danes",
   "power": 127597503
  },
  {
   "server": 30098,
   "family": "no",
   "power": 102545806
  },
  {
   "server": 30098,
   "family": "Finland",
   "power": 75114831
  },
  {
   "server": 30099,
   "family": "Pokémon",
   "power": 1215510926
  },
  {
   "server": 30099,
   "family": "PokéAcademy",
   "power": 676126196
  },
  {
   "server": 30099,
   "family": "CashDollaMoney",
   "power": 311936088
  },
  {
   "server": 30099,
   "family": "ShroomsShire",
   "power": 193240494
  },
  {
   "server": 30099,
   "family": "TroubleClub",
   "power": 187671378
  },
  {
   "server": 30099,
   "family": "DLJarmy",
   "power": 162129033
  },
  {
   "server": 30099,
   "family": "TinderForever",
   "power": 158455830
  },
  {
   "server": 30099,
   "family": "ShroomGang",
   "power": 132685179
  },
  {
   "server": 30099,
   "family": "symbiotic",
   "power": 126220431
  },
  {
   "server": 30099,
   "family": "MushROOM",
   "power": 79772313
  },
  {
   "server": 30100,
   "family": "BWC",
   "power": 1132077289
  },
  {
   "server": 30100,
   "family": "GoldenEagles",
   "power": 357619804
  },
  {
   "server": 30100,
   "family": "SpyXFamily",
   "power": 234377106
  },
  {
   "server": 30100,
   "family": "FireFist",
   "power": 162638004
  },
  {
   "server": 30100,
   "family": "megaverse",
   "power": 139964266
  },
  {
   "server": 30100,
   "family": "Gēñøçídē",
   "power": 122881687
  },
  {
   "server": 30100,
   "family": "OP",
   "power": 120417260
  },
  {
   "server": 30100,
   "family": "W○W○",
   "power": 70928293
  },
  {
   "server": 30100,
   "family": "Lamikov",
   "power": 30530893
  },
  {
   "server": 30100,
   "family": "BigBootyBitch",
   "power": 16056237
  },
  {
   "server": 30101,
   "family": "CHAOS",
   "power": 911295794
  },
  {
   "server": 30101,
   "family": "GoldGunz",
   "power": 887713837
  },
  {
   "server": 30101,
   "family": "Akatsuki",
   "power": 459340560
  },
  {
   "server": 30101,
   "family": "alright",
   "power": 159673967
  },
  {
   "server": 30101,
   "family": "SupaNicka",
   "power": 143827885
  },
  {
   "server": 30101,
   "family": "EinsNeun",
   "power": 127990905
  },
  {
   "server": 30101,
   "family": "Dummer_Hu",
   "power": 122773710
  },
  {
   "server": 30101,
   "family": "SinnerS",
   "power": 121559167
  },
  {
   "server": 30101,
   "family": "luznalelsi",
   "power": 121217126
  },
  {
   "server": 30101,
   "family": "Legacy",
   "power": 116740682
  },
  {
   "server": 30102,
   "family": "Spartans",
   "power": 932546852
  },
  {
   "server": 30102,
   "family": "Toadstool",
   "power": 926351651
  },
  {
   "server": 30102,
   "family": "Solo",
   "power": 366282742
  },
  {
   "server": 30102,
   "family": "familyfungi",
   "power": 162996696
  },
  {
   "server": 30102,
   "family": "GodShroom",
   "power": 143955664
  },
  {
   "server": 30102,
   "family": "Psyfamily",
   "power": 133281206
  },
  {
   "server": 30102,
   "family": "TheImmortals",
   "power": 131463504
  },
  {
   "server": 30102,
   "family": "BearlyShrooms",
   "power": 105831308
  },
  {
   "server": 30102,
   "family": "Griff",
   "power": 95970279
  },
  {
   "server": 30102,
   "family": "TheDestroyers",
   "power": 78714022
  },
  {
   "server": 30103,
   "family": "Celestials",
   "power": 903045645
  },
  {
   "server": 30103,
   "family": "Judgement",
   "power": 887572895
  },
  {
   "server": 30103,
   "family": "FACTION4",
   "power": 344764829
  },
  {
   "server": 30103,
   "family": "striker",
   "power": 159383149
  },
  {
   "server": 30103,
   "family": "WildCats",
   "power": 132122785
  },
  {
   "server": 30103,
   "family": "EL_MEU_OVO",
   "power": 132020749
  },
  {
   "server": 30103,
   "family": "Road2Glory",
   "power": 113259022
  },
  {
   "server": 30103,
   "family": "KINGDOMHEARTS",
   "power": 74472716
  },
  {
   "server": 30103,
   "family": "Hungary",
   "power": 73244762
  },
  {
   "server": 30103,
   "family": "poaahh",
   "power": 71383021
  },
  {
   "server": 30104,
   "family": "Dynasty",
   "power": 1091926773
  },
  {
   "server": 30104,
   "family": "Dreadnaughts",
   "power": 468573748
  },
  {
   "server": 30104,
   "family": "PROUD_MUSHROOM",
   "power": 146942682
  },
  {
   "server": 30104,
   "family": "Family",
   "power": 141677142
  },
  {
   "server": 30104,
   "family": "Mvp",
   "power": 137559343
  },
  {
   "server": 30104,
   "family": "10k_above",
   "power": 131835058
  },
  {
   "server": 30104,
   "family": "codegoofy",
   "power": 124415184
  },
  {
   "server": 30104,
   "family": "LDogs",
   "power": 120713923
  },
  {
   "server": 30104,
   "family": "R4CH",
   "power": 116421994
  },
  {
   "server": 30104,
   "family": "Gayboys",
   "power": 56475015
  },
  {
   "server": 30105,
   "family": "DoomShrooms",
   "power": 1090762268
  },
  {
   "server": 30105,
   "family": "Truth",
   "power": 542987833
  },
  {
   "server": 30105,
   "family": "Pantheon",
   "power": 319031327
  },
  {
   "server": 30105,
   "family": "NiceOnes",
   "power": 215224959
  },
  {
   "server": 30105,
   "family": "Warriors",
   "power": 149125034
  },
  {
   "server": 30105,
   "family": "Aimex",
   "power": 137304529
  },
  {
   "server": 30105,
   "family": "Therock",
   "power": 112818523
  },
  {
   "server": 30105,
   "family": "Legends",
   "power": 104163301
  },
  {
   "server": 30105,
   "family": "Itsuki",
   "power": 103499604
  },
  {
   "server": 30105,
   "family": "Phoenix",
   "power": 82022983
  },
  {
   "server": 30106,
   "family": "Utopia",
   "power": 1006681339
  },
  {
   "server": 30106,
   "family": "Verge",
   "power": 464655325
  },
  {
   "server": 30106,
   "family": "UnNainConnu",
   "power": 286389216
  },
  {
   "server": 30106,
   "family": "Orchid",
   "power": 179798716
  },
  {
   "server": 30106,
   "family": "Legends",
   "power": 165418792
  },
  {
   "server": 30106,
   "family": "Avengers",
   "power": 162402135
  },
  {
   "server": 30106,
   "family": "RedBull",
   "power": 150515232
  },
  {
   "server": 30106,
   "family": "Imperium",
   "power": 127464425
  },
  {
   "server": 30106,
   "family": "Coupains",
   "power": 111893965
  },
  {
   "server": 30106,
   "family": "4L0N3",
   "power": 67553081
  },
  {
   "server": 30107,
   "family": "Shroomies",
   "power": 1060843097
  },
  {
   "server": 30107,
   "family": "Valhalla",
   "power": 504270390
  },
  {
   "server": 30107,
   "family": "schroomunity",
   "power": 451987617
  },
  {
   "server": 30107,
   "family": "Sporetacular",
   "power": 192351167
  },
  {
   "server": 30107,
   "family": "Dragonball",
   "power": 181484898
  },
  {
   "server": 30107,
   "family": "ShroomArmy",
   "power": 156202273
  },
  {
   "server": 30107,
   "family": "Bagira",
   "power": 155177117
  },
  {
   "server": 30107,
   "family": "HaroldsAngels",
   "power": 137725423
  },
  {
   "server": 30107,
   "family": "Gusters",
   "power": 137089559
  },
  {
   "server": 30107,
   "family": "shroomies",
   "power": 136748552
  },
  {
   "server": 30108,
   "family": "Pokemon",
   "power": 855641576
  },
  {
   "server": 30108,
   "family": "WhiteLotus🪷",
   "power": 736154084
  },
  {
   "server": 30108,
   "family": "GourmetWorld",
   "power": 550437824
  },
  {
   "server": 30108,
   "family": "SteelTitans",
   "power": 160254573
  },
  {
   "server": 30108,
   "family": "Alfredo_Gang",
   "power": 148644067
  },
  {
   "server": 30108,
   "family": "OnlyLegends",
   "power": 140824972
  },
  {
   "server": 30108,
   "family": "Mushmellow",
   "power": 139600349
  },
  {
   "server": 30108,
   "family": "Just4Fun",
   "power": 135623679
  },
  {
   "server": 30108,
   "family": "DumSpiroSpero",
   "power": 124742138
  },
  {
   "server": 30108,
   "family": "Muchroomers",
   "power": 117667288
  },
  {
   "server": 30109,
   "family": "HevY_Hitters",
   "power": 961381357
  },
  {
   "server": 30109,
   "family": "KingDom",
   "power": 529982073
  },
  {
   "server": 30109,
   "family": "Panetina",
   "power": 345248812
  },
  {
   "server": 30109,
   "family": "Family",
   "power": 161031010
  },
  {
   "server": 30109,
   "family": "Dog",
   "power": 152245917
  },
  {
   "server": 30109,
   "family": "Hogwarts",
   "power": 146237935
  },
  {
   "server": 30109,
   "family": "alpachino",
   "power": 125620037
  },
  {
   "server": 30109,
   "family": "UAE",
   "power": 124965985
  },
  {
   "server": 30109,
   "family": "RAWR",
   "power": 105020269
  },
  {
   "server": 30109,
   "family": "Derp",
   "power": 98282889
  },
  {
   "server": 30110,
   "family": "Uchiha",
   "power": 894162848
  },
  {
   "server": 30110,
   "family": "Legends",
   "power": 586918559
  },
  {
   "server": 30110,
   "family": "shroomies",
   "power": 349965424
  },
  {
   "server": 30110,
   "family": "ApexLegends",
   "power": 153939016
  },
  {
   "server": 30110,
   "family": "GoldenShrooms",
   "power": 152216299
  },
  {
   "server": 30110,
   "family": "Smellygang",
   "power": 139857979
  },
  {
   "server": 30110,
   "family": "TrapHouse",
   "power": 131717855
  },
  {
   "server": 30110,
   "family": "no1",
   "power": 110204247
  },
  {
   "server": 30110,
   "family": "essence",
   "power": 83819585
  },
  {
   "server": 30110,
   "family": "ElShroom",
   "power": 75715516
  },
  {
   "server": 30111,
   "family": "NightRaid",
   "power": 866684482
  },
  {
   "server": 30111,
   "family": "ABC",
   "power": 653912759
  },
  {
   "server": 30111,
   "family": "bingus",
   "power": 338042546
  },
  {
   "server": 30111,
   "family": "OP",
   "power": 148521507
  },
  {
   "server": 30111,
   "family": "Vanguard",
   "power": 120251013
  },
  {
   "server": 30111,
   "family": "Vortex",
   "power": 95582674
  },
  {
   "server": 30111,
   "family": "pizzza",
   "power": 88498733
  },
  {
   "server": 30111,
   "family": "thespacyshroom",
   "power": 86982600
  },
  {
   "server": 30111,
   "family": "DARK",
   "power": 86300352
  },
  {
   "server": 30111,
   "family": "Danish_Hawks",
   "power": 80048996
  },
  {
   "server": 30112,
   "family": "Shroommates",
   "power": 795405091
  },
  {
   "server": 30112,
   "family": "OKIRO",
   "power": 441720350
  },
  {
   "server": 30112,
   "family": "TheChosenOnes",
   "power": 402532484
  },
  {
   "server": 30112,
   "family": "Immortals",
   "power": 120463467
  },
  {
   "server": 30112,
   "family": "Beardos",
   "power": 99774239
  },
  {
   "server": 30112,
   "family": "hanban",
   "power": 90102885
  },
  {
   "server": 30112,
   "family": "Bob",
   "power": 89690715
  },
  {
   "server": 30112,
   "family": "SmashRooms",
   "power": 86050718
  },
  {
   "server": 30112,
   "family": "Eclipse",
   "power": 78517517
  },
  {
   "server": 30112,
   "family": "Breadcrumbs",
   "power": 78431960
  },
  {
   "server": 30113,
   "family": "Mycelia",
   "power": 810809716
  },
  {
   "server": 30113,
   "family": "SaiyanBlood",
   "power": 494137596
  },
  {
   "server": 30113,
   "family": "polska",
   "power": 281462196
  },
  {
   "server": 30113,
   "family": "Masters",
   "power": 76726438
  },
  {
   "server": 30113,
   "family": "Aura",
   "power": 75491562
  },
  {
   "server": 30113,
   "family": "Supreme",
   "power": 74216511
  },
  {
   "server": 30113,
   "family": "Rotters",
   "power": 73886448
  },
  {
   "server": 30113,
   "family": "Pay2win",
   "power": 71980532
  },
  {
   "server": 30113,
   "family": "LezbeanCoffee",
   "power": 70206820
  },
  {
   "server": 30113,
   "family": "Distric",
   "power": 69809053
  },
  {
   "server": 30114,
   "family": "Hellshroom",
   "power": 791743716
  },
  {
   "server": 30114,
   "family": "FlowerFields",
   "power": 451635555
  },
  {
   "server": 30114,
   "family": "WARRIORS",
   "power": 162220440
  },
  {
   "server": 30114,
   "family": "europe",
   "power": 79455532
  },
  {
   "server": 30114,
   "family": "champions",
   "power": 71867371
  },
  {
   "server": 30114,
   "family": "beasts",
   "power": 71398688
  },
  {
   "server": 30114,
   "family": "LoveBunnyGirl",
   "power": 66729552
  },
  {
   "server": 30114,
   "family": "Bleach",
   "power": 64641640
  },
  {
   "server": 30114,
   "family": "Shadow",
   "power": 63513544
  },
  {
   "server": 30114,
   "family": "demons",
   "power": 59239333
  },
  {
   "server": 30116,
   "family": "OnlyLegends",
   "power": 729811937
  },
  {
   "server": 30116,
   "family": "THEGODZ",
   "power": 221018386
  },
  {
   "server": 30116,
   "family": "DeathSquad",
   "power": 137640651
  },
  {
   "server": 30116,
   "family": "Hazbin",
   "power": 0
  },
  {
   "server": 30116,
   "family": "MushMush",
   "power": 0
  },
  {
   "server": 30116,
   "family": "schrammleber",
   "power": 0
  },
  {
   "server": 30116,
   "family": "Sapphire",
   "power": 0
  },
  {
   "server": 30116,
   "family": "LogHorizon",
   "power": 0
  },
  {
   "server": 30116,
   "family": "Finland",
   "power": 0
  },
  {
   "server": 30116,
   "family": "biruliandia",
   "power": 0
  },
  {
   "server": 30117,
   "family": "RoyalKings",
   "power": 183101611
  },
  {
   "server": 30117,
   "family": "Top",
   "power": 144867014
  },
  {
   "server": 30117,
   "family": "ForTheHorde",
   "power": 1457149
  },
  {
   "server": 30117,
   "family": "ANC",
   "power": 0
  },
  {
   "server": 30117,
   "family": "KongFamily",
   "power": 0
  },
  {
   "server": 30117,
   "family": "Shroomish",
   "power": 0
  },
  {
   "server": 30117,
   "family": "Overgeared",
   "power": 0
  },
  {
   "server": 30117,
   "family": "Violence",
   "power": 0
  },
  {
   "server": 30117,
   "family": "coolgang",
   "power": 0
  },
  {
   "server": 30117,
   "family": "BUBLIK_ARMY",
   "power": 0
  },
  {
   "server": 30118,
   "family": "Buubs",
   "power": 256794510
  },
  {
   "server": 30118,
   "family": "OP",
   "power": 237842182
  },
  {
   "server": 30118,
   "family": "Разгильдяи",
   "power": 157996706
  },
  {
   "server": 30118,
   "family": "Pokémon",
   "power": 0
  },
  {
   "server": 30118,
   "family": "Buddy",
   "power": 0
  },
  {
   "server": 30118,
   "family": "Mirnye",
   "power": 0
  },
  {
   "server": 30118,
   "family": "GrooveKnights",
   "power": 0
  },
  {
   "server": 30118,
   "family": "ToustuvKlubik",
   "power": 0
  },
  {
   "server": 30118,
   "family": "Murium",
   "power": 0
  },
  {
   "server": 30118,
   "family": "team_Kakashi",
   "power": 0
  },
  {
   "server": 30119,
   "family": "VietNam",
   "power": 133621429
  },
  {
   "server": 30119,
   "family": "OP",
   "power": 123218275
  },
  {
   "server": 30119,
   "family": "shroomies4life",
   "power": 105076984
  },
  {
   "server": 30119,
   "family": "PPP",
   "power": 0
  },
  {
   "server": 30119,
   "family": "sinners",
   "power": 0
  },
  {
   "server": 30119,
   "family": "KABOOM",
   "power": 0
  },
  {
   "server": 30119,
   "family": "ODIN",
   "power": 0
  },
  {
   "server": 30119,
   "family": "Cloud9",
   "power": 0
  },
  {
   "server": 30119,
   "family": "Azura",
   "power": 0
  },
  {
   "server": 30119,
   "family": "LGBT",
   "power": 0
  },
  {
   "server": 30120,
   "family": "CrawfordClan",
   "power": 612959106
  },
  {
   "server": 30120,
   "family": "Pepe",
   "power": 388285526
  },
  {
   "server": 30120,
   "family": "shroomers",
   "power": 146555567
  },
  {
   "server": 30120,
   "family": "SIGMAS",
   "power": 0
  },
  {
   "server": 30120,
   "family": "mashs",
   "power": 0
  },
  {
   "server": 30120,
   "family": "CHEESEFAM",
   "power": 0
  },
  {
   "server": 30120,
   "family": "Bekeszigetek",
   "power": 0
  },
  {
   "server": 30120,
   "family": "Sebsfat",
   "power": 0
  },
  {
   "server": 30120,
   "family": "Yorkshire",
   "power": 0
  },
  {
   "server": 30120,
   "family": "bawbag",
   "power": 0
  },
  {
   "server": 30121,
   "family": "ShroomTogether",
   "power": 517402289
  },
  {
   "server": 30121,
   "family": "Warriors",
   "power": 192614625
  },
  {
   "server": 30121,
   "family": "Psychedelic",
   "power": 185155532
  },
  {
   "server": 30121,
   "family": "Mooshroom",
   "power": 0
  },
  {
   "server": 30121,
   "family": "InvictusOrder",
   "power": 0
  },
  {
   "server": 30121,
   "family": "SoloLeveling",
   "power": 0
  },
  {
   "server": 30121,
   "family": "Constellation",
   "power": 0
  },
  {
   "server": 30121,
   "family": "BlackClover",
   "power": 0
  },
  {
   "server": 30121,
   "family": "BZHT",
   "power": 0
  },
  {
   "server": 30121,
   "family": "TheHitmen",
   "power": 0
  },
  {
   "server": 30125,
   "family": "GoldenWarriors",
   "power": 315696913
  },
  {
   "server": 30125,
   "family": "Shroomiggas",
   "power": 131221503
  },
  {
   "server": 30125,
   "family": "BestInTheWrld",
   "power": 4968665
  },
  {
   "server": 30125,
   "family": "𝓒𝓔𝓞̈",
   "power": 0
  },
  {
   "server": 30125,
   "family": "Shroomshroom",
   "power": 0
  },
  {
   "server": 30125,
   "family": "Narkomani",
   "power": 0
  },
  {
   "server": 30125,
   "family": "shroomsoup",
   "power": 0
  },
  {
   "server": 30125,
   "family": "Beginners",
   "power": 0
  },
  {
   "server": 30125,
   "family": "RadiantX",
   "power": 0
  },
  {
   "server": 30125,
   "family": "EYESCLOSED",
   "power": 0
  },
  {
   "server": 30126,
   "family": "Legends",
   "power": 212024115
  },
  {
   "server": 30126,
   "family": "KING",
   "power": 95054151
  },
  {
   "server": 30126,
   "family": "FOOTBALL",
   "power": 59332509
  },
  {
   "server": 30126,
   "family": "drilla",
   "power": 0
  },
  {
   "server": 30126,
   "family": "MysticForces",
   "power": 0
  },
  {
   "server": 30126,
   "family": "ThePurSmurfFam",
   "power": 0
  },
  {
   "server": 30126,
   "family": "BasementCrew",
   "power": 0
  },
  {
   "server": 30126,
   "family": "ShroomFamily",
   "power": 0
  },
  {
   "server": 30126,
   "family": "boys91169420",
   "power": 0
  },
  {
   "server": 30126,
   "family": "AFK",
   "power": 0
  },
  {
   "server": 30127,
   "family": "IMPERIYA",
   "power": 88058660
  },
  {
   "server": 30127,
   "family": "TheRivals",
   "power": 61951028
  },
  {
   "server": 30127,
   "family": "perhe",
   "power": 47023728
  },
  {
   "server": 30127,
   "family": "CatLowe",
   "power": 0
  },
  {
   "server": 30127,
   "family": "CelticBhoys",
   "power": 0
  },
  {
   "server": 30127,
   "family": "Anon",
   "power": 0
  },
  {
   "server": 30127,
   "family": "OnlyTheBest",
   "power": 0
  },
  {
   "server": 30127,
   "family": "Celestia",
   "power": 0
  },
  {
   "server": 30127,
   "family": "gaybois",
   "power": 0
  },
  {
   "server": 30127,
   "family": "Syncora",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Manul",
   "power": 3680090
  },
  {
   "server": 30128,
   "family": "BeepBoop",
   "power": 1158086
  },
  {
   "server": 30128,
   "family": "Veterans",
   "power": 767589
  },
  {
   "server": 30128,
   "family": "Shroomies",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Greatest",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Strongest",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Cloud9",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Espada",
   "power": 0
  },
  {
   "server": 30128,
   "family": "LaMiaColonia",
   "power": 0
  },
  {
   "server": 30128,
   "family": "Groovyshroomie",
   "power": 0
  },
  {
   "server": 30129,
   "family": "IMMORTALS",
   "power": 61868718
  },
  {
   "server": 30129,
   "family": "BUBIDA",
   "power": 29291423
  },
  {
   "server": 30129,
   "family": "Elite",
   "power": 24840769
  },
  {
   "server": 30129,
   "family": "Mushroom",
   "power": 0
  },
  {
   "server": 30129,
   "family": "YOLO",
   "power": 0
  },
  {
   "server": 30129,
   "family": "Lithuania",
   "power": 0
  },
  {
   "server": 30129,
   "family": "Top1Hunter",
   "power": 0
  },
  {
   "server": 30129,
   "family": "WarriorsForeve",
   "power": 0
  },
  {
   "server": 30129,
   "family": "DEUTSCHLAND",
   "power": 0
  },
  {
   "server": 30129,
   "family": "Thepros",
   "power": 0
  },
  {
   "server": 33001,
   "family": "EQUILIBRIUM",
   "power": 1986811964
  },
  {
   "server": 33001,
   "family": "MagicMushrooms",
   "power": 1958181839
  },
  {
   "server": 33001,
   "family": "LesTruffles",
   "power": 1849968122
  },
  {
   "server": 33001,
   "family": "PilzBunker",
   "power": 1559215287
  },
  {
   "server": 33001,
   "family": "TheOriginals",
   "power": 1463379330
  },
  {
   "server": 33001,
   "family": "Overlord",
   "power": 1154724830
  },
  {
   "server": 33001,
   "family": "Germany",
   "power": 750652530
  },
  {
   "server": 33001,
   "family": "TheMushrooms",
   "power": 686833840
  },
  {
   "server": 33001,
   "family": "Azuris",
   "power": 483208895
  },
  {
   "server": 33001,
   "family": "Sakrileg",
   "power": 369365466
  },
  {
   "server": 33002,
   "family": "Endgame",
   "power": 2254053772
  },
  {
   "server": 33002,
   "family": "Nameless",
   "power": 1819676252
  },
  {
   "server": 33002,
   "family": "germansektion",
   "power": 1517774615
  },
  {
   "server": 33002,
   "family": "OdinS_Army",
   "power": 1321397512
  },
  {
   "server": 33002,
   "family": "GerMushMasters",
   "power": 1084583994
  },
  {
   "server": 33002,
   "family": "GermanElite",
   "power": 1037021723
  },
  {
   "server": 33002,
   "family": "Germanfighter",
   "power": 346730429
  },
  {
   "server": 33002,
   "family": "Darksouls",
   "power": 291716905
  },
  {
   "server": 33002,
   "family": "MonsterPilze",
   "power": 288222321
  },
  {
   "server": 33002,
   "family": "DeutschePilze",
   "power": 269167326
  },
  {
   "server": 33003,
   "family": "Intimpilze",
   "power": 2309253911
  },
  {
   "server": 33003,
   "family": "Demons",
   "power": 1878589718
  },
  {
   "server": 33003,
   "family": "APShroomies",
   "power": 1334369157
  },
  {
   "server": 33003,
   "family": "Tempest",
   "power": 824170504
  },
  {
   "server": 33003,
   "family": "Warriors",
   "power": 762600963
  },
  {
   "server": 33003,
   "family": "Frostwölfe",
   "power": 659613341
  },
  {
   "server": 33003,
   "family": "Deutschland",
   "power": 474205683
  },
  {
   "server": 33003,
   "family": "Pilzrisotto",
   "power": 422072655
  },
  {
   "server": 33003,
   "family": "DiePilzkrieger",
   "power": 395056672
  },
  {
   "server": 33003,
   "family": "GermanClan",
   "power": 323012522
  },
  {
   "server": 33004,
   "family": "Psychadelics",
   "power": 2037126177
  },
  {
   "server": 33004,
   "family": "༺GERMANEN༻",
   "power": 1970250382
  },
  {
   "server": 33004,
   "family": "༺eternal༻",
   "power": 1230351766
  },
  {
   "server": 33004,
   "family": "Irrenhaus",
   "power": 1137793246
  },
  {
   "server": 33004,
   "family": "PsychasSP",
   "power": 1132710688
  },
  {
   "server": 33004,
   "family": "Pilzkrieger",
   "power": 544750687
  },
  {
   "server": 33004,
   "family": "ScheidenPilz",
   "power": 524787252
  },
  {
   "server": 33004,
   "family": "Legends",
   "power": 327036695
  },
  {
   "server": 33004,
   "family": "Destroyers",
   "power": 297930184
  },
  {
   "server": 33004,
   "family": "Germany",
   "power": 173796401
  },
  {
   "server": 33005,
   "family": "Sporentrupp",
   "power": 1944333046
  },
  {
   "server": 33005,
   "family": "Pilzkrieger",
   "power": 1877405979
  },
  {
   "server": 33005,
   "family": "Pandora",
   "power": 1743925343
  },
  {
   "server": 33005,
   "family": "F23squad",
   "power": 620190646
  },
  {
   "server": 33005,
   "family": "Mushroom",
   "power": 571388808
  },
  {
   "server": 33005,
   "family": "HoneyWeed",
   "power": 463307413
  },
  {
   "server": 33005,
   "family": "Wiederkehrer",
   "power": 379010159
  },
  {
   "server": 33005,
   "family": "GermanMafia",
   "power": 366667454
  },
  {
   "server": 33005,
   "family": "Deutschland",
   "power": 324697552
  },
  {
   "server": 33005,
   "family": "BlackKnights",
   "power": 276657671
  },
  {
   "server": 33006,
   "family": "Germanyx",
   "power": 2232471242
  },
  {
   "server": 33006,
   "family": "Deutschland",
   "power": 1236775476
  },
  {
   "server": 33006,
   "family": "VALHALLA",
   "power": 1115624682
  },
  {
   "server": 33006,
   "family": "Dr3ams",
   "power": 1102081227
  },
  {
   "server": 33006,
   "family": "Pilzköpfe",
   "power": 619149887
  },
  {
   "server": 33006,
   "family": "GermanUnited",
   "power": 348311174
  },
  {
   "server": 33006,
   "family": "DönerBierchen",
   "power": 332292309
  },
  {
   "server": 33006,
   "family": "HarrySchnotter",
   "power": 282050720
  },
  {
   "server": 33006,
   "family": "TheFirstClan",
   "power": 271958127
  },
  {
   "server": 33006,
   "family": "Germans",
   "power": 266539221
  },
  {
   "server": 33007,
   "family": "GermanKnights",
   "power": 1934521663
  },
  {
   "server": 33007,
   "family": "Legends",
   "power": 1803204686
  },
  {
   "server": 33007,
   "family": "7DeadlySins",
   "power": 1569133529
  },
  {
   "server": 33007,
   "family": "Wildschweinhut",
   "power": 692585824
  },
  {
   "server": 33007,
   "family": "GermanKnights2",
   "power": 531174602
  },
  {
   "server": 33007,
   "family": "Arise",
   "power": 347965659
  },
  {
   "server": 33007,
   "family": "BubatzBande",
   "power": 336966446
  },
  {
   "server": 33007,
   "family": "CELESTIAL",
   "power": 280966539
  },
  {
   "server": 33007,
   "family": "Atombruder",
   "power": 246940410
  },
  {
   "server": 33007,
   "family": "HyruleKrieger",
   "power": 131731428
  },
  {
   "server": 33008,
   "family": "Dragonborn",
   "power": 2130784864
  },
  {
   "server": 33008,
   "family": "GlücksPilze",
   "power": 1628490572
  },
  {
   "server": 33008,
   "family": "Toads",
   "power": 1307988986
  },
  {
   "server": 33008,
   "family": "Horde",
   "power": 509930546
  },
  {
   "server": 33008,
   "family": "Anime",
   "power": 445406913
  },
  {
   "server": 33008,
   "family": "DiePilze",
   "power": 364949634
  },
  {
   "server": 33008,
   "family": "MagicMushroom",
   "power": 356944553
  },
  {
   "server": 33008,
   "family": "StrohhutPilze",
   "power": 332207686
  },
  {
   "server": 33008,
   "family": "GermanMushroom",
   "power": 248703272
  },
  {
   "server": 33008,
   "family": "Pilzkrieger",
   "power": 213665995
  },
  {
   "server": 33009,
   "family": "OnePiece",
   "power": 1991812224
  },
  {
   "server": 33009,
   "family": "Killerpilze",
   "power": 1519224389
  },
  {
   "server": 33009,
   "family": "TrueSlimes",
   "power": 1342277134
  },
  {
   "server": 33009,
   "family": "Pilzbefall",
   "power": 849004708
  },
  {
   "server": 33009,
   "family": "Killerpilzchen",
   "power": 510715365
  },
  {
   "server": 33009,
   "family": "Schattenwölfe",
   "power": 322685147
  },
  {
   "server": 33009,
   "family": "Shadow_pilze",
   "power": 317162958
  },
  {
   "server": 33009,
   "family": "DämonenPilze",
   "power": 291268852
  },
  {
   "server": 33009,
   "family": "FariyGer",
   "power": 287851174
  },
  {
   "server": 33009,
   "family": "Brokkoli",
   "power": 275895295
  },
  {
   "server": 33010,
   "family": "STROHHUTBANDE",
   "power": 1759795610
  },
  {
   "server": 33010,
   "family": "SoloLeveling",
   "power": 1633681945
  },
  {
   "server": 33010,
   "family": "Shinigamis",
   "power": 1179796236
  },
  {
   "server": 33010,
   "family": "Anime",
   "power": 1063611591
  },
  {
   "server": 33010,
   "family": "Gauklerpilze",
   "power": 330900907
  },
  {
   "server": 33010,
   "family": "einfachnurso",
   "power": 257299302
  },
  {
   "server": 33010,
   "family": "Darkness",
   "power": 246237545
  },
  {
   "server": 33010,
   "family": "Vollhonkz",
   "power": 197374356
  },
  {
   "server": 33010,
   "family": "BlubBlubBande",
   "power": 182608946
  },
  {
   "server": 33010,
   "family": "Hölle",
   "power": 155436695
  },
  {
   "server": 33011,
   "family": "Extravagant",
   "power": 1914149470
  },
  {
   "server": 33011,
   "family": "꧁PHÖNIX꧂",
   "power": 1658723924
  },
  {
   "server": 33011,
   "family": "BlackRoses",
   "power": 749096837
  },
  {
   "server": 33011,
   "family": "Akatsuki",
   "power": 501224715
  },
  {
   "server": 33011,
   "family": "FairyTail",
   "power": 426798537
  },
  {
   "server": 33011,
   "family": "ONEPUNCHMAN",
   "power": 198407963
  },
  {
   "server": 33011,
   "family": "Die_Deutschen",
   "power": 197953067
  },
  {
   "server": 33011,
   "family": "DieWölfe",
   "power": 190831297
  },
  {
   "server": 33011,
   "family": "StrawHats",
   "power": 181808234
  },
  {
   "server": 33011,
   "family": "Phönix_II",
   "power": 180589016
  },
  {
   "server": 33012,
   "family": "OnlyShrooms",
   "power": 1771379569
  },
  {
   "server": 33012,
   "family": "_ALPHA_",
   "power": 1417393681
  },
  {
   "server": 33012,
   "family": "Trödeltrupp",
   "power": 1309194688
  },
  {
   "server": 33012,
   "family": "TeamKugelblitz",
   "power": 605148445
  },
  {
   "server": 33012,
   "family": "Mushrooms",
   "power": 555245674
  },
  {
   "server": 33012,
   "family": "road2rank1",
   "power": 468775003
  },
  {
   "server": 33012,
   "family": "Strohhutbande",
   "power": 221348676
  },
  {
   "server": 33012,
   "family": "AffenMitWaffen",
   "power": 139596490
  },
  {
   "server": 33012,
   "family": "SporeComrades",
   "power": 117865293
  },
  {
   "server": 33012,
   "family": "Legacy",
   "power": 93057641
  },
  {
   "server": 33013,
   "family": "NoxusDE",
   "power": 1611063168
  },
  {
   "server": 33013,
   "family": "Tonnenschwer",
   "power": 1542174127
  },
  {
   "server": 33013,
   "family": "Pilzfamilie",
   "power": 625458773
  },
  {
   "server": 33013,
   "family": "RŌNIN",
   "power": 585015135
  },
  {
   "server": 33013,
   "family": "MapleStory",
   "power": 509141238
  },
  {
   "server": 33013,
   "family": "InDieBiotonne",
   "power": 419113045
  },
  {
   "server": 33013,
   "family": "GermanLegends",
   "power": 411188966
  },
  {
   "server": 33013,
   "family": "NRW_COLOGNE",
   "power": 248011019
  },
  {
   "server": 33013,
   "family": "Allianz",
   "power": 239164171
  },
  {
   "server": 33013,
   "family": "DieDeutschen",
   "power": 211667563
  },
  {
   "server": 33014,
   "family": "LastLegion",
   "power": 1937721728
  },
  {
   "server": 33014,
   "family": "Shadowgarden",
   "power": 1280323334
  },
  {
   "server": 33014,
   "family": "Overlords",
   "power": 784658618
  },
  {
   "server": 33014,
   "family": "CozyGaming",
   "power": 575664559
  },
  {
   "server": 33014,
   "family": "Drachengruft",
   "power": 467202463
  },
  {
   "server": 33014,
   "family": "PeachesLakaien",
   "power": 241625780
  },
  {
   "server": 33014,
   "family": "BernOstkurve",
   "power": 220454184
  },
  {
   "server": 33014,
   "family": "chiwauwaus",
   "power": 193392489
  },
  {
   "server": 33014,
   "family": "GerShroomheads",
   "power": 175055379
  },
  {
   "server": 33014,
   "family": "Knecht",
   "power": 166630932
  },
  {
   "server": 33015,
   "family": "YD",
   "power": 2122197445
  },
  {
   "server": 33015,
   "family": "YSL",
   "power": 664276281
  },
  {
   "server": 33015,
   "family": "MagicMushrooms",
   "power": 627865859
  },
  {
   "server": 33015,
   "family": "Pilzsuppe",
   "power": 571708251
  },
  {
   "server": 33015,
   "family": "HomeSweetHome",
   "power": 512903928
  },
  {
   "server": 33015,
   "family": "sixtynine",
   "power": 386224028
  },
  {
   "server": 33015,
   "family": "Gnadenlos",
   "power": 182099932
  },
  {
   "server": 33015,
   "family": "Sturmmäntel",
   "power": 147135475
  },
  {
   "server": 33015,
   "family": "Pilzparadies",
   "power": 123303300
  },
  {
   "server": 33015,
   "family": "Phönix",
   "power": 90780544
  },
  {
   "server": 33016,
   "family": "DemonSlayer",
   "power": 1970707223
  },
  {
   "server": 33016,
   "family": "Celestial",
   "power": 996048026
  },
  {
   "server": 33016,
   "family": "UniteDPower",
   "power": 438299451
  },
  {
   "server": 33016,
   "family": "GerRebelle",
   "power": 416413450
  },
  {
   "server": 33016,
   "family": "german",
   "power": 308106450
  },
  {
   "server": 33016,
   "family": "ThePapes",
   "power": 251555515
  },
  {
   "server": 33016,
   "family": "German2",
   "power": 245100034
  },
  {
   "server": 33016,
   "family": "Lakuzars",
   "power": 228972464
  },
  {
   "server": 33016,
   "family": "Gewinner",
   "power": 152362168
  },
  {
   "server": 33016,
   "family": "Nazarick",
   "power": 135201090
  },
  {
   "server": 33017,
   "family": "HöllenPilze",
   "power": 1713430246
  },
  {
   "server": 33017,
   "family": "ToadsMinions",
   "power": 979759874
  },
  {
   "server": 33017,
   "family": "GermanClan",
   "power": 538357312
  },
  {
   "server": 33017,
   "family": "FallenShrooms",
   "power": 378479882
  },
  {
   "server": 33017,
   "family": "Schadow",
   "power": 319618754
  },
  {
   "server": 33017,
   "family": "Deutschland",
   "power": 241629972
  },
  {
   "server": 33017,
   "family": "DieKatzen",
   "power": 168679815
  },
  {
   "server": 33017,
   "family": "spoky",
   "power": 144325286
  },
  {
   "server": 33017,
   "family": "SilverCoin",
   "power": 55632869
  },
  {
   "server": 33017,
   "family": "Fürfortnite",
   "power": 53580917
  },
  {
   "server": 33018,
   "family": "Pilzhutbande",
   "power": 1808602063
  },
  {
   "server": 33018,
   "family": "OverHeaven",
   "power": 737459234
  },
  {
   "server": 33018,
   "family": "Parsec",
   "power": 694381560
  },
  {
   "server": 33018,
   "family": "Schattenpilze",
   "power": 498156795
  },
  {
   "server": 33018,
   "family": "Rasselbande",
   "power": 314368086
  },
  {
   "server": 33018,
   "family": "Die_Giftzwerge",
   "power": 272784286
  },
  {
   "server": 33018,
   "family": "Void",
   "power": 171609999
  },
  {
   "server": 33018,
   "family": "PilzHorde",
   "power": 145824323
  },
  {
   "server": 33018,
   "family": "Pilzpfanne",
   "power": 98466524
  },
  {
   "server": 33018,
   "family": "Kellerkinder",
   "power": 95373185
  },
  {
   "server": 33019,
   "family": "Akatsuki",
   "power": 1698493955
  },
  {
   "server": 33019,
   "family": "Yggdrasil",
   "power": 1290026414
  },
  {
   "server": 33019,
   "family": "Trüffeltrupp",
   "power": 1188936362
  },
  {
   "server": 33019,
   "family": "Germany",
   "power": 376005501
  },
  {
   "server": 33019,
   "family": "GermanCocks",
   "power": 373488846
  },
  {
   "server": 33019,
   "family": "TheFariway",
   "power": 310064791
  },
  {
   "server": 33019,
   "family": "TeamGermany",
   "power": 172793858
  },
  {
   "server": 33019,
   "family": "DieElite",
   "power": 127265085
  },
  {
   "server": 33019,
   "family": "Warriors",
   "power": 126952661
  },
  {
   "server": 33019,
   "family": "GermanMasters",
   "power": 79467858
  },
  {
   "server": 33020,
   "family": "Endtime",
   "power": 1807137489
  },
  {
   "server": 33020,
   "family": "WurstBude",
   "power": 1593417124
  },
  {
   "server": 33020,
   "family": "ONEPIECE",
   "power": 562335925
  },
  {
   "server": 33020,
   "family": "AwayFromKills",
   "power": 289275929
  },
  {
   "server": 33020,
   "family": "DeutscherPilz",
   "power": 279978196
  },
  {
   "server": 33020,
   "family": "Pilzfarm",
   "power": 270019886
  },
  {
   "server": 33020,
   "family": "kumalogia",
   "power": 223947406
  },
  {
   "server": 33020,
   "family": "Deutschland",
   "power": 219900835
  },
  {
   "server": 33020,
   "family": "nixda",
   "power": 217728523
  },
  {
   "server": 33020,
   "family": "S0ND3RSCHUL3",
   "power": 160472003
  },
  {
   "server": 33021,
   "family": "ZOO",
   "power": 1944198618
  },
  {
   "server": 33021,
   "family": "Fliegenpilz",
   "power": 979073093
  },
  {
   "server": 33021,
   "family": "Baddest",
   "power": 419035788
  },
  {
   "server": 33021,
   "family": "HappyGuild",
   "power": 388660865
  },
  {
   "server": 33021,
   "family": "HartzIVTreff",
   "power": 363804416
  },
  {
   "server": 33021,
   "family": "Zauberpilzli",
   "power": 359792070
  },
  {
   "server": 33021,
   "family": "Deutschland",
   "power": 290092628
  },
  {
   "server": 33021,
   "family": "DieBesten",
   "power": 266497832
  },
  {
   "server": 33021,
   "family": "Fuchs",
   "power": 128479326
  },
  {
   "server": 33021,
   "family": "HighOnShroom",
   "power": 106400846
  },
  {
   "server": 33022,
   "family": "Legion",
   "power": 1915255570
  },
  {
   "server": 33022,
   "family": "Pilzbande",
   "power": 885864301
  },
  {
   "server": 33022,
   "family": "FairyTail",
   "power": 637115662
  },
  {
   "server": 33022,
   "family": "Germans",
   "power": 370029360
  },
  {
   "server": 33022,
   "family": "TrashGamehunt",
   "power": 337783017
  },
  {
   "server": 33022,
   "family": "Futtermampf",
   "power": 191280308
  },
  {
   "server": 33022,
   "family": "HARDCOREGABBER",
   "power": 169801151
  },
  {
   "server": 33022,
   "family": "RaynationDE",
   "power": 130433363
  },
  {
   "server": 33022,
   "family": "DiePilze_XD",
   "power": 126216068
  },
  {
   "server": 33022,
   "family": "GermanWolves",
   "power": 123491000
  },
  {
   "server": 33023,
   "family": "ŚªLtHøUśË",
   "power": 1801804060
  },
  {
   "server": 33023,
   "family": "Uchiha",
   "power": 1349127486
  },
  {
   "server": 33023,
   "family": "Sumeru",
   "power": 926679856
  },
  {
   "server": 33023,
   "family": "The_Mushrooms",
   "power": 340243771
  },
  {
   "server": 33023,
   "family": "German",
   "power": 321851035
  },
  {
   "server": 33023,
   "family": "INVICTUS",
   "power": 300314291
  },
  {
   "server": 33023,
   "family": "Anonymous",
   "power": 243531049
  },
  {
   "server": 33023,
   "family": "Walhalla",
   "power": 228837435
  },
  {
   "server": 33023,
   "family": "Germany",
   "power": 116053127
  },
  {
   "server": 33023,
   "family": "Yakuza",
   "power": 39162816
  },
  {
   "server": 33024,
   "family": "Disney",
   "power": 1715296762
  },
  {
   "server": 33024,
   "family": "GetRekt",
   "power": 1432218406
  },
  {
   "server": 33024,
   "family": "GermanHeros",
   "power": 418066318
  },
  {
   "server": 33024,
   "family": "xXPilzköppeXx",
   "power": 410639045
  },
  {
   "server": 33024,
   "family": "Pilz",
   "power": 406150103
  },
  {
   "server": 33024,
   "family": "Dragonfly",
   "power": 405655486
  },
  {
   "server": 33024,
   "family": "DGT",
   "power": 302702991
  },
  {
   "server": 33024,
   "family": "GermanKings",
   "power": 225628755
  },
  {
   "server": 33024,
   "family": "Babypopo",
   "power": 123465324
  },
  {
   "server": 33024,
   "family": "BacktoBack",
   "power": 92141369
  },
  {
   "server": 33025,
   "family": "Lost",
   "power": 1733856115
  },
  {
   "server": 33025,
   "family": "Buschmatratzen",
   "power": 1104392232
  },
  {
   "server": 33025,
   "family": "BloodLords",
   "power": 477186287
  },
  {
   "server": 33025,
   "family": "Phoenix",
   "power": 421515689
  },
  {
   "server": 33025,
   "family": "Holzhausen",
   "power": 368870137
  },
  {
   "server": 33025,
   "family": "Finanzamt",
   "power": 306939438
  },
  {
   "server": 33025,
   "family": "MADknights",
   "power": 253521684
  },
  {
   "server": 33025,
   "family": "Wunderland",
   "power": 153858046
  },
  {
   "server": 33025,
   "family": "GermanWolf",
   "power": 153398944
  },
  {
   "server": 33025,
   "family": "SwordArtOnline",
   "power": 138017565
  },
  {
   "server": 33026,
   "family": "Nemesis",
   "power": 1797018891
  },
  {
   "server": 33026,
   "family": "TheChosenOnes",
   "power": 1736093538
  },
  {
   "server": 33026,
   "family": "Nightmare",
   "power": 957167187
  },
  {
   "server": 33026,
   "family": "MetaNemesis",
   "power": 478064523
  },
  {
   "server": 33026,
   "family": "Bruderschaft",
   "power": 360787931
  },
  {
   "server": 33026,
   "family": "MugiWara",
   "power": 310093707
  },
  {
   "server": 33026,
   "family": "Eagles",
   "power": 226973945
  },
  {
   "server": 33026,
   "family": "Berlin",
   "power": 214635199
  },
  {
   "server": 33026,
   "family": "Kampfmacht",
   "power": 71214191
  },
  {
   "server": 33026,
   "family": "SLS",
   "power": 51791866
  },
  {
   "server": 33027,
   "family": "Mushroomworld",
   "power": 1759149995
  },
  {
   "server": 33027,
   "family": "Pilzjäger",
   "power": 1412077391
  },
  {
   "server": 33027,
   "family": "MagicMushrooms",
   "power": 620342321
  },
  {
   "server": 33027,
   "family": "Awakening",
   "power": 338636575
  },
  {
   "server": 33027,
   "family": "mausis",
   "power": 316923548
  },
  {
   "server": 33027,
   "family": "CooleMistis",
   "power": 307068420
  },
  {
   "server": 33027,
   "family": "LegendGER",
   "power": 265668088
  },
  {
   "server": 33027,
   "family": "PilzChaos",
   "power": 243197889
  },
  {
   "server": 33027,
   "family": "Toxic",
   "power": 237203150
  },
  {
   "server": 33027,
   "family": "IdkBinDeutsch",
   "power": 236789734
  },
  {
   "server": 33028,
   "family": "MagicMushis",
   "power": 1957584783
  },
  {
   "server": 33028,
   "family": "DieBesten",
   "power": 913561571
  },
  {
   "server": 33028,
   "family": "UmpaLumpas",
   "power": 703579321
  },
  {
   "server": 33028,
   "family": "AnimeGuild",
   "power": 440423816
  },
  {
   "server": 33028,
   "family": "SoloLeveling",
   "power": 390675946
  },
  {
   "server": 33028,
   "family": "fitre",
   "power": 323798725
  },
  {
   "server": 33028,
   "family": "BerlinerBären",
   "power": 303938269
  },
  {
   "server": 33028,
   "family": "Pilzhutbande",
   "power": 285963357
  },
  {
   "server": 33028,
   "family": "SonsOfAnarchy",
   "power": 208658954
  },
  {
   "server": 33028,
   "family": "DreamTeam",
   "power": 131095297
  },
  {
   "server": 33029,
   "family": "Legends",
   "power": 1884923806
  },
  {
   "server": 33029,
   "family": "United",
   "power": 749725119
  },
  {
   "server": 33029,
   "family": "DeutscheCrew",
   "power": 684372735
  },
  {
   "server": 33029,
   "family": "Blackout",
   "power": 471417083
  },
  {
   "server": 33029,
   "family": "GermanVictory",
   "power": 405539751
  },
  {
   "server": 33029,
   "family": "mushroomsins",
   "power": 374411331
  },
  {
   "server": 33029,
   "family": "German",
   "power": 319747175
  },
  {
   "server": 33029,
   "family": "LostGermany",
   "power": 303488535
  },
  {
   "server": 33029,
   "family": "Fische",
   "power": 226819306
  },
  {
   "server": 33029,
   "family": "GermanElite",
   "power": 201911172
  },
  {
   "server": 33030,
   "family": "GermanElite",
   "power": 1675475057
  },
  {
   "server": 33030,
   "family": "shroomsde",
   "power": 1321865568
  },
  {
   "server": 33030,
   "family": "DieWohngruppe",
   "power": 1231771080
  },
  {
   "server": 33030,
   "family": "Pilzkönigreich",
   "power": 465002472
  },
  {
   "server": 33030,
   "family": "Seelensammler",
   "power": 433200005
  },
  {
   "server": 33030,
   "family": "MeisterProper",
   "power": 305471114
  },
  {
   "server": 33030,
   "family": "Germanya",
   "power": 152519926
  },
  {
   "server": 33030,
   "family": "GermanUnity",
   "power": 131859761
  },
  {
   "server": 33030,
   "family": "DieAnfänger",
   "power": 126992327
  },
  {
   "server": 33030,
   "family": "FairyTail",
   "power": 90594834
  },
  {
   "server": 33031,
   "family": "Rage",
   "power": 1953173019
  },
  {
   "server": 33031,
   "family": "Fusspilze",
   "power": 947985439
  },
  {
   "server": 33031,
   "family": "GermanElite",
   "power": 759147222
  },
  {
   "server": 33031,
   "family": "Germanoutlaws",
   "power": 502164400
  },
  {
   "server": 33031,
   "family": "EliteGerman",
   "power": 482561593
  },
  {
   "server": 33031,
   "family": "Gottheiten",
   "power": 400214528
  },
  {
   "server": 33031,
   "family": "Aschenblüte",
   "power": 321344888
  },
  {
   "server": 33031,
   "family": "ShadowGarden",
   "power": 318295776
  },
  {
   "server": 33031,
   "family": "hyk",
   "power": 295748194
  },
  {
   "server": 33031,
   "family": "bingobongo",
   "power": 91415996
  },
  {
   "server": 33032,
   "family": "PEAK",
   "power": 2010525312
  },
  {
   "server": 33032,
   "family": "MagicMushrooms",
   "power": 989484084
  },
  {
   "server": 33032,
   "family": "PfifferlingeDE",
   "power": 461716694
  },
  {
   "server": 33032,
   "family": "MashroomKings",
   "power": 399227266
  },
  {
   "server": 33032,
   "family": "OnlyGermany",
   "power": 362796006
  },
  {
   "server": 33032,
   "family": "Pfifferlinge",
   "power": 313802263
  },
  {
   "server": 33032,
   "family": "beekayjunior",
   "power": 259509127
  },
  {
   "server": 33032,
   "family": "Matthias1912",
   "power": 125960721
  },
  {
   "server": 33032,
   "family": "KongoKeulen",
   "power": 69118938
  },
  {
   "server": 33032,
   "family": "Funghinators",
   "power": 61395737
  },
  {
   "server": 33033,
   "family": "Skyrockets",
   "power": 1647465011
  },
  {
   "server": 33033,
   "family": "SuicideSquad",
   "power": 1163617972
  },
  {
   "server": 33033,
   "family": "Akatsuki",
   "power": 1038113111
  },
  {
   "server": 33033,
   "family": "Krümelmonster",
   "power": 796035343
  },
  {
   "server": 33033,
   "family": "FallingDragons",
   "power": 306883123
  },
  {
   "server": 33033,
   "family": "Zauberpilze",
   "power": 233767648
  },
  {
   "server": 33033,
   "family": "Darkside",
   "power": 225376995
  },
  {
   "server": 33033,
   "family": "Canesten",
   "power": 190319661
  },
  {
   "server": 33033,
   "family": "HogwartsPilze",
   "power": 157640036
  },
  {
   "server": 33033,
   "family": "madafaka",
   "power": 154589774
  },
  {
   "server": 33034,
   "family": "Reapers",
   "power": 2001457374
  },
  {
   "server": 33034,
   "family": "ToadLand",
   "power": 684129778
  },
  {
   "server": 33034,
   "family": "Bierkneipe",
   "power": 657774265
  },
  {
   "server": 33034,
   "family": "MOON",
   "power": 490032684
  },
  {
   "server": 33034,
   "family": "GobelusDE",
   "power": 427157678
  },
  {
   "server": 33034,
   "family": "DrAgOoN",
   "power": 405613621
  },
  {
   "server": 33034,
   "family": "Weed",
   "power": 320060308
  },
  {
   "server": 33034,
   "family": "RIPchen",
   "power": 243246268
  },
  {
   "server": 33034,
   "family": "PilzMeister",
   "power": 205852431
  },
  {
   "server": 33034,
   "family": "Just4Fun",
   "power": 104877488
  },
  {
   "server": 33035,
   "family": "MushroomArmy",
   "power": 1919919516
  },
  {
   "server": 33035,
   "family": "GERMANY",
   "power": 782728383
  },
  {
   "server": 33035,
   "family": "CatMania",
   "power": 665307174
  },
  {
   "server": 33035,
   "family": "Unlimited",
   "power": 589462217
  },
  {
   "server": 33035,
   "family": "MushroomArmy2",
   "power": 555236739
  },
  {
   "server": 33035,
   "family": "MagicMushrooms",
   "power": 531222618
  },
  {
   "server": 33035,
   "family": "Strohhüte",
   "power": 350505876
  },
  {
   "server": 33035,
   "family": "DarkCall",
   "power": 336022833
  },
  {
   "server": 33035,
   "family": "Schwarzherz",
   "power": 312644830
  },
  {
   "server": 33035,
   "family": "LostFuDrave",
   "power": 265973539
  },
  {
   "server": 33036,
   "family": "Buttertrüffel",
   "power": 1662228894
  },
  {
   "server": 33036,
   "family": "MagicMushroom",
   "power": 1661758631
  },
  {
   "server": 33036,
   "family": "Pilzpfanne",
   "power": 619200103
  },
  {
   "server": 33036,
   "family": "Germany",
   "power": 608650903
  },
  {
   "server": 33036,
   "family": "FairyTail",
   "power": 377233927
  },
  {
   "server": 33036,
   "family": "Deutschland",
   "power": 329766684
  },
  {
   "server": 33036,
   "family": "RamenMitPilzen",
   "power": 315954021
  },
  {
   "server": 33036,
   "family": "chaosclub",
   "power": 287275866
  },
  {
   "server": 33036,
   "family": "Ruhrpottpilze",
   "power": 204479989
  },
  {
   "server": 33036,
   "family": "Bienenstock",
   "power": 139441607
  },
  {
   "server": 33037,
   "family": "Last_Impact",
   "power": 1903436174
  },
  {
   "server": 33037,
   "family": "FightClub",
   "power": 1137711964
  },
  {
   "server": 33037,
   "family": "Ultras",
   "power": 387786926
  },
  {
   "server": 33037,
   "family": "DieStrohhüte",
   "power": 360144820
  },
  {
   "server": 33037,
   "family": "Germans",
   "power": 342157183
  },
  {
   "server": 33037,
   "family": "CrazyShrooms",
   "power": 340769518
  },
  {
   "server": 33037,
   "family": "MagicMushrooms",
   "power": 281598891
  },
  {
   "server": 33037,
   "family": "NR1",
   "power": 205997539
  },
  {
   "server": 33037,
   "family": "Demons",
   "power": 205492231
  },
  {
   "server": 33037,
   "family": "Wölfe",
   "power": 181053891
  },
  {
   "server": 33038,
   "family": "TheLions",
   "power": 2005047974
  },
  {
   "server": 33038,
   "family": "Dragons",
   "power": 1093806400
  },
  {
   "server": 33038,
   "family": "PilzKöpfe",
   "power": 543281286
  },
  {
   "server": 33038,
   "family": "Valhalla",
   "power": 408093877
  },
  {
   "server": 33038,
   "family": "Wolfpack",
   "power": 401217205
  },
  {
   "server": 33038,
   "family": "MadDoggs",
   "power": 273127418
  },
  {
   "server": 33038,
   "family": "zack",
   "power": 265728805
  },
  {
   "server": 33038,
   "family": "FlyingMushroom",
   "power": 211134753
  },
  {
   "server": 33038,
   "family": "Virux",
   "power": 193968333
  },
  {
   "server": 33038,
   "family": "Divine",
   "power": 191302437
  },
  {
   "server": 33039,
   "family": "Legends",
   "power": 1855194423
  },
  {
   "server": 33039,
   "family": "Pelzköpfe",
   "power": 1548661337
  },
  {
   "server": 33039,
   "family": "Darkness",
   "power": 763401440
  },
  {
   "server": 33039,
   "family": "GermanyCompanY",
   "power": 673902638
  },
  {
   "server": 33039,
   "family": "Pilzbefall",
   "power": 491360937
  },
  {
   "server": 33039,
   "family": "GermanHub",
   "power": 377694690
  },
  {
   "server": 33039,
   "family": "Deutschland",
   "power": 328581526
  },
  {
   "server": 33039,
   "family": "Deutsch",
   "power": 244952510
  },
  {
   "server": 33039,
   "family": "Pizza059",
   "power": 238234693
  },
  {
   "server": 33039,
   "family": "CoolePilze",
   "power": 192785084
  },
  {
   "server": 33040,
   "family": "Grace",
   "power": 1864568967
  },
  {
   "server": 33040,
   "family": "MonKings",
   "power": 977760615
  },
  {
   "server": 33040,
   "family": "PilzBunker",
   "power": 545027339
  },
  {
   "server": 33040,
   "family": "Finsterwacht",
   "power": 439391948
  },
  {
   "server": 33040,
   "family": "Demons",
   "power": 281379995
  },
  {
   "server": 33040,
   "family": "Sacknasen",
   "power": 267156301
  },
  {
   "server": 33040,
   "family": "BlackDevil",
   "power": 256898707
  },
  {
   "server": 33040,
   "family": "Tempest",
   "power": 245664134
  },
  {
   "server": 33040,
   "family": "Germany",
   "power": 242151757
  },
  {
   "server": 33040,
   "family": "MagischePilze",
   "power": 238520558
  },
  {
   "server": 33041,
   "family": "TeaParty",
   "power": 1853948351
  },
  {
   "server": 33041,
   "family": "PHÖNIX",
   "power": 1390603476
  },
  {
   "server": 33041,
   "family": "BubabtzClub",
   "power": 857712901
  },
  {
   "server": 33041,
   "family": "DeadEnd",
   "power": 284031221
  },
  {
   "server": 33041,
   "family": "Nagelpilz",
   "power": 270216853
  },
  {
   "server": 33041,
   "family": "Drachenschanze",
   "power": 259621069
  },
  {
   "server": 33041,
   "family": "German",
   "power": 255189608
  },
  {
   "server": 33041,
   "family": "DieBlutritter",
   "power": 171678879
  },
  {
   "server": 33041,
   "family": "schweiz",
   "power": 107922615
  },
  {
   "server": 33041,
   "family": "Pilzsuppe",
   "power": 87277769
  },
  {
   "server": 33042,
   "family": "GermanElite",
   "power": 1678882466
  },
  {
   "server": 33042,
   "family": "Legends",
   "power": 1445511093
  },
  {
   "server": 33042,
   "family": "Strohhutbande",
   "power": 1132572738
  },
  {
   "server": 33042,
   "family": "Champions",
   "power": 669004862
  },
  {
   "server": 33042,
   "family": "Valhalla",
   "power": 390489978
  },
  {
   "server": 33042,
   "family": "Veldora",
   "power": 378272958
  },
  {
   "server": 33042,
   "family": "Rheinlandpfalz",
   "power": 367624708
  },
  {
   "server": 33042,
   "family": "Fairytail",
   "power": 318810800
  },
  {
   "server": 33042,
   "family": "420BuDs",
   "power": 269864599
  },
  {
   "server": 33042,
   "family": "Unlimited",
   "power": 268858823
  },
  {
   "server": 33043,
   "family": "NoExcuse",
   "power": 1727702366
  },
  {
   "server": 33043,
   "family": "DemonKings",
   "power": 1590668155
  },
  {
   "server": 33043,
   "family": "Strohhutbande",
   "power": 1534539515
  },
  {
   "server": 33043,
   "family": "Pilzsammlerᵗᵒᵖ",
   "power": 766630372
  },
  {
   "server": 33043,
   "family": "grünesPesto",
   "power": 637882548
  },
  {
   "server": 33043,
   "family": "KönigToad",
   "power": 264579866
  },
  {
   "server": 33043,
   "family": "Helldivers",
   "power": 227315530
  },
  {
   "server": 33043,
   "family": "DieDeutschen",
   "power": 223963449
  },
  {
   "server": 33043,
   "family": "Waldpilze",
   "power": 204465311
  },
  {
   "server": 33043,
   "family": "wolf",
   "power": 179322769
  },
  {
   "server": 33044,
   "family": "Elite",
   "power": 1863469631
  },
  {
   "server": 33044,
   "family": "Germany",
   "power": 1387322277
  },
  {
   "server": 33044,
   "family": "Germans",
   "power": 576572054
  },
  {
   "server": 33044,
   "family": "PilzInfanterie",
   "power": 355683793
  },
  {
   "server": 33044,
   "family": "TheCrack",
   "power": 330344247
  },
  {
   "server": 33044,
   "family": "PilzBunker",
   "power": 253402981
  },
  {
   "server": 33044,
   "family": "SpaßamSpiel",
   "power": 246763127
  },
  {
   "server": 33044,
   "family": "TigerClan",
   "power": 243650436
  },
  {
   "server": 33044,
   "family": "Psychos",
   "power": 199552632
  },
  {
   "server": 33044,
   "family": "Hellraiser",
   "power": 170419272
  },
  {
   "server": 33045,
   "family": "GummiPilzBande",
   "power": 1755624530
  },
  {
   "server": 33045,
   "family": "CityofSin",
   "power": 1137395324
  },
  {
   "server": 33045,
   "family": "●GPB●Akademie",
   "power": 1092925445
  },
  {
   "server": 33045,
   "family": "BlackClover",
   "power": 347626898
  },
  {
   "server": 33045,
   "family": "GermanElite",
   "power": 302605860
  },
  {
   "server": 33045,
   "family": "HAHAHAHAHAXD",
   "power": 245326702
  },
  {
   "server": 33045,
   "family": "GermanyElite",
   "power": 207873540
  },
  {
   "server": 33045,
   "family": "Kartoffelpüree",
   "power": 190465067
  },
  {
   "server": 33045,
   "family": "Just4Fun",
   "power": 73932272
  },
  {
   "server": 33045,
   "family": "Ragnarök",
   "power": 52228614
  },
  {
   "server": 33046,
   "family": "Legends",
   "power": 1851377917
  },
  {
   "server": 33046,
   "family": "NoxNoctis",
   "power": 1634698529
  },
  {
   "server": 33046,
   "family": "PartyCrashers",
   "power": 616830513
  },
  {
   "server": 33046,
   "family": "AffenMitWaffen",
   "power": 499179671
  },
  {
   "server": 33046,
   "family": "Deutschland2",
   "power": 473746672
  },
  {
   "server": 33046,
   "family": "SoloLeveling",
   "power": 457718036
  },
  {
   "server": 33046,
   "family": "Outcasts404",
   "power": 439922322
  },
  {
   "server": 33046,
   "family": "HempelsSofa",
   "power": 364555694
  },
  {
   "server": 33046,
   "family": "OnePilzArmy",
   "power": 351355121
  },
  {
   "server": 33046,
   "family": "ElitePilze",
   "power": 265626454
  },
  {
   "server": 33047,
   "family": "GroßerPilz",
   "power": 1804581496
  },
  {
   "server": 33047,
   "family": "DieChaoten",
   "power": 1104840699
  },
  {
   "server": 33047,
   "family": "Deutschland",
   "power": 673156391
  },
  {
   "server": 33047,
   "family": "Hades",
   "power": 444679124
  },
  {
   "server": 33047,
   "family": "Nexon",
   "power": 280490342
  },
  {
   "server": 33047,
   "family": "TheGoldenMush",
   "power": 244793845
  },
  {
   "server": 33047,
   "family": "Taubsi",
   "power": 186377780
  },
  {
   "server": 33047,
   "family": "TheMushrooms",
   "power": 177273373
  },
  {
   "server": 33047,
   "family": "FliegendePilze",
   "power": 168317298
  },
  {
   "server": 33047,
   "family": "MoonPie",
   "power": 148406989
  },
  {
   "server": 33048,
   "family": "Eternal",
   "power": 1673045863
  },
  {
   "server": 33048,
   "family": "Phönix",
   "power": 1555665025
  },
  {
   "server": 33048,
   "family": "TheChampignons",
   "power": 682535552
  },
  {
   "server": 33048,
   "family": "Fliegenpilze",
   "power": 445791129
  },
  {
   "server": 33048,
   "family": "Wolfers",
   "power": 357781173
  },
  {
   "server": 33048,
   "family": "AnimeSchweiz1",
   "power": 252077021
  },
  {
   "server": 33048,
   "family": "Tohr",
   "power": 224775037
  },
  {
   "server": 33048,
   "family": "SuperSonic",
   "power": 222414816
  },
  {
   "server": 33048,
   "family": "lachsteich",
   "power": 205443232
  },
  {
   "server": 33048,
   "family": "animegerman",
   "power": 167283897
  },
  {
   "server": 33049,
   "family": "TheGang",
   "power": 1705272537
  },
  {
   "server": 33049,
   "family": "Duality",
   "power": 1131905843
  },
  {
   "server": 33049,
   "family": "Katzenmilch",
   "power": 565389445
  },
  {
   "server": 33049,
   "family": "DrachenReiter",
   "power": 500730739
  },
  {
   "server": 33049,
   "family": "TodesEngel",
   "power": 446746564
  },
  {
   "server": 33049,
   "family": "BHOB",
   "power": 444362147
  },
  {
   "server": 33049,
   "family": "GlÜcKsPiLzE",
   "power": 408637776
  },
  {
   "server": 33049,
   "family": "Strohhutbande",
   "power": 326795078
  },
  {
   "server": 33049,
   "family": "420s",
   "power": 301620046
  },
  {
   "server": 33049,
   "family": "Fußpilz",
   "power": 265930462
  },
  {
   "server": 33050,
   "family": "Elysium",
   "power": 1844029929
  },
  {
   "server": 33050,
   "family": "Zipfelklatsche",
   "power": 1517676642
  },
  {
   "server": 33050,
   "family": "TrüffelLegends",
   "power": 1173531601
  },
  {
   "server": 33050,
   "family": "Bürgergeld",
   "power": 823130433
  },
  {
   "server": 33050,
   "family": "SoloLeveling",
   "power": 318483582
  },
  {
   "server": 33050,
   "family": "Pfifferlinge",
   "power": 249389255
  },
  {
   "server": 33050,
   "family": "WolfSRudeL",
   "power": 168495494
  },
  {
   "server": 33050,
   "family": "Shroomboom",
   "power": 117035048
  },
  {
   "server": 33050,
   "family": "Neumünster",
   "power": 91758831
  },
  {
   "server": 33050,
   "family": "cybershrooms",
   "power": 62572230
  },
  {
   "server": 33051,
   "family": "Legends",
   "power": 1670551906
  },
  {
   "server": 33051,
   "family": "Avengers",
   "power": 1286989867
  },
  {
   "server": 33051,
   "family": "DieQueens",
   "power": 1008384089
  },
  {
   "server": 33051,
   "family": "Futterluke",
   "power": 403910976
  },
  {
   "server": 33051,
   "family": "DeutscherWald",
   "power": 328044396
  },
  {
   "server": 33051,
   "family": "DeutscheArmada",
   "power": 313731003
  },
  {
   "server": 33051,
   "family": "diedachdecker",
   "power": 311235192
  },
  {
   "server": 33051,
   "family": "DieGreise",
   "power": 249898401
  },
  {
   "server": 33051,
   "family": "Villedor",
   "power": 213912013
  },
  {
   "server": 33051,
   "family": "gerWERWÖLFEdeu",
   "power": 154326338
  },
  {
   "server": 33052,
   "family": "CrimsonShrooms",
   "power": 1841041763
  },
  {
   "server": 33052,
   "family": "LEVELUP",
   "power": 1321340949
  },
  {
   "server": 33052,
   "family": "Shadow",
   "power": 448576799
  },
  {
   "server": 33052,
   "family": "Pilzclan",
   "power": 279502025
  },
  {
   "server": 33052,
   "family": "TBF",
   "power": 256157907
  },
  {
   "server": 33052,
   "family": "PilzCup",
   "power": 202662603
  },
  {
   "server": 33052,
   "family": "GermanSquad",
   "power": 197219790
  },
  {
   "server": 33052,
   "family": "SoloLeveling",
   "power": 191625791
  },
  {
   "server": 33052,
   "family": "Shrooms",
   "power": 177438849
  },
  {
   "server": 33052,
   "family": "legendmashroom",
   "power": 169376721
  },
  {
   "server": 33053,
   "family": "NoGameNoLife",
   "power": 1777401686
  },
  {
   "server": 33053,
   "family": "Akatzuki",
   "power": 1279962631
  },
  {
   "server": 33053,
   "family": "AntiFußpilz",
   "power": 412631192
  },
  {
   "server": 33053,
   "family": "Schlumpfhausen",
   "power": 399559629
  },
  {
   "server": 33053,
   "family": "SchattenPilze",
   "power": 395843758
  },
  {
   "server": 33053,
   "family": "Schlümpfe",
   "power": 393229153
  },
  {
   "server": 33053,
   "family": "Ekliptik",
   "power": 383165510
  },
  {
   "server": 33053,
   "family": "Mashle",
   "power": 381606378
  },
  {
   "server": 33053,
   "family": "Back2Basic",
   "power": 260324590
  },
  {
   "server": 33053,
   "family": "FlügelPilze",
   "power": 254702391
  },
  {
   "server": 33054,
   "family": "Frontpilze",
   "power": 1328450420
  },
  {
   "server": 33054,
   "family": "SchattenPilze",
   "power": 837321626
  },
  {
   "server": 33054,
   "family": "TreeOfGondor",
   "power": 636812835
  },
  {
   "server": 33054,
   "family": "Seniorentreff",
   "power": 601334653
  },
  {
   "server": 33054,
   "family": "German_Anime",
   "power": 385134849
  },
  {
   "server": 33054,
   "family": "Pilzepasta",
   "power": 321341834
  },
  {
   "server": 33054,
   "family": "WinxClub",
   "power": 306982247
  },
  {
   "server": 33054,
   "family": "SoloLeveling",
   "power": 280166801
  },
  {
   "server": 33054,
   "family": "Pubnasen",
   "power": 256744960
  },
  {
   "server": 33054,
   "family": "Godmode",
   "power": 245353103
  },
  {
   "server": 33055,
   "family": "Pilzbande",
   "power": 1659751943
  },
  {
   "server": 33055,
   "family": "DiesüßenPilze",
   "power": 1183344064
  },
  {
   "server": 33055,
   "family": "SnowWhite",
   "power": 751196013
  },
  {
   "server": 33055,
   "family": "Powerpilze",
   "power": 482707100
  },
  {
   "server": 33055,
   "family": "PilzHeadHunter",
   "power": 392740291
  },
  {
   "server": 33055,
   "family": "RauschKraut",
   "power": 345288496
  },
  {
   "server": 33055,
   "family": "Allianz",
   "power": 325183000
  },
  {
   "server": 33055,
   "family": "MashroomCity",
   "power": 193382690
  },
  {
   "server": 33055,
   "family": "ShroomTown",
   "power": 164452065
  },
  {
   "server": 33055,
   "family": "OhMyMushroom",
   "power": 161677065
  },
  {
   "server": 33056,
   "family": "Champignons",
   "power": 1898074305
  },
  {
   "server": 33056,
   "family": "Pfifferlinge",
   "power": 1585552011
  },
  {
   "server": 33056,
   "family": "Yggdrasil",
   "power": 497474103
  },
  {
   "server": 33056,
   "family": "Bembelgauner",
   "power": 421318841
  },
  {
   "server": 33056,
   "family": "WeißerLotus",
   "power": 400867277
  },
  {
   "server": 33056,
   "family": "5gegenWilli",
   "power": 362810520
  },
  {
   "server": 33056,
   "family": "Toads",
   "power": 287838214
  },
  {
   "server": 33056,
   "family": "Shroomboom",
   "power": 243411070
  },
  {
   "server": 33056,
   "family": "Pilzmine",
   "power": 237236196
  },
  {
   "server": 33056,
   "family": "Blackwolfs",
   "power": 211876253
  },
  {
   "server": 33057,
   "family": "Pilzsuppe",
   "power": 1715596834
  },
  {
   "server": 33057,
   "family": "Poison",
   "power": 1277720826
  },
  {
   "server": 33057,
   "family": "GHG",
   "power": 904750840
  },
  {
   "server": 33057,
   "family": "Knights",
   "power": 735898096
  },
  {
   "server": 33057,
   "family": "KönigsPilze",
   "power": 327698496
  },
  {
   "server": 33057,
   "family": "pandemushrioom",
   "power": 284045792
  },
  {
   "server": 33057,
   "family": "DragonFight",
   "power": 247529993
  },
  {
   "server": 33057,
   "family": "GeileTypen",
   "power": 201358448
  },
  {
   "server": 33057,
   "family": "MontanaBlack88",
   "power": 194473761
  },
  {
   "server": 33057,
   "family": "DieFirma",
   "power": 181576917
  },
  {
   "server": 33058,
   "family": "Unikat",
   "power": 1588346525
  },
  {
   "server": 33058,
   "family": "DieGummibären",
   "power": 1264681558
  },
  {
   "server": 33058,
   "family": "Fetter_Kek",
   "power": 1178606247
  },
  {
   "server": 33058,
   "family": "Backwaren",
   "power": 664277778
  },
  {
   "server": 33058,
   "family": "Hayvans",
   "power": 304090839
  },
  {
   "server": 33058,
   "family": "TheLight",
   "power": 279423220
  },
  {
   "server": 33058,
   "family": "Bloodmoon",
   "power": 253911100
  },
  {
   "server": 33058,
   "family": "GermanElite",
   "power": 182504532
  },
  {
   "server": 33058,
   "family": "EiEiEi",
   "power": 169089244
  },
  {
   "server": 33058,
   "family": "HakunaMatata",
   "power": 161631074
  },
  {
   "server": 33059,
   "family": "Pilzhub",
   "power": 1777464787
  },
  {
   "server": 33059,
   "family": "Newbies",
   "power": 1624808520
  },
  {
   "server": 33059,
   "family": "FungiZid",
   "power": 897468453
  },
  {
   "server": 33059,
   "family": "GermanyOnTop",
   "power": 678873430
  },
  {
   "server": 33059,
   "family": "GermanClan",
   "power": 463645547
  },
  {
   "server": 33059,
   "family": "Pilzbier",
   "power": 342481263
  },
  {
   "server": 33059,
   "family": "Bloodmoon",
   "power": 250788936
  },
  {
   "server": 33059,
   "family": "HeavenGER",
   "power": 237415210
  },
  {
   "server": 33059,
   "family": "Germany",
   "power": 231261748
  },
  {
   "server": 33059,
   "family": "Daimond",
   "power": 176261839
  },
  {
   "server": 33060,
   "family": "MagicMushrooms",
   "power": 1602429986
  },
  {
   "server": 33060,
   "family": "Aincrad",
   "power": 1243145789
  },
  {
   "server": 33060,
   "family": "AFK",
   "power": 858541679
  },
  {
   "server": 33060,
   "family": "German_Fighter",
   "power": 681991301
  },
  {
   "server": 33060,
   "family": "FairyTail",
   "power": 455919279
  },
  {
   "server": 33060,
   "family": "AutSiderz",
   "power": 370353297
  },
  {
   "server": 33060,
   "family": "BADBOYS",
   "power": 300621259
  },
  {
   "server": 33060,
   "family": "Rooms",
   "power": 232912785
  },
  {
   "server": 33060,
   "family": "Idioten",
   "power": 193812667
  },
  {
   "server": 33060,
   "family": "DragonSlayer",
   "power": 107503681
  },
  {
   "server": 33061,
   "family": "Shadow_Garden",
   "power": 1829734181
  },
  {
   "server": 33061,
   "family": "PilzSociety",
   "power": 1466332416
  },
  {
   "server": 33061,
   "family": "Sunset_Ravens",
   "power": 891985049
  },
  {
   "server": 33061,
   "family": "KillerPilze",
   "power": 634825806
  },
  {
   "server": 33061,
   "family": "Pommesbude",
   "power": 439198836
  },
  {
   "server": 33061,
   "family": "ToyotaStein",
   "power": 344407179
  },
  {
   "server": 33061,
   "family": "N1ghtfall",
   "power": 260200938
  },
  {
   "server": 33061,
   "family": "MirkosKneipe",
   "power": 241140880
  },
  {
   "server": 33061,
   "family": "pfanddiebe",
   "power": 229074460
  },
  {
   "server": 33061,
   "family": "Germany",
   "power": 218011197
  },
  {
   "server": 33062,
   "family": "ViribusUnitis",
   "power": 1751685938
  },
  {
   "server": 33062,
   "family": "Knochenbrecher",
   "power": 714521348
  },
  {
   "server": 33062,
   "family": "ViribusUnitis2",
   "power": 503983692
  },
  {
   "server": 33062,
   "family": "Welcome",
   "power": 446276086
  },
  {
   "server": 33062,
   "family": "GermanWolves",
   "power": 440252336
  },
  {
   "server": 33062,
   "family": "PizzaFunghi",
   "power": 384404262
  },
  {
   "server": 33062,
   "family": "Giftpilz",
   "power": 330029146
  },
  {
   "server": 33062,
   "family": "RizzHerUp",
   "power": 211838208
  },
  {
   "server": 33062,
   "family": "Fliegenpilz",
   "power": 183781155
  },
  {
   "server": 33062,
   "family": "AnimeWorld",
   "power": 182916306
  },
  {
   "server": 33063,
   "family": "ARBEITSAMT",
   "power": 1739538430
  },
  {
   "server": 33063,
   "family": "LOM’s",
   "power": 1350213922
  },
  {
   "server": 33063,
   "family": "Rebellen",
   "power": 1165806193
  },
  {
   "server": 33063,
   "family": "Pilzbrut",
   "power": 594676871
  },
  {
   "server": 33063,
   "family": "Timeless",
   "power": 571681587
  },
  {
   "server": 33063,
   "family": "Shroomis",
   "power": 398641147
  },
  {
   "server": 33063,
   "family": "Mastershrooms",
   "power": 272606256
  },
  {
   "server": 33063,
   "family": "Strohhüte",
   "power": 250089982
  },
  {
   "server": 33063,
   "family": "Zauberpilze",
   "power": 185550136
  },
  {
   "server": 33063,
   "family": "107Hb",
   "power": 175562303
  },
  {
   "server": 33064,
   "family": "Todesengel",
   "power": 1596481415
  },
  {
   "server": 33064,
   "family": "Glückspilze",
   "power": 1294346677
  },
  {
   "server": 33064,
   "family": "CosaNostra",
   "power": 1267487695
  },
  {
   "server": 33064,
   "family": "GER_Pilzbande",
   "power": 1164009575
  },
  {
   "server": 33064,
   "family": "Champignons",
   "power": 304267388
  },
  {
   "server": 33064,
   "family": "Just4Fun",
   "power": 290046754
  },
  {
   "server": 33064,
   "family": "Schwammerl",
   "power": 214826903
  },
  {
   "server": 33064,
   "family": "OnePiece",
   "power": 182881251
  },
  {
   "server": 33064,
   "family": "AtomPilz",
   "power": 128064313
  },
  {
   "server": 33064,
   "family": "Stammilienkrei",
   "power": 96826753
  },
  {
   "server": 33065,
   "family": "GermanHero",
   "power": 1540201881
  },
  {
   "server": 33065,
   "family": "GameOver",
   "power": 1447528984
  },
  {
   "server": 33065,
   "family": "Imperium",
   "power": 1151897164
  },
  {
   "server": 33065,
   "family": "GermanElite",
   "power": 545711682
  },
  {
   "server": 33065,
   "family": "PhantomPilze",
   "power": 305082545
  },
  {
   "server": 33065,
   "family": "Nordlichter",
   "power": 289778437
  },
  {
   "server": 33065,
   "family": "Miyunity",
   "power": 251825604
  },
  {
   "server": 33065,
   "family": "Pilzsammler",
   "power": 250529272
  },
  {
   "server": 33065,
   "family": "DiePilsTrinker",
   "power": 240164089
  },
  {
   "server": 33065,
   "family": "Assassination",
   "power": 219642097
  },
  {
   "server": 33066,
   "family": "†Arise†",
   "power": 1748656779
  },
  {
   "server": 33066,
   "family": "Starlight",
   "power": 1202754863
  },
  {
   "server": 33066,
   "family": "Godlike",
   "power": 665551917
  },
  {
   "server": 33066,
   "family": "Germania",
   "power": 444611613
  },
  {
   "server": 33066,
   "family": "AriseV3",
   "power": 436921125
  },
  {
   "server": 33066,
   "family": "PilzBunker",
   "power": 402526084
  },
  {
   "server": 33066,
   "family": "SuicideSquad",
   "power": 369458334
  },
  {
   "server": 33066,
   "family": "DinoNuggets",
   "power": 303070302
  },
  {
   "server": 33066,
   "family": "MagicMushrooms",
   "power": 289854624
  },
  {
   "server": 33066,
   "family": "KDK",
   "power": 260193280
  },
  {
   "server": 33067,
   "family": "Fußpilz",
   "power": 1703787686
  },
  {
   "server": 33067,
   "family": "Dragons",
   "power": 1222615139
  },
  {
   "server": 33067,
   "family": "SalzPilze",
   "power": 801243774
  },
  {
   "server": 33067,
   "family": "Pilzkönigreich",
   "power": 523254936
  },
  {
   "server": 33067,
   "family": "FirstMush",
   "power": 369488774
  },
  {
   "server": 33067,
   "family": "Altersheim",
   "power": 352169075
  },
  {
   "server": 33067,
   "family": "Trachatza",
   "power": 309801181
  },
  {
   "server": 33067,
   "family": "Utopia",
   "power": 270789178
  },
  {
   "server": 33067,
   "family": "Grounder",
   "power": 228032083
  },
  {
   "server": 33067,
   "family": "Terminatoren",
   "power": 197695531
  },
  {
   "server": 33068,
   "family": "Mushpit",
   "power": 1620752301
  },
  {
   "server": 33068,
   "family": "Stammtisch",
   "power": 1551863012
  },
  {
   "server": 33068,
   "family": "PilzKönigreich",
   "power": 1227432852
  },
  {
   "server": 33068,
   "family": "Germanien",
   "power": 532997041
  },
  {
   "server": 33068,
   "family": "PilzFarm",
   "power": 385787830
  },
  {
   "server": 33068,
   "family": "FairyTale",
   "power": 268786661
  },
  {
   "server": 33068,
   "family": "WeebTower",
   "power": 261809225
  },
  {
   "server": 33068,
   "family": "Pilzkönig",
   "power": 238502127
  },
  {
   "server": 33068,
   "family": "Ostfriesen",
   "power": 229036003
  },
  {
   "server": 33068,
   "family": "GermanElite",
   "power": 216222062
  },
  {
   "server": 33069,
   "family": "SoulSociety",
   "power": 1797168458
  },
  {
   "server": 33069,
   "family": "SoloLeveling",
   "power": 1018579406
  },
  {
   "server": 33069,
   "family": "Helldogs",
   "power": 808053637
  },
  {
   "server": 33069,
   "family": "StartUP",
   "power": 641026099
  },
  {
   "server": 33069,
   "family": "Schwänze",
   "power": 312314096
  },
  {
   "server": 33069,
   "family": "Erdbeerdiele",
   "power": 282246109
  },
  {
   "server": 33069,
   "family": "danger",
   "power": 265887580
  },
  {
   "server": 33069,
   "family": "MeowMeow",
   "power": 162655567
  },
  {
   "server": 33069,
   "family": "ProjectX",
   "power": 155551686
  },
  {
   "server": 33069,
   "family": "Guardians",
   "power": 134963010
  },
  {
   "server": 33070,
   "family": "PF_Pilzlinge",
   "power": 1601033931
  },
  {
   "server": 33070,
   "family": "PilzBanger",
   "power": 1316599326
  },
  {
   "server": 33070,
   "family": "PilzigerOrden",
   "power": 754256607
  },
  {
   "server": 33070,
   "family": "Oblivion",
   "power": 589338922
  },
  {
   "server": 33070,
   "family": "Sololeveling",
   "power": 379395401
  },
  {
   "server": 33070,
   "family": "WölfeOdins",
   "power": 325330725
  },
  {
   "server": 33070,
   "family": "FP_Pilzlinge",
   "power": 278441053
  },
  {
   "server": 33070,
   "family": "Ruppendorf",
   "power": 269167449
  },
  {
   "server": 33070,
   "family": "Die_Schieber",
   "power": 267251761
  },
  {
   "server": 33070,
   "family": "Pilzjäger",
   "power": 250591417
  },
  {
   "server": 33071,
   "family": "LastEternity",
   "power": 1684967413
  },
  {
   "server": 33071,
   "family": "Wallhal",
   "power": 1295461128
  },
  {
   "server": 33071,
   "family": "MentosVitamin",
   "power": 684040170
  },
  {
   "server": 33071,
   "family": "EsstmehrPilze",
   "power": 630987839
  },
  {
   "server": 33071,
   "family": "Classics",
   "power": 414607002
  },
  {
   "server": 33071,
   "family": "Eureka",
   "power": 402023251
  },
  {
   "server": 33071,
   "family": "Schneckensquad",
   "power": 390284061
  },
  {
   "server": 33071,
   "family": "PilzBefall",
   "power": 307483463
  },
  {
   "server": 33071,
   "family": "Akatsuki",
   "power": 152473429
  },
  {
   "server": 33071,
   "family": "OVERLORD",
   "power": 121538334
  },
  {
   "server": 33072,
   "family": "Heldenhaft",
   "power": 1818146486
  },
  {
   "server": 33072,
   "family": "Mushrooms",
   "power": 962363470
  },
  {
   "server": 33072,
   "family": "DemonKingdom",
   "power": 570673922
  },
  {
   "server": 33072,
   "family": "technobunker",
   "power": 512862900
  },
  {
   "server": 33072,
   "family": "StarkeTruppe",
   "power": 449505831
  },
  {
   "server": 33072,
   "family": "myProject",
   "power": 364079185
  },
  {
   "server": 33072,
   "family": "Rasselbande",
   "power": 285472405
  },
  {
   "server": 33072,
   "family": "AtomPlize",
   "power": 257096010
  },
  {
   "server": 33072,
   "family": "Pilzeintopf",
   "power": 233509428
  },
  {
   "server": 33072,
   "family": "Darkness",
   "power": 194513954
  },
  {
   "server": 33073,
   "family": "UwU",
   "power": 1833614992
  },
  {
   "server": 33073,
   "family": "Walhalla",
   "power": 1301893443
  },
  {
   "server": 33073,
   "family": "EndlessFantasy",
   "power": 773172280
  },
  {
   "server": 33073,
   "family": "Pilzfamilie",
   "power": 514083121
  },
  {
   "server": 33073,
   "family": "GermanyDragon",
   "power": 455206619
  },
  {
   "server": 33073,
   "family": "TheLastLord",
   "power": 323562423
  },
  {
   "server": 33073,
   "family": "HyperActive",
   "power": 285947034
  },
  {
   "server": 33073,
   "family": "GHG",
   "power": 275802863
  },
  {
   "server": 33073,
   "family": "BohnenBande",
   "power": 268240696
  },
  {
   "server": 33073,
   "family": "DieBros",
   "power": 249979378
  },
  {
   "server": 33074,
   "family": "INVICTUM",
   "power": 1714987000
  },
  {
   "server": 33074,
   "family": "Pilz_Family",
   "power": 1082725911
  },
  {
   "server": 33074,
   "family": "Pilzmania",
   "power": 999704568
  },
  {
   "server": 33074,
   "family": "SpandauerPilze",
   "power": 442653330
  },
  {
   "server": 33074,
   "family": "Flitzpiepen",
   "power": 342459896
  },
  {
   "server": 33074,
   "family": "Starter",
   "power": 310352153
  },
  {
   "server": 33074,
   "family": "MeckPommPilze",
   "power": 296336187
  },
  {
   "server": 33074,
   "family": "DieBumis",
   "power": 292331703
  },
  {
   "server": 33074,
   "family": "hust",
   "power": 268816098
  },
  {
   "server": 33074,
   "family": "skorpionlion",
   "power": 215568536
  },
  {
   "server": 33075,
   "family": "Valhalla",
   "power": 1915927218
  },
  {
   "server": 33075,
   "family": "PilzBunker",
   "power": 1119316046
  },
  {
   "server": 33075,
   "family": "Bloody‘s",
   "power": 918286783
  },
  {
   "server": 33075,
   "family": "oldMushrooms",
   "power": 632363674
  },
  {
   "server": 33075,
   "family": "HGD",
   "power": 410882787
  },
  {
   "server": 33075,
   "family": "Bavaria",
   "power": 352732129
  },
  {
   "server": 33075,
   "family": "Pilzbande",
   "power": 325508794
  },
  {
   "server": 33075,
   "family": "EZ_Gundulas",
   "power": 310279798
  },
  {
   "server": 33075,
   "family": "Pilzis",
   "power": 231446927
  },
  {
   "server": 33075,
   "family": "FreeDreams",
   "power": 180795340
  },
  {
   "server": 33076,
   "family": "Brownie",
   "power": 1691833801
  },
  {
   "server": 33076,
   "family": "EmP",
   "power": 1306948842
  },
  {
   "server": 33076,
   "family": "Skyfall",
   "power": 693048288
  },
  {
   "server": 33076,
   "family": "DeutschePilze",
   "power": 387670871
  },
  {
   "server": 33076,
   "family": "Cry",
   "power": 354057083
  },
  {
   "server": 33076,
   "family": "OVL_Overlord",
   "power": 338079827
  },
  {
   "server": 33076,
   "family": "MagicMushrooms",
   "power": 324361570
  },
  {
   "server": 33076,
   "family": "Fairytail",
   "power": 298476156
  },
  {
   "server": 33076,
   "family": "Moin",
   "power": 290197592
  },
  {
   "server": 33076,
   "family": "Deutschland",
   "power": 279764637
  },
  {
   "server": 33077,
   "family": "DarkWinter",
   "power": 1814432954
  },
  {
   "server": 33077,
   "family": "Predators",
   "power": 1352372991
  },
  {
   "server": 33077,
   "family": "Einhorngang",
   "power": 483453941
  },
  {
   "server": 33077,
   "family": "Würstchenparty",
   "power": 356842294
  },
  {
   "server": 33077,
   "family": "Society",
   "power": 318554842
  },
  {
   "server": 33077,
   "family": "Germania",
   "power": 290359972
  },
  {
   "server": 33077,
   "family": "Germany",
   "power": 268394676
  },
  {
   "server": 33077,
   "family": "MagicMush",
   "power": 247124151
  },
  {
   "server": 33077,
   "family": "Deutschland",
   "power": 220944356
  },
  {
   "server": 33077,
   "family": "thegamer",
   "power": 163313146
  },
  {
   "server": 33078,
   "family": "PilzArmee",
   "power": 1844616869
  },
  {
   "server": 33078,
   "family": "PilzBörse",
   "power": 1136835623
  },
  {
   "server": 33078,
   "family": "DeathNote",
   "power": 914805356
  },
  {
   "server": 33078,
   "family": "Meow",
   "power": 461734242
  },
  {
   "server": 33078,
   "family": "DieVonGestern",
   "power": 435002001
  },
  {
   "server": 33078,
   "family": "German_Hate",
   "power": 334293660
  },
  {
   "server": 33078,
   "family": "Technobunker",
   "power": 308306990
  },
  {
   "server": 33078,
   "family": "Deutschland",
   "power": 220469499
  },
  {
   "server": 33078,
   "family": "DeutschePilze",
   "power": 191070127
  },
  {
   "server": 33078,
   "family": "Legion",
   "power": 189508832
  },
  {
   "server": 33079,
   "family": "PilzPudding",
   "power": 1542057465
  },
  {
   "server": 33079,
   "family": "PilzHunter",
   "power": 1381640532
  },
  {
   "server": 33079,
   "family": "PilzKrieger",
   "power": 598951404
  },
  {
   "server": 33079,
   "family": "SoloLeveling",
   "power": 357250269
  },
  {
   "server": 33079,
   "family": "Teddybären",
   "power": 356854726
  },
  {
   "server": 33079,
   "family": "ElitePilze",
   "power": 350608287
  },
  {
   "server": 33079,
   "family": "Puddings",
   "power": 328673264
  },
  {
   "server": 33079,
   "family": "Pilzsuppe",
   "power": 215521430
  },
  {
   "server": 33079,
   "family": "FUNGUS",
   "power": 207204201
  },
  {
   "server": 33079,
   "family": "AOF",
   "power": 171944695
  },
  {
   "server": 33080,
   "family": "AnotherOne",
   "power": 1661220500
  },
  {
   "server": 33080,
   "family": "YSL",
   "power": 1350952620
  },
  {
   "server": 33080,
   "family": "AllStars",
   "power": 1015457105
  },
  {
   "server": 33080,
   "family": "DieSchlümpfe",
   "power": 334224105
  },
  {
   "server": 33080,
   "family": "LEGENDS",
   "power": 301989603
  },
  {
   "server": 33080,
   "family": "ENDGEGNER",
   "power": 259724303
  },
  {
   "server": 33080,
   "family": "Germanpilze",
   "power": 255350158
  },
  {
   "server": 33080,
   "family": "Hurricane",
   "power": 221396618
  },
  {
   "server": 33080,
   "family": "Happy",
   "power": 191718893
  },
  {
   "server": 33080,
   "family": "GER",
   "power": 167971474
  },
  {
   "server": 33081,
   "family": "TopShrooms",
   "power": 1604551702
  },
  {
   "server": 33081,
   "family": "TOAD_CLUB",
   "power": 731612882
  },
  {
   "server": 33081,
   "family": "GNADENLOS",
   "power": 626980269
  },
  {
   "server": 33081,
   "family": "Ascender",
   "power": 385509246
  },
  {
   "server": 33081,
   "family": "Wallhalla",
   "power": 262075453
  },
  {
   "server": 33081,
   "family": "OXYGEN",
   "power": 242387663
  },
  {
   "server": 33081,
   "family": "WasGehtAb",
   "power": 236384865
  },
  {
   "server": 33081,
   "family": "Gewinner",
   "power": 217766020
  },
  {
   "server": 33081,
   "family": "Himmelsflügel",
   "power": 207585955
  },
  {
   "server": 33081,
   "family": "MushroomArmy",
   "power": 152926007
  },
  {
   "server": 33082,
   "family": "DeathNote",
   "power": 1541715317
  },
  {
   "server": 33082,
   "family": "PilzHub",
   "power": 1167919375
  },
  {
   "server": 33082,
   "family": "LonelySouls",
   "power": 1074008933
  },
  {
   "server": 33082,
   "family": "TerbrackClan",
   "power": 336267612
  },
  {
   "server": 33082,
   "family": "technobunker",
   "power": 307035938
  },
  {
   "server": 33082,
   "family": "WildCats",
   "power": 295782388
  },
  {
   "server": 33082,
   "family": "CaliCartel",
   "power": 245071328
  },
  {
   "server": 33082,
   "family": "Actimelisiert",
   "power": 198632115
  },
  {
   "server": 33082,
   "family": "green",
   "power": 187852742
  },
  {
   "server": 33082,
   "family": "KING",
   "power": 153702323
  },
  {
   "server": 33083,
   "family": "FirstBlood",
   "power": 1739244718
  },
  {
   "server": 33083,
   "family": "Limitless",
   "power": 1085575154
  },
  {
   "server": 33083,
   "family": "MondWolf",
   "power": 595798418
  },
  {
   "server": 33083,
   "family": "TheHighGround",
   "power": 415787462
  },
  {
   "server": 33083,
   "family": "KatzenBeiNacht",
   "power": 394961121
  },
  {
   "server": 33083,
   "family": "HIGHLIFE",
   "power": 378244388
  },
  {
   "server": 33083,
   "family": "Theoretisch",
   "power": 238938641
  },
  {
   "server": 33083,
   "family": "stabilität",
   "power": 227535515
  },
  {
   "server": 33083,
   "family": "DieSuchtProfis",
   "power": 202132366
  },
  {
   "server": 33083,
   "family": "Furzknäuse",
   "power": 112434450
  },
  {
   "server": 33084,
   "family": "Revived",
   "power": 1561625626
  },
  {
   "server": 33084,
   "family": "2ndChance",
   "power": 1221430892
  },
  {
   "server": 33084,
   "family": "StonerElite",
   "power": 442077768
  },
  {
   "server": 33084,
   "family": "DeutscherAdler",
   "power": 329806670
  },
  {
   "server": 33084,
   "family": "Sandkastenboys",
   "power": 293649273
  },
  {
   "server": 33084,
   "family": "PilsVomFass",
   "power": 250793632
  },
  {
   "server": 33084,
   "family": "Sporenpilz",
   "power": 204431510
  },
  {
   "server": 33084,
   "family": "germanvikings",
   "power": 192244216
  },
  {
   "server": 33084,
   "family": "1Leafe",
   "power": 185638068
  },
  {
   "server": 33084,
   "family": "Eagles",
   "power": 180350918
  },
  {
   "server": 33085,
   "family": "Top_Shrooms",
   "power": 1510804843
  },
  {
   "server": 33085,
   "family": "LastHope",
   "power": 1329238945
  },
  {
   "server": 33085,
   "family": "DieVerlorenen",
   "power": 674854245
  },
  {
   "server": 33085,
   "family": "NewHorizon",
   "power": 599984599
  },
  {
   "server": 33085,
   "family": "Unkreativ",
   "power": 321785127
  },
  {
   "server": 33085,
   "family": "DiePilze",
   "power": 290609085
  },
  {
   "server": 33085,
   "family": "Schnuffels",
   "power": 232041927
  },
  {
   "server": 33085,
   "family": "ALPHA",
   "power": 198492072
  },
  {
   "server": 33085,
   "family": "kingdom",
   "power": 180831748
  },
  {
   "server": 33085,
   "family": "Fliegenpilze",
   "power": 176982371
  },
  {
   "server": 33086,
   "family": "PilzArmee",
   "power": 1565094581
  },
  {
   "server": 33086,
   "family": "DieEichelpilze",
   "power": 1107927309
  },
  {
   "server": 33086,
   "family": "Berserker",
   "power": 495684982
  },
  {
   "server": 33086,
   "family": "GG",
   "power": 460315191
  },
  {
   "server": 33086,
   "family": "PilzeImWald",
   "power": 332736014
  },
  {
   "server": 33086,
   "family": "Ravenclaw",
   "power": 331553389
  },
  {
   "server": 33086,
   "family": "Legends",
   "power": 279161521
  },
  {
   "server": 33086,
   "family": "GermanElite",
   "power": 267090660
  },
  {
   "server": 33086,
   "family": "Psychedelics",
   "power": 253731923
  },
  {
   "server": 33086,
   "family": "BubatzUnited",
   "power": 184059044
  },
  {
   "server": 33087,
   "family": "Vollstrecker",
   "power": 1336377755
  },
  {
   "server": 33087,
   "family": "ShadowGarden",
   "power": 861751429
  },
  {
   "server": 33087,
   "family": "Schattenreiter",
   "power": 620756039
  },
  {
   "server": 33087,
   "family": "PilzSuppe",
   "power": 473720122
  },
  {
   "server": 33087,
   "family": "FreizeitPilze",
   "power": 402093658
  },
  {
   "server": 33087,
   "family": "DasPils",
   "power": 349641976
  },
  {
   "server": 33087,
   "family": "Blutmondclan",
   "power": 309120457
  },
  {
   "server": 33087,
   "family": "PilzGermanen",
   "power": 298594963
  },
  {
   "server": 33087,
   "family": "Crim",
   "power": 266575327
  },
  {
   "server": 33087,
   "family": "Actimelisiert",
   "power": 238875101
  },
  {
   "server": 33088,
   "family": "DarkKnight",
   "power": 1344668035
  },
  {
   "server": 33088,
   "family": "uchia",
   "power": 1302471702
  },
  {
   "server": 33088,
   "family": "Gummibärchen",
   "power": 1292443565
  },
  {
   "server": 33088,
   "family": "Deutschland",
   "power": 353084271
  },
  {
   "server": 33088,
   "family": "MushroomElite",
   "power": 268220109
  },
  {
   "server": 33088,
   "family": "Paradox",
   "power": 228873855
  },
  {
   "server": 33088,
   "family": "SortArtOnline",
   "power": 212933088
  },
  {
   "server": 33088,
   "family": "DREAMTEAM",
   "power": 184848894
  },
  {
   "server": 33088,
   "family": "murshfighters",
   "power": 183864005
  },
  {
   "server": 33088,
   "family": "Inferno",
   "power": 168315405
  },
  {
   "server": 33089,
   "family": "ToadsFamily",
   "power": 1428811298
  },
  {
   "server": 33089,
   "family": "Shroomville",
   "power": 1383731649
  },
  {
   "server": 33089,
   "family": "Titans",
   "power": 465973140
  },
  {
   "server": 33089,
   "family": "Pilzköpfe",
   "power": 281681287
  },
  {
   "server": 33089,
   "family": "Enten",
   "power": 262495244
  },
  {
   "server": 33089,
   "family": "NSFW",
   "power": 257026184
  },
  {
   "server": 33089,
   "family": "Inkognito420",
   "power": 254480623
  },
  {
   "server": 33089,
   "family": "Nordsee",
   "power": 231389948
  },
  {
   "server": 33089,
   "family": "Klobürste",
   "power": 177901994
  },
  {
   "server": 33089,
   "family": "Loyalität",
   "power": 138638952
  },
  {
   "server": 33090,
   "family": "shroomys",
   "power": 1703905308
  },
  {
   "server": 33090,
   "family": "TeamKugelblitz",
   "power": 1060788888
  },
  {
   "server": 33090,
   "family": "rTacoos",
   "power": 393126974
  },
  {
   "server": 33090,
   "family": "GuteNudeln",
   "power": 339347339
  },
  {
   "server": 33090,
   "family": "SoloLeveling",
   "power": 328371987
  },
  {
   "server": 33090,
   "family": "TeamKugelBlitz",
   "power": 307395533
  },
  {
   "server": 33090,
   "family": "KillingSpree",
   "power": 295490406
  },
  {
   "server": 33090,
   "family": "Mushroomkings",
   "power": 262755264
  },
  {
   "server": 33090,
   "family": "PilzkopfBande",
   "power": 256287959
  },
  {
   "server": 33090,
   "family": "TeamFaktorX",
   "power": 220078783
  },
  {
   "server": 33091,
   "family": "PilzElite",
   "power": 1262125366
  },
  {
   "server": 33091,
   "family": "Pilzköpfe",
   "power": 1232801605
  },
  {
   "server": 33091,
   "family": "GameOver",
   "power": 977545726
  },
  {
   "server": 33091,
   "family": "Sanctuary",
   "power": 302159561
  },
  {
   "server": 33091,
   "family": "PhantomPilze",
   "power": 212348546
  },
  {
   "server": 33091,
   "family": "Die_Deutschen",
   "power": 203325115
  },
  {
   "server": 33091,
   "family": "SaarBrigade",
   "power": 194028591
  },
  {
   "server": 33091,
   "family": "GHG",
   "power": 180892248
  },
  {
   "server": 33091,
   "family": "BlackDragon",
   "power": 171391761
  },
  {
   "server": 33091,
   "family": "MagicMushrooms",
   "power": 138258030
  },
  {
   "server": 33092,
   "family": "ChaosCrew",
   "power": 1343650319
  },
  {
   "server": 33092,
   "family": "Akatsuki",
   "power": 1105653390
  },
  {
   "server": 33092,
   "family": "Elite",
   "power": 455999545
  },
  {
   "server": 33092,
   "family": "Wolfsblut",
   "power": 383032714
  },
  {
   "server": 33092,
   "family": "D4C",
   "power": 325740106
  },
  {
   "server": 33092,
   "family": "VoodooGarden",
   "power": 238876584
  },
  {
   "server": 33092,
   "family": "OnePiece",
   "power": 196892642
  },
  {
   "server": 33092,
   "family": "TopShrooms",
   "power": 185244344
  },
  {
   "server": 33092,
   "family": "MagicMushrooms",
   "power": 178692925
  },
  {
   "server": 33092,
   "family": "Pilzsuppe",
   "power": 157051127
  },
  {
   "server": 33093,
   "family": "Damage",
   "power": 1457507535
  },
  {
   "server": 33093,
   "family": "SINNERS",
   "power": 707100273
  },
  {
   "server": 33093,
   "family": "Horde",
   "power": 396230038
  },
  {
   "server": 33093,
   "family": "MagicChampions",
   "power": 300598030
  },
  {
   "server": 33093,
   "family": "Bratwurst",
   "power": 289748961
  },
  {
   "server": 33093,
   "family": "Gregoronkh",
   "power": 286017407
  },
  {
   "server": 33093,
   "family": "Klobürsten",
   "power": 285103194
  },
  {
   "server": 33093,
   "family": "Ronin",
   "power": 240475467
  },
  {
   "server": 33093,
   "family": "Der_Beste",
   "power": 226568830
  },
  {
   "server": 33093,
   "family": "F2P",
   "power": 207516497
  },
  {
   "server": 33094,
   "family": "Unglaublich",
   "power": 1378290298
  },
  {
   "server": 33094,
   "family": "ProMushroom",
   "power": 1061641385
  },
  {
   "server": 33094,
   "family": "NewMoons",
   "power": 437389810
  },
  {
   "server": 33094,
   "family": "IchAlleine",
   "power": 288598037
  },
  {
   "server": 33094,
   "family": "Loyals",
   "power": 251287676
  },
  {
   "server": 33094,
   "family": "Drachenreiter",
   "power": 217250451
  },
  {
   "server": 33094,
   "family": "AlceunEmpire",
   "power": 209092616
  },
  {
   "server": 33094,
   "family": "Sporentrupp",
   "power": 206982622
  },
  {
   "server": 33094,
   "family": "GERZellenblock",
   "power": 197401666
  },
  {
   "server": 33094,
   "family": "BlackClan",
   "power": 188236915
  },
  {
   "server": 33095,
   "family": "InfinityManji",
   "power": 1450051429
  },
  {
   "server": 33095,
   "family": "LiveFast",
   "power": 1357228084
  },
  {
   "server": 33095,
   "family": "DämonenParade",
   "power": 890516841
  },
  {
   "server": 33095,
   "family": "Echo",
   "power": 484694473
  },
  {
   "server": 33095,
   "family": "Astral",
   "power": 305795746
  },
  {
   "server": 33095,
   "family": "Tempest",
   "power": 225015135
  },
  {
   "server": 33095,
   "family": "FairyTail",
   "power": 200409344
  },
  {
   "server": 33095,
   "family": "Brot_brot",
   "power": 197313744
  },
  {
   "server": 33095,
   "family": "Stammtisch",
   "power": 195991949
  },
  {
   "server": 33095,
   "family": "GermanAngels",
   "power": 192225659
  },
  {
   "server": 33096,
   "family": "MushroomArmy",
   "power": 1274348477
  },
  {
   "server": 33096,
   "family": "Germanyx",
   "power": 1096831964
  },
  {
   "server": 33096,
   "family": "Schwabbel",
   "power": 494226415
  },
  {
   "server": 33096,
   "family": "FairyTail",
   "power": 400620433
  },
  {
   "server": 33096,
   "family": "Fruchtpilze",
   "power": 245636875
  },
  {
   "server": 33096,
   "family": "ImpactGaming",
   "power": 223001806
  },
  {
   "server": 33096,
   "family": "DieGiftpilze",
   "power": 205107375
  },
  {
   "server": 33096,
   "family": "DasTrio",
   "power": 203708419
  },
  {
   "server": 33096,
   "family": "Teufelskerle",
   "power": 193056300
  },
  {
   "server": 33096,
   "family": "GetSchwifty",
   "power": 179280096
  },
  {
   "server": 33097,
   "family": "🩸BloodSoaked",
   "power": 1362995756
  },
  {
   "server": 33097,
   "family": "🥷Akatsuki🥷",
   "power": 990669990
  },
  {
   "server": 33097,
   "family": "⭐_Gummibären_⭐",
   "power": 861503138
  },
  {
   "server": 33097,
   "family": "GER",
   "power": 412815468
  },
  {
   "server": 33097,
   "family": "FairyTail",
   "power": 377604787
  },
  {
   "server": 33097,
   "family": "ElPrimo",
   "power": 261413193
  },
  {
   "server": 33097,
   "family": "DieBösenBuben",
   "power": 241621551
  },
  {
   "server": 33097,
   "family": "Bubatz",
   "power": 238747316
  },
  {
   "server": 33097,
   "family": "DiePilze",
   "power": 183036143
  },
  {
   "server": 33097,
   "family": "Fliegenpilz",
   "power": 167568326
  },
  {
   "server": 33098,
   "family": "Eden",
   "power": 1341196724
  },
  {
   "server": 33098,
   "family": "Angel_Of_Chaos",
   "power": 907069839
  },
  {
   "server": 33098,
   "family": "Valhalla",
   "power": 550965271
  },
  {
   "server": 33098,
   "family": "Pandora",
   "power": 335288884
  },
  {
   "server": 33098,
   "family": "Luxeaterna",
   "power": 323135014
  },
  {
   "server": 33098,
   "family": "HalterOberflur",
   "power": 307318989
  },
  {
   "server": 33098,
   "family": "MagicShrooms",
   "power": 303171850
  },
  {
   "server": 33098,
   "family": "RisingMushroom",
   "power": 227137075
  },
  {
   "server": 33098,
   "family": "lions",
   "power": 219354879
  },
  {
   "server": 33098,
   "family": "ZeigEier",
   "power": 183489654
  },
  {
   "server": 33099,
   "family": "Fuzzy",
   "power": 1363815423
  },
  {
   "server": 33099,
   "family": "Germania",
   "power": 1133505321
  },
  {
   "server": 33099,
   "family": "PsyMushrooms",
   "power": 666631317
  },
  {
   "server": 33099,
   "family": "Deadlyrooms",
   "power": 350817801
  },
  {
   "server": 33099,
   "family": "DieVolstrecker",
   "power": 340907336
  },
  {
   "server": 33099,
   "family": "Strohhüte",
   "power": 250578949
  },
  {
   "server": 33099,
   "family": "königlichestor",
   "power": 245346903
  },
  {
   "server": 33099,
   "family": "Elmussy",
   "power": 244956049
  },
  {
   "server": 33099,
   "family": "WCYD",
   "power": 233302284
  },
  {
   "server": 33099,
   "family": "OnlyGermany",
   "power": 221907302
  },
  {
   "server": 33100,
   "family": "MonKings",
   "power": 1255575686
  },
  {
   "server": 33100,
   "family": "DieRatlosen",
   "power": 1229324008
  },
  {
   "server": 33100,
   "family": "Unlucky",
   "power": 1031452755
  },
  {
   "server": 33100,
   "family": "Phönix",
   "power": 327976212
  },
  {
   "server": 33100,
   "family": "Elite",
   "power": 257346379
  },
  {
   "server": 33100,
   "family": "Nordlinge",
   "power": 223104339
  },
  {
   "server": 33100,
   "family": "Untherapierbar",
   "power": 216315071
  },
  {
   "server": 33100,
   "family": "SoloLeveling",
   "power": 208799772
  },
  {
   "server": 33100,
   "family": "Dragonborn",
   "power": 189121452
  },
  {
   "server": 33100,
   "family": "POPHKAS",
   "power": 187429770
  },
  {
   "server": 33101,
   "family": "shadow_garden",
   "power": 1196598394
  },
  {
   "server": 33101,
   "family": "Phönixgarde",
   "power": 1008405182
  },
  {
   "server": 33101,
   "family": "Ehrenmänner",
   "power": 448983774
  },
  {
   "server": 33101,
   "family": "DEmpire",
   "power": 447867408
  },
  {
   "server": 33101,
   "family": "diePilze",
   "power": 331764116
  },
  {
   "server": 33101,
   "family": "Pilzregatta",
   "power": 242886837
  },
  {
   "server": 33101,
   "family": "Magic_Mushroom",
   "power": 227802279
  },
  {
   "server": 33101,
   "family": "Hamburg",
   "power": 205430459
  },
  {
   "server": 33101,
   "family": "Schroomtrooper",
   "power": 202400191
  },
  {
   "server": 33101,
   "family": "DieEinhörner",
   "power": 155855952
  },
  {
   "server": 33102,
   "family": "Free2Play",
   "power": 1306061628
  },
  {
   "server": 33102,
   "family": "Clap4Us",
   "power": 1055404572
  },
  {
   "server": 33102,
   "family": "420nShrooms",
   "power": 656448006
  },
  {
   "server": 33102,
   "family": "BlackofDays",
   "power": 369366556
  },
  {
   "server": 33102,
   "family": "StonerShrooms",
   "power": 229175856
  },
  {
   "server": 33102,
   "family": "DieChaoten",
   "power": 205873008
  },
  {
   "server": 33102,
   "family": "Verpesstung",
   "power": 203069960
  },
  {
   "server": 33102,
   "family": "Residenz",
   "power": 191347830
  },
  {
   "server": 33102,
   "family": "Silberpilz",
   "power": 188175208
  },
  {
   "server": 33102,
   "family": "Shaggers",
   "power": 164582829
  },
  {
   "server": 33103,
   "family": "Legends",
   "power": 1200918288
  },
  {
   "server": 33103,
   "family": "MagicMushroom",
   "power": 776484422
  },
  {
   "server": 33103,
   "family": "ILLIRIA",
   "power": 498697531
  },
  {
   "server": 33103,
   "family": "JOKERz",
   "power": 249464187
  },
  {
   "server": 33103,
   "family": "S44_Elite",
   "power": 242611484
  },
  {
   "server": 33103,
   "family": "FettSäckeAG",
   "power": 237736662
  },
  {
   "server": 33103,
   "family": "Deutsch",
   "power": 204323340
  },
  {
   "server": 33103,
   "family": "ArbeitsamV2",
   "power": 148660826
  },
  {
   "server": 33103,
   "family": "Pilzerama",
   "power": 148275806
  },
  {
   "server": 33103,
   "family": "KeinStress",
   "power": 124467612
  },
  {
   "server": 33104,
   "family": "Pilzbunker",
   "power": 1287635825
  },
  {
   "server": 33104,
   "family": "DarkEvils",
   "power": 734240569
  },
  {
   "server": 33104,
   "family": "PilzKönige",
   "power": 345884312
  },
  {
   "server": 33104,
   "family": "Diablo",
   "power": 259499163
  },
  {
   "server": 33104,
   "family": "Vogtland",
   "power": 214982659
  },
  {
   "server": 33104,
   "family": "ReadyOasis",
   "power": 208823092
  },
  {
   "server": 33104,
   "family": "Pilzbande",
   "power": 196530613
  },
  {
   "server": 33104,
   "family": "Dieeierlecker",
   "power": 196283165
  },
  {
   "server": 33104,
   "family": "NetzePilze",
   "power": 194723926
  },
  {
   "server": 33104,
   "family": "Godslayers",
   "power": 175672424
  },
  {
   "server": 33105,
   "family": "ILoveCookies",
   "power": 1007785832
  },
  {
   "server": 33105,
   "family": "Pay2Lose",
   "power": 697931232
  },
  {
   "server": 33105,
   "family": "NoFoxGiven",
   "power": 680857310
  },
  {
   "server": 33105,
   "family": "Germany",
   "power": 262697484
  },
  {
   "server": 33105,
   "family": "Giftzwerge",
   "power": 212892142
  },
  {
   "server": 33105,
   "family": "NoWayOut",
   "power": 175956004
  },
  {
   "server": 33105,
   "family": "Deutschland",
   "power": 174601238
  },
  {
   "server": 33105,
   "family": "Lust",
   "power": 124581963
  },
  {
   "server": 33105,
   "family": "Misfits",
   "power": 96954049
  },
  {
   "server": 33105,
   "family": "Krombacher",
   "power": 62332035
  },
  {
   "server": 33106,
   "family": "Pilzanstalt",
   "power": 1025286550
  },
  {
   "server": 33106,
   "family": "DiePilzis",
   "power": 460107403
  },
  {
   "server": 33106,
   "family": "豈187豈",
   "power": 325247365
  },
  {
   "server": 33106,
   "family": "Schlumpfhausen",
   "power": 280430438
  },
  {
   "server": 33106,
   "family": "Uchiha_Clan",
   "power": 270656778
  },
  {
   "server": 33106,
   "family": "ShroomSmurf",
   "power": 219174380
  },
  {
   "server": 33106,
   "family": "Deutschland",
   "power": 189217978
  },
  {
   "server": 33106,
   "family": "Namikaze",
   "power": 185827814
  },
  {
   "server": 33106,
   "family": "SKAS",
   "power": 168776333
  },
  {
   "server": 33106,
   "family": "Elite",
   "power": 145396112
  },
  {
   "server": 33107,
   "family": "Extinction",
   "power": 1141494171
  },
  {
   "server": 33107,
   "family": "Pilzköppe",
   "power": 1050604369
  },
  {
   "server": 33107,
   "family": "MushroomKings",
   "power": 616590672
  },
  {
   "server": 33107,
   "family": "LOMGerman",
   "power": 264818031
  },
  {
   "server": 33107,
   "family": "420Club",
   "power": 221083297
  },
  {
   "server": 33107,
   "family": "Saftladen",
   "power": 218758178
  },
  {
   "server": 33107,
   "family": "BlutrauschGER",
   "power": 216297231
  },
  {
   "server": 33107,
   "family": "DiePilzköpfe",
   "power": 184181899
  },
  {
   "server": 33107,
   "family": "MagicMushrooms",
   "power": 169344303
  },
  {
   "server": 33107,
   "family": "MassivePeanuts",
   "power": 160000585
  },
  {
   "server": 33108,
   "family": "DevilClub",
   "power": 1113235402
  },
  {
   "server": 33108,
   "family": "JuraWald",
   "power": 1005455826
  },
  {
   "server": 33108,
   "family": "Pussypilze",
   "power": 697681259
  },
  {
   "server": 33108,
   "family": "DiePilzkrieger",
   "power": 212203758
  },
  {
   "server": 33108,
   "family": "Medusa",
   "power": 189192119
  },
  {
   "server": 33108,
   "family": "ClanDesGrauens",
   "power": 177572378
  },
  {
   "server": 33108,
   "family": "Valhalla",
   "power": 158579654
  },
  {
   "server": 33108,
   "family": "RankOne",
   "power": 153044122
  },
  {
   "server": 33108,
   "family": "pilzköppe",
   "power": 149605428
  },
  {
   "server": 33108,
   "family": "Drachenstamm",
   "power": 149059350
  },
  {
   "server": 33109,
   "family": "Symbiose",
   "power": 1117701781
  },
  {
   "server": 33109,
   "family": "RedNarök",
   "power": 725772618
  },
  {
   "server": 33109,
   "family": "BloodyS",
   "power": 368656266
  },
  {
   "server": 33109,
   "family": "BloodyShroomie",
   "power": 215308297
  },
  {
   "server": 33109,
   "family": "Kampftruppe",
   "power": 190627294
  },
  {
   "server": 33109,
   "family": "FrankenpowerTv",
   "power": 174975697
  },
  {
   "server": 33109,
   "family": "X_Phoenix_X",
   "power": 173247862
  },
  {
   "server": 33109,
   "family": "Anime",
   "power": 168370507
  },
  {
   "server": 33109,
   "family": "Sweet_Death",
   "power": 117686843
  },
  {
   "server": 33109,
   "family": "Rubinrot",
   "power": 114589849
  },
  {
   "server": 33110,
   "family": "BlackTrüffels",
   "power": 1097729929
  },
  {
   "server": 33110,
   "family": "Fruchtpilze",
   "power": 984373723
  },
  {
   "server": 33110,
   "family": "PilzchenBoyz",
   "power": 440645513
  },
  {
   "server": 33110,
   "family": "Palia",
   "power": 258903225
  },
  {
   "server": 33110,
   "family": "Ahjin_Guild",
   "power": 185539567
  },
  {
   "server": 33110,
   "family": "Blackhawks",
   "power": 174145682
  },
  {
   "server": 33110,
   "family": "7deadlySins",
   "power": 164400911
  },
  {
   "server": 33110,
   "family": "AKATSUKI",
   "power": 162991614
  },
  {
   "server": 33110,
   "family": "DieGummibären",
   "power": 160678084
  },
  {
   "server": 33110,
   "family": "Träumer",
   "power": 159573945
  },
  {
   "server": 33111,
   "family": "h2k",
   "power": 1071417835
  },
  {
   "server": 33111,
   "family": "Narthex",
   "power": 844575473
  },
  {
   "server": 33111,
   "family": "FairyTail",
   "power": 745984658
  },
  {
   "server": 33111,
   "family": "GermanWarrior",
   "power": 187107738
  },
  {
   "server": 33111,
   "family": "Pilzköpfe",
   "power": 183711685
  },
  {
   "server": 33111,
   "family": "Honorificus",
   "power": 171360257
  },
  {
   "server": 33111,
   "family": "German",
   "power": 169633516
  },
  {
   "server": 33111,
   "family": "Shadow",
   "power": 158435725
  },
  {
   "server": 33111,
   "family": "Legende",
   "power": 150399669
  },
  {
   "server": 33111,
   "family": "Musherport",
   "power": 149072197
  },
  {
   "server": 33112,
   "family": "SoulSociety",
   "power": 1033256208
  },
  {
   "server": 33112,
   "family": "No€NoClan",
   "power": 909723607
  },
  {
   "server": 33112,
   "family": "BierPiraten",
   "power": 455746598
  },
  {
   "server": 33112,
   "family": "Pilzfreunde",
   "power": 190489097
  },
  {
   "server": 33112,
   "family": "EinhornLand",
   "power": 184208560
  },
  {
   "server": 33112,
   "family": "D4RK",
   "power": 182804898
  },
  {
   "server": 33112,
   "family": "Wikings",
   "power": 156946897
  },
  {
   "server": 33112,
   "family": "MagicMushroom",
   "power": 152480752
  },
  {
   "server": 33112,
   "family": "DeWalhalla",
   "power": 145898783
  },
  {
   "server": 33112,
   "family": "DeutschesTeam",
   "power": 135981493
  },
  {
   "server": 33113,
   "family": "Gol_D_Mushroom",
   "power": 783256639
  },
  {
   "server": 33113,
   "family": "Pilzbude",
   "power": 384855087
  },
  {
   "server": 33113,
   "family": "Pilzköpfe",
   "power": 368826804
  },
  {
   "server": 33113,
   "family": "Pilztopia",
   "power": 172325830
  },
  {
   "server": 33113,
   "family": "RubbelLampen",
   "power": 170823721
  },
  {
   "server": 33113,
   "family": "Legends",
   "power": 149392065
  },
  {
   "server": 33113,
   "family": "Clubderpilze",
   "power": 145649793
  },
  {
   "server": 33113,
   "family": "GermanBude",
   "power": 135723905
  },
  {
   "server": 33113,
   "family": "Toadland",
   "power": 121866070
  },
  {
   "server": 33113,
   "family": "PilzSuppe",
   "power": 109414823
  },
  {
   "server": 33114,
   "family": "Noir",
   "power": 954234521
  },
  {
   "server": 33114,
   "family": "OG_Pilze",
   "power": 788335195
  },
  {
   "server": 33114,
   "family": "PilzSuppe",
   "power": 425414147
  },
  {
   "server": 33114,
   "family": "Vennskap",
   "power": 180359533
  },
  {
   "server": 33114,
   "family": "7DeadlyHats",
   "power": 155982179
  },
  {
   "server": 33114,
   "family": "TeamDiff",
   "power": 146124183
  },
  {
   "server": 33114,
   "family": "DieGestoerten",
   "power": 137938338
  },
  {
   "server": 33114,
   "family": "PilzStube",
   "power": 132165569
  },
  {
   "server": 33114,
   "family": "HalleSaale",
   "power": 113463339
  },
  {
   "server": 33114,
   "family": "CKG",
   "power": 111285275
  },
  {
   "server": 33115,
   "family": "D4RK",
   "power": 911783970
  },
  {
   "server": 33115,
   "family": "ü20",
   "power": 716477268
  },
  {
   "server": 33115,
   "family": "Germans",
   "power": 597346991
  },
  {
   "server": 33115,
   "family": "Nameless",
   "power": 174141048
  },
  {
   "server": 33115,
   "family": "ShadowGarden",
   "power": 128894330
  },
  {
   "server": 33115,
   "family": "Devotion",
   "power": 125855755
  },
  {
   "server": 33115,
   "family": "7DeadlySins",
   "power": 121128598
  },
  {
   "server": 33115,
   "family": "EgonsStammbaum",
   "power": 106851587
  },
  {
   "server": 33115,
   "family": "pilzclan",
   "power": 103843030
  },
  {
   "server": 33115,
   "family": "Gummibärchen",
   "power": 100759798
  },
  {
   "server": 33116,
   "family": "HxH",
   "power": 832128097
  },
  {
   "server": 33116,
   "family": "WeißerLotus",
   "power": 681289128
  },
  {
   "server": 33116,
   "family": "PilzBörse",
   "power": 559411376
  },
  {
   "server": 33116,
   "family": "DiePilze",
   "power": 105428862
  },
  {
   "server": 33116,
   "family": "DieChaoten",
   "power": 87957178
  },
  {
   "server": 33116,
   "family": "DieSchlümpfe",
   "power": 82392727
  },
  {
   "server": 33116,
   "family": "Endgegner",
   "power": 79596842
  },
  {
   "server": 33116,
   "family": "Mashroom_X",
   "power": 76018525
  },
  {
   "server": 33116,
   "family": "Pilztopia",
   "power": 71995205
  },
  {
   "server": 33116,
   "family": "PilzTastisch",
   "power": 67931038
  },
  {
   "server": 33117,
   "family": "Royals",
   "power": 740486885
  },
  {
   "server": 33117,
   "family": "Grimreaper",
   "power": 700108988
  },
  {
   "server": 33117,
   "family": "PilzSyndikat",
   "power": 591496552
  },
  {
   "server": 33117,
   "family": "TopShrooms",
   "power": 118580714
  },
  {
   "server": 33117,
   "family": "GermanGods",
   "power": 94276976
  },
  {
   "server": 33117,
   "family": "funforfree",
   "power": 89380848
  },
  {
   "server": 33117,
   "family": "Legends",
   "power": 83525922
  },
  {
   "server": 33117,
   "family": "LostSouls",
   "power": 79669996
  },
  {
   "server": 33117,
   "family": "DarkDemon",
   "power": 75335214
  },
  {
   "server": 33117,
   "family": "Champignons",
   "power": 69247319
  },
  {
   "server": 33118,
   "family": "AllMighty",
   "power": 716248252
  },
  {
   "server": 33118,
   "family": "JustForFun",
   "power": 613330507
  },
  {
   "server": 33118,
   "family": "DevilsOfHell",
   "power": 539916329
  },
  {
   "server": 33118,
   "family": "SoulHunters",
   "power": 105092761
  },
  {
   "server": 33118,
   "family": "Wunderland",
   "power": 101478532
  },
  {
   "server": 33118,
   "family": "Giftpilz",
   "power": 75590255
  },
  {
   "server": 33118,
   "family": "Game_Changer",
   "power": 71607488
  },
  {
   "server": 33118,
   "family": "TheWarRoom",
   "power": 71356514
  },
  {
   "server": 33118,
   "family": "Akatzuki",
   "power": 64384583
  },
  {
   "server": 33118,
   "family": "ToxinEmpire",
   "power": 61500697
  },
  {
   "server": 33119,
   "family": "Imperium",
   "power": 742682579
  },
  {
   "server": 33119,
   "family": "UnderRadix",
   "power": 514204505
  },
  {
   "server": 33119,
   "family": "FaulPilze",
   "power": 173222750
  },
  {
   "server": 33119,
   "family": "TheFallenOnes",
   "power": 80982812
  },
  {
   "server": 33119,
   "family": "AnimeFans",
   "power": 74168110
  },
  {
   "server": 33119,
   "family": "Apexler",
   "power": 73472950
  },
  {
   "server": 33119,
   "family": "Valhalla",
   "power": 71444580
  },
  {
   "server": 33119,
   "family": "Misanthropen",
   "power": 68378012
  },
  {
   "server": 33119,
   "family": "Shroomtopia",
   "power": 67929274
  },
  {
   "server": 33119,
   "family": "PowerUp",
   "power": 57622883
  },
  {
   "server": 33120,
   "family": "Elysium",
   "power": 551535321
  },
  {
   "server": 33120,
   "family": "Anonymous",
   "power": 173676114
  },
  {
   "server": 33120,
   "family": "Serenity",
   "power": 66650250
  },
  {
   "server": 33120,
   "family": "TeamCloud",
   "power": 0
  },
  {
   "server": 33120,
   "family": "JustforFun",
   "power": 0
  },
  {
   "server": 33120,
   "family": "Sturmreiter",
   "power": 0
  },
  {
   "server": 33120,
   "family": "MushTrip",
   "power": 0
  },
  {
   "server": 33120,
   "family": "Komodo3000",
   "power": 0
  },
  {
   "server": 33120,
   "family": "KleineBanditen",
   "power": 0
  },
  {
   "server": 33120,
   "family": "Jamal",
   "power": 0
  },
  {
   "server": 33121,
   "family": "Astelic",
   "power": 579295048
  },
  {
   "server": 33121,
   "family": "TeamCloud",
   "power": 214115799
  },
  {
   "server": 33121,
   "family": "Haren_Army",
   "power": 95143312
  },
  {
   "server": 33121,
   "family": "GhostREAPERS",
   "power": 0
  },
  {
   "server": 33121,
   "family": "Pioniere",
   "power": 0
  },
  {
   "server": 33121,
   "family": "uchihaClan",
   "power": 0
  },
  {
   "server": 33121,
   "family": "OG_Champions",
   "power": 0
  },
  {
   "server": 33121,
   "family": "drei_freunde",
   "power": 0
  },
  {
   "server": 33121,
   "family": "Jakob2",
   "power": 0
  },
  {
   "server": 33121,
   "family": "Supernova",
   "power": 0
  },
  {
   "server": 33128,
   "family": "DarkEvils",
   "power": 308629531
  },
  {
   "server": 33128,
   "family": "Nachtschwärmer",
   "power": 109094108
  },
  {
   "server": 33128,
   "family": "Nameless",
   "power": 95831695
  },
  {
   "server": 33128,
   "family": "Ahjin_Guilde",
   "power": 0
  },
  {
   "server": 33128,
   "family": "SoloLeveling",
   "power": 0
  },
  {
   "server": 33128,
   "family": "RoyalMushroom",
   "power": 0
  },
  {
   "server": 33128,
   "family": "TheBest",
   "power": 0
  },
  {
   "server": 33128,
   "family": "Zörnys",
   "power": 0
  },
  {
   "server": 33128,
   "family": "thebloodline23",
   "power": 0
  },
  {
   "server": 33128,
   "family": "Sacknasen",
   "power": 0
  },
  {
   "server": 33129,
   "family": "Pokéfan",
   "power": 22648870
  },
  {
   "server": 33129,
   "family": "Mugiwara",
   "power": 10081666
  },
  {
   "server": 33129,
   "family": "adrian",
   "power": 2143390
  },
  {
   "server": 33129,
   "family": "Pepe",
   "power": 0
  },
  {
   "server": 33129,
   "family": "420_Berlin",
   "power": 0
  },
  {
   "server": 33129,
   "family": "DeathSouls",
   "power": 0
  },
  {
   "server": 33129,
   "family": "Muscheln69",
   "power": 0
  },
  {
   "server": 33129,
   "family": "Coninsel",
   "power": 0
  },
  {
   "server": 33129,
   "family": "NewGen",
   "power": 0
  },
  {
   "server": 33129,
   "family": "MRChamps",
   "power": 0
  },
  {
   "server": 33130,
   "family": "GermanAmigos",
   "power": 83983705
  },
  {
   "server": 33130,
   "family": "Fußpilz",
   "power": 45751252
  },
  {
   "server": 33130,
   "family": "GermanyKings",
   "power": 37984720
  },
  {
   "server": 33130,
   "family": "RoyalFlush",
   "power": 0
  },
  {
   "server": 33130,
   "family": "BetreutesZockn",
   "power": 0
  },
  {
   "server": 33130,
   "family": "BerlinLiebe",
   "power": 0
  },
  {
   "server": 33130,
   "family": "GermanChampion",
   "power": 0
  },
  {
   "server": 33130,
   "family": "HangoCoperatio",
   "power": 0
  },
  {
   "server": 33130,
   "family": "Akatsuki",
   "power": 0
  },
  {
   "server": 33130,
   "family": "GLA_Gang",
   "power": 0
  },
  {
   "server": 33131,
   "family": "druckwelle",
   "power": 49494310
  },
  {
   "server": 33131,
   "family": "LostMushrooms",
   "power": 34469415
  },
  {
   "server": 33131,
   "family": "Crown",
   "power": 10916489
  },
  {
   "server": 33131,
   "family": "MagierPilze",
   "power": 0
  },
  {
   "server": 33131,
   "family": "TheMusketeers",
   "power": 0
  },
  {
   "server": 33131,
   "family": "TrödelTrupp",
   "power": 0
  },
  {
   "server": 33131,
   "family": "Germany",
   "power": 0
  },
  {
   "server": 33131,
   "family": "ü30",
   "power": 0
  },
  {
   "server": 33131,
   "family": "TearsOfGaia",
   "power": 0
  },
  {
   "server": 33131,
   "family": "GateZero",
   "power": 0
  },
  {
   "server": 36001,
   "family": "All Star",
   "power": 2369077466
  },
  {
   "server": 36001,
   "family": "Kapitals",
   "power": 1709913208
  },
  {
   "server": 36001,
   "family": "Arcadia",
   "power": 1689014573
  },
  {
   "server": 36001,
   "family": "Neo Star",
   "power": 1436211472
  },
  {
   "server": 36001,
   "family": "Log_Horizon",
   "power": 1357686086
  },
  {
   "server": 36001,
   "family": "LaRoseDuTigre",
   "power": 1234303992
  },
  {
   "server": 36001,
   "family": "MagesRouges",
   "power": 1098989985
  },
  {
   "server": 36001,
   "family": "Brave_Star",
   "power": 906241476
  },
  {
   "server": 36001,
   "family": "Kapitals2",
   "power": 898284881
  },
  {
   "server": 36001,
   "family": "Tulipe_Rouge",
   "power": 840990580
  },
  {
   "server": 36002,
   "family": "DragonsNoirs",
   "power": 2104524810
  },
  {
   "server": 36002,
   "family": "Ashes",
   "power": 1712510416
  },
  {
   "server": 36002,
   "family": "DragonsBleus",
   "power": 1546318332
  },
  {
   "server": 36002,
   "family": "DragonsRouges",
   "power": 1305177534
  },
  {
   "server": 36002,
   "family": "BlackTides",
   "power": 1132337576
  },
  {
   "server": 36002,
   "family": "Infinity_Fr",
   "power": 673642576
  },
  {
   "server": 36002,
   "family": "FranceConnect",
   "power": 658018288
  },
  {
   "server": 36002,
   "family": "DragonsBlanc",
   "power": 512753393
  },
  {
   "server": 36002,
   "family": "FRcorp",
   "power": 471449399
  },
  {
   "server": 36002,
   "family": "ETERNAL",
   "power": 413081143
  },
  {
   "server": 36003,
   "family": "MushroomTale",
   "power": 2159100850
  },
  {
   "server": 36003,
   "family": "NoName",
   "power": 1856948313
  },
  {
   "server": 36003,
   "family": "spartaFR",
   "power": 1644356501
  },
  {
   "server": 36003,
   "family": "Kaamelott",
   "power": 580354529
  },
  {
   "server": 36003,
   "family": "Filtre2_0",
   "power": 563556156
  },
  {
   "server": 36003,
   "family": "Naturia",
   "power": 545252233
  },
  {
   "server": 36003,
   "family": "LesNoobzzz",
   "power": 531718293
  },
  {
   "server": 36003,
   "family": "L’Amanite",
   "power": 455323005
  },
  {
   "server": 36003,
   "family": "Warriors",
   "power": 345503515
  },
  {
   "server": 36003,
   "family": "ShadowGarden",
   "power": 294574520
  },
  {
   "server": 36004,
   "family": "OnTheTop",
   "power": 2110451222
  },
  {
   "server": 36004,
   "family": "TheLastHope",
   "power": 2033733074
  },
  {
   "server": 36004,
   "family": "Mugiwara",
   "power": 1750929451
  },
  {
   "server": 36004,
   "family": "ChampESport",
   "power": 1420207469
  },
  {
   "server": 36004,
   "family": "GuildeFR",
   "power": 1030284765
  },
  {
   "server": 36004,
   "family": "TryhardFr",
   "power": 546486544
  },
  {
   "server": 36004,
   "family": "Cringeland",
   "power": 354532478
  },
  {
   "server": 36004,
   "family": "legendaryFR",
   "power": 285158119
  },
  {
   "server": 36004,
   "family": "GOATfr",
   "power": 279760551
  },
  {
   "server": 36004,
   "family": "18etplus",
   "power": 270693650
  },
  {
   "server": 36005,
   "family": "LesSchtroumpfs",
   "power": 2085898911
  },
  {
   "server": 36005,
   "family": "L’Arche",
   "power": 1770895571
  },
  {
   "server": 36005,
   "family": "LastLegend",
   "power": 1589448999
  },
  {
   "server": 36005,
   "family": "Yggdrasil",
   "power": 1156866566
  },
  {
   "server": 36005,
   "family": "LesTrolls",
   "power": 689102410
  },
  {
   "server": 36005,
   "family": "LesSchtroumpf3",
   "power": 520437776
  },
  {
   "server": 36005,
   "family": "Nymphéa",
   "power": 459724927
  },
  {
   "server": 36005,
   "family": "Dragoon",
   "power": 361911873
  },
  {
   "server": 36005,
   "family": "Apocalypse",
   "power": 332515810
  },
  {
   "server": 36005,
   "family": "français",
   "power": 306239203
  },
  {
   "server": 36006,
   "family": "FRANCE",
   "power": 1954656773
  },
  {
   "server": 36006,
   "family": "Avalanche",
   "power": 1842592507
  },
  {
   "server": 36006,
   "family": "TeamPanda44",
   "power": 1170134112
  },
  {
   "server": 36006,
   "family": "Apocalypse",
   "power": 872888665
  },
  {
   "server": 36006,
   "family": "fc_copain",
   "power": 869211222
  },
  {
   "server": 36006,
   "family": "FrenchCore",
   "power": 471399952
  },
  {
   "server": 36006,
   "family": "champiland",
   "power": 447754694
  },
  {
   "server": 36006,
   "family": "ChampiAtomique",
   "power": 342148884
  },
  {
   "server": 36006,
   "family": "One_Piece",
   "power": 281868660
  },
  {
   "server": 36006,
   "family": "Izanami",
   "power": 279305682
  },
  {
   "server": 36007,
   "family": "UmbrellaCorps",
   "power": 1972213900
  },
  {
   "server": 36007,
   "family": "Moonlight",
   "power": 1832798857
  },
  {
   "server": 36007,
   "family": "Immortal",
   "power": 1059707167
  },
  {
   "server": 36007,
   "family": "Supremacy",
   "power": 848156886
  },
  {
   "server": 36007,
   "family": "LesGros",
   "power": 636154646
  },
  {
   "server": 36007,
   "family": "France",
   "power": 543188138
  },
  {
   "server": 36007,
   "family": "Frenchill",
   "power": 398837472
  },
  {
   "server": 36007,
   "family": "Frenchmushroom",
   "power": 318233691
  },
  {
   "server": 36007,
   "family": "1Grain2Sable",
   "power": 314978463
  },
  {
   "server": 36007,
   "family": "champiforce",
   "power": 309242962
  },
  {
   "server": 36008,
   "family": "Renaissance",
   "power": 1686284634
  },
  {
   "server": 36008,
   "family": "Casanostra",
   "power": 1498089612
  },
  {
   "server": 36008,
   "family": "Kaamelott",
   "power": 1453578850
  },
  {
   "server": 36008,
   "family": "Legandary",
   "power": 1223622312
  },
  {
   "server": 36008,
   "family": "French",
   "power": 516572599
  },
  {
   "server": 36008,
   "family": "France",
   "power": 461455263
  },
  {
   "server": 36008,
   "family": "MUGIWARAS",
   "power": 358484460
  },
  {
   "server": 36008,
   "family": "TeamGamer",
   "power": 333423493
  },
  {
   "server": 36008,
   "family": "InspiDuSoir",
   "power": 309465308
  },
  {
   "server": 36008,
   "family": "VogueMerry",
   "power": 298110355
  },
  {
   "server": 36009,
   "family": "Mycélium",
   "power": 1865209078
  },
  {
   "server": 36009,
   "family": "Shadow",
   "power": 1802258384
  },
  {
   "server": 36009,
   "family": "MushiStorm",
   "power": 638375013
  },
  {
   "server": 36009,
   "family": "ÉcarlateFR",
   "power": 502103645
  },
  {
   "server": 36009,
   "family": "LBG",
   "power": 413707304
  },
  {
   "server": 36009,
   "family": "DéterrésAuRhum",
   "power": 381091326
  },
  {
   "server": 36009,
   "family": "FairyTail",
   "power": 322880521
  },
  {
   "server": 36009,
   "family": "SUN",
   "power": 313926740
  },
  {
   "server": 36009,
   "family": "YouTubeFR",
   "power": 268753488
  },
  {
   "server": 36009,
   "family": "Cerberus",
   "power": 227456038
  },
  {
   "server": 36010,
   "family": "FR10",
   "power": 1791109847
  },
  {
   "server": 36010,
   "family": "Sixtoy",
   "power": 1631148817
  },
  {
   "server": 36010,
   "family": "FrenchEmpire",
   "power": 1371230882
  },
  {
   "server": 36010,
   "family": "Toad",
   "power": 1136469389
  },
  {
   "server": 36010,
   "family": "TamurilFamily",
   "power": 966728469
  },
  {
   "server": 36010,
   "family": "MushFriends",
   "power": 679763367
  },
  {
   "server": 36010,
   "family": "BlueMoon",
   "power": 302976119
  },
  {
   "server": 36010,
   "family": "Akuma",
   "power": 301914039
  },
  {
   "server": 36010,
   "family": "France",
   "power": 264666190
  },
  {
   "server": 36010,
   "family": "PGDcorporation",
   "power": 191366417
  },
  {
   "server": 36011,
   "family": "P2W",
   "power": 1808191088
  },
  {
   "server": 36011,
   "family": "COSANOSTRA",
   "power": 1477662914
  },
  {
   "server": 36011,
   "family": "BelleFrance",
   "power": 1085604098
  },
  {
   "server": 36011,
   "family": "French_Touch",
   "power": 579168514
  },
  {
   "server": 36011,
   "family": "F2P",
   "power": 491530029
  },
  {
   "server": 36011,
   "family": "La_Beuverie_Fr",
   "power": 379859547
  },
  {
   "server": 36011,
   "family": "Champ",
   "power": 343070865
  },
  {
   "server": 36011,
   "family": "Nova",
   "power": 276790036
  },
  {
   "server": 36011,
   "family": "Le_Champignar",
   "power": 212715230
  },
  {
   "server": 36011,
   "family": "la_baguette_fr",
   "power": 209130469
  },
  {
   "server": 36012,
   "family": "Kaamelott",
   "power": 1874241005
  },
  {
   "server": 36012,
   "family": "FlanUfhiwa",
   "power": 1595536470
  },
  {
   "server": 36012,
   "family": "Tempest",
   "power": 731487699
  },
  {
   "server": 36012,
   "family": "ChampiTeam_FR",
   "power": 439722834
  },
  {
   "server": 36012,
   "family": "Mushroom_fr",
   "power": 314806287
  },
  {
   "server": 36012,
   "family": "ChampiFR",
   "power": 300450098
  },
  {
   "server": 36012,
   "family": "noname",
   "power": 275469905
  },
  {
   "server": 36012,
   "family": "Vrac",
   "power": 231044201
  },
  {
   "server": 36012,
   "family": "Fishe",
   "power": 199488052
  },
  {
   "server": 36012,
   "family": "FR_WOLF",
   "power": 196620606
  },
  {
   "server": 36013,
   "family": "Asylum",
   "power": 1939638119
  },
  {
   "server": 36013,
   "family": "Champipoulpes",
   "power": 1333911117
  },
  {
   "server": 36013,
   "family": "Raouuuh🦖",
   "power": 600189754
  },
  {
   "server": 36013,
   "family": "RoisDuChaos",
   "power": 427843948
  },
  {
   "server": 36013,
   "family": "BDsClan",
   "power": 405623181
  },
  {
   "server": 36013,
   "family": "France",
   "power": 403871219
  },
  {
   "server": 36013,
   "family": "MushVoid",
   "power": 326949162
  },
  {
   "server": 36013,
   "family": "Lune",
   "power": 265949262
  },
  {
   "server": 36013,
   "family": "Devilcats",
   "power": 247734024
  },
  {
   "server": 36013,
   "family": "Avalon",
   "power": 228303196
  },
  {
   "server": 36014,
   "family": "EgocentriK",
   "power": 1959366194
  },
  {
   "server": 36014,
   "family": "Les_Français",
   "power": 1293868116
  },
  {
   "server": 36014,
   "family": "EgocentriK2",
   "power": 914847164
  },
  {
   "server": 36014,
   "family": "Sweetkorn",
   "power": 683706831
  },
  {
   "server": 36014,
   "family": "WolfGarden",
   "power": 429281603
  },
  {
   "server": 36014,
   "family": "FrenchChampi",
   "power": 393645468
  },
  {
   "server": 36014,
   "family": "Trentenaires",
   "power": 331841971
  },
  {
   "server": 36014,
   "family": "ChampiChampoFR",
   "power": 242578545
  },
  {
   "server": 36014,
   "family": "TheShadow",
   "power": 192797892
  },
  {
   "server": 36014,
   "family": "Akatsuki",
   "power": 160057528
  },
  {
   "server": 36015,
   "family": "Exiled",
   "power": 1883855716
  },
  {
   "server": 36015,
   "family": "ExiledX",
   "power": 1079035641
  },
  {
   "server": 36015,
   "family": "MyChampiTeam",
   "power": 1050331993
  },
  {
   "server": 36015,
   "family": "MushWarriors",
   "power": 395777277
  },
  {
   "server": 36015,
   "family": "TOADCLANS",
   "power": 391505525
  },
  {
   "server": 36015,
   "family": "onizuguilde",
   "power": 285451349
  },
  {
   "server": 36015,
   "family": "franchmonster",
   "power": 273237314
  },
  {
   "server": 36015,
   "family": "Sinystra",
   "power": 254726854
  },
  {
   "server": 36015,
   "family": "TeamToadFR",
   "power": 223747618
  },
  {
   "server": 36015,
   "family": "LesMirons",
   "power": 217522221
  },
  {
   "server": 36016,
   "family": "ChallenGer",
   "power": 1763918118
  },
  {
   "server": 36016,
   "family": "UCHIWA",
   "power": 1404736763
  },
  {
   "server": 36016,
   "family": "ChampiFrench",
   "power": 1209471423
  },
  {
   "server": 36016,
   "family": "FRx468",
   "power": 720501709
  },
  {
   "server": 36016,
   "family": "france",
   "power": 358516027
  },
  {
   "server": 36016,
   "family": "FrenchArmy",
   "power": 349465393
  },
  {
   "server": 36016,
   "family": "Champiclub",
   "power": 308836140
  },
  {
   "server": 36016,
   "family": "BaseDesNeuille",
   "power": 295743474
  },
  {
   "server": 36016,
   "family": "chamchampi",
   "power": 290403961
  },
  {
   "server": 36016,
   "family": "GenesisFr",
   "power": 248519303
  },
  {
   "server": 36017,
   "family": "Divinity",
   "power": 1818179967
  },
  {
   "server": 36017,
   "family": "Champions",
   "power": 1647650960
  },
  {
   "server": 36017,
   "family": "Mushroom_Army",
   "power": 954456176
  },
  {
   "server": 36017,
   "family": "Leveling",
   "power": 502557897
  },
  {
   "server": 36017,
   "family": "FR_DIVISION",
   "power": 471644780
  },
  {
   "server": 36017,
   "family": "FR_Oxygen",
   "power": 430863639
  },
  {
   "server": 36017,
   "family": "Les_Champis",
   "power": 400864725
  },
  {
   "server": 36017,
   "family": "Frenchies",
   "power": 364340520
  },
  {
   "server": 36017,
   "family": "LMNTRIX",
   "power": 250120442
  },
  {
   "server": 36017,
   "family": "Champitié",
   "power": 222597337
  },
  {
   "server": 36018,
   "family": "AiRaliUm",
   "power": 1715130102
  },
  {
   "server": 36018,
   "family": "Spirit",
   "power": 1311767607
  },
  {
   "server": 36018,
   "family": "Kinoko",
   "power": 1084651038
  },
  {
   "server": 36018,
   "family": "Baguette",
   "power": 569112619
  },
  {
   "server": 36018,
   "family": "CLAN_FR_TOP1",
   "power": 418453802
  },
  {
   "server": 36018,
   "family": "Akasaki",
   "power": 416188598
  },
  {
   "server": 36018,
   "family": "Royal",
   "power": 344249282
  },
  {
   "server": 36018,
   "family": "Akatsuki",
   "power": 341591471
  },
  {
   "server": 36018,
   "family": "Mugiwaras",
   "power": 339886859
  },
  {
   "server": 36018,
   "family": "frenchMonkey",
   "power": 324753140
  },
  {
   "server": 36019,
   "family": "Moonlight",
   "power": 1902705913
  },
  {
   "server": 36019,
   "family": "AKATSUKI",
   "power": 1847169013
  },
  {
   "server": 36019,
   "family": "Champa",
   "power": 1154594757
  },
  {
   "server": 36019,
   "family": "LaCrypte",
   "power": 381567468
  },
  {
   "server": 36019,
   "family": "LaCrème",
   "power": 334624715
  },
  {
   "server": 36019,
   "family": "FranceElite",
   "power": 256450954
  },
  {
   "server": 36019,
   "family": "Psyl●",
   "power": 247908466
  },
  {
   "server": 36019,
   "family": "French_ActiMel",
   "power": 231099838
  },
  {
   "server": 36019,
   "family": "Asuna",
   "power": 230192377
  },
  {
   "server": 36019,
   "family": "Kaizokudan",
   "power": 168942973
  },
  {
   "server": 36020,
   "family": "Akatsuki",
   "power": 1808124022
  },
  {
   "server": 36020,
   "family": "FranceOmega",
   "power": 1772649392
  },
  {
   "server": 36020,
   "family": "LesMenaces",
   "power": 576922874
  },
  {
   "server": 36020,
   "family": "LesMycoses",
   "power": 525385085
  },
  {
   "server": 36020,
   "family": "Ehpad",
   "power": 387888310
  },
  {
   "server": 36020,
   "family": "LaTaverne",
   "power": 247560298
  },
  {
   "server": 36020,
   "family": "金",
   "power": 200189631
  },
  {
   "server": 36020,
   "family": "LesEnragés",
   "power": 161420224
  },
  {
   "server": 36020,
   "family": "bjrlesgens",
   "power": 156229990
  },
  {
   "server": 36020,
   "family": "LesFuriosa",
   "power": 149978483
  },
  {
   "server": 36021,
   "family": "LesFongicides",
   "power": 1758006418
  },
  {
   "server": 36021,
   "family": "Conquérants",
   "power": 1582022638
  },
  {
   "server": 36021,
   "family": "Royal",
   "power": 1393997019
  },
  {
   "server": 36021,
   "family": "KCORP",
   "power": 471690150
  },
  {
   "server": 36021,
   "family": "France",
   "power": 379958006
  },
  {
   "server": 36021,
   "family": "shadow",
   "power": 361949631
  },
  {
   "server": 36021,
   "family": "TeamFrance",
   "power": 283897762
  },
  {
   "server": 36021,
   "family": "lesbelge",
   "power": 256947490
  },
  {
   "server": 36021,
   "family": "GodlyMushroom",
   "power": 248772671
  },
  {
   "server": 36021,
   "family": "suiiiiiiiiiiii",
   "power": 175442527
  },
  {
   "server": 36022,
   "family": "SonOfMushroom",
   "power": 1778841757
  },
  {
   "server": 36022,
   "family": "Lotus",
   "power": 1410300991
  },
  {
   "server": 36022,
   "family": "Nevrosia",
   "power": 1256703208
  },
  {
   "server": 36022,
   "family": "MushBreaker",
   "power": 764470331
  },
  {
   "server": 36022,
   "family": "Champinoir",
   "power": 300823807
  },
  {
   "server": 36022,
   "family": "vivelaFrance",
   "power": 282522151
  },
  {
   "server": 36022,
   "family": "AntiRatz",
   "power": 245139107
  },
  {
   "server": 36022,
   "family": "Petitmushroom",
   "power": 214848490
  },
  {
   "server": 36022,
   "family": "musherfucker",
   "power": 146425689
  },
  {
   "server": 36022,
   "family": "Champignon2fou",
   "power": 120788596
  },
  {
   "server": 36023,
   "family": "Renaissance",
   "power": 1640458714
  },
  {
   "server": 36023,
   "family": "Hera",
   "power": 1539204926
  },
  {
   "server": 36023,
   "family": "Frenchriviera",
   "power": 704540547
  },
  {
   "server": 36023,
   "family": "LesAlcoolHic",
   "power": 381861727
  },
  {
   "server": 36023,
   "family": "Asgard",
   "power": 228715771
  },
  {
   "server": 36023,
   "family": "Rengoku",
   "power": 220764811
  },
  {
   "server": 36023,
   "family": "PeakyBlinders",
   "power": 209859927
  },
  {
   "server": 36023,
   "family": "Croustillants",
   "power": 209294213
  },
  {
   "server": 36023,
   "family": "soiréepizza",
   "power": 197422499
  },
  {
   "server": 36023,
   "family": "Arcadia",
   "power": 189090546
  },
  {
   "server": 36024,
   "family": "GénérationY",
   "power": 1598250721
  },
  {
   "server": 36024,
   "family": "TEMPESTO",
   "power": 1578186920
  },
  {
   "server": 36024,
   "family": "UNDERWORLD",
   "power": 1192392886
  },
  {
   "server": 36024,
   "family": "France2",
   "power": 340956366
  },
  {
   "server": 36024,
   "family": "freedom",
   "power": 340538160
  },
  {
   "server": 36024,
   "family": "fairytail",
   "power": 299379055
  },
  {
   "server": 36024,
   "family": "Baguette",
   "power": 249841887
  },
  {
   "server": 36024,
   "family": "Tcorp",
   "power": 180727202
  },
  {
   "server": 36024,
   "family": "DeadMan",
   "power": 157261864
  },
  {
   "server": 36024,
   "family": "ChampiGardiens",
   "power": 144452832
  },
  {
   "server": 36025,
   "family": "FR1",
   "power": 1684559515
  },
  {
   "server": 36025,
   "family": "Shujin",
   "power": 1498501545
  },
  {
   "server": 36025,
   "family": "CANARD",
   "power": 895324340
  },
  {
   "server": 36025,
   "family": "ZinZinks",
   "power": 381483377
  },
  {
   "server": 36025,
   "family": "FR3",
   "power": 341844382
  },
  {
   "server": 36025,
   "family": "Zatral",
   "power": 328563034
  },
  {
   "server": 36025,
   "family": "phoenixfr",
   "power": 314847114
  },
  {
   "server": 36025,
   "family": "deglingo85",
   "power": 242666556
  },
  {
   "server": 36025,
   "family": "GloireaFR1",
   "power": 214819027
  },
  {
   "server": 36025,
   "family": "LafactionBZH",
   "power": 199578546
  },
  {
   "server": 36026,
   "family": "Universal",
   "power": 1680718895
  },
  {
   "server": 36026,
   "family": "Legendary",
   "power": 1397470291
  },
  {
   "server": 36026,
   "family": "MithrandirFR",
   "power": 1222827216
  },
  {
   "server": 36026,
   "family": "Phantasy",
   "power": 380862108
  },
  {
   "server": 36026,
   "family": "FireFR",
   "power": 379253947
  },
  {
   "server": 36026,
   "family": "LeRoyaume",
   "power": 312931593
  },
  {
   "server": 36026,
   "family": "Léviathan",
   "power": 268239381
  },
  {
   "server": 36026,
   "family": "Trinity",
   "power": 253591038
  },
  {
   "server": 36026,
   "family": "FrenchLigue",
   "power": 251182578
  },
  {
   "server": 36026,
   "family": "GAM1",
   "power": 215079016
  },
  {
   "server": 36027,
   "family": "Pokédex",
   "power": 1745184024
  },
  {
   "server": 36027,
   "family": "Antisocial",
   "power": 1506943649
  },
  {
   "server": 36027,
   "family": "Aeternum",
   "power": 583234584
  },
  {
   "server": 36027,
   "family": "Les_Goats",
   "power": 246324697
  },
  {
   "server": 36027,
   "family": "Voff_FR",
   "power": 242860357
  },
  {
   "server": 36027,
   "family": "Clan_Chill_FR",
   "power": 226226354
  },
  {
   "server": 36027,
   "family": "TheFrenchGuild",
   "power": 216005746
  },
  {
   "server": 36027,
   "family": "leclanfr",
   "power": 215354027
  },
  {
   "server": 36027,
   "family": "ClanDesVieux30",
   "power": 212159809
  },
  {
   "server": 36027,
   "family": "french_legions",
   "power": 211152884
  },
  {
   "server": 36028,
   "family": "DOLA",
   "power": 1600957813
  },
  {
   "server": 36028,
   "family": "FrenchPower",
   "power": 1462155500
  },
  {
   "server": 36028,
   "family": "Rt_France",
   "power": 479886769
  },
  {
   "server": 36028,
   "family": "Les_Gameurs",
   "power": 389585676
  },
  {
   "server": 36028,
   "family": "first",
   "power": 340332092
  },
  {
   "server": 36028,
   "family": "RoyalMushroom",
   "power": 331272727
  },
  {
   "server": 36028,
   "family": "Goldenteache",
   "power": 328841448
  },
  {
   "server": 36028,
   "family": "champignons",
   "power": 293164411
  },
  {
   "server": 36028,
   "family": "Fr",
   "power": 254446347
  },
  {
   "server": 36028,
   "family": "Légende",
   "power": 211231723
  },
  {
   "server": 36029,
   "family": "Legionary",
   "power": 1879080315
  },
  {
   "server": 36029,
   "family": "LaRenDesChoux",
   "power": 1275834386
  },
  {
   "server": 36029,
   "family": "Champignons",
   "power": 458692878
  },
  {
   "server": 36029,
   "family": "Wonkru",
   "power": 380734258
  },
  {
   "server": 36029,
   "family": "CocoJojo🤠",
   "power": 279673458
  },
  {
   "server": 36029,
   "family": "Prout’Land",
   "power": 232807975
  },
  {
   "server": 36029,
   "family": "French",
   "power": 210972045
  },
  {
   "server": 36029,
   "family": "Ydra",
   "power": 206492291
  },
  {
   "server": 36029,
   "family": "KAAMELOTT",
   "power": 174360863
  },
  {
   "server": 36029,
   "family": "vraisFR",
   "power": 172553722
  },
  {
   "server": 36030,
   "family": "TeaParty",
   "power": 1944265648
  },
  {
   "server": 36030,
   "family": "Mortuim",
   "power": 1386069994
  },
  {
   "server": 36030,
   "family": "OKLM",
   "power": 625519508
  },
  {
   "server": 36030,
   "family": "FRANCE",
   "power": 452893841
  },
  {
   "server": 36030,
   "family": "Byakugan",
   "power": 269625581
  },
  {
   "server": 36030,
   "family": "DarksideFR",
   "power": 265809687
  },
  {
   "server": 36030,
   "family": "LapinHood",
   "power": 250207851
  },
  {
   "server": 36030,
   "family": "BaguetteArmy",
   "power": 231638528
  },
  {
   "server": 36030,
   "family": "morty",
   "power": 186375231
  },
  {
   "server": 36030,
   "family": "uwu",
   "power": 166643022
  },
  {
   "server": 36031,
   "family": "𝖊𝖙𝖊𝖗𝖓𝖆𝖑",
   "power": 1837327000
  },
  {
   "server": 36031,
   "family": "Les_Français",
   "power": 1028309190
  },
  {
   "server": 36031,
   "family": "LaGrotte",
   "power": 647866154
  },
  {
   "server": 36031,
   "family": "GODLIKE",
   "power": 443496074
  },
  {
   "server": 36031,
   "family": "ᴠᴀʟʜᴀʟʟᴀ",
   "power": 378174379
  },
  {
   "server": 36031,
   "family": "Aube",
   "power": 295957444
  },
  {
   "server": 36031,
   "family": "France",
   "power": 273500004
  },
  {
   "server": 36031,
   "family": "tempest",
   "power": 258638009
  },
  {
   "server": 36031,
   "family": "Runecelte",
   "power": 180803995
  },
  {
   "server": 36031,
   "family": "bistouquette",
   "power": 142870910
  },
  {
   "server": 36032,
   "family": "TheFirst",
   "power": 1674104770
  },
  {
   "server": 36032,
   "family": "๛LesMushs𓆃",
   "power": 1499244710
  },
  {
   "server": 36032,
   "family": "NewHope",
   "power": 825631588
  },
  {
   "server": 36032,
   "family": "ToadFr",
   "power": 365230829
  },
  {
   "server": 36032,
   "family": "Lesphœnixnoirs",
   "power": 303570208
  },
  {
   "server": 36032,
   "family": "ignominie",
   "power": 244767417
  },
  {
   "server": 36032,
   "family": "L’EMPIRE",
   "power": 232998431
  },
  {
   "server": 36032,
   "family": "FunGuy",
   "power": 161910298
  },
  {
   "server": 36032,
   "family": "NZKdream",
   "power": 161771280
  },
  {
   "server": 36032,
   "family": "Carpe_Diem",
   "power": 130120005
  },
  {
   "server": 36033,
   "family": "NightRaid",
   "power": 1721274814
  },
  {
   "server": 36033,
   "family": "TeamChampote",
   "power": 1368504120
  },
  {
   "server": 36033,
   "family": "MushroomFR",
   "power": 758710999
  },
  {
   "server": 36033,
   "family": "ClanDeGrand",
   "power": 419993984
  },
  {
   "server": 36033,
   "family": "FrenchOnly",
   "power": 328631350
  },
  {
   "server": 36033,
   "family": "FallenAngels",
   "power": 291812977
  },
  {
   "server": 36033,
   "family": "LesZigotos",
   "power": 243839513
  },
  {
   "server": 36033,
   "family": "héros",
   "power": 217003368
  },
  {
   "server": 36033,
   "family": "frenchpredator",
   "power": 173595865
  },
  {
   "server": 36033,
   "family": "champignon",
   "power": 172585394
  },
  {
   "server": 36034,
   "family": "Fungi",
   "power": 1678063026
  },
  {
   "server": 36034,
   "family": "Kamuî",
   "power": 1606518227
  },
  {
   "server": 36034,
   "family": "Mushriors",
   "power": 1362049499
  },
  {
   "server": 36034,
   "family": "FTC_FR",
   "power": 464594848
  },
  {
   "server": 36034,
   "family": "ELITE",
   "power": 444980919
  },
  {
   "server": 36034,
   "family": "Tartare",
   "power": 368421148
  },
  {
   "server": 36034,
   "family": "LaToadFamily",
   "power": 367242133
  },
  {
   "server": 36034,
   "family": "CallOfChampi",
   "power": 304016660
  },
  {
   "server": 36034,
   "family": "Atena",
   "power": 279482248
  },
  {
   "server": 36034,
   "family": "LesChampis",
   "power": 250782122
  },
  {
   "server": 36035,
   "family": "Amnesya",
   "power": 1949222982
  },
  {
   "server": 36035,
   "family": "Obscure",
   "power": 1167683404
  },
  {
   "server": 36035,
   "family": "ProjectSquad",
   "power": 781670737
  },
  {
   "server": 36035,
   "family": "Akatsuki",
   "power": 522673884
  },
  {
   "server": 36035,
   "family": "Dynastie",
   "power": 491115629
  },
  {
   "server": 36035,
   "family": "LaSaintePizza",
   "power": 405730084
  },
  {
   "server": 36035,
   "family": "LeChalet",
   "power": 364344625
  },
  {
   "server": 36035,
   "family": "shroomjustice",
   "power": 317035168
  },
  {
   "server": 36035,
   "family": "Unlimited",
   "power": 187576779
  },
  {
   "server": 36035,
   "family": "MCHD",
   "power": 178145419
  },
  {
   "server": 36036,
   "family": "LightInHole",
   "power": 1524932779
  },
  {
   "server": 36036,
   "family": "France",
   "power": 1340596439
  },
  {
   "server": 36036,
   "family": "rip",
   "power": 830885690
  },
  {
   "server": 36036,
   "family": "Kaamelott",
   "power": 408953952
  },
  {
   "server": 36036,
   "family": "Petites_fleurs",
   "power": 380399807
  },
  {
   "server": 36036,
   "family": "jeux_cool",
   "power": 306350524
  },
  {
   "server": 36036,
   "family": "OverDiablo",
   "power": 298347324
  },
  {
   "server": 36036,
   "family": "Shadow",
   "power": 255937125
  },
  {
   "server": 36036,
   "family": "FrenchTeam",
   "power": 232032629
  },
  {
   "server": 36036,
   "family": "DarkShadow",
   "power": 228514917
  },
  {
   "server": 36037,
   "family": "HallOfLegends",
   "power": 2217419980
  },
  {
   "server": 36037,
   "family": "PiratesDeMars",
   "power": 2163387671
  },
  {
   "server": 36037,
   "family": "PiratesDeMars2",
   "power": 1450369879
  },
  {
   "server": 36037,
   "family": "BlueMoon",
   "power": 1366900057
  },
  {
   "server": 36037,
   "family": "HallOfLegends2",
   "power": 1333129134
  },
  {
   "server": 36037,
   "family": "PiratesDeMars4",
   "power": 1291679473
  },
  {
   "server": 36037,
   "family": "animeteam",
   "power": 1052377320
  },
  {
   "server": 36037,
   "family": "FckPDM",
   "power": 1033774339
  },
  {
   "server": 36037,
   "family": "PiratesDeMars7",
   "power": 690386258
  },
  {
   "server": 36037,
   "family": "PiratesDeMars8",
   "power": 536283357
  },
  {
   "server": 36038,
   "family": "Empire",
   "power": 1760340994
  },
  {
   "server": 36038,
   "family": "Hydra",
   "power": 1372085324
  },
  {
   "server": 36038,
   "family": "chillax",
   "power": 662347617
  },
  {
   "server": 36038,
   "family": "Frenchcore",
   "power": 304041806
  },
  {
   "server": 36038,
   "family": "Tchamp",
   "power": 267389203
  },
  {
   "server": 36038,
   "family": "_Shadow_",
   "power": 212670218
  },
  {
   "server": 36038,
   "family": "Sunridas",
   "power": 206794009
  },
  {
   "server": 36038,
   "family": "PTDQ",
   "power": 190084603
  },
  {
   "server": 36038,
   "family": "Toad",
   "power": 156537235
  },
  {
   "server": 36038,
   "family": "LesSuperDingos",
   "power": 145255546
  },
  {
   "server": 36039,
   "family": "FORESTIA",
   "power": 1625245072
  },
  {
   "server": 36039,
   "family": "Champiland",
   "power": 1535410899
  },
  {
   "server": 36039,
   "family": "STSO",
   "power": 856163841
  },
  {
   "server": 36039,
   "family": "PARCIMONIA",
   "power": 792328633
  },
  {
   "server": 36039,
   "family": "AngeDéchu",
   "power": 339983597
  },
  {
   "server": 36039,
   "family": "L’oroJackson",
   "power": 242266578
  },
  {
   "server": 36039,
   "family": "Project",
   "power": 202492825
  },
  {
   "server": 36039,
   "family": "YugiTeam",
   "power": 186735586
  },
  {
   "server": 36039,
   "family": "TaNCteam",
   "power": 155773180
  },
  {
   "server": 36039,
   "family": "MIAMIAM",
   "power": 149239187
  },
  {
   "server": 36040,
   "family": "TxB",
   "power": 1797463331
  },
  {
   "server": 36040,
   "family": "SoulLessSpirit",
   "power": 1342912218
  },
  {
   "server": 36040,
   "family": "HADES",
   "power": 947180885
  },
  {
   "server": 36040,
   "family": "JambonBeurre",
   "power": 505161858
  },
  {
   "server": 36040,
   "family": "Zeus",
   "power": 289981973
  },
  {
   "server": 36040,
   "family": "Omega",
   "power": 236676347
  },
  {
   "server": 36040,
   "family": "Beescuiterie",
   "power": 228849083
  },
  {
   "server": 36040,
   "family": "SoloLeveling",
   "power": 207173324
  },
  {
   "server": 36040,
   "family": "ABYSS",
   "power": 183657648
  },
  {
   "server": 36040,
   "family": "zeubi",
   "power": 178876340
  },
  {
   "server": 36041,
   "family": "Némésis",
   "power": 1940041979
  },
  {
   "server": 36041,
   "family": "NémésisCorp",
   "power": 1541962125
  },
  {
   "server": 36041,
   "family": "NeverGiveUp",
   "power": 1026107580
  },
  {
   "server": 36041,
   "family": "NeverGiveUp3",
   "power": 520418823
  },
  {
   "server": 36041,
   "family": "Phénix",
   "power": 468766997
  },
  {
   "server": 36041,
   "family": "Horizon",
   "power": 425462156
  },
  {
   "server": 36041,
   "family": "NeverGiveUp2",
   "power": 393080013
  },
  {
   "server": 36041,
   "family": "FR",
   "power": 287434197
  },
  {
   "server": 36041,
   "family": "pupuce",
   "power": 262430701
  },
  {
   "server": 36041,
   "family": "LesFrançais",
   "power": 234897775
  },
  {
   "server": 36042,
   "family": "Reaper",
   "power": 1856943866
  },
  {
   "server": 36042,
   "family": "Pokéflex",
   "power": 1727086804
  },
  {
   "server": 36042,
   "family": "Cendawan",
   "power": 1356860062
  },
  {
   "server": 36042,
   "family": "Winterfell",
   "power": 458786494
  },
  {
   "server": 36042,
   "family": "THANATOS",
   "power": 381193778
  },
  {
   "server": 36042,
   "family": "Saturne",
   "power": 351996353
  },
  {
   "server": 36042,
   "family": "premierfr",
   "power": 294756588
  },
  {
   "server": 36042,
   "family": "phoenixfr",
   "power": 277297547
  },
  {
   "server": 36042,
   "family": "Ūtopia",
   "power": 238577660
  },
  {
   "server": 36042,
   "family": "Kaamelott",
   "power": 191977476
  },
  {
   "server": 36043,
   "family": "Olympe",
   "power": 1879627937
  },
  {
   "server": 36043,
   "family": "Nebula",
   "power": 1652193776
  },
  {
   "server": 36043,
   "family": "ToadArmy",
   "power": 966709356
  },
  {
   "server": 36043,
   "family": "GuezTapo",
   "power": 366344900
  },
  {
   "server": 36043,
   "family": "BadGones",
   "power": 351694282
  },
  {
   "server": 36043,
   "family": "FlopSquad",
   "power": 345657416
  },
  {
   "server": 36043,
   "family": "ChampiGnons",
   "power": 251336260
  },
  {
   "server": 36043,
   "family": "Poppybouh",
   "power": 234971200
  },
  {
   "server": 36043,
   "family": "DarckFox",
   "power": 211074035
  },
  {
   "server": 36043,
   "family": "Champidolf",
   "power": 210350814
  },
  {
   "server": 36044,
   "family": "Chimera",
   "power": 1842715384
  },
  {
   "server": 36044,
   "family": "TakeDown",
   "power": 1668161630
  },
  {
   "server": 36044,
   "family": "InSomnia",
   "power": 651208196
  },
  {
   "server": 36044,
   "family": "Dragonniers",
   "power": 426266061
  },
  {
   "server": 36044,
   "family": "Ephedia",
   "power": 422434951
  },
  {
   "server": 36044,
   "family": "FRANCE",
   "power": 373277374
  },
  {
   "server": 36044,
   "family": "Valhalla",
   "power": 363270818
  },
  {
   "server": 36044,
   "family": "Anonymous",
   "power": 355038187
  },
  {
   "server": 36044,
   "family": "Noopy",
   "power": 335471844
  },
  {
   "server": 36044,
   "family": "TopFr",
   "power": 284407719
  },
  {
   "server": 36045,
   "family": "Midgard",
   "power": 1787997986
  },
  {
   "server": 36045,
   "family": "TheEbonyBlade",
   "power": 581494640
  },
  {
   "server": 36045,
   "family": "La_Pizzeria",
   "power": 571181046
  },
  {
   "server": 36045,
   "family": "crocclanfr",
   "power": 419634628
  },
  {
   "server": 36045,
   "family": "Shadow",
   "power": 328394921
  },
  {
   "server": 36045,
   "family": "Olympe",
   "power": 296905305
  },
  {
   "server": 36045,
   "family": "Champenois",
   "power": 284266733
  },
  {
   "server": 36045,
   "family": "Osiris",
   "power": 246509860
  },
  {
   "server": 36045,
   "family": "HeavenQuest",
   "power": 236891156
  },
  {
   "server": 36045,
   "family": "LesMenaces",
   "power": 219604634
  },
  {
   "server": 36046,
   "family": "Nuit",
   "power": 1856044624
  },
  {
   "server": 36046,
   "family": "The_Legends",
   "power": 1516825321
  },
  {
   "server": 36046,
   "family": "FRANCE_TRYHARD",
   "power": 816001960
  },
  {
   "server": 36046,
   "family": "Valhalla",
   "power": 410613024
  },
  {
   "server": 36046,
   "family": "DESTINY",
   "power": 358801511
  },
  {
   "server": 36046,
   "family": "xXrevoXx",
   "power": 306428450
  },
  {
   "server": 36046,
   "family": "Les42Licornes",
   "power": 267441488
  },
  {
   "server": 36046,
   "family": "ChampiMeuh",
   "power": 261688542
  },
  {
   "server": 36046,
   "family": "Akatsuki",
   "power": 257512244
  },
  {
   "server": 36046,
   "family": "FR",
   "power": 251884208
  },
  {
   "server": 36047,
   "family": "Akezya",
   "power": 1826765403
  },
  {
   "server": 36047,
   "family": "PateAPops",
   "power": 1719453702
  },
  {
   "server": 36047,
   "family": "ChampiFrance",
   "power": 1544871421
  },
  {
   "server": 36047,
   "family": "L’Akatsuki",
   "power": 512246150
  },
  {
   "server": 36047,
   "family": "France",
   "power": 493038307
  },
  {
   "server": 36047,
   "family": "FrenchFamily",
   "power": 448594540
  },
  {
   "server": 36047,
   "family": "Py79Zoo",
   "power": 286842825
  },
  {
   "server": 36047,
   "family": "Creepeland",
   "power": 277411955
  },
  {
   "server": 36047,
   "family": "ouaisouais",
   "power": 252729618
  },
  {
   "server": 36047,
   "family": "chezmoi",
   "power": 232427529
  },
  {
   "server": 36048,
   "family": "RevencyaFR",
   "power": 1738276738
  },
  {
   "server": 36048,
   "family": "LeagueOfMush",
   "power": 1649986329
  },
  {
   "server": 36048,
   "family": "RevencyaFR2",
   "power": 1117309440
  },
  {
   "server": 36048,
   "family": "BlueRain",
   "power": 528536330
  },
  {
   "server": 36048,
   "family": "LegendOmega",
   "power": 489526461
  },
  {
   "server": 36048,
   "family": "ChampisFR",
   "power": 407382891
  },
  {
   "server": 36048,
   "family": "DeusChampi",
   "power": 405112044
  },
  {
   "server": 36048,
   "family": "girolle",
   "power": 320192011
  },
  {
   "server": 36048,
   "family": "Bestfrclan",
   "power": 317597054
  },
  {
   "server": 36048,
   "family": "FlopSquad",
   "power": 244378344
  },
  {
   "server": 36049,
   "family": "Phœnix",
   "power": 1837127494
  },
  {
   "server": 36049,
   "family": "Genesis",
   "power": 1600566605
  },
  {
   "server": 36049,
   "family": "LaHorde",
   "power": 945753523
  },
  {
   "server": 36049,
   "family": "LesCreusoisFR",
   "power": 389126332
  },
  {
   "server": 36049,
   "family": "Unions",
   "power": 332128751
  },
  {
   "server": 36049,
   "family": "BubuleTeam",
   "power": 310927705
  },
  {
   "server": 36049,
   "family": "NOLIMIT",
   "power": 240771440
  },
  {
   "server": 36049,
   "family": "Rédemption",
   "power": 213438357
  },
  {
   "server": 36049,
   "family": "BeastyClan",
   "power": 211648945
  },
  {
   "server": 36049,
   "family": "Shinra",
   "power": 209924174
  },
  {
   "server": 36050,
   "family": "Mugiwara",
   "power": 1703131796
  },
  {
   "server": 36050,
   "family": "FrenchRevo",
   "power": 1638166309
  },
  {
   "server": 36050,
   "family": "Sinister",
   "power": 707629827
  },
  {
   "server": 36050,
   "family": "TeamFrance",
   "power": 336993329
  },
  {
   "server": 36050,
   "family": "Moonlight",
   "power": 259903231
  },
  {
   "server": 36050,
   "family": "Synopsis",
   "power": 234424112
  },
  {
   "server": 36050,
   "family": "Overlord",
   "power": 218805790
  },
  {
   "server": 36050,
   "family": "LEROYAUME",
   "power": 172292153
  },
  {
   "server": 36050,
   "family": "Frōmage",
   "power": 159645678
  },
  {
   "server": 36050,
   "family": "FrenchEvo",
   "power": 139144501
  },
  {
   "server": 36051,
   "family": "Eclipse_FR",
   "power": 1481260497
  },
  {
   "server": 36051,
   "family": "Fr_Universe",
   "power": 1291118241
  },
  {
   "server": 36051,
   "family": "FrenchReborn",
   "power": 1092397658
  },
  {
   "server": 36051,
   "family": "Champichou",
   "power": 531607137
  },
  {
   "server": 36051,
   "family": "Shadow",
   "power": 289114718
  },
  {
   "server": 36051,
   "family": "Azap",
   "power": 277058707
  },
  {
   "server": 36051,
   "family": "IceDragon",
   "power": 247864306
  },
  {
   "server": 36051,
   "family": "Vallhala",
   "power": 246023365
  },
  {
   "server": 36051,
   "family": "Eagles",
   "power": 240267901
  },
  {
   "server": 36051,
   "family": "UNLESS_V",
   "power": 216387114
  },
  {
   "server": 36052,
   "family": "BornToWin",
   "power": 2007349541
  },
  {
   "server": 36052,
   "family": "Arise",
   "power": 1725038631
  },
  {
   "server": 36052,
   "family": "BADCOMPANY",
   "power": 996594542
  },
  {
   "server": 36052,
   "family": "BornToWin2",
   "power": 689541883
  },
  {
   "server": 36052,
   "family": "Fr",
   "power": 543242354
  },
  {
   "server": 36052,
   "family": "FrenchReapers",
   "power": 513910843
  },
  {
   "server": 36052,
   "family": "ArbreSacré",
   "power": 286895447
  },
  {
   "server": 36052,
   "family": "Kavaress",
   "power": 267894578
  },
  {
   "server": 36052,
   "family": "Arkadia",
   "power": 258771021
  },
  {
   "server": 36052,
   "family": "AlphaFrance",
   "power": 232701414
  },
  {
   "server": 36053,
   "family": "LionHeart",
   "power": 1866065469
  },
  {
   "server": 36053,
   "family": "Nova",
   "power": 1565337301
  },
  {
   "server": 36053,
   "family": "Neptune",
   "power": 1135811767
  },
  {
   "server": 36053,
   "family": "HIPPOPOTEAM",
   "power": 567944203
  },
  {
   "server": 36053,
   "family": "Moonwhite",
   "power": 325484019
  },
  {
   "server": 36053,
   "family": "SheyArchy",
   "power": 319887701
  },
  {
   "server": 36053,
   "family": "Neuillemalice",
   "power": 301909180
  },
  {
   "server": 36053,
   "family": "PouetPouet",
   "power": 282974801
  },
  {
   "server": 36053,
   "family": "Kawaii🥰🥰",
   "power": 262564017
  },
  {
   "server": 36053,
   "family": "Bobsleigh",
   "power": 248221322
  },
  {
   "server": 36054,
   "family": "MushEvils",
   "power": 1948134333
  },
  {
   "server": 36054,
   "family": "LumberJack",
   "power": 1489997167
  },
  {
   "server": 36054,
   "family": "Yonkos",
   "power": 941689977
  },
  {
   "server": 36054,
   "family": "LesMajeurs",
   "power": 350698998
  },
  {
   "server": 36054,
   "family": "Yolo",
   "power": 328469704
  },
  {
   "server": 36054,
   "family": "Phénix",
   "power": 318227266
  },
  {
   "server": 36054,
   "family": "zepocacabidou",
   "power": 207943205
  },
  {
   "server": 36054,
   "family": "Asgardiens",
   "power": 192115010
  },
  {
   "server": 36054,
   "family": "Føcus",
   "power": 187219794
  },
  {
   "server": 36054,
   "family": "TheMoon",
   "power": 164142366
  },
  {
   "server": 36055,
   "family": "Liones",
   "power": 2019817047
  },
  {
   "server": 36055,
   "family": "UNIFICATION",
   "power": 1263229055
  },
  {
   "server": 36055,
   "family": "Amaterasu",
   "power": 761907029
  },
  {
   "server": 36055,
   "family": "LesGirolles",
   "power": 405389685
  },
  {
   "server": 36055,
   "family": "CasualFamily",
   "power": 331960098
  },
  {
   "server": 36055,
   "family": "Shadow",
   "power": 250444085
  },
  {
   "server": 36055,
   "family": "inCube",
   "power": 245884161
  },
  {
   "server": 36055,
   "family": "NEGROLAND",
   "power": 237672324
  },
  {
   "server": 36055,
   "family": "Granola",
   "power": 220618830
  },
  {
   "server": 36055,
   "family": "onob",
   "power": 198240407
  },
  {
   "server": 36056,
   "family": "FranceBZH",
   "power": 1905739483
  },
  {
   "server": 36056,
   "family": "Kinoko",
   "power": 1593088160
  },
  {
   "server": 36056,
   "family": "Kïnoko",
   "power": 630519879
  },
  {
   "server": 36056,
   "family": "LegendarySmurf",
   "power": 376594132
  },
  {
   "server": 36056,
   "family": "Champifamilly",
   "power": 298009713
  },
  {
   "server": 36056,
   "family": "MagicTwo",
   "power": 286446642
  },
  {
   "server": 36056,
   "family": "NeedPull",
   "power": 229762481
  },
  {
   "server": 36056,
   "family": "therules1",
   "power": 214821806
  },
  {
   "server": 36056,
   "family": "AfterAll",
   "power": 209623353
  },
  {
   "server": 36056,
   "family": "Champiland",
   "power": 192552145
  },
  {
   "server": 36057,
   "family": "SHÌNE",
   "power": 1952893340
  },
  {
   "server": 36057,
   "family": "LaTeamChill",
   "power": 1671573149
  },
  {
   "server": 36057,
   "family": "TRONC",
   "power": 786983601
  },
  {
   "server": 36057,
   "family": "Hallucinogènes",
   "power": 588483045
  },
  {
   "server": 36057,
   "family": "France",
   "power": 563914710
  },
  {
   "server": 36057,
   "family": "FRANCE",
   "power": 438247328
  },
  {
   "server": 36057,
   "family": "ChampiFrancais",
   "power": 405551465
  },
  {
   "server": 36057,
   "family": "LaFrance",
   "power": 344473294
  },
  {
   "server": 36057,
   "family": "Tempest",
   "power": 312900663
  },
  {
   "server": 36057,
   "family": "Frenchfirst",
   "power": 310755429
  },
  {
   "server": 36058,
   "family": "NoMercy",
   "power": 1906530402
  },
  {
   "server": 36058,
   "family": "ATLAS",
   "power": 1756750100
  },
  {
   "server": 36058,
   "family": "TeamFrench",
   "power": 1114488281
  },
  {
   "server": 36058,
   "family": "HÉRACLÈS",
   "power": 666224731
  },
  {
   "server": 36058,
   "family": "MushVroum",
   "power": 380658665
  },
  {
   "server": 36058,
   "family": "Avalon",
   "power": 360360046
  },
  {
   "server": 36058,
   "family": "Ahjin",
   "power": 334392034
  },
  {
   "server": 36058,
   "family": "newgate",
   "power": 321990170
  },
  {
   "server": 36058,
   "family": "BaBaBoy",
   "power": 317825752
  },
  {
   "server": 36058,
   "family": "champignonez",
   "power": 316633315
  },
  {
   "server": 36059,
   "family": "Phénomène",
   "power": 1817983633
  },
  {
   "server": 36059,
   "family": "𝕆𝕤𝕚𝕣𝕚𝕤",
   "power": 1438238156
  },
  {
   "server": 36059,
   "family": "Aincrad",
   "power": 633789135
  },
  {
   "server": 36059,
   "family": "TeamChampi",
   "power": 573073073
  },
  {
   "server": 36059,
   "family": "ᗷᒪᗩᑕᛕᗯᗝᒪᖴ",
   "power": 441857369
  },
  {
   "server": 36059,
   "family": "CarpeDiem",
   "power": 429665697
  },
  {
   "server": 36059,
   "family": "France",
   "power": 393031071
  },
  {
   "server": 36059,
   "family": "LeagueOfToads",
   "power": 264142416
  },
  {
   "server": 36059,
   "family": "HeinekenFR",
   "power": 263101674
  },
  {
   "server": 36059,
   "family": "LeLocal",
   "power": 255591121
  },
  {
   "server": 36060,
   "family": "AzElite",
   "power": 1990261536
  },
  {
   "server": 36060,
   "family": "DarkEternya",
   "power": 1627042010
  },
  {
   "server": 36060,
   "family": "AzElite2",
   "power": 1199086513
  },
  {
   "server": 36060,
   "family": "667Ekip",
   "power": 688265104
  },
  {
   "server": 36060,
   "family": "LightEternya",
   "power": 605713544
  },
  {
   "server": 36060,
   "family": "AKATSUKI",
   "power": 498220298
  },
  {
   "server": 36060,
   "family": "ClubSandwich",
   "power": 465655442
  },
  {
   "server": 36060,
   "family": "Bricodepot",
   "power": 421369612
  },
  {
   "server": 36060,
   "family": "Symphonia",
   "power": 319516857
  },
  {
   "server": 36060,
   "family": "latêtedecèpes",
   "power": 310562906
  },
  {
   "server": 36061,
   "family": "LeagueOfMugi",
   "power": 1928579887
  },
  {
   "server": 36061,
   "family": "FungiSyndicate",
   "power": 1477610966
  },
  {
   "server": 36061,
   "family": "TerraTerre",
   "power": 1269440662
  },
  {
   "server": 36061,
   "family": "Les_Mugiwara",
   "power": 760423310
  },
  {
   "server": 36061,
   "family": "lafireforce",
   "power": 708280374
  },
  {
   "server": 36061,
   "family": "FunkyFungi",
   "power": 614524082
  },
  {
   "server": 36061,
   "family": "LakersWorld",
   "power": 449880357
  },
  {
   "server": 36061,
   "family": "AZERTY_Clan",
   "power": 367396419
  },
  {
   "server": 36061,
   "family": "champette",
   "power": 359205104
  },
  {
   "server": 36061,
   "family": "Caricrew",
   "power": 355993508
  },
  {
   "server": 36062,
   "family": "Pewee",
   "power": 1886495484
  },
  {
   "server": 36062,
   "family": "GoodVibes",
   "power": 1534350796
  },
  {
   "server": 36062,
   "family": "Sunny",
   "power": 1051076264
  },
  {
   "server": 36062,
   "family": "Renaissance",
   "power": 545896673
  },
  {
   "server": 36062,
   "family": "ruination",
   "power": 448940851
  },
  {
   "server": 36062,
   "family": "OnePieceFR",
   "power": 423006548
  },
  {
   "server": 36062,
   "family": "LaConfrérie",
   "power": 385410568
  },
  {
   "server": 36062,
   "family": "LaGriffe",
   "power": 380637030
  },
  {
   "server": 36062,
   "family": "URSSAF",
   "power": 363862259
  },
  {
   "server": 36062,
   "family": "BZH",
   "power": 361032924
  },
  {
   "server": 36063,
   "family": "BornToWin",
   "power": 1918591004
  },
  {
   "server": 36063,
   "family": "Astralead",
   "power": 1488770207
  },
  {
   "server": 36063,
   "family": "LegendNk",
   "power": 1279385075
  },
  {
   "server": 36063,
   "family": "TeamFr",
   "power": 570734950
  },
  {
   "server": 36063,
   "family": "nouveau",
   "power": 360992306
  },
  {
   "server": 36063,
   "family": "Lotus",
   "power": 355507690
  },
  {
   "server": 36063,
   "family": "GANGSMUSHS1FR",
   "power": 325220575
  },
  {
   "server": 36063,
   "family": "Nutella",
   "power": 252414153
  },
  {
   "server": 36063,
   "family": "mars37",
   "power": 242612920
  },
  {
   "server": 36063,
   "family": "OnePieceFR",
   "power": 224207296
  },
  {
   "server": 36064,
   "family": "Panthéon",
   "power": 1982704240
  },
  {
   "server": 36064,
   "family": "PanthéonAC",
   "power": 1268306721
  },
  {
   "server": 36064,
   "family": "HR",
   "power": 1240654058
  },
  {
   "server": 36064,
   "family": "ChampiFR",
   "power": 899909916
  },
  {
   "server": 36064,
   "family": "HellFire",
   "power": 441359454
  },
  {
   "server": 36064,
   "family": "BladeFR",
   "power": 431270301
  },
  {
   "server": 36064,
   "family": "Baguettes",
   "power": 421297754
  },
  {
   "server": 36064,
   "family": "Maxgi_",
   "power": 387160682
  },
  {
   "server": 36064,
   "family": "FR_Chill",
   "power": 353376859
  },
  {
   "server": 36064,
   "family": "VikingFR",
   "power": 334802466
  },
  {
   "server": 36065,
   "family": "NightFall",
   "power": 1868650456
  },
  {
   "server": 36065,
   "family": "Champix666",
   "power": 1790525685
  },
  {
   "server": 36065,
   "family": "RESURRECTION",
   "power": 1130555416
  },
  {
   "server": 36065,
   "family": "divisionfr",
   "power": 493737674
  },
  {
   "server": 36065,
   "family": "Phœnix",
   "power": 464585826
  },
  {
   "server": 36065,
   "family": "ShinyHunters",
   "power": 415373851
  },
  {
   "server": 36065,
   "family": "FranceClan",
   "power": 377446925
  },
  {
   "server": 36065,
   "family": "FrenchTeamFR",
   "power": 348885179
  },
  {
   "server": 36065,
   "family": "Français",
   "power": 332933362
  },
  {
   "server": 36065,
   "family": "les_Carpo",
   "power": 319305302
  },
  {
   "server": 36066,
   "family": "Pompélup",
   "power": 1797432528
  },
  {
   "server": 36066,
   "family": "azerquio",
   "power": 1493686753
  },
  {
   "server": 36066,
   "family": "Amanite",
   "power": 1249616854
  },
  {
   "server": 36066,
   "family": "LesWeebs",
   "power": 408623185
  },
  {
   "server": 36066,
   "family": "EVETrials",
   "power": 398683969
  },
  {
   "server": 36066,
   "family": "France",
   "power": 368841681
  },
  {
   "server": 36066,
   "family": "crystal",
   "power": 330734218
  },
  {
   "server": 36066,
   "family": "New_age",
   "power": 304161830
  },
  {
   "server": 36066,
   "family": "SayKom",
   "power": 293502796
  },
  {
   "server": 36066,
   "family": "GourmetCorp",
   "power": 202770243
  },
  {
   "server": 36067,
   "family": "LesTruffesFR",
   "power": 1922273055
  },
  {
   "server": 36067,
   "family": "Mandragore",
   "power": 1401356816
  },
  {
   "server": 36067,
   "family": "AKATSUKI",
   "power": 834530998
  },
  {
   "server": 36067,
   "family": "solo_leveling",
   "power": 547054957
  },
  {
   "server": 36067,
   "family": "FranceClan",
   "power": 475676448
  },
  {
   "server": 36067,
   "family": "Gryffondor_Fr",
   "power": 357639826
  },
  {
   "server": 36067,
   "family": "Destin",
   "power": 330915600
  },
  {
   "server": 36067,
   "family": "ClanDébutants",
   "power": 323310008
  },
  {
   "server": 36067,
   "family": "𝕷𝖚𝖓𝖆𝖗𝕮𝖑",
   "power": 262198897
  },
  {
   "server": 36067,
   "family": "Dieu",
   "power": 240923080
  },
  {
   "server": 36068,
   "family": "PEPEgnoni🤌",
   "power": 1813918279
  },
  {
   "server": 36068,
   "family": "Troph",
   "power": 1709640329
  },
  {
   "server": 36068,
   "family": "Fentala",
   "power": 1600428000
  },
  {
   "server": 36068,
   "family": "Fentalabis",
   "power": 553076193
  },
  {
   "server": 36068,
   "family": "ASocialClub",
   "power": 465395814
  },
  {
   "server": 36068,
   "family": "REDROSE",
   "power": 440245390
  },
  {
   "server": 36068,
   "family": "SporesMystique",
   "power": 387706216
  },
  {
   "server": 36068,
   "family": "lesbg",
   "power": 338668881
  },
  {
   "server": 36068,
   "family": "ClanFrance",
   "power": 321061098
  },
  {
   "server": 36068,
   "family": "LeBonFrancais",
   "power": 308650111
  },
  {
   "server": 36069,
   "family": "TOADS",
   "power": 1515496836
  },
  {
   "server": 36069,
   "family": "ZEVO",
   "power": 1467884373
  },
  {
   "server": 36069,
   "family": "Tartiflette",
   "power": 1266279619
  },
  {
   "server": 36069,
   "family": "WarriorsFR",
   "power": 536710315
  },
  {
   "server": 36069,
   "family": "NothingFR",
   "power": 499198384
  },
  {
   "server": 36069,
   "family": "FleurCosmik",
   "power": 380938114
  },
  {
   "server": 36069,
   "family": "HélioWar",
   "power": 376383925
  },
  {
   "server": 36069,
   "family": "MycoMorph",
   "power": 329595574
  },
  {
   "server": 36069,
   "family": "Kaamelott",
   "power": 298219196
  },
  {
   "server": 36069,
   "family": "LimuleFR",
   "power": 273377466
  },
  {
   "server": 36070,
   "family": "Yggdrasil",
   "power": 1744066704
  },
  {
   "server": 36070,
   "family": "Pepouze",
   "power": 1601979319
  },
  {
   "server": 36070,
   "family": "YggdrasiI",
   "power": 667518552
  },
  {
   "server": 36070,
   "family": "Valhalla",
   "power": 408990372
  },
  {
   "server": 36070,
   "family": "CP0",
   "power": 345657826
  },
  {
   "server": 36070,
   "family": "NocTurno",
   "power": 340670976
  },
  {
   "server": 36070,
   "family": "ChampisGang",
   "power": 328115543
  },
  {
   "server": 36070,
   "family": "minazuki",
   "power": 327202386
  },
  {
   "server": 36070,
   "family": "FR_Lonies",
   "power": 314196409
  },
  {
   "server": 36070,
   "family": "Gaulois",
   "power": 311165225
  },
  {
   "server": 36071,
   "family": "RakoonCity",
   "power": 2090645299
  },
  {
   "server": 36071,
   "family": "Rakoonception",
   "power": 1517933644
  },
  {
   "server": 36071,
   "family": "NightmareFR",
   "power": 1202801005
  },
  {
   "server": 36071,
   "family": "MUSHANT",
   "power": 808018688
  },
  {
   "server": 36071,
   "family": "Berserker",
   "power": 577952794
  },
  {
   "server": 36071,
   "family": "MushLAnd",
   "power": 414504480
  },
  {
   "server": 36071,
   "family": "kurogi",
   "power": 300523811
  },
  {
   "server": 36071,
   "family": "Les_Anarchiste",
   "power": 297107839
  },
  {
   "server": 36071,
   "family": "pioufitak",
   "power": 296446734
  },
  {
   "server": 36071,
   "family": "Nécromonde",
   "power": 283804713
  },
  {
   "server": 36072,
   "family": "Ragnarok",
   "power": 1911795720
  },
  {
   "server": 36072,
   "family": "Monarchs",
   "power": 1643239780
  },
  {
   "server": 36072,
   "family": "SIOFr",
   "power": 1393634407
  },
  {
   "server": 36072,
   "family": "LesBretons",
   "power": 747224328
  },
  {
   "server": 36072,
   "family": "FrenchFamily",
   "power": 407418040
  },
  {
   "server": 36072,
   "family": "LesTruffes",
   "power": 399888400
  },
  {
   "server": 36072,
   "family": "planètefr",
   "power": 398831142
  },
  {
   "server": 36072,
   "family": "CRCI",
   "power": 364615459
  },
  {
   "server": 36072,
   "family": "Mugiwara",
   "power": 297407035
  },
  {
   "server": 36072,
   "family": "dougydougy",
   "power": 296412314
  },
  {
   "server": 36073,
   "family": "LesNullos",
   "power": 1823002047
  },
  {
   "server": 36073,
   "family": "NewAKdemie",
   "power": 1313544475
  },
  {
   "server": 36073,
   "family": "MushroomsFR",
   "power": 1189912214
  },
  {
   "server": 36073,
   "family": "COD_fr",
   "power": 579411082
  },
  {
   "server": 36073,
   "family": "EmpireShodpiss",
   "power": 463554610
  },
  {
   "server": 36073,
   "family": "Erebus",
   "power": 420672127
  },
  {
   "server": 36073,
   "family": "Belgia",
   "power": 330235538
  },
  {
   "server": 36073,
   "family": "LeLocal",
   "power": 312616888
  },
  {
   "server": 36073,
   "family": "Anubis",
   "power": 290271832
  },
  {
   "server": 36073,
   "family": "EmpirePsylo",
   "power": 255511989
  },
  {
   "server": 36074,
   "family": "WindBreaker",
   "power": 2045192811
  },
  {
   "server": 36074,
   "family": "BrigadeFantôme",
   "power": 1854874314
  },
  {
   "server": 36074,
   "family": "Pokebolet",
   "power": 1440324324
  },
  {
   "server": 36074,
   "family": "champiclan",
   "power": 833532009
  },
  {
   "server": 36074,
   "family": "DEVARMY",
   "power": 766301390
  },
  {
   "server": 36074,
   "family": "HumbleMates",
   "power": 641996441
  },
  {
   "server": 36074,
   "family": "LesDiablotins",
   "power": 585725809
  },
  {
   "server": 36074,
   "family": "FullTryTry",
   "power": 524365396
  },
  {
   "server": 36074,
   "family": "ChamPotes",
   "power": 408255339
  },
  {
   "server": 36074,
   "family": "Youpiiii",
   "power": 405752567
  },
  {
   "server": 36075,
   "family": "Hécate",
   "power": 1877471957
  },
  {
   "server": 36075,
   "family": "Olympe",
   "power": 1775618536
  },
  {
   "server": 36075,
   "family": "Sons_Of_Toad",
   "power": 1723104449
  },
  {
   "server": 36075,
   "family": "FamilyArbre",
   "power": 553085572
  },
  {
   "server": 36075,
   "family": "lesfirst",
   "power": 464830045
  },
  {
   "server": 36075,
   "family": "Champdeparis",
   "power": 422247475
  },
  {
   "server": 36075,
   "family": "Benzou",
   "power": 361972738
  },
  {
   "server": 36075,
   "family": "TTR",
   "power": 354802776
  },
  {
   "server": 36075,
   "family": "mushroomFR2",
   "power": 317566914
  },
  {
   "server": 36075,
   "family": "Noxus",
   "power": 294369642
  },
  {
   "server": 36076,
   "family": "Genesis",
   "power": 2142544040
  },
  {
   "server": 36076,
   "family": "LEGENDS",
   "power": 1843021088
  },
  {
   "server": 36076,
   "family": "LePMU",
   "power": 926767468
  },
  {
   "server": 36076,
   "family": "ChampiGrognon",
   "power": 846297753
  },
  {
   "server": 36076,
   "family": "Sexo",
   "power": 820177488
  },
  {
   "server": 36076,
   "family": "LeLocal",
   "power": 587019494
  },
  {
   "server": 36076,
   "family": "Outlaws",
   "power": 575084844
  },
  {
   "server": 36076,
   "family": "Unless2",
   "power": 482627383
  },
  {
   "server": 36076,
   "family": "FrBoucan",
   "power": 440409185
  },
  {
   "server": 36076,
   "family": "Arrakis",
   "power": 350080096
  },
  {
   "server": 36077,
   "family": "Omega",
   "power": 1802022459
  },
  {
   "server": 36077,
   "family": "Bechamel_IV",
   "power": 1777502743
  },
  {
   "server": 36077,
   "family": "Elsker",
   "power": 1555394991
  },
  {
   "server": 36077,
   "family": "napoworld",
   "power": 1097789161
  },
  {
   "server": 36077,
   "family": "PapyPirate",
   "power": 852366020
  },
  {
   "server": 36077,
   "family": "Kcorp",
   "power": 627666330
  },
  {
   "server": 36077,
   "family": "LaMalaGang",
   "power": 588609204
  },
  {
   "server": 36077,
   "family": "solohelping",
   "power": 417853619
  },
  {
   "server": 36077,
   "family": "FamilyHome",
   "power": 393109167
  },
  {
   "server": 36077,
   "family": "ChampiGloire",
   "power": 380020550
  },
  {
   "server": 36078,
   "family": "AdAstra",
   "power": 1981691261
  },
  {
   "server": 36078,
   "family": "KC_ULTRA",
   "power": 1872073544
  },
  {
   "server": 36078,
   "family": "SacredGroove",
   "power": 1445190469
  },
  {
   "server": 36078,
   "family": "Les_KCrapules",
   "power": 673211382
  },
  {
   "server": 36078,
   "family": "KC_TRYHARD",
   "power": 535704264
  },
  {
   "server": 36078,
   "family": "Insomnia",
   "power": 512277290
  },
  {
   "server": 36078,
   "family": "Orangina",
   "power": 472302363
  },
  {
   "server": 36078,
   "family": "Quoikoupotos",
   "power": 465242958
  },
  {
   "server": 36078,
   "family": "KC_mega",
   "power": 456783992
  },
  {
   "server": 36078,
   "family": "LesFraudes",
   "power": 451525883
  },
  {
   "server": 36079,
   "family": "Crown",
   "power": 1993886040
  },
  {
   "server": 36079,
   "family": "Bluewall",
   "power": 1661957760
  },
  {
   "server": 36079,
   "family": "Sunny",
   "power": 1373846691
  },
  {
   "server": 36079,
   "family": "Aubiwan",
   "power": 524813732
  },
  {
   "server": 36079,
   "family": "Auzary",
   "power": 403172364
  },
  {
   "server": 36079,
   "family": "France",
   "power": 395725334
  },
  {
   "server": 36079,
   "family": "KCorpQG",
   "power": 368496783
  },
  {
   "server": 36079,
   "family": "lesfarfadets",
   "power": 359412191
  },
  {
   "server": 36079,
   "family": "🤓",
   "power": 343989478
  },
  {
   "server": 36079,
   "family": "Zeubbyman",
   "power": 305674206
  },
  {
   "server": 36080,
   "family": "Revolut",
   "power": 1925764873
  },
  {
   "server": 36080,
   "family": "Dracarys",
   "power": 1458349255
  },
  {
   "server": 36080,
   "family": "Hermès",
   "power": 1438133719
  },
  {
   "server": 36080,
   "family": "KC_Blue",
   "power": 559343370
  },
  {
   "server": 36080,
   "family": "Konoha",
   "power": 500345175
  },
  {
   "server": 36080,
   "family": "LesKorogus",
   "power": 397749060
  },
  {
   "server": 36080,
   "family": "Vivitlaire",
   "power": 351379932
  },
  {
   "server": 36080,
   "family": "MAFIAGUERRIA",
   "power": 299762748
  },
  {
   "server": 36080,
   "family": "FrenchLigue",
   "power": 244410905
  },
  {
   "server": 36080,
   "family": "Unskilled",
   "power": 222175489
  },
  {
   "server": 36081,
   "family": "KarmineCorp",
   "power": 2041351494
  },
  {
   "server": 36081,
   "family": "ChampiChampion",
   "power": 1775344145
  },
  {
   "server": 36081,
   "family": "BlueStars",
   "power": 1676622083
  },
  {
   "server": 36081,
   "family": "Chlamydia",
   "power": 1099179871
  },
  {
   "server": 36081,
   "family": "TEAM_CHAMPI",
   "power": 1022108229
  },
  {
   "server": 36081,
   "family": "GentlemanClub",
   "power": 697487359
  },
  {
   "server": 36081,
   "family": "HakiDesRois",
   "power": 696748874
  },
  {
   "server": 36081,
   "family": "PouryGang",
   "power": 591355280
  },
  {
   "server": 36081,
   "family": "TaureauNoir",
   "power": 537038469
  },
  {
   "server": 36081,
   "family": "Fougeux",
   "power": 506838091
  },
  {
   "server": 36082,
   "family": "PoopooKrav",
   "power": 1761998759
  },
  {
   "server": 36082,
   "family": "STRIKEFORCE",
   "power": 1675703869
  },
  {
   "server": 36082,
   "family": "Fake",
   "power": 1670596737
  },
  {
   "server": 36082,
   "family": "Novaeres",
   "power": 1008896994
  },
  {
   "server": 36082,
   "family": "Nigloland",
   "power": 950165265
  },
  {
   "server": 36082,
   "family": "CSB",
   "power": 469932206
  },
  {
   "server": 36082,
   "family": "Antagonista",
   "power": 466319259
  },
  {
   "server": 36082,
   "family": "Noomo",
   "power": 460054827
  },
  {
   "server": 36082,
   "family": "GentleMates",
   "power": 397816783
  },
  {
   "server": 36082,
   "family": "SoloOnMushroom",
   "power": 371754808
  },
  {
   "server": 36083,
   "family": "Poulpi",
   "power": 1822146118
  },
  {
   "server": 36083,
   "family": "Mugiwara",
   "power": 1594821826
  },
  {
   "server": 36083,
   "family": "CityGang",
   "power": 1583664275
  },
  {
   "server": 36083,
   "family": "ChampiToad",
   "power": 463915681
  },
  {
   "server": 36083,
   "family": "japanvie",
   "power": 460732162
  },
  {
   "server": 36083,
   "family": "KarmineCorp",
   "power": 427006907
  },
  {
   "server": 36083,
   "family": "LesGolmons",
   "power": 367607669
  },
  {
   "server": 36083,
   "family": "français",
   "power": 355223101
  },
  {
   "server": 36083,
   "family": "Gaulois",
   "power": 344870333
  },
  {
   "server": 36083,
   "family": "TeamConnard",
   "power": 242489117
  },
  {
   "server": 36084,
   "family": "Taverne",
   "power": 1893164604
  },
  {
   "server": 36084,
   "family": "Requiem",
   "power": 1823184263
  },
  {
   "server": 36084,
   "family": "KarmineCorp",
   "power": 1519098486
  },
  {
   "server": 36084,
   "family": "Alliance",
   "power": 730446591
  },
  {
   "server": 36084,
   "family": "SoloLevelingFR",
   "power": 696715277
  },
  {
   "server": 36084,
   "family": "MushLand",
   "power": 646273442
  },
  {
   "server": 36084,
   "family": "1erRPIMa",
   "power": 513841576
  },
  {
   "server": 36084,
   "family": "FrenchTeam",
   "power": 512127267
  },
  {
   "server": 36084,
   "family": "LeNoyau",
   "power": 428078676
  },
  {
   "server": 36084,
   "family": "AsmodeusFilia",
   "power": 385988835
  },
  {
   "server": 36085,
   "family": "MushParadis",
   "power": 1910320617
  },
  {
   "server": 36085,
   "family": "Malveillance",
   "power": 1498902382
  },
  {
   "server": 36085,
   "family": "Phœnix",
   "power": 1318668825
  },
  {
   "server": 36085,
   "family": "UNIS_VERS",
   "power": 823179340
  },
  {
   "server": 36085,
   "family": "CHAMPIX",
   "power": 737292585
  },
  {
   "server": 36085,
   "family": "AKATSUKI",
   "power": 559149695
  },
  {
   "server": 36085,
   "family": "Basicfrites",
   "power": 442273996
  },
  {
   "server": 36085,
   "family": "TeamFrance",
   "power": 440243367
  },
  {
   "server": 36085,
   "family": "FRENCHIES",
   "power": 340548194
  },
  {
   "server": 36085,
   "family": "Mushroom_verse",
   "power": 318272233
  },
  {
   "server": 36086,
   "family": "SoloBistou",
   "power": 1754945241
  },
  {
   "server": 36086,
   "family": "L’alliance",
   "power": 1576344639
  },
  {
   "server": 36086,
   "family": "Olympe",
   "power": 1568307823
  },
  {
   "server": 36086,
   "family": "Bistouquette",
   "power": 478500359
  },
  {
   "server": 36086,
   "family": "KANABIS",
   "power": 410016563
  },
  {
   "server": 36086,
   "family": "France",
   "power": 399961921
  },
  {
   "server": 36086,
   "family": "AKdemie",
   "power": 339558847
  },
  {
   "server": 36086,
   "family": "Akatsuki",
   "power": 335877782
  },
  {
   "server": 36086,
   "family": "phoenyx",
   "power": 303966928
  },
  {
   "server": 36086,
   "family": "LesZommes",
   "power": 292869619
  },
  {
   "server": 36087,
   "family": "ιмρєяιυм",
   "power": 2094091735
  },
  {
   "server": 36087,
   "family": "GOJOCORPS",
   "power": 1552301680
  },
  {
   "server": 36087,
   "family": "DarkPhœnix",
   "power": 1262337076
  },
  {
   "server": 36087,
   "family": "LesBaroudEure",
   "power": 975830800
  },
  {
   "server": 36087,
   "family": "LaHordElfiq",
   "power": 631861343
  },
  {
   "server": 36087,
   "family": "KARMINE",
   "power": 443410186
  },
  {
   "server": 36087,
   "family": "TeamNaps",
   "power": 439842451
  },
  {
   "server": 36087,
   "family": "400r",
   "power": 423207542
  },
  {
   "server": 36087,
   "family": "KarmineCorp",
   "power": 419907546
  },
  {
   "server": 36087,
   "family": "Division0",
   "power": 395639628
  },
  {
   "server": 36088,
   "family": "revenge",
   "power": 1901210702
  },
  {
   "server": 36088,
   "family": "Pourfendeurs",
   "power": 1488933222
  },
  {
   "server": 36088,
   "family": "Hollow",
   "power": 1330780619
  },
  {
   "server": 36088,
   "family": "Lafrenchteam",
   "power": 542535655
  },
  {
   "server": 36088,
   "family": "AxDem",
   "power": 464722041
  },
  {
   "server": 36088,
   "family": "Redroom",
   "power": 412105039
  },
  {
   "server": 36088,
   "family": "Karmine_Corp",
   "power": 361888973
  },
  {
   "server": 36088,
   "family": "Legends",
   "power": 358322937
  },
  {
   "server": 36088,
   "family": "ANARCHY",
   "power": 331358441
  },
  {
   "server": 36088,
   "family": "Metallica",
   "power": 322521980
  },
  {
   "server": 36089,
   "family": "BlueChampi",
   "power": 1921772329
  },
  {
   "server": 36089,
   "family": "MaitresBolets",
   "power": 1398820276
  },
  {
   "server": 36089,
   "family": "Rebirth",
   "power": 1186308560
  },
  {
   "server": 36089,
   "family": "Odyssey",
   "power": 565154060
  },
  {
   "server": 36089,
   "family": "BlueWall",
   "power": 486125387
  },
  {
   "server": 36089,
   "family": "CAF",
   "power": 408255592
  },
  {
   "server": 36089,
   "family": "France",
   "power": 378367531
  },
  {
   "server": 36089,
   "family": "LaForceFr",
   "power": 359116153
  },
  {
   "server": 36089,
   "family": "Mugiwara",
   "power": 323430508
  },
  {
   "server": 36089,
   "family": "Sun",
   "power": 320798072
  },
  {
   "server": 36090,
   "family": "Fade_Zone",
   "power": 1767016862
  },
  {
   "server": 36090,
   "family": "MUGIWARA_VKG",
   "power": 1665588333
  },
  {
   "server": 36090,
   "family": "VIKING_MuG",
   "power": 1154496987
  },
  {
   "server": 36090,
   "family": "KarmineCorp",
   "power": 435063020
  },
  {
   "server": 36090,
   "family": "LaZone",
   "power": 409736674
  },
  {
   "server": 36090,
   "family": "Equinox",
   "power": 378609707
  },
  {
   "server": 36090,
   "family": "NatGang",
   "power": 342360058
  },
  {
   "server": 36090,
   "family": "France",
   "power": 337818991
  },
  {
   "server": 36090,
   "family": "Warzazate",
   "power": 310653440
  },
  {
   "server": 36090,
   "family": "Wolfgang",
   "power": 295970400
  },
  {
   "server": 36091,
   "family": "SUPRA",
   "power": 1860505180
  },
  {
   "server": 36091,
   "family": "Rebellium",
   "power": 1632140494
  },
  {
   "server": 36091,
   "family": "Pubertax",
   "power": 1124004386
  },
  {
   "server": 36091,
   "family": "leclandezamis",
   "power": 643739050
  },
  {
   "server": 36091,
   "family": "gang_pouletos",
   "power": 615746454
  },
  {
   "server": 36091,
   "family": "LaHorde",
   "power": 484604664
  },
  {
   "server": 36091,
   "family": "France",
   "power": 466092475
  },
  {
   "server": 36091,
   "family": "Pdbl",
   "power": 409159052
  },
  {
   "server": 36091,
   "family": "Champignouf",
   "power": 327157620
  },
  {
   "server": 36091,
   "family": "MCFrance",
   "power": 305990528
  },
  {
   "server": 36092,
   "family": "azulite",
   "power": 1863552350
  },
  {
   "server": 36092,
   "family": "Mercenaires",
   "power": 1271636980
  },
  {
   "server": 36092,
   "family": "ᎧᏝᎩᎷᎮᏋ",
   "power": 913962253
  },
  {
   "server": 36092,
   "family": "TheBlueWall",
   "power": 683257819
  },
  {
   "server": 36092,
   "family": "Parazyte",
   "power": 661971297
  },
  {
   "server": 36092,
   "family": "Akatsuki",
   "power": 555813157
  },
  {
   "server": 36092,
   "family": "DesertEagle",
   "power": 547552084
  },
  {
   "server": 36092,
   "family": "FRdémons",
   "power": 490191919
  },
  {
   "server": 36092,
   "family": "GBClub",
   "power": 336227091
  },
  {
   "server": 36092,
   "family": "FRSquad",
   "power": 318605536
  },
  {
   "server": 36093,
   "family": "Destined2See",
   "power": 1622810642
  },
  {
   "server": 36093,
   "family": "FireDragon",
   "power": 1312226354
  },
  {
   "server": 36093,
   "family": "French_Touch",
   "power": 1206722397
  },
  {
   "server": 36093,
   "family": "SoloLeveling",
   "power": 628095594
  },
  {
   "server": 36093,
   "family": "Achéron",
   "power": 369826241
  },
  {
   "server": 36093,
   "family": "IVREICH",
   "power": 363626982
  },
  {
   "server": 36093,
   "family": "oméga",
   "power": 356482550
  },
  {
   "server": 36093,
   "family": "OmeletteChampi",
   "power": 338857843
  },
  {
   "server": 36093,
   "family": "démon",
   "power": 263159820
  },
  {
   "server": 36093,
   "family": "RiseOfMushroom",
   "power": 242215612
  },
  {
   "server": 36094,
   "family": "Nebula_Knights",
   "power": 1855047580
  },
  {
   "server": 36094,
   "family": "StellarKnights",
   "power": 1412654772
  },
  {
   "server": 36094,
   "family": "GOAT",
   "power": 1198654905
  },
  {
   "server": 36094,
   "family": "MushéMéchant",
   "power": 976694396
  },
  {
   "server": 36094,
   "family": "LégendeZ",
   "power": 672986394
  },
  {
   "server": 36094,
   "family": "GentleMates",
   "power": 501029242
  },
  {
   "server": 36094,
   "family": "Teemo19100",
   "power": 391728114
  },
  {
   "server": 36094,
   "family": "MushPotes",
   "power": 370682040
  },
  {
   "server": 36094,
   "family": "Plazhius",
   "power": 315967325
  },
  {
   "server": 36094,
   "family": "fairy_tail",
   "power": 291034667
  },
  {
   "server": 36095,
   "family": "MushWarrior",
   "power": 1840092445
  },
  {
   "server": 36095,
   "family": "SHIELD",
   "power": 1637304138
  },
  {
   "server": 36095,
   "family": "Harmony",
   "power": 1440654341
  },
  {
   "server": 36095,
   "family": "CringeNuts",
   "power": 812792789
  },
  {
   "server": 36095,
   "family": "LesTennysons",
   "power": 474534740
  },
  {
   "server": 36095,
   "family": "Galaxie",
   "power": 417798011
  },
  {
   "server": 36095,
   "family": "Akatsuki",
   "power": 416219381
  },
  {
   "server": 36095,
   "family": "LH76",
   "power": 414090023
  },
  {
   "server": 36095,
   "family": "AntiMugiwara",
   "power": 411468669
  },
  {
   "server": 36095,
   "family": "GloryForOlympe",
   "power": 406340542
  },
  {
   "server": 36096,
   "family": "KELAWIN",
   "power": 1935812478
  },
  {
   "server": 36096,
   "family": "NAKAMAS",
   "power": 1603985726
  },
  {
   "server": 36096,
   "family": "HUNTERS",
   "power": 1445137328
  },
  {
   "server": 36096,
   "family": "Rêverie",
   "power": 577642295
  },
  {
   "server": 36096,
   "family": "Kaamelott",
   "power": 566364639
  },
  {
   "server": 36096,
   "family": "Zone51",
   "power": 493097615
  },
  {
   "server": 36096,
   "family": "CHAMPIONS",
   "power": 459328139
  },
  {
   "server": 36096,
   "family": "AnesBetes",
   "power": 369561410
  },
  {
   "server": 36096,
   "family": "LombreNoire",
   "power": 353377154
  },
  {
   "server": 36096,
   "family": "NFX",
   "power": 338204362
  },
  {
   "server": 36097,
   "family": "Dogfighterever",
   "power": 1703377171
  },
  {
   "server": 36097,
   "family": "Chanpions",
   "power": 1551903624
  },
  {
   "server": 36097,
   "family": "Champimignons",
   "power": 1265890645
  },
  {
   "server": 36097,
   "family": "ShadowGarden",
   "power": 470720163
  },
  {
   "server": 36097,
   "family": "Chacalerie",
   "power": 406727354
  },
  {
   "server": 36097,
   "family": "LesPagnions",
   "power": 376042901
  },
  {
   "server": 36097,
   "family": "AKATSUKI_V4",
   "power": 375698211
  },
  {
   "server": 36097,
   "family": "oméga",
   "power": 365603759
  },
  {
   "server": 36097,
   "family": "SevenDeadlySin",
   "power": 352719571
  },
  {
   "server": 36097,
   "family": "KarmineCorp",
   "power": 279581616
  },
  {
   "server": 36098,
   "family": "AStreon",
   "power": 1624022327
  },
  {
   "server": 36098,
   "family": "LesAlcoolHic",
   "power": 1616281240
  },
  {
   "server": 36098,
   "family": "Clan2Legende",
   "power": 1114442807
  },
  {
   "server": 36098,
   "family": "HiGHKEY",
   "power": 475284578
  },
  {
   "server": 36098,
   "family": "FRANCEzen",
   "power": 356169688
  },
  {
   "server": 36098,
   "family": "Chatpas_dheure",
   "power": 345223739
  },
  {
   "server": 36098,
   "family": "BOUZIN",
   "power": 307387948
  },
  {
   "server": 36098,
   "family": "Teamfr",
   "power": 286596222
  },
  {
   "server": 36098,
   "family": "MaxiChad",
   "power": 281493642
  },
  {
   "server": 36098,
   "family": "UnNianConnu",
   "power": 267617428
  },
  {
   "server": 36099,
   "family": "BLITZ",
   "power": 1813317245
  },
  {
   "server": 36099,
   "family": "NEXUS",
   "power": 1763347047
  },
  {
   "server": 36099,
   "family": "KCORP",
   "power": 1117344982
  },
  {
   "server": 36099,
   "family": "Respawn",
   "power": 631361994
  },
  {
   "server": 36099,
   "family": "FURIA",
   "power": 623604157
  },
  {
   "server": 36099,
   "family": "freedom",
   "power": 505693691
  },
  {
   "server": 36099,
   "family": "TTAVDO",
   "power": 497083620
  },
  {
   "server": 36099,
   "family": "Bouyakasha",
   "power": 448925570
  },
  {
   "server": 36099,
   "family": "KCBLUE",
   "power": 402913367
  },
  {
   "server": 36099,
   "family": "FUJIWARA",
   "power": 362266798
  },
  {
   "server": 36100,
   "family": "LesTempliers",
   "power": 1947104344
  },
  {
   "server": 36100,
   "family": "TheKingdom",
   "power": 1421831088
  },
  {
   "server": 36100,
   "family": "Wolf",
   "power": 1219085926
  },
  {
   "server": 36100,
   "family": "FrenchFamily",
   "power": 696822738
  },
  {
   "server": 36100,
   "family": "LesSamouraïs",
   "power": 508187246
  },
  {
   "server": 36100,
   "family": "MushroomOnTop",
   "power": 440169622
  },
  {
   "server": 36100,
   "family": "La107",
   "power": 439394186
  },
  {
   "server": 36100,
   "family": "Saucisson",
   "power": 438856696
  },
  {
   "server": 36100,
   "family": "Zeus",
   "power": 410719125
  },
  {
   "server": 36100,
   "family": "Hacoeur",
   "power": 343690881
  },
  {
   "server": 36101,
   "family": "Heaven",
   "power": 1769790438
  },
  {
   "server": 36101,
   "family": "FullControl",
   "power": 1545524324
  },
  {
   "server": 36101,
   "family": "KCrapules",
   "power": 1122288990
  },
  {
   "server": 36101,
   "family": "ChamPirate",
   "power": 765334462
  },
  {
   "server": 36101,
   "family": "La_Main_Noire",
   "power": 487865944
  },
  {
   "server": 36101,
   "family": "HighCarry",
   "power": 375411957
  },
  {
   "server": 36101,
   "family": "champifrance",
   "power": 368554125
  },
  {
   "server": 36101,
   "family": "Bienvenue",
   "power": 346495216
  },
  {
   "server": 36101,
   "family": "SorryToBeGod",
   "power": 331185584
  },
  {
   "server": 36101,
   "family": "GzCorp",
   "power": 312047908
  },
  {
   "server": 36102,
   "family": "Infamy",
   "power": 1892498377
  },
  {
   "server": 36102,
   "family": "Olympus",
   "power": 1529696529
  },
  {
   "server": 36102,
   "family": "kcclan",
   "power": 1472093582
  },
  {
   "server": 36102,
   "family": "LVAS",
   "power": 764525966
  },
  {
   "server": 36102,
   "family": "Team_Picchu",
   "power": 678804046
  },
  {
   "server": 36102,
   "family": "Cordyceps",
   "power": 529817500
  },
  {
   "server": 36102,
   "family": "AkyChampi",
   "power": 500258776
  },
  {
   "server": 36102,
   "family": "MiseEnBouche",
   "power": 485547460
  },
  {
   "server": 36102,
   "family": "Mushroom",
   "power": 402034400
  },
  {
   "server": 36102,
   "family": "DarkChamp",
   "power": 370546829
  },
  {
   "server": 36103,
   "family": "IMMORTAL",
   "power": 1744219543
  },
  {
   "server": 36103,
   "family": "SopEmpire",
   "power": 1435093149
  },
  {
   "server": 36103,
   "family": "MORTAL",
   "power": 1118767422
  },
  {
   "server": 36103,
   "family": "Malveillance",
   "power": 600216531
  },
  {
   "server": 36103,
   "family": "KARMINECORP",
   "power": 482921201
  },
  {
   "server": 36103,
   "family": "teamFrance",
   "power": 366462265
  },
  {
   "server": 36103,
   "family": "GAVROCHE",
   "power": 310546802
  },
  {
   "server": 36103,
   "family": "Thx",
   "power": 307603945
  },
  {
   "server": 36103,
   "family": "toadsv2",
   "power": 295468743
  },
  {
   "server": 36103,
   "family": "KCrapules",
   "power": 288042931
  },
  {
   "server": 36104,
   "family": "ChatCarry",
   "power": 1781608361
  },
  {
   "server": 36104,
   "family": "KCORP",
   "power": 1574667038
  },
  {
   "server": 36104,
   "family": "LaConfrérie",
   "power": 1535184624
  },
  {
   "server": 36104,
   "family": "FranceTopFR",
   "power": 685317410
  },
  {
   "server": 36104,
   "family": "Lesking",
   "power": 558187105
  },
  {
   "server": 36104,
   "family": "BestFR",
   "power": 497227977
  },
  {
   "server": 36104,
   "family": "IVOLI",
   "power": 434653265
  },
  {
   "server": 36104,
   "family": "Nampignon",
   "power": 430760975
  },
  {
   "server": 36104,
   "family": "Laouni",
   "power": 309671923
  },
  {
   "server": 36104,
   "family": "DiabsClanFR",
   "power": 302579817
  },
  {
   "server": 36105,
   "family": "Akatsukî",
   "power": 1779317103
  },
  {
   "server": 36105,
   "family": "KarmineCorp",
   "power": 1378514564
  },
  {
   "server": 36105,
   "family": "Croustillants",
   "power": 1190488126
  },
  {
   "server": 36105,
   "family": "IreliaMains",
   "power": 658231468
  },
  {
   "server": 36105,
   "family": "FARFADETS",
   "power": 638718574
  },
  {
   "server": 36105,
   "family": "KCORP",
   "power": 487543379
  },
  {
   "server": 36105,
   "family": "Kankrouth",
   "power": 478817802
  },
  {
   "server": 36105,
   "family": "1STI2D",
   "power": 393834803
  },
  {
   "server": 36105,
   "family": "Malveillance",
   "power": 341696014
  },
  {
   "server": 36105,
   "family": "ASGARD",
   "power": 339929554
  },
  {
   "server": 36106,
   "family": "Bonobo",
   "power": 1745600383
  },
  {
   "server": 36106,
   "family": "LesCopains",
   "power": 1360923230
  },
  {
   "server": 36106,
   "family": "LaDictature",
   "power": 669772364
  },
  {
   "server": 36106,
   "family": "SainteKarmine",
   "power": 574603228
  },
  {
   "server": 36106,
   "family": "LEGENDS",
   "power": 519468092
  },
  {
   "server": 36106,
   "family": "Champipignouf",
   "power": 428026461
  },
  {
   "server": 36106,
   "family": "LaZone",
   "power": 349564690
  },
  {
   "server": 36106,
   "family": "FrenchBeast",
   "power": 299983548
  },
  {
   "server": 36106,
   "family": "nulnasu",
   "power": 272900579
  },
  {
   "server": 36106,
   "family": "LarmeDoree",
   "power": 227412153
  },
  {
   "server": 36107,
   "family": "Matrice",
   "power": 1498653553
  },
  {
   "server": 36107,
   "family": "Mushle",
   "power": 978438068
  },
  {
   "server": 36107,
   "family": "Phœnix",
   "power": 770326487
  },
  {
   "server": 36107,
   "family": "Hyrule",
   "power": 544999358
  },
  {
   "server": 36107,
   "family": "BalladeBoisée",
   "power": 523524603
  },
  {
   "server": 36107,
   "family": "Grofiac",
   "power": 428057859
  },
  {
   "server": 36107,
   "family": "LeCacaMiam",
   "power": 427918653
  },
  {
   "server": 36107,
   "family": "Champicards",
   "power": 405139913
  },
  {
   "server": 36107,
   "family": "UltraKC",
   "power": 354796644
  },
  {
   "server": 36107,
   "family": "UltraM8",
   "power": 269696210
  },
  {
   "server": 36108,
   "family": "Metronom",
   "power": 1662327951
  },
  {
   "server": 36108,
   "family": "CaraChimay",
   "power": 1226869510
  },
  {
   "server": 36108,
   "family": "Amanitemouche",
   "power": 1067759699
  },
  {
   "server": 36108,
   "family": "LEC2025",
   "power": 774796584
  },
  {
   "server": 36108,
   "family": "ChampiGang",
   "power": 549306075
  },
  {
   "server": 36108,
   "family": "Fr",
   "power": 399939624
  },
  {
   "server": 36108,
   "family": "PapyPirate",
   "power": 398737045
  },
  {
   "server": 36108,
   "family": "Olympe",
   "power": 309906581
  },
  {
   "server": 36108,
   "family": "Chill",
   "power": 302551699
  },
  {
   "server": 36108,
   "family": "FrenchCrew",
   "power": 298014648
  },
  {
   "server": 36109,
   "family": "Invictus",
   "power": 1688542601
  },
  {
   "server": 36109,
   "family": "Reborn",
   "power": 1395983997
  },
  {
   "server": 36109,
   "family": "V2",
   "power": 1326325311
  },
  {
   "server": 36109,
   "family": "Nekocompagnie",
   "power": 606101291
  },
  {
   "server": 36109,
   "family": "Griffon_Ardent",
   "power": 558325704
  },
  {
   "server": 36109,
   "family": "Tokyo",
   "power": 381787265
  },
  {
   "server": 36109,
   "family": "LaPiraterie",
   "power": 381080022
  },
  {
   "server": 36109,
   "family": "francais",
   "power": 322539636
  },
  {
   "server": 36109,
   "family": "Sheeesh",
   "power": 311506589
  },
  {
   "server": 36109,
   "family": "lesfrancais",
   "power": 273437139
  },
  {
   "server": 36110,
   "family": "NEMESIS",
   "power": 1561764231
  },
  {
   "server": 36110,
   "family": "ICEFIRE",
   "power": 1432644193
  },
  {
   "server": 36110,
   "family": "AKATSUKI",
   "power": 1261886724
  },
  {
   "server": 36110,
   "family": "MADNESS",
   "power": 615378225
  },
  {
   "server": 36110,
   "family": "Fraudz",
   "power": 377720077
  },
  {
   "server": 36110,
   "family": "ShadowGarden",
   "power": 357229113
  },
  {
   "server": 36110,
   "family": "Destiny",
   "power": 356105718
  },
  {
   "server": 36110,
   "family": "TopFrance",
   "power": 272913514
  },
  {
   "server": 36110,
   "family": "Darkshroom",
   "power": 243827931
  },
  {
   "server": 36110,
   "family": "Petitlapinroux",
   "power": 241512532
  },
  {
   "server": 36111,
   "family": "scars",
   "power": 1684964054
  },
  {
   "server": 36111,
   "family": "Legitima",
   "power": 1102036465
  },
  {
   "server": 36111,
   "family": "Urukawaï",
   "power": 965956996
  },
  {
   "server": 36111,
   "family": "Ladictatur",
   "power": 485749390
  },
  {
   "server": 36111,
   "family": "Hakaifc",
   "power": 475206353
  },
  {
   "server": 36111,
   "family": "DIAMOND",
   "power": 448688196
  },
  {
   "server": 36111,
   "family": "FR_Gang",
   "power": 391312423
  },
  {
   "server": 36111,
   "family": "warsearfr",
   "power": 370198922
  },
  {
   "server": 36111,
   "family": "French_Frayeur",
   "power": 321622168
  },
  {
   "server": 36111,
   "family": "UnionFr",
   "power": 291906814
  },
  {
   "server": 36112,
   "family": "GetTrapped",
   "power": 1806211547
  },
  {
   "server": 36112,
   "family": "Flowaves",
   "power": 1309110082
  },
  {
   "server": 36112,
   "family": "GetTrapped2",
   "power": 944306438
  },
  {
   "server": 36112,
   "family": "LesZarnaques",
   "power": 582209344
  },
  {
   "server": 36112,
   "family": "Spartiates",
   "power": 306907976
  },
  {
   "server": 36112,
   "family": "S06SU7",
   "power": 306875614
  },
  {
   "server": 36112,
   "family": "Symposium",
   "power": 271073877
  },
  {
   "server": 36112,
   "family": "TeamEQ",
   "power": 258555612
  },
  {
   "server": 36112,
   "family": "FUZION",
   "power": 245450025
  },
  {
   "server": 36112,
   "family": "LaCabane",
   "power": 234220190
  },
  {
   "server": 36113,
   "family": "Shroomies",
   "power": 1623376927
  },
  {
   "server": 36113,
   "family": "Nebula",
   "power": 1340607722
  },
  {
   "server": 36113,
   "family": "Onigashima",
   "power": 1275186196
  },
  {
   "server": 36113,
   "family": "Mushroom",
   "power": 428280015
  },
  {
   "server": 36113,
   "family": "FamilyTeam",
   "power": 411747907
  },
  {
   "server": 36113,
   "family": "Quintessence",
   "power": 325533364
  },
  {
   "server": 36113,
   "family": "Fairy_tail",
   "power": 303219753
  },
  {
   "server": 36113,
   "family": "FairyTail",
   "power": 303042586
  },
  {
   "server": 36113,
   "family": "Bluewall",
   "power": 302589102
  },
  {
   "server": 36113,
   "family": "Neptune",
   "power": 289786049
  },
  {
   "server": 36114,
   "family": "Olympe",
   "power": 1584179699
  },
  {
   "server": 36114,
   "family": "BlackCats",
   "power": 1559057631
  },
  {
   "server": 36114,
   "family": "Ahjin",
   "power": 680431171
  },
  {
   "server": 36114,
   "family": "StarkFR",
   "power": 476232675
  },
  {
   "server": 36114,
   "family": "HanamiFr",
   "power": 426474554
  },
  {
   "server": 36114,
   "family": "Valhalla_Fr",
   "power": 398017788
  },
  {
   "server": 36114,
   "family": "Asgard",
   "power": 345117756
  },
  {
   "server": 36114,
   "family": "THEKING_FR",
   "power": 318414738
  },
  {
   "server": 36114,
   "family": "Perona",
   "power": 314231141
  },
  {
   "server": 36114,
   "family": "Ninja_Gang",
   "power": 253209321
  },
  {
   "server": 36115,
   "family": "LegendsUnion",
   "power": 1670471641
  },
  {
   "server": 36115,
   "family": "Phœnix",
   "power": 1185137188
  },
  {
   "server": 36115,
   "family": "LegendsUnionII",
   "power": 1182884115
  },
  {
   "server": 36115,
   "family": "LesChampikings",
   "power": 555231329
  },
  {
   "server": 36115,
   "family": "Jyvas",
   "power": 511120785
  },
  {
   "server": 36115,
   "family": "LBEB",
   "power": 407670452
  },
  {
   "server": 36115,
   "family": "RISE",
   "power": 384123162
  },
  {
   "server": 36115,
   "family": "Seedfamily",
   "power": 365639140
  },
  {
   "server": 36115,
   "family": "Mushiiies",
   "power": 314433642
  },
  {
   "server": 36115,
   "family": "France",
   "power": 274722690
  },
  {
   "server": 36116,
   "family": "TopFrance",
   "power": 1408876874
  },
  {
   "server": 36116,
   "family": "Mushiwara",
   "power": 1334402991
  },
  {
   "server": 36116,
   "family": "ShadowGarden",
   "power": 1260295196
  },
  {
   "server": 36116,
   "family": "KCDQ",
   "power": 452707888
  },
  {
   "server": 36116,
   "family": "FrenchChampi",
   "power": 390166474
  },
  {
   "server": 36116,
   "family": "PanamaBende",
   "power": 347609597
  },
  {
   "server": 36116,
   "family": "Outsider",
   "power": 337978191
  },
  {
   "server": 36116,
   "family": "TeamNinou",
   "power": 313195517
  },
  {
   "server": 36116,
   "family": "TOP1France",
   "power": 296306726
  },
  {
   "server": 36116,
   "family": "ChampiClan",
   "power": 271377914
  },
  {
   "server": 36117,
   "family": "Erezia",
   "power": 1459299016
  },
  {
   "server": 36117,
   "family": "LAB",
   "power": 1327291529
  },
  {
   "server": 36117,
   "family": "Method",
   "power": 821143664
  },
  {
   "server": 36117,
   "family": "LesTruffesFR",
   "power": 373076761
  },
  {
   "server": 36117,
   "family": "team_france",
   "power": 350877374
  },
  {
   "server": 36117,
   "family": "France",
   "power": 305293595
  },
  {
   "server": 36117,
   "family": "LAA",
   "power": 302356353
  },
  {
   "server": 36117,
   "family": "TousBienvenue",
   "power": 292549133
  },
  {
   "server": 36117,
   "family": "UltimeAlliance",
   "power": 267727200
  },
  {
   "server": 36117,
   "family": "EreziAcademy",
   "power": 230483135
  },
  {
   "server": 36118,
   "family": "JDF",
   "power": 1562852370
  },
  {
   "server": 36118,
   "family": "League",
   "power": 1382681201
  },
  {
   "server": 36118,
   "family": "GEARSECOND",
   "power": 640721421
  },
  {
   "server": 36118,
   "family": "KONOHA",
   "power": 428312541
  },
  {
   "server": 36118,
   "family": "Phoenyx",
   "power": 331014148
  },
  {
   "server": 36118,
   "family": "Mushleroom",
   "power": 330589697
  },
  {
   "server": 36118,
   "family": "Champitox",
   "power": 327040756
  },
  {
   "server": 36118,
   "family": "Champomix",
   "power": 326203434
  },
  {
   "server": 36118,
   "family": "Ramen",
   "power": 303453614
  },
  {
   "server": 36118,
   "family": "Mugiwara",
   "power": 294283173
  },
  {
   "server": 36119,
   "family": "LÉGION",
   "power": 1510945411
  },
  {
   "server": 36119,
   "family": "AdAstra",
   "power": 1240004993
  },
  {
   "server": 36119,
   "family": "Fungi",
   "power": 1124598176
  },
  {
   "server": 36119,
   "family": "GOAT",
   "power": 453642828
  },
  {
   "server": 36119,
   "family": "Rêverie",
   "power": 417361381
  },
  {
   "server": 36119,
   "family": "Rookies",
   "power": 301487483
  },
  {
   "server": 36119,
   "family": "UwU",
   "power": 290473227
  },
  {
   "server": 36119,
   "family": "Le_Toman",
   "power": 261883087
  },
  {
   "server": 36119,
   "family": "LégionAcademy",
   "power": 258927406
  },
  {
   "server": 36119,
   "family": "Suuuuper",
   "power": 254832625
  },
  {
   "server": 36120,
   "family": "FrenchReborn",
   "power": 1274596840
  },
  {
   "server": 36120,
   "family": "LogHorizon",
   "power": 1124831926
  },
  {
   "server": 36120,
   "family": "ZaneXKCorp",
   "power": 1052810395
  },
  {
   "server": 36120,
   "family": "Kinoko",
   "power": 540786353
  },
  {
   "server": 36120,
   "family": "Konoha",
   "power": 414436232
  },
  {
   "server": 36120,
   "family": "MythFr",
   "power": 377202371
  },
  {
   "server": 36120,
   "family": "KCorpB",
   "power": 310257348
  },
  {
   "server": 36120,
   "family": "couteau_suiss",
   "power": 292693160
  },
  {
   "server": 36120,
   "family": "Varois",
   "power": 236650841
  },
  {
   "server": 36120,
   "family": "kersiice",
   "power": 221470085
  },
  {
   "server": 36121,
   "family": "NotLikeThem",
   "power": 1366228044
  },
  {
   "server": 36121,
   "family": "Jinxed",
   "power": 1287055342
  },
  {
   "server": 36121,
   "family": "Hope",
   "power": 578603226
  },
  {
   "server": 36121,
   "family": "Ness",
   "power": 524645285
  },
  {
   "server": 36121,
   "family": "CouillesLanta",
   "power": 392213756
  },
  {
   "server": 36121,
   "family": "viking",
   "power": 384103725
  },
  {
   "server": 36121,
   "family": "Titan",
   "power": 353701935
  },
  {
   "server": 36121,
   "family": "Lesmoches",
   "power": 325526014
  },
  {
   "server": 36121,
   "family": "Konoha",
   "power": 278041865
  },
  {
   "server": 36121,
   "family": "ScoobyDoo",
   "power": 272428252
  },
  {
   "server": 36122,
   "family": "TopFrance",
   "power": 1343569486
  },
  {
   "server": 36122,
   "family": "KC_CorP",
   "power": 1134215613
  },
  {
   "server": 36122,
   "family": "Feldbrau",
   "power": 936383375
  },
  {
   "server": 36122,
   "family": "La_familia",
   "power": 423491006
  },
  {
   "server": 36122,
   "family": "Neptunium",
   "power": 363459152
  },
  {
   "server": 36122,
   "family": "Hydrazil",
   "power": 271241703
  },
  {
   "server": 36122,
   "family": "LaFaille",
   "power": 262651983
  },
  {
   "server": 36122,
   "family": "France",
   "power": 252536410
  },
  {
   "server": 36122,
   "family": "Solglissant",
   "power": 252003285
  },
  {
   "server": 36122,
   "family": "Le_clan_sky",
   "power": 232096243
  },
  {
   "server": 36123,
   "family": "Harmony",
   "power": 1458004693
  },
  {
   "server": 36123,
   "family": "Fungi",
   "power": 1217084971
  },
  {
   "server": 36123,
   "family": "Skuulll",
   "power": 1054159586
  },
  {
   "server": 36123,
   "family": "JujutsuHight",
   "power": 573366230
  },
  {
   "server": 36123,
   "family": "Vital",
   "power": 343984871
  },
  {
   "server": 36123,
   "family": "LesLouLoutes",
   "power": 324596624
  },
  {
   "server": 36123,
   "family": "KCFORCE",
   "power": 317706620
  },
  {
   "server": 36123,
   "family": "Sbhfr",
   "power": 300080186
  },
  {
   "server": 36123,
   "family": "France",
   "power": 296438345
  },
  {
   "server": 36123,
   "family": "Champi2laGaler",
   "power": 265280806
  },
  {
   "server": 36124,
   "family": "BrigadeFantome",
   "power": 1355831186
  },
  {
   "server": 36124,
   "family": "StellaR",
   "power": 1279996799
  },
  {
   "server": 36124,
   "family": "QIN",
   "power": 550742901
  },
  {
   "server": 36124,
   "family": "Amnesia",
   "power": 350900321
  },
  {
   "server": 36124,
   "family": "StrongestMan",
   "power": 302282343
  },
  {
   "server": 36124,
   "family": "equinoxiaFR",
   "power": 275103144
  },
  {
   "server": 36124,
   "family": "frérot",
   "power": 272007527
  },
  {
   "server": 36124,
   "family": "Devil’sFriend",
   "power": 255032208
  },
  {
   "server": 36124,
   "family": "GeekCorp",
   "power": 242559370
  },
  {
   "server": 36124,
   "family": "lesyoutuber",
   "power": 222541960
  },
  {
   "server": 36125,
   "family": "STAY",
   "power": 1414158523
  },
  {
   "server": 36125,
   "family": "Tatsuya",
   "power": 1323438527
  },
  {
   "server": 36125,
   "family": "PMU",
   "power": 1037615941
  },
  {
   "server": 36125,
   "family": "FreeLoot",
   "power": 365704995
  },
  {
   "server": 36125,
   "family": "BardellaFR",
   "power": 364630964
  },
  {
   "server": 36125,
   "family": "BadBeach",
   "power": 292053010
  },
  {
   "server": 36125,
   "family": "TikyLovers",
   "power": 279298614
  },
  {
   "server": 36125,
   "family": "Fromage",
   "power": 271999648
  },
  {
   "server": 36125,
   "family": "fairy_tail",
   "power": 232855120
  },
  {
   "server": 36125,
   "family": "Nova",
   "power": 223777265
  },
  {
   "server": 36126,
   "family": "FRSH",
   "power": 1408922489
  },
  {
   "server": 36126,
   "family": "Teikō",
   "power": 1138822239
  },
  {
   "server": 36126,
   "family": "Arise",
   "power": 1101151734
  },
  {
   "server": 36126,
   "family": "beuvrages",
   "power": 345308424
  },
  {
   "server": 36126,
   "family": "GentleMates",
   "power": 341538820
  },
  {
   "server": 36126,
   "family": "LPF",
   "power": 247913803
  },
  {
   "server": 36126,
   "family": "TeamFightClub",
   "power": 218293923
  },
  {
   "server": 36126,
   "family": "Invictus",
   "power": 199947195
  },
  {
   "server": 36126,
   "family": "Addictif",
   "power": 192129812
  },
  {
   "server": 36126,
   "family": "Inferno",
   "power": 189335470
  },
  {
   "server": 36127,
   "family": "RACOONCITY",
   "power": 1415123219
  },
  {
   "server": 36127,
   "family": "Marchombres",
   "power": 1098004137
  },
  {
   "server": 36127,
   "family": "FairyGarden",
   "power": 901502748
  },
  {
   "server": 36127,
   "family": "frencharmy",
   "power": 305489334
  },
  {
   "server": 36127,
   "family": "Potaitoz",
   "power": 272992767
  },
  {
   "server": 36127,
   "family": "farfadets",
   "power": 271865543
  },
  {
   "server": 36127,
   "family": "Fuzion",
   "power": 266592938
  },
  {
   "server": 36127,
   "family": "RavLeLacheur",
   "power": 264359959
  },
  {
   "server": 36127,
   "family": "Les_Sudistes",
   "power": 249621425
  },
  {
   "server": 36127,
   "family": "Bakaland",
   "power": 229921925
  },
  {
   "server": 36128,
   "family": "Kings",
   "power": 1240215523
  },
  {
   "server": 36128,
   "family": "꧁Ølympe꧂",
   "power": 1220047385
  },
  {
   "server": 36128,
   "family": "OXYMORE",
   "power": 712306576
  },
  {
   "server": 36128,
   "family": "Valhalla",
   "power": 389589006
  },
  {
   "server": 36128,
   "family": "KCORP",
   "power": 260442966
  },
  {
   "server": 36128,
   "family": "Saiyanchampy",
   "power": 242879410
  },
  {
   "server": 36128,
   "family": "Aogiri",
   "power": 228444492
  },
  {
   "server": 36128,
   "family": "Ramen",
   "power": 212381654
  },
  {
   "server": 36128,
   "family": "royalmush",
   "power": 195478339
  },
  {
   "server": 36128,
   "family": "N’amour",
   "power": 180575679
  },
  {
   "server": 36129,
   "family": "Infïnïty",
   "power": 1334335275
  },
  {
   "server": 36129,
   "family": "AhJin",
   "power": 1050969433
  },
  {
   "server": 36129,
   "family": "JustDance",
   "power": 760666285
  },
  {
   "server": 36129,
   "family": "Mushgroom",
   "power": 403994463
  },
  {
   "server": 36129,
   "family": "La_famille",
   "power": 245131705
  },
  {
   "server": 36129,
   "family": "Toman",
   "power": 235961401
  },
  {
   "server": 36129,
   "family": "Chepagro",
   "power": 215834010
  },
  {
   "server": 36129,
   "family": "Reborn",
   "power": 191235279
  },
  {
   "server": 36129,
   "family": "Millénium",
   "power": 181205426
  },
  {
   "server": 36129,
   "family": "GAYS",
   "power": 167516338
  },
  {
   "server": 36130,
   "family": "Mayhem",
   "power": 1327862352
  },
  {
   "server": 36130,
   "family": "APES",
   "power": 1024325495
  },
  {
   "server": 36130,
   "family": "Flex",
   "power": 892196298
  },
  {
   "server": 36130,
   "family": "FranceAlpha",
   "power": 385880089
  },
  {
   "server": 36130,
   "family": "Exodia",
   "power": 360967446
  },
  {
   "server": 36130,
   "family": "Sakura",
   "power": 236799428
  },
  {
   "server": 36130,
   "family": "psilocybe",
   "power": 219165087
  },
  {
   "server": 36130,
   "family": "SoloLeveling",
   "power": 203447761
  },
  {
   "server": 36130,
   "family": "Dynastie",
   "power": 201916652
  },
  {
   "server": 36130,
   "family": "Sporetiates",
   "power": 183676191
  },
  {
   "server": 36131,
   "family": "Nightguards",
   "power": 1151187652
  },
  {
   "server": 36131,
   "family": "Rebirth",
   "power": 1148086434
  },
  {
   "server": 36131,
   "family": "Articssun",
   "power": 1104620700
  },
  {
   "server": 36131,
   "family": "KCWIN",
   "power": 349190065
  },
  {
   "server": 36131,
   "family": "LeChenil",
   "power": 286166715
  },
  {
   "server": 36131,
   "family": "LaGrinta",
   "power": 263474173
  },
  {
   "server": 36131,
   "family": "LeCulteDuPain",
   "power": 253919400
  },
  {
   "server": 36131,
   "family": "LumberJack",
   "power": 245073458
  },
  {
   "server": 36131,
   "family": "lesbrascassé",
   "power": 245024013
  },
  {
   "server": 36131,
   "family": "SuperNova",
   "power": 243014699
  },
  {
   "server": 36132,
   "family": "Shinigami",
   "power": 1396181216
  },
  {
   "server": 36132,
   "family": "Kaos",
   "power": 1086080649
  },
  {
   "server": 36132,
   "family": "Olympe",
   "power": 688897474
  },
  {
   "server": 36132,
   "family": "Valoris",
   "power": 471821496
  },
  {
   "server": 36132,
   "family": "ASGARD",
   "power": 358787227
  },
  {
   "server": 36132,
   "family": "LaCage",
   "power": 257628775
  },
  {
   "server": 36132,
   "family": "Asgard_Academy",
   "power": 234791250
  },
  {
   "server": 36132,
   "family": "Inactif",
   "power": 230358983
  },
  {
   "server": 36132,
   "family": "HARMONY",
   "power": 207441628
  },
  {
   "server": 36132,
   "family": "XCrewFrance",
   "power": 203860252
  },
  {
   "server": 36133,
   "family": "Ramen",
   "power": 1185126304
  },
  {
   "server": 36133,
   "family": "IMMANITY",
   "power": 1075965526
  },
  {
   "server": 36133,
   "family": "SeinenKaisers",
   "power": 430470576
  },
  {
   "server": 36133,
   "family": "wolfgang",
   "power": 303849521
  },
  {
   "server": 36133,
   "family": "Olympe",
   "power": 293882395
  },
  {
   "server": 36133,
   "family": "EpicMush",
   "power": 292882782
  },
  {
   "server": 36133,
   "family": "MTX",
   "power": 290587585
  },
  {
   "server": 36133,
   "family": "Panthéon",
   "power": 288473990
  },
  {
   "server": 36133,
   "family": "Nightfall",
   "power": 275404644
  },
  {
   "server": 36133,
   "family": "UwU",
   "power": 228760951
  },
  {
   "server": 36134,
   "family": "Akatsuki",
   "power": 1222105914
  },
  {
   "server": 36134,
   "family": "LesKarps",
   "power": 1186689777
  },
  {
   "server": 36134,
   "family": "Mamamoo",
   "power": 928705998
  },
  {
   "server": 36134,
   "family": "LOS_HERMANOS",
   "power": 281840082
  },
  {
   "server": 36134,
   "family": "CSB",
   "power": 268513494
  },
  {
   "server": 36134,
   "family": "fairytail",
   "power": 245631734
  },
  {
   "server": 36134,
   "family": "Slupe",
   "power": 217157021
  },
  {
   "server": 36134,
   "family": "NewHorizon",
   "power": 206049979
  },
  {
   "server": 36134,
   "family": "LaConfrérie",
   "power": 171912111
  },
  {
   "server": 36134,
   "family": "TotallySpies",
   "power": 169539631
  },
  {
   "server": 36135,
   "family": "Destiny",
   "power": 835446330
  },
  {
   "server": 36135,
   "family": "Célestes",
   "power": 220942172
  },
  {
   "server": 36135,
   "family": "Supremacy",
   "power": 86015346
  },
  {
   "server": 36135,
   "family": "FamilyHouse",
   "power": 46064529
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
   "power": 1844543
  },
  {
   "server": 36135,
   "family": "leveling",
   "power": 1047895
  },
  {
   "server": 36135,
   "family": "MTX",
   "power": 348880
  },
  {
   "server": 36135,
   "family": "Godare",
   "power": 0
  },
  {
   "server": 36136,
   "family": "BHFamily",
   "power": 1162499978
  },
  {
   "server": 36136,
   "family": "LeTaureauNoir",
   "power": 995339887
  },
  {
   "server": 36136,
   "family": "Aozora",
   "power": 577398958
  },
  {
   "server": 36136,
   "family": "ElCartel",
   "power": 374862977
  },
  {
   "server": 36136,
   "family": "LeagueOfChampi",
   "power": 321484953
  },
  {
   "server": 36136,
   "family": "Vicking",
   "power": 242307351
  },
  {
   "server": 36136,
   "family": "FishAndTurtule",
   "power": 211693300
  },
  {
   "server": 36136,
   "family": "Amygdales",
   "power": 187591109
  },
  {
   "server": 36136,
   "family": "L’araignée",
   "power": 187363622
  },
  {
   "server": 36136,
   "family": "UNIS",
   "power": 182250969
  },
  {
   "server": 36137,
   "family": "Celestia",
   "power": 1279148616
  },
  {
   "server": 36137,
   "family": "TeamOmega",
   "power": 1008215739
  },
  {
   "server": 36137,
   "family": "ChampiMagique",
   "power": 913080803
  },
  {
   "server": 36137,
   "family": "Akatsuki",
   "power": 296411832
  },
  {
   "server": 36137,
   "family": "Mystical",
   "power": 288279085
  },
  {
   "server": 36137,
   "family": "Gouffre",
   "power": 269455778
  },
  {
   "server": 36137,
   "family": "Foutrefous",
   "power": 243301802
  },
  {
   "server": 36137,
   "family": "Coup_D_Etat",
   "power": 212350896
  },
  {
   "server": 36137,
   "family": "FCbrasCassés",
   "power": 207011607
  },
  {
   "server": 36137,
   "family": "Lesbg",
   "power": 193539812
  },
  {
   "server": 36138,
   "family": "Supremacy",
   "power": 1109313325
  },
  {
   "server": 36138,
   "family": "Altaïr",
   "power": 1082380881
  },
  {
   "server": 36138,
   "family": "Elysium",
   "power": 851324795
  },
  {
   "server": 36138,
   "family": "Éclipse",
   "power": 351156622
  },
  {
   "server": 36138,
   "family": "LP4H",
   "power": 231816255
  },
  {
   "server": 36138,
   "family": "LesVraisFr",
   "power": 222751716
  },
  {
   "server": 36138,
   "family": "Fr",
   "power": 206799624
  },
  {
   "server": 36138,
   "family": "Asgard",
   "power": 201496160
  },
  {
   "server": 36138,
   "family": "vjcjfudj",
   "power": 195905245
  },
  {
   "server": 36138,
   "family": "TopFrance",
   "power": 167055034
  },
  {
   "server": 36139,
   "family": "Amanite",
   "power": 1174871475
  },
  {
   "server": 36139,
   "family": "LaSainteCB",
   "power": 1142962102
  },
  {
   "server": 36139,
   "family": "MST",
   "power": 640131675
  },
  {
   "server": 36139,
   "family": "LPTM",
   "power": 260036508
  },
  {
   "server": 36139,
   "family": "VogueMerry",
   "power": 255426227
  },
  {
   "server": 36139,
   "family": "BestMushroom",
   "power": 228371812
  },
  {
   "server": 36139,
   "family": "Moshpit",
   "power": 216235301
  },
  {
   "server": 36139,
   "family": "WoofLand",
   "power": 212858030
  },
  {
   "server": 36139,
   "family": "Regalia",
   "power": 210457295
  },
  {
   "server": 36139,
   "family": "Batcave",
   "power": 193551397
  },
  {
   "server": 36140,
   "family": "McMush",
   "power": 1193721248
  },
  {
   "server": 36140,
   "family": "Champotes",
   "power": 857435274
  },
  {
   "server": 36140,
   "family": "Uni",
   "power": 692401726
  },
  {
   "server": 36140,
   "family": "Pasta",
   "power": 291756341
  },
  {
   "server": 36140,
   "family": "CramptesFamily",
   "power": 276733695
  },
  {
   "server": 36140,
   "family": "TUTUTUDUM",
   "power": 217849876
  },
  {
   "server": 36140,
   "family": "TikyTaka",
   "power": 208232394
  },
  {
   "server": 36140,
   "family": "Kaamelott",
   "power": 186263209
  },
  {
   "server": 36140,
   "family": "Ahjin",
   "power": 183527510
  },
  {
   "server": 36140,
   "family": "TaoFamilyFR",
   "power": 167282049
  },
  {
   "server": 36141,
   "family": "αlpha",
   "power": 1084564830
  },
  {
   "server": 36141,
   "family": "βeta",
   "power": 982925573
  },
  {
   "server": 36141,
   "family": "EpicFail",
   "power": 890620743
  },
  {
   "server": 36141,
   "family": "French_pipo",
   "power": 367412862
  },
  {
   "server": 36141,
   "family": "KarmineCorp",
   "power": 233199474
  },
  {
   "server": 36141,
   "family": "Lesyakuzadu60",
   "power": 221710498
  },
  {
   "server": 36141,
   "family": "SCP",
   "power": 191876441
  },
  {
   "server": 36141,
   "family": "Oméga",
   "power": 172901660
  },
  {
   "server": 36141,
   "family": "TKO",
   "power": 162417173
  },
  {
   "server": 36141,
   "family": "Les_mages",
   "power": 144569045
  },
  {
   "server": 36142,
   "family": "Requiem",
   "power": 1131493020
  },
  {
   "server": 36142,
   "family": "BountyCoco",
   "power": 914552061
  },
  {
   "server": 36142,
   "family": "LaYogaClub",
   "power": 600903303
  },
  {
   "server": 36142,
   "family": "Phoenix",
   "power": 279963194
  },
  {
   "server": 36142,
   "family": "Jungle",
   "power": 269141237
  },
  {
   "server": 36142,
   "family": "ToddLand",
   "power": 230700266
  },
  {
   "server": 36142,
   "family": "Renaissance",
   "power": 221529422
  },
  {
   "server": 36142,
   "family": "France",
   "power": 194544692
  },
  {
   "server": 36142,
   "family": "FrenchReborn",
   "power": 188823347
  },
  {
   "server": 36142,
   "family": "ctr",
   "power": 151212021
  },
  {
   "server": 36143,
   "family": "LesSentinelles",
   "power": 815229372
  },
  {
   "server": 36143,
   "family": "DtCrew",
   "power": 572504132
  },
  {
   "server": 36143,
   "family": "Noyaux",
   "power": 460951744
  },
  {
   "server": 36143,
   "family": "Shinseku",
   "power": 235825165
  },
  {
   "server": 36143,
   "family": "nightraid",
   "power": 220538319
  },
  {
   "server": 36143,
   "family": "ChampiGang",
   "power": 194322153
  },
  {
   "server": 36143,
   "family": "THC_ALPHA",
   "power": 181434317
  },
  {
   "server": 36143,
   "family": "Outlast",
   "power": 158109950
  },
  {
   "server": 36143,
   "family": "Boredom",
   "power": 154947441
  },
  {
   "server": 36143,
   "family": "ToxicosGarden",
   "power": 153193832
  },
  {
   "server": 36144,
   "family": "WAB",
   "power": 1064033354
  },
  {
   "server": 36144,
   "family": "FireForce",
   "power": 913420177
  },
  {
   "server": 36144,
   "family": "mushroom",
   "power": 324750478
  },
  {
   "server": 36144,
   "family": "FrBest",
   "power": 251417544
  },
  {
   "server": 36144,
   "family": "NightKids",
   "power": 199708490
  },
  {
   "server": 36144,
   "family": "Olympe",
   "power": 177101801
  },
  {
   "server": 36144,
   "family": "France",
   "power": 176428939
  },
  {
   "server": 36144,
   "family": "Inazuma",
   "power": 167109096
  },
  {
   "server": 36144,
   "family": "Exotique",
   "power": 164917979
  },
  {
   "server": 36144,
   "family": "MocheRoom",
   "power": 149662771
  },
  {
   "server": 36145,
   "family": "AKA_PULCO",
   "power": 797037712
  },
  {
   "server": 36145,
   "family": "UNITY",
   "power": 722071584
  },
  {
   "server": 36145,
   "family": "LEGEND",
   "power": 510223232
  },
  {
   "server": 36145,
   "family": "FrenchArmy",
   "power": 180266232
  },
  {
   "server": 36145,
   "family": "coucoulenoir",
   "power": 174047328
  },
  {
   "server": 36145,
   "family": "TokyoGhoul",
   "power": 155061875
  },
  {
   "server": 36145,
   "family": "Viking",
   "power": 136910099
  },
  {
   "server": 36145,
   "family": "BoganLegacy",
   "power": 122177271
  },
  {
   "server": 36145,
   "family": "Mushignon",
   "power": 107796710
  },
  {
   "server": 36145,
   "family": "RoyaumeChampi",
   "power": 103406618
  },
  {
   "server": 36146,
   "family": "Saphir",
   "power": 853975920
  },
  {
   "server": 36146,
   "family": "PrimosAncestro",
   "power": 739297040
  },
  {
   "server": 36146,
   "family": "Mugiwara",
   "power": 277981073
  },
  {
   "server": 36146,
   "family": "Kingdom",
   "power": 168607338
  },
  {
   "server": 36146,
   "family": "SoloFamilly",
   "power": 160582660
  },
  {
   "server": 36146,
   "family": "ILLUMINATEAM",
   "power": 144646239
  },
  {
   "server": 36146,
   "family": "BloodMoon",
   "power": 133801542
  },
  {
   "server": 36146,
   "family": "Prospector",
   "power": 131413746
  },
  {
   "server": 36146,
   "family": "DECIMUSH",
   "power": 124175311
  },
  {
   "server": 36146,
   "family": "Mininoob",
   "power": 121521814
  },
  {
   "server": 36147,
   "family": "LesRatz",
   "power": 699217880
  },
  {
   "server": 36147,
   "family": "Meeting",
   "power": 599929996
  },
  {
   "server": 36147,
   "family": "Frenchteam",
   "power": 493885571
  },
  {
   "server": 36147,
   "family": "Lightning",
   "power": 187243984
  },
  {
   "server": 36147,
   "family": "PeachCastle",
   "power": 160993452
  },
  {
   "server": 36147,
   "family": "Champitop",
   "power": 148634483
  },
  {
   "server": 36147,
   "family": "KcBelloBito",
   "power": 145338164
  },
  {
   "server": 36147,
   "family": "EpsyloneFR",
   "power": 134943451
  },
  {
   "server": 36147,
   "family": "mugiwara",
   "power": 121750750
  },
  {
   "server": 36147,
   "family": "Monkeys",
   "power": 118349732
  },
  {
   "server": 36148,
   "family": "Solana",
   "power": 931546435
  },
  {
   "server": 36148,
   "family": "Alcatom",
   "power": 716910052
  },
  {
   "server": 36148,
   "family": "Ligue_of_42",
   "power": 471886110
  },
  {
   "server": 36148,
   "family": "GigaNoob",
   "power": 207133606
  },
  {
   "server": 36148,
   "family": "GrosDCorp",
   "power": 172489467
  },
  {
   "server": 36148,
   "family": "Konoha",
   "power": 140617679
  },
  {
   "server": 36148,
   "family": "Narva",
   "power": 129136612
  },
  {
   "server": 36148,
   "family": "FranceTANOS",
   "power": 126752821
  },
  {
   "server": 36148,
   "family": "Val_de_loue",
   "power": 126453449
  },
  {
   "server": 36148,
   "family": "Légende",
   "power": 122985928
  },
  {
   "server": 36149,
   "family": "Mekhail",
   "power": 833325767
  },
  {
   "server": 36149,
   "family": "SLAYERS",
   "power": 764451280
  },
  {
   "server": 36149,
   "family": "Azuryte",
   "power": 698320658
  },
  {
   "server": 36149,
   "family": "Pupuce",
   "power": 178834215
  },
  {
   "server": 36149,
   "family": "frero59",
   "power": 135213635
  },
  {
   "server": 36149,
   "family": "rx3skyy",
   "power": 122501693
  },
  {
   "server": 36149,
   "family": "Dynastie",
   "power": 119180922
  },
  {
   "server": 36149,
   "family": "Gothesis",
   "power": 109373671
  },
  {
   "server": 36149,
   "family": "ZéphyrFr",
   "power": 109258411
  },
  {
   "server": 36149,
   "family": "Talentscelest",
   "power": 108221036
  },
  {
   "server": 36150,
   "family": "NEMESIS",
   "power": 897825563
  },
  {
   "server": 36150,
   "family": "Phénix",
   "power": 715852814
  },
  {
   "server": 36150,
   "family": "Legacy",
   "power": 480133211
  },
  {
   "server": 36150,
   "family": "Sporo",
   "power": 156848342
  },
  {
   "server": 36150,
   "family": "Mortem",
   "power": 103796308
  },
  {
   "server": 36150,
   "family": "champirate",
   "power": 103014991
  },
  {
   "server": 36150,
   "family": "Cèpes_éclatés",
   "power": 102478918
  },
  {
   "server": 36150,
   "family": "Les_coyote",
   "power": 102070322
  },
  {
   "server": 36150,
   "family": "geek",
   "power": 97029060
  },
  {
   "server": 36150,
   "family": "Garden",
   "power": 89786767
  },
  {
   "server": 36151,
   "family": "CARAVANE2DJO",
   "power": 768309802
  },
  {
   "server": 36151,
   "family": "CrystalTM",
   "power": 640792185
  },
  {
   "server": 36151,
   "family": "FreshFrench",
   "power": 618840235
  },
  {
   "server": 36151,
   "family": "LesNoiraudes",
   "power": 146404649
  },
  {
   "server": 36151,
   "family": "frenchclub",
   "power": 106512429
  },
  {
   "server": 36151,
   "family": "BurgerKing",
   "power": 93702770
  },
  {
   "server": 36151,
   "family": "Pupuce",
   "power": 93668129
  },
  {
   "server": 36151,
   "family": "WatiBg",
   "power": 82916805
  },
  {
   "server": 36151,
   "family": "mushifr",
   "power": 82012586
  },
  {
   "server": 36151,
   "family": "chalenger151",
   "power": 75258365
  },
  {
   "server": 36152,
   "family": "Olympe",
   "power": 542612630
  },
  {
   "server": 36152,
   "family": "kumonuage",
   "power": 211812933
  },
  {
   "server": 36152,
   "family": "Mood",
   "power": 103235289
  },
  {
   "server": 36152,
   "family": "Mushrooms",
   "power": 0
  },
  {
   "server": 36152,
   "family": "G",
   "power": 0
  },
  {
   "server": 36152,
   "family": "mastercorp",
   "power": 0
  },
  {
   "server": 36152,
   "family": "Valhalla",
   "power": 0
  },
  {
   "server": 36152,
   "family": "RedoOfHealer",
   "power": 0
  },
  {
   "server": 36152,
   "family": "xahsksosyzvdls",
   "power": 0
  },
  {
   "server": 36152,
   "family": "mousquetaires",
   "power": 0
  },
  {
   "server": 36153,
   "family": "Legends",
   "power": 808952390
  },
  {
   "server": 36153,
   "family": "Dinasty",
   "power": 334963169
  },
  {
   "server": 36153,
   "family": "Noxus",
   "power": 233077091
  },
  {
   "server": 36153,
   "family": "Warriors",
   "power": 0
  },
  {
   "server": 36153,
   "family": "SonsofAnarchy",
   "power": 0
  },
  {
   "server": 36153,
   "family": "ElitePaytoWin",
   "power": 0
  },
  {
   "server": 36153,
   "family": "Totolototete",
   "power": 0
  },
  {
   "server": 36153,
   "family": "Jamesondorkel6",
   "power": 0
  },
  {
   "server": 36153,
   "family": "SLAYER",
   "power": 0
  },
  {
   "server": 36153,
   "family": "jobissot_sx",
   "power": 0
  },
  {
   "server": 42001,
   "family": "espada",
   "power": 1824432599
  },
  {
   "server": 42001,
   "family": "NORTH",
   "power": 1763013408
  },
  {
   "server": 42001,
   "family": "Mushrooms",
   "power": 677972652
  },
  {
   "server": 42001,
   "family": "_BLACK_ORDER_",
   "power": 344252774
  },
  {
   "server": 42001,
   "family": "МухоМор",
   "power": 316243067
  },
  {
   "server": 42001,
   "family": "RUSSIA",
   "power": 299740677
  },
  {
   "server": 42001,
   "family": "Gods_Cat",
   "power": 173619481
  },
  {
   "server": 42001,
   "family": "EMziR",
   "power": 171183921
  },
  {
   "server": 42001,
   "family": "АкадемкаEspada",
   "power": 170444928
  },
  {
   "server": 42001,
   "family": "Грибнойсуп",
   "power": 157298834
  },
  {
   "server": 42002,
   "family": "Россия",
   "power": 1570606548
  },
  {
   "server": 42002,
   "family": "Mushrooms",
   "power": 1217490774
  },
  {
   "server": 42002,
   "family": "Russia",
   "power": 395791052
  },
  {
   "server": 42002,
   "family": "NumberOne",
   "power": 267884546
  },
  {
   "server": 42002,
   "family": "ᴍᴀɢɪᴄ",
   "power": 169321733
  },
  {
   "server": 42002,
   "family": "Spiders",
   "power": 135255140
  },
  {
   "server": 42002,
   "family": "Best_Mushroom",
   "power": 133632657
  },
  {
   "server": 42002,
   "family": "Avangard",
   "power": 120167241
  },
  {
   "server": 42002,
   "family": "Par",
   "power": 99755974
  },
  {
   "server": 42002,
   "family": "Русские",
   "power": 62247561
  },
  {
   "server": 42003,
   "family": "БРАТСТВО",
   "power": 1435494857
  },
  {
   "server": 42003,
   "family": "FirstPlace",
   "power": 1157968130
  },
  {
   "server": 42003,
   "family": "Русские",
   "power": 533913956
  },
  {
   "server": 42003,
   "family": "WORLD",
   "power": 219033580
  },
  {
   "server": 42003,
   "family": "3Gend",
   "power": 178611750
  },
  {
   "server": 42003,
   "family": "Kazakhstan",
   "power": 138492868
  },
  {
   "server": 42003,
   "family": "Шашлычок",
   "power": 118555433
  },
  {
   "server": 42003,
   "family": "ArmyRussian",
   "power": 117381804
  },
  {
   "server": 42003,
   "family": "Миротворцы",
   "power": 111489819
  },
  {
   "server": 42003,
   "family": "KAZAKHSTAN2",
   "power": 51751749
  },
  {
   "server": 42004,
   "family": "Sabbath",
   "power": 1623279665
  },
  {
   "server": 42004,
   "family": "T_HIGHER_T",
   "power": 974512381
  },
  {
   "server": 42004,
   "family": "HIGHER2",
   "power": 493752009
  },
  {
   "server": 42004,
   "family": "Силовички",
   "power": 300433414
  },
  {
   "server": 42004,
   "family": "ХРАМ_НАЗАРИК",
   "power": 275264755
  },
  {
   "server": 42004,
   "family": "DEPDRAGON",
   "power": 181508352
  },
  {
   "server": 42004,
   "family": "Russia",
   "power": 179919457
  },
  {
   "server": 42004,
   "family": "Дружина",
   "power": 162949651
  },
  {
   "server": 42004,
   "family": "Belarus",
   "power": 127625265
  },
  {
   "server": 42004,
   "family": "aristocrats",
   "power": 73941580
  },
  {
   "server": 42005,
   "family": "ELITTA",
   "power": 1518048012
  },
  {
   "server": 42005,
   "family": "Odium",
   "power": 1120372960
  },
  {
   "server": 42005,
   "family": "Пустые",
   "power": 841247864
  },
  {
   "server": 42005,
   "family": "6PM",
   "power": 274601311
  },
  {
   "server": 42005,
   "family": "BURN",
   "power": 144147932
  },
  {
   "server": 42005,
   "family": "Грибники",
   "power": 141791456
  },
  {
   "server": 42005,
   "family": "GGMP",
   "power": 105598456
  },
  {
   "server": 42005,
   "family": "Sharma",
   "power": 39513956
  },
  {
   "server": 42005,
   "family": "SMERT",
   "power": 35974512
  },
  {
   "server": 42005,
   "family": "Реинкарнация",
   "power": 29123307
  },
  {
   "server": 42006,
   "family": "INSANE",
   "power": 1889111303
  },
  {
   "server": 42006,
   "family": "Dark■Angels",
   "power": 932316193
  },
  {
   "server": 42006,
   "family": "XCorurage",
   "power": 857970019
  },
  {
   "server": 42006,
   "family": "ПодГрибами",
   "power": 344372848
  },
  {
   "server": 42006,
   "family": "ᴋᴀᴛᴏɴ",
   "power": 316199077
  },
  {
   "server": 42006,
   "family": "Darkness",
   "power": 265056316
  },
  {
   "server": 42006,
   "family": "Царство",
   "power": 237736021
  },
  {
   "server": 42006,
   "family": "АД_ПРЕИСПОДНЯ",
   "power": 174499180
  },
  {
   "server": 42006,
   "family": "FrozyGameYT",
   "power": 118757916
  },
  {
   "server": 42006,
   "family": "InceptionHub",
   "power": 86052051
  },
  {
   "server": 42007,
   "family": "EternalKnights",
   "power": 1683306267
  },
  {
   "server": 42007,
   "family": "ЭлизиуМ",
   "power": 879729558
  },
  {
   "server": 42007,
   "family": "Pawuchki",
   "power": 714683860
  },
  {
   "server": 42007,
   "family": "Урал",
   "power": 575229350
  },
  {
   "server": 42007,
   "family": "Чаепитие",
   "power": 532131548
  },
  {
   "server": 42007,
   "family": "Russia",
   "power": 206258113
  },
  {
   "server": 42007,
   "family": "АНИМЕШНИКИ",
   "power": 190346772
  },
  {
   "server": 42007,
   "family": "чисто_топ_клан",
   "power": 172815528
  },
  {
   "server": 42007,
   "family": "Альянс",
   "power": 153514416
  },
  {
   "server": 42007,
   "family": "REDEYES",
   "power": 153157816
  },
  {
   "server": 42008,
   "family": "9CirclesOfHell",
   "power": 1788414503
  },
  {
   "server": 42008,
   "family": "Spirit",
   "power": 1405947277
  },
  {
   "server": 42008,
   "family": "Кубничка",
   "power": 834675122
  },
  {
   "server": 42008,
   "family": "MidnightBeaver",
   "power": 361341168
  },
  {
   "server": 42008,
   "family": "Hell",
   "power": 313308205
  },
  {
   "server": 42008,
   "family": "Cerberus",
   "power": 234762264
  },
  {
   "server": 42008,
   "family": "Неизвестность",
   "power": 228559758
  },
  {
   "server": 42008,
   "family": "Arctic",
   "power": 207092592
  },
  {
   "server": 42008,
   "family": "Lazur",
   "power": 160334661
  },
  {
   "server": 42008,
   "family": "konoha",
   "power": 128051514
  },
  {
   "server": 42009,
   "family": "฿ESHKA",
   "power": 1934077158
  },
  {
   "server": 42009,
   "family": "24ﾉ7",
   "power": 1347609202
  },
  {
   "server": 42009,
   "family": "SHK",
   "power": 643957471
  },
  {
   "server": 42009,
   "family": "ПокойХаоса",
   "power": 497058467
  },
  {
   "server": 42009,
   "family": "Game_Over",
   "power": 325058314
  },
  {
   "server": 42009,
   "family": "Лисий_Храм",
   "power": 307813595
  },
  {
   "server": 42009,
   "family": "ГрибоЕДЫ",
   "power": 238836664
  },
  {
   "server": 42009,
   "family": "Zero",
   "power": 217258344
  },
  {
   "server": 42009,
   "family": "HypeTrain",
   "power": 158471640
  },
  {
   "server": 42009,
   "family": "GameOver",
   "power": 148264322
  },
  {
   "server": 42010,
   "family": "Shadow",
   "power": 1651791293
  },
  {
   "server": 42010,
   "family": "MADNESS",
   "power": 1563295894
  },
  {
   "server": 42010,
   "family": "Sankt_Legion",
   "power": 720549989
  },
  {
   "server": 42010,
   "family": "InTeam",
   "power": 480113572
  },
  {
   "server": 42010,
   "family": "СССР",
   "power": 389076630
  },
  {
   "server": 42010,
   "family": "котики",
   "power": 325378132
  },
  {
   "server": 42010,
   "family": "Chaos",
   "power": 276254007
  },
  {
   "server": 42010,
   "family": "Alfa",
   "power": 180666145
  },
  {
   "server": 42010,
   "family": "ШирайРю",
   "power": 178214412
  },
  {
   "server": 42010,
   "family": "Russian",
   "power": 63166413
  },
  {
   "server": 42011,
   "family": "Ragnarok",
   "power": 1874605893
  },
  {
   "server": 42011,
   "family": "FoRFuN",
   "power": 1287918769
  },
  {
   "server": 42011,
   "family": "GoD",
   "power": 744863727
  },
  {
   "server": 42011,
   "family": "Слышу_ZoV",
   "power": 514745511
  },
  {
   "server": 42011,
   "family": "НегрыВПрипяти",
   "power": 395718249
  },
  {
   "server": 42011,
   "family": "SeRaTHiM",
   "power": 380005128
  },
  {
   "server": 42011,
   "family": "грибной_суп",
   "power": 302811182
  },
  {
   "server": 42011,
   "family": "joydivision",
   "power": 235194862
  },
  {
   "server": 42011,
   "family": "Тамплиеры",
   "power": 212245871
  },
  {
   "server": 42011,
   "family": "ПодПивасник",
   "power": 172580969
  },
  {
   "server": 42012,
   "family": "Семья",
   "power": 1414895002
  },
  {
   "server": 42012,
   "family": "Omega",
   "power": 866649021
  },
  {
   "server": 42012,
   "family": "PANDORA",
   "power": 613424118
  },
  {
   "server": 42012,
   "family": "GODS",
   "power": 266217288
  },
  {
   "server": 42012,
   "family": "UTOPIA",
   "power": 250183214
  },
  {
   "server": 42012,
   "family": "кугуар",
   "power": 247689742
  },
  {
   "server": 42012,
   "family": "Evil",
   "power": 245447395
  },
  {
   "server": 42012,
   "family": "Башня_Магии",
   "power": 233142710
  },
  {
   "server": 42012,
   "family": "BezDonata",
   "power": 224645517
  },
  {
   "server": 42012,
   "family": "LegionOfDoom",
   "power": 216418256
  },
  {
   "server": 42013,
   "family": "ForgottenWorld",
   "power": 1181277331
  },
  {
   "server": 42013,
   "family": "Evil",
   "power": 703314881
  },
  {
   "server": 42013,
   "family": "Фистоболс",
   "power": 695235662
  },
  {
   "server": 42013,
   "family": "Dragon",
   "power": 458473748
  },
  {
   "server": 42013,
   "family": "WaGneR",
   "power": 325920483
  },
  {
   "server": 42013,
   "family": "Crocodiles",
   "power": 311267436
  },
  {
   "server": 42013,
   "family": "RuSSkullS",
   "power": 288388839
  },
  {
   "server": 42013,
   "family": "дракон",
   "power": 262604443
  },
  {
   "server": 42013,
   "family": "КотятьяНорка",
   "power": 240726205
  },
  {
   "server": 42013,
   "family": "DARKSIDE",
   "power": 228811234
  },
  {
   "server": 42014,
   "family": "Gods_of_Chaos",
   "power": 1477197339
  },
  {
   "server": 42014,
   "family": "MidnightBobr",
   "power": 1370534226
  },
  {
   "server": 42014,
   "family": "DemonKings",
   "power": 1061855148
  },
  {
   "server": 42014,
   "family": "Котлетосы",
   "power": 370387344
  },
  {
   "server": 42014,
   "family": "Грибочки",
   "power": 351060443
  },
  {
   "server": 42014,
   "family": "SanPees",
   "power": 290469677
  },
  {
   "server": 42014,
   "family": "БуйныеГрибы",
   "power": 243687150
  },
  {
   "server": 42014,
   "family": "HuskiEAsports",
   "power": 233458105
  },
  {
   "server": 42014,
   "family": "Империя",
   "power": 225942060
  },
  {
   "server": 42014,
   "family": "Поганки",
   "power": 166448865
  },
  {
   "server": 42015,
   "family": "Спирит",
   "power": 1663251390
  },
  {
   "server": 42015,
   "family": "么ＯＬＹＭＰＵＳ",
   "power": 1080312544
  },
  {
   "server": 42015,
   "family": "Черный_Клевер",
   "power": 895952920
  },
  {
   "server": 42015,
   "family": "⸎ꁒꐇꌚꑛ꒓ꆂꆂꁒꌚ⸎",
   "power": 624580764
  },
  {
   "server": 42015,
   "family": "Гильдия",
   "power": 496684419
  },
  {
   "server": 42015,
   "family": "IceCool",
   "power": 390026711
  },
  {
   "server": 42015,
   "family": "Legion",
   "power": 284221304
  },
  {
   "server": 42015,
   "family": "ДОВОД",
   "power": 262841802
  },
  {
   "server": 42015,
   "family": "ЛисийДом",
   "power": 250591180
  },
  {
   "server": 42015,
   "family": "Город_Грехов",
   "power": 207897545
  },
  {
   "server": 42016,
   "family": "SinsFamily",
   "power": 1744034468
  },
  {
   "server": 42016,
   "family": "НеБеСа",
   "power": 982493659
  },
  {
   "server": 42016,
   "family": "zavoevatelu",
   "power": 452722224
  },
  {
   "server": 42016,
   "family": "Despot",
   "power": 439529032
  },
  {
   "server": 42016,
   "family": "Sparta",
   "power": 408345578
  },
  {
   "server": 42016,
   "family": "Samoxa_11_RUS",
   "power": 271945934
  },
  {
   "server": 42016,
   "family": "Пустые",
   "power": 240344891
  },
  {
   "server": 42016,
   "family": "PoXyIsT",
   "power": 194707524
  },
  {
   "server": 42016,
   "family": "Грибочкино",
   "power": 175537183
  },
  {
   "server": 42016,
   "family": "Цукенг",
   "power": 147409473
  },
  {
   "server": 42017,
   "family": "Espada",
   "power": 1774539419
  },
  {
   "server": 42017,
   "family": "Espada_junior",
   "power": 1091394788
  },
  {
   "server": 42017,
   "family": "TeamVIBE",
   "power": 749026135
  },
  {
   "server": 42017,
   "family": "СПАРТА",
   "power": 499660257
  },
  {
   "server": 42017,
   "family": "LiberumAves",
   "power": 305905349
  },
  {
   "server": 42017,
   "family": "соло",
   "power": 273567326
  },
  {
   "server": 42017,
   "family": "ВСАДНИКИ³",
   "power": 206903309
  },
  {
   "server": 42017,
   "family": "SAD_TENEI",
   "power": 205379572
  },
  {
   "server": 42017,
   "family": "Fenix",
   "power": 139910324
  },
  {
   "server": 42017,
   "family": "Fox",
   "power": 131908846
  },
  {
   "server": 42018,
   "family": "ГрибноеДерево",
   "power": 1484015379
  },
  {
   "server": 42018,
   "family": "Дерзкие",
   "power": 1198549101
  },
  {
   "server": 42018,
   "family": "NachalnikiPMC",
   "power": 1131661725
  },
  {
   "server": 42018,
   "family": "Вавилон",
   "power": 595273200
  },
  {
   "server": 42018,
   "family": "Мухоморы",
   "power": 385835607
  },
  {
   "server": 42018,
   "family": "Царство_Грибов",
   "power": 294752063
  },
  {
   "server": 42018,
   "family": "Поганки",
   "power": 251071181
  },
  {
   "server": 42018,
   "family": "ГрибыСглазам",
   "power": 208262770
  },
  {
   "server": 42018,
   "family": "SubZero",
   "power": 192642543
  },
  {
   "server": 42018,
   "family": "лактор",
   "power": 174598401
  }
 ]
  .sort((a, b) => b.power - a.power)
  .slice(0, 500);
/* DATA */

const rowsPerPage = 10;
let currentPage = 1;

const rankingTable = document.querySelector("#ranking-table tbody");
const pagination = document.querySelector("#pagination");
const totalCountSpan = document.querySelector("#total-count");

function updateTable(page) {
  if (!rankingTable) return;

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
      <td class="py-4 text-center">${item.power.toLocaleString("en", {
        maximumFractionDigits: 0,
      })}</td>
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
  if (!pagination) return;

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

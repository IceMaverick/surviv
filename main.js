webpackJsonp([0], {
	"+0OL": function(e, t, a) {
		"use strict";
		e.exports = {
			Action: {
				None: 0,
				Reload: 1,
				UseItem: 2,
				Revive: 3
			},
			WeaponSlot: {
				Primary: 0,
				Secondary: 1,
				Throwable: 3,
				Melee: 2,
				Count: 4
			},
			WeaponType: ["gun", "gun", "melee", "throwable"],
			DamageType: {
				Player: 0,
				Bleeding: 1,
				Gas: 2
			},
			Anim: {
				None: 0,
				Melee: 1,
				Cook: 2,
				Throw: 3,
				CrawlForward: 4,
				CrawlBackward: 5,
				Revive: 6
			},
			GasMode: {
				Inactive: 0,
				Waiting: 1,
				Moving: 2
			},
			protocolVersion: 27,
			map: {
				baseWidth: 512,
				baseHeight: 512,
				gridSize: 16,
				shoreDivisions: 64,
				shoreInset: 32,
				shoreVariation: 3,
				grassInset: 18,
				grassVariation: 2,
				extension: 80
			},
			player: {
				radius: 1,
				maxVisualRadius: 3.75,
				maxInteractionRad: 3.5,
				minActiveTime: 10,
				moveSpeed: 12,
				health: 100,
				boostDecay: .33,
				boostMoveSpeed: 2,
				boostHealAmount: .33,
				boostBreakpoints: [1, 1, 1.5, .5],
				scopeDelay: .25,
				baseSwitchDelay: .25,
				freeSwitchCooldown: 1,
				headshotChance: .15,
				img: {
					scale: 1
				},
				spectateDeadTimeout: 2,
				bleedTickRate: 1,
				bleedDamage: 2,
				downedMoveSpeed: 4,
				downedRezMoveSpeed: 2,
				reviveDuration: 8,
				reviveMaxRange: 5,
				reviveHealth: 24,
				crawlTime: .75,
				emoteSoftCooldown: 2,
				emoteHardCooldown: 6,
				emoteThreshold: 6,
				throwableMaxMouseDist: 18,
				cookTime: .1,
				throwTime: .3,
				cookSpeedPenalty: 3,
				waterSpeedPenalty: 3,
				meleeHeight: .25
			},
			teamColors: [16776960, 255, 16711680, 16711935],
			bullet: {
				maxReflect: 3,
				reflectDistDecay: 1.5,
				height: .25
			},
			projectile: {
				maxHeight: 2
			},
			explosions: {
				explosion_frag: {
					damage: 125,
					obstacleDamage: 1.1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 12,
					shrapnelType: "shrapnel_frag",
					explosionType: "frag",
					decalType: "decal_frag_explosion"
				},
				explosion_smoke: {
					damage: 0,
					obstacleDamage: 1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 0,
					shrapnelType: "shrapnel_frag",
					explosionType: "smoke",
					decalType: "decal_smoke_explosion"
				},
				explosion_barrel: {
					damage: 125,
					obstacleDamage: 1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 12,
					shrapnelType: "shrapnel_barrel",
					explosionType: "barrel",
					decalType: "decal_barrel_explosion"
				}
			},
			bullets: {
				bullet_mp5: {
					damage: 11,
					obstacleDamage: 1,
					falloff: .8,
					distance: 100,
					speed: 85,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_ak47: {
					damage: 13.5,
					obstacleDamage: 1,
					falloff: .9,
					distance: 200,
					speed: 100,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_scar: {
					damage: 15,
					obstacleDamage: 1,
					falloff: .85,
					distance: 175,
					speed: 108,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_mosin: {
					damage: 72,
					obstacleDamage: 1.5,
					falloff: .95,
					distance: 500,
					speed: 178,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .16,
					tracerLength: .8
				},
				bullet_sv98: {
					damage: 80,
					obstacleDamage: 1.5,
					falloff: .96,
					distance: 520,
					speed: 182,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .2,
					tracerLength: .8
				},
				bullet_m39: {
					damage: 24.5,
					obstacleDamage: 1,
					falloff: .9,
					distance: 400,
					speed: 125,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_shotgun: {
					damage: 12.5,
					obstacleDamage: 1,
					falloff: .3,
					speed: 66,
					distance: 28,
					variance: 0,
					shrapnel: !1,
					tracerColor: "12gauge",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_m9: {
					damage: 12,
					obstacleDamage: 1,
					falloff: .7,
					speed: 85,
					distance: 100,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_ot38: {
					damage: 26,
					obstacleDamage: 1,
					falloff: .75,
					speed: 112,
					distance: 125,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .09,
					tracerLength: .8
				},
				bullet_deagle: {
					damage: 35,
					obstacleDamage: 1,
					falloff: .75,
					speed: 115,
					distance: 120,
					variance: 0,
					shrapnel: !1,
					tracerColor: "50AE",
					tracerWidth: .12,
					tracerLength: .8
				},
				bullet_mac10: {
					damage: 9.25,
					obstacleDamage: 1,
					falloff: .6,
					distance: 50,
					speed: 75,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_ump9: {
					damage: 15,
					obstacleDamage: 1,
					falloff: .75,
					distance: 100,
					speed: 100,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_vector: {
					damage: 7.5,
					obstacleDamage: 1,
					falloff: .6,
					distance: 46,
					speed: 88,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_dp28: {
					damage: 14,
					obstacleDamage: 1.5,
					falloff: .9,
					distance: 225,
					speed: 110,
					variance: 0,
					shrapnel: !1,
					tracerColor: "762mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_glock: {
					damage: 9,
					obstacleDamage: 1,
					falloff: .5,
					speed: 70,
					distance: 44,
					variance: 0,
					shrapnel: !1,
					tracerColor: "9mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_famas: {
					damage: 17,
					obstacleDamage: 1,
					falloff: .8,
					distance: 150,
					speed: 110,
					variance: 0,
					shrapnel: !1,
					tracerColor: "556mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_hk416: {
					damage: 11,
					obstacleDamage: 1,
					falloff: .85,
					distance: 175,
					speed: 105,
					variance: 0,
					shrapnel: !1,
					tracerColor: "556mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_mk12: {
					damage: 19.5,
					obstacleDamage: 1,
					falloff: .9,
					distance: 400,
					speed: 132,
					variance: 0,
					shrapnel: !1,
					tracerColor: "556mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				bullet_m249: {
					damage: 14,
					obstacleDamage: 1.75,
					falloff: .9,
					distance: 220,
					speed: 125,
					variance: 0,
					shrapnel: !1,
					tracerColor: "556mm",
					tracerWidth: .1,
					tracerLength: .8
				},
				shrapnel_barrel: {
					damage: 20,
					obstacleDamage: 1,
					falloff: 1,
					speed: 20,
					distance: 8,
					variance: 1.5,
					shrapnel: !0,
					tracerColor: "shrapnel",
					tracerWidth: .125,
					tracerLength: .5
				},
				shrapnel_frag: {
					damage: 20,
					obstacleDamage: 1,
					falloff: 1,
					speed: 20,
					distance: 8,
					variance: 1.5,
					shrapnel: !0,
					tracerColor: "shrapnel",
					tracerWidth: .125,
					tracerLength: .5
				}
			},
			tracerColors: {
				"9mm": {
					regular: 16704198,
					saturated: 16767411
				},
				"762mm": {
					regular: 12965630,
					saturated: 11257087
				},
				"12gauge": {
					regular: 16702684,
					saturated: 16702684
				},
				"556mm": {
					regular: 11141010,
					saturated: 11141010
				},
				"50AE": {
					regular: 16773256,
					saturated: 16773256
				},
				shrapnel: {
					regular: 3355443,
					saturated: 3355443
				}
			},
			items: {
				outfitBase: {
					name: "Basic Outfit",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16303476,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 16303476,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 8480055
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16303476
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitAqua: {
					name: "Aquatic Avenger",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 47778,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 65502,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 536620
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 47778
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCoral: {
					name: "Coral Guise",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16736103,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 16746895,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 16772298
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16736103
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitKhaki: {
					name: "The Initiative",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 12824197,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 9404516,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 4208940
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 12824197
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCasanova: {
					name: "Casanova Silks",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 4327436,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 7602183,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 1052688
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 4327436
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitPrisoner: {
					name: "The New Black",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16735266,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 16545059,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 16756224
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16735266
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitJester: {
					name: "Jester's Folly",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 7798904,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 4915276,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 936960
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 7798904
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitWoodland: {
					name: "Woodland Combat",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 2831146,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 5925970,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 5056e3
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2831146
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitRoyalFortune: {
					name: "Royal Fortune",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 8333091,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15254058,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 9981696
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 8333091
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitKeyLime: {
					name: "Key Lime",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 13107007,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15662941,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 12355383
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 13107007
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCobaltShell: {
					name: "Cobalt Shell",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 11095,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 2711164,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 19093
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 11095
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCarbonFiber: {
					name: "Carbon Fiber",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 2171169,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 1842204,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 3552822
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2171169
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitDarkGloves: {
					name: "The Professional",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16303476,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 12482560,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 10708736
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 12482560
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitBarrel: {
					name: "Fish in a Barrel",
					type: "skin",
					subtype: "camo",
					rad: 1,
					skinImg: {
						baseTint: 16777215,
						baseSprite: "img/map/map-barrel-01.svg",
						baseScale: .8,
						handTint: 2236962,
						handSprite: "img/player/player-hands.svg",
						backpackTint: 6697728
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2236962
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitGhillie: {
					name: "Ghillie Suit",
					type: "skin",
					subtype: "camo",
					rad: 1,
					skinImg: {
						baseTint: 8630096,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 8630096,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 6697728
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 8630096
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCamo: {
					name: "Forest Camo",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 10066278,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 8684631,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 6710835
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 10066278
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitRed: {
					name: "Target Practice",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16711680,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 13893632,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 11993088
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16711680
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitWhite: {
					name: "Arctic Avenger",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 14935011,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15658734,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 14474460
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 14935011
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				fists: {
					name: "Fists",
					type: "melee",
					switchDelay: .25,
					rangeMult: 1.25,
					areaOfEffect: .75,
					damageTime: .1,
					cooldownTime: .15,
					damage: 24,
					headshotMult: 1,
					speed: {
						equip: 1,
						attack: 0
					},
					sound: {
						swing: "punch_swing_01",
						deploy: "stow_weapon_01"
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-fists.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					}
				},
				mp5: {
					name: "MP5",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 2,
					fireDelay: .09,
					switchDelay: .75,
					barrelLength: 2.625,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4,
					shotSpread: 3,
					bulletCount: 1,
					bulletType: "bullet_mp5",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mp5.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1184274,
						hands: 2,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .375
					},
					sound: {
						shoot: "mp5_01",
						reload: "mp5_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mp5_switch_01"
					}
				},
				mac10: {
					name: "MAC-10",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 96,
					maxClip: 32,
					maxReload: 32,
					reloadTime: 1.8,
					fireDelay: .045,
					switchDelay: .75,
					barrelLength: 2.45,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 11,
					shotSpread: 10,
					bulletCount: 1,
					bulletType: "bullet_mac10",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mac10.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .46
						},
						tint: 3684408,
						hands: 2,
						leftHandOffset: 4,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .35
					},
					sound: {
						shoot: "mac10_01",
						reload: "mac10_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mac10_switch_01"
					}
				},
				ump9: {
					name: "UMP9",
					type: "gun",
					fireMode: "burst",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 1.9,
					fireDelay: .35,
					burstDelay: .07,
					switchDelay: .75,
					barrelLength: 2.7,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1.5,
					bulletCount: 1,
					burstCount: 3,
					bulletType: "bullet_ump9",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ump9.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 1184274,
						hands: 2,
						leftHandOffset: 16,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "ump9_01",
						reload: "ump9_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ump9_switch_01"
					}
				},
				vector: {
					name: "Vector",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 99,
					maxClip: 33,
					maxReload: 33,
					reloadTime: 1.6,
					fireDelay: .038,
					switchDelay: .75,
					barrelLength: 2.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4.5,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_vector",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-vector.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 9009504,
						hands: 2,
						leftHandOffset: 20,
						recoil: 2
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "vector_01",
						reload: "vector_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "vector_switch_01"
					}
				},
				famas: {
					name: "FAMAS",
					type: "gun",
					fireMode: "burst",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 75,
					maxClip: 25,
					maxReload: 25,
					reloadTime: 2.3,
					fireDelay: .35,
					burstDelay: .07,
					switchDelay: .75,
					barrelLength: 2.975,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 1.1,
					bulletCount: 1,
					burstCount: 3,
					bulletType: "bullet_famas",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-famas.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .53
						},
						tint: 10061929,
						hands: 2,
						leftHandOffset: 16,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .425
					},
					sound: {
						shoot: "famas_01",
						reload: "famas_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "famas_switch_01"
					}
				},
				hk416: {
					name: "HK416",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 2.3,
					fireDelay: .075,
					switchDelay: .75,
					barrelLength: 2.7,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 8,
					shotSpread: 4,
					bulletCount: 1,
					bulletType: "bullet_hk416",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-hk416.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 14402714,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "hk416_01",
						reload: "hk416_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "hk416_switch_01"
					}
				},
				mk12: {
					name: "Mk 12 SPR",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 60,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.4,
					fireDelay: .15,
					switchDelay: .75,
					barrelLength: 3.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_mk12",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mk12.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .49
						},
						tint: 10984586,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3.75
					},
					particle: {
						shellScale: 1.3,
						shellOffset: .55
					},
					sound: {
						shoot: "mk12_01",
						reload: "mk12_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "mk12_switch_01"
					}
				},
				m249: {
					name: "M249",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 200,
					maxClip: 100,
					maxReload: 100,
					reloadTime: 6.7,
					fireDelay: .08,
					switchDelay: .75,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 6,
					shotSpread: 1.5,
					bulletCount: 1,
					bulletType: "bullet_m249",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: -4
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m249.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						sprite_bot: "img/guns/gun-m249-bot-01.svg",
						scale: {
							x: .5,
							y: .525
						},
						tint: 3618613,
						hands: 2,
						leftHandOffset: 32,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .5875
					},
					sound: {
						shoot: "m249_01",
						reload: "m249_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "m249_switch_01"
					}
				},
				ak47: {
					name: "AK-47",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 2.5,
					fireDelay: .1,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 7.5,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_ak47",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ak.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 6433298,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "ak47_01",
						reload: "ak47_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "ak47_switch_01"
					}
				},
				scar: {
					name: "SCAR-H",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 80,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.7,
					fireDelay: .09,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 5,
					shotSpread: 2,
					bulletCount: 1,
					bulletType: "bullet_scar",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-scar.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 10189640,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "scar_01",
						reload: "scar_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "scar_switch_01"
					}
				},
				dp28: {
					name: "DP-28",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 120,
					maxClip: 60,
					maxReload: 60,
					reloadTime: 3.3,
					fireDelay: .115,
					switchDelay: .75,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 9,
					shotSpread: 2,
					bulletCount: 1,
					bulletType: "bullet_dp28",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: -2
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-dp28.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						sprite_top: "img/guns/gun-dp28-top-01.svg",
						scale: {
							x: .5,
							y: .53
						},
						tint: 1710618,
						hands: 2,
						leftHandOffset: 24,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .6
					},
					sound: {
						shoot: "dp28_01",
						reload: "dp28_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "dp28_switch_01"
					}
				},
				mosin: {
					name: "Mosin-Nagant",
					type: "gun",
					fireMode: "single",
					reloadMode: "single",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					maxClip: 5,
					maxReload: 1,
					reloadTime: .9,
					fireDelay: 2,
					switchDelay: 1,
					pullDelay: 1,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_mosin",
					headshotMult: 1.5,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mosin.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 8,
						recoil: 5.25
					},
					particle: {
						shellScale: 1.8,
						shellOffset: .6
					},
					sound: {
						shoot: "mosin_01",
						reload: "mosin_reload_01",
						cycle: "mosin_cycle_01",
						pull: "mosin_pull_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "mosin_cycle_01"
					}
				},
				sv98: {
					name: "SV-98",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 30,
					maxClip: 10,
					maxReload: 10,
					reloadTime: 2.7,
					fireDelay: 1.5,
					switchDelay: 1,
					pullDelay: .8,
					barrelLength: 3.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2.5,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_sv98",
					headshotMult: 1.5,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-sv98.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 6654279,
						hands: 2,
						leftHandOffset: 8,
						recoil: 5.25
					},
					particle: {
						shellScale: 1.8,
						shellOffset: .6
					},
					sound: {
						shoot: "sv98_01",
						reload: "sv98_reload_01",
						cycle: "sv98_cycle_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "sv98_cycle_01"
					}
				},
				m39: {
					name: "M39 EMR",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 60,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.5,
					fireDelay: .2,
					switchDelay: .75,
					barrelLength: 3.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4.25,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_m39",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m39.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 3355443,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3.75
					},
					particle: {
						shellScale: 1.3,
						shellOffset: .575
					},
					sound: {
						shoot: "m39_01",
						reload: "m39_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "m39_switch_01"
					}
				},
				m870: {
					name: "M870",
					type: "gun",
					fireMode: "single",
					reloadMode: "single",
					caseTiming: "shoot",
					ammo: "12gauge",
					ammoSpawnCount: 10,
					maxClip: 5,
					maxReload: 1,
					reloadTime: .75,
					fireDelay: .9,
					switchDelay: .9,
					pullDelay: .9,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 1.5,
					lootImg: {
						sprite: "img/loot/loot-weapon-pumpshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					speed: {
						equip: 0,
						attack: 0
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 20,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "m870_01",
						reload: "m870_reload_01",
						cycle: "m870_cycle_01",
						pull: "m870_pull_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m870_cycle_01"
					}
				},
				mp220: {
					name: "MP220",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "reload",
					ammo: "12gauge",
					ammoSpawnCount: 10,
					maxClip: 2,
					maxReload: 2,
					reloadTime: 2.6,
					fireDelay: .2,
					switchDelay: .3,
					barrelLength: 2.45,
					rad: 1,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 1.5,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-soshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .47
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 0,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .35
					},
					sound: {
						shoot: "mp220_01",
						reload: "mp220_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mp220_deploy_01"
					}
				},
				saiga: {
					name: "Saiga-12",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "12gauge",
					ammoSpawnCount: 20,
					maxClip: 5,
					maxReload: 5,
					reloadTime: 2.5,
					fireDelay: .4,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 1.5,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-autoshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 2302755,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "saiga_01",
						reload: "saiga_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "saiga_switch_01"
					}
				},
				m9: {
					name: "M9",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 45,
					dualWieldType: "m9_dual",
					maxClip: 15,
					maxReload: 15,
					reloadTime: 1.6,
					fireDelay: .12,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 8,
					shotSpread: 8,
					bulletCount: 1,
					bulletType: "bullet_m9",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m9.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "m9_01",
						reload: "m9_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m9_switch_01"
					}
				},
				m9_dual: {
					name: "Dual M9",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					isDual: !0,
					ammo: "9mm",
					ammoSpawnCount: 45,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 3.1,
					fireDelay: .08,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 9,
					shotSpread: 11,
					bulletCount: 1,
					bulletType: "bullet_m9",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m9-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 1973790,
						hands: 2,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "m9_01",
						reload: "m9_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m9_switch_01"
					}
				},
				glock: {
					name: "Glock 18C",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 51,
					dualWieldType: "glock_dual",
					maxClip: 17,
					maxReload: 17,
					reloadTime: 1.95,
					fireDelay: .06,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 10,
					shotSpread: 12,
					bulletCount: 1,
					bulletType: "bullet_glock",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-glock.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "glock_01",
						reload: "glock_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "glock_switch_01"
					}
				},
				glock_dual: {
					name: "Dual Glock 18C",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 51,
					isDual: !0,
					maxClip: 34,
					maxReload: 34,
					reloadTime: 3.8,
					fireDelay: .03,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 16,
					shotSpread: 18,
					bulletCount: 1,
					bulletType: "bullet_glock",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-glock-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "glock_01",
						reload: "glock_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "glock_switch_01"
					}
				},
				ot38: {
					name: "OT-38",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					dualWieldType: "ot38_dual",
					maxClip: 5,
					maxReload: 5,
					reloadTime: 2,
					fireDelay: .4,
					switchDelay: .3,
					barrelLength: 2.05,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1.25,
					bulletCount: 1,
					bulletType: "bullet_ot38",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ot38.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .48
						},
						tint: 7368816,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .225
					},
					sound: {
						shoot: "ot38_01",
						reload: "ot38_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ot38_switch_01"
					}
				},
				ot38_dual: {
					name: "Dual OT-38",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					isDual: !0,
					maxClip: 10,
					maxReload: 10,
					reloadTime: 3.8,
					fireDelay: .2,
					switchDelay: .3,
					barrelLength: 2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4,
					shotSpread: 1.75,
					bulletCount: 1,
					bulletType: "bullet_ot38",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ot38-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .48
						},
						tint: 7368816,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .225
					},
					sound: {
						shoot: "ot38_01",
						reload: "ot38_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ot38_switch_01"
					}
				},
				deagle: {
					name: "Desert Eagle",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "50AE",
					ammoSpawnCount: 49,
					dualWieldType: "deagle_dual",
					maxClip: 7,
					maxReload: 7,
					reloadTime: 2.3,
					fireDelay: .16,
					switchDelay: .3,
					barrelLength: 1.855,
					rad: 1.25,
					recoilTime: .5,
					moveSpread: 6,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_deagle",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-deagle.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .54
						},
						tint: 14791743,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .265
					},
					sound: {
						shoot: "deagle_01",
						reload: "deagle_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "deagle_switch_01"
					}
				},
				deagle_dual: {
					name: "Dual Desert Eagle",
					type: "gun",
					fireMode: "single",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "50AE",
					ammoSpawnCount: 98,
					isDual: !0,
					maxClip: 14,
					maxReload: 14,
					reloadTime: 4,
					fireDelay: .12,
					switchDelay: .3,
					barrelLength: 1.855,
					rad: 1.25,
					recoilTime: .5,
					moveSpread: 7.5,
					shotSpread: 3.5,
					bulletCount: 1,
					bulletType: "bullet_deagle",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-deagle-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .54
						},
						tint: 14791743,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .265
					},
					sound: {
						shoot: "deagle_01",
						reload: "deagle_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "deagle_switch_01"
					}
				},
				frag: {
					name: "Frag Grenade",
					type: "throwable",
					explosionType: "explosion_frag",
					inventoryOrder: 1,
					cookable: !0,
					fuseTime: 4,
					fireDelay: .4,
					switchDelay: .3,
					rad: 1,
					projRad: .5,
					throwSpeed: 20,
					throwDistance: 18,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-throwable-frag.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/proj/frag-proj-nopin-nolever.svg",
						scale: .12,
						tint: 16777215
					},
					handImg: {
						equip: {
							right: {
								sprite: "img/proj/frag-proj-pin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "none"
							}
						},
						cook: {
							right: {
								sprite: "img/proj/frag-proj-nopin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "img/proj/frag-pin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							}
						},
						throwing: {
							right: {
								sprite: "none"
							},
							left: {
								sprite: "none"
							}
						}
					},
					sound: {
						pullPin: "frag_pin_01",
						throwing: "frag_throw_01",
						pickup: "frag_pickup_01",
						deploy: "frag_deploy_01"
					}
				},
				smoke: {
					name: "Smoke Grenade",
					type: "throwable",
					explosionType: "explosion_smoke",
					inventoryOrder: 2,
					cookable: !1,
					fuseTime: 2.5,
					fireDelay: .4,
					switchDelay: .3,
					rad: 1,
					projRad: .5,
					throwSpeed: 15,
					throwDistance: 18,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-throwable-smoke.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/proj/smoke-proj-nopin-nolever.svg",
						scale: .12,
						tint: 16777215
					},
					handImg: {
						equip: {
							right: {
								sprite: "img/proj/smoke-proj-pin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "none"
							}
						},
						cook: {
							right: {
								sprite: "img/proj/smoke-proj-nopin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "img/proj/frag-pin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							}
						},
						throwing: {
							right: {
								sprite: "none"
							},
							left: {
								sprite: "none"
							}
						}
					},
					sound: {
						pullPin: "frag_pin_01",
						throwing: "frag_throw_01",
						pickup: "frag_pickup_01",
						deploy: "frag_deploy_01"
					}
				},
				"9mm": {
					name: "9mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 15,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 16756224,
						tintDark: 12550912
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"762mm": {
					name: "7.62mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 10,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 26367,
						tintDark: 19903
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"556mm": {
					name: "5.56mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 10,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 237056,
						tintDark: 161536
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"12gauge": {
					name: "12 gauge",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 5,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 16711680,
						tintDark: 12517376
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"50AE": {
					name: ".50 AE",
					type: "ammo",
					subtype: "special",
					rad: 1.2,
					minStackSize: 10,
					hideUi: !0,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 2697513,
						tintDark: 2039583
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				bandage: {
					name: "Bandage",
					type: "heal",
					useTime: 2.75,
					heal: 15,
					maxHeal: 75,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-bandage.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "bandage_pickup_01",
						use: "bandage_use_01"
					}
				},
				healthkit: {
					name: "Med Kit",
					type: "heal",
					useTime: 6,
					heal: 100,
					maxHeal: 100,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-healthkit.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "healthkit_pickup_01",
						use: "healthkit_use_01"
					}
				},
				soda: {
					name: "Soda",
					type: "boost",
					useTime: 3,
					boost: 25,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-soda.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "soda_pickup_01",
						use: "soda_use_01"
					}
				},
				painkiller: {
					name: "Pills",
					type: "boost",
					useTime: 5,
					boost: 50,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-pill.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pills_pickup_01",
						use: "pills_use_01"
					}
				},
				backpack00: {
					name: "Pouch",
					type: "backpack",
					desc: "Holds a minimal amount of ammo and supplies.",
					level: 0,
					rad: 1,
					playerRad: .55,
					tint: 16777215,
					lootImg: {
						sprite: "img/loot/loot-pack-00.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack01: {
					name: "Small Pack",
					type: "backpack",
					desc: "Holds an adequate amount of ammo and supplies.",
					level: 1,
					rad: 1,
					playerRad: .65,
					tint: 6697728,
					lootImg: {
						sprite: "img/loot/loot-pack-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack02: {
					name: "Regular Pack",
					type: "backpack",
					desc: "Holds a generous amount of ammo and supplies.",
					level: 2,
					rad: 1,
					tint: 26112,
					playerRad: .85,
					lootImg: {
						sprite: "img/loot/loot-pack-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack03: {
					name: "Military Pack",
					type: "backpack",
					desc: "For when you need to hold all of the things.",
					level: 3,
					rad: 1,
					tint: 6710835,
					playerRad: 1,
					lootImg: {
						sprite: "img/loot/loot-pack-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				helmet01: {
					name: "Level 1 Helmet",
					type: "helmet",
					level: 1,
					damageReduction: .25,
					rad: 1,
					tint: 3244031,
					lootImg: {
						sprite: "img/loot/loot-helmet-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				helmet02: {
					name: "Level 2 Helmet",
					type: "helmet",
					level: 2,
					damageReduction: .4,
					rad: 1,
					tint: 13027014,
					lootImg: {
						sprite: "img/loot/loot-helmet-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				helmet03: {
					name: "Level 3 Helmet",
					type: "helmet",
					level: 3,
					damageReduction: .55,
					rad: 1,
					tint: 2434341,
					lootImg: {
						sprite: "img/loot/loot-helmet-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				chest01: {
					name: "Level 1 Vest",
					type: "chest",
					level: 1,
					damageReduction: .25,
					rad: 1,
					tint: 11842740,
					lootImg: {
						sprite: "img/loot/loot-chest-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				chest02: {
					name: "Level 2 Vest",
					type: "chest",
					level: 2,
					damageReduction: .38,
					rad: 1,
					tint: 4934475,
					lootImg: {
						sprite: "img/loot/loot-chest-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				chest03: {
					name: "Level 3 Vest",
					type: "chest",
					level: 3,
					damageReduction: .45,
					rad: 1,
					tint: 0,
					lootImg: {
						sprite: "img/loot/loot-chest-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				"1xscope": {
					name: "1x Scope",
					type: "scope",
					level: 1,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-00.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"2xscope": {
					name: "2x Scope",
					type: "scope",
					level: 2,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"4xscope": {
					name: "4x Scope",
					type: "scope",
					level: 4,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"8xscope": {
					name: "8x Scope",
					type: "scope",
					level: 8,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"15xscope": {
					name: "15x Scope",
					type: "scope",
					level: 15,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-04.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				}
			},
			scopeZoomRadius: {
				"1xscope": 36,
				"2xscope": 42,
				"4xscope": 58,
				"8xscope": 86,
				"15xscope": 104
			},
			bagSizes: {
				"9mm": [120, 240, 330, 420],
				"762mm": [90, 180, 240, 300],
				"556mm": [90, 180, 240, 300],
				"12gauge": [15, 30, 60, 90],
				"50AE": [42, 84, 126, 168],
				frag: [3, 6, 9, 12],
				smoke: [3, 6, 9, 12],
				bandage: [5, 10, 15, 30],
				healthkit: [1, 2, 3, 4],
				soda: [2, 5, 10, 15],
				painkiller: [1, 2, 3, 4],
				"1xscope": [1, 1, 1, 1],
				"2xscope": [1, 1, 1, 1],
				"4xscope": [1, 1, 1, 1],
				"8xscope": [1, 1, 1, 1],
				"15xscope": [1, 1, 1, 1]
			}
		}
	},
	"+sac": function(e, t, a) {
		function i(e) {
			return a(o(e))
		}

		function o(e) {
			var t = n[e];
			if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
			return t
		}
		var n = {
			"./da.js": "j5/T",
			"./de.js": "KdTN",
			"./en.js": "W+3y",
			"./es.js": "pb8F",
			"./fr.js": "FRcz",
			"./it.js": "O/82",
			"./jp.js": "6XNf",
			"./ko.js": "BkwK",
			"./nl.js": "vdJX",
			"./pl.js": "DMc6",
			"./pt.js": "nlKB",
			"./ru.js": "8jco",
			"./sv.js": "RCak",
			"./th.js": "R4DZ",
			"./tr.js": "eqS/",
			"./vn.js": "a5N1",
			"./zh-cn.js": "UWg4",
			"./zh-tw.js": "kIX4"
		};
		i.keys = function() {
			return Object.keys(n)
		}, i.resolve = o, e.exports = i, i.id = "+sac"
	},
	"/2+T": function(e, t, a) {
		"use strict";
		var i = {
			create: function(e, t) {
				return {
					x: e,
					y: void 0 !== t ? t : e
				}
			},
			copy: function(e) {
				return {
					x: e.x,
					y: e.y
				}
			},
			set: function(e, t) {
				e.x = t.x, e.y = t.y
			},
			add: function(e, t) {
				return {
					x: e.x + t.x,
					y: e.y + t.y
				}
			},
			sub: function(e, t) {
				return {
					x: e.x - t.x,
					y: e.y - t.y
				}
			},
			mul: function(e, t) {
				return {
					x: e.x * t,
					y: e.y * t
				}
			},
			div: function(e, t) {
				return {
					x: e.x / t,
					y: e.y / t
				}
			},
			neg: function(e) {
				return {
					x: -e.x,
					y: -e.y
				}
			},
			lengthSqr: function(e) {
				return e.x * e.x + e.y * e.y
			},
			length: function(e) {
				return Math.sqrt(i.lengthSqr(e))
			},
			normalize: function(e) {
				var t = i.length(e);
				return {
					x: t > 1e-6 ? e.x / t : e.x,
					y: t > 1e-6 ? e.y / t : e.y
				}
			},
			normalizeSafe: function(e, t) {
				t = t || i.create(1, 0);
				var a = i.length(e);
				return {
					x: a > 1e-6 ? e.x / a : t.x,
					y: a > 1e-6 ? e.y / a : t.y
				}
			},
			dot: function(e, t) {
				return e.x * t.x + e.y * t.y
			},
			perp: function(e) {
				return {
					x: -e.y,
					y: e.x
				}
			},
			proj: function(e, t) {
				return i.mul(t, i.dot(e, t) / i.dot(t, t))
			},
			rotate: function(e, t) {
				var a = Math.cos(t),
					i = Math.sin(t);
				return {
					x: e.x * a - e.y * i,
					y: e.x * i + e.y * a
				}
			},
			mulElems: function(e, t) {
				return {
					x: e.x * t.x,
					y: e.y * t.y
				}
			},
			divElems: function(e, t) {
				return {
					x: e.x / t.x,
					y: e.y / t.y
				}
			},
			minElems: function(e, t) {
				return {
					x: Math.min(e.x, t.x),
					y: Math.min(e.y, t.y)
				}
			},
			maxElems: function(e, t) {
				return {
					x: Math.max(e.x, t.x),
					y: Math.max(e.y, t.y)
				}
			},
			randomUnit: function() {
				return i.normalizeSafe(i.create(Math.random() - .5, Math.random() - .5), i.create(1, 0))
			},
			lerp: function(e, t, a) {
				return i.add(i.mul(t, 1 - e), i.mul(a, e))
			},
			eq: function(e, t, a) {
				var i = void 0 !== a ? a : 1e-4;
				return Math.abs(e.x - t.x) <= i && Math.abs(e.y - t.y) <= i
			}
		};
		e.exports = i
	},
	"/rj8": function(e, t, a) {
		"use strict";

		function i() {
			this.active = !1, this.dirty = !1, this.container = new o.Graphics, this.container.alpha = 0, this.mobileOffset = 0, this.clientData = {
				label: "",
				duration: 0,
				keepAlive: !1,
				elapsed: 0,
				radius: 35,
				lineWidth: 8,
				fontWidth: 24
			}, this.timerBackground = o.Sprite.fromImage("img/gui/timer-background.svg"), this.timerBackground.anchor = new o.Point(.5, .5), this.timerBackground.scale = new o.Point(1, 1), this.container.addChild(this.timerBackground), this.innerCircle = new o.Graphics, this.outerCircle = new o.Graphics, this.container.addChild(this.innerCircle, this.outerCircle), this.counterText = new o.Text, this.counterText.anchor = new o.Point(.5, .5);
			var e = {
				fontFamily: "Roboto Condensed, Arial, sans-serif",
				fontWeight: "bold",
				fontSize: this.clientData.fontWidth,
				align: "center",
				fill: 16777215,
				stroke: 0,
				strokeThickness: 3
			};
			this.counterText.style = e, this.counterText.text = this.clientData.duration.toFixed(1), this.container.addChild(this.counterText), this.labelText = new o.Text, this.labelText.anchor = new o.Point(.5, .5);
			var t = {
				fontFamily: "Roboto Condensed, Arial, sans-serif",
				fontWeight: "100",
				fontSize: this.clientData.fontWidth,
				align: "center",
				fill: 16777215
			};
			this.labelText.style = t, this.container.addChild(this.labelText), this.screenScaleFactor = 1, this.callback = null
		}
		var o = a("gKxX"),
			n = (a("+0OL"), a("Tf6H"), a("/2+T"), a("zinx")),
			r = a("Jr6A");
		i.prototype = {
			init: function(e, t, a, i) {
				this.active = !0, this.clientData = {
					label: a,
					duration: t,
					keepAlive: i,
					elapsed: 0,
					radius: 35,
					lineWidth: 8,
					fontWidth: 24
				}, this.labelText.text = this.clientData.duration.toFixed(1), this.callback = e, this.container.visible = !0, this.container.alpha = 1
			},
			destroy: function() {
				this.container.destroy({
					children: !0,
					texture: !0
				})
			},
			resize: function(e, t) {
				this.screenScaleFactor = t, n.layout == n.Layout.Sm ? (n.tablet || (this.container.scale = new o.Point(.5, .5)), this.mobileOffset = r.isLandscape() ? e.mobileOffsetLandscape : e.mobileOffsetPortrait) : (this.container.scale = new o.Point(1, 1), this.mobileOffset = 0)
			},
			free: function(e) {
				this.active = !1, e && (this.container.visible = !1, this.container.clear())
			},
			update: function(e, t, a) {
				if (!this.active) return void(this.container.alpha = this.clientData.keepAlive ? 1 : 0);
				this.clientData.elapsed += e, this.clientData.elapsed = Math.min(this.clientData.elapsed, this.clientData.duration), (this.clientData.elapsed >= this.clientData.duration || t.dead) && (this.render(a), this.free(), this.callback && this.callback(t))
			},
			render: function(e) {
				if (this.active) {
					this.container.clear(), this.outerCircle.clear(), this.counterText.text = "", this.labelText.text = "";
					var t = Math.min(this.clientData.elapsed / this.clientData.duration, 1),
						a = {
							x: e.screenWidth / 2,
							y: e.screenHeight / 3 * this.screenScaleFactor + this.mobileOffset
						},
						i = Math.min(t, 1) * Math.PI * 2 - Math.PI / 2;
					this.container.beginFill(0, .5), this.outerCircle.lineStyle(.75 * this.clientData.lineWidth, 16777215), this.outerCircle.arc(0, 0, this.clientData.radius, -Math.PI / 2, i, !1), this.counterText.text = Math.max(0, this.clientData.duration - this.clientData.elapsed).toFixed(1);
					var o = 2.5 * this.clientData.radius;
					this.labelText.position.y = o, this.labelText.text = this.clientData.label;
					var n = 56 + this.clientData.label.length * this.clientData.fontWidth * .45,
						r = 1.5 * this.clientData.fontWidth,
						s = 0 - n / 2,
						l = o - r / 2;
					this.container.drawRoundedRect(s, l, n, r, 5), this.container.position = {
						x: a.x,
						y: a.y
					}
				}
			}
		}, e.exports = {
			PieTimer: i
		}
	},
	"09pV": function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e) {
			return document.getElementById(e)
		}

		function r(e) {
			return 0 == e.button
		}

		function s(e) {
			return "which" in e ? 3 == e.which : 2 == e.button
		}

		function l(e, t, a) {
			if (e instanceof Array)
				for (var i = 0; i < e.length; i++) l(e[i], void 0 !== a ? t[a] : t, i);
			else if (e instanceof Object)
				for (var o = Object.keys(e), n = 0; n < o.length; n++) {
					var r = o[n];
					l(e[r], void 0 !== a ? t[a] : t, r)
				} else t[a] = e
		}

		function c(e, t, a) {
			if (t instanceof Array) {
				for (var i = [], o = 0; o < t.length; o++) i[o] = c(e[o], t[o], a);
				return i
			}
			if (t instanceof Object) {
				for (var n = {}, r = Object.keys(t), s = 0; s < r.length; s++) {
					var l = r[s];
					n[l] = c(e[l], t[l], a)
				}
				return n
			}
			return e != t || a
		}

		function m() {
			var e = [];
			for (var t in g.items) g.items.hasOwnProperty(t) && "scope" == g.items[t].type && e.push(t);
			return e
		}

		function d() {
			var e = [];
			for (var t in g.items)
				if (g.items.hasOwnProperty(t)) {
					var a = g.items[t].type;
					"heal" != a && "boost" != a && "ammo" != a || e.push(t)
				}
			return e
		}

		function p() {
			return ["chest", "helmet", "backpack"]
		}
		var u = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			h = a("9xSA"),
			g = a("+0OL"),
			f = g.Action,
			y = a("0od3"),
			b = a("yp2f"),
			x = a("Tf6H"),
			v = a("/2+T"),
			k = a("zinx"),
			_ = a("Jr6A"),
			w = g.DamageType,
			S = b.PickupMsgType,
			M = 6,
			T = 750,
			P = {
				None: 0,
				Cancel: 1,
				Loot: 2,
				Revive: 3,
				Object: 4
			},
			C = function e() {
				o(this, e), this.mobile = !1, this.touch = !1, this.pickupMessage = {
					message: "",
					ticker: 0,
					duration: 0,
					opacity: 0
				}, this.killFeed = [];
				for (var t = 0; t < M; t++) this.killFeed.push({
					text: "",
					color: "#000000",
					offset: 0,
					opacity: 0,
					ticker: Number.MAX_VALUE
				});
				this.weapons = [];
				for (var a = 0; a < g.WeaponSlot.Count; a++) this.weapons[a] = {
					slot: a,
					name: "",
					ammo: 0,
					equipped: !1,
					selectable: !1,
					opacity: 0,
					width: 0,
					ticker: 0
				};
				this.ammo = {
					current: 0,
					remaining: 0,
					displayCurrent: !1,
					displayRemaining: !1
				}, this.interaction = {
					type: P.None,
					text: "",
					key: "",
					usable: !1
				}, this.scopes = [];
				for (var i = m(), n = 0; n < i.length; n++) this.scopes.push({
					type: i[n],
					visible: !1,
					equipped: !1,
					selectable: !1
				});
				this.loot = [];
				for (var r = d(), s = 0; s < r.length; s++) this.loot.push({
					type: r[s],
					count: 0,
					maximum: 0,
					selectable: !1,
					width: 0,
					ticker: 0
				});
				this.gear = [];
				for (var l = p(), c = 0; c < l.length; c++) this.gear.push({
					type: l[c],
					item: "",
					selectable: !1,
					width: 0,
					ticker: 0
				});
				this.health = 100, this.boost = 0, this.downed = !1
			},
			I = function() {
				function e(t) {
					var a = this;
					o(this, e), this.localization = t, this.oldState = new C, this.newState = new C, this.frameCount = 0, this.dom = {
						debugButton: n("ui-debug-button"),
						emoteButton: n("ui-emote-button"),
						menu: {
							touchStyles: n("btn-touch-styles"),
							fullScreen: n("btn-game-fullscreen")
						},
						pickupMessage: n("ui-pickup-message"),
						killFeed: {
							div: n("ui-killfeed-contents"),
							lines: []
						},
						weapons: [],
						ammo: {
							current: n("ui-current-clip"),
							remaining: n("ui-remaining-ammo"),
							reloadButton: n("ui-reload-button")
						},
						interaction: {
							div: n("ui-interaction"),
							key: n("ui-interaction-press"),
							text: n("ui-interaction-description")
						},
						health: {
							inner: n("ui-health-actual"),
							depleted: n("ui-health-depleted")
						},
						boost: {
							div: n("ui-boost-counter"),
							bars: [n("ui-boost-counter-0").firstElementChild, n("ui-boost-counter-1").firstElementChild, n("ui-boost-counter-2").firstElementChild, n("ui-boost-counter-3").firstElementChild]
						},
						scopes: [],
						loot: [],
						gear: []
					};
					for (var i = 0; i < M; i++) {
						var l = "ui-killfeed-" + i,
							c = n(l);
						if (!c) {
							c = document.createElement("div"), c.id = l, c.classList.add("killfeed-div");
							var u = document.createElement("div");
							u.classList.add("killfeed-text"), c.appendChild(u), this.dom.killFeed.div.appendChild(c)
						}
						this.dom.killFeed.lines.push({
							line: c,
							text: c.firstElementChild
						})
					}
					for (var h = 0; h < 4; h++) {
						var f = n("ui-weapon-id-" + (h + 1)),
							y = {
								div: f,
								name: f.getElementsByClassName("ui-weapon-name")[0],
								number: f.getElementsByClassName("ui-weapon-number")[0],
								image: f.getElementsByClassName("ui-weapon-image")[0],
								ammo: f.getElementsByClassName("ui-weapon-ammo-counter")[0]
							};
						this.dom.weapons.push(y)
					}
					for (var b = m(), x = 0; x < b.length; x++) {
						var v = b[x],
							k = {
								scopeType: v,
								div: n("ui-scope-" + v)
							};
						this.dom.scopes.push(k)
					}
					for (var _ = d(), w = 0; w < _.length; w++) {
						var S = _[w],
							P = n("ui-loot-" + S);
						if (P) {
							var I = {
								lootType: S,
								div: P,
								count: P.getElementsByClassName("ui-loot-count")[0],
								image: P.getElementsByClassName("ui-loot-image")[0],
								overlay: P.getElementsByClassName("ui-loot-overlay")[0]
							};
							this.dom.loot.push(I)
						}
					}
					for (var z = p(), A = 0; A < z.length; A++) {
						var D = z[A],
							O = n("ui-armor-" + D),
							L = {
								gearType: D,
								div: O,
								level: O.getElementsByClassName("ui-armor-level")[0],
								image: O.getElementsByClassName("ui-armor-image")[0]
							};
						this.dom.gear.push(L)
					}
					this.uiEvents = [], this.eventListeners = [];
					var E = function(e, t, i) {
						a.eventListeners.push({
							event: e,
							elem: t,
							fn: i
						}), t.addEventListener(e, i)
					};
					this.itemActions = [];
					for (var B = function(e, t, i, o) {
							a.itemActions.push({
								action: e,
								type: t,
								data: i,
								div: o,
								actionQueued: !1,
								actionTime: 0
							})
						}, F = 0; F < this.dom.weapons.length; F++) B("use", "weapon", F, this.dom.weapons[F].div), B("drop", "weapon", F, this.dom.weapons[F].div);
					for (var R = 0; R < this.dom.scopes.length; R++) {
						var j = this.dom.scopes[R];
						B("use", "scope", j.scopeType, j.div), "1xscope" != j.scopeType && B("drop", "loot", j.scopeType, j.div)
					}
					for (var N = 0; N < this.dom.loot.length; N++) {
						var q = this.dom.loot[N],
							U = g.items[q.lootType];
						"heal" != U.type && "boost" != U.type || B("use", "loot", q.lootType, q.div), B("drop", "loot", q.lootType, q.div)
					}
					for (var G = 0; G < this.dom.gear.length; G++) {
						var V = this.dom.gear[G];
						"backpack" != V.gearType && B("drop", "loot", V.gearType, V.div)
					}
					for (var H = 0; H < this.itemActions.length; H++) ! function(e) {
						var t = a.itemActions[e];
						E("mousedown", t.div, function(e) {
							("use" == t.action && r(e) || "drop" == t.action && s(e)) && (e.stopPropagation(), t.actionQueued = !0)
						}), E("mouseup", t.div, function(e) {
							t.actionQueued && ("use" == t.action && r(e) || "drop" == t.action && s(e)) && (e.stopPropagation(), a.pushAction(t), t.actionQueued = !1)
						}), E("touchstart", t.div, function(e) {
							e.changedTouches.length > 0 && (e.stopPropagation(), t.actionQueued = !0, t.actionTime = (new Date).getTime(), t.touchOsId = e.changedTouches[0].identifier)
						}), E("touchend", t.div, function(e) {
							(new Date).getTime() - t.actionTime < T && t.actionQueued && "use" == t.action && a.pushAction(t), t.actionQueued = !1
						}), E("touchcancel", t.div, function(e) {
							t.actionQueued = !1
						})
					}(H);
					var W = document.getElementById("cvs");
					this.clearQueuedItemActions = function() {
						for (var e = 0; e < a.itemActions.length; e++) {
							a.itemActions[e].actionQueued = !1
						}
						W.focus()
					}, window.addEventListener("mouseup", this.clearQueuedItemActions), window.addEventListener("focus", this.clearQueuedItemActions)
				}
				return u(e, [{
					key: "free",
					value: function() {
						for (var e = 0; e < this.eventListeners.length; e++) {
							var t = this.eventListeners[e];
							t.elem.removeEventListener(t.event, t.fn)
						}
						window.removeEventListener("focus", this.clearQueuedItemActions), window.removeEventListener("mouseup", this.clearQueuedItemActions)
					}
				}, {
					key: "pushAction",
					value: function(e) {
						this.uiEvents.push({
							action: e.action,
							type: e.type,
							data: e.data
						})
					}
				}, {
					key: "flushInput",
					value: function() {
						this.uiEvents = []
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						var r = this.newState;
						if (r.mobile = k.mobile, r.touch = k.touch, r.touch)
							for (var s = 0; s < this.itemActions.length; s++) {
								var m = this.itemActions[s];
								if (m.actionQueued && "drop" == m.action) {
									var d = (new Date).getTime(),
										p = d - m.actionTime;
									p >= T && (this.pushAction(m), m.actionTime = d)
								}
							}
						r.pickupMessage.ticker += e;
						var u = r.pickupMessage.ticker,
							b = r.pickupMessage.duration;
						r.pickupMessage.opacity = y.smoothstep(u, 0, .2) * (1 - y.smoothstep(u, b, b + .2));
						for (var _ = 0, w = 0; w < r.killFeed.length; w++) {
							var S = r.killFeed[w];
							S.ticker += e;
							var M = S.ticker;
							S.offset = _, S.opacity = y.smoothstep(M, 0, .25) * (1 - y.smoothstep(M, 6, 6.5)), _ += y.min(M / .25, 1), k.mobile && (S.opacity = M < 6.5 ? 1 : 0)
						}
						r.health = t.netData.dead ? 0 : y.max(t.localData.health, 1), r.boost = t.localData.boost, r.downed = t.netData.downed;
						var C = P.None,
							I = null,
							z = !0;
						if (!t.netData.dead) {
							for (var A = null, D = 0, O = n.obstaclePool.getPool(), L = 0; L < O.length; L++) {
								var E = O[L];
								if (E.active && !E.dead && x.sameLayer(E.layer, t.layer)) {
									var B = E.getInteraction();
									if (B) {
										var F = h.intersectCircle(E.collider, t.netData.pos, B.rad);
										F && F.pen >= D && (A = E, D = F.pen)
									}
								}
							}
							A && !t.netData.downed && (C = P.Object, I = A, z = !0);
							var R = o.getClosestLoot();
							if (R && !t.netData.downed) {
								var j = g.items[R.name],
									N = t.hasWeaponInSlot(g.WeaponSlot.Primary),
									q = t.hasWeaponInSlot(g.WeaponSlot.Secondary),
									U = N && q,
									G = "gun" != j.type || !U || "gun" == t.equippedWeaponType();
								(G || k.layout == k.Layout.Sm) && (C = P.Loot, I = R), z = G && (!r.touch || "gun" == j.type || "skin" == j.type)
							}
							if (t.netData.actionType == f.None && !t.netData.downed)
								for (var V = i.getPlayerInfo(t.__id).teamId, H = i.playerPool.getPool(), W = 0; W < H.length; W++) {
									var K = H[W],
										X = i.getPlayerInfo(K.__id).teamId;
									if (!K.sentinel && K.__id != t.__id && V == X && (K.netData.downed && !K.netData.dead && K.netData.actionType != f.Revive)) {
										var Y = v.length(v.sub(K.netData.pos, t.netData.pos));
										Y < g.player.reviveMaxRange && x.sameLayer(K.layer, t.layer) && (C = P.Revive, I = t, z = !0)
									}
								}
							t.netData.actionType == f.Revive && t.netData.downed && (C = P.None, I = null, z = !1), (t.netData.actionType == f.UseItem || t.netData.actionType == f.Revive && !t.netData.downed) && (C = P.Cancel, I = null, z = !0)
						}
						r.interaction.type = C, r.interaction.text = this.getInteractionText(C, I), r.interaction.key = this.getInteractionKey(C), r.interaction.usable = z && !a;
						for (var Z = 0; Z < t.localData.weapons.length; Z++) {
							var J = t.localData.weapons[Z],
								Q = r.weapons[Z];
							Q.name = J.name, Q.ammo = J.ammo, "" != J.name && "throwable" == g.items[J.name].type && (Q.ammo = t.localData.inventory[J.name]);
							var $ = Q.equipped;
							Q.equipped = Z == t.localData.curWeapIdx, Q.selectable = "" != J.name && !a;
							var ee = Q.equipped ? 1 : .6,
								te = ee - Q.opacity,
								ae = y.min(te, y.sign(te) * e / .15);
							Q.opacity = y.clamp(Q.opacity + ae, 0, 1), k.mobile && (Q.opacity = ee), Q.ticker += e, Q.equipped && $ || (Q.ticker = 0), this.frameCount < 2 && (Q.ticker = 1);
							var ie = y.min(Q.ticker / .09, Math.PI),
								oe = Math.sin(ie);
							Q.width = oe < .001 ? 0 : oe, k.mobile && (Q.width = 0)
						}
						var ne = r.weapons[t.localData.curWeapIdx],
							re = g.items[ne.name],
							se = ne.ammo,
							le = "throwable" == re.type ? 0 : t.localData.inventory[re.ammo];
						r.ammo.current = se, r.ammo.remaining = le, r.ammo.displayCurrent = "melee" != re.type, r.ammo.displayRemaining = le > 0;
						for (var ce = 0; ce < r.scopes.length; ce++) {
							var me = r.scopes[ce];
							me.visible = t.localData.inventory[me.type] > 0, me.equipped = me.visible && t.localData.curScope == me.type, me.selectable = me.visible && !a
						}
						for (var de = t.getBagLevel(), pe = 0; pe < r.loot.length; pe++) {
							var ue = r.loot[pe],
								he = ue.count;
							ue.count = t.localData.inventory[ue.type] || 0, ue.maximum = g.bagSizes[ue.type][de], ue.selectable = ue.count > 0 && !a, ue.count > he && (ue.ticker = 0), this.frameCount < 2 && (ue.ticker = 1), ue.ticker += e;
							var ge = y.min(ue.ticker / .05, Math.PI),
								fe = Math.sin(ge);
							ue.width = fe < .001 ? 0 : fe, k.mobile && (ue.width = 0)
						}
						for (var ye = 0; ye < r.gear.length; ye++) {
							var be = r.gear[ye],
								xe = "";
							"chest" == be.type ? xe = t.netData.chest : "helmet" == be.type ? xe = t.netData.helmet : "backpack" == be.type && "backpack00" == (xe = t.netData.backpack) && (xe = "");
							var ve = be.item;
							be.item = xe, be.selectable = "" != xe && !a, ve != be.item && (be.ticker = 0), this.frameCount < 2 && (be.ticker = 1), be.ticker += e;
							var ke = y.min(be.ticker / .05, Math.PI),
								_e = Math.sin(ke);
							be.width = _e < .001 ? 0 : _e, k.mobile && (be.width = 0)
						}
						var we = c(this.oldState, this.newState, 0 == this.frameCount++);
						this.render(we, this.newState), l(this.newState, this.oldState)
					}
				}, {
					key: "render",
					value: function(e, t) {
						var a = this.dom;
						if (e.mobile) {
							var i = _.detectiOS();
							a.menu.fullScreen.style.display = i ? "none" : "block"
						}
						e.touch && (a.interaction.key.style.backgroundImage = t.touch ? "url('img/gui/tap.svg')" : "none", t.touch && (a.interaction.key.innerHTML = ""), a.menu.touchStyles.style.display = t.touch ? "flex" : "none", a.ammo.reloadButton.style.display = t.touch ? "block" : "none", a.emoteButton.style.display = t.touch ? "block" : "none", a.debugButton && (a.debugButton.style.display = t.touch ? "block" : "none")), e.pickupMessage.message && (a.pickupMessage.innerHTML = t.pickupMessage.message), e.pickupMessage.opacity && (a.pickupMessage.style.opacity = t.pickupMessage.opacity);
						for (var o = 0; o < e.killFeed.length; o++) {
							var n = e.killFeed[o],
								r = a.killFeed.lines[o],
								s = t.killFeed[o];
							if (n.text && (r.text.innerHTML = s.text), n.offset) {
								var l = k.layout != k.Layout.Sm || k.tablet ? 35 : 15;
								r.line.style.top = Math.floor(s.offset * l) + "px"
							}
							n.color && (r.text.style.color = s.color), n.opacity && (r.line.style.opacity = s.opacity)
						}
						if (e.health || e.downed) {
							for (var c = [{
									health: 100,
									color: [179, 179, 179]
								}, {
									health: 100,
									color: [255, 255, 255]
								}, {
									health: 75,
									color: [255, 255, 255]
								}, {
									health: 75,
									color: [255, 158, 158]
								}, {
									health: 25,
									color: [255, 82, 82]
								}, {
									health: 25,
									color: [255, 0, 0]
								}, {
									health: 0,
									color: [255, 0, 0]
								}], m = 0, d = Math.ceil(t.health); c[m].health > d && m < c.length - 1;) m++;
							var p = c[y.max(m - 1, 0)],
								u = c[m],
								h = y.delerp(t.health, p.health, u.health),
								f = [Math.floor(y.lerp(h, p.color[0], u.color[0])), Math.floor(y.lerp(h, p.color[1], u.color[1])), Math.floor(y.lerp(h, p.color[2], u.color[2]))];
							t.downed && (f = [255, 0, 0]), a.health.inner.style.backgroundColor = "rgba(" + f[0] + ", " + f[1] + ", " + f[2] + ", 1.0)", a.health.inner.style.width = t.health + "%", a.health.depleted.style.width = t.health + "%", a.health.depleted.style.display = t.health > 0 ? "block" : "none", t.health > 25 ? a.health.inner.classList.remove("ui-bar-danger") : a.health.inner.classList.add("ui-bar-danger")
						}
						if (e.boost) {
							for (var b = g.player.boostBreakpoints, x = 0, v = 0; v < b.length; v++) x += b[v];
							for (var w = t.boost / 100, S = 0; S < a.boost.bars.length; S++) {
								var M = b[S] / x,
									T = y.clamp(w / M, 0, 1);
								w = y.max(w - M, 0), a.boost.bars[S].style.width = 100 * T + "%"
							}
							a.boost.div.style.opacity = 0 == t.boost ? 0 : 1
						}
						e.interaction.type && (a.interaction.div.style.display = t.interaction.type == P.None ? "none" : "flex"), e.interaction.text && (a.interaction.text.innerHTML = t.interaction.text), e.interaction.key && (a.interaction.key.innerHTML = t.touch ? "" : t.interaction.key), e.interaction.usable && (a.interaction.key.style.display = t.interaction.usable ? "block" : "none");
						for (var C = 0; C < e.weapons.length; C++) {
							var I = e.weapons[C],
								z = a.weapons[C],
								A = t.weapons[C];
							if (I.name) {
								var D = "" != A.name,
									O = "",
									L = "",
									E = !1;
								if (D) {
									var B = g.items[A.name];
									O = this.localization.translate("game-hud-" + A.name) || this.localization.translate("game-" + A.name), L = B.lootImg.sprite, E = B.isDual && k.layout == k.Layout.Sm
								}
								z.name.innerHTML = O, z.image.src = L, z.image.style.display = D ? "inline" : "none", z.image.style.transform = E ? "rotate(0deg)" : ""
							}
							if (I.equipped && (z.div.style.backgroundColor = A.equipped ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"), I.selectable && (z.div.style.pointerEvents = "" != A.name && A.selectable ? "auto" : "none"), I.width) {
								var F = y.lerp(A.width, 83.33, 100);
								z.div.style.width = F + "%"
							}
							I.opacity && (z.div.style.opacity = A.opacity), I.ammo && z.ammo && (z.ammo.innerHTML = A.ammo, z.ammo.style.display = A.ammo > 0 ? "block" : "none")
						}
						if (e.ammo.current) {
							var R = t.ammo.current;
							a.ammo.current.innerHTML = R, a.ammo.current.style.color = R > 0 ? "white" : "red"
						}
						if (e.ammo.remaining) {
							var j = t.ammo.remaining;
							a.ammo.remaining.innerHTML = j, a.ammo.remaining.style.color = j > 0 ? "white" : "red"
						}
						e.ammo.displayCurrent && (a.ammo.current.style.opacity = t.ammo.displayCurrent ? 1 : 0), e.ammo.displayRemaining && (a.ammo.remaining.style.opacity = t.ammo.displayRemaining ? 1 : 0, a.ammo.reloadButton.style.opacity = t.ammo.displayRemaining ? 1 : 0);
						for (var N = 0; N < e.scopes.length; N++) {
							var q = e.scopes[N],
								U = a.scopes[N],
								G = t.scopes[N];
							q.visible && (U.div.style.display = G.visible ? "inline-block" : "none"), q.equipped && (G.equipped ? (U.div.classList.add("ui-zoom-active"), U.div.classList.remove("ui-zoom-inactive")) : (U.div.classList.remove("ui-zoom-active"), U.div.classList.add("ui-zoom-inactive"))), q.selectable && (U.div.style.pointerEvents = G.selectable ? "auto" : "none")
						}
						for (var V = 0; V < e.loot.length; V++) {
							var H = e.loot[V],
								W = a.loot[V],
								K = t.loot[V];
							if (H && W && K) {
								if ((H.count || H.maximum) && (W.count.innerHTML = K.count, W.div.style.opacity = g.items[W.lootType].hideUi && 0 == K.count ? 0 : K.count > 0 ? 1 : .25, W.div.style.color = K.count == K.maximum ? "#ff9900" : "#ffffff"), H.width) {
									var X = 1 + .33 * K.width,
										Y = "scale(" + X + ", " + X + ")";
									W.image.style.transform = Y, W.overlay && (W.overlay.style.transform = Y)
								}
								H.selectable && (W.div.style.pointerEvents = K.selectable ? "auto" : "none")
							}
						}
						for (var Z = 0; Z < e.gear.length; Z++) {
							var J = e.gear[Z],
								Q = a.gear[Z],
								$ = t.gear[Z];
							if (J.item) {
								var ee = "" != $.item ? g.items[$.item] : null,
									te = ee ? ee.level : 0;
								Q.div.style.display = ee ? "block" : "none", Q.level.innerHTML = this.localization.translate("game-level-" + te), Q.level.style.color = 3 == te ? "#ff9900" : "#ffffff", Q.image.src = ee ? ee.lootImg.sprite : ""
							}
							if (J.selectable && (Q.div.style.pointerEvents = $.selectable ? "auto" : "none"), J.width) {
								var ae = 1 + .33 * $.width;
								Q.image.style.transform = "scale(" + ae + ", " + ae + ")"
							}
						}
					}
				}, {
					key: "displayPickupMessage",
					value: function(e) {
						var t = this.newState.pickupMessage;
						t.message = this.getPickupMessageText(e), t.ticker = 0, t.duration = 3
					}
				}, {
					key: "addKillFeed",
					value: function(e, t) {
						var a = this.newState.killFeed,
							i = a[a.length - 1];
						i.text = e, i.color = t, i.ticker = 0, a.sort(function(e, t) {
							return e.ticker - t.ticker
						})
					}
				}, {
					key: "getKillFeedText",
					value: function(e, t, a, i, o) {
						switch (i) {
							case w.Player:
								return t + " " + this.localization.translate(o ? "game-knocked-out" : "game-killed") + " " + e + " " + this.localization.translate("game-with") + " " + a;
							case w.Bleeding:
								var n = this.localization.translate(t ? "game-finally-killed" : "game-finally-bled-out");
								return t ? t + " " + n + " " + e : e + " " + n;
							case w.Gas:
								var r = void 0;
								return o ? (t = this.localization.translate("game-the-red-zone"), r = this.localization.translate("game-knocked-out")) : r = this.localization.translate(t ? "game-finally-killed" : "game-died-outside"), t ? t + " " + r + " " + e : e + " " + r;
							default:
								return ""
						}
					}
				}, {
					key: "getKillFeedColor",
					value: function(e, t, a) {
						return e == t ? "#d1777c" : e == a ? "#00bfff" : "#efeeee"
					}
				}, {
					key: "getPickupMessageText",
					value: function(e) {
						var t, a = (t = {}, i(t, S.Full, "game-not-enough-space"), i(t, S.AlreadyOwned, "game-item-already-owned"), i(t, S.AlreadyEquipped, "game-item-already-equipped"), i(t, S.BetterItemEquipped, "game-better-item-equipped"), t),
							o = a[e] || a[S.Full];
						return this.localization.translate(o)
					}
				}, {
					key: "getInteractionText",
					value: function(e, t) {
						switch (e) {
							case P.None:
								return "";
							case P.Cancel:
								return this.localization.translate("game-cancel");
							case P.Revive:
								return this.localization.translate("game-revive-teammate");
							case P.Object:
								var a = t.getInteraction();
								return this.localization.translate(a.action) + " " + this.localization.translate(a.object);
							case P.Loot:
								var i = this.localization.translate("game-" + t.name) || t.name;
								return t.count > 1 && (i += " (" + t.count + ")"), i;
							default:
								return ""
						}
					}
				}, {
					key: "getInteractionKey",
					value: function(e) {
						return e == P.Cancel ? "X" : "F"
					}
				}]), e
			}();
		e.exports = {
			Ui2Manager: I
		}
	},
	"0od3": function(e, t, a) {
		"use strict";
		var i = a("DlZn"),
			o = a("/2+T"),
			n = {
				clamp: function(e, t, a) {
					return e < a ? e > t ? e : t : a
				},
				min: function(e, t) {
					return e < t ? e : t
				},
				max: function(e, t) {
					return e > t ? e : t
				},
				lerp: function(e, t, a) {
					return t * (1 - e) + a * e
				},
				delerp: function(e, t, a) {
					return n.clamp((e - t) / (a - t), 0, 1)
				},
				v2lerp: function(e, t, a) {
					return o.create(n.lerp(e, t.x, a.x), n.lerp(e, t.y, a.y))
				},
				smoothstep: function(e, t, a) {
					var i = n.clamp((e - t) / (a - t), 0, 1);
					return i * i * (3 - 2 * i)
				},
				easeOutElastic: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
					return Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1
				},
				remap: function(e, t, a, i, o) {
					var r = n.clamp((e - t) / (a - t), 0, 1);
					return n.lerp(r, i, o)
				},
				eqAbs: function(e, t, a) {
					var i = a || 1e-6;
					return Math.abs(e - t) < i
				},
				eqRel: function(e, t, a) {
					var i = void 0 !== a ? a : 1e-6;
					return Math.abs(e - t) <= i * Math.max(Math.max(1, Math.abs(e)), Math.abs(t))
				},
				deg2rad: function(e) {
					return e * Math.PI / 180
				},
				rad2deg: function(e) {
					return 180 * e / Math.PI
				},
				fract: function(e) {
					return e - Math.floor(e)
				},
				sign: function(e) {
					return e < 0 ? -1 : 1
				},
				mod: function(e, t) {
					return (e % t + t) % t
				},
				fmod: function(e, t) {
					return e - Math.floor(e / t) * t
				},
				angleDiff: function(e, t) {
					var a = n.fmod(t - e + Math.PI, 2 * Math.PI) - Math.PI;
					return a < -Math.PI ? a + 2 * Math.PI : a
				},
				quantize: function(e, t, a, o) {
					i(e >= t && e <= a);
					var r = (1 << o) - 1,
						s = n.clamp(e, t, a),
						l = (s - t) / (a - t);
					return t + parseInt(l * r + .5) / r * (a - t)
				},
				v2Quantize: function(e, t, a, i, r, s) {
					return o.create(n.quantize(e.x, t, i, s), n.quantize(e.y, a, r, s))
				},
				inside: function(e, t) {
					for (var a = e.x, i = e.y, o = !1, n = 0, r = t.length - 1; n < t.length; r = n++) {
						var s = t[n].x,
							l = t[n].y,
							c = t[r].x,
							m = t[r].y;
						l > i != m > i && a < (c - s) * (i - l) / (m - l) + s && (o = !o)
					}
					return o
				},
				rayLineIntersect: function(e, t, a, i) {
					var n = o.sub(i, a),
						r = o.create(n.y, -n.x),
						s = o.dot(t, r);
					if (!(Math.abs(s) <= 1e-6)) {
						var l = o.sub(a, e),
							c = o.dot(r, l) / s,
							m = o.dot(o.create(t.y, -t.x), l) / s;
						return c >= 0 && m >= 0 && m <= 1 ? c : void 0
					}
				},
				rayPolygonIntersect: function(e, t, a) {
					for (var i = Number.MAX_VALUE, o = !1, n = 0, r = a.length - 1; n < a.length; r = n++) {
						var s = this.rayLineIntersect(e, t, a[r], a[n]);
						void 0 !== s && s < i && (o = !0, i = s)
					}
					return o ? i : void 0
				},
				sqr: function(e) {
					return e * e
				},
				dist2: function(e, t) {
					return this.sqr(e.x - t.x) + this.sqr(e.y - t.y)
				},
				distToSegmentSquared: function(e, t, a) {
					var i = this.dist2(t, a);
					if (0 == i) return this.dist2(e, t);
					var o = ((e.x - t.x) * (a.x - t.x) + (e.y - t.y) * (a.y - t.y)) / i;
					return o = Math.max(0, Math.min(1, o)), this.dist2(e, {
						x: t.x + o * (a.x - t.x),
						y: t.y + o * (a.y - t.y)
					})
				},
				distToSegment: function(e, t, a) {
					return Math.sqrt(this.distToSegmentSquared(e, t, a))
				},
				distToPoly: function(e, t) {
					for (var a = Number.MAX_VALUE, i = 0, o = t.length - 1; i < t.length; o = i++) {
						var n = this.distToSegment(e, t[i], t[o]);
						n < a && (a = n)
					}
					return a
				},
				isAngleBetween: function(e, t, a) {
					return t <= a ? a - t <= 180 ? t <= e && e <= a : a <= e || e <= t : t - a <= 180 ? a <= e && e <= t : t <= e || e <= a
				}
			};
		e.exports = n
	},
	"1JzZ": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, a) {
			e.moveTo(t.x, t.y), e.lineTo(a.x, a.y)
		}

		function n(e, t) {
			var a = t[0];
			e.moveTo(a.x, a.y);
			for (var i = 1; i < t.length; ++i) a = t[i], e.lineTo(a.x, a.y);
			e.closePath()
		}
		var r = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			s = a("gKxX"),
			l = (a("8iex"), a("9xSA")),
			c = a("Bk7F"),
			m = a("YUyC"),
			d = (a("Tf6H"), a("/2+T")),
			p = a("dT1u"),
			u = (a("EZ6M"), a("K7EQ")),
			h = a("zinx"),
			g = a("Jr6A"),
			f = (a("yp2f"), a("0od3")),
			y = a("+0OL"),
			b = a("Mzdc"),
			x = (a("r4ug"), a("DI/9")),
			v = a("zgif"),
			k = function() {
				function e() {
					i(this, e)
				}
				return r(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {}
				}, {
					key: "updateData",
					value: function(e, t) {
						this.type = e.type, this.pos = d.copy(e.pos), this.layer = e.layer
					}
				}]), e
			}(),
			_ = function() {
				function e() {
					i(this, e), this.display = {
						background: new s.Graphics,
						water: new s.Graphics
					}, this.stairMask = new s.Graphics, this.stairMaskDirty = !0, this.mapData = {
						places: [],
						objects: []
					}, this.dataLoaded = !1, this.mapTexture = null, this.obstaclePool = new p.Pool(x), this.lootSpawnerPool = new p.Pool(k), this.buildingPool = new p.Pool(b), this.structurePool = new p.Pool(v), this.deadObstacleIds = [], this.deadCeilingIds = [], this.terrain = null, this.ripples = []
				}
				return r(e, [{
					key: "free",
					value: function() {
						this.display.background.destroy(!0), this.display.water.destroy(!0), this.stairMask.destroy(!0), this.mapTexture && this.mapTexture.destroy(!0)
					}
				}, {
					key: "resize",
					value: function(e) {
						this.renderMap(e)
					}
				}, {
					key: "setData",
					value: function(e, t, a, i, o, n) {
						this.width = e, this.height = t, this.terrain = m.generateTerrain(e, t, a), this.mapData = {
							places: i,
							objects: o
						}, this.dataLoaded = !0;
						var r = this.display,
							s = r.background,
							l = r.water;
						s.clear(), l.clear(), this.renderTerrain(s, l, 2 / n.ppu)
					}
				}, {
					key: "getMapTexture",
					value: function() {
						return this.mapTexture
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						for (var r = this.obstaclePool.getPool(), s = 0; s < r.length; s++) {
							var l = r[s];
							l.active && (l.update(e, this, a, i, t, o), l.render(n))
						}
						for (var c = this.buildingPool.getPool(), m = 0; m < c.length; m++) {
							var d = c[m];
							d.active && (d.update(e, this, a, i, t, o, n), d.render(n))
						}
						for (var p = this.structurePool.getPool(), u = 0; u < p.length; u++) {
							var h = p[u];
							h.active && h.update(n)
						}
						for (var g = 0; g < this.ripples.length; g++) {
							var f = this.ripples[g];
							if (!(f.life <= 0))
								if (f.delay -= e, f.delay <= 0 && (f.life -= e, f.scale += .5 * e, f.alpha -= e), f.life < 0) f.sprite.visible = !1;
								else {
									var y = f.scale / n.ppu;
									f.sprite.position.set(f.pos.x, f.pos.y), f.sprite.scale.set(y, y), f.sprite.alpha = f.alpha, f.sprite.visible = f.delay <= 0
								}
						}
					}
				}, {
					key: "renderTerrain",
					value: function(e, t, a) {
						var i = this.width,
							r = this.height,
							s = this.terrain,
							l = {
								x: 0,
								y: 0
							},
							c = {
								x: i,
								y: 0
							},
							m = {
								x: 0,
								y: r
							},
							d = {
								x: i,
								y: r
							};
						t.beginFill(u.water), t.moveTo(m.x, m.y), t.lineTo(d.x, d.y), t.lineTo(c.x, c.y), t.lineTo(l.x, l.y), n(t, s.shore), t.addHole(), t.closePath(), e.beginFill(u.beach), n(e, s.shore), n(e, s.grass), e.addHole(), e.endFill(), e.beginFill(u.grass), n(e, s.grass), e.endFill(), e.lineStyle(a, 0, .15);
						for (var p = 0; p <= i; p += y.map.gridSize) {
							o(e, {
								x: p,
								y: 0
							}, {
								x: p,
								y: r
							})
						}
						for (var h = 0; h <= r; h += y.map.gridSize) {
							o(e, {
								x: 0,
								y: h
							}, {
								x: i,
								y: h
							})
						}
					}
				}, {
					key: "render",
					value: function(e) {
						var t = e.pointToScreen(d.create(0, 0)),
							a = e.pointToScreen(d.create(1, 1)),
							i = d.sub(a, t);
						this.display.background.position.set(t.x, t.y), this.display.background.scale.set(i.x, i.y), this.display.water.position.set(t.x, t.y), this.display.water.scale.set(i.x, i.y)
					}
				}, {
					key: "getMinimapRender",
					value: function(e) {
						var t = c.Defs[e.type],
							a = "building" == t.type ? 1e3 * ((t.zIdx || 0) + 1) : t.img.zIdx || 0,
							i = [];
						if (void 0 !== t.map.shapes) i = t.map.shapes;
						else {
							var o = "obstacle" == t.type ? t.collision : t.ceiling.scopeIn[0];
							i.push({
								collider: l.copy(o),
								scale: t.map.scale || 1,
								color: t.map.color
							})
						}
						return {
							obj: e,
							zIdx: a,
							shapes: i
						}
					}
				}, {
					key: "renderMap",
					value: function(e) {
						if (this.dataLoaded) {
							var t = new s.Container,
								a = new s.Container,
								i = this.mapData.places,
								n = this.mapData.objects,
								r = (this.display, this.width),
								m = this.height,
								p = (this.terrain, g.getScreenDimensions().height);
							h.pixelRatio > 1 && (p *= 2);
							var u = m / p,
								f = new s.Graphics;
							this.renderTerrain(f, f, u);
							var y = {
									x: 0,
									y: 0
								},
								b = {
									x: r,
									y: 0
								},
								x = {
									x: 0,
									y: m
								},
								v = {
									x: r,
									y: m
								};
							f.lineStyle(2 * u, 0, 1), o(f, y, x), o(f, x, v), o(f, v, b), o(f, b, y), f.position.y = m, f.scale.y = -1, t.addChild(f);
							for (var k = [], _ = 0; _ < n.length; _++) {
								var w = n[_];
								k.push(this.getMinimapRender(w))
							}
							k.sort(function(e, t) {
								return e.zIdx - t.zIdx
							});
							for (var S = new s.Graphics, M = 0; M < k.length; M++)
								for (var T = k[M], P = T.obj, C = 0; C < T.shapes.length; C++) {
									var I = T.shapes[C],
										z = l.transform(I.collider, P.pos, c.oriToRad(P.ori), P.scale),
										A = void 0 !== I.scale ? I.scale : 1;
									switch (S.beginFill(I.color, 1), z.type) {
										case l.Type.Circle:
											S.drawCircle(z.pos.x, m - z.pos.y, z.rad * A);
											break;
										case l.Type.Aabb:
											var D = d.mul(d.sub(z.max, z.min), .5),
												O = d.add(z.min, D);
											D = d.mul(D, A), S.drawRect(O.x - D.x, m - O.y - D.y, 2 * D.x, 2 * D.y)
									}
									S.endFill()
								}
							t.addChild(S);
							for (var L = new s.Container, E = 0; E < i.length; E++) {
								var B = i[E],
									F = new s.TextStyle({
										fontFamily: "Arial",
										fontSize: h.pixelRatio > 1 ? 20 : 22,
										fontWeight: "bold",
										fill: ["#ffffff"],
										stroke: "#000000",
										strokeThickness: 1,
										dropShadow: !0,
										dropShadowColor: "#000000",
										dropShadowBlur: 1,
										dropShadowAngle: Math.PI / 3,
										dropShadowDistance: 1,
										wordWrap: !1,
										align: "center"
									}),
									R = new s.Text(B.name, F);
								R.anchor = new s.Point(.5, .5), R.x = B.pos.x * this.height / u, R.y = B.pos.y * this.height / u, R.alpha = .75, L.addChild(R)
							}
							a.addChild(L), this.mapTexture ? this.mapTexture.resize(p, p) : this.mapTexture = s.RenderTexture.create(p, p, s.SCALE_MODES.LINEAR, 2), t.scale = new s.Point(p / m, p / m), e.render(t, this.mapTexture, !0), e.render(a, this.mapTexture, !1), t.destroy({
								children: !0,
								texture: !0,
								baseTexture: !0
							}), a.destroy({
								children: !0,
								texture: !0,
								baseTexture: !0
							})
						}
					}
				}, {
					key: "getGroundSurface",
					value: function(e, t) {
						var a = this.buildingPool,
							i = this.terrain,
							o = void 0;
						o = f.inside(e, i.shore) ? f.inside(e, i.grass) ? "grass" : "sand" : "water";
						for (var n = a.getPool(), r = 0, s = 0; s < n.length; s++) {
							var c = n[s];
							if (!(c.zIdx < r || 1 == c.layer && 0 == t))
								for (var m = 0; m < c.surfaces.length; m++)
									for (var d = c.surfaces[m], p = 0; p < d.colliders.length; p++) {
										var u = l.intersectCircle(d.colliders[p], e, 1e-4);
										if (u) {
											r = c.zIdx, o = d.surface;
											break
										}
									}
						}
						return o
					}
				}, {
					key: "distanceToShore",
					value: function(e) {
						return f.distToPoly(e, this.terrain.shore)
					}
				}, {
					key: "insideStructureStairs",
					value: function(e) {
						for (var t = this.structurePool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active && i.insideStairs(e)) return !0
						}
						return !1
					}
				}, {
					key: "insideStructureMask",
					value: function(e) {
						for (var t = this.structurePool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active && i.insideMask(e)) return !0
						}
						return !1
					}
				}, {
					key: "addRipple",
					value: function(e, t) {
						for (var a = this.ripples, i = this.display, o = null, n = 0; n < a.length; n++)
							if (a[n].life <= 0) {
								o = a[n];
								break
							}
						if (!o) {
							o = {};
							var r = s.Sprite.fromImage("img/player/ripple-01.svg");
							r.visible = !1, r.anchor = new s.Point(.5, .5), r.tint = 11792639, i.water.addChild(r), o.sprite = r, a.push(o)
						}
						o.pos = e, o.life = 3, o.delay = t, o.scale = .15, o.alpha = 1
					}
				}]), e
			}();
		e.exports = _
	},
	"2Ex0": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = (a("gaH8"), a("85i3")),
			s = function() {
				function e(t) {
					i(this, e), this.config = t
				}
				return o(e, [{
					key: "init",
					value: function() {
						var e = this,
							t = void 0;
						window.cookieconsent.initialise({
							palette: {
								popup: {
									background: "#3c404d",
									text: "#d6d6d6"
								},
								button: {
									background: "#8bed4f"
								}
							},
							theme: "classic",
							position: "bottom-left",
							type: "opt-out",
							content: {
								message: "This website uses cookies to ensure you get the best experience on our website.",
								dismiss: "Got it!",
								deny: "Decline",
								link: "Learn more",
								href: "/privacy.txt"
							},
							revokable: !1,
							animateRevokable: !1,
							law: {
								regionalLaw: !1
							},
							location: !0,
							onStatusChange: function(t) {
								var a = (this.options.type, this.hasConsented()),
									i = e.config.get("cookiesConsented");
								e.config.set("cookiesConsented", a), r.storeGeneric("cookiesConsented", a), i != a && window.location.reload(!1)
							}
						}, function(e) {
							t = e
						}, function(e) {
							console.error(e)
						}), n(".view-cookie-policy").click(function(e) {
							t.open()
						})
					}
				}]), e
			}();
		e.exports = s
	},
	"4glI": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = a("gKxX"),
			s = (a("0od3"), a("Tf6H"), a("/2+T")),
			l = a("Jr6A"),
			c = a("zinx"),
			m = function() {
				function e(t, a) {
					var o = this;
					i(this, e), this.input = t, this.config = a, this.container = new r.Container, this.padScaleBase = 1, this.padScaleDown = .5, this.padScalePos = .25, this.moveDetected = !1, this.shotDetected = !1, this.shotDetectedOld = !1, this.display = !0, this.orientation = "landscape", this.moveStyle = "locked", this.aimStyle = "locked";
					var n = function(e) {
							var t = r.Sprite.fromImage("img/gui/pad.svg");
							return t.anchor = new r.Point(.5, .5), t.scale = new r.Point(1, 1), t.alpha = .5, t.visible = !1, e.addChild(t), t
						},
						l = function() {
							return {
								touched: !1,
								centerPos: s.create(0, 0),
								touchPos: s.create(0, 0),
								centerSprite: n(o.container),
								touchSprite: n(o.container)
							}
						};
					this.touchPads = [l(), l()], this.playerMovement = {
						left: !1,
						right: !1,
						up: !1,
						down: !1,
						moveLen: 0
					}, this.aimMovement = {
						toAimDir: s.create(0, 0),
						toAimLen: 0
					}, this.leftLockedPadCenter = s.create(0, 0), this.rightLockedPadCenter = s.create(0, 0), this.padPosRange = 0, this.mobileOffsetLandscape = 25, this.mobileOffsetPortrait = 100, this.lockedPadOffsetLandscape = s.create(96, 96), this.lockedPadOffsetPortrait = s.create(96, 160), this.lockedPadOffsetYLandscapeSafari = 120, this.lockedPadOffsetYPortraitSafari = 240, this.setMoveStyle(a.get("touchMoveStyle") || "locked"), this.setAimStyle(a.get("touchAimStyle") || "locked"), this.init()
				}
				return o(e, [{
					key: "getTouchMovement",
					value: function(e) {
						switch (this.moveStyle) {
							case "locked":
								return this.getMovementLocked(e);
							case "anywhere":
								return this.getMovementAnywhere(e);
							default:
								return this.getMovementLocked(e)
						}
					}
				}, {
					key: "getAimMovement",
					value: function(e, t) {
						switch (this.aimStyle) {
							case "anywhere":
								return this.getAimAnywhere(e, t);
							case "locked":
								return this.getAimLocked(e, t);
							default:
								return this.getAimAnywhere(e, t)
						}
					}
				}, {
					key: "getMovementLocked",
					value: function(e) {
						var t = null,
							a = null,
							i = !1;
						this.moveDetected = !1;
						for (var o = 0; o < this.input.touches.length; o++) {
							var n = this.input.touches[o];
							if (!n.isDead && this.isLeftSideTouch(n.posDown.x, e)) {
								var r = s.sub(n.pos, this.leftLockedPadCenter),
									l = s.length(r);
								if (l > 2) {
									var c = Math.atan2(-r.y, r.x),
										m = 180 * c / Math.PI;
									m < 0 && (m += 360), this.playerMovement = {
										right: m < 67.5 || m > 292.5,
										up: m > 22.5 && m < 157.5,
										left: m > 112.5 && m < 247.5,
										down: m > 202.5 && m < 337.5,
										moveLen: (l - 2) / (this.padPosRange - 2)
									}, t = this.leftLockedPadCenter, a = this.getConstrainedPos(t, n.pos, l), i = !0, this.moveDetected = !0;
									break
								}
							}
						}
						var d = this.touchPads[0];
						return d.touched = i, d.centerPos.x = this.leftLockedPadCenter.x, d.centerPos.y = this.leftLockedPadCenter.y, d.touchPos.x = i ? a.x : 0, d.touchPos.y = i ? a.y : 0, this.playerMovement
					}
				}, {
					key: "getMovementAnywhere",
					value: function(e) {
						var t = null,
							a = null,
							i = !1;
						this.moveDetected = !1;
						for (var o = 0; o < this.input.touches.length; o++) {
							var n = this.input.touches[o];
							if (!n.isDead && this.isLeftSideTouch(n.posDown.x, e)) {
								var r = n.posDown,
									l = s.sub(n.pos, r),
									c = s.length(l);
								if (c > 2) {
									var m = Math.atan2(-l.y, l.x),
										d = 180 * m / Math.PI;
									d < 0 && (d += 360), this.playerMovement = {
										right: d < 67.5 || d > 292.5,
										up: d > 22.5 && d < 157.5,
										left: d > 112.5 && d < 247.5,
										down: d > 202.5 && d < 337.5,
										moveLen: (c - 2) / (this.padPosRange - 2)
									}
								} else this.playerMovement = {
									right: !1,
									up: !1,
									left: !1,
									down: !1
								};
								t = n.posDown, a = this.getConstrainedPos(t, n.pos, c), i = !0, this.moveDetected = !0;
								break
							}
						}
						var p = this.touchPads[0];
						return p.touched = i, p.centerPos.x = i ? t.x : 0, p.centerPos.y = i ? t.y : 0, p.touchPos.x = i ? a.x : 0, p.touchPos.y = i ? a.y : 0, this.playerMovement
					}
				}, {
					key: "getAimLocked",
					value: function(e, t) {
						for (var a = !1, i = null, o = null, n = 0; n < this.input.touches.length; n++) {
							var r = this.input.touches[n];
							if (!r.isDead && !this.isLeftSideTouch(r.posDown.x, t)) {
								var l = s.sub(r.pos, this.rightLockedPadCenter),
									c = s.length(l);
								if (c > 2) {
									var m = s.sub(r.pos, this.rightLockedPadCenter),
										d = s.length(m),
										p = d > 1e-5 ? s.div(m, d) : this.aimMovement.toAimDir;
									this.aimMovement = {
										toAimDir: s.create(p.x, -1 * p.y),
										toAimLen: d
									}
								} else this.aimMovement.toAimLen = 0;
								i = this.rightLockedPadCenter, o = this.getConstrainedPos(i, r.pos, c), a = !0;
								break
							}
						}
						this.shotDetectedOld = this.shotDetected, this.shotDetected = this.aimMovement.toAimLen > this.padPosRange && a, e && this.shotDetectedOld && a && (this.shotDetected = !0);
						var u = this.touchPads[1];
						return u.touched = a, u.centerPos.x = this.rightLockedPadCenter.x, u.centerPos.y = this.rightLockedPadCenter.y, u.touchPos.x = a ? o.x : 0, u.touchPos.y = a ? o.y : 0, this.aimMovement
					}
				}, {
					key: "getAimAnywhere",
					value: function(e, t) {
						for (var a = !1, i = null, o = null, n = 0; n < this.input.touches.length; n++) {
							var r = this.input.touches[n];
							if (!r.isDead && !this.isLeftSideTouch(r.posDown.x, t)) {
								var l = r.posDown,
									c = s.sub(r.pos, l),
									m = s.length(c);
								if (m > 2) {
									var d = s.sub(r.pos, r.posDown),
										p = s.length(d),
										u = p > 1e-5 ? s.div(d, p) : this.aimMovement.toAimDir;
									this.aimMovement = {
										toAimDir: s.create(u.x, -1 * u.y),
										toAimLen: p
									}
								} else this.aimMovement.toAimLen = 0;
								i = r.posDown, o = this.getConstrainedPos(i, r.pos, m), a = !0;
								break
							}
						}
						this.shotDetectedOld = this.shotDetected, this.shotDetected = this.aimMovement.toAimLen > this.padPosRange && a, e && this.shotDetectedOld && a && (this.shotDetected = !0);
						var h = this.touchPads[1];
						return h.touched = a, h.centerPos.x = a ? i.x : 0, h.centerPos.y = a ? i.y : 0, h.touchPos.x = a ? o.x : 0, h.touchPos.y = a ? o.y : 0, this.aimMovement
					}
				}, {
					key: "updateDisplay",
					value: function() {
						if (c.touch)
							for (var e = 0; e < this.touchPads.length; e++) {
								var t = this.touchPads[e],
									a = 0 == e,
									i = 1 == e,
									o = a && "locked" == this.moveStyle || i && "locked" == this.aimStyle;
								t.centerSprite.position.x = t.centerPos.x, t.centerSprite.position.y = t.centerPos.y, t.centerSprite.scale.x = this.padScaleBase * this.padScaleDown, t.centerSprite.scale.y = this.padScaleBase * this.padScaleDown, t.centerSprite.visible = this.display && (o || t.touched), t.touchSprite.position.x = t.touchPos.x, t.touchSprite.position.y = t.touchPos.y, t.touchSprite.scale.x = this.padScaleBase * this.padScalePos, t.touchSprite.scale.y = this.padScaleBase * this.padScalePos, t.touchSprite.visible = this.display && t.touched
							}
					}
				}, {
					key: "isLeftSideTouch",
					value: function(e, t) {
						return e < .5 * t.screenWidth
					}
				}, {
					key: "getConstrainedPos",
					value: function(e, t, a) {
						if (a <= this.padPosRange) return t;
						var i = t.x - e.x,
							o = t.y - e.y,
							n = Math.atan2(o, i);
						return s.create(Math.cos(n) * this.padPosRange + e.x, Math.sin(n) * this.padPosRange + e.y)
					}
				}, {
					key: "toggleMoveStyle",
					value: function() {
						this.setMoveStyle("locked" == this.moveStyle ? "anywhere" : "locked")
					}
				}, {
					key: "setMoveStyle",
					value: function(e) {
						this.moveStyle = e, this.config.set("touchMoveStyle", e);
						var t = document.getElementById("btn-game-move-style");
						t && ("locked" == this.moveStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon")))
					}
				}, {
					key: "toggleAimStyle",
					value: function() {
						this.setAimStyle("locked" == this.aimStyle ? "anywhere" : "locked")
					}
				}, {
					key: "setAimStyle",
					value: function(e) {
						this.aimStyle = e, this.config.set("touchAimStyle", e);
						var t = document.getElementById("btn-game-aim-style");
						"locked" == this.aimStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon"))
					}
				}, {
					key: "init",
					value: function() {
						this.resize()
					}
				}, {
					key: "resize",
					value: function() {
						var e = l.getOrientation(),
							t = l.getScreenDimensions(),
							a = this.lockedPadOffsetLandscape,
							i = this.lockedPadOffsetPortrait;
						c.tablet && (a = s.mul(a, 1.25), i = s.mul(i, 1.25));
						var o = s.create(a.x, a.y),
							n = s.create(i.x, i.y),
							r = s.create(t.width - a.x, a.y),
							m = s.create(t.width - i.x, i.y);
						if (l.detectMobileSafari() && !window.navigator.standalone) {
							var d = this.lockedPadOffsetYLandscapeSafari,
								p = this.lockedPadOffsetYPortraitSafari;
							c.tablet && (d *= 1.4, p *= 1.4), o.y = d, n.y = p, r.y = d, m.y = p
						}
						this.padScaleBase = "landscape" == e ? 1 : .8, this.padPosRange = 56 * this.padScaleBase;
						var u = "landscape" == e ? o : n;
						this.leftLockedPadCenter = s.create(u.x, t.height - u.y);
						var h = "landscape" == e ? r : m;
						this.rightLockedPadCenter = s.create(h.x, t.height - h.y), this.setMobileStyling(e)
					}
				}, {
					key: "setMobileStyling",
					value: function(e) {
						var t = l.getScreenDimensions().width <= 850;
						if (c.mobile) {
							n("#btn-touch-styles").find(".btn-game-container").css("display", "inline-block"), n("#ui-emote-button").css("display", "block")
						}
						c.mobile || t ? (n("#ui-map-wrapper").addClass("ui-map-wrapper-mobile").removeClass("ui-map-wrapper-desktop"), n("#ui-settings-container-mobile").css("display", "block"), n("#ui-settings-container-desktop").css("display", "none"), n("#ui-right-center").addClass("ui-right-center-mobile").removeClass("ui-right-center-desktop")) : (n("#ui-map-wrapper").removeClass("ui-map-wrapper-mobile").addClass("ui-map-wrapper-desktop"), n("#ui-settings-container-mobile").css("display", "none"), n("#ui-settings-container-desktop").css("display", "block"), n("#ui-right-center").removeClass("ui-right-center-mobile").addClass("ui-right-center-desktop")), c.tablet && ("landscape" == e ? (n("#ui-leaderboard-wrapper").css("display", "none"), n("#ui-bottom-right").addClass("ui-bottom-right-tablet"), n("#ui-right-center").addClass("ui-right-center-tablet"), n("#ui-bottom-center-right").addClass("ui-bottom-center-right-tablet"), n("#ui-top-left").addClass("ui-top-left-tablet"), n("#ui-spectate-options-wrapper").addClass("ui-spectate-options-wrapper-tablet"), n("#ui-killfeed-wrapper").addClass("ui-killfeed-wrapper-tablet")) : (n("#ui-bottom-right").removeClass("ui-bottom-right-tablet"), n("#ui-right-center").removeClass("ui-right-center-tablet"), n("#ui-bottom-center-right").removeClass("ui-bottom-center-right-tablet"), n("#ui-top-left").removeClass("ui-top-left-tablet"), n("#ui-spectate-options-wrapper").removeClass("ui-spectate-options-wrapper-tablet"), n("#ui-killfeed-wrapper-wrapper").removeClass("ui-killfeed-wrapper-tablet")))
					}
				}, {
					key: "hideAll",
					value: function() {
						this.display = !1
					}
				}]), e
			}();
		e.exports = {
			Touch: m
		}
	},
	"5dFr": function(e, t, a) {
		"use strict";

		function i(e) {
			var t = 180 * Math.atan2(e.y, e.x) / Math.PI;
			return t < 0 && (t += 360), t
		}

		function o(e, t, a, o, n, l) {
			var u = this;
			this.game = e, this.audioManager = t, this.uiManager = a, this.gameElem = r("#ui-game"), this.disable = !1, this.activePlayer = null, this.playerBarn = o, this.camera = n, this.map = l, this.worldPos = h.create(0, 0), this.zIdxNext = 0, this.emoteSelector = {
				ping: x.None,
				emote: m.None
			}, this.emoteSoftTicker = 0, this.emoteHardTicker = 0, this.emoteCounter = 0, this.emoteWheelsGreyed = !1, this.teamEmotesGreyed = !1, this.wheelKeyTriggered = !1, this.emoteTimeoutTicker = 0, this.pingKeyTriggered = !1, this.pingKeyDown = !1, this.pingMouseTriggered = !1, this.wheelDisplayed = !1, this.emoteKeyTriggered = !1, this.emoteKeyDown = !1, this.emoteMouseTriggered = !1, this.emoteScreenPos = h.create(0, 0), r(document).on("keydown", function(e) {
				67 != e.which || u.pingKeyDown || u.game.gameOver || (u.pingKeyDown = !0, u.pingKeyTriggered = !0)
			}), r(document).on("keyup", function(e) {
				67 == e.which && u.pingKeyDown && !u.game.gameOver && (u.pingKeyDown = !1, u.pingKeyTriggered = u.wheelDisplayed)
			}), r(document).on("mousedown", function(e) {
				var t = "which" in e ? 3 == e.which : 2 == e.button;
				t && !u.pingMouseTriggered && !u.emoteMouseTriggered && u.pingKeyDown && (e.stopPropagation(), e.preventDefault(), u.emoteScreenPos = h.create(e.clientX, e.clientY), u.pingMouseTriggered = !0), t && !u.pingMouseTriggered && (e.stopPropagation(), e.preventDefault(), u.emoteScreenPos = h.create(e.clientX, e.clientY), u.emoteMouseTriggered = !0)
			}), r(document).on("mouseup", function(e) {
				3 == e.which && u.pingKeyTriggered && u.pingMouseTriggered && u.triggerPing(), 3 == e.which && u.emoteMouseTriggered && u.triggerEmote()
			}), this.triggerPing = function() {
				if (this.activePlayer) {
					var e = void 0;
					if (this.emoteSelector.ping == x.None || this.emoteWheelsGreyed) this.emoteSelector.emote == m.None || this.emoteWheelsGreyed || (e = this.activePlayer.pos, this.sendEmote({
						type: this.emoteSelector.emote,
						useLoadout: this.emoteSelector.useLoadout,
						emoteSlot: this.emoteSelector.emoteSlot,
						pos: e
					}), this.uiManager.displayMapLarge(!0));
					else {
						b[this.emoteSelector.ping].pingMap && (e = this.uiManager.getWorldPosFromMapPos(this.bigmapPingPos || this.emoteScreenPos, this.map, this.camera), e || (e = this.camera.screenToPoint(this.emoteScreenPos)), e.x = g.clamp(e.x, 0, this.uiManager.mapWidth), e.y = g.clamp(e.y, 0, this.uiManager.mapHeight), this.sendPing({
							type: this.emoteSelector.ping,
							pos: e
						}))
					}
					this.inputReset(), this.pingKeyTriggered = this.pingKeyDown
				}
			}, this.triggerEmote = function() {
				if (this.activePlayer) {
					var e = void 0;
					this.emoteSelector.emote == m.None || this.emoteWheelsGreyed || (e = this.activePlayer.pos, this.sendEmote({
						type: this.emoteSelector.emote,
						useLoadout: this.emoteSelector.useLoadout,
						emoteSlot: this.emoteSelector.emoteSlot,
						pos: e
					})), this.inputReset()
				}
			}, this.emoteTouchedPos = null, this.bigmapPingPos = null, y.touch && (this.emoteElems = r(".ui-emote"), this.emoteElems.css("pointer-events", "auto"), this.bigmapCollision = r("#big-map-collision"), this.bigmapCollision.on("touchend", function(e) {
				e.stopPropagation(), u.bigmapPingPos = {
					x: e.originalEvent.changedTouches[0].pageX,
					y: e.originalEvent.changedTouches[0].pageY
				}, u.emoteScreenPos = h.create(u.camera.screenWidth / 2, u.camera.screenHeight / 2), u.pingMouseTriggered = !0
			}), this.emoteButtonElem = r("#ui-emote-button"), this.emoteButtonElem.css("pointer-events", "auto"), this.emoteButtonElem.on("touchstart", function(e) {
				e.stopPropagation(), u.emoteScreenPos = h.create(u.camera.screenWidth / 2, u.camera.screenHeight / 2), u.emoteMouseTriggered = !0
			}), this.emoteElems.on("touchstart", function(e) {
				e.stopPropagation(), u.emoteTouchedPos = {
					x: e.originalEvent.changedTouches[0].pageX,
					y: e.originalEvent.changedTouches[0].pageY
				}
			}), r(document).on("touchstart", function(e) {
				u.wheelDisplayed && (e.stopPropagation(), u.inputReset())
			})), r(window).on("blur", function(e) {
				u.inputReset()
			}), r(document).on("keydown", function(e) {
				9 == e.which && e.preventDefault()
			}), this.emoteWheels = r("#ui-emotes, #ui-team-pings"), this.teamEmotes = r(".ui-emote-bottom-left, .ui-emote-top-left"), this.emoteWheel = r("#ui-emotes"), this.emoteWheelData = {
				middle: {
					parent: r("#ui-emote-middle"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.None,
					modular: !1,
					displayCloseIcon: !0
				},
				top: {
					parent: r("#ui-emote-top"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.HappyFace,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Top
				},
				right: {
					parent: r("#ui-emote-right"),
					vA: h.create(1, 1),
					vC: h.create(1, -1),
					ping: x.None,
					emote: m.ThumbsUp,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Right
				},
				bottom: {
					parent: r("#ui-emote-bottom"),
					vA: h.create(1, -1),
					vC: h.create(-1, -1),
					ping: x.None,
					emote: m.Surviv,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Bottom
				},
				left: {
					parent: r("#ui-emote-left"),
					vA: h.create(-1, -1),
					vC: h.create(-1, 1),
					ping: x.None,
					emote: m.SadFace,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Left
				}
			}, this.teamPingWheel = r("#ui-team-pings");
			var f = {
				middle: {
					parent: r("#ui-team-ping-middle"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.None,
					modular: !1,
					displayCloseIcon: !0
				},
				top: {
					parent: r("#ui-team-ping-top"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.Danger,
					emote: m.None,
					modular: !1
				},
				right: {
					parent: r("#ui-team-ping-right"),
					vA: h.create(1, 1),
					vC: h.create(1, -1),
					ping: x.Coming,
					emote: m.None,
					modular: !1
				},
				bottom: {
					parent: r("#ui-team-ping-bottom"),
					vA: h.create(1, -1),
					vC: h.create(-1, -1),
					ping: x.Help,
					emote: m.None,
					modular: !1
				},
				"bottom-left": {
					parent: r("#ui-team-ping-bottom-left"),
					vA: h.create(-1, -1),
					vC: h.create(-1, 0),
					ping: x.None,
					emote: m.Medical,
					modular: !1
				},
				"top-left": {
					parent: r("#ui-team-ping-top-left"),
					vA: h.create(-1, 0),
					vC: h.create(-1, 1),
					ping: x.None,
					emote: m.Ammo,
					modular: !0
				}
			};
			this.teamPingSelectors = [];
			for (var v in f)
				if (f.hasOwnProperty(v)) {
					var k = f[v],
						_ = k.ping != x.None ? b[k.ping] : d[k.emote],
						w = i(k.vA),
						S = i(k.vC),
						M = _.texture;
					_.displayCloseIcon && (M = "img/gui/close.svg"), this.teamPingSelectors.push({
						parent: k.parent,
						angleA: w,
						angleC: S,
						highlight: k.parent.find(".ui-emote-hl"),
						highlightDisplayed: !1,
						texture: M,
						ping: k.ping,
						emote: k.emote,
						modular: k.modular
					})
				}
			this.displayedSelectors = this.teamPingSelectors, this.baseScale = 1, this.container = new p.Container, this.container.scale = new p.Point(this.baseScale, this.baseScale), this.pingContainer = new p.Container, this.container.addChild(this.pingContainer), this.indContainer = new p.Container, this.teamIndicators = [];
			for (var T = 0; T < 4; T++) {
				var P = T,
					C = new p.Container,
					I = new p.Container,
					z = p.Sprite.fromImage("/img/gui/ping-border.svg");
				z.scale = new p.Point(.4, .4), z.anchor = new p.Point(.5, .5), z.tint = s.teamColors[T], z.alpha = 0, z.visible = !0, C.addChild(z);
				var A = p.Sprite.fromImage("/img/gui/ping-team-danger.svg");
				A.scale = new p.Point(.4, .4), A.anchor = new p.Point(.5, .5), A.tint = s.teamColors[T], A.alpha = 0, A.visible = !0, C.addChild(A);
				var D = p.Sprite.fromImage("/img/gui/ping-team-danger.svg");
				D.scale = new p.Point(.5, .5), D.anchor = new p.Point(.5, .5), D.tint = s.teamColors[T], D.alpha = 0, D.visible = !0, I.addChild(D);
				var O = p.Sprite.fromImage("/img/gui/ping-indicator.svg");
				O.scale = new p.Point(.5, .5), O.anchor = new p.Point(.5, 0), O.alpha = 0, O.visible = !0, I.addChild(O), this.pingContainer.addChild(C), this.indContainer.addChild(I), this.teamIndicators.push({
					ping: {
						elem: r("#ui-team-indicators").find(".ui-indicator-ping[data-id=" + P + "]"),
						borderElem: r("#ui-team-indicators").find(".ui-indicator-ping-border[data-id=" + P + "]"),
						pingContainer: C,
						indContainer: I,
						borderSprite: {
							sprite: z,
							baseScale: .4
						},
						pingSprite: {
							sprite: A,
							baseScale: .4
						},
						indSpriteOuter: {
							sprite: O,
							baseScale: .5
						},
						indSpriteInner: {
							sprite: D,
							baseScale: .5
						},
						displayed: !1,
						fadeIn: 0,
						life: 0,
						fadeOut: 0,
						pos: h.create(0, 0)
					}
				})
			}
			this.emoteLifeIn = .75, this.emoteLife = 1, this.emoteLifeOut = .1, this.pingFadeIn = .5, this.pingLife = 4.25, this.pingFadeOut = .1, this.wedgeOpacityReset = y.touch ? 1 : .75, this.teamEmoteOpacityReset = .2, this.emotes = [], this.newPings = [], this.newEmotes = []
		}
		var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = arguments[t];
					for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
				}
				return e
			},
			r = a("juYr"),
			s = a("+0OL"),
			l = a("v8aM"),
			c = l.EmoteSlot,
			m = l.EmoteType,
			d = l.EmoteData,
			p = a("gKxX"),
			u = a("8iex"),
			h = a("/2+T"),
			g = a("0od3"),
			f = a("Tf6H"),
			y = a("zinx"),
			b = (a("EZ6M"), a("moUH").kPings),
			x = a("moUH").Ping,
			v = (a("S40U"), a("xgte")),
			k = v.RenderType;
		o.prototype = {
			free: function() {
				r(document).off("keydown"), r(document).off("keyup"), r(document).off("mousedown"), r(document).off("mouseup"), r(window).off("blur"), y.touch && (r(document).off("touchstart"), this.emoteButtonElem.off("touchstart"), this.emoteElems.off("touchstart"), this.bigmapCollision.off("touchend")), this.init()
			},
			init: function() {
				this.emoteWheelsGreyed = !1, this.emoteWheels.css("opacity", 1), this.teamEmotesGreyed = !1, this.teamEmotes.css("opacity", 1), this.disable = !1, this.inputReset()
			},
			inputReset: function() {
				this.pingMouseTriggered = !1, this.pingKeyTriggered = !1, this.emoteMouseTriggered = !1, this.emoteKeyTriggered = !1, this.wheelDisplayed = !1, this.displayWheel(this.teamPingWheel, !1), this.displayWheel(this.emoteWheel, !1), this.emoteTouchedPos = null, this.bigmapPingPos = null, this.emoteTimeoutTicker = 0;
				for (var e = 0; e < this.displayedSelectors.length; e++) {
					var t = this.displayedSelectors[e],
						a = d[t.emote];
					this.teamEmotesGreyed && a.teamOnly ? t.parent.css("opacity", this.teamEmoteOpacityReset) : t.parent.css("opacity", this.wedgeOpacityReset), t.highlight.css("display", "none"), t.highlightDisplayed = !1
				}
			},
			sendPing: function(e) {
				var t = {};
				t.type = e.type, t.pos = e.pos, this.newPings.push(t), this.incrementEmote()
			},
			addPing: function(e) {
				if (this.activePlayer) {
					var t = b[e.type];
					if (t) {
						this.teamId = this.playerBarn.getPlayerInfo(this.activePlayer.__id).teamId;
						for (var a = this.playerBarn.getTeamInfo(this.teamId), i = a.playerIds.length, o = 0; o < i; o++) {
							var n = a.playerIds[o];
							if (n == e.playerId) {
								var r = this.teamIndicators[o];
								this.playerBarn.getPlayerInfo(n), this.activePlayer.__id;
								this.uiManager.setPlayerPing(e.type, o, e.pos, t.mapLife);
								for (var s in r)
									if (r.hasOwnProperty(s) && "ping" == s) {
										var l = r[s];
										l.pos = e.pos, l.pingSprite.sprite.texture = p.Texture.fromImage(t.texture), l.indSpriteInner.sprite.texture = p.Texture.fromImage(t.texture), l.fadeIn = this.pingFadeIn, l.life = this.pingLife, l.fadeOut = this.pingFadeOut, this.audioManager.playSound(t.sound, {
											channel: "ui"
										})
									}
							}
						}
					}
				}
			},
			sendEmote: function(e) {
				var t = {};
				t.useLoadout = e.useLoadout, t.type = e.useLoadout ? e.emoteSlot : e.type, t.pos = e.pos, this.newEmotes.push(t), this.incrementEmote()
			},
			addEmote: function(e) {
				var t = d[e.type];
				if (t) {
					for (var a = null, i = 0; i < this.emotes.length; i++) this.emotes[i].alive || a ? this.emotes[i].alive && this.emotes[i].playerId == e.playerId && (this.emotes[i].alive = !1) : a = this.emotes[i];
					a || (a = {}, a.alive = !1, a.pos = h.create(0, 0), a.container = new p.Container, a.circleOuter = new p.Sprite.fromImage("img/gui/emote-circle-outer.svg"), a.circleOuter.anchor = new p.Point(.5, .5), a.baseScale = .55, a.circleOuter.scale = new p.Point(.8 * a.baseScale, .8 * a.baseScale), a.circleOuter.tint = 0, a.circleOuter.visible = !0, a.container.addChild(a.circleOuter), a.sprite = new p.Sprite, a.sprite.anchor = new p.Point(.5, .5), a.container.addChild(a.sprite), a.sprite.scale = new p.Point(a.baseScale, a.baseScale), a.posOffset = new p.Point(0, 4), a.container.scale = new p.Point(1, 1), a.container.visible = !1, this.emotes.push(a)), a.alive = !0, a.isNew = !0, a.type = e.type, a.playerId = e.playerId, a.pos = h.create(0, 0), a.lifeIn = this.emoteLifeIn, a.life = this.emoteLife, a.lifeOut = this.emoteLifeOut, a.zIdx = this.zIdxNext++, a.sprite.texture = p.Texture.fromImage(t.texture), a.container.visible = !1
				}
			},
			incrementEmote: function() {
				++this.emoteCounter >= s.player.emoteThreshold && (this.emoteHardTicker = this.emoteHardTicker > 0 ? this.emoteHardTicker : 1.5 * s.player.emoteHardCooldown)
			},
			update: function(e, t, a, o, n, r, l) {
				var c = this.playerBarn,
					p = this.camera;
				if (this.activePlayer = a, t == a.__id && !a.netData.dead || this.disable || (this.free(), this.disable = !0), !this.disable) {
					var b = a.localData.weapons[a.localData.curWeapIdx],
						v = s.items[b.name],
						_ = "";
					if (v && (_ = v.ammo ? v.ammo : _), this.wheelKeyTriggered = this.pingKeyTriggered || this.emoteMouseTriggered, this.emoteSoftTicker -= e, this.emoteCounter >= s.player.emoteThreshold && this.emoteHardTicker > 0 ? (this.emoteHardTicker -= e, this.emoteHardTicker < 0 && (this.emoteCounter = 0)) : this.emoteSoftTicker < 0 && this.emoteCounter > 0 && (this.emoteCounter--, this.emoteSoftTicker = 1.5 * s.player.emoteSoftCooldown), !this.pingMouseTriggered && !this.emoteMouseTriggered || this.wheelDisplayed || (this.parentDisplayed = this.pingMouseTriggered ? this.teamPingWheel : this.emoteWheel, this.parentDisplayed.css({
							display: "block",
							left: this.emoteScreenPos.x,
							top: this.emoteScreenPos.y
						}), this.displayWheel(this.parentDisplayed, !0), this.wheelDisplayed = !0, this.displayedSelectors = this.pingMouseTriggered ? this.teamPingSelectors : this.emoteWheelSelectors, this.worldPos = p.screenToPoint(this.emoteScreenPos)), this.wheelDisplayed)
						if (this.emoteTimeoutTicker += e, this.emoteTimeoutTicker > 10) this.inputReset();
						else {
							this.emoteHardTicker > 0 && !this.emoteWheelsGreyed ? (this.emoteWheels.css("opacity", .5), this.emoteWheelsGreyed = !0) : this.emoteHardTicker <= 0 && this.emoteWheelsGreyed && (this.emoteWheels.css("opacity", 1), this.emoteWheelsGreyed = !1), this.teamEmotesGreyed || 1 != n || (this.teamEmotes.css("opacity", this.teamEmoteOpacityReset), this.teamEmotesGreyed = !0);
							var w = null;
							if (x.None, y.touch && (o = this.emoteTouchedPos), o) {
								var S = h.sub(o, this.emoteScreenPos);
								S.y *= -1;
								for (var M = h.length(S), T = i(S), P = 0; P < this.displayedSelectors.length; P++) {
									var C = this.displayedSelectors[P];
									if (C.modular) {
										var I = C.emote;
										switch (_) {
											case "9mm":
												C.emote = m.Ammo9mm, C.texture = d[m.Ammo9mm].texture;
												break;
											case "12gauge":
												C.emote = m.Ammo12Gauge, C.texture = d[m.Ammo12Gauge].texture;
												break;
											case "762mm":
												C.emote = m.Ammo762mm, C.texture = d[m.Ammo762mm].texture;
												break;
											case "556mm":
												C.emote = m.Ammo556mm, C.texture = d[m.Ammo556mm].texture;
												break;
											case "50AE":
												C.emote = m.Ammo50AE, C.texture = d[m.Ammo50AE].texture;
												break;
											default:
												C.emote = m.Ammo, C.texture = d[m.Ammo].texture
										}
										if (I != C.emote) {
											var z = C.parent.find(".ui-emote-image");
											z.css("background-image", "url(" + C.texture + ")")
										}
									}
									var A = C.ping != x.None || C.emote != m.None,
										D = d[C.emote],
										O = D.teamOnly && 1 == n;
									M <= 35 && !A && this.emoteHardTicker <= 0 && !O ? w = C : g.isAngleBetween(T, C.angleC, C.angleA) && M > 35 && A && this.emoteHardTicker <= 0 && !O ? w = C : C.highlightDisplayed && (C.parent.css("opacity", this.wedgeOpacityReset), C.highlight.css("display", "none"), C.highlightDisplayed = !1)
								}
							}
							w && (this.emoteSelector = w, w.highlightDisplayed || (w.parent.css("opacity", 1), w.highlight.css("display", "block"), w.highlightDisplayed = !0), y.touch && this.emoteTouchedPos && (this.pingMouseTriggered ? this.triggerPing() : this.triggerEmote()))
						}
				}
				for (var L = 0; L < this.emotes.length; L++) {
					var E = this.emotes[L];
					if (E.alive) {
						var B = !1,
							F = h.create(0, 0),
							R = 0,
							j = c.getPlayerById(E.playerId);
						if (j && !j.netData.dead && (F = h.copy(j.pos), R = j.layer, B = !0), !B) {
							var N = r.getDeadBodyById(E.playerId);
							N && (F = h.copy(N.pos), R = N.layer, B = !0)
						}
						if (B) {
							if (E.isNew) {
								var q = d[E.type];
								this.audioManager.playSound(q.sound, {
									channel: "ui",
									soundPos: F,
									layer: R
								})
							}
							E.isNew = !1, E.pos = F, E.lifeIn > 0 ? E.lifeIn -= e : E.life > 0 ? E.life -= e : E.lifeOut > 0 && (E.lifeOut -= e);
							var U = f.sameLayer(R, this.activePlayer.layer) ? 3 : R;
							l.addPIXIObj(E.container, k.World, U, 1e3, E.zIdx), E.alive = E.alive && E.lifeOut > 0
						} else E.alive = !1
					}
				}
				var G = h.create(.5 * p.screenWidth / p.z(), .5 * p.screenHeight / p.z()),
					V = {
						min: h.sub(p.pos, G),
						max: h.add(p.pos, G)
					};
				this.teamId = c.getPlayerInfo(a.__id).teamId;
				for (var H = c.getTeamInfo(this.teamId), W = H.playerIds.length, K = 0; K < W; K++) {
					var X = this.teamIndicators[K],
						Y = H.playerIds[K],
						Z = (c.getPlayerInfo(Y), Y == this.activePlayer.__id),
						J = c.getTeammateData(Y);
					if (J)
						for (var Q in X)
							if (X.hasOwnProperty(Q)) {
								var $ = X[Q],
									ee = $.pingContainer,
									te = $.indContainer,
									ae = $.borderSprite.sprite,
									ie = $.pingSprite.sprite,
									oe = $.indSpriteOuter.sprite,
									ne = $.indSpriteInner.sprite,
									re = !0;
								if ($.fadeIn -= e, $.life -= e, $.fadeOut -= $.life > 0 ? 0 : e, $.fadeOut > 0) {
									var se = $.pos,
										le = h.normalizeSafe(h.sub(se, p.pos), h.create(1, 0)),
										ce = u.intersectRayAabb(p.pos, le, V.min, V.max),
										me = Math.atan2(le.y, -le.x) + .5 * Math.PI,
										de = p.pointToScreen(ce),
										pe = u.testCircleAabb(se, s.player.radius, V.min, V.max),
										ue = p.pixels($.borderSprite.baseScale),
										he = p.pixels($.pingSprite.baseScale);
									if (ae.scale.set(ue, ue), ie.scale.set(he, he), !J.dead) {
										re = $.fadeOut < 0;
										var ge = pe ? p.pointToScreen(se).x : g.clamp(de.x, 64, p.screenWidth - 64),
											fe = pe ? p.pointToScreen(se).y : g.clamp(de.y, 64, p.screenHeight - 64),
											ye = p.pointToScreen(se).x,
											be = p.pointToScreen(se).y;
										ie.position.x = ye, ie.position.y = be, ae.position.x = ye, ae.position.y = be, oe.position.x = ge, oe.position.y = fe, oe.rotation = me, ne.position.x = ge, ne.position.y = fe;
										var xe = ae.alpha <= 0 ? 1 : ae.alpha - e;
										ae.alpha = xe;
										var ve = p.pixels($.borderSprite.baseScale * (2 - xe));
										if (ae.scale.set(ve, ve), ne.alpha = pe ? 0 : xe, $.fadeIn > 0) {
											var ke = 1 - $.fadeIn / this.pingFadeIn;
											ee.alpha = 1, te.alpha = 1, ie.alpha = 1, oe.alpha = pe ? 0 : ke
										} else oe.alpha = pe ? 0 : 1;
										if ($.life < 0) {
											var _e = $.fadeOut / this.pingFadeOut;
											ee.alpha = _e, te.alpha = _e
										}
										$.displayed || (ee.visible = !0, te.visible = !Z, $.displayed = !0)
									}
								}
								re && $.displayed && (ee.visible = !1, te.visible = !1, $.displayed = !1)
							}
				}
			},
			displayWheel: function(e, t) {
				e.css("display", t ? "block" : "none")
			},
			updateEmoteWheel: function(e) {
				var t = {
					top: e[c.Top],
					right: e[c.Right],
					bottom: e[c.Bottom],
					left: e[c.Left]
				};
				for (var a in t)
					if (t.hasOwnProperty(a)) {
						var o = d[t[a]];
						if (this.emoteWheelData[a] && void 0 != o) {
							var r = d[t[a]];
							r.teamOnly || (this.emoteWheelData[a].emote = t[a])
						}
					}
				this.emoteWheelSelectors = [];
				for (var s in this.emoteWheelData)
					if (this.emoteWheelData.hasOwnProperty(s)) {
						var l = this.emoteWheelData[s],
							m = d[l.emote],
							p = i(l.vA),
							u = i(l.vC),
							h = m.texture;
						l.displayCloseIcon && (h = "img/gui/close.svg"), this.emoteWheelSelectors.push(n({
							angleA: p,
							angleC: u,
							highlight: l.parent.find(".ui-emote-hl"),
							highlightDisplayed: !1,
							texture: h
						}, l));
						var g = l.parent.find(".ui-emote-image");
						g.css("background-image", "url(" + h + ")")
					}
			},
			render: function(e, t) {
				for (var a = 0; a < this.emotes.length; a++) {
					var i = this.emotes[a];
					if (i.container.visible = i.alive, i.alive) {
						var o = 0;
						if (i.lifeIn > 0) {
							var n = 1 - i.lifeIn / this.emoteLifeIn;
							o = g.easeOutElastic(n)
						} else if (i.life > 0) o = 1;
						else if (i.lifeOut > 0) {
							var r = i.lifeOut / this.emoteLifeOut;
							o = r
						}
						var s = h.add(i.pos, h.mul(i.posOffset, 1 / g.clamp(e.zoom, .75, 1))),
							l = e.pointToScreen(s),
							c = o * i.baseScale * g.clamp(e.zoom, .9, 1.75);
						i.container.position.set(l.x, l.y), i.container.scale.set(c, c)
					}
				}
			}
		}, e.exports = {
			EmoteManager: o
		}
	},
	"6XNf": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-04-07",
				locale: "jp"
			},
			"word-order": "svo",
			"index-slogan": "2Dバトルロワイヤル",
			"index-region": "地域",
			"index-north-america": "北アメリカ",
			"index-europe": "ヨーロッパ",
			"index-asia": "アジア",
			"index-players": "プレイヤー",
			"index-play-solo": "1人で遊ぶ",
			"index-play-duo": "2人で遊ぶ",
			"index-play-squad": "4人で遊ぶ",
			"index-join-team": "チームに参加",
			"index-create-team": "チームを作成",
			"index-leave-team": "キャンセル",
			"index-joining-team": "チームに参加中",
			"index-creating-team": "チームを作成中",
			"index-invite-link": "招待リンク",
			"index-solo": "ソロ",
			"index-duo": "デュオ",
			"index-squad": "スクワッド",
			"index-auto-fill": "自動編成あり",
			"index-no-fill": "自動編成なし",
			"index-waiting-for-leader": "リーダーがゲームを開始するのを待っています",
			"index-play": "出発する",
			"index-featured-youtuber": "おすすめYoutuber",
			"index-settings": "設定",
			"index-high-resolution": "高画質モード",
			"index-screen-shake": "振動エフェクト",
			"index-master-volume": "Master Volume",
			"index-sfx-volume": "SFX Volume",
			"index-music-volume": "Music Volume",
			"index-mobile-announce": "スマートフォンでもプレイできるようになりました！",
			"index-mobile-tooltip": "スマートフォンで <span>surviv.io</span> を開いていつでもどこでもプレイしましょう！",
			"index-team-is-full": "チームは満員です！",
			"index-failed-joining-team": "チームへの参加に失敗しました",
			"index-failed-creating-team": "チームの作成に失敗しました",
			"index-failed-finding-game": "ゲームの検索に失敗しました",
			"index-failed-joining-game": "ゲームへの参加に失敗しました",
			"index-lost-connection": "チームとの接続が切断されました",
			"index-host-closed": "ホストが接続を終了しました",
			"index-invalid-protocol": "Old client version.",
			"index-view-more": "詳細",
			"index-back-to-main": "メインメニューに戻る",
			"index-most-kills": "キル数",
			"index-total-kills": "総キル数",
			"index-total-wins": "ドン勝数",
			"index-top-5-percent": "上位5%",
			"index-kill-death-ratio": "キル / デス",
			"index-mode": "Mode",
			"index-for": "For",
			"index-today": "今日",
			"index-this-week": "今週",
			"index-all-time": "全期間",
			"index-top-100": "上位100名",
			"index-rank": "順位",
			"index-player": "プレイヤー名",
			"index-total-games": "Total Games",
			"index-controls": "操作方法",
			"index-movement": "移動",
			"index-movement-ctrl": "[W] , [A] , [S] , [D]",
			"index-aim": "照準",
			"index-aim-ctrl": "マウスカーソル",
			"index-punch": "殴る",
			"index-shoot": "射撃",
			"index-shoot-ctrl": "左クリック",
			"index-change-weapons": "武器変更",
			"index-change-weapons-ctrl": "[1] 〜 [2] , スクロールホイール",
			"index-stow-weapons": "武器をしまう（拳で抵抗）",
			"index-stow-weapons-ctrl": "[3] , [E]",
			"index-swap-weapons": "直前の武器を装備",
			"index-swap-weapons-ctrl": "[Q]",
			"index-reload": "リロード",
			"index-reload-ctrl": "[R]",
			"index-scope-zoom": "スコープ倍率変更",
			"index-scope-zoom-ctrl": "倍率を左クリック",
			"index-pickup": "拾う",
			"index-loot": "奪う",
			"index-revive": "蘇生",
			"index-pickup-ctrl": "[F]",
			"index-use-medical": "医薬品の使用",
			"index-use-medical-ctrl": "アイテムを左クリック , [7]～[0]",
			"index-drop-item": "アイテムを捨てる",
			"index-drop-item-ctrl": "アイテムを右クリック",
			"index-cancel-action": "行動キャンセル",
			"index-cancel-action-ctrl": "[X]",
			"index-view-map": "マップを表示",
			"index-view-map-ctrl": "[M] , [G]",
			"index-toggle-minimap": "ミニマップ表示切替",
			"index-toggle-minimap-ctrl": "[V]",
			"index-use-ping": "チームエモートの使用",
			"index-use-ping-ctrl": "[C]を押しながら右クリックをドラッグして表示. 該当のエモート上で右クリックを離す.",
			"index-use-emote": "エモートの使用",
			"index-use-emote-ctrl": "右クリックをドラッグして表示. 該当のエモート上で右クリックを離す.",
			"index-how-to-play": "遊び方",
			"index-tips-1-desc": "Surviv.ioの勝利条件は最後の一人になるまで生き残ることです. 同じ試合では一度死亡した時点でゲームオーバーとなります.",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "既にPUBGやFortnite、H1Z1といった他のバトルロワイヤルゲームをプレイしたことがあるのであれば、勝利への道は目前です！Surviv.ioは2D版PUBGのようなものです.",
			"index-tips-3": "アイテムを略奪せよ",
			"index-tips-3-desc": "ゲーム開始時点では簡潔なバックパックしかありません. マップ中を駆け巡り、武器や銃弾、スコープ、医薬品など様々なアイテムを手に入れましょう. 他のプレイヤーを討ち取り戦利品をゲットしましょう！",
			"index-tips-4": "赤色 = ガスから逃げろ！",
			"index-tips-4-desc": "敵はプレイヤーだけではありません. マップの端から迫ってくるレッドゾーン内に入れば、断続的なダメージを受けて死に至る危険があります. マップに目を光らせて安全地帯で生き残りましょう.",
			"index-movement-ctrl-touch": "Left stick",
			"index-aim-ctrl-touch": "Right stick",
			"index-shoot-ctrl-touch": "Drag right stick outside stick border",
			"index-change-weapons-ctrl-touch": "Tap weapon slot",
			"index-reload-ctrl-touch": "Tap equipped ammo counter",
			"index-scope-zoom-ctrl-touch": "Tap zoom item",
			"index-pickup-ctrl-touch": "Tap interaction button or loot name",
			"index-use-medical-ctrl-touch": "Tap medical item",
			"index-drop-item-ctrl-touch": "Touch and hold item",
			"index-cancel-action-ctrl-touch": "Tap interaction button",
			"index-view-map-ctrl-touch": "Tap minimap",
			"index-use-ping-ctrl-touch": "View map and tap anywhere on map",
			"index-use-emote-ctrl-touch": "Tap surviv icon",
			"game-alive": "生存",
			"game-reloading": "リロード中",
			"game-using": "使用中",
			"game-reviving": "蘇生中",
			"game-revive-teammate": "チームメイトを蘇生",
			"game-equip": "装備",
			"game-cancel": "キャンセル",
			"game-open-door": "ドアを開く",
			"game-close-door": "ドアを閉める",
			"game-You": "あなた",
			"game-you": "あなた",
			"game-themselves": "自分自身",
			"game-yourself": "あなた自身",
			"game-you-died": "が死亡しました",
			"game-player-died": "が死亡しました",
			"game-with": "使用して",
			"game-knocked-out": "が気絶させました",
			"game-killed": "が殺しました",
			"game-finally-killed": "ついに殺しました",
			"game-finally-bled-out": "ついに息絶えました",
			"game-died-outside": "がセーフゾーンの外で死亡しました",
			"game-the-red-zone": "レッドゾーン",
			"game-waiting-for-players": "プレイヤーを待っています",
			"game-spectating": "観戦中",
			"game-red-zone-advances": "ガス汚染エリア拡大まで",
			"game-red-zone-advancing": "ガス汚染エリアが拡大中、安全地帯に逃げてください！",
			"game-seconds": "秒",
			"game-minutes": "分",
			"game-minute": "分",
			"game-m": "分",
			"game-s": "秒",
			"game-not-enough-space": "インベントリに空きがありません！",
			"game-item-already-owned": "既に所持しているアイテムです！",
			"game-item-already-equipped": "既に装備しているアイテムです！",
			"game-better-item-equipped": "より優れたアイテムを装備しています！",
			"game-play-new-game": "次の試合に参加する",
			"game-spectate": "観戦する",
			"game-full-screen": "全画面表示",
			"game-sound": "ミュート",
			"game-quit-game": "撤退する",
			"game-return-to-game": "試合に戻る",
			"game-hide-match-stats": "戦績を非表示",
			"game-view-match-stats": "戦績を表示",
			"game-previous-teammate": "前のチームメイト",
			"game-next-teammate": "次のチームメイト",
			"game-leave-game": "試合から離脱する",
			"game-your-results": "あなたの戦績",
			"game-chicken": "勝った！勝った！夕飯はドン勝だ！！",
			"game-won-the-game": "がゲームに勝利しました",
			"game-team-eliminated": "まあ、こんな日もあるのさ！次はもう少しツイてますように！",
			"game-solo-rank": "Solo 順位",
			"game-duo-rank": "Duo 順位",
			"game-squad-rank": "Squad 順位",
			"game-rank": "順位",
			"game-team-rank": "チーム順位",
			"game-team-kills": "チームキル数",
			"game-kill": "キル数",
			"game-kills": "キル数",
			"game-damage-dealt": "与ダメージ",
			"game-damage-taken": "被ダメージ",
			"game-survived": "生存時間",
			"game-backpack00": "ポーチ",
			"game-backpack01": "スモールバックパック",
			"game-backpack02": "レギュラーバックパック",
			"game-backpack03": "ミリタリーバックパック",
			"game-bandage": "包帯",
			"game-bandage-tooltip": "左クリックでHPを15回復します",
			"game-healing-tooltip": "75HP以上の場合は回復できません",
			"game-healthkit": "救急箱",
			"game-healthkit-tooltip": "左クリックでHPを100回復します",
			"game-soda": "ソーダ",
			"game-soda-tooltip": "左クリックでアドレナリンを25増加させます",
			"game-adrenaline-tooltip": "アドレナリンはHPを時間とともに自動回復させます",
			"game-painkiller": "鎮痛剤",
			"game-painkiller-tooltip": "左クリックでアドレナリンを50増加させます",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "MP5, MAC-10, UMP9, Vector, M9, Glock 18C用の弾薬",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "M870, MP220, Saiga-12用のの弾薬",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "AK-47, SCAR-H, DP-28, Mosin-Nagant, M39EMR, OT-38用の弾薬",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12 SPR, M249用の弾薬",
			"game-chest01": "レベル1 ベスト",
			"game-chest02": "レベル2 ベスト",
			"game-chest03": "レベル3 ベスト",
			"game-helmet01": "レベル1 ヘルメット",
			"game-helmet02": "レベル2 ヘルメット",
			"game-helmet03": "レベル3 ヘルメット",
			"game-1xscope": "1x スコープ",
			"game-2xscope": "2x スコープ",
			"game-4xscope": "4x スコープ",
			"game-8xscope": "8x スコープ",
			"game-15xscope": "15x スコープ",
			"game-level-1": "レベル1",
			"game-level-2": "レベル2",
			"game-level-3": "レベル3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-outfitWoodland": "Woodland Combat",
			"game-outfitJester": "Jester's Folly",
			"game-fists": "拳",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-m9_dual": "Dual M9",
			"game-hud-m9_dual": "M9",
			"game-glock": "Glock 18C",
			"game-glock_dual": "Dual Glock 18C",
			"game-hud-glock_dual": "Glock 18C",
			"game-ot38": "OT-38",
			"game-ot38_dual": "Dual OT-38",
			"game-hud-ot38_dual": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "手榴弾",
			"game-hud-frag": "手榴弾",
			"game-smoke": "スモークグレネード",
			"game-hud-smoke": "スモーク",
			"game-barrel_01": "バレル",
			"game-silo_01": "サイロ",
			"game-oven_01": "オーブン"
		};
		e.exports = i
	},
	"6YQA": function(e, t, a) {
		"use strict";

		function i() {
			return JSON.parse(localStorage.getItem(d)) || {}
		}

		function o(e, t) {
			var a = i();
			return void 0 !== a[e] ? a[e] : t
		}

		function n(e, t) {
			var a = i();
			a[e] = t, localStorage.setItem(d, JSON.stringify(a))
		}

		function r() {
			this.enabled = !1, this.zoom = l.scopeZoomRadius["1xscope"], this.cull = o("cull", !1), this.debug = o("debug", !0), this.setEnabled(!1)
		}
		var s = a("juYr"),
			l = (a("gKxX"), a("+0OL")),
			c = a("0od3"),
			m = (a("/2+T"), a("r4ug"), a("S40U")),
			d = "surviv_editor";
		r.prototype = {
			free: function() {},
			setEnabled: function(e) {
				var t = this;
				this.enabled = e, s("#ui-editor").css("display", e ? "block" : "none"), s("#ui-game").css("display", e ? "none" : "block"), s("#gameAreaWrapper").css("cursor", e ? "default" : "crosshair");
				var a = function(e) {
					var a = s("<input/>", {
						type: "checkbox",
						value: "value",
						checked: t[e]
					});
					return a.on("click", function(i) {
						i.stopPropagation(), t[e] = a.prop("checked"), n(e, t[e])
					}), a
				};
				this.uiPos = s("<div/>"), this.uiZoom = s("<div/>"), this.uiCull = a("cull"), this.uiDebug = a("debug");
				var i = s("#ui-editor-info-list");
				i.empty(), i.append(s("<li/>").append(this.uiPos)), i.append(s("<li/>").append(this.uiZoom));
				var o = s("<div/>", {
					html: "Cull: "
				});
				i.append(s("<li/>").append(o.append(this.uiCull)));
				var r = s("<div/>", {
					html: "Debug: "
				});
				i.append(s("<li/>").append(r.append(this.uiDebug)))
			},
			update: function(e, t, a, i) {
				t.keyPressed(m.Key.Plus) && (this.zoom -= 8), t.keyPressed(m.Key.Minus) && (this.zoom += 8), t.keyPressed(m.Key.Zero) && (this.zoom = a.getScopeZoom()), this.zoom = c.clamp(this.zoom, .5, 400);
				var o = a.netData.pos.x.toFixed(2),
					n = a.netData.pos.y.toFixed(2);
				this.uiPos.html("Pos:  " + o + ", " + n), this.uiZoom.html("Zoom: " + this.zoom)
			},
			renderCamera: function(e) {}
		}, e.exports = r
	},
	"85i3": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o() {
			function e() {
				return Math.floor(Math.random() * Math.pow(2, 32)).toString(16)
			}
			return e() + e()
		}
		var n = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			r = a("juYr"),
			s = function() {
				function e() {
					i(this, e), this.instanceId = o(), this.requests = 0, this.enabled = !0, this.throttle = !1, this.throttleTimeout = 0
				}
				return n(e, [{
					key: "update",
					value: function() {
						var e = (new Date).getTime();
						this.throttle ? e > this.throttleTimeout && (this.throttle = !1, this.requests = 0) : this.requests = Math.max(this.requests - 1, 0)
					}
				}, {
					key: "sample",
					value: function() {
						return Math.random() <= .01
					}
				}, {
					key: "store",
					value: function(e, t) {
						if (this.enabled) {
							if (++this.requests > 5) return this.throttleTimeout = (new Date).getTime() + 18e4, void(this.throttle = !0);
							var a = "https://us-central1-surviv-fa40f.cloudfunctions.net/" + e;
							t.key = "AIzaSyCrPuZeAQ2-aXZdTwZNwQJdv4rvsTE-2i8", r.ajax({
								type: "POST",
								dataType: "html",
								url: a,
								data: t,
								timeout: 3e3
							})
						}
					}
				}, {
					key: "storeGeneric",
					value: function(e, t) {
						this.sample() && this.store("storeGeneric", {
							parent: e,
							child: t
						})
					}
				}, {
					key: "logWindowOnError",
					value: function(e) {
						this.store("windowOnError", {
							error: e
						})
					}
				}, {
					key: "logWindowOnAppError",
					value: function(e) {
						this.store("windowOnAppError", {
							error: e
						})
					}
				}, {
					key: "logError",
					value: function(e) {
						this.store("errorLog", {
							error: e
						})
					}
				}, {
					key: "logTest",
					value: function(e) {
						this.store("testLog", {
							error: e
						})
					}
				}, {
					key: "logProxy",
					value: function(e) {
						this.store("onProxy", {
							data: e
						})
					}
				}]), e
			}(),
			l = new s;
		setInterval(function() {
			l.update()
		}, 1e3), e.exports = l
	},
	"8iex": function(e, t, a) {
		"use strict";
		var i = (a("DlZn"), a("0od3")),
			o = a("/2+T"),
			n = {
				circleToAabb: function(e, t) {
					var a = o.create(t);
					return {
						min: o.sub(e, a),
						max: o.add(e, a)
					}
				},
				aabbToCircle: function(e, t) {
					var a = o.mul(o.sub(t, e), .5);
					return {
						pos: o.add(e, a),
						rad: o.length(a)
					}
				},
				lineSegmentToAabb: function(e, t) {
					return {
						min: o.create(e.x < t.x ? e.x : t.x, e.y < t.y ? e.y : t.y),
						max: o.create(e.x > t.x ? e.x : t.x, e.y > t.y ? e.y : t.y)
					}
				},
				boundingAabb: function(e) {
					for (var t = o.create(Number.MAX_VALUE, Number.MAX_VALUE), a = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), i = 0; i < e.length; i++) {
						var n = e[i];
						t.x = Math.min(t.x, n.min.x), t.y = Math.min(t.y, n.min.y), a.x = Math.max(a.x, n.max.x), a.y = Math.max(a.y, n.max.y)
					}
					return {
						min: t,
						max: a
					}
				},
				splitAabb: function(e, t) {
					var a = o.mul(o.sub(e.max, e.min), .5),
						i = o.add(e.min, a),
						n = {
							min: o.copy(e.min),
							max: o.copy(e.max)
						},
						r = {
							min: o.copy(e.min),
							max: o.copy(e.max)
						};
					Math.abs(t.y) > Math.abs(t.x) ? (n.max = o.create(e.max.x, i.y), r.min = o.create(e.min.x, i.y)) : (n.max = o.create(i.x, e.max.y), r.min = o.create(i.x, e.min.y));
					var s = o.sub(e.max, e.min);
					return o.dot(s, t) > 0 ? [r, n] : [n, r]
				},
				testCircleAabb: function(e, t, a, n) {
					var r = o.create(i.clamp(e.x, a.x, n.x), i.clamp(e.y, a.y, n.y));
					return o.lengthSqr(o.sub(e, r)) < t * t || e.x >= a.x && e.x <= n.x && e.y >= a.y && e.y <= n.y
				},
				testCircleCircle: function(e, t, a, i) {
					var n = t + i;
					return o.lengthSqr(o.sub(a, e)) < n * n
				},
				testAabbAabb: function(e, t, a, i) {
					return e.x < i.x && e.y < i.y && a.x < t.x && a.y < t.y
				},
				intersectSegmentCircle: function(e, t, a, i) {
					var n = o.sub(t, e),
						r = Math.max(o.length(n), 1e-6);
					n = o.div(n, r);
					var s = o.sub(e, a),
						l = o.dot(s, n),
						c = o.dot(s, s) - i * i;
					if (c > 0 && l > 0) return null;
					var m = l * l - c;
					if (m < 0) return null;
					var d = Math.sqrt(m),
						p = -l - d;
					if (p < 0 && (p = -l + d), p <= r) {
						var u = o.add(e, o.mul(n, p));
						return {
							point: u,
							normal: o.normalize(o.sub(u, a))
						}
					}
					return null
				},
				intersectSegmentAabb: function(e, t, a, i) {
					var n = 0,
						r = Number.MAX_VALUE,
						s = e,
						l = o.sub(t, e),
						c = o.length(l);
					if (l = c > 1e-5 ? o.div(l, c) : o.create(1, 0), Math.abs(l.x) < 1e-5 && (l.x = 2e-5), Math.abs(l.y) < 1e-5 && (l.y = 2e-5), Math.abs(l.x) > 1e-5) {
						var m = (a.x - s.x) / l.x,
							d = (i.x - s.x) / l.x;
						if (n = Math.max(n, Math.min(m, d)), r = Math.min(r, Math.max(m, d)), n > r) return null
					}
					if (Math.abs(l.y) > 1e-5) {
						var p = (a.y - s.y) / l.y,
							u = (i.y - s.y) / l.y;
						if (n = Math.max(n, Math.min(p, u)), r = Math.min(r, Math.max(p, u)), n > r) return null
					}
					if (n > c) return null;
					var h = o.add(e, o.mul(l, n)),
						g = o.add(a, o.mul(o.sub(i, a), .5)),
						f = o.sub(h, g),
						y = o.mul(o.sub(a, i), .5);
					return {
						point: h,
						normal: o.normalizeSafe(o.create(parseInt(f.x / Math.abs(y.x) * 1.001), parseInt(f.y / Math.abs(y.y) * 1.001)), o.create(1, 0))
					}
				},
				intersectRayAabb: function(e, t, a, i) {
					Math.abs(t.x) < 1e-5 && (t.x = 2e-5), Math.abs(t.y) < 1e-5 && (t.y = 2e-5);
					var n = o.divElems(o.sub(a, e), t),
						r = o.divElems(o.sub(i, e), t),
						s = o.minElems(n, r),
						l = o.maxElems(n, r),
						c = Math.min(l.x, l.y);
					return c >= Math.max(s.x, s.y) ? o.add(e, o.mul(t, c)) : null
				},
				intersectCircleCircle: function(e, t, a, i) {
					var n = t + i,
						r = o.sub(a, e),
						s = o.lengthSqr(r);
					if (s < n * n) {
						var l = Math.sqrt(s);
						return {
							dir: l > 1e-5 ? o.div(r, l) : o.create(1, 0),
							pen: n - l
						}
					}
					return null
				},
				intersectAabbCircle: function(e, t, a, n) {
					if (a.x >= e.x && a.x <= t.x && a.y >= e.y && a.y <= t.y) {
						var r = o.mul(o.sub(t, e), .5),
							s = o.add(e, r),
							l = o.sub(a, s),
							c = Math.abs(l.x) - r.x - n,
							m = Math.abs(l.y) - r.y - n;
						return c > m ? {
							dir: o.create(l.x > 0 ? 1 : -1, 0),
							pen: -c
						} : {
							dir: o.create(0, l.y > 0 ? 1 : -1),
							pen: -m
						}
					}
					var d = o.create(i.clamp(a.x, e.x, t.x), i.clamp(a.y, e.y, t.y)),
						p = o.sub(a, d),
						u = o.lengthSqr(p);
					if (u < n * n) {
						var h = Math.sqrt(u);
						return {
							dir: h > 1e-4 ? o.div(p, h) : o.create(1, 0),
							pen: n - h
						}
					}
					return null
				},
				intersectAabbAabb: function(e, t, a, i) {
					var n = o.mul(o.sub(t, e), .5),
						r = o.add(e, n),
						s = o.mul(o.sub(i, a), .5),
						l = o.add(a, s),
						c = o.sub(l, r),
						m = n.x + s.x - Math.abs(c.x);
					if (m > 0) {
						var d = n.y + s.y - Math.abs(c.y);
						if (d > 0) return m > d ? {
							dir: c.x < 0 ? o.create(-1, 0) : o.create(1, 0),
							pen: m
						} : {
							dir: c.y < 0 ? o.create(0, -1) : o.create(0, 1),
							pen: d
						}
					}
					return null
				}
			};
		e.exports = n
	},
	"8jco": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "ru"
			},
			"word-order": "svo",
			"index-slogan": "Королевская Битва в 2D",
			"index-region": "Регион",
			"index-north-america": "Северная Америка",
			"index-europe": "Европа",
			"index-asia": "Азия",
			"index-players": "игроков",
			"index-play-solo": "Играть Соло",
			"index-play-duo": "Играть в Дуэте",
			"index-play-squad": "Играть в Отряд",
			"index-join-team": "Войти в команду",
			"index-create-team": "Создать Команду",
			"index-how-to-play": "Как играть",
			"index-leave-team": "Покинуть Команду",
			"index-joining-team": "Присоединение к Команде",
			"index-creating-team": "Создание Команды",
			"index-invite-link": "Ссылка-приглашение",
			"index-invite-code": "Код приглашения",
			"index-join-team-help": "Есть ссылка на команду или код? Напиши его сюда:",
			"index-solo": "Соло",
			"index-duo": "Дуэт",
			"index-squad": "Отряд",
			"index-auto-fill": "Автозаполнение",
			"index-no-fill": "Не заполнять",
			"index-waiting-for-leader": "Ожидание лидера, чтобы начать игру",
			"index-play": "Играть",
			"index-customize-loadout": "Настраиваемые эмоции",
			"index-twitter-follow": "Следовать в Twitter",
			"index-youtube-subscribe": "Подписаться на YouTube",
			"index-facebook-like": "Лайкнуть в Facebook",
			"index-featured-youtuber": "Рекомендуемые Ютуберы",
			"index-streaming-live": "Сейчас стримят!",
			"index-settings": "Настройки",
			"index-high-resolution": "Высокое разрешение (проверьте, чтобы увеличить качество изображения)",
			"index-screen-shake": "Дрожание экрана",
			"index-master-volume": "Уровень Громкости",
			"index-sfx-volume": " Громкость Эффектов",
			"index-music-volume": "Громкость Музыки",
			"index-mobile-announce": "Теперь доступно на ваших телефонах!",
			"index-mobile-tooltip": "Вы можете зайти в surviv.io на своём телефоне, играйте в <span>surviv.io</span> в любом месте!",
			"index-version": "версия",
			"index-privacy": "Конфиденциальность",
			"index-attributions": "атрибуции",
			"index-proxy-sites": "прокси сайты",
			"index-team-is-full": "Команда заполнена!",
			"index-failed-joining-team": "Не удалось присоединиться к команде.",
			"index-failed-creating-team": "Не удалось создать команду.",
			"index-failed-finding-game": "Не удалось найти игру.",
			"index-failed-joining-game": "Не удалось присоединиться к игре.",
			"index-lost-connection": "Соединение с командой прервалось.",
			"index-host-closed": "Соединение с сервером закрыто.",
			"index-view-more": "Посмотреть ещё",
			"index-back-to-main": "Вернуться в главное меню",
			"index-most-kills": "Наибольшее кол-во убийств",
			"index-total-kills": "Всего убийств",
			"index-total-wins": "Всего побед",
			"index-top-5-percent": "Процент Топ 5",
			"index-kill-death-ratio": "Соотношение убийство-смерть",
			"index-for": "За",
			"index-today": "Сегодня",
			"index-this-week": "Эту неделю",
			"index-all-time": "Всё время",
			"index-top-100": "TOP 100",
			"index-rank": "Ранг",
			"index-player": "Игрок",
			"index-total-games": "Всего игр",
			"index-controls": "Управление",
			"index-movement": "Перемещение",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Целиться",
			"index-aim-ctrl": "Мышь",
			"index-punch": "Ударить",
			"index-shoot": "Выстрелить",
			"index-shoot-ctrl": "Левый Щелчок",
			"index-change-weapons": "Сменить Оружие",
			"index-change-weapons-ctrl": "1-4 или Колесо Прокрутки",
			"index-stow-weapons": "Убрать оружие из рук",
			"index-stow-weapons-ctrl": "3 или Е",
			"index-swap-weapons": "Смена на Предыдущее Оружие",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Перезарядка",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Смена прицела",
			"index-scope-zoom-ctrl": "Левый щелчок на Прицел",
			"index-pickup": "Подобрать добычу",
			"index-loot": "Добычу",
			"index-revive": "оживление",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Медицинский Предмет change on Медикамент",
			"index-use-medical-ctrl": "Левый Щелчок на Предмет или цифры от 0-7",
			"index-drop-item": "Выкинуть предмет",
			"index-drop-item-ctrl": "Правый Щелчок на Предмет",
			"index-cancel-action": "Отменить действие",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Посмотреть Карту",
			"index-view-map-ctrl": "M или G",
			"index-toggle-minimap": "Переключить режим просмотра",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Использование команд",
			"index-use-ping-ctrl": "Удерживая C зажать Правую кнопку мыши и водить мышкой, затем выбрав команду отпустить",
			"index-use-emote": "Использование Эмодзи",
			"index-use-emote-ctrl": "Зажать Правую кнопку мыши и водить мышкой, затем отпустить Правую кнопку мыши",
			"index-tips-1-desc": "Цель surviv.io - остаться последним выжившим. В одном раунде у вас только одна жизнь и нет возможности возродиться.",
			"index-tips-2": "PUBG в 2D",
			"index-tips-2-desc": "Если вы играли в другие игры жанра Королевской Битвы (такие как PUBG, Fortnite или H1Z1), то вы уже знаете правила. По сути, surviv.io - это двумерный PUBG (только меньше лагает).",
			"index-tips-3": "Убивай и добывай",
			"index-tips-3-desc": "Вы начнете игру без каких-либо предметов или оружия, у вас есть только простой рюкзак. Передвигайтесь по карте, чтобы найти полезные вещи: оружие, боеприпасы, прицелы и медикаменты. Убивайте других игроков и забирайте себе их вещи!",
			"index-tips-4": "Красный - опасный!",
			"index-tips-4-desc": "Другие игроки - это не единственное, что может вас ранить. По ходу игры Красная Зона будет надвигаться с краёв карты и наносить всё больше урона, если вы окажетесь в ней. Так что посматривайте на карту и будьте осторожны!",
			"game-alive": "В живых",
			"game-reloading": "Перезарядка",
			"game-using": "Использование",
			"game-reviving": "Возрождение",
			"game-revive-teammate": "Возродить Союзника",
			"game-equip": "Взять",
			"game-cancel": "Отмена",
			"game-open-door": "Открыть дверь",
			"game-close-door": "Закрыть дверь",
			"game-You": "Вы",
			"game-you": "вы",
			"game-themselves": "себя",
			"game-yourself": "себя",
			"game-you-died": "умерли",
			"game-player-died": "Умер",
			"game-with": "с помощью",
			"game-knocked-out": "Нокаутировал",
			"game-killed": "убили",
			"game-finally-killed": "наконец убили",
			"game-finally-bled-out": "наконец умер",
			"game-died-outside": "умер за пределами безопасной зоны",
			"game-the-red-zone": "Красная зона",
			"game-waiting-for-players": "Ожидание игроков",
			"game-spectating": "Наблюдение за",
			"game-red-zone-advances": "Красная зона наступит через",
			"game-red-zone-advancing": "Красная зона наступает, доберитесь до безопасной зоны!",
			"game-seconds": "секунды",
			"game-minutes": "минуты",
			"game-minute": "минута",
			"game-m": "м",
			"game-s": "с",
			"game-not-enough-space": "Недостаточно места!",
			"game-item-already-owned": "Этот предмет уже есть!",
			"game-item-already-equipped": "Этот предмет уже экипирован!",
			"game-better-item-equipped": "Предмет получше уже есть!",
			"game-play-new-game": "Начать Новую Игру",
			"game-spectate": "Наблюдать",
			"game-full-screen": "Полный экран",
			"game-sound": "Звук",
			"game-quit-game": "Выйти из Игры",
			"game-return-to-game": "Вернуться в Игру",
			"game-hide-match-stats": "Скрыть Статистику Матча",
			"game-view-match-stats": "Посмотреть Статистику Матча",
			"game-previous-teammate": "Предыдущий Напарник",
			"game-next-teammate": "Следующий Напарник",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Покинуть Игру",
			"game-your-results": "Твои Результаты",
			"game-chicken": "Победа, победа после обеда!",
			"game-won-the-game": "выиграл игру.",
			"game-team-eliminated": "Ваша команда потерпела поражение.",
			"game-rank": "Ранг",
			"game-team-rank": "Ранг команды",
			"game-team-kills": "Командных убийств",
			"game-kill": "Убийство",
			"game-kills": "Убийства",
			"game-damage-dealt": "Нанесённый Урон",
			"game-damage-taken": "Полученный Урон",
			"game-survived": "Выжил",
			"game-backpack00": "Патронташ",
			"game-backpack01": "Маленький Рюкзак",
			"game-backpack02": "Обычный Рюкзак",
			"game-backpack03": "Военный Рюкзак",
			"game-bandage": "Бинт",
			"game-bandage-tooltip": "Левый Щелчок, чтобы восстановить 15 здоровья.",
			"game-healing-tooltip": "Не востанавливает больше 75 здоровья.",
			"game-healthkit": "Аптечка",
			"game-healthkit-tooltip": "Левый Щелчок, чтобы восстановить 100 здоровья.",
			"game-soda": "Сода",
			"game-soda-tooltip": "Левый Щелчок, чтобы увеличить адреналин на 25.",
			"game-adrenaline-tooltip": "Адреналин со временем восстанавливает здоровье.",
			"game-painkiller": "Таблетки",
			"game-painkiller-tooltip": "Левый Щелчок, чтобы увеличить адреналин на 50.",
			"game-9mm": "9мм",
			"game-9mm-tooltip": "Патроны для M9, Glock, MP5, MAC-10, UMP9 и Vector.",
			"game-12gauge": "12 калибр",
			"game-12gauge-tooltip": "Патроны для M870, Сайга-12 и MP220.",
			"game-762mm": "7.62мм",
			"game-762mm-tooltip": "Патроны для AK-47, SCAR-H, M39, Винтовка Мосина, OT-38 и DP-28.",
			"game-556mm": "5.56мм",
			"game-556mm-tooltip": "Патроны для FAMAS, HK416, Mk 12 и M249.",
			"game-chest01": "Жилет 1-ого уровня",
			"game-chest02": "Жилет 2-ого уровня",
			"game-chest03": "Жилет 3-ого уровня",
			"game-helmet01": "Шлем 1-ого уровня",
			"game-helmet02": "Шлем 2-ого уровня",
			"game-helmet03": "Шлем 3-ого уровня",
			"game-1xscope": "1x Прицел",
			"game-2xscope": "2x Прицел",
			"game-4xscope": "4x Прицел",
			"game-8xscope": "8x Прицел",
			"game-15xscope": "15x Прицел",
			"game-level-1": "1-й Ур.",
			"game-level-2": "2-й Ур.",
			"game-level-3": "3-й Ур.",
			"game-outfitBase": "Базовая Экипировка",
			"game-outfitRoyalFortune": "Королевская удача",
			"game-outfitKeyLime": "Лаймовый оттенок",
			"game-outfitCobaltShell": "Кобальтовая Оболочка",
			"game-outfitCarbonFiber": "Углеродное волокно",
			"game-outfitDarkGloves": "Профессионал",
			"game-outfitGhillie": "Маскировочный костюм",
			"game-outfitCamo": "Лесной камуфляж",
			"game-outfitRed": "Мишень",
			"game-outfitWhite": "Арктический Мститель",
			"game-outfitWoodland": "Боевой камуфляж",
			"game-outfitJester": "Шутовской Наряд",
			"game-outfitPrisoner": "Новый Чёрный",
			"game-outfitCasanova": "Сатиновая куртка",
			"game-outfitKhaki": "Положивший Начало",
			"game-fists": "удар",
			"game-ak47": "AK-47",
			"game-dp28": "ДП-28",
			"game-mosin": "Винтовка Мосина",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Сайга-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "ОЦ-38",
			"game-frag": "Осколочная Граната",
			"game-hud-frag": "Осколочная",
			"game-smoke": "Дымовая Граната",
			"game-hud-smoke": "Дымовая",
			"game-barrel_01": "взрывом бочки",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	"9MzZ": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e) {
			try {
				return e.createGain().disconnect(e.destination), !1
			} catch (e) {
				return !0
			}
		}
		var n = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			r = window.navigator.userAgent.indexOf("iPod") > -1 || window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1,
			s = null,
			l = !1,
			c = 128,
			m = function() {
				function e(t) {
					i(this, e), this.ctx = t, this.sound = null, this.id = 0, this.volume = 1, this.volumeOld = this.volume, this.pan = 0, this.panOld = this.pan, this.sourceNode = null, this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.destination = null, this.paramEvents = 0, this.stopTime = 0, this.stopping = !1, this.playState = "playFinished"
				}
				return n(e, [{
					key: "setGain",
					value: function(e) {
						this.stopping || (r ? this.gainNode.gain.value = e : (this.gainNode.gain.setTargetAtTime(e, this.ctx.currentTime, .02), ++this.paramEvents))
					}
				}, {
					key: "setPan",
					value: function(e) {
						this.stopping || (this.pannerNode.setPosition(e, 0, -.5), this.paramEvents += 3)
					}
				}, {
					key: "start",
					value: function(e, t, a, i, o, n) {
						this.volume = this.volumeOld = a, this.pan = this.panOld = i, this.destination = e, this.sourceNode = this.ctx.createBufferSource(), this.sourceNode.buffer = t, this.sourceNode.connect(this.gainNode), this.pannerNode.connect(this.destination), this.sourceNode.loop = o, r ? this.gainNode.gain.value = a : (this.gainNode.gain.setValueAtTime(a, this.ctx.currentTime), ++this.paramEvents), this.setPan(i), this.sourceNode.start(this.ctx.currentTime + n), this.stopTime = o ? 1e100 : this.ctx.currentTime + n + t.duration, this.stopping = !1, this.playState = "playSucceeded"
					}
				}, {
					key: "stop",
					value: function() {
						this.stopping || (this.setGain(0), this.stopTime = this.ctx.currentTime + .1, this.stopping = !0, this.playState = "playInterrupted")
					}
				}, {
					key: "disconnect",
					value: function() {
						if (this.sound.instances.splice(this.sound.instances.indexOf(this), 1), this.sound = null, this.sourceNode.stop(0), this.sourceNode.disconnect(this.gainNode), this.pannerNode.disconnect(this.destination), r) try {
							this.sourceNode.buffer = s
						} catch (e) {}
						this.destination = null, this.sourceNode = null, this.playState = "playFinished"
					}
				}, {
					key: "reallocNodes",
					value: function() {
						this.gainNode.disconnect(this.pannerNode), this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.paramEvents = 0
					}
				}]), e
			}(),
			d = null,
			p = function() {
				function e(t) {
					i(this, e), this.instance = t, this.id = t.id
				}
				return n(e, [{
					key: "check",
					value: function(e) {
						this.id != this.instance.id && (this.instance = d, this.id = d.id)
					}
				}, {
					key: "stop",
					value: function() {
						this.check(), this.instance.stop()
					}
				}, {
					key: "volume",
					get: function() {
						return this.check(), this.instance.volume
					},
					set: function(e) {
						this.check(!0), this.instance.volume = e
					}
				}, {
					key: "pan",
					get: function() {
						return this.check(), this.instance.pan
					},
					set: function(e) {
						this.check(!0), this.instance.pan = e
					}
				}, {
					key: "playState",
					get: function() {
						return this.check(), this.instance.playState
					}
				}]), e
			}(),
			u = null,
			h = function() {
				function e(t, a, o, n, r) {
					if (i(this, e), this.ctx = t, this.inNode = a, this.outNode = o, this.name = n, this.volume = void 0 != r.volume ? r.volume : 1, this.echoVolume = r.echoVolume || 0, this.echoDelay = r.echoDelay || 0, this.echoLowPass = r.echoLowPass || 3e3, this.stereoSpread = r.stereoSpread || 0, !l) {
						var s = this.ctx.createGain();
						this.inNode.connect(s), this.inNode = s
					}
					this.gainNode = null, this.convolverNode = null, this.echoGainNode = null, this.echoLowPassNode = null, this.echoDelayNode = null, this.stereoDelayNode = null, this.mergerNode = null, this.convolverNode = this.ctx.createConvolver(), this.echoVolume && (this.echoLowPassNode = this.ctx.createBiquadFilter(), this.echoLowPassNode.type = "lowpass", this.echoLowPassNode.frequency.setValueAtTime(this.echoLowPass, 0), this.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), this.echoDelayNode = this.ctx.createDelay(this.echoDelay || .01), this.echoDelayNode.delayTime.setValueAtTime(this.echoDelay, 0)), this.stereoSpread && (this.stereoDelayNode = this.ctx.createDelay(this.stereoSpread), this.stereoDelayNode.delayTime.setValueAtTime(this.stereoSpread, 0), this.mergerNode = this.ctx.createChannelMerger(2)), this.targetLevel = 0, this.gain = 0, this.drainEndTime = 0, this.active = !1
				}
				return n(e, [{
					key: "isConnected",
					value: function() {
						return null != this.gainNode
					}
				}, {
					key: "connect",
					value: function() {
						if (this.gainNode = this.ctx.createGain(), this.gainNode.channelCount = 1, this.gainNode.channelCountMode = "explicit", this.gainNode.gain.setValueAtTime(0, 0), this.echoVolume && (this.echoGainNode = this.ctx.createGain(), this.echoGainNode.channelCount = 1, this.echoGainNode.channelCountMode = "explicit", this.echoGainNode.gain.setValueAtTime(this.echoVolume, 0)), this.inNode.connect(this.gainNode), this.gainNode.connect(this.convolverNode), this.echoVolume && (this.convolverNode.connect(this.echoGainNode), this.echoGainNode.connect(this.echoLowPassNode), this.echoLowPassNode.connect(this.echoDelayNode), this.echoDelayNode.connect(this.convolverNode)), this.stereoSpread) {
							var e = this.convolverNode.buffer;
							e && 1 != e.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), this.convolverNode.connect(this.stereoDelayNode), this.convolverNode.connect(this.mergerNode, 0, 0), this.stereoDelayNode.connect(this.mergerNode, 0, 1), this.mergerNode.connect(this.outNode)
						} else this.convolverNode.connect(this.outNode)
					}
				}, {
					key: "disconnect",
					value: function() {
						this.inNode.disconnect(this.gainNode), this.gainNode.disconnect(this.convolverNode), this.echoVolume && (this.convolverNode.disconnect(this.echoGainNode), this.echoGainNode.disconnect(this.echoLowPassNode), this.echoLowPassNode.disconnect(this.echoDelayNode), this.echoDelayNode.disconnect(this.convolverNode)), this.stereoSpread ? (this.convolverNode.disconnect(this.stereoDelayNode), this.convolverNode.disconnect(this.mergerNode, 0, 0), this.stereoDelayNode.disconnect(this.mergerNode, 0, 1), this.mergerNode.disconnect(this.outNode)) : this.convolverNode.disconnect(this.outNode), this.gainNode = null, this.echoGainNode = null
					}
				}, {
					key: "setGain",
					value: function(e, t, a) {
						if (e *= this.volume, this.gain != e) {
							if (0 == e || this.gainNode || this.connect(), 0 == e) {
								this.echoGainNode && this.echoGainNode.gain.setValueAtTime(0, a);
								var i = this.convolverNode.buffer,
									o = i ? i.duration : 0;
								this.drainEndTime = a + o + this.echoDelay + this.stereoSpread
							}
							0 == this.gain && this.echoGainNode && this.echoGainNode.gain.setValueAtTime(this.echoVolume, t), this.gainNode.gain.setValueAtTime(this.gain, t), this.gainNode.gain.linearRampToValueAtTime(e, a), this.gain = e
						}
					}
				}]), e
			}(),
			g = function() {
				function e() {
					var t = this;
					if (i(this, e), this.ctx = new(window.AudioContext || window.webkitAudioContext), r) {
						var a = this.ctx.createBuffer(1, 1, 44100),
							n = this.ctx.createBufferSource();
						n.buffer = a, n.connect(this.ctx.destination), n.start(), n.disconnect(this.ctx.destination), this.ctx.close(), this.ctx = new(window.AudioContext || window.webkitAudioContext)
					}
					l = o(this.ctx), window.audioEngine = this, this.masterGainNode = this.ctx.createGain(), this.compressorNode = this.ctx.createDynamicsCompressor(), this.masterGainNode.connect(this.compressorNode), this.compressorNode.connect(this.ctx.destination), this.reverbNode = this.ctx.createGain(), this.reverbNode.connect(this.masterGainNode), this.muffleNode = this.ctx.createGain(), this.muffleNode.gain.setValueAtTime(16, 0);
					for (var h = [
							[20, 1.4142, -6],
							[40, 1.4142, -7],
							[80, 1.4142, -10],
							[160, 1.4142, -13],
							[320, 1.4142, -22],
							[640, 1.4142, -18],
							[1280, 1.4142, -25],
							[2560, 1.4142, -10],
							[5120, 1.4142, -30],
							[10240, 1.4142, -25]
						], g = this.muffleNode, f = 0; f < h.length; f++) {
						var y = this.ctx.createBiquadFilter();
						g.connect(y), g = y, y.type = "peaking", y.frequency.setValueAtTime(h[f][0], 0), y.Q.setValueAtTime(h[f][1], 0), y.gain.setValueAtTime(h[f][2], 0)
					}
					g.connect(this.reverbNode), this.files = {}, this.sounds = {}, this.instances = [];
					for (var b = 0; b < c; b++) {
						var x = new m(this.ctx);
						this.instances[b] = x
					}
					if (this.instanceId = 0, this.playingInstances = [], d = new m(this.ctx), u = new p(d), this.reverbs = {}, this.activeReverbs = [], this.reverbFadeEndTime = 0, this.volume = 1, this.volumeOld = this.volume, this.muted = !1, this.mutedOld = this.muted, "suspended" == this.ctx.state) {
						var v = function e() {
							t.ctx.resume();
							var a = t.ctx.createBufferSource();
							a.buffer = t.ctx.createBuffer(1, 1, 22050), a.connect(t.ctx.destination), a.start(), setTimeout(function() {
								"running" == t.ctx.state && (document.body.removeEventListener("mousedown", e, !1), document.body.removeEventListener("touchend", e, !1))
							}, 0)
						};
						document.body.addEventListener("mousedown", v, !1), document.body.addEventListener("touchend", v, !1)
					}
					r && (s = this.ctx.createBuffer(1, 1, 22050)), this.onfileload = function() {}, this.PLAY_INITED = "playInited", this.PLAY_SUCCEEDED = "playSucceeded", this.PLAY_INTERRUPTED = "playInterrupted", this.PLAY_FINISHED = "playFinished", this.PLAY_FAILED = "playFailed", this.INTERRUPT_LATE = "late", this.defaultInterruptBehavior = this.INTERRUPT_LATE
				}
				return n(e, [{
					key: "initializeDefaultPlugins",
					value: function() {}
				}, {
					key: "loadFile",
					value: function(e, t) {
						var a = this;
						if (void 0 != this.files[e]) return t(e), this.files[e];
						this.files[e] = {
							buffer: null
						};
						var i = new XMLHttpRequest;
						i.open("GET", e), i.responseType = "arraybuffer";
						var o = function(t) {
							console.error("Failed loading sound file: " + e)
						};
						return i.addEventListener("load", function(n) {
							var r = i.response;
							if (!r) return void o();
							a.ctx.decodeAudioData(r, function(i) {
								a.files[e].buffer = i, t(e)
							}, function() {
								console.error("Failed decoding sound: " + e)
							})
						}), i.addEventListener("abort", o), i.addEventListener("error", o), i.addEventListener("timeout", o), i.send(), this.files[e]
					}
				}, {
					key: "registerSound",
					value: function(e, t, a) {
						var i = this.loadFile(e, this.onfileload.bind(this)),
							o = {
								file: i,
								canCoalesce: !!a.canCoalesce,
								maxInstances: a.channels || 16,
								instances: []
							};
						this.sounds[t] = o
					}
				}, {
					key: "play",
					value: function(e, t) {
						var a = this.sounds[e];
						if (!a) return console.error("No sound named: " + e), u;
						var i = t.filter || "none",
							o = void 0 != t.volume ? t.volume : 1;
						o = this.muted ? 0 : o;
						var n = t.pan || 0,
							r = !!t.loop,
							s = t.delay ? .001 * t.delay : 0;
						if (!a.file.buffer) return u;
						if (this.muted && !t.loop) return u;
						if ("none" !== i && "reverb" !== i && "muffled" !== i) return console.error("Invalid filter: " + i + ". Only valid filters are 'none', 'reverb' and 'muffled'."), u;
						if (a.canCoalesce)
							for (var l = this.ctx.currentTime + a.file.buffer.duration, m = 0; m < a.instances.length; m++) {
								var d = a.instances[m];
								if (!(Math.abs(l - d.stopTime) > .03)) {
									var h = d.volume * d.volume + o * o,
										g = d.volume * d.pan + o * n,
										f = d.volume + o;
									return d.volume = Math.sqrt(h), d.pan = g / Math.max(.001, f), u
								}
							}
						for (var y = 0; y < c && (++this.instanceId, this.instances[this.instanceId % c].sound); y++);
						var b = this.instances[this.instanceId % c];
						if (b.sound) return console.error("All " + c + " sound instances in use. You are using way too many sounds!"), u;
						b.id = this.instanceId;
						var x = b.paramEvents > 150,
							v = b.paramEvents > 20 && !(this.instanceId % 7);
						for ((x || v) && b.reallocNodes(); a.instances.length >= a.maxInstances;) {
							for (var k = a.instances[0], _ = 1; _ < a.instances.length; _++) k.stopTime > a.instances[_].stopTime && (k = a.instances[_]);
							k.disconnect()
						}
						b.sound = a, a.instances.push(b);
						var w = "none" === i ? this.masterGainNode : "reverb" === i ? this.reverbNode : this.muffleNode;
						return b.start(w, a.file.buffer, o, n, r, s), -1 == this.playingInstances.indexOf(b) && this.playingInstances.push(b), new p(b)
					}
				}, {
					key: "registerReverb",
					value: function(e, t, a) {
						var i = this,
							o = new h(this.ctx, this.reverbNode, this.masterGainNode, t, a);
						this.loadFile(e, function(e) {
							o.convolverNode.buffer = i.files[e].buffer, i.onfileload(e)
						}), this.reverbs[t] = o
					}
				}, {
					key: "setReverbs",
					value: function(e) {
						for (var t = 0; t < this.activeReverbs.length; t++) {
							var a = this.activeReverbs[t];
							e[a.name] || (a.targetLevel = 0)
						}
						for (var i in e)
							if (e[i]) {
								var o = this.reverbs[i];
								o ? (this.reverbs[i].active || (this.activeReverbs.push(o), o.active = !0), o.targetLevel = e[i]) : console.error("No reverb named " + i)
							}
					}
				}, {
					key: "stop",
					value: function() {}
				}, {
					key: "update",
					value: function(e) {
						"suspended" == this.ctx.state && this.ctx.resume();
						var t = this.muted ? 0 : this.volume,
							a = this.mutedOld ? 0 : this.volumeOld;
						this.volumeOld = this.volume, this.mutedOld = this.muted, t != a && this.masterGainNode.gain.setTargetAtTime(t, this.ctx.currentTime, .02);
						for (var i = this.playingInstances.length - 1; i >= 0; i--) {
							var o = this.playingInstances[i];
							o.volumeOld != o.volume && (o.volumeOld = o.volume, o.setGain(o.volume)), o.panOld != o.pan && (o.panOld = o.pan, o.setPan(o.pan)), o.sound && this.ctx.currentTime > o.stopTime && o.disconnect(), o.sound || this.playingInstances.splice(i, 1)
						}
						if (this.ctx.currentTime > this.reverbFadeEndTime) {
							var n = this.ctx.currentTime + .006;
							this.reverbFadeEndTime = n + .025;
							for (var r = 0, s = 0; s < this.activeReverbs.length; s++) {
								r += this.activeReverbs[s].targetLevel
							}
							for (var l = r > 1 ? 1 / r : 1, c = 0; c < this.activeReverbs.length; c++) {
								var m = this.activeReverbs[c],
									d = Math.sqrt(l * m.targetLevel);
								m.setGain(d, n, this.reverbFadeEndTime)
							}
							for (var p = this.activeReverbs.length - 1; p >= 0; p--) {
								var u = this.activeReverbs[p],
									h = this.ctx.currentTime > u.drainEndTime;
								0 == u.gain && h && (u.isConnected() && u.disconnect(), u.active = !1, this.activeReverbs.splice(p, 1))
							}
						}
					}
				}, {
					key: "_setMute",
					value: function(e) {
						this.muted = e
					}
				}, {
					key: "on",
					value: function(e, t, a) {
						if ("fileload" != e) return void console.error('Only "fileload" event supported');
						this.onfileload = t.bind(a)
					}
				}, {
					key: "updatePerformanceTest",
					value: function() {
						var e = this;
						if (this.runningOfflineTest = void 0 != this.runningOfflineTest && this.runningOfflineTest, !this.runningOfflineTest) {
							this.runningOfflineTest = !0;
							this.offlineCtx = new OfflineAudioContext(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate);
							for (var t = this.offlineCtx.createBuffer(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate), a = 0; a < t.numberOfChannels; a++)
								for (var i = t.getChannelData(a), o = 0; o < i.length; o++) i[o] = Math.sin(o / 2333) * Math.sin(o / 5741) * 2 * Math.random() - 1;
							var n = this.offlineCtx.createBufferSource();
							n.buffer = t;
							for (var r = this.offlineCtx.createConvolver(), s = this.offlineCtx.createBuffer(1, 4 * this.ctx.sampleRate, this.ctx.sampleRate), l = 0; l < s.numberOfChannels; l++)
								for (var c = s.getChannelData(l), m = 0; m < c.length; m++) c[m] = 2 * Math.random() - 1;
							r.buffer = s;
							var d = {
								volume: .7,
								echoVolume: .5,
								echoLowPass: 800,
								echoDelay: .25,
								stereoSpread: .004
							};
							if (d.convolverNode = r, d.echoLowPassNode = this.offlineCtx.createBiquadFilter(), d.echoLowPassNode.type = "lowpass", d.echoLowPassNode.frequency.setValueAtTime(d.echoLowPass, 0), d.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), d.echoDelayNode = this.offlineCtx.createDelay(d.echoDelay || .01), d.echoDelayNode.delayTime.setValueAtTime(d.echoDelay, 0), d.stereoSpread && (d.stereoDelayNode = this.offlineCtx.createDelay(d.stereoSpread), d.stereoDelayNode.delayTime.setValueAtTime(d.stereoSpread, 0), d.mergerNode = this.offlineCtx.createChannelMerger(2)), d.gainNode = this.offlineCtx.createGain(), d.gainNode.channelCount = 1, d.gainNode.channelCountMode = "explicit", d.gainNode.gain.setValueAtTime(1, 0), d.echoGainNode = this.offlineCtx.createGain(), d.echoGainNode.channelCount = 1, d.echoGainNode.channelCountMode = "explicit", d.echoGainNode.gain.setValueAtTime(d.echoVolume, 0), d.outNode = this.offlineCtx.createGain(), d.gainNode.connect(d.convolverNode), d.stereoSpread) {
								var p = d.convolverNode.buffer;
								p && 1 != p.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), d.convolverNode.connect(d.stereoDelayNode), d.convolverNode.connect(d.mergerNode, 0, 0), d.stereoDelayNode.connect(d.mergerNode, 0, 1), d.mergerNode.connect(d.outNode)
							} else d.convolverNode.connect(d.outNode);
							this.offlineCtx.createDynamicsCompressor();
							console.log("starting convolver"), n.connect(d.gainNode), d.outNode.connect(this.offlineCtx.destination), n.start(), this.startTime = performance.now(), this.offlineCtx.oncomplete = function(t) {
								var a = performance.now();
								console.log("Offline render time: ", a - e.startTime), e.runningOfflineTest = !1
							}, this.offlineCtx.startRendering()
						}
					}
				}]), e
			}(),
			f = {
				Sound: new g
			};
		e.exports = f
	},
	"9xSA": function(e, t, a) {
		"use strict";
		var i = (a("DlZn"), a("8iex")),
			o = (a("0od3"), a("/2+T")),
			n = {
				Type: {
					Circle: 0,
					Aabb: 1
				},
				createCircle: function(e, t, a) {
					return {
						type: n.Type.Circle,
						pos: o.copy(e),
						rad: t,
						height: void 0 !== a ? a : 0
					}
				},
				createAabb: function(e, t, a) {
					return {
						type: n.Type.Aabb,
						min: o.copy(e),
						max: o.copy(t),
						height: void 0 !== a ? a : 0
					}
				},
				createAabbExtents: function(e, t, a) {
					var i = o.sub(e, t),
						r = o.add(e, t);
					return n.createAabb(i, r, a)
				},
				createBounding: function(e) {
					if (1 == e.length) return n.copy(e[0]);
					for (var t = [], a = 0, o = 0; o < e.length; o++) {
						var r = e[o];
						t.push(n.toAabb(r)), a = Math.max(a, r.height)
					}
					var s = i.boundingAabb(t);
					return n.createAabb(s.min, s.max, a)
				},
				toAabb: function(e) {
					if (e.type == n.Type.Aabb) return n.createAabb(e.min, e.max, e.height);
					var t = i.circleToAabb(e.pos, e.rad);
					return n.createAabb(t.min, t.max, e.height)
				},
				copy: function(e) {
					return e.type == n.Type.Circle ? n.createCircle(e.pos, e.rad, e.height) : n.createAabb(e.min, e.max, e.height)
				},
				transform: function(e, t, a, i) {
					if (e.type == n.Type.Aabb) {
						for (var r = o.mul(o.sub(e.max, e.min), .5), s = o.add(e.min, r), l = [o.create(s.x - r.x, s.y - r.y), o.create(s.x - r.x, s.y + r.y), o.create(s.x + r.x, s.y - r.y), o.create(s.x + r.x, s.y + r.y)], c = o.create(Number.MAX_VALUE, Number.MAX_VALUE), m = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), d = 0; d < l.length; d++) {
							var p = o.add(o.rotate(o.mul(l[d], i), a), t);
							c.x = Math.min(c.x, p.x), c.y = Math.min(c.y, p.y), m.x = Math.max(m.x, p.x), m.y = Math.max(m.y, p.y)
						}
						return n.createAabb(c, m, e.height)
					}
					return n.createCircle(o.add(o.rotate(o.mul(e.pos, i), a), t), e.rad * i, e.height)
				},
				intersectCircle: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectAabbCircle(e.min, e.max, t, a) : i.intersectCircleCircle(e.pos, e.rad, t, a)
				},
				intersectAabb: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectAabbAabb(e.min, e.max, t, a) : i.intersectAabbCircle(t, a, e.pos, e.rad)
				},
				intersectSegment: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectSegmentAabb(t, a, e.min, e.max) : i.intersectSegmentCircle(t, a, e.pos, e.rad)
				},
				intersect: function(e, t) {
					return t.type == n.Type.Aabb ? n.intersectAabb(e, t.min, t.max) : n.intersectCircle(e, t.pos, t.rad)
				}
			};
		e.exports = n
	},
	Bk7F: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e) {
			return e % 4 * .5 * Math.PI
		}

		function n(e) {
			var t = B[e];
			if ("structure" == t.type) {
				for (var a = [], i = 0; i < t.layers.length; i++) {
					var r = t.layers[i],
						s = o(r.ori),
						l = D.transform(n(r.type), r.pos, s, 1);
					a.push(D.toAabb(l))
				}
				var c = A.boundingAabb(a);
				return D.createAabb(c.min, c.max)
			}
			if ("building" == t.type) {
				for (var m = [], d = 0; d < t.floor.surfaces.length; d++) m = m.concat(t.floor.surfaces[d].collision);
				m = m.concat(t.ceiling.scopeIn), m = m.concat(t.ceiling.scopeOut);
				for (var p = 0; p < t.mapObjects.length; p++) {
					var u = t.mapObjects[p],
						h = u.type;
					if ("function" == typeof h && (h = h()), "" != h) {
						var g = o(u.ori),
							f = D.transform(n(h), u.pos, g, u.scale);
						m.push(D.toAabb(f))
					}
				}
				var y = A.boundingAabb(m);
				return D.createAabb(y.min, y.max)
			}
			return z(t.collision), t.collision
		}

		function r(e, t, a) {
			return {
				tier: e,
				min: t,
				max: a
			}
		}

		function s(e, t) {
			return {
				name: e,
				count: t
			}
		}

		function l(e) {
			return e && "object" === (void 0 === e ? "undefined" : I(e)) && !Array.isArray(e)
		}

		function c(e) {
			for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
			if (!a.length) return e;
			var n = a.shift();
			if (l(e) && l(n))
				for (var r in n) l(n[r]) ? (e[r] || Object.assign(e, i({}, r, {})), c(e[r], n[r])) : Object.assign(e, i({}, r, n[r]));
			return c.apply(void 0, [e].concat(a))
		}

		function m(e) {
			var t = [];
			for (var a in e) e.hasOwnProperty(a) && t.push({
				type: a,
				weight: e[a]
			});
			z(t.length > 0);
			for (var i = 0, o = 0; o < t.length; o++) i += t[o].weight;
			return function() {
				for (var e = O.random(0, i), a = 0; e > t[a].weight;) e -= t[a].weight, a++;
				return t[a].type
			}
		}

		function d(e, t) {
			return {
				sprite: e,
				scale: .5,
				alpha: 1,
				tint: t || 16777215,
				zIdx: 10
			}
		}

		function p(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: D.createCircle(L.create(0, 0), 1.75),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "outhouseChip",
				explodeParticle: "barrelPlank",
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !0,
					color: 6697728,
					scale: 1
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				img: {
					sprite: "img/map/map-barrel-02.svg",
					residue: "img/map/map-barrel-res-02.svg",
					scale: .4,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "barrel_break_02",
					enter: "none"
				}
			}, e || {})
		}

		function u(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(3.5, 1)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: ["woodPlank", "book"],
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-bookshelf-01.svg",
					residue: "img/map/map-drawers-res.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_prop_bullet",
					punch: "wood_prop_bullet",
					explode: "drawers_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function h(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1.05,
					createMax: 1.2,
					destroy: 1
				},
				collision: D.createCircle(L.create(0, 0), 1.4),
				height: 10,
				collidable: !1,
				destructible: !0,
				health: 100,
				hitParticle: "leaf",
				explodeParticle: "leaf",
				reflectBullets: !1,
				isBush: !0,
				loot: [],
				map: {
					display: !0,
					color: 24320,
					scale: 1.5
				},
				terrain: {
					grass: !0,
					beach: !1
				},
				img: {
					sprite: "img/map/map-bush-01.svg",
					residue: "img/map/map-bush-res-01.svg",
					scale: .5,
					alpha: .4,
					tint: 16777215,
					zIdx: 60
				},
				sound: {
					bullet: "bush_bullet",
					punch: "bush_bullet",
					explode: "bush_break_01",
					enter: "bush_enter_01"
				}
			}, e || {})
		}

		function g(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .9
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 1.6)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-case-deagle-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function f(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 1.6)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 140,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_chest", 3, 4)],
				map: {
					display: !0,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-chest-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function y(e) {
			var t = [{
					type: "container_wall_top",
					pos: L.create(0, 7.95),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side",
					pos: L.create(2.35, 2.1),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side",
					pos: L.create(-2.35, 2.1),
					scale: 1,
					ori: 0
				}, {
					type: e.loot_spawner_01 || "loot_tier_2",
					pos: L.create(0, 3.25),
					scale: 1,
					ori: 0
				}, {
					type: e.loot_spawner_02 || m({
						loot_tier_1: 2,
						"": 1
					}),
					pos: L.create(0, .05),
					scale: 1,
					ori: 0
				}],
				a = [{
					type: "container_wall_side_open",
					pos: L.create(2.35, 0),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side_open",
					pos: L.create(-2.35, 0),
					scale: 1,
					ori: 0
				}, {
					type: "loot_tier_2",
					pos: L.create(0, -.05),
					scale: 1,
					ori: 0
				}, {
					type: m({
						loot_tier_1: 1,
						"": 1
					}),
					pos: L.create(0, .05),
					scale: 1,
					ori: 0
				}];
			return {
				type: "building",
				map: {
					display: !0,
					color: e.mapTint || 2703694,
					scale: 1
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				zIdx: 1,
				floor: {
					surfaces: [{
						type: "container",
						collision: [e.open ? D.createAabbExtents(L.create(0, 0), L.create(2.5, 11)) : D.createAabbExtents(L.create(0, 0), L.create(2.5, 8))]
					}],
					imgs: [{
						sprite: e.open ? "img/map/map-building-container-open-floor.svg" : "img/map/map-building-container-floor-01.svg",
						scale: .5,
						alpha: 1,
						tint: e.tint
					}]
				},
				ceiling: {
					scopeIn: [e.open ? D.createAabbExtents(L.create(0, 0), L.create(2.5, 5.75)) : D.createAabbExtents(L.create(0, 2.25), L.create(2.5, 5.5))],
					scopeOut: [e.open ? D.createAabbExtents(L.create(0, 0), L.create(2.5, 11)) : D.createAabbExtents(L.create(0, -.5), L.create(2.5, 8.75))],
					imgs: [{
						sprite: "img/map/" + e.ceilingSprite,
						scale: .5,
						alpha: 1,
						tint: e.tint
					}]
				},
				mapObjects: e.open ? a : t
			}
		}

		function b(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .5
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 2.25)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !0,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				img: {
					sprite: "img/map/map-crate-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_02",
					enter: "none"
				}
			}, e || {})
		}

		function x(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(L.create(0, .15), L.create(2.5, 1)),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "barrelChip",
				explodeParticle: "depositBoxGreyFrag",
				reflectBullets: !0,
				loot: [r("tier_world", 1, 1)],
				lootSpawnOffset: L.create(0, -.75),
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-deposit-box-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function v(e) {
			var t = {
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(e.hinge, e.extents),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 150,
				hitParticle: "whiteChip",
				explodeParticle: "whitePlank",
				reflectBullets: !1,
				door: {
					interactionRad: 1.75,
					canUse: !0,
					openSpeed: 2,
					openOneWay: 0,
					openDelay: 0,
					openOnce: !1,
					autoOpen: !1,
					autoClose: !1,
					autoCloseDelay: 1,
					slideToOpen: !1,
					slideOffset: 3.5,
					spriteAnchor: L.create(.5, 1),
					sound: {
						open: e.soundOpen || "door_open_01",
						close: e.soundClose || "door_close_01",
						change: "",
						error: ""
					}
				},
				loot: [],
				img: {
					sprite: "img/map/map-door-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 14671839,
					zIdx: 15
				},
				sound: {
					bullet: "wall_wood_bullet",
					punch: "wall_wood_bullet",
					explode: "wall_wood_break_01",
					enter: "none"
				}
			};
			return z(E[e.material]), c(t, E[e.material], e || {})
		}

		function k(e) {
			return c(v({
				material: "concrete",
				hinge: L.create(0, 2),
				extents: L.create(.3, 2),
				door: {
					interactionRad: 3,
					openOneWay: !1,
					openSpeed: 7,
					autoOpen: !0,
					autoClose: !0,
					autoCloseDelay: 1,
					slideToOpen: !0,
					slideOffset: 3.75,
					sound: {
						open: "door_open_03",
						close: "door_close_03",
						error: "door_error_01"
					},
					casingImg: {
						sprite: "img/map/map-door-slot-01.svg",
						pos: L.create(-2, 0),
						scale: .5,
						alpha: 1,
						tint: 1316379,
						zIdx: 60
					}
				},
				img: {
					tint: 5373952
				}
			}), e || {})
		}

		function _(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: D.createAabbExtents(L.create(0, .15), L.create(2.5, 1.25)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_container", 1, 1)],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-drawers-01.svg",
					residue: "img/map/map-drawers-res.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_prop_bullet",
					punch: "wood_prop_bullet",
					explode: "drawers_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function w(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(L.create(0, .15), L.create(1.5, .6)),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "barrelChip",
				explodeParticle: "lockerFrag",
				reflectBullets: !0,
				loot: [r("tier_world", 1, 1)],
				lootSpawnOffset: L.create(0, -.5),
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-locker-01.svg",
					residue: "",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function S(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(1, 1)),
				height: .5,
				collidable: !0,
				destructible: !0,
				explosion: "explosion_barrel",
				health: 250,
				hitParticle: "barrelChip",
				explodeParticle: "depositBoxGreyFrag",
				reflectBullets: !0,
				loot: [],
				map: {
					display: !1
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-power-box-01.svg",
					residue: "",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function M(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: D.createCircle(L.create(0, .25), 1.18),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 100,
				reflectBullets: !1,
				hitParticle: "whiteChip",
				explodeParticle: "toiletFrag",
				loot: [r("tier_toilet", 2, 3)],
				map: {
					display: !1,
					color: 11776947,
					scale: 1
				},
				img: {
					sprite: "img/map/map-toilet-01.svg",
					residue: "img/map/map-toilet-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "toilet_porc_bullet",
					punch: "toilet_porc_bullet",
					explode: "toilet_break_01",
					enter: "none"
				},
				terrain: {
					grass: !0,
					beach: !1
				}
			}, e || {})
		}

		function T(e) {
			var t = {
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(L.create(0, 0), L.copy(e.extents)),
				height: 10,
				isWall: !0,
				collidable: !0,
				destructible: !0,
				health: 150,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				map: {
					display: !1
				},
				img: {},
				sound: {
					bullet: "wall_bullet",
					punch: "wall_bullet",
					explode: "barrel_break_01",
					enter: "none"
				}
			};
			return z(E[e.material]), c(t, E[e.material], e || {})
		}

		function P(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
				height: 10,
				collidable: !0,
				destructible: !0,
				isWindow: !0,
				health: 1,
				hitParticle: "glassChip",
				explodeParticle: "windowFrag",
				reflectBullets: !1,
				loot: [],
				destroyType: "house_window_broken_01",
				img: {
					sprite: "img/map/map-building-house-window-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "glass_bullet",
					punch: "glass_bullet",
					explode: "window_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function C(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: D.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
				height: .2,
				collidable: !0,
				destructible: !1,
				health: 100,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				img: {
					sprite: "img/map/map-building-house-window-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 4456448,
					zIdx: 10
				},
				sound: {
					bullet: "wall_wood_bullet",
					punch: "wall_wood_bullet",
					explode: "wall_wood_break_01",
					enter: "none"
				}
			}, e || {})
		}
		var I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			z = a("DlZn"),
			A = a("8iex"),
			D = a("9xSA"),
			O = a("Tf6H"),
			L = a("/2+T"),
			E = {
				metal: {
					destructible: !1,
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				wood: {
					destructible: !0,
					reflectBullets: !1,
					sound: {
						bullet: "wall_wood_bullet",
						punch: "wall_wood_bullet",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				brick: {
					destructible: !1,
					reflectBullets: !1,
					hitParticle: "brickChip",
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				concrete: {
					destructible: !1,
					reflectBullets: !1,
					hitParticle: "barrelChip",
					sound: {
						bullet: "concrete_hit",
						punch: "concrete_hit",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				glass: {
					destructible: !0,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				}
			},
			B = {
				barrel_01: {
					type: "obstacle",
					name: "a barrel",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .6
					},
					collision: D.createCircle(L.create(0, 0), 1.75),
					height: .5,
					collidable: !0,
					destructible: !0,
					explosion: "explosion_barrel",
					health: 150,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !0,
						color: 6447714,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !0
					},
					img: {
						sprite: "img/map/map-barrel-01.svg",
						scale: .4,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "barrel_bullet",
						punch: "barrel_bullet",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				barrel_02: p({
					health: 60
				}),
				barrel_03: p({
					collision: D.createAabbExtents(L.create(0, 0), L.create(1.25, .5)),
					health: 20,
					img: {
						sprite: "img/map/map-barrel-03.svg",
						residue: "img/map/map-barrel-res-03.svg",
						scale: .45
					}
				}),
				barrel_04: p({
					collision: D.createAabbExtents(L.create(0, 0), L.create(1.25, .5)),
					health: 20,
					loot: [r("tier_soviet", 2, 3)],
					img: {
						sprite: "img/map/map-barrel-04.svg",
						residue: "img/map/map-barrel-res-03.svg",
						scale: .45
					}
				}),
				bollard_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: D.createCircle(L.create(0, 0), 1.25),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 300,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !0,
						color: 6310464,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-bollard-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "silo_bullet",
						punch: "silo_bullet",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				bookshelf_01: u({
					img: {
						sprite: "img/map/map-bookshelf-01.svg"
					},
					loot: [r("tier_world", 1, 1)]
				}),
				bookshelf_02: u({
					img: {
						sprite: "img/map/map-bookshelf-02.svg"
					},
					loot: [r("tier_soviet", 2, 3)]
				}),
				bush_01: h({}),
				bush_02: h({
					img: {
						residue: "img/map/map-bush-res-02.svg"
					}
				}),
				bush_03: h({
					img: {
						sprite: "img/map/map-bush-03.svg",
						alpha: 1
					}
				}),
				case_01: g({
					loot: [s("deagle", 1)]
				}),
				case_02: g({
					img: {
						sprite: "img/map/map-case-deagle-02.svg"
					},
					loot: [s("deagle", 1), s("deagle", 1)]
				}),
				case_03: g({
					health: 140,
					img: {
						sprite: "img/map/map-case-hatchet-01.svg",
						residue: "img/map/map-crate-res-02.svg"
					},
					loot: [r("tier_hatchet", 1, 1)]
				}),
				chest_01: f({
					loot: [r("tier_chest", 3, 4), s("outfitRoyalFortune", 1)]
				}),
				chest_02: f({
					img: {
						sprite: "img/map/map-chest-02.svg"
					},
					loot: [r("tier_chest", 2, 2)]
				}),
				control_panel_01: S({
					collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 1.7)),
					button: {
						interactionRad: 1.75,
						useOnce: !0,
						useType: "cell_door_01",
						useDelay: 1.1,
						useDir: L.create(-1, 0),
						useImg: "img/map/map-control-panel-02.svg",
						sound: "cell_control_01"
					},
					img: {
						sprite: "img/map/map-control-panel-01.svg"
					}
				}),
				control_panel_02: S({
					collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 1.7)),
					health: 175,
					img: {
						sprite: "img/map/map-control-panel-02.svg"
					}
				}),
				control_panel_03: S({
					collision: D.createAabbExtents(L.create(0, 0), L.create(1.25, 1.2)),
					health: 150,
					img: {
						sprite: "img/map/map-control-panel-03.svg"
					}
				}),
				crate_01: b(),
				crate_02: b({
					health: 140,
					loot: [r("tier_soviet", 3, 5)],
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-02.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_03: b({
					health: 100,
					collision: D.createAabbExtents(L.create(0, 0), L.create(1.575, 1.575)),
					loot: [r("tier_throwables", 2, 4)],
					map: {
						color: 5066014,
						scale: .875
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-03.svg",
						scale: .35
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_04: b({
					destructible: !1,
					hitParticle: "greenChip",
					loot: [],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-04.svg"
					},
					sound: {
						bullet: "ammo_crate_bullet",
						punch: "ammo_crate_bullet"
					}
				}),
				crate_05: b({
					collision: D.createAabbExtents(L.create(0, 0), L.create(2, 2)),
					destructible: !1,
					hitParticle: "goldChip",
					loot: [],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-05.svg"
					},
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet"
					}
				}),
				crate_06: b({
					collision: D.createAabbExtents(L.create(0, 0), L.create(2.25, 1.1)),
					destructible: !1,
					hitParticle: "greenChip",
					loot: [],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-06.svg"
					},
					sound: {
						bullet: "ammo_crate_bullet",
						punch: "ammo_crate_bullet"
					}
				}),
				crate_07: b({
					health: 140,
					loot: [r("tier_surviv", 2, 3), s("ak47", 1), s("outfitKhaki", 1), s("outfitKhaki", 1), s("outfitKhaki", 1), s("outfitKhaki", 1)],
					img: {
						sprite: "img/map/map-crate-07.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_08: b({
					health: 140,
					loot: [r("tier_surviv", 2, 3)],
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-08.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_09: b({
					health: 140,
					loot: [r("tier_chest", 2, 2), r("tier_conch", 1, 1)],
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-09.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				deposit_box_01: x({
					img: {
						sprite: "img/map/map-deposit-box-01.svg"
					},
					loot: [r("tier_world", 1, 1)]
				}),
				deposit_box_02: x({
					explodeParticle: "depositBoxGoldFrag",
					img: {
						sprite: "img/map/map-deposit-box-02.svg"
					},
					loot: [r("tier_soviet", 2, 3)]
				}),
				drawers_01: _({
					img: {
						sprite: "img/map/map-drawers-01.svg"
					},
					loot: [r("tier_container", 1, 1)]
				}),
				drawers_02: _({
					img: {
						sprite: "img/map/map-drawers-02.svg"
					},
					loot: [r("tier_soviet", 2, 3)]
				}),
				locker_01: w({
					img: {
						sprite: "img/map/map-locker-01.svg"
					},
					loot: [r("tier_world", 1, 1)]
				}),
				locker_02: w({
					img: {
						sprite: "img/map/map-locker-02.svg"
					},
					loot: [r("tier_police", 1, 1)]
				}),
				oven_01: {
					type: "obstacle",
					name: "an oven",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, .15), L.create(1.7, 1.3)),
					height: .5,
					collidable: !0,
					destructible: !0,
					explosion: "explosion_barrel",
					health: 200,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-oven-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "barrel_bullet",
						punch: "barrel_bullet",
						explode: "oven_break_01",
						enter: "none"
					}
				},
				power_box_01: S(),
				refrigerator_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, .15), L.create(1.7, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 100,
					hitParticle: "redChip",
					explodeParticle: "woodPlank",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-refrigerator-01.svg",
						residue: "img/map/map-crate-res-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				sandbags_01: {
					type: "obstacle",
					map: {
						display: !0,
						color: 13278307,
						scale: 1
					},
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .5
					},
					collision: D.createAabbExtents(L.create(0, 0), L.create(3.1, 1.4)),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 150,
					hitParticle: "goldChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !1,
					loot: [],
					img: {
						sprite: "img/map/map-sandbags-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet",
						explode: "crate_break_02",
						enter: "none"
					}
				},
				container_05_collider: T({
					material: "metal",
					extents: L.create(2.75, 6)
				}),
				container_05: {
					type: "building",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .5
					},
					zIdx: 1,
					map: {
						display: !0,
						color: 11485762,
						scale: 1
					},
					terrain: {
						grass: !1,
						beach: !1
					},
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(0, 0))]
						}],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 2.4), L.create(2.5, 5.75))],
						scopeOut: [D.createAabbExtents(L.create(0, 2.4), L.create(2.5, 5.75))],
						imgs: [{
							sprite: "img/map/map-building-container-ceiling-05.svg",
							scale: .5,
							alpha: 1,
							tint: 11485762
						}]
					},
					mapObjects: [{
						type: "container_05_collider",
						pos: L.create(0, 2.4),
						scale: 1,
						ori: 0
					}]
				},
				silo_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: D.createCircle(L.create(0, 0), 7.75),
					height: 10,
					collidable: !0,
					destructible: !1,
					health: 300,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !0,
						color: 4079166,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-silo-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "silo_bullet",
						punch: "silo_bullet",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				stairs_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: D.createAabbExtents(L.create(0, 0), L.create(2.5, 2)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 100,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-stairs-broken-01.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				stand_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, .15), L.create(1.25, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 75,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [r("tier_world", 1, 1)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-stand-01.svg",
						residue: "img/map/map-drawers-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "drawers_break_01",
						enter: "none"
					}
				},
				stone_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1.2,
						destroy: .5
					},
					collision: D.createCircle(L.create(0, 0), 1.6),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 250,
					reflectBullets: !1,
					hitParticle: "rockChip",
					explodeParticle: "rockFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-stone-01.svg",
						residue: "img/map/map-stone-res.svg",
						scale: .4,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "stone_bullet",
						punch: "stone_bullet",
						explode: "stone_break_01",
						enter: "none"
					}
				},
				table_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, 0), L.create(2.5, 2)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 100,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-table-01.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				table_02: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, 0), L.create(4.5, 2.5)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 125,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-table-02.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				toilet_01: M({
					img: {
						sprite: "img/map/map-toilet-01.svg"
					},
					loot: [r("tier_toilet", 2, 3)]
				}),
				toilet_02: M({
					img: {
						sprite: "img/map/map-toilet-02.svg"
					},
					loot: [r("tier_soviet", 3, 4)]
				}),
				toilet_03: M({
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "toiletMetalFrag",
					img: {
						sprite: "img/map/map-toilet-03.svg",
						residue: "img/map/map-toilet-res-02.svg"
					},
					loot: [r("tier_world", 1, 2)],
					sound: {
						bullet: "toilet_metal_bullet",
						punch: "toilet_metal_bullet",
						explode: "toilet_break_02"
					}
				}),
				toilet_04: M({
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "toiletMetalFrag",
					img: {
						sprite: "img/map/map-toilet-04.svg",
						residue: "img/map/map-toilet-res-02.svg"
					},
					loot: [r("tier_soviet", 2, 3)],
					sound: {
						bullet: "toilet_metal_bullet",
						punch: "toilet_metal_bullet",
						explode: "toilet_break_02"
					}
				}),
				tree_01: {
					type: "obstacle",
					scale: {
						createMin: .8,
						createMax: 1,
						destroy: .5
					},
					collision: D.createCircle(L.create(0, 0), 1.55),
					aabb: D.createAabbExtents(L.create(0, 0), L.create(5.75, 5.75)),
					height: 10,
					collidable: !0,
					destructible: !0,
					health: 175,
					hitParticle: "woodChip",
					explodeParticle: "woodLog",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !0,
						color: 4083758,
						scale: 2.5
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-tree-03.svg",
						residue: "img/map/map-tree-res.svg",
						scale: .7,
						alpha: .4,
						tint: 16777215,
						zIdx: 200
					},
					sound: {
						bullet: "tree_bullet",
						punch: "tree_bullet",
						explode: "tree_break_01",
						enter: "none"
					}
				},
				vat_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .9
					},
					collision: D.createCircle(L.create(0, 0), 2),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 250,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !1,
						beach: !1
					},
					img: {
						sprite: "img/map/map-vat-01.svg",
						residue: "img/map/map-vat-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				},
				vat_02: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .95
					},
					collision: D.createCircle(L.create(0, 0), 3.1),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 1e3,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-vat-02.svg",
						residue: "img/map/map-vat-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				},
				vending_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: D.createAabbExtents(L.create(0, .15), L.create(1.7, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 150,
					hitParticle: "blueChip",
					explodeParticle: ["windowFrag", "lockerFrag"],
					reflectBullets: !0,
					loot: [r("tier_vending_soda", 1, 3), s("soda", 1)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-vending-soda-01.svg",
						residue: "img/map/map-vending-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "vending_break_01",
						enter: "none"
					}
				},
				bank_window_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: D.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
					height: 10,
					collidable: !0,
					destructible: !0,
					isWindow: !0,
					health: 75,
					hitParticle: "glassChip",
					explodeParticle: ["windowFrag", "redPlank"],
					reflectBullets: !1,
					loot: [],
					img: {
						sprite: "img/map/map-building-bank-window-01.svg",
						residue: "img/map/map-building-bank-window-res-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_02",
						enter: "none"
					}
				},
				house_door_01: v({
					material: "wood",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2)
				}),
				house_door_02: v({
					material: "metal",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2),
					door: {
						sound: {
							open: "door_open_02",
							close: "door_close_02"
						}
					},
					img: {
						tint: 4934475
					}
				}),
				house_door_03: v({
					material: "wood",
					hinge: L.create(0, 2),
					extents: L.create(.5, 1.75),
					img: {
						sprite: "img/map/map-door-03.svg"
					}
				}),
				cell_door_01: v({
					material: "metal",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2),
					door: {
						canUse: !1,
						openOnce: !0,
						sound: {
							open: "door_open_02",
							close: "door_close_02"
						}
					},
					img: {
						tint: 1776411
					}
				}),
				lab_door_01: k(),
				lab_door_02: k({
					door: {
						openOneWay: !0,
						slideOffset: -3.75,
						casingImg: {
							pos: L.create(6, 0)
						}
					}
				}),
				lab_door_03: k({
					door: {
						openOneWay: !0
					}
				}),
				house_window_01: P(),
				house_window_broken_01: C(),
				lab_window_01: P({
					destroyType: "lab_window_broken_01"
				}),
				lab_window_broken_01: C({
					img: {
						tint: 1316379
					}
				}),
				hedgehog_wall: T({
					material: "metal",
					extents: L.create(3, .5),
					height: .5,
					map: {
						display: !0,
						color: 5854285,
						scale: 1
					}
				}),
				hedgehog_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					floor: {
						surfaces: [{
							type: "grass",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(3, 3))]
						}],
						imgs: [{
							sprite: "img/map/map-hedgehog-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						imgs: []
					},
					mapObjects: [{
						type: "hedgehog_wall",
						pos: L.create(0, 0),
						scale: 1,
						ori: 1
					}, {
						type: "hedgehog_wall",
						pos: L.create(0, 0),
						scale: 1,
						ori: 0
					}]
				},
				warehouse_wall_side: T({
					material: "metal",
					extents: L.create(25, .6)
				}),
				warehouse_wall_edge: T({
					material: "metal",
					extents: L.create(.6, 3.2)
				}),
				warehouse_01: function(e) {
					return c({
						type: "building",
						map: {
							display: !0,
							shapes: [{
								collider: D.createAabbExtents(L.create(27, 0), L.create(3, 12.25)),
								color: 10066329
							}, {
								collider: D.createAabbExtents(L.create(-27, 0), L.create(3, 12.25)),
								color: 10066329
							}, {
								collider: D.createAabbExtents(L.create(0, 0), L.create(24.5, 12.25)),
								color: 5915450
							}]
						},
						zIdx: 1,
						terrain: {
							grass: !0,
							beach: !1
						},
						floor: {
							surfaces: [{
								type: "warehouse",
								collision: [D.createAabbExtents(L.create(0, 0), L.create(32, 12.5))]
							}],
							imgs: [{
								sprite: "img/map/map-building-warehouse-floor-01.svg",
								scale: .5,
								alpha: 1,
								tint: 16777215
							}]
						},
						ceiling: {
							scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(24.5, 12.25))],
							scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(32, 12.5))],
							vision: {
								dist: 8,
								width: 5
							},
							imgs: [{
								sprite: "",
								scale: .5,
								alpha: 1,
								tint: 16777215
							}]
						},
						mapObjects: [{
							type: "warehouse_wall_side",
							pos: L.create(0, 11.9),
							scale: 1,
							ori: 0
						}, {
							type: "warehouse_wall_edge",
							pos: L.create(-24.4, 8.2),
							scale: 1,
							ori: 0
						}, {
							type: "warehouse_wall_edge",
							pos: L.create(24.4, 8.2),
							scale: 1,
							ori: 0
						}, {
							type: "warehouse_wall_side",
							pos: L.create(0, -11.9),
							scale: 1,
							ori: 0
						}, {
							type: "warehouse_wall_edge",
							pos: L.create(-24.4, -8.2),
							scale: 1,
							ori: 0
						}, {
							type: "warehouse_wall_edge",
							pos: L.create(24.4, -8.2),
							scale: 1,
							ori: 0
						}, {
							type: e.topLeftObs,
							pos: L.create(-21.25, 8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_04",
							pos: L.create(-16.25, 8.75),
							scale: 1,
							ori: 1
						}, {
							type: "crate_01",
							pos: L.create(-21.25, -8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "barrel_01",
							pos: L.create(-16.5, -8.75),
							scale: .9,
							ori: 0
						}, {
							type: e.topRightObs,
							pos: L.create(21.25, 8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "barrel_01",
							pos: L.create(16.5, 8.75),
							scale: .9,
							ori: 0
						}, {
							type: "crate_04",
							pos: L.create(16.25, -8.75),
							scale: 1,
							ori: 1
						}, {
							type: e.botRightObs,
							pos: L.create(21.25, -8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: m({
								crate_02: 1,
								crate_01: 3
							}),
							pos: L.create(0, 0),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_01",
							pos: L.create(5, 0),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_01",
							pos: L.create(-5, 0),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_04",
							pos: L.create(0, 5),
							scale: 1,
							ori: 0
						}, {
							type: "crate_04",
							pos: L.create(0, -5),
							scale: 1,
							ori: 0
						}]
					}, e || {})
				}({
					topLeftObs: "crate_01",
					topRightObs: "crate_01",
					botRightObs: "crate_01"
				}),
				warehouse_02: function(e) {
					return c({
						type: "building",
						map: {
							display: !0,
							shapes: [{
								collider: D.createAabbExtents(L.create(25, 0), L.create(3, 12.25)),
								color: 10066329
							}, {
								collider: D.createAabbExtents(L.create(-25, 0), L.create(3, 12.25)),
								color: 10066329
							}, {
								collider: D.createAabbExtents(L.create(0, 0), L.create(22.5, 12.25)),
								color: 2240064
							}]
						},
						zIdx: 1,
						terrain: {
							grass: !0,
							beach: !1
						},
						floor: {
							surfaces: [{
								type: "warehouse",
								collision: [D.createAabbExtents(L.create(0, 0), L.create(27.5, 12.5))]
							}],
							imgs: [{
								sprite: "img/map/map-building-warehouse-floor-02.svg",
								scale: .5,
								alpha: 1,
								tint: 16777215
							}]
						},
						ceiling: {
							scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(22, 12.25))],
							scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(27.5, 12.5))],
							vision: {
								dist: 8,
								width: 5
							},
							imgs: [{
								sprite: "",
								scale: .5,
								alpha: 1,
								tint: 16777215
							}]
						},
						mapObjects: [{
							type: "metal_wall_ext_43",
							pos: L.create(0, 12),
							scale: 1,
							ori: 1
						}, {
							type: "metal_wall_ext_8",
							pos: L.create(-21.9, 8.5),
							scale: 1,
							ori: 0
						}, {
							type: "metal_wall_ext_8",
							pos: L.create(21.9, 8.5),
							scale: 1,
							ori: 0
						}, {
							type: "metal_wall_ext_43",
							pos: L.create(0, -12),
							scale: 1,
							ori: 1
						}, {
							type: "metal_wall_ext_8",
							pos: L.create(-21.9, -8.5),
							scale: 1,
							ori: 0
						}, {
							type: "metal_wall_ext_8",
							pos: L.create(21.9, -8.5),
							scale: 1,
							ori: 0
						}, {
							type: "crate_01",
							pos: L.create(-18.75, 8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "barrel_01",
							pos: L.create(-14, 8.75),
							scale: .9,
							ori: 0
						}, {
							type: "crate_06",
							pos: L.create(-18.75, -6),
							scale: 1,
							ori: 0
						}, {
							type: m({
								loot_tier_1: 1,
								"": 1
							}),
							pos: L.create(-19.5, -9.5),
							scale: 1,
							ori: 0
						}, {
							type: "crate_06",
							pos: L.create(18.75, 6),
							scale: 1,
							ori: 0
						}, {
							type: m({
								loot_tier_1: 1,
								"": 1
							}),
							pos: L.create(19.5, 9.5),
							scale: 1,
							ori: 0
						}, {
							type: "crate_01",
							pos: L.create(18.75, -8.75),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "barrel_01",
							pos: L.create(14, -8.75),
							scale: .9,
							ori: 0
						}, {
							type: m({
								crate_08: 24,
								crate_09: 1
							}),
							pos: L.create(0, 0),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_01",
							pos: L.create(0, 5),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_01",
							pos: L.create(0, -5),
							scale: 1,
							ori: 0,
							inheritOri: !1
						}, {
							type: "crate_06",
							pos: L.create(4, -5),
							scale: 1,
							ori: 1
						}, {
							type: "crate_06",
							pos: L.create(-4, 5),
							scale: 1,
							ori: 1
						}, {
							type: "barrel_01",
							pos: L.create(4.5, 0),
							scale: .9,
							ori: 0,
							inheritOri: !1
						}, {
							type: "barrel_01",
							pos: L.create(-4.5, 0),
							scale: .9,
							ori: 0,
							inheritOri: !1
						}]
					}, e || {})
				}({}),
				warehouse_complex_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(26, 70.5), L.create(47, 7.5)),
							color: 5855577
						}, {
							collider: D.createAabbExtents(L.create(15.5, 52.5), L.create(57.5, 10.5)),
							color: 5855577
						}, {
							collider: D.createAabbExtents(L.create(33, 11), L.create(75, 31)),
							color: 5855577
						}, {
							collider: D.createAabbExtents(L.create(5, -30), L.create(47, 10)),
							color: 5855577
						}, {
							collider: D.createAabbExtents(L.create(-39.75, 11.25), L.create(2, 51)),
							color: 16109568
						}, {
							collider: D.createCircle(L.create(-39, 55), 1.25),
							color: 6310464
						}, {
							collider: D.createCircle(L.create(-39, 20.5), 1.25),
							color: 6310464
						}, {
							collider: D.createCircle(L.create(-39, 2), 1.25),
							color: 6310464
						}, {
							collider: D.createCircle(L.create(-39, -31.5), 1.25),
							color: 6310464
						}, {
							collider: D.createAabbExtents(L.create(-28, -30), L.create(2, 2)),
							color: 6697728
						}, {
							collider: D.createAabbExtents(L.create(-23, -33), L.create(2, 2)),
							color: 6697728
						}, {
							collider: D.createAabbExtents(L.create(7, 70), L.create(2, 2)),
							color: 6697728
						}, {
							collider: D.createAabbExtents(L.create(12, 72), L.create(2, 2)),
							color: 6697728
						}, {
							collider: D.createCircle(L.create(-26.5, 54.75), 1.75),
							color: 8026746
						}, {
							collider: D.createCircle(L.create(-23.5, 57), 1.75),
							color: 8026746
						}, {
							collider: D.createCircle(L.create(84, -15.5), 1.75),
							color: 8026746
						}, {
							collider: D.createCircle(L.create(40, -35), 1.5),
							color: 8026746
						}, {
							collider: D.createCircle(L.create(65, 61), 1.5),
							color: 8026746
						}, {
							collider: D.createAabbExtents(L.create(44.5, -25), L.create(3.1, 1.4)),
							color: 13278307
						}, {
							collider: D.createAabbExtents(L.create(58, 47.5), L.create(1.4, 3.1)),
							color: 13278307
						}]
					},
					terrain: {
						grass: !0,
						beach: !1,
						waterEdge: L.create(-72, 0)
					},
					mapObstacleBounds: [D.createAabbExtents(L.create(26, 70.5), L.create(47, 7.5)), D.createAabbExtents(L.create(15.5, 52.5), L.create(57.5, 10.5)), D.createAabbExtents(L.create(33, 11), L.create(75, 31)), D.createAabbExtents(L.create(5, -30), L.create(47, 10))],
					floor: {
						surfaces: [{
							type: "asphalt",
							collision: [D.createAabbExtents(L.create(26, 70.5), L.create(47, 7.5)), D.createAabbExtents(L.create(15.5, 52.5), L.create(57.5, 10.5)), D.createAabbExtents(L.create(33, 11), L.create(75, 31)), D.createAabbExtents(L.create(5, -30), L.create(47, 10))]
						}],
						imgs: [{
							sprite: "img/map/map-complex-warehouse-floor.svg",
							pos: L.create(33, 19),
							scale: 1,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(24.5, 12.25))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(32, 12.5))],
						vision: {
							dist: 8,
							width: 5
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "warehouse_02",
						pos: L.create(5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_02",
						pos: L.create(70, 0),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_02",
						pos: L.create(18, 55),
						scale: 1,
						ori: 0
					}, {
						type: "bollard_01",
						pos: L.create(-39, 55),
						scale: 1,
						ori: 2
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_06: .12
						}),
						pos: L.create(-37.5, 38),
						scale: 1,
						ori: 0
					}, {
						type: "bollard_01",
						pos: L.create(-39, 20.5),
						scale: 1,
						ori: 2
					}, {
						type: "bollard_01",
						pos: L.create(-39, 2),
						scale: 1,
						ori: 2
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_06: .12
						}),
						pos: L.create(-37.5, -14),
						scale: 1,
						ori: 2
					}, {
						type: "bollard_01",
						pos: L.create(-39, -31.5),
						scale: 1,
						ori: 2
					}, {
						type: "crate_01",
						pos: L.create(-28, -30),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-23, -33),
						scale: 1,
						ori: 0
					}, {
						type: "container_04",
						pos: L.create(-11.5, -26.575),
						scale: 1,
						ori: 0
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(-6, -29),
						scale: 1,
						ori: 0
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(9.5, -29),
						scale: 1,
						ori: 0
					}, {
						type: "container_04",
						pos: L.create(15, -26.575),
						scale: 1,
						ori: 0
					}, {
						type: "shack_02",
						pos: L.create(37, -30),
						scale: 1,
						ori: 0
					}, {
						type: "sandbags_01",
						pos: L.create(44.5, -25),
						scale: 1,
						ori: 1
					}, {
						type: "barrel_01",
						pos: L.create(84, -15.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(-3, 22),
						scale: 1,
						ori: 1
					}, {
						type: "container_04",
						pos: L.create(-5.425, 27.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(-3, 33),
						scale: 1,
						ori: 1
					}, {
						type: "container_04",
						pos: L.create(28, 22),
						scale: 1,
						ori: 1
					}, {
						type: "container_04",
						pos: L.create(28, 27.5),
						scale: 1,
						ori: 1
					}, {
						type: "container_04",
						pos: L.create(28, 33),
						scale: 1,
						ori: 1
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(53, 22),
						scale: 1,
						ori: 3
					}, {
						type: "container_04",
						pos: L.create(55.425, 27.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(53, 33),
						scale: 1,
						ori: 3
					}, {
						type: "container_04",
						pos: L.create(84, 22),
						scale: 1,
						ori: 3
					}, {
						type: m({
							container_01: 1,
							container_02: 1,
							container_03: 1,
							container_05: 2,
							container_06: .12,
							"": .75
						}),
						pos: L.create(86.425, 27.5),
						scale: 1,
						ori: 1
					}, {
						type: "barrel_01",
						pos: L.create(-26.5, 54.75),
						scale: 1,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(-23.5, 57),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(7, 70),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(12, 72),
						scale: 1,
						ori: 0
					}, {
						type: "shack_02",
						pos: L.create(60, 58),
						scale: 1,
						ori: 1
					}, {
						type: "sandbags_01",
						pos: L.create(58, 47.5),
						scale: 1,
						ori: 1
					}]
				},
				shack_wall_top: T({
					material: "wood",
					extents: L.create(5.6, .35),
					height: 10,
					img: d("img/map/map-wall-shack-top.svg")
				}),
				shack_wall_side_left: T({
					material: "wood",
					extents: L.create(.35, 3.43),
					height: 10,
					img: d("img/map/map-wall-shack-left.svg")
				}),
				shack_wall_side_right: T({
					material: "wood",
					extents: L.create(.35, 3.8),
					height: 10,
					img: d("img/map/map-wall-shack-right.svg")
				}),
				shack_wall_bot: T({
					material: "wood",
					extents: L.create(3.75, .35),
					height: 10,
					img: d("img/map/map-wall-shack-bot.svg")
				}),
				shack_01: {
					type: "building",
					map: {
						display: !0,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					floor: {
						surfaces: [{
							type: "shack",
							collision: [D.createAabbExtents(L.create(0, .9), L.create(5.6, 3.5)), D.createAabbExtents(L.create(3.75, -4), L.create(2.25, 1.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-shack-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, .9), L.create(5.6, 3.5))],
						scopeOut: [D.createAabbExtents(L.create(0, .8), L.create(5.9, 3.8))],
						vision: {
							width: 4
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						destroy: {
							wallCount: 2,
							particle: "shackFrag",
							particleCount: 25,
							residue: "img/map/map-shack-res-01.svg"
						}
					},
					mapObjects: [{
						type: "shack_wall_bot",
						pos: L.create(-1.49, -2.4),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_side_left",
						pos: L.create(-5.55, .69),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_top",
						pos: L.create(-.3, 4.33),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_side_right",
						pos: L.create(5.55, .95),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(7.9, 2.85),
						scale: .8,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(7.45, -.9),
						scale: .85,
						ori: 0
					}, {
						type: m({
							loot_tier_2: 1
						}),
						pos: L.create(-2, .8),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(2, .8),
						scale: 1,
						ori: 0
					}]
				},
				shack_02: {
					type: "building",
					map: {
						display: !0,
						color: 4014894,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "shack",
							collision: [D.createAabbExtents(L.create(0, 1), L.create(5, 4)), D.createAabbExtents(L.create(3.75, -4), L.create(2.25, 1.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-shack-floor-02.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 1), L.create(5, 4))],
						scopeOut: [D.createAabbExtents(L.create(0, 1), L.create(0, 0))],
						vision: {
							width: 4
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						destroy: {
							wallCount: 2,
							particle: "shackFrag",
							particleCount: 25,
							residue: "img/map/map-shack-res-02.svg"
						}
					},
					mapObjects: [{
						type: "barn_wall_int_2",
						pos: L.create(-3, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_2",
						pos: L.create(3, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_8",
						pos: L.create(-4.5, 1),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_8",
						pos: L.create(4.5, 1),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_8",
						pos: L.create(0, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barrel_01",
						pos: L.create(4, -4.5),
						scale: .8,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(0, 1),
						scale: 1,
						ori: 0
					}]
				},
				outhouse_wall_top: T({
					material: "wood",
					extents: L.create(3.2, .35),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-top.svg")
				}),
				outhouse_wall_side: T({
					material: "wood",
					extents: L.create(.35, 3.1),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-side.svg")
				}),
				outhouse_wall_bot: T({
					material: "wood",
					extents: L.create(1.15, .35),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-bot.svg")
				}),
				outhouse_01: {
					type: "building",
					map: {
						display: !0,
						color: 8145976,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "shack",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(3.8, 5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-outhouse-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 1.45), L.create(3.6, 3.2))],
						scopeOut: [D.createAabbExtents(L.create(0, 1.4), L.create(3.8, 3.4))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						destroy: {
							wallCount: 2,
							particleCount: 15,
							particle: "outhouseFrag",
							residue: "img/map/map-outhouse-res.svg"
						}
					},
					mapObjects: [{
						type: "outhouse_wall_top",
						pos: L.create(0, 4.46),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_side",
						pos: L.create(3.4, 1.73),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_side",
						pos: L.create(-3.4, 1.73),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_bot",
						pos: L.create(-2.65, -1.52),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_bot",
						pos: L.create(2.65, -1.52),
						scale: 1,
						ori: 0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(0, 2),
						scale: .95,
						ori: 0
					}]
				},
				brick_wall_ext_1: T({
					material: "brick",
					extents: L.create(.5, .5)
				}),
				brick_wall_ext_2: T({
					material: "brick",
					extents: L.create(.5, 1)
				}),
				brick_wall_ext_3: T({
					material: "brick",
					extents: L.create(.5, 1.5)
				}),
				brick_wall_ext_4: T({
					material: "brick",
					extents: L.create(.5, 2)
				}),
				brick_wall_ext_5: T({
					material: "brick",
					extents: L.create(.5, 2.5)
				}),
				brick_wall_ext_6: T({
					material: "brick",
					extents: L.create(.5, 3)
				}),
				brick_wall_ext_7: T({
					material: "brick",
					extents: L.create(.5, 3.5)
				}),
				brick_wall_ext_8: T({
					material: "brick",
					extents: L.create(.5, 4)
				}),
				brick_wall_ext_9: T({
					material: "brick",
					extents: L.create(.5, 4.5)
				}),
				brick_wall_ext_10: T({
					material: "brick",
					extents: L.create(.5, 5)
				}),
				brick_wall_ext_11: T({
					material: "brick",
					extents: L.create(.5, 5.5)
				}),
				brick_wall_ext_12: T({
					material: "brick",
					extents: L.create(.5, 6)
				}),
				brick_wall_ext_13: T({
					material: "brick",
					extents: L.create(.5, 6.5)
				}),
				brick_wall_ext_14: T({
					material: "brick",
					extents: L.create(.5, 7)
				}),
				brick_wall_ext_16: T({
					material: "brick",
					extents: L.create(.5, 8)
				}),
				brick_wall_ext_17: T({
					material: "brick",
					extents: L.create(.5, 8.5)
				}),
				brick_wall_ext_18: T({
					material: "brick",
					extents: L.create(.5, 9)
				}),
				brick_wall_ext_19: T({
					material: "brick",
					extents: L.create(.5, 9.5)
				}),
				brick_wall_ext_20: T({
					material: "brick",
					extents: L.create(.5, 10)
				}),
				brick_wall_ext_21: T({
					material: "brick",
					extents: L.create(.5, 10.5)
				}),
				brick_wall_ext_23: T({
					material: "brick",
					extents: L.create(.5, 11.5)
				}),
				brick_wall_ext_33: T({
					material: "brick",
					extents: L.create(.5, 16.5)
				}),
				brick_wall_ext_41: T({
					material: "brick",
					extents: L.create(.5, 20.5)
				}),
				brick_wall_ext_short_7: T({
					material: "brick",
					extents: L.create(.5, 3.5),
					height: .5
				}),
				brick_wall_ext_thicker_5: T({
					material: "brick",
					extents: L.create(1.5, 2.5)
				}),
				brick_wall_ext_thicker_6: T({
					material: "brick",
					extents: L.create(1.5, 3)
				}),
				brick_wall_ext_thicker_7: T({
					material: "brick",
					extents: L.create(1.5, 3.5)
				}),
				brick_wall_ext_thicker_8: T({
					material: "brick",
					extents: L.create(1.5, 4)
				}),
				brick_wall_ext_thicker_9: T({
					material: "brick",
					extents: L.create(1.5, 4.5)
				}),
				brick_wall_ext_thicker_15: T({
					material: "brick",
					extents: L.create(1.5, 7.5)
				}),
				brick_wall_ext_thicker_16: T({
					material: "brick",
					extents: L.create(1.5, 8)
				}),
				brick_wall_ext_thicker_24: T({
					material: "brick",
					extents: L.create(1.5, 12)
				}),
				metal_wall_ext_3: T({
					material: "metal",
					extents: L.create(.5, 1.5)
				}),
				metal_wall_ext_4: T({
					material: "metal",
					extents: L.create(.5, 2)
				}),
				metal_wall_ext_6: T({
					material: "metal",
					extents: L.create(.5, 3)
				}),
				metal_wall_ext_7: T({
					material: "metal",
					extents: L.create(.5, 3.5)
				}),
				metal_wall_ext_8: T({
					material: "metal",
					extents: L.create(.5, 4)
				}),
				metal_wall_ext_9: T({
					material: "metal",
					extents: L.create(.5, 4.5)
				}),
				metal_wall_ext_10: T({
					material: "metal",
					extents: L.create(.5, 5)
				}),
				metal_wall_ext_12: T({
					material: "metal",
					extents: L.create(.5, 6)
				}),
				metal_wall_ext_18: T({
					material: "metal",
					extents: L.create(.5, 9)
				}),
				metal_wall_ext_43: T({
					material: "metal",
					extents: L.create(.5, 21.5)
				}),
				metal_wall_ext_short_6: T({
					material: "metal",
					extents: L.create(.5, 3),
					height: .5
				}),
				metal_wall_ext_short_7: T({
					material: "metal",
					extents: L.create(.5, 3.5),
					height: .5
				}),
				metal_wall_ext_thick_5: T({
					material: "metal",
					extents: L.create(1, 2.5)
				}),
				metal_wall_ext_thick_20: T({
					material: "metal",
					extents: L.create(1, 10)
				}),
				metal_wall_ext_thicker_4: T({
					material: "metal",
					extents: L.create(1.5, 2)
				}),
				metal_wall_ext_thicker_5: T({
					material: "metal",
					extents: L.create(1.5, 2.5)
				}),
				metal_wall_ext_thicker_6: T({
					material: "metal",
					extents: L.create(1.5, 3)
				}),
				metal_wall_ext_thicker_7: T({
					material: "metal",
					extents: L.create(1.5, 3.5)
				}),
				metal_wall_ext_thicker_8: T({
					material: "metal",
					extents: L.create(1.5, 4)
				}),
				metal_wall_ext_thicker_9: T({
					material: "metal",
					extents: L.create(1.5, 4.5)
				}),
				metal_wall_ext_thicker_10: T({
					material: "metal",
					extents: L.create(1.5, 5)
				}),
				metal_wall_ext_thicker_11: T({
					material: "metal",
					extents: L.create(1.5, 5.5)
				}),
				metal_wall_ext_thicker_13: T({
					material: "metal",
					extents: L.create(1.5, 6.5)
				}),
				metal_wall_ext_thicker_14: T({
					material: "metal",
					extents: L.create(1.5, 7)
				}),
				metal_wall_ext_thicker_15: T({
					material: "metal",
					extents: L.create(1.5, 7.5)
				}),
				metal_wall_ext_thicker_16: T({
					material: "metal",
					extents: L.create(1.5, 8)
				}),
				metal_wall_ext_thicker_17: T({
					material: "metal",
					extents: L.create(1.5, 8.5)
				}),
				metal_wall_ext_thicker_18: T({
					material: "metal",
					extents: L.create(1.5, 9)
				}),
				metal_wall_ext_thicker_19: T({
					material: "metal",
					extents: L.create(1.5, 9.5)
				}),
				metal_wall_ext_thicker_20: T({
					material: "metal",
					extents: L.create(1.5, 10)
				}),
				metal_wall_ext_thicker_21: T({
					material: "metal",
					extents: L.create(1.5, 10.5)
				}),
				metal_wall_ext_thicker_23: T({
					material: "metal",
					extents: L.create(1.5, 11.5)
				}),
				metal_wall_ext_thicker_24: T({
					material: "metal",
					extents: L.create(1.5, 12)
				}),
				metal_wall_ext_thicker_29: T({
					material: "metal",
					extents: L.create(1.5, 14.5)
				}),
				metal_wall_ext_thicker_42: T({
					material: "metal",
					extents: L.create(1.5, 21)
				}),
				glass_wall_10: T({
					material: "glass",
					extents: L.create(.5, 5),
					health: 50,
					img: d("img/map/map-wall-glass-10.svg")
				}),
				glass_wall_12: T({
					material: "glass",
					extents: L.create(.5, 6),
					health: 50,
					img: d("img/map/map-wall-glass-12.svg")
				}),
				concrete_wall_ext_2: T({
					material: "concrete",
					extents: L.create(.5, 1)
				}),
				concrete_wall_ext_6: T({
					material: "concrete",
					extents: L.create(.5, 3)
				}),
				concrete_wall_ext_7: T({
					material: "concrete",
					extents: L.create(.5, 3.5)
				}),
				concrete_wall_ext_8: T({
					material: "concrete",
					extents: L.create(.5, 4)
				}),
				concrete_wall_ext_11: T({
					material: "concrete",
					extents: L.create(.5, 5.5)
				}),
				concrete_wall_ext_13: T({
					material: "concrete",
					extents: L.create(.5, 6.5)
				}),
				concrete_wall_ext_17: T({
					material: "concrete",
					extents: L.create(.5, 8.5)
				}),
				panicroom_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(4.5, 6))]
						}],
						imgs: [{
							sprite: "img/map/map-building-panicroom-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(4.5, 6))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(4.5, 6))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_12",
						pos: L.create(-4, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_3",
						pos: L.create(-2, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_7",
						pos: L.create(0, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_12",
						pos: L.create(4, 0),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_2",
						pos: L.create(0, -.05),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(0, .05),
						scale: 1,
						ori: 0
					}]
				},
				barn_wall_int_2: T({
					material: "wood",
					extents: L.create(.5, 1),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-02-rounded.svg", 7173701)
				}),
				barn_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-04-rounded.svg", 7173701)
				}),
				barn_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-05-rounded.svg", 7173701)
				}),
				barn_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-06-rounded.svg", 7173701)
				}),
				barn_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-07-rounded.svg", 7173701)
				}),
				barn_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-08-rounded.svg", 7173701)
				}),
				barn_wall_int_11: T({
					material: "wood",
					extents: L.create(.5, 5.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-11-rounded.svg", 7173701)
				}),
				barn_wall_int_13: T({
					material: "wood",
					extents: L.create(.5, 6.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-13-rounded.svg", 7173701)
				}),
				barn_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-column-01.svg", 2764060)
				}),
				barn_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(0, 12), L.create(5, 2)),
							color: 12300935
						}, {
							collider: D.createAabbExtents(L.create(0, -2), L.create(24.5, 12.8)),
							color: 3816739
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "house",
							collision: [D.createAabbExtents(L.create(0, -2), L.create(25, 13.2)), D.createAabbExtents(L.create(0, 12), L.create(5.5, 2.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-barn-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, -2), L.create(24.5, 12.8)), D.createAabbExtents(L.create(0, 12), L.create(5.5, 2.5))],
						scopeOut: [D.createAabbExtents(L.create(0, -14.5), L.create(5.5, 4)), D.createAabbExtents(L.create(0, 14.5), L.create(5.5, 4))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_4",
						pos: L.create(-24.5, 9),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-22.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_12",
						pos: L.create(-24.5, -2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-24.5, -13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-22.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-24.75, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-24.75, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-19.5, 10.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-19.5, -14.75),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(-10, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(10, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(-10, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-5.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(5.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-3.5, 14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(3.5, 14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(9.5, -14.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(2, 14.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-2, -14.75),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(24.5, 9),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(22.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(17.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(24.5, -5.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_1",
						pos: L.create(23.5, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(19.5, 10.75),
						scale: 1,
						ori: 1
					}, {
						type: "panicroom_01",
						pos: L.create(19.5, -8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_wall_int_6",
						pos: L.create(-21, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_6",
						pos: L.create(-21, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_5",
						pos: L.create(-11.5, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_2",
						pos: L.create(-13, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_7",
						pos: L.create(-6.5, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_8",
						pos: L.create(-11.5, -10),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_8",
						pos: L.create(-7.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_5",
						pos: L.create(-3.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_7",
						pos: L.create(10.5, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_5",
						pos: L.create(14.5, 7.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_13",
						pos: L.create(14.5, -7.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_4",
						pos: L.create(17, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-18, -4.5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-18, .5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-3.5, -5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(14.5, 1),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_02",
						pos: L.create(23, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_column_1",
						pos: L.create(-8, 1),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_column_1",
						pos: L.create(-11, -5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_column_1",
						pos: L.create(15, 0),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(-7.5, -12),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-12.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-5.5, 7.25),
						scale: 1,
						ori: 1
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-13.5, -9.5),
						scale: 1,
						ori: 3
					}, {
						type: "stand_01",
						pos: L.create(16.5, 8.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(3.5, 12.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "table_01",
						pos: L.create(8, -8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "oven_01",
						pos: L.create(12.25, -1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "refrigerator_01",
						pos: L.create(8.75, -1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-22, -2),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(12, 8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(-19, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(-19, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_1",
						pos: L.create(0, 5.5),
						scale: 1,
						ori: 0
					}]
				},
				bank_wall_int_3: T({
					material: "wood",
					extents: L.create(.5, 1.5),
					img: d("img/map/map-wall-03-rounded.svg", 7951934)
				}),
				bank_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					img: d("img/map/map-wall-04-rounded.svg", 7951934)
				}),
				bank_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					img: d("img/map/map-wall-05-rounded.svg", 7951934)
				}),
				bank_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					img: d("img/map/map-wall-08-rounded.svg", 7951934)
				}),
				bank_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(-16, 7), L.create(10.75, 11)),
							color: 7820585
						}, {
							collider: D.createAabbExtents(L.create(6, 0), L.create(11.5, 18.25)),
							color: 9989427
						}, {
							collider: D.createAabbExtents(L.create(22, 4), L.create(4.5, 7.5)),
							color: 7820585
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [D.createAabbExtents(L.create(6, -1), L.create(11.25, 18.25)), D.createAabbExtents(L.create(21.5, 4), L.create(4.75, 7.25))]
						}],
						imgs: [{
							sprite: "img/map/map-building-bank-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(6, -1), L.create(11.25, 18.25)), D.createAabbExtents(L.create(21.5, 4), L.create(4.75, 7.25)), D.createAabbExtents(L.create(-16, 6), L.create(10.25, 11))],
						scopeOut: [D.createAabbExtents(L.create(6, 1.25), L.create(15.25, 20))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_23",
						pos: L.create(-14, 17),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_23",
						pos: L.create(-25.9, 6),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(-15.5, -5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-5, -7),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-5, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-2.5, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(6, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(14.5, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(17, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(17, -6),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(1, -19.25),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(11, -19.25),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-5.25, -13.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(17.25, -13.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(22, -3),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(26, 4),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(22, 11),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(17, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(14.5, 17),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(4.5, 17),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-1, 17.25),
						scale: 1,
						ori: 1
					}, {
						type: "vault_01",
						pos: L.create(-12, 6),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(-2.5, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(1, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_3",
						pos: L.create(4, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_4",
						pos: L.create(6, -3.5),
						scale: 1,
						ori: 0
					}, {
						type: "bank_window_01",
						pos: L.create(6, 0),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(6, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(8.5, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(12, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_3",
						pos: L.create(15, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_5",
						pos: L.create(17, 4),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_8",
						pos: L.create(21.5, 4),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(17, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(17, 10.5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(12.5, 17.25),
						scale: 1,
						ori: 1
					}, {
						type: "vending_01",
						pos: L.create(4.5, -16.9),
						scale: 1,
						ori: 2
					}, {
						type: "stand_01",
						pos: L.create(7.65, -17),
						scale: 1,
						ori: 2
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(23.5, .5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(23.5, 7.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(15, 15),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-2.5, -16.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(14.5, -16.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_01",
						pos: L.create(19.75, 13.75),
						scale: .9,
						ori: 0,
						inheritOri: !1
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(12, 0),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(1, 0),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-16.5, -12.5),
						scale: 1.1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-7.5, -7.25),
						scale: .85,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(21, -7),
						scale: .55,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(21, -16.25),
						scale: .55,
						ori: 0,
						inheritOri: !0
					}]
				},
				vault_door_main: v({
					material: "metal",
					hinge: L.create(1, 3.5),
					extents: L.create(1, 3.5),
					img: {
						sprite: "img/map/map-door-02.svg"
					},
					door: {
						interactionRad: 2.5,
						openSpeed: .23,
						openOneWay: -1,
						openDelay: 4.1,
						openOnce: !0,
						spriteAnchor: L.create(.2, 1),
						sound: {
							open: "none",
							close: "none",
							change: "vault_change_01"
						}
					}
				}),
				vault_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(-3.5, 0), L.create(10, 10.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-vault-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(-3.5, 0), L.create(9.25, 10.5))],
						scopeOut: [D.createAabbExtents(L.create(-3.5, 0), L.create(10, 10.5))],
						vision: {
							dist: 7,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thick_20",
						pos: L.create(-12.5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thick_20",
						pos: L.create(-3.5, -9.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thick_20",
						pos: L.create(-3.5, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thick_5",
						pos: L.create(5.5, -6),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thick_5",
						pos: L.create(5.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "vault_door_main",
						pos: L.create(6.5, 3.5),
						scale: 1,
						ori: 2
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-12.3, 5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-12.3, -5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-8, 9.3),
						scale: 1,
						ori: 0
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-8, -9.3),
						scale: 1,
						ori: 2
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(1, 9.3),
						scale: 1,
						ori: 0
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(1, -9.3),
						scale: 1,
						ori: 2
					}, {
						type: "crate_05",
						pos: L.create(-3.5, 6.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_05",
						pos: L.create(-3.5, -6.5),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_vault_floor: 1
						}),
						pos: L.create(-3.5, 0),
						scale: 1,
						ori: 0
					}]
				},
				police_wall_int_2: T({
					material: "wood",
					extents: L.create(.5, 1),
					img: d("img/map/map-wall-02-rounded.svg", 1777447)
				}),
				police_wall_int_3: T({
					material: "wood",
					extents: L.create(.5, 1.5),
					img: d("img/map/map-wall-03-rounded.svg", 1777447)
				}),
				police_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					img: d("img/map/map-wall-04-rounded.svg", 1777447)
				}),
				police_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					img: d("img/map/map-wall-06-rounded.svg", 1777447)
				}),
				police_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					img: d("img/map/map-wall-07-rounded.svg", 1777447)
				}),
				police_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					img: d("img/map/map-wall-08-rounded.svg", 1777447)
				}),
				police_wall_int_10: T({
					material: "wood",
					extents: L.create(.5, 5),
					img: d("img/map/map-wall-10-rounded.svg", 1777447)
				}),
				police_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(-21, -8), L.create(21.25, 14)),
							color: 5855577
						}, {
							collider: D.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)),
							color: 3355970
						}, {
							collider: D.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)),
							color: 4278620
						}, {
							collider: D.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)),
							color: 3355970
						}, {
							collider: D.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5)),
							color: 3355970
						}, {
							collider: D.createAabbExtents(L.create(-3.5, 2.5), L.create(2.25, 2.25)),
							color: 6310464
						}, {
							collider: D.createCircle(L.create(-30.5, -18), 1.5),
							color: 8026746
						}, {
							collider: D.createCircle(L.create(-20.5, -10.5), 1.5),
							color: 8026746
						}, {
							collider: D.createAabbExtents(L.create(-38.5, -7), L.create(1.4, 3.1)),
							color: 13278307
						}, {
							collider: D.createAabbExtents(L.create(-7.5, -19.5), L.create(3.1, 1.4)),
							color: 13278307
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [D.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)), D.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)), D.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)), D.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5))]
						}, {
							type: "asphalt",
							collision: [D.createAabbExtents(L.create(-21.5, -13), L.create(21, 11.5)), D.createAabbExtents(L.create(-3.5, 2), L.create(3, 3.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-police-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)), D.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)), D.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)), D.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5))],
						scopeOut: [D.createAabbExtents(L.create(12, 0), L.create(12.75, 26))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_20",
						pos: L.create(-42, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_41",
						pos: L.create(-21, 18),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-38, -1),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_21",
						pos: L.create(-18, -1),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-7, 2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-4, 6),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(0, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_10",
						pos: L.create(0, -17.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(3.5, -22),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(6.5, -22.5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(14.5, -22.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(17.5, -22),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_11",
						pos: L.create(21, -17),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(21.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_11",
						pos: L.create(21, -2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(31.5, 3),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(42, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_33",
						pos: L.create(25, 22),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(4.5, 22.5),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(2.5, 22),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(0, 20),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_2",
						pos: L.create(-40.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-34, 8),
						scale: 1,
						ori: 1
					}, {
						type: "cell_door_01",
						pos: L.create(-35.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-35, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_3",
						pos: L.create(-27, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-28, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-21.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-20, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-21, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-14.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-13, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-14, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-7.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_6",
						pos: L.create(-7, 9.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_7",
						pos: L.create(-4, 13),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-7, 17.5),
						scale: 1,
						ori: 2
					}, {
						type: "police_wall_int_4",
						pos: L.create(2.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(6, -1),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_6",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(15, -1),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_4",
						pos: L.create(18.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(21, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_10",
						pos: L.create(21, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(21, 21.5),
						scale: 1,
						ori: 2
					}, {
						type: "metal_wall_ext_10",
						pos: L.create(35.5, 4),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 4.15),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_10",
						pos: L.create(35.5, 21),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 20.85),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(38, 20.85),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_18",
						pos: L.create(41, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(40.85, 7.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(40.85, 17.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(35.5, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(38, 11.35),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 13.65),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-37, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-23, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-16, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-9, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "control_panel_01",
						pos: L.create(-4.5, 9.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(-24.5, 20.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(14.5, 12.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(18.75, 12.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(10.5, 1.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "vending_01",
						pos: L.create(2, -6.75),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(2, -14.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "bush_01",
						pos: L.create(2.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_01",
						pos: L.create(18.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_police_floor: 1
						}),
						pos: L.create(-38.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-31.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-24.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-17.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-10.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-3.5, 2.5),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "sandbags_01",
						pos: L.create(-38.5, -7),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "sandbags_01",
						pos: L.create(-7.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-30.5, -18),
						scale: .9,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-20.5, -10.5),
						scale: .9,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(39, -6),
						scale: .8,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(28, -17.5),
						scale: .8,
						ori: 0,
						inheritOri: !0
					}, {
						type: "hedgehog_01",
						pos: L.create(39, -17.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_01",
						pos: L.create(24.5, -.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}]
				},
				house_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-04-rounded.svg", 10584424)
				}),
				house_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-05-rounded.svg", 10584424)
				}),
				house_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-08-rounded.svg", 10584424)
				}),
				house_wall_int_9: T({
					material: "wood",
					extents: L.create(.5, 4.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-09-rounded.svg", 10584424)
				}),
				house_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "tanChip",
					img: d("img/map/map-column-01.svg", 5587506)
				}),
				house_red_01: {
					type: "building",
					map: {
						display: !0,
						color: 6429724,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "house",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(14.5, 13))]
						}],
						imgs: [{
							sprite: "img/map/map-building-house-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(14.5, 13))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(16.5, 15))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_12",
						pos: L.create(-9, 13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_14",
						pos: L.create(8, 13),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(1, 13.25),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-14.5, 10.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_10",
						pos: L.create(-14.5, -.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-14.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-14.75, 6),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-14.75, -7),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-12.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-4.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(4.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(12.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-8.5, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "house_window_01",
						pos: L.create(8.5, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-2, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(14.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(14.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_2",
						pos: L.create(14.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(14.75, -9),
						scale: 1,
						ori: 2
					}, {
						type: "house_window_01",
						pos: L.create(14.75, 3),
						scale: 1,
						ori: 2
					}, {
						type: "house_wall_int_9",
						pos: L.create(-9.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "house_wall_int_5",
						pos: L.create(4.5, -6),
						scale: 1,
						ori: 0
					}, {
						type: "house_wall_int_9",
						pos: L.create(9.5, -4),
						scale: 1,
						ori: 1
					}, {
						type: "house_wall_int_8",
						pos: L.create(5.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_wall_int_4",
						pos: L.create(8, 7),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(4.5, -12.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(6, 2.5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(14, 7),
						scale: 1,
						ori: 1
					}, {
						type: "house_column_1",
						pos: L.create(6, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_column_1",
						pos: L.create(6, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(8, 10),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(12.25, -2),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(7.75, -6),
						scale: 1,
						ori: 0
					}, {
						type: "stand_01",
						pos: L.create(-12.25, -3),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "table_01",
						pos: L.create(-11.25, 1.75),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "oven_01",
						pos: L.create(-7, 11),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "refrigerator_01",
						pos: L.create(-7, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-12, -10.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "loot_tier_1",
						pos: L.create(0, 4.5),
						scale: 1,
						ori: 0
					}]
				},
				mansion_wall_int_1: T({
					material: "wood",
					extents: L.create(.5, .5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-01-rounded.svg", 16768917)
				}),
				mansion_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-05-rounded.svg", 16768917)
				}),
				mansion_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-06-rounded.svg", 16768917)
				}),
				mansion_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-07-rounded.svg", 16768917)
				}),
				mansion_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-08-rounded.svg", 16768917)
				}),
				mansion_wall_int_9: T({
					material: "wood",
					extents: L.create(.5, 4.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-09-rounded.svg", 16768917)
				}),
				mansion_wall_int_10: T({
					material: "wood",
					extents: L.create(.5, 5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-10-rounded.svg", 16768917)
				}),
				mansion_wall_int_11: T({
					material: "wood",
					extents: L.create(.5, 5.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-11-rounded.svg", 16768917)
				}),
				mansion_wall_int_12: T({
					material: "wood",
					extents: L.create(.5, 6),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-12-rounded.svg", 16768917)
				}),
				mansion_wall_int_13: T({
					material: "wood",
					extents: L.create(.5, 6.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-13-rounded.svg", 16768917)
				}),
				mansion_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "tanChip",
					img: d("img/map/map-column-01.svg", 7432016)
				}),
				saferoom_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(0, 0), L.create(6, 4))]
						}],
						imgs: [{
							sprite: "img/map/map-building-saferoom-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(5, 3))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(5, 3))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_7",
						pos: L.create(-5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_6",
						pos: L.create(1.5, 3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_9",
						pos: L.create(0, -3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_7",
						pos: L.create(5, 0),
						scale: 1,
						ori: 0
					}, {
						type: m({
							case_01: 1,
							case_02: .025,
							chest_02: 1
						}),
						pos: L.create(2.5, 0),
						scale: 1,
						ori: 3
					}]
				},
				mansion_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(-1.5, 20.5), L.create(12.5, 4.5)),
							color: 8671554
						}, {
							collider: D.createAabbExtents(L.create(-2, -23), L.create(3, 2.5)),
							color: 8671554
						}, {
							collider: D.createAabbExtents(L.create(-20.5, -22.5), L.create(10, 2)),
							color: 7750457
						}, {
							collider: D.createAabbExtents(L.create(28, 1.5), L.create(3.75, 3)),
							color: 7237230
						}, {
							collider: D.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)),
							color: 6175023
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [D.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), D.createAabbExtents(L.create(-1.5, 20.5), L.create(12.5, 4.5)), D.createAabbExtents(L.create(0, 0), L.create(20, 20))]
						}, {
							type: "asphalt",
							collision: [D.createAabbExtents(L.create(-21, -17), L.create(11, 8)), D.createAabbExtents(L.create(-23, -6), L.create(8, 3)), D.createAabbExtents(L.create(-2, -24), L.create(2, 3)), D.createAabbExtents(L.create(28, 1.5), L.create(3, 3))]
						}, {
							type: "grass",
							collision: [D.createAabbExtents(L.create(-2, 4), L.create(5, 5))]
						}, {
							type: "house",
							collision: [D.createAabbExtents(L.create(1, 13), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-building-mansion-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(-15, -22.4), L.create(17, 2.2)), D.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), D.createAabbExtents(L.create(-1.5, 20.6), L.create(12, 4.2))],
						scopeOut: [D.createAabbExtents(L.create(-15, -24.4), L.create(21, 4.2)), D.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), D.createAabbExtents(L.create(-9, 23.1), L.create(5, 6.7))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_9",
						pos: L.create(-31.5, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-31.75, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(-31.5, .5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-31.75, 11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-31.5, 15),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_17",
						pos: L.create(-22.5, 16.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(-13.5, 20.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(-13, 24.9),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(.5, 24.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(10.5, 20.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(17.5, 16.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(24.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, 9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_18",
						pos: L.create(24.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(24.5, -17),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(20.5, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(15.5, -20.75),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_14",
						pos: L.create(7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-4, -21),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_short_7",
						pos: L.create(28.5, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_short_7",
						pos: L.create(28.5, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(-5, -24),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(1, -24),
						scale: 1,
						ori: 1
					}, {
						type: "saferoom_01",
						pos: L.create(-25.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_12",
						pos: L.create(-25, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-19, -2.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_1",
						pos: L.create(-30.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_03",
						pos: L.create(-30.25, 5.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_13",
						pos: L.create(-20.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_7",
						pos: L.create(-19.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(-14.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_6",
						pos: L.create(-14.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_6",
						pos: L.create(-14.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_10",
						pos: L.create(-10, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_11",
						pos: L.create(-9.5, -14.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(-7.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(-1.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(3.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_12",
						pos: L.create(-2, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "stairs_01",
						pos: L.create(-4.5, 12),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_10",
						pos: L.create(-7.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_10",
						pos: L.create(3.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_12",
						pos: L.create(-2, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(10.5, 16),
						scale: 1,
						ori: 2
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(10.5, 7.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_8",
						pos: L.create(10.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(15.5, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(15.5, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_5",
						pos: L.create(19.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(24, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_5",
						pos: L.create(3.5, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(6, -8.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_11",
						pos: L.create(5.5, -14.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(-27.25, 7.15),
						scale: 1,
						ori: 2
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(-27.25, 14.85),
						scale: 1,
						ori: 0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-11.5, -11.75),
						scale: 1,
						ori: 3
					}, {
						type: "stand_01",
						pos: L.create(-7.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "stand_01",
						pos: L.create(3.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(7.25, -16.25),
						scale: 1,
						ori: 1
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(14.75, -3.25),
						scale: 1,
						ori: 0
					}, {
						type: "toilet_01",
						pos: L.create(17, 1.5),
						scale: 1,
						ori: 3
					}, {
						type: "refrigerator_01",
						pos: L.create(22.15, 14.4),
						scale: 1,
						ori: 0
					}, {
						type: "oven_01",
						pos: L.create(12.75, 6.75),
						scale: 1,
						ori: 1
					}, {
						type: "oven_01",
						pos: L.create(12.75, 10.25),
						scale: 1,
						ori: 1
					}, {
						type: "table_02",
						pos: L.create(15.75, -14.25),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_mansion_floor",
						pos: L.create(-2, -8.5),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-2, 4),
						scale: .6,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(-4.75, 1.25),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(.75, 1.25),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(-4.75, 6.75),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(.75, 6.75),
						scale: .9,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(-8, -23),
						scale: .95,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(4, -23),
						scale: .95,
						ori: 0
					}, {
						type: "shack_01",
						pos: L.create(-20.75, 22.5),
						scale: 1,
						ori: 2
					}, {
						type: "crate_01",
						pos: L.create(13.25, 19.25),
						scale: .9,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(24, 24),
						scale: 1,
						ori: 0
					}, {
						type: "barrel_02",
						pos: L.create(27, -4),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(29, -17.25),
						scale: .7,
						ori: 0
					}]
				},
				mansion_cellar_01: {
					type: "building",
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "brick",
							collision: [D.createAabbExtents(L.create(18, 3), L.create(7, 13)), D.createAabbExtents(L.create(5, 0), L.create(6, 10))]
						}],
						imgs: [{
							sprite: "img/map/map-building-mansion-cellar.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(18, 3), L.create(7, 13)), D.createAabbExtents(L.create(5, 1.5), L.create(6, 12))],
						scopeOut: [D.createAabbExtents(L.create(18, 3), L.create(7, 13)), D.createAabbExtents(L.create(5, 1.5), L.create(6, 12))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: []
					},
					mapObjects: [{
						type: "brick_wall_ext_thicker_24",
						pos: L.create(-2.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_8",
						pos: L.create(0, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(5.5, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_9",
						pos: L.create(11.5, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(17.5, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(21.5, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_8",
						pos: L.create(25.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_15",
						pos: L.create(25.5, 11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_16",
						pos: L.create(16, 17.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(9.5, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(5.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(29.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(29.5, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(31.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_6",
						pos: L.create(4.5, 15),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(1, 17.6),
						scale: 1,
						ori: 1
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(8.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(11.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(14.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(12.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(15.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(18.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(22.25, 14.25),
						scale: .75,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(22.75, 8),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_column_1",
						pos: L.create(5.5, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(17.5, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "barrel_02",
						pos: L.create(8.5, 1.5),
						scale: .8,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(11.5, 1.5),
						scale: .8,
						ori: 0
					}, {
						type: "barrel_02",
						pos: L.create(14.5, 1.5),
						scale: .8,
						ori: 0
					}]
				},
				mansion_structure_01: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					layers: [{
						type: "mansion_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "mansion_cellar_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: D.createAabbExtents(L.create(28, 1.5), L.create(3, 2.55)),
						downDir: L.create(-1, 0),
						noCeilingReveal: !0
					}, {
						collision: D.createAabbExtents(L.create(1, 13.5), L.create(2, 3.5)),
						downDir: L.create(0, -1)
					}],
					mask: [D.createAabbExtents(L.create(10, -.1), L.create(15, 10.1)), D.createAabbExtents(L.create(17.5, 13.5), L.create(7.5, 3.5))]
				},
				bunker_egg_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(0, 7.75), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-egg-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						scopeOut: [D.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						vision: {
							dist: 5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: []
					},
					mapObjects: [{
						type: "metal_wall_ext_short_6",
						pos: L.create(0, 5.3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(5, 8),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-5, 7.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-1.25, 15.75),
						scale: 1,
						ori: 0
					}, {
						type: "stone_01",
						pos: L.create(-5.75, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(5.75, -6.75),
						scale: 1,
						ori: 0
					}]
				},
				bunker_egg_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(0, -4.5), L.create(10, 9))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-egg-chamber-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, -4.5), L.create(10, 9))],
						scopeOut: [D.createAabbExtents(L.create(0, -4.5), L.create(10, 9))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 10,
							width: 3
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(0, 11.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(-10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_24",
						pos: L.create(0, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-2, 5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_07",
						pos: L.create(0, -4.5),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(-7, -11),
						scale: .9,
						ori: 0
					}]
				},
				bunker_structure_01: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [D.createAabbExtents(L.create(0, 5), L.create(7, 12))],
					layers: [{
						type: "bunker_egg_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_egg_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: D.createAabbExtents(L.create(0, 8.4), L.create(2, 2.6)),
						downDir: L.create(0, -1)
					}],
					mask: [D.createAabbExtents(L.create(0, -3.7), L.create(10, 9.5))]
				},
				bunker_hydra_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(20.25, 3.5), L.create(6.25, 5.5)),
							color: 2894892
						}, {
							collider: D.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25)),
							color: 3815994
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [D.createAabbExtents(L.create(20.25, 3.5), L.create(6.25, 5.5)), D.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))]
						}, {
							type: "container",
							collision: [D.createAabbExtents(L.create(16.25, 3.5), L.create(3.25, 2)), D.createAabbExtents(L.create(-16.5, -90.75), L.create(2, 3.25)), D.createAabbExtents(L.create(40, -50.5), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-floor-01.svg",
							pos: L.create(16.75, 3.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-02.svg",
							pos: L.create(-16.5, -85.25),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-03.svg",
							pos: L.create(36.75, -56.25),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-04.svg",
							pos: L.create(-5.75, -38.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(19.25, 3.5), L.create(6.25, 5.5)), D.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))],
						scopeOut: [D.createAabbExtents(L.create(19.25, 3.5), L.create(6.25, 5.5)), D.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))],
						imgs: [{
							sprite: "",
							pos: L.create(25.25, 3.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_13",
						pos: L.create(18.75, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_13",
						pos: L.create(18.75, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_11",
						pos: L.create(12.75, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(25.75, 9),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(25.75, -2),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_2",
						pos: L.create(26.25, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_2",
						pos: L.create(26.25, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_8",
						pos: L.create(35.25, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_8",
						pos: L.create(35.25, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_17",
						pos: L.create(38.75, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_7",
						pos: L.create(32.75, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_2",
						pos: L.create(33.25, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(38.25, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(35.75, 10.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_08",
						pos: L.create(35.75, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(13, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(17, 6),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(17, 1),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(-16.5, -87.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-19, -91),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-14, -91),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(40, -53.25),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(37.5, -50),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(42.5, -50),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-11.5, -93),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-21.5, -93.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-17.5, -84.25),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(45, -50),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(35, -50.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(38.75, -42.25),
						scale: 1,
						ori: 0
					}]
				},
				bunker_hydra_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(3.5, 2), L.create(9.5, 10)), D.createAabbExtents(L.create(-15.5, -79.5), L.create(3, 8)), D.createAabbExtents(L.create(40.5, -62), L.create(9.5, 8))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-chamber-floor-01.svg",
							pos: L.create(7, 2.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-chamber-floor-02.svg",
							pos: L.create(-15.5, -83),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-chamber-floor-03.svg",
							pos: L.create(40.5, -58.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(3.5, 2.25), L.create(10, 10)), D.createAabbExtents(L.create(-15, -77), L.create(5.5, 10.5)), D.createAabbExtents(L.create(38, -62), L.create(11.5, 8))],
						scopeOut: [D.createAabbExtents(L.create(3.5, 2.25), L.create(10, 10)), D.createAabbExtents(L.create(-15, -77), L.create(5.5, 10.5)), D.createAabbExtents(L.create(38, -62), L.create(11.5, 8))],
						imgs: [{
							sprite: "",
							pos: L.create(7, 2),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}, {
							sprite: "",
							pos: L.create(-13.5, -76.5),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}, {
							sprite: "",
							pos: L.create(38, -62),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}],
						vision: {
							dist: 10,
							width: 3
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(20, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(16.5, 7),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(16.5, 0),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(14, 12),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(14, -5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(2, 13.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-7, 2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-3, -6.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(10, -6.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(13.5, 5.5),
						scale: 1,
						ori: 2
					}, {
						type: "lab_door_01",
						pos: L.create(-.5, -7.5),
						scale: 1,
						ori: 3
					}, {
						type: "lab_door_01",
						pos: L.create(7.5, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "sandbags_01",
						pos: L.create(0, 7.25),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(10.25, -2.75),
						scale: .9,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(10.25, 9.75),
						scale: .9,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(-3.5, -3),
						scale: .9,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_23",
						pos: L.create(-20, -83),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_19",
						pos: L.create(-11, -79),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-13, -90.5),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_6",
						pos: L.create(-16.5, -94),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-18.5, -87.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -79),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -74.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -83.5),
						scale: 1,
						ori: 3
					}, {
						type: "concrete_wall_ext_6",
						pos: L.create(40, -47),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(36.5, -50.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(43.5, -50.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(33, -53),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(30, -55),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(30, -66),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_16",
						pos: L.create(36.5, -71),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(48.25, -70),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_13",
						pos: L.create(50, -62),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(48.25, -54),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(38, -53.5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_08",
						pos: L.create(34, -67),
						scale: 1,
						ori: 2
					}, {
						type: "locker_01",
						pos: L.create(46.5, -55.15),
						scale: 1,
						ori: 0
					}, {
						type: "locker_01",
						pos: L.create(48.9, -57.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(48.9, -62),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(48.9, -66.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(46.5, -68.85),
						scale: 1,
						ori: 2
					}, {
						type: "bunker_hydra_compartment_01",
						pos: L.create(3.5, -18.95),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bunker_hydra_compartment_02",
						pos: L.create(6, -50),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bunker_hydra_compartment_03",
						pos: L.create(10.5, -74.95),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}]
				},
				bunker_hydra_compartment_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(0, 1), L.create(9.5, 10))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 1.25), L.create(10, 10))],
						scopeOut: [D.createAabbExtents(L.create(0, 1.25), L.create(10, 10))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1.25),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_17",
						pos: L.create(-9.75, 3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-6.5, 9.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(6.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(10.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(-7.5, -6.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(8, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "crate_08",
						pos: L.create(6.5, 6.5),
						scale: 1,
						ori: 2
					}, {
						type: "sandbags_01",
						pos: L.create(4.75, 1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "lab_door_01",
						pos: L.create(-4, -8.5),
						scale: 1,
						ori: 3
					}, {
						type: "lab_door_01",
						pos: L.create(4, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-6, 8.4),
						scale: 1,
						ori: 0
					}, {
						type: "locker_01",
						pos: L.create(-8.35, 6),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-8.35, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-8.35, -3),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-6, -5.4),
						scale: 1,
						ori: 2
					}]
				},
				metal_wall_column_5x12: T({
					material: "metal",
					extents: L.create(2.5, 6)
				}),
				bunker_hydra_compartment_02: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(-2.5, 16), L.create(22, 4)), D.createAabbExtents(L.create(-2.5, 9.5), L.create(6, 2.5))]
						}, {
							type: "tile",
							collision: [D.createAabbExtents(L.create(0, -4.5), L.create(25, 17))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-02.svg",
							pos: L.create(0, 0),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(-2, 3), L.create(22.5, 19.5))],
						scopeOut: [D.createAabbExtents(L.create(-2, 3), L.create(22.5, 19.5))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-17, 21.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(12, 21.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_42",
						pos: L.create(-26, -.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_29",
						pos: L.create(21, 6),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_6",
						pos: L.create(-19, -18.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-18.5, -14),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-15, -15),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(-9, -16),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(4, -16),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(10, -15),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_11",
						pos: L.create(17, -14),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_column_5x12",
						pos: L.create(-14.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_column_5x12",
						pos: L.create(9.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "control_panel_03",
						pos: L.create(-7, 12),
						scale: 1,
						ori: 1
					}, {
						type: "control_panel_03",
						pos: L.create(2, 12),
						scale: 1,
						ori: 3
					}, {
						type: "lab_window_01",
						pos: L.create(-7, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(-4, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(-1, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(2, 7),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_4",
						pos: L.create(-9, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_4",
						pos: L.create(4, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "lab_door_01",
						pos: L.create(-20.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_01",
						pos: L.create(15.5, 13),
						scale: 1,
						ori: 3
					}, {
						type: "crate_01",
						pos: L.create(-17.5, 7.75),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-12.25, 7.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(-12, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-18, -2.5),
						scale: 1,
						ori: 2
					}, {
						type: "vat_02",
						pos: L.create(-2.5, 1.5),
						scale: 1,
						ori: 2
					}, {
						type: "power_box_01",
						pos: L.create(-2.5, -3),
						scale: 1,
						ori: 2
					}, {
						type: "crate_01",
						pos: L.create(12.5, 7.75),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(7.25, 7.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(7, -2.5),
						scale: 1,
						ori: 2
					}, {
						type: "vat_01",
						pos: L.create(13, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-10.75, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_01",
						pos: L.create(-4.5, -16.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(5.75, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_03",
						pos: L.create(-20.5, -16.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_02",
						pos: L.create(20.5, -8.5),
						scale: 1,
						ori: 2
					}]
				},
				bunker_hydra_compartment_03: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(0, 2), L.create(9, 8.75))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-03.svg",
							pos: L.create(0, -.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, .75), L.create(10, 7.75))],
						scopeOut: [D.createAabbExtents(L.create(0, .75), L.create(10, 7.75))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_17",
						pos: L.create(-10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(0, -8),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_14",
						pos: L.create(2, 6),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(-6.5, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-1.75, 2),
						scale: 1,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(-2, -2),
						scale: .9,
						ori: 0
					}, {
						type: "case_03",
						pos: L.create(7, -4),
						scale: 1,
						ori: 3
					}]
				},
				bunker_structure_02: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [D.createAabbExtents(L.create(25.5, 3.5), L.create(16, 11.5)), D.createAabbExtents(L.create(-16.5, -89.5), L.create(7, 7.5)), D.createAabbExtents(L.create(40, -47.25), L.create(6.5, 7.25)), D.createAabbExtents(L.create(-5.75, -38.5), L.create(3, 3))],
					layers: [{
						type: "bunker_hydra_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_hydra_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: D.createAabbExtents(L.create(16.4, 3.5), L.create(2.6, 2)),
						downDir: L.create(-1, 0)
					}, {
						collision: D.createAabbExtents(L.create(-16.5, -90.4), L.create(2, 3.1)),
						downDir: L.create(0, 1)
					}, {
						collision: D.createAabbExtents(L.create(40, -50.5), L.create(2, 3.1)),
						downDir: L.create(0, -1)
					}],
					mask: [D.createAabbExtents(L.create(3.5, -7.2), L.create(10.5, 20)), D.createAabbExtents(L.create(-15, -79.75), L.create(5, 8.5)), D.createAabbExtents(L.create(39, -61.85), L.create(12, 9)), D.createAabbExtents(L.create(3.5, -49.2), L.create(23.5, 22)), D.createAabbExtents(L.create(10.5, -76.7), L.create(10, 5.5))]
				},
				bunker_storm_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: D.createAabbExtents(L.create(0, 10), L.create(3.6, 5.8)),
							color: 6707790
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "container",
							collision: [D.createAabbExtents(L.create(0, 7.75), L.create(2, 3.25))]
						}, {
							type: "shack",
							collision: [D.createAabbExtents(L.create(0, 13.5), L.create(3.75, 2.5)), D.createAabbExtents(L.create(5, 13.75), L.create(1.25, 2.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-storm-floor-01.svg",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(0, 10), L.create(3.5, 5.6))],
						scopeOut: [D.createAabbExtents(L.create(0, 10), L.create(3.8, 5.9))],
						vision: {
							width: 4
						},
						imgs: [{
							sprite: "",
							pos: L.create(-1, 10),
							scale: .5,
							alpha: 1,
							tint: 16777215,
							rot: 1
						}],
						destroy: {
							wallCount: 2,
							particle: "shackFrag",
							particleCount: 25,
							residue: "none"
						}
					},
					mapObjects: [{
						type: "metal_wall_ext_short_6",
						pos: L.create(0, 5.3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_bot",
						pos: L.create(3.39, 8.6),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_side_left",
						pos: L.create(.3, 4.52),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_top",
						pos: L.create(-3.39, 9.73),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_side_right",
						pos: L.create(0, 15.58),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(-2, 17.9),
						scale: .8,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(1.45, 17.7),
						scale: .85,
						ori: 0
					}, {
						type: "stone_01",
						pos: L.create(-4.25, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(3.75, -6.75),
						scale: 1,
						ori: 0
					}]
				},
				bunker_storm_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [D.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-storm-chamber-floor-01.svg",
							pos: L.create(8.5, -1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [D.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9.1))],
						scopeOut: [D.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9.1))],
						imgs: [{
							sprite: "",
							pos: L.create(8.5, -1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 10,
							width: 5
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(0, 11.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(-10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-1.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(10.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(12.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_15",
						pos: L.create(21.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_15",
						pos: L.create(27.5, -5.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_17",
						pos: L.create(20.5, 3.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(10.5, 2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(12.5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_02",
						pos: L.create(-2, 5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_01",
						pos: L.create(-6.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(6, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(4, -6.5),
						scale: 1,
						ori: 0
					}, {
						type: "control_panel_03",
						pos: L.create(16, -11.5),
						scale: 1,
						ori: 2
					}, {
						type: "control_panel_02",
						pos: L.create(20, -11.25),
						scale: 1,
						ori: 2
					}, {
						type: "control_panel_03",
						pos: L.create(24, -11.5),
						scale: 1,
						ori: 2
					}, {
						type: "crate_08",
						pos: L.create(23.5, -.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							case_03: 1,
							chest_02: 9
						}),
						pos: L.create(16.5, .25),
						scale: 1,
						ori: 0
					}, {
						type: "lab_door_01",
						pos: L.create(11.5, -2),
						scale: 1,
						ori: 2
					}, {
						type: "barrel_01",
						pos: L.create(-7, -11),
						scale: .9,
						ori: 0
					}]
				},
				bunker_structure_03: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [D.createAabbExtents(L.create(1, 6), L.create(7, 13.5))],
					layers: [{
						type: "bunker_storm_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_storm_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: D.createAabbExtents(L.create(0, 8.4), L.create(2, 2.6)),
						downDir: L.create(0, -1)
					}],
					mask: [D.createAabbExtents(L.create(8.5, -3.7), L.create(18, 9.5))]
				},
				container_wall_top: T({
					material: "metal",
					extents: L.create(2.75, .4)
				}),
				container_wall_side: T({
					material: "metal",
					extents: L.create(.4, 5.5)
				}),
				container_wall_side_open: T({
					material: "metal",
					extents: L.create(.4, 6)
				}),
				container_01: y({
					open: !1,
					tint: 2703694,
					ceilingSprite: ""
				}),
				container_02: y({
					open: !1,
					tint: 2703694,
					ceilingSprite: ""
				}),
				container_03: y({
					open: !1,
					tint: 2703694,
					ceilingSprite: ""
				}),
				container_04: y({
					open: !0,
					tint: 3560807,
					ceilingSprite: ""
				}),
				container_06: y({
					open: !1,
					tint: 12227840,
					ceilingSprite: "",
					loot_spawner_01: "loot_tier_sv98",
					loot_spawner_02: "loot_tier_scopes_sniper"
				}),
				loot_tier_1: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_world",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_2: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_container",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_beach: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_world",
					terrain: {
						grass: !1,
						beach: !0
					}
				},
				loot_tier_vault_floor: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_vault_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_police_floor: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_police_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_mansion_floor: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_mansion_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_sv98: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_sv98",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_scopes_sniper: {
					type: "loot_spawner",
					collision: D.createCircle(L.create(0, 0), 3),
					tier: "tier_scopes_sniper",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				decal_barrel_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-barrel-res-01.svg",
						scale: .24,
						alpha: 1,
						tint: 16777215
					}
				},
				decal_frag_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-barrel-res-01.svg",
						scale: .2,
						alpha: .8,
						tint: 16777215
					}
				},
				decal_smoke_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-smoke-res.svg",
						scale: .2,
						alpha: .5,
						tint: 16777215
					}
				}
			};
		e.exports = {
			Defs: B,
			MinScale: .125,
			MaxScale: 2.5,
			oriToRad: o,
			getBoundingCollider: n
		}
	},
	BkwK: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-04-07",
				locale: "ko"
			},
			"word-order": "sov",
			"index-slogan": "2D 배틀 로얄",
			"index-region": "월드",
			"index-north-america": "북아메리카",
			"index-europe": "유럽",
			"index-asia": "아시아",
			"index-players": "플레이어",
			"index-play-solo": "솔로하기",
			"index-play-duo": "듀오하기",
			"index-play-squad": "스쿼드하기",
			"index-create-team": "팀 만들기",
			"index-how-to-play": "초보자 가이드",
			"index-leave-team": "팀에서 나가기",
			"index-joining-team": "팀 조인중",
			"index-creating-team": "팀 만드는중",
			"index-invite-link": "친구 초대",
			"index-solo": "솔로",
			"index-duo": "듀오",
			"index-squad": "스쿼드",
			"index-auto-fill": "Auto Fill",
			"index-no-fill": "No Fill",
			"index-waiting-for-leader": "파티장 준비중",
			"index-play": "시작",
			"index-featured-youtuber": "유튜버",
			"index-settings": "세팅",
			"index-high-resolution": "고화질 (그래픽을 높입니다)",
			"index-screen-shake": "화면 효과",
			"index-master-volume": "전체 사운드",
			"index-sfx-volume": "효과음 사운드",
			"index-music-volume": "음악 사운드",
			"index-mobile-announce": "surviv.io 모바일 버전 출시!",
			"index-mobile-tooltip": "모바일에서 <span>surviv.io</span>에 접속해서 플레이하세요!",
			"index-team-is-full": "팀이 꽉 찾습니다!",
			"index-failed-joining-team": "팀에 들어가지 못했습니다.",
			"index-failed-creating-team": "팀을 만들수 없습니다.",
			"index-failed-finding-game": "게임을 찾지 못하였습니다.",
			"index-failed-joining-game": "게임에 들어가지 못했습니다.",
			"index-lost-connection": "네트워크 연결이 끊어짐.",
			"index-host-closed": "네트워크 연결이 끊어짐.",
			"index-view-more": "더보기",
			"index-back-to-main": "메인 메뉴로",
			"index-most-kills": "최다 킬수",
			"index-total-kills": "전체 킬수",
			"index-total-wins": "승리 횟수",
			"index-top-5-percent": "Top 5",
			"index-kill-death-ratio": "K/D",
			"index-for": "For",
			"index-today": "오늘 점수",
			"index-this-week": "7 일 점수",
			"index-all-time": "All Time 점수",
			"index-top-100": "TOP 100",
			"index-rank": "랭킹",
			"index-player": "플레이어",
			"index-total-games": "전체게임 횟수",
			"index-controls": "게임 조작법",
			"index-movement": "이동",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "조준",
			"index-aim-ctrl": "마우스",
			"index-punch": "펀치",
			"index-shoot": "발사",
			"index-shoot-ctrl": "좌클릭",
			"index-change-weapons": "무기바꾸기",
			"index-change-weapons-ctrl": "1-4 or 스크롤",
			"index-stow-weapons": "무기 집어넣기",
			"index-stow-weapons-ctrl": "3 or E",
			"index-swap-weapons": "그전 무기로 바꾸기",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "리로드",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "줌 인 or 아웃",
			"index-scope-zoom-ctrl": "좌클릭으로 줌",
			"index-pickup": "줍기",
			"index-loot": "줍기",
			"index-revive": "부활",
			"index-pickup-ctrl": "F",
			"index-use-medical": "힐링",
			"index-use-medical-ctrl": "좌클릭, 7-0",
			"index-drop-item": "아이템 버리기",
			"index-drop-item-ctrl": "우클릭",
			"index-cancel-action": "행동취소",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "지도보기",
			"index-view-map-ctrl": "M or G",
			"index-toggle-minimap": "미니 맵 전환",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "듀오/스쿼드 멤버와 소통하기",
			"index-use-ping-ctrl": "C를 누른 상태에서 우클릭을 하고 마우스를 드래그해 이모티콘을 선택하세요!",
			"index-use-emote": "이모티콘 사용하기",
			"index-use-emote-ctrl": "화면에 우클릭을 누른 채 마우스를 드래그해 이모티콘을 선택하세요!",
			"index-tips-1-desc": "surviv.io의 목표는 마지막 1인, 또는 듀오, 또는 스쿼드가 되는 것입니다! 한 게임당 목숨은 한 개 - 죽으면 다시 부활할 수 없어요!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "PUBG, 포트나이트, 또는 H1Z1와 같은 배틀로얄 장르의 게임을 좋아하신다면, 이미 당신은 surviv.io의 세계에 들어와 있습니다! 이 게임은 2D로 되어 있는 배틀그라운드라고 생각하시면 됩니다(조금 더 안정적인 서버와 먹기 쉬워진 치킨과 함께요.)",
			"index-tips-3": "파밍과 전투",
			"index-tips-3-desc": "당신이 시작할 때에는 작은 공간 외에는 아무것도 주어지지 않습니다. 맵 곳곳을 돌아다니며 무기, 탄약, 조준경, 그리고 의료용 아이템을 찾아다니세요. 다른 플레이어를 사살하면 그 플레이어의 아이템을 차지할 수 있습니다!",
			"index-tips-4": "자기장 = 제 2의 적!",
			"index-tips-4-desc": "다른 플레이어만이 당신에게 데미지를 주는 것은 아닙니다. 시간이 지날 때마다 빨간색 자기장이 점점 좁혀옵니다. 자기장 안에 있다면 경기 후반으로 갈수록 높은 데미지를 받게 되죠. 지도를 보며 안전에 신경쓰세요!",
			"game-alive": "생존",
			"game-reloading": "장전중",
			"game-using": "사용중",
			"game-reviving": "부활중",
			"game-revive-teammate": "팀원부활",
			"game-equip": "착용",
			"game-cancel": "취소",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "플레이어 기다리느중",
			"game-spectating": "Spectating",
			"game-red-zone-advances": "빨간 구역 움직입니다!",
			"game-red-zone-advancing": "빨간 구역이 움직입니다.  안전지대로 대피하십시요.",
			"game-seconds": "s",
			"game-minutes": "m",
			"game-minute": "m",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "공간이 부족합니다!",
			"game-item-already-owned": "이 물건은 이미 소유 하고 있습니다!",
			"game-item-already-equipped": "이 물건은 이미 착용 하고 있습니다!",
			"game-better-item-equipped": "더 좋은 아이템을 착용 하고 있습니다!",
			"game-play-new-game": "새로 시작하기",
			"game-spectate": "관중모드",
			"game-full-screen": "풀 스크린",
			"game-sound": "사운드",
			"game-quit-game": "나가기",
			"game-return-to-game": "돌아가기",
			"game-hide-match-stats": "게임통계 감추기",
			"game-view-match-stats": "게임통계 보이기",
			"game-previous-teammate": "이전 플레이어",
			"game-next-teammate": "다음 플레이어",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "나가기",
			"game-your-results": "랭킹",
			"game-chicken": "이겼닭! 오늘 저녁은 치킨이닭!",
			"game-won-the-game": "승리.",
			"game-team-eliminated": "그럴 수 있어. 이런 날도 있는 거지 뭐.",
			"game-rank": "랭킹",
			"game-team-rank": "팀 랭킹",
			"game-team-kills": "팀 킬",
			"game-kill": "킬",
			"game-kills": "킬",
			"game-damage-dealt": "가한 피해량",
			"game-damage-taken": "받은 피해량",
			"game-survived": "생존시간",
			"game-backpack00": "주머니",
			"game-backpack01": "작은 가방",
			"game-backpack02": "보통 가방",
			"game-backpack03": "군인 가방",
			"game-bandage": "붕대",
			"game-bandage-tooltip": "레프트 클릭 하시면 15 HP 증가합니다.",
			"game-healing-tooltip": "75 HP 이상 힐할수 없읍니다.",
			"game-healthkit": "구급 상자",
			"game-healthkit-tooltip": "레프트 클릭 하시면 100 HP 증가합니다.",
			"game-soda": "소다",
			"game-soda-tooltip": "레프트 클릭 하시면 아드레날린 25 증가합니다.",
			"game-adrenaline-tooltip": "아드레날린은 HP 지속적으로 회복시킴니다.",
			"game-painkiller": "알약",
			"game-painkiller-tooltip": "레프트 클릭 하시면 아드레날린 50 증가합니다.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "M9, Glock, MP5, MAC-10, UMP9, Vector 탄약.",
			"game-12gauge": "12 게이지",
			"game-12gauge-tooltip": "M870, SAIGA-12, MP220 탄약.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, OT-38, DP-28 탄약.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12, M249 탄약.",
			"game-chest01": "조끼 레벨 1",
			"game-chest02": "조끼 레벨 2",
			"game-chest03": "조끼 레벨 3",
			"game-helmet01": "헬멧 레벨 1",
			"game-helmet02": "헬멧 레벨 2",
			"game-helmet03": "헬멧 레벨 3",
			"game-1xscope": "1x 스코프",
			"game-2xscope": "2x 스코프",
			"game-4xscope": "4x 스코프",
			"game-8xscope": "8x 스코프",
			"game-15xscope": "15x 스코프",
			"game-level-1": "레벨 1",
			"game-level-2": "레벨 2",
			"game-level-3": "레벨 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "수류탄",
			"game-hud-frag": "수류탄",
			"game-smoke": "연막탄",
			"game-hud-smoke": "연막탄",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	CVWn: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("9xSA"),
			s = a("0od3"),
			l = a("Tf6H"),
			c = a("/2+T"),
			m = (a("zinx"), a("r4ug"), a("dT1u")),
			d = a("xgte"),
			p = d.RenderType,
			u = function() {
				function e() {
					i(this, e)
				}
				return o(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {
						this.particle.fadeOut(), this.particle = null
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						this.type = e.type, this.pos = c.copy(e.pos), this.rad = e.rad, t && (this.layer = e.layer), a && (this.particle = i.smokeBarn.allocParticle(), this.particle.init(this.pos, this.rad, this.layer)), this.particle.posTarget = c.copy(this.pos), this.particle.radTarget = this.rad
					}
				}]), e
			}(),
			h = function() {
				function e() {
					i(this, e);
					var t = ["img/particles/part-smoke-02.svg", "img/particles/part-smoke-03.svg"];
					this.active = !1, this.zIdx = 0, this.sprite = n.Sprite.fromImage(t[Math.floor(Math.random() * t.length)]), this.sprite.anchor = new n.Point(.5, .5), this.sprite.visible = !1
				}
				return o(e, [{
					key: "init",
					value: function(e, t, a) {
						this.pos = c.copy(e), this.posTarget = c.copy(this.pos), this.rad = t, this.radTarget = this.rad, this.rot = l.random(0, 2 * Math.PI), this.rotVel = Math.PI * l.random(.25, .5) * (Math.random() < .5 ? -1 : 1), this.fade = !1, this.fadeTicker = 0, this.fadeDuration = l.random(.5, .75), this.tint = l.rgb2hex(l.hsv2rgb(0, 0, l.random(.9, .95))), this.layer = a
					}
				}, {
					key: "fadeOut",
					value: function() {
						this.fade = !0
					}
				}]), e
			}(),
			g = function() {
				function e() {
					i(this, e), this.smokePool = new m.Pool(u), this.particles = [], this.zIdx = 2147483647
				}
				return o(e, [{
					key: "allocParticle",
					value: function() {
						for (var e = null, t = 0; t < this.particles.length; t++)
							if (!this.particles[t].active) {
								e = this.particles[t];
								break
							}
						return e || (e = new h, this.particles.push(e)), e.active = !0, e.zIdx = this.zIdx--, e
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o) {
						for (var n = this.smokePool.getPool(), c = 0; c < n.length; c++) {
							n[c].active
						}
						for (var m = 0; m < this.particles.length; m++) {
							var d = this.particles[m];
							if (d.active) {
								d.rad = s.lerp(3 * e, d.rad, d.radTarget), d.pos = s.v2lerp(3 * e, d.pos, d.posTarget);
								d.rotVel *= 1 / (1 + .1 * e), d.rot += d.rotVel * e, d.fadeTicker += d.fade ? e : 0, d.active = d.fadeTicker < d.fadeDuration;
								var u = .9 * s.clamp(1 - d.fadeTicker / d.fadeDuration, 0, 1),
									h = d.layer;
								!(l.sameLayer(d.layer, a.layer) || 2 & a.layer) || 1 != d.layer && 2 & a.layer && i.insideStructureMask(r.createCircle(d.pos, 1)) || (h |= 2), o.addPIXIObj(d.sprite, p.World, h, 500, d.zIdx);
								var g = t.pointToScreen(d.pos),
									f = t.pixels(2 * d.rad / t.ppu);
								d.sprite.position.set(g.x, g.y), d.sprite.scale.set(f, f), d.sprite.rotation = d.rot, d.sprite.tint = d.tint, d.sprite.alpha = u, d.sprite.visible = d.active
							}
						}
					}
				}]), e
			}();
		e.exports = {
			SmokeBarn: g
		}
	},
	"DI/9": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = (a("8iex"), a("9xSA")),
			s = a("Bk7F"),
			l = a("0od3"),
			c = a("Tf6H"),
			m = a("/2+T"),
			d = (a("zinx"), a("r4ug"), a("EZ6M")),
			p = a("xgte"),
			u = p.RenderType,
			h = function() {
				function e() {
					i(this, e), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5)
				}
				return o(e, [{
					key: "init",
					value: function() {
						this.isNew = !1, this.smokeEmitter = null, this.img = ""
					}
				}, {
					key: "free",
					value: function() {
						this.sprite.visible = !1, this.sprite.parent && this.sprite.parent.removeChild(this.sprite), this.isDoor && this.door.casingSprite && (this.door.casingSprite.parent && this.door.casingSprite.parent.removeChild(this.door.casingSprite), this.door.casingSprite = null), this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null)
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						t && (this.type = e.type, this.layer = e.layer, this.healthT = e.healthT, this.dead = e.dead);
						var o = s.Defs[e.type];
						if (this.pos = m.copy(e.pos), this.rot = s.oriToRad(e.ori), this.scale = e.scale, this.imgScale = o.img.scale, this.collider = r.transform(o.collision, this.pos, this.rot, this.scale), a) {
							if (this.isNew = !0, this.exploded = -1 != i.map.deadObstacleIds.indexOf(this.__id), this.explodeParticle = o.explodeParticle, this.hitParticle = o.hitParticle, this.collidable = o.collidable, this.destructible = o.destructible, this.height = o.height, this.sound = o.sound, this.isWall = !!o.isWall, this.isWindow = !!o.isWindow, this.isBush = !!o.isBush, this.isDoor = void 0 !== o.door, this.isDoor) {
								this.door = {
									playErrorFx: o.door.slideToOpen && o.door.openOneWay,
									closedPos: m.copy(e.pos),
									autoOpen: o.door.autoOpen,
									interactionRad: o.door.interactionRad,
									interpSpeed: o.door.openSpeed,
									interpPos: m.copy(e.pos),
									interpRot: s.oriToRad(e.ori),
									seq: e.door.seq,
									seqOld: e.door.seq,
									open: e.door.open,
									wasOpen: e.door.open
								};
								var l = o.door.casingImg;
								if (void 0 !== l) {
									var c = l.pos || m.create(0, 0);
									c = m.rotate(c, this.rot + .5 * Math.PI);
									var d = new n.Sprite;
									d.texture = n.Texture.fromImage(l.sprite), d.anchor.set(.5, .5), d.posOffset = c, d.imgScale = l.scale, d.tint = l.tint, d.zIdx = l.zIdx, d.alpha = l.alpha, d.visible = !0, this.door.casingSprite = d
								}
							}
							this.isButton = void 0 !== o.button, this.isButton && (this.button = {
								interactionRad: o.button.interactionRad,
								seq: e.button.seq,
								seqOld: e.button.seq
							})
						}
						if (this.isDoor && t) {
							this.door.canUse = e.door.canUse, this.door.open = e.door.open, this.door.seq = e.door.seq;
							var p = m.rotate(m.create(o.door.slideOffset, 0), this.rot + .5 * Math.PI);
							this.door.closedPos = e.door.open ? m.add(e.pos, p) : m.copy(e.pos)
						}
						if (this.isButton && t && (this.button.onOff = e.button.onOff, this.button.canUse = e.button.canUse, this.button.seq = e.button.seq), void 0 !== o.explosion && !this.smokeEmitter && e.healthT < .5 && !e.dead) {
							var u = m.normalize(m.create(1, 1));
							this.smokeEmitter = i.particleBarn.addEmitter("smoke_barrel", this.pos, u, 1, this.layer, Number.MAX_VALUE)
						}
						var h = this.dead ? o.img.residue : o.img.sprite;
						if (this.isButton && this.button.onOff && !this.dead && (h = o.button.useImg), h != this.img) {
							var g = m.create(.5, .5);
							this.isDoor && (g = o.door.spriteAnchor);
							var f = void 0 !== h;
							!f && this.sprite.parent && this.sprite.parent.removeChild(this.sprite), f && (this.sprite.texture = "none" == h ? n.Texture.EMPTY : n.Texture.fromImage(h), this.sprite.anchor.set(g.x, g.y), this.sprite.tint = o.img.tint, this.sprite.imgAlpha = this.dead ? .75 : o.img.alpha, this.sprite.zIdx = o.img.zIdx, this.sprite.alpha = this.sprite.imgAlpha), this.sprite.visible = f, this.img = h
						}
					}
				}, {
					key: "getInteraction",
					value: function() {
						return this.isButton && this.button.canUse ? {
							rad: this.button.interactionRad,
							action: "game-use",
							object: "game-" + this.type
						} : this.isDoor && this.door.canUse && !this.door.autoOpen ? {
							rad: this.door.interactionRad,
							action: this.door.open ? "game-close-door" : "game-open-door",
							object: ""
						} : null
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						var p = this.dead,
							h = this.exploded,
							g = this.isNew,
							f = this.pos,
							y = this.explodeParticle,
							b = this.sound;
						if (this.isButton) {
							var x = this.button;
							if (x.seq != x.seqOld) {
								var v = s.Defs[this.type];
								v.button.sound && i.playSound(v.button.sound, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								})
							}
							x.seqOld = x.seq
						}
						if (this.isDoor) {
							var k = this.door,
								_ = k.interpSpeed,
								w = m.sub(this.pos, k.interpPos),
								S = m.length(w),
								M = _ * e;
							S < M && (M = S);
							var T = S > 1e-4 ? m.div(w, S) : m.create(1, 0);
							k.interpPos = m.add(k.interpPos, m.mul(T, M));
							var P = Math.PI * k.interpSpeed,
								C = l.angleDiff(k.interpRot, this.rot),
								I = l.sign(C) * P * e;
							if (Math.abs(C) < Math.abs(I) && (I = C), k.interpRot += I, k.seq != k.seqOld) {
								var z = s.Defs[this.type],
									A = z.door.sound.change || "";
								"" != A && i.playSound(A, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								}), k.seqOld = k.seq
							}
							if (k.open != k.wasOpen) {
								var D = s.Defs[this.type],
									O = k.open ? D.door.sound.open : D.door.sound.close;
								i.playSound(O, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								}), k.wasOpen = k.open
							}
						}
						if (p && !h && (t.deadObstacleIds.push(this.__id), this.exploded = !0, this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null), !g)) {
							for (var L = r.toAabb(this.collider), E = m.mul(m.sub(L.max, L.min), .5), B = m.add(L.min, E), F = Math.floor(c.random(5, 11)), R = 0; R < F; R++) {
								var j = m.mul(m.randomUnit(), c.random(5, 15)),
									N = Array.isArray(y) ? y[Math.floor(Math.random() * y.length)] : y;
								a.addParticle(d.Defs[N], this.layer, B, j)
							}
							i.playSound(b.explode, {
								channel: "sfx",
								soundPos: B,
								layer: this.layer,
								muffled: !0
							})
						}
						if (this.smokeEmitter && (this.smokeEmitter.pos = m.copy(this.pos)), this.sprite.visible) {
							var q = this.dead ? 5 : this.sprite.zIdx,
								U = this.__id,
								G = this.layer;
							!this.dead && q >= 50 && 0 == this.layer && 0 == o.layer && (q += 100, G |= 2), n.addPIXIObj(this.sprite, u.World, G, q, U), this.isDoor && this.door.casingSprite && n.addPIXIObj(this.door.casingSprite, u.World, G, q + this.door.casingSprite.zIdx, U)
						}
						this.isNew = !1
					}
				}, {
					key: "render",
					value: function(e) {
						var t = this.isDoor ? this.door.interpPos : this.pos,
							a = this.isDoor ? this.door.interpRot : this.rot,
							i = this.scale,
							o = e.pointToScreen(t),
							n = e.pixels(i * this.imgScale);
						if (this.sprite.position.set(o.x, o.y), this.sprite.scale.set(n, n), this.sprite.rotation = -a, this.sprite.alpha = this.sprite.imgAlpha, this.isDoor && this.door.casingSprite) {
							var r = e.pointToScreen(m.add(this.door.closedPos, this.door.casingSprite.posOffset)),
								s = e.pixels(i * this.door.casingSprite.imgScale);
							this.door.casingSprite.position.set(r.x, r.y), this.door.casingSprite.scale.set(s, s), this.door.casingSprite.rotation = -a
						}
					}
				}, {
					key: "playHitFx",
					value: function(e, t, a, i, o) {
						for (var n = s.Defs[this.type], r = Math.floor(c.random(1, 2)), l = m.mul(t, 9.5), p = 0; p < r; p++) l = m.rotate(l, (Math.random() - .5) * Math.PI / 3), i.addParticle(d.Defs[this.hitParticle], a, e, l);
						o.playGroup(n.sound.bullet, {
							channel: "hits",
							soundPos: e,
							layer: a,
							muffled: !0
						})
					}
				}]), e
			}();
		e.exports = h
	},
	DM7t: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("DlZn"),
			r = {
				Invalid: 0,
				Player: 1,
				Obstacle: 2,
				Loot: 3,
				LootSpawner: 4,
				DeadBody: 5,
				Building: 6,
				Structure: 7,
				Decal: 8,
				Projectile: 9,
				Smoke: 10
			},
			s = 65535,
			l = function() {
				function e() {
					i(this, e), this.objects = [], this.idToObj = [];
					for (var t = 0; t < s; t++) this.idToObj[t] = null;
					this.idToType = new Uint8Array(s), this.dirtyPart = new Uint8Array(s), this.dirtyFull = new Uint8Array(s), this.idNext = 1, this.freeLists = {}
				}
				return o(e, [{
					key: "allocId",
					value: function(e) {
						var t = 1;
						if (this.idNext < s) t = this.idNext++;
						else {
							var a = this.freeLists[e] || [];
							a.length > 0 ? t = a.pop() : n(!1)
						}
						return t
					}
				}, {
					key: "freeId",
					value: function(e, t) {
						this.freeLists[e] = this.freeLists[e] || [], this.freeLists[e].push(t)
					}
				}, {
					key: "register",
					value: function(e, t) {
						var a = this.allocId(t);
						e.__id = a, e.__type = t, e.__arrayIdx = this.objects.length, this.objects[e.__arrayIdx] = e, this.idToObj[a] = e, this.idToType[a] = t, this.dirtyPart[a] = 1, this.dirtyFull[a] = 1
					}
				}, {
					key: "unregister",
					value: function(e) {
						n(e.__id > 0);
						var t = this.objects.pop();
						e !== t && (this.objects[e.__arrayIdx] = t, t.__arrayIdx = e.__arrayIdx), this.idToObj[e.__id] = null, this.freeId(e.__type, e.__id), this.idToType[e.__id] = 0, this.dirtyPart[e.__id] = 0, this.dirtyFull[e.__id] = 0, e.__id = 0, e.__type = 0
					}
				}]), e
			}();
		e.exports = {
			MAX_ID: s,
			Type: r,
			Registrar: l
		}
	},
	DMc6: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-03",
				locale: "pl"
			},
			"word-order": "svo",
			"index-slogan": "Battle Royale 2D",
			"index-region": "Region",
			"index-north-america": "Północna Ameryka",
			"index-europe": "Europa",
			"index-asia": "Azja",
			"index-players": "Gracze",
			"index-play-solo": "Graj sam",
			"index-play-duo": "Graj razem",
			"index-play-squad": "Graj oddział",
			"index-create-team": "Stwórz grupę",
			"index-how-to-play": "Jak Grać",
			"index-leave-team": "Wyjdź z grupy",
			"index-joining-team": "Wchodzenie do grupy",
			"index-creating-team": "Tworzenie grupy",
			"index-invite-link": "Link Zapraszający",
			"index-solo": "Solo",
			"index-duo": "Wspólna gra",
			"index-squad": "Drużyna",
			"index-auto-fill": "Automatyczne Uzupełnianie",
			"index-no-fill": "Bez Uzupełniania",
			"index-waiting-for-leader": "Czekanie na przywódce do rozpoczęcia gry...",
			"index-play": "Graj",
			"index-featured-youtuber": "Wyróżniony YouTuber",
			"index-settings": "Ustawienia",
			"index-high-resolution": "Wysoka Rozdzielczość (zaznacz aby poprawić jakość wizualną)",
			"index-screen-shake": "Trzęsienie ekranu",
			"index-master-volume": "Głośność ogólną",
			"index-sfx-volume": "Głośność efektów dźwiękowych",
			"index-music-volume": "Głośność muzyki",
			"index-team-is-full": "Grupa jest pełna!",
			"index-failed-joining-team": "Nie udało się dołączyć do grupy.",
			"index-failed-creating-team": "Nie udało się stworzyć grupy.",
			"index-failed-finding-game": "Nie znaleziono gry.",
			"index-failed-joining-game": "Nie udało się dołączyć do gry.",
			"index-lost-connection": "Utracono połączenie z grupą.",
			"index-host-closed": "Host zamnknął połączenie.",
			"index-invalid-protocol": "Przestarzała wersja klienta.",
			"index-view-more": "Zobacz więcej",
			"index-back-to-main": "Powrót na Stronę Główną",
			"index-most-kills": "Najwięcej Zabić",
			"index-total-kills": "Wszystkie Zabicia",
			"index-total-wins": "Wszystkie Wygrane",
			"index-top-5-percent": "Najlepsze 5 procent",
			"index-kill-death-ratio": "Średnia zabójstw do zgonów",
			"index-for": "Dla",
			"index-today": "Dzisiaj",
			"index-this-week": "Ten Tydzień",
			"index-all-time": "Od początku",
			"index-top-100": "Najlepsze 100",
			"index-rank": "Ranga",
			"index-player": "Gracz",
			"index-total-games": "Wszystkie Gry",
			"index-controls": "Sterowanie",
			"index-movement": "Ruch",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Celowanie",
			"index-aim-ctrl": "Myszka",
			"index-punch": "Uderzenie",
			"index-shoot": "Strzał",
			"index-shoot-ctrl": "Lewy Przycisk Myszy",
			"index-change-weapons": "Zmień Broń",
			"index-change-weapons-ctrl": "1 do 4 albo kółko myszy",
			"index-stow-weapons": "Schowaj Broń (Tryb Pięści)",
			"index-stow-weapons-ctrl": "3 lub E",
			"index-swap-weapons": "Zmień na poprzednią broń",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Przeładuj",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Przybliżenie",
			"index-scope-zoom-ctrl": "Lewy Przycisk Myszy lub Przybliżenie",
			"index-pickup": "Podnieś",
			"index-loot": "Łup",
			"index-revive": "Wskrześ",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Użyj przyboru medycznego",
			"index-use-medical-ctrl": "Lewy Przycisk Myszy na przyborze, lub 7 do 0",
			"index-drop-item": "Upuść",
			"index-drop-item-ctrl": "Prawy Przycisk Myszy na przedmiocie",
			"index-cancel-action": "Przerwij czynność",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Pokaż Mapę",
			"index-view-map-ctrl": "M albo G",
			"index-toggle-minimap": "Minimapa",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Użyj menu znaczników drużynowych",
			"index-use-ping-ctrl": "Przytrzymaj C, następnie przytrzymaj Prawy Przycisk Myszy i przesuń myszą po czym puść Prawy Przycisk Myszy",
			"index-use-emote": "Użyj menu emotikon",
			"index-use-emote-ctrl": "Przytrzymaj Prawy Przycisk Myszy i przesuń myszą po czym puść Prawy Przycisk Myszy",
			"index-tips-1-desc": "Celem surviv.io jest pozostanie ostatniom zyjącym graczem. Żyjesz tylko raz na gre - tutaj nie ma odrodzeń!",
			"index-tips-2": "PUBG 2D",
			"index-tips-2-desc": "Jeśli kiedykolwiek grałeś w grę typu Battle Royale jak PUBG, Fortnite czy H1Z1, to już jesteś w połowie drogi! Wyobraź sobie, że surviv.io to taki PUBG 2D.",
			"index-tips-3": "Zbieraj i Zabijaj",
			"index-tips-3-desc": "Rozpoczynasz grę bez żadnych przedmiotów, nie licząc podstawowego plecaka. Poruszaj się po mapie aby znaleźć przedmioty typu: broń, amunicja, lunety i medykamenty. Wyeliminuj pozostałych graczy i zabierz ich przedmioty!",
			"index-tips-4": "Czerwone = Złe!",
			"index-tips-4-desc": "Nie tylko gracze mogą cię zranić. Mordercza czerwona strefa będzie zmniejszać się z różnych stron mapy i będzie zadawać coraz większe obrażenia jeśli będziesz w niej pozostawać. Spoglądaj na mape i pilnuj się.",
			"game-alive": "Żywych",
			"game-reloading": "Przeładowanie",
			"game-using": "Używanie",
			"game-reviving": "Wskrzeszanie",
			"game-revive-teammate": "Wskrześ Przyjaciela",
			"game-equip": "Weź",
			"game-cancel": "Przerwij",
			"game-open-door": "Otwórz Drzwi",
			"game-close-door": "Zamknij Drzwi",
			"game-You": "Ty",
			"game-you": "ty",
			"game-themselves": "oni",
			"game-yourself": "siebie",
			"game-you-died": "umarłeś",
			"game-player-died": "umarł",
			"game-with": "z",
			"game-knocked-out": "powalił",
			"game-killed": "zabił",
			"game-finally-killed": "wresczie zabił",
			"game-finally-bled-out": "w końcu się wykrwawił",
			"game-died-outside": "umarł poza strefą",
			"game-the-red-zone": "Czerwona strefa",
			"game-waiting-for-players": "Oczekiwanie na graczy",
			"game-spectating": "Obserwujesz",
			"game-red-zone-advances": "Czerwona strefa zmniejszy się za",
			"game-red-zone-advancing": "Czerwona strefa zmniejsza się, udaj się do bezpiecznej strefy!",
			"game-seconds": "sekundy",
			"game-minutes": "minuty",
			"game-minute": "minuta",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Za mało miejsca!",
			"game-item-already-owned": "Posiadasz już ten przedmiot!",
			"game-item-already-equipped": "Używasz już tego przedmiotu!",
			"game-better-item-equipped": "Posiadasz lepszy przedmiot!",
			"game-play-new-game": "Graj jescze raz",
			"game-spectate": "Obserwuj",
			"game-full-screen": "Pełny Ekran",
			"game-sound": "Dzwięk",
			"game-quit-game": "Wyjdź z gry",
			"game-return-to-game": "Wróć do gry",
			"game-hide-match-stats": "Ukryj statystyki",
			"game-view-match-stats": "Wyświetl statystyki",
			"game-previous-teammate": "Poprzedni przyjaciel",
			"game-next-teammate": "Następny przyjaciel",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Wyjdź z gry",
			"game-your-results": "Twoje rezultaty",
			"game-chicken": "Mecz wygrany! Kurczak podany!",
			"game-won-the-game": "wygrał grę.",
			"game-team-eliminated": "Twoja grupa została wyeliminowana.",
			"game-rank": "Ranga",
			"game-team-rank": "Ranga Grupy",
			"game-team-kills": "Zabicia Grupy",
			"game-kill": "Zabić",
			"game-kills": "Zabić",
			"game-damage-dealt": "Zadano obrażeń",
			"game-damage-taken": "Otrzymano obrażeń",
			"game-survived": "Przetrwano",
			"game-backpack00": "Kieszonka",
			"game-backpack01": "Mały plecak",
			"game-backpack02": "Plecak",
			"game-backpack03": "Wojskowy plecak",
			"game-bandage": "Bandaż",
			"game-bandage-tooltip": "Kliknij lewym przyciskiem myszy aby przywrócić 15 punktów zdrowia.",
			"game-healing-tooltip": "Nie leczy powyżej 75 punktów zdrowia.",
			"game-healthkit": "Apteczka",
			"game-healthkit-tooltip": "Kliknij lewym przyciskiem myszy aby przywrócić 100 punktów zdrowia.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Kliknij lewym przyciskiem myszy aby zwiększyć adrenalinę o 25.",
			"game-adrenaline-tooltip": "Adrenalina przywraca zdrowie w miare upływu czasu.",
			"game-painkiller": "Pigułki",
			"game-painkiller-tooltip": "Kliknij lewym przyciskiem myszy aby zwiększyć adrenalinę o 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Amunicja dla M9, Glock, MP5, MAC-10, UMP9 i Vector.",
			"game-12gauge": "Kaliber 12",
			"game-12gauge-tooltip": "Amunicja dla M870, Saiga-12 i MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Amunicja dla AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 i DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Amunicja dla FAMAS, HK416, Mk 12 i M249.",
			"game-chest01": "Kamizelka Poziom 1",
			"game-chest02": "Kamizelka Poziom 2",
			"game-chest03": "Kamizelka Poziom 3",
			"game-helmet01": "Hełm Poziom 1",
			"game-helmet02": "Hełm Poziom 2",
			"game-helmet03": "Hełm Poziom 3",
			"game-1xscope": "1x Luneta",
			"game-2xscope": "2x Luneta",
			"game-4xscope": "4x Luneta",
			"game-8xscope": "8x Luneta",
			"game-15xscope": "15x Luneta",
			"game-level-1": "P. 1",
			"game-level-2": "P. 2",
			"game-level-3": "P. 3",
			"game-outfitBase": "Strój",
			"game-outfitRoyalFortune": "Powodzenie Króla",
			"game-outfitKeyLime": "Limonka",
			"game-outfitCobaltShell": "Skorupa",
			"game-outfitCarbonFiber": "Włókno Węglowe",
			"game-outfitDarkGloves": "Profesjonalista",
			"game-outfitGhillie": "Kameleon",
			"game-outfitCamo": "Polowanie",
			"game-outfitRed": "Trenowanie",
			"game-outfitWhite": "Arktyka",
			"game-outfitWoodland": "Leśna Walka",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "Granat Odłamkowy",
			"game-hud-frag": "Odłamkowy",
			"game-barrel_01": "beczką",
			"game-silo_01": "silosem",
			"game-oven_01": "piekarnik"
		};
		e.exports = i
	},
	EZ6M: function(e, t, a) {
		"use strict";

		function i(e, t) {
			this.min = e, this.max = t
		}

		function o(e) {
			return e instanceof i ? e.getRandom() : e
		}

		function n(e) {
			return e instanceof Function ? e() : e
		}

		function r() {
			this.active = !1, this.ticker = 0, this.def = {}, this.sprite = new m.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(1, 1), this.sprite.visible = !1, this.hasParent = !1
		}

		function s() {
			this.active = !1
		}

		function l(e) {
			this.renderer = e, this.particles = [], this.emitters = [];
			for (var t = 0; t < 256; t++) this.particles[t] = new r(this.display)
		}
		var c = a("DlZn"),
			m = a("gKxX"),
			d = a("0od3"),
			p = a("Tf6H"),
			u = a("/2+T"),
			h = a("xgte"),
			g = h.RenderType;
		i.prototype = {
			getRandom: function() {
				return p.random(this.min, this.max)
			}
		};
		var f = {
				bloodSplat: {
					image: ["img/particles/part-splat-01.svg", "img/particles/part-splat-02.svg", "img/particles/part-splat-03.svg"],
					life: .5,
					drag: 1,
					rotVel: 0,
					scale: {
						start: .04,
						end: new i(.15, .2),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(16711680, 1, p.random(.45, .8)))
					}
				},
				rockChip: {
					image: ["img/map/map-stone-01.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				rockFrag: {
					image: ["img/map/map-stone-01.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				woodChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
					}
				},
				woodLog: {
					image: ["img/particles/part-log-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
					}
				},
				woodPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
					}
				},
				woodShard: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.06, .15),
						end: new i(.02, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
					}
				},
				whitePlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				redPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.02, 1, p.random(.26, .28)))
					}
				},
				barrelPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.08, .18),
						end: new i(.07, .17),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.09, .8, p.random(.66, .68)))
					}
				},
				shackFrag: {
					image: ["img/particles/part-panel-01.svg"],
					life: new i(.5, 1.5),
					drag: new i(1, 5),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.25, .55),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .24, p.random(.38, .41)))
					}
				},
				outhouseFrag: {
					image: ["img/particles/part-panel-01.svg"],
					life: new i(.5, 1.5),
					drag: new i(1, 5),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.25, .55),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .79, p.random(.52, .54)))
					}
				},
				outhouseChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
					}
				},
				outhousePlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
					}
				},
				barrelChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				barrelFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				toiletMetalFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(4, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				depositBoxGreyFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(7, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.15, .25),
						end: new i(.12, .2),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.36, .38)))
					}
				},
				depositBoxGoldFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(6, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.2, .35),
						end: new i(.18, .25),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.64, .66)))
					}
				},
				lockerFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(7, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.15, .2),
						end: new i(.12, .15),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .23, p.random(.51, .53)))
					}
				},
				book: {
					image: ["img/particles/part-book-01.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.09, .19),
						end: new i(.07, .17),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .42, p.random(.72, .74)))
					}
				},
				goldChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.88, .9)))
					}
				},
				greenChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.4, .18, p.random(.5, .62)))
					}
				},
				whiteChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				glassChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 5),
					rotVel: new i(1 * Math.PI, 6 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: 8444415
				},
				tanChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .35, p.random(.48, .52)))
					}
				},
				ltgreenChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.2, .42, p.random(.38, .42)))
					}
				},
				brickChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, .71, p.random(.32, .34)))
					}
				},
				redChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.98, 1, p.random(.52, .54)))
					}
				},
				blueChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.64, 1, p.random(.83, .85)))
					}
				},
				windowFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.4, .8),
					drag: new i(1, 4),
					rotVel: new i(1 * Math.PI, 6 * Math.PI),
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: .8,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: 8444415
				},
				toiletFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				leaf: {
					image: ["img/particles/part-leaf-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				"9mm": {
					image: ["img/particles/part-shell-01.svg"],
					life: new i(.5, .75),
					drag: new i(3, 4),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .0625,
						end: .0325,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"762mm": {
					image: ["img/particles/part-shell-02.svg"],
					life: new i(.75, 1),
					drag: new i(1.5, 2.5),
					rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
					scale: {
						start: .075,
						end: .045,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.925, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"556mm": {
					image: ["img/particles/part-shell-04.svg"],
					life: new i(.75, 1),
					drag: new i(1.5, 2.5),
					rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
					scale: {
						start: .075,
						end: .045,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.925, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"12gauge": {
					image: ["img/particles/part-shell-03.svg"],
					life: new i(.5, .75),
					drag: new i(1, 2),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .1,
						end: .05,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"50AE": {
					image: ["img/particles/part-shell-01.svg"],
					life: new i(.5, .75),
					drag: new i(3, 4),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .0625,
						end: .0325,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				fragPin: {
					image: ["img/particles/part-frag-pin-01.svg"],
					life: new i(.5, .5),
					drag: new i(.9, 1),
					rotVel: 0,
					scale: {
						start: .18,
						end: .14,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.5, 1)
					},
					color: 16777215
				},
				fragLever: {
					image: ["img/particles/part-frag-lever-01.svg"],
					life: new i(.5, .5),
					drag: new i(.9, 1),
					rotVel: 9 * Math.PI,
					scale: {
						start: .18,
						end: .14,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.5, 1)
					},
					color: 16777215
				},
				explosionBurst: {
					image: ["img/particles/part-frag-burst-01.svg"],
					life: .5,
					drag: 0,
					rotVel: 0,
					scale: {
						start: 1,
						end: 4,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: 8487297
				},
				explosionSmoke: {
					image: ["img/particles/part-smoke-01.svg"],
					life: new i(2, 3),
					drag: 0,
					rotVel: new i(.25 * Math.PI, .5 * Math.PI),
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				}
			},
			y = {
				smoke_barrel: {
					particle: "explosionSmoke",
					rate: new i(.2, .3),
					radius: 0,
					speed: new i(2, 3),
					angle: .1 * Math.PI,
					maxCount: Number.MAX_VALUE
				}
			};
		r.prototype = {
			init: function(e, t, a, i, r, s, l, c) {
				this.active = !0, this.ticker = 0, c ? (this.hasParent = !0, c.addChild(this.sprite)) : (this.hasParent = !1, e.addPIXIObj(this.sprite, g.Particle, a, 20)), this.pos = u.copy(i), this.vel = u.copy(r), this.rot = l, this.def = t, this.life = o(t.life), this.drag = o(t.drag), this.rotVel = o(t.rotVel) * (Math.random() < .5 ? -1 : 1), this.rotDrag = o(t.drag) / 2, this.scaleStart = o(t.scale.start) * s, this.scaleEnd = o(t.scale.end) * s, this.alphaStart = o(t.alpha.start), this.alphaEnd = o(t.alpha.end);
				var d = Array.isArray(t.image) ? t.image[Math.floor(Math.random() * t.image.length)] : t.image;
				this.sprite.texture = m.Texture.fromImage(d), this.sprite.tint = n(t.color), this.sprite.visible = !0
			},
			free: function() {
				this.active = !1, this.sprite.visible = !1
			}
		}, s.prototype = {
			init: function(e, t, a, i, o, n) {
				this.active = !0, this.enabled = !0, this.type = e, this.pos = u.copy(t), this.dir = u.copy(a), this.scale = i, this.layer = o, this.duration = n, this.ticker = 0, this.nextSpawn = 0, this.spawnCount = 0
			},
			free: function() {
				this.active = !1
			},
			stop: function() {
				this.duration = this.ticker
			}
		}, l.prototype = {
			addParticle: function(e, t, a, i, o, n, s) {
				c(void 0 !== e);
				for (var l = null, m = 0; m < this.particles.length; m++)
					if (!this.particles[m].active) {
						l = this.particles[m];
						break
					}
				return l || (l = new r, this.particles.push(l)), o = void 0 !== o ? o : 1, n = void 0 !== n ? n : Math.random() * Math.PI * 2, l.init(this.renderer, e, t, a, i, o, n, s), l
			},
			addEmitter: function(e, t, a, i, o, n) {
				for (var r = null, l = 0; l < this.emitters.length; l++)
					if (!this.emitters[l].active) {
						r = this.emitters[l];
						break
					}
				return r || (r = new s, this.emitters.push(r)), r.init(e, t, a, i, o, n), r
			},
			update: function(e, t) {
				for (var a = 0; a < this.emitters.length; a++) {
					var i = this.emitters[a];
					if (i.active && i.enabled) {
						i.ticker;
						i.ticker += e, i.nextSpawn -= e;
						for (var n = y[i.type]; i.nextSpawn <= 0 && i.spawnCount < n.maxCount;) {
							var r = i.scale * n.radius,
								s = u.add(i.pos, u.mul(u.randomUnit(), Math.random() * r)),
								l = u.rotate(i.dir, (Math.random() - .5) * n.angle),
								c = u.mul(l, o(n.speed)),
								m = Math.random() * Math.PI * 2;
							this.addParticle(f[n.particle], i.layer, s, c, i.scale, m, null);
							i.nextSpawn += o(n.rate), i.spawnCount++
						}
						i.ticker >= i.duration && i.free()
					}
				}
				for (var p = 0; p < this.particles.length; p++) {
					var h = this.particles[p];
					if (h.active) {
						h.vel = u.mul(h.vel, 1 / (1 + e * h.drag)), h.pos = u.add(h.pos, u.mul(h.vel, e)), h.rotVel *= 1 / (1 + e * h.rotDrag), h.rot += h.rotVel * e, h.ticker += e;
						var g = Math.min(h.ticker / h.life, 1),
							b = h.hasParent ? h.pos : t.pointToScreen(h.pos),
							x = d.remap(g, h.def.scale.lerp.min, h.def.scale.lerp.max, h.scaleStart, h.scaleEnd),
							v = d.remap(g, h.def.alpha.lerp.min, h.def.alpha.lerp.max, h.alphaStart, h.alphaEnd);
						h.hasParent || (x = t.pixels(x)), h.sprite.position.set(b.x, b.y), h.sprite.scale.set(x, x), h.sprite.rotation = h.rot, h.sprite.alpha = v, g >= 1 && h.free()
					}
				}
			}
		}, e.exports = {
			Defs: f,
			ParticleBarn: l
		}
	},
	FRcz: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-17",
				locale: "fr"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle royale",
			"index-region": "Région",
			"index-north-america": "Amérique du Nord",
			"index-europe": "Europe",
			"index-asia": "Asie",
			"index-players": "joueurs",
			"index-play-solo": "Jouer en solo",
			"index-play-duo": "Jouer en duo",
			"index-play-squad": "Jouer en squad",
			"index-join-team": "Joindre une équipe",
			"index-create-team": "Créer une équipe",
			"index-how-to-play": "Comment jouer",
			"index-leave-team": "Quitter l’équipe",
			"index-joining-team": "Rejoindre l’équipe",
			"index-creating-team": "Création d'une équipe",
			"index-invite-link": "Lien d'invitation",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Squad",
			"index-auto-fill": "Remplir",
			"index-no-fill": "Ne pas remplir",
			"index-waiting-for-leader": "En attente du chef pour débuter",
			"index-play": "Jouer",
			"index-featured-youtuber": "Youtubeur en vedette",
			"index-settings": "Paramètres",
			"index-high-resolution": "Haute résolution (cocher pour une meilleure qualité)",
			"index-screen-shake": "Tremblement d'écran",
			"index-master-volume": "Volume principal",
			"index-sfx-volume": "Volume des effets",
			"index-music-volume": "Volume de la musique",
			"index-mobile-announce": "Maintenant disponible sur mobile !",
			"index-mobile-tooltip": "Visitez <span>surviv.io</span> depuis votre mobile pour pouvoir jouer partout !",
			"index-team-is-full": "L'équipe est pleine!",
			"index-failed-joining-team": "Impossible de joindre l'équipe.",
			"index-failed-creating-team": "Impossible de créer l'équipe.",
			"index-failed-finding-game": "Impossible de trouver une partie.",
			"index-failed-joining-game": "Impossible de joindre une partie.",
			"index-lost-connection": "Connexion à l'équipe perdue.",
			"index-host-closed": "L'hôte a fermé la connexion.",
			"index-view-more": "Afficher plus",
			"index-back-to-main": "Retour au menu principal",
			"index-most-kills": "Plus de meutres",
			"index-total-kills": "Total des meurtres",
			"index-total-wins": "Total des victoires",
			"index-top-5-percent": "Top 5 pour cent",
			"index-kill-death-ratio": "Ratio E/M",
			"index-for": "pour",
			"index-today": "Aujourd'hui",
			"index-this-week": "Cette semaine",
			"index-all-time": "Tous les temps",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Joueur",
			"index-total-games": "Total des parties",
			"index-controls": "Contrôles",
			"index-movement": "Mouvement",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Viser",
			"index-aim-ctrl": "Souris",
			"index-punch": "Frapper",
			"index-shoot": "Tirer",
			"index-shoot-ctrl": "Clic gauche",
			"index-change-weapons": "Changer d’armes",
			"index-change-weapons-ctrl": "1 à 4 ou molette",
			"index-stow-weapons": "Ranger les armes (Mode frapper)",
			"index-stow-weapons-ctrl": "3 ou E",
			"index-swap-weapons": "Arme précédente",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Recharger",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zoom du scope",
			"index-scope-zoom-ctrl": "Clique gauche sur le zoom",
			"index-pickup": "Prendre",
			"index-loot": "Ramasser",
			"index-revive": "Réanimer",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Se soigner",
			"index-use-medical-ctrl": "Clique gauche sur l'objet ou 7 à 0",
			"index-drop-item": "Lâcher l'objet",
			"index-drop-item-ctrl": "Clique droit sur l'ojhet",
			"index-cancel-action": "Annuler l'action",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Voir la carte",
			"index-view-map-ctrl": "M ou G",
			"index-toggle-minimap": "Basculer la carte",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Utiliser la roue de ping d'équipe",
			"index-use-ping-ctrl": "Tenez C, puis tenez un clic droit et traînez la souris, puis lâchez le clic droit.",
			"index-use-emote": "Utiliser la roue d'émotes",
			"index-use-emote-ctrl": "Tenez un clic droit et traînez la souris, puis lâchez le clic droit.",
			"index-tips-1-desc": "Le but de surviv.io est d'être le dernier joueur vivant. Vouz vivez seulement une fois par match - pas de respawn!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": 'Si vous avez joué d\'autres jeux type "battle royale" comme PUBG, Fortnite ou H1Z1, vous êtes à moitié chemin! Pensez à surviv.io comme PUBG en 2D.',
			"index-tips-3": "Piller et tuer",
			"index-tips-3-desc": "Vous commencerez le jeu avec pas d'objets à part d'un simple sac à dos. Naviguez le terrain pour trouver du butin: des armes, balles, viseurs et objets médicaux. Éliminez les autre joueurs et vous pouver prendre leurs objets!",
			"index-tips-4": "Rouge = Mauvais!",
			"index-tips-4-desc": "Les joueurs ne sont pas les seules choses qui peuvent vous tuer. La zone rouge meutrière va venir vers vous pas les côtés du terrain et inflige des dégâts de plus en plus dangereux. Gardez un oeil sur ca carte et restez saufs. ",
			"game-alive": "En vie",
			"game-reloading": "Rechargement",
			"game-using": "Utilisation :",
			"game-reviving": "Réanimation de",
			"game-revive-teammate": "Réaminez votre coéquipier",
			"game-equip": "Équiper",
			"game-cancel": "Annuler",
			"game-open-door": "Ouvrir la porte",
			"game-close-door": "Fermer la porte",
			"game-You": "Vous",
			"game-you": "vous avez",
			"game-themselves": "lui-même",
			"game-yourself": "toi-même",
			"game-you-died": "êtes mort",
			"game-player-died": "est mort",
			"game-with": "avec",
			"game-knocked-out": "a assommé",
			"game-killed": "tué",
			"game-finally-killed": "a finalemaent tué",
			"game-finally-bled-out": "est finalement mort",
			"game-died-outside": "est mort hors de la zone sûre",
			"game-the-red-zone": "La zone rouge",
			"game-waiting-for-players": "En attente de joueurs",
			"game-spectating": "En train de regarder",
			"game-red-zone-advances": "La zone rouge avance dans",
			"game-red-zone-advancing": "La zone rouge avance, allez vers la zone sûre!",
			"game-seconds": "secondes",
			"game-minutes": "minutes",
			"game-minute": "minute",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Pas assez d'espace!",
			"game-item-already-owned": "Vous avez déjà cet objet!",
			"game-item-already-equipped": "L'objet est déjà équipé",
			"game-better-item-equipped": "Un meilleur objet est déjà équipé!",
			"game-play-new-game": "Nouvelle partie",
			"game-spectate": "Regarder",
			"game-full-screen": "Plein écran",
			"game-sound": "Son",
			"game-quit-game": "Quitter la partie",
			"game-return-to-game": "Retourner au jeu",
			"game-hide-match-stats": "Masquer les statistiques",
			"game-view-match-stats": "Voir les statistiques",
			"game-previous-teammate": "Coéquipier précédent",
			"game-next-teammate": "Coéquipier suivant",
			"game-leave-game": "Quitter la partie",
			"game-your-results": "Votre résultat",
			"game-chicken": "Victoire! Les poulets sont à nous!",
			"game-won-the-game": "a gagné la partie.",
			"game-team-eliminated": "Votre équipe à été éliminée.",
			"game-rank": "Rang",
			"game-team-rank": "Rang d'équipe",
			"game-team-kills": "Meurtres de l'équipe",
			"game-kill": "Meurtre",
			"game-kills": "Meurtres",
			"game-damage-dealt": "Dégâts infligés",
			"game-damage-taken": "Dégâts subis",
			"game-survived": "Temps survécu",
			"game-backpack00": "Poche",
			"game-backpack01": "Petit sac à dos",
			"game-backpack02": "Sac à dos régulier",
			"game-backpack03": "Sac à dos militaire",
			"game-bandage": "Pansements",
			"game-bandage-tooltip": "Clique gauche pour restaurer 15 points de vie.",
			"game-healing-tooltip": "Ne peut restaurer plus de 75 points de vie.",
			"game-healthkit": "Kit médical",
			"game-healthkit-tooltip": "Clique gauche pour restaurer 100 points de vie.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Clique gauche pour augmenter l'adrénaline de 25.",
			"game-adrenaline-tooltip": "L'adrénaline restaure la vie au fil du temps.",
			"game-painkiller": "Pillules",
			"game-painkiller-tooltip": "Clique gauche pour augmenter l'adrénaline de 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Balles pour M9, Glock, MP5, MAC-10, UMP9 et Vector.",
			"game-12gauge": "Calibre 12",
			"game-12gauge-tooltip": "Balles pour M870, Saiga-12 et MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Balles pour AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 et DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Balles pour FAMAS, HK416, Mk 12 et M249.",
			"game-chest01": "Veste de niveau 1",
			"game-chest02": "Veste de niveau 2",
			"game-chest03": "Veste de niveau 3",
			"game-helmet01": "Casque de niveau 1",
			"game-helmet02": "Casque de niveau 2",
			"game-helmet03": "Casque de niveau 3",
			"game-1xscope": "Viseur x1",
			"game-2xscope": "Viseur x2",
			"game-4xscope": "Viseur x4",
			"game-8xscope": "Viseur x8",
			"game-15xscope": "Viseur x15",
			"game-level-1": "Niv. 1",
			"game-level-2": "Niv. 2",
			"game-level-3": "Niv. 3",
			"game-outfitBase": "Skin de base",
			"game-outfitRoyalFortune": "Fortune royale",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Coquille de cobalt",
			"game-outfitCarbonFiber": "Fibre de carbone",
			"game-outfitDarkGloves": "Le professionnel",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Camouflage forêt",
			"game-outfitRed": "Cible d'entrainement",
			"game-outfitWhite": "Vengeur arctique",
			"game-outfitWoodland": "Combat de forêt",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Grenade à fragmentation",
			"game-hud-frag": "Frag.",
			"game-smoke": "Grenade fumigène",
			"game-hud-smoke": "Fumi.",
			"game-incendiary": "Grenade à incendie",
			"game-barrel_01": "un baril",
			"game-silo_01": "un silo",
			"game-oven_01": "un four"
		};
		e.exports = i
	},
	FT2U: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = a("v8aM"),
			s = r.EmoteType,
			l = r.EmoteData,
			c = a("85i3"),
			m = a("Jr6A"),
			d = a("SEs0"),
			p = function() {
				function e(t) {
					i(this, e), this.config = t, this.selectedEmote = {
						prevSlot: "",
						img: "",
						id: 0
					}, this.unlockTypes = {
						twitter: {
							locked: "Follow to unlock GG, Question and Tombstone emotes!",
							unlocked: "GG, Question and Tombstone emotes unlocked!",
							config: "twitterFollow"
						},
						youtube: {
							locked: "Subscribe to unlock Joy, Sob and Thinking emotes!",
							unlocked: "Joy, Sob and Thinking emotes unlocked!",
							config: "youtubeSubscribe"
						},
						facebook: {
							locked: "Like to unlock flag emotes!",
							unlocked: "Flag emotes unlocked!",
							config: "facebookLike"
						},
						account: {
							locked: "Create an account to unlock emotes!",
							unlocked: "Account emotes unlocked!"
						}
					}
				}
				return o(e, [{
					key: "init",
					value: function(e) {
						var t = this,
							a = n("#modal-customize");
						n("#btn-customize").click(function() {
							return a.finish(), e.loggedIn && t.unlockEmotes("account"), a.css("display", "block"), n("#start-bottom-right").fadeOut(200), d.addModalCloseListener(), !1
						}), n(".btn-account-change-avatar, .account-avatar").click(function(a) {
							e.loggedIn && t.populateAvatar(e.profile.avatar)
						});
						var i = this;
						n("#customize-emote-wheel, #customize-emote-autos").find(".ui-emote-parent").each(function(e, a) {
							var i = n(a),
								o = t.config.get(i.data("slot")),
								r = l[o],
								s = {
									img: "",
									id: 0
								};
							void 0 != r && (s = {
								img: r.texture,
								id: o
							}), i.find(".customize-emote-image").data("id", s.id), i.find(".customize-emote-image").css("background-image", "url(" + s.img + ")")
						});
						var o = Object.keys(l);
						o.sort(function(e, t) {
							return l[e].category - l[t].category || e - t
						});
						for (var r = [], p = 0; p < o.length; p++)
							for (var u in s) s[u] == o[p] && r.push(s[u]);
						for (var h = 0; h < r.length; h++) {
							var g = r[h];
							if (l.hasOwnProperty(g)) {
								var f = l[g],
									y = f.noCustom || !1;
								if (!f.teamOnly && !y) {
									var b = !1,
										x = "";
									f.twitterFollow && (b = !0, x = "twitter"), f.youtubeSubscribe && (b = !0, x = "youtube"), f.facebookLike && (b = !0, x = "facebook"), f.accountLogin && (b = !0, x = "account");
									var v = "customize-list-item";
									v += b ? " customize-list-item-locked" : " customize-list-item-unlocked";
									var k = n("<div/>", {
										class: v,
										"data-lock-reason": x
									});
									k.append(n("<div/>", {
										class: "customize-emote-image",
										style: "background-image: url(" + f.texture + ")",
										draggable: !b,
										"data-id": g
									})), n("#modal-customize-list").append(k), v = "customize-list-item customize-list-item-unlocked", k = n("<div/>", {
										class: v
									}), k.append(n("<div/>", {
										class: "customize-emote-image",
										style: "background-image: url(" + f.texture + ")",
										draggable: !b,
										"data-id": g
									})), n("#modal-account-avatar-list").append(k)
								}
							}
						}
						n(".customize-list-item-locked").hover(function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
						}, function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
						}), this.selectableSlots = n(".customize-col, .customize-list-item"), this.emoteSlots = n(".customize-col"), this.highlightedSlots = this.emoteSlots.siblings(".ui-emote-hl"), this.highlightOpacityMin = .4, this.emoteSelected = !1, n("#btn-account-login-unlock").click(function() {
							return n("#account-details-guest").trigger("click"), n(".modal").fadeOut(200), !1
						}), this.selectableSlots.on("mouseup", function() {
							if (!n(this).hasClass("customize-list-item-locked")) return i.emoteSelected && !n(this).hasClass("customize-list-item") ? void(i.emoteSelected = !1) : void i.selectEmote(n(this))
						}), this.selectableSlots.on("dragstart", function(e) {
							if (!n(this).hasClass("customize-list-item-locked") && (i.selectEmote(n(this)), !m.detectIE(!0))) {
								var t = document.createElement("img");
								t.src = i.selectedEmote.img.replace("url(", "").replace(")", "").replace(/\"/gi, ""), e.originalEvent.dataTransfer.setDragImage(t, 64, 64)
							}
						}), this.emoteSlots.on("drop", function(e) {
							e.originalEvent.preventDefault();
							var t = n(this).parent();
							i.updateSlot(t, i.selectedEmote.img, i.selectedEmote.id), i.emoteSelected = !1
						}), this.emoteSlots.on("mousedown", function(e) {
							if (i.emoteSelected) {
								e.stopPropagation();
								var t = n(this).parent();
								i.updateSlot(t, i.selectedEmote.img, i.selectedEmote.id)
							}
						}), this.emoteSlots.on("dragover", function(e) {
							e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", 1)
						}), this.emoteSlots.on("dragleave", function(e) {
							e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", i.highlightOpacityMin)
						}), n(document).on("dragend", function(e) {
							e.originalEvent.preventDefault(), i.highlightedSlots.css({
								display: "none",
								opacity: 0
							})
						}), n(".ui-emote-auto-trash").click(function() {
							var e = n(this).parent();
							i.updateSlot(e, "", 1)
						});
						for (var _ in this.unlockTypes)
							if (this.unlockTypes.hasOwnProperty(_) && "account" != _) {
								var w = this.unlockTypes[_];
								this.config.get(w.config) && this.unlockEmotes(_)
							}
						n("#btn-twitter-follow-unlock, #btn-youtube-subscribe-unlock, #btn-facebook-like-unlock").click(function() {
							if (n(this).hasClass("btn-social-unlocked")) return !1;
							var e = n(this).data("lock-reason");
							i.unlockEmotes(e), c.storeGeneric("loadouts", "socialUnlock/emotes/" + e)
						})
					}
				}, {
					key: "selectEmote",
					value: function(e) {
						var t = e.hasClass("customize-list-item");
						this.emoteSelected = !0;
						var a = t ? e : e.parent(),
							i = a.find(".customize-emote-image");
						if (this.selectedEmote = {
								prevSlot: t ? null : a,
								img: i.css("background-image"),
								id: i.data("id")
							}, this.highlightedSlots.css({
								display: "block",
								opacity: this.highlightOpacityMin
							}), this.selectableSlots.removeClass("customize-list-item-selected"), t) e.addClass("customize-list-item-selected");
						else {
							a.find(".ui-emote-hl").css("opacity", 1)
						}
					}
				}, {
					key: "updateSlot",
					value: function(e, t, a) {
						var i = this.selectedEmote.prevSlot;
						if (this.selectedEmote = {}, i) {
							var o = e.find(".customize-emote-image");
							this.updateSlot(i, o.css("background-image"), o.data("id"))
						}
						var n = e.find(".customize-emote-slot");
						n.data("id", a), n.css("background-image", t), e.find(".ui-emote-hl").css("display", "none"), "customizeAvatar" != e.attr("data-slot") && this.config.set(e.data("slot"), a), this.selectableSlots.removeClass("customize-list-item-selected"), this.highlightedSlots.css({
							display: "none",
							opacity: 0
						})
					}
				}, {
					key: "unlockEmotes",
					value: function(e) {
						this.unlockTypes[e].unlocked;
						n('.btn-social-unlock[data-lock-reason="' + e + '"]').addClass("btn-social-unlocked");
						var t = n('.customize-list-item-locked[data-lock-reason="' + e + '"]');
						t.addClass("customize-list-item-unlocked").removeClass("customize-list-item-locked"), t.find(".customize-emote-image").attr("draggable", !0), this.config.set(this.unlockTypes[e].config, !0), n(".customize-list-item-unlocked").off("mouseenter"), n(".customize-list-item-unlocked").off("mouseleave"), n(".customize-list-item-locked").on("mouseenter", function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
						}), n(".customize-list-item-locked").on("mouseleave", function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
						})
					}
				}, {
					key: "populateAvatar",
					value: function(e) {
						var t = "",
							a = 0,
							i = l[e];
						void 0 != i && (t = i.texture, a = e);
						var o = n("#customize-account-avatar");
						o.find(".customize-emote-image").data("id", a), o.find(".customize-emote-image").css("background-image", "url(" + t + ")")
					}
				}]), e
			}();
		e.exports = p
	},
	FyxX: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("Bk7F"),
			s = a("/2+T"),
			l = (a("r4ug"), a("zinx"), a("dT1u")),
			c = a("xgte"),
			m = c.RenderType,
			d = function() {
				function e() {
					i(this, e), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
				}
				return o(e, [{
					key: "init",
					value: function() {
						this.imgScale = 1
					}
				}, {
					key: "free",
					value: function() {
						this.sprite.visible = !1
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = r.Defs[e.type];
						if (this.type = e.type, this.pos = s.copy(e.pos), this.layer = e.layer, this.rad = o.rad, this.imgScale = o.img.scale, a) {
							var l = o.img;
							this.sprite.texture = n.Texture.fromImage(l.sprite), this.sprite.tint = l.tint, this.sprite.alpha = 1, this.sprite.visible = !0, this.isNew = !0, this.inWater = !1, this.spriteAlpha = l.alpha, i.renderer.addPIXIObj(this.sprite, m.Decal, this.layer, 11, this.__id)
						}
					}
				}]), e
			}(),
			p = function() {
				function e() {
					i(this, e), this.decalPool = new l.Pool(d)
				}
				return o(e, [{
					key: "update",
					value: function(e, t, a) {
						for (var i = this.decalPool.getPool(), o = 0; o < i.length; o++) {
							var n = i[o];
							if (n.active) {
								if (n.isNew) {
									n.isNew = !1;
									var r = t.getGroundSurface(n.pos, n.layer);
									n.inWater = "water" == r
								}
								var s = a.pointToScreen(n.pos),
									l = a.pixels(1 * n.imgScale);
								n.sprite.position.set(s.x, s.y), n.sprite.scale.set(l, l), n.sprite.rotation = 0, n.sprite.alpha = n.spriteAlpha * (n.inWater ? .3 : 1)
							}
						}
					}
				}]), e
			}();
		e.exports = {
			DecalBarn: p
		}
	},
	GtPS: function(e, t, a) {
		"use strict";

		function i() {
			this.pos = n.create(0, 0), this.ppu = 16, this.zoom = 1.5, this.targetZoom = 1.5, this.screenWidth = 1, this.screenHeight = 1, this.shakeEnabled = !0, this.shakeInt = 0
		}
		var o = a("0od3"),
			n = a("/2+T");
		i.prototype = {
			z: function() {
				return this.ppu * this.zoom
			},
			pointToScreen: function(e) {
				return {
					x: .5 * this.screenWidth + (e.x - this.pos.x) * this.z(),
					y: .5 * this.screenHeight - (e.y - this.pos.y) * this.z()
				}
			},
			screenToPoint: function(e) {
				return {
					x: this.pos.x + (e.x - .5 * this.screenWidth) / this.z(),
					y: this.pos.y + (.5 * this.screenHeight - e.y) / this.z()
				}
			},
			pixels: function(e) {
				return e * this.zoom
			},
			scaleToScreen: function(e) {
				return e * this.z()
			},
			setShakeEnabled: function(e) {
				this.shakeEnabled = e
			},
			addShake: function(e, t) {
				var a = n.length(n.sub(this.pos, e)),
					i = o.delerp(a, 40, 10) * t;
				this.shakeInt = Math.max(this.shakeInt, i)
			},
			applyShake: function() {
				this.shakeEnabled && (this.pos = n.add(this.pos, n.mul(n.randomUnit(), this.shakeInt))), this.shakeInt = 0
			}
		}, e.exports = i
	},
	Jr6A: function(e, t, a) {
		"use strict";

		function i(e, t) {
			t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
			var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
				i = a.exec(t);
			if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
		}

		function o(e) {
			for (var t = e + "=", a = decodeURIComponent(document.cookie), i = a.split(";"), o = 0; o < i.length; o++) {
				for (var n = i[o];
					" " == n.charAt(0);) n = n.substring(1);
				if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
			}
			return ""
		}

		function n(e) {
			var t = e.trim();
			return t.length > S.kNameMaxLen && (t = t.substring(0, S.kNameMaxLen)), t
		}

		function r(e) {
			return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}

		function s(e) {
			return e.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
		}

		function l(e, t, a) {
			var i = T.getContext("2d");
			i.font = t;
			for (var o = e.length, n = e; o > 0;) {
				if (i.measureText(n).width <= a) break;
				n = e.substring(0, --o) + "…"
			}
			return n
		}

		function c(e) {
			return void 0 === e ? "undefined" : null === e ? "null" : JSON.stringify(e)
		}

		function m() {
			for (var e = ["localhost", "surviv.io", "surviv2.io", "2dbattleroyale.com", "2dbattleroyale.org"], t = window.location.hostname, a = !1, i = 0; i < e.length; i++)
				if (-1 != t.indexOf(e[i])) {
					a = !0;
					break
				}
			return M.dev || a
		}

		function d() {
			var e = navigator.language || navigator.userLanguage;
			e = e.toLowerCase();
			for (var t = ["pt", "de", "es", "fr", "ko", "ru", "en"], a = 0; a < t.length; a++)
				if (-1 != e.indexOf(t[a])) {
					e = t[a];
					break
				}
			for (var i = ["da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "pl", "pt", "ru", "sv", "th", "tr", "vn", "zh-cn", "zh-tw"], o = 0; o < i.length; o++)
				if (-1 != e.indexOf(i[o])) return e = i[o];
			return ""
		}

		function p() {
			return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) && this.detectiOS()
		}

		function u() {
			return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
		}

		function h() {
			return u() && 375 == screen.width && 812 == screen.height
		}

		function g() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
				t = window.navigator.userAgent,
				a = t.indexOf("MSIE "),
				i = t.indexOf("Trident/"),
				o = t.indexOf("Edge/");
			return a > 0 || i > 0 || e && o > 0
		}

		function f() {
			return window.innerWidth > window.innerHeight || 90 == window.orientation || -90 == window.orientation
		}

		function y() {
			return f() ? "landscape" : "portrait"
		}

		function b() {
			var e = window.innerWidth,
				t = window.innerHeight;
			if (u()) {
				if (e = screen.width, t = screen.height, f()) {
					var a = t;
					t = e, e = a
				}
				h() && (f() ? e -= 88 : t -= 88)
			}
			return {
				width: e,
				height: t
			}
		}

		function x(e) {
			var t = document.documentElement;
			document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || e ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? (t = document.body, t.msRequestFullscreen()) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
		}

		function v() {
			return void 0 !== i("debug") || !1
		}

		function k(e, t) {
			! function a(i, o) {
				if (i >= o) return void t("full");
				var n = function() {
					setTimeout(function() {
						a(i + 1, o)
					}, 250)
				};
				w.ajax({
					type: "POST",
					url: "/api/find_game",
					data: JSON.stringify(e),
					contentType: "application/json; charset=utf-8",
					timeout: 1e4,
					success: function(e, a) {
						if ("full" == e.err) n();
						else if (e.err) t(e.err);
						else {
							var i = e.res[0];
							void 0 === i.hosts || void 0 === i.addrs ? n() : t(null, i)
						}
					},
					error: function(e) {
						n()
					}
				})
			}(0, 3)
		}

		function _(e, t, a) {
			var i = "https:" == window.location.protocol,
				o = i ? "wss:" : "ws:",
				n = i ? t.hosts : t.addrs;
			n = n || [];
			for (var r = [], s = 0; s < n.length; s++) r.push(o + "//" + n[s] + "/play?gid=" + t.gid);
			! function i(o) {
				var n = function() {
					i(o)
				};
				if (o.length > 0) {
					var r = o.shift();
					v() && console.log("Joining game", r, t.zone), e.tryJoinGame(t.data, r, n)
				} else a()
			}(r)
		}
		var w = a("juYr"),
			S = a("yp2f"),
			M = a("zinx"),
			T = (a("85i3"), document.createElement("canvas"));
		e.exports = {
			getParameterByName: i,
			getCookie: o,
			sanitizeNameInput: n,
			htmlEscape: r,
			htmlUnescape: s,
			truncateString: l,
			varToString: c,
			authLocation: m,
			detectLanguage: d,
			detectiOS: u,
			detectiPhoneX: h,
			detectIE: g,
			detectMobileSafari: p,
			getOrientation: y,
			isLandscape: f,
			getScreenDimensions: b,
			toggleFullScreen: x,
			logDebug: v,
			findGame: k,
			joinGame: _
		}
	},
	K7EQ: function(e, t, a) {
		"use strict";
		e.exports = {
			background: 2118510,
			water: 3310251,
			beach: 13480795,
			grass: 8433481,
			underground: 1772803
		}
	},
	KdTN: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "de"
			},
			"word-order": "sov",
			"index-slogan": "2d Battle Royale",
			"index-region": "Region",
			"index-north-america": "Nordamerika",
			"index-europe": "Europa",
			"index-asia": "Asien",
			"index-players": "Spieler",
			"index-play-solo": "Solo spielen",
			"index-play-duo": "Duo spielen",
			"index-play-squad": "Squad spielen",
			"index-create-team": "Team erstellen",
			"index-how-to-play": "Wie man spielt",
			"index-leave-team": "Team verlassen",
			"index-joining-team": "Beitritt zum Team",
			"index-creating-team": "Team erstellen",
			"index-invite-link": "Einladungslink",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Squad",
			"index-auto-fill": "Auffüllen",
			"index-no-fill": "Kein Füllen",
			"index-waiting-for-leader": "Warten auf den Anführer, um das Spiel zu starten",
			"index-play": "Spielen",
			"index-featured-youtuber": "Vorgestellter YouTuber",
			"index-settings": "Einstellungen",
			"index-high-resolution": "Hohe Auflösung (Aktivieren zur Steigerung der visuellen Qualität)",
			"index-screen-shake": "Bildschirmschütteln",
			"index-master-volume": "Gesamtlautstärke",
			"index-sfx-volume": "Effektlautstärke",
			"index-music-volume": "Musiklautstärke",
			"index-mobile-announce": "Nun mobil verfügbar!",
			"index-team-is-full": "Das Team ist voll!",
			"index-failed-joining-team": "Fehlgeschlagener Eintritt ins Team.",
			"index-failed-creating-team": "Das Erstellen eines Teams ist fehlgeschlagen.",
			"index-failed-finding-game": "Die Spielsuche ist fehlgeschlagen.",
			"index-failed-joining-game": "Fehlgeschlagener Beitritt zum Spiel.",
			"index-lost-connection": "Verbindung zum Team verloren.",
			"index-host-closed": "Serververbindung geschlossen.",
			"index-view-more": "Mehr anzeigen",
			"index-back-to-main": "Zurück zum Hauptmenü",
			"index-most-kills": "Meiste Tötungen",
			"index-total-kills": "Gesamt Tötungen",
			"index-total-wins": "Gesamtgewinne",
			"index-top-5-percent": "Top 5 Prozent",
			"index-kill-death-ratio": "Kill-Tod-Verhältnis",
			"index-for": "für",
			"index-today": "Heute",
			"index-this-week": "Diese Woche",
			"index-all-time": "Aller Zeiten",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Spieler",
			"index-total-games": "Gesamtanzahl Spiele",
			"index-controls": "Steuerung",
			"index-movement": "Bewegung",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Zielen",
			"index-aim-ctrl": "Maus",
			"index-punch": "Schlagen",
			"index-shoot": "Schießen",
			"index-shoot-ctrl": "Links-Klick",
			"index-change-weapons": "Waffen wechseln",
			"index-change-weapons-ctrl": "1 bis 4 oder Mausrad",
			"index-stow-weapons": "Waffen verstauen (Schlag-Modus)",
			"index-stow-weapons-ctrl": "3 oder E",
			"index-swap-weapons": "Wechsel zu vorherigen Waffe",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Nachladen",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zielfernrohr Zoom",
			"index-scope-zoom-ctrl": "Linksklick auf Zoom",
			"index-pickup": "aufnehmen",
			"index-loot": "Beute",
			"index-revive": "wiederbeleben",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Medizinisches Item verwenden",
			"index-use-medical-ctrl": "Linksklick auf Item oder 7 bis 0",
			"index-drop-item": "Item ablegen",
			"index-drop-item-ctrl": "Rechtsklick auf Item",
			"index-cancel-action": "Aktion abbrechen",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Karte anzeigen",
			"index-view-map-ctrl": "M oder G",
			"index-toggle-minimap": "Minimap umschalten",
			"index-toggle-minimap-ctrl": "V",
			"game-alive": "Am Leben",
			"game-reloading": "Nachladen",
			"game-using": "Benutzen",
			"game-reviving": "Wiederbelebung",
			"game-revive-teammate": "Spieler wiederbeleben",
			"game-equip": "Equip",
			"game-cancel": "Beenden",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "Warten auf Spieler",
			"game-spectating": "Zuschauen",
			"game-red-zone-advances": "Rote Zone schreitet voran in",
			"game-red-zone-advancing": "Rote Zone rückt vor, in die sichere Zone!",
			"game-seconds": "Sekunden",
			"game-minutes": "Minuten",
			"game-minute": "Minute",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Nicht genügend Platz!",
			"game-item-already-owned": "Item bereits in Besitz!",
			"game-item-already-equipped": "Item bereits ausgerüstet!",
			"game-better-item-equipped": "Besseres Item ausgestattet!",
			"game-play-new-game": "Neues Spiel starten",
			"game-spectate": "Zuschauen",
			"game-full-screen": "Vollbild",
			"game-sound": "Ton",
			"game-quit-game": "Spiel beenden",
			"game-return-to-game": "Zurück zum Spiel",
			"game-hide-match-stats": "Match-Statistiken ausblenden",
			"game-view-match-stats": "Match-Statistiken anzeigen",
			"game-previous-teammate": "Vorheriger Teamkollege",
			"game-next-teammate": "Nächster Teamkollege",
			"game-spectate-previous": "Vorheriger",
			"game-spectate-next": "Nächster",
			"game-leave-game": "Spiel verlassen",
			"game-your-results": "Ihre Ergebnisse",
			"game-chicken": "Gewinner Gewinner Hühnchen-Dinner!",
			"game-won-the-game": "gewonnen.",
			"game-team-eliminated": "Ihr Team wurde besiegt.",
			"game-rank": "Rang",
			"game-team-rank": "Team Rang",
			"game-team-kills": "Team Tötungen",
			"game-kill": "Tötung",
			"game-kills": "Tötungen",
			"game-damage-dealt": "Verursachter Schaden",
			"game-damage-taken": "Erhaltener Schaden",
			"game-survived": "Überlebt",
			"game-backpack00": "Beutel",
			"game-backpack01": "Kleiner Rucksack",
			"game-backpack02": "Normaler Rucksack",
			"game-backpack03": "Militärrucksack",
			"game-bandage": "Bandage",
			"game-bandage-tooltip": "Klicken Sie mit der linken Maustaste, um 15 Lebenspunkte wiederherzustellen.",
			"game-healing-tooltip": "Kann nicht mehr als 75 Lebenspunkte heilen.",
			"game-healthkit": "Erste Hilfe Tasche",
			"game-healthkit-tooltip": "Klicken Sie mit der linken Maustaste, um 100 Lebenspunkte wiederherzustellen.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Klicke mit der linken Maustaste, um den Adrenalinspiegel um 25 zu erhöhen.",
			"game-adrenaline-tooltip": "Adrenalin stellt die Gesundheit im Laufe der Zeit wieder her.",
			"game-painkiller": "Schmerzmittel",
			"game-painkiller-tooltip": "Klicken Sie mit der linken Maustaste, um den Adrenalinspiegel um 50 zu erhöhen.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Munition für M9, Glock, MP5, MAC-10, UMP9 und Vector.",
			"game-12gauge": "12er Kaliber",
			"game-12gauge-tooltip": "Munition für M870, Saiga-12 und MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Munition für AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 und DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Munition für FAMAS, HK416, Mk 12 und M249.",
			"game-chest01": "Level 1 Weste",
			"game-chest02": "Level 2 Weste",
			"game-chest03": "Level 3 Weste",
			"game-helmet01": "Level 1 Helm",
			"game-helmet02": "Level 2 Helm",
			"game-helmet03": "Level 3 Helm",
			"game-1xscope": "1x Visier",
			"game-2xscope": "2x Visier",
			"game-4xscope": "4x Visier",
			"game-8xscope": "8x Visier",
			"game-15xscope": "15x Visier",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	MWDq: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e) {
			var t = Math.floor(e / 3600),
				a = Math.floor(e / 60) % 60,
				i = Math.floor(e) % 60,
				o = "";
			return t > 0 && (o += t + "h "), (t > 0 || a > 0) && (o += a + "m "), o += i + "s"
		}

		function n(e, t, a, o, n, r, m) {
			var u = this;
			this.game = e, this.particleBarn = o, this.localization = n, this.touch = m, this.gameElem = l("#ui-game"), this.statsMain = l("#ui-stats"), this.statsElem = l("#ui-stats-bg"), this.statsContents = l("#ui-stats-contents-inner"), this.statsHeader = l("#ui-stats-header"), this.statsInfoBox = l("#ui-stats-info-box"), this.statsOptions = l("#ui-stats-options"), this.statsAds = l(".ui-stats-ad-container"), this.mainMedRectAd = l("#ad-block-main-med-rect"), this.mainLeaderBotAd = l("#ad-block-main-leader-bot"), this.killElem = l("#ui-kills"), this.killText = l("#ui-kill-text"), this.killCount = l("#ui-kill-count"), this.killTimeout = null, this.escMenuElem = l("#ui-game-menu"), this.escMenuDisplayed = !1, this.topLeft = l("#ui-top-left"), this.topCenter = l("#ui-top-center-scopes"), this.waitingForPlayers = !0, this.waitingText = l("#ui-waiting-text"), this.spectating = !1, this.prevSpectatorCount = 0, this.spectatorCount = 0, this.spectatorCounterDisplayed = !1, this.spectatorCounterContainer = l("#ui-spec-counter"), this.spectatorCounter = l("#ui-spec-counter-number"), this.spectateMode = l(".ui-spectate-mode"), this.spectatedPlayerText = l("#ui-spectate-text"), this.spectatedPlayerName = "", this.spectatedPlayerId = null, this.spectateModeStats = l("#ui-spectate-stats"), this.spectateModeStatsData = l("#ui-spectate-stats-data"), this.spectateOptionsWrapper = l("#ui-spectate-options-wrapper"), this.rightCenter = l("#ui-right-center"), this.playersAlive = l(".js-ui-players-alive"), this.announcement = l("#ui-announcement"), this.mapContainer = l("#ui-map-container"), this.mapContainerBottom = 52, this.mapInfo = l("#ui-map-info"), this.mapInfoBottom = 218, this.gasState = {}, this.gasIcon = l("#ui-gas-icon"), this.gasTimer = l("#ui-gas-timer"), this.mapMinimizeButton = l("#ui-map-minimize"), this.menuDisplayButton = l("#ui-menu-display"), this.bottomCenterRight = l("#ui-bottom-center-right"), l("#ui-map-wrapper").css("display", "block"), l("#ui-team").css("display", "block"), this.curAction = {
				type: p.None
			}, this.displayMapDirty = !1, this.displayMapClear = !1, l(".ui-map-expand").on("mousedown", function(e) {
				e.stopPropagation()
			}), l(".ui-map-expand").on("click", function(e) {
				f.touch ? u.bigmapDisplayed || u.displayMapLarge() : f.layout == f.Layout.Lg && u.displayMapLarge(u.bigmapDisplayed)
			}), l("#ui-map-minimize").on("mousedown", function(e) {
				e.stopPropagation()
			}), l("#ui-map-minimize").on("click", function(e) {
				e.stopPropagation(), u.toggleMiniMap()
			}), l("#ui-menu-display").on("click", function(e) {
				e.stopPropagation(), u.toggleEscMenu()
			}), this.bigmap = l("#big-map"), this.bigmapCollision = l("#big-map-collision"), this.moveStyleButton = l("#btn-game-move-style"), this.moveStyleButton.on("touchstart", function() {
				m.toggleMoveStyle()
			}), this.aimStyleButton = l("#btn-game-aim-style"), this.aimStyleButton.on("touchstart", function() {
				m.toggleAimStyle()
			}), l(document).on("keyup", function(e) {
				76 != e.which || u.game.gameOver || k.toggleFullScreen()
			}), this.onTouchScreen = function(e) {
				"cvs" == e.target.id && u.toggleEscMenu(!0)
			}, l(document).on("touchstart", this.onTouchScreen), this.bigmapClose = l("#big-map-close"), this.bigmapClose.on("touchend", function(e) {
				e.stopPropagation(), u.displayMapLarge(!0)
			}), this.bigmapClose.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.bigmapClose.on("click", function(e) {
				e.stopPropagation(), u.displayMapLarge(!0)
			}), this.fullScreenButton = l("#btn-game-fullscreen"), this.fullScreenButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.fullScreenButton.on("click", function() {
				k.toggleFullScreen(), u.toggleEscMenu()
			}), this.resumeButton = l("#btn-game-resume"), this.resumeButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.resumeButton.on("click", function() {
				u.toggleEscMenu()
			}), l("#btn-spectate-quit").on("click", function() {
				u.doQuitGame()
			}), l("#btn-game-quit").on("mousedown", function(e) {
				e.stopPropagation()
			}), l("#btn-game-quit").on("click", function() {
				u.doQuitGame()
			}), this.specStatsButton = l("#btn-spectate-view-stats"), this.specStatsButton.on("click", function() {
				u.toggleLocalStats()
			}), this.beginSpectating = !1, this.specNext = !1, this.specPrev = !1, this.specNextButton = l("#btn-spectate-next-player"), this.specNextButton.on("click", function() {
				u.specNext = !0
			}), this.specPrevButton = l("#btn-spectate-prev-player"), this.specPrevButton.on("click", function() {
				u.specPrev = !0
			}), this.interactionElems = l("#ui-interaction-press, #ui-interaction"), this.interactionTouched = !1, this.interactionElems.css("pointer-events", "auto"), this.interactionElems.on("touchstart", function(e) {
				e.stopPropagation(), u.interactionTouched = !0
			}), this.reloadElems = l("#ui-current-clip, #ui-remaining-ammo, #ui-reload-button"), this.reloadTouched = !1, this.reloadElems.css("pointer-events", "auto"), this.reloadElems.on("touchstart", function(e) {
				e.stopPropagation(), u.reloadTouched = !0
			}), this.healthRed = new s(255, 0, 0), this.healthDarkpink = new s(255, 45, 45), this.healthLightpink = new s(255, 112, 112), this.healthWhite = new s(255, 255, 255), this.healthGrey = new s(179, 179, 179), this.minimapDisplayed = !0, this.visibilityMode = 0, this.gasRenderer = new x(r, 0), this.gasSafeZoneRenderer = new v, this.container = new c.Container, this.container.mask = new c.Graphics, this.display = {
				gas: this.gasRenderer.display,
				gasSafeZone: this.gasSafeZoneRenderer.display,
				teammates: new c.Container,
				player: new c.Container,
				border: new c.Graphics
			}, this.mapSprite = new c.Sprite(c.Texture.EMPTY), this.mapSprite.anchor = new c.Point(.5, .5), this.container.addChild(this.mapSprite), this.container.addChild(this.display.gas), this.container.addChild(this.display.gasSafeZone), this.container.addChild(this.display.teammates), this.container.addChild(this.display.player), this.container.addChild(this.display.border), this.mapHeight = 0, this.mapWidth = 0, this.bigmapDisplayed = !1, this.screenScaleFactor = 1;
			var g = (k.getScreenDimensions().width, this.getMinimapMargin()),
				y = this.getMinimapSize();
			this.minimapPos = h.create(g + y / 2, e.camera.screenHeight - y / 2 - g), this.playerOuter = c.Sprite.fromImage("img/gui/player-map-outer.svg"), this.playerOuter.anchor = new c.Point(.5, .5), this.playerOuterBaseScale = new c.Point(f.layout == f.Layout.Sm ? .25 : .3, f.layout == f.Layout.Sm ? .25 : .3), this.playerOuter.scale = this.playerOuterBaseScale, this.playerOuter.tint = 16777215, this.player = c.Sprite.fromImage("img/gui/player-map-inner.svg"), this.player.anchor = new c.Point(.5, .5), this.playerBaseScale = new c.Point(f.layout == f.Layout.Sm ? .15 : .2, f.layout == f.Layout.Sm ? .15 : .2), this.player.scale = this.playerBaseScale, this.player.tint = 16777215, this.dead = !1, this.audioManager = t, this.actionSoundInstance = !1, this.muteButton = l("#ui-mute-ingame"), this.muteButtonImage = this.muteButton.find("img"), this.muteOffImg = "img/gui/audio-off.svg", this.muteOnImg = "img/gui/audio-on.svg";
			var b = this.audioManager.mute;
			this.muteButtonImage.attr("src", b ? this.muteOffImg : this.muteOnImg), this.muteButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.muteButton.on("click", function(e) {
				var t = u.audioManager.muteToggle();
				u.muteButtonImage.attr("src", t ? u.muteOffImg : u.muteOnImg), t = null
			}), this.pieTimer = a, this.displayingStats = !1, this.teamMemberHealthBarWidth = parseInt(l(".ui-team-member-health").find(".ui-bar-inner").css("width")), this.teamMemberHeight = 48, this.teamPlayerCount = 0, this.teamSelectors = [];
			for (var w = 0; w < 4; w++) {
				var S, M = this.topLeft,
					T = w,
					P = c.Sprite.fromImage("img/gui/ping-map-pulse.svg");
				P.anchor = this.playerOuter.anchor, P.scale = new c.Point(0, 0), P.tint = d.teamColors[w], P.visible = !1, this.display.teammates.addChild(P);
				var C = c.Sprite.fromImage("img/gui/ping-map-coming.svg");
				C.anchor = this.player.anchor, C.scale = this.playerBaseScale, C.tint = d.teamColors[w], C.visible = !1, this.display.teammates.addChild(C);
				var I = c.Sprite.fromImage("img/gui/ping-map-danger.svg");
				I.anchor = this.player.anchor, I.scale = this.playerBaseScale, I.tint = d.teamColors[w], I.visible = !1, this.display.teammates.addChild(I);
				var z = c.Sprite.fromImage("img/gui/ping-map-help.svg");
				z.anchor = this.player.anchor, z.scale = this.playerBaseScale, z.tint = d.teamColors[w], z.visible = !1, this.display.teammates.addChild(z);
				var A = c.Sprite.fromImage("img/gui/player-map-outer.svg");
				A.anchor = this.playerOuter.anchor, A.scale = this.playerOuterBaseScale, A.tint = this.playerOuter.tint, A.visible = !1, this.display.teammates.addChild(A);
				var D = c.Sprite.fromImage("img/gui/player-map-inner.svg");
				D.anchor = this.player.anchor, D.scale = this.playerBaseScale, D.tint = d.teamColors[w], D.visible = !1, this.display.teammates.addChild(D), this.teamSelectors.push({
					teamNameHtml: "",
					teamId: l(M).find("[data-id=" + T + "]"),
					teamIdDisplayed: !1,
					teamName: l(M).find("[data-id=" + T + "]").find(".ui-team-member-name"),
					teamIcon: l(M).find("[data-id=" + T + "]").find(".ui-team-member-icon"),
					teamStatus: l(M).find("[data-id=" + T + "]").find(".ui-team-member-status"),
					teamHealthInner: l(M).find("[data-id=" + T + "]").find(".ui-health-actual"),
					teamHealthDepleted: l(M).find("[data-id=" + T + "]").find(".ui-health-depleted"),
					prevHealth: 0,
					prevStatus: {
						disconnected: !1,
						dead: !1,
						downed: !1
					},
					indicators: {
						main: {
							elem: l("#ui-team-indicators").find(".ui-indicator-main[data-id=" + T + "]"),
							displayed: !1
						}
					},
					mapSprites: (S = {
						outer: {
							sprite: A,
							position: h.create(0, 0),
							usePlayerPosition: !0,
							showOnDeath: !1,
							displayed: !0
						},
						inner: {
							sprite: D,
							position: h.create(0, 0),
							usePlayerPosition: !0,
							showOnDeath: !0,
							displayed: !0
						},
						pingPulseWave: {
							sprite: P,
							position: h.create(0, 0),
							usePlayerPosition: !1,
							showOnDeath: !0,
							displayed: !1,
							pulse: !0,
							scale: 0,
							baseScale: 0,
							life: 0,
							maxLife: 0
						}
					}, i(S, _.Coming, {
						sprite: C,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), i(S, _.Danger, {
						sprite: I,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), i(S, _.Help, {
						sprite: z,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), S),
					mapSpritesLocal: !1
				})
			}
			this.init()
		}

		function r(e, t, a, i) {
			var o = e,
				n = t,
				r = o + (n - o) / a * i;
			return Math.floor(r)
		}

		function s(e, t, a) {
			var i, o, n;
			! function(e, t, a) {
				i = e, o = t, n = a
			}(e, t, a), this.getColors = function() {
				return {
					r: i,
					g: o,
					b: n
				}
			}
		}
		var l = a("juYr"),
			c = a("gKxX"),
			m = a("8iex"),
			d = (a("9xSA"), a("+0OL")),
			p = d.Action,
			u = d.GasMode,
			h = (a("yp2f"), a("/2+T")),
			g = a("0od3"),
			f = (a("Tf6H"), a("K7EQ"), a("zinx")),
			y = a("85i3"),
			b = a("p/CU"),
			x = b.GasRenderer,
			v = b.GasSafeZoneRenderer,
			k = a("Jr6A"),
			_ = (a("EZ6M"), a("moUH").Ping),
			w = a("bkPR");
		n.prototype = {
			free: function() {
				this.clearUI(), l(document).off("keyup"), l(".ui-map-expand").off("mousedown"), l(".ui-map-expand").off("click"), l("#ui-map-minimize").off("mousedown"), l("#ui-map-minimize").off("click"), l("#ui-menu-display").off("click"), this.muteButton.off("mousedown"), this.muteButton.off("click"), this.fullScreenButton.off("mousedown"), this.fullScreenButton.off("click"), this.resumeButton.off("mousedown"), this.resumeButton.off("click"), l("#btn-spectate-quit").off("click"), l("#btn-game-quit").off("mousedown"), l("#btn-game-quit").off("click"), this.specStatsButton.off("click"), this.specPrevButton.off("click"), this.specNextButton.off("click"), this.bigmapClose.off("mousedown"), this.bigmapClose.off("click"), this.moveStyleButton.off("touchstart"), this.interactionElems.off("touchstart"), this.reloadElems.off("touchstart"), this.bigmapClose.off("touchend"), l(document).off("touchstart", this.onTouchScreen), l(".ui-team-member-health").find(".ui-bar-inner").css("width", this.teamMemberHealthBarWidth), this.init()
			},
			init: function() {
				l(".js-ui-map-hidden").css("display", "block"), this.clearStatsElems(), this.setSpectating(!1), this.updateSpectatorCountDisplay(!0), this.dead = !1
			},
			doQuitGame: function() {
				this.refreshMainPageAds(), this.game.gameOver = !0, this.game.onQuit()
			},
			update: function(e, t, a, i, o, n, r, s, l, b) {
				var x = this,
					v = t.netData,
					k = t.localData,
					_ = t;
				this.mapWidth = i.width, this.mapHeight = i.height, this.mapSprite.texture == c.Texture.EMPTY && null != i.getMapTexture() && (this.mapSprite.texture = i.getMapTexture(), this.redraw(s));
				var S = Math.max(Math.floor(o.duration * (1 - o.circleT)), 0),
					M = {
						mode: o.mode,
						time: S
					};
				if (this.gasState.mode != M.mode || this.gasState.time != M.time) {
					this.gasState = M;
					var T = this.gasState.mode == u.Moving;
					this.mapInfo.removeClass("icon-pulse"), this.gasIcon.removeClass("gas-icon"), this.gasIcon.removeClass("danger-icon"), T && this.mapInfo.addClass("icon-pulse"), this.gasIcon.addClass(T ? "danger-icon" : "gas-icon");
					var P = Math.floor(this.gasState.time / 60),
						C = this.gasState.time % 60,
						I = ("0" + C).slice(-2);
					this.gasTimer.html(P + ":" + I)
				}
				this.spectatorCount = k.spectatorCount, this.updateSpectatorCountDisplay(!1), v.dead && !this.dead && (this.dead = !0, this.pieTimer.free(!0));
				var z = k.action,
					A = g.eqAbs(g.clamp(z.time, 0, z.duration), z.duration, .2);
				if (!(this.curAction.type == z.type && this.curAction.item == z.item && this.curAction.duration == z.duration || A || this.displayingStats)) {
					this.curAction = {
						type: z.type,
						item: z.item,
						time: z.time,
						duration: z.duration
					};
					var D = z.type != p.Reload;
					if (this.pieTimer.free(D), this.actionSoundInstance && (this.audioManager.stopSound(this.actionSoundInstance), this.actionSoundInstance = !1), z.type != p.None) {
						var O = "",
							L = "",
							E = "",
							B = null,
							F = !1;
						switch (z.type) {
							case p.Reload:
								if ("" != z.item) {
									var R = d.items[z.item];
									L = this.localization.translate("game-reloading"), B = R.sound.reload, F = "reload" == R.caseTiming
								}
								break;
							case p.UseItem:
								if ("" != z.item) {
									var j = d.items[z.item];
									L = this.localization.translate("game-using"), E = this.localization.translate("game-" + z.item), B = j.sound.use
								}
								break;
							case p.Revive:
								var N = r.getPlayerInfo(z.targetId).nameUnEntity;
								L = this.localization.translate("game-reviving"), E = _.downed ? "" : N
						}
						if ("" == L && "" == E || ("svo" == this.localization.translate("word-order") ? (O += L || "", O += E ? " " + E : "") : "sov" == this.localization.translate("word-order") && (O += E ? E + " " : "", O += L ? " " + L : ""), this.pieTimer.init(function() {
								x.curAction.type = p.None
							}, this.curAction.duration - this.curAction.time, O, !1)), B && (this.actionSoundInstance = this.audioManager.playSound(B), this.audioManager.stopLocalActionSound()), F && "" != z.item)
							for (var q = d.items[z.item], U = 0; U < q.maxClip; U++) {
								var G = U % 2 == 0 ? -1 : 1,
									V = Math.PI + Math.PI / 4 * G;
								w.createCasingParticle(z.item, V, t.pos, t.dir, t.netData.layer, this.particleBarn)
							}
					}
				}
				this.bigmapDisplayed || (this.mapSprite.x = this.minimapPos.x + this.mapSprite.width / 2 - t.pos.x / i.width * this.mapSprite.width, this.mapSprite.y = this.minimapPos.y - this.mapSprite.height / 2 + t.pos.y / i.height * this.mapSprite.height);
				var H = h.create(.5 * s.screenWidth / s.z(), .5 * s.screenHeight / s.z()),
					W = {
						min: h.sub(s.pos, H),
						max: h.add(s.pos, H)
					},
					K = r.getPlayerInfo(t.__id).teamId,
					X = r.getTeamInfo(K);
				if (!X) {
					var Y = {
						playerId: t.__id,
						teamId: K,
						spectating: this.spectating,
						playing: this.game.playingTicker,
						teamInfo: r.teamInfo
					};
					y.logError("badTeamInfo_1: " + JSON.stringify(Y))
				}
				for (var Z = f.layout == f.Layout.Sm, J = X.playerIds.length, Q = 0; Q < J; Q++) {
					var $ = this.teamSelectors[Q],
						ee = X.playerIds[Q],
						te = r.getPlayerInfo(ee),
						ae = ee == _.__id,
						ie = r.getTeammateData(ee);
					if (ie) {
						for (var oe in $.mapSprites)
							if ($.mapSprites.hasOwnProperty(oe)) {
								var ne = $.mapSprites[oe],
									re = ne.sprite,
									se = ne.usePlayerPosition ? ie.pos : ne.position,
									le = ne.displayed && (!ie.dead || ne.showOnDeath);
								"outer" != oe || ae || (le = !1), this.updateMapPosition(re, se, le, i), ne.displayed && (void 0 != ne.life && (ne.life -= e, ne.displayed = ne.life > 0, ne.maxLife - ne.life < .1 ? re.alpha = (ne.maxLife - ne.life) / .1 : ne.life < .5 ? re.alpha = ne.life / .5 : re.alpha = 1), ne.pulse && ne.displayed && (ne.scale = ne.scale + e / 2.5, re.scale = new c.Point(ne.scale, ne.scale)))
							}
						if (ae && !$.mapSpritesLocal ? (this.display.player.addChild($.mapSprites.outer.sprite, $.mapSprites.inner.sprite), $.mapSpritesLocal = !0) : !ae && $.mapSpritesLocal && (this.display.teammates.addChild($.mapSprites.outer.sprite, $.mapSprites.inner.sprite), $.mapSpritesLocal = !1), l > 1) {
							$.teamIdDisplayed || ($.teamId.css("display", "block"), $.teamIdDisplayed = !0), this.updateTeam(Q, te.name, ie.health, {
								disconnected: ie.disconnected,
								dead: ie.dead,
								downed: ie.downed
							}, !1);
							for (var ce in $.indicators)
								if ($.indicators.hasOwnProperty(ce)) {
									var me = $.indicators[ce],
										de = me.elem,
										pe = !0;
									if (!ae || me.displayAll) {
										var ue = ie.pos,
											he = h.normalizeSafe(h.sub(ue, s.pos), h.create(1, 0)),
											ge = m.intersectRayAabb(s.pos, he, W.min, W.max),
											fe = Math.atan2(he.y, -he.x) + .5 * Math.PI,
											ye = s.pointToScreen(ge),
											be = m.testCircleAabb(ue, d.player.radius, W.min, W.max);
										if (!ie.dead && !be) {
											var xe = 32,
												ve = "translate(-50%, -50%) rotate(" + fe + "rad)";
											Z && (xe = 16, ve += " scale(0.5)"), pe = !1, de.css({
												left: g.clamp(ye.x, xe, s.screenWidth - xe),
												top: g.clamp(ye.y, xe, s.screenHeight - xe),
												transform: ve
											}), me.displayed || (de.css("display", "block"), me.displayed = !0)
										}
									}
									pe && me.displayed && (de.css("display", "none"), me.displayed = !1)
								}
						}
					}
				}
				for (var ke = J; ke < this.teamSelectors.length; ke++) {
					var _e = this.teamSelectors[ke];
					for (var we in _e.mapSprites)
						if (_e.mapSprites.hasOwnProperty(we)) {
							var Se = _e.mapSprites[we];
							Se.visible = !1
						}
					for (var Me in _e.indicators)
						if (_e.indicators.hasOwnProperty(Me)) {
							var Te = _e.indicators[Me];
							Te.displayed && (Te.elem.css("display", "none"), Te.displayed = !1)
						}
					if (_e.teamIdDisplayed) {
						for (var Pe in _e.mapSprites)
							if (_e.mapSprites.hasOwnProperty(Pe)) {
								var Ce = _e.mapSprites[Pe],
									Ie = Ce.sprite;
								Ie.visible = !1
							}
						_e.teamId.css("display", "none"), _e.teamIdDisplayed = !1
					}
				}
				l > 1 && this.teamPlayerCount != J && f.layout == f.Layout.Lg && (this.teamPlayerCount = J, this.spectateOptionsWrapper.css({
					top: this.teamPlayerCount * this.teamMemberHeight + 12
				}))
			},
			getMinimapMargin: function() {
				return f.layout == f.Layout.Sm ? 4 : 16
			},
			getMinimapSize: function() {
				return f.layout == f.Layout.Sm ? 192 : 256
			},
			getMinimapBorderWidth: function() {
				return f.layout == f.Layout.Sm ? 1 : 4
			},
			setPlayerPing: function(e, t, a, i) {
				var o = this.teamSelectors[t];
				if (o) {
					var n = o.mapSprites[e];
					if (n) {
						n.position = a, n.displayed = !0, n.life = i, n.maxLife = i;
						var r = o.mapSprites.pingPulseWave;
						r.position = a, r.displayed = !0, r.life = 4, r.maxLife = 4, r.scale = r.baseScale
					}
				}
			},
			updateMapPosition: function(e, t, a, i) {
				var o = this.getMapPosFromWorldPos(t, i);
				e.position = o, e.visible = a
			},
			getMapPosFromWorldPos: function(e, t) {
				var a = this.mapSprite.x - this.mapSprite.width / 2 + e.x / t.width * this.mapSprite.width,
					i = this.mapSprite.y + this.mapSprite.height / 2 - e.y / t.height * this.mapSprite.height;
				return h.create(a, i)
			},
			getWorldPosFromMapPos: function(e, t, a) {
				var i = !1;
				k.getScreenDimensions().width;
				if (this.bigmapDisplayed) {
					var o = (a.screenWidth - this.mapSprite.width) / 2,
						n = (a.screenHeight - this.mapSprite.height) / 2;
					f.layout != f.Layout.Sm || k.isLandscape() || (n = 0), i = e.x > o && e.x < a.screenWidth - o && e.y > n && e.y < a.screenHeight - n
				} else if (this.minimapDisplayed) {
					var r = this.getMinimapSize(),
						s = this.getMinimapMargin(),
						l = r * this.screenScaleFactor,
						c = .5 * (l + s);
					i = e.x > this.minimapPos.x - c && e.x < this.minimapPos.x + c && e.y > this.minimapPos.y - c && e.y < this.minimapPos.y + c
				}
				if (i) {
					var m = h.create(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y + this.mapSprite.height / 2),
						d = (e.x - m.x) / this.mapSprite.width * this.mapWidth,
						p = (m.y - e.y) / this.mapSprite.height * this.mapHeight;
					return h.create(d, p)
				}
				return !1
			},
			hideAll: function() {
				this.gameElem.css("display", "none")
			},
			showAll: function() {
				this.gameElem.css("display", "block")
			},
			removeAds: function() {
				var e = [];
				e.push("surviv-io_300x250"), f.mobile ? e.push("surviv-io_300x250_mobile_2") : (e.push("surviv-io_300x250_2"), e.push("surviv-io_728x90"));
				for (var t = 0; t < e.length; t++) ! function(t) {
					var a = e[t];
					window.aiptag.cmd.display.push(function() {
						aipDisplayTag.destroy(a)
					})
				}(t)
			},
			refreshMainPageAds: function() {
				if (window.adsEnabled && !window.adsense) {
					var e = ["surviv-io_300x250"];
					f.mobile || e.push("surviv-io_728x90");
					for (var t = 0; t < e.length; t++) ! function(t) {
						var a = e[t];
						window.aiptag.cmd.display.push(function() {
							aipDisplayTag.display(a)
						})
					}(t)
				}
			},
			showKill: function(e, t, a, i) {
				var o = this,
					n = i ? k.htmlUnescape(e.name) : this.localization.translate("game-you").toUpperCase(),
					r = e.completeKill ? this.localization.translate("game-killed") : this.localization.translate("game-finally-killed"),
					s = t.downed && !t.killed;
				s && (r = this.localization.translate("game-knocked-out"));
				var l = t.suicide ? i ? this.localization.translate("game-themselves") : this.localization.translate("game-yourself").toUpperCase() : k.htmlUnescape(t.name);
				this.killText.text(n + " " + r + " " + l), (e.completeKill || s) && a && this.killText.append(" " + this.localization.translate("game-with") + " " + a), s || t.suicide || t.teamKill ? this.killCount.text("") : this.killCount.text(e.kills + (1 != e.kills ? " " + this.localization.translate("game-kills") : " " + this.localization.translate("game-kill"))), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
					o.killElem.fadeOut(1e3)
				}, 6e3)
			},
			showDowned: function(e, t, a, i) {
				var o = this,
					n = i ? k.htmlUnescape(t.name) : this.localization.translate("game-you").toUpperCase(),
					r = k.htmlUnescape(e.name);
				e.damageType == d.DamageType.Gas && (r = this.localization.translate("game-the-red-zone")), this.killText.text(r + " knocked " + n + " out"), a && e.damageType == d.DamageType.Player && this.killText.append(" " + this.localization.translate("game-with") + " " + a), this.killCount.text(""), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
					o.killElem.fadeOut(1e3)
				}, 6e3)
			},
			clearUI: function() {
				this.pieTimer.free(!0), this.curAction = {
					type: p.None
				}, this.displayMapLarge(!0), this.displayMiniMap(), this.clearStatsElems(), this.killElem.hide(), this.clearTeamUI(), this.toggleEscMenu(!0), this.toggleLocalStats(!0), this.visibilityMode = 0, this.spectatorCount = 0
			},
			hideStats: function() {
				this.displayingStats = !1, this.statsMain.css("display", "none"), this.statsElem.stop().css({
					display: "none",
					opacity: 0
				}), this.statsContents.stop().hide()
			},
			showStats: function(e, t) {
				var a = this;
				if (e.teamMode = e.teamMode || 1, e.spectating = e.spectating || !1, e.gameOver = e.gameOver || !1, e.stats = e.stats || {
						timeAlive: 0,
						kills: 0,
						rank: 0
					}, 1 != e.teamMode || !e.spectating || e.gameOver) {
					this.toggleEscMenu(!0), this.displayMapLarge(!0), this.clearStatsElems(), this.statsMain.css("display", "block");
					var i = 2500,
						n = "";
					switch (e.teamMode) {
						case 1:
							n = this.localization.translate("game-solo-rank");
							break;
						case 2:
							n = this.localization.translate("game-duo-rank");
							break;
						case 4:
							n = this.localization.translate("game-squad-rank");
							break;
						default:
							n = this.localization.translate("game-rank")
					}
					var r = null;
					e.victory && (r = e.spectating && 1 == e.teamMode ? this.spectatedPlayerName + " " + this.localization.translate("game-won-the-game") : this.localization.translate("game-chicken"), i = 1750), 1 != e.teamMode ? this.statsHeader.html(function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = t || a.localization.translate("game-team-eliminated"),
							o = '<div class="ui-stats-header-right"><span class="ui-stats-header-stat">' + n + " </span>";
						o += '<span class="ui-stats-header-value">#' + e.teamRank + "</span></div>";
						for (var r = 0, s = 0; s < e.stats.length; s++) r += e.stats[s].kills;
						return o += '<div class="ui-stats-header-left"><span class="ui-stats-header-stat">' + a.localization.translate("game-team-kills") + " </span>", o += '<span class="ui-stats-header-value">' + r + "</span></div>", l("<div/>", {
							class: ""
						}).append(l("<div/>", {
							class: "ui-stats-header-title",
							html: t || i
						})).append(l("<div/>", {
							class: "ui-stats-header-overview",
							html: o
						}))
					}(r)) : this.statsHeader.html(function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = (e.stats[0], e.spectating && 1 == e.teamMode ? a.spectatedPlayerName : a.localization.translate("game-You"));
						i += " ", i += e.spectating && 1 == e.teamMode ? a.localization.translate("game-player-died") : a.localization.translate("game-you-died"), i += ".";
						var o = '<div><span class="ui-stats-header-stat">' + n + " </span>";
						return o += '<span class="ui-stats-header-value">#' + e.teamRank + "</span></div>", l("<div/>", {
							class: ""
						}).append(l("<div/>", {
							class: "ui-stats-header-title",
							html: t || i
						})).append(l("<div/>", {
							class: "ui-stats-header-overview",
							html: o
						}))
					}(r)), this.pieTimer.free(!0), this.displayingStats = !0;
					var s = function(e, t) {
							return l("<div/>", {
								class: "ui-stats-info"
							}).append(l("<div/>", {
								html: e
							})).append(l("<div/>", {
								html: t
							}))
						},
						c = f.layout == f.Layout.Sm ? 125 : 250,
						m = 0;
					m -= (e.stats.length - 1) * c / 2, m -= 10 * (e.stats.length - 1);
					for (var d = 0; d < e.stats.length; d++) {
						var p = e.stats[d],
							u = t.getPlayerInfo(p.playerId),
							h = o(p.timeAlive),
							g = "ui-stats-info-player";
						g += p.dead ? " ui-stats-info-status" : "";
						var y = function(e) {
							return l("<div/>", {
								class: e
							})
						}(g);
						y.css("left", m), y.append(l("<div/>", {
							class: "ui-stats-info-player-name",
							html: u.name
						})), y.append(s(this.localization.translate("game-kills"), "" + p.kills)).append(s(this.localization.translate("game-damage-dealt"), p.damageDealt)).append(s(this.localization.translate("game-damage-taken"), p.damageTaken)).append(s(this.localization.translate("game-survived"), h)), this.statsInfoBox.append(y), m += 10
					}
					var b = l("<a/>", {
						class: "ui-stats-restart btn-green btn-darken menu-option",
						html: this.localization.translate("game-play-new-game")
					});
					if (b.on("click", function() {
							a.doQuitGame()
						}), this.statsOptions.append(b), e.gameOver || this.waitingForPlayers) b.css({
						width: f.layout != f.Layout.Sm || f.tablet ? 225 : 130
					});
					else {
						b.css({
							left: f.layout != f.Layout.Sm || f.tablet ? -72 : -46
						});
						var x = l("<a/>", {
							class: "btn-green btn-darken menu-option",
							id: "ui-stats-spectate",
							html: this.localization.translate("game-spectate")
						});
						x.on("click", function() {
							a.beginSpectating = !0, a.hideStats()
						}), this.statsOptions.append(x)
					}
					if (!e.victory && window.adsEnabled && !window.adsense) {
						var v = i - 150;
						setTimeout(function() {
							a.killElem.stop(), a.killElem.hide(), l(f.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
							var e = f.mobile ? "surviv-io_300x250_mobile_2" : "surviv-io_300x250_2";
							window.aiptag.cmd.display.push(function() {
								aipDisplayTag.display(e)
							})
						}, v)
					}
					var k = 0,
						_ = 250 / Math.max(1, e.stats.length),
						w = 750 / Math.max(1, e.stats.length);
					this.statsInfoBox.children().each(function(e, t) {
						var a = l(t);
						a.css("opacity", 0), a.delay(i + w + (k + e) * _).animate({
							opacity: 1
						}, 500, function() {
							a.children().each(function(e, t) {
								l(t).delay(e * _).animate({
									opacity: 1
								}, 500)
							})
						}), a.children().each(function(e, t) {
							l(t).css("opacity", 0), k++
						}), k++
					}), this.statsOptions.children().each(function(e, t) {
						var a = l(t);
						a.hide(), a.delay(i + w + (k + e) * _).fadeIn(500), k++
					}), this.statsElem.stop(), this.statsElem.css("display", "block"), this.statsElem.delay(i).animate({
						opacity: 1
					}, 1e3), this.statsContents.stop(), this.statsContents.css("display", "block"), this.statsContents.delay(i).animate({
						opacity: 1
					}, 1e3)
				}
			},
			clearStatsElems: function() {
				this.statsHeader.empty(), this.statsInfoBox.empty(), this.statsOptions.empty(), this.statsAds.css("display", "none"), this.statsContents.stop(), this.statsContents.css({
					display: "none",
					opacity: 0
				}), this.statsElem.stop(), this.statsElem.css({
					display: "none",
					opacity: 0
				}), this.statsMain.css("display", "none")
			},
			setSpectating: function(e) {
				if (this.spectating != e)
					if (this.spectating = e, this.spectatedPlayerName = "", e) {
						this.spectateMode.css("display", "block");
						var t = this.game.teamMode <= 2;
						this.specPrevButton.css("display", t ? "none" : "block"), this.specNextButton.css("display", t ? "none" : "block"), l(".ui-zoom").removeClass("ui-zoom-hover")
					} else this.spectateMode.css("display", "none")
			},
			setSpectatedPlayer: function(e, t) {
				this.spectatedPlayerId != e && (this.spectatedPlayerText.find("#spectate-player").html(t), this.spectatedPlayerName = t, this.spectatedPlayerId = e, this.curAction = {
					type: p.None
				})
			},
			setLocalStats: function(e) {
				var t = {
					kills: this.localization.translate("game-kills"),
					damageDealt: this.localization.translate("game-damage-dealt"),
					damageTaken: this.localization.translate("game-damage-taken"),
					timeAlive: this.localization.translate("game-survived")
				};
				this.spectateModeStatsData.empty();
				for (var a in t)
					if (t.hasOwnProperty(a)) {
						var i = t[a],
							n = "timeAlive" == a ? o(e[a]) : e[a],
							r = '<tr><td class="ui-spectate-stats-category">' + i + '</td><td class="ui-spectate-stats-value">' + n + "</td></tr>";
						this.spectateModeStatsData.append(r)
					}
			},
			toggleLocalStats: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = "none" == this.spectateModeStats.css("display") && !e;
				this.spectateModeStats.css("display", t ? "inline-block" : "none"), this.specStatsButton.html(t ? this.localization.translate("game-hide-match-stats") : this.localization.translate("game-view-match-stats"))
			},
			updatePlayersAlive: function(e) {
				this.playersAlive.html(e)
			},
			displayMapLarge: function(e) {
				this.bigmapDisplayed = !e && !this.bigmapDisplayed, this.bigmapDisplayed ? this.container.alpha = 1 : this.container.alpha = this.minimapDisplayed ? 1 : 0;
				var t = f.layout == f.Layout.Sm ? ".js-ui-mobile-map-hidden" : "js-ui-desktop-map-hidden";
				t += ", .js-ui-map-hidden", l(2 == this.visibilityMode ? ".js-ui-hud-show" : t).css("display", this.bigmapDisplayed ? "none" : "block"), this.bigmap.css("display", this.bigmapDisplayed ? "block" : "none"), this.updateSpectatorCountDisplay(!0), this.redraw(this.game.camera)
			},
			updateSpectatorCountDisplay: function(e) {
				var t = !this.bigmapDisplayed && this.spectatorCount > 0;
				e = e || this.spectatorCount > 0 && !this.spectatorCounterDisplayed || 0 == this.spectatorCount && this.spectatorCounterDisplayed, this.spectatorCount != this.prevSpectatorCount && (this.spectatorCounter.html(this.spectatorCount), this.prevSpectatorCount = this.spectatorCount), e && (this.spectatorCounterContainer.css("display", t ? "block" : "none"), this.spectatorCounterDisplayed = t)
			},
			toggleMiniMap: function() {
				this.minimapDisplayed ? this.hideMiniMap() : this.displayMiniMap()
			},
			cycleVisibilityMode: function() {
				if (!this.bigmapDisplayed) switch (this.visibilityMode) {
					case 0:
						this.hideMiniMap(), this.visibilityMode = 1;
						break;
					case 1:
						this.displayMiniMap(), this.visibilityMode = 0
				}
			},
			cycleHud: function() {
				"none" == this.gameElem.css("display") ? (this.gameElem.css("display", "block"), this.displayMiniMap()) : (this.gameElem.css("display", "none"), this.hideMiniMap())
			},
			hideMiniMap: function() {
				this.bigmapDisplayed || (this.minimapDisplayed = !1, this.container.alpha = 0, this.mapInfo.css("bottom", "auto"), this.spectatorCounterContainer.css({
					bottom: 6,
					left: 98
				}))
			},
			displayMiniMap: function() {
				if (!this.bigmapDisplayed) {
					var e = f.layout == f.Layout.Sm;
					this.minimapDisplayed = !0, this.container.alpha = 1, this.mapInfo.css("bottom", this.mapInfoBottom), this.spectatorCounterContainer.css({
						bottom: e ? 0 : 218,
						left: e ? 0 : 6
					})
				}
			},
			displayAnnouncement: function(e, t) {
				var a = "";
				switch (e) {
					case u.Waiting:
						a = this.localization.translate("game-red-zone-advances");
						var i = Math.floor(t / 60),
							o = t - 60 * i;
						a += i > 1 ? " " + i + " " + this.localization.translate("game-minutes") : "", a += 1 == i ? " " + i + " " + this.localization.translate("game-minute") : "", a += o > 0 ? " " + Math.floor(o) + " " + this.localization.translate("game-seconds") : "";
						break;
					case u.Moving:
						a = this.localization.translate("game-red-zone-advancing")
				}
				a.length > 0 && (this.announcement.html(a), this.announcement.fadeIn(400, function() {
					setTimeout(function() {
						l("#ui-announcement").fadeOut(800)
					}, 3e3)
				}))
			},
			setWaitingForPlayers: function(e) {
				this.waitingForPlayers = e, this.waitingText.css("display", e ? "block" : "none")
			},
			render: function(e, t, a, i) {
				var o = t.getCircle(),
					n = this.getMapPosFromWorldPos(o.pos, i),
					r = this.getMapPosFromWorldPos(h.add(o.pos, h.create(o.rad, 0)), i),
					s = h.length(h.sub(r, n));
				this.gasRenderer.render(n, s, t.isActive());
				var l = t.circleNew,
					c = this.getMapPosFromWorldPos(l.pos, i),
					m = this.getMapPosFromWorldPos(h.add(l.pos, h.create(l.rad, 0)), i),
					d = h.length(h.sub(m, c)),
					p = this.getMapPosFromWorldPos(e, i),
					u = t.isActive(),
					g = t.isActive() && !this.bigmapDisplayed;
				this.gasSafeZoneRenderer.render(c, d, p, u, g)
			},
			updateHealthBar: function(e, t, a, i) {
				var o = e,
					n = .01 * i.health * o;
				n = i.dead ? 0 : Math.max(n, 1), t.css("width", n), n > 0 ? a.css("width", n) : a.css("display", "none");
				var s = i.health,
					l = this.healthRed,
					c = this.healthDarkpink;
				if (s > 25) {
					if (i.downed) t.css({
						backgroundColor: "red"
					});
					else {
						g.eqAbs(s, 100, .2) ? (l = this.healthGrey, c = this.healthGrey) : g.eqAbs(s, 75, .2) || s >= 75 ? (l = this.healthWhite, c = this.healthWhite) : (l = this.healthDarkpink, c = this.healthLightpink);
						var m = l.getColors(),
							d = c.getColors(),
							p = r(m.r, d.r, 45, s),
							u = r(m.g, d.g, 45, s),
							h = r(m.b, d.b, 45, s);
						t.css({
							backgroundColor: "rgba(" + p + "," + u + "," + h + ",1)"
						})
					}
					t.removeClass("ui-bar-danger")
				} else t.addClass("ui-bar-danger")
			},
			updateTeam: function(e, t, a, i) {
				var o = this.teamSelectors[e].teamId,
					n = this.teamSelectors[e].teamName,
					r = this.teamSelectors[e].prevHealth,
					s = this.teamSelectors[e].prevStatus,
					l = i.dead != s.dead || i.disconnected != s.disconnected || i.downed != s.downed;
				if (this.teamSelectors[e].teamNameHtml != t || a != r || l) {
					var m = (this.teamSelectors[e].teamIcon, this.teamSelectors[e].teamStatus),
						d = this.teamSelectors[e].teamHealthInner,
						p = this.teamSelectors[e].teamHealthDepleted;
					this.teamSelectors[e].teamNameHtml = t, n.html(t), this.updateHealthBar(this.teamMemberHealthBarWidth, d, p, {
						health: a,
						dead: i.dead,
						downed: i.downed
					}), l && (m.attr("class", "ui-team-member-status"), i.disconnected ? m.addClass("ui-team-member-status-disconnected") : i.dead ? m.addClass("ui-team-member-status-dead") : i.downed && m.addClass("ui-team-member-status-downed").addClass("icon-pulse"), i.dead && (this.teamSelectors[e].mapSprites.inner.sprite.texture = c.Texture.fromImage("img/gui/skull-team-outlined.svg"), this.teamSelectors[e].mapSprites.inner.sprite.scale = h.mul(this.playerBaseScale, 1.5)), (i.disconnected || i.dead) && n.css("opacity", .3)), o.css("display", "block"), this.teamSelectors[e].prevStatus = i, this.teamSelectors[e].prevHealth = a
				}
			},
			clearTeamUI: function() {
				l(".ui-team-member").css("display", "none"), l(".ui-team-indicator").css("display", "none"), l(".ui-team-member-name").removeAttr("style"), l(".ui-team-member-status").removeAttr("style"), l(".ui-team-member-status").removeClass("ui-team-member-status-downed ui-team-member-status-dead ui-team-member-status-disconnected icon-pulse"), this.teamSelectors = []
			},
			resize: function(e) {
				this.screenScaleFactor = f.layout == f.Layout.Sm ? .5626 : Math.min(1, g.clamp(e.screenWidth / 1280, .75, 1) * g.clamp(e.screenHeight / 1024, .75, 1)), this.pieTimer.resize(this.touch, this.screenScaleFactor), this.gasRenderer.resize(), this.redraw(e)
			},
			redraw: function(e) {
				var t = e.screenWidth,
					a = e.screenHeight,
					i = this.getMinimapMargin(),
					o = this.getMinimapSize(),
					n = this.getMinimapBorderWidth(),
					r = f.layout == f.Layout.Sm;
				if (this.display.border.clear(), this.container.mask.clear(), this.bigmapDisplayed) {
					var s = g.min(t, a);
					this.mapSprite.width = s, this.mapSprite.height = s, this.mapSprite.x = t / 2, this.mapSprite.y = a / 2, this.mapSprite.alpha = 1, this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y - this.mapSprite.height / 2, this.mapSprite.width, this.mapSprite.height), this.container.mask.endFill(), f.touch && this.bigmapCollision.css({
						width: a,
						height: t
					})
				} else {
					var l = 1600 * this.screenScaleFactor / 1.2,
						m = o * this.screenScaleFactor;
					this.mapSprite.width = l, this.mapSprite.height = l, this.mapSprite.alpha = .8;
					var d = {
						zoom: this.screenScaleFactor
					};
					document.body && ("WebkitTransform" in document.body.style ? d = {
						"-webkit-transform": "scale(" + this.screenScaleFactor + ")"
					} : "transform" in document.body.style && (d = {
						transform: "scale(" + this.screenScaleFactor + ")"
					})), this.mapContainer.css(d), this.mapContainer.css("bottom", this.mapContainerBottom * this.screenScaleFactor);
					var p = r ? m / 2 + i : a - m / 2 - i;
					this.minimapPos.x = i + m / 2, this.minimapPos.y = p, this.player.position = new c.Point(this.minimapPos.x, this.minimapPos.y), this.display.border.lineStyle(n, 0), this.display.border.beginFill(0, 0);
					var u = r ? i + n / 2 : a - m - i + n / 2;
					this.display.border.drawRect(i + n / 2, u, m - n, m - n), this.display.border.endFill();
					var h = r ? i : a - m - i;
					this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(i, h - .5, m, m), this.container.mask.endFill()
				}
			},
			toggleEscMenu: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (!this.displayingStats) {
					if (this.escMenuDisplayed || e) return this.escMenuDisplayed = !1, void this.escMenuElem.css("display", "none");
					if (this.bigmapDisplayed) return void this.displayMapLarge(!0);
					2 == this.visibilityMode && this.cycleVisibilityMode(), this.escMenuDisplayed = !0, this.escMenuElem.css("display", "block")
				}
			}
		}, e.exports = {
			UiManager: n
		}
	},
	MeqN: function(e, t, a) {
		"use strict";
		(function(t) {
			! function(a) {
				function i(e, t) {
					return n(e, t, !1)
				}

				function o(e, t) {
					return n(e, t, !0)
				}

				function n(e, t, a) {
					if (0 === t) return "";
					var i = 0,
						o = [],
						n = !0,
						r = !!t;
					for (t || (t = Math.floor((e._length - e._index) / 8)); i < t;) {
						var s = e.readUint8();
						if (0 === s && (n = !1, !r)) break;
						n && o.push(s), i++
					}
					var l = String.fromCharCode.apply(null, o);
					if (!a) return l;
					try {
						return decodeURIComponent(escape(l))
					} catch (e) {
						return l
					}
				}

				function r(e, t, a) {
					for (var i = a || t.length + 1, o = 0; o < i; o++) e.writeUint8(o < t.length ? t.charCodeAt(o) : 0)
				}

				function s(e, t, a) {
					for (var i = l(t), o = a || i.length + 1, n = 0; n < o; n++) e.writeUint8(n < i.length ? i[n] : 0)
				}

				function l(e) {
					var t, a, i = [];
					for (t = 0; t < e.length; t++) a = e.charCodeAt(t), a <= 127 ? i.push(a) : a <= 2047 ? (i.push(a >> 6 | 192), i.push(63 & a | 128)) : a <= 65535 ? (i.push(a >> 12 | 224), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : (i.push(a >> 18 | 240), i.push(a >> 12 & 63 | 128), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128));
					return i
				}
				var c = function(e, a, i) {
					if (!(e instanceof ArrayBuffer || void 0 !== t && e instanceof t)) throw new Error("Must specify a valid ArrayBuffer or Buffer.");
					a = a || 0, i = i || e.byteLength || e.length, this._view = new Uint8Array(e, a, i)
				};
				c._scratch = new DataView(new ArrayBuffer(8)), Object.defineProperty(c.prototype, "buffer", {
					get: function() {
						return t.from(this._view.buffer)
					},
					enumerable: !0,
					configurable: !1
				}), Object.defineProperty(c.prototype, "byteLength", {
					get: function() {
						return this._view.length
					},
					enumerable: !0,
					configurable: !1
				}), c.prototype._setBit = function(e, t) {
					t ? this._view[e >> 3] |= 1 << (7 & e) : this._view[e >> 3] &= ~(1 << (7 & e))
				}, c.prototype.getBits = function(e, t, a) {
					var i = 8 * this._view.length - e;
					if (t > i) throw new Error("Cannot get " + t + " bit(s) from offset " + e + ", " + i + " available");
					for (var o = 0, n = 0; n < t;) {
						var r = t - n,
							s = 7 & e,
							l = this._view[e >> 3],
							c = Math.min(r, 8 - s);
						o |= (l >> s & (1 << c) - 1) << n, e += c, n += c
					}
					return a ? (32 !== t && o & 1 << t - 1 && (o |= -1 ^ (1 << t) - 1), o) : o >>> 0
				}, c.prototype.setBits = function(e, t, a) {
					var i = 8 * this._view.length - e;
					if (a > i) throw new Error("Cannot set " + a + " bit(s) from offset " + e + ", " + i + " available");
					for (var o = 0; o < a;) {
						var n;
						a - o >= 8 && 0 == (7 & e) ? (this._view[e >> 3] = 255 & t, n = 8) : (this._setBit(e, 1 & t), n = 1), t >>= n, e += n, o += n
					}
				}, c.prototype.getBoolean = function(e) {
					return 0 !== this.getBits(e, 1, !1)
				}, c.prototype.getInt8 = function(e) {
					return this.getBits(e, 8, !0)
				}, c.prototype.getUint8 = function(e) {
					return this.getBits(e, 8, !1)
				}, c.prototype.getInt16 = function(e) {
					return this.getBits(e, 16, !0)
				}, c.prototype.getUint16 = function(e) {
					return this.getBits(e, 16, !1)
				}, c.prototype.getInt32 = function(e) {
					return this.getBits(e, 32, !0)
				}, c.prototype.getUint32 = function(e) {
					return this.getBits(e, 32, !1)
				}, c.prototype.getFloat32 = function(e) {
					return c._scratch.setUint32(0, this.getUint32(e)), c._scratch.getFloat32(0)
				}, c.prototype.getFloat64 = function(e) {
					return c._scratch.setUint32(0, this.getUint32(e)), c._scratch.setUint32(4, this.getUint32(e + 32)), c._scratch.getFloat64(0)
				}, c.prototype.setBoolean = function(e, t) {
					this.setBits(e, t ? 1 : 0, 1)
				}, c.prototype.setInt8 = c.prototype.setUint8 = function(e, t) {
					this.setBits(e, t, 8)
				}, c.prototype.setInt16 = c.prototype.setUint16 = function(e, t) {
					this.setBits(e, t, 16)
				}, c.prototype.setInt32 = c.prototype.setUint32 = function(e, t) {
					this.setBits(e, t, 32)
				}, c.prototype.setFloat32 = function(e, t) {
					c._scratch.setFloat32(0, t), this.setBits(e, c._scratch.getUint32(0), 32)
				}, c.prototype.setFloat64 = function(e, t) {
					c._scratch.setFloat64(0, t), this.setBits(e, c._scratch.getUint32(0), 32), this.setBits(e + 32, c._scratch.getUint32(4), 32)
				}, c.prototype.getArrayBuffer = function(e, t) {
					for (var a = new Uint8Array(t), i = 0; i < t; i++) a[i] = this.getUint8(e + 8 * i);
					return a
				};
				var m = function(e, t) {
						return function() {
							if (this._index + t > this._length) throw new Error("Trying to read past the end of the stream");
							var a = this._view[e](this._index);
							return this._index += t, a
						}
					},
					d = function(e, t) {
						return function(a) {
							this._view[e](this._index, a), this._index += t
						}
					},
					p = function(e, a, i) {
						var o = e instanceof ArrayBuffer || void 0 !== t && e instanceof t;
						if (!(e instanceof c || o)) throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
						this._view = o ? new c(e, a, i) : e, this._index = 0, this._startIndex = 0, this._length = 8 * this._view.byteLength
					};
				Object.defineProperty(p.prototype, "index", {
					get: function() {
						return this._index - this._startIndex
					},
					set: function(e) {
						this._index = e + this._startIndex
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "length", {
					get: function() {
						return this._length - this._startIndex
					},
					set: function(e) {
						this._length = e + this._startIndex
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "bitsLeft", {
					get: function() {
						return this._length - this._index
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "byteIndex", {
					get: function() {
						return Math.ceil(this._index / 8)
					},
					set: function(e) {
						this._index = 8 * e
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "buffer", {
					get: function() {
						return this._view.buffer
					},
					enumerable: !0,
					configurable: !1
				}), Object.defineProperty(p.prototype, "view", {
					get: function() {
						return this._view
					},
					enumerable: !0,
					configurable: !1
				}), p.prototype.readBits = function(e, t) {
					var a = this._view.getBits(this._index, e, t);
					return this._index += e, a
				}, p.prototype.writeBits = function(e, t) {
					this._view.setBits(this._index, e, t), this._index += t
				}, p.prototype.readBoolean = m("getBoolean", 1), p.prototype.readInt8 = m("getInt8", 8), p.prototype.readUint8 = m("getUint8", 8), p.prototype.readInt16 = m("getInt16", 16), p.prototype.readUint16 = m("getUint16", 16), p.prototype.readInt32 = m("getInt32", 32), p.prototype.readUint32 = m("getUint32", 32), p.prototype.readFloat32 = m("getFloat32", 32), p.prototype.readFloat64 = m("getFloat64", 64), p.prototype.writeBoolean = d("setBoolean", 1), p.prototype.writeInt8 = d("setInt8", 8), p.prototype.writeUint8 = d("setUint8", 8), p.prototype.writeInt16 = d("setInt16", 16), p.prototype.writeUint16 = d("setUint16", 16), p.prototype.writeInt32 = d("setInt32", 32), p.prototype.writeUint32 = d("setUint32", 32), p.prototype.writeFloat32 = d("setFloat32", 32), p.prototype.writeFloat64 = d("setFloat64", 64), p.prototype.readASCIIString = function(e) {
					return i(this, e)
				}, p.prototype.readUTF8String = function(e) {
					return o(this, e)
				}, p.prototype.writeASCIIString = function(e, t) {
					r(this, e, t)
				}, p.prototype.writeUTF8String = function(e, t) {
					s(this, e, t)
				}, p.prototype.readBitStream = function(e) {
					var t = new p(this._view);
					return t._startIndex = this._index, t._index = this._index, t.length = e, this._index += e, t
				}, p.prototype.writeBitStream = function(e, t) {
					t || (t = e.bitsLeft);
					for (var a; t > 0;) a = Math.min(t, 32), this.writeBits(e.readBits(a), a), t -= a
				}, p.prototype.readArrayBuffer = function(e) {
					var t = this._view.getArrayBuffer(this._index, e);
					return this._index += 8 * e, t
				}, p.prototype.writeArrayBuffer = function(e, t) {
					this.writeBitStream(new p(e), 8 * t)
				}, e.exports = {
					BitView: c,
					BitStream: p
				}
			}()
		}).call(t, a("dskh").Buffer)
	},
	Mzdc: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, a) {
			var i = t - e,
				o = i * a;
			return Math.abs(o) < .001 ? i : o
		}

		function n(e, t, a, i, o, n) {
			for (var r = i, s = d.add(t, d.mul(a, i)), c = e.obstaclePool.getPool(), p = 0; p < c.length; p++) {
				var u = c[p];
				if (!(!u.active || u.dead || !u.collidable || u.isWindow || u.height < o || !m.sameLayer(u.layer, n) || 2 & n && 0 == u.layer)) {
					var h = l.intersectSegment(u.collider, t, s);
					h && (r = Math.min(r, d.length(d.sub(h.point, t))))
				}
			}
			return r
		}
		var r = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			s = (a("DlZn"), a("gKxX")),
			l = a("9xSA"),
			c = (a("0od3"), a("Bk7F")),
			m = a("Tf6H"),
			d = a("/2+T"),
			p = a("zinx"),
			u = a("r4ug"),
			h = a("EZ6M"),
			g = a("xgte"),
			f = g.RenderType,
			y = function() {
				function e() {
					i(this, e), this.sprites = []
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.isNew = !1, this.residue = null, this.ceilingDead = !1, this.playedCeilingDeadFx = !1
					}
				}, {
					key: "free",
					value: function() {
						for (var e = 0; e < this.sprites.length; e++) {
							var t = this.sprites[e];
							t.active = !1, t.sprite.visible = !1, t.sprite.parent && t.sprite.parent.removeChild(t.sprite)
						}
					}
				}, {
					key: "allocSprite",
					value: function() {
						for (var e = 0; e < this.sprites.length; e++) {
							var t = this.sprites[e];
							if (!t.active) return t.active = !0, t.sprite
						}
						var a = new s.Sprite;
						return a.anchor.set(.5, .5), this.sprites.push({
							active: !0,
							sprite: a
						}), a
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = this;
						if (this.type = e.type, this.pos = d.copy(e.pos), this.rot = c.oriToRad(e.ori), this.scale = 1, this.layer = e.layer, this.ceilingDead = e.ceilingDead, a) {
							var n = c.Defs[e.type];
							this.isNew = !0, this.playedCeilingDeadFx = -1 != i.map.deadCeilingIds.indexOf(this.__id);
							var r = function(e) {
								var t = e.pos || d.create(0, 0),
									a = c.oriToRad(e.rot || 0),
									i = o.allocSprite();
								return i.texture = s.Texture.fromImage(e.sprite), i.tint = e.tint, i.posOffset = d.rotate(t, o.rot), i.rotOffset = a, i.imgAlpha = e.alpha, i.alpha = i.imgAlpha, i.defScale = e.scale, i.visible = !0, i
							};
							this.bounds = l.transform(c.getBoundingCollider(this.type), this.pos, this.rot, this.scale), this.zIdx = n.zIdx || 0, this.surfaces = [];
							for (var m = 0; m < n.floor.surfaces.length; m++) {
								for (var p = n.floor.surfaces[m], u = {
										surface: p.type,
										colliders: []
									}, h = 0; h < p.collision.length; h++) u.colliders.push(l.transform(p.collision[h], this.pos, this.rot, this.scale));
								this.surfaces.push(u)
							}
							var g = Object.assign({}, {
								dist: 5.5,
								width: 2.75,
								linger: 0,
								fadeRate: 12
							}, n.ceiling.vision);
							this.ceiling = {
								scopeIn: [],
								scopeOut: [],
								vision: g,
								visionTicker: 0,
								fadeAlpha: 1
							};
							for (var f = 0; f < n.ceiling.scopeIn.length; f++) this.ceiling.scopeIn.push(l.transform(n.ceiling.scopeIn[f], this.pos, this.rot, this.scale));
							for (var y = 0; y < n.ceiling.scopeOut.length; y++) this.ceiling.scopeOut.push(l.transform(n.ceiling.scopeOut[y], this.pos, this.rot, this.scale));
							this.imgs = [];
							for (var b = 0; b < n.floor.imgs.length; b++) this.imgs.push({
								sprite: r(n.floor.imgs[b]),
								isCeiling: !1,
								zOrd: this.zIdx,
								zIdx: 100 * this.__id + b
							});
							for (var x = 0; x < n.ceiling.imgs.length; x++) this.imgs.push({
								sprite: r(n.ceiling.imgs[x]),
								isCeiling: !0,
								zOrd: 750 - this.zIdx,
								zIdx: 100 * this.__id + x
							})
						}
					}
				}, {
					key: "update",
					value: function(e, t, a, i, n, r, l) {
						if (this.ceilingDead && !this.playedCeilingDeadFx && (t.deadCeilingIds.push(this.__id), this.playedCeilingDeadFx = !0, this.isNew || this.destroyCeilingFx(a, i)), this.isNew = !1, this.ceilingDead && !this.residue) {
							var m = c.Defs[this.type];
							if (void 0 !== m.ceiling.destroy) {
								var d = this.allocSprite();
								d.texture = s.Texture.fromImage(m.ceiling.destroy.residue), d.position.set(0, 0), d.scale.set(1, 1), d.rotation = 0, d.visible = !0, this.imgs[0].sprite.addChild(d), this.residue = d
							}
						}
						var p = this.ceiling;
						p.visionTicker -= e;
						for (var u = p.vision, h = 0; h < p.scopeIn.length; h++) {
							var g = p.scopeIn[h];
							if (this.canSeeInside(t, n.pos, n.layer, u, g)) {
								p.visionTicker = u.linger + 1e-4;
								break
							}
						}
						n.noCeilingRevealTicker > 0 && (p.visionTicker = 0);
						var y = p.visionTicker > 0,
							b = o(p.fadeAlpha, y ? 0 : 1, e * (y ? 12 : u.fadeRate));
						p.fadeAlpha += b;
						for (var x = 0; x < this.imgs.length; x++) {
							var v = this.imgs[x],
								k = v.isCeiling ? p.fadeAlpha : 1;
							this.positionSprite(v.sprite, k, l);
							var _ = this.layer;
							v.isCeiling && (this.layer == n.layer || 2 & n.layer && 1 == this.layer) && (_ |= 2), r.addPIXIObj(v.sprite, f.World, _, v.zOrd, v.zIdx)
						}
					}
				}, {
					key: "canSeeInside",
					value: function(e, t, a, i, o) {
						if (this.ceilingDead) return !0;
						var r = l.intersectCircle(o, t, i.dist);
						if (!r) return !1;
						if (r.pen >= i.dist) return !0;
						for (var s = [t, d.add(t, d.mul(d.perp(r.dir), i.width)), d.sub(t, d.mul(d.perp(r.dir), i.width)), d.add(t, d.mul(d.perp(r.dir), .5 * i.width)), d.sub(t, d.mul(d.perp(r.dir), .5 * i.width))], c = 0; c < s.length; c++) {
							var m = s[c],
								h = d.sub(m, t),
								g = d.length(h);
							h = g > 1e-4 ? d.div(h, g) : d.create(1, 0);
							var f = n(e, t, h, g, 0);
							m = d.add(t, d.mul(h, f));
							var y = l.intersectCircle(o, m, i.dist);
							if (y) {
								var b = d.neg(y.dir),
									x = n(e, m, b, i.dist, .5, a),
									v = l.intersectSegment(o, m, d.add(m, d.mul(b, i.dist))),
									k = v && d.length(d.sub(v.point, m)) <= x;
								if (p.debug && u.addRay(m, b, i.dist, k ? 65280 : 16711680), k) return !0
							}
						}
						return !1
					}
				}, {
					key: "destroyCeilingFx",
					value: function(e, t) {
						for (var a = c.Defs[this.type].ceiling.destroy, i = this.surfaces[0], o = 0; o < i.colliders.length; o++) {
							for (var n = l.toAabb(i.colliders[o]), r = 0; r < a.particleCount; r++) {
								var s = d.create(m.random(n.min.x, n.max.x), m.random(n.min.y, n.max.y)),
									p = d.mul(d.randomUnit(), m.random(0, 15));
								e.addParticle(h.Defs[a.particle], this.layer, s, p)
							}
							break
						}
						t.playSound("ceiling_break_01", {
							channel: "sfx",
							soundPos: this.pos
						})
					}
				}, {
					key: "positionSprite",
					value: function(e, t, a) {
						var i = a.pointToScreen(d.add(this.pos, e.posOffset)),
							o = a.pixels(this.scale * e.defScale);
						e.position.set(i.x, i.y), e.scale.set(o, o), e.rotation = -this.rot + e.rotOffset, e.alpha = e.imgAlpha * t
					}
				}, {
					key: "render",
					value: function(e) {}
				}]), e
			}();
		e.exports = y
	},
	"O/82": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-02-20",
				locale: "it"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Nazione",
			"index-north-america": "America del Nord",
			"index-europe": "Europa",
			"index-asia": "Asia",
			"index-players": "giocatori",
			"index-play-solo": "Gioca da Solo",
			"index-play-duo": "Gioca Coppia",
			"index-play-squad": "Gioca Squadra",
			"index-create-team": "Crea un Team",
			"index-how-to-play": "Come Giocare",
			"index-leave-team": "Abbandona Team",
			"index-joining-team": "Partecipando al Team",
			"index-creating-team": "Creando il Team",
			"index-invite-link": "Link d'invito",
			"index-solo": "Solo",
			"index-duo": "Coppia",
			"index-squad": "Squadra",
			"index-auto-fill": "Auto Fill",
			"index-no-fill": "No Fill",
			"index-waiting-for-leader": "Aspettando che il leader avvii la partita",
			"index-play": "Gioca",
			"index-featured-youtuber": "Youtuber in Evidenza",
			"index-settings": "Impostazioni",
			"index-high-resolution": "Alta risoluzione (Clicca per aumentare la qualità)",
			"index-screen-shake": "Vibrazione dello schermo",
			"index-master-volume": "Volume principale",
			"index-sfx-volume": "Volume effetti",
			"index-music-volume": "Volume musica",
			"index-team-is-full": "Il team è pieno!",
			"index-failed-joining-team": "Tentativo di partecipare al team fallito.",
			"index-failed-creating-team": "Tentativo di creare il team fallito.",
			"index-failed-finding-game": "Tentativo di trovare una partita fallito.",
			"index-failed-joining-game": "Tentativo di partecipare al team fallito.",
			"index-lost-connection": "Tentativo di connettersi al team fallito.",
			"index-host-closed": "L'host ha terminato la connessione.",
			"index-view-more": "Guarda di più",
			"index-back-to-main": "Ritorna al Menù principale",
			"index-most-kills": "Più Uccisioni",
			"index-total-kills": "Uccisioni Totali",
			"index-total-wins": "Vittorie Totali",
			"index-top-5-percent": "Top 5%",
			"index-kill-death-ratio": "Rapporto Uccisioni-Morti",
			"index-for": "Di",
			"index-today": "Oggi",
			"index-this-week": "Questa Settimana",
			"index-all-time": "Di Sempre",
			"index-top-100": "TOP 100",
			"index-rank": "Classifica",
			"index-player": "Giocatore",
			"index-total-games": "Partite totali",
			"index-controls": "Controlli",
			"index-movement": "Movimento",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Mira",
			"index-aim-ctrl": "Mouse",
			"index-punch": "Pugno",
			"index-shoot": "Spara",
			"index-shoot-ctrl": "Click Sinistro",
			"index-change-weapons": "Cambia Armi",
			"index-change-weapons-ctrl": "1-4 oppure scorri la rotella",
			"index-stow-weapons": "Vai in modalità pugni",
			"index-stow-weapons-ctrl": "3 oppure E",
			"index-swap-weapons": "Ritorna all'arma precedente",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Ricarica",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zoom mirino",
			"index-scope-zoom-ctrl": "Click Sinistro sullo Zoom",
			"index-pickup": "Raccogli",
			"index-loot": "Saccheggia",
			"index-revive": "Rianima",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Usa oggetto medico",
			"index-use-medical-ctrl": "Click sinistro sull'oggetto oppure 7-0",
			"index-drop-item": "Lascia cadere oggetto",
			"index-drop-item-ctrl": "Click destro sull'oggetto",
			"index-cancel-action": "Cancella azione",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Apri la mappa",
			"index-view-map-ctrl": "M oppure G",
			"index-toggle-minimap": "Abilita/Disabilita HUD",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Use Team Ping Wheel",
			"index-use-ping-ctrl": "Tieni premuto C, dopodichè tieni premuto il tasto destro e trascina il mouse, infine rilascia il tasto destro",
			"index-use-emote": "Come Giocare",
			"index-use-emote-ctrl": "Tieni premuto il tasto destro e trascina il mouse, dopodichè rilascia il tasto destro",
			"index-tips-1-desc": "L'obiettivo di surviv.io è di rimanere l'ultimo giocatore sopravvissuto. Hai solo una vita a partita - Non puoi rinascere!",
			"index-tips-2": "PUBG in 2D",
			"index-tips-2-desc": "Se hai già giocato ad altri giochi battle royale come PUBG, Fortnite o H1Z1, allora sei già a buon punto! Immagina Surviv.io come PUBG ma in 2D.",
			"index-tips-3": "Saccheggia e Uccidi",
			"index-tips-3-desc": "Comincerai la partita con nient'altro che un semplice marsupio. Gira per la mappa per trovare: armi, munizioni, mirini e oggetti medici. Elimina gli altri giocatori in modo da rubare il loro bottino!",
			"index-tips-4": "Rosso = Dannoso!",
			"index-tips-4-desc": "I giocatori non sono l'unica cosa che può recarti del danno. La zona rossa è letale e si restringe col passare del tempo, più tempo trascorrerai all'infuori della zona, maggiore sarà il danno recato. Assicurati di dare spesso un'occhiata alla mappa per rimanere al sicuro.",
			"game-alive": "In Vita",
			"game-reloading": "Ricaricando",
			"game-using": "Usando",
			"game-reviving": "Rianimando",
			"game-revive-teammate": "Rianima compagno",
			"game-equip": "Equipaggia",
			"game-cancel": "Cancella",
			"game-You": "Tu",
			"game-you": "tu",
			"game-themselves": "se stesso",
			"game-yourself": "te stesso",
			"game-you-died": "morto",
			"game-player-died": "morto",
			"game-with": "con",
			"game-knocked-out": "messo KO",
			"game-killed": "ucciso",
			"game-finally-killed": "finalmente ucciso",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "morto all'infuori della zona protetta",
			"game-the-red-zone": "La zona rossa",
			"game-waiting-for-players": "Aspettando altri giocatori",
			"game-spectating": "Osservando",
			"game-red-zone-advances": "La zona rossa avanzerà tra",
			"game-red-zone-advancing": "La zona rossa sta avanzando, raggiungi la zona sicura!",
			"game-seconds": "secondi",
			"game-minutes": "minuti",
			"game-minute": "minuto",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Non hai abbastanza spazio!",
			"game-item-already-owned": "Possiedi già questo oggetto!",
			"game-item-already-equipped": "Oggetto già equipaggiato!",
			"game-better-item-equipped": "Hai un miglior oggetto equipaggiato!",
			"game-play-new-game": "Gioca una Nuova Partita",
			"game-spectate": "Osserva",
			"game-full-screen": "Schermo intero",
			"game-sound": "Suono",
			"game-quit-game": "Abbandona Gioco",
			"game-return-to-game": "Ritorna al Gioco",
			"game-hide-match-stats": "Nascondi le Statistiche",
			"game-view-match-stats": "Guarda le Statistiche",
			"game-previous-teammate": "Compagno Precedente",
			"game-next-teammate": "Prossimo Compagno",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Abbandona Gioco",
			"game-your-results": "I tuoi Risultati",
			"game-chicken": "Vittoria! Stasera si mangia pollo!",
			"game-won-the-game": "vinto la partita.",
			"game-team-eliminated": "La tua squadra è stata eliminata.",
			"game-rank": "Rank",
			"game-team-rank": "Classifica Squadra",
			"game-team-kills": "Uccisioni di Squadra",
			"game-kill": "Uccisione",
			"game-kills": "Uccisioni",
			"game-damage-dealt": "Danno provocato",
			"game-damage-taken": "Danno subito",
			"game-survived": "Resistito per",
			"game-backpack00": "Marsupio",
			"game-backpack01": "Zaino piccolo",
			"game-backpack02": "Zaino normale",
			"game-backpack03": "Zaino militaresco",
			"game-bandage": "Bende",
			"game-bandage-tooltip": "Click sinistro per rigenerare il 15% di salute.",
			"game-healing-tooltip": "Non puoi superare il 75% di salute.",
			"game-healthkit": "Kit Medico",
			"game-healthkit-tooltip": "Click sinistro per rigenerare il 100% di energia.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Click sinistro per incrementare l'adrenalina del 25%.",
			"game-adrenaline-tooltip": "L'adrenalina restituisce la salute col passare del tempo.",
			"game-painkiller": "Pillole",
			"game-painkiller-tooltip": "Click sinistro per incrementare l'adrenalina del 50%.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Munizioni per M9, Glock, MP5, MAC-10, UMP9 e Vector.",
			"game-12gauge": "Calibro 12",
			"game-12gauge-tooltip": "Munizioni per M870, Saiga-12 e MP220.",
			"game-762mm": "7,62mm",
			"game-762mm-tooltip": "Munizioni per AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 e DP-28.",
			"game-556mm": "5,56mm",
			"game-556mm-tooltip": "Munizioni per FAMAS, HK416, Mk 12 e M249.",
			"game-chest01": "Armatura Livello 1",
			"game-chest02": "Armatura Livello 2",
			"game-chest03": "Armatura Livello 3",
			"game-helmet01": "Casco Livello 1",
			"game-helmet02": "Casco Livello 2",
			"game-helmet03": "Casco Livello 3",
			"game-1xscope": "1x Mirino",
			"game-2xscope": "2x Mirino",
			"game-4xscope": "4x Mirino",
			"game-8xscope": "8x Mirino",
			"game-15xscope": "15x Mirino",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Outfit di Base",
			"game-outfitRoyalFortune": "Fortuna Reale",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Guscio di Cobalto",
			"game-outfitCarbonFiber": "Fibra di Carbonio",
			"game-outfitDarkGloves": "Il Professionista",
			"game-outfitGhillie": "Tuta Mimetica",
			"game-outfitCamo": "Foresta Mimetica",
			"game-outfitRed": "Bersaglio Facile",
			"game-outfitWhite": "Vendicatore Artico",
			"game-fists": "Pugno",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Granata",
			"game-hud-frag": "Granata",
			"game-smoke": "Granata Fumogena",
			"game-hud-smoke": "Fumogena",
			"game-barrel_01": "un barile",
			"game-silo_01": "un silo"
		};
		e.exports = i
	},
	R4DZ: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "th"
			},
			"word-order": "svo",
			"index-slogan": "ศึกรอยัลรอบที่ 2",
			"index-region": "ภูมิภาค",
			"index-north-america": "อเมริกาเหนือ",
			"index-europe": "ยุโรป",
			"index-asia": "เอเชีย",
			"index-players": "ผู้เล่น",
			"index-play-solo": "เล่นเดี่ยว",
			"index-play-duo": "เล่นคู่",
			"index-play-squad": "เล่นทีม",
			"index-create-team": "สร้างทีม",
			"index-how-to-play": "วิธีการเล่น",
			"index-leave-team": "ออกจากทีม",
			"index-joining-team": "กำลังเข้าร่วมทีม",
			"index-creating-team": "กำลังสร้างทีม",
			"index-invite-link": "ลิงก์เชิญ",
			"index-solo": "เดียว",
			"index-duo": "คู่",
			"index-squad": "ทีม",
			"index-auto-fill": "เติมอัตโนมัติ",
			"index-no-fill": "ไม่เติม",
			"index-waiting-for-leader": "กำลังรอให้ผู้นำเริ่มเกม",
			"index-play": "เล่น",
			"index-featured-youtuber": "YouTuber ที่มีชื่อเสียง",
			"index-settings": "ตั้งค่า",
			"index-high-resolution": "ความละเอียดสูง (ตรวจสอบเพื่อเพิ่มคุณภาพการมองเห็น)",
			"index-screen-shake": "สั่นหน้าจอ",
			"index-team-is-full": "ทีมเต็มแล้ว!",
			"index-failed-joining-team": "เข้าร่วมทีมล้มเหลว",
			"index-failed-creating-team": "สร้างทีมล้มเหลว",
			"index-failed-finding-game": "ค้นหาเกมล้มเหลว",
			"index-failed-joining-game": "เข้าร่วมทีมล้มเหลว",
			"index-lost-connection": "ขาดการเชื่อมต่อกับทีม",
			"index-host-closed": "เซิร์ฟเวอร์ปิดการเชื่อมต่อ",
			"index-view-more": "ดูเพิ่มเติม",
			"index-back-to-main": "กลับไปที่เมนูหลัก",
			"index-most-kills": "ฆ่ามากที่สุด",
			"index-total-kills": "ฆ่าทั้งหมด",
			"index-total-wins": "ชนะทั้งหมด",
			"index-top-5-percent": "5 เปอร์เซ็นต์แรก",
			"index-kill-death-ratio": "อัตราส่วนฆ่าตาย",
			"index-for": "For",
			"index-today": "วันนี้",
			"index-this-week": "อาทิตย์นี้",
			"index-all-time": "ตลอดเวลา",
			"index-top-100": "100 อันดับแรก",
			"index-rank": "อันดับ",
			"index-player": "ผู้เล่น",
			"index-total-games": "เกมทั้งหมด",
			"index-controls": "ควบคุม",
			"index-movement": "เคลื่อนไหว",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "เล็ง",
			"index-aim-ctrl": "เม้าส์",
			"index-punch": "ชกต่อย",
			"index-shoot": "ยิง",
			"index-shoot-ctrl": "คลิกซ้าย",
			"index-change-weapons": "เปลี่ยนอาวุธ",
			"index-change-weapons-ctrl": "1 ตลอด 4 หรือล้อเลื่อน",
			"index-stow-weapons": "เก็บรักษาอาวุธ (โหมดชกต่อย)",
			"index-stow-weapons-ctrl": "3 หรือ E",
			"index-swap-weapons": "สลับไปใช้อาวุธก่อนหน้า",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "โหลดใหม่",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "ขอบเขตการซูม",
			"index-scope-zoom-ctrl": "คลิกซ้ายเพื่อซูม",
			"index-pickup": "เก็บ",
			"index-loot": "ปล้น",
			"index-revive": "ฟื้น",
			"index-pickup-ctrl": "F",
			"index-use-medical": "ใช้ไอเทมรักษา",
			"index-use-medical-ctrl": "คลิกซ้ายที่ไอเทมหรือกด 7 ตลอด 0",
			"index-drop-item": "ทิ้งไอเทม",
			"index-drop-item-ctrl": "คลิกขวาที่ไอเทม",
			"index-cancel-action": "ยกเลิกการดำเนินการ",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "ดูแผนที่",
			"index-view-map-ctrl": "M หรือ G",
			"index-toggle-minimap": "สลับไปแผนที่เล็ก",
			"index-toggle-minimap-ctrl": "V",
			"game-alive": "มีชีวิต",
			"game-reloading": "กำลังโหลดใหม่",
			"game-using": "กำลังใช้",
			"game-reviving": "กำลังฟื้นฟู",
			"game-revive-teammate": "ฟื้น",
			"game-equip": "ติดตั้ง",
			"game-cancel": "ยกเลิก",
			"game-You": "คุณ",
			"game-you": "คุณ",
			"game-themselves": "พวกเขาเอง",
			"game-yourself": "ตัวคุณเอง",
			"game-you-died": "เสียชีวิต",
			"game-player-died": "เสียชีวิต",
			"game-with": "ด้วย",
			"game-knocked-out": "ล้ม",
			"game-killed": "ฆ่า",
			"game-finally-killed": "ฆ่าตายในที่สุด",
			"game-finally-bled-out": "เลือดออกในที่สุด",
			"game-died-outside": "ตายนอกเขตปลอดภัย",
			"game-the-red-zone": "เขตอันตราย",
			"game-waiting-for-players": "กำลังรอผู้เล่น",
			"game-spectating": "กำลังชม",
			"game-red-zone-advances": "เขตอันตรายเริ่มใน",
			"game-red-zone-advancing": "กำลังเริ่มเขตอันตราย โปรดเข้าไปในเขตปลอดภัย!",
			"game-seconds": "วินาที",
			"game-minutes": "นาที",
			"game-minute": "นาที",
			"game-m": "น.",
			"game-s": "ว.",
			"game-not-enough-space": "พื้นที่ไม่เพียงพอ!",
			"game-item-already-owned": "มีไอเทมแล้ว!",
			"game-item-already-equipped": "ติดตั้งไอเทมแล้ว!",
			"game-better-item-equipped": "ติดตั้งไอเทมที่ดีกว่าแล้ว!",
			"game-play-new-game": "เล่นเกมใหม่",
			"game-spectate": "ชม",
			"game-full-screen": "เต็มหน้าจอ",
			"game-sound": "เสียง",
			"game-quit-game": "ออกเกม",
			"game-return-to-game": "กลับไปที่เกม",
			"game-hide-match-stats": "ซ่อนสถิติการจับคู่",
			"game-view-match-stats": "ดูสถิติการจับคู่",
			"game-previous-teammate": "เพื่อนร่วมทีมก่อนหน้านี้",
			"game-next-teammate": "เพื่อนร่วมทีมต่อไป",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "ออกจากเกม",
			"game-your-results": "ผลลัพธ์ของคุณ",
			"game-chicken": "อาหารเย็นวันนี้คือไก่ทอด!",
			"game-won-the-game": "ชนะเกมแล้ว",
			"game-team-eliminated": "ทีมของคุณแพ้แล้ว",
			"game-rank": "อันดับ",
			"game-team-rank": "อันดับของทีม",
			"game-team-kills": "ทีมฆ่า",
			"game-kill": "ฆ่า",
			"game-kills": "ฆ่า",
			"game-damage-dealt": "จัดการความเสียหาย",
			"game-damage-taken": "ความเสียหายที่เกิดขึ้น",
			"game-survived": "รอดชีวิต",
			"game-backpack00": "กระเป๋า",
			"game-backpack01": "แพ็คเล็ก",
			"game-backpack02": "แพ็คทั่วไป",
			"game-backpack03": "แพ็คกองทัพ",
			"game-bandage": "ผ้าพันแผล",
			"game-bandage-tooltip": "คลิกซ้ายเพื่อฟื้นฟูสุขภาพ 15",
			"game-healing-tooltip": "ไม่สามารถรักษาสุขภาพได้ถึง 75",
			"game-healthkit": "ชุดเครื่องมือปฐมพยาบาล",
			"game-healthkit-tooltip": "คลิกซ้ายเพื่อฟื้นฟูสุขภาพ 100",
			"game-soda": "โซดา",
			"game-soda-tooltip": "คลิกซ้ายเพื่อเพิ่มอะดรีนาลีนภาย 25",
			"game-adrenaline-tooltip": "อะดรีนาลีนช่วยฟื้นฟูสุขภาพเมื่อเวลาผ่านไป",
			"game-painkiller": "ยาเม็ด",
			"game-painkiller-tooltip": "คลิกซ้ายเพื่อเพิ่มอะดรีนาลีนภาย 50",
			"game-9mm": "9 มม.",
			"game-9mm-tooltip": "กระสุนสำหรับ M9, Glock, MP5, MAC-10, UMP9 และ Vector",
			"game-12gauge": "12 เกจ์",
			"game-12gauge-tooltip": "กระสุนสำหรับ M870, Saiga-12 และ MP220",
			"game-762mm": "7.62 มม.",
			"game-762mm-tooltip": "กระสุนสำหรับ AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 และ DP-28",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "กระสุนสำหรับ FAMAS, HK416, Mk 12 และ M249.",
			"game-chest01": "เลเวล 1 เสื้อกั๊ก",
			"game-chest02": "เลเวล 2 เสื้อกั๊ก",
			"game-chest03": "เลเวล 3 เสื้อกั๊ก",
			"game-helmet01": "เลเวล 1 หมวกกันน็อก",
			"game-helmet02": "เลเวล 2 หมวกกันน็อก",
			"game-helmet03": "เลเวล 3 หมวกกันน็อก",
			"game-1xscope": "1x ขอตเขต",
			"game-2xscope": "2x ขอตเขต",
			"game-4xscope": "4x ขอตเขต",
			"game-8xscope": "8x ขอตเขต",
			"game-15xscope": "15x ขอตเขต",
			"game-level-1": "เลเวล 1",
			"game-level-2": "เลเวล 2",
			"game-level-3": "เลเวล 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	RCak: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-02-21",
				locale: "sv"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Region",
			"index-north-america": "Nordamerika",
			"index-europe": "Europa",
			"index-asia": "Asien",
			"index-players": "spelare",
			"index-play-solo": "Spela Solo",
			"index-play-duo": "Spela Dubbel",
			"index-play-squad": "Spela Trupp",
			"index-create-team": "Skapa Lag",
			"index-how-to-play": "Lär dig spela",
			"index-leave-team": "Lämna lag",
			"index-joining-team": "Går med i lag",
			"index-creating-team": "Skapar lag",
			"index-invite-link": "Inbjudningslänk",
			"index-solo": "Solo",
			"index-duo": "Dubbel",
			"index-squad": "Trupp",
			"index-auto-fill": "Autofyll",
			"index-no-fill": "Ingen fyllnad",
			"index-waiting-for-leader": "Väntar på att lagledaren ska starta matchen",
			"index-play": "Spela",
			"index-featured-youtuber": "Framhävd YouTuber",
			"index-settings": "Inställningar",
			"index-high-resolution": "Hög upplösning (bocka i för att höja visuell kvalitet)",
			"index-screen-shake": "Skärmskakningar",
			"index-mobile-announce": "Nu tillgänglig på mobilen!",
			"index-mobile-tooltip": "Besök <span>surviv.io</span> på mobilen för att spela på språng!",
			"index-team-is-full": "Laget är fullt!",
			"index-failed-joining-team": "Kunde inte gå med i laget.",
			"index-failed-creating-team": "Kunde inte skapa lag.",
			"index-failed-finding-game": "Kunde inte hitta match.",
			"index-failed-joining-game": "Kunde inte gå med i match.",
			"index-lost-connection": "Tappade anslutning till laget.",
			"index-host-closed": "Värden stängde anslutningen.",
			"index-view-more": "Visa mer",
			"index-back-to-main": "Tillbaka till huvudmenyn",
			"index-most-kills": "Mest dödade",
			"index-total-kills": "Totalt dödade",
			"index-total-wins": "Totala vinster",
			"index-top-5-percent": "Topp 5 procent",
			"index-kill-death-ratio": "Kill-death ratio",
			"index-for": "",
			"index-today": "idag",
			"index-this-week": "denna vecka",
			"index-all-time": "någonsin",
			"index-top-100": "Topp 100",
			"index-rank": "Rank",
			"index-player": "Spelare",
			"index-total-games": "Antal matcher",
			"index-controls": "Kontroller",
			"index-movement": "Förflyttning",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Sikta",
			"index-aim-ctrl": "Mus",
			"index-punch": "Slå",
			"index-shoot": "Skjut",
			"index-shoot-ctrl": "Vänsterklick",
			"index-change-weapons": "Byta vapen",
			"index-change-weapons-ctrl": "1 - 4 eller skrollhjulet",
			"index-stow-weapons": "Lägg undan vapen",
			"index-stow-weapons-ctrl": "3 eller E",
			"index-swap-weapons": "Byta tillbaka till föregående vapen",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Ladda om",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Sikteszoom",
			"index-scope-zoom-ctrl": "Vänsterklicka på zoomikonen",
			"index-pickup": "Ta upp",
			"index-loot": "Ta",
			"index-revive": "Återuppliva",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Använda medicinsk utrustning",
			"index-use-medical-ctrl": "Vänsterklicka på föremål eller 7 - 0",
			"index-drop-item": "Släpp föremål",
			"index-drop-item-ctrl": "Högerklicka på föremål",
			"index-cancel-action": "Avbryt aktion",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Visa mapp",
			"index-view-map-ctrl": "M eller G",
			"index-toggle-minimap": "Initiera HUD",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Använd lagets pinghjul",
			"index-use-ping-ctrl": "Håll C, håll sedan högerklick och dra musen, släpp sedan högerklick",
			"index-use-emote": "Använd känslohjul",
			"index-use-emote-ctrl": "Håll högerklick och dra musen, släpp sedan högerklick",
			"index-tips-1-desc": "Målet med surviv.io är att bli den sista spelaren kvar. Du lever bara en gång per match - det finns bara en chans!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": 'Om du någonsin spelat andra "Herre på Täppan"-spel som PUBG, Fortnite eller H1Z1 är du redan halvvägs där! Tänk dig surviv.io som 2D PUBG.',
			"index-tips-3": "Plundra och döda",
			"index-tips-3-desc": "Du börjar matchen utan några andra föremål än en simpel ryggsäck. Rör dig runt kartan för att hitta föremål: vapen, ammunition, sikten och medicinska föremål. Eliminera andra spelare och ta deras föremål!",
			"index-tips-4": "Rött = Dåligt!",
			"index-tips-4-desc": "Spelare är inte det enda som kan skada dig. Den dödliga röda zonen kommer röra sig inåt från kartans sidor och dela ut ökande skada om du står i den. Håll ett öga på kartan och håll dig trygg.",
			"game-alive": "kvar",
			"game-reloading": "Laddar om",
			"game-using": "Använder",
			"game-reviving": "Återupplivar",
			"game-revive-teammate": "Återuppliva lagkamrat",
			"game-equip": "Ta upp",
			"game-cancel": "Avbryt",
			"game-You": "Du",
			"game-you": "du",
			"game-themselves": "sig själv",
			"game-yourself": "dig själv",
			"game-you-died": "dog",
			"game-player-died": "dog",
			"game-with": "med",
			"game-knocked-out": "knocked out",
			"game-killed": "dödade",
			"game-finally-killed": "dödade till slut",
			"game-finally-bled-out": "blödde ut till slut",
			"game-died-outside": "dog utanför den trygga zonen",
			"game-the-red-zone": "Den röda zonen",
			"game-waiting-for-players": "Väntar på spelare",
			"game-spectating": "Åskådar",
			"game-red-zone-advances": "Den röda zonen advancerar om",
			"game-red-zone-advancing": "Den röda zonen advancerar, ta dig till den säkra zonen!",
			"game-seconds": "sekunder",
			"game-minutes": "minuter",
			"game-minute": "minuter",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Inte tillräckligt utrymme!",
			"game-item-already-owned": "Du har redan föremålet!",
			"game-item-already-equipped": "Du är redan uttrustad med föremålet!",
			"game-better-item-equipped": "Du har redan ett bättre föremål!",
			"game-play-new-game": "Spela ny match",
			"game-spectate": "Åskåda",
			"game-full-screen": "Fullskärm",
			"game-sound": "Ljud",
			"game-quit-game": "Avsluta spel",
			"game-return-to-game": "Återvänd till spel",
			"game-hide-match-stats": "Dölj matchstatistik",
			"game-view-match-stats": "Visa matchstatistik",
			"game-previous-teammate": "Föregående lagkamrat",
			"game-next-teammate": "Nästa lagkamrat",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Lämna match",
			"game-your-results": "Dina resultat",
			"game-chicken": "Vinst! Ikväll blir det kycklingmiddag!",
			"game-won-the-game": "vann matchen.",
			"game-team-eliminated": "Ditt lag blev eliminerat.",
			"game-rank": "Rank",
			"game-team-rank": "Lagrank",
			"game-team-kills": "Lagets antal dödade",
			"game-kill": "Dödad",
			"game-kills": "Dödade",
			"game-damage-dealt": "Skada utdelad",
			"game-damage-taken": "Skada mottagen",
			"game-survived": "Överlevde",
			"game-backpack00": "Påse",
			"game-backpack01": "Liten ryggsäck",
			"game-backpack02": "Vanlig ryggsäck.",
			"game-backpack03": "Militärryggsäck",
			"game-bandage": "Bandage",
			"game-bandage-tooltip": "Vänsterklicka för att återfå 15 hälsa.",
			"game-healing-tooltip": "Kan inte återge över 75% liv.",
			"game-healthkit": "Med Kit",
			"game-healthkit-tooltip": "Vänsterklicka för att återfå 100 hälsa.",
			"game-soda": "Läsk",
			"game-soda-tooltip": "Vänsterklicka för att boosta adrenalin med 25.",
			"game-adrenaline-tooltip": "Adrenalin återger liv över tid.",
			"game-painkiller": "Piller",
			"game-painkiller-tooltip": "Vänsterklicka för att boosta adrenalin med 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Ammo för M9, Glock, MP5, MAC-10, UMP9 och Vector.",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "Ammo för M870, Saiga-12 och MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Ammo för AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 och DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Ammo för FAMAS, HK416, Mk 12 och M249.",
			"game-chest01": "Level 1 Väst",
			"game-chest02": "Level 2 Väst",
			"game-chest03": "Level 3 Väst",
			"game-helmet01": "Level 1 Hjälm",
			"game-helmet02": "Level 2 Hjälm",
			"game-helmet03": "Level 3 Hjälm",
			"game-1xscope": "1x Sikte",
			"game-2xscope": "2x Sikte",
			"game-4xscope": "4x Sikte",
			"game-8xscope": "8x Sikte",
			"game-15xscope": "15x Sikte",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Vanligt Outfit",
			"game-outfitRoyalFortune": "Kunlig Lycka",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Koboltskal",
			"game-outfitCarbonFiber": "Kolfiber",
			"game-outfitDarkGloves": "Proffset",
			"game-outfitGhillie": "Ghilliedräkt",
			"game-outfitCamo": "Skogskamouflage",
			"game-outfitRed": "Måltavla",
			"game-outfitWhite": "Arktisk Hämnare",
			"game-outfitWoodland": "Woodland Combat",
			"game-fists": "Slag",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Handgranat",
			"game-hud-frag": "Handgranat",
			"game-smoke": "Rökgranat",
			"game-hud-smoke": "Rökgranat",
			"game-barrel_01": "en tunna",
			"game-silo_01": "en silo"
		};
		e.exports = i
	},
	S1KI: function(e, t, a) {
		"use strict";

		function i(e) {
			this.mute = !1, this.masterVolume = 1, this.soundVolume = 1, this.musicVolume = 1, this.baseVolume = .5, this.audioChannels = s.Channels, this.reverbs = s.Reverbs, this.totalSounds = 0, this.totalSoundsLoaded = 0, this.loadComplete = !1, this.cameraPos = n.create(0, 0), this.activeLayer = 0, this.fadeInSounds = [], this.queuedSounds = [], this.queuedInstances = [], this.localActionSoundInstance = null, this.soundInstances = [], this.musicInstances = [], o.Sound.initializeDefaultPlugins(), o.Sound.defaultInterruptBehavior = o.Sound.INTERRUPT_LATE, o.Sound.volume = .5, o.Sound.on("fileload", this.loadHandler, this)
		}
		var o = a("9MzZ"),
			n = a("/2+T"),
			r = a("0od3"),
			s = a("lGyJ"),
			l = a("Tf6H");
		i.prototype = {
			preloadSounds: function() {
				for (var e in this.audioChannels)
					if (this.audioChannels.hasOwnProperty(e)) {
						var t = this.audioChannels[e],
							a = this.loadSounds(t.list);
						for (var i in a) a.hasOwnProperty(i) && a[i] && (this.totalSounds += 1)
					}
				for (var n in this.reverbs) this.reverbs.hasOwnProperty(n) && this.reverbs[n] && (this.totalSounds += 1);
				for (var r in this.audioChannels)
					if (this.audioChannels.hasOwnProperty(r)) {
						var s = this.audioChannels[r],
							l = this.loadSounds(s.list);
						for (var c in l)
							if (l.hasOwnProperty(c) && l[c]) {
								var m = l[c],
									d = {};
								d.canCoalesce = m.canCoalesce, d.channels = m.maxInstances, o.Sound.registerSound(m.name, c + r, d)
							}
					}
				for (var p in this.reverbs)
					if (this.reverbs.hasOwnProperty(p) && this.reverbs[p]) {
						var u = this.reverbs[p];
						o.Sound.registerReverb(u.name, p, u)
					}
			},
			loadHandler: function(e) {
				this.totalSoundsLoaded += 1, this.totalSoundsLoaded == this.totalSounds && (this.loadComplete = !0)
			},
			update: function(e) {
				if (this.loadComplete) {
					for (var t = 0; t < this.queuedSounds.length; t++) {
						var a = this.queuedSounds[t],
							i = this.playSound(a.sound, a.options);
						this.queuedInstances.push(i)
					}
					this.queuedSounds = []
				}
				for (var n = this.fadeInSounds.length - 1; n >= 0; n--) {
					var r = this.fadeInSounds[n].instance;
					if (r) {
						var s = 1 * this.getTypeVolume(this.fadeInSounds[n].type);
						r.volume = Math.min(s, r.volume + e), r.volume == s && this.fadeInSounds.splice(n, 1)
					}
				}
				for (var l = this.soundInstances.length - 1; l >= 0; l--) {
					var c = this.soundInstances[l];
					"playFinished" != c.playState && "playInterrupted" != c.playState && "playFailed" != c.playState || this.soundInstances.splice(l, 1)
				}
				for (var m = this.musicInstances.length - 1; m >= 0; m--) {
					var d = this.musicInstances[m];
					"playFinished" != d.playState && "playInterrupted" != d.playState && "playFailed" != d.playState || this.musicInstances.splice(m, 1)
				}
				var p = [0, 1, 1 / 3, 2 / 3],
					u = p[this.activeLayer];
				o.Sound.setReverbs({
					cathedral: u
				}), o.Sound.update(e)
			},
			queueSound: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return this.queuedSounds.push({
					sound: e,
					options: t
				}), this.queuedSounds.length - 1
			},
			getQueuedInstance: function(e) {
				return this.queuedInstances[e]
			},
			playSound: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if ("none" == e) return !1;
				t.channel = t.channel || "activePlayer", t.fadeIn = t.fadeIn || !1, t.startSilent = t.startSilent || !1, t.forceStart = t.forceStart || !1, t.loop = t.loop || !1, t.soundPos = t.soundPos || !1, t.fallOff = t.fallOff || 0, t.muffled = t.muffled || !1, t.delay = t.delay || 0, t.ignoreMinAllowable = t.ignoreMinAllowable || !1;
				var a = this.audioChannels[t.channel];
				if (a && (!this.mute || t.forceStart)) {
					var i = !1,
						s = 1 * this.baseVolume * this.getTypeVolume(a.type),
						c = void 0 !== t.layer && !l.sameAudioLayer(t.layer, this.activeLayer),
						m = t.muffled ? c ? "muffled" : "reverb" : "none";
					if ("activePlayer" != t.channel && t.soundPos) {
						var d = n.sub(this.cameraPos, t.soundPos),
							p = n.length(d),
							u = r.clamp(Math.abs(p / a.maxRange), 0, 1),
							h = Math.pow(1 - u, 1 + 2 * t.fallOff),
							g = a.volume * h * s;
						if ((g = c ? .5 * g : g) > .003 || t.ignoreMinAllowable) {
							var f = r.clamp(d.x / a.maxRange * -1, -1, 1);
							i = o.Sound.play(e + t.channel, {
								filter: m,
								loop: t.loop ? -1 : 0,
								volume: t.fadeIn || t.startSilent ? 0 : g,
								pan: f,
								delay: t.delay,
								interrupt: o.Sound.INTERRUPT_LATE
							})
						}
					} else {
						var y = a.volume * s;
						y = c ? .5 * y : y, i = o.Sound.play(e + t.channel, {
							filter: m,
							loop: t.loop ? -1 : 0,
							volume: t.fadeIn || t.startSilent ? 0 : y,
							delay: t.delay
						})
					}
					if (i) return t.fadeIn && this.fadeInSounds.push({
						instance: i,
						type: a.type
					}), t.loop && "music" != t.channel ? this.soundInstances.push(i) : "music" == t.channel && this.musicInstances.push(i), i
				}
				return !1
			},
			playGroup: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					a = s.Groups[e];
				if (a) {
					var i = a.sounds,
						o = Math.floor(l.random(0, i.length));
					t.channel = a.channel;
					return this.playSound(i[o], t)
				}
			},
			updateSound: function(e, t, a) {
				var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				i.fallOff = i.fallOff || 0;
				var o = this.audioChannels[t];
				if (e && o) {
					var s = 1 * this.baseVolume * this.getTypeVolume(o.type),
						c = n.sub(this.cameraPos, a),
						m = n.length(c),
						d = r.clamp(Math.abs(m / o.maxRange), 0, 1),
						p = Math.pow(1 - d, 1 + 2 * i.fallOff),
						u = o.volume * p * s;
					if ((u = void 0 !== i.layer && !l.sameAudioLayer(i.layer, this.activeLayer) ? .5 * u : u) > .003) {
						var h = r.clamp(c.x / o.maxRange * -1, -1, 1);
						return e.volume = u, e.pan = h, e
					}
					return !1
				}
			},
			setMasterVolume: function(e) {
				e = r.clamp(e, 0, 1), o.Sound.volume = e
			},
			setSoundVolume: function(e) {
				e = r.clamp(e, 0, 1);
				for (var t = this.soundVolume > 0 ? e / this.soundVolume : 0, a = 0; a < this.soundInstances.length; a++) {
					this.soundInstances[a].volume *= t
				}
				this.soundVolume = e
			},
			setMusicVolume: function(e) {
				e = r.clamp(e, 0, 1);
				for (var t = this.musicVolume > 0 ? e / this.musicVolume : 0, a = 0; a < this.musicInstances.length; a++) {
					this.musicInstances[a].volume *= t
				}
				this.musicVolume = e
			},
			setVolume: function(e, t, a) {
				if (!e) return !1;
				a = a || "sound";
				var i = this.getTypeVolume(a);
				e.volume = t * i
			},
			setMute: function(e) {
				return this.mute = e, o.Sound._setMute(this.mute), this.mute
			},
			setDelay: function(e, t) {
				if (!e) return !1;
				e.delay = t
			},
			muteToggle: function() {
				return this.mute = !this.mute, o.Sound._setMute(this.mute), this.mute
			},
			stopSound: function(e) {
				return !!e && e.stop()
			},
			stopLocalActionSound: function() {
				return !!this.localActionSoundInstance && (this.localActionSoundInstance.playState == o.Sound.PLAY_SUCCEEDED ? this.localActionSoundInstance.stop() : void 0)
			},
			stopAll: function() {
				o.Sound.stop()
			},
			registerSound: function(e) {
				for (var t in this.audioChannels)
					if (this.audioChannels.hasOwnProperty(t)) {
						var a = this.audioChannels[t],
							i = this.loadSounds(a.list);
						for (var n in i)
							if (i.hasOwnProperty(n) && n == e) {
								var r = i[n];
								o.Sound.registerSound(r.name, n + t)
							}
					}
			},
			loadSounds: function(e) {
				return s.Sounds[e]
			},
			isSoundPlaying: function(e) {
				return !!e && e.playState == o.Sound.PLAY_SUCCEEDED
			},
			getTypeVolume: function(e) {
				switch (e) {
					case "sound":
						return this.soundVolume;
					case "music":
						return this.musicVolume
				}
				return 0
			}
		}, e.exports = i
	},
	S40U: function(e, t, a) {
		"use strict";

		function i() {
			this.id = 0, this.pos = {
				x: 0,
				y: 0
			}, this.posOld = {
				x: 0,
				y: 0
			}, this.posDown = {
				x: 0,
				y: 0
			}, this.startTime = 0, this.lastUpdateTime = 0, this.isNew = !0, this.isDead = !1, this.osId = 0
		}

		function o(e) {
			var t = this;
			this.keys = {}, this.keysOld = {}, this.shiftKey = !1, this.mousePos = {
				x: 0,
				y: 0
			}, this.mousePosOld = {
				x: 0,
				y: 0
			}, this.mouseButton = !1, this.mouseButtonOld = !1, this.rightMouseButton = !1, this.rightMouseButtonOld = !1, this.mouseWheelState = 0, this.touches = [], this.touchIdCounter = 0, this.leftTouch = null, this.rightTouch = null, this.elem = e, this.bOnWindowFocus = function(e) {
				t.onWindowFocus(e)
			}, this.bOnKeyDown = function(e) {
				t.onKeyDown(e)
			}, this.bOnKeyUp = function(e) {
				t.onKeyUp(e)
			}, this.bOnMouseMove = function(e) {
				t.onMouseMove(e)
			}, this.bOnMouseDown = function(e) {
				t.onMouseDown(e)
			}, this.bOnMouseUp = function(e) {
				t.onMouseUp(e)
			}, this.bOnMouseWheel = function(e) {
				t.onMouseWheel(e)
			}, this.bOnTouchMove = function(e) {
				t.onTouchMove(e)
			}, this.bOnTouchStart = function(e) {
				t.onTouchStart(e)
			}, this.bOnTouchEnd = function(e) {
				t.onTouchEnd(e)
			}, this.bOnTouchCancel = function(e) {
				t.onTouchCancel(e)
			}, window.addEventListener("focus", this.bOnWindowFocus, !1), window.addEventListener("keydown", this.bOnKeyDown, !1), window.addEventListener("keyup", this.bOnKeyUp, !1), window.addEventListener("mousemove", this.bOnMouseMove, !1), window.addEventListener("mousedown", this.bOnMouseDown, !1), window.addEventListener("mouseup", this.bOnMouseUp, !1), window.addEventListener("wheel", this.bOnMouseWheel, {
				capture: !1,
				passive: !0
			}), this.elem.addEventListener("touchmove", this.bOnTouchMove, !1), this.elem.addEventListener("touchstart", this.bOnTouchStart, !1), this.elem.addEventListener("touchend", this.bOnTouchEnd, !1), this.elem.addEventListener("touchcancel", this.bOnTouchCancel, !1)
		}
		var n = (a("/2+T"), Object.freeze({
				Enter: 13,
				Escape: 27,
				Space: 32,
				Left: 37,
				Up: 38,
				Right: 39,
				Down: 40,
				A: 65,
				D: 68,
				S: 83,
				W: 87,
				R: 82,
				F: 70,
				X: 88,
				M: 77,
				G: 71,
				Q: 81,
				E: 69,
				P: 80,
				V: 86,
				L: 76,
				One: 49,
				Two: 50,
				Three: 51,
				Four: 52,
				Five: 53,
				Six: 54,
				Seven: 55,
				Eight: 56,
				Nine: 57,
				Zero: 48,
				Plus: 187,
				Minus: 189,
				FwdSlash: 191,
				Tilde: 192,
				C: 16,
				LeftShift: 67
			})),
			r = Object.freeze({
				Move: 0,
				Start: 1,
				End: 2,
				Cancel: 3
			});
		o.prototype = {
			free: function() {
				window.removeEventListener("focus", this.bOnWindowFocus), window.removeEventListener("keydown", this.bOnKeyDown), window.removeEventListener("keyup", this.bOnKeyUp), window.removeEventListener("mousemove", this.bOnMouseMove), window.removeEventListener("mousedown", this.bOnMouseDown), window.removeEventListener("mouseup", this.bOnMouseUp), window.removeEventListener("wheel", this.bOnMouseWheel), this.elem.removeEventListener("touchmove", this.bOnTouchMove), this.elem.removeEventListener("touchstart", this.bOnTouchStart), this.elem.removeEventListener("touchend", this.bOnTouchEnd), this.elem.removeEventListener("touchcancel", this.bOnTouchCancel)
			},
			onWindowFocus: function() {
				this.keys = {}, this.keysOld = {}, this.mouseButton = !1, this.shiftKey = !1, this.touches.length = 0
			},
			flush: function() {
				this.keysOld = Object.assign({}, this.keys), this.mouseButtonOld = this.mouseButton, this.rightMouseButtonOld = this.rightMouseButton, this.mouseWheelState = 0, this.shiftKey = !1;
				for (var e = 0; e < this.touches.length; e++) this.touches[e].posOld.x = this.touches[e].pos.x, this.touches[e].posOld.y = this.touches[e].pos.y, this.touches[e].isNew = !1, this.touches[e].isDead && (this.touches.splice(e, 1), --e)
			},
			onKeyDown: function(e) {
				this.keys[e.keyCode] = !0, this.shiftKey |= e.shiftKey
			},
			onKeyUp: function(e) {
				delete this.keys[e.keyCode]
			},
			keyDown: function(e) {
				return void 0 !== this.keys[e]
			},
			keyPressed: function(e) {
				return void 0 === this.keysOld[e] && this.keyDown(e)
			},
			keyReleased: function(e) {
				return this.keysOld[e] && !this.keyDown(e)
			},
			onMouseMove: function(e) {
				this.mousePosOld = Object.assign({}, this.mousePos), this.mousePos.x = e.clientX, this.mousePos.y = e.clientY
			},
			onMouseDown: function(e) {
				this.mouseButton = this.mouseButton || 0 === e.button, this.rightMouseButton = this.rightMouseButton || 2 === e.button
			},
			onMouseUp: function(e) {
				this.mouseButton = 0 !== e.button && this.mouseButton, this.rightMouseButton = 2 !== e.button && this.rightMouseButton
			},
			onMouseWheel: function(e) {
				this.mouseWheelState = e.deltaY < 0 ? -1 : 1
			},
			mouseDown: function() {
				return this.mouseButton
			},
			mousePressed: function() {
				return !this.mouseButtonOld && this.mouseButton
			},
			mouseReleased: function() {
				return this.mouseButtonOld && !this.mouseButton
			},
			rightMousePressed: function() {
				return !this.rightMouseButtonOld && this.rightMouseButton
			},
			mouseWheel: function() {
				return this.mouseWheelState
			},
			resetMouseWheel: function() {
				this.mouseWheelState = 0
			},
			onTouchShared: function(e, t) {
				t != r.Cancel && e.preventDefault();
				for (var a = e.timeStamp || performance.now(), o = 0; o < e.changedTouches.length; o++) {
					for (var n = e.changedTouches[o], s = n.identifier, l = n.clientX, c = n.clientY, m = null, d = 0; d < this.touches.length; d++)
						if (this.touches[d].osId == s && !this.touches[d].isDead) {
							m = this.touches[d];
							break
						}
					t != r.Start || m || (m = new i, this.touches.push(m), ++this.touchIdCounter, m.id = this.touchIdCounter, m.osId = s, m.posOld.x = l, m.posOld.y = c, m.posDown.x = l, m.posDown.y = c, m.startTime = a, m.isNew = !0, m.isDead = !1), t != r.End && t != r.Cancel || !m || (m.isDead = !0), m && (m.pos.x = l, m.pos.y = c, m.lastUpdateTime = a)
				}
			},
			onTouchMove: function(e) {
				this.onTouchShared(e, r.Move)
			},
			onTouchStart: function(e) {
				this.onTouchShared(e, r.Start)
			},
			onTouchEnd: function(e) {
				this.onTouchShared(e, r.End)
			},
			onTouchCancel: function(e) {
				this.onTouchShared(e, r.Cancel)
			},
			getTouchById: function(e) {
				for (var t = 0; t < this.touches.length; t++)
					if (this.touches[t].id == e) return this.touches[t];
				return null
			}
		}, e.exports = {
			InputHandler: o,
			Key: n,
			Touch: i
		}
	},
	SEs0: function(e, t, a) {
		"use strict";

		function i(e) {
			d.push(e)
		}

		function o(e, t) {
			l(".modal").fadeOut(200), l("#start-bottom-right").fadeIn(200), l("#start-top-left").fadeIn(200), l("#start-top-right").fadeIn(200);
			for (var a = 0; a < d.length; a++) d[a](e, t)
		}

		function n(e) {
			l(e.target).closest(".modal-content").length || (l(".modal").each(function() {
				"block" == l(this).css("display") && o(e, l(this))
			}), l(document).off("click touchend", n))
		}

		function r() {
			l(document).on("click touchend", n)
		}

		function s() {
			l(document).off("click touchend", n)
		}
		var l = a("juYr"),
			c = a("zinx"),
			m = a("Jr6A");
		l(document).ready(function() {
			var e = l("#start-menu");
			l("#btn-help").click(function() {
				var t = l("#start-help");
				e.addClass("display-help");
				var a = (t.position().top, e.css("height"));
				return t.css("display", "block"), e.animate({
					scrollTop: a
				}, 1e3), !1
			});
			var t = l("#team-mobile-link"),
				a = l("#team-mobile-link-desc"),
				i = l("#team-mobile-link-warning"),
				n = l("#team-link-input"),
				s = l("#social-share-block"),
				d = l("#news-block");
			l("#btn-join-team").click(function() {
				return n.val(""), t.css("display", "block"), a.css("display", "block"), i.css("display", "none"), e.css("display", "none"), d.css("display", "none"), s.css("display", "none"), !1
			}), l("#btn-team-mobile-link-leave").click(function() {
				return t.css("display", "none"), n.val(""), e.css("display", "block"), d.css("display", "block"), s.css("display", "block"), !1
			}), l("#team-link-input").on("keypress", function(e) {
				13 === (e.which || e.keyCode) && (l("#btn-team-mobile-link-join").trigger("click"), l(this).blur())
			}), l("#player-name-input-solo").on("keypress", function(e) {
				13 === (e.which || e.keyCode) && l(this).blur()
			}), c.mobile && !m.detectMobileSafari() && (l("#player-name-input-solo").on("focus", function() {
				if (m.isLandscape()) {
					var e = m.getScreenDimensions().height,
						t = e <= 282 ? 18 : 36;
					document.body.scrollTop = l(this).offset().top - t
				}
			}), l("#player-name-input-solo").on("blur", function() {
				document.body.scrollTop = 0
			}));
			var p = l(".modal"),
				u = (l(".modal-content"), l("#start-bottom-right")),
				h = l("#start-top-left"),
				g = l("#start-top-right"),
				f = l("#modal-settings");
			l(".btn-settings").click(function() {
				return f.finish(), f.css("display", "block"), u.fadeOut(200), g.fadeOut(200), r(), !1
			});
			var y = l("#modal-hamburger");
			l("#btn-hamburger").click(function() {
				return y.finish(), y.css("display", "block"), h.fadeOut(200), r(), !1
			}), l(".account-details-guest, .account-details-user").click(function() {
				if (c.mobile) {
					var e = l("#modal-mobile-account");
					return e.finish(), e.css("display", "block"), l("#start-top-right").fadeOut(200), r(), !1
				}
			}), p.find(".close").click(function(e) {
				o(e, l(this))
			}), l(".modal-settings-text").click(function() {
				var e = l(this).siblings("input:checkbox");
				e.prop("checked", !e.is(":checked")), e.trigger("change")
			}), l("#force-refresh").click(function() {
				window.location.reload(!0)
			})
		});
		var d = [];
		e.exports = {
			addModalCloseListener: r,
			addModalCloseCallback: i,
			removeModalCloseListener: s
		}
	},
	Tf6H: function(e, t, a) {
		"use strict";
		var i = a("0od3"),
			o = a("/2+T"),
			n = {
				sameLayer: function(e, t) {
					return (1 & e) == (1 & t) || 2 & e && 2 & t
				},
				sameAudioLayer: function(e, t) {
					return e == t || 2 & e || 2 & t
				},
				toGroundLayer: function(e) {
					return 1 & e
				},
				toStairsLayer: function(e) {
					return 2 | e
				},
				random: function(e, t) {
					return i.lerp(Math.random(), e, t)
				},
				randomInt: function(e, t) {
					return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
				},
				randomPointInCircle: function(e) {
					var t = Math.random(),
						a = Math.random();
					if (a < t) {
						var i = t;
						t = a, a = i
					}
					return o.create(a * e * Math.cos(2 * Math.PI * t / a), a * e * Math.sin(2 * Math.PI * t / a))
				},
				hsv2rgb: function(e, t, a) {
					var i, o, n, r, s, l, c, m;
					switch (1 === arguments.length && (t = e.s, a = e.v, e = e.h), r = Math.floor(6 * e), s = 6 * e - r, l = a * (1 - t), c = a * (1 - s * t), m = a * (1 - (1 - s) * t), r % 6) {
						case 0:
							i = a, o = m, n = l;
							break;
						case 1:
							i = c, o = a, n = l;
							break;
						case 2:
							i = l, o = a, n = m;
							break;
						case 3:
							i = l, o = c, n = a;
							break;
						case 4:
							i = m, o = l, n = a;
							break;
						case 5:
							i = a, o = l, n = c
					}
					return {
						r: Math.round(255 * i),
						g: Math.round(255 * o),
						b: Math.round(255 * n)
					}
				},
				rgb2hex: function(e) {
					return (e.r << 16) + (e.g << 8) + e.b
				},
				hexToRgb: function(e) {
					var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
					return t ? {
						r: parseInt(t[1], 16),
						g: parseInt(t[2], 16),
						b: parseInt(t[3], 16)
					} : null
				},
				componentToHex: function(e) {
					var t = e.toString(16);
					return 1 == t.length ? "0" + t : t
				},
				colorToDOMString: function(e, t) {
					return "rgba(" + (e >> 16 & 255) + ", " + (e >> 8 & 255) + ", " + (255 & e) + ", " + t + ")"
				},
				updateColor: function(e, t) {
					e /= 100;
					var a = this.hexToRgb(t);
					a.r, a.g, a.b;
					return a.r = Math.round(a.r * e + 0 * (1 - e)), a.g = Math.round(a.g * e + 0 * (1 - e)), a.b = Math.round(a.b * e + 0 * (1 - e)), this.rgb2hex(a)
				}
			};
		e.exports = n
	},
	UWg4: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "zh-cn"
			},
			"word-order": "sov",
			"index-slogan": "2d混战",
			"index-region": "地区",
			"index-north-america": "北美",
			"index-europe": "欧洲",
			"index-asia": "亚洲",
			"index-players": "玩家",
			"index-play-solo": "玩单挑",
			"index-play-duo": "玩双人联队",
			"index-play-squad": "玩四人联队",
			"index-create-team": "创建联队",
			"index-how-to-play": "如何玩",
			"index-leave-team": "离开联队",
			"index-joining-team": "加入联队",
			"index-creating-team": "建立联队中",
			"index-invite-link": "邀请链接",
			"index-solo": "单人",
			"index-duo": "双人联队",
			"index-squad": "四人联队",
			"index-auto-fill": "自动填充",
			"index-no-fill": "不填充",
			"index-waiting-for-leader": "等待领队开始游戏。",
			"index-play": "开始",
			"index-featured-youtuber": "精选Youtube博主",
			"index-settings": "设置",
			"index-high-resolution": "高分辨率(提高视觉质量)",
			"index-screen-shake": "屏幕抖动",
			"index-team-is-full": "联队已满!",
			"index-failed-joining-team": "加入联队失败。",
			"index-failed-creating-team": "创建联队失败。",
			"index-failed-finding-game": "查找联队失败。",
			"index-failed-joining-game": "加入游戏失败。",
			"index-lost-connection": "联队连接丢失。",
			"index-host-closed": "团队主持人失去连接。",
			"index-view-more": "查看更多",
			"index-back-to-main": "回到主界面",
			"index-most-kills": "杀敌最多",
			"index-total-kills": "总杀敌",
			"index-total-wins": "总赢数",
			"index-top-5-percent": "前5%",
			"index-kill-death-ratio": "杀敌和生还比例",
			"index-for": "For",
			"index-today": "今日",
			"index-this-week": "本周",
			"index-all-time": "所有时间",
			"index-top-100": "前一百",
			"index-rank": "排名",
			"index-player": "玩家",
			"index-total-games": "总游戏数",
			"index-controls": "控制",
			"index-movement": "动作",
			"index-movement-ctrl": "W, A, S, D键",
			"index-aim": "瞄准",
			"index-aim-ctrl": "鼠标",
			"index-punch": "拳",
			"index-shoot": "射击",
			"index-shoot-ctrl": "左击",
			"index-change-weapons": "更换武器",
			"index-change-weapons-ctrl": "1-4或滚轮。",
			"index-stow-weapons": "收起武器(拳击模式)",
			"index-stow-weapons-ctrl": "3或E键",
			"index-swap-weapons": "换到之前的武器",
			"index-swap-weapons-ctrl": "Q键",
			"index-reload": "重装",
			"index-reload-ctrl": "R键",
			"index-scope-zoom": "变焦范围",
			"index-scope-zoom-ctrl": "左键单击放大",
			"index-pickup": "拾起",
			"index-loot": "掠夺",
			"index-revive": "复活",
			"index-pickup-ctrl": "F键",
			"index-use-medical": "使用医疗物品",
			"index-use-medical-ctrl": "左键单击物品或7-0",
			"index-drop-item": "丢弃物品",
			"index-drop-item-ctrl": "右键单击物品",
			"index-cancel-action": "取消动作",
			"index-cancel-action-ctrl": "X键",
			"index-view-map": "查看地图",
			"index-view-map-ctrl": "M或G键",
			"index-toggle-minimap": "切换小地图",
			"index-toggle-minimap-ctrl": "V键",
			"index-use-ping": "使用联队平轮",
			"index-use-ping-ctrl": "按住C键，同时按住右键然后移动鼠标，接着松开右键",
			"index-use-emote": "使用表情轮",
			"index-use-emote-ctrl": "按住右键然后移动鼠标，接着松开右键",
			"game-alive": "存活玩家",
			"game-reloading": "装弹",
			"game-using": "使用",
			"game-reviving": "复活中",
			"game-revive-teammate": "复活队友",
			"game-equip": "装备",
			"game-cancel": "撤销",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "等待其他玩家",
			"game-spectating": "观看中",
			"game-red-zone-advances": "红色区域扩大于",
			"game-red-zone-advancing": "红色区域扩大中，快到安全区域去!",
			"game-seconds": "秒",
			"game-minutes": "分",
			"game-minute": "分",
			"game-m": "分",
			"game-s": "秒",
			"game-not-enough-space": "空间不足!",
			"game-item-already-owned": "物品已拥有!",
			"game-item-already-equipped": "物品已装备!",
			"game-better-item-equipped": "已装备更好物品!",
			"game-play-new-game": "开始新游戏",
			"game-spectate": "观看",
			"game-full-screen": "全屏",
			"game-sound": "声音",
			"game-quit-game": "离开游戏",
			"game-return-to-game": "返回游戏",
			"game-hide-match-stats": "隐藏比赛数据",
			"game-view-match-stats": "查看比赛数据",
			"game-previous-teammate": "上个队友",
			"game-next-teammate": "下个队友",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "离开游戏",
			"game-your-results": "你的战绩",
			"game-chicken": "大吉大利，今晚吃鸡！",
			"game-won-the-game": "游戏赢了。",
			"game-team-eliminated": "你的队伍被击败了。",
			"game-rank": "排名",
			"game-team-rank": "联队排名",
			"game-team-kills": "联队杀敌数",
			"game-kill": "杀",
			"game-kills": "杀",
			"game-damage-dealt": "伤害输出",
			"game-damage-taken": "受到伤害",
			"game-survived": "生还",
			"game-backpack00": "袋子",
			"game-backpack01": "小包",
			"game-backpack02": "常规包",
			"game-backpack03": "军用包",
			"game-bandage": "绷带",
			"game-bandage-tooltip": "左键点击回复15点生命值。",
			"game-healing-tooltip": "无法治疗75点以上的生命值。",
			"game-healthkit": "医药包",
			"game-healthkit-tooltip": "左键点击恢复100点生命值。",
			"game-soda": "汽水",
			"game-soda-tooltip": "左键点击可以增加25点的肾上腺素。",
			"game-adrenaline-tooltip": "肾上腺素会随着时间的推移恢复血量值。",
			"game-painkiller": "药片",
			"game-painkiller-tooltip": "左键点击可以增加50点的肾上腺素。",
			"game-9mm": "9毫米",
			"game-9mm-tooltip": "给M9,MP5,格洛克18C,Mac-10, Vector 和 UMP9的弹药。",
			"game-12gauge": "12口径",
			"game-12gauge-tooltip": "给M870, Saiga-12 和 MP220的弹药。",
			"game-762mm": "7.62毫米",
			"game-762mm-tooltip": "给AK-47, SCAR-H, M39, 莫辛-纳甘步枪, M39 EMR， OT-38 和 DP-28的弹药。",
			"game-556mm": "5.56毫米",
			"game-556mm-tooltip": "给FAMAS, HK416, Mk 12 和 M249弹药。",
			"game-chest01": "一级防弹衣",
			"game-chest02": "二级防弹衣",
			"game-chest03": "三级防弹衣",
			"game-helmet01": "一级头盔",
			"game-helmet02": "二级头盔",
			"game-helmet03": "三级头盔",
			"game-1xscope": "1x 瞄准镜",
			"game-2xscope": "2x 瞄准镜",
			"game-4xscope": "4x 瞄准镜",
			"game-8xscope": "8x 瞄准镜",
			"game-15xscope": "15x 瞄准镜",
			"game-level-1": "一级",
			"game-level-2": "二级",
			"game-level-3": "三级",
			"game-outfitBase": "基本服装",
			"game-outfitRoyalFortune": "皇家财富",
			"game-outfitKeyLime": "青柠",
			"game-outfitCobaltShell": "钴壳",
			"game-outfitCarbonFiber": "碳纤维",
			"game-outfitDarkGloves": "专业",
			"game-outfitGhillie": "吉利服",
			"game-outfitCamo": "森林迷彩",
			"game-outfitRed": "目标练习",
			"game-outfitWhite": "北极复仇者",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	"W+3y": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-31",
				locale: "en"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Region",
			"index-north-america": "North America",
			"index-europe": "Europe",
			"index-asia": "Asia",
			"index-players": "players",
			"index-play-solo": "Play Solo",
			"index-play-duo": "Play Duo",
			"index-play-squad": "Play Squad",
			"index-join-team": "Join Team",
			"index-create-team": "Create Team",
			"index-leave-team": "Leave Team",
			"index-joining-team": "Joining Team",
			"index-creating-team": "Creating Team",
			"index-invite-link": "Invite link",
			"index-invite-code": "Invite code",
			"index-join-team-help": "Got a team link or code? Paste it here:",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Squad",
			"index-auto-fill": "Auto Fill",
			"index-no-fill": "No Fill",
			"index-waiting-for-leader": "Waiting for leader to start game",
			"index-joining-game": "Joining game",
			"index-game-in-progress": "Game in progress",
			"index-play": "Play",
			"index-customize-loadout": "Customize Emotes",
			"index-twitter-follow": "Twitter Follow",
			"index-youtube-subscribe": "YouTube Subscribe",
			"index-facebook-like": "Facebook Like",
			"index-featured-youtuber": "Featured YouTuber",
			"index-streaming-live": "Streaming Live!",
			"index-settings": "Settings",
			"index-high-resolution": "High resolution (check to increase visual quality)",
			"index-screen-shake": "Screen shake",
			"index-master-volume": "Master Volume",
			"index-sfx-volume": "SFX Volume",
			"index-music-volume": "Music Volume",
			"index-mobile-announce": "Now available on mobile!",
			"index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
			"index-version": "ver",
			"index-privacy": "privacy",
			"index-attributions": "attributions",
			"index-proxy-sites": "proxy sites",
			"index-team-is-full": "Team is full!",
			"index-failed-joining-team": "Failed joining team.",
			"index-failed-creating-team": "Failed creating team.",
			"index-failed-finding-game": "Failed finding game.",
			"index-failed-joining-game": "Failed joining game.",
			"index-lost-connection": "Lost connection to team.",
			"index-host-closed": "Host closed the connection.",
			"index-invalid-protocol": "Old client version.",
			"index-view-more": "View More",
			"index-back-to-main": "Back to Main Menu",
			"index-most-kills": "Most kills",
			"index-total-kills": "Total kills",
			"index-total-wins": "Total wins",
			"index-top-5-percent": "Top 5 percent",
			"index-kill-death-ratio": "Kill-death ratio",
			"index-mode": "Mode",
			"index-for": "For",
			"index-today": "Today",
			"index-this-week": "This week",
			"index-all-time": "All time",
			"index-top-100": "TOP 100",
			"index-rank": "Rank",
			"index-player": "Player",
			"index-total-games": "Total Games",
			"index-controls": "Controls",
			"index-movement": "Movement",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Aim",
			"index-aim-ctrl": "Mouse",
			"index-punch": "Melee",
			"index-shoot": "Shoot",
			"index-shoot-ctrl": "Left-Click",
			"index-change-weapons": "Change Weapons",
			"index-change-weapons-ctrl": "1 through 4 or Scroll Wheel",
			"index-stow-weapons": "Stow Weapons (Melee Mode)",
			"index-stow-weapons-ctrl": "3 or E",
			"index-swap-weapons": "Swap to Previous Weapon",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Reload",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Scope Zoom",
			"index-scope-zoom-ctrl": "Left-Click on Zoom",
			"index-pickup": "Pickup",
			"index-loot": "Loot",
			"index-revive": "Revive",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Use Medical Item",
			"index-use-medical-ctrl": "Left-Click on Item or 7 through 0",
			"index-drop-item": "Drop Item",
			"index-drop-item-ctrl": "Right-Click on Item",
			"index-cancel-action": "Cancel Action",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "View Map",
			"index-view-map-ctrl": "M or G",
			"index-toggle-minimap": "Toggle Minimap",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Use Team Ping Wheel",
			"index-use-ping-ctrl": "Hold C, then hold Right-Click and drag mouse, then release Right-Click",
			"index-use-emote": "Use Emote Wheel",
			"index-use-emote-ctrl": "Hold Right-Click and drag mouse, then release Right-Click",
			"index-how-to-play": "How to Play",
			"index-tips-1-desc": "The goal of surviv.io is to be the last player standing. You only live once per game - there is no respawn!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "If you've played other battle royale games like PUBG, Fortnite or H1Z1, then you're already halfway there! Think of surviv.io as 2D PUBG (with slightly less desync and more chicken).",
			"index-tips-3": "Loot and Kill",
			"index-tips-3-desc": "You'll begin the game with no items other than a simple backpack. Move around the map to find loot: weapons, ammo, scopes, and medical items. Eliminate other players and you can take their loot!",
			"index-tips-4": "Red = Bad!",
			"index-tips-4-desc": "Players aren't the only thing that can hurt you. The deadly red zone will move in from the sides of the map and deal increasingly greater damage if you stand in it. Keep an eye on the map and stay safe.",
			"index-movement-ctrl-touch": "Left stick",
			"index-aim-ctrl-touch": "Right stick",
			"index-shoot-ctrl-touch": "Drag right stick outside stick border",
			"index-change-weapons-ctrl-touch": "Tap weapon slot",
			"index-reload-ctrl-touch": "Tap equipped ammo counter",
			"index-scope-zoom-ctrl-touch": "Tap zoom item",
			"index-pickup-ctrl-touch": "Tap interaction button or loot name",
			"index-use-medical-ctrl-touch": "Tap medical item",
			"index-drop-item-ctrl-touch": "Touch and hold item",
			"index-cancel-action-ctrl-touch": "Tap interaction button",
			"index-view-map-ctrl-touch": "Tap minimap",
			"index-use-ping-ctrl-touch": "View map and tap anywhere on map",
			"index-use-emote-ctrl-touch": "Tap surviv icon",
			"game-alive": "Alive",
			"game-reloading": "Reloading",
			"game-use": "Use",
			"game-using": "Using",
			"game-reviving": "Reviving",
			"game-revive-teammate": "Revive Teammate",
			"game-equip": "Equip",
			"game-cancel": "Cancel",
			"game-open-door": "Open Door",
			"game-close-door": "Close Door",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "Waiting for players",
			"game-spectating": "Spectating",
			"game-red-zone-advances": "Red zone advances in",
			"game-red-zone-advancing": "Red zone advancing! Move to the safe zone",
			"game-seconds": "seconds",
			"game-minutes": "minutes",
			"game-minute": "minute",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Not enough space!",
			"game-item-already-owned": "Item already owned!",
			"game-item-already-equipped": "Item already equipped!",
			"game-better-item-equipped": "Better item equipped!",
			"game-play-new-game": "Play New Game",
			"game-spectate": "Spectate",
			"game-full-screen": "Full Screen",
			"game-sound": "Sound",
			"game-quit-game": "Quit Game",
			"game-return-to-game": "Return to Game",
			"game-hide-match-stats": "Hide Match Stats",
			"game-view-match-stats": "View Match Stats",
			"game-previous-teammate": "Previous Teammate",
			"game-next-teammate": "Next Teammate",
			"game-spectate-previous": "Previous Player",
			"game-spectate-next": "Next Player",
			"game-leave-game": "Leave Game",
			"game-your-results": "Your Results",
			"game-chicken": "Winner winner chicken dinner!",
			"game-won-the-game": "won the game.",
			"game-team-eliminated": "Your team was eliminated.",
			"game-solo-rank": "Solo Rank",
			"game-duo-rank": "Duo Rank",
			"game-squad-rank": "Squad Rank",
			"game-rank": "Rank",
			"game-team-rank": "Team Rank",
			"game-team-kills": "Team Kills",
			"game-kill": "Kill",
			"game-kills": "Kills",
			"game-damage-dealt": "Damage Dealt",
			"game-damage-taken": "Damage Taken",
			"game-survived": "Survived",
			"game-backpack00": "Pouch",
			"game-backpack01": "Small Pack",
			"game-backpack02": "Regular Pack",
			"game-backpack03": "Military Pack",
			"game-bandage": "Bandage",
			"game-bandage-tooltip": "Left-click to restore 15 health.",
			"game-healing-tooltip": "Cannot heal past 75 health.",
			"game-healthkit": "Med Kit",
			"game-healthkit-tooltip": "Left-click to restore 100 health.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Left-click to boost adrenaline by 25.",
			"game-adrenaline-tooltip": "Adrenaline restores health over time.",
			"game-painkiller": "Pills",
			"game-painkiller-tooltip": "Left-click to boost adrenaline by 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Ammo for M9, Glock, MP5, MAC-10, UMP9 and Vector.",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "Ammo for M870, Saiga-12 and MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 and DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Ammo for FAMAS, HK416, Mk 12 and M249.",
			"game-50AE": ".50 AE",
			"game-50AE-tooltip": "Ammo for Desert Eagle.",
			"game-chest01": "Level 1 Vest",
			"game-chest02": "Level 2 Vest",
			"game-chest03": "Level 3 Vest",
			"game-helmet01": "Level 1 Helmet",
			"game-helmet02": "Level 2 Helmet",
			"game-helmet03": "Level 3 Helmet",
			"game-1xscope": "1x Scope",
			"game-2xscope": "2x Scope",
			"game-4xscope": "4x Scope",
			"game-8xscope": "8x Scope",
			"game-15xscope": "15x Scope",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-outfitWoodland": "Woodland Combat",
			"game-outfitJester": "Jester's Folly",
			"game-outfitPrisoner": "The New Black",
			"game-outfitCasanova": "Casanova Silks",
			"game-outfitKhaki": "The Initiative",
			"game-outfitCoral": "Coral Guise",
			"game-outfitAqua": "Aquatic Avenger",
			"game-fists": "Fists",
			"game-ak47": "AK-47",
			"game-scar": "SCAR-H",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-sv98": "SV-98",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-vector": "Vector",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-m9_dual": "Dual M9",
			"game-hud-m9_dual": "M9",
			"game-glock": "Glock 18C",
			"game-glock_dual": "Dual Glock 18C",
			"game-hud-glock_dual": "Glock 18C",
			"game-ot38": "OT-38",
			"game-ot38_dual": "Dual OT-38",
			"game-hud-ot38_dual": "OT-38",
			"game-deagle": "Desert Eagle",
			"game-deagle_dual": "Dual Desert Eagle",
			"game-hud-deagle_dual": "Desert Eagle",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Frag Grenade",
			"game-hud-frag": "Frag",
			"game-smoke": "Smoke Grenade",
			"game-hud-smoke": "Smoke",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo",
			"game-oven_01": "an oven",
			"game-control_panel_01": "Control Panel",
			"game-control_panel_02": "Control Panel",
			"game-control_panel_03": "a computer terminal",
			"game-power_box_01": "a power box"
		};
		e.exports = i
	},
	"YEz/": function(e, t, a) {
		"use strict";

		function i(e) {
			this.active = !1
		}

		function o() {
			this.explosions = []
		}
		var n = (a("gKxX"), a("+0OL")),
			r = (a("8iex"), a("0od3")),
			s = a("Tf6H"),
			l = a("/2+T"),
			c = (a("zinx"), a("r4ug"), a("EZ6M")),
			m = {
				frag: {
					burst: {
						particle: "explosionBurst",
						scale: 1,
						sound: {
							grass: "explosion_01",
							water: "explosion_02"
						},
						pan: !1,
						time: 0
					},
					shakeStr: .2,
					shakeDur: .35,
					lifetime: 2
				},
				smoke: {
					burst: {
						particle: "explosionBurst",
						scale: 0,
						sound: {
							grass: "explosion_smoke_01",
							water: "explosion_smoke_01"
						},
						pan: !0,
						time: 0
					},
					shakeStr: 0,
					shakeDur: 0,
					lifetime: 6
				},
				barrel: {
					burst: {
						particle: "explosionBurst",
						scale: 1,
						sound: {
							grass: "explosion_01",
							water: "explosion_02"
						},
						pan: !1,
						time: 0
					},
					shakeStr: .2,
					shakeDur: .35,
					lifetime: 2
				}
			};
		i.prototype = {
			init: function(e, t, a) {
				var i = n.explosions[e].explosionType,
					o = m[i];
				this.active = !0, this.done = !1, this.type = e, this.pos = l.copy(t), this.layer = a, this.ticker = 0, this.lifetime = o.lifetime, this.soundInstance = null, this.soundUpdateThrottle = 0
			},
			free: function() {
				this.active = !1
			},
			update: function(e, t, a, i, o) {
				var d = n.explosions[this.type].explosionType,
					p = m[d];
				if (0 == this.ticker) {
					t.addParticle(c.Defs[p.burst.particle], this.layer, this.pos, l.create(0, 0), p.burst.scale, 0, null);
					var u = i.getGroundSurface(this.pos, this.layer),
						h = "water" == u ? p.burst.sound.water : p.burst.sound.grass;
					if (this.soundInstance = a.playSound(h, {
							channel: "sfx",
							soundPos: this.pos,
							layer: this.layer,
							muffled: !0
						}), "water" == u)
						for (var g = 0; g < 10; g++) {
							var f = l.add(this.pos, l.mul(l.randomUnit(), s.random(0, 5)));
							i.addRipple(f, .06 * g)
						}
				}
				this.soundInstance && this.soundUpdateThrottle < 0 ? (this.soundUpdateThrottle = .1, this.soundInstance = a.updateSound(this.soundInstance, "sfx", this.pos, {
					layer: this.layer,
					muffled: !0
				})) : this.soundUpdateThrottle -= e, this.ticker += e;
				var y = Math.min(this.ticker / p.shakeDur, 1),
					b = r.lerp(y, p.shakeStr, 0);
				o.addShake(this.pos, b), this.ticker >= this.lifetime && (this.active = !1)
			}
		}, o.prototype = {
			addExplosion: function(e, t, a) {
				for (var o = null, n = 0; n < this.explosions.length; n++)
					if (!this.explosions[n].active) {
						o = this.explosions[n];
						break
					}
				o || (o = new i(this), this.explosions.push(o)), o.init(e, t, a)
			},
			update: function(e, t, a, i, o) {
				for (var n = 0; n < this.explosions.length; n++) {
					var r = this.explosions[n];
					r.active && (r.update(e, i, o, t, a), r.active || r.free())
				}
			}
		}, e.exports = {
			ExplosionBarn: o
		}
	},
	YUyC: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			for (var i = o.map, s = i.shoreDivisions, l = i.shoreInset, c = i.shoreVariation, m = i.grassInset, d = i.grassVariation, p = a, u = function(e, t) {
					p = 16807 * p % 2147483647;
					var a = p / 2147483647;
					return n.lerp(a, e, t)
				}, h = {
					x: l,
					y: l
				}, g = {
					x: e - l,
					y: l
				}, f = {
					x: l,
					y: t - l
				}, y = {
					x: e - l,
					y: t - l
				}, b = g.x - h.x, x = b / (s + 1), v = [h], k = 1; k <= s; ++k) v.push({
				x: h.x + x * k,
				y: h.y + u(-c, c)
			});
			v.push(g);
			for (var _ = 1; _ <= s; ++_) v.push({
				x: g.x + u(-c, c),
				y: g.y + x * _
			});
			v.push(y);
			for (var w = 1; w <= s; ++w) v.push({
				x: y.x - x * w,
				y: y.y + u(-c, c)
			});
			v.push(f);
			for (var S = 1; S <= s; ++S) v.push({
				x: f.x + u(-c, c),
				y: f.y - x * S
			});
			var M = r.create(e / 2, t / 2);
			return {
				shore: v,
				grass: v.map(function(e) {
					var t = r.normalize(r.sub(M, e)),
						a = u(-d, d),
						i = m + a;
					return r.add(e, r.mul(t, i))
				})
			}
		}
		var o = a("+0OL"),
			n = a("0od3"),
			r = (a("Tf6H"), a("/2+T"));
		e.exports = {
			generateTerrain: i
		}
	},
	YfyY: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			var a = {
				join_full: t.translate("index-team-is-full"),
				join_not_found: t.translate("index-failed-joining-team"),
				create_failed: t.translate("index-failed-creating-team"),
				join_failed: t.translate("index-failed-joining-team"),
				join_game_failed: t.translate("index-failed-joining-game"),
				lost_conn: t.translate("index-lost-connection"),
				find_game_error: t.translate("index-failed-finding-game"),
				find_game_full: t.translate("index-failed-finding-game"),
				find_game_invalid_protocol: t.translate("index-invalid-protocol")
			};
			return a[e] || a.lost_conn
		}
		var n = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			r = a("juYr"),
			s = a("+0OL"),
			l = (a("0od3"), a("gtMM")),
			c = a("85i3"),
			m = a("Jr6A"),
			d = (a("zinx"), function() {
				function e(t, a, o, n, s) {
					var l = this;
					i(this, e), this.audioManager = s, this.playBtn = r("#btn-start-team"), this.serverWarning = r("#server-warning"), this.teamOptions = r("#btn-team-queue-duo, #btn-team-fill-auto, #btn-team-fill-none"), this.serverSelect = r("#team-server-select"), this.queueDuo = r("#btn-team-queue-duo"), this.queueSquad = r("#btn-team-queue-squad"), this.fillAuto = r("#btn-team-fill-auto"), this.fillNone = r("#btn-team-fill-none"), this.onLeave = null, this.config = t, this.pingTest = a, this.localization = o, this.joinGameFn = n, this.active = !1, this.joined = !1, this.create = !1, this.joiningGame = !1, this.ws = null, this.keepAliveTimeout = 0, this.siteInfo = {}, this.playerData = {}, this.roomData = {}, this.players = [], this.prevPlayerCount = 0, this.localPlayerIdx = 0, this.isLeader = !0, this.serverSelect.change(function() {
						var e = l.serverSelect.find(":selected").val();
						l.pingTest.start(e), l.setRoomProperty("region", e)
					}), this.queueDuo.click(function() {
						l.players.length <= 2 && l.setRoomProperty("teamMode", 2)
					}), this.queueSquad.click(function() {
						l.setRoomProperty("teamMode", 4)
					}), this.fillAuto.click(function() {
						l.setRoomProperty("autoFill", !0)
					}), this.fillNone.click(function() {
						l.setRoomProperty("autoFill", !1)
					}), this.playBtn.on("click", function() {
						l.tryStartGame()
					}), r("#team-copy-url, #team-desc-text").click(function(e) {
						var t = r("<div/>", {
							class: "team-copy-toast",
							html: "Copied!"
						});
						r("#start-menu-wrapper").append(t), t.css({
							left: e.pageX - parseInt(t.css("width")) / 2,
							top: r("#team-copy-url").offset().top
						}), t.animate({
							top: "-=20",
							opacity: 1
						}, {
							queue: !1,
							duration: 300,
							complete: function() {
								r(this).fadeOut(250, function() {
									r(this).remove()
								})
							}
						});
						var a = r("#team-url").html(),
							i = r("<input>");
						if (r("body").append(i), i.val(a), m.detectiOS()) {
							var o = i.get(0),
								n = o.contentEditable,
								s = o.readOnly;
							o.contentEditable = !0, o.readOnly = !0;
							var l = document.createRange();
							l.selectNodeContents(o);
							var c = window.getSelection();
							c.removeAllRanges(), c.addRange(l), o.setSelectionRange(0, 999999), o.contentEditable = n, o.readOnly = s
						} else i.select();
						document.execCommand("copy"), i.remove()
					})
				}
				return n(e, [{
					key: "update",
					value: function(e) {
						this.joined && (this.keepAliveTimeout -= e, this.keepAliveTimeout < 0 && (this.keepAliveTimeout = 30, this.sendMessage("keepAlive", {})))
					}
				}, {
					key: "connect",
					value: function(e, t) {
						var a = this;
						if (!this.active || t !== this.roomData.roomUrl) {
							var i = "https:" == window.location.protocol,
								o = window.location.host;
							if (!e) {
								var n = l.decodeUrl(t);
								o = "app-" + l.appIdToString(n.appId) + "." + /([^\.]+\.[^\.]+)$/.exec(window.location.hostname)[0]
							}
							var r = i ? "wss:" : "ws:",
								s = r + "//" + o + "/team";
							this.active = !0, this.joined = !1, this.create = e, this.joiningGame = !1, this.playerData = {
								name: this.config.get("playerName")
							}, this.roomData = {
								roomUrl: t,
								region: this.config.get("region"),
								teamMode: this.config.get("teamMode"),
								autoFill: this.config.get("teamAutoFill"),
								findingGame: !1,
								lastError: ""
							}, this.refreshUi();
							try {
								this.ws = new WebSocket(s), this.ws.onerror = function(e) {
									a.ws && a.ws.close()
								}, this.ws.onclose = function() {
									var t = "";
									a.joiningGame || (t = a.joined ? "lost_conn" : e ? "create_failed" : "join_failed"), a.leave(t)
								}, this.ws.onopen = function() {
									e ? a.sendMessage("create", {
										roomData: a.roomData,
										playerData: a.playerData
									}) : a.sendMessage("join", {
										roomUrl: a.roomData.roomUrl,
										playerData: a.playerData
									})
								}, this.ws.onmessage = function(e) {
									if (a.active) {
										var t = JSON.parse(e.data);
										a.onMessage(t.type, t.data)
									}
								}
							} catch (t) {
								this.leave(e ? "create_failed" : "join_failed")
							}
						}
					}
				}, {
					key: "leave",
					value: function(e) {
						var t = (this.serverWarning, this.config),
							a = this.roomData,
							i = this.playerData;
						if (this.active) {
							this.ws && this.ws.close(), this.ws = null, this.active = !1, this.joined = !1, this.refreshUi(), t.set("playerName", i.name), t.set("region", a.region), t.set("teamMode", a.teamMode), t.set("teamAutoFill", a.autoFill);
							var n = "";
							e && "" != e && (n = o(e, this.localization), c.storeGeneric("teamError", e)), this.onLeave(n)
						}
					}
				}, {
					key: "onGameComplete",
					value: function() {
						this.active && (this.joiningGame = !1, this.sendMessage("gameComplete"))
					}
				}, {
					key: "onMessage",
					value: function(e, t) {
						var a = this;
						this.config, this.playerData, this.roomData, this.players;
						switch (e) {
							case "state":
								this.joined = !0;
								var i = this.roomData;
								this.roomData = t.room, this.players = t.players, this.localPlayerIdx = t.localPlayerIdx, this.isLeader = this.players.length > 0 && this.players[this.localPlayerIdx].isLeader, this.isLeader && (this.roomData.region = i.region, this.roomData.autoFill = i.autoFill, this.roomData.teamMode = i.teamMode), this.refreshUi();
								break;
							case "joinGame":
								this.joiningGame = !0, this.joinGameFn(t, function() {
									a.leave("join_game_failed")
								});
								break;
							case "keepAlive":
								break;
							case "error":
								this.leave(t.type)
						}
					}
				}, {
					key: "sendMessage",
					value: function(e, t) {
						if (this.ws)
							if (this.ws.readyState === this.ws.OPEN) {
								var a = JSON.stringify({
									type: e,
									data: t
								});
								this.ws.send(a)
							} else this.ws.close()
					}
				}, {
					key: "setRoomProperty",
					value: function(e, t) {
						this.isLeader && this.roomData[e] != t && (this.roomData[e] = t, this.sendMessage("setRoomProps", this.roomData))
					}
				}, {
					key: "tryStartGame",
					value: function() {
						if (this.isLeader && !this.roomData.findingGame) {
							var e = s.protocolVersion,
								t = this.roomData.region,
								a = m.getParameterByName("region");
							void 0 !== a && a.length > 0 && (t = a);
							var i = this.pingTest.getZones(t),
								o = m.getParameterByName("zone");
							void 0 !== o && o.length > 0 && (i = [o]);
							var n = {
								version: e,
								region: t,
								zones: i
							};
							this.sendMessage("playGame", n), this.roomData.findingGame = !0, this.refreshUi()
						}
					}
				}, {
					key: "refreshUi",
					value: function() {
						var e = this.localization,
							t = this.playBtn,
							a = this.serverWarning,
							i = this.teamOptions,
							n = this.serverSelect,
							s = this.queueDuo,
							l = this.queueSquad,
							c = this.fillAuto,
							m = this.fillNone,
							d = this.active,
							p = this.joined,
							u = this.create,
							h = this.joiningGame,
							g = this.siteInfo,
							f = (this.playerData, this.roomData),
							y = this.players,
							b = this.localPlayerIdx,
							x = this.isLeader,
							v = this.audioManager;
						r("#team-menu").css("display", d ? "block" : "none"), r("#start-menu").css("display", d ? "none" : "block"), r("#news-block").css("display", d ? "none" : "block"), r("#social-share-block").css("display", d ? "none" : "block");
						var k = "" != f.lastError,
							_ = o(f.lastError, this.localization);
						if (a.css("opacity", k ? 1 : 0), a.html(_), d && (r("#team-menu-joining-text").css("display", u ? "none" : "block"), r("#team-menu-creating-text").css("display", u ? "block" : "none"), r("#team-menu-connecting").css("display", p ? "none" : "block"), r("#team-menu-contents").css("display", p ? "block" : "none")), p) {
							for (var w = g.pops || {}, S = Object.keys(w), M = 0; M < S.length; M++) {
								var T = S[M],
									P = w[T],
									C = r("#team-server-opts").children('option[value="' + T + '"]');
								C.html(C.attr("data-label") + " [" + P + "]")
							}
							n.find("option").each(function() {
								this.selected = this.value == f.region
							}), r(".btn-team-queue").removeClass("btn-hollow-selected");
							(2 == f.teamMode ? s : l).addClass("btn-hollow-selected"), r(".btn-team-fill").removeClass("btn-hollow-selected");
							(f.autoFill ? c : m).addClass("btn-hollow-selected"), f.roomUrl && (r("#team-url").html(window.location.origin + "/" + f.roomUrl), r("#team-code").html(f.roomUrl.substring(1)), window.history && window.history.replaceState("", "", f.roomUrl)), t.html(f.findingGame || h ? '<div class="ui-spinner"></div>' : t.attr("data-label")), x ? (i.addClass("btn-darken"), i.removeClass("btn-disabled"), i.removeClass("btn-opaque")) : (i.addClass("btn-disabled"), r(".team-menu-options-buttons .btn-hollow-selected").removeClass("btn-opaque"), r('.team-menu-options-buttons a:not(".btn-hollow-selected")').addClass("btn-opaque"), i.removeClass("btn-darken")), i.prop("disabled", !x), n.prop("disabled", !x), r("#btn-start-team").css("display", x ? "block" : "none");
							for (var I = !1, z = 0; z < y.length; z++) y[z].isLeader && (I = y[z].inGame);
							var A = r("#msg-wait-reason");
							if (A.css("display", x ? "none" : "block"), f.findingGame || h ? A.html('<div class="ui-spinner" style="margin-right:16px"></div>' + e.translate("index-joining-game") + "<span> ...</span>") : I ? A.html(e.translate("index-game-in-progress") + "<span> ...</span>") : A.html(e.translate("index-waiting-for-leader") + "<span> ...</span>"), x) {
								var D = y.length <= 2;
								D || (s.addClass("btn-disabled btn-opaque"), s.removeClass("btn-darken btn-hollow-selected")), s.prop("disabled", !D)
							}
							var O = !0,
								L = r("#team-menu-member-list");
							L.empty();
							for (var E = 0; E < f.teamMode; E++) {
								var B = {
									name: "",
									isLocal: !1,
									isLeader: !1,
									inGame: !1
								};
								if (E < y.length) {
									var F = y[E];
									B = {
										name: F.name,
										isLocal: E === b,
										isLeader: F.isLeader,
										inGame: F.inGame
									}
								}
								var R = r("<div/>", {
										class: "team-menu-member"
									}),
									j = "";
								B.isLeader && (j = " icon-leader");
								var N = "name-text";
								B.isLocal && (N += " name-self"), B.inGame && (N += " name-in-game"), R.append(r("<div/>", {
									class: "icon" + j
								})), R.append(r("<div/>", {
									class: "name menu-option"
								}).append(r("<div/>", {
									class: N,
									html: B.name
								}))), R.append(r("<div/>", {
									class: "icon " + (B.inGame ? "icon-in-game" : "")
								})), L.append(R), B.isLocal && B.inGame && (O = !1)
							}!document.hasFocus() && this.prevPlayerCount < y.length && y.length > 1 && O && v.playSound("notification_join_01", {
								channel: "ui"
							}), this.prevPlayerCount = y.length
						}
					}
				}]), e
			}());
		e.exports = d
	},
	a5N1: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-05-13",
				locale: "vn"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Vùng",
			"index-north-america": "Bắc Mỹ",
			"index-europe": "Châu Âu",
			"index-asia": "Châu Á",
			"index-players": "người chơi",
			"index-play-solo": "Chơi một người",
			"index-play-duo": "Chơi nhóm hai người",
			"index-play-squad": "Chơi nhóm bốn người",
			"index-join-team": "Vào nhóm",
			"index-create-team": "Tạo nhóm",
			"index-leave-team": "Rời nhóm",
			"index-joining-team": "Đang vào nhóm",
			"index-creating-team": "Đang tạo nhóm",
			"index-invite-link": "Đường dẫn mời chơi",
			"index-invite-code": "Mã số mời chơi",
			"index-solo": "Đơn",
			"index-duo": "Nhóm hai",
			"index-squad": "Nhóm bốn",
			"index-auto-fill": "Tự động điền",
			"index-no-fill": "Không thêm",
			"index-waiting-for-leader": "Chờ trưởng nhóm bắt đầu lượt chơi",
			"index-joining-game": "Tham gia trò chơi",
			"index-game-in-progress": "Trò chơi đang diễn ra",
			"index-play": "Chơi",
			"index-featured-youtuber": "YouTuber khách mời",
			"index-streaming-live": "Phát trực tiếp!",
			"index-settings": "Cài đặt",
			"index-high-resolution": "Độ phân giải cao (đánh dấu để tăng chất lượng hình ảnh)",
			"index-screen-shake": "Rung màn hình",
			"index-master-volume": "Âm lượng tổng",
			"index-sfx-volume": "Âm lượng SFX",
			"index-music-volume": "Music Volume",
			"index-mobile-announce": "Now available on mobile!",
			"index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
			"index-team-is-full": "Nhóm đã đủ người!",
			"index-failed-joining-team": "Không vào được nhóm.",
			"index-failed-creating-team": "Không tạo được nhóm.",
			"index-failed-finding-game": "Không tìm được lượt chơi.",
			"index-failed-joining-game": "Không vào được lượt chơi.",
			"index-lost-connection": "Mất kết nối với nhóm.",
			"index-host-closed": "Chủ lượt chơi đã đóng kết nối.",
			"index-invalid-protocol": "Phiên bản cũ.",
			"index-view-more": "Xem thêm",
			"index-back-to-main": "Quay lại Danh mục chính",
			"index-most-kills": "Tiêu diệt nhiều nhất",
			"index-total-kills": "Tổng số bị tiêu diệt",
			"index-total-wins": "Tổng số lần thắng",
			"index-top-5-percent": "Tốp 5 phần trăm",
			"index-kill-death-ratio": 'Tỷ lệ "Tiêu diệt-Bị tiêu diệt"',
			"index-mode": "Mode",
			"index-for": "Của",
			"index-today": "Ngày hôm nay",
			"index-this-week": "Tuần này",
			"index-all-time": "Toàn bộ thời gian chơi",
			"index-top-100": "Tốp 100",
			"index-rank": "Thứ hạng",
			"index-player": "Người chơi",
			"index-total-games": "Tất cả các lượt chơi",
			"index-controls": "Kiểm soát",
			"index-movement": "Di chuyển",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Ngắm",
			"index-aim-ctrl": "Chuột",
			"index-punch": "Đấm",
			"index-shoot": "Bắn",
			"index-shoot-ctrl": "Bấm chuột trái",
			"index-change-weapons": "Đổi vũ khí",
			"index-change-weapons-ctrl": "1 đến 4 hoặc nút cuộn chuột",
			"index-stow-weapons": "Stow Weapons (Melee Mode)",
			"index-stow-weapons-ctrl": "3 hoặc E",
			"index-swap-weapons": "Đổi về vũ khí trước đó",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Nạp đạn",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Phóng to",
			"index-scope-zoom-ctrl": "Bấm chuột trái để phóng to",
			"index-pickup": "Nhặt lên",
			"index-loot": "Vật phẩm",
			"index-revive": "Hồi phục",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Sử dụng vật phẩm cứu thương",
			"index-use-medical-ctrl": "Bấm chuột trái lệ vật phẩm hoặc ấn 7-0",
			"index-drop-item": "Bỏ vật phẩm",
			"index-drop-item-ctrl": "Phải chuột phải vào vật phẩm",
			"index-cancel-action": "Hủy hành động",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Xem bản đồ",
			"index-view-map-ctrl": "M hoặc G",
			"index-toggle-minimap": "Bật bản đồ mini",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Sử dụng Cửa sổ Trò chuyện của nhóm",
			"index-use-ping-ctrl": "Giữ C, rồi giữ chuột phải và rê chuột, rồi thả chuột phải",
			"index-use-emote": "Dùng Cửa sổ Biểu cảm của nhóm",
			"index-use-emote-ctrl": "Giữ phải chuột rồi rê chuột, rồi thả phải chuột",
			"index-how-to-play": "Cách chơi",
			"index-tips-1-desc": "Mục tiêu của trò surviv.io là thành người cuối cùng còn sống sót. Bạn chỉ có một mạng cho mỗi lượt chơi - không thể tái sinh lại!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "Nếu các bạn đã chơi những trò chơi sinh tồn kiểu PUBG, Fortnite hay H1Z1, thì bạn đã nắm được một nửa trò chơi rồi! Hãy coi trò surviv.io như là trò PUBG 2D.",
			"index-tips-3": "Kiếm vật phẩm và tiêu diệt",
			"index-tips-3-desc": "Bạn sẽ bắt đầu trò chơi mà không có vật phẩm gì ngoài một cái balo. Chạy quanh bản đồ để tìm vật phẩm như: vũ khí, đạn, ống ngắm và và vật phẩm cứu thương. Tiêu diệt những người chơi khác và bạn có thể lấy vật phẩm của họ!",
			"index-tips-4": "Màu đỏ = Không ổn!",
			"index-tips-4-desc": "Người không chỉ là thứ duy nhất có thể gây sát thương lên bạn. Vùng màu đỏ nguy hiểm sẽ di chuyển và thu nhỏ dần lại theo bản đồ và gây sát thương lớn nếu bạn nằm trong vùng màu đỏ. Hãy để ý tới bản đồ và giữ khoảng cách an toàn.",
			"index-movement-ctrl-touch": "Núm điều khiển bên trái",
			"index-aim-ctrl-touch": "Núm điều khiển bên phải",
			"index-shoot-ctrl-touch": "Kéo nút điều khiển bên phải ra ngoài mép thanh điều khiển",
			"index-change-weapons-ctrl-touch": "Chạm vào ô vũ khí",
			"index-reload-ctrl-touch": "Chạm vào bộ đếm đạn được trang bị",
			"index-scope-zoom-ctrl-touch": "Chạm vào mục thu phóng",
			"index-pickup-ctrl-touch": "Chạm vào nút tương tác hoặc tên vật phẩm",
			"index-use-medical-ctrl-touch": "Chạm vào mục y tế",
			"index-drop-item-ctrl-touch": "Chạm và giữ đồ vật",
			"index-cancel-action-ctrl-touch": "Chạm vào nút tương tác",
			"index-view-map-ctrl-touch": "Chạm vào bản đồ mini",
			"index-use-ping-ctrl-touch": "Hiển thị bản đồ và chạm vào bất kỳ vị trí nào trên bản đồ",
			"index-use-emote-ctrl-touch": "Chạm vào biểu tượng sống sót",
			"game-alive": "Còn sống",
			"game-reloading": "Nạp đạn",
			"game-use": "Use",
			"game-using": "Sử dụng",
			"game-reviving": "Hồi phục",
			"game-revive-teammate": "Hồi phục cho đồng đội",
			"game-equip": "Trang bị",
			"game-cancel": "Hủy",
			"game-open-door": "Mở cửa",
			"game-close-door": "Đóng cửa",
			"game-You": "Bạn",
			"game-you": "bạn",
			"game-themselves": "chính họ",
			"game-yourself": "chính bạn",
			"game-you-died": "đã bị tiêu diệt",
			"game-player-died": "đã bị tiêu diệt",
			"game-with": "bởi",
			"game-knocked-out": "hạ gục",
			"game-killed": "đã bị tiêu diệt",
			"game-finally-killed": "cuối cùng cũng tiêu diệt được",
			"game-finally-bled-out": "cuối cùng đã chảy máu",
			"game-died-outside": "đã bị tiêu diệt ngoài vùng an toàn",
			"game-the-red-zone": "Vùng màu đỏ",
			"game-waiting-for-players": "Đợi người chơi khác",
			"game-spectating": "Quan sát",
			"game-red-zone-advances": "Vùng màu đỏ thu hẹp dần",
			"game-red-zone-advancing": "Vùng màu đỏ đang thu hẹp dần, hãy chạy về vùng an toàn!",
			"game-seconds": "giây",
			"game-minutes": "phút",
			"game-minute": "phút",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Không đủ chỗ!",
			"game-item-already-owned": "Đã có vật phẩm này!",
			"game-item-already-equipped": "Đã trang bị vật phẩm!",
			"game-better-item-equipped": "Đã trang bị vật phẩm tốt hơn!",
			"game-play-new-game": "Chơi lượt mới",
			"game-spectate": "Xem người khác chơi",
			"game-full-screen": "Toàn màn hình",
			"game-sound": "Âm thanh",
			"game-quit-game": "Thoát khỏi lượt chơi",
			"game-return-to-game": "Trở lại lượt chơi",
			"game-hide-match-stats": "Ẩn chỉ số trận đấu",
			"game-view-match-stats": "Xem chỉ số trận đấu",
			"game-previous-teammate": "Đồng đội trước đó",
			"game-next-teammate": "Đồng đội kế tiếp",
			"game-spectate-previous": "Người chơi trước",
			"game-spectate-next": "The next player",
			"game-leave-game": "Thoát lượt chơi",
			"game-your-results": "Kết quả của bạn",
			"game-chicken": "Chiến thắng chiến thắng Cơm gà xả láng!",
			"game-won-the-game": "đã thắng lượt chơi.",
			"game-team-eliminated": "Đội của bạn đã bị tiêu diệt.",
			"game-solo-rank": "Xếp hạng Solo",
			"game-duo-rank": "Xếp hạng Duo",
			"game-squad-rank": "Xếp hạng đội hình",
			"game-rank": "Thứ hạng",
			"game-team-rank": "Thứ hạng của đội",
			"game-team-kills": "Số lượt tiêu diệt được của đội",
			"game-kill": "Tiêu diệt",
			"game-kills": "Tiêu diệt",
			"game-damage-dealt": "Sát thương gây ra",
			"game-damage-taken": "Sát thương nhận",
			"game-survived": "Đã sống sót",
			"game-backpack00": "Túi đồ",
			"game-backpack01": "Balo nhỏ",
			"game-backpack02": "Balo vừa",
			"game-backpack03": "Balo quân sự",
			"game-bandage": "Túi cứu thương",
			"game-bandage-tooltip": "Bấm chuột trái để hồi 15 máu.",
			"game-healing-tooltip": "Không thể hồi quá 75 máu.",
			"game-healthkit": "Bộ kit cứu thương",
			"game-healthkit-tooltip": "Bấm chuột trái để hồi 100 máu.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Bấm chuột trái để tăng adrenalin lên 25 điểm.",
			"game-adrenaline-tooltip": "Adrenalin hồi phục máu theo thời gian.",
			"game-painkiller": "Thuốc",
			"game-painkiller-tooltip": "Bấm chuột trái để tăng adrenaline lên 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Đạn cho súng M9, MP5, MAC-10, UMP9 và Vector.",
			"game-12gauge": "cỡ 12",
			"game-12gauge-tooltip": "Đạn cho súng M870, Saiga-12 và MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Đạn cho súng AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 và DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Đạn cho súng FAMAS, HK416, Mk 12 và M249.",
			"game-50AE": ".50 AE",
			"game-50AE-tooltip": "Đạn cho súng và Desert Eagle.",
			"game-chest01": "Áo giáp cấp 1",
			"game-chest02": "Áo giáp cấp 2",
			"game-chest03": "Áo giáp cấp 3",
			"game-helmet01": "Mũ cối cấp 1",
			"game-helmet02": "Mũ cối cấp 2",
			"game-helmet03": "Mũ cối cấp 3",
			"game-1xscope": "1x Kính ngắm",
			"game-2xscope": "2x Kính ngắm",
			"game-4xscope": "4x Kính ngắm",
			"game-8xscope": "8x Kính ngắm",
			"game-15xscope": "15x Kính ngắm",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-outfitWoodland": "Woodland Combat",
			"game-outfitJester": "Jester's Folly",
			"game-outfitPrisoner": "The New Black",
			"game-outfitCasanova": "Casanova Silks",
			"game-outfitKhaki": "The Initiative",
			"game-fists": "Nắm đấm",
			"game-ak47": "AK-47",
			"game-scar": "SCAR-H",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-vector": "Vector",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-m9_dual": "Dual M9",
			"game-hud-m9_dual": "M9",
			"game-glock": "Glock 18C",
			"game-glock_dual": "Dual Glock 18C",
			"game-hud-glock_dual": "Glock 18C",
			"game-ot38": "OT-38",
			"game-ot38_dual": "Dual OT-38",
			"game-hud-ot38_dual": "OT-38",
			"game-deagle": "Desert Eagle",
			"game-deagle_dual": "Dual Desert Eagle",
			"game-hud-deagle_dual": "Desert Eagle",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Lựu đạn",
			"game-hud-frag": "Lựu đạn",
			"game-smoke": "Lựu đạn khói",
			"game-hud-smoke": "Lựu đạn cháy",
			"game-barrel_01": "một khẩu súng",
			"game-silo_01": "một chiếc xi lô",
			"game-oven_01": "một chiếc lò nướng",
			"game-control_panel_01": "Bảng điều khiển",
			"game-control_panel_02": "Bảng điều khiển",
			"game-control_panel_03": "một khối đầu cuối máy tính",
			"game-power_box_01": "một chiếc tủ điện"
		};
		e.exports = i
	},
	bkPR: function(e, t, a) {
		"use strict";

		function i(e, t, a, i, o, l) {
			var c = n.items[e],
				m = r.rotate(i, t),
				d = r.mul(m, 9.5);
			d = r.rotate(d, (Math.random() - .5) * Math.PI / 3);
			var p = r.add(a, r.mul(i, n.player.radius + c.particle.shellOffset));
			l.addParticle(s.Defs[c.ammo], o, p, d, c.particle.shellScale, Math.atan2(-m.y, m.x))
		}

		function o() {
			this.shots = []
		}
		var n = (a("gKxX"), a("+0OL")),
			r = (a("0od3"), a("/2+T")),
			s = (a("Tf6H"), a("EZ6M"));
		o.prototype = {
			addShot: function(e, t, a, i, o) {
				for (var s = null, l = 0; l < this.shots.length; l++)
					if (!this.shots[l].active) {
						s = this.shots[l];
						break
					}
				s || (s = {}, this.shots.push(s));
				var c = n.items[i];
				s.active = !0, s.pos = r.copy(e), s.layer = t, s.playerId = a, s.weaponType = i, s.offhand = o, s.ticker = 0, s.pullDelay = void 0 !== c.pullDelay ? .45 * c.pullDelay : 0
			},
			update: function(e, t, a, o, r) {
				for (var s = 0; s < this.shots.length; s++) {
					var l = this.shots[s];
					if (l.active) {
						var c = n.items[l.weaponType];
						if (0 == l.ticker) {
							var m = a.getPlayerById(l.playerId);
							if (r.playSound(c.sound.shoot, {
									channel: l.playerId == t ? "activePlayer" : "otherPlayers",
									soundPos: l.pos,
									layer: m ? m.layer : l.layer,
									muffled: !0
								}), m) {
								if (m.__id == t && "single" == c.fireMode && c.pullDelay) {
									var d = m.localData.weapons[m.localData.curWeapIdx].ammo,
										p = d > 0 ? c.sound.cycle : c.sound.pull;
									r.localActionSoundInstance = r.playSound(p)
								}
								var u = l.offhand || !c.isDual,
									h = !l.offhand || !c.isDual;
								m.addRecoil(c.worldImg.recoil, u, h)
							}
						}
						if (l.ticker += e, l.ticker >= l.pullDelay) {
							var g = a.getPlayerById(l.playerId);
							g && !g.netData.dead && g.netData.curWeapType == l.weaponType && "shoot" == c.caseTiming && i(l.weaponType, Math.PI / 2 * -1, g.netData.pos, g.netData.dir, g.layer, o), l.active = !1
						}
					}
				}
			}
		}, e.exports = {
			createCasingParticle: i,
			ShotBarn: o
		}
	},
	ckCa: function(e, t, a) {
		"use strict";

		function i() {
			var e = {
					fontFamily: "Arial",
					fontWeight: "bold",
					fontSize: d.pixelRatio > 1 ? 30 : 24,
					align: "center",
					fill: 16777215,
					stroke: 0,
					strokeThickness: 0,
					dropShadow: !0,
					dropShadowColor: "#000000",
					dropShadowBlur: 1,
					dropShadowAngle: Math.PI / 3,
					dropShadowDistance: 1
				},
				t = new r.Text("", e);
			return t.anchor.set(.5, .5), t.scale.set(.5, .5), t
		}

		function o() {
			this.active = !1, this.pos = m.create(0, 0), this.container = new r.Container, this.sprite = r.Sprite.fromImage("img/gui/skull.svg"), this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.4, .4), this.sprite.tint = 5921370, this.container.addChild(this.sprite), this.nameText = i(), this.nameText.anchor.set(.5, -1), this.nameText.tint = l.rgb2hex(l.hsv2rgb(0, 0, .5)), this.container.addChild(this.nameText), this.container.visible = this.sprite
		}

		function n(e) {
			this.deadBodyPool = new p.Pool(o)
		}
		var r = (a("DlZn"), a("gKxX")),
			s = a("9xSA"),
			l = (a("+0OL"), a("0od3"), a("Tf6H")),
			c = a("Jr6A"),
			m = a("/2+T"),
			d = a("zinx"),
			p = (a("r4ug"), a("dT1u")),
			u = a("xgte"),
			h = u.RenderType;
		o.prototype = {
			init: function() {},
			free: function() {
				this.container.visible = !1
			},
			updateData: function(e, t, a, i) {
				this.pos = m.copy(e.pos), t && (this.layer = e.layer, this.playerId = e.playerId), a && (this.nameTextSet = !1, this.container.visible = !0)
			}
		}, n.prototype = {
			update: function(e, t, a, i, o, n) {
				for (var r = this.deadBodyPool.getPool(), l = 0; l < r.length; l++) {
					var m = r[l];
					if (m.active) {
						m.nameTextSet || (m.nameTextSet = !0, m.nameText.text = c.htmlUnescape(t.getPlayerInfo(m.playerId).name));
						var d = s.createCircle(m.pos, 1),
							p = i.insideStructureStairs(d),
							u = m.layer,
							g = 12;
						0 == m.layer && 0 == a.layer && p && (u |= 2, g += 100), n.addPIXIObj(m.container, h.DeadBody, u, g, m.__id);
						var f = o.pointToScreen(m.pos),
							y = o.pixels(1);
						m.container.position.set(f.x, f.y), m.container.scale.set(y, y)
					}
				}
			},
			getDeadBodyById: function(e) {
				for (var t = this.deadBodyPool.getPool(), a = 0; a < t.length; a++) {
					var i = t[a];
					if (i.active && i.playerId == e) return i
				}
				return null
			}
		}, e.exports = {
			DeadBodyBarn: n
		}
	},
	dT1u: function(e, t, a) {
		"use strict";

		function i(e) {
			n(void 0 !== e), this.creator = {
				type: e
			}, this.pool = [], this.activeCount = 0
		}

		function o(e) {
			this.idToObj = {}, this.types = {}, this.seenCount = 0
		}
		var n = a("DlZn"),
			r = a("85i3");
		i.prototype = {
			alloc: function() {
				for (var e = null, t = 0; t < this.pool.length; t++)
					if (!this.pool[t].active) {
						e = this.pool[t];
						break
					}
				return e || (e = new this.creator.type, this.pool.push(e)), e.active = !0, e.init(), this.activeCount++, e
			},
			free: function(e) {
				if (e.free(), e.active = !1, this.activeCount--, this.pool.length > 128 && this.activeCount < this.pool.length / 2) {
					for (var t = [], a = 0; a < this.pool.length; a++) this.pool[a].active && t.push(this.pool[a]);
					this.pool = t
				}
			},
			getPool: function() {
				return this.pool
			}
		}, o.prototype = {
			registerType: function(e, t) {
				this.types[e] = t
			},
			getObjById: function(e) {
				return this.idToObj[e]
			},
			getTypeById: function(e, t) {
				var a = this.getObjById(e);
				if (!a) {
					var i = {
						instId: r.instanceId,
						id: e,
						ids: Object.keys(this.idToObj),
						stream: t._view._view
					};
					return r.logError("getTypeById" + JSON.stringify(i)), r.storeGeneric("objectPoolErr", "getTypeById"), 0
				}
				return a.__type
			},
			updateObjFull: function(e, t, a, i) {
				var o = this.getObjById(t),
					n = !1;
				return void 0 === o && (o = this.types[e].alloc(), o.__id = t, o.__type = e, this.idToObj[t] = o, this.seenCount++, n = !0), o.updateData(a, !0, n, i), o
			},
			updateObjPart: function(e, t, a) {
				var i = this.getObjById(e);
				i ? i.updateData(t, !1, !1, a) : (console.log("updateObjPart, missing object", e), r.storeGeneric("objectPoolErr", "updateObjPart"))
			},
			deleteObj: function(e) {
				var t = this.getObjById(e);
				void 0 === t ? (console.log("deleteObj, missing object", e), r.storeGeneric("objectPoolErr", "deleteObj")) : (this.types[t.__type].free(t), delete this.idToObj[e])
			}
		}, e.exports = {
			Pool: i,
			Creator: o
		}
	},
	"eqS/": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-02",
				locale: "tr"
			},
			"word-order": "sov",
			"index-slogan": "2d Battle Royale",
			"index-region": "Bölge",
			"index-north-america": "Kuzey Amerika",
			"index-europe": "Avrupa",
			"index-asia": "Asya",
			"index-players": "oyuncular",
			"index-play-solo": "Tekli oyna",
			"index-play-duo": "İkili oyna",
			"index-play-squad": "Takım oyna",
			"index-create-team": "Takım Oluştur",
			"index-leave-team": "Takımdan Çık",
			"index-joining-team": "Takıma Katılınıyor",
			"index-creating-team": "Takım Oluşturuluyor",
			"index-invite-link": "Davet linki",
			"index-solo": "Tekli",
			"index-duo": "İkili",
			"index-squad": "Takım",
			"index-auto-fill": "Otomatik Oyuncu Seç",
			"index-no-fill": "Otomatik Oyuncu Seçme",
			"index-waiting-for-leader": "Liderin oyunu başlatması bekleniyor",
			"index-play": "Oyna",
			"index-featured-youtuber": "Önerilen Youtuber",
			"index-settings": "Ayarlar",
			"index-high-resolution": "Yüksek Çözünürlük (görsel kaliteyi artırmak için seç)",
			"index-screen-shake": "Ekran sallanması",
			"index-master-volume": "Ana Ses",
			"index-sfx-volume": "Ses Efekti Düzeyi",
			"index-music-volume": "Müzik Sesi",
			"index-mobile-announce": "Şimdi mobilde!",
			"index-mobile-tooltip": "Cihazınızdan <span>surviv.io</span> web sitesine girin!",
			"index-team-is-full": "Takım dolu!",
			"index-failed-joining-team": "Takıma katılım başarısız oldu.",
			"index-failed-creating-team": "Takım oluşturma başarısız oldu.",
			"index-failed-finding-game": "Oyun bulma başarısız oldu.",
			"index-failed-joining-game": "Oyuna katılım başarısız oldu.",
			"index-lost-connection": "Takım bağlantısı koptu.",
			"index-host-closed": "Host bağlantıyı kapattı.",
			"index-invalid-protocol": "Eski istemci sürümü.",
			"index-view-more": "Daha Fazla Gör",
			"index-back-to-main": "Ana Menüye Geri Dön",
			"index-most-kills": "En Çok Öldürmeler",
			"index-total-kills": "Tüm Öldürmeler",
			"index-total-wins": "Tüm Galibiyetler",
			"index-top-5-percent": "En Üst Yüzde 5",
			"index-for": "için",
			"index-kill-death-ratio": "Öldürme-Ölüm oranı",
			"index-today": "Bugün",
			"index-this-week": "Bu Hafta",
			"index-all-time": "Tüm Zamanlar",
			"index-top-100": "En İyi 100",
			"index-rank": "Sıralama",
			"index-player": "Oyuncu",
			"index-total-games": "Tüm oyunlar",
			"index-controls": "Kontroller",
			"index-movement": "Hareket",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Nişan",
			"index-aim-ctrl": "Fare",
			"index-punch": "Yumruk",
			"index-shoot": "Ateş Etme",
			"index-shoot-ctrl": "Sol-Tık",
			"index-change-weapons": "Silah Değiştirme",
			"index-change-weapons-ctrl": "1'den 4'e veya Fare Tekerleği",
			"index-stow-weapons": "Silahları Koy (Yumruk Modu)",
			"index-stow-weapons-ctrl": "3 veya E",
			"index-swap-weapons": "Önceki Silaha Geç",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Yeniden Doldur",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Yakınlaştırma",
			"index-scope-zoom-ctrl": "Yakınlaştırma üzerine sol tıkla",
			"index-pickup": "Al",
			"index-loot": "Yağmala",
			"index-revive": "İyileştir",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Tedavi Eşyası Kullan",
			"index-use-medical-ctrl": "Eşya Üzerine Sol-Tık veya 7'den 0'e kadar",
			"index-drop-item": "Eşyayı At",
			"index-drop-item-ctrl": "Sağ-Tık",
			"index-cancel-action": "Durdur",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Haritayı Göster",
			"index-view-map-ctrl": "M veya G",
			"index-toggle-minimap": "Mini Haritayı Değiştir",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Takım Komut Tekerleğini Kullan",
			"index-use-ping-ctrl": "C'ye basılı tut, sonra Sağ-Tıka basılı tut ve fareyi sürükle, sonra Sağ-Tıkı bırak",
			"index-use-emote": "Emote Tekerini Kullan",
			"index-use-emote-ctrl": "Sağ-Tıka basılı tut ve fareyi sürükle, sonra Sağ-Tıkı bırak",
			"index-how-to-play": "Nasıl Oynanır",
			"index-tips-1-desc": "surviv.io nun amacı son hayatta kalan olmaktır. Bir oyunda sadece bir kere yaşayabilirsin - yeniden doğmka yok!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "Eğer daha önce PUBG, Fortnite veya H1Z1 gibi battle royale oyunlar oynadıysan, sen zaten yolu yarılamışsın! surviv.io'yu 2D PUBG gibi düşün.",
			"index-tips-3": "Yağmala ve Öldür",
			"index-tips-3-desc": "Oyuna basit bir sırt çantası dışında hiçbir öğeyle başlamayacaksın. Ganimet bulmak için haritanın etrafında dolaş: silahlar, cephane, kapsüller ve tıbbi ürünler. Diğer oyuncuları ele ve onların ganimetlerini alabilirsin!",
			"index-tips-4": "Kırmızı = Kötü!",
			"index-tips-4-desc": "Seni incitebilecek tek şey oyuncular değil. Ölümcül kırmızı bölge harita kenarlarından içeri ilerler eğer içene girerseniz giderek daha fazla zarar görürsünüz. Haritaya bakmayı unutma ve güvende kal.",
			"game-alive": "Hayatta",
			"game-reloading": "Yeniden Dolduruluyor",
			"game-using": "Kullanılıyor",
			"game-reviving": "İyileştiriliyor",
			"game-revive-teammate": "Takım Arkadaşını İyileştir",
			"game-equip": "Kuşan",
			"game-cancel": "İptal et",
			"game-open-door": "Kapıyı aç",
			"game-close-door": "Kapıyı kapat",
			"game-You": "Sen",
			"game-you": "sen",
			"game-themselves": "kendisini",
			"game-yourself": "kendini",
			"game-you-died": "Öldün",
			"game-player-died": "öldü",
			"game-with": "ile",
			"game-knocked-out": "düştü",
			"game-killed": "öldürdü",
			"game-finally-killed": "sonunda öldürdü",
			"game-finally-bled-out": "sonunda kan kaybederek öldü",
			"game-died-outside": "güvenli bölgenin dışında öldü",
			"game-the-red-zone": "Kırmızı alan",
			"game-waiting-for-players": "Oyuncular bekleniyor",
			"game-spectating": "İzleniyor",
			"game-red-zone-advances": "Kırmızı alan -the time- içinde geliyor",
			"game-red-zone-advancing": "Kırmızı alan geliyor, güvenli bölgeye git!",
			"game-seconds": "saniyeler",
			"game-minutes": "dakikalar",
			"game-minute": "dakika",
			"game-m": "dk",
			"game-s": "sn",
			"game-not-enough-space": "Yeterli alan yok!",
			"game-item-already-owned": "Eşyaya zaten sahipsin!",
			"game-item-already-equipped": "Eşya zaten kuşanılmış!",
			"game-better-item-equipped": "Daha iyi eşya kuşanıldı!",
			"game-play-new-game": "Yeni Oyun Oyna",
			"game-spectate": "Seyret",
			"game-full-screen": "Tam Ekran",
			"game-sound": "Ses",
			"game-quit-game": "Oyundan Çık",
			"game-return-to-game": "Oyuna Geri Dön",
			"game-hide-match-stats": "Oyun İstatistiklerini Gizle",
			"game-view-match-stats": "Oyun İstatistiklerini Göster",
			"game-previous-teammate": "Önceki Takım Arkadaşı",
			"game-next-teammate": "Sonraki Takım Arkadaşı",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Oyundan Ayrıl",
			"game-your-results": "Skorun",
			"game-chicken": "Hadi yine iyisin akşama tavuk var!",
			"game-won-the-game": "oyunu kazandı",
			"game-team-eliminated": "Takımınız yenildi.",
			"game-rank": "Sıralama",
			"game-team-rank": "Takım Sırası",
			"game-team-kills": "Takım Öldürmeleri",
			"game-kill": "Öldürme",
			"game-kills": "Öldürme",
			"game-damage-dealt": "Verilen Hasar",
			"game-damage-taken": "Alınan Hasar",
			"game-survived": "Hayatta Kaldı",
			"game-backpack00": "Torba",
			"game-backpack01": "Küçük Çanta",
			"game-backpack02": "Normal Çanta",
			"game-backpack03": "Askeri Çanta",
			"game-bandage": "Bandaj",
			"game-bandage-tooltip": "15 sağlık iyileşmek için sol tıkla.",
			"game-healing-tooltip": "75 sağlıktan sonra iyileştiremez.",
			"game-healthkit": "İlk Yardım Seti",
			"game-healthkit-tooltip": "100 sağlık iyileşmek için sol tıkla.",
			"game-soda": "Soda",
			"game-soda-tooltip": "25 adrenalin basmak için sol tıkla.",
			"game-adrenaline-tooltip": "Adrenalin, zamanla sağlığı düzeltir.",
			"game-painkiller": "Haplar",
			"game-painkiller-tooltip": "50 adrenalin basmak için sol tıkla.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "M9, Glock, MP5, MAC-10, UMP9 ve Vector için cephane.",
			"game-12gauge": "12 kalibre",
			"game-12gauge-tooltip": "M870, Saiga-12 ve MP220 için cephane.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 ve DP-28 için cephane.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12 ve M249 için cephane.",
			"game-chest01": "Seviye 1 Zırh",
			"game-chest02": "Seviye 2 Zırh",
			"game-chest03": "Seviye 3 Zırh",
			"game-helmet01": "Seviye 1 Kask",
			"game-helmet02": "Seviye 2 Kask",
			"game-helmet03": "Seviye 3 Kask",
			"game-1xscope": "1x Dürbün",
			"game-2xscope": "2x Dürbün",
			"game-4xscope": "4x Dürbün",
			"game-8xscope": "8x Dürbün",
			"game-15xscope": "15x Dürbün",
			"game-level-1": "Svy. 1",
			"game-level-2": "Svy. 2",
			"game-level-3": "Svy. 3",
			"game-outfitBase": "Basit Kıyafet",
			"game-outfitWoodland": "Orman Savaşı",
			"game-outfitRoyalFortune": "Asil Servet",
			"game-outfitKeyLime": "Misket Limonu",
			"game-outfitCobaltShell": "Kobalt Kabuğu",
			"game-outfitCarbonFiber": "Karbonfiber",
			"game-outfitDarkGloves": "Profosyonel",
			"game-outfitGhillie": "Komando",
			"game-outfitCamo": "Kamuflaj",
			"game-outfitRed": "Atış Talimi",
			"game-outfitWhite": "Buzul Yenilmezi",
			"game-fists": "Yumruk",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "El Bombası",
			"game-hud-frag": "El Bombası",
			"game-smoke": "Sis Bombası",
			"game-hud-smoke": "Sis Bombası",
			"game-barrel_01": "Varil",
			"game-silo_01": "Ambar",
			"game-oven_01": "ocak"
		};
		e.exports = i
	},
	fWTV: function(e, t, a) {
		"use strict";

		function i() {
			this.acceptedLocales = ["da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "pl", "pt", "ru", "sv", "th", "tr", "vn", "zh-cn", "zh-tw"], this.translations = {};
			for (var e = 0; e < this.acceptedLocales.length; e++) {
				var t = this.acceptedLocales[e],
					i = {};
				try {
					i = a("+sac")("./" + t + ".js")
				} catch (e) {
					console.log("localization not found", t)
				}
				this.translations[t] = i
			}
			this.locale = "en"
		}
		var o = a("juYr"),
			n = a("zinx");
		i.prototype = {
			setLocale: function(e) {
				this.locale = -1 != this.acceptedLocales.indexOf(e) ? e : "en"
			},
			getLocale: function() {
				return this.locale
			},
			translate: function(e) {
				return this.translations[this.locale][e] || this.translations.en[e] || ""
			},
			localizeIndex: function() {
				var e = this;
				o("*[data-l10n]").each(function(t, a) {
					var i = o(a),
						r = i.attr("data-l10n");
					i.hasClass("help-control") && n.touch && (r += "-touch");
					var s = e.translate(r);
					if (s) {
						if (i.attr("label")) return i.attr("label", s), !0;
						i.html(s), i.attr("data-label") && i.attr("data-label", s)
					}
				})
			}
		}, e.exports = i
	},
	gaH8: function(e, t) {
		! function(e) {
			if (!e.hasInitialised) {
				var t = {
					escapeRegExp: function(e) {
						return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
					},
					hasClass: function(e, t) {
						var a = " ";
						return 1 === e.nodeType && (a + e.className + a).replace(/[\n\t]/g, a).indexOf(a + t + a) >= 0
					},
					addClass: function(e, t) {
						e.className += " " + t
					},
					removeClass: function(e, t) {
						var a = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
						e.className = e.className.replace(a, "")
					},
					interpolateString: function(e, t) {
						var a = /{{([a-z][a-z0-9\-_]*)}}/gi;
						return e.replace(a, function(e) {
							return t(arguments[1]) || ""
						})
					},
					getCookie: function(e) {
						var t = "; " + document.cookie,
							a = t.split("; " + e + "=");
						return 2 != a.length ? void 0 : a.pop().split(";").shift()
					},
					setCookie: function(e, t, a, i, o) {
						var n = new Date;
						n.setDate(n.getDate() + (a || 365));
						var r = [e + "=" + t, "expires=" + n.toUTCString(), "path=" + (o || "/")];
						i && r.push("domain=" + i), document.cookie = r.join(";")
					},
					deepExtend: function(e, t) {
						for (var a in t) t.hasOwnProperty(a) && (a in e && this.isPlainObject(e[a]) && this.isPlainObject(t[a]) ? this.deepExtend(e[a], t[a]) : e[a] = t[a]);
						return e
					},
					throttle: function(e, t) {
						var a = !1;
						return function() {
							a || (e.apply(this, arguments), a = !0, setTimeout(function() {
								a = !1
							}, t))
						}
					},
					hash: function(e) {
						var t, a, i, o = 0;
						if (0 === e.length) return o;
						for (t = 0, i = e.length; t < i; ++t) a = e.charCodeAt(t), o = (o << 5) - o + a, o |= 0;
						return o
					},
					normaliseHex: function(e) {
						return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
					},
					getContrast: function(e) {
						return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
					},
					getLuminance: function(e) {
						var t = parseInt(this.normaliseHex(e), 16),
							a = 38 + (t >> 16),
							i = 38 + (t >> 8 & 255),
							o = 38 + (255 & t);
						return "#" + (16777216 + 65536 * (a < 255 ? a < 1 ? 0 : a : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
					},
					isMobile: function() {
						return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
					},
					isPlainObject: function(e) {
						return "object" == typeof e && null !== e && e.constructor == Object
					}
				};
				e.status = {
					deny: "deny",
					allow: "allow",
					dismiss: "dismiss"
				}, e.transitionEnd = function() {
					var e = document.createElement("div"),
						t = {
							t: "transitionend",
							OT: "oTransitionEnd",
							msT: "MSTransitionEnd",
							MozT: "transitionend",
							WebkitT: "webkitTransitionEnd"
						};
					for (var a in t)
						if (t.hasOwnProperty(a) && void 0 !== e.style[a + "ransition"]) return t[a];
					return ""
				}(), e.hasTransition = !!e.transitionEnd;
				var a = Object.keys(e.status).map(t.escapeRegExp);
				e.customStyles = {}, e.Popup = function() {
					function i() {
						this.initialise.apply(this, arguments)
					}

					function o(e) {
						this.openingTimeout = null, t.removeClass(e, "cc-invisible")
					}

					function n(t) {
						t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
					}

					function r() {
						var t = this.options.onInitialise.bind(this);
						if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
						if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
						var a = Object.keys(e.status),
							i = this.getStatus(),
							o = a.indexOf(i) >= 0;
						return o && t(i), o
					}

					function s() {
						var e = this.options.position.split("-"),
							t = [];
						return e.forEach(function(e) {
							t.push("cc-" + e)
						}), t
					}

					function l() {
						var e = this.options,
							a = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
						t.isMobile() && (a = "floating");
						var i = ["cc-" + a, "cc-type-" + e.type, "cc-theme-" + e.theme];
						e.static && i.push("cc-static"), i.push.apply(i, s.call(this));
						p.call(this, this.options.palette);
						return this.customStyleSelector && i.push(this.customStyleSelector), i
					}

					function c() {
						var e = {},
							a = this.options;
						a.showLink || (a.elements.link = "", a.elements.messagelink = a.elements.message), Object.keys(a.elements).forEach(function(i) {
							e[i] = t.interpolateString(a.elements[i], function(e) {
								var t = a.content[e];
								return e && "string" == typeof t && t.length ? t : ""
							})
						});
						var i = a.compliance[a.type];
						i || (i = a.compliance.info), e.compliance = t.interpolateString(i, function(t) {
							return e[t]
						});
						var o = a.layouts[a.layout];
						return o || (o = a.layouts.basic), t.interpolateString(o, function(t) {
							return e[t]
						})
					}

					function m(a) {
						var i = this.options,
							o = document.createElement("div"),
							n = i.container && 1 === i.container.nodeType ? i.container : document.body;
						o.innerHTML = a;
						var r = o.children[0];
						return r.style.display = "none", t.hasClass(r, "cc-window") && e.hasTransition && t.addClass(r, "cc-invisible"), this.onButtonClick = d.bind(this), r.addEventListener("click", this.onButtonClick), i.autoAttach && (n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r)), r
					}

					function d(i) {
						var o = i.target;
						if (t.hasClass(o, "cc-btn")) {
							var n = o.className.match(new RegExp("\\bcc-(" + a.join("|") + ")\\b")),
								r = n && n[1] || !1;
							r && (this.setStatus(r), this.close(!0))
						}
						t.hasClass(o, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(o, "cc-revoke") && this.revokeChoice()
					}

					function p(e) {
						var a = t.hash(JSON.stringify(e)),
							i = "cc-color-override-" + a,
							o = t.isPlainObject(e);
						return this.customStyleSelector = o ? i : null, o && u(a, e, "." + i), o
					}

					function u(a, i, o) {
						if (e.customStyles[a]) return void++e.customStyles[a].references;
						var n = {},
							r = i.popup,
							s = i.button,
							l = i.highlight;
						r && (r.text = r.text ? r.text : t.getContrast(r.background), r.link = r.link ? r.link : r.text, n[o + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], n[o + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], n[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + r.link], s && (s.text = s.text ? s.text : t.getContrast(s.background), s.border = s.border ? s.border : "transparent", n[o + " .cc-btn"] = ["color: " + s.text, "border-color: " + s.border, "background-color: " + s.background], "transparent" != s.background && (n[o + " .cc-btn:hover, " + o + " .cc-btn:focus"] = ["background-color: " + h(s.background)]), l ? (l.text = l.text ? l.text : t.getContrast(l.background), l.border = l.border ? l.border : "transparent", n[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : n[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
						var c = document.createElement("style");
						document.head.appendChild(c), e.customStyles[a] = {
							references: 1,
							element: c.sheet
						};
						var m = -1;
						for (var d in n) n.hasOwnProperty(d) && c.sheet.insertRule(d + "{" + n[d].join(";") + "}", ++m)
					}

					function h(e) {
						return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
					}

					function g(a) {
						if (t.isPlainObject(a)) {
							var i = t.hash(JSON.stringify(a)),
								o = e.customStyles[i];
							if (o && !--o.references) {
								var n = o.element.ownerNode;
								n && n.parentNode && n.parentNode.removeChild(n), e.customStyles[i] = null
							}
						}
					}

					function f(e, t) {
						for (var a = 0, i = e.length; a < i; ++a) {
							var o = e[a];
							if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
						}
						return !1
					}

					function y() {
						var t = this.setStatus.bind(this),
							a = this.options.dismissOnTimeout;
						"number" == typeof a && a >= 0 && (this.dismissTimeout = window.setTimeout(function() {
							t(e.status.dismiss)
						}, Math.floor(a)));
						var i = this.options.dismissOnScroll;
						if ("number" == typeof i && i >= 0) {
							var o = function(a) {
								window.pageYOffset > Math.floor(i) && (t(e.status.dismiss), window.removeEventListener("scroll", o), this.onWindowScroll = null)
							};
							this.onWindowScroll = o, window.addEventListener("scroll", o)
						}
					}
					var b = {
						enabled: !0,
						container: null,
						cookie: {
							name: "cookieconsent_status",
							path: "/",
							domain: "",
							expiryDays: 365
						},
						onPopupOpen: function() {},
						onPopupClose: function() {},
						onInitialise: function(e) {},
						onStatusChange: function(e, t) {},
						onRevokeChoice: function() {},
						content: {
							header: "Cookies used on the website!",
							message: "This website uses cookies to ensure you get the best experience on our website.",
							dismiss: "Got it!",
							allow: "Allow cookies",
							deny: "Decline",
							link: "Learn more",
							href: "http://cookiesandyou.com",
							close: "&#x274c;"
						},
						elements: {
							header: '<span class="cc-header">{{header}}</span>&nbsp;',
							message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
							messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
							dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
							allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
							deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
							link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
							close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
						},
						window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
						revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
						compliance: {
							info: '<div class="cc-compliance">{{dismiss}}</div>',
							"opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
							"opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
						},
						type: "info",
						layouts: {
							basic: "{{messagelink}}{{compliance}}",
							"basic-close": "{{messagelink}}{{compliance}}{{close}}",
							"basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
						},
						layout: "basic",
						position: "bottom",
						theme: "block",
						static: !1,
						palette: null,
						revokable: !1,
						animateRevokable: !0,
						showLink: !0,
						dismissOnScroll: !1,
						dismissOnTimeout: !1,
						autoOpen: !0,
						autoAttach: !0,
						whitelistPage: [],
						blacklistPage: [],
						overrideHTML: null
					};
					return i.prototype.initialise = function(e) {
						this.options && this.destroy(), t.deepExtend(this.options = {}, b), t.isPlainObject(e) && t.deepExtend(this.options, e), r.call(this) && (this.options.enabled = !1), f(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), f(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
						var a = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", c.call(this)),
							i = this.options.overrideHTML;
						if ("string" == typeof i && i.length && (a = i), this.options.static) {
							var o = m.call(this, '<div class="cc-grower">' + a + "</div>");
							o.style.display = "", this.element = o.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
						} else this.element = m.call(this, a);
						y.call(this), this.options.autoOpen && this.autoOpen()
					}, i.prototype.destroy = function() {
						this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, g(this.options.palette), this.options = null
					}, i.prototype.open = function(t) {
						if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
					}, i.prototype.close = function(t) {
						if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
					}, i.prototype.fadeIn = function() {
						var a = this.element;
						if (e.hasTransition && a && (this.afterTransition && n.call(this, a), t.hasClass(a, "cc-invisible"))) {
							if (a.style.display = "", this.options.static) {
								var i = this.element.clientHeight;
								this.element.parentNode.style.maxHeight = i + "px"
							}
							this.openingTimeout = setTimeout(o.bind(this, a), 20)
						}
					}, i.prototype.fadeOut = function() {
						var a = this.element;
						e.hasTransition && a && (this.openingTimeout && (clearTimeout(this.openingTimeout), o.bind(this, a)), t.hasClass(a, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = n.bind(this, a), a.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(a, "cc-invisible")))
					}, i.prototype.isOpen = function() {
						return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
					}, i.prototype.toggleRevokeButton = function(e) {
						this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
					}, i.prototype.revokeChoice = function(e) {
						this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
					}, i.prototype.hasAnswered = function(t) {
						return Object.keys(e.status).indexOf(this.getStatus()) >= 0
					}, i.prototype.hasConsented = function(t) {
						var a = this.getStatus();
						return a == e.status.allow || a == e.status.dismiss
					}, i.prototype.autoOpen = function(e) {
						!this.hasAnswered() && this.options.enabled && this.open()
					}, i.prototype.setStatus = function(a) {
						var i = this.options.cookie,
							o = t.getCookie(i.name),
							n = Object.keys(e.status).indexOf(o) >= 0;
						Object.keys(e.status).indexOf(a) >= 0 ? (t.setCookie(i.name, a, i.expiryDays, i.domain, i.path), this.options.onStatusChange.call(this, a, n)) : this.clearStatus()
					}, i.prototype.getStatus = function() {
						return t.getCookie(this.options.cookie.name)
					}, i.prototype.clearStatus = function() {
						var e = this.options.cookie;
						t.setCookie(e.name, "", -1, e.domain, e.path)
					}, i
				}(), e.Location = function() {
					function e(e) {
						t.deepExtend(this.options = {}, n), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
					}

					function a(e, t, a) {
						var i, o = document.createElement("script");
						o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
							var e = o.readyState;
							clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
						}, document.body.appendChild(o), i = setTimeout(function() {
							t.done = !0, t(), o.onreadystatechange = o.onload = null
						}, a)
					}

					function i(e, t, a, i, o) {
						var n = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
						if (n.open(i ? "POST" : "GET", e, 1), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
							for (var r = 0, s = o.length; r < s; ++r) {
								var l = o[r].split(":", 2);
								n.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
							}
						"function" == typeof t && (n.onreadystatechange = function() {
							n.readyState > 3 && t(n)
						}), n.send(i)
					}

					function o(e) {
						return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
					}
					var n = {
						timeout: 5e3,
						services: ["freegeoip", "ipinfo", "maxmind"],
						serviceDefinitions: {
							freegeoip: function() {
								return {
									url: "//freegeoip.net/json/?callback={callback}",
									isScript: !0,
									callback: function(e, t) {
										try {
											var a = JSON.parse(t);
											return a.error ? o(a) : {
												code: a.country_code
											}
										} catch (e) {
											return o({
												error: "Invalid response (" + e + ")"
											})
										}
									}
								}
							},
							ipinfo: function() {
								return {
									url: "//ipinfo.io",
									headers: ["Accept: application/json"],
									callback: function(e, t) {
										try {
											var a = JSON.parse(t);
											return a.error ? o(a) : {
												code: a.country
											}
										} catch (e) {
											return o({
												error: "Invalid response (" + e + ")"
											})
										}
									}
								}
							},
							ipinfodb: function(e) {
								return {
									url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
									isScript: !0,
									callback: function(e, t) {
										try {
											var a = JSON.parse(t);
											return "ERROR" == a.statusCode ? o({
												error: a.statusMessage
											}) : {
												code: a.countryCode
											}
										} catch (e) {
											return o({
												error: "Invalid response (" + e + ")"
											})
										}
									}
								}
							},
							maxmind: function() {
								return {
									url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
									isScript: !0,
									callback: function(e) {
										if (!window.geoip2) return void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"));
										geoip2.country(function(t) {
											try {
												e({
													code: t.country.iso_code
												})
											} catch (t) {
												e(o(t))
											}
										}, function(t) {
											e(o(t))
										})
									}
								}
							}
						}
					};
					return e.prototype.getNextService = function() {
						var e;
						do {
							e = this.getServiceByIdx(++this.currentServiceIndex)
						} while (this.currentServiceIndex < this.options.services.length && !e);
						return e
					}, e.prototype.getServiceByIdx = function(e) {
						var a = this.options.services[e];
						if ("function" == typeof a) {
							var i = a();
							return i.name && t.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i
						}
						return "string" == typeof a ? this.options.serviceDefinitions[a]() : t.isPlainObject(a) ? this.options.serviceDefinitions[a.name](a) : null
					}, e.prototype.locate = function(e, t) {
						var a = this.getNextService();
						if (!a) return void t(new Error("No services to run"));
						this.callbackComplete = e, this.callbackError = t, this.runService(a, this.runNextServiceOnError.bind(this))
					}, e.prototype.setupUrl = function(e) {
						var t = this.getCurrentServiceOpts();
						return e.url.replace(/\{(.*?)\}/g, function(a, i) {
							if ("callback" === i) {
								var o = "callback" + Date.now();
								return window[o] = function(t) {
									e.__JSONP_DATA = JSON.stringify(t)
								}, o
							}
							if (i in t.interpolateUrl) return t.interpolateUrl[i]
						})
					}, e.prototype.runService = function(e, t) {
						var o = this;
						if (e && e.url && e.callback) {
							(e.isScript ? a : i)(this.setupUrl(e), function(a) {
								var i = a ? a.responseText : "";
								e.__JSONP_DATA && (i = e.__JSONP_DATA, delete e.__JSONP_DATA), o.runServiceCallback.call(o, t, e, i)
							}, this.options.timeout, e.data, e.headers)
						}
					}, e.prototype.runServiceCallback = function(e, t, a) {
						var i = this,
							o = function(t) {
								n || i.onServiceResult.call(i, e, t)
							},
							n = t.callback(o, a);
						n && this.onServiceResult.call(this, e, n)
					}, e.prototype.onServiceResult = function(e, t) {
						t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
					}, e.prototype.runNextServiceOnError = function(e, t) {
						if (e) {
							this.logError(e);
							var a = this.getNextService();
							a ? this.runService(a, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
						} else this.completeService.call(this, this.callbackComplete, t)
					}, e.prototype.getCurrentServiceOpts = function() {
						var e = this.options.services[this.currentServiceIndex];
						return "string" == typeof e ? {
							name: e
						} : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
					}, e.prototype.completeService = function(e, t) {
						this.currentServiceIndex = -1, e && e(t)
					}, e.prototype.logError = function(e) {
						var t = this.currentServiceIndex,
							a = this.getServiceByIdx(t);
						console.error("The service[" + t + "] (" + a.url + ") responded with the following error", e)
					}, e
				}(), e.Law = function() {
					function e(e) {
						this.initialise.apply(this, arguments)
					}
					var a = {
						regionalLaw: !0,
						hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
						revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
						explicitAction: ["HR", "IT", "ES"]
					};
					return e.prototype.initialise = function(e) {
						t.deepExtend(this.options = {}, a), t.isPlainObject(e) && t.deepExtend(this.options, e)
					}, e.prototype.get = function(e) {
						var t = this.options;
						return {
							hasLaw: t.hasLaw.indexOf(e) >= 0,
							revokable: t.revokable.indexOf(e) >= 0,
							explicitAction: t.explicitAction.indexOf(e) >= 0
						}
					}, e.prototype.applyLaw = function(e, t) {
						var a = this.get(t);
						return a.hasLaw || (e.enabled = !1), this.options.regionalLaw && (a.revokable && (e.revokable = !0), a.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
					}, e
				}(), e.initialise = function(t, a, i) {
					var o = new e.Law(t.law);
					a || (a = function() {}), i || (i = function() {}), e.getCountryCode(t, function(i) {
						delete t.law, delete t.location, i.code && (t = o.applyLaw(t, i.code)), a(new e.Popup(t))
					}, function(a) {
						delete t.law, delete t.location, i(a, new e.Popup(t))
					})
				}, e.getCountryCode = function(t, a, i) {
					if (t.law && t.law.countryCode) return void a({
						code: t.law.countryCode
					});
					if (t.location) {
						return void new e.Location(t.location).locate(function(e) {
							a(e || {})
						}, i)
					}
					a({})
				}, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
			}
		}(window.cookieconsent || {})
	},
	gtMM: function(e, t, a) {
		"use strict";

		function i(e) {
			c(e >= 0);
			var t = [];
			do {
				t.push(m[e % d]), e = Math.floor(e / d)
			} while (e > 0);
			return t.reverse().join("")
		}

		function o(e) {
			for (var t = 0, a = 0; a < e.length; a++) t = t * d + m.indexOf(e.charAt(a));
			return t
		}

		function n(e, t) {
			return c(e >= 0 && e < 16), c(t >= 0 && t < 134217728), i(t << 4 | 15 & e)
		}

		function r(e) {
			var t = o(e);
			return {
				appId: 15 & t,
				roomId: t >> 4
			}
		}

		function s(e) {
			return ("00" + e).slice(-2)
		}

		function l(e) {
			return Math.min((Math.pow(d, e) >> 4) - 1, 134217727)
		}
		var c = a("DlZn"),
			m = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789".split(""),
			d = m.length;
		e.exports = {
			encodeUrl: n,
			decodeUrl: r,
			appIdToString: s,
			maxRoomId: l
		}
	},
	"j5/T": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-17",
				locale: "da"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Region",
			"index-north-america": "Nord Amerika",
			"index-europe": "Europa",
			"index-asia": "Asien",
			"index-players": "Spillere",
			"index-play-solo": "Spil Solo",
			"index-play-duo": "Spil Duo",
			"index-play-squad": "Spil Hold",
			"index-create-team": "Lav Hold",
			"index-how-to-play": "Sådan spiller du",
			"index-leave-team": "Forlad Hold",
			"index-joining-team": "Tilslutter Til Hold",
			"index-creating-team": "Laver Hold",
			"index-invite-link": "Inviter Link",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Hold",
			"index-auto-fill": "Auto Fyld",
			"index-no-fill": "Ingen Fyld",
			"index-waiting-for-leader": "Venter på at lederen starter spillet",
			"index-play": "Spil",
			"index-featured-youtuber": "Udvalgt Youtuber",
			"index-settings": "Indstillinger",
			"index-high-resolution": "Høj opløsning (Tjek for at øge visuel kvalitet)",
			"index-screen-shake": "Skærm rystning",
			"index-master-volume": "Master Volume",
			"index-sfx-volume": "SFX Volume",
			"index-music-volume": "Music Volume",
			"index-mobile-announce": "Nu tilgængelig på mobil!",
			"index-mobile-tooltip": "Besøg <span>surviv.io</span> på din mobil for at spille på farten!",
			"index-team-is-full": "Holdet er fuldt!",
			"index-failed-joining-team": "Mislykkes at tilslutte til hold.",
			"index-failed-creating-team": "Mislykkes at oprette et hold.",
			"index-failed-finding-game": "Mislykkes at finde et spil.",
			"index-failed-joining-game": "Mislykkes at tilslutte til spil.",
			"index-lost-connection": "Mistede forbindelse til hold.",
			"index-host-closed": "Vært lukkede forbindelsen.",
			"index-view-more": "Vis mere",
			"index-back-to-main": "Tilbage til Hovedmenuen",
			"index-most-kills": "Flest Drab",
			"index-total-kills": "Total Drab",
			"index-total-wins": "Total Kampe Vundet",
			"index-top-5-percent": "Top 5 procent",
			"index-kill-death-ratio": "Drab-Død Forhold",
			"index-for": "For",
			"index-today": "Idag",
			"index-this-week": "Denne Uge",
			"index-all-time": "Altid",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Spiller",
			"index-total-games": "Spil tilsammen",
			"index-controls": "Taster",
			"index-movement": "Bevægelse",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Sigt",
			"index-aim-ctrl": "Mus",
			"index-punch": "Slå",
			"index-shoot": "Skyd",
			"index-shoot-ctrl": "Venstre-Klik",
			"index-change-weapons": "Skift Våben",
			"index-change-weapons-ctrl": "1 igennem 4 eller musehjul",
			"index-stow-weapons": "Gem Våben (Slå Tilstand)",
			"index-stow-weapons-ctrl": "3 eller E",
			"index-swap-weapons": "Skift til Sidst anvendet våben",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Genlad",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Sigtekorns Zoom",
			"index-scope-zoom-ctrl": "Venstre-Klik for at Zoome",
			"index-pickup": "Saml op",
			"index-loot": "Bytte",
			"index-revive": "Genoplev",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Brug Medicinsk Genstand",
			"index-use-medical-ctrl": "Venstre-Klik på Genstand eller 7 igennem 0",
			"index-drop-item": "Smid Bytte",
			"index-drop-item-ctrl": "Højre-Klik på Bytte",
			"index-cancel-action": "Annuler Handling",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Vis Kort",
			"index-view-map-ctrl": "M eller G",
			"index-toggle-minimap": "Slå Kort Til/Fra",
			"index-toggle-minimap-ctrl": "V",
			"game-alive": "I Live",
			"game-reloading": "Genlader",
			"game-using": "Bruger",
			"game-reviving": "Genoplever",
			"game-revive-teammate": "Genoplever Holdkammerat",
			"game-equip": "Udstyr",
			"game-cancel": "Annuller",
			"game-You": "Du",
			"game-you": "dig",
			"game-themselves": "dem selv",
			"game-yourself": "dig selv",
			"game-you-died": "døde",
			"game-player-died": "døde",
			"game-with": "med",
			"game-knocked-out": "slog",
			"game-killed": "dræbte",
			"game-finally-killed": "dræbte endeligt",
			"game-finally-bled-out": "blødte endeligt ud",
			"game-died-outside": "døde udenfor den sikre zone",
			"game-the-red-zone": "Den røde zone",
			"game-waiting-for-players": "Venter på spillere",
			"game-spectating": "Tilskuer",
			"game-red-zone-advances": "Rød zone rykker om",
			"game-red-zone-advancing": "Rød zone rykker, kom til den sikre zone",
			"game-seconds": "sekunder",
			"game-minutes": "minutter",
			"game-minute": "minut",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Ikke nok plads!",
			"game-item-already-owned": "Du har allerede denne genstand!",
			"game-item-already-equipped": "Genstand allerede udstyret!",
			"game-better-item-equipped": "Bedre genstand allerede udstyret!",
			"game-play-new-game": "Spil Nyt Spil",
			"game-spectate": "Tilskuer",
			"game-full-screen": "Fuld Skærm",
			"game-sound": "Lyd",
			"game-quit-game": "Forlad Spil",
			"game-return-to-game": "Tilbage Til Spillet",
			"game-hide-match-stats": "Gem Kamp Statistikken",
			"game-view-match-stats": "Vis Kamp Statistikken",
			"game-previous-teammate": "Forrige Holdkammerat",
			"game-next-teammate": "Næste Holdkammerat",
			"game-spectate-previous": "Forrige",
			"game-spectate-next": "Næste",
			"game-leave-game": "Forlad Spil",
			"game-your-results": "Dine Resultater",
			"game-chicken": "Vinder Vinder Kyllinge Middag!",
			"game-won-the-game": "Vandt Spillet.",
			"game-team-eliminated": "Din Holdkammerat blev dræbt.",
			"game-rank": "Rang",
			"game-team-rank": "Hold Rang",
			"game-team-kills": "Hold Drab",
			"game-kill": "Drab",
			"game-kills": "Drab",
			"game-damage-dealt": "Skade Gjort",
			"game-damage-taken": "Skade Taget",
			"game-survived": "Overlevet",
			"game-backpack00": "Pose",
			"game-backpack01": "Lille Taske",
			"game-backpack02": "Normal Taske",
			"game-backpack03": "Militær rygsæk",
			"game-bandage": "Bandage",
			"game-bandage-tooltip": "Venstre-Klik for at gendanne 15 Liv.",
			"game-healing-tooltip": "Kan ikke gendanne mere end 75 Liv.",
			"game-healthkit": "Førstehjælpskasse",
			"game-healthkit-tooltip": "Venstre-Klik for at gendanne 100 Liv.",
			"game-soda": "Sodavand",
			"game-soda-tooltip": "Venstre-Klik for at løfte adrenalinen med 25.",
			"game-adrenaline-tooltip": "Adrenalinen gendanner liv over tid.",
			"game-painkiller": "Piller",
			"game-painkiller-tooltip": "Venstre-klik for at løfte adrenalinen med 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Ammo for M9, Glock, MP5, MAC-10, UMP9 og Vector.",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "Ammo for M870, Saiga-12 og MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 og DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Ammo for FAMAS, HK416, Mk 12 og M249.",
			"game-chest01": "Level 1 Vest",
			"game-chest02": "Level 2 Vest",
			"game-chest03": "Level 3 Vest",
			"game-helmet01": "Level 1 Hjelm",
			"game-helmet02": "Level 2 Hjelm",
			"game-helmet03": "Level 3 Hjelm",
			"game-1xscope": "1x Sigte",
			"game-2xscope": "2x Sigte",
			"game-4xscope": "4x Sigte",
			"game-8xscope": "8x Sigte",
			"game-15xscope": "15x Sigte",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basis Tøj",
			"game-outfitRoyalFortune": "Royal Rigdom",
			"game-outfitKeyLime": "Nøgle Lime",
			"game-outfitCobaltShell": "Kobalt Skal",
			"game-outfitCarbonFiber": "Kulstof Fiber",
			"game-outfitDarkGloves": "Den Professionelle",
			"game-outfitGhillie": "Ghillie Dragt",
			"game-outfitCamo": "Skov Kamo",
			"game-outfitRed": "Mål Øvelse",
			"game-outfitWhite": "Arktisk Hævner",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-barrel_01": "En Tønde",
			"game-silo_01": "En Silo"
		};
		e.exports = i
	},
	kIX4: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-02-06",
				locale: "zh-tw"
			},
			"word-order": "svo",
			"index-slogan": "2d大逃殺",
			"index-region": "地區",
			"index-north-america": "北美",
			"index-europe": "歐洲",
			"index-asia": "亞洲",
			"index-players": "玩家",
			"index-play-solo": "單人",
			"index-play-duo": "雙人",
			"index-play-squad": "4人",
			"index-create-team": "創立隊伍",
			"index-join-team": "加入隊伍",
			"index-how-to-play": "如何玩",
			"index-leave-team": "離開聯隊",
			"index-joining-team": "加入隊伍中",
			"index-creating-team": "建立隊伍中",
			"index-invite-link": "邀請的連結",
			"index-solo": "單人",
			"index-duo": "兩人",
			"index-squad": "聯隊",
			"index-auto-fill": "自動找玩家加入",
			"index-no-fill": "不加入隨機玩家",
			"index-waiting-for-leader": "等待隊長開始遊戲",
			"index-play": "開始",
			"index-featured-youtuber": "推薦的YouTube客",
			"index-settings": "設定",
			"index-high-resolution": "高解像度(提升畫面質素)",
			"index-screen-shake": "營幕震動",
			"index-team-is-full": "團隊已滿!",
			"index-failed-joining-team": "加入隊伍失敗。",
			"index-failed-creating-team": "創立隊伍失敗。",
			"index-failed-finding-game": "尋找隊伍失敗。",
			"index-failed-joining-game": "加入遊戲失敗。",
			"index-lost-connection": "和隊伍失去連接。",
			"index-host-closed": "伺服器關了連接。",
			"index-invalid-protocol": "舊版客戶端,請按F5更新.",
			"index-view-more": "查看更多",
			"index-back-to-main": "回到主畫面",
			"index-most-kills": "殺敵最多",
			"index-total-kills": "總殺數",
			"index-total-wins": "總贏數",
			"index-top-5-percent": "前5%",
			"index-kill-death-ratio": "殺敵和生還比例",
			"index-for": "For",
			"index-today": "今日",
			"index-this-week": "這個禮拜",
			"index-all-time": "所有時間",
			"index-top-100": "前一百",
			"index-rank": "排名",
			"index-player": "玩家",
			"index-total-games": "總遊戲數",
			"index-controls": "控制",
			"index-movement": "運動",
			"index-movement-ctrl": "W, A, S, D鍵",
			"index-aim": "瞄準",
			"index-aim-ctrl": "鼠標",
			"index-punch": "出拳",
			"index-shoot": "射擊",
			"index-shoot-ctrl": "滑鼠左鍵",
			"index-change-weapons": "更換武器",
			"index-change-weapons-ctrl": "1 到 4或滾輪",
			"index-stow-weapons": "收起武器(拳擊模式)",
			"index-stow-weapons-ctrl": "3或E鍵",
			"index-swap-weapons": "換到之前的武器",
			"index-swap-weapons-ctrl": "Q掣",
			"index-reload": "裝子彈",
			"index-reload-ctrl": "R掣",
			"index-scope-zoom": "變焦範圍",
			"index-scope-zoom-ctrl": "左鍵單擊放大",
			"index-pickup": "拾起",
			"index-loot": "戰利品",
			"index-revive": "恢復",
			"index-pickup-ctrl": "F鍵",
			"index-use-medical": "使用醫療物品",
			"index-use-medical-ctrl": "左鍵單擊物品或7 到 0",
			"index-drop-item": "丟棄物品",
			"index-drop-item-ctrl": "右鍵單擊物品",
			"index-cancel-action": "取消操作",
			"index-cancel-action-ctrl": "X鍵",
			"index-view-map": "查看地圖",
			"index-view-map-ctrl": "M或G鍵",
			"index-toggle-minimap": "切換小地圖",
			"index-toggle-minimap-ctrl": "V鍵",
			"game-alive": "玩家",
			"game-reloading": "裝彈",
			"game-using": "使用",
			"game-reviving": "恢復",
			"game-revive-teammate": "復活隊友",
			"game-equip": "裝備",
			"game-cancel": "撤銷",
			"game-open-door": "開門",
			"game-close-door": "關門",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "等待玩家",
			"game-spectating": "觀看",
			"game-red-zone-advances": "紅色區域擴大於",
			"game-red-zone-advancing": "紅色區域擴大中，快到安全區去!",
			"game-seconds": "秒",
			"game-minutes": "分",
			"game-minute": "分",
			"game-m": "分",
			"game-s": "秒",
			"game-not-enough-space": "空間不足!",
			"game-item-already-owned": "物品已擁有!",
			"game-item-already-equipped": "物品已裝備!",
			"game-better-item-equipped": "已裝備更好物品!",
			"game-play-new-game": "開始新遊戲",
			"game-spectate": "觀看",
			"game-full-screen": "全屏",
			"game-sound": "聲音",
			"game-quit-game": "離開遊戲",
			"game-return-to-game": "返回游戲",
			"game-hide-match-stats": "隱藏比賽數據",
			"game-view-match-stats": "查看比賽數據",
			"game-previous-teammate": "上個隊友",
			"game-next-teammate": "下個隊友",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "離開遊戲",
			"game-your-results": "你的戰績",
			"game-chicken": "大吉大利，今晚吃雞!",
			"game-won-the-game": "贏了遊戲。",
			"game-team-eliminated": "你的隊伍被擊敗了。",
			"game-rank": "排名",
			"game-team-rank": "聯隊排名",
			"game-team-kills": "聯隊殺",
			"game-kill": "殺",
			"game-kills": "殺",
			"game-damage-dealt": "傷害輸出",
			"game-damage-taken": "受到傷害",
			"game-survived": "生存",
			"game-backpack00": "袋子",
			"game-backpack01": "小包",
			"game-backpack02": "常規包",
			"game-backpack03": "軍用包",
			"game-bandage": "繃帶",
			"game-bandage-tooltip": "左鍵點擊恢復15生命。",
			"game-healing-tooltip": "無法治療75點以上的生命。",
			"game-healthkit": "醫藥箱",
			"game-healthkit-tooltip": "左鍵點擊恢復100生命。",
			"game-soda": "汽水",
			"game-soda-tooltip": "左鍵點擊可以增加25的腎上腺素。",
			"game-adrenaline-tooltip": "腎上腺素會隨著時間的推移而恢復血量。",
			"game-painkiller": "藥片",
			"game-painkiller-tooltip": "左鍵點擊可使腎上腺素增加50。",
			"game-9mm": "9毫米",
			"game-9mm-tooltip": "M9, Glock, MP5, Vector, MAC-10和UMP9彈藥。",
			"game-12gauge": "12計",
			"game-12gauge-tooltip": "M870, Saiga-12 和 MP220彈藥。",
			"game-762mm": "7.62毫米",
			"game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 和 DP-28彈藥。",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12 和 M249彈藥。",
			"game-chest01": "一級防彈衣",
			"game-chest02": "二級防彈衣",
			"game-chest03": "三級防彈衣",
			"game-helmet01": "一級頭盔",
			"game-helmet02": "二級頭盔",
			"game-helmet03": "三級頭盔",
			"game-1xscope": "1x 倍鏡",
			"game-2xscope": "2x 倍鏡",
			"game-4xscope": "4x 倍鏡",
			"game-8xscope": "8x 倍鏡",
			"game-15xscope": "15x 倍鏡",
			"game-level-1": "一級",
			"game-level-2": "二級",
			"game-level-3": "三級",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "碎片手榴彈",
			"game-smoke": "煙霧彈",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	"kn/z": function(e, t) {},
	lGyJ: function(e, t, a) {
		"use strict";
		var i = {
				players: {
					m9_01: {
						name: "audio/guns/m9_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					m9_reload_01: {
						name: "audio/guns/m9_reload_01.mp3",
						volume: 1
					},
					m9_reload_02: {
						name: "audio/guns/m9_reload_02.mp3",
						volume: 1
					},
					m9_switch_01: {
						name: "audio/guns/m9_switch_01.mp3",
						volume: 1
					},
					glock_01: {
						name: "audio/guns/glock_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					glock_reload_01: {
						name: "audio/guns/glock_reload_01.mp3",
						volume: 1
					},
					glock_reload_02: {
						name: "audio/guns/glock_reload_02.mp3",
						volume: 1
					},
					glock_switch_01: {
						name: "audio/guns/glock_switch_01.mp3",
						volume: 1
					},
					ot38_01: {
						name: "audio/guns/ot38_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					ot38_reload_01: {
						name: "audio/guns/ot38_reload_01.mp3",
						volume: 1
					},
					ot38_reload_02: {
						name: "audio/guns/ot38_reload_02.mp3",
						volume: 1
					},
					ot38_switch_01: {
						name: "audio/guns/ot38_switch_01.mp3",
						volume: 1
					},
					deagle_01: {
						name: "audio/guns/deagle_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					deagle_reload_01: {
						name: "audio/guns/deagle_reload_01.mp3",
						volume: 1
					},
					deagle_reload_02: {
						name: "audio/guns/deagle_reload_02.mp3",
						volume: 1
					},
					deagle_switch_01: {
						name: "audio/guns/deagle_switch_01.mp3",
						volume: 1
					},
					ak47_01: {
						name: "audio/guns/ak47_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					ak47_reload_01: {
						name: "audio/guns/ak47_reload_01.mp3",
						volume: 1
					},
					ak47_switch_01: {
						name: "audio/guns/ak47_switch_01.mp3",
						volume: 1
					},
					scar_01: {
						name: "audio/guns/scar_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					scar_reload_01: {
						name: "audio/guns/scar_reload_01.mp3",
						volume: 1
					},
					scar_switch_01: {
						name: "audio/guns/scar_switch_01.mp3",
						volume: 1
					},
					dp28_01: {
						name: "audio/guns/dp28_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					dp28_reload_01: {
						name: "audio/guns/dp28_reload_01.mp3",
						volume: 1
					},
					dp28_switch_01: {
						name: "audio/guns/dp28_switch_01.mp3",
						volume: 1
					},
					m870_01: {
						name: "audio/guns/m870_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					m870_reload_01: {
						name: "audio/guns/m870_reload_01.mp3",
						volume: 1
					},
					m870_cycle_01: {
						name: "audio/guns/m870_cycle_01.mp3",
						volume: 1
					},
					m870_pull_01: {
						name: "audio/guns/m870_pull_01.mp3",
						volume: 1
					},
					mp220_01: {
						name: "audio/guns/mp220_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					mp220_reload_01: {
						name: "audio/guns/mp220_reload_01.mp3",
						volume: 1
					},
					mp220_deploy_01: {
						name: "audio/guns/mp220_deploy_01.mp3",
						volume: 1
					},
					saiga_01: {
						name: "audio/guns/saiga_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					saiga_reload_01: {
						name: "audio/guns/saiga_reload_01.mp3",
						volume: 1
					},
					saiga_switch_01: {
						name: "audio/guns/saiga_switch_01.mp3",
						volume: 1
					},
					m39_01: {
						name: "audio/guns/m39_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					m39_reload_01: {
						name: "audio/guns/m39_reload_01.mp3",
						volume: 1
					},
					m39_switch_01: {
						name: "audio/guns/m39_switch_01.mp3",
						volume: 1
					},
					mp5_01: {
						name: "audio/guns/mp5_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					mp5_reload_01: {
						name: "audio/guns/mp5_reload_01.mp3",
						volume: 1
					},
					mp5_switch_01: {
						name: "audio/guns/mp5_switch_01.mp3",
						volume: 1
					},
					mac10_01: {
						name: "audio/guns/mac10_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					mac10_reload_01: {
						name: "audio/guns/mac10_reload_01.mp3",
						volume: 1
					},
					mac10_switch_01: {
						name: "audio/guns/mac10_switch_01.mp3",
						volume: 1
					},
					ump9_01: {
						name: "audio/guns/ump9_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					ump9_reload_01: {
						name: "audio/guns/ump9_reload_01.mp3",
						volume: 1
					},
					ump9_switch_01: {
						name: "audio/guns/ump9_switch_01.mp3",
						volume: 1
					},
					vector_01: {
						name: "audio/guns/vector_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					vector_reload_01: {
						name: "audio/guns/vector_reload_01.mp3",
						volume: 1
					},
					vector_switch_01: {
						name: "audio/guns/vector_switch_01.mp3",
						volume: 1
					},
					famas_01: {
						name: "audio/guns/famas_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					famas_reload_01: {
						name: "audio/guns/famas_reload_01.mp3",
						volume: 1
					},
					famas_switch_01: {
						name: "audio/guns/famas_switch_01.mp3",
						volume: 1
					},
					hk416_01: {
						name: "audio/guns/hk416_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					hk416_reload_01: {
						name: "audio/guns/hk416_reload_01.mp3",
						volume: 1
					},
					hk416_switch_01: {
						name: "audio/guns/hk416_switch_01.mp3",
						volume: 1
					},
					mk12_01: {
						name: "audio/guns/mk12_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					mk12_reload_01: {
						name: "audio/guns/mk12_reload_01.mp3",
						volume: 1
					},
					mk12_switch_01: {
						name: "audio/guns/mk12_switch_01.mp3",
						volume: 1
					},
					m249_01: {
						name: "audio/guns/m249_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					m249_reload_01: {
						name: "audio/guns/m249_reload_01.mp3",
						volume: 1
					},
					m249_switch_01: {
						name: "audio/guns/m249_switch_01.mp3",
						volume: 1
					},
					mosin_01: {
						name: "audio/guns/mosin_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					mosin_reload_01: {
						name: "audio/guns/mosin_reload_01.mp3",
						volume: 1
					},
					mosin_cycle_01: {
						name: "audio/guns/mosin_cycle_01.mp3",
						volume: 1
					},
					mosin_pull_01: {
						name: "audio/guns/mosin_pull_01.mp3",
						volume: 1
					},
					sv98_01: {
						name: "audio/guns/sv98_01.mp3",
						volume: 1,
						maxInstances: 5
					},
					sv98_reload_01: {
						name: "audio/guns/sv98_reload_01.mp3",
						volume: 1
					},
					sv98_cycle_01: {
						name: "audio/guns/sv98_cycle_01.mp3",
						volume: 1
					},
					empty_fire_01: {
						name: "audio/guns/empty_fire_01.mp3",
						volume: .9
					},
					empty_fire_02: {
						name: "audio/guns/empty_fire_02.mp3",
						volume: .9
					},
					gun_switch_01: {
						name: "audio/guns/gun_switch_01.mp3",
						volume: 1
					},
					bandage_use_01: {
						name: "audio/ui/bandage_use_01.mp3",
						volume: 1
					},
					healthkit_use_01: {
						name: "audio/ui/healthkit_use_01.mp3",
						volume: 1
					},
					soda_use_01: {
						name: "audio/ui/soda_use_01.mp3",
						volume: 1
					},
					pills_use_01: {
						name: "audio/ui/pills_use_01.mp3",
						volume: 1
					}
				},
				hits: {
					stone_bullet_hit_01: {
						name: "audio/hits/stone_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					wood_bullet_hit_01: {
						name: "audio/hits/wood_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					wood_bullet_hit_02: {
						name: "audio/hits/wood_bullet_hit_02.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					wood_bullet_hit_03: {
						name: "audio/hits/wood_bullet_hit_03.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					wood_bullet_hit_04: {
						name: "audio/hits/wood_bullet_hit_04.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					bush_bullet_hit_01: {
						name: "audio/hits/bush_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					metal_bullet_hit_01: {
						name: "audio/hits/metal_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					metal_bullet_hit_03: {
						name: "audio/hits/metal_bullet_hit_03.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					metal_bullet_hit_04: {
						name: "audio/hits/metal_bullet_hit_04.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 6
					},
					brick_bullet_hit_01: {
						name: "audio/hits/brick_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					punch_hit_01: {
						name: "audio/hits/punch_hit_01.mp3",
						volume: 1
					},
					metal_punch_hit_01: {
						name: "audio/hits/metal_punch_hit_01.mp3",
						volume: 1
					},
					metal_punch_hit_02: {
						name: "audio/hits/metal_punch_hit_02.mp3",
						volume: 1
					},
					player_bullet_hit_01: {
						name: "audio/hits/player_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					player_bullet_hit_02: {
						name: "audio/hits/player_bullet_hit_02.mp3",
						volume: 1,
						canCoalesce: !0
					},
					plastic_bullet_hit_01: {
						name: "audio/hits/plastic_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					toilet_bullet_hit_01: {
						name: "audio/hits/toilet_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					toilet_bullet_hit_02: {
						name: "audio/hits/toilet_bullet_hit_02.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					glass_bullet_hit_01: {
						name: "audio/hits/glass_bullet_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					concrete_hit_01: {
						name: "audio/hits/concrete_hit_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					frag_grass_01: {
						name: "audio/hits/frag_grass_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					frag_sand_01: {
						name: "audio/hits/frag_sand_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					},
					frag_water_01: {
						name: "audio/hits/frag_water_01.mp3",
						volume: 1,
						canCoalesce: !0,
						maxInstances: 3
					}
				},
				sfx: {
					crate_break_01: {
						name: "audio/sfx/crate_break_01.mp3",
						volume: 1
					},
					crate_break_02: {
						name: "audio/sfx/crate_break_02.mp3",
						volume: 1
					},
					tree_break_01: {
						name: "audio/sfx/tree_break_01.mp3",
						volume: 1
					},
					bush_break_01: {
						name: "audio/sfx/bush_break_01.mp3",
						volume: 1
					},
					bush_enter_01: {
						name: "audio/sfx/bush_enter_01.mp3",
						volume: 1,
						canCoalesce: !0
					},
					barrel_break_01: {
						name: "audio/sfx/barrel_break_01.mp3",
						volume: 1
					},
					barrel_break_02: {
						name: "audio/sfx/barrel_break_02.mp3",
						volume: 1
					},
					stone_break_01: {
						name: "audio/sfx/stone_break_01.mp3",
						volume: 1
					},
					wall_break_01: {
						name: "audio/sfx/wall_break_01.mp3",
						volume: 1
					},
					ceiling_break_01: {
						name: "audio/sfx/ceiling_break_01.mp3",
						volume: 1
					},
					toilet_break_01: {
						name: "audio/sfx/toilet_break_01.mp3",
						volume: 1
					},
					toilet_break_02: {
						name: "audio/sfx/toilet_break_02.mp3",
						volume: 1
					},
					vending_break_01: {
						name: "audio/sfx/vending_break_01.mp3",
						volume: 1
					},
					window_break_01: {
						name: "audio/sfx/window_break_01.mp3",
						volume: 1
					},
					window_break_02: {
						name: "audio/sfx/window_break_02.mp3",
						volume: 1
					},
					drawers_break_01: {
						name: "audio/sfx/drawers_break_01.mp3",
						volume: 1
					},
					oven_break_01: {
						name: "audio/sfx/oven_break_01.mp3",
						volume: 1
					},
					deposit_box_break_01: {
						name: "audio/sfx/deposit_box_break_01.mp3",
						volume: 1
					},
					footstep_grass_01: {
						name: "audio/sfx/footstep_grass_01.mp3",
						volume: 1
					},
					footstep_grass_02: {
						name: "audio/sfx/footstep_grass_02.mp3",
						volume: 1
					},
					footstep_metal_01: {
						name: "audio/sfx/footstep_metal_01.mp3",
						volume: 1
					},
					footstep_metal_02: {
						name: "audio/sfx/footstep_metal_02.mp3",
						volume: 1
					},
					footstep_metal_03: {
						name: "audio/sfx/footstep_metal_03.mp3",
						volume: 1
					},
					footstep_metal_04: {
						name: "audio/sfx/footstep_metal_04.mp3",
						volume: 1
					},
					footstep_metal_05: {
						name: "audio/sfx/footstep_metal_05.mp3",
						volume: 1
					},
					footstep_wood_01: {
						name: "audio/sfx/footstep_wood_01.mp3",
						volume: 1
					},
					footstep_wood_02: {
						name: "audio/sfx/footstep_wood_02.mp3",
						volume: 1
					},
					footstep_wood_03: {
						name: "audio/sfx/footstep_wood_03.mp3",
						volume: 1
					},
					footstep_sand_01: {
						name: "audio/sfx/footstep_sand_01.mp3",
						volume: 1
					},
					footstep_sand_02: {
						name: "audio/sfx/footstep_sand_02.mp3",
						volume: 1
					},
					footstep_water_01: {
						name: "audio/sfx/footstep_water_01.mp3",
						volume: 1
					},
					footstep_water_02: {
						name: "audio/sfx/footstep_water_02.mp3",
						volume: 1
					},
					footstep_tile_01: {
						name: "audio/sfx/footstep_tile_01.mp3",
						volume: 1
					},
					footstep_tile_02: {
						name: "audio/sfx/footstep_tile_02.mp3",
						volume: 1
					},
					footstep_asphalt_01: {
						name: "audio/sfx/footstep_asphalt_01.mp3",
						volume: 1
					},
					footstep_asphalt_02: {
						name: "audio/sfx/footstep_asphalt_02.mp3",
						volume: 1
					},
					footstep_brick_01: {
						name: "audio/sfx/footstep_brick_01.mp3",
						volume: 1
					},
					punch_swing_01: {
						name: "audio/sfx/punch_swing_01.mp3",
						volume: 1
					},
					bullet_whiz_01: {
						name: "audio/sfx/bullet_whiz_01.mp3",
						volume: 1
					},
					bullet_whiz_02: {
						name: "audio/sfx/bullet_whiz_02.mp3",
						volume: 1
					},
					bullet_whiz_03: {
						name: "audio/sfx/bullet_whiz_03.mp3",
						volume: 1
					},
					frag_throw_01: {
						name: "audio/sfx/frag_throw_01.mp3",
						volume: 1
					},
					frag_pin_01: {
						name: "audio/sfx/frag_pin_01.mp3",
						volume: 1
					},
					frag_deploy_01: {
						name: "audio/ui/frag_pickup_01.mp3",
						volume: 1
					},
					explosion_01: {
						name: "audio/sfx/explosion_01.mp3",
						volume: 1
					},
					explosion_02: {
						name: "audio/sfx/explosion_02.mp3",
						volume: 1
					},
					explosion_smoke_01: {
						name: "audio/sfx/explosion_smoke_01.mp3",
						volume: 1
					},
					stow_weapon_01: {
						name: "audio/ui/stow_weapon_01.mp3",
						volume: 1
					},
					door_open_01: {
						name: "audio/sfx/door_open_01.mp3",
						volume: 1
					},
					door_close_01: {
						name: "audio/sfx/door_close_01.mp3",
						volume: 1
					},
					door_open_02: {
						name: "audio/sfx/door_open_02.mp3",
						volume: 1
					},
					door_close_02: {
						name: "audio/sfx/door_close_02.mp3",
						volume: 1
					},
					door_open_03: {
						name: "audio/sfx/door_open_03.mp3",
						volume: 1
					},
					door_close_03: {
						name: "audio/sfx/door_close_03.mp3",
						volume: 1
					},
					door_error_01: {
						name: "audio/sfx/door_error_01.mp3",
						volume: 1
					},
					vault_change_01: {
						name: "audio/sfx/vault_change_01.mp3",
						volume: 1
					},
					cell_control_01: {
						name: "audio/sfx/cell_control_01.mp3",
						volume: 1
					}
				},
				ambient: {
					ambient_wind_01: {
						name: "audio/ambient/ambient_wind_01.mp3",
						volume: 1
					},
					ambient_waves_01: {
						name: "audio/ambient/ambient_waves_01.mp3",
						volume: 1
					}
				},
				ui: {
					ammo_pickup_01: {
						name: "audio/ui/ammo_pickup_01.mp3",
						volume: 1
					},
					clothes_pickup_01: {
						name: "audio/ui/clothes_pickup_01.mp3",
						volume: 1
					},
					helmet_pickup_01: {
						name: "audio/ui/helmet_pickup_01.mp3",
						volume: 1
					},
					chest_pickup_01: {
						name: "audio/ui/chest_pickup_01.mp3",
						volume: 1
					},
					gun_pickup_01: {
						name: "audio/ui/gun_pickup_01.mp3",
						volume: 1
					},
					scope_pickup_01: {
						name: "audio/ui/scope_pickup_01.mp3",
						volume: 1
					},
					pack_pickup_01: {
						name: "audio/ui/pack_pickup_01.mp3",
						volume: 1
					},
					soda_pickup_01: {
						name: "audio/ui/soda_pickup_01.mp3",
						volume: 1
					},
					pills_pickup_01: {
						name: "audio/ui/pills_pickup_01.mp3",
						volume: 1
					},
					bandage_pickup_01: {
						name: "audio/ui/bandage_pickup_01.mp3",
						volume: 1
					},
					healthkit_pickup_01: {
						name: "audio/ui/healthkit_pickup_01.mp3",
						volume: 1
					},
					frag_pickup_01: {
						name: "audio/ui/frag_pickup_01.mp3",
						volume: 1
					},
					ping_danger_01: {
						name: "audio/ui/ping_danger_01.mp3",
						volume: 1
					},
					ping_coming_01: {
						name: "audio/ui/ping_coming_01.mp3",
						volume: 1
					},
					ping_help_01: {
						name: "audio/ui/ping_help_01.mp3",
						volume: 1
					},
					emote_01: {
						name: "audio/ui/emote_01.mp3",
						volume: 1
					},
					loot_drop_01: {
						name: "audio/ui/loot_drop_01.mp3",
						volume: 1
					},
					notification_start_01: {
						name: "audio/ui/notification_start_01.mp3",
						volume: 1
					},
					notification_join_01: {
						name: "audio/ui/notification_join_01.mp3",
						volume: 1
					}
				},
				music: {
					menu_music: {
						name: "audio/ambient/menu_music_01.mp3",
						volume: 1
					}
				}
			},
			o = {
				footstep_grass: {
					channel: "sfx",
					sounds: ["footstep_grass_01", "footstep_grass_02"]
				},
				footstep_container: {
					channel: "sfx",
					sounds: ["footstep_metal_03"]
				},
				footstep_warehouse: {
					channel: "sfx",
					sounds: ["footstep_metal_01", "footstep_metal_02"]
				},
				footstep_house: {
					channel: "sfx",
					sounds: ["footstep_wood_02", "footstep_wood_03"]
				},
				footstep_shack: {
					channel: "sfx",
					sounds: ["footstep_wood_01"]
				},
				footstep_sand: {
					channel: "sfx",
					sounds: ["footstep_sand_01", "footstep_sand_02"]
				},
				footstep_water: {
					channel: "sfx",
					sounds: ["footstep_water_01", "footstep_water_02"]
				},
				footstep_tile: {
					channel: "sfx",
					sounds: ["footstep_tile_01", "footstep_tile_02"]
				},
				footstep_asphalt: {
					channel: "sfx",
					sounds: ["footstep_asphalt_01", "footstep_asphalt_02"]
				},
				footstep_brick: {
					channel: "sfx",
					sounds: ["footstep_brick_01"]
				},
				footstep_bunker: {
					channel: "sfx",
					sounds: ["footstep_metal_04", "footstep_metal_05"]
				},
				player_bullet_hit: {
					channel: "hits",
					sounds: ["player_bullet_hit_01"]
				},
				metal_punch: {
					channel: "hits",
					sounds: ["metal_punch_hit_01", "metal_punch_hit_02"]
				},
				wall_bullet: {
					channel: "hits",
					sounds: ["metal_bullet_hit_01"]
				},
				wall_wood_bullet: {
					channel: "hits",
					sounds: ["wood_bullet_hit_02"]
				},
				wall_brick_bullet: {
					channel: "hits",
					sounds: ["brick_bullet_hit_01"]
				},
				stone_bullet: {
					channel: "hits",
					sounds: ["stone_bullet_hit_01"]
				},
				barrel_bullet: {
					channel: "hits",
					sounds: ["metal_bullet_hit_03"]
				},
				silo_bullet: {
					channel: "hits",
					sounds: ["metal_bullet_hit_04"]
				},
				toilet_porc_bullet: {
					channel: "hits",
					sounds: ["toilet_bullet_hit_01"]
				},
				toilet_metal_bullet: {
					channel: "hits",
					sounds: ["toilet_bullet_hit_02"]
				},
				glass_bullet: {
					channel: "hits",
					sounds: ["glass_bullet_hit_01"]
				},
				concrete_hit: {
					channel: "hits",
					sounds: ["concrete_hit_01"]
				},
				wood_prop_bullet: {
					channel: "hits",
					sounds: ["wood_bullet_hit_03"]
				},
				wood_crate_bullet: {
					channel: "hits",
					sounds: ["wood_bullet_hit_04"]
				},
				ammo_crate_bullet: {
					channel: "hits",
					sounds: ["plastic_bullet_hit_01"]
				},
				bush_bullet: {
					channel: "hits",
					sounds: ["bush_bullet_hit_01"]
				},
				tree_bullet: {
					channel: "hits",
					sounds: ["wood_bullet_hit_01"]
				},
				player_bullet_grunt: {
					channel: "hits",
					sounds: ["player_bullet_hit_02"]
				},
				bullet_whiz: {
					channel: "sfx",
					sounds: ["bullet_whiz_01", "bullet_whiz_02", "bullet_whiz_03"]
				},
				frag_grass: {
					channel: "hits",
					sounds: ["frag_grass_01"]
				},
				frag_sand: {
					channel: "hits",
					sounds: ["frag_sand_01"]
				},
				frag_water: {
					channel: "hits",
					sounds: ["frag_water_01"]
				}
			},
			n = {
				activePlayer: {
					volume: .5,
					maxRange: 48,
					list: "players",
					name: "activePlayer",
					type: "sound"
				},
				otherPlayers: {
					volume: .5,
					maxRange: 48,
					list: "players",
					name: "otherPlayers",
					type: "sound"
				},
				hits: {
					volume: .4,
					maxRange: 48,
					list: "hits",
					name: "hits",
					type: "sound"
				},
				sfx: {
					volume: 1,
					maxRange: 48,
					list: "sfx",
					name: "sfx",
					type: "sound"
				},
				ambient: {
					volume: 1,
					maxRange: 1,
					list: "ambient",
					name: "ambient",
					type: "sound"
				},
				ui: {
					volume: .75,
					maxRange: 48,
					list: "ui",
					name: "ui",
					type: "sound"
				},
				music: {
					volume: 1,
					maxRange: 1,
					list: "music",
					name: "music",
					type: "music"
				}
			},
			r = {
				cathedral: {
					name: "audio/reverb/cathedral_01.mp3",
					volume: .7,
					stereoSpread: .004
				},
				cave: {
					name: "audio/reverb/cave_mono_01.mp3",
					volume: .7,
					echoVolume: .5,
					echoDelay: .25,
					echoLowPass: 800,
					stereoSpread: .004
				}
			};
		e.exports = {
			Sounds: i,
			Groups: o,
			Channels: n,
			Reverbs: r
		}
	},
	"m1+W": function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e, t, a, i, o, n) {
			this.initialized = !1, this.teamMode = 0, this.onJoin = o, this.onQuit = n, this.pixi = e, this.audioManager = t, this.ambientSounds = {}, this.victoryMusic = null, this.localization = a, this.config = i, this.ws = null, this.connecting = !1, this.connected = !1
		}
		var n = a("gKxX"),
			r = a("+0OL"),
			s = a("DM7t"),
			l = a("v8aM"),
			c = l.EmoteSlot,
			m = l.EmoteData,
			d = a("Bk7F"),
			p = a("0od3"),
			u = a("yp2f"),
			h = a("/2+T"),
			g = a("K7EQ"),
			f = a("zinx"),
			y = a("Jr6A"),
			b = a("xz3u"),
			x = a("GtPS"),
			v = a("ckCa"),
			k = a("r4ug"),
			_ = a("FyxX"),
			w = (a("6YQA"), a("5dFr")),
			S = a("YEz/"),
			M = a("85i3"),
			T = a("p/CU"),
			P = T.Gas,
			C = a("S40U"),
			I = a("pI87"),
			z = a("1JzZ"),
			A = a("dT1u"),
			D = a("EZ6M"),
			O = a("/rj8"),
			L = a("pQi2"),
			E = a("vIPv"),
			B = a("xgte"),
			F = B.Renderer,
			R = a("bkPR"),
			j = a("CVWn"),
			N = (a("zgif"), a("4glI")),
			q = a("MWDq"),
			U = a("09pV");
		o.prototype = {
			tryJoinGame: function(e, t, a) {
				var i = this;
				if (!(this.connecting || this.connected || this.initialized)) {
					this.ws && (this.ws.onerror = function() {}, this.ws.onopen = function() {}, this.ws.onmessage = function() {}, this.ws.onclose = function() {}, this.ws.close(), this.ws = null), this.connecting = !0, this.connected = !1;
					try {
						this.ws = new WebSocket(t), this.ws.binaryType = "arraybuffer", this.ws.onerror = function(e) {
							i.ws && i.ws.close()
						}, this.ws.onopen = function() {
							i.connecting = !1, i.connected = !0, i.init();
							var t = new u.JoinMsg;
							t.protocol = r.protocolVersion, t.privData = e, t.name = i.name, t.emotes = i.emoteLoadout, t.useTouch = f.touch, t.bot = !1, i.sendMessage(u.Msg.Join, t)
						}, this.ws.onmessage = function(e) {
							for (var t = new u.MsgStream(e.data);;) {
								var a = t.deserializeMsgType();
								if (a == u.Msg.None) break;
								i.onMessage(a, t.getStream())
							}
						}, this.ws.onclose = function() {
							var e = i.connecting,
								t = i.connected;
							if (i.connecting = !1, i.connected = !1, e) a();
							else if (t && !i.gameOver) {
								var o = "";
								o = i.disconnectMsg && "" != i.disconnectMsg ? i.disconnectMsg : i.localization.translate("index-host-closed"), i.onQuit(o)
							}
						}
					} catch (e) {
						this.connecting = !1, this.connected = !1, a()
					}
				}
			},
			init: function() {
				var e, t = this.pixi.renderer.type == n.RENDERER_TYPE.CANVAS;
				this.input = new C.InputHandler(this.pixi.view), this.touch = new N.Touch(this.input, this.config), this.camera = new x, this.renderer = new F(t), this.particleBarn = new D.ParticleBarn(this.renderer), this.map = new z, this.playerBarn = new L.PlayerBarn, this.bulletBarn = new b.BulletBarn, this.projectileBarn = new E.ProjectileBarn, this.explosionBarn = new S.ExplosionBarn, this.smokeBarn = new j.SmokeBarn, this.deadBodyBarn = new v.DeadBodyBarn, this.decalBarn = new _.DecalBarn, this.lootBarn = new I.LootBarn, this.gas = new P(t), this.pieTimer = new O.PieTimer, this.uiManager = new q.UiManager(this, this.audioManager, this.pieTimer, this.particleBarn, this.localization, t, this.touch), this.ui2Manager = new U.Ui2Manager(this.localization), this.emoteManager = new w.EmoteManager(this, this.audioManager, this.uiManager, this.playerBarn, this.camera, this.map), this.shotBarn = new R.ShotBarn(this.particleBarn, this.audioManager, this.uiManager);
				var a = (e = {}, i(e, s.Type.Player, this.playerBarn.playerPool), i(e, s.Type.Obstacle, this.map.obstaclePool), i(e, s.Type.Loot, this.lootBarn.lootPool), i(e, s.Type.LootSpawner, this.map.lootSpawnerPool), i(e, s.Type.DeadBody, this.deadBodyBarn.deadBodyPool), i(e, s.Type.Building, this.map.buildingPool), i(e, s.Type.Structure, this.map.structurePool), i(e, s.Type.Decal, this.decalBarn.decalPool), i(e, s.Type.Projectile, this.projectileBarn.projectilePool), i(e, s.Type.Smoke, this.smokeBarn.smokePool), e);
				this.objectCreator = new A.Creator;
				for (var o in a) a.hasOwnProperty(o) && this.objectCreator.registerType(o, a[o]);
				this.debugDisplay = new n.Graphics;
				for (var r = [this.map.display.water, this.map.display.background, this.renderer.layers[0], this.renderer.ground, this.renderer.layers[1], this.renderer.layers[2], this.renderer.layers[3], this.debugDisplay, this.gas.gasRenderer.display, this.touch.container, this.emoteManager.container, this.uiManager.container, this.emoteManager.indContainer, this.pieTimer.container], l = 0; l < r.length; l++) {
					var m = r[l];
					m && (m.interactiveChildren = !1, this.pixi.stage.addChild(m))
				}
				this.disconnectMsg = "", this.playing = !1, this.gameOver = !1, this.spectating = !1, this.moveMsgTimeout = 0, this.prevMoveMsg = new u.MoveMsg, this.playingTicker = 0, this.localId = 0, this.activeId = 0, this.activePlayer = null, this.targetZoom = 1, this.debugZoom = 1, this.useDebugZoom = !1, this.seq = 0, this.seqInFlight = !1, this.seqSendTime = 0, this.pings = [], this.debugPingTime = 0, this.camera.setShakeEnabled(this.config.get("screenShake")), this.name = this.config.get("playerName");
				var d = {
					emoteTop: c.Top,
					emoteRight: c.Right,
					emoteBottom: c.Bottom,
					emoteLeft: c.Left,
					emoteWin: c.Win,
					emoteDeath: c.Death
				};
				this.emoteLoadout = [], this.emoteLoadout[c.None] = 0;
				for (var h = Object.keys(d), g = 0; g < h.length; g++) {
					var f = h[g],
						y = parseInt(this.config.get(f)),
						k = p.clamp(y, 1, 255);
					this.emoteLoadout[d[f]] = k
				}
				this.emoteManager.updateEmoteWheel(this.emoteLoadout), void 0 == this.ambientSounds.wavesInst && (this.ambientSounds.wavesInst = this.audioManager.playSound("ambient_waves_01", {
					channel: "ambient",
					startSilent: !0,
					loop: !0,
					forceStart: !0
				})), document.hasFocus() || this.audioManager.playSound("notification_start_01", {
					channel: "ui"
				}), M.storeGeneric("language", this.config.get("language")), this.resize(), this.initialized = !0
			},
			free: function() {
				if (this.ws && (this.ws.onmessage = function() {}, this.ws.close(), this.ws = null), this.connecting = !1, this.connected = !1, this.initialized)
					for (this.initialized = !1, this.emoteManager.free(), this.ui2Manager.free(), this.uiManager.free(), this.pieTimer.destroy(), this.map.free(), this.input.free(); this.pixi.stage.children.length > 0;) {
						var e = this.pixi.stage.children[0];
						this.pixi.stage.removeChild(e), e.destroy({
							children: !0,
							texture: !0
						})
					}
			},
			warnPageReload: function() {
				return this.initialized && this.playing && !this.spectating && !this.uiManager.displayingStats
			},
			update: function(e) {
				this.playing && (this.playingTicker += e), this.playerBarn.update(e, this.activeId, this.renderer, this.particleBarn, this.camera, this.map, this.input, this.audioManager, this.ambientSounds, this.emoteManager.wheelKeyTriggered, this.gameOver), this.camera.pos = h.copy(this.activePlayer.pos), this.camera.applyShake();
				var t = this.activePlayer.getScopeZoom(),
					a = p.min(this.camera.screenWidth, this.camera.screenHeight),
					i = p.max(this.camera.screenWidth, this.camera.screenHeight),
					o = p.max(a * (16 / 9), i);
				this.camera.targetZoom = .5 * o / (t * this.camera.ppu);
				var n = this.activePlayer.zoomFast ? 3 : 2,
					s = this.activePlayer.zoomFast ? 3 : 1.4,
					l = this.camera.targetZoom > this.camera.zoom ? n : s;
				this.camera.zoom = p.lerp(e * l, this.camera.zoom, this.camera.targetZoom), this.audioManager.cameraPos = h.copy(this.camera.pos), (this.input.keyPressed(C.Key.M) || this.input.keyPressed(C.Key.G)) && this.uiManager.displayMapLarge(!1), this.input.keyPressed(C.Key.Escape) && this.uiManager.toggleEscMenu(), this.input.keyPressed(C.Key.V) && this.uiManager.cycleVisibilityMode();
				var c = this.activePlayer.pos,
					m = this.camera.screenToPoint(this.input.mousePos),
					d = h.sub(m, c),
					g = h.length(d),
					y = g > 1e-5 ? h.div(d, g) : h.create(1, 0);
				this.emoteManager.wheelDisplayed && (g = this.prevMoveMsg.toMouseLen, y = this.prevMoveMsg.toMouseDir);
				var b = new u.MoveMsg;
				if (b.seq = this.seq, !this.spectating) {
					var x = this.input,
						v = this.uiManager,
						k = this.ui2Manager,
						_ = this.touch.getTouchMovement(this.camera);
					if (this.touch.moveDetected) {
						var w = 255 * p.clamp(_.moveLen, 0, 1);
						b.moveLeft = _.left, b.moveRight = _.right, b.moveUp = _.up, b.moveDown = _.down, b.moveLen = w
					} else b.moveLeft = this.input.keyDown(C.Key.Left) || this.input.keyDown(C.Key.A), b.moveRight = this.input.keyDown(C.Key.Right) || this.input.keyDown(C.Key.D), b.moveUp = this.input.keyDown(C.Key.Up) || this.input.keyDown(C.Key.W), b.moveDown = this.input.keyDown(C.Key.Down) || this.input.keyDown(C.Key.S), b.moveLen = 255;
					if (f.touch) {
						var S = this.activePlayer.localData.curWeapIdx == r.WeaponSlot.Throwable,
							M = this.touch.getAimMovement(S, this.camera);
						b.toMouseDir = M.toAimDir;
						var T = M.toAimLen / 10;
						b.toMouseLen = Math.min(T, u.kMouseMaxLen)
					} else b.toMouseDir = h.copy(y), b.toMouseLen = Math.min(g, u.kMouseMaxLen);
					b.shootStart = x.mousePressed() || this.touch.shotDetected, b.shootHold = x.mouseDown() || this.touch.shotDetected, b.reload = x.keyPressed(C.Key.R) || v.reloadTouched, b.interaction = x.keyPressed(C.Key.F) || v.interactionTouched, b.cancelAction = x.keyPressed(C.Key.X) || v.interactionTouched, b.equipPrimary = x.keyPressed(C.Key.One) || 0 == k.switchWeaponIdx, b.equipSecondary = x.keyPressed(C.Key.Two) || 1 == k.switchWeaponIdx, b.equipThrowable = x.keyPressed(C.Key.Four) || 3 == k.switchWeaponIdx, b.equipMelee = x.keyPressed(C.Key.Three) || x.keyPressed(C.Key.E) || 2 == k.switchWeaponIdx, b.equipLast = x.keyPressed(C.Key.Q), b.scrollDown = x.mouseWheel() > 0, b.scrollUp = x.mouseWheel() < 0, b.portrait = this.camera.screenWidth < this.camera.screenHeight;
					for (var P = 0; P < k.uiEvents.length; P++) {
						var I = k.uiEvents[P];
						if ("use" == I.action)
							if ("weapon" == I.type) switch (I.data) {
								case 0:
									b.equipPrimary = !0;
									break;
								case 1:
									b.equipSecondary = !0;
									break;
								case 2:
									b.equipMelee = !0;
									break;
								case 3:
									b.equipThrowable = !0
							} else "scope" == I.type ? b.useScope = I.data : b.useItem = I.data
					}
					"" === b.useItem && (b.useItem = x.keyPressed(C.Key.Seven) ? "bandage" : x.keyPressed(C.Key.Eight) ? "healthkit" : x.keyPressed(C.Key.Nine) ? "soda" : x.keyPressed(C.Key.Zero) ? "painkiller" : "");
					for (var z = !1, A = 0; A < k.uiEvents.length; A++) {
						var D = k.uiEvents[A];
						if ("drop" == D.action) {
							var O = new u.DropItemMsg;
							if ("weapon" == D.type) {
								var L = this.activePlayer.localData.weapons;
								O.item = L[D.data].name, O.weapIdx = D.data
							} else {
								var E = "";
								E = "helmet" == D.data ? this.activePlayer.netData.helmet : "chest" == D.data ? this.activePlayer.netData.chest : D.data, O.item = E
							}
							"" != O.item && (this.sendMessage(u.Msg.DropItem, O), z = !0)
						}
					}
					z && this.audioManager.playSound("loot_drop_01", {
						channel: "ui"
					})
				}
				var B = this.uiManager.specNext || this.spectating && this.input.keyPressed(C.Key.Right),
					F = this.uiManager.specPrev || this.spectating && this.input.keyPressed(C.Key.Left);
				if (this.uiManager.beginSpectating || B || F) {
					this.gameOver = !1;
					var R = new u.SpectateMsg;
					R.specNext = B, R.specPrev = F, this.sendMessage(u.Msg.Spectate, R)
				}
				this.uiManager.beginSpectating = !1, this.uiManager.specNext = !1, this.uiManager.specPrev = !1, this.uiManager.reloadTouched = !1, this.uiManager.interactionTouched = !1;
				var j = !1;
				for (var N in b)
					if (b.hasOwnProperty(N)) {
						if ("toMouseDir" == N) {
							var q = p.clamp(h.dot(b[N], this.prevMoveMsg[N]), -1, 1),
								U = p.rad2deg(Math.acos(q));
							j = U > .4
						} else "toMouseLen" == N ? j = Math.abs(this.prevMoveMsg[N] - b[N]) > .5 : "shootStart" == N ? j = b[N] || b[N] != this.prevMoveMsg[N] : this.prevMoveMsg[N] != b[N] && (j = !0);
						if (j) break
					}
				this.moveMsgTimeout -= e, (j || this.moveMsgTimeout < 0) && (this.seqInFlight || (this.seq = (this.seq + 1) % 256, this.seqSendTime = (new Date).getTime(), this.seqInFlight = !0, b.seq = this.seq), this.sendMessage(u.Msg.Move, b), this.moveMsgTimeout = 1, this.prevMoveMsg = b), this.ui2Manager.flushInput(), this.map.update(e, this.activePlayer, this.particleBarn, this.audioManager, this.renderer, this.camera), this.lootBarn.update(e, this.activePlayer, this.camera), this.bulletBarn.update(e, this.playerBarn, this.map, this.camera, this.activePlayer, this.renderer, this.particleBarn, this.audioManager), this.projectileBarn.update(e, this.particleBarn, this.audioManager, this.activePlayer, this.map, this.renderer, this.camera), this.explosionBarn.update(e, this.map, this.camera, this.particleBarn, this.audioManager), this.smokeBarn.update(e, this.camera, this.activePlayer, this.map, this.renderer), this.shotBarn.update(e, this.activeId, this.playerBarn, this.particleBarn, this.audioManager), this.particleBarn.update(e, this.camera), this.deadBodyBarn.update(e, this.playerBarn, this.activePlayer, this.map, this.camera, this.renderer), this.decalBarn.update(e, this.map, this.camera), this.pieTimer.update(e, this.activePlayer, this.camera), this.uiManager.update(e, this.activePlayer, this.activeId == this.localId, this.map, this.gas, this.lootBarn, this.playerBarn, this.camera, this.teamMode, this.input), this.ui2Manager.update(e, this.activePlayer, this.spectating, this.playerBarn, this.lootBarn, this.map), this.emoteManager.update(e, this.localId, this.activePlayer, this.input.mousePos, this.teamMode, this.deadBodyBarn, this.renderer), this.touch.updateDisplay(), this.renderer.update(e, this.camera, this.map);
				for (var G = 0; G < this.emoteManager.newPings.length; G++) {
					var V = this.emoteManager.newPings[G],
						H = new u.EmoteMsg;
					H.type = V.type, H.pos = V.pos, H.useLoadout = !1, H.teamOnly = !0, H.isPing = !0, this.sendMessage(u.Msg.Emote, H)
				}
				this.emoteManager.newPings = [];
				for (var W = 0; W < this.emoteManager.newEmotes.length; W++) {
					var K = this.emoteManager.newEmotes[W],
						X = new u.EmoteMsg;
					X.type = K.type, X.pos = K.pos, X.useLoadout = K.useLoadout, X.teamOnly = !1, X.isPing = !1, this.sendMessage(u.Msg.Emote, X)
				}
				this.emoteManager.newEmotes = [], this.render(e), this.input.flush()
			},
			render: function(e) {
				this.pixi.renderer.backgroundColor = g.background, this.playerBarn.render(this.camera), this.bulletBarn.render(this.camera), this.map.render(this.camera), this.gas.render(this.camera), this.uiManager.render(this.activePlayer.pos, this.gas, this.camera, this.map), this.emoteManager.render(this.camera), this.pieTimer.render(this.camera), k.flush()
			},
			resize: function() {
				var e = y.getScreenDimensions(),
					t = e.width;
				y.isLandscape() || (t = e.height), f.layout = t <= 850 || f.mobile ? f.Layout.Sm : f.Layout.Lg, this.camera.screenWidth = e.width, this.camera.screenHeight = e.height, this.map.resize(this.pixi.renderer), this.gas.resize(), this.uiManager.resize(this.camera), this.touch.resize(), this.renderer.resize(this.camera)
			},
			processGameUpdate: function(e) {
				for (var t = {
						renderer: this.renderer,
						particleBarn: this.particleBarn,
						map: this.map,
						smokeBarn: this.smokeBarn
					}, a = 0; a < e.delObjIds.length; a++) {
					e.delObjIds[a];
					this.objectCreator.deleteObj(e.delObjIds[a])
				}
				for (var i = 0; i < e.fullObjects.length; i++) {
					var o = e.fullObjects[i];
					this.objectCreator.updateObjFull(o.__type, o.__id, o, t)
				}
				for (var n = 0; n < e.partObjects.length; n++) {
					var r = e.partObjects[n];
					this.objectCreator.updateObjPart(r.__id, r, t)
				}
				e.activePlayerIdDirty && (this.activeId = e.activePlayerId), this.spectating = this.activeId != this.localId, this.activePlayer = this.playerBarn.getPlayerById(this.activeId), this.activePlayer.setLocalData(e.activePlayerData, this.playerBarn), this.spectating && (this.uiManager.setSpectating(!0), this.uiManager.setSpectatedPlayer(this.activeId, this.playerBarn.getPlayerInfo(this.activeId).name), this.touch.hideAll()), this.activePlayer.layer = this.activePlayer.netData.layer, this.renderer.setActiveLayer(this.activePlayer.layer), this.audioManager.activeLayer = this.activePlayer.layer, e.aliveDirty && this.uiManager.updatePlayersAlive(e.aliveCount), this.gas.setProgress(e.gasT), e.gasDirty && this.gas.setFullState(e.gasT, e.gasData, this.map, this.uiManager);
				for (var s = 0; s < e.teams.length; s++) this.playerBarn.setTeamInfo(e.teams[s]);
				for (var l = this.playerBarn.getPlayerInfo(this.activeId).teamId, c = this.playerBarn.getTeamInfo(l), m = 0; m < e.teamData.length; m++) {
					var d = e.teamData[m];
					this.playerBarn.setTeammateData(c.playerIds[d.playerIdx], d)
				}
				for (var p = 0; p < e.bullets.length; p++) {
					var u = e.bullets[p];
					this.bulletBarn.addBullet(u, this.playerBarn, this.renderer), u.shotFx && this.shotBarn.addShot(u.pos, u.layer, u.playerId, u.shotSourceType, u.shotOffhand)
				}
				for (var h = 0; h < e.explosions.length; h++) {
					var g = e.explosions[h];
					this.explosionBarn.addExplosion(g.type, g.pos, g.layer)
				}
				for (var f = 0; f < e.emotes.length; f++) {
					var y = e.emotes[f];
					y.isPing ? this.emoteManager.addPing(y) : this.emoteManager.addEmote(y)
				}
			},
			onMessage: function(e, t) {
				switch (e) {
					case u.Msg.Joined:
						var a = new u.JoinedMsg;
						a.deserialize(t), this.onJoin(), this.teamMode = a.teamMode, this.localId = a.playerId;
						for (var i = 0; i < a.playerInfoMsgs.length; i++) {
							var o = a.playerInfoMsgs[i];
							this.playerBarn.setPlayerInfo(o);
							this.playerBarn.getPlayerById(o.id)
						}
						a.started || this.uiManager.setWaitingForPlayers(!0), this.uiManager.removeAds(), this.victoryMusic && (this.victoryMusic.stop(), this.victoryMusic = null);
						break;
					case u.Msg.PlayerInfo:
						var n = new u.PlayerInfoMsg;
						n.deserialize(t), this.playerBarn.setPlayerInfo(n);
						break;
					case u.Msg.Map:
						var s = new u.MapMsg;
						s.deserialize(t), this.map.setData(s.width, s.height, s.seed, s.places, s.objects, this.camera), this.map.renderMap(this.pixi.renderer);
						break;
					case u.Msg.Update:
						var l = new u.UpdateMsg;
						l.deserialize(t, this.objectCreator), this.playing = !0, this.processGameUpdate(l);
						break;
					case u.Msg.Kill:
						var c = new u.KillMsg;
						c.deserialize(t);
						var m = (this.playerBarn.getPlayerById(c.targetId), this.playerBarn.getPlayerInfo(c.targetId)),
							d = this.playerBarn.getPlayerInfo(c.killCreditId),
							p = c.itemSourceType || c.mapSourceType,
							h = this.localization.translate("game-" + p);
						c.killCreditId == this.activeId ? this.uiManager.showKill({
							name: d.name,
							kills: c.killerKills,
							completeKill: c.killerId == this.activeId
						}, {
							name: m.name,
							suicide: c.killerId == c.targetId || c.killCreditId == c.targetId,
							killed: c.killed,
							downed: c.downed,
							teamKill: m.teamId == d.teamId
						}, h, this.spectating) : c.targetId == this.activeId && c.downed && !c.killed && this.uiManager.showDowned({
							name: d.name,
							damageType: c.damageType
						}, {
							name: m.name,
							suicide: c.killerId == c.targetId || c.killCreditId == c.targetId
						}, h, this.spectating);
						var g = c.downed && !c.killed || c.damageType == r.DamageType.Gas || c.damageType == r.DamageType.Bleeding ? d : this.playerBarn.getPlayerInfo(c.killerId),
							f = this.playerBarn.getPlayerInfo(this.activeId).teamId,
							y = this.ui2Manager.getKillFeedText(m.nameKillFeed, g.nameKillFeed, h, c.damageType, c.downed && !c.killed),
							b = this.ui2Manager.getKillFeedColor(f, m.teamId, d.teamId);
						this.ui2Manager.addKillFeed(y, b), c.type == r.DamageType.Player && this.bulletBarn.createBulletHit(this.playerBarn, c.targetId, this.audioManager);
						break;
					case u.Msg.PlayerStats:
						var x = new u.PlayerStatsMsg;
						x.deserialize(t), this.uiManager.setLocalStats(x.playerStats);
						break;
					case u.Msg.GameOver:
						var v = new u.GameOverMsg;
						v.deserialize(t), this.gameOver = v.gameOver, this.uiManager.showStats({
							victory: v.victory,
							spectating: this.spectating,
							gameOver: v.gameOver,
							stats: v.playerStats,
							teamRank: v.teamRank,
							teamMode: this.teamMode
						}, this.playerBarn), this.touch.hideAll(), v.victory && (!this.spectating || this.teamMode > 1) && (this.victoryMusic = this.audioManager.playSound("menu_music", {
							channel: "music",
							delay: 1300,
							forceStart: !0
						}));
						break;
					case u.Msg.Pickup:
						var k = new u.PickupMsg;
						if (k.deserialize(t), k.type == u.PickupMsgType.Success && k.item) {
							var _ = r.items[k.item];
							this.audioManager.playSound(_.sound.pickup, {
								channel: "ui"
							}), "throwable" == _.type && (this.activePlayer.lastThrowablePickupSfxTicker = .3)
						} else this.ui2Manager.displayPickupMessage(k.type);
						break;
					case u.Msg.Disconnect:
						var w = new u.DisconnectMsg;
						w.deserialize(t), this.disconnectMsg = this.localization.translate(w.reason)
				}
			},
			sendMessage: function(e, t) {
				var a = new u.MsgStream(new ArrayBuffer(4096));
				a.serializeMsg(e, t), this.sendMessageImpl(a)
			},
			sendMessageImpl: function(e) {
				if (this.ws && this.ws.readyState == this.ws.OPEN) try {
					this.ws.send(e.getBuffer())
				} catch (e) {
					M.storeGeneric("gameError", "sendMessageException"), this.ws.close()
				}
			}
		}, o.preloadImages = function(e) {
			var t = ["img/player/circle-base-01.svg", "img/player/player-base-01.svg", "img/player/armor-base-01.svg", "img/player/player-hands-01.svg", "img/player/bullet-trail-02.svg", "img/loot/loot-circle-outer-01.svg", "img/gui/skull.svg", "img/gui/player-map-outer.svg", "img/gui/pad.svg", "img/guns/gun-short-01.svg", "img/guns/gun-med-01.svg", "img/guns/gun-long-01.svg", "img/guns/gun-dp28-top-01.svg", "img/guns/gun-m249-bot-01.svg", "img/proj/frag-proj-nopin-nolever.svg", "img/proj/frag-proj-pin.svg", "img/proj/frag-proj-nopin.svg", "img/proj/frag-pin.svg"],
				a = function(e) {
					"none" != e && -1 == t.indexOf(e) && t.push(e)
				};
			for (var i in d.Defs)
				if (d.Defs.hasOwnProperty(i)) {
					var o = d.Defs[i],
						s = o.img;
					if (void 0 !== s && (void 0 !== s.sprite && a(s.sprite), void 0 !== s.residue && a(s.residue)), o.button && o.button.useImg && a(o.button.useImg), "building" == o.type) {
						for (var l = 0; l < o.floor.imgs.length; l++) a(o.floor.imgs[l].sprite);
						for (var c = 0; c < o.ceiling.imgs.length; c++) a(o.ceiling.imgs[c].sprite)
					}
				}
			for (var p in r.items)
				if (r.items.hasOwnProperty(p)) {
					var u = r.items[p];
					if (void 0 !== u.lootImg && a(u.lootImg.sprite), void 0 !== u.worldImg && a(u.worldImg.sprite), void 0 !== u.handImg)
						for (var h in u.handImg) void 0 !== u.handImg[h].right && "none" !== u.handImg[h].right && a(u.handImg[h].right.sprite), void 0 !== u.handImg[h].left && "none" !== u.handImg[h].left && a(u.handImg[h].left.sprite)
				}
			for (var g in D.Defs)
				if (D.Defs.hasOwnProperty(g) && void 0 !== D.Defs[g].image)
					for (var f = D.Defs[g].image, y = 0; y < f.length; y++) a(f[y]);
			for (var b in m) m.hasOwnProperty(b) && void 0 !== m[b].texture && a(m[b].texture);
			var x = Math.max(window.screen.width, window.screen.height),
				v = Math.min(window.screen.width, window.screen.height);
			x *= window.devicePixelRatio, v *= window.devicePixelRatio;
			for (var k = x < 1366 && v < 768, _ = k ? .5 : 1, w = 0; w < t.length; w++) {
				var S = n.Texture.fromImage(t[w], void 0, void 0, _);
				S.baseTexture.resolution = _, e.plugins.prepare.upload(S.baseTexture)
			}
			e.plugins.prepare.limiter.maxItemsPerFrame = 1
		}, e.exports = o
	},
	moUH: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var o, n = {
				None: 0,
				Danger: 1,
				Coming: 2,
				Help: 3,
				Ammo: 4,
				Medical: 5
			},
			r = (o = {}, i(o, n.None, {}), i(o, n.Danger, {
				texture: "img/gui/ping-team-danger.svg",
				sound: "ping_danger_01",
				pingMap: !0,
				mapLife: 4
			}), i(o, n.Coming, {
				texture: "img/gui/ping-team-coming.svg",
				sound: "ping_coming_01",
				pingMap: !0,
				mapLife: 300
			}), i(o, n.Help, {
				texture: "img/gui/ping-team-help.svg",
				sound: "ping_help_01",
				pingMap: !0,
				mapLife: 4
			}), i(o, n.Emote, {}), o);
		e.exports = {
			Ping: n,
			kPings: r
		}
	},
	nlKB: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "pt"
			},
			"word-order": "svo",
			"index-slogan": "Batalha Real 2D",
			"index-region": "Região",
			"index-north-america": "América do Norte",
			"index-europe": "Europa",
			"index-asia": "Ásia",
			"index-players": "jogadores",
			"index-play-solo": "Jogar Sozinho",
			"index-play-duo": "Jogar em Duplas",
			"index-play-squad": "Jogar em Tropas",
			"index-create-team": "Criar Equipe",
			"index-join-team": "Junte-se à Equipe",
			"index-how-to-play": "Como Jogar",
			"index-leave-team": "Abandonar Equipe",
			"index-joining-team": "Entrando na Equipe",
			"index-creating-team": "Criando Equipe",
			"index-invite-link": "Link de Convite",
			"index-solo": "Solo",
			"index-duo": "Dupla",
			"index-squad": "Tropa",
			"index-auto-fill": "Preencher",
			"index-no-fill": "Não Preencher",
			"index-waiting-for-leader": "Esperando o líder começar",
			"index-play": "Jogar",
			"index-featured-youtuber": "YouTuber em Destaque",
			"index-settings": "Configurações",
			"index-high-resolution": "Alta resolução (marque para melhorar a qualidade visual)",
			"index-screen-shake": "Tremer a tela",
			"index-master-volume": "Volume geral",
			"index-sfx-volume": "Volume de efeitos sonoros",
			"index-music-volume": "Volume da música",
			"index-mobile-announce": "Agora disponível no celular!",
			"index-mobile-tooltip": "Visite <span>surviv.io</span> no seu dispositivo móvel para jogar em qualquer lugar!",
			"index-team-is-full": "A equipe está cheia!",
			"index-failed-joining-team": "Falha ao entrar na equipe.",
			"index-failed-creating-team": "Falha ao criar a equipe.",
			"index-failed-finding-game": "Falha ao encontrar jogo.",
			"index-failed-joining-game": "Falha ao entrar no jogo.",
			"index-lost-connection": "Perda de conexão com a equipe.",
			"index-host-closed": "Conexão fechada do servidor.",
			"index-view-more": "Ver Mais",
			"index-back-to-main": "Voltar ao Menu Principal",
			"index-most-kills": "Maior Número de Kills",
			"index-total-kills": "Total de Kills",
			"index-total-wins": "Total de Vitórias",
			"index-top-5-percent": "Top 5 porcento",
			"index-kill-death-ratio": "Taxa de assinatados/mortes",
			"index-for": "para",
			"index-today": "Hoje",
			"index-this-week": "Esta Semana",
			"index-all-time": "Todos os Tempos",
			"index-top-100": "TOP 100",
			"index-rank": "Classificação",
			"index-player": "Jogador",
			"index-total-games": "Total de jogos",
			"index-controls": "Controles",
			"index-movement": "Movimentação",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Mira",
			"index-aim-ctrl": "Mouse",
			"index-punch": "Soco",
			"index-shoot": "Atirar",
			"index-shoot-ctrl": "Clique com botão esquerdo",
			"index-change-weapons": "Trocar de Armas",
			"index-change-weapons-ctrl": "1 até 4 ou Roda do Mouse",
			"index-stow-weapons": "Guardar Armas (Modo Soco)",
			"index-stow-weapons-ctrl": "3 ou E",
			"index-swap-weapons": "Alternar para a Arma Anterior",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Recarregar",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Alcance do Zoom",
			"index-scope-zoom-ctrl": "Clique com o botão esquerdo no Zoom",
			"index-pickup": "Pegar",
			"index-loot": "Saquear",
			"index-revive": "Reviver",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Usar Item Médico",
			"index-use-medical-ctrl": "Clique com o Botão esquerdo sobre o Item ou pressione 7 até 0",
			"index-drop-item": "Soltar Item",
			"index-drop-item-ctrl": "Clique com o Botão direito no Item",
			"index-cancel-action": "Cancelar Ação",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Ver Mapa",
			"index-view-map-ctrl": "M ou G",
			"index-toggle-minimap": "Alternar para Minimapa",
			"index-toggle-minimap-ctrl": "V",
			"game-alive": "Vivos",
			"game-reloading": "Recarregando",
			"game-using": "Usando",
			"game-reviving": "Revivendo",
			"game-revive-teammate": "Reviver",
			"game-equip": "Equipar",
			"game-cancel": "Cancelar",
			"game-You": "Você",
			"game-you": "você",
			"game-themselves": "a si próprios",
			"game-yourself": "a si próprio",
			"game-you-died": "morreu",
			"game-player-died": "morreu",
			"game-with": "com",
			"game-knocked-out": "derrubou",
			"game-killed": "matou",
			"game-finally-killed": "finalmente matou",
			"game-finally-bled-out": "finalmente se libertou",
			"game-died-outside": "morreu fora da zona de segurança",
			"game-the-red-zone": "A zona vermelha",
			"game-waiting-for-players": "Esperando jogadores",
			"game-spectating": "Assistindo",
			"game-red-zone-advances": "A zona vermelha avança em",
			"game-red-zone-advancing": "Zona vermelha avançando, vá para a zona segura!",
			"game-seconds": "segundos",
			"game-minutes": "minutos",
			"game-minute": "minuto",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Espaço insuficiente!",
			"game-item-already-owned": "O jogador já possui o item!",
			"game-item-already-equipped": "Item já equipado!",
			"game-better-item-equipped": "Melhor item equipado!",
			"game-play-new-game": "Jogar Partida",
			"game-spectate": "Assistir",
			"game-full-screen": "Tela Cheia",
			"game-sound": "Som",
			"game-quit-game": "Sair do Jogo",
			"game-return-to-game": "Voltar ao Jogo",
			"game-hide-match-stats": "Esconder Estatísticas",
			"game-view-match-stats": "Visualizar Estatísticas",
			"game-previous-teammate": "Colega Anterior",
			"game-next-teammate": "Próximo Colega",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Sair do Jogo",
			"game-your-results": "Seus Resultados",
			"game-chicken": "Hoje vamos comer frango no jantar!",
			"game-won-the-game": "ganhou o jogo.",
			"game-team-eliminated": "Sua equipe foi derrotada.",
			"game-rank": "Classificação",
			"game-team-rank": "Classificação da Equipe",
			"game-team-kills": "Kills da Equipe",
			"game-kill": "Kill",
			"game-kills": "Kills",
			"game-damage-dealt": "Dano Causado",
			"game-damage-taken": "Dando Recebido",
			"game-survived": "Sobreviveu por",
			"game-backpack00": "Bolsa",
			"game-backpack01": "Pacote Pequeno",
			"game-backpack02": "Pacote Regular",
			"game-backpack03": "Pacote Militar",
			"game-bandage": "Bandagem",
			"game-bandage-tooltip": "Clique com o botão esquerdo para restaurar 15 de vida.",
			"game-healing-tooltip": "Não é possível curar quando a vida é maior que 75.",
			"game-healthkit": "Kit Médico",
			"game-healthkit-tooltip": "Clique com o botão esquerdo para restaurar 100 de vida.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Clique com o botão esquerdo para aumentar a adrenalina em 25.",
			"game-adrenaline-tooltip": "A adrenalina restaura a vida com o passar do tempo.",
			"game-painkiller": "Pílulas",
			"game-painkiller-tooltip": "Clique com o botão esquerdo para aumentar a adrenalina em 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Munição para M9, Glock, MP5, MAC-10, UMP9 e Vector.",
			"game-12gauge": "Calibre 12",
			"game-12gauge-tooltip": "Munição para M870, Saiga-12 e MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Munição para AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 e DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Munição para FAMAS, HK416, Mk 12 e M249.",
			"game-chest01": "Colete Nível 1",
			"game-chest02": "Colete Nível 2",
			"game-chest03": "Colete Nível 3",
			"game-helmet01": "Capacete Nível 1",
			"game-helmet02": "Capacete Nível 2",
			"game-helmet03": "Capacete Nível 3",
			"game-1xscope": "1x Mira",
			"game-2xscope": "2x Mira",
			"game-4xscope": "4x Mira",
			"game-8xscope": "8x Mira",
			"game-15xscope": "15x Mira",
			"game-level-1": "Nvl. 1",
			"game-level-2": "Nvl. 2",
			"game-level-3": "Nvl. 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "Granada de Fragmento",
			"game-hud-frag": "Fragmento",
			"game-barrel_01": "um barril",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	"p/CU": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("+0OL"),
			s = r.GasMode,
			l = a("0od3"),
			c = a("Tf6H"),
			m = a("/2+T"),
			d = 1e5,
			p = 720,
			u = function() {
				function e(t, a) {
					if (i(this, e), this.gasColorDOMString = "", this.display = null, this.canvas = null, t) this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.display = new n.Sprite(n.Texture.fromCanvas(this.canvas)), this.gasColorDOMString = c.colorToDOMString(a, .6);
					else {
						this.display = new n.Graphics;
						var o = this.display;
						o.clear(), o.beginFill(a, .6), o.moveTo(-d, -d), o.lineTo(d, -d), o.lineTo(d, d), o.lineTo(-d, d), o.closePath(), o.moveTo(0, 1);
						for (var r = 1; r < p; r++) {
							var s = r / p,
								l = Math.sin(2 * Math.PI * s),
								m = Math.cos(2 * Math.PI * s);
							o.lineTo(l, m)
						}
						o.closePath(), o.addHole()
					}
					this.display.visible = !1
				}
				return o(e, [{
					key: "resize",
					value: function() {
						null != this.canvas && (this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.display.texture.update())
					}
				}, {
					key: "render",
					value: function(e, t, a) {
						if (null != this.canvas) {
							var i = this.canvas,
								o = i.getContext("2d");
							o.clearRect(0, 0, i.width, i.height), o.beginPath(), o.fillStyle = this.gasColorDOMString, o.rect(0, 0, i.width, i.height), o.arc(e.x, e.y, t, 0, 2 * Math.PI, !0), o.fill()
						} else {
							var n = m.copy(e),
								r = t;
							r < .1 && (r = 1, n.x += .5 * d);
							var s = this.display;
							s.position.set(n.x, n.y), s.scale.set(r, r)
						}
						this.display.visible = a
					}
				}]), e
			}(),
			h = function() {
				function e() {
					i(this, e), this.display = new n.Container, this.circleGfx = new n.Graphics, this.lineGfx = new n.Graphics, this.display.addChild(this.circleGfx), this.display.addChild(this.lineGfx), this.circleGfx.visible = !1, this.lineGfx.visible = !1, this.safePos = m.create(0, 0), this.safeRad = 0, this.playerPos = m.create(0, 0)
				}
				return o(e, [{
					key: "render",
					value: function(e, t, a, i, o) {
						if (this.circleGfx.visible = i, this.lineGfx.visible = o, i || o) {
							var n = !m.eq(this.safePos, e, 1e-4),
								r = Math.abs(this.safeRad - t) > 1e-4,
								s = !m.eq(this.playerPos, a, 1e-4);
							if (n && (this.safePos.x = e.x, this.safePos.y = e.y), r && (this.safeRad = t), s && (this.playerPos.x = a.x, this.playerPos.y = a.y), n && this.circleGfx.position.set(this.safePos.x, this.safePos.y), r && (this.circleGfx.clear(), this.circleGfx.lineStyle(1.5, 16777215), this.circleGfx.drawCircle(0, 0, t)), n || r || s) {
								var l = m.length(m.sub(a, e)) < t,
									c = l ? .5 : 1;
								this.lineGfx.clear(), this.lineGfx.lineStyle(2, 65280, c), this.lineGfx.moveTo(a.x, a.y), this.lineGfx.lineTo(e.x, e.y)
							}
						}
					}
				}]), e
			}(),
			g = function() {
				function e(t) {
					i(this, e);
					var a = 1024 * (Math.sqrt(2) + .01);
					this.mode = s.Inactive, this.circleT = 0, this.duration = 0, this.circleOld = {
						pos: m.create(0, 0),
						rad: a
					}, this.circleNew = {
						pos: m.create(0, 0),
						rad: a
					}, this.gasRenderer = new u(t, 16711680)
				}
				return o(e, [{
					key: "resize",
					value: function() {
						this.gasRenderer.resize()
					}
				}, {
					key: "isActive",
					value: function() {
						return this.mode != s.Inactive
					}
				}, {
					key: "getCircle",
					value: function() {
						var e = this.mode == s.Moving ? this.circleT : 0;
						return {
							pos: m.lerp(e, this.circleOld.pos, this.circleNew.pos),
							rad: l.lerp(e, this.circleOld.rad, this.circleNew.rad)
						}
					}
				}, {
					key: "setProgress",
					value: function(e) {
						this.circleT = e
					}
				}, {
					key: "setFullState",
					value: function(e, t, a, i) {
						if (t.mode != this.mode) {
							var o = Math.ceil(t.duration * (1 - e));
							i.setWaitingForPlayers(!1), i.displayAnnouncement(t.mode, o)
						}
						this.mode = t.mode, this.duration = t.duration, this.circleT = e, this.circleOld.pos = m.copy(t.posOld), this.circleOld.rad = t.radOld, this.circleNew.pos = m.copy(t.posNew), this.circleNew.rad = t.radNew
					}
				}, {
					key: "render",
					value: function(e) {
						var t = this.getCircle(),
							a = e.pointToScreen(t.pos),
							i = e.scaleToScreen(t.rad);
						this.gasRenderer.render(a, i, this.isActive())
					}
				}]), e
			}();
		e.exports = {
			GasRenderer: u,
			GasSafeZoneRenderer: h,
			Gas: g
		}
	},
	pI87: function(e, t, a) {
		"use strict";

		function i() {
			this.ticker = 0, this.container = new n.Sprite, this.container.anchor.set(.5, .5), this.container.scale.set(1, 1), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.8, .8), this.container.addChild(this.sprite)
		}

		function o() {
			this.lootPool = new m.Pool(i), this.closestLoot = null
		}
		var n = a("gKxX"),
			r = a("+0OL"),
			s = a("0od3"),
			l = a("Tf6H"),
			c = a("/2+T"),
			m = (a("zinx"), a("r4ug"), a("dT1u")),
			d = a("xgte"),
			p = d.RenderType;
		i.prototype = {
			init: function() {},
			free: function() {
				this.container.visible = !1
			},
			updateData: function(e, t, a, i) {
				if (this.pos = c.copy(e.pos), t && (this.layer = e.layer, this.name = e.name, this.count = e.count, this.isOld = e.isOld), a) {
					this.ticker = 0, this.isOld && (this.ticker = 10);
					var o = r.items[this.name];
					this.imgScale = 1.25 * o.lootImg.scale, this.sprite.texture = n.Texture.fromImage(o.lootImg.sprite), this.sprite.tint = o.lootImg.tint, this.container.texture = o.lootImg.border ? n.Texture.fromImage("img/loot/loot-circle-outer-01.svg") : n.Texture.EMPTY;
					var s = r.items[o.ammo];
					this.container.tint = s ? s.lootImg.tintDark : 0, this.container.visible = !0
				}(a || t) && i.renderer.addPIXIObj(this.container, p.Loot, this.layer, 13, this.__id)
			}
		}, o.prototype = {
			update: function(e, t, a) {
				this.closestLoot = null;
				for (var i = Number.MAX_VALUE, o = this.lootPool.getPool(), n = 0; n < o.length; n++) {
					var m = o[n];
					if (m.active) {
						if (l.sameLayer(m.layer, t.layer)) {
							var d = m.pos,
								p = r.items[m.name].rad + r.player.radius,
								u = c.sub(t.pos, d),
								h = c.lengthSqr(u);
							h < p * p && h < i && (i = h, this.closestLoot = m)
						}
						m.ticker += e;
						var g = s.delerp(m.ticker, 0, 1),
							f = s.easeOutElastic(g, .75),
							y = a.pointToScreen(m.pos),
							b = a.pixels(m.imgScale * f);
						m.container.position.set(y.x, y.y), m.container.scale.set(b, b)
					}
				}
			},
			getClosestLoot: function() {
				return this.closestLoot
			}
		}, e.exports = {
			LootBarn: o
		}
	},
	pQi2: function(e, t, a) {
		"use strict";

		function i(e) {
			if (Array.isArray(e)) {
				for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
				return a
			}
			return Array.from(e)
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n() {
			var e = {
					fontFamily: "Arial",
					fontWeight: "bold",
					fontSize: _.pixelRatio > 1 ? 30 : 22,
					align: "center",
					fill: 65535,
					stroke: 0,
					strokeThickness: 0,
					dropShadow: !0,
					dropShadowColor: "#000000",
					dropShadowBlur: 1,
					dropShadowAngle: Math.PI / 3,
					dropShadowDistance: 1
				},
				t = new l.Text("", e);
			return t.anchor.set(.5, .5), t.scale.set(.5, .5), t.position.set(0, 30), t
		}

		function r(e, t, a, i, o, n) {
			for (var r = i, s = g.add(t, g.mul(a, i)), l = e.obstaclePool.getPool(), c = 0; c < l.length; c++) {
				var m = l[c];
				if (!(!m.active || m.dead || !m.collidable || m.isWindow || m.height < o) && h.sameLayer(m.layer, n)) {
					var d = b.intersectSegment(m.collider, t, s);
					d && (r = Math.min(r, g.length(g.sub(d.point, t))))
				}
			}
			return r
		}
		var s = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			l = a("gKxX"),
			c = a("+0OL"),
			m = c.Action,
			d = c.Anim,
			p = a("Bk7F"),
			u = a("yp2f"),
			h = a("Tf6H"),
			g = a("/2+T"),
			f = a("0od3"),
			y = a("8iex"),
			b = a("9xSA"),
			x = a("K7EQ"),
			v = a("qwV+"),
			k = a("85i3"),
			_ = a("zinx"),
			w = a("Jr6A"),
			S = (a("r4ug"), a("dT1u")),
			M = a("EZ6M"),
			T = a("xgte"),
			P = T.RenderType,
			C = function() {
				function e() {
					o(this, e), this.container = new l.Container, this.gunContainerL = new l.Container, this.gunContainerR = new l.Container, this.skinType = "outfitBase";
					var t = c.items[this.skinType];
					this.footSpriteName = "img/player/player-feet-01.svg", this.footLt = g.create(-20, -35), this.footRt = g.create(20, -35), this.foot_left = l.Sprite.fromImage(this.footSpriteName), this.foot_left.anchor.set(.5, .5), this.foot_left.scale.set(.45, .45), this.foot_left.pivot.set(this.footLt.x, this.footLt.y), this.foot_left.tint = t.skinImg.handTint, this.foot_left.visible = !1, this.foot_left_submerge = l.Sprite.fromImage(this.footSpriteName), this.foot_left_submerge.anchor.set(.5, .5), this.foot_left_submerge.tint = x.water, this.foot_left_submerge.visible = !1, this.foot_left_submerge.alpha = 0, this.foot_left.addChild(this.foot_left_submerge), this.container.addChild(this.foot_left), this.foot_right = l.Sprite.fromImage(this.footSpriteName), this.foot_right.anchor.set(.5, .5), this.foot_right.scale.set(.45, .45), this.foot_right.pivot.set(this.footRt.x, this.footRt.y), this.foot_right.tint = t.skinImg.handTint, this.foot_right.visible = !1, this.foot_right_submerge = l.Sprite.fromImage(this.footSpriteName), this.foot_right_submerge.anchor.set(.5, .5), this.foot_right_submerge.tint = x.water, this.foot_right_submerge.visible = !1, this.foot_right_submerge.alpha = 0, this.foot_right.addChild(this.foot_right_submerge), this.container.addChild(this.foot_right), this.backpack = l.Sprite.fromImage("img/player/circle-base-01.svg"), this.backpack.anchor.set(.5, .5), this.backpack.scale.set(.4, .4), this.backpack.tint = t.skinImg.backpackTint, this.container.addChild(this.backpack), this.baseSpriteName = t.skinImg.baseSprite, this.sprite = l.Sprite.fromImage(this.baseSpriteName), this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.5 * t.skinImg.baseScale, .5 * t.skinImg.baseScale), this.sprite.tint = t.skinImg.baseTint, this.container.addChild(this.sprite), this.gunBot = l.Sprite.fromImage("img/guns/gun-short-01.svg"), this.gunBot.anchor.set(.5, .75), this.gunBot.scale.set(.5, .5), this.gunBot.pivot.set(0, 110), this.gunBot.visible = !1, this.gunContainerL.addChild(this.gunBot), this.gunBotVis = !1, this.gunOffhand = l.Sprite.fromImage("img/guns/gun-short-01.svg"), this.gunOffhand.anchor.set(.5, .75), this.gunOffhand.scale.set(.5, .5), this.gunOffhand.pivot.set(0, 110), this.gunOffhand.visible = !1, this.gunContainerR.addChild(this.gunOffhand), this.gunOffhandVis = !1, this.gun = l.Sprite.fromImage("img/guns/gun-short-01.svg"), this.gun.anchor.set(.5, .75), this.gun.scale.set(.5, .5), this.gun.pivot.set(0, 110), this.gunContainerL.addChild(this.gun), this.gunVis = !1, this.chest = l.Sprite.fromImage("img/player/armor-base-01.svg"), this.chest.anchor.set(.5, .5), this.chest.scale.set(.5, .5), this.container.addChild(this.chest), this.submergedMask = l.Sprite.fromImage("img/player/player-base-01.svg"), this.submergedMask.anchor.set(.5, .5), this.submergedMask.scale.set(.6, .6), this.container.addChild(this.submergedMask), this.submerged = l.Sprite.fromImage("img/player/player-wading-01.svg"), this.submerged.anchor.set(.5, .5), this.submerged.scale.set(.9, .9), this.submerged.alpha = 0, this.submerged.tint = 2854052, this.submerged.mask = this.submergedMask, this.submerged.visible = !0, this.container.addChild(this.submerged), this.submersion = 0, this.handSpriteName = t.skinImg.handSprite, this.hand_left = l.Sprite.fromImage(this.handSpriteName), this.hand_left.anchor.set(.5, .5), this.hand_left.scale.set(.35, .35), this.hand_left.pivot.set(35, 40), this.hand_left.tint = t.skinImg.handTint, this.hand_left_submerge = l.Sprite.fromImage(this.handSpriteName), this.hand_left_submerge.anchor.set(.5, .5), this.hand_left_submerge.tint = x.water, this.hand_left_submerge.visible = !1, this.hand_left_submerge.alpha = 0, this.hand_left.addChild(this.hand_left_submerge), this.gunContainerL.addChild(this.hand_left), this.hand_right = l.Sprite.fromImage(this.handSpriteName), this.hand_right.anchor.set(.5, .5), this.hand_right.scale.set(.35, .35), this.hand_right.pivot.set(-35, 40), this.hand_right.tint = t.skinImg.handTint, this.hand_right_submerge = l.Sprite.fromImage(this.handSpriteName), this.hand_right_submerge.anchor.set(.5, .5), this.hand_right_submerge.tint = x.water, this.hand_right_submerge.visible = !1, this.hand_right_submerge.alpha = 0, this.hand_right.addChild(this.hand_right_submerge), this.gunContainerR.addChild(this.hand_right), this.object_left = l.Sprite.from(l.Texture.EMPTY), this.object_left.anchor.set(.5, .5), this.object_left.pivot.set(0, 0), this.object_left.visible = !1, this.hand_left.addChild(this.object_left), this.object_right = l.Sprite.from(l.Texture.EMPTY), this.object_right.anchor.set(.5, .5), this.object_right.visible = !1, this.hand_right.addChild(this.object_right), this.handLt = g.create(35, 40), this.handRt = g.create(-35, 40), this.gunHandLt = g.copy(this.handLt), this.gunHandRt = g.copy(this.handRt), this.objHandLt = g.copy(this.handLt), this.objHandRt = g.copy(this.handRt), this.gunHandLtVis = !0, this.gunHandRtVis = !0, this.objLtVis = !1, this.objRtVis = !1, this.gunTop = l.Sprite.fromImage("img/guns/gun-short-01.svg"), this.gunTop.anchor.set(.5, 1), this.gunTop.scale.set(.5, .5), this.gunTop.pivot.set(0, 110), this.gunTop.visible = !1, this.gunContainerL.addChild(this.gunTop), this.gunTopVis = !1, this.container.addChild(this.gunContainerL), this.container.addChild(this.gunContainerR), this.helmet = l.Sprite.fromImage("img/player/circle-base-01.svg"), this.helmet.anchor.set(.5, .5), this.helmet.scale.set(.3, .3), this.container.addChild(this.helmet), this.nameText = n(), this.nameText.visible = !1, this.container.addChild(this.nameText), this.anim = {
						type: d.None,
						seq: 0,
						frame: 0,
						timer: 0,
						duration: 0
					}, this.isOnBrightSurface = !1, this.weapType = "", this.wasInWater = !1, this.stepDistance = 0, this.zoomFast = !1, this.playedDryFire = !1, this.curAction = {
						type: m.None
					}, this.actionSoundInstance = !1, this.soundUpdateThrottle = 0, this.downed = !1, this.bleedTicker = 0, this.lastThrowablePickupSfxTicker = 0, this.isNearDoorError = !1, this.doorErrorTicker = 0, this.noCeilingRevealTicker = 0, this.netData = {}, this.localData = {
						action: {
							type: m.None
						},
						spectatorCount: 0
					}, this.pos = g.create(0, 0), this.dir = g.create(1, 0), this.scale = c.player.img.scale, this.layer = 0
				}
				return s(e, [{
					key: "init",
					value: function() {
						this.isNew = !1, this.wasInsideObstacle = !1, this.insideObstacleType = "", this.lastInsideObstacleTime = 0, this.playAnim(d.None, 0)
					}
				}, {
					key: "free",
					value: function() {
						this.container.visible = !1
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = this.netData;
						o.pos = g.copy(e.pos), o.dir = g.copy(e.dir), t && (o.layer = e.layer, o.dead = e.dead, o.downed = e.downed, o.disconnected = e.disconnected, o.actionType = e.actionType, o.animType = e.animType, o.animSeq = e.animSeq, o.skin = e.skin, o.backpack = e.backpack, o.helmet = e.helmet, o.chest = e.chest, o.curWeapType = e.curWeapType, this.netData.animSeq != this.anim.seq && this.playAnim(this.netData.animType, this.netData.animSeq)), a && (this.isNew = !0)
					}
				}, {
					key: "setLocalData",
					value: function(e, t) {
						var a = this.localData.curScope,
							i = this.localData;
						if (i.scopedIn = e.scopedIn, i.health = e.health, e.boostDirty && (i.boost = e.boost), i.action = {
								type: this.netData.actionType
							}, e.hasAction && (i.action.time = e.action.time, i.action.duration = e.action.duration, i.action.item = e.action.item, i.action.targetId = e.action.targetId), e.inventoryDirty) {
							i.curScope = e.curScope, i.inventory = {};
							for (var o in c.bagSizes) c.bagSizes.hasOwnProperty(o) && (i.inventory[o] = e.inventory[o])
						}
						if (e.weapsDirty) {
							i.curWeapIdx = e.curWeapIdx, i.weapons = [];
							for (var n = 0; n < c.WeaponSlot.Count; n++) {
								var r = {};
								r.name = e.weapons[n].name, r.ammo = e.weapons[n].ammo, i.weapons.push(r)
							}
						}
						e.spectatorCountDirty && (i.spectatorCount = e.spectatorCount), this.localData.curScope != a && (this.zoomFast = !0), this.localData.scopedIn && (this.zoomFast = !1)
					}
				}, {
					key: "getScopeZoom",
					value: function() {
						var e = this.netData.downed || this.localData.scopedIn ? "1xscope" : this.localData.curScope;
						return c.scopeZoomRadius[e]
					}
				}, {
					key: "getBagLevel",
					value: function() {
						return c.items[this.netData.backpack].level
					}
				}, {
					key: "equippedWeaponType",
					value: function() {
						return c.items[this.netData.curWeapType].type
					}
				}, {
					key: "hasWeaponInSlot",
					value: function(e) {
						return "" !== this.localData.weapons[e].name
					}
				}, {
					key: "updateSkin",
					value: function() {
						var e = this.skinType,
							t = c.items[e].skinImg;
						this.baseSpriteName = t.baseSprite, this.sprite.texture = l.Texture.fromImage(this.baseSpriteName), this.sprite.tint = t.baseTint, this.sprite.scale.set(.5 * t.baseScale, .5 * t.baseScale), this.hand_left.tint = t.handTint, this.hand_right.tint = t.handTint, this.foot_left.tint = t.handTint, this.foot_right.tint = t.handTint, this.backpack.tint = t.backpackTint
					}
				}, {
					key: "updateWeapon",
					value: function() {
						if (!this.netData.downed) {
							var e = this.weapType,
								t = c.items[e];
							switch (t.type) {
								case "gun":
									var a = t.worldImg;
									t.isDual ? (this.gun.texture = l.Texture.fromImage(a.sprite), this.gun.tint = a.tint, this.gun.scale.set(a.scale.x, a.scale.y), this.gun.pivot.set(-17.5, 20), this.gunVis = !0, this.gunOffhand.texture = l.Texture.fromImage(a.sprite), this.gunOffhand.tint = a.tint, this.gunOffhand.scale.set(a.scale.x, a.scale.y), this.gunOffhand.pivot.set(17.5, 20), this.gunOffhandVis = !0, this.gunTopVis = !1, this.gunBotVis = !1, this.gunHandRt = g.create(25, 45), this.gunHandLt = g.create(-25, 45), this.gunHandLtVis = !0, this.gunHandRtVis = !0) : (this.gun.texture = l.Texture.fromImage(a.sprite), this.gun.tint = a.tint, this.gun.scale.set(a.scale.x, a.scale.y), this.gun.pivot.set(0, 20), this.gunVis = !0, this.gunOffhandVis = !1, a.sprite_bot && (this.gunBot.texture = l.Texture.fromImage(a.sprite_bot), this.gunBot.tint = 16777215, this.gunBot.scale.set(a.scale.x, a.scale.y), this.gunBot.pivot.set(0, 20)), this.gunBotVis = void 0 !== a.sprite_bot, a.sprite_top && (this.gunTop.texture = l.Texture.fromImage(a.sprite_top), this.gunTop.scale.set(a.scale.x, a.scale.y), this.gunTop.pivot.set(0, 20)), this.gunTopVis = void 0 !== a.sprite_top, this.gunHandLt = g.create(-15, 80 + a.leftHandOffset), this.gunHandRt = g.create(-5, 40), this.gunHandLtVis = 2 == a.hands, this.gunHandRtVis = !0), this.objLtVis = !1, this.objRtVis = !1;
									break;
								case "melee":
									this.gunVis = !1, this.gunBotVis = !1, this.gunOffhandVis = !1, this.gunTopVis = !1, this.gunHandLtVis = !0, this.gunHandRtVis = !0, this.objLtVis = !1, this.objRtVis = !1;
									break;
								case "throwable":
									this.gunVis = !1, this.gunBotVis = !1, this.gunOffhandVis = !1, this.gunTopVis = !1, this.gunHandLtVis = !0, this.gunHandRtVis = !0, this.objLtVis = !0, this.objRtVis = !0, this.objHandLt = g.create(27.5, 45), this.objHandRt = g.create(-27.5, 45);
									var i = t.handImg.equip;
									this.setObjectImg(i, !0), this.setObjectImg(i, !1)
							}
						}
					}
				}, {
					key: "setObjectImg",
					value: function(e, t) {
						var a = t ? this.object_right : this.object_left,
							i = e[t ? "right" : "left"];
						a.texture = "none" == i.sprite ? l.Texture.EMPTY : l.Texture.fromImage(i.sprite), void 0 !== i.pos && a.pivot.set(i.pos.x, i.pos.y), void 0 !== i.scale && a.scale.set(i.scale, i.scale)
					}
				}, {
					key: "updateDownedState",
					value: function(e, t, a, i) {
						if (this.netData.downed && !this.downed && (this.container.addChildAt(this.gunContainerL, 0), this.container.addChildAt(this.gunContainerR, 0)), !this.netData.downed && this.downed && (this.container.addChild(this.gunContainerL), this.container.addChild(this.gunContainerR)), this.downed = this.netData.downed, this.backpack.visible = !this.downed, this.foot_left.visible = this.downed, this.foot_right.visible = this.downed, this.foot_left_submerge.visible = this.downed, this.foot_right_submerge.visible = this.downed, this.hand_left_submerge.visible = this.downed, this.hand_right_submerge.visible = this.downed, this.bleedTicker -= e, this.netData.downed && this.netData.actionType == m.None && this.bleedTicker < 0) {
							this.bleedTicker = c.player.bleedTickRate;
							var o = g.mul(this.dir, 1);
							o = g.rotate(o, (Math.random() - .5) * Math.PI / 3), t.particleBarn.addParticle(M.Defs.bloodSplat, this.layer, this.pos, o), i || t.audioManager.playSound("player_bullet_hit_02", {
								channel: "hits",
								soundPos: this.pos,
								fallOff: 3,
								layer: this.layer,
								muffled: !0
							})
						}
					}
				}, {
					key: "playAnim",
					value: function(e, t) {
						this.anim = {
							type: e,
							seq: t,
							timer: 0,
							fnFrame: 0,
							mirror: Math.random() < .5,
							startHandLt: g.copy(this.handLt),
							startHandRt: g.copy(this.handRt),
							startFootLt: g.copy(this.footLt),
							startFootRt: g.copy(this.footRt)
						}
					}
				}, {
					key: "updateAnim",
					value: function(e, t) {
						this.anim.timer += e;
						var a = v[this.anim.type];
						if (this.anim.type == d.Melee) {
							var o = this.netData.curWeapType;
							if (void 0 === a[o]) return void this.playAnim(d.None, this.anim.seq);
							a = a[o]
						}
						for (var n = a.frames, r = this.anim.timer, s = -1, l = 0; r >= n[l].time && l < n.length - 1;) r -= n[l].time, s++, l++;
						var c = Math.min(r / n[l].time, 1),
							m = s >= 0 ? n[s].handLt : this.anim.startHandLt,
							p = s >= 0 ? n[s].handRt : this.anim.startHandRt,
							u = n[l].handLt,
							h = n[l].handRt;
						if (this.handLt = f.v2lerp(c, m, u), this.handRt = f.v2lerp(c, p, h), a.mirror && this.anim.mirror) {
							var y = g.copy(this.handLt);
							this.handLt = g.copy(this.handRt), this.handRt = g.copy(y), this.handLt.x *= -1, this.handRt.x *= -1
						}
						if (a.feet) {
							var b = s >= 0 ? n[s].footLt : this.anim.startFootLt,
								x = s >= 0 ? n[s].footRt : this.anim.startFootRt,
								k = n[l].footLt,
								_ = n[l].footRt;
							if (this.footLt = f.v2lerp(c, b, k), this.footRt = f.v2lerp(c, x, _), a.mirror && this.anim.mirror) {
								var w = g.copy(this.footLt);
								this.footLt = g.copy(this.footRt), this.footRt = g.copy(w), this.footLt.x *= -1, this.footRt.x *= -1
							}
						}
						for (var S = l == n.length - 1 && f.eqAbs(c, 1), M = S ? l : s; this.anim.fnFrame <= M;) {
							var T = n[this.anim.fnFrame].done;
							if (void 0 !== T)
								for (var P = 0; P < T.length; P++) {
									var C = T[P];
									this[C.fn].apply(this, [t].concat(i(C.args)))
								}
							this.anim.fnFrame++
						}
						S && (this.playAnim(d.None, this.anim.seq), this.updateWeapon())
					}
				}, {
					key: "playAnimSound",
					value: function(e, t) {
						var a = c.items[this.netData.curWeapType],
							i = a.sound[t];
						void 0 !== i && e.audioManager.playSound(i, {
							channel: "sfx",
							soundPos: this.pos,
							fallOff: 3,
							layer: this.layer,
							muffled: !0
						})
					}
				}, {
					key: "animSetObjectImg",
					value: function(e, t) {
						var a = c.items[this.netData.curWeapType];
						if ("throwable" == a.type) {
							var i = a.handImg[t];
							this.setObjectImg(i, !0), this.setObjectImg(i, !1)
						}
					}
				}, {
					key: "animThrowableParticles",
					value: function(e) {
						var t = g.rotate(g.create(.75, .75), Math.atan2(this.dir.y, this.dir.x));
						e.particleBarn.addParticle(M.Defs.fragPin, this.layer, g.add(this.pos, t), g.mul(g.rotate(this.dir, .5 * Math.PI), 4.5));
						var a = g.rotate(g.create(.75, -.75), Math.atan2(this.dir.y, this.dir.x));
						e.particleBarn.addParticle(M.Defs.fragLever, this.layer, g.add(this.pos, a), g.mul(g.rotate(this.dir, .25 * -Math.PI), 3.5))
					}
				}, {
					key: "doMeleeCollision",
					value: function(e) {
						for (var t = c.items[this.netData.curWeapType], a = g.add(this.pos, g.mul(this.dir, t.rangeMult)), i = t.areaOfEffect, o = [], n = null, r = null, s = 0, l = e.map.obstaclePool.getPool(), m = 0; m < l.length; m++) {
							var d = l[m];
							if (!(!d.active || d.dead || d.height < c.player.meleeHeight) && h.sameLayer(d.layer, 1 & this.layer)) {
								var p = b.intersectCircle(d.collider, a, i);
								p && p.pen > s && (n = d, r = p, s = p.pen)
							}
						}
						if (n) {
							var u = g.add(a, g.mul(this.dir, i - r.pen)),
								f = g.mul(this.dir, -7.5);
							f = g.rotate(f, (Math.random() - .5) * Math.PI / 3), o.push({
								pos: u,
								vel: f,
								particle: n.hitParticle,
								sound: n.sound.punch,
								soundFn: "playGroup"
							})
						}
						for (var x = e.playerBarn.playerPool.getPool(), v = 0; v < x.length; v++) {
							var k = x[v];
							if (k.active && k.__id != this.__id && !k.netData.dead && h.sameLayer(k.layer, this.layer)) {
								if (y.testCircleCircle(g.add(this.pos, g.mul(this.dir, t.rangeMult)), t.areaOfEffect, k.pos, c.player.radius)) {
									var _ = g.mul(this.dir, 1);
									_ = g.rotate(_, (Math.random() - .5) * Math.PI / 3), o.push({
										pos: k.pos,
										vel: _,
										particle: "bloodSplat",
										sound: "punch_hit_01",
										soundFn: "playSound"
									});
									break
								}
							}
						}
						for (var w = 0; w < o.length; w++) {
							var S = o[w];
							e.particleBarn.addParticle(M.Defs[S.particle], this.layer, S.pos, S.vel), e.audioManager[S.soundFn](S.sound, {
								channel: "hits",
								soundPos: S.pos,
								layer: this.layer,
								muffled: !0
							})
						}
					}
				}, {
					key: "updateSubmersion",
					value: function(e, t, a) {
						var i = 0;
						t && (i = f.remap(a.distanceToShore(this.pos), 0, 16, .6, 1)), this.submersion = f.lerp(4 * e, this.submersion, i);
						var o = .75 * this.submersion,
							n = .9 - .4 * this.submersion;
						this.submerged.alpha = o, this.foot_left_submerge.alpha = o, this.foot_right_submerge.alpha = o, this.hand_left_submerge.alpha = o, this.hand_right_submerge.alpha = o, this.submerged.scale.set(n, n)
					}
				}, {
					key: "addRecoil",
					value: function(e, t, a) {
						t && (this.gunContainerL.pivot.y = -e), a && (this.gunContainerR.pivot.y = -e)
					}
				}]), e
			}(),
			I = function() {
				function e() {
					o(this, e), this.playerPool = new S.Pool(C), this.playerInfo = {}, this.teamInfo = {}, this.teammateData = {}
				}
				return s(e, [{
					key: "update",
					value: function(e, t, a, i, o, n, s, l, f, y, x) {
						for (var _ = {
								playerBarn: this,
								map: n,
								audioManager: l,
								particleBarn: i
							}, w = this.playerPool.getPool(), S = 0; S < w.length; S++) {
							var T = w[S];
							if (T.active) {
								var C = T.__id == t;
								if (C) {
									var I = this.playerPool.getPool()[0];
									I.sentinel && (I.pos = g.add(T.netData.pos, g.create(4, 3)), I.netData.pos = g.copy(I.pos))
								}
								var z = T.pos;
								T.pos = g.copy(T.netData.pos), T.dir = g.copy(T.netData.dir), T.layer = T.netData.layer, T.lastThrowablePickupSfxTicker -= e;
								var A = this.playerInfo[t].teamId,
									D = this.playerInfo[T.__id].teamId == A;
								if (T.isNew) {
									var O = this.getPlayerInfo(T.__id);
									T.nameText.text = O.nameUnEntity, T.nameText.visible = !C && D
								}
								for (var L = this.getPlayerById(t), E = null, B = null, F = n.obstaclePool.getPool(), R = 0; R < F.length; R++) {
									var j = F[R];
									if (j.active && !j.dead && j.layer == T.netData.layer)
										if (j.isBush) {
											var N = .25 * c.player.radius;
											b.intersectCircle(j.collider, T.pos, N) && (E = j)
										} else if (j.isDoor && !j.door.open && j.door.playErrorFx) {
										var q = c.player.radius + .25,
											U = g.rotate(g.create(1, 0), j.rot),
											G = g.sub(j.pos, T.pos);
										g.dot(G, U) < 0 && b.intersectCircle(j.collider, T.pos, q) && (B = j)
									}
								}
								var V = null != E;
								if (V && (T.insideObstacleType = E.type), T.lastInsideObstacleTime -= e, T.wasInsideObstacle != V && T.lastInsideObstacleTime < 0 && !T.isNew) {
									var H = p.Defs[T.insideObstacleType];
									T.lastInsideObstacleTime = .2, l.playSound(H.sound.enter, {
										channel: "sfx",
										soundPos: T.pos,
										falloff: 1,
										layer: T.layer,
										muffled: !0
									});
									for (var W = g.normalizeSafe(g.sub(z, T.pos), g.create(1, 0)), K = V ? 1 : -1, X = Math.floor(h.random(3, 5)), Y = 0; Y < X; Y++) {
										var Z = g.mul(g.rotate(g.mul(W, K), (Math.random() - .5) * Math.PI / 1.5), h.random(6, 8));
										i.addParticle(M.Defs[H.hitParticle], T.layer, T.pos, Z)
									}
								}
								T.wasInsideObstacle = V;
								var J = T.isNearDoorError;
								if (T.isNearDoorError = null != B, T.doorErrorTicker -= e, T.isNearDoorError && !J && T.doorErrorTicker <= 0) {
									T.doorErrorTicker = .5;
									var Q = p.Defs[B.type],
										$ = Q.door.sound.error;
									l.playSound($, {
										channel: "sfx",
										soundPos: T.pos,
										falloff: 1,
										layer: T.layer,
										muffled: !0
									})
								}
								var ee = n.getGroundSurface(T.pos, T.layer);
								if (C)
									if (T.soundUpdateThrottle < 0) {
										T.soundUpdateThrottle = .2;
										var te = 0,
											ae = 1;
										if ("water" !== ee) {
											var ie = n.distanceToShore(T.pos);
											ie < 50 && (te = (50 - ie) / 50, ae = 1 - te)
										} else te = 1, ae = 0;
										l.setVolume(f.wavesInst, te), l.setVolume(f.windInst, ae)
									} else T.soundUpdateThrottle -= e;
								T.isOnBrightSurface = 1 == T.layer && "tile" == ee;
								var oe = "water" === ee;
								T.updateSubmersion(e, oe, n), T.stepDistance += g.length(g.sub(z, T.pos)), T.stepDistance > 5 && oe || oe && !T.wasInWater ? (T.stepDistance = 0, n.addRipple(T.pos, 0), _.audioManager.playGroup("footstep_water", {
									soundPos: T.pos,
									fallOff: 3,
									layer: T.layer,
									muffled: !0
								})) : T.stepDistance > 4 && !oe && (T.stepDistance = 0, l.playGroup("footstep_" + ee, {
									soundPos: T.pos,
									fallOff: 3,
									layer: T.layer,
									muffled: !0
								})), T.wasInWater = oe, T.netData.dead || T.updateDownedState(e, _, L, x);
								var ne = T.weapType != T.netData.curWeapType;
								ne && (T.weapType = T.netData.curWeapType, T.updateWeapon());
								var re = T.gunContainerL.pivot.y,
									se = T.gunContainerR.pivot.y;
								if (re = Math.min(0, re - re * e * 5 + e), se = Math.min(0, se - se * e * 5 + e), T.gunContainerL.pivot.y = re, T.gunContainerR.pivot.y = se, C) {
									var le = T.localData.curWeapIdx,
										ce = T.localData.weapons[le],
										me = c.items[ce.name];
									if (!T.playedDryFire && "gun" == T.equippedWeaponType() && (s.mousePressed() || s.mouseDown() && "auto" == me.fireMode) && 0 === T.localData.action.type && !y) {
										var de = T.localData.inventory[me.ammo],
											pe = ce.ammo;
										0 === de && 0 === pe && (l.playSound(me.sound.empty), T.playedDryFire = !0)
									}
									s.mousePressed() || s.mouseDown() || (T.playedDryFire = !1)
								}
								var ue = T.netData.actionType;
								if (!C && T.curAction.type != ue) {
									l.stopSound(this.actionSoundInstance);
									var he = null;
									switch (ue) {
										case m.Reload:
											var ge = T.netData.curWeapType;
											if ("" != ge) {
												he = c.items[ge].sound.reload
											}
									}
									he && (this.actionSoundInstance = l.playSound(he, {
										channel: "otherPlayers",
										soundPos: T.pos,
										fallOff: 2,
										layer: T.layer,
										muffled: !0
									})), T.curAction.type = ue
								}
								if (T.gunSwitchCooldown -= e, C && (ne || T.curWeapIdx != T.localData.curWeapIdx)) {
									T.curWeapIdx = T.localData.curWeapIdx;
									var fe = c.items[T.weapType];
									if ("melee" == fe.type || "throwable" == fe.type)("throwable" != fe.type || T.lastThrowablePickupSfxTicker <= 0) && l.playSound(fe.sound.deploy, {
										channel: "sfx",
										soundPos: T.pos,
										fallOff: 3
									});
									else if ("gun" == fe.type) {
										var ye = "gun_switch_01";
										T.gunSwitchCooldown > 0 ? ye = fe.sound.deploy : T.gunSwitchCooldown = c.player.freeSwitchCooldown, l.stopLocalActionSound(), l.playSound(ye, {
											channel: "activePlayer"
										})
									}
								}
								T.updateAnim(e, _);
								var be = v[T.anim.type],
									xe = !be || !be.hideWeapon;
								(T.netData.downed || T.netData.dead) && (xe = !1), T.gun.visible = !!xe && T.gunVis, T.gunBot.visible = !!xe && T.gunBotVis, T.gunOffhand.visible = !!xe && T.gunOffhandVis, T.gunTop.visible = !!xe && T.gunTopVis, T.hand_left.visible = !xe || T.gunHandLtVis, T.hand_right.visible = !xe || T.gunHandRtVis;
								var ve = T.anim.type == d.Throw;
								T.object_right.visible = !(!xe || ve) && T.objRtVis, T.object_left.visible = !!xe && T.objLtVis;
								var ke = c.items[T.netData.curWeapType].type,
									_e = T.handLt,
									we = T.handRt;
								if (xe && ("gun" == ke ? (_e = T.gunHandLt, we = T.gunHandRt) : T.anim.type == d.None && "throwable" == ke && (_e = T.objHandLt, we = T.objHandRt)), !we) {
									var Se = {
										handRt: void 0 !== we ? we : "undefined",
										gunHandRt: void 0 !== T.gunHandRt ? T.gunHandRt : "undefined",
										objHandRt: void 0 !== T.objHandRt ? T.objHandRt : "undefined",
										pHandRt: void 0 !== T.handRt ? T.handRt : "undefined"
									};
									k.logError("hand_err: " + JSON.stringify(Se))
								}
								T.hand_left.pivot.set(_e.x, _e.y), T.hand_right.pivot.set(we.x, we.y), T.foot_left.pivot.set(T.footLt.x, T.footLt.y), T.foot_right.pivot.set(T.footRt.x, T.footRt.y);
								var Me = Math.atan2(T.dir.x, T.dir.y);
								T.foot_left.rotation = Me, T.foot_right.rotation = Me, T.gunContainerL.rotation = Me, T.gunContainerR.rotation = Me;
								var Te = c.items[T.skinType],
									Pe = "camo" == Te.subtype;
								T.skinType != T.netData.skin && (T.skinType = T.netData.skin, T.updateSkin());
								var Ce = T.getBagLevel();
								if (Ce > 0 && !Pe && !T.downed) {
									var Ie = (c.items[T.netData.backpack], Ce > 0 ? .03 * Ce + .4 : 0),
										ze = .5 * T.backpack.width + 8;
									T.backpack.scale.set(Ie, Ie), T.backpack.pivot.set(T.dir.x * ze, T.dir.y * -ze), T.backpack.visible = !0
								} else T.backpack.visible = !1;
								if ("" == T.netData.chest || Pe) T.chest.visible = !1;
								else {
									var Ae = c.items[T.netData.chest];
									T.chest.tint = Ae.tint, T.chest.visible = !0
								}
								if ("" == T.netData.helmet || Pe) T.helmet.visible = !1;
								else {
									var De = c.items[T.netData.helmet],
										Oe = .5 * T.helmet.width,
										Le = T.downed ? -1 : 1;
									T.helmet.pivot.set(T.dir.x * Oe * Le, T.dir.y * Oe * -Le), T.helmet.tint = De.tint, T.helmet.visible = !0
								}
								T.noCeilingRevealTicker -= e;
								for (var Ee = T.layer, Be = b.createCircle(T.pos, c.player.maxVisualRadius), Fe = !1, Re = !1, je = !1, Ne = n.structurePool.getPool(), qe = 0; qe < Ne.length; qe++) {
									var Ue = Ne[qe];
									if (Ue.active) {
										for (var Ge = 0; Ge < Ue.stairs.length; Ge++) {
											var Ve = Ue.stairs[Ge],
												He = b.intersect(Ve.collision, Be);
											if (He) {
												Re = !0;
												var We = g.add(Ve.center, g.mul(Ve.downDir, -3)),
													Ke = g.sub(We, T.pos),
													Xe = g.length(Ke);
												Ke = Xe > 1e-4 ? g.div(Ke, Xe) : g.create(1, 0);
												je = r(n, T.pos, Ke, Xe, .5, T.layer) < Xe
											}
											C && Ve.noCeilingReveal && He && 0 != T.layer && (T.noCeilingRevealTicker = .25)
										}
										for (var Ye = 0; Ye < Ue.mask.length; Ye++)
											if (b.intersect(Ue.mask[Ye], Be)) {
												Fe = !0;
												break
											}
									}
								}
								var Ze = 18;
								Re && (1 & Ee && (1 & L.layer || !je) || 2 & L.layer && !Fe) && (Ee |= 2), (1 & Ee) != (1 & L.layer) || !Re || Fe && 0 != L.layer || (Ee |= 2, Ze += 100);
								var Je = T.__id + (T.netData.downed ? 0 : 131072) + (C ? 65536 : 0);
								a.addPIXIObj(T.container, P.Player, Ee, Ze, Je), T.isNew = !1
							}
						}
						for (var Qe = this.getPlayerInfo(t).teamId, $e = this.getTeamInfo(Qe), et = 0; et < $e.playerIds.length; et++) {
							var tt = $e.playerIds[et],
								at = this.getPlayerById(tt);
							at && tt == t && this.setTeammateData(tt, {
								pos: g.copy(at.netData.pos),
								health: at.localData.health,
								disconnected: !1,
								dead: at.netData.dead,
								downed: at.netData.downed
							});
							var it = this.teammateData[tt];
							if (it)
								if (at) {
									var ot = this.teammateData[tt];
									ot.pos = g.copy(at.netData.pos), ot.posTarget = g.copy(at.netData.pos)
								} else if (it) {
								var nt = (c.player.moveSpeed, g.sub(it.posTarget, it.pos)),
									rt = g.length(nt),
									st = rt > 1e-4 ? g.div(nt, rt) : g.create(1, 0),
									lt = Math.min(rt, it.posDelta * e / u.kTeamUpdateRate);
								it.pos = g.add(it.pos, g.mul(st, lt))
							}
						}
					}
				}, {
					key: "render",
					value: function(e) {
						for (var t = this.playerPool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active) {
								var o = e.pointToScreen(i.pos),
									n = e.pixels(i.scale);
								i.container.position.set(o.x, o.y), i.container.scale.set(n, n), i.container.visible = !i.netData.dead
							}
						}
					}
				}, {
					key: "getPlayerById",
					value: function(e) {
						for (var t = this.playerPool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active && i.__id === e) return i
						}
						return null
					}
				}, {
					key: "setPlayerInfo",
					value: function(e) {
						var t = e.name,
							a = ((new Date).getTime(), w.truncateString(t, "bold 16px arial", 180));
						this.playerInfo[e.id] = {
							name: t,
							nameUnEntity: w.htmlUnescape(t),
							nameKillFeed: a,
							teamId: e.teamId
						}
					}
				}, {
					key: "getPlayerInfo",
					value: function(e) {
						return this.playerInfo[e] || {
							name: "unknown",
							teamId: 0
						}
					}
				}, {
					key: "setTeamInfo",
					value: function(e) {
						this.teamInfo[e.teamId] = e
					}
				}, {
					key: "getTeamInfo",
					value: function(e) {
						return this.teamInfo[e]
					}
				}, {
					key: "setTeammateData",
					value: function(e, t) {
						var a = this.teammateData[e],
							i = a ? a.pos : g.copy(t.pos),
							o = a || {};
						o.pos = i, o.posTarget = g.copy(t.pos), o.posDelta = g.length(g.sub(t.pos, i)), o.health = t.health, o.disconnected = t.disconnected, o.dead = t.dead, o.downed = t.downed, this.teammateData[e] = o
					}
				}, {
					key: "getTeammateData",
					value: function(e) {
						return this.teammateData[e]
					}
				}]), e
			}();
		e.exports = {
			PlayerBarn: I
		}
	},
	pb8F: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "es"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle Royale",
			"index-region": "Región",
			"index-north-america": "Norteamérica",
			"index-europe": "Europa",
			"index-asia": "Asia",
			"index-players": "Jugadores",
			"index-play-solo": "Jugar Solo",
			"index-play-duo": "Jugar Dúo",
			"index-play-squad": "Jugar Squad",
			"index-join-team": "Entrar equipo",
			"index-create-team": "Crear equipo",
			"index-how-to-play": "Como Jugar",
			"index-leave-team": "Dejar el equipo",
			"index-joining-team": "Uniendose al equipo",
			"index-creating-team": "Creando equipo",
			"index-invite-link": "Enlace de invitación",
			"index-invite-code": "Codigo de invitacion",
			"index-join-team-help": "Tienes un enlace de equipo?  Pegalo aqui:",
			"index-solo": "Solo",
			"index-duo": "Dúo",
			"index-squad": "Squad",
			"index-auto-fill": "Emparejar",
			"index-no-fill": "No Emparejar",
			"index-waiting-for-leader": "Esperando al Líder para comenzar el juego",
			"index-play": "Jugar",
			"index-featured-youtuber": "YouTuber Destacado",
			"index-streaming-live": "¡En Directo!",
			"index-settings": "Configuración",
			"index-high-resolution": "Resolución alta (activar para mejorar la calidad visual)",
			"index-screen-shake": "Temblor de la pantalla",
			"index-master-volume": "Volumen principal",
			"index-sfx-volume": "Volumen de efectos de sonido",
			"index-music-volume": "Volumen de la música",
			"index-mobile-announce": "Ahora disponible para móvil!",
			"index-mobile-tooltip": "¡Visita <span>surviv.io</span> en tu dispositivo móvil para jugar en el camino!",
			"index-team-is-full": "¡El equipo esta lleno!",
			"index-failed-joining-team": "Fallo al unirse al equipo.",
			"index-failed-creating-team": "Fallo al crear el equipo.",
			"index-failed-finding-game": "Fallo al encontrar una partida.",
			"index-failed-joining-game": "Fallo al unirse a la partida.",
			"index-lost-connection": "Se perdio la conección al equipo.",
			"index-host-closed": "El servidor cerro la conexion.",
			"index-view-more": "Ver más",
			"index-back-to-main": "Volver al menú principal",
			"index-most-kills": "Mas Muertes",
			"index-total-kills": "Total de muertes",
			"index-total-wins": "Total de Victorias",
			"index-top-5-percent": "% De top 5",
			"index-kill-death-ratio": "Proporcion de K/D",
			"index-for": "Por",
			"index-today": "Hoy",
			"index-this-week": "Esta semana",
			"index-all-time": "Siempre",
			"index-top-100": "TOP 100",
			"index-rank": "Posición",
			"index-player": "Jugador",
			"index-total-games": "Partidas Jugadas",
			"index-controls": "Controles",
			"index-movement": "Movimiento",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Apuntar",
			"index-aim-ctrl": "Ratón",
			"index-punch": "Golpear",
			"index-shoot": "Disparar",
			"index-shoot-ctrl": "Click Izquierdo",
			"index-change-weapons": "Cambiar arma",
			"index-change-weapons-ctrl": "1 hasta 4 ó Rueda del Ratón",
			"index-stow-weapons": "Guardar arma (Puños)",
			"index-stow-weapons-ctrl": "3 o E",
			"index-swap-weapons": "Cambiar a arma anterior",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Recargar",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zoom de la mirilla",
			"index-scope-zoom-ctrl": "Click Izquierdo en la mirilla",
			"index-pickup": "Recoger",
			"index-loot": "Agarrar",
			"index-revive": "Revivir",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Usar objeto medico",
			"index-use-medical-ctrl": "Click izquierdo en el objeto ó 7 hasta 0",
			"index-drop-item": "Soltar objeto",
			"index-drop-item-ctrl": "Click derecho en el objeto",
			"index-cancel-action": "Cancelar acción",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Vér el mapa",
			"index-view-map-ctrl": "M ó G",
			"index-toggle-minimap": "Desactivar minimapa",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Usar la rueda comunicacion de equipo",
			"index-use-ping-ctrl": "Presiona C, despues manten apretado click derecho y mueve el mouse, despues suelta el click derecho",
			"index-use-emote": "Usar la rueda de emoticonos",
			"index-use-emote-ctrl": "Manten presionado click derecho y mueve el mouse, despues suelta el click derecho",
			"index-tips-1-desc": "La meta de surviv.io es ser el ultimo jugador vivo. Solo tienes una vida - no reapareces!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "Si has jugado otros juegos del estilo Battle Royale como PUBG, Fortnite o H1Z1, entonces sabes un poco como funcionan las cosas! Piensa que surviv.io es PUBG en 2D.",
			"index-tips-3": "Encuentra suministros y mata",
			"index-tips-3-desc": "Comenzaras el juego con una bolsa. Muevete por el mapa para encontrar suministros: Armas, municion, mirillas, y objetos medicos. Elimina los otros jugadores y puedes tomar sus suministros!",
			"index-tips-4": "Rojo-Malo!",
			"index-tips-4-desc": "Los otros jugadores no son,los unicos que pueden lastimarte. La mortal zona roja se mueve hacia dentro desde los lados del mapa y reparte daño cada vez mas fuerte. Manten un ojo en el mapa y quedate asalvo.",
			"game-alive": "Vivos",
			"game-reloading": "Recargando",
			"game-using": "Usando",
			"game-reviving": "Reviviendo",
			"game-revive-teammate": "Revive Teammate",
			"game-equip": "Equipar",
			"game-cancel": "Cancelar",
			"game-You": "Tu",
			"game-you": "tu",
			"game-themselves": "a si mismo",
			"game-yourself": "a ti mismo",
			"game-you-died": "has muerto",
			"game-player-died": "ha muerto",
			"game-with": "con",
			"game-knocked-out": "dejo fuera de combate a",
			"game-killed": "mato",
			"game-finally-killed": "finalmente mato a",
			"game-finally-bled-out": "se desangro",
			"game-died-outside": "murió fuera de la zona segura",
			"game-the-red-zone": "la zona roja",
			"game-waiting-for-players": "Esperando jugadores",
			"game-spectating": "Espectando a",
			"game-red-zone-advances": "La zona roja se mueve en",
			"game-red-zone-advancing": "La zona roja se mueve, ve a la zona segura!",
			"game-seconds": "segundos",
			"game-minutes": "minutos",
			"game-minute": "minuto",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "¡No hay sufficiente espacio!",
			"game-item-already-owned": "¡Objeto ya adquirido!",
			"game-item-already-equipped": "¡Objeto ya esta equipado!",
			"game-better-item-equipped": "¡Mejor objeto equipado!",
			"game-play-new-game": "Jugar otra partida",
			"game-spectate": "Espectar",
			"game-full-screen": "Pantalla completa",
			"game-sound": "Sonido",
			"game-quit-game": "Salir de la partida",
			"game-return-to-game": "Volver a la partida",
			"game-hide-match-stats": "Esconder tus resultados de la partida",
			"game-view-match-stats": "Ver tus resultados de la partida",
			"game-previous-teammate": "Miembro del equipo anterior",
			"game-next-teammate": "Miembro del equipo siguiente",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Salir de la partida",
			"game-your-results": "Tus resultados",
			"game-chicken": "¡A ganar a ganar pollo para cenar!",
			"game-won-the-game": "ganó la partida.",
			"game-team-eliminated": "Tu equipo ha sido eliminado.",
			"game-rank": "Posición",
			"game-team-rank": "Posición del equipo",
			"game-team-kills": "Muertes de equipo",
			"game-kill": "Muerte",
			"game-kills": "Muertes",
			"game-damage-dealt": "Daño repartido",
			"game-damage-taken": "Daño recibido",
			"game-survived": "Sobreviviste",
			"game-backpack00": "Bolsa",
			"game-backpack01": "Mochila pequeña",
			"game-backpack02": "Mochila mediana",
			"game-backpack03": "Mochila militar",
			"game-bandage": "Vendas",
			"game-bandage-tooltip": "Click izquierdo para curar 15 de salud.",
			"game-healing-tooltip": "No puede curar mas cuando estas a 75 de salud.",
			"game-healthkit": "Botiquín",
			"game-healthkit-tooltip": "Click izquierdo para curar 100 de salud.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Click izquierdo para aumentar 25 de adrenalina.",
			"game-adrenaline-tooltip": "La adrenalina te cura mientras pasa el tiempo.",
			"game-painkiller": "Píldora",
			"game-painkiller-tooltip": "Click izquierdo para aumentar 50 de adrenalina.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Munición para la M9, Glock, MP5, MAC-10, UMP9 y Vector.",
			"game-12gauge": "Calibre 12",
			"game-12gauge-tooltip": "Munición para la M870, Saiga-12 y MP220.",
			"game-762mm": "7,62mm",
			"game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 y DP-28.",
			"game-556mm": "5,56mm",
			"game-556mm-tooltip": "Ammo for FAMAS, HK416, Mk 12 y M249.",
			"game-chest01": "Chaleco de nivel 1",
			"game-chest02": "Chaleco de nivel 2",
			"game-chest03": "Chaleco de nivel 3",
			"game-helmet01": "Casco de nivel 1",
			"game-helmet02": "Casco de nivel 2",
			"game-helmet03": "Casco de nivel 3",
			"game-1xscope": "1x Mira",
			"game-2xscope": "2x Mira",
			"game-4xscope": "4x Mira",
			"game-8xscope": "8x Mira",
			"game-15xscope": "15x Mira",
			"game-level-1": "Nvl. 1",
			"game-level-2": "Nvl. 2",
			"game-level-3": "Nvl. 3",
			"game-outfitBase": "Traje Básico",
			"game-outfitRoyalFortune": "Fortuna Real",
			"game-outfitKeyLime": "Limero",
			"game-outfitCobaltShell": "Armadura de Cobalto",
			"game-outfitCarbonFiber": "Fibra de Carbono",
			"game-outfitDarkGloves": "El Profesional",
			"game-outfitGhillie": "Traje Ghillie",
			"game-outfitCamo": "Camuflaje de Bosque ",
			"game-outfitRed": "Práctica de Tiro",
			"game-outfitWhite": "Vengador del Ártico",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "Granada de Fragmentacion",
			"game-hud-frag": "Fragmen.",
			"game-smoke": "Granada de Humo",
			"game-hud-smoke": "Humo",
			"game-barrel_01": "un barril",
			"game-silo_01": "un silo"
		};
		e.exports = i
	},
	po6R: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = a("zinx"),
			s = a("v8aM"),
			l = (s.EmoteType, s.EmoteData),
			c = a("Jr6A"),
			m = a("85i3"),
			d = a("SEs0"),
			p = function() {
				function e(t) {
					i(this, e), this.selector = t, this.enabled = !0, this.onToggle = function() {}
				}
				return o(e, [{
					key: "onToggle",
					value: function(e) {
						this.onToggle = e
					}
				}, {
					key: "isVisible",
					value: function() {
						return "none" != this.selector.css("display")
					}
				}, {
					key: "show",
					value: function() {
						this.selector.css("display", "block"), this.onToggle(this.isVisible()), d.addModalCloseListener()
					}
				}, {
					key: "hide",
					value: function() {
						this.selector.css("display", "none"), this.onToggle(this.isVisible()), d.removeModalCloseListener()
					}
				}]), e
			}(),
			u = function() {
				function e(t) {
					var a = this;
					i(this, e), this.profile = {}, this.loading = !1, this.nameChangeEnabled = !1, this.setNamePrompt = new p(n("#modal-account-name-change")), this.setNamePrompt.onToggle(function() {
						n("#modal-body-warning").css("display", "none"), n("#modal-account-name-title").html("Change name"), n("#modal-account-name-input").val("")
					}), n("#modal-account-name-finish").click(function(e) {
						e.stopPropagation();
						var i = n("#modal-account-name-input").val();
						t.setUsername(i, function(e) {
							a.onSetUsername(e)
						})
					}), n("#modal-account-name-input").on("keypress", function(e) {
						13 === (e.which || e.keyCode) && n("#modal-account-name-finish").trigger("click")
					}), this.changeAvatarPrompt = new p(n("#modal-account-avatar")), d.addModalCloseCallback(function(e, a) {
						if (a.parents("#modal-account-avatar").length > 0) {
							e.stopPropagation();
							var i = n("#customize-account-avatar").find(".customize-emote-image").data("id");
							t.setAvatar(i)
						}
					}), this.delAccountPrompt = new p(n("#modal-account-delete")), n("#modal-account-delete-finish").click(function(e) {
						e.stopPropagation(), "DELETE" == n("#modal-account-delete-input").val() && t.deleteUser(), a.hideModals()
					}), n("#modal-account-delete-input").on("keypress", function(e) {
						13 === (e.which || e.keyCode) && n("#modal-account-delete-finish").trigger("click")
					}), this.modals = [this.setNamePrompt, this.changeAvatarPrompt, this.delAccountPrompt];
					var o = n(".account-loggedin-stats"),
						r = n(".account-loggedin-buttons-main"),
						s = n(".account-loggedin-buttons-settings"),
						l = n(".account-loggedin-buttons-link-account");
					n(".account-details-user").click(function(e) {
						e.stopPropagation(), a.activeMenu != o ? a.setMenu(o) : a.setMenu(r)
					}), n(".btn-account-settings").click(function(e) {
						e.stopPropagation(), a.setMenu(s)
					}), n(".btn-account-link").click(function(e) {
						e.stopPropagation(), a.setMenu(l)
					}), n(".btn-account-back").click(function(e) {
						e.stopPropagation(), a.setMenu(r)
					}), n(".btn-account-change-name").click(function(e) {
						e.stopPropagation(), a.profile.usernameChangeTime <= 0 && (a.showModal(a.setNamePrompt), n("#modal-account-name-title").html("Change name"), a.setMenu(o))
					}), n(".btn-account-change-avatar, .account-avatar").click(function(e) {
						e.stopPropagation(), void 0 != a.profile.avatar && (a.showModal(a.changeAvatarPrompt), a.setMenu(o))
					}), n(".btn-account-delete").click(function(e) {
						e.stopPropagation(), n("#modal-account-delete-input").val(""), a.showModal(a.delAccountPrompt), a.setMenu(o)
					}), this.menus = [o, r, s, l], this.activeMenu = o, this.statsButtons = o, this.menuListener = function(e) {
						n(e.target).closest(n(".account-loggedin-block")).length || a.setMenu(o)
					}
				}
				return o(e, [{
					key: "setMenu",
					value: function(e) {
						for (var t = 0; t < this.menus.length; t++) this.menus[t].css("display", "none");
						e.css("display", "block"), this.activeMenu = e, e != this.statsButtons ? n(document).on("click touchend", this.menuListener) : n(document).off("click touchend", this.menuListener)
					}
				}, {
					key: "showModal",
					value: function(e) {
						this.hideModals(), e.show()
					}
				}, {
					key: "hideModals",
					value: function() {
						for (var e = 0; e < this.modals.length; e++) this.modals[e].hide()
					}
				}, {
					key: "onSetUsername",
					value: function(e) {
						var t = {
								failed: "Failed setting username.",
								invalid: "Invalid username.",
								taken: "Name already taken!",
								change_time_not_expired: "Username has already been set recently."
							},
							a = t[e] || t.failed;
						n("#modal-body-warning").hide(), n("#modal-body-warning div").html(a), n("#modal-body-warning").fadeIn()
					}
				}, {
					key: "show",
					value: function(e) {
						n(".account-loggedin-block").css("display", "block"), this.setMenu(this.statsButtons);
						var t = c.htmlEscape(this.profile.username);
						n(".account-player-name").html(t);
						var a = n(".btn-player-stats-link");
						this.profile.slug ? (a.attr("href", "/stats/" + this.profile.slug), a.css("display", "block")) : a.css("display", "none");
						var i = this.profile.avatar,
							o = l[i],
							r = o && o.texture ? o.texture : "../img/gui/player.svg";
						n(".account-details-user .account-avatar").css("background-image", e ? "none" : "url(" + r + ")").addClass(e ? "" : "account-avatar-hover"), n(".account-details-user .account-avatar-loading").css("display", e ? "block" : "none"), this.nameChangeEnabled = this.profile.usernameChangeTime <= 0, this.nameChangeEnabled ? n(".btn-account-change-name").removeClass("btn-account-disabled") : n(".btn-account-change-name").addClass("btn-account-disabled"), n(".btn-account-change-name").html(this.profile.usernameSet ? "Change Account Name" : "Set Account Name"), e || this.profile.usernameSet ? this.setNamePrompt.hide() : (this.showModal(this.setNamePrompt), d.removeModalCloseListener());
						var s = function(e) {
							e.addClass("btn-login-linked"), e.find("span.login-button-name").html('<div class="icon"></div>'), e.off("click")
						};
						this.profile.linkedFacebook && s(n(".btn-login-facebook")), this.profile.linkedGoogle && s(n(".btn-login-google")), this.profile.linkedTwitch && s(n(".btn-login-twitch")), this.profile.linkedDiscord && s(n(".btn-login-discord"))
					}
				}, {
					key: "hide",
					value: function() {
						n(".account-loggedin-block").css("display", "none"), this.setMenu(this.statsButtons), this.hideModals()
					}
				}]), e
			}(),
			h = function() {
				function e() {
					var t = this;
					i(this, e), this.leaderboard = n(".account-login-leaderboard"), this.loginButtons = n(".account-login-buttons"), this.loginVisible = !1, this.clickListener = function(e) {
						n(e.target).closest(t.loginButtons).length || t.showLogin(!1)
					}, n(".account-details-guest").click(function(e) {
						e.stopPropagation(), t.showLogin(!t.loginVisible)
					})
				}
				return o(e, [{
					key: "showLogin",
					value: function(e) {
						this.loginButtons.css("display", e || r.mobile ? "block" : "none"), this.leaderboard.css("display", e ? "none" : "block"), this.loginVisible = e, e && !r.mobile ? n(document).on("click touchend", this.clickListener) : n(document).off("click touchend", this.clickListener)
					}
				}, {
					key: "show",
					value: function(e) {
						n(".account-login-block").css("display", "block");
						var t = n(".account-login-block");
						t.find(".account-avatar-loading").css("display", e ? "block" : "none"), t.find(".account-avatar").css("background-image", e ? "none" : 'url("../img/gui/player.svg")'), t.find(".account-name").html(e ? "Logging in..." : "Log in to track your stats!"), this.loginButtons.enabled = !e
					}
				}, {
					key: "hide",
					value: function() {
						n(".account-login-block").css("display", "none"), this.showLogin(!1)
					}
				}]), e
			}(),
			g = function() {
				function e(t) {
					var a = this;
					i(this, e), this.config = t, this.loading = !1, this.loggedIn = !1, this.profile = {}, this.loginMenu = new h, this.profileMenu = new u(this), this.errorModal = new p(n("#modal-notification")), n(".btn-login-facebook").click(function(e) {
						window.location.href = "/api/user/auth/facebook"
					}), n(".btn-login-google").click(function(e) {
						window.location.href = "/api/user/auth/google"
					}), n(".btn-login-twitch").click(function(e) {
						window.location.href = "/api/user/auth/twitch"
					}), n(".btn-login-discord").click(function(e) {
						window.location.href = "/api/user/auth/discord"
					}), n(".btn-account-logout").click(function(e) {
						a.logout()
					})
				}
				return o(e, [{
					key: "load",
					value: function() {
						var e = this;
						!this.loading && c.getCookie("app-data") && (this.loading = !0, this.render(), n.ajax({
							type: "GET",
							url: "/api/user/profile",
							timeout: 1e4
						}).done(function(t, a) {
							if (e.loggedIn = void 0 !== t.profile, e.loggedIn) {
								e.profile = t.profile;
								var i = e.config.get("profile") || {};
								i.slug = t.profile.slug, e.config.set("profile", i)
							}
						}).fail(function(e) {
							m.storeGeneric("account", "load_error")
						}).always(function() {
							e.loading = !1, e.render()
						}))
					}
				}, {
					key: "logout",
					value: function() {
						this.config.set("profile", null), window.location.href = "/api/user/logout"
					}
				}, {
					key: "deleteUser",
					value: function() {
						this.config.set("profile", null), window.location.href = "/api/user/delete"
					}
				}, {
					key: "setUsername",
					value: function(e, t) {
						var a = this;
						n.ajax({
							type: "POST",
							url: "/api/user/username",
							timeout: 5e3,
							contentType: "application/json; charset=utf-8",
							data: JSON.stringify({
								username: e
							})
						}).done(function(e, i) {
							"success" == e.result ? a.load() : t(e.result)
						}).fail(function(e) {
							m.storeGeneric("account", "set_username_error"), t("Failed setting username.")
						})
					}
				}, {
					key: "setAvatar",
					value: function(e) {
						var t = this;
						this.loggedIn && e != this.profile.avatar && n.ajax({
							type: "POST",
							url: "/api/user/avatar",
							timeout: 1e4,
							contentType: "application/json; charset=utf-8",
							data: JSON.stringify({
								avatar: e
							})
						}).done(function(e, a) {
							t.load()
						}).fail(function(e) {
							m.storeGeneric("account", "set_avatar_error"), t.displayError("server_error")
						})
					}
				}, {
					key: "displayError",
					value: function(e) {
						var t = {
							server_error: "Internal server error, please try again later.",
							facebook_account_in_use: "Failed linking Facebook account.<br/>Account already in use!",
							google_account_in_use: "Failed linking Google account.<br/>Account already in use!",
							twitch_account_in_use: "Failed linking Twitch account.<br/>Account already in use!",
							discord_account_in_use: "Failed linking Discord account.<br/>Account already in use!"
						};
						t[e] && (n("#modal-notification").find(".modal-settings-text").html(t[e]), this.errorModal.show())
					}
				}, {
					key: "render",
					value: function() {
						this.profileMenu.profile = this.profile, this.loggedIn ? (this.profileMenu.show(this.loading), this.loginMenu.hide(), this.profile.errorFlash.length > 0 && this.displayError(this.profile.errorFlash[0])) : (this.profileMenu.hide(), this.loginMenu.show(this.loading))
					}
				}]), e
			}();
		e.exports = g
	},
	"qwV+": function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var o, n = a("+0OL"),
			r = n.Anim,
			s = a("/2+T"),
			l = (o = {}, i(o, r.None, {
				mirror: !1,
				feet: !0,
				hideWeapon: !1,
				frames: [{
					time: .1,
					handLt: s.create(35, 40),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -35),
					footRt: s.create(20, -35)
				}]
			}), i(o, r.Melee, {
				fists: {
					mirror: !0,
					feet: !1,
					hideWeapon: !1,
					frames: [{
						time: 0,
						handLt: s.create(35, 40),
						handRt: s.create(-35, 40),
						done: [{
							fn: "playAnimSound",
							args: ["swing"]
						}]
					}, {
						time: n.items.fists.damageTime,
						handLt: s.create(5, 85),
						handRt: s.create(-35, 40),
						done: [{
							fn: "doMeleeCollision",
							args: []
						}]
					}, {
						time: n.items.fists.cooldownTime,
						handLt: s.create(35, 40),
						handRt: s.create(-35, 40)
					}]
				}
			}), i(o, r.Cook, {
				mirror: !1,
				feet: !1,
				hideWeapon: !1,
				frames: [{
					time: 0,
					handLt: s.create(27.5, 45),
					handRt: s.create(-27.5, 45),
					done: [{
						fn: "playAnimSound",
						args: ["pullPin"]
					}]
				}, {
					time: .1,
					handLt: s.create(5, 40),
					handRt: s.create(-5, 40),
					done: [{
						fn: "animSetObjectImg",
						args: ["cook"]
					}]
				}, {
					time: .2,
					handLt: s.create(5, 40),
					handRt: s.create(-5, 40)
				}, {
					time: .1,
					handLt: s.create(5, 65),
					handRt: s.create(-40, -5)
				}, {
					time: 99,
					handLt: s.create(5, 65),
					handRt: s.create(-40, -5)
				}]
			}), i(o, r.Throw, {
				mirror: !1,
				feet: !1,
				hideWeapon: !1,
				frames: [{
					time: 0,
					handLt: s.create(5, 65),
					handRt: s.create(-40.5, -5),
					done: [{
						fn: "playAnimSound",
						args: ["throwing"]
					}, {
						fn: "animSetObjectImg",
						args: ["throwing"]
					}, {
						fn: "animThrowableParticles",
						args: []
					}]
				}, {
					time: .15,
					handLt: s.create(45, 15),
					handRt: s.create(-5, 85)
				}, {
					time: n.player.throwTime,
					handLt: s.create(27.5, 45),
					handRt: s.create(-27.5, 45)
				}]
			}), i(o, r.CrawlForward, {
				mirror: !0,
				feet: !0,
				hideWeapon: !0,
				frames: [{
					time: n.player.crawlTime / 3,
					handLt: s.create(30, 55),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -45),
					footRt: s.create(20, -35)
				}, {
					time: n.player.crawlTime / 3,
					handLt: s.create(45, 15),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -25),
					footRt: s.create(20, -35)
				}, {
					time: n.player.crawlTime / 3,
					handLt: s.create(35, 40),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -35),
					footRt: s.create(20, -35)
				}]
			}), i(o, r.CrawlBackward, {
				mirror: !0,
				feet: !0,
				hideWeapon: !0,
				frames: [{
					time: n.player.crawlTime / 3,
					handLt: s.create(45, 15),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -25),
					footRt: s.create(20, -35)
				}, {
					time: n.player.crawlTime / 3,
					handLt: s.create(30, 55),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -45),
					footRt: s.create(20, -35)
				}, {
					time: n.player.crawlTime / 3,
					handLt: s.create(35, 40),
					handRt: s.create(-35, 40),
					footLt: s.create(-20, -35),
					footRt: s.create(20, -35)
				}]
			}), i(o, r.Revive, {
				mirror: !1,
				feet: !1,
				hideWeapon: !0,
				frames: [{
					time: .2,
					handLt: s.create(25, 70),
					handRt: s.create(-60, 15)
				}, {
					time: n.player.reviveDuration,
					handLt: s.create(25, 70),
					handRt: s.create(-60, 15)
				}]
			}), o);
		e.exports = l
	},
	r4ug: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("9xSA"),
			r = a("xE8y"),
			s = r.Shape,
			l = (a("0od3"), a("/2+T")),
			c = {
				Line: 0,
				Ray: 1,
				Circle: 2,
				Aabb: 3
			},
			m = function() {
				function e() {
					i(this, e), this.shapes = []
				}
				return o(e, [{
					key: "addLine",
					value: function(e, t, a, i) {
						this.shapes.push({
							type: c.Line,
							start: l.copy(e),
							end: l.copy(t),
							color: a,
							fill: i
						})
					}
				}, {
					key: "addRay",
					value: function(e, t, a, i, o) {
						this.shapes.push({
							type: c.Ray,
							pos: l.copy(e),
							dir: l.copy(t),
							len: a,
							color: i,
							fill: o
						})
					}
				}, {
					key: "addCircle",
					value: function(e, t, a, i) {
						this.shapes.push({
							type: c.Circle,
							pos: l.copy(e),
							rad: t,
							color: a,
							fill: i
						})
					}
				}, {
					key: "addAabb",
					value: function(e, t, a, i) {
						this.shapes.push({
							type: c.Aabb,
							min: l.copy(e),
							max: l.copy(t),
							color: a,
							fill: i
						})
					}
				}, {
					key: "addCollider",
					value: function(e, t, a) {
						e.type == n.Type.Aabb ? this.addAabb(e.min, e.max, t, a) : this.addCircle(e.pos, e.rad, t, a)
					}
				}, {
					key: "addShape",
					value: function(e, t, a) {
						e.type == s.Type.Aabb ? this.addAabb(e.min, e.max, t, a) : this.addCircle(e.pos, e.rad, t, a)
					}
				}, {
					key: "render",
					value: function(e, t) {}
				}, {
					key: "flush",
					value: function() {
						this.shapes = []
					}
				}]), e
			}(),
			d = new m;
		e.exports = d
	},
	tPA9: function(e, t, a) {
		t = e.exports = a("lcwS")(!1), t.push([e.i, 'img{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}#cvs{-webkit-filter:none;filter:none}.click-through{pointer-events:none}#game-area-wrapper{cursor:crosshair;left:0;position:absolute!important;top:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}#ui-game{-webkit-filter:none;filter:none;height:100%;left:0;position:absolute;top:0;width:100%}#ui-center{color:#fff;pointer-events:all;position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);z-index:10}@media (max-width:1200px),screen and (min-width:851px) and (max-height:768px){#ui-center{-webkit-transform:translateX(-50%) translateY(-50%) scale(.85);transform:translateX(-50%) translateY(-50%) scale(.85)}}@media screen and (max-width:850px){#ui-center{pointer-events:all;-webkit-transform:translateX(-50%) translateY(-50%) scale(.85);transform:translateX(-50%) translateY(-50%) scale(.85);z-index:10}}@media (max-width:850px) and (max-height:300px){#ui-center{-webkit-transform:translateX(-50%) translateY(-50%) scale(.775);transform:translateX(-50%) translateY(-50%) scale(.775)}}.btns-game-double-row{display:flex;position:relative}.btns-game-double-row>.btn-game-container{position:relative;width:100%}.btns-game-double-row>.btn-game-container>.btn-double-row{display:inline-block}.btns-game-double-row>div:not(:last-child){margin-right:2px}.game-menu-icon{background-size:22px;background-position:50%;background-repeat:no-repeat;bottom:13px;display:inline-block;height:22px;left:60%;pointer-events:none;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.btn-game-touch-style{background-color:#50afab;background-position:4px 4px;background-repeat:no-repeat;background-size:20px;border:0;border-bottom:none;border-radius:5px;box-shadow:inset 0 -2px #387c79;box-sizing:border-box;color:#fff;cursor:pointer;display:block;font-size:14px;height:30px;line-height:30px;margin:auto;margin-top:2px;margin-bottom:4px;position:relative;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.25);width:100%}.movement-icon{background-image:url(../img/gui/movement.svg)}.target-icon{background-image:url(../img/gui/target.svg)}#ui-game-menu{background-color:rgba(0,0,0,.5);border-radius:5px;box-sizing:border-box;display:none;margin:10px auto;padding:10px 15px;width:250px}@media screen and (max-width:850px){#ui-game-menu{padding:4px 10px;width:190px}}@media (max-width:850px) and (max-height:300px){#ui-game-menu{margin-top:0}}#ui-game-menu p{bottom:4px;display:inline-block;font-size:14px;position:relative}@media screen and (max-width:850px){#ui-game-menu p{bottom:0;font-size:12px;margin-bottom:8px;margin-top:6px}}#ui-alive-info{position:absolute;color:#fff;width:80px;height:36px;top:174px;left:106px;background:rgba(0,0,0,.4);border-radius:5px}#ui-spec-counter{top:135px;left:60px}#ui-map-expand-mobile{height:190px;width:190px;left:-4px;top:-22px;z-index:0;background-color:transparent}#ui-map-expand img{display:none}#ui-map-minimize{left:124px}.ui-map-wrapper-mobile{bottom:auto;color:#fff;display:block;font-size:16px;left:6px;top:46px}.ui-map-wrapper-mobile .ui-players-alive{left:4px}.ui-map-wrapper-mobile .ui-map-counter{position:relative;display:inline-block;font-size:24px;text-align:center;bottom:9px;left:2px}.ui-map-wrapper-mobile .ui-map-icon{padding:6px;display:inline-block;height:24px;width:24px;margin-left:2px;background-size:24px;background-repeat:no-repeat;background-position:6px 6px}.ui-map-wrapper-mobile #ui-map-info{position:absolute;color:#fff;width:100px;height:36px;top:174px;left:0;background:rgba(0,0,0,.4);border-radius:5px}.ui-map-wrapper-mobile .gas-icon{background-image:url(../img/gui/gas.svg)}.ui-map-wrapper-mobile .danger-icon{background-image:url(../img/gui/danger.svg)}.ui-map-wrapper-mobile .alive-icon{background-image:url(../img/gui/player.svg)}.ui-map-wrapper-mobile .icon-pulse{-webkit-animation:pulse 2s linear infinite;animation:pulse 2s linear infinite}.ui-map-wrapper-mobile .ui-settings-button{position:absolute;color:#fff;border-radius:5px;pointer-events:all}.ui-map-wrapper-mobile .ui-settings-button img{position:absolute;left:6px;top:6px;height:36px;width:36px;background-size:36px;background-repeat:no-repeat;transform:scale(1);-webkit-transition:all .1s ease-in;-webkit-transform:scale(1);-ms-transition:all .1s ease-in;-ms-transform:scale(1);-moz-transition:all .1s ease-in;-moz-transform:scale(1);transition:all .1s ease-in;transition:opacity .25s ease-out;-moz-transition:opacity .25s ease-out;-webkit-transition:opacity .25s ease-out;-o-transition:opacity .25s ease-out}.ui-map-wrapper-mobile .ui-settings-button .map-img-after{display:none}.ui-map-wrapper-mobile .ui-settings-button:hover{-webkit-transform:scale(1);transform:scale(1)}.ui-map-wrapper-desktop{position:absolute;bottom:12px;left:12px}#ui-map-wrapper{position:absolute;z-index:1}#ui-settings-container-mobile{position:relative}#ui-menu-display{cursor:pointer;left:2px;top:-18px;height:48px;width:48px;opacity:.8;background-color:rgba(0,0,0,.4);background-size:48px;background-repeat:no-repeat;background-position:50%;background-image:url(../img/gui/cog.svg);z-index:1}#big-map{display:none;height:100%;width:100%}#big-map-collision{height:100%;left:50%;margin:auto;pointer-events:all;position:fixed;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#big-map-close{position:absolute;margin-left:auto;height:64px;width:64px;right:6px;top:6px;border-radius:6px;background-color:rgba(0,0,0,.5);background-repeat:no-repeat;background-size:48px;background-position:50%;background-image:url(../img/gui/close.svg);pointer-events:all}#ui-right-center{position:absolute;color:#fff;opacity:.75;transition:opacity .25s ease-out;-moz-transition:opacity .25s ease-out;-webkit-transition:opacity .25s ease-out;-o-transition:opacity .25s ease-out}.ui-right-center-desktop{top:40%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:12px}.ui-right-center-mobile{top:30px;-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:translateY(-50%) scale(.8);transform:translateY(-50%) scale(.8);right:6px}@media (max-height:360px),(max-width:640px){.ui-right-center-mobile{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(.85);transform:scale(.85);top:16px}}.ui-right-center-tablet{top:12px!important;-webkit-transform:scale(.8);transform:scale(.8)}@media (max-height:600px){.ui-right-center-tablet{-webkit-transform:scale(.65);transform:scale(.65)}}.ui-bottom-right-tablet{bottom:25%!important;-webkit-transform:scale(.8)!important;transform:scale(.8)!important;-webkit-transform-origin:right!important;transform-origin:right!important}@media (max-height:600px){.ui-bottom-right-tablet{bottom:25%!important;-webkit-transform:scale(.7)!important;transform:scale(.7)!important;-webkit-transform-origin:right!important;transform-origin:right!important}}.ui-bottom-center-right-tablet{left:72%!important;-webkit-transform:scale(.65)!important;transform:scale(.65)!important}#ui-emote-button{background:rgba(0,0,0,.4);background-image:url(../img/gui/emote.svg);background-position:50%;background-repeat:no-repeat;background-size:28px;border-radius:21px;display:none;height:42px;position:absolute;right:108px;top:0;width:42px}@media screen and (max-width:850px){#ui-emote-button{background-size:20px;border-radius:14px;height:28px;right:0;top:50px;width:28px}}.ui-top-left-tablet{left:120px!important}.ui-spectate-options-wrapper-tablet{bottom:12px!important;top:auto!important}.ui-killfeed-wrapper-tablet{top:60px!important}@media (max-width:850px) and (max-height:320px){.ui-slider-container{margin-bottom:0}}@media (max-width:850px) and (max-height:320px){.ui-slider-container>p{width:75px}}@media (max-width:850px) and (max-height:320px){.ui-slider-container>.slider{bottom:3px;width:85px}}@media (max-width:850px) and (max-height:320px){.ui-slider-container>.slider::-webkit-slider-thumb{width:20px;height:20px}}@media (max-width:850px) and (max-height:320px){.ui-slider-container>.slider::-moz-range-thumb{width:20px;height:20px}}.ui-hidden{display:none}.btn-game-menu{text-align:center;line-height:38px;display:block;width:100%;height:40px;border:0;border-radius:5px;box-sizing:border-box;position:relative;margin:auto;margin-top:5px;margin-bottom:5px;color:#fff;font-size:16px;text-shadow:0 1px 2px rgba(0,0,0,.25);background-color:#50afab;border-bottom:2px solid #387c79;box-shadow:inset 0 -2px #387c79;background-repeat:no-repeat;cursor:pointer}#btn-game-fullscreen{background-size:34px;background-position:4px 2px;background-image:url(../img/gui/minimize.svg)}#btn-game-sound{background-size:44px;background-position:2px -3px}#btn-game-quit{margin-top:40px;background-image:url(../img/gui/quit.svg)}#btn-game-quit,#btn-game-resume{background-size:44px;background-position:-2px -3px}#btn-game-resume{margin-top:30px;background-image:url(../img/gui/resume.svg)}#ui-top-center{position:absolute;color:#fff;top:80px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-top-center .top-center-text{text-align:center;width:100vw;padding:8px}#ui-waiting-text{display:none;color:#fff;text-shadow:2px 2px 0 #000}#ui-waiting-text,#ui-waiting-text span{font-size:32px;font-weight:700}.top-center-text .spectate-text{display:inline-block;text-shadow:2px 2px 0 #000;font-size:24px;font-weight:700;overflow:hidden;height:32px}@media (max-width:1024px){.top-center-text .spectate-text{font-size:18px}}.top-center-text .spectate-desc{color:#fff;margin-right:8px}.ui-spectate-mode{display:none}#ui-spectate-text{position:relative}#spectate-player{max-width:250px;white-space:nowrap;text-overflow:ellipsis;color:cyan}#ui-top-center-scopes-wrapper{position:absolute;color:#fff;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%}#ui-top-center-scopes{margin-top:12px;text-align:center}@media (max-height:768px),(max-width:1200px){#ui-top-center-scopes{-webkit-transform:scale(.85);transform:scale(.85)}}.ui-zoom{background:rgba(0,0,0,.3);border-radius:36px;width:64px;height:64px;opacity:.6;display:inline-block}.ui-zoom-hover:hover{opacity:1}.ui-zoom-active{vertical-align:baseline;opacity:1;transform:scale(1);-webkit-transition:all .1s ease-in;-webkit-transform:scale(1);-ms-transition:all .1s ease-in;-ms-transform:scale(1);-moz-transition:all .1s ease-in;-moz-transform:scale(1);transition:all .1s ease-in;transition:opacity .25s ease-out;-moz-transition:opacity .25s ease-out;-webkit-transition:opacity .25s ease-out;-o-transition:opacity .25s ease-out}.ui-zoom .ui-zoom-image{width:64px;height:64px;opacity:.4;padding:2px}.ui-zoom .ui-zoom-text{margin-top:14px;width:100%}.ui-zoom .ui-zoom-level{font-size:32px;text-align:center;width:100%}.ui-zoom .ui-zoom-append{font-size:24px}.ui-zoom-inactive{display:none;margin-left:-8px;margin-right:-8px;-webkit-transition:all .1s ease-in;-webkit-transform:scale(.5);-ms-transition:all .1s ease-in;-ms-transform:scale(.5);-moz-transition:all .1s ease-in;-moz-transform:scale(.5);transition:all .1s ease-in;transform:scale(.5)}.ui-zoom-inactive:hover{cursor:pointer!important;opacity:1}.ui-emote-wheel{z-index:3;display:none;position:fixed}.ui-emote-parent{opacity:.75}.ui-emote-hl{z-index:2;display:none}.ui-emote{position:fixed;width:256px;height:256px;background-size:256px;background-repeat:no-repeat;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-emote-bg-circle{opacity:.5;background-image:url(../img/gui/ping-part-circle.svg)}.ui-emote-bg-quarter{opacity:.5;background-image:url(../img/gui/ping-part-quarter.svg)}.ui-emote-bg-eighth{opacity:.5;background-image:url(../img/gui/ping-part-eighth.svg)}.ui-emote-middle .ui-emote-image{width:24px!important;height:24px!important;background-size:24px!important;background-image:url(../img/gui/close.svg)}.ui-emote-top .ui-emote-image{margin-top:-78px;background-image:url(../img/gui/ping-team-danger.svg)}.ui-emote-right .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}.ui-emote-right .ui-emote-image{margin-left:78px;background-image:url(../img/gui/ping-team-coming.svg)}.ui-emote-bottom .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}.ui-emote-bottom .ui-emote-image{margin-top:78px;background-image:url(../img/gui/ping-team-help.svg)}.ui-emote-left .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(270deg);transform:translate(-50%,-50%) rotate(270deg)}.ui-emote-left .ui-emote-image{margin-left:-78px;background-image:url(../img/gui/ping-team-help.svg)}.ui-emote-top-left .ui-emote-image{margin-left:-80px;margin-top:-30px;background-image:url(../img/loot/loot-ammo-box.svg)}.ui-emote-bottom-left .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.ui-emote-bottom-left .ui-emote-image{margin-left:-80px;margin-top:30px;background-image:url(../img/loot/loot-medical-healthkit.svg)}.ui-emote-circle .ui-emote-hl{background-image:url(../img/gui/ping-part-circle-highlight.svg)}.ui-emote-quarter .ui-emote-hl{background-image:url(../img/gui/ping-part-quarter-highlight.svg)}.ui-emote-eighth .ui-emote-hl{background-image:url(../img/gui/ping-part-eighth-highlight.svg)}.ui-emote-image{z-index:1;position:fixed;background-repeat:no-repeat;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-emote-image-large{width:64px;height:64px;background-size:64px}.ui-emote-image-small{width:35px;height:35px;background-size:35px}.ui-team-indicator{z-index:2;display:none;position:fixed;top:0;left:0;border-radius:32px;width:64px;height:64px;background-size:64px;background-repeat:no-repeat;background-image:url(../img/gui/indicator.svg)}.ui-team-indicator,.ui-team-indicator-pos{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-team-indicator-pos{opacity:.75;position:relative;border-radius:24px;width:32px;height:32px;top:23px;left:32px}.ui-team-indicator-image{width:32px;height:32px;background-size:32px;background-repeat:no-repeat;background-image:url(../img/gui/ping-team-danger.svg)}.ui-indicator-ping-border{z-index:0;display:none;position:fixed;top:0;left:0;width:160px;height:160px;position:relative;background-size:160px;background-repeat:no-repeat;background-image:url(../img/gui/ping-border.svg);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#ui-top-left{position:absolute;color:#fff;font-size:16px;top:12px;left:12px;display:block}@media (max-height:768px),(max-width:1200px){#ui-top-left{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scale(.85);transform:scale(.85)}}.ui-bg-standard{background:rgba(0,0,0,.24);border-radius:5px}.ui-team-member{display:none;position:relative;width:200px;height:32px;padding:4px;margin-bottom:8px}.ui-team-member-name{font-weight:700;text-shadow:1px 1px 0 #000;font-size:16px;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-team-member-color{position:absolute;top:5px;right:5px;border-radius:7px;width:14px;height:14px}.ui-background-yellow{background-color:#ff0}.ui-background-blue{background-color:blue}.ui-background-red{background-color:red}.ui-background-purple{background-color:purple}.ui-background-cyan{background-color:cyan}.ui-team-member-status{display:none;position:absolute;top:4px;right:-38px;width:32px;height:32px;background-size:32px;background-repeat:no-repeat}.ui-team-member-status-downed{border-radius:16px;display:block!important;background-image:url(../img/gui/down.svg)!important}.ui-team-member-status-dead{display:block!important;background-image:url(../img/gui/skull-team.svg)!important;opacity:.5!important}.ui-team-member-status-disconnected{display:block!important;background-image:url(../img/gui/close.svg)!important;opacity:.5!important}.ui-team-member-health{margin-top:4px}.ui-team-member-health .ui-bar-inner{background-color:#fff;z-index:1;position:absolute;border-radius:4px;width:200px;height:10px;transition:width 0s;transition-property:width;transition-duration:0s;transition-timing-function:ease-out;transition-delay:0s}.ui-team-member-health .ui-bar-danger{background:rgba(255,0,0,.8);-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}.ui-team-member-health .ui-health-depleted{z-index:0;background:#fff;transition:width 1s;transition-property:width;transition-duration:1s;transition-timing-function:ease-out;transition-delay:0s}#ui-spectate-options-wrapper{color:#fff;display:block;left:12px;position:absolute;top:12px}@media (max-height:768px),(max-width:1200px){#ui-spectate-options-wrapper{-webkit-transform:scale(.85);transform:scale(.85);-webkit-transform-origin:top left;transform-origin:top left}}#ui-spectate-options{position:relative;pointer-events:all;width:100%}#ui-spectate-buttons{display:inline-block;padding:8px 8px 0;text-align:center;width:192px}#ui-spectate-options a{position:relative;color:#fff;font-size:16px;text-shadow:0 1px 2px rgba(0,0,0,.25);background:#50afab;border-bottom:2px solid #387c79;box-shadow:inset 0 -2px #387c79;cursor:pointer}#btn-spectate-prev-player{margin-bottom:24px}#ui-spectate-stats{vertical-align:top;display:none}#ui-spectate-stats-header{text-align:center;font-size:24px;font-weight:700;padding:8px}#ui-spectate-stats-table{width:100%;background-color:transparent;margin:auto;margin-right:0;border-collapse:collapse}#ui-spectate-stats tbody,#ui-spectate-stats td,#ui-spectate-stats th{padding:0 8px 8px 16px;font-size:18px}.ui-spectate-stats-category{width:130px;color:hsla(0,0%,100%,.75)}.ui-spectate-stats-value{width:75px;color:#fff}#ui-leaderboard{position:absolute;color:#fff;font-size:16px;top:12px;right:12px;display:flex;font-weight:700;text-align:center;width:85px;display:inline-block}@media (max-height:768px),(max-width:1200px){#ui-leaderboard{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(.85);transform:scale(.85)}}#ui-leaderboard-alive{background:rgba(0,0,0,.4);border-radius:5px;margin-bottom:8px;padding:8px;height:64px;width:72px}.ui-players-alive{position:relative;font-size:54px}.ui-players-alive-pulse{-webkit-animation-name:pulseAlive;animation-name:pulseAlive;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes pulseAlive{0%{color:#fff}20%{color:red}40%{color:#fff}to{color:#fff}}@keyframes pulseAlive{0%{color:#fff}20%{color:red}40%{color:#fff}to{color:#fff}}.ui-leaderboard-header{font-size:24px;margin-bottom:8px}#ui-killfeed-wrapper{position:absolute;color:#fff;font-size:16px;top:12px;right:12px;display:flex}@media (max-width:1200px),screen and (min-width:851px) and (max-height:768px){#ui-killfeed-wrapper{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(.85);transform:scale(.85)}}#ui-killfeed{display:inline-block;margin-left:24px;height:100px}#ui-killfeed-contents{width:800px}#ui-killfeed-contents .killfeed-div{position:absolute;right:100px;background-color:rgba(0,0,0,.4);padding:4px 8px;border-radius:2px;height:22px;line-height:24px}.killfeed-div div{float:left;font-size:16px;font-weight:700;color:#efeeee}#ui-killfeed .killfeed-text{max-width:550px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#ui-right-center:hover{opacity:1}.ui-ammo .ui-loot-image,.ui-ammo .ui-loot-overlay{position:absolute;height:22px;width:22px;right:5px;margin-top:5px;top:0;bottom:0}#ui-medical-interactive{margin-bottom:32px}.ui-medical .ui-loot-image{position:absolute;height:30px;width:30px;background-size:30px;background-repeat:no-repeat;right:5px;margin-top:1px;top:0;bottom:0}.ui-medical:hover{cursor:pointer!important}.ui-loot{background:rgba(0,0,0,.4);border-radius:5px;width:85px;height:32px;margin-left:auto;margin-bottom:5px}.ui-loot:hover{opacity:1!important}.ui-outline-hover{border:2px solid rgba(0,255,0,0)}.ui-outline-hover:hover{-webkit-transition:border .1s ease-out;-moz-transition:border .1s ease-out;-o-transition:border .1s ease-out;border:2px solid #0f0}.ui-scale-hover{transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);-moz-transform:scale(1)}.ui-scale-hover,.ui-scale-hover:hover{-webkit-transition:all .1s ease-in;-ms-transition:all .1s ease-in;-moz-transition:all .1s ease-in;transition:all .1s ease-in}.ui-scale-hover:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);-moz-transform:scale(1.1);transform:scale(1.1)}.ui-loot .ui-loot-count{position:absolute;font-size:24px;font-weight:700;left:10px;top:2px;text-align:center}@media (max-height:864px),(max-width:1024px){.ui-right-center-desktop{top:42%;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:translateY(-50%) scale(.8);transform:translateY(-50%) scale(.8)}#ui-medical-interactive{margin-bottom:8px}}@media (max-height:640px){.ui-right-center-desktop{top:42%;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:translateY(-50%) scale(.7);transform:translateY(-50%) scale(.7)}#ui-medical-interactive{margin-bottom:8px}}#ui-upper-center{position:absolute;display:flex;color:#fff;top:180px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-announcement{display:none;color:#ff0;text-shadow:2px 2px 0 #000;font-size:32px;font-weight:700;text-align:center;width:100vw}#ui-lower-center{position:absolute;color:#fff;bottom:40%;left:50%}@media (max-width:1200px),screen and (min-width:851px) and (max-height:768px){#ui-lower-center{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:scale(.85);transform:scale(.85);bottom:33%}}#ui-interaction{display:flex}#ui-interaction-press{background:rgba(0,0,0,.4);border-radius:5px;margin-left:-24px;width:48px;height:48px;font-size:42px;font-weight:700;text-align:center;background-size:80%;background-position:50%;background-repeat:no-repeat}#ui-interaction-outer{background:rgba(0,0,0,.4);border-radius:5px;margin-left:10px;padding:0 15px;height:48px}#ui-interaction-outer #ui-interaction-description{margin-top:10px;font-size:24px;text-align:center}#ui-map-container{position:absolute;bottom:52px}#ui-map-info{position:absolute;color:#fff;width:100px;height:36px;bottom:218px;left:82px;background:rgba(0,0,0,.4);border-radius:5px}#ui-gas-icon{padding:6px;display:inline-block;height:24px;width:24px;margin-left:2px;background-size:24px;background-repeat:no-repeat;background-position:6px 6px}.gas-icon{background-image:url(../img/gui/gas.svg)}.danger-icon{background-image:url(../img/gui/danger.svg)}.icon-pulse{-webkit-animation:pulse 2s linear infinite;animation:pulse 2s linear infinite}#ui-gas-timer{position:relative;display:inline-block;font-size:24px;text-align:center;bottom:10px;left:2px}#ui-spec-counter{position:absolute;color:#fff;width:68px;height:28px;bottom:218px;left:6px;background:rgba(0,0,0,.4);border-radius:5px}#ui-spec-counter-icon{padding:6px;display:inline-block;height:24px;width:18px;margin-left:2px;background-size:20px;background-repeat:no-repeat;background-position:6px 4px;background-image:url(../img/gui/eye.svg)}#ui-spec-counter-number{position:relative;display:inline-block;font-size:20px;width:24px;text-align:center;bottom:15px;left:0}#ui-settings-container-desktop{position:relative;left:16px;bottom:12px}#ui-settings-container-desktop div{cursor:pointer}.ui-settings-button{position:absolute;color:#fff;border-radius:5px;height:48px;width:48px;pointer-events:all;opacity:.5;background:rgba(0,0,0,.4)}#ui-map-minimize{left:185px}.ui-settings-button img{position:absolute;left:6px;top:6px;height:36px;width:36px;background-size:36px;background-repeat:no-repeat;transform:scale(1);-webkit-transition:all .1s ease-in;-webkit-transform:scale(1);-ms-transition:all .1s ease-in;-ms-transform:scale(1);-moz-transition:all .1s ease-in;-moz-transform:scale(1);transition:all .1s ease-in;transition:opacity .25s ease-out;-moz-transition:opacity .25s ease-out;-webkit-transition:opacity .25s ease-out;-o-transition:opacity .25s ease-out}.ui-settings-button .map-img-after{display:none}.ui-settings-button:hover{opacity:1;-webkit-transition:all .1s ease-in;-webkit-transform:scale(1.1);-ms-transition:all .1s ease-in;-ms-transform:scale(1.1);-moz-transition:all .1s ease-in;-moz-transform:scale(1.1);transition:all .1s ease-in;transform:scale(1.1)}#ui-bottom-center-0{position:absolute;color:#fff;bottom:12px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-height:768px),(max-width:1200px){#ui-bottom-center-0{-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transform:translateX(-50%) scale(.85);transform:translateX(-50%) scale(.85)}}#ui-equipped-ammo-wrapper{position:absolute;color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:62px}#ui-equipped-ammo{margin-bottom:12px;text-align:center;opacity:1}#ui-bullet-counter{display:inline-block;width:175px;height:56px;text-align:center;text-shadow:2px 2px #000}#ui-bullet-counter #ui-current-clip{background:rgba(0,0,0,.4);border-radius:5px;font-size:44px;font-weight:700;width:100px;height:50px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:relative;text-align:center}#ui-bullet-counter #ui-ammo-divider{font-size:22px;left:53%;position:absolute;text-align:center;top:20px}#ui-bullet-counter #ui-remaining-ammo{background:rgba(0,0,0,.4);border-radius:5px;font-size:24px;font-weight:700;line-height:32px;width:65px;height:32px;left:82%;position:absolute;text-align:center;top:18px}#ui-boost-counter{display:inline-flex;width:412px}#ui-boost-counter .ui-boost-base{background:rgba(0,0,0,.4);height:10px;margin-bottom:8px}#ui-boost-counter-0{border-top-left-radius:3px;border-bottom-left-radius:3px;width:100px;margin-right:3px}#ui-boost-counter-0 .ui-bar-inner{background:#ff901a}#ui-boost-counter-1{width:100px;margin-left:3px;margin-right:3px}#ui-boost-counter-1 .ui-bar-inner{background:#ff751a}#ui-boost-counter-2{width:150px;margin-left:3px;margin-right:3px}#ui-boost-counter-2 .ui-bar-inner{background:#ff6616}#ui-boost-counter-3{border-top-right-radius:3px;border-bottom-right-radius:3px;width:50px;margin-left:3px}#ui-boost-counter-3 .ui-bar-inner{background:#ff5600}.ui-boost-base .ui-bar-inner{border-radius:inherit;width:0;height:10px}#ui-health-counter{background:rgba(0,0,0,.4);border-radius:5px;width:400px;height:32px;padding:6px}#ui-health-counter .ui-bar-inner{z-index:1;position:absolute;border-radius:5px;width:100%;height:32px;transition:width 0s;transition-property:width;transition-duration:0s;transition-timing-function:ease-out;transition-delay:0s}#ui-health-container{width:400px;position:relative}#ui-health-counter .ui-bar-danger{background:rgba(255,0,0,.8);-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}#ui-health-counter #ui-health-depleted{z-index:0;background:#fff;transition:width 1s;transition-property:width;transition-duration:1s;transition-timing-function:ease-out;transition-delay:0s}.health-bar-pulse{-webkit-animation:pulsewhite 1s linear infinite;animation:pulsewhite 1s linear infinite}@-webkit-keyframes pulsewhite{0%{background-color:rgba(0,0,0,.6)}50%{background-color:hsla(0,0%,100%,.6)}to{background-color:rgba(0,0,0,.6)}}@keyframes pulsewhite{0%{background-color:rgba(0,0,0,.6)}50%{background-color:hsla(0,0%,100%,.6)}to{background-color:rgba(0,0,0,.6)}}@-webkit-keyframes pulse{0%{background-color:rgba(0,0,0,.8)}50%{background-color:rgba(255,0,0,.8)}to{background-color:rgba(0,0,0,.8)}}@keyframes pulse{0%{background-color:rgba(0,0,0,.8)}50%{background-color:rgba(255,0,0,.8)}to{background-color:rgba(0,0,0,.8)}}#ui-bottom-center-1{z-index:3;position:absolute;color:#fff;bottom:220px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-height:768px),(max-width:1200px){#ui-bottom-center-1{-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transform:translateX(-50%) scale(.85);transform:translateX(-50%) scale(.85);bottom:138px}}#ui-kills{display:none;text-align:center;background:rgba(0,0,0,.4);color:#fff;border-radius:5px;padding:8px}#ui-kill-text{font-size:18px}#ui-kill-count{font-weight:700;color:#ff4100;font-size:32px;text-shadow:1px 1px 1px rgba(0,0,0,.3)}#ui-bottom-center-2{position:absolute;color:#fff;bottom:160px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-pickup-message{color:#fff;opacity:0;text-shadow:2px 2px 0 #000;font-size:32px;font-weight:700;text-align:center;width:100vw}#ui-bottom-center-right{position:absolute;color:#fff;bottom:12px;left:75%}@media (max-height:768px),(max-width:1200px){#ui-bottom-center-right{-webkit-transform:scale(.8);transform:scale(.8)}}.ui-armor-counter{position:absolute;bottom:0;display:block;width:48px;height:60px;background:rgba(0,0,0,.4);border-radius:5px;margin-left:4px}#ui-armor-helmet{right:4px}#ui-armor-backpack{left:60px;border:2px solid transparent}.ui-armor-level{position:relative;font-size:16px;font-weight:700;bottom:24px;text-align:center;text-shadow:1px 1px #000}.ui-armor-counter-inner{z-index:1;position:absolute;background:rgba(0,255,0,.5);border-radius:5px;width:100%;height:0;bottom:0;transition:height .5s;transition-property:height;transition-duration:.5s;transition-timing-function:ease-out;transition-delay:0s}.ui-armor-counter .ui-armor-count{z-index:2;text-shadow:2px 2px #000;position:relative;font-size:18px;font-weight:700;margin-top:-28px;text-align:center}.ui-armor-counter .ui-armor-image{margin:auto;left:0;right:0;bottom:0;top:0;z-index:0;position:absolute;height:36px;width:36px}#ui-bottom-right{position:absolute;color:#fff;bottom:12px;right:12px}@media (max-height:768px),(max-width:1200px){#ui-bottom-right{-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scale(.7);transform:scale(.7)}}#ui-weapon-container{width:192px}.ui-weapon-info{margin-bottom:5px}.ui-weapon-info,.ui-weapon-switch{border-radius:5px;border:2px solid transparent}.ui-weapon-switch{position:absolute;right:0;opacity:.6;width:160px;height:60px;margin-left:auto;pointer-events:all;cursor:pointer!important}#ui-weapon-id-1{bottom:210px}#ui-weapon-id-2{bottom:140px}#ui-weapon-id-3{bottom:70px}#ui-weapon-id-4{bottom:0}.ui-weapon-name{font-size:18px;margin-top:38px}.ui-weapon-name,.ui-weapon-number{position:absolute;font-weight:700;right:8px;text-align:center}.ui-weapon-number{font-size:24px}.ui-weapon-exp{display:none;position:absolute;height:32px;width:32px;font-size:18px;font-weight:700;line-height:34px;right:78px;margin-top:26px;text-align:center}.ui-weapon-image{display:none;position:relative;height:60px;width:60px;left:4px;background-size:60px;background-repeat:no-repeat}#ui-weapon-id-4 .ui-weapon-image{height:52px;width:52px;left:4px;top:4px;background-size:52px}#ui-stats{display:none}#ui-stats-bg{display:none;opacity:0;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);pointer-events:none;z-index:2}#ui-stats-contents{position:absolute;width:100%;top:10%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;color:#fff;border-radius:5px;z-index:3}@media (max-height:860px){#ui-stats-contents{top:3%}}@media (max-width:1024px){#ui-stats-contents{-webkit-transform:translateX(-50%) scale(.8);transform:translateX(-50%) scale(.8);-webkit-transform-origin:top;transform-origin:top}}.ui-stats-header-title{font-weight:700;font-size:48px;margin:20px;color:gold}.ui-stats-header-reason{font-size:24px}.ui-stats-header-overview{display:inline;margin:10px}.ui-stats-header-overview div{display:inline;padding-bottom:12px;border-bottom:2px solid hsla(0,0%,100%,.25)}.ui-stats-header-overview div:not(:first-child){margin-left:100px}span.ui-stats-header-stat{font-size:32px}span.ui-stats-header-value{margin-left:24px;font-size:48px;font-weight:700}#ui-stats-info-box{position:relative;left:50%;margin:auto;margin-top:50px;height:190px;display:flex}@media (max-height:768px),(max-width:1200px){#ui-stats-info-box{margin-top:25px}}@media (max-width:1024px){#ui-stats-info-box{-webkit-transform-origin:left;transform-origin:left;-webkit-transform:scale(.85);transform:scale(.85)}}.ui-stats-info-player{position:relative;width:250px;background-color:rgba(0,0,0,.75);border-radius:4px;border:2px solid #000;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui-stats-info-status:after{content:"";display:block;position:absolute;top:15%;left:25%;background-image:url(../img/gui/skull.svg);background-repeat:no-repeat;background-size:128px;width:100%;height:100%;opacity:.1;z-index:-1}.ui-stats-info-player-name{color:gold;font-size:24px;font-weight:700;font-style:italic;margin:8px auto;max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-stats-info{display:flex;height:36px;margin:auto}.ui-stats-info>div{padding:8px;font-size:18px;line-height:12px;text-align:left;font-weight:700}.ui-stats-info>div:first-child{width:55%;margin-right:4px;text-align:right;font-weight:400}.ui-stats-reason{display:flex;height:72px;margin:auto}.ui-stats-reason div{padding:8px;margin:auto;width:100%;text-align:center;font-size:16px}.ui-stats-reason .ui-stats-reason-dead{color:red}.ui-stats-reason .ui-stats-reason-alive{color:#7cfc00}#ui-stats-options{position:absolute;left:50%;margin-top:20px;min-height:60px;z-index:1}.ui-stats-restart{width:200px;margin:auto;margin-bottom:20px}#ui-stats-spectate,.ui-stats-restart{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-stats-spectate{left:102px;width:125px;background:#50afab;border-bottom:2px solid #387c79;box-shadow:inset 0 -2px #387c79}.ui-stats-ad-container{display:none;margin-top:80px}#ui-spec-ad-container{z-index:1;position:absolute;top:0;left:50%}.tooltip{position:relative}.tooltip .tooltip-text{visibility:hidden;width:240px;background-color:#000;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;right:110%;opacity:.75;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tooltip .tooltip-text:after{content:" ";position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent #000}.tooltip-title{font-size:18px;font-weight:700;padding:4px;color:#ff0}.tooltip-description{font-size:16px;padding:4px}.tooltip-description span{font-size:16px}.tooltip:hover .tooltip-text{visibility:visible}#ui-editor-top-center{position:absolute;color:#fff;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-editor-top-right{position:absolute;color:#fff;font-size:16px;top:12px;right:12px}.ui-editor-header{text-align:center;font-weight:700;font-size:16px;padding:8px}.ui-editor-info{background:rgba(0,0,0,.4);border-radius:5px;font-size:36px;margin-bottom:8px;padding:8px}.ui-editor-list{margin:0;padding:0;list-style:none}.ui-editor-list li div{font-family:monospace;font-size:14px}#ui-profiler-top-left{position:absolute;color:#fff;font-size:16px;top:12px;left:12px;text-align:center;display:flex}.ui-profiler-list{background:rgba(0,0,0,.4);border-radius:5px;margin-right:16px;padding:8px}.ui-profiler-list-header{font-size:16px;font-weight:700;margin-bottom:8px}.ui-profiler-list ul{list-style:none;text-align:left;padding:0;margin:0}.ui-profiler-list li{display:flex}.kv{font-family:monospace;font-size:14px;font-weight:400}.kv:last-child{width:100%;text-align:right}#ui-settings-container-mobile{display:none}@media screen and (max-width:850px){*{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-touch-down{display:none;position:fixed;background-color:rgba(0,0,0,.5);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-touch-down-landscape{width:112px;height:112px;border-radius:56px}.ui-touch-down-portrait{width:96px;height:96px;border-radius:48px}.ui-touch-pos{display:none;position:fixed;background-color:rgba(0,0,0,.5);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-touch-pos-landscape{width:64px;height:64px;border-radius:32px}.ui-touch-pos-portrait{width:48px;height:48px;border-radius:24px}.btn-game-menu{position:relative;margin:auto;margin-top:2px;margin-bottom:4px;color:#fff;font-size:14px;text-shadow:0 1px 2px rgba(0,0,0,.25);background-color:#50afab;border-bottom:2px solid #387c79;box-shadow:inset 0 -2px #387c79;background-repeat:no-repeat;cursor:pointer;text-align:center;line-height:30px;display:block;width:100%;height:30px;border:0;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;box-sizing:border-box}#btn-game-fullscreen{background-size:22px;background-position:4px 2px;background-image:url(../img/gui/minimize.svg)}#btn-game-sound{background-size:30px;background-position:3px 0;margin-bottom:8px}#btn-game-quit{background-position:-2px -3px;background-image:url(../img/gui/quit.svg)}#btn-game-quit,#btn-game-resume{margin-top:20px;background-size:34px}#btn-game-resume{background-position:-1px -1px;background-image:url(../img/gui/resume.svg)}#ui-top-center{position:absolute;color:#fff;top:15%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-top-center .top-center-text{text-align:center;width:100vw;padding:4px}#ui-waiting-text{display:none;color:#fff;text-shadow:1px 1px 0 #000}#ui-waiting-text,#ui-waiting-text span{font-size:16px;font-weight:700}.top-center-text .spectate-text{display:inline-block;text-shadow:1px 1px 0 #000;font-size:16px;font-weight:700;overflow:hidden;height:32px}.top-center-text .spectate-desc{color:#fff;margin-right:8px}.ui-spectate-mode{display:none}#ui-spectate-text{position:relative}#spectate-player{max-width:250px;white-space:nowrap;text-overflow:ellipsis;color:cyan}#ui-top-center-scopes{margin-top:6px;text-align:center;color:#fff}.ui-zoom{display:inline-block;margin-left:-12px;margin-right:-12px;-webkit-transform:scale(.6);transform:scale(.6);background:rgba(0,0,0,.3);border-radius:32px;width:42px;height:42px;opacity:.6;pointer-events:all}.ui-zoom-active{vertical-align:baseline;opacity:1;margin-left:0;margin-right:0;-webkit-transition:all .1s ease-in;-webkit-transform:scale(1);-ms-transition:all .1s ease-in;-ms-transform:scale(1);-moz-transition:all .1s ease-in;-moz-transform:scale(1);transition:all .1s ease-in;transition:opacity .25s ease-out;-moz-transition:opacity .25s ease-out;-webkit-transition:opacity .25s ease-out;-o-transition:opacity .25s ease-out}.ui-zoom .ui-zoom-image{width:48px;height:48px;opacity:.4;padding:2px}.ui-zoom .ui-zoom-text{margin-top:14px;width:100%}.ui-zoom .ui-zoom-level{font-size:24px;line-height:16px;text-align:center;width:100%}.ui-zoom .ui-zoom-append{font-size:24px}.ui-zoom-inactive{display:none;margin-left:-8px;margin-right:-8px;transition:all .1s ease-in;-webkit-transform:scale(.6);transform:scale(.6)}.ui-emote-wheel{z-index:3;display:none;position:fixed}.ui-emote-parent{opacity:1}.ui-emote-hl{z-index:2;display:none}.ui-emote{position:fixed;width:256px;height:256px;background-size:256px;background-repeat:no-repeat;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-emote-bg-circle{opacity:.65;background-image:url(../img/gui/ping-part-circle.svg)}.ui-emote-bg-quarter{opacity:.65;background-image:url(../img/gui/ping-part-quarter.svg)}.ui-emote-bg-eighth{opacity:.65;background-image:url(../img/gui/ping-part-eighth.svg)}.ui-emote-middle .ui-emote-image{width:24px!important;height:24px!important;background-size:24px!important;background-image:none!important}.ui-emote-top .ui-emote-image{margin-top:-78px;background-image:url(../img/gui/ping-team-danger.svg)}.ui-emote-right .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}.ui-emote-right .ui-emote-image{margin-left:78px;background-image:url(../img/gui/ping-team-coming.svg)}.ui-emote-bottom .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}.ui-emote-bottom .ui-emote-image{margin-top:78px;background-image:url(../img/gui/ping-team-help.svg)}.ui-emote-left .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(270deg);transform:translate(-50%,-50%) rotate(270deg)}.ui-emote-left .ui-emote-image{margin-left:-78px;background-image:url(../img/gui/ping-team-help.svg)}.ui-emote-top-left .ui-emote-image{margin-left:-80px;margin-top:-30px;background-image:url(../img/loot/loot-ammo-box.svg)}.ui-emote-bottom-left .ui-emote{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.ui-emote-bottom-left .ui-emote-image{margin-left:-80px;margin-top:30px;background-image:url(../img/loot/loot-medical-healthkit.svg)}.ui-emote-circle .ui-emote-hl{background-image:url(../img/gui/ping-part-circle-highlight.svg)}.ui-emote-quarter .ui-emote-hl{background-image:url(../img/gui/ping-part-quarter-highlight.svg)}.ui-emote-eighth .ui-emote-hl{background-image:url(../img/gui/ping-part-eighth-highlight.svg)}.ui-emote-image{z-index:1;position:fixed;background-repeat:no-repeat;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-emote-image-large{width:80px;height:80px;background-size:64px;background-position:50%}.ui-emote-image-small{width:35px;height:35px;background-size:35px}.ui-team-indicator{z-index:2;display:none;position:fixed;top:0;left:0;border-radius:32px;width:64px;height:64px;background-size:64px;background-repeat:no-repeat;background-image:url(../img/gui/indicator.svg)}.ui-team-indicator,.ui-team-indicator-pos{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ui-team-indicator-pos{opacity:.75;position:relative;border-radius:24px;width:32px;height:32px;top:23px;left:32px}.ui-team-indicator-image{width:32px;height:32px;background-size:32px;background-repeat:no-repeat;background-image:url(../img/gui/ping-team-danger.svg)}.ui-indicator-ping-border{z-index:0;display:none;position:fixed;top:0;left:0;width:160px;height:160px;position:relative;background-size:160px;background-repeat:no-repeat;background-image:url(../img/gui/ping-border.svg);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#ui-top-left{position:absolute;color:#fff;font-size:16px;top:6px;left:6px;display:block}.ui-bg-standard{background:rgba(0,0,0,.24);border-radius:5px}#ui-team{position:fixed;left:128px}.ui-team-member{display:none;position:relative;width:110px;height:20px;padding:4px;margin-bottom:4px}.ui-team-member-name{font-weight:700;text-shadow:1px 1px 0 #000;font-size:10px;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-team-member-color{position:absolute;top:4px;right:4px;border-radius:9px;width:9px;height:9px}.ui-background-yellow{background-color:#ff0}.ui-background-blue{background-color:blue}.ui-background-red{background-color:red}.ui-background-purple{background-color:purple}.ui-background-cyan{background-color:cyan}.ui-team-member-status{display:none;position:absolute;top:2px;right:-24px;width:20px;height:20px;background-size:20px;background-repeat:no-repeat}.ui-team-member-status-downed{border-radius:16px;display:block!important;background-image:url(../img/gui/down.svg)!important}.ui-team-member-status-dead{display:block!important;background-image:url(../img/gui/skull-team.svg)!important;opacity:.5!important}.ui-team-member-status-disconnected{display:block!important;background-image:url(../img/gui/close.svg)!important;opacity:.5!important}.ui-team-member-health{margin-top:2px}.ui-team-member-health .ui-bar-inner{background-color:#fff;z-index:1;position:absolute;border-radius:4px;width:110px;height:5px;transition:width 0s;transition-property:width;transition-duration:0s;transition-timing-function:ease-out;transition-delay:0s}.ui-team-member-health .ui-bar-danger{background:rgba(255,0,0,.8);-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}.ui-team-member-health .ui-health-depleted{z-index:0;background:#fff;transition:width 1s;transition-property:width;transition-duration:1s;transition-timing-function:ease-out;transition-delay:0s}#ui-spectate-options-wrapper{bottom:6px;position:fixed;left:6px;top:auto!important}#ui-spectate-options{bottom:0;z-index:1;position:absolute;pointer-events:all;width:100%}#ui-spectate-buttons{display:inline-block;width:124px;padding:8px 8px 4px;text-align:center}#ui-spectate-options a{position:relative;color:#fff;height:24px;margin-bottom:2px;line-height:22px;font-size:12px;text-shadow:0 1px 2px rgba(0,0,0,.25);background:#50afab;border-bottom:2px solid #387c79;box-shadow:none;cursor:pointer}#btn-spectate-prev-player,#btn-spectate-view-stats{margin-bottom:12px!important}#ui-spectate-stats{position:absolute;top:0;left:146px;width:160px;display:none}#ui-spectate-stats-header{text-align:center;font-size:16px;font-weight:700;padding:6px;color:#fff}#ui-spectate-stats-table{width:100%;background-color:transparent;margin:auto;margin-right:0;margin-bottom:4px;border-collapse:collapse}#ui-spectate-stats tbody,#ui-spectate-stats td,#ui-spectate-stats th{padding:0 2px 2px 14px;font-size:10px}.ui-spectate-stats-category{width:75px;color:hsla(0,0%,100%,.75)}.ui-spectate-stats-value{width:75px;color:#fff}#ui-top-right{position:absolute;color:#fff;font-size:16px;top:6px;left:6px;display:flex}#ui-leaderboard{font-weight:700;text-align:center;width:56px;display:inline-block}#ui-leaderboard-alive{background:rgba(0,0,0,.4);border-radius:5px;margin-bottom:-16px;padding:8px;height:32px;width:40px}.ui-players-alive-pulse{-webkit-animation-name:pulseAlive;animation-name:pulseAlive;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes pulseAlive{0%{color:#fff}20%{color:red}40%{color:#fff}to{color:#fff}}@keyframes pulseAlive{0%{color:#fff}20%{color:red}40%{color:#fff}to{color:#fff}}.ui-leaderboard-header{font-size:12px}#ui-killfeed-wrapper{top:24px;left:6px;right:auto}#ui-killfeed{position:absolute;margin:initial;top:135px}#ui-killfeed-contents{width:800px}#ui-killfeed-contents .killfeed-div{position:absolute;background-color:rgba(0,0,0,.4);padding:3px;border-radius:2px;height:8px;line-height:8px;right:auto}.killfeed-div div,.killfeed-div span{float:left;font-size:8px;line-height:8px;font-weight:700;color:#efeeee}.killfeed-red div,.killfeed-red span{color:#d1777c!important}.killfeed-blue div,.killfeed-blue span{color:#00bfff!important}#ui-killfeed-contents .killfeed-red{color:#d1777c}#ui-killfeed-contents .killfeed-blue{color:#00bfff}#ui-killfeed .killfeed-name{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-ammo .ui-loot-image,.ui-ammo .ui-loot-overlay{position:absolute;height:11px;width:11px;right:2px;margin-top:2px}#ui-ammo-interactive{position:absolute;right:0;top:25px}#ui-ammo-interactive .ui-loot{display:inline-block;background:rgba(0,0,0,.4);border-radius:5px;width:38px;height:14px;margin-left:auto;margin-bottom:2px}.ui-ammo .ui-loot-count{position:absolute;font-size:12px;font-weight:700;width:16px;left:3px;margin-top:-1px;text-align:center}#ui-medical-interactive .ui-loot{display:inline-block;background:rgba(0,0,0,.4);border-radius:5px;width:44px;height:16px;margin-left:auto;margin-bottom:2px}.ui-medical .ui-loot-image{position:absolute;height:16px;width:16px;background-size:16px;background-repeat:no-repeat;right:2px;margin-top:0}.ui-medical .ui-loot-count{position:absolute;font-size:16px;font-weight:700;left:4px;width:16px;margin-top:-3px;text-align:center}.ui-loot{background:rgba(0,0,0,.4);border-radius:5px;width:85px;height:32px;margin-left:auto;margin-bottom:5px}.ui-loot:hover{opacity:1!important}.ui-outline-hover,.ui-outline-hover:hover{border:2px solid rgba(0,255,0,0)}.ui-outline-hover:hover{-webkit-transition:border .1s ease-out;-moz-transition:border .1s ease-out;-o-transition:border .1s ease-out}.ui-scale-hover{transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);-moz-transform:scale(1)}.ui-scale-hover,.ui-scale-hover:hover{-webkit-transition:all .1s ease-in;-ms-transition:all .1s ease-in;-moz-transition:all .1s ease-in;transition:all .1s ease-in}.ui-scale-hover:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);-moz-transform:scale(1.1);transform:scale(1.1)}#ui-debug-button{display:none;background:rgba(0,0,0,.4);position:absolute;border-radius:13px;height:26px;width:26px;background-size:18px;bottom:4px;right:4px;background-position:50%;background-image:url(../img/gui/mag-glass.svg);background-repeat:no-repeat;pointer-events:auto;z-index:1}#ui-upper-center{position:absolute;display:flex;color:#fff;top:84px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-announcement{display:none;color:#ff0;text-shadow:1px 1px 0 #000;font-size:16px;font-weight:700;text-align:center;width:100vw}#ui-lower-center{position:absolute;color:#fff;bottom:44%;left:60%}#ui-interaction{display:flex}#ui-interaction-press{background:rgba(0,0,0,.4);border-radius:5px;margin-left:-20px;font-size:34px;width:44px;height:44px;background-size:36px;background-position:50%;background-repeat:no-repeat}#ui-interaction-outer{background:rgba(0,0,0,.4);border-radius:5px;margin-left:6px;padding:0 6px;height:28px}#ui-interaction-outer #ui-interaction-description{margin-top:5px;font-size:16px;text-align:center}#ui-bottom-center-0{bottom:6px}#ui-bottom-center-0,#ui-equipped-ammo-wrapper{position:absolute;color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-equipped-ammo-wrapper{bottom:78px}#ui-equipped-ammo{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;opacity:1}#ui-bullet-counter{display:inline-block;width:175px;height:28px;text-align:center;text-shadow:1px 1px #000}#ui-bullet-counter #ui-current-clip{background:rgba(0,0,0,.4);border-radius:5px;font-size:28px;font-weight:700;line-height:30px;width:60px;height:32px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:relative;text-align:center}#ui-bullet-counter #ui-ammo-divider{font-size:22px;left:53%;position:absolute;text-align:center;top:20px}#ui-bullet-counter #ui-remaining-ammo{background:rgba(0,0,0,.4);border-radius:5px;font-size:16px;font-weight:700;line-height:22px;width:44px;height:22px;left:122px;position:absolute;text-align:center;top:10px}#ui-bullet-counter #ui-reload-button{background:rgba(0,0,0,.4);position:absolute;border-radius:11px;height:22px;width:22px;background-size:14px;top:10px;left:170px;background-position:4px 3px;background-image:url(../img/gui/bullets.svg);background-repeat:no-repeat}#ui-boost-counter{display:inline-flex;width:206px}#ui-boost-counter .ui-boost-base{background:rgba(0,0,0,.4);height:6px;margin-bottom:0}#ui-boost-counter-0{border-top-left-radius:3px;border-bottom-left-radius:3px;width:50px;margin-right:3px}#ui-boost-counter-0 .ui-bar-inner{background:#ff901a}#ui-boost-counter-1{width:50px;margin-left:3px;margin-right:3px}#ui-boost-counter-1 .ui-bar-inner{background:#ff751a}#ui-boost-counter-2{width:75px;margin-left:3px;margin-right:3px}#ui-boost-counter-2 .ui-bar-inner{background:#ff6616}#ui-boost-counter-3{border-top-right-radius:3px;border-bottom-right-radius:3px;width:25px;margin-left:3px}#ui-boost-counter-3 .ui-bar-inner{background:#ff5600}.ui-boost-base .ui-bar-inner{border-radius:inherit;width:0;height:6px}#ui-health-counter{background:rgba(0,0,0,.4);border-radius:5px;width:200px;height:18px;padding:4px}#ui-health-counter .ui-bar-inner{z-index:1;position:absolute;border-radius:5px;width:100%;height:18px;transition:width 0s;transition-property:width;transition-duration:0s;transition-timing-function:ease-out;transition-delay:0s}#ui-health-container{width:200px;position:relative}#ui-health-counter .ui-bar-danger{background:rgba(255,0,0,.8);-webkit-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-play-state:running;animation-play-state:running}#ui-health-counter #ui-health-depleted{z-index:0;background:#fff;transition:width 1s;transition-property:width;transition-duration:1s;transition-timing-function:ease-out;transition-delay:0s}.health-bar-pulse{-webkit-animation:pulsewhite 1s linear infinite;animation:pulsewhite 1s linear infinite}@-webkit-keyframes pulsewhite{0%{background-color:rgba(0,0,0,.6)}50%{background-color:hsla(0,0%,100%,.6)}to{background-color:rgba(0,0,0,.6)}}@keyframes pulsewhite{0%{background-color:rgba(0,0,0,.6)}50%{background-color:hsla(0,0%,100%,.6)}to{background-color:rgba(0,0,0,.6)}}@-webkit-keyframes pulse{0%{background-color:rgba(0,0,0,.8)}50%{background-color:rgba(255,0,0,.8)}to{background-color:rgba(0,0,0,.8)}}@keyframes pulse{0%{background-color:rgba(0,0,0,.8)}50%{background-color:rgba(255,0,0,.8)}to{background-color:rgba(0,0,0,.8)}}#ui-bottom-center-1{z-index:3;position:absolute;color:#fff;bottom:23%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-kills{display:none;text-align:center;background:rgba(0,0,0,.4);color:#fff;border-radius:5px;padding:6px}#ui-kill-text{font-size:10px}#ui-kill-count{font-weight:700;color:#ff4100;font-size:18px;margin-bottom:-3px;text-shadow:1px 1px 1px rgba(0,0,0,.3)}#ui-bottom-center-2{position:absolute;color:#fff;bottom:82px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-pickup-message{color:#fff;text-shadow:1px 1px 0 #000;font-size:16px;font-weight:700;text-align:center;width:100vw}#ui-bottom-center-right{position:absolute;color:#fff;bottom:6px;left:75%}.ui-armor-counter{position:absolute;bottom:0;display:block;width:20px;height:24px;background:rgba(0,0,0,.4);border-radius:5px;margin-left:2px}#ui-armor-helmet{right:0}#ui-armor-backpack{left:26px}.ui-armor-level{position:relative;font-size:8px;font-weight:700;bottom:12px;text-align:center;text-shadow:1px 1px #000}.ui-armor-counter-inner{z-index:1;position:absolute;background:rgba(0,255,0,.5);border-radius:5px;width:100%;height:0;bottom:0;transition:height .5s;transition-property:height;transition-duration:.5s;transition-timing-function:ease-out;transition-delay:0s}.ui-armor-counter .ui-armor-count{z-index:2;text-shadow:1px 1px #000;position:relative;font-size:18px;font-weight:700;margin-top:-28px;text-align:center}.ui-armor-counter .ui-armor-image{margin:auto;left:0;right:0;bottom:0;top:0;z-index:0;position:absolute;height:18px;width:18px}#ui-bottom-right{bottom:auto;color:#fff;position:absolute;right:6px;top:55%;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transform:scale(1);transform:scale(1)}#ui-weapon-container{width:84px}.ui-weapon-info{margin-bottom:5px}.ui-weapon-info,.ui-weapon-switch{border-radius:5px;border:2px solid transparent}.ui-weapon-switch{position:absolute;right:0;opacity:.6;width:68px;height:24px;margin-left:auto;pointer-events:all}#ui-weapon-id-1{bottom:90px}#ui-weapon-id-2{bottom:60px}#ui-weapon-id-3{bottom:30px}#ui-weapon-id-4{bottom:0}.ui-weapon-name{position:absolute;font-size:10px;font-weight:700;right:4px;width:48px;margin-top:12px;text-align:right;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ui-weapon-number{font-size:24px;right:8px}.ui-weapon-exp,.ui-weapon-number{display:none;position:absolute;font-weight:700;text-align:center}.ui-weapon-exp{height:16px;width:16px;font-size:8px;line-height:18px;right:34px;margin-top:10px}.ui-weapon-image{display:none;position:relative;height:28px;width:28px;left:0;bottom:3px;-webkit-transform:rotate(10deg);transform:rotate(10deg)}#ui-weapon-id-4 .ui-weapon-image{height:24px;width:24px;left:0;top:0;background-size:24px}#ui-stats-contents{position:absolute;width:100%;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;color:#fff;border-radius:5px}#ui-stats-header{margin-top:14px}.ui-stats-header-title{font-weight:700;font-size:24px;margin:6px;color:gold}.ui-stats-header-reason{font-size:12px}.ui-stats-header-overview{position:fixed;top:4px;right:12px;margin:5px}.ui-stats-header-overview div{display:block;padding-bottom:6px;border-bottom:2px solid hsla(0,0%,100%,.25)}.ui-stats-header-overview div:not(:first-child){margin:initial}span.ui-stats-header-stat{font-size:22px}span.ui-stats-header-value{margin-left:12px;font-size:28px;font-weight:700}#ui-stats-info-box{position:relative;left:50%;margin:auto;margin-top:0;height:100px;display:flex}.ui-stats-info-player{position:relative;width:125px;background-color:rgba(0,0,0,.75);border-radius:4px;border:2px solid #000;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui-stats-info-status:after{background-image:url(../img/gui/skull.svg);background-position:50%;background-repeat:no-repeat;background-size:70px;content:"";display:block;height:100%;left:auto;opacity:.1;position:absolute;top:0;width:100%;z-index:-1}.ui-stats-info-player-name{color:gold;font-size:12px;font-weight:700;font-style:italic;margin:4px auto;max-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-stats-info{display:flex;height:18px;margin:auto}.ui-stats-info>div{padding:4px;font-size:9px;line-height:6px;text-align:left;font-weight:700}.ui-stats-info>div:first-child{width:55%;margin-right:4px;text-align:right;font-weight:400}.ui-stats-reason{display:flex;height:72px;margin:auto}.ui-stats-reason div{padding:8px;margin:auto;width:100%;text-align:center;font-size:16px}.ui-stats-reason .ui-stats-reason-dead{color:red}.ui-stats-reason .ui-stats-reason-alive{color:#7cfc00}#ui-stats-options{position:absolute;left:50%;margin-top:10px;min-height:30px;z-index:1}.ui-stats-restart{width:130px;margin:auto;margin-bottom:20px}#ui-stats-spectate,.ui-stats-restart{position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-stats-spectate{left:68px;width:88px;background:#50afab;border-bottom:2px solid #387c79;box-shadow:none}.ui-stats-ad-container{display:none;margin-top:8px;-webkit-transform:scale(.7);transform:scale(.7)}#ui-spec-ad-container{z-index:1;position:absolute;top:0;left:50%}#ad-block-stats-bottom{-webkit-transform:scale(.6);transform:scale(.6);-webkit-transform-origin:center;transform-origin:center;position:static}.tooltip{position:relative}.tooltip .tooltip-text{visibility:hidden!important;width:240px;background-color:#000;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;right:110%;opacity:.75;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tooltip .tooltip-text:after{content:" ";position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent #000}.tooltip-title{font-size:18px;font-weight:700;padding:4px;color:#ff0}.tooltip-description{font-size:16px;padding:4px}.tooltip-description span{font-size:16px}#ui-editor-top-center{position:absolute;color:#fff;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#ui-editor-top-right{position:absolute;color:#fff;font-size:16px;top:6px;right:6px}.ui-editor-header{text-align:center;font-weight:700;font-size:16px;padding:8px}.ui-editor-info{background:rgba(0,0,0,.4);border-radius:5px;font-size:36px;margin-bottom:8px;padding:8px}.ui-editor-list{margin:0;padding:0;list-style:none}.ui-editor-list li div{font-family:monospace;font-size:14px}#ui-profiler-top-left{position:absolute;color:#fff;font-size:16px;top:6px;left:6px;text-align:center;display:flex}.ui-profiler-list{background:rgba(0,0,0,.4);border-radius:5px;margin-right:16px;padding:8px}.ui-profiler-list-header{font-size:16px;font-weight:700;margin-bottom:8px}.ui-profiler-list ul{list-style:none;text-align:left;padding:0;margin:0}.ui-profiler-list li{display:flex}.kv{font-family:monospace;font-size:14px;font-weight:400}.kv:last-child{width:100%;text-align:right}#ui-leaderboard-wrapper,#ui-settings-container-desktop{display:none}#ui-settings-container-mobile{display:block}}@media screen and (max-width:850px) and (max-height:360px),screen and (max-width:850px) and (max-width:640px){#ui-top-center{-webkit-transform-origin:top;transform-origin:top;-webkit-transform:translateX(-50%) scale(.85);transform:translateX(-50%) scale(.85)}}@media screen and (max-width:850px) and screen and (max-width:850px){#ui-lower-center{-webkit-transform:scale(1);transform:scale(1)}}@media screen and (max-width:850px) and (max-height:360px),screen and (max-width:850px) and (max-width:640px){#ui-bottom-center-0{-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transform:translateX(-50%) scale(.85);transform:translateX(-50%) scale(.85)}}@media screen and (max-width:850px) and (max-height:360px),screen and (max-width:850px) and (max-width:640px){#ui-bottom-right{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(.8);transform:scale(.8)}}@media screen and (max-width:850px) and (max-width:850px) and (orientation:landscape){.ui-stats-header-overview .ui-stats-header-left{position:fixed;top:6px;left:12px}.ui-stats-header-overview .ui-stats-header-right{position:fixed;top:6px;right:12px}}@media screen and (max-width:850px) and (max-height:360px) and (max-width:640px){.ui-stats-ad-container{margin-top:0;-webkit-transform:scale(.6);transform:scale(.6)}}@media screen and (max-width:850px) and (max-width:850px) and (max-height:320px){.ui-stats-ad-container{position:fixed;right:10px;top:24px;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:bottom right;transform-origin:bottom right}}@media screen and (max-width:850px) and (orientation:portrait){#ui-stats-contents{margin-top:32px;margin-bottom:16px}#ui-stats-header-overview{position:static}#ui-stats-info-box{display:inline-block;left:auto;-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:initial;transform-origin:initial;margin-top:2px;width:100%}.ui-stats-ad-container{width:100%}.ui-stats-info-player{display:inline-block;left:auto!important;margin:8px;-webkit-transform:none;transform:none}.ui-stats-header-overview{display:inline-block;position:static;width:175px}.ui-stats-header-overview div{position:static;margin-bottom:8px}#ui-top-center{top:134px;left:50%}#ui-top-center-scopes-wrapper{display:none;bottom:42px;top:auto}#ui-team{top:40px}.ui-team-member{height:18px;margin-bottom:4px}#ui-upper-center{top:180px}#ui-bottom-center-0{top:-15px;bottom:auto;left:100px;-webkit-transform:scale(.85);transform:scale(.85)}#ui-bottom-center-1{bottom:28%}#ui-bottom-center-2{bottom:218px}#ui-lower-center{bottom:38%;left:38%}#ui-boost-counter{position:relative;top:40px;left:2px}#ui-bottom-right{bottom:20px;right:6px;top:auto}#ui-weapon-id-1{right:240px;bottom:auto}#ui-weapon-id-2{right:160px;bottom:auto}#ui-weapon-id-3{right:80px;bottom:auto}#ui-weapon-id-4{bottom:auto}.ui-weapon-info{display:inline-block}#ui-bottom-center-right{bottom:9px;left:30px}.ui-right-center-mobile{top:6px}#ui-emote-button{top:200px}#ui-debug-button{top:210px}#ui-ammo-interactive{left:8px;margin-top:4px;top:88px}#ui-ammo-interactive .ui-loot,#ui-medical-interactive .ui-loot{display:block}#ui-equipped-ammo{position:static}#ui-equipped-ammo,#ui-equipped-ammo-wrapper{left:auto;-webkit-transform:none;transform:none}#ui-equipped-ammo-wrapper{bottom:auto;color:#fff;position:absolute;right:6px;top:44%}#ui-bullet-counter{width:auto}#ui-bullet-counter #ui-current-clip{left:50%}#ui-bullet-counter #ui-remaining-ammo{left:auto;right:0;top:36px}#ui-bullet-counter #ui-reload-button{left:auto;right:0;top:62px}#big-map-collision{left:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#big-map-close{bottom:auto;top:12px}#ui-spectate-options-wrapper{bottom:42px;-webkit-transform:scale(.7);transform:scale(.7)}#ui-spectate-options{position:absolute;bottom:12px}#ui-spectate-stats{bottom:0;top:auto}}@media screen and (max-width:850px) and (orientation:portrait) and (min-height:668px){#ui-stats-contents{margin-top:32px}#ui-stats-info-box,.ui-stats-ad-container{-webkit-transform:scale(1);transform:scale(1)}.ui-stats-ad-container{margin-top:20px}#ui-stats-options{display:block;left:auto;position:static;margin:auto;margin-top:24px;width:100%}.ui-stats-restart{margin-bottom:0}#ui-stats-spectate,.ui-stats-restart{display:block;position:static;-webkit-transform:initial;transform:none}#ui-stats-spectate{margin:auto;margin-top:6px}}@media screen and (max-width:850px) and (orientation:portrait) and (max-height:667px){#ui-stats-contents{margin-top:0;-webkit-transform:translateX(-50%) scale(.9);transform:translateX(-50%) scale(.9);-webkit-transform-origin:top;transform-origin:top}.ui-stats-ad-container{margin-top:20px}}@media screen and (max-width:850px) and (orientation:portrait) and (max-height:568px) and (max-width:375px){#ui-bottom-center-right{left:22px;-webkit-transform:scale(.8);transform:scale(.8)}#ui-bottom-right{right:0}#ui-bottom-center-0{top:-20px;left:84px;-webkit-transform:scale(.7);transform:scale(.7)}}', ""])
	},
	v8aM: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}
		var o, n = {
				None: 0,
				Top: 1,
				Right: 2,
				Bottom: 3,
				Left: 4,
				Win: 5,
				Death: 6,
				Count: 7
			},
			r = {
				Locked: 0,
				Default: 1,
				Account: 5,
				Twitter: 6,
				YouTube: 7,
				Facebook: 8
			},
			s = {
				None: 0,
				Empty: 1,
				Medical: 2,
				Ammo: 3,
				ThumbsUp: 4,
				SadFace: 5,
				HappyFace: 6,
				Surviv: 7,
				Ammo9mm: 8,
				Ammo12Gauge: 9,
				Ammo762mm: 10,
				Ammo556mm: 11,
				GG: 12,
				Question: 13,
				Tombstone: 14,
				JoyFace: 15,
				SobFace: 16,
				ThinkingFace: 17,
				FlagUS: 18,
				FlagThailand: 19,
				FlagGermany: 20,
				FlagFrance: 21,
				FlagSouthKorea: 22,
				FlagBrazil: 23,
				FlagCanada: 24,
				FlagSpain: 25,
				FlagRussia: 26,
				FlagMexico: 27,
				FlagPoland: 28,
				FlagUK: 29,
				FlagColombia: 30,
				FlagUkraine: 31,
				FlagTurkey: 32,
				FlagPhilippines: 33,
				FlagCzechia: 34,
				FlagPeru: 35,
				FlagAustria: 36,
				FlagArgentina: 37,
				FlagJapan: 38,
				FlagVenezuela: 39,
				FlagVietnam: 40,
				FlagSwitzerland: 41,
				FlagNetherlands: 42,
				FlagChina: 43,
				FlagTaiwan: 44,
				FlagChile: 45,
				FlagAustralia: 46,
				FlagDenmark: 47,
				FlagItaly: 48,
				FlagSweden: 49,
				FlagEcuador: 50,
				FlagSlovakia: 51,
				FlagHungary: 52,
				FlagRomania: 53,
				FlagHongKong: 54,
				FlagIndonesia: 55,
				FlagFinland: 56,
				FlagNorway: 57,
				Heart: 58,
				Sleepy: 59,
				Flex: 60,
				AngryFace: 61,
				UpsideDownFace: 62,
				Teabag: 63,
				AlienFace: 64,
				FlagBelarus: 65,
				FlagBelgium: 66,
				FlagKazakhstan: 67,
				Egg: 68,
				Police: 69,
				DabFace: 70,
				FlagMalaysia: 71,
				FlagNewZealand: 72,
				LogoSurviv: 73,
				LogoEgg: 74,
				LogoSwine: 75,
				LogoHydra: 76,
				LogoStorm: 77,
				FlagHonduras: 78,
				LogoCaduceus: 79,
				ImpFace: 80,
				MonocleFace: 81,
				SunglassFace: 82,
				HeadshotFace: 83,
				Potato: 84,
				Leek: 85,
				Eggplant: 86,
				Baguette: 87,
				Chick: 88,
				Ammo50AE: 89
			},
			l = (o = {}, i(o, s.None, {
				texture: "",
				teamOnly: !1,
				noCustom: !0,
				category: r.Locked
			}), i(o, s.Medical, {
				texture: "img/loot/loot-medical-healthkit.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.Ammo, {
				texture: "img/emotes/ammo-box.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.ThumbsUp, {
				texture: "img/emotes/thumbs-up.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.SadFace, {
				texture: "img/emotes/sad-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.HappyFace, {
				texture: "img/emotes/happy-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.Surviv, {
				texture: "img/emotes/surviv.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.Ammo9mm, {
				texture: "img/emotes/ammo-9mm.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.Ammo12Gauge, {
				texture: "img/emotes/ammo-12gauge.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.Ammo762mm, {
				texture: "img/emotes/ammo-762mm.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.Ammo556mm, {
				texture: "img/emotes/ammo-556mm.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), i(o, s.GG, {
				texture: "img/emotes/gg.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.Question, {
				texture: "img/emotes/question.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.Tombstone, {
				texture: "img/emotes/tombstone.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.JoyFace, {
				texture: "img/emotes/joy-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.SobFace, {
				texture: "img/emotes/sob-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.ThinkingFace, {
				texture: "img/emotes/thinking-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.FlagUS, {
				texture: "img/emotes/united-states-of-america.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagThailand, {
				texture: "img/emotes/thailand.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagGermany, {
				texture: "img/emotes/germany.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagFrance, {
				texture: "img/emotes/france.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagSouthKorea, {
				texture: "img/emotes/south-korea.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagBrazil, {
				texture: "img/emotes/brazil.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagCanada, {
				texture: "img/emotes/canada.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagSpain, {
				texture: "img/emotes/spain.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagRussia, {
				texture: "img/emotes/russia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagMexico, {
				texture: "img/emotes/mexico.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagPoland, {
				texture: "img/emotes/republic-of-poland.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagUK, {
				texture: "img/emotes/united-kingdom.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagColombia, {
				texture: "img/emotes/colombia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagUkraine, {
				texture: "img/emotes/ukraine.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagTurkey, {
				texture: "img/emotes/turkey.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagPhilippines, {
				texture: "img/emotes/philippines.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagCzechia, {
				texture: "img/emotes/czech-republic.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagPeru, {
				texture: "img/emotes/peru.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagAustria, {
				texture: "img/emotes/austria.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagArgentina, {
				texture: "img/emotes/argentina.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagJapan, {
				texture: "img/emotes/japan.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagVenezuela, {
				texture: "img/emotes/venezuela.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagVietnam, {
				texture: "img/emotes/vietnam.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagSwitzerland, {
				texture: "img/emotes/switzerland.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagNetherlands, {
				texture: "img/emotes/netherlands.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagChina, {
				texture: "img/emotes/china.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagTaiwan, {
				texture: "img/emotes/taiwan.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagChile, {
				texture: "img/emotes/chile.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagAustralia, {
				texture: "img/emotes/australia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagDenmark, {
				texture: "img/emotes/denmark.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagItaly, {
				texture: "img/emotes/italy.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagSweden, {
				texture: "img/emotes/sweden.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagEcuador, {
				texture: "img/emotes/ecuador.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagSlovakia, {
				texture: "img/emotes/slovakia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagHungary, {
				texture: "img/emotes/hungary.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagRomania, {
				texture: "img/emotes/romania.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagHongKong, {
				texture: "img/emotes/hong-kong.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagIndonesia, {
				texture: "img/emotes/indonesia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagFinland, {
				texture: "img/emotes/finland.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagNorway, {
				texture: "img/emotes/norway.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.Heart, {
				texture: "img/emotes/heart.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.Sleepy, {
				texture: "img/emotes/sleepy.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.Flex, {
				texture: "img/emotes/flex.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.AngryFace, {
				texture: "img/emotes/angry-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.UpsideDownFace, {
				texture: "img/emotes/upsidedown-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.Teabag, {
				texture: "img/emotes/teabag.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.AlienFace, {
				texture: "img/emotes/alien-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.FlagBelarus, {
				texture: "img/emotes/belarus.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagBelgium, {
				texture: "img/emotes/belgium.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagKazakhstan, {
				texture: "img/emotes/kazakhstan.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.Egg, {
				texture: "img/emotes/egg.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.Police, {
				texture: "img/emotes/police.svg",
				sound: "emote_01",
				teamOnly: !1,
				twitterFollow: !0,
				category: r.Twitter
			}), i(o, s.DabFace, {
				texture: "img/emotes/dab-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				youtubeSubscribe: !0,
				category: r.YouTube
			}), i(o, s.FlagMalaysia, {
				texture: "img/emotes/malaysia.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.FlagNewZealand, {
				texture: "img/emotes/new-zealand.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.LogoSurviv, {
				texture: "img/emotes/logo-surviv.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.LogoEgg, {
				texture: "img/emotes/logo-egg.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.LogoSwine, {
				texture: "img/emotes/logo-swine.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.LogoHydra, {
				texture: "img/emotes/logo-hydra.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.LogoStorm, {
				texture: "img/emotes/logo-storm.svg",
				sound: "emote_01",
				teamOnly: !1,
				category: r.Default
			}), i(o, s.FlagHonduras, {
				texture: "img/emotes/honduras.svg",
				sound: "emote_01",
				teamOnly: !1,
				facebookLike: !0,
				category: r.Facebook
			}), i(o, s.LogoCaduceus, {
				texture: "img/emotes/logo-caduceus.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.ImpFace, {
				texture: "img/emotes/imp-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.MonocleFace, {
				texture: "img/emotes/monocle-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.SunglassFace, {
				texture: "img/emotes/sunglass-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.HeadshotFace, {
				texture: "img/emotes/headshot-face.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Potato, {
				texture: "img/emotes/potato.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Leek, {
				texture: "img/emotes/leek.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Eggplant, {
				texture: "img/emotes/eggplant.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Baguette, {
				texture: "img/emotes/baguette.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Chick, {
				texture: "img/emotes/chick.svg",
				sound: "emote_01",
				teamOnly: !1,
				accountLogin: !0,
				category: r.Account
			}), i(o, s.Ammo50AE, {
				texture: "img/emotes/ammo-50AE.svg",
				sound: "emote_01",
				teamOnly: !0,
				category: r.Locked
			}), o);
		e.exports = {
			EmoteSlot: n,
			EmoteType: s,
			EmoteData: l
		}
	},
	vIPv: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("+0OL"),
			s = a("Bk7F"),
			l = a("9xSA"),
			c = a("0od3"),
			m = a("Tf6H"),
			d = a("/2+T"),
			p = (a("zinx"), a("r4ug"), a("dT1u")),
			u = a("xgte"),
			h = u.RenderType,
			g = {
				grass: "frag_grass",
				sand: "frag_sand",
				water: "frag_water"
			},
			f = function() {
				function e() {
					i(this, e), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
				}
				return o(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {
						this.sprite.visible = !1
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = this.sprite;
						if (t) {
							var s = r.items[e.type];
							this.layer = e.layer, this.type = e.type, this.rad = s.projRad
						}
						if (this.posOld = a ? d.copy(e.pos) : d.copy(this.pos), this.posZOld = a ? e.posZ : this.posZ, this.pos = d.copy(e.pos), this.posZ = e.posZ, a) {
							var l = r.items[e.type],
								c = l.worldImg;
							this.imgScale = c.scale, this.rot = 0, this.rotVel = 10 * Math.PI, this.rotDrag = m.random(1, 2), this.velZ = 0, this.grounded = !1, this.inWater = !1, this.lastSoundObjId = 0, o.texture = n.Texture.fromImage(c.sprite), o.tint = c.tint, o.alpha = 1, o.visible = !0
						}
					}
				}]), e
			}(),
			y = function() {
				function e() {
					i(this, e), this.projectilePool = new p.Pool(f)
				}
				return o(e, [{
					key: "update",
					value: function(e, t, a, i, o, n, p) {
						for (var u = this.projectilePool.getPool(), f = 0; f < u.length; f++) {
							var y = u[f];
							if (y.active) {
								var b = (r.items[y.type], y.rotDrag * (y.inWater ? 3 : 1));
								y.rotVel *= 1 / (1 + e * b), y.rot += y.rotVel * e;
								for (var x = {
										obj: null,
										pen: 0
									}, v = {
										obj: null,
										pen: 0
									}, k = l.createCircle(y.pos, y.rad), _ = o.obstaclePool.getPool(), w = 0; w < _.length; w++) {
									var S = _[w];
									if (S.active && !S.dead && m.sameLayer(S.layer, y.layer)) {
										var M = l.intersect(S.collider, k);
										if (M) {
											var T = S.height > y.posZ ? x : v;
											M.pen > T.pen && (!T.obj || T.obj.height <= S.height) && (T.obj = S, T.pen = M.pen)
										}
									}
								}
								var P = d.div(d.sub(y.pos, y.posOld), e),
									C = d.length(P);
								if (x.obj && x.obj.__id != y.lastSoundObjId && C > 7.5) {
									y.lastSoundObjId = x.obj.__id;
									var I = d.mul(d.normalizeSafe(P, d.create(1, 0)), -1);
									x.obj.playHitFx(y.pos, I, y.layer, t, a)
								}
								var z = o.getGroundSurface(y.pos, y.layer);
								y.posZ <= .01 && !y.inWater && "water" == z && (o.addRipple(y.pos, 0), y.inWater = !0);
								var A = y.velZ;
								if (y.velZ = (y.posZ - y.posZOld) / e, !y.isNew && !y.grounded && y.velZ >= 0 && A < 0) {
									var D = {
										fn: "playGroup",
										channel: "hits",
										name: ""
									};
									if (v.obj) {
										if (y.lastSoundObjId != v.obj.__id) {
											y.lastSoundObjId = v.obj.__id;
											var O = s.Defs[v.obj.type];
											D.name = O.sound.bullet
										}
									} else y.grounded = !0, D.name = g[z], void 0 === D.name && (D.name = "footstep_" + z, D.fn = "playGroup", D.channel = "sfx");
									"" != D.name && a[D.fn](D.name, {
										channel: D.channel,
										soundPos: y.pos,
										layer: y.layer,
										muffled: !0
									})
								}
								var L = y.layer,
									E = y.posZ < .25 ? 14 : 25,
									B = l.createCircle(y.pos, 3 * y.rad),
									F = o.insideStructureStairs(B),
									R = o.insideStructureMask(B);
								!(y.posZ >= .25 && F && (1 & y.layer) == (1 & i.layer)) || R && 2 & i.layer || (L |= 2, E += 100), n.addPIXIObj(y.sprite, h.World, L, E);
								var j = y.imgScale * c.remap(y.posZ, 0, r.projectile.maxHeight, 1, 2.5),
									N = p.pointToScreen(y.pos),
									q = p.pixels(j);
								y.sprite.position.set(N.x, N.y), y.sprite.scale.set(q, q), y.sprite.rotation = y.rot, y.sprite.alpha = y.inWater ? .3 : 1
							}
						}
					}
				}]), e
			}();
		e.exports = {
			ProjectileBarn: y
		}
	},
	vdJX: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-02-12",
				locale: "nl"
			},
			"word-order": "sov",
			"index-slogan": "2d Battle Royale",
			"index-region": "Regio",
			"index-north-america": "Noord-Amerika",
			"index-europe": "Europa",
			"index-asia": "Azië",
			"index-players": "spelers",
			"index-play-solo": "Speel Alleen",
			"index-play-duo": "Team van 2",
			"index-play-squad": "Team van 4",
			"index-create-team": "Maak een Team",
			"index-how-to-play": "Hoe te spelen",
			"index-leave-team": "Verlaat Team",
			"index-joining-team": "Aansluiten bij een Team",
			"index-creating-team": "Team aan het maken",
			"index-invite-link": "Uitnodigings Link",
			"index-solo": "Solo",
			"index-duo": "Team van 2",
			"index-squad": "Team van 4",
			"index-auto-fill": "Vullen",
			"index-no-fill": "Niet vullen",
			"index-waiting-for-leader": "Wachten op de leider om te beginnen",
			"index-play": "Speel",
			"index-featured-youtuber": "Aanbevolen Youtuber",
			"index-settings": "Opties",
			"index-high-resolution": "Hoge resolutie (Controleer verhogen van kwaliteit)",
			"index-screen-shake": "Scherm schudden",
			"index-mobile-announce": "Nu beschikbaar op mobiel!",
			"index-team-is-full": "Team is vol!",
			"index-failed-joining-team": "Gefaald aan te sluiten tot team.",
			"index-failed-creating-team": "Gefaald om team aan te maken.",
			"index-failed-finding-game": "Gefaald om een team te vinden.",
			"index-failed-joining-game": "Gefaald aan te sluiten tot team.",
			"index-lost-connection": "Connectie verloren met team.",
			"index-host-closed": "Gastheer heeft de connectie gesloten.",
			"index-view-more": "Bekijk meer",
			"index-back-to-main": "Terug naar het hoofdmenu",
			"index-most-kills": "Meeste kills",
			"index-total-kills": "Totale kills",
			"index-total-wins": "Totaal keer gewonnen",
			"index-top-5-percent": "Top 5 procent",
			"index-kill-death-ratio": "Kill-dood verhouding",
			"index-for": "Van",
			"index-today": "Vandaag",
			"index-this-week": "Deze week",
			"index-all-time": "Altijd",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Speler",
			"index-total-games": "Totale spellen",
			"index-controls": "Besturing",
			"index-movement": "Beweging",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Richten",
			"index-aim-ctrl": "Muis",
			"index-punch": "Slaan",
			"index-shoot": "Schieten",
			"index-shoot-ctrl": "Linker Klik",
			"index-change-weapons": "Verander wapens",
			"index-change-weapons-ctrl": "1 - 4 of muis wieltje",
			"index-stow-weapons": "Verberg Wapens (Slaan modus)",
			"index-stow-weapons-ctrl": "3 of E",
			"index-swap-weapons": "Ruil naar vorig wapen",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Herladen",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zoombereik",
			"index-scope-zoom-ctrl": "Linker Klik op Zoom",
			"index-pickup": "Oppakken",
			"index-loot": "Buit",
			"index-revive": "Opknappen",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Gebruik Medisch Item",
			"index-use-medical-ctrl": "Linker Klik op Item of 7 - 0",
			"index-drop-item": "Laat item vallen",
			"index-drop-item-ctrl": "Rechter klik op item",
			"index-cancel-action": "Annuleer Actie",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Bekijk kaart",
			"index-view-map-ctrl": "M of G",
			"index-toggle-minimap": "Verberg HUD",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Gebruik Team ping-wiel",
			"index-use-ping-ctrl": "Houd C ingedrukt, houd daarna Recht klik ingedrukt en sleep muis, laat daarna Recht klik los",
			"index-use-emote": "Gebruik Gevoelens Wiel",
			"index-use-emote-ctrl": "Houd Recht klik ingedrukt en sleep muis, laat daarna Recht klik los",
			"index-tips-1-desc": "Het doel van surviv.io is het zijn van de laatste levende speler. Je leeft maar 1 keer per spel - er is geen respawn!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "Als je andere battle royale spellen zoals PUBG, Fortnite of H1Z1 hebt gespeeld, dan ben je al halverwege! Denk maar dat surviv.io een 2D PUBG is.",
			"index-tips-3": "Pak spullen en kill",
			"index-tips-3-desc": "Je begint het spel met geen items behalve een simpele rugtas. Beweeg door de map om buit te vinden: wapens, ammunitie, scopes en medische items. Vermoord andere spelers en pak hun spullen!",
			"index-tips-4": "Rood = Slecht!",
			"index-tips-4-desc": "Spelers zijn niet de enige die je pijn kunnen doen. De dodelijke rode zone zal insluiten vanuit de zijkanten van de map en zal je enorm veel schade aanrichten als je er in staat. Houd een oog open op de kaart en blijf veilig.",
			"game-alive": "In leven",
			"game-reloading": "Herladen",
			"game-using": "aan het gebruiken",
			"game-reviving": "aan het bijbrengen",
			"game-revive-teammate": "Knap Teamgenoot op",
			"game-equip": "Uitrusten",
			"game-cancel": "Annuleren",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "Aan het wachten voor spelers",
			"game-spectating": "Toeschouwen,",
			"game-red-zone-advances": "Rode zone vordert in",
			"game-red-zone-advancing": "Rode zone vordert, ga naar de veilige zone!",
			"game-seconds": "seconden",
			"game-minutes": "minuten",
			"game-minute": "minuut",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Niet genoeg plaats!",
			"game-item-already-owned": "Item is al in bezit!",
			"game-item-already-equipped": "Item is al uitgerust!",
			"game-better-item-equipped": "Beter item uitgerust!",
			"game-play-new-game": "Speel nieuw spel",
			"game-spectate": "Toeschouwen",
			"game-full-screen": "Vol scherm",
			"game-sound": "Geluid",
			"game-quit-game": "Stop met spelen",
			"game-return-to-game": "Keer terug naar spel",
			"game-hide-match-stats": "Verberg wedstrijd statistieken",
			"game-view-match-stats": "Zie wedstrijd statistieken",
			"game-previous-teammate": "Vorige Teamgenoot",
			"game-next-teammate": "Volgende Teamgenoot",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "Verlaat spel",
			"game-your-results": "Jouw resultaten",
			"game-chicken": "Gewonnen! Vanavond eten we kip!",
			"game-won-the-game": "heeft het spel gewonnen.",
			"game-team-eliminated": "Jouw team is uitgeschakeld.",
			"game-rank": "Rang",
			"game-team-rank": "Team Rang",
			"game-team-kills": "Team Kills",
			"game-kill": "Kill",
			"game-kills": "Kills",
			"game-damage-dealt": "Schade aangericht",
			"game-damage-taken": "Schade opgelopen",
			"game-survived": "Overleefd",
			"game-backpack00": "Zak",
			"game-backpack01": "Kleine rugtas",
			"game-backpack02": "Normale rugtas",
			"game-backpack03": "Militaire rugtas",
			"game-bandage": "Verband",
			"game-bandage-tooltip": "Linker klik om 15 gezondheid te herstellen.",
			"game-healing-tooltip": "Kan niet meer dan 75 gezondheid herstellen.",
			"game-healthkit": "Verbandstrommel",
			"game-healthkit-tooltip": "Linker klik om 100 gezondheid te herstellen.",
			"game-soda": "Frisdrank",
			"game-soda-tooltip": "Linker klik om je adrenaline met 25 te stimuleren.",
			"game-adrenaline-tooltip": "Adrenaline herstelt gezondheid na een tijdje.",
			"game-painkiller": "Pillen",
			"game-painkiller-tooltip": "Linker klik om je adrenaline met 50 te stimuleren.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Ammunitie voor M9, Glock, MP5, MAC-10, UMP9 en Vector.",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "Ammunitie voor M870, Saiga-12 en MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Ammunitie voor AK-47, SCAR-H, M39, Mosin-Nagant, OT-38 en DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Ammunitie voor FAMAS, HK416, Mk 12 en M249.",
			"game-chest01": "Level 1 Armor",
			"game-chest02": "Level 2 Armor",
			"game-chest03": "Level 3 Armor",
			"game-helmet01": "Level 1 Helm",
			"game-helmet02": "Level 2 Helm",
			"game-helmet03": "Level 3 Helm",
			"game-1xscope": "1x Scope",
			"game-2xscope": "2x Scope",
			"game-4xscope": "4x Scope",
			"game-8xscope": "8x Scope",
			"game-15xscope": "15x Scope",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basis Outfit",
			"game-outfitRoyalFortune": "Koninklijk Fortuin",
			"game-outfitKeyLime": "Limoen",
			"game-outfitCobaltShell": "Kobalt schelp",
			"game-outfitCarbonFiber": "Koolstofvezel",
			"game-outfitDarkGloves": "De Professional",
			"game-outfitGhillie": "Ghillie Kostuum",
			"game-outfitCamo": "Bos Camouflage",
			"game-outfitRed": "Doelpraktijk",
			"game-outfitWhite": "Arctische Wreker",
			"game-fists": "Punch",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin-Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "Frag Granaat",
			"game-hud-frag": "Frag",
			"game-smoke": "Smoke Grenade",
			"game-hud-smoke": "Smoke",
			"game-barrel_01": "een vat",
			"game-silo_01": "een silo",
			"game-oven_01": "een oven"
		};
		e.exports = i
	},
	xE8y: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("8iex"),
			r = a("/2+T"),
			s = function() {
				function e() {
					i(this, e), this.type = e.Type.Aabb, this.min = r.create(0, 0), this.max = r.create(0, 0), this.height = 0
				}
				return o(e, [{
					key: "copy",
					value: function() {
						return this.type == e.Type.Aabb ? e.createAabb(this.min, this.max, this.height) : e.createCircle(this.pos, this.rad, this.height)
					}
				}, {
					key: "getAabb",
					value: function() {
						if (this.type == e.Type.Aabb) return this.copy();
						var t = n.circleToAabb(this.pos, this.rad);
						return e.createAabb(t.min, t.max)
					}
				}, {
					key: "transform",
					value: function(t, a, i) {
						if (this.type == e.Type.Aabb) {
							for (var o = r.mul(r.sub(this.max, this.min), .5), n = r.add(this.min, o), s = [r.create(n.x - o.x, n.y - o.y), r.create(n.x - o.x, n.y + o.y), r.create(n.x + o.x, n.y - o.y), r.create(n.x + o.x, n.y + o.y)], l = r.create(Number.MAX_VALUE, Number.MAX_VALUE), c = r.create(-Number.MAX_VALUE, -Number.MAX_VALUE), m = 0; m < s.length; m++) {
								var d = r.add(r.rotate(r.mul(s[m], i), a), t);
								l.x = Math.min(l.x, d.x), l.y = Math.min(l.y, d.y), c.x = Math.max(c.x, d.x), c.y = Math.max(c.y, d.y)
							}
							this.min = l, this.max = c
						} else this.pos = r.add(t, r.rotate(r.mul(this.pos, i), a)), this.rad *= i;
						return this
					}
				}, {
					key: "intersect",
					value: function(t) {
						if (t.height > this.height) return null;
						var a = this.type,
							i = t.type;
						if (a == e.Type.Aabb && i == e.Type.Aabb) return n.intersectAabbAabb(this.min, this.max, t.min, t.max);
						if (a == e.Type.Aabb && i == e.Type.Circle) return n.intersectAabbCircle(this.min, this.max, t.pos, t.rad);
						if (a == e.Type.Circle && i == e.Type.Aabb) {
							var o = n.intersectAabbCircle(t.min, t.max, this.pos, this.rad);
							return o && (o.dir = r.neg(o.dir)), o
						}
						return n.intersectCircleCircle(this.pos, this.rad, t.pos, t.rad)
					}
				}, {
					key: "intersectSegment",
					value: function(t, a, i) {
						return i > this.height ? null : this.type == e.Type.Aabb ? n.intersectSegmentAabb(t, a, this.min, this.max) : n.intersectSegmentCircle(t, a, this.pos, this.rad)
					}
				}]), e
			}();
		s.Type = {
			Aabb: 0,
			Circle: 1
		}, s.createCircle = function(e, t, a) {
			var i = new s;
			return i.type = s.Type.Circle, i.pos = r.copy(e), i.rad = t, i.height = a, i
		}, s.createAabb = function(e, t, a) {
			var i = new s;
			return i.type = s.Type.Aabb, i.min = r.copy(e), i.max = r.copy(t), i.height = a, i
		}, s.createAabbExtents = function(e, t, a) {
			var i = r.sub(e, t),
				o = r.add(e, t);
			return s.createAabb(i, o, a)
		};
		var l = function() {
			function e() {
				i(this, e), this.shapes = [], this.aabb = s.createAabb(r.create(0, 0), r.create(0, 0), 0), this.aabbDirty = !0
			}
			return o(e, [{
				key: "addShape",
				value: function(e) {
					this.shapes.push(e.copy()), this.aabbDirty = !0
				}
			}, {
				key: "copy",
				value: function() {
					for (var t = new e, a = 0; a < this.shapes.length; a++) t.addShape(this.shapes[a]);
					return t
				}
			}, {
				key: "getAabb",
				value: function() {
					if (this.aabbDirty) {
						for (var e = [], t = 0; t < this.shapes.length; t++) e.push(this.shapes[t].getAabb());
						var a = n.boundingAabb(e);
						this.aabb = s.createAabb(a.min, a.max, 0), this.aabbDirty = !1
					}
					return this.aabb
				}
			}, {
				key: "transform",
				value: function(e, t, a) {
					for (var i = 0; i < this.shapes.length; i++) this.shapes[i].transform(e, t, a);
					return this.aabbDirty = !0, this
				}
			}, {
				key: "intersect",
				value: function(e) {
					if (1 == this.shapes.length) {
						var t = e.intersectShape(this.shapes[0]);
						return t && (t.dir = r.neg(t.dir)), t
					}
					return 1 == e.shapes.length ? this.intersectShape(e.shapes[0]) : this.getAabb().intersect(e.getAabb())
				}
			}, {
				key: "intersectShape",
				value: function(e, t) {
					for (var a = null, i = 0; i < this.shapes.length; i++) {
						var o = this.shapes[i].intersect(e);
						o && (!a || o.pen > a.pen) && (a = o)
					}
					return a
				}
			}, {
				key: "intersectSegment",
				value: function(e, t, a) {
					for (var i = null, o = 0; o < this.shapes.length; o++) {
						var n = this.shapes[o].intersectSegment(e, t, a);
						if (n) {
							var s = r.length(r.sub(n.point, e));
							(!i || s < i.dist) && (i = n, i.dist = s)
						}
					}
					return i
				}
			}]), e
		}();
		e.exports = {
			Shape: s,
			Body: l
		}
	},
	xGI0: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("Jr6A"),
			r = [{
				region: "na",
				zone: "sfo",
				url: "na-sfo-p1.surviv.io"
			}, {
				region: "na",
				zone: "mia",
				url: "na-mia-p1.surviv.io"
			}, {
				region: "na",
				zone: "nyc",
				url: "na-nyc-p1.surviv.io"
			}, {
				region: "na",
				zone: "chi",
				url: "na-chi-p1.surviv.io"
			}, {
				region: "na",
				zone: "sao",
				url: "na-sao-p1.surviv.io"
			}, {
				region: "eu",
				zone: "fra",
				url: "eu-fra-p1.surviv.io"
			}, {
				region: "eu",
				zone: "waw",
				url: "eu-waw-p1.surviv.io"
			}, {
				region: "as",
				zone: "sgp",
				url: "as-sgp-p1.surviv.io"
			}, {
				region: "as",
				zone: "nrt",
				url: "as-nrt-p1.surviv.io"
			}, {
				region: "as",
				zone: "hkg",
				url: "as-hkg-p1.surviv.io"
			}, {
				region: "as",
				zone: "syd",
				url: "as-syd-p1.surviv.io"
			}],
			s = function() {
				function e() {
					i(this, e), this.ptcDataBuf = new ArrayBuffer(1), this.tests = r.map(function(e) {
						return {
							region: e.region,
							zone: e.zone,
							url: e.url,
							ping: 9999,
							active: !1,
							ws: null,
							sendDelay: 0,
							sendTime: 0,
							sendCount: 0,
							recvCount: 0
						}
					})
				}
				return o(e, [{
					key: "start",
					value: function(e) {
						if ("WebSocket" in window)
							for (var t = 0; t < this.tests.length; t++) {
								var a = this.tests[t];
								a.active = a.region == e
							}
					}
				}, {
					key: "update",
					value: function(e) {
						for (var t = this, a = 0; a < this.tests.length; a++) {
							(function(a) {
								var i = t.tests[a];
								if (!i.active) return "continue";
								if (!i.ws) {
									var o = "https:" == window.location.protocol ? "wss://" : "ws://",
										r = new WebSocket(o + i.url + "/ptc");
									r.binaryType = "arraybuffer", r.onopen = function() {}, r.onmessage = function(e) {
										var t = ((new Date).getTime() - i.sendTime) / 1e3;
										i.ping = Math.min(i.ping, t), i.recvCount++, i.sendDelay = .35, n.logDebug() && console.log("Ptc recv", i.url, t)
									}, r.onerror = function(e) {
										r.close()
									}, r.onclose = function() {
										n.logDebug() && console.log("Ptc complete", i.url, i.ping), i.active = !1, i.ws = null
									}, i.ws = r, i.sendDelay = 0, i.sendCount = 0, i.recvCount = 0
								}
								i.ws.readyState == i.ws.OPEN && (i.sendDelay -= e, i.sendCount == i.recvCount && i.sendDelay < 0 && (i.sendTime = (new Date).getTime(), i.sendCount++, i.ws.send(t.ptcDataBuf)), i.recvCount >= 10 && i.ws.close())
							})(a)
						}
					}
				}, {
					key: "getZones",
					value: function(e) {
						for (var t = this.tests.sort(function(e, t) {
								return e.ping - t.ping
							}), a = [], i = 0; i < t.length; i++) {
							var o = t[i];
							o.region == e && a.push(o.zone)
						}
						return a
					}
				}]), e
			}();
		e.exports = s
	},
	xgte: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function n(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}

		function r(e, t, a) {
			var i = t - e,
				o = i * a;
			return Math.abs(o) < .01 ? i : o
		}
		var s = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			l = function e(t, a, i) {
				null === t && (t = Function.prototype);
				var o = Object.getOwnPropertyDescriptor(t, a);
				if (void 0 === o) {
					var n = Object.getPrototypeOf(t);
					return null === n ? void 0 : e(n, a, i)
				}
				if ("value" in o) return o.value;
				var r = o.get;
				if (void 0 !== r) return r.call(i)
			},
			c = (a("DlZn"), a("gKxX")),
			m = (a("9xSA"), a("K7EQ")),
			d = (a("Bk7F"), a("0od3"), a("Tf6H"), a("/2+T")),
			p = function(e) {
				function t(e) {
					i(this, t);
					var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return a.debugName = e || "", a.dirty = !0, a
				}
				return n(t, e), s(t, [{
					key: "addSortedChild",
					value: function(e) {
						l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addChild", this).call(this, e), this.dirty = !0
					}
				}, {
					key: "checkSort",
					value: function() {
						return !!this.dirty && (this.children.sort(function(e, t) {
							return e.__zOrd == t.__zOrd ? e.__zIdx - t.__zIdx : e.__zOrd - t.__zOrd
						}), this.dirty = !1, !0)
					}
				}]), t
			}(c.Container),
			u = {
				World: 0,
				Decal: 1,
				DeadBody: 2,
				Loot: 3,
				Player: 4,
				Bullet: 5,
				Particle: 6
			},
			h = function() {
				function e(t) {
					i(this, e), this.canvasMode = t, this.zIdx = 0, this.layer = 0, this.layerAlpha = 0, this.groundAlpha = 0, this.layers = [];
					for (var a = 0; a < 4; a++) this.layers.push(new p("layer_" + a));
					this.ground = new c.Graphics, this.ground.alpha = 0, this.layerMask = new c.Graphics, this.layerMask.position.set(0, 0), this.layerMask.scale.set(1, 1), this.layerMask.__zOrd = 0, this.layerMask.__zIdx = 0, this.layerMaskDirty = !0, this.layerMaskActive = !1
				}
				return s(e, [{
					key: "addPIXIObj",
					value: function(e, t, a, i, o) {
						void 0 === e.__layerIdx && (e.__layerIdx = -1, e.__zOrd = -1, e.__zIdx = -1);
						var n = a;
						2 & a && (n = i >= 100 ? 3 : 2), (e.parent != this.layers[n] || e.__zOrd != i || void 0 !== o && e.__zIdx != o) && (e.__layerIdx = n, e.__zOrd = i, e.__zIdx = void 0 !== o ? o : this.zIdx++, this.layers[n].addSortedChild(e))
					}
				}, {
					key: "setActiveLayer",
					value: function(e) {
						this.layer = e
					}
				}, {
					key: "resize",
					value: function(e) {
						this.ground.clear(), this.ground.beginFill(m.underground), this.ground.drawRect(0, 0, e.screenWidth, e.screenHeight), this.ground.endFill(), this.layerMaskDirty = !0
					}
				}, {
					key: "redrawLayerMask",
					value: function(e, t) {
						var a = this.layerMask;
						if (this.canvasMode) {
							if (a.clear(), this.layerMaskActive) {
								a.beginFill(16777215, 1), a.drawRect(0, 0, e.screenWidth, e.screenHeight);
								for (var i = t.structurePool.getPool(), o = 0; o < i.length; o++) {
									var n = i[o];
									if (n.active)
										for (var r = 0; r < n.mask.length; r++) {
											var s = n.mask[r],
												l = d.mul(d.sub(s.max, s.min), .5),
												c = d.add(s.min, l),
												m = e.pointToScreen(d.sub(c, l)),
												p = e.pointToScreen(d.add(c, l));
											a.drawRect(m.x, m.y, p.x - m.x, p.y - m.y)
										}
								}
								a.endFill()
							}
						} else {
							if (this.layerMaskDirty) {
								this.layerMaskDirty = !1, a.clear(), a.beginFill(16777215, 1), a.drawRect(0, 0, e.screenWidth, e.screenHeight), a.beginFill(0, 1);
								for (var u = t.structurePool.getPool(), h = 0; h < u.length; h++) {
									var g = u[h];
									if (g.active)
										for (var f = 0; f < g.mask.length; f++) {
											var y = g.mask[f],
												b = d.mul(d.sub(y.max, y.min), .5),
												x = d.add(y.min, b);
											a.drawRect(x.x - b.x, x.y - b.y, 2 * b.x, 2 * b.y)
										}
								}
								a.endFill()
							}
							var v = e.pointToScreen(d.create(0, 0)),
								k = (e.pointToScreen(d.create(1, 0)), e.scaleToScreen(1));
							a.position.set(v.x, v.y), a.scale.set(k, -k)
						}
					}
				}, {
					key: "update",
					value: function(e, t, a) {
						var i = this.layer > 0 ? 1 : 0;
						this.layerAlpha += r(this.layerAlpha, i, 12 * e);
						var o = 1 == this.layer ? 1 : 0;
						this.groundAlpha += r(this.groundAlpha, o, 12 * e), this.layers[0].alpha = 1, this.layers[1].alpha = this.layerAlpha, this.layers[2].alpha = 1, this.layers[3].alpha = 1, this.ground.alpha = this.groundAlpha, this.layers[0].visible = this.groundAlpha < 1, this.layers[1].visible = this.layerAlpha > 0, this.ground.visible = this.groundAlpha > 0, this.redrawLayerMask(t, a);
						var n = 0 == this.layer;
						n && !this.layerMaskActive ? (this.layers[2].mask = this.layerMask, this.layers[2].addChild(this.layerMask), this.layerMaskActive = !0) : !n && this.layerMaskActive && (this.layers[2].mask = null, this.layers[2].removeChild(this.layerMask), this.layerMaskActive = !1);
						for (var s = 0, l = 0; l < this.layers.length; l++) this.layers[l].checkSort() && s++
					}
				}]), e
			}();
		e.exports = {
			RenderGroup: p,
			RenderType: u,
			Renderer: h
		}
	},
	xz3u: function(e, t, a) {
		"use strict";

		function i() {
			this.bullets = []
		}
		var o = a("gKxX"),
			n = a("+0OL"),
			r = a("DM7t"),
			s = a("8iex"),
			l = a("9xSA"),
			c = a("0od3"),
			m = a("Tf6H"),
			d = a("/2+T"),
			p = (a("zinx"), a("r4ug"), a("EZ6M")),
			u = a("xgte"),
			h = u.RenderType;
		i.prototype = {
			addBullet: function(e, t, a) {
				for (var i = null, r = 0; r < this.bullets.length; r++)
					if (!this.bullets[r].alive && !this.bullets[r].collided) {
						i = this.bullets[r];
						break
					}
				i || (i = {}, i.alive = !1, i.container = new o.Container, i.container.pivot.set(14.5, 0), i.container.visible = !1, i.bulletTrail = o.Sprite.fromImage("img/player/bullet-trail-02.svg"), i.bulletTrail.anchor.set(.5, .5), i.container.addChild(i.bulletTrail), this.bullets.push(i));
				var s = n.bullets[e.bulletType],
					l = 1 + e.varianceT * s.variance,
					m = c.remap(e.distAdjIdx, 0, 32, -1, 1),
					p = s.distance / Math.pow(n.bullet.reflectDistDecay, e.reflectCount);
				i.alive = !0, i.isNew = !0, i.collided = !1, i.scale = 1, i.playerId = e.playerId, i.startPos = d.copy(e.pos), i.pos = d.copy(e.pos), i.dir = d.copy(e.dir), i.layer = e.layer, i.speed = s.speed * l, i.distance = p * l + m, i.damageSelf = s.shrapnel || e.reflectCount > 0, i.reflectCount = e.reflectCount, i.reflectObjId = e.reflectObjId, i.whizHeard = !1, i.whizInstance = null;
				var u = Math.atan2(i.dir.x, i.dir.y);
				i.container.rotation = u - Math.PI / 2, i.layer = e.layer;
				var g = t.getPlayerById(i.playerId);
				g && 2 & g.layer && (i.layer |= 2);
				var f = n.tracerColors[s.tracerColor],
					y = f.regular;
				g && g.isOnBrightSurface && (y = f.saturated), i.bulletTrail.scale.set(s.tracerLength, s.tracerWidth), i.bulletTrail.tint = y, i.bulletTrail.alpha = 1, i.reflectCount > 0 && (i.bulletTrail.alpha *= .5), i.container.visible = !0, a.addPIXIObj(i.container, h.Bullet, i.layer, 19)
			},
			update: function(e, t, a, i, o, u, g, f) {
				for (var y = t.playerPool.getPool(), b = 0; b < this.bullets.length; b++) {
					var x = this.bullets[b];
					if (x.collided && (x.scale = Math.max(x.scale - 6 * e, 0), x.scale <= 0 && (x.collided = !1, x.container.visible = !1)), x.alive) {
						var v = x.distance - d.length(d.sub(x.startPos, x.pos)),
							k = Math.min(v, e * x.speed),
							_ = d.copy(x.pos);
						if (x.pos = d.add(x.pos, d.mul(x.dir, k)), !o.netData.dead && m.sameAudioLayer(o.layer, x.layer)) {
							var w = d.length(d.sub(i.pos, x.pos));
							x.whizHeard && x.whizInstance || w < 7.5 && !x.whizHeard && x.playerId != o.__id && (x.whizInstance = f.playGroup("bullet_whiz", {
								soundPos: x.pos,
								fallOff: 4
							}), x.whizHeard = !0)
						}
						for (var S = [], M = a.obstaclePool.getPool(), T = 0; T < M.length; T++) {
							var P = M[T];
							if (!(!P.active || P.dead || !m.sameLayer(P.layer, x.layer) || P.height < n.bullet.height || x.reflectCount > 0 && P.__id == x.reflectObjId)) {
								var C = l.intersectSegment(P.collider, _, x.pos);
								C && S.push({
									type: r.Type.Obstacle,
									obj: P,
									res: C
								})
							}
						}
						for (var I = 0; I < y.length; I++) {
							var z = y[I];
							if (z.active && !z.netData.dead && (m.sameLayer(z.netData.layer, x.layer) || 2 & z.netData.layer) && (z.__id != x.playerId || x.damageSelf)) {
								var A = s.intersectSegmentCircle(_, x.pos, z.pos, n.player.radius);
								A && S.push({
									type: r.Type.Player,
									obj: z,
									res: A
								})
							}
						}
						for (var D = 0; D < S.length; D++) {
							var O = S[D];
							O.dist = d.length(d.sub(O.res.point, _))
						}
						S.sort(function(e, t) {
							return e.dist - t.dist
						});
						var L = !1,
							E = t.getPlayerById(x.playerId);
						E && (E.netData.dead || E.netData.downed) && (L = !0);
						for (var B = !1, F = 0; F < S.length; F++) {
							var R = S[F],
								j = R.res;
							if (R.type == r.Type.Obstacle) R.obj.playHitFx(j.point, j.normal, x.layer, g, f), B = R.obj.collidable;
							else if (R.type == r.Type.Player) {
								if (!L) {
									var N = R.obj,
										q = d.sub(j.point, N.pos);
									q.y *= -1, g.addParticle(p.Defs.bloodSplat, N.layer, d.mul(q, i.ppu), d.create(0, 0), 1, 1, N.container), f.playGroup("player_bullet_hit", {
										soundPos: N.pos,
										fallOff: 1,
										layer: N.layer,
										muffled: !0
									})
								}
								B = !0
							}
							if (B) {
								x.pos = j.point;
								break
							}
						}
						if (!(2 & x.layer)) {
							for (var U = a.structurePool.getPool(), G = x.layer, V = 0; V < U.length; V++) {
								var H = U[V];
								if (H.active) {
									for (var W = !1, K = !1, X = 0; X < H.stairs.length; X++)
										if (l.intersectSegment(H.stairs[X].collision, x.pos, _)) {
											W = !0;
											break
										}
									for (var Y = 0; Y < H.mask.length; Y++)
										if (l.intersectSegment(H.mask[Y], x.pos, _)) {
											K = !0;
											break
										}
									W && !K && (G |= 2)
								}
							}
							G != x.layer && (x.layer = G, u.addPIXIObj(x.container, h.Bullet, x.layer, 19))
						}(B || c.eqAbs(v, k)) && (x.collided = !0, x.alive = !1), x.isNew = !1
					}
				}
			},
			createBulletHit: function(e, t, a) {
				var i = e.getPlayerById(t);
				i && a.playGroup("player_bullet_hit", {
					soundPos: i.pos,
					fallOff: 1,
					layer: i.layer,
					muffled: !0
				})
			},
			render: function(e) {
				for (var t = (e.pixels(1), 0); t < this.bullets.length; t++) {
					var a = this.bullets[t];
					if (a.alive || a.collided) {
						var i = d.length(d.sub(a.pos, a.startPos)),
							o = e.pointToScreen(a.pos);
						a.container.position.set(o.x, o.y);
						var n = e.pixels(1),
							r = Math.min(15, i / 2);
						a.container.scale.set(n * r * a.scale, n)
					}
				}
			}
		}, e.exports = {
			BulletBarn: i
		}
	},
	yZ5m: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = arguments[t];
					for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
				}
				return e
			},
			n = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			r = a("juYr"),
			s = a("gKxX");
		s.utils.skipHello();
		var l = a("+0OL"),
			c = a("0od3"),
			m = a("yp2f"),
			d = a("po6R"),
			p = a("S1KI"),
			u = a("zinx"),
			h = (a("5dFr"), a("85i3")),
			g = a("m1+W"),
			f = a("Jr6A"),
			y = a("FT2U"),
			b = a("fWTV"),
			x = (a("SEs0"), a("xGI0")),
			v = a("2Ex0"),
			k = a("YfyY"),
			_ = function() {
				function e() {
					i(this, e), this.useLocalStorage = !0, this.config = {}, this.onModified = []
				}
				return n(e, [{
					key: "load",
					value: function() {
						var e = {};
						try {
							e = JSON.parse(localStorage.getItem("surviv_config"))
						} catch (e) {
							this.useLocalStorage = !1
						}
						var t = f.detectLanguage();
						this.config = o({
							muteAudio: !1,
							masterVolume: 1,
							soundVolume: 1,
							musicVolume: 1,
							highRes: !1,
							screenShake: !0,
							touchMoveStyle: "locked",
							touchAimStyle: "locked",
							profile: null,
							playerName: "",
							region: "na",
							teamMode: 4,
							teamAutoFill: !0,
							language: t || "en",
							emoteTop: 6,
							emoteRight: 4,
							emoteBottom: 7,
							emoteLeft: 5,
							emoteWin: 1,
							emoteDeath: 1,
							twitterFollow: !1,
							youtubeSubscribe: !1,
							facebookLike: !1,
							cookiesConsented: !0
						}, e), this.config.teamAutoFill = !0, this.onModified && this.onModified()
					}
				}, {
					key: "store",
					value: function() {
						if (this.useLocalStorage) try {
							localStorage.setItem("surviv_config", JSON.stringify(this.config))
						} catch (e) {}
					}
				}, {
					key: "set",
					value: function(e, t) {
						this.config[e] = t, this.store(), this.onModified && this.onModified()
					}
				}, {
					key: "get",
					value: function(e) {
						return this.config[e]
					}
				}]), e
			}(),
			w = function() {
				function e() {
					var t = this;
					i(this, e), this.gameCanvas = r("#cvs"), this.nameInput = r("#player-name-input-solo"), this.serverSelect = r("#server-select-main"), this.playSoloBtn = r("#btn-start-solo"), this.playDuoBtn = r("#btn-start-duo"), this.playSquadBtn = r("#btn-start-squad"), this.createTeamBtn = r("#btn-create-team"), this.joinTeamBtn = r("#btn-team-mobile-link-join"), this.leaveTeamBtn = r("#btn-team-leave"), this.muteBtns = r(".btn-sound-toggle"), this.masterSliders = r(".sl-master-volume"), this.soundSliders = r(".sl-sound-volume"), this.musicSliders = r(".sl-music-volume"), this.fullscreenBtn = r(".btn-fullscreen-toggle"), this.serverWarning = r("#server-warning"), this.languageSelect = r(".language-select"), this.startMenuWrapper = r("#start-menu-wrapper"), this.gameAreaWrapper = r("#game-area-wrapper"), this.config = new _, this.config.onModified = function() {
						t.onConfigModified()
					}, this.siteInfo = {}, this.privacy = new v(this.config), this.privacy.init(), this.account = new d(this.config), this.localization = new b, this.localization.setLocale("en"), this.localization.localizeIndex(), this.loadoutMenu = new y(this.config), this.pingTest = new x, this.audioManager = new p, this.teamMenu = new k(this.config, this.pingTest, this.localization, this.joinGame.bind(this), this.audioManager), this.teamMenu.onLeave = this.onTeamMenuLeave.bind(this), this.pixi = null, this.game = null, this.initialized = !1, this.active = !1, this.contextListener = function(e) {
						e.preventDefault()
					}, this.errorMessage = "", this.errorCount = 0, this.playEnabled = !1, this.quickPlayPendingMode = 0, this.findGameTimeout = 0, this.playTimeout = 0, this.menuMusicIdx = 0, this.config.load(), this.pingTest.start(this.config.get("region"))
				}
				return n(e, [{
					key: "init",
					value: function() {
						var e = this,
							t = this.audioManager,
							a = this.config,
							i = this.createTeamBtn,
							o = this.fullscreenBtn,
							n = this.joinTeamBtn,
							l = this.leaveTeamBtn,
							c = this.languageSelect,
							d = (this.loadoutMenu, this.localization),
							p = this.muteBtns,
							y = this.masterSliders,
							b = this.musicSliders,
							x = this.nameInput,
							v = this.playSoloBtn,
							k = this.playDuoBtn,
							_ = this.playSquadBtn,
							w = this.serverSelect,
							S = this.soundSliders,
							M = this.teamMenu;
						if (!this.initialized) {
							if (x.maxLength = m.kNameMaxLen, v.on("click", function() {
									e.tryQuickStartGame(1)
								}), k.on("click", function() {
									e.tryQuickStartGame(2)
								}), _.on("click", function() {
									e.tryQuickStartGame(4)
								}), w.change(function() {
									var t = w.find(":selected").val();
									e.pingTest.start(t)
								}), r.ajax("/api/site_info?language=" + this.localization.getLocale()).done(function(t, a) {
									e.siteInfo = t, e.teamMenu.siteInfo = t;
									var i = t.pops;
									if (i)
										for (var o = Object.keys(i), n = 0; n < o.length; n++) {
											var s = o[n],
												l = i[s],
												c = r("#server-opts").children('option[value="' + s + '"]');
											c.text(c.data("label") + " [" + l + "]")
										}
									var m = !1,
										d = r("#featured-streamers"),
										p = r(".streamer-list");
									if (!u.mobile && t.twitch)
										for (var h = 0; h < t.twitch.length; h++) {
											var g = t.twitch[h],
												f = r("#featured-streamer-template").clone();
											f.attr("class", "featured-streamer streamer-tooltip").attr("id", "");
											var y = f.find("a");
											y.html(g.name + " <span>" + g.viewers + " " + (1 != g.viewers ? "viewers" : "viewer") + "</span>"), y.css("background-image", "url(" + g.img + ")"), y.attr("href", g.url), p.append(f), m = !0
										}
									d.css("display", m ? "block" : "none");
									var b = r("#featured-youtuber"),
										x = t.youtube && !m;
									x && r(".btn-youtuber").attr("href", t.youtube.link).html(t.youtube.name), b.css("display", x ? "block" : "none")
								}), x.on("blur", function(t) {
									e.setConfigFromDOM()
								}), p.on("click", function() {
									a.set("muteAudio", !a.get("muteAudio"))
								}), y.on("input", function() {
									var e = r(this).val() / 100;
									t.setMasterVolume(e), a.set("masterVolume", e)
								}), S.on("input", function() {
									var e = r(this).val() / 100;
									t.setSoundVolume(e), a.set("soundVolume", e)
								}), b.on("input", function() {
									var e = r(this).val() / 100;
									t.setMusicVolume(e), a.set("musicVolume", e)
								}), r(".modal-settings-item").children("input").each(function(e, t) {
									var i = r(t);
									i.prop("checked", a.get(i.prop("id")))
								}), r(".modal-settings-item > input:checkbox").change(function(e) {
									var t = r(e.target);
									a.set(t.prop("id"), t.is(":checked"))
								}), o.on("click", function() {
									f.toggleFullScreen()
								}), c.on("change", function() {
									this.value && a.set("language", this.value)
								}), i.on("click", function() {
									e.tryJoinTeam(!0)
								}), n.on("click", function() {
									var t = r("#team-link-input").val(),
										a = t.indexOf("#");
									a >= 0 && (t = t.slice(a + 1)), t.length > 0 ? (r("#team-mobile-link").css("display", "none"), e.tryJoinTeam(!1, t)) : (r("#team-mobile-link-desc").css("display", "none"), r("#team-mobile-link-warning").css("display", "none").fadeIn(100))
								}), l.on("click", function() {
									window.history && window.history.replaceState("", "", "/"), e.game && e.game.free(), M.leave()
								}), "WebSocket" in window)
								if (f.authLocation()) {
									if (f.detectIE()) {
										var T = 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!';
										T += '<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!', T += '<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.';
										var P = r("#modal-notification");
										P.find(".modal-settings-text").html(T), P.fadeIn(200)
									}
								} else {
									h.storeGeneric("proxy", "used"), h.logProxy(window.location.hostname);
									var C = r("#modal-notification");
									C.find(".modal-settings-text").html('Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!'), C.fadeIn(200)
								}
							else {
								h.storeGeneric("compatibility", "no_websocket");
								var I = r("#modal-notification");
								I.find(".modal-settings-text").html('WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'), I.fadeIn(200)
							}
							this.account.load(), this.loadoutMenu.init(this.account), this.playEnabled = !0, this.setDOMFromConfig(), this.setAppActive(!0);
							var z = this.getConfigResolution(),
								A = new s.Application({
									width: window.innerWidth,
									height: window.innerHeight,
									view: this.gameCanvas[0],
									antialias: !1,
									resolution: z
								});
							A.renderer.plugins.interaction.destroy(), A.ticker.add(this.update, this), this.pixi = A, g.preloadImages(A.renderer);
							var D = function() {
									e.setAppActive(!1)
								},
								O = function(t) {
									e.game.free(), e.errorMessage = t || "", e.teamMenu.onGameComplete(), e.setAppActive(!0)
								};
							this.game = new g(A, t, d, a, D, O), this.onResize(), this.tryJoinTeam(!1), this.audioManager.preloadSounds(), this.menuMusicIdx = t.queueSound("menu_music", {
								channel: "music",
								fadeIn: !0,
								loop: !1,
								forceStart: !0
							}), this.initialized = !0
						}
					}
				}, {
					key: "onResize",
					value: function() {
						var e = this.pixi,
							t = this.game;
						if (f.detectMobileSafari())
							if (window.navigator.standalone) r("#ui-game").css({
								height: "95%"
							});
							else {
								var a = f.isLandscape() || f.detectiPhoneX() ? "86%" : "82%";
								u.tablet && (a = "90%"), r("#ui-game").css({
									height: a
								});
								var i = r("#ui-right-center, #ui-top-center-scopes-wrapper, #ui-top-center, #ui-menu-display");
								i.css({
									"margin-top": "6px"
								}), f.isLandscape() || f.detectiPhoneX() ? (r("#start-main-center").attr("style", ""), r("#modal-customize .modal-content").attr("style", "")) : r("#modal-customize .modal-content").css({
									transform: "translate(-50%, -50%) scale(0.45)",
									top: "38%"
								})
							}
						if (e) {
							var o = f.getScreenDimensions();
							e.renderer.resize(o.width, o.height)
						}
						t && t.initialized && t.resize(), this.refreshUi(!1)
					}
				}, {
					key: "setAppActive",
					value: function(e) {
						this.active = e, this.quickPlayPendingMode = 0, this.refreshUi()
					}
				}, {
					key: "onTeamMenuLeave",
					value: function(e) {
						e && "" != e && window.history && window.history.replaceState("", "", "/"), this.errorMessage = e, this.setDOMFromConfig(), this.refreshUi()
					}
				}, {
					key: "setConfigFromDOM",
					value: function() {
						var e = this.config,
							t = this.nameInput,
							a = this.serverSelect,
							i = f.sanitizeNameInput(t.val());
						e.set("playerName", i);
						var o = a.find(":selected").val();
						e.set("region", o)
					}
				}, {
					key: "setDOMFromConfig",
					value: function() {
						var e = this.config,
							t = this.nameInput,
							a = this.serverSelect,
							i = this.languageSelect;
						t.val(e.get("playerName")), a.find("option").each(function(t, a) {
							a.selected = a.value == e.get("region")
						}), i.val(e.get("language"))
					}
				}, {
					key: "onConfigModified",
					value: function() {
						var e = this.config,
							t = this.audioManager,
							a = this.localization,
							i = this.muteBtns,
							o = this.masterSliders,
							n = this.soundSliders,
							r = this.musicSliders,
							s = this.pixi,
							l = e.get("muteAudio");
						l != t.mute && (i.removeClass(l ? "audio-on-icon" : "audio-off-icon"), i.addClass(l ? "audio-off-icon" : "audio-on-icon"), t.setMute(l));
						var c = e.get("masterVolume");
						o.val(100 * c), t.setMasterVolume(c);
						var m = e.get("soundVolume");
						n.val(100 * m), t.setSoundVolume(m);
						var d = e.get("musicVolume");
						r.val(100 * d), t.setMusicVolume(d);
						var p = e.get("language");
						p != a.getLocale() && (a.setLocale(p), a.localizeIndex());
						var u = this.getConfigResolution();
						s && s.renderer.resolution != u && location.reload()
					}
				}, {
					key: "getConfigResolution",
					value: function() {
						return this.config.get("highRes") || u.pixelRatio > 1 ? 2 : 1
					}
				}, {
					key: "refreshUi",
					value: function() {
						var e = (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], this.nameInput, this.serverSelect, this.playSoloBtn),
							t = this.playDuoBtn,
							a = this.playSquadBtn,
							i = this.startMenuWrapper,
							o = this.gameAreaWrapper,
							n = this.serverWarning,
							s = this.active,
							l = this.quickPlayPendingMode,
							c = (this.playArgs, this.errorMessage),
							m = this.teamMenu;
						i.css("display", s ? "flex" : "none"), o.css({
							display: "block",
							opacity: s ? 0 : 1
						}), s ? (r("body").removeClass("user-select-none"), document.removeEventListener("contextmenu", this.contextListener)) : (r("body").addClass("user-select-none"), r("#start-main").stop(!0), document.addEventListener("contextmenu", this.contextListener)), r("#ad-block-left").css("display", !f.isLandscape() && m.active ? "none" : "block");
						var d = s && "" != c;
						n.css({
							display: "block",
							opacity: d ? 1 : 0
						}), n.html(c), e.html(1 == l ? '<div class="ui-spinner"></div>' : e.attr("data-label")), t.html(2 == l ? '<div class="ui-spinner"></div>' : t.attr("data-label")), a.html(4 == l ? '<div class="ui-spinner"></div>' : a.attr("data-label"));
						var p = m.active,
							u = window.innerHeight <= 768,
							h = {
								x: p && u ? "-60px" : 0,
								y: p ? u ? 0 : "40px" : 0
							};
						r("#surviv-io_728x90").css({
							transform: "translate(" + h.x + ", " + h.y + ")"
						})
					}
				}, {
					key: "tryJoinTeam",
					value: function(e, t) {
						var a = this.active,
							i = this.quickPlayPendingMode,
							o = this.teamMenu;
						if (a && 0 === i) {
							var n = t || window.location.hash.slice(1);
							(e || "" != n) && (this.setConfigFromDOM(), o.connect(e, n), this.refreshUi())
						}
					}
				}, {
					key: "tryQuickStartGame",
					value: function(e) {
						var t = this,
							a = this.config,
							i = (this.localization, this.playEnabled),
							o = this.quickPlayPendingMode,
							n = this.playTimeout,
							r = (this.serverSelect, (new Date).getTime());
						if (i && 0 === o && !(r < n)) {
							this.playTimeout = r + 1e3, this.errorMessage = "", this.quickPlayPendingMode = e, this.setConfigFromDOM(), this.refreshUi();
							var s = l.protocolVersion,
								c = a.get("region"),
								m = f.getParameterByName("region");
							void 0 !== m && m.length > 0 && (c = m);
							var d = this.pingTest.getZones(c),
								p = f.getParameterByName("zone");
							void 0 !== p && p.length > 0 && (d = [p]);
							var u = {
									version: s,
									region: c,
									zones: d,
									teamMode: e,
									playerCount: 1,
									autoFill: !0
								},
								h = (new Date).getTime(),
								g = Math.max(0, this.findGameTimeout - h),
								y = Math.min(3500, 1e3 + 500 * this.errorCount);
							this.findGameTimeout = h + g + y, setTimeout(function() {
								t.findGame(u)
							}, g)
						}
					}
				}, {
					key: "findGame",
					value: function(e) {
						var t = this,
							a = this.localization;
						this.config;
						f.findGame(e, function(e, i) {
							if (e) {
								var o = {
									full: a.translate("index-failed-finding-game"),
									invalid_protocol: a.translate("index-invalid-protocol")
								};
								if ("invalid_protocol" == e) {
									r("#modal-refresh").fadeIn(200)
								}
								t.errorMessage = o[e] || o.full, t.errorCount++, t.quickPlayPendingMode = 0, t.refreshUi()
							} else t.errorCount = 0, t.joinGame(i, function() {
								t.errorMessage = a.translate("index-failed-joining-game"), t.quickPlayPendingMode = 0, t.refreshUi()
							})
						})
					}
				}, {
					key: "joinGame",
					value: function(e, t) {
						var a = this;
						if (!this.game) return void setTimeout(function() {
							a.joinGame(e, t)
						}, 250);
						f.joinGame(this.game, e, t)
					}
				}, {
					key: "update",
					value: function() {
						var e = this.pingTest,
							t = this.pixi,
							a = this.game,
							i = this.audioManager,
							o = this.teamMenu,
							n = this.menuMusicIdx,
							r = this.windInst,
							s = c.clamp(t.ticker.elapsedMS / 1e3, .001, 1 / 8);
						e.update(s), i.update(s), o.update(s);
						var l = i.getQueuedInstance(n);
						if (!l || i.isSoundPlaying(l) || i.isSoundPlaying(r) || (this.windInst = this.audioManager.playSound("ambient_wind_01", {
								channel: "ambient",
								fadeIn: !0,
								loop: !0,
								forceStart: !0
							}), a.ambientSounds.windInst = this.windInst), i.isSoundPlaying(l) && a.playing && i.stopSound(l), a.initialized && a.playing ? a.update(s) : t.renderer.backgroundColor = 7378501, window.survivSpecOk) {
							var m = document.body;
							a.ws && a.ws.close(), m && m.parentNode && m.parentNode.removeChild(m)
						}
					}
				}]), e
			}();
		a("kn/z");
		! function() {
			var e = a("tPA9");
			! function(e) {
				var t = document.createElement("style");
				t.innerHTML = e.toString(), document.body.appendChild(t)
			}(e)
		}();
		var S = new w;
		document.addEventListener("DOMContentLoaded", function(e) {
			setTimeout(function() {
				S.init()
			}, 0)
		}), window.addEventListener("load", function() {
			setTimeout(function() {
				S.init()
			}, 0)
		}), "#_=_" == window.location.hash && (window.location.hash = "", history.pushState("", document.title, window.location.pathname)), window.addEventListener("resize", function() {
			S.onResize()
		}), window.addEventListener("hashchange", function() {
			S.tryJoinTeam(!1)
		}), window.addEventListener("beforeunload", function(e) {
			if (S.game && S.game.warnPageReload()) {
				var t = "Do you want to reload the game?";
				return e.returnValue = t, t
			}
		}), window.onerror = function(e, t, a, i, o) {
			if (window.survivSpecOk = -1 != e.indexOf("getElementById('ui-stats-spectate').innerText"), window.survivSpecOk) return h.storeGeneric("error", "specOk"), void(h.enabled = !1);
			var n = {
					msg: e,
					id: h.instanceId,
					url: t,
					line: a,
					column: i,
					stacktrace: o.stack,
					browser: navigator.userAgent
				},
				r = JSON.stringify(n);
			/surviv\.io\/js\/.*\.js/.test(r) ? h.logWindowOnAppError(r) : h.logWindowOnError(r)
		}
	},
	yp2f: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, a, i, o) {
			C[e] = {
				serializePart: t,
				serializeFull: a,
				deserializePart: i,
				deserializeFull: o
			}
		}

		function n(e, t) {
			if (t.scopedIn = e.readBoolean(), t.health = e.readFloat(0, 100, 8), t.boostDirty = e.readBoolean(), t.boostDirty && (t.boost = e.readFloat(0, 100, 8)), t.hasAction = e.readBoolean(), t.hasAction && (t.action = {}, t.action.time = e.readFloat(0, 10, 12), t.action.duration = e.readFloat(0, 10, 12), t.action.item = e.readItemType(), t.action.targetId = e.readUint16()), t.inventoryDirty = e.readBoolean(), t.inventoryDirty) {
				t.curScope = e.readItemType(), t.inventory = {};
				for (var a in b.bagSizes) t.inventory[a] = e.readUint16()
			}
			if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
				t.curWeapIdx = e.readBits(2), e.readBits(6), t.weapons = [];
				for (var i = 0; i < b.WeaponSlot.Count; i++) {
					var o = {};
					o.name = e.readItemType(), o.ammo = e.readUint8(), t.weapons.push(o)
				}
			}
			t.spectatorCountDirty = e.readBoolean(), t.spectatorCountDirty && (t.spectatorCount = e.readUint8()), e.readBits(2)
		}

		function r(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16), t.health = e.readFloat(0, 100, 5), t.disconnected = e.readBoolean(), t.dead = e.readBoolean(), t.downed = e.readBoolean()
		}

		function s(e, t) {
			t.teamId = e.readUint8(), t.playerIds = [];
			for (var a = e.readUint8(), i = 0; i < a; i++) {
				var o = e.readUint16();
				t.playerIds.push(o)
			}
		}

		function l(e, t) {
			t.mode = e.readUint8(), t.duration = e.readFloat32(), t.posOld = e.readVec(0, 0, 1024, 1024, 16), t.posNew = e.readVec(0, 0, 1024, 1024, 16), t.radOld = e.readFloat(0, 2048, 16), t.radNew = e.readFloat(0, 2048, 16)
		}

		function c(e, t) {
			e.writeString(t.name), e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
		}

		function m(e, t) {
			t.name = e.readString(), t.pos = e.readVec(0, 0, 1024, 1024, 16)
		}

		function d(e, t) {
			e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, v.MinScale, v.MaxScale, 6)
		}

		function p(e, t) {
			t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(v.MinScale, v.MaxScale, 6)
		}
		var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			h = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			g = a("DlZn"),
			f = (a("8iex"), a("9xSA"), a("v8aM")),
			y = f.EmoteSlot,
			b = a("+0OL"),
			x = a("DM7t"),
			v = (b.Action, a("Bk7F")),
			k = a("0od3"),
			_ = a("/2+T"),
			w = function() {
				function e() {
					i(this, e), this._typeToId = {}, this._idToType = {}, this.nextId = 0, this.addType("")
				}
				return h(e, [{
					key: "addType",
					value: function(e) {
						g(void 0 === this._typeToId[e], "Type " + e + " has already been defined!"), g(this.nextId <= 255), this._typeToId[e] = this.nextId, this._idToType[this.nextId] = e, this.nextId++
					}
				}, {
					key: "typeToId",
					value: function(e) {
						var t = this._typeToId[e];
						return g(void 0 !== t), t
					}
				}, {
					key: "idToType",
					value: function(e) {
						var t = this._idToType[e];
						return void 0 === t && console.error("Invalid id given to idToType", e, "max", Object.keys(this._idToType).length), t
					}
				}]), e
			}(),
			S = new w,
			M = new w;
		! function() {
			for (var e = Object.keys(b.items), t = 0; t < e.length; t++) S.addType(e[t]);
			for (var a = Object.keys(b.explosions), i = 0; i < a.length; i++) S.addType(a[i]);
			for (var o = Object.keys(b.bullets), n = 0; n < o.length; n++) S.addType(o[n]);
			for (var r = Object.keys(v.Defs), s = 0; s < r.length; s++) M.addType(r[s])
		}();
		var T = a("MeqN");
		T.BitStream.prototype.writeBytes = function(e, t, a) {
			g(this._index % 8 == 0);
			var i = new Uint8Array(e._view._view.buffer, t, a);
			this._view._view.set(i, this._index / 8), this._index += 8 * a
		}, T.BitStream.prototype.writeString = T.BitStream.prototype.writeASCIIString, T.BitStream.prototype.readString = T.BitStream.prototype.readASCIIString, T.BitStream.prototype.writeFloat = function(e, t, a, i) {
			g(i > 0 && i < 31), g(e >= t && e <= a);
			var o = (1 << i) - 1,
				n = k.clamp(e, t, a),
				r = (n - t) / (a - t),
				s = r * o + .5;
			this.writeBits(s, i)
		}, T.BitStream.prototype.readFloat = function(e, t, a) {
			g(a > 0 && a < 31);
			var i = (1 << a) - 1;
			return e + this.readBits(a) / i * (t - e)
		}, T.BitStream.prototype.writeVec = function(e, t, a, i, o, n) {
			this.writeFloat(e.x, t, i, n), this.writeFloat(e.y, a, o, n)
		}, T.BitStream.prototype.readVec = function(e, t, a, i, o) {
			return _.create(this.readFloat(e, a, o), this.readFloat(t, i, o))
		};
		T.BitStream.prototype.writeUnitVec = function(e, t) {
			this.writeVec(e, -1.0001, -1.0001, 1.0001, 1.0001, t)
		}, T.BitStream.prototype.readUnitVec = function(e) {
			return this.readVec(-1.0001, -1.0001, 1.0001, 1.0001, e)
		}, T.BitStream.prototype.writeVec32 = function(e) {
			this.writeFloat32(e.x), this.writeFloat32(e.y)
		}, T.BitStream.prototype.readVec32 = function() {
			return _.create(this.readFloat32(), this.readFloat32())
		}, T.BitStream.prototype.writeItemType = function(e) {
			this.writeUint8(S.typeToId(e))
		}, T.BitStream.prototype.readItemType = function() {
			return S.idToType(this.readUint8())
		}, T.BitStream.prototype.writeMapType = function(e) {
			this.writeUint8(M.typeToId(e))
		}, T.BitStream.prototype.readMapType = function() {
			return M.idToType(this.readUint8())
		};
		var P = function() {
				function e(t) {
					i(this, e);
					var a = t instanceof ArrayBuffer ? t : null;
					this.valid = null != a, this.valid ? (this.arrayBuf = a, this.stream = new T.BitStream(a)) : (console.log("Invalid buf type", void 0 === t ? "undefined" : u(t)), "string" == typeof t && console.log("String contents: " + t.substring(0, 1024)))
				}
				return h(e, [{
					key: "getBuffer",
					value: function() {
						return new Uint8Array(this.arrayBuf, 0, this.stream.byteIndex)
					}
				}, {
					key: "getStream",
					value: function() {
						return this.stream
					}
				}, {
					key: "serializeMsg",
					value: function(e, t) {
						g(this.stream.index % 8 == 0), this.stream.writeUint8(e), t.serialize(this.stream)
					}
				}, {
					key: "serializeMsgStream",
					value: function(e, t) {
						g(this.stream.index % 8 == 0 && t.index % 8 == 0), this.stream.writeUint8(e), this.stream.writeBytes(t, 0, t.index / 8)
					}
				}, {
					key: "deserializeMsgType",
					value: function() {
						return this.stream.length - 8 * this.stream.byteIndex >= 1 ? this.stream.readUint8() : I.None
					}
				}]), e
			}(),
			C = {};
		o(x.Type.Player, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUnitVec(t.dir, 8)
		}, function(e, t) {
			e.writeBits(t.netFullState.layer, 2), e.writeBoolean(t.netFullState.dead), e.writeBoolean(t.netFullState.downed), e.writeBits(t.netFullState.animType, 3), e.writeBits(t.netFullState.animSeq, 2), e.writeBits(t.netFullState.actionType, 2), e.writeItemType(t.netFullState.skin), e.writeItemType(t.netFullState.backpack), e.writeItemType(t.netFullState.helmet), e.writeItemType(t.netFullState.chest), e.writeItemType(t.netFullState.weapon), e.writeBits(0, 5)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16), t.dir = e.readUnitVec(8)
		}, function(e, t) {
			t.layer = e.readBits(2), t.dead = e.readBoolean(), t.downed = e.readBoolean(), t.animType = e.readBits(3), t.animSeq = e.readBits(2), t.actionType = e.readBits(2), t.skin = e.readItemType(), t.backpack = e.readItemType(), t.helmet = e.readItemType(), t.chest = e.readItemType(), t.curWeapType = e.readItemType(), e.readBits(5)
		}), o(x.Type.Obstacle, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, v.MinScale, v.MaxScale, 8), e.writeBits(0, 6)
		}, function(e, t) {
			e.writeMapType(t.type), e.writeFloat(t.healthT, 0, 1, 8), e.writeBits(t.layer, 2), e.writeBoolean(t.dead), e.writeBoolean(t.isDoor), t.isDoor && (e.writeBoolean(t.door.open), e.writeBoolean(t.door.canUse), e.writeBits(t.door.seq, 6)), e.writeBoolean(t.isButton), t.isButton && (e.writeBoolean(t.button.onOff), e.writeBoolean(t.button.canUse), e.writeBits(t.button.seq, 6)), e.writeBits(0, 3)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(v.MinScale, v.MaxScale, 8), e.readBits(6)
		}, function(e, t) {
			t.type = e.readMapType(), t.healthT = e.readFloat(0, 1, 8), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.isDoor = e.readBoolean(), t.isDoor && (t.door = {}, t.door.open = e.readBoolean(), t.door.canUse = e.readBoolean(), t.door.seq = e.readBits(6)), t.isButton = e.readBoolean(), t.isButton && (t.button = {}, t.button.onOff = e.readBoolean(), t.button.canUse = e.readBoolean(), t.button.seq = e.readBits(6)), e.readBits(3)
		}), o(x.Type.Building, function(e, t) {
			e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeBits(t.layer, 2), e.writeBoolean(t.ceilingDead), e.writeBits(0, 3)
		}, function(e, t) {}, function(e, t) {
			t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.layer = e.readBits(2), t.ceilingDead = e.readBoolean(), e.readBits(3)
		}, function(e, t) {}), o(x.Type.Structure, function(e, t) {
			e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeBits(0, 6)
		}, function(e, t) {}, function(e, t) {
			t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), e.readBits(6)
		}, function(e, t) {}), o(x.Type.LootSpawner, function(e, t) {
			e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.layer, 2), e.writeBits(0, 6)
		}, function(e, t) {}, function(e, t) {
			t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.layer = e.readBits(2), e.readBits(6)
		}, function(e, t) {}), o(x.Type.Loot, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
		}, function(e, t) {
			e.writeItemType(t.name), e.writeUint8(t.count), e.writeBits(t.layer, 2), e.writeBits(t.isOld, 6)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16)
		}, function(e, t) {
			t.name = e.readItemType(), t.count = e.readUint8(), t.layer = e.readBits(2), t.isOld = e.readBits(6)
		}), o(x.Type.DeadBody, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
		}, function(e, t) {
			e.writeUint8(t.layer), e.writeUint16(t.playerId)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16)
		}, function(e, t) {
			t.layer = e.readUint8(), t.playerId = e.readUint16()
		}), o(x.Type.Decal, function(e, t) {
			e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUint8(t.layer)
		}, function(e, t) {}, function(e, t) {
			t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.layer = e.readUint8()
		}, function(e, t) {}), o(x.Type.Projectile, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.posZ, 0, b.projectile.maxHeight, 8)
		}, function(e, t) {
			e.writeItemType(t.type), e.writeUint8(t.layer)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16), t.posZ = e.readFloat(0, b.projectile.maxHeight, 8)
		}, function(e, t) {
			t.type = e.readItemType(), t.layer = e.readUint8()
		}), o(x.Type.Smoke, function(e, t) {
			e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.rad, 0, 10, 8)
		}, function(e, t) {
			e.writeUint8(t.layer)
		}, function(e, t) {
			t.pos = e.readVec(0, 0, 1024, 1024, 16), t.rad = e.readFloat(0, 10, 8)
		}, function(e, t) {
			t.layer = e.readUint8()
		});
		var I = {
				None: 0,
				Join: 1,
				Disconnect: 2,
				Move: 3,
				Edit: 4,
				Joined: 5,
				PlayerInfo: 6,
				Update: 7,
				Kill: 8,
				GameOver: 9,
				Pickup: 10,
				Map: 11,
				Spectate: 12,
				DropItem: 13,
				Emote: 14,
				PlayerStats: 15
			},
			z = function() {
				function e() {
					i(this, e), this.protocol = 0, this.privData = "", this.name = "", this.emotes = [], this.useTouch = !1, this.bot = !1
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint32(this.protocol), e.writeString(this.privData), e.writeString(this.name, 16);
						for (var t = 0; t < y.Count; t++) e.writeUint8(this.emotes[t]);
						e.writeUint8(this.useTouch), e.writeUint8(this.bot)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.protocol = e.readUint32(), this.privData = e.readString(), this.name = e.readString(16);
						for (var t = 0; t < y.Count; t++) {
							var a = e.readUint8();
							this.emotes.push(a)
						}
						this.useTouch = e.readUint8(), this.bot = e.readUint8()
					}
				}]), e
			}(),
			A = function() {
				function e() {
					i(this, e), this.reason = ""
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeString(this.reason)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.reason = e.readString()
					}
				}]), e
			}(),
			D = function() {
				function e() {
					i(this, e), this.seq = 0, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.shootStart = !1, this.shootHold = !1, this.reload = !1, this.interaction = !1, this.equipPrimary = !1, this.equipSecondary = !1, this.equipThrowable = !1, this.equipMelee = !1, this.equipLast = !1, this.cancelAction = !1, this.scrollDown = !1, this.scrollUp = !1, this.useItem = "", this.useScope = "", this.toMouseDir = _.create(1, 0), this.toMouseLen = 0, this.portrait = !1, this.editMode = !1, this.moveLen = 255
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.seq), e.writeBoolean(this.moveLeft), e.writeBoolean(this.moveRight), e.writeBoolean(this.moveUp), e.writeBoolean(this.moveDown), e.writeBoolean(this.shootStart), e.writeBoolean(this.shootHold), e.writeBoolean(this.reload), e.writeBoolean(this.interaction), e.writeBoolean(this.equipPrimary), e.writeBoolean(this.equipSecondary), e.writeBoolean(this.equipThrowable), e.writeBoolean(this.equipMelee), e.writeBoolean(this.equipLast), e.writeBoolean(this.cancelAction), e.writeBoolean(this.editMode), e.writeBoolean(this.scrollDown), e.writeBoolean(this.scrollUp), e.writeBoolean(this.portrait), e.writeUnitVec(this.toMouseDir, 9), e.writeFloat(this.toMouseLen, 0, 64, 12), e.writeItemType(this.useItem), e.writeItemType(this.useScope), e.writeUint8(this.moveLen)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.seq = e.readUint8(), this.moveLeft = e.readBoolean(), this.moveRight = e.readBoolean(), this.moveUp = e.readBoolean(), this.moveDown = e.readBoolean(), this.shootStart = e.readBoolean(), this.shootHold = e.readBoolean(), this.reload = e.readBoolean(), this.interaction = e.readBoolean(), this.equipPrimary = e.readBoolean(), this.equipSecondary = e.readBoolean(), this.equipThrowable = e.readBoolean(), this.equipMelee = e.readBoolean(), this.equipLast = e.readBoolean(), this.cancelAction = e.readBoolean(), this.editMode = e.readBoolean(), this.scrollDown = e.readBoolean(), this.scrollUp = e.readBoolean(), this.portrait = e.readBoolean(), this.toMouseDir = e.readUnitVec(9), this.toMouseLen = e.readFloat(0, 64, 12), this.useItem = e.readItemType(), this.useScope = e.readItemType(), this.moveLen = e.readUint8()
					}
				}]), e
			}(),
			O = function() {
				function e() {
					i(this, e), this.zoom = 1, this.cull = !1
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeBoolean(this.cull), e.writeFloat32(this.zoom)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.cull = e.readBoolean(), this.zoom = e.readFloat32()
					}
				}]), e
			}(),
			L = function() {
				function e() {
					i(this, e), this.item = "", this.weapIdx = 0
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeItemType(this.item), e.writeUint8(this.weapIdx)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.item = e.readItemType(), this.weapIdx = e.readUint8()
					}
				}]), e
			}(),
			E = function() {
				function e() {
					i(this, e), this.type = 0, this.pos = _.create(0, 0), this.useLoadout = !1, this.teamOnly = !1, this.isPing = !1
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.type), e.writeVec(this.pos, 0, 0, 1024, 1024, 16), e.writeBoolean(this.useLoadout), e.writeBoolean(this.teamOnly), e.writeBoolean(this.isPing), e.writeBits(0, 5)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.type = e.readUint8(), this.pos = e.readVec(0, 0, 1024, 1024, 16), this.useLoadout = e.readBoolean(), this.teamOnly = e.readBoolean(), this.isPing = e.readBoolean(), e.readBits(5)
					}
				}]), e
			}(),
			B = function() {
				function e() {
					i(this, e), this.id = 0, this.teamId = 0, this.name = ""
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint16(this.id), e.writeUint8(this.teamId), e.writeString(this.name)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.id = e.readUint16(), this.teamId = e.readUint8(), this.name = e.readString()
					}
				}]), e
			}(),
			F = function() {
				function e() {
					i(this, e), this.teamMode = 0, this.playerId = 0, this.started = !1, this.playerInfoMsgs = []
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.teamMode), e.writeUint16(this.playerId), e.writeUint8(this.started), e.writeUint16(this.playerInfoMsgs.length);
						for (var t = 0; t < this.playerInfoMsgs.length; t++) {
							this.playerInfoMsgs[t].serialize(e)
						}
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.teamMode = e.readUint8(), this.playerId = e.readUint16(), this.started = e.readUint8();
						for (var t = e.readUint16(), a = 0; a < t; a++) {
							var i = new B;
							i.deserialize(e), this.playerInfoMsgs.push(i)
						}
					}
				}]), e
			}(),
			R = function() {
				function e() {
					i(this, e), this.width = 0, this.height = 0, this.seed = 0, this.places = [], this.objects = []
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.seed), e.writeUint16(this.places.length);
						for (var t = 0; t < this.places.length; t++) {
							c(e, this.places[t])
						}
						e.writeUint16(this.objects.length);
						for (var a = 0; a < this.objects.length; a++) {
							d(e, this.objects[a])
						}
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.width = e.readUint16(), this.height = e.readUint16(), this.seed = e.readUint32();
						for (var t = e.readUint16(), a = 0; a < t; a++) {
							var i = {};
							m(e, i), this.places.push(i)
						}
						for (var o = e.readUint16(), n = 0; n < o; n++) {
							var r = {};
							p(e, r), this.objects.push(r)
						}
					}
				}]), e
			}(),
			j = {
				DeletedObjects: 1,
				FullObjects: 2,
				ActivePlayerId: 4,
				AliveCount: 8,
				Gas: 16,
				TeamData: 32,
				TeamInfos: 64,
				Bullets: 128,
				Explosions: 256,
				Emotes: 512
			},
			N = function() {
				function e() {
					i(this, e), this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCount = 0, this.aliveDirty = !1, this.gasT = 0, this.gasData = {}, this.gasDirty = !1, this.teams = [], this.teamData = [], this.bullets = [], this.explosions = [], this.emotes = [], this.ack = 0
				}
				return h(e, [{
					key: "deserialize",
					value: function(e, t) {
						var a = e.readUint16(),
							i = 0;
						if (0 != (a & j.DeletedObjects)) {
							i = e.readUint16();
							for (var o = 0; o < i; o++) this.delObjIds.push(e.readUint16())
						}
						var c = 0;
						if (0 != (a & j.FullObjects)) {
							c = e.readUint16();
							for (var m = 0; m < c; m++) {
								var d = {};
								d.__type = e.readUint8(), d.__id = e.readUint16(), C[d.__type].deserializePart(e, d), C[d.__type].deserializeFull(e, d), this.fullObjects.push(d)
							}
						}
						for (var p = e.readUint16(), u = 0; u < p; u++) {
							var h = {};
							h.__id = e.readUint16();
							var g = t.getTypeById(h.__id, e);
							C[g].deserializePart(e, h), this.partObjects.push(h)
						}
						0 != (a & j.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
						var f = {};
						if (n(e, f), this.activePlayerData = f, 0 != (a & j.AliveCount) && (this.aliveCount = e.readUint8(), this.aliveDirty = !0), this.gasT = e.readFloat(0, 1, 16), 0 != (a & j.Gas)) {
							var y = {};
							l(e, y), this.gasData = y, this.gasDirty = !0
						}
						if (0 != (a & j.TeamInfos))
							for (var b = e.readUint8(), x = 0; x < b; x++) {
								var v = {};
								s(e, v), this.teams.push(v)
							}
						if (0 != (a & j.TeamData))
							for (var k = e.readUint8(), _ = 0; _ < k; _++) {
								var w = {};
								w.playerIdx = e.readUint8(), r(e, w), this.teamData.push(w)
							}
						if (0 != (a & j.Bullets))
							for (var S = e.readUint8(), M = 0; M < S; M++) {
								var T = {};
								T.playerId = e.readUint16(), T.bulletType = e.readItemType(), T.pos = e.readVec(0, 0, 1024, 1024, 16), T.dir = e.readUnitVec(8), T.layer = e.readBits(2), T.varianceT = e.readFloat(0, 1, 5), T.distAdjIdx = e.readBits(5), T.shotFx = e.readBoolean(), T.shotFx && (T.shotSourceType = e.readItemType(), T.shotOffhand = e.readUint8()), T.reflectCount = e.readBits(2), T.reflectObjId = 0;
								var P = e.readBoolean();
								P && (T.reflectObjId = e.readUint16()), this.bullets.push(T)
							}
						if (0 != (a & j.Explosions))
							for (var I = e.readUint8(), z = 0; z < I; z++) {
								var A = {};
								A.pos = e.readVec(0, 0, 1024, 1024, 16), A.type = e.readItemType(), A.layer = e.readUint8(), this.explosions.push(A)
							}
						if (0 != (a & j.Emotes))
							for (var D = e.readUint8(), O = 0; O < D; O++) {
								var L = {};
								L.type = e.readUint8(), L.isPing = e.readUint8(), L.playerId = e.readUint16(), L.pos = e.readVec(0, 0, 1024, 1024, 16), this.emotes.push(L)
							}
						this.ack = e.readUint8()
					}
				}]), e
			}(),
			q = function() {
				function e() {
					i(this, e), this.itemSourceType = "", this.mapSourceType = "", this.damageType = 0, this.targetId = 0, this.killerId = 0, this.killCreditId = 0, this.killerKills = 0, this.downed = !1, this.killed = !1
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.damageType), e.writeItemType(this.itemSourceType), e.writeMapType(this.mapSourceType), e.writeUint16(this.targetId), e.writeUint16(this.killerId), e.writeUint16(this.killCreditId), e.writeUint8(this.killerKills), e.writeUint8(this.downed), e.writeUint8(this.killed)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.damageType = e.readUint8(), this.itemSourceType = e.readItemType(), this.mapSourceType = e.readMapType(), this.targetId = e.readUint16(), this.killerId = e.readUint16(), this.killCreditId = e.readUint16(), this.killerKills = e.readUint8(), this.downed = e.readUint8(), this.killed = e.readUint8()
					}
				}]), e
			}(),
			U = function() {
				function e() {
					i(this, e), this.playerId = 0, this.playerStats = {}
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						var t = this.playerStats;
						e.writeUint16(t.playerId), e.writeUint16(t.timeAlive), e.writeUint8(t.kills), e.writeUint8(t.dead), e.writeUint16(t.damageDealt), e.writeUint16(t.damageTaken)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						var t = {};
						t.playerId = e.readUint16(), t.timeAlive = e.readUint16(), t.kills = e.readUint8(), t.dead = e.readUint8(), t.damageDealt = e.readUint16(), t.damageTaken = e.readUint16(), this.playerStats = t
					}
				}]), e
			}(),
			G = function() {
				function e() {
					i(this, e), this.teamId = 0, this.teamRank = 0, this.gameOver = !1, this.victory = !1, this.playerStats = []
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.teamId), e.writeUint8(this.teamRank), e.writeUint8(this.gameOver), e.writeUint8(this.victory), e.writeUint8(this.playerStats.length);
						for (var t = 0; t < this.playerStats.length; t++) {
							var a = new U;
							a.playerStats = this.playerStats[t], a.serialize(e)
						}
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.teamId = e.readUint8(), this.teamRank = e.readUint8(), this.gameOver = e.readUint8(), this.victory = e.readUint8();
						for (var t = e.readUint8(), a = 0; a < t; a++) {
							var i = new U;
							i.deserialize(e), this.playerStats.push(i.playerStats)
						}
					}
				}]), e
			}(),
			V = {
				Full: 0,
				AlreadyOwned: 1,
				AlreadyEquipped: 2,
				BetterItemEquipped: 3,
				Success: 4
			},
			H = function() {
				function e() {
					i(this, e), this.type = 0, this.item = "", this.count = 0
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.type), e.writeItemType(this.item), e.writeUint8(this.count)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.type = e.readUint8(), this.item = e.readItemType(), this.count = e.readUint8()
					}
				}]), e
			}(),
			W = function() {
				function e() {
					i(this, e), this.specNext = !1, this.specPrev = !1
				}
				return h(e, [{
					key: "serialize",
					value: function(e) {
						e.writeUint8(this.specNext), e.writeUint8(this.specPrev)
					}
				}, {
					key: "deserialize",
					value: function(e) {
						this.specNext = e.readUint8(), this.specPrev = e.readUint8()
					}
				}]), e
			}();
		e.exports = {
			kNameMaxLen: 16,
			kMouseMaxLen: 64,
			kTeamUpdateRate: .25,
			kSmokeMaxRad: 10,
			MsgStream: P,
			Msg: I,
			JoinMsg: z,
			PlayerInfoMsg: B,
			DisconnectMsg: A,
			MoveMsg: D,
			EditMsg: O,
			DropItemMsg: L,
			JoinedMsg: F,
			UpdateMsg: N,
			MapMsg: R,
			KillMsg: q,
			PlayerStatsMsg: U,
			GameOverMsg: G,
			PickupMsgType: V,
			PickupMsg: H,
			SpectateMsg: W,
			EmoteMsg: E
		}
	},
	zgif: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("8iex"),
			r = a("9xSA"),
			s = (a("0od3"), a("Bk7F")),
			l = a("/2+T"),
			c = (a("zinx"), a("r4ug"), function() {
				function e() {
					i(this, e)
				}
				return o(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						if (t) {
							this.type = e.type, this.layer = 0, this.pos = l.copy(e.pos), this.rot = s.oriToRad(e.ori), this.aabb = r.transform(s.getBoundingCollider(this.type), this.pos, this.rot, 1), this.stairs = [];
							for (var o = s.Defs[this.type], c = 0; c < o.stairs.length; c++) {
								var m = o.stairs[c],
									d = r.transform(m.collision, this.pos, this.rot, 1),
									p = l.rotate(m.downDir, this.rot),
									u = n.splitAabb(d, p);
								this.stairs.push({
									collision: d,
									center: l.add(d.min, l.mul(l.sub(d.max, d.min), .5)),
									downDir: p,
									downAabb: r.createAabb(u[0].min, u[0].max),
									upAabb: r.createAabb(u[1].min, u[1].max),
									noCeilingReveal: !!m.noCeilingReveal
								})
							}
							this.mask = [];
							for (var h = 0; h < o.mask.length; h++) this.mask.push(r.transform(o.mask[h], this.pos, this.rot, 1));
							i.renderer.layerMaskDirty = !0
						}
					}
				}, {
					key: "update",
					value: function(e) {}
				}, {
					key: "insideStairs",
					value: function(e) {
						for (var t = 0; t < this.stairs.length; t++)
							if (r.intersect(this.stairs[t].collision, e)) return !0;
						return !1
					}
				}, {
					key: "insideMask",
					value: function(e) {
						for (var t = 0; t < this.mask.length; t++)
							if (r.intersect(this.mask[t], e)) return !0;
						return !1
					}
				}]), e
			}());
		e.exports = c
	},
	zinx: function(e, t, a) {
		"use strict";
		var i = function() {
				var e = !1;
				return function(t) {
					(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
				}(navigator.userAgent || navigator.vendor || window.opera), e
			}(),
			o = function() {
				var e = !1,
					t = navigator.userAgent.toLowerCase();
				return function(a) {
					/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(t) && (e = !0)
				}(navigator.userAgent || navigator.vendor || window.opera), e
			}(),
			n = {
				Lg: 0,
				Sm: 1
			},
			r = {
				Layout: n,
				debug: !1,
				dev: !1,
				pixelRatio: window.devicePixelRatio,
				layout: i ? n.Sm : n.Lg,
				mobile: i,
				tablet: o,
				touch: i
			};
		e.exports = r
	}
}, ["yZ5m"]);
//# sourceMappingURL=app.38b5116c.js.map
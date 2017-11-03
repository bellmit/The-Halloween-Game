
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor v1.4.2 (Phaser v2.6.2)


/**
 * HalloweenLevel1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function HalloweenLevel1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _back = this.game.add.sprite(-6, -399, 'back3', null, this);
	_back.scale.setTo(1.432940372508401, 1.3797597545197018);
	
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _physics2 = this.game.add.sprite(-68, 979, 'AtlasV1', 'physics', _collisionLayer);
	_physics2.scale.setTo(0.7716482193883777, 2.492985331012903);
	_physics2.anchor.setTo(-0.14880000220404732, -0.4443424769810268);
	
	var _physics1 = this.game.add.sprite(1058, 824, 'AtlasV1', 'physics', _collisionLayer);
	_physics1.scale.setTo(0.8, 1.0);
	
	var _physics = this.game.add.sprite(396, 822, 'AtlasV1', 'physics', _collisionLayer);
	_physics.scale.setTo(0.2, 1.0);
	
	var _physics3 = this.game.add.sprite(2305, 718, 'AtlasV1', 'physics', _collisionLayer);
	_physics3.scale.setTo(0.9757123810572119, 1.7069963946665463);
	
	var _physics4 = this.game.add.sprite(781, 644, 'AtlasV1', 'physics', _collisionLayer);
	_physics4.scale.setTo(0.5566666423674048, 0.8971426226631775);
	
	var _physics6 = this.game.add.sprite(471, 522, 'AtlasV1', 'physics', _collisionLayer);
	_physics6.scale.setTo(0.20512006403733743, 1.4265660112167005);
	
	var _physics5 = this.game.add.sprite(1387, 576, 'AtlasV1', 'physics', _collisionLayer);
	_physics5.scale.setTo(0.20373760153654544, 1.767824482287428);
	
	var _physics7 = this.game.add.sprite(2007, 246, 'AtlasV1', 'physics', _collisionLayer);
	_physics7.scale.setTo(1.4838403606807054, 1.8886857911499697);
	
	var _physics8 = this.game.add.sprite(1370, -25, 'AtlasV1', 'physics', _collisionLayer);
	_physics8.scale.setTo(1.5241601046698525, 2.0664237136543124);
	
	var _physics9 = this.game.add.sprite(541, 82, 'AtlasV1', 'physics', _collisionLayer);
	_physics9.scale.setTo(1.2188802602458981, 2.9551091285571394);
	
	var _physics10 = this.game.add.sprite(7, 306, 'AtlasV1', 'physics', _collisionLayer);
	_physics10.scale.setTo(0.9654400245849034, 2.5996334165881865);
	
	var _physics11 = this.game.add.sprite(559, 998, 'AtlasV1', 'physics', _collisionLayer);
	_physics11.scale.setTo(0.9020801191113159, 2.955108716891973);
	
	var _physics12 = this.game.add.sprite(1492, 998, 'AtlasV1', 'physics', _collisionLayer);
	_physics12.scale.setTo(0.5680002279805755, 1.7109417179991844);
	
	var _physics13 = this.game.add.sprite(4, 654, 'AtlasV1', 'physics', _collisionLayer);
	_physics13.scale.setTo(0.36063996936527576, 2.4218968965641543);
	
	var _physics14 = this.game.add.sprite(1850, 538, 'AtlasV1', 'physics', _collisionLayer);
	_physics14.scale.setTo(0.8387199236382704, 2.4218990016554223);
	
	var _base = this.game.add.sprite(2, 1028, 'AtlasV1', 'base1', this);
	_base.scale.setTo(0.8066131630003938, -1.1077540327386912);
	
	var _player1 = this.game.add.sprite(122, 766, 'player', 0, this);
	_player1.scale.setTo(0.24, 0.24);
	this.game.physics.arcade.enable(_player1);
	_player1.body.setSize(291.1666564941406, 286.5);
	
	var _Enemy = this.game.add.group(this);
	
	var _enemy = this.game.add.sprite(1203, 745, 'enemy1', 0, _Enemy);
	_enemy.scale.setTo(0.23202611126727168, 0.2426229774533215);
	
	var _enemy1 = this.game.add.sprite(2548, 654, 'enemy2', null, _Enemy);
	_enemy1.scale.setTo(0.22598094249506895, 0.20995701172455944);
	
	var _enemy2 = this.game.add.sprite(864, 576, 'enemy1', 2, _Enemy);
	_enemy2.scale.setTo(0.19983435357502707, 0.22658118723411508);
	
	var _enemy3 = this.game.add.sprite(2013, 458, 'enemy1', 1, _Enemy);
	_enemy3.scale.setTo(0.2031871918153488, 0.24076182641626687);
	
	var _enemy4 = this.game.add.sprite(189, 221, 'enemy1', 3, _Enemy);
	_enemy4.scale.setTo(0.24087026961142363, 0.2355338709013008);
	
	var _enemy5 = this.game.add.sprite(2316, 157, 'enemy1', 0, _Enemy);
	_enemy5.scale.setTo(0.23772674115553405, 0.2589035427991172);
	
	var _Platform = this.game.add.group(this);
	
	var _platform3 = this.game.add.sprite(1372, 545, 'AtlasV1', 'platform1', _Platform);
	_platform3.scale.setTo(0.7611210120316502, 0.6018688621994187);
	
	var _platform2 = this.game.add.sprite(2246, 705, 'AtlasV1', 'platform6', _Platform);
	_platform2.scale.setTo(0.5762342421556812, 0.2955514081479294);
	
	var _platform = this.game.add.sprite(1071, 816, 'AtlasV1', 'platform3', _Platform);
	_platform.scale.setTo(0.6570785975041205, 0.23593943111070773);
	
	var _platform1 = this.game.add.sprite(386, 824, 'AtlasV1', 'platform4', _Platform);
	_platform1.scale.setTo(0.3, 0.3);
	
	var _platform5 = this.game.add.sprite(443, 479, 'AtlasV1', 'platform1', _Platform);
	_platform5.scale.setTo(0.9402803748608576, 0.741214580142837);
	
	var _platform4 = this.game.add.sprite(773, 640, 'AtlasV1', 'platform5', _Platform);
	_platform4.scale.setTo(0.7453131585384848, 0.2869294299309859);
	
	var _platform7 = this.game.add.sprite(1917, 864, 'AtlasV1', 'platform5', _Platform);
	_platform7.scale.setTo(0.817890098859332, 0.30689521480803333);
	
	var _platform8 = this.game.add.sprite(1837, 523, 'AtlasV1', 'platform3', _Platform);
	_platform8.scale.setTo(0.7480575832450564, 0.5067856071254091);
	
	var _platform9 = this.game.add.sprite(-9, 291, 'AtlasV1', 'platform3', _Platform);
	_platform9.scale.setTo(0.8911608702693405, 0.5902525562047264);
	
	var _platform10 = this.game.add.sprite(535, 75, 'AtlasV1', 'platform5', _Platform);
	_platform10.scale.setTo(1.6009627794873187, 0.5379301232607208);
	
	var _platform11 = this.game.add.sprite(1938, 237, 'AtlasV1', 'platform4', _Platform);
	_platform11.scale.setTo(2.169550118960503, 0.5270201156659384);
	
	var _platform6 = this.game.add.sprite(4, 645, 'AtlasV1', 'platform2', _Platform);
	_platform6.scale.setTo(0.44284848379344466, 0.3102551097353224);
	
	var _platform12 = this.game.add.sprite(1378, -31, 'AtlasV1', 'platform5', _Platform);
	_platform12.scale.setTo(1.9287611251016763, 0.537930099261552);
	
	this.game.add.sprite(560, 991, 'AtlasV1', 'base1', this);
	
	var _base2 = this.game.add.sprite(1498, 989, 'AtlasV1', 'base1', this);
	_base2.scale.setTo(0.5978973427746783, 1.087822351023014);
	
	
	
	// public fields
	
	this.fCollisionLayer = _collisionLayer;
	this.fPlayer1 = _player1;
	this.fEnemy = _Enemy;
	
}

/** @type Phaser.Group */
var HalloweenLevel1_proto = Object.create(Phaser.Group.prototype);
HalloweenLevel1.prototype = HalloweenLevel1_proto;
HalloweenLevel1.prototype.constructor = HalloweenLevel1;

/* --- end generated code --- */
// -- user code here --
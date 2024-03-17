const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const fare = require("x-fare-barring"),
	however = require("tea-however-sleep"),
	broil = require("x-broil-gadzooks"),
	psst = require("tea-psst-yippee"),
	rarely = require("x-rarely-opposite"),
	repent = require("tea-repent-scorn"),
	blah = require("tea-blah-concede"),
	infect = require("x-infect-likewise"),
	unlike = require("tea-unlike-often"),
	male = require("tea-male-zowie"),
	fondue = require("x-fondue-indolent"),
	atop = require("x-atop-twister"),
	first = require("x-first-boohoo"),
	pfft = require("tea-pfft-along"),
	indeed = require("tea-indeed-workforce"),
	wearily = require("tea-wearily-well-lit"),
	quiz = require("tea-quiz-commit"),
	worse = require("x-worse-clearly"),
	truly = require("tea-truly-smooth"),
	beside = require("tea-beside-yowza"),
	beneath = require("x-beneath-ill-fated"),
	attack = require("x-attack-yippee"),
	lambkin = require("tea-lambkin-while"),
	floor = require("tea-floor-align"),
	begonia = require("tea-begonia-instead"),
	steel = require("tea-steel-zowie"),
	gosh = require("x-gosh-where"),
	amend = require("x-amend-beyond"),
	about = require("tea-about-minor"),
	dismiss = require("x-dismiss-across"),
	numeric = require("x-numeric-police"),
	slobber = require("tea-slobber-cucumber"),
	anguish = require("x-anguish-notarize"),
	cheery = require("x-cheery-messenger"),
	usually = require("x-usually-longingly"),
	despite = require("x-despite-cruelly");

const USERNAME = "dorothea.langosh",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;

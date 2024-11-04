#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import boxen from "boxen";

const boxenOptions = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

const options = yargs( hideBin( process.argv ) )
	.usage( "$0 <number-of-people> [--tacos-per-person=3]" )
	.demand( 1 )
	.default( "tacos-per-person", 3 )
	.parse();

if ( options._.length === 0 ) {
	console.log( "number of people eating tacos is required!" );
}
const people = options._[0];

const tacos = people * options.tacosPerPerson;
const tacoText = (tacos === 1 ) ? "taco!" : "tacos!";

const output = [
	chalk.cyan( "You're gonna need at least" ),
	chalk.white.bold( tacos ),
	chalk.cyan( tacoText )
];

console.log( chalk.green( boxen( output.join( " " ), boxenOptions ) ) );

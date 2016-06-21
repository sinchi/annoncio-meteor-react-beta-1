import  faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aledeed:simple-schema';
import { Factory } from 'meteor/dbrules:factory';


export const Annonces = new Mongo.Collection('annonces');

Annonces.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});


Annonces.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});


Annonces.schema = new SimpleSchema({
	title: {
		type: String,
		label: 'The title of the annonce'
	}
});


Annonces.attachSchema(Annonces.schema);

Factory.define('annonce', Annonces, { 
	title: () => faker.hacker.phrase()
});
import { MethodValidated } from 'meteor/mdg:method-validated';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Annonces } from './annonces.js';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertAnnonce = new MethodValidated({
	name: "annonce.insert",
	validate: new SimpleSchema({
		title: {
			type: String
		}
	}).validator(),
	run(annonce){
		Annonces.insert(annonce);
	}
});

export const updateAnnonce = new ValidatedMethod({
	name: "annonce.update",
	validate: new SimpleSchema({
		_id: { type: String },
		'update.title': { type: String }
	}).validator(),
	run({ _id, update }){
		Annonces.update(_id, { title: { $set: update } });
	}
});


export const removeAnnonce = new ValidatedMethod({
	name: "annonce.remove",
	validate: new SimpleSchema({
		_id: { type: String }
	}).validator(),
	run({ _id }){
		Annonces.remove(_id);
	}
});

rateLimit({
	methods:[
		insertAnnonce,
		updateAnnonce,
		removeAnnonce
	],
	limit: 5,
	timeRange: 1000
});
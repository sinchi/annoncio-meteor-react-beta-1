import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dbrules:factory';
import { Annonces } from './annonces.js';
import { insertAnnonce, updateAnnonce, removeAnnonce } from './methods.js';

describe('Annonces methods', function(){
	beforeEach(function(){
		if(Meteor.isServer){
			resetDatabase();
		}
	});

	it('insert an annonce into Annonces Collection', function(){
		insertAnnonce.call({ title: 'im the boss' });
		const getAnnonce = Annonces.findOne({ title: 'im the boss' });
		assert.equal(getAnnonce.title, 'im the boss');
	});

	it('update an annonce into Annonces Collection', function(){
		const { _id } = Factory.create('annonce');
		updateAnnonce.call({
			_id,
			update: { title: 'im the boss' }
		});
		const getAnnonce = Annonces.findOne(_id);
		assert.equal(getAnnonce.title, 'im the boss');
	});

	it('removes an annonce from the Annonces Collection', function(){
		const { _id } = Factory.create('annonce');
		removeAnnonce.call({
			_id
		});
		const getAnnonce = Annonces.findOne(_id);
		assert.equal(getAnnonce, undefined);
	});
});
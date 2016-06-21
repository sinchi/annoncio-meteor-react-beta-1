/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */


import { assert } from 'meteor/practicalmeteor:chai';
import { Annonces } from './annonces';


describe('Annonces Collection', function(){
	it('registers the collection with Mongo properly', function(){
		assert.equal(typeof Annonecs, 'object');
	});
});
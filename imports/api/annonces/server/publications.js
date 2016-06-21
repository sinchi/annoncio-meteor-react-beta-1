import { Meteor } from 'meteor/meteor';
import { Annonces } from '../annonces.js';

Meteor.publish('annonces', () => Annonces.find());
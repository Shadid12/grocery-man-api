import { Router } from 'express';
import items from './items';

export default ({ config, db }) => {
    let api = Router();

    api.use('/items', items({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ 'hello': 'api@0.0.1-2' });
	});

	return api;
}
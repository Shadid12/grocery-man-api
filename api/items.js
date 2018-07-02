import resource from 'resource-router-middleware';
import { getItems } from './controllers/itemController'

export default ({ config, db }) => resource({

    /** GET / - List all entities */
	index({ params }, res) {
        let items = getItems();
		res.json({'items':items});
	}

})
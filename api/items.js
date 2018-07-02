import resource from 'resource-router-middleware';

export default ({ config, db }) => resource({

    /** GET / - List all entities */
	index({ params }, res) {
		res.json({'apples':'macintosh'});
	}

})
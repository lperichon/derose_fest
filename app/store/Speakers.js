Ext.define('DeRoseFest.store.Speakers', {
	extend: 'Ext.data.Store',
    config: {
        model: 'DeRoseFest.model.Speaker',
        sorters: ['order']
    }
});

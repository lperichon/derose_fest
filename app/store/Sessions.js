Ext.define('DeRoseFest.store.Sessions', {
	extend: 'Ext.data.Store',

	requires: 'Ext.DateExtras',

    config: {

        model: 'DeRoseFest.model.Session',

        grouper: {
            sortProperty: 'pretty_time',
            groupFn: function(record) {
                return record.get('pretty_time');
            }
        },

        sorters: [
            {
                property: 'pretty_time',
                direction: 'ASC'
            },
            {
                property: 'title',
                direction: 'ASC'
            }
        ]
    }
});

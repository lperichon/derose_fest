Ext.define('DeRoseFest.store.SpeakerSessions', {
	extend: 'Ext.data.Store',

    config: {
        model: 'DeRoseFest.model.Session',

        sorters: [
            {
                property: 'time',
                direction: 'ASC'
            }
        ]
    }
});

// Dashboard Storage 

var DashboardStorage = DashboardStorage || {
	id: 'storage',
	data: [],
	storage: localStorage,
	set: function( key, value ) {
		this.data[key] = value;
	},
	get: function( key ) {
		if ( key in this.data ) {
			return this.data[key];
		}
	}
	clear: function () {
		this.data = [];
	},
	save: function() {
		var info = JSON.stringify(this.data)
		storage.setItem( this.id, info );
		// addItem( this.id, JSON.stringify(this.data) );
	},
	load: function() {
		var info = storage.getItem( this.id );
		this.data = JSON.parse( info );
	},
	remove: function() {
		// addItem( this.id, null );
		storage.removeItem( this.id );
	}
};
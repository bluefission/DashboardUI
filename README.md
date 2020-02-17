DashboardUI
======

DashboardUI is a bootstrap and jQuery based javascript collection used to manage simple interactions with HTML interface web based applications. It provides features for AJAX navigation, JSON response communication, portlet and tab management, streamline alerts, and client site record management. 

Requirements
------

- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootbox](http://bootboxjs.com/)
- [Toastr](https://codeseven.github.io/toastr/)
- [CKEditor](https://ckeditor.com/cke4/addon/bootstrap-editor) (to be removed in exchange for dependency injection)

Main Files
------

- `dashboard-ui.js` manages navigation, module loading, and notices.
- `dashboard-form.js` basic form validation, serialization, and ajax
- `dashboard-response.js` reads and contains JSON responses
- `dashboard-module.js` interfaces other classes into a simple module object
- `dashboard-storage.js` interface for local storage and cookies
- `record-set.js` creates a traversible record set of objects in an array to be save locally or be made into an ajax payload
- `portlet-ui.js` - dynamially adds or removes portlet windows from dashboard
- `convert-colors.js` simple rbg to hex conversions (but does this belong here?!)

Installation
------

Copy files locally and use the `main.js` file to set configurations and invoke `DashboardUI.init();`

In the foot of the HTML document
```xml
		<script type="text/javascript" src="js/dashboard-ui/dashboard-ui.js"></script> 
		<script type="text/javascript" src="js/dashboard-ui/dashboard-form.js"></script> 
		<script type="text/javascript" src="js/dashboard-ui/dashboard-response.js"></script> 
		<script type="text/javascript" src="js/dashboard-ui/portlet-ui.js"></script> 
		<script type="text/javascript" src="js/dashboard-ui/convert-colors.js"></script> 
		<script type="text/javascript">
			DashboardUI.home = 'dashboard/';
			DashboardUI.root = 'admin/';
		</script>
		<script type="text/javascript" src="js/main.js"></script> 
```

`main.js` contents
```js
$( document ).ready(function() {
	
	DashboardUI.init();
});
```

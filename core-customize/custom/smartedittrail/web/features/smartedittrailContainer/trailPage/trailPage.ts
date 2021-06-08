import * as angular from 'angular';

// This creates an AngularJS module called trailPageModule. 
export const trailPageModule = angular.module('trailPageModule', [])

	// The AngularJS recipe specifies a new component called trailPage that will display the new page. 
    // It can be used in the markup of other parts of the application using <trail-page>. 
	.component('trailPage', 

{
		// This property specifies the name of the file that contains the markup used to render the new page. 
		templateUrl: 'trailPageTemplate.html',

		// This property specifies the controller of the new page. It can be used to add custom behavior to the page. 
		controller: () => {
			// Fancy controller code. 
		}
	});
angular.module('smartedittrailContainerTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemTemplate.html',
    "<h2>AB Analytics</h2>\n" +
    "<p>This is a dummy toolbar item used to demonstrate functionality.</p>\n"
  );


  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemWrapperTemplate.html',
    "<ab-analytics-toolbar-item></ab-analytics-toolbar-item>\n"
  );


  $templateCache.put('web/features/smartedittrailContainer/trailPage/trailPageTemplate.html',
    "<!-- To contain the top toolbar (and make it look SmartEdit like ) -->\n" +
    "<div class=\"se-toolbar-group\">\n" +
    "    <se-toolbar data-css-class=\"se-toolbar--shell\"\n" +
    "        data-image-root=\"imageRoot\"\n" +
    "        data-toolbar-name=\"smartEditHeaderToolbar\"></se-toolbar>\n" +
    "</div>\n" +
    "\n" +
    "<!-- The actual content of the page -->\n" +
    "<div class=\"se-landing-page\">\n" +
    "    Trail Page\n" +
    "</div>\n"
  );

}]);

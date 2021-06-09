angular.module('smartedittrailTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/smartedittrail/abAnalyticsDecorator/abAnalyticsDecoratorContentTemplate.html',
    "<div>\n" +
    "    <p>\n" +
    "        <strong\n" +
    "            >{{ $ctrl.smarteditComponentId | limitTo:16 }}{{ $ctrl.smarteditComponentId.length > 16\n" +
    "            ? '...' : ''}}</strong\n" +
    "        >\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        {{ $ctrl.smarteditComponentType | limitTo:16 }}{{ $ctrl.smarteditComponentType.length > 16 ?\n" +
    "        '...' : ''}}\n" +
    "    </p>\n" +
    "    <p>{{ $ctrl.abAnalytics }}</p>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/smartedittrail/abAnalyticsDecorator/abAnalyticsDecoratorTemplate.html',
    "<div>\n" +
    "    <div\n" +
    "        class=\"row\"\n" +
    "        data-uib-popover-template=\"$ctrl.contentTemplate\"\n" +
    "        data-popover-title=\"{{$ctrl.title}}\"\n" +
    "        data-popover-placement=\"'top'\"\n" +
    "        data-popover-trigger=\"'mouseenter'\"\n" +
    "    >\n" +
    "        <div data-ng-transclude></div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);

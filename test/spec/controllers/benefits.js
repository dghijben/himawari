'use strict';

describe('Controller: BenefitsCtrl', function () {

  // load the controller's module
  beforeEach(module('himawariApp'));

  var BenefitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenefitsCtrl = $controller('BenefitsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

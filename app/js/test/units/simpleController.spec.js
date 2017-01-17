describe('simpleController', function() {
	it('testing title scope variable', function() {
		var ctrl, scope = {};

		module('myApp');

		inject(function($controller) {
			ctrl = $controller('simpleController', {$scope: scope})
		});

		expect(scope.title).toBeDefined();
		expect(scope.title).toBe("shashidhar");
	})
});
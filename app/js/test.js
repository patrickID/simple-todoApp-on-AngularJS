describe('todoControllers', function() {

  describe('listCtrl', function(){

        var scope, ctrl, $httpBackend;

    beforeEach(module('todoApp'));
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('res/tasks.json').
                respond([{
                  "id": 1,
                  "name": "Today_task1",
                  "obj_status": "active"
                }]);


              scope = $rootScope.$new();
              ctrl = $controller('listCtrl', {$scope: scope});
      }));



            it('should return array with tasks', function() {
                expect(scope.tasks).toBeUndefined();
                $httpBackend.flush();

                    expect(scope.tasks).toEqual([{
                      "id": 1,
                      "name": "Today_task1",
                      "obj_status": "active"
                    }]);
        });


  });

});
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
    describe('detailCtrl', function(){

        var scope, ctrl, $httpBackend, $routeParams;

        beforeEach(module('todoApp'));
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('res/tasks.json').
                respond([
                    {
                    "id": 1,
                    "name": "Today_task1",
                    "creation_date": "2015-04-21T06:50:21",
                    "due_date": "2015-04-22T23:59:00",
                    "start_date": "2015-04-21T00:00:01",
                    "is_completed": false,
                    "is_archived": false,
                    "estimated_effort": 5.5,
                    "actual_effort": 3.3,
                    "physical_progress": 60,
                    "obj_status": "active",
                    "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                    "project_id": 0
                },
                    {
                        "id": 11,
                        "name": "Today_task11",
                        "creation_date": "2015-04-21T06:50:21",
                        "due_date": "2015-04-22T23:59:00",
                        "start_date": "2015-04-21T00:00:01",
                        "is_completed": false,
                        "is_archived": false,
                        "estimated_effort": 5.5,
                        "actual_effort": 3.3,
                        "physical_progress": 60,
                        "obj_status": "active",
                        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                        "project_id": 0,
                        "tags": [
                            "meeting"
                        ]
                    },
                    {
                        "id": 12,
                        "name": "Today_task12",
                        "creation_date": "2015-04-21T06:50:21",
                        "due_date": "2015-04-22T23:59:00",
                        "start_date": "2015-04-21T00:00:01",
                        "is_completed": false,
                        "is_archived": false,
                        "estimated_effort": 5.5,
                        "actual_effort": 3.3,
                        "physical_progress": 60,
                        "obj_status": "active",
                        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                        "project_id": 0
                    }]);

            routeParams = {};
            scope = $rootScope.$new();
            ctrl = $controller('detailCtrl', {$scope: scope, $routeParams: routeParams});
        }));



        it('should return object with selected task', function() {
            expect(scope.currentTask).toBeUndefined();
            routeParams.id = '1';
            $httpBackend.flush();

            expect(scope.currentTask).toEqual({
                "id": 1,
                "name": "Today_task1",
                "creation_date": "2015-04-21T06:50:21",
                "due_date": "2015-04-22T23:59:00",
                "start_date": "2015-04-21T00:00:01",
                "is_completed": false,
                "is_archived": false,
                "estimated_effort": 5.5,
                "actual_effort": 3.3,
                "physical_progress": 60,
                "obj_status": "active",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "project_id": 0
            });
        });

    });
});
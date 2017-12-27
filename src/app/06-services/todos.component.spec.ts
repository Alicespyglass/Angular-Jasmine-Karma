// Testing a component which uses a service with a Stop
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable'; // remember to import Observable
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
// 1. declare component and service
  let component: TodosComponent;
  let service: TodoService;

// 2. initialize the service with null in its constructor and pass it to the component
  beforeEach(() => {
      service = new TodoService(null); // passed in null instead of http client
      component = new TodosComponent(service);
  });

// 3. spy calls the getTodos function from the service and returns an Observable
// from the array
  it('should set todos property with the items returned from the server', () => {
    let todos = [1,2,3]
      // Arrange
      spyOn(service, 'getTodos').and.callFake(() => {
          return Observable.from([ todos ]);
      });

      // Act
      component.ngOnInit();

      //Assert - expect todos back from server
      expect(component.todos).toBe(todos);
  });
});

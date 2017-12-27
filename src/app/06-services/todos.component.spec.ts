// Testing a component which uses a service with a Stop
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable'; // remember to import Observable
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

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
    let todos = [1,2,3];
      // Arrange
      spyOn(service, 'getTodos').and.callFake(() => {
          return Observable.from([ todos ]);
      });

      // Act
      component.ngOnInit();

      //Assert - expect todos back from server
      expect(component.todos).toBe(todos);
  });

// 7 - Interactive Testing
// 7a - a method is called on the service
  it('should call the server to save the changes when a new todo item is added', () => {
  // add() method takes in todo as a parameter and returns one in the Observable
    let spy = spyOn(service, 'add').and.callFake(t => {
        // remember to import empty method from Observable at the top of the file
        return Observable.empty();
    });

    // Act
    component.add();

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  // 7b - a method is called on the service
    it('should add the new todo returned from the server', () => {
    // todo object returned from server
    let todo = { id:1 };
    // instead of callFake(), cleaner way is to returnValue and get rid of arrow function
      let spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

      // Act
      component.add();

      // Assert
      expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });

    // 7c - if an error is returned, error is set to message property
    it('should set the message property if server returns an error when adding a new todo', () => {
    // declare an error message
    let error = "error from the server";
    let todo = { id:1 };
    // create Observable from an error
      let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

      // Act
      component.add();

      // Assert
      expect(component.message).toBe(error);
    });



});

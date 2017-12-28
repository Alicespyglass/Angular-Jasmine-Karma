import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable'

describe('UsersComponent', () => {
    let component: UsersComponent;
    let service: UserService;

    beforeEach(() => {
        service = new UserService(null);
        component = new UsersComponent(service);
    });

    fit('should set the users property with users returned from the service', () => {
        let users = [1,2,3];

        // Arrange
        spyOn( service, 'getUsers').and.callFake(() => {
            return Observable.from([ users ])
        });

        // Act
        component.ngOnInit();

        // Assert
        expect(component.users).toBe(users);
    })

    describe('deleteUser', () => {
        let user;

        beforeEach(() => {
            component.users = [
              { id: 1 },
              { id: 2 },
            ];

            user = component.users[0];
        })

        fit('call the server to delete a user when called', () => {
            // Arrange - spyon service with method, deleteUser
            spyOn( window, 'confirm' ).and.returnValue(true);
            spyOn( service, 'deleteUser' ).and.returnValue(Observable.empty());

            // Act
            component.deleteUser(user);

            expect(component.users.indexOf(user)).toBe(-1);
        });

        fit('should NOT delete a user if cancelled', () => {
            // Arrange - spyon service with method, deleteUser
            spyOn( window, 'confirm' ).and.returnValue(false);

            // Act
            component.deleteUser(user);

            expect(component.users.indexOf(user)).toBeGreaterThan(-1);
        });

        fit('should undo the deletion if call to server fails', () => {
            // Arrange - spyon service with method, deleteUser
            spyOn( window, 'confirm' ).and.returnValue(true);
            spyOn( window, 'alert' ).and.callFake(() => {});
            spyOn( service, 'deleteUser' ).and.returnValue(Observable.throw('error'));

            // Act
            component.deleteUser(user);

            expect(component.users.indexOf(user)).toBeGreaterThan(-1);
        });

        fit('should throw an alert if the deletion fails', () => {
            // Arrange - spyon service with method, deleteUser
            spyOn( window, 'confirm' ).and.returnValue(true);
            let spy = spyOn( window, 'alert' ).and.callFake(() => {});
            spyOn( service, 'deleteUser' ).and.returnValue(Observable.throw('error'));

            // Act
            component.deleteUser(user);

            expect(spy).toHaveBeenCalled();
        });



    })
})

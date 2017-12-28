import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
    // declare
    let component: LikeComponent;

    beforeEach(() => {
        // instantiate
        component = new LikeComponent();
    });

    describe('click - on iLike = false.', () => {
        fit('On click, iLike = true', () => {
            // act - click on heart
            component.click();
            // assert
            expect(component.iLike).toBe(true);
        });

        fit('On click, totalLikes to increase by 1', () => {
            let count = component.totalLikes
            component.click();

            expect(component.totalLikes).toBe(count + 1);
        });
    });

    describe('click - on iLike = true.', () => {

        beforeEach(() => {
            component.iLike = true;
        })

        fit('On click, iLike = false', () => {
            // act - click on heart
            component.click();
            // assert
            expect(component.iLike).toBe(false);
        });

        fit('On click, totalLikes to decrease by 1', () => {
            let count = component.totalLikes
            component.click();

            expect(component.totalLikes).toBe(count - 1);
        });
    })


})

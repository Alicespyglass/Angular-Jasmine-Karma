import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
    // declare
    let component: LikeComponent;

    beforeEach(() => {
        // instantiate
        component = new LikeComponent();
    });

    describe('click - on iLike = false.', () => {
        it('On click, iLike = true', () => {
            // act - click on heart
            component.click();
            // assert
            expect(component.iLike).toBe(true);
        });

        it('On click, totalLikes to increase by 1', () => {
            let count = component.totalLikes
            component.click();

            expect(component.totalLikes).toBe(count + 1);
        });
    });

    describe('click - on iLike = true.', () => {

        beforeEach(() => {
            component.iLike = true;
        })

        it('On click, iLike = false', () => {
            // act - click on heart
            component.click();
            // assert
            expect(component.iLike).toBe(false);
        });

        it('On click, totalLikes to decrease by 1', () => {
            let count = component.totalLikes
            component.click();

            expect(component.totalLikes).toBe(count - 1);
        });
    })


})

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
    let component: VoterComponent;

    beforeEach(() => {
        component = new VoterComponent;
    });

    it('it should tally up votes correctly', ()=> {
        component.myVote = 5;
        component.othersVote = 15;

        expect(component.totalVotes).toBe(20);
    })

    describe('When I upVote: ', () => {
        // when clicking upVote, myVote = 1;
        it('it should increase totalVotes by 1', () => {
            // Act
            component.upVote();

            // Asert
            expect(component.totalVotes).toBe(1);
        });

        it('it should NOT increase totalVotes if myVote is already 1', () => {

            component.myVote = 1;
            // component.myVoteChanged.subscribe(t => myVote = t);

            // Act
            component.upVote();

            // Asert
            expect(component.totalVotes).toBe(1);
        })
    });

    describe('When I downVote: ', () => {
        // when clicking upVote, myVote = 1;
        it('it should decrease totalVotes by 1', () => {
            component.othersVote = 1;
            // Act
            component.downVote();

            // Asert
            expect(component.totalVotes).toBe(0);
        });

        it('it should NOT decrease totalVotes if myVote is already -1', () => {
            component.othersVote = 1;
            component.myVote = -1;
            // component.myVoteChanged.subscribe(t => myVote = t);

            // Act
            component.downVote();

            // Asert
            expect(component.totalVotes).toBe(0);
        })
    });

})

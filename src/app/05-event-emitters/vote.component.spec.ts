import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    //   Arrange
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv) // voteChanged is an event so can be subscribed

    // Act
    component.upVote();

    // Assert
    expect(totalVotes).not.toBeNull(); // could pass even with a bug
    expect(totalVotes).toBe(1); // better to be more specific in this case
;
  });
});

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  it('should increment total votes when upvoted', () => {
      //   Arrange
      let component = new VoteComponent();

      //   Act
      component.upVote();

      //   Assert
      expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when downvoted', () => {
      let component = new VoteComponent();

      component.downVote();

      expect(component.totalVotes).toBe(-1);
  });
});

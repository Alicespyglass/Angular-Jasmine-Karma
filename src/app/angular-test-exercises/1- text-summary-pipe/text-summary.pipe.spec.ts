import { TextSummaryPipe } from './text-summary.pipe';

describe('TextSummaryPipe', () => {
    // declare
    let pipe: TextSummaryPipe;

    beforeEach(() => {
        // instantiate
        pipe = new TextSummaryPipe();
    })

    describe('transform - no value', () => {
        // if no value, returns empty string
        it('should return an empty string if no value is provided', () => {
            expect(pipe.transform(null)).toEqual('');
        });
    })

    describe('transform - with value:', () => {
        let valueUnder10 = '12345'
        let valueOver10 = '12345678910'

        it('should return the value, if no arg is provided and value length is under 10', () => {
            expect(pipe.transform(valueUnder10)).toEqual(valueUnder10);
        });

        it('should return the value if arg is provided and value length is under arg', () => {
            expect(pipe.transform(valueUnder10, 10)).toEqual(valueUnder10);
        });

        it('should return value cut at limit if no arg is provided and value length is over 10', () => {
            expect(pipe.transform(valueOver10)).toEqual('1234567891...');
        });

        it('should return value cut at limit if arg is provided and value length is over arg', () => {
            expect(pipe.transform(valueOver10, 3)).toEqual('123...');
        });

    })
})



// if there is a value
// if there is args sets a limit of args
    // if length of value is less than limit, return value up to limit plus dots string

// limit of 10 if no args

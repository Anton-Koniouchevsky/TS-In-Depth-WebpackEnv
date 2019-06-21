namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            const fee = daysLate * 0.25;

            return fee;
        }
    }

    export function maxBooksAllowed(age: number): number {
        if (age < 12) {
            return 3;
        }

        return 10;
    }

    function privateFunc(): void {
        console.log('This is private');
    }
}
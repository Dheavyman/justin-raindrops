/**
 * Find the prime-factorization of a number
 * 
 * @param {any} number 
 * @returns {number}
 */
const primeFactor = (number) => {
    for (let i = 2; i <= 7; i++) {
        if (number % i === 0) {
            return i;
        }
    }
    return number;
};

/**
 * Find if a number has 3, 5 and/or 7 as prime factors 
 * 
 * @param {any} number 
 * @returns {string} 
 */
const rainDrops = (number) => {
    let numberToTest = number,
        factor = undefined,
        primeFactors = [];

    if (typeof number !== 'number') {
        return 'Invalid input'
    }
    else {
        if (number < 3) {
            return number;
        }

        while (numberToTest !== 1) {
            factor = primeFactor(numberToTest);
            primeFactors.push(factor);
            numberToTest /= factor;
        }
    }
    return primeFactors.includes(3) && primeFactors.includes(5) && primeFactors.includes(7) ? 'PlingPlangPlong' :
        primeFactors.includes(3) && primeFactors.includes(5) ? 'PlingPlang' :
            primeFactors.includes(3) && primeFactors.includes(7) ? 'PlingPlong' :
                primeFactors.includes(3) ? 'Pling' :
                    primeFactors.includes(5) && primeFactors.includes(7) ? 'PlangPlong' :
                        primeFactors.includes(5) ? 'Plang' :
                            primeFactors.includes(7) ? 'Plong' : number;
}

export default rainDrops;

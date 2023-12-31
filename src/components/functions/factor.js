function cmp(a, b) {
    return a - b;
}

function factors(num) {
    let l = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            l.push(i);
            l.push(num/i);
        }
    }
    return [...new Set(l.sort(cmp))];
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function primeFactors(num) {
    let l = [];
    let c = 2;
    while (num !== 1) {
        while (num % c == 0) {
            l.push(c);
            num /= c;
        }
        c++;
    }
    return l;
}

function primeFactorsCount(pf) {
    const counter = {};
 
    pf.forEach(ele => {
        if (counter[ele]) {
            counter[ele] += 1;
        } else {
            counter[ele] = 1;
        }
    });

    return counter;
}

export { factors, isPrime, primeFactors, primeFactorsCount };
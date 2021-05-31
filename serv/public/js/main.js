export function main(n) {
    console.log("called main");
    const gen = new PrimeGenerator();

    return gen.nearestPrime(n);
}




class PrimeGenerator {
    constructor() {
        this.primes = [2, 3];
        this.last = 3;
    }

    next() {
        let x = this.last;

        while (!this.isPrime(x)) {
            x += 2;
        }

        this.last = x;
        this.primes.push(x);

        return x;
    }

    nearestPrime(n) {
        while (this.last < n) {
            this.next();
        }

        const idx = this.binSearch(n);

        return this.primes[idx];
    }

    isPrime(x) {
        for (let p of this.primes) {
            if (x % p == 0) {
                return false;
            }
        }

        return true;
    }

    binSearch(x) {
        let size = this.primes.length;
        let l = 0;
        let r = size;

        while (l < r) {
            const m = l + Math.floor(size / 2);
            const p = this.primes[m];

            if (p < x) {
                l = m + 1;
            }
            else if (x < p) {
                r = m;
            }
            else {
                return m;
            }

            size = r - l;
        }

        return l - 1;
    }
}
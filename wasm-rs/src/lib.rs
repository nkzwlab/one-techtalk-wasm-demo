use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/src/imports.js")]
extern {
    #[wasm_bindgen]
    pub fn log(s: &str);
    #[wasm_bindgen]
    pub fn now() -> f64;
}

#[wasm_bindgen]
pub fn demo_main(n: u64) -> u64 {
    let start = now();
    let mut gen = PrimeGenerator::new();

    let res = gen.nearest_prime(n);
    let end = now();
    log(&format!("wasm elapsed time: {} ms", end - start));

    return res;
}

struct PrimeGenerator {
    primes: Vec<u64>,
    last: u64,
}

impl PrimeGenerator {
    pub fn new() -> Self {
        let primes = vec![2, 3];

        Self {
            primes,
            last: 3,
        }
    }

    pub fn nearest_prime(&mut self, n: u64) -> u64 {
        while self.last < n {
            self.next();
        }

        let idx = self.primes.binary_search(&n).unwrap_or_else(|i| i - 1);

        self.primes[idx]
    }

    fn is_prime(&self, x: u64) -> bool {
        for p in &self.primes {
            if x % p == 0 { return false };
        }

        true
    }
}

impl Iterator for PrimeGenerator {
    type Item = u64;

    fn next(&mut self) -> Option<Self::Item> {
        let mut x = self.last;

        while !self.is_prime(x) {
            x += 2;
        }

        self.last = x;
        self.primes.push(x);
        Some(x)
    }
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn nearest_primes_is_correct() {
        let mut gen = PrimeGenerator::new();

        let p = gen.nearest_prime(100);
        assert_eq!(p, 97);
    }

    #[test]
    fn nearest_prime_can_return_n() {
        let mut gen = PrimeGenerator::new();

        let p = gen.nearest_prime(101);
        assert_eq!(p, 101);
    }
}

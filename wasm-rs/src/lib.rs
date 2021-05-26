use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn demo_main(n: u64) -> u64 {
    let mut ps = vec![2];

    let mut x = 3;

    while x < n {
        ps.push(x);
        x = next_prime(&x, &ps);
    }

    return x;
}


fn next_prime(x: &u64, ps: &Vec<u64>) -> u64 {
    let mut y = *x;
    while !is_prime(&y, &ps) {
        y += 2;
    }
    y
}

fn is_prime(x: &u64, ps: &Vec<u64>) -> bool{
    for p in ps {
        if x % p == 0 { return false };
    }
    true
}



#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

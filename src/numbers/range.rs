#[no_mangle]
pub extern "C" fn sum_range(n: i64) -> i64 {
    (0..=n).sum()
}

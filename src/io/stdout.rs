use std::ffi::CStr;

#[no_mangle]
pub extern "C" fn say_hello(c_name: *const u8) {
    unsafe {
        let name = CStr::from_ptr(c_name as *const i8)
            .to_string_lossy()
            .into_owned();

        println!("Hello, {}!", name);
    };
}

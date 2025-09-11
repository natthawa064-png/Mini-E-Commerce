const form = document.getElementById("registerForm");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // ป้องกันการรีเฟรชหน้า
            let isValid = true;

            // ล้างข้อความ error ก่อน
            document.querySelectorAll(".error").forEach(el => el.textContent = "");

            // ตรวจ Username
            if (username.value.trim() === "") {
                document.getElementById("usernameError").textContent = "กรุณากรอกชื่อผู้ใช้";
                isValid = false;
            }

            // ตรวจ Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(emailPattern)) {
                document.getElementById("emailError").textContent = "อีเมลไม่ถูกต้อง";
                isValid = false;
            }

            // ตรวจ Password
            if (password.value.length < 6) {
                document.getElementById("passwordError").textContent = "รหัสผ่านต้องอย่างน้อย 6 ตัว";
                isValid = false;
            }

            // ตรวจ Confirm Password
            if (password.value !== confirmPassword.value) {
                document.getElementById("confirmPasswordError").textContent = "รหัสผ่านไม่ตรงกัน";
                isValid = false;
            }

            // ถ้าข้อมูลถูกต้อง
            if (isValid) {
                alert("ลงทะเบียนสำเร็จ!");
                form.reset();
            }
        });

        function openlogin() {
            $('#login-e').css('display', 'flex');
        }

        function closelogin() {
            $('#login-e').css('display', 'none');
        }
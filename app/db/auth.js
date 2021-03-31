

const authUser = (phone) => {
    //Send OTP
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = await phoneAuth.verifyPhoneNumber(
        phone, recaptchaVerifier.current
      );
}
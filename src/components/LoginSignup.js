import React, { useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const showMessage = (message, type = 'error') => {
    if (type === 'error') {
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(''), 3000);
    } else {
      setSuccessMessage(message);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    setIsOTPSent(false);
    setIsOtpLogin(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setContact('');
    setOtp('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleForgotPassword = async () => {
    setIsForgotPassword(true);
    setIsOTPSent(false);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(BASE_URL + '/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }
      showMessage('OTP sent to email', 'success');
      setIsOTPSent(true);
    } catch (error) {
      showMessage(error.message);
    }
  };

  const handleSendOTP = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(BASE_URL + '/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }
      showMessage('OTP sent to email', 'success');
      setIsOTPSent(true);
    } catch (error) {
      showMessage(error.message);
    }
  };

  const handleVerifyOTP = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(BASE_URL + '/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'OTP verification failed');
      }
      console.log('OTP verified, token:', data.token);
      showMessage('OTP verified successfully', 'success');
    } catch (error) {
      showMessage(error.message);
    }
  };

  const handleSendLoginOTP = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(BASE_URL + '/send-login-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }
      showMessage('OTP sent to email', 'success');
      setIsOTPSent(true);
    } catch (error) {
      showMessage(error.message);
    }
  };

  const handleLoginWithOTP = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch(BASE_URL + '/login-with-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'OTP login failed');
      }
      console.log('OTP verified, token:', data.token);
      showMessage('OTP login successful', 'success');
    } catch (error) {
      showMessage(error.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    if (!isLogin && password !== confirmPassword) {
      showMessage("Passwords don't match");
      return;
    }
    const url = isLogin ? BASE_URL + '/login' : BASE_URL + '/signup';
    const payload = isLogin
      ? { email, password }
      : { name, email, contact, password };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }
      console.log('Success:', data);
      showMessage('Login successful', 'success');
    } catch (error) {
      showMessage(error.message);
    }
  };

  return (
    <div className="login-signup-form">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {!isForgotPassword ? (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={handleFormSubmit}>
            {!isLogin && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {!isLogin && <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />}
            {!isOtpLogin && (
              <>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {!isLogin && <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />}
              </>
            )}
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <br />
          <button onClick={toggleForm}>
            {isLogin ? 'New User ? signup' : 'Already Registered? Login'}
          </button>
          <button onClick={handleForgotPassword} className="forgot-password-button">
            Forgot Password ?
          </button>
          {isLogin && (
            <>
              <button onClick={() => setIsOtpLogin(!isOtpLogin)} className="otp-login-button">
                {isOtpLogin ? 'Login with Password' : 'Login with OTP'}
              </button>
              {isOtpLogin && (
                <>
                  {!isOTPSent ? (
                    <button onClick={handleSendLoginOTP}>Send OTP</button>
                  ) : (
                    <>
                      <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                      <button onClick={handleLoginWithOTP}>Verify OTP</button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <h2>Reset Your Password</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {isOTPSent ? (
              <>
                <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
              </>
            ) : (
              <button type="button" onClick={handleSendOTP}>Send OTP</button>
            )}
          </form>
        </>
      )}
      {!isForgotPassword && !isOtpLogin && (
        <div className="oauth-login">
          <button>Google</button>
          <button>facebook</button>
          <button>Apple</button>
          <button>GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;

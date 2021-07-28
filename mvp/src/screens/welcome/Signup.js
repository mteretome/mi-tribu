import React from 'react';
import SignupComponent from '../../components/welcome/Signup';
import SignupWrapper from '../../components/wrappers/SignupWrapper';

const SignupPage = () => {
  return (
    <SignupWrapper>
    <SignupComponent />
    </SignupWrapper>
  );
};

export default SignupPage;
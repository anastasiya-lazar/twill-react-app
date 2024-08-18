import { useState } from 'react';

const SignUp = () =>{
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handlePrivacyCheckboxChange = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  const handleSignupButtonClick = (event) => {
    if (!isPrivacyChecked) {
      event.preventDefault();
      alert("Please agree to the Terms and Conditions.");
    }
    // Add your signup logic here
  };

  return (
    <div className="d-block my-4">
      <form
        autoComplete="off"
        className="text-start"
        method="post"
        action="http://127.0.0.1:7891/signup/"
        noValidate
        data-gtm-form-interact-id="0"
      >
        <div className="form-control-wrapper mb-3 mb-md-4">
          <div className="w-100 d-flex align-items-center">
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>
          <input
            className="form-control"
            id="email"
            name="email"
            required
            type="email"
            value=""
            data-gtm-form-interact-field-id="0"
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input cursor-pointer"
            id="privacy"
            name="privacy"
            required
            type="checkbox"
            value="y"
            checked={isPrivacyChecked}
            onChange={handlePrivacyCheckboxChange}
          />
          <label className="form-check-label text-gray-2 label-agree" htmlFor="privacy">
            I agree to the{' '}
            <a className="under-button-link" href="http://127.0.0.1:7891/public/terms/" target="_blank">
              Terms and Conditions
            </a>{' '}
            and consent to the processing of my health data by Twill, Inc. for the provision of the Services.
          </label>
        </div>

        <div className="invalid-feedback" id="oauthClickAgreeWarining">
          Check the box to confirm you have accepted our Terms and Conditions.
        </div>

        <button
          className="mt-3 mt-md-5 w-100 btn btn-primary text-uppercase"
          data-track-click="Signup clicked"
          data-track-params={{
            Community: 'N/A',
            'Community referral': 'False',
            'Signup type': 'Email',
            screen_name: 'Onboarding Signup',
            section: 'Onboarding SignUp/Login',
          }}
          onClick={handleSignupButtonClick}
        >
          SIGN UP WITH EMAIL
        </button>

        <div className="under-button">
          <span className="under-button-text">Already a member? </span>
          <a
            href="http://127.0.0.1:7891/login/?next_url=http%3A%2F%2F127.0.0.1%3A7891%2Fexplore%2F%3Fcommunity%3Dwam"
            data-track-click="Login_clicked"
            data-track-params={{
              screen_name: 'Onboarding Signup',
              section: 'Onboarding SignUp/Login',
            }}
            className="under-button-link"
          >
            Log in
          </a>
        </div>

        <div className="socials-signup d-none">
          <div className="mt-4">
            <div className="hr-block">
              <div className="hr-line"></div>
              <span className="hr-text">or</span>
              <div className="hr-line"></div>
            </div>
          </div>
          <div className="d-grid gap-3 mt-2 mt-md-4" id="oauthButtons">
            <div>
              <a
                className="btn btn-fb w-100 px-0"
                href="http://127.0.0.1:7891/oauth/oauth/begin/facebook/"
                data-track-click="Signup clicked"
                data-track-params={{
                  Community: 'N/A',
                  'Community referral': 'False',
                  'Signup type': 'Facebook',
                  screen_name: 'Onboarding Signup',
                  section: 'Onboarding SignUp/Login',
                }}
              >
                SIGN UP WITH FACEBOOK
              </a>
            </div>
            <div>
              <a
                className="btn btn-apple w-100 px-0"
                href="http://127.0.0.1:7891/oauth/oauth/begin/apple/"
                data-track-click="Signup clicked"
                data-track-params={{
                  Community: 'N/A',
                  'Community referral': 'False',
                  'Signup type': 'Apple',
                  screen_name: 'Onboarding Signup',
                  section: 'Onboarding SignUp/Login',
                }}
              >
                <i className="icon icon-apple"></i>
                SIGN UP WITH APPLE
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
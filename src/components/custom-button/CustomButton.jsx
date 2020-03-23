import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

// const CustomButton = ({ children, ...props }) => {
//   return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
// };
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <div>
      <CustomButtonContainer
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        }  custom-button`}
        {...otherProps}
      >
        {children}
      </CustomButtonContainer>
    </div>
  );
};

export default CustomButton;

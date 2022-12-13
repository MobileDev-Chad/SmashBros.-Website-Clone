import React from "react";

type ButtonProps = {
  width?: string;
  height?: string;
};

const Button = ({ width, height }: ButtonProps) => {
  return (
    <button className="button shine" style={{ width: width, height: height }}>
      Buy Now
    </button>
  );
};

export default Button;

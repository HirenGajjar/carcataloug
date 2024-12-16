"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
function CustomButton({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type={btnType || "Button"}
      className={`custom-btn ${containerStyles}  `}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;

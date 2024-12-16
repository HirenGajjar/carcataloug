"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={() => {}}
      disabled={false}
      type={"button"}
      className="custom-btn"
    >
      <span className={`flex-1`}>Button</span>
    </button>
  );
}

export default CustomButton;

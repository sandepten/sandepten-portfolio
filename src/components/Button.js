import React from "react";

export default function ButtonComponent({
  buttonText,
  handleClick,
  buttonType,
  backgroundColor,
  imageLink,
}) {
  if (buttonType === "primary")
    return (
      <button
        style={{ background: backgroundColor, borderColor: backgroundColor }}
        onClick={handleClick}
        className="flex h-fit w-fit items-center rounded-2xl rounded-tr-[45px] border-4 border-solid border-[#0e0e0e] bg-[#0e0e0e] py-2 px-8 text-xl font-medium tracking-[3.2px] text-white hover:bg-[#8e30ff]"
      >
        <img src={imageLink} className="mr-4 h-8 w-8" alt="" />
        <span>{buttonText}</span>
      </button>
    );
  return (
    <button
      style={{ background: backgroundColor }}
      onClick={handleClick}
      className="create-button font-mono h-[74px] w-[208px] rounded-xl border-4 border-solid border-black text-lg font-bold hover:bg-[#8e30ff] hover:bg-opacity-[0.3]"
    >
      {buttonText}
    </button>
  );
}

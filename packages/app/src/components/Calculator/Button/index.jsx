import { memo, useCallback } from "react";

function Button({ onClick, onClickData, ...props }) {
  const handleClick = useCallback(() => {
    onClick(onClickData);
  }, [onClick, onClickData]);

  return (
    <button
      css={{
        MozAppearance: "none",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "3rem",
        height: "6rem",
        width: "6rem",

        ":hover": {
          backgroundColor: "#ccc",
        },
      }}
      onClick={handleClick}
      type="button"
      {...props}
    />
  );
}

export default memo(Button);

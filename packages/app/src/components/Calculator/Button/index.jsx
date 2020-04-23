import { memo, useCallback } from "react";

function Button({ onClick, onClickData, ...props }) {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(onClickData);
    }
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
        fontSize: "2rem",
        height: "4rem",
        width: "4rem",

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

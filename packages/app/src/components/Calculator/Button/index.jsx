import { memo, useCallback } from "react";

function Button({ onClick, onClickData, ...props }) {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(onClickData);
    }
  }, [onClick, onClickData]);

  return <button css={{ cursor: "pointer" }} onClick={handleClick} type="button" {...props} />;
}

export default memo(Button);

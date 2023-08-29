import React, { useState, useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";
import ReactPortal from "../ReactPortal";

export default function PopupControls({
  children,
  onClose,
  onClick,
  buttonChild,
  isPopupOpen,
  setPopupOpen,
  forceOpen,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (forceOpen && forceOpen === true) {
      setOpen(true);
    } else if (forceOpen && forceOpen === false) {
      setOpen(false);
    }
    return () => {};
  }, [forceOpen]);

  const handler = useCallback(() => {
    if (open) {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    }

    if (open && !isPopupOpen) {
      setOpen(false);
    }
  }, [isPopupOpen, onClose, open]);

  useEffect(() => {
    if (open && !isPopupOpen) {
      setOpen(false);
      setPopupOpen(true);
    }
  }, [isPopupOpen, open, setPopupOpen]);
  useOnClickOutside(ref, handler);

  function onHeaderClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  }

  return (
    <div>
      <div
        className="flex items-center justify-center"
        onMouseDown={() => {
          if (onClick) onClick();
          setOpen(true);
        }}
      >
        {buttonChild}
      </div>
      {open && (
        <ReactPortal wrapperId="react-portal-modal-container">
          <div
            className="fixed flex items-center justify-center w-screen h-screen bg-black bg-opacity-60 z-50 left-0 top-0"
            onClick={(e) => onHeaderClick(e)}
          >
            <div>{children}</div>
          </div>
        </ReactPortal>
      )}
    </div>
  );
}

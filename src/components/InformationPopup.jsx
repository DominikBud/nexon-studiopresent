function InformationPopup({ showPopup, close }) {
  return (
    <>
      {showPopup && (
        <div className="information__popup">
          <a className="close__wrapper" onClick={close}>
            <img
              className="popup__closeicon"
              src="src/assets/close.png"
              alt="close"
            />
          </a>
          <h2>The standard Lorem Ipsum passage</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
      )}
    </>
  );
}

export default InformationPopup;

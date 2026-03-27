import "./Hamburger.scss";
const Hamburger = ({ toggleMobileNavItems }) => {
  return (
    <>
      <div
        className="hamburger-menu-container"
        onClick={() => toggleMobileNavItems((prev) => !prev)}
      >
        <img src="/icons/hamburger.svg" height={28} width={28} />
      </div>
    </>
  );
};
export default Hamburger;

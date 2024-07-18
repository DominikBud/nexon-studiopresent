function DonationsCount({ count, name }) {
  return (
    <div className="donationcount__wrapper">
      <p className="count__text">{count}</p>
      <p className="foundationname__text">{name}</p>
    </div>
  );
}

export default DonationsCount;

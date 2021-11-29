export default function DealRaised (dealObj) {
  let dealRaised = dealObj.deal;
  console.log(dealRaised);

  // add currencies / table

  return (
    <div>
      <h3>Average Deal raised for existing companies:</h3>
      {dealRaised.map((company, index) => (
        <div>
          <li>{company.country}</li>
          <li>{company.avg}</li>
        </div>
      ))}
    </div>
  );
}

export default function DealRaised (dealObj) {
  let dealRaised = dealObj.deal;
  console.log(dealRaised);
  dealRaised.map(dealObj => {
    dealObj.avg = Math.trunc(dealObj.avg*100)/100;
  });

  return (
    <div>
      <h3>Average Deal raised for existing companies by Country</h3>
      <table>
        <tr>
          <th>Average</th>
          <th>Country</th>
        </tr>
        {dealRaised.map((company, index) => (
          <tr>
            <td>{company.avg}</td>
            <td>{company.country}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

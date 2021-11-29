export default function TotalInvestment(totalObj) {
  const totalInvestment = totalObj.valuation;
  return (
    <div>
      <h3>Total investment (valuation) per quarter per year</h3>
      <table>
        <tr>
          <th>Sum</th>
          <th>Quarter</th>
          <th>Year</th>
        </tr>
        {totalInvestment.map((company, index) => (
        <tr>
          <td>{company.sum}</td>
          <td>{company.quarter}</td>
          <td>{company.year}</td>
        </tr>
        ))}
      </table>
    </div>
  );
}

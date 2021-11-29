export default function TotalInvestment(totalObj) {
  const totalInvestment = totalObj.valuation;
  return (
    <div>
      <h3>Total investment (valuation) per quarter per year</h3>
      <table>
          <thead>
            <tr key={250}>
              <th>Sum</th>
              <th>Quarter</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
        {totalInvestment.map((company, index) => (
            <tr key={index}>
              <td>{company.sum}</td>
              <td>{company.quarter}</td>
              <td>{company.year}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EmployeeCount({count}) {
  let countVal = count;
  return (
    <div>
      <h2>Statistics based on existing Company data</h2>
      <p>Average employee count within existing companies</p>
      <input type='text' placeholder={countVal} disabled/>
    </div>
  );
}

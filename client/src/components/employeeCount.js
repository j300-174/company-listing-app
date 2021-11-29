export default function EmployeeCount (countObj) {
  let count = countObj.count;
  console.log(count);
  return (
    <div>
      <h2>Statistics based on existing Company data</h2>
      <p>Average employee count within existing companies</p>
      <p>{count}</p>
    </div>
  );
}

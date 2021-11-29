export default function EmployeeCount({count}) {
  return (
    <div>
      <h3>Average employee count within existing companies</h3>
      <input type='text' placeholder={count} disabled />
    </div>
  );
}

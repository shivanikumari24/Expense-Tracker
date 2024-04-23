import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const Date = props.date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{Date}</div>
    </div>
  );
}

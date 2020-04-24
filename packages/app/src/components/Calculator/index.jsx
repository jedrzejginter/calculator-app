import Button from "./Button";

const inputs = [
  { value: 1, id: 1 },
  { value: 2, id: 2 },
  { value: 3, id: 3 },
  { value: 4, id: 4 },
  { value: 5, id: 5 },
  { value: 6, id: 6 },
  { value: 7, id: 7 },
  { value: 8, id: 8 },
  { value: 9, id: 9 },
  { value: 0, id: 0 },
];

const operations = [
  { operator: "+", id: "Add" },
  { operator: "-", id: "Sub" },
  { operator: "*", id: "Mult" },
  { operator: "/", id: "Div" },
];

/**
 * @typedef {("+"|"-"|"*"|"/")} BinaryOperator
 *
 * Component props.
 * @typedef {Object} Props
 * @property {string} display - Text to display as current user input
 * @property {(string|undefined)} error - Text to display as current user input
 * @property {(operator: BinaryOperator) => void} onOperator - Executed when some operator button
 * is clicked
 * @property {(digit: number) => void} onDigit - Executed when some digit button is clicked
 * @property {() => void} onDot - Executed when decimal separator button is clicked
 * @property {() => void} onClear - Executed when user requests calculator state to be cleared
 * @property {() => void} onSubmit - Executed when user wants to get the result of current operation
 */

/**
 * Component displaying the whole calculator with buttons,
 * input display, result and possible error.
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Calculator({
  display,
  error,
  onOperator,
  onDigit,
  onDot,
  onClear,
  onSubmit,
}) {
  return (
    <div css={{ width: "30rem" }} data-testid="Calculator">
      {error && (
        <p
          css={{ color: "red", fontSize: "1.6rem", padding: "1rem", margin: 0 }}
          data-testid="Calculator_ErrorDisplay"
        >
          {error}
        </p>
      )}
      <div
        css={{ border: "1px solid #000", fontSize: "3rem", padding: "2rem", overflow: "auto" }}
        data-testid="Calculator_ResultDisplay"
      >
        {display}
      </div>
      <div css={{ alignItems: "flex-start", display: "flex" }}>
        <div
          css={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", width: "18rem" }}
        >
          {inputs.map(({ id, value }) => (
            <Button
              data-testid={`Calculator_${id}Btn`}
              key={id}
              onClick={onDigit}
              onClickData={value}
            >
              {value}
            </Button>
          ))}
          <Button data-testid="Calculator_DotBtn" onClick={onDot}>
            .
          </Button>
        </div>
        <div css={{ display: "flex", flexWrap: "wrap", width: "12rem" }}>
          {operations.map(({ id, operator }) => (
            <Button
              data-testid={`Calculator_${id}Btn`}
              key={id}
              onClick={onOperator}
              onClickData={operator}
            >
              {operator}
            </Button>
          ))}
          <Button data-testid="Calculator_EqualBtn" onClick={onSubmit}>
            =
          </Button>
          <Button data-testid="Calculator_ResetBtn" onClick={onClear}>
            CE
          </Button>
        </div>
      </div>
    </div>
  );
}

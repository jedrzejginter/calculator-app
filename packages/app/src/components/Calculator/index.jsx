import Button from "./Button";

export default function Calculator({
  accumulator,
  onOperationCall,
  onDigitCall,
  onReset,
  onSubmit,
}) {
  return (
    <div data-testid="Calculator">
      <pre data-testid="Calculator_ResultDisplay">{accumulator}</pre>
      <div>
        <Button data-testid="Calculator_1Btn" onClick={onDigitCall} onClickData={1}>
          1
        </Button>
        <Button data-testid="Calculator_2Btn" onClick={onDigitCall} onClickData={2}>
          2
        </Button>
        <Button data-testid="Calculator_3Btn" onClick={onDigitCall} onClickData={3}>
          3
        </Button>
        <Button data-testid="Calculator_4Btn" onClick={onDigitCall} onClickData={4}>
          4
        </Button>
        <Button data-testid="Calculator_5Btn" onClick={onDigitCall} onClickData={5}>
          5
        </Button>
        <Button data-testid="Calculator_6Btn" onClick={onDigitCall} onClickData={6}>
          6
        </Button>
        <Button data-testid="Calculator_7Btn" onClick={onDigitCall} onClickData={7}>
          7
        </Button>
        <Button data-testid="Calculator_8Btn" onClick={onDigitCall} onClickData={8}>
          8
        </Button>
        <Button data-testid="Calculator_9Btn" onClick={onDigitCall} onClickData={9}>
          9
        </Button>
      </div>
      <div>
        <Button data-testid="Calculator_AddBtn" onClick={onOperationCall} onClickData="+">
          +
        </Button>
        <Button data-testid="Calculator_SubBtn" onClick={onOperationCall} onClickData="-">
          -
        </Button>
        <Button data-testid="Calculator_MultBtn" onClick={onOperationCall} onClickData="*">
          *
        </Button>
        <Button data-testid="Calculator_DivBtn" onClick={onOperationCall} onClickData="/">
          /
        </Button>
      </div>
      <Button data-testid="Calculator_ResetBtn" onClick={onReset}>
        CA
      </Button>
      <Button data-testid="Calculator_EqualBtn" onClick={onSubmit}>
        =
      </Button>
    </div>
  );
}

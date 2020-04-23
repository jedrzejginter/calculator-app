import Button from "./Button";

export default function Calculator({
  display,
  error,
  onOperationCall,
  onDigitCall,
  onDotCall,
  onReset,
  onSubmit,
}) {
  return (
    <div css={{ width: "20rem" }} data-testid="Calculator">
      {error && (
        <p
          css={{ color: "red", fontSize: "1.6rem", padding: "1rem", margin: 0 }}
          data-testid="Calculator_ErrorDisplay"
        >
          {error}
        </p>
      )}
      <div
        css={{ border: "1px solid #000", fontSize: "2rem", padding: "2rem 1rem", overflow: "auto" }}
        data-testid="Calculator_ResultDisplay"
      >
        {display}
      </div>
      <div css={{ alignItems: "flex-start", display: "flex" }}>
        <div
          css={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", width: "12rem" }}
        >
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
          <Button data-testid="Calculator_0Btn" onClick={onDigitCall} onClickData={0}>
            0
          </Button>
          <Button data-testid="Calculator_DotBtn" onClick={onDotCall}>
            .
          </Button>
        </div>
        <div css={{ display: "flex", flexWrap: "wrap", width: "8rem" }}>
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
          <Button data-testid="Calculator_EqualBtn" onClick={onSubmit}>
            =
          </Button>
          <Button data-testid="Calculator_ResetBtn" onClick={onReset}>
            CA
          </Button>
        </div>
      </div>
    </div>
  );
}

import { z } from "zod";
import { COMP_NAME, CompositionProps } from "../../types/constants";
import { useRendering } from "../helpers/use-rendering";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Field } from "./Field";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";

type Values = z.infer<typeof CompositionProps>;

type Setters = {
  setBrandName: React.Dispatch<React.SetStateAction<string>>;
  setTagline: React.Dispatch<React.SetStateAction<string>>;
  setCanvasColor: React.Dispatch<React.SetStateAction<string>>;
  setInkColor: React.Dispatch<React.SetStateAction<string>>;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  setScene1Text: React.Dispatch<React.SetStateAction<string>>;
  setScene2Text: React.Dispatch<React.SetStateAction<string>>;
  setScene3Text: React.Dispatch<React.SetStateAction<string>>;
  setScene4Text: React.Dispatch<React.SetStateAction<string>>;
};

export const RenderControls: React.FC<{
  values: Values;
  setters: Setters;
  inputProps: Values;
}> = ({ values, setters, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);
  const disabled = state.status === "invoking";

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <div className="grid gap-4 w-full">
            <Field
              label="Brand name"
              value={values.brandName}
              setValue={setters.setBrandName}
              disabled={disabled}
              name="brandName"
            />
            <Field
              label="Tagline"
              value={values.tagline}
              setValue={setters.setTagline}
              disabled={disabled}
              name="tagline"
            />
            <div className="grid grid-cols-3 gap-3">
              <ColorField
                label="Canvas"
                value={values.canvasColor}
                setValue={setters.setCanvasColor}
                disabled={disabled}
                name="canvasColor"
              />
              <ColorField
                label="Ink"
                value={values.inkColor}
                setValue={setters.setInkColor}
                disabled={disabled}
                name="inkColor"
              />
              <ColorField
                label="Accent"
                value={values.accentColor}
                setValue={setters.setAccentColor}
                disabled={disabled}
                name="accentColor"
              />
            </div>
            <Field
              label="Scene 1"
              value={values.scene1Text}
              setValue={setters.setScene1Text}
              disabled={disabled}
              name="scene1Text"
            />
            <Field
              label="Scene 2"
              value={values.scene2Text}
              setValue={setters.setScene2Text}
              disabled={disabled}
              name="scene2Text"
            />
            <Field
              label="Scene 3"
              value={values.scene3Text}
              setValue={setters.setScene3Text}
              disabled={disabled}
              name="scene3Text"
            />
            <Field
              label="Scene 4"
              value={values.scene4Text}
              setValue={setters.setScene4Text}
              disabled={disabled}
              name="scene4Text"
            />
          </div>
          <Spacing />
          <AlignEnd>
            <Button
              disabled={disabled}
              loading={state.status === "invoking"}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message} />
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <ProgressBar
            progress={state.status === "rendering" ? state.progress : 1}
          />
          <Spacing />
          <AlignEnd>
            <DownloadButton undo={undo} state={state} />
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};

const ColorField: React.FC<{
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  name: string;
}> = ({ label, value, setValue, disabled, name }) => {
  return (
    <label className="block w-full">
      <span className="text-xs uppercase tracking-[0.12em] text-unfocused-border-color mb-1.5 block">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="color"
          name={`${name}-picker`}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.currentTarget.value)}
          className="h-10 w-10 shrink-0 cursor-pointer rounded-geist border border-unfocused-border-color bg-background p-0.5"
        />
        <input
          type="text"
          name={name}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.currentTarget.value)}
          className="leading-[1.7] block w-full rounded-geist bg-background p-geist-half text-foreground text-sm border border-unfocused-border-color transition-colors duration-150 ease-in-out focus:border-focused-border-color outline-none font-mono"
        />
      </div>
    </label>
  );
};

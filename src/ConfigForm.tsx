import { form, formGroup } from "./ConfigForm.css";
import useIndicesState from "./useIndicesState";

const ConfigForm = ({
  width,
  height,
  indexWidth,
  fontSize,
  fontWeight,
  indices,
  unit,
  updateState,
}: ReturnType<typeof useIndicesState>) => {
  return (
    <form className={form}>
      <div className={formGroup}>
        <label htmlFor="indices">Indices</label>

        <input
          type="text"
          id="indices"
          name="indices"
          value={indices.join(",")}
          onChange={(event) => {
            const value = event.target.value;
            updateState({
              indices: value.split(","),
            });
          }}
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="unit">Unit</label>

        <select
          id="unit"
          name="unit"
          value={unit}
          onChange={(event) => updateState({ unit: event.target.value })}
        >
          <option value="mm">mm</option>
          <option value="cm">cm</option>
          <option value="in">in</option>
        </select>
      </div>

      <div className={formGroup}>
        <label htmlFor="fontSize">Font Size</label>

        <input
          type="range"
          id="fontSize"
          name="fontSize"
          min="5"
          max="20"
          value={fontSize}
          onChange={(event) =>
            updateState({ fontSize: event.target.valueAsNumber })
          }
        />
        <div>
          {fontSize}
          {unit}
        </div>
      </div>

      <div className={formGroup}>
        <label htmlFor="fontWeight">Font Weight</label>

        <input
          type="range"
          id="fontWeight"
          name="fontWeight"
          min="100"
          max="900"
          step="100"
          value={fontWeight}
          onChange={(event) =>
            updateState({ fontWeight: event.target.valueAsNumber })
          }
        />
        <div>{fontWeight}</div>
      </div>

      <div className={formGroup}>
        <label htmlFor="width">Page Width</label>

        <input
          type="range"
          id="width"
          name="width"
          min="100"
          max="300"
          value={width}
          onChange={(event) =>
            updateState({ width: event.target.valueAsNumber })
          }
        />
        <div>
          {width}
          {unit}
        </div>
      </div>
      <div className={formGroup}>
        <label htmlFor="height">Page Height</label>

        <input
          type="range"
          id="height"
          name="height"
          min="100"
          max="400"
          value={height}
          onChange={(event) =>
            updateState({ height: event.target.valueAsNumber })
          }
        />
        <div>
          {height}
          {unit}
        </div>
      </div>
      <div className={formGroup}>
        <label htmlFor="indexWidth">Index Width</label>

        <input
          type="range"
          id="indexWidth"
          name="indexWidth"
          min="5"
          max="20"
          value={indexWidth}
          onChange={(event) =>
            updateState({ indexWidth: event.target.valueAsNumber })
          }
        />
        <div>
          {indexWidth}
          {unit}
        </div>
      </div>
    </form>
  );
};

export default ConfigForm;

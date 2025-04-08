import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../store/goalSlice';
function GoalForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text" className="label">
            Type your Goal 👇 here
          </label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder='eg. "Learn React"'
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Goal
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;

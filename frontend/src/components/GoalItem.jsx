import { useDispatch } from 'react-redux';
import { deleteGoal } from '../store/goalSlice';
import { toast } from 'react-toastify';

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const handleDeleteGoal = (id) => {
    dispatch(deleteGoal(id));
    toast.success('Goal deleted successfully');
  };
  return (
    <div className="goal">
      <div className="">{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => handleDeleteGoal(goal._id)}>
        X
      </button>
    </div>
  );
}

export default GoalItem;

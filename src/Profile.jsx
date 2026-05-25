import { useDispatch, useSelector } from 'react-redux';
import { write } from './usernameSlice';

function Profile() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);

  const formSubmitHandler = event => {
    event.preventDefault();

    const newUsername = event.target.elements.name.value;
    dispatch(write(newUsername));
  };

  return (
    <section className="profile">
      <h2>Profile Settings</h2>

      <p>
        Update the username below. The value is stored in the global Redux state
        and displayed in the header.
      </p>

      <form className="profile-form" onSubmit={formSubmitHandler}>
        <label htmlFor="name">Username</label>

        <input
          id="name"
          type="text"
          name="name"
          defaultValue={username}
          placeholder="Enter username"
        />

        <button type="submit">Save username</button>
      </form>
    </section>
  );
}

export default Profile;
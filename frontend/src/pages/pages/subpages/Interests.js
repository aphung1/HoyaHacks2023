import "./PersonalInfo.css";

export default function Interest({ formData }) {
  return (
    <div className="personal-info-container">
      <div class="wrapper">
        <h2 for="avatar">Choose a profile picture:</h2>
      </div>
      <br />
      <div class="wrapper">
        <input type="file" accept="image/*" />
      </div>
      <br />
      <br />
      <div class="wrapper">
        <h2>What's your email?</h2>
      </div>

      <div class="wrapper">
        <input type="text" placeholder="Email..." />
      </div>
      <br></br>
      <div class="wrapper">
        <h2>Create a password</h2>
      </div>

      <div class="wrapper">
        <input type="password" placeholder="Password..." />
      </div>
      <br></br>

      <div class="wrapper">
        <h2>Confirm your password</h2>
      </div>

      <div class="wrapper">
        <input type="password" placeholder="Confirm..." />
      </div>
      <br></br>
    </div>
  );
}

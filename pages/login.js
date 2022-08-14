import styles from "./login.module.css";

function Login() {
  const CLIENT_ID = "68060ad6d9c586193684d708d0211d18";
  const REDIRECT_URI = "http://localhost:3000/kakao_oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>
    </>
  );
}

export default Login;

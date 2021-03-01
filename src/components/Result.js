const Result = (props) => {
  const { userFields } = props;
  return (
    <>
      {" "}
      {userFields && (
        <>
          <h3>User Entered Details:</h3>
          <div>First Name: {userFields && userFields.firstName}</div>
          <div>UserName: {userFields && userFields.userName}</div>
          <div>Password: {userFields && userFields.password}</div>
        </>
      )}
    </>
  );
};

export default Result;

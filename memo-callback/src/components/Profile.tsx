import { memo } from "react";

type Props = {
  firstname: string;
  lastname: string;
};

const Profile = memo(({ firstname, lastname }: Props) => {
  console.log("Rendered Profile Component");
  return (
    <div>
      <h2>
        {firstname} {lastname}
      </h2>
    </div>
  );
});

export default Profile;

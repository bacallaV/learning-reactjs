import React from "react";

type UserComponentProps = {
  name: string;
}
function UserComponent({ name }: UserComponentProps) {
  const { isLoading, setIsLoading } = useLoading(false);

  function toggleLoading() {
    setIsLoading(!isLoading);
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <p>Hello, {name} !</p>
      <button type="button" onClick={toggleLoading}>Toggle loading</button>
    </div>
  );
};

export function ParentComponent() {
  return (
    <UserComponent name="Valdo de Luna" />
  )
}

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = React.useState(initialLoading);

  return {
    isLoading,
    setIsLoading,
  }
}
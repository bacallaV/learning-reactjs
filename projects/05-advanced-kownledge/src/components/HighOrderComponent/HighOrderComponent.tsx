import React from 'react'

export function ParentComponent() {
  return (
    <div>
      <UserWithLoading
        isLoading={true}
        name="Valdo de Luna"
      />
      <UserWithLoading
        isLoading={false}
        name="Valdo Herrera"
      />
    </div>
  )
}

type UserComponentProps = {
  name: string;
}
function UserComponent({ name }: UserComponentProps) {
  return (
    <p>Hello, {name}!</p>
  );
}

const UserWithLoading = withLoading(UserComponent);

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;

    return isLoading ? (<p> Loading...</p>) : <Component {...rest as T} />
  }
}
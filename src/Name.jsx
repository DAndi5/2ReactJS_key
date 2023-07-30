import { useEffect } from "react";

export const Name = ({name}) => {
  useEffect(() => {console.log(name)}, [name]);
  return <>{name}</>
}
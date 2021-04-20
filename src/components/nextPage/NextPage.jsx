import s from "./NextPage.module.scss";

export function NextPage({href}) {
  return (
    <div className = {s.NextPage__wrapper}>
      <a className = {s.NextPage} href= {href}>Next Page &gt;</a>
    </div>
    
  )
}
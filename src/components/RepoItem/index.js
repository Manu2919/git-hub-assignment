import './index.css'

const RepoItem = props => {
  const {repoDetails} = props
  const {
    id,
    name,
    description,
    avatarUrl,
    repoName,
    stars,
    issues,
    updatedAt,
    owner,
  } = repoDetails

  return (
    <li className="repo-item onClick={clickItem}">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <div className="card-2">
        <h1 className="repo-name">{repoName}</h1>
        <p className="description">{description}</p>
        <div className="sub-card">
          <button className="stars-btn">{stars}</button>
          <button className="issues-btn">{issues}</button>
          <p className="publish-date">
            Last Pushed {updatedAt} by {name}
          </p>
        </div>
      </div>
    </li>
  )
}
export default RepoItem

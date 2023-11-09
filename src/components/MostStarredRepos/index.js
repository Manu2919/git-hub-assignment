import {Component} from 'react'

import './index.css'
import RepoItem from '../RepoItem'

class MostStarredRepos extends Component {
  state = {
    repos: [],
  }

  componentDidMount() {
    this.getStarredRepos()
  }

  getStarredRepos = async () => {
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-11-22&sort=stars&order=desc'
    const options = {
      method: 'get',
      headers: {
        Authorization: `Bearer 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`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const modifiedData = data.items.map(item => ({
      id: item.id,
      repoName: item.full_name,
      name: item.name,
      description: item.description,
      avatarUrl: item.owner.avatar_url,
      issues: item.open_issues,
      stars: item.stargazers_count,
      updatedAt: item.updated_at,
      login: item.owner.login,
    }))
    console.log(modifiedData)
    this.setState({repos: modifiedData})
  }

  render() {
    const {repos} = this.state
    return (
      <div className="respos-page-container">
        <h1 className="heading">Most Starred Repos</h1>
        <ul className="unorder-list">
          {repos.map(item => (
            <RepoItem repoDetails={item} key={item.id} />
          ))}
        <    /ul>
      </div>
    )
  }
}

export default MostStarredRepos

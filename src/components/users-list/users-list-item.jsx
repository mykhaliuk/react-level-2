import { Avatar } from '../avatar';
import React from 'react';
import './list-item-style.css';

export const UsersListItem = ({ data }) => {
  return (
    <li key={data.id} className="list--item">
      <Avatar src={data.avatar_url} />
      <span>{data.login}</span>
    </li>
  );
};

/* {
 "login": "serch",
 "id": 152663,
 "node_id": "MDQ6VXNlcjE1MjY2Mw==",
 "avatar_url": "https://avatars0.githubusercontent.com/u/152663?v=4",
 "gravatar_id": "",
 "url": "https://api.github.com/users/serch",
 "html_url": "https://github.com/serch",
 "followers_url": "https://api.github.com/users/serch/followers",
 "following_url": "https://api.github.com/users/serch/following{/other_user}",
 "gists_url": "https://api.github.com/users/serch/gists{/gist_id}",
 "starred_url": "https://api.github.com/users/serch/starred{/owner}{/repo}",
 "subscriptions_url": "https://api.github.com/users/serch/subscriptions",
 "organizations_url": "https://api.github.com/users/serch/orgs",
 "repos_url": "https://api.github.com/users/serch/repos",
 "events_url": "https://api.github.com/users/serch/events{/privacy}",
 "received_events_url": "https://api.github.com/users/serch/received_events",
 "type": "User",
 "site_admin": false,
 "score": 1.0
 },*/

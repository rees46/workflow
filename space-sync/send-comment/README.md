# Send comment

## Context example (edit title) 

```ts
const Context = {
  payload: {
    action: 'edited',
    changes: { body: [Object], title: [Object] },
    issue: {
      active_lock_reason: null,
      assignee: null,
      assignees: [],
      author_association: 'CONTRIBUTOR',
      body: '### Описание бага\r\n' +
        '\r\n' +
        'тестовое описание теста\r\n' +
        '\r\n' +
        '### Воспроизведение\r\n' +
        '\r\n' +
        'тестовое воспроизведение\r\n' +
        '\r\n' +
        '### Ожидаемое поведение\r\n' +
        '\r\n' +
        'тестовое ожидание\r\n' +
        '\r\n' +
        '### Материалы\r\n' +
        '\r\n' +
        'тестовый материал\r\n' +
        '\r\n' +
        '### Данные окружения\r\n' +
        '\r\n' +
        'тестовое окружение\r\n' +
        '\r\n' +
        '### Саппорт тикет\r\n' +
        '\r\n' +
        'https://rees46.jetbrains.space/p/pro/issues/112',
      closed_at: null,
      comments: 0,
      comments_url: 'https://api.github.com/repos/rees46/workflow/issues/29/comments',
      created_at: '2024-03-12T09:08:37Z',
      events_url: 'https://api.github.com/repos/rees46/workflow/issues/29/events',
      html_url: 'https://github.com/rees46/workflow/issues/29',
      id: 2181089987,
      labels: [Array],
      labels_url: 'https://api.github.com/repos/rees46/workflow/issues/29/labels{/name}',
      locked: false,
      milestone: null,
      node_id: 'I_kwDOLV3PZM6CAMrD',
      number: 29,
      performed_via_github_app: null,
      reactions: [Object],
      repository_url: 'https://api.github.com/repos/rees46/workflow',
      state: 'open',
      state_reason: null,
      timeline_url: 'https://api.github.com/repos/rees46/workflow/issues/29/timeline',
      title: 'Тест',
      updated_at: '2024-03-12T10:29:58Z',
      url: 'https://api.github.com/repos/rees46/workflow/issues/29',
      user: [Object]
    },
    organization: {
      avatar_url: 'https://avatars.githubusercontent.com/u/6458050?v=4',
      description: 'Marketing automation and personalization platform for eCommerce',
      events_url: 'https://api.github.com/orgs/rees46/events',
      hooks_url: 'https://api.github.com/orgs/rees46/hooks',
      id: 6458050,
      issues_url: 'https://api.github.com/orgs/rees46/issues',
      login: 'rees46',
      members_url: 'https://api.github.com/orgs/rees46/members{/member}',
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjY0NTgwNTA=',
      public_members_url: 'https://api.github.com/orgs/rees46/public_members{/member}',
      repos_url: 'https://api.github.com/orgs/rees46/repos',
      url: 'https://api.github.com/orgs/rees46'
    },
    repository: {
      allow_forking: true,
      archive_url: 'https://api.github.com/repos/rees46/workflow/{archive_format}{/ref}',
      archived: false,
      assignees_url: 'https://api.github.com/repos/rees46/workflow/assignees{/user}',
      blobs_url: 'https://api.github.com/repos/rees46/workflow/git/blobs{/sha}',
      branches_url: 'https://api.github.com/repos/rees46/workflow/branches{/branch}',
      clone_url: 'https://github.com/rees46/workflow.git',
      collaborators_url: 'https://api.github.com/repos/rees46/workflow/collaborators{/collaborator}',
      comments_url: 'https://api.github.com/repos/rees46/workflow/comments{/number}',
      commits_url: 'https://api.github.com/repos/rees46/workflow/commits{/sha}',
      compare_url: 'https://api.github.com/repos/rees46/workflow/compare/{base}...{head}',
      contents_url: 'https://api.github.com/repos/rees46/workflow/contents/{+path}',
      contributors_url: 'https://api.github.com/repos/rees46/workflow/contributors',
      created_at: '2024-02-21T09:30:16Z',
      custom_properties: {},
      default_branch: 'master',
      deployments_url: 'https://api.github.com/repos/rees46/workflow/deployments',
      description: null,
      disabled: false,
      downloads_url: 'https://api.github.com/repos/rees46/workflow/downloads',
      events_url: 'https://api.github.com/repos/rees46/workflow/events',
      fork: false,
      forks: 0,
      forks_count: 0,
      forks_url: 'https://api.github.com/repos/rees46/workflow/forks',
      full_name: 'rees46/workflow',
      git_commits_url: 'https://api.github.com/repos/rees46/workflow/git/commits{/sha}',
      git_refs_url: 'https://api.github.com/repos/rees46/workflow/git/refs{/sha}',
      git_tags_url: 'https://api.github.com/repos/rees46/workflow/git/tags{/sha}',
      git_url: 'git://github.com/rees46/workflow.git',
      has_discussions: false,
      has_downloads: true,
      has_issues: true,
      has_pages: false,
      has_projects: true,
      has_wiki: true,
      homepage: null,
      hooks_url: 'https://api.github.com/repos/rees46/workflow/hooks',
      html_url: 'https://github.com/rees46/workflow',
      id: 761122660,
      is_template: false,
      issue_comment_url: 'https://api.github.com/repos/rees46/workflow/issues/comments{/number}',
      issue_events_url: 'https://api.github.com/repos/rees46/workflow/issues/events{/number}',
      issues_url: 'https://api.github.com/repos/rees46/workflow/issues{/number}',
      keys_url: 'https://api.github.com/repos/rees46/workflow/keys{/key_id}',
      labels_url: 'https://api.github.com/repos/rees46/workflow/labels{/name}',
      language: 'JavaScript',
      languages_url: 'https://api.github.com/repos/rees46/workflow/languages',
      license: null,
      merges_url: 'https://api.github.com/repos/rees46/workflow/merges',
      milestones_url: 'https://api.github.com/repos/rees46/workflow/milestones{/number}',
      mirror_url: null,
      name: 'workflow',
      node_id: 'R_kgDOLV3PZA',
      notifications_url: 'https://api.github.com/repos/rees46/workflow/notifications{?since,all,participating}',
      open_issues: 1,
      open_issues_count: 1,
      owner: [Object],
      private: false,
      pulls_url: 'https://api.github.com/repos/rees46/workflow/pulls{/number}',
      pushed_at: '2024-03-12T10:26:40Z',
      releases_url: 'https://api.github.com/repos/rees46/workflow/releases{/id}',
      size: 75067,
      ssh_url: 'git@github.com:rees46/workflow.git',
      stargazers_count: 0,
      stargazers_url: 'https://api.github.com/repos/rees46/workflow/stargazers',
      statuses_url: 'https://api.github.com/repos/rees46/workflow/statuses/{sha}',
      subscribers_url: 'https://api.github.com/repos/rees46/workflow/subscribers',
      subscription_url: 'https://api.github.com/repos/rees46/workflow/subscription',
      svn_url: 'https://github.com/rees46/workflow',
      tags_url: 'https://api.github.com/repos/rees46/workflow/tags',
      teams_url: 'https://api.github.com/repos/rees46/workflow/teams',
      topics: [],
      trees_url: 'https://api.github.com/repos/rees46/workflow/git/trees{/sha}',
      updated_at: '2024-03-12T09:48:50Z',
      url: 'https://api.github.com/repos/rees46/workflow',
      visibility: 'public',
      watchers: 0,
      watchers_count: 0,
      web_commit_signoff_required: true
    },
    sender: {
      avatar_url: 'https://avatars.githubusercontent.com/u/44067768?v=4',
      events_url: 'https://api.github.com/users/Nelfimov/events{/privacy}',
      followers_url: 'https://api.github.com/users/Nelfimov/followers',
      following_url: 'https://api.github.com/users/Nelfimov/following{/other_user}',
      gists_url: 'https://api.github.com/users/Nelfimov/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/Nelfimov',
      id: 44067768,
      login: 'Nelfimov',
      node_id: 'MDQ6VXNlcjQ0MDY3NzY4',
      organizations_url: 'https://api.github.com/users/Nelfimov/orgs',
      received_events_url: 'https://api.github.com/users/Nelfimov/received_events',
      repos_url: 'https://api.github.com/users/Nelfimov/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/Nelfimov/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Nelfimov/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/Nelfimov'
    }
  },
  eventName: 'issues',
  sha: '39265efd84a4e39966a7e4f3a3f03f9ced59fdc4',
  ref: 'refs/heads/master',
  workflow: 'Sync issue',
  action: '__rees46_workflow',
  actor: 'Nelfimov',
  job: 'run',
  runNumber: 11,
  runId: 8247302219,
  apiUrl: 'https://api.github.com',
  serverUrl: 'https://github.com',
  graphqlUrl: 'https://api.github.com/graphql'
}
```

## Context example (edit body)

No response

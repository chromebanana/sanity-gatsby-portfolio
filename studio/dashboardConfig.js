export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa434bc262b050fd8ac3216',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t1xhk8j8',
                  apiId: '333ef838-36be-4f10-be20-45bc6546bc14'
                },
                {
                  buildHookId: '5fa434bd97996b09ba5c783e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1w5qqxfj',
                  apiId: '34dc9c8e-1fdc-4a79-b9b3-0c65923dfcb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chromebanana/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1w5qqxfj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

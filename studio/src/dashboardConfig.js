export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60707dfafa22a40e264a9fe6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yn3zsa51",
                  apiId: "81aca50f-7957-4e8f-881a-03a9b18ac392",
                },
                {
                  buildHookId: "60707dfb3f6fe90d6d30af56",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-nxvtqy7b",
                  apiId: "11ce1077-4859-409e-9190-3e2d59f37058",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mattlegresley/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-nxvtqy7b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

# Markdown Blog with Remote MDX

## Creating new posts

Each post is a .mdx file in the **root** of a separate repo.

### Frontmatter

Each post must have a frontmatter section at the top of the file. This is a YAML section between two sets of three dashes. The frontmatter must contain the following fields:

```yaml
---
title: "My Post Title"
date: "2023-05-21"
tags: ["tag1", "tag2"]
---
```

see:

- @/lib/posts.ts

### Custom Images

Images can be saved in the same repo as the posts, in an images folder.

To use an image in a post, use the following syntax in your mdx:

```md
<CustomImage src="https://raw.githubusercontent.com/<github-user-name>/<github-repo-name>/main/images/example.png" alt="image-description">
```

Optionally, you can add priority to the image, see: [docs](https://nextjs.org/docs/app/building-your-application/optimizing/images#priority).

see:

- @/app/components/CustomImage.tsx
- @/lib/posts.ts

### Video

Videos can be saved on YouTube.
To obtain the video ID, look at the URL of the video, it will be the part after `v=`.

To use a video in a post, use the following syntax in your mdx:

```md
<Video id="<some-youtube-video-id>" />
```

see:

- @/app/components/Video.tsx
- @/lib/posts.ts

## Revalidation

The Background Revalidation (ISR) is set to 1 day.
However, it is possible to use On-demand Revalidation after changing the posts.
To do this, simply send a GET request to the following endpoint:

```bash
https://<your-domain>/api/revalidate?path=/&token=<your-revalidation-token>
```

see:

- @/app/api/revalidate/route.ts

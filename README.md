# Artlex Community Blog

## Getting up and running

There are two directories for this project: 

* `artlex-frontend` - Next.js frontend for the blog
* `studio` - Sanity Studio for content editing

### Running the front-end

Inside the `artlex-frontend` directory, you'll need to create a `.env.local` file to store a few environment variables that Next will use to pull data from the Sanity API.

```js
NEXT_PUBLIC_SANITY_PROJECT_ID="project-id-from manage.sanity.io"
SANITY_API_TOKEN="API-TOKEN-FROM MANAGE.SANITY.IO"
SANITY_PREVIEW_SECRET="Preview-secret-for-live-preview"
```

Once those env variables are ready, you can run the following commands to get Next's development server up and running:

```bash
cd artlex-frontend

npm install

npm run dev
```

The blog will be running at `http://localhost:3000`

### Running Sanity Studio

To run the Sanity Studio locally, you'll need to run the following commands:

First install the Sanity CLI: `npm install -g @sanity/cli`.

```bash
# From the project root
cd studio

npm install

# Sanity init will let you reconfigure the Studio to use your project ID and dataset
sanity init

sanity start
```

The Studio will be running at `http://localhost:3333`
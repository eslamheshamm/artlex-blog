export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        // add a button to generate slug from the title field
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}

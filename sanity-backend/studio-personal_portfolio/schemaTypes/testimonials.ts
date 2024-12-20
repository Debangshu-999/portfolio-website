import {defineField, defineType} from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    }),
  ],
})

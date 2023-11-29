import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'siteTitle',
    title: 'Site Title',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subTitle',
            title: 'Sub Title',
            type: 'text',
        }),
    ],
})

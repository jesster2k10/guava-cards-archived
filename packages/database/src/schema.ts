import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'decks',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'emoji', type: 'string', isOptional: true},
        {name: 'detail', type: 'string', isOptional: true},
        {name: 'position', type: 'number'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'cards',
      columns: [
        {name: 'card_type', type: 'string'},
        {name: 'content_front', type: 'string'},
        {name: 'content_back', type: 'string', isOptional: true},
        {name: 'content_additional', type: 'string', isOptional: true},
        {name: 'is_list_randomized', type: 'boolean', isOptional: true},
        {name: 'deck_id', type: 'string'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'card_list_items',
      columns: [
        {name: 'card_id', type: 'string'},
        {name: 'position', type: 'number'},
        {name: 'content', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'card_tags',
      columns: [
        {name: 'card_id', type: 'string'},
        {name: 'tag_id', type: 'string'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'tags',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'color', type: 'string', isOptional: true},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
  ],
});

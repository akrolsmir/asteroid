import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    email: text('email'),
    bio: text('bio'),
    verified: boolean('verified').default(false),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (user) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(user.email),
    }
  },
)

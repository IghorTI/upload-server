import { drizzle } from 'drizzle-orm/postgres-js'
import postgress from 'postgres'
import { env } from '@/env'
import { schema } from './schemas'

export const pg = postgress(env.DATABASE_URL)
export const db = drizzle(pg, { schema })

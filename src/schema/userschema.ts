import { Entity, Schema } from "redis-om"

interface User {
    password: string,
    email: string,
    score: number
}

class User extends Entity { }

export const userSchema = new Schema(User, {
    password: { type: 'string' },
    email: { type: 'string' },
    score: {
        type: 'number', sortable: true
    }
}, {
    dataStructure: "JSON"
})
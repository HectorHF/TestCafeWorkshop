import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USERNAM,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME: 'another_user',
        PASSWORD: 'another_password'
    }
}
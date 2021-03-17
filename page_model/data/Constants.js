import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USERS: {
        USERNAMES: [
            process.env.STANDARD_USERNAME,
            process.env.PROBLEM_USERNAME,
            process.env.PERFORMANCE_GLITCH_USERNAME
        ],
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USERS: {
        USERNAMES: [
            process.env.LOCKED_OUT_USER,
            '',
            'another_user'],
        PASSWORDS: [
            'secret_sauce',
            'another_password',
            ''
        ]
    }
}

export const LOGIN_ERROR_MESSAGES = {
    ERROR_MESSAGES: [
        'Epic sadface: Sorry, this user has been locked out.',
        'Epic sadface: Username and password do not match any user in this service',
        'Epic sadface: Password is required',
        'Epic sadface: Username is required',
        'Epic sadface: Username is required',
        'Epic sadface: Username is required',
        'Epic sadface: Username and password do not match any user in this service',
        'Epic sadface: Username and password do not match any user in this service',
        'Epic sadface: Password is required',
    ]
}

export const CHECKOUTINFO = {
    VALID_CHECKOUTINFO: {
        FIRSTNAME: 'John',
        LASTNAME: 'Doe',
        POSTALCODE: '12345'
    },
    INVALID_CHECKOUTINFO: {
        FIRSTNAMES: [
            '',
            'John'
        ],
        LASTNAMES: [
            '',
            'Doe'
        ],
        POSTALCODES: [
            '',
            '12345'
        ]
    }
}

export const CHECKOUT_ERROR_MESSAGES = {
    ERROR_MESSAGES: [
        'Error: First Name is required',
        'Error: First Name is required',
        'Error: First Name is required',
        'Error: First Name is required',
        'Error: Last Name is required',
        'Error: Last Name is required',
        'Error: Postal Code is required',
    ]
}
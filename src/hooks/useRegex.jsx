import React from 'react'

const UseRegex = () => {
    
    const validName = new RegExp("^(?=.*[a-zA-Z])[a-zA-Z]{4,}$");
    const validNameNumber = new RegExp('^(?=.*\d)(?=.*[a-zA-Z])[\d\w]{1,}$')
    const validEmail = new RegExp("")
    const validPassword = new RegExp('^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)[\d\w\W]{8,}$')

    return {
        validName,validNameNumber,validEmail,validPassword
    }
}

export default UseRegex

const globalLightStyle = {
    body: {
        backgroundColor: 'white',
        color: 'black',
        margin: 0,
        padding: 0,
    },
}

const globalDarkStyle = {
    body: {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        padding: 0,
    },
}

const getGlobalStyle = (darkMode: boolean) => (darkMode ? globalDarkStyle : globalLightStyle)

export default getGlobalStyle
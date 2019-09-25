const config = {
    headers: {
        access_token: null,
    }
};

function setAccessToken(token) {
    config.headers.access_token = token;
}

export {
    setAccessToken
};
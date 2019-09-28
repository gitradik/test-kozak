const config = {
    headers: {
        access_token: null,
        skip: 0,
        limit: 5,
        workerId: null,
    }
};

function setAccessToken(token) {
    config.headers.access_token = token;
}

function setSkip(skip) {
    config.headers.skip = skip;
}

function getSkip() {
    return config.headers.skip;
}

function getLimit() {
    return config.headers.limit;
}

function setWorkerId(id) {
    config.headers.workerId = id;
}

export {
    config,
    setAccessToken,
    setSkip,
    getLimit,
    getSkip,
    setWorkerId,
};
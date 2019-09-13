function orderAvailability(_checked, _client) {
    return response = {
        status: _checked,
        client: _client,
    }
}

function disponibility(_available, _ordered) {
    return (_available >= _ordered)
}

module.exports = {
    orderAvailability,
    disponibility
}
const url_base = 'http://localhost:3100';

export const _fetch = (endpoint, data={}, method='GET') => {

    const url = `${url_base}${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
}
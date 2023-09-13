async function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                })
            },
            (err) => {
                reject(err);
            }
        );
    });
}

async function getMyCity() {
    try {
        const { latitude, longitude } = await getMyCoordinates();
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data)
    } catch(e) {
        console.error(e)
    }
}
getMyCity();

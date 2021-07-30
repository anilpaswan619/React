export default async location => {
    try {
        const result = await fetch(
            `http://api.weatherapi.com/v1/sports.json?key=f83519d24eb24d0abe5125304212707&q=India${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        );

        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};
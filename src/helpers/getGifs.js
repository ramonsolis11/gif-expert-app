export const getGifs = async (category, limit = 10) => {
    const apiKey = process.env.GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=${limit}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch GIFs');
        }
        const { data } = await response.json();
        return data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        return []; // Return an empty array to indicate failure
    }
};

export const getRandomTimer = (min= 1, max = 4) => {
    const randomFloat = min + Math.random() * (max + 1 - min);
    return Math.floor(randomFloat) * 1000;
}
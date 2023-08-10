function generateUniqueId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2, 11);

    const uniqueId = `${timestamp}${random}`;
    return uniqueId;
}
export default generateUniqueId;

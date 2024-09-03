export const convertRawToString = (labelValue, isSub = false) => {
    console.log(labelValue);

    const num = Math.abs(Number(labelValue));

    if (num >= 1.0e9) {
        return (num / 1.0e9).toFixed(isSub ? 2 : 0) + "B";  // e.g., 1500000000 -> 1.50B
    }
    if (num >= 1.0e6) {
        return (num / 1.0e6).toFixed(isSub ? 2 : 0) + "M";  // e.g., 1500000 -> 1.50M
    }
    if (num >= 1.0e3) {
        return (num / 1.0e3).toFixed(isSub ? 2 : 0) + "K";  // e.g., 1500 -> 1.50K
    }

    return num.toString();
};

const dateTime = (date = Date.now()) => {
    const newDate = new Date(date);

    const day = newDate.getDate();
    const month = newDate.toLocaleString("en-US", { month: "short" });
    const year = newDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    const formattedTime = newDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true
    });

    return {
        date: formattedDate,
        time: formattedTime
    };
};

export default dateTime;

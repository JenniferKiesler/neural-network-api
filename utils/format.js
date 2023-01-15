const formatDate = (date) => {
    console.log(date)
    // let month = date.getMonth() + 1

    // if (month === 1) {
    //     month = 'Jan'
    // }
    const dateString = date.toDateString()
    const time = new Intl.DateTimeFormat('en-US', {
        hour12: true,
        // dayPeriod: 'short'
        timeStyle: 'short'
    }).format(date)

    return `${dateString}`
}

module.exports = { formatDate }
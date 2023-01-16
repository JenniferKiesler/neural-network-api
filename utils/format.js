const formatDate = (date) => {
    let formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date)

    let formattedTime = new Intl.DateTimeFormat('en-US', {
        timeStyle: 'short',
        hour12: true,
    }).format(date)
    
    return `${formattedDate} at ${formattedTime}`
}

module.exports = { formatDate }
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');

    // Sample data for array methods
    const sportsEvents = [
        { date: '2023-01-01', event: 'Football Match', location: 'Stadium A' },
        { date: '2023-02-15', event: 'Basketball Game', location: 'Stadium B' },
        { date: '2023-03-10', event: 'Tennis Tournament', location: 'Stadium C' }
    ];

    // forEach method
    sportsEvents.forEach(event => {
        console.log(`Event: ${event.event}, Location: ${event.location}`);
    });

    // map method
    const eventNames = sportsEvents.map(event => event.event);
    console.log(`Event Names: ${eventNames.join(', ')}`);

    // filter method
    const upcomingEvents = sportsEvents.filter(event => new Date(event.date) > new Date());
    console.log('Upcoming Events:', upcomingEvents);

    // reduce method
    const totalEvents = sportsEvents.reduce((total, event) => total + 1, 0);
    console.log(`Total Events: ${totalEvents}`);

    // Spread operator with array literals
    const additionalEvents = [
        { date: '2023-04-05', event: 'Golf Tournament', location: 'Golf Course' },
        { date: '2023-05-20', event: 'Running Marathon', location: 'City Streets' }
    ];

    const combinedEvents = [...sportsEvents, ...additionalEvents];
    console.log('Combined Events:', combinedEvents);

    // Spread with objects
    const newEvent = { date: '2023-06-15', event: 'Swimming Competition', location: 'Indoor Pool' };
    const updatedEvents = [...sportsEvents, newEvent];
    console.log('Updated Events:', updatedEvents);

    // Rest params
    function logEvents(...events) {
        events.forEach(event => {
            console.log(`Logged Event: ${event.event}`);
        });
    }

    logEvents(...sportsEvents);
});

import React from 'react'

const ActivityDescription = () => {
    return (
        <div className="bg-chalk rounded-lg p-8">
            <h2 className="pb-4">Attendees</h2>
            <ul>
                <AttendeeRow />
            </ul>
        </div>
    )
}

export default ActivityDescription

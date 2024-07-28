import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventAdmin = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        hrs: '',
        type: '',
        photo: '',
        description: '',
        volunteersRequired: '',
        dateTime: '',
        location: ''
    });
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [action, setAction] = useState('add'); // 'add', 'view', 'update', 'delete'
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/events/all');
                setEvents(res.data);
            } catch (error) {
                setError('Failed to fetch events');
            }
        };
        fetchEvents();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectEvent = (e) => {
        const eventId = e.target.value;
        const event = events.find(event => event._id === eventId);
        setSelectedEvent(event);
        setFormData(event);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (action === 'add') {
                res = await axios.post('http://localhost:3000/api/events/add', formData);
            } else if (action === 'update' && selectedEvent) {
                res = await axios.put(`http://localhost:3000/api/events/update/${selectedEvent._id}`, formData);
            } else if (action === 'delete' && selectedEvent) {
                res = await axios.delete(`http://localhost:3000/api/events/delete/${selectedEvent._id}`);
            }
            if (res.status === 201 || res.status === 200) {
                setError('');
                navigate('/admin');
            }
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div className="h-full w-full p-8">
            <h2 className="mb-4 text-xl font-semibold">Event Management</h2>
            <div className="mb-4 space-x-4">
                <button onClick={() => setAction('add')} className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Add Event
                </button>
                <button onClick={() => setAction('view')} className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                    View Events
                </button>
                <button onClick={() => setAction('update')} className="rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
                    Update Event
                </button>
                <button onClick={() => setAction('delete')} className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    Delete Event
                </button>
            </div>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            {action === 'view' && (
                <div>
                    <h3 className="mb-4 text-lg font-semibold">View Events</h3>
                    <ul className="list-disc pl-5">
                        {events.map(event => (
                            <li key={event._id}>
                                {event.title} - {event.dateTime} - {event.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {(action === 'add' || action === 'update' || action === 'delete') && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {action !== 'add' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Event</label>
                            <select
                                onChange={handleSelectEvent}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            >
                                <option value="">Select an event</option>
                                {events.map(event => (
                                    <option key={event._id} value={event._id}>
                                        {event.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {action !== 'delete' && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Hours</label>
                                <input
                                    type="number"
                                    name="hrs"
                                    value={formData.hrs}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Volunteers Required</label>
                                <input
                                    type="number"
                                    name="volunteersRequired"
                                    value={formData.volunteersRequired}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date and Time</label>
                                <input
                                    type="datetime-local"
                                    name="dateTime"
                                    value={formData.dateTime}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            {action === 'add' && 'Add Event'}
                            {action === 'update' && 'Update Event'}
                            {action === 'delete' && 'Delete Event'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default EventAdmin;

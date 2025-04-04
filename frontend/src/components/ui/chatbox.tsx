import React, { useState, useEffect } from 'react';

interface ModalProps {
    onClose: () => void;
}

interface Message {
    sender: boolean;
    text: string;
    timestamp: string;
}

interface User {
    name: string;
    messages: Message[];
}

const initialUsers: User[] = [
    {
        name: 'gatorfan2231',
        messages: [
            { sender: true, text: 'Go Gators! 🐊 Ready to buy?', timestamp: '10:00 AM' },
            { sender: false, text: 'I need more time to think thx!', timestamp: '10:02 AM' }
        ]
    },
    {
        name: 'DjLagway382',
        messages: [
            { sender: true, text: 'Lagway MVP incoming.', timestamp: '11:15 AM' },
            { sender: true, text: 'gunna need to buy a jersey!!!', timestamp: '11:15 AM' }
        ]
    },
    {
        name: 'chadsmith1999',
        messages: [
            { sender: false, text: 'Still interested?', timestamp: '12:30 PM' },
            { sender: true, text: 'Yeah when can we meetup???', timestamp: '12:32 PM' }
        ]
    },
    {
        name: 'marstondemon2003',
        messages: [
            { sender: true, text: 'Thanks for the shirt bro, it looks great!', timestamp: '2:00 AM' },
            { sender: false, text: 'np', timestamp: '2:01 AM' }
        ]
    }
];

const Modal: React.FC<ModalProps> = ({ onClose, newUser }) => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [selectedUserIndex, setSelectedUserIndex] = useState(0);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const newMessage: User = {
            name: newUser, 
            messages: []
        }
        if(newUser !== null) {
            const temp = [newMessage];
            setUsers(users => [...users, newMessage]);
        }
    }, [newUser])
    

    const selectedUser = users[selectedUserIndex];

    const handleSend = () => {
        if (!inputText.trim()) return;

        const newMessage: Message = {
            sender: false,
            text: inputText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const updatedUsers = [...users];
        updatedUsers[selectedUserIndex] = {
            ...selectedUser,
            messages: [...selectedUser.messages, newMessage]
        };

        setUsers(updatedUsers);
        setInputText('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg relative w-[48rem] max-w-full h-[36rem] flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl hover:cursor-pointer"
                >
                    &times;
                </button>

                <h2 className="text-xl font-bold mb-4 underline">Inbox</h2>

                <div className="flex flex-grow overflow-hidden">
                    {/* User list */}
                    <div className="w-1/3 border-r border-gray-300 overflow-y-auto">
                        {users.map((user, index) => (
                            <p
                                // key={user.name}
                                onClick={() => setSelectedUserIndex(index)}
                                className={`px-4 py-2 border-y border-blue-900 hover:bg-blue-100 hover:cursor-pointer ${selectedUserIndex === index ? 'bg-slate-200 font-bold' : ''
                                    }`}
                            >
                                {user.name}
                            </p>
                        ))}
                    </div>

                    {/* Chat panel */}
                    <div className="w-2/3 flex flex-col justify-between">
                        <div className="overflow-y-auto flex-grow px-2">
                            {selectedUser.messages.map((msg, idx) => (
                                <div
                                    // key={idx}
                                    className={`flex flex-col ${msg.sender ? 'items-start' : 'items-end'
                                        } mb-3`}
                                >
                                    <div className="bg-blue-100 px-3 py-2 rounded-lg max-w-xs">
                                        {msg.text}
                                    </div>
                                    <span className="text-xs text-gray-500 mt-1">{msg.timestamp}</span>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="mt-2 flex gap-2 border-t pt-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Type a message..."
                                className="flex-grow px-3 py-2 border rounded-md"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Chatbox = ({newUser}) => { //messageUser will be used from the BrowsePage if a user tries to message the owner of a listing
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="btn btn-primary bg-blue-800 hover:cursor-pointer rounded-2xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-10 hover:stroke-orange-500 transition duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
            </button>

            {isOpen && <Modal newUser={newUser} onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default Chatbox;
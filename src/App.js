// import React, { useState } from 'react';
// import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';
// import Picker from 'emoji-picker-react';

// const ChatApp = () => {
//   const [message, setMessage] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [file, setFile] = useState(null);

//   const handleEmojiClick = (event, emojiObject) => {
//     setMessage((prev) => prev + emojiObject.emoji);
//     setShowEmojiPicker(false);
//   };

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       setChatHistory([...chatHistory, { text: message, sender: 'user', file }]);
//       setMessage('');
//       setFile(null); // Clear file after sending message
//     }
//   };

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//   };

//   return (
//     <div className="h-screen flex flex-col bg-blue-50">
//       {/* Chat Header */}
//       <header className="flex items-center justify-between p-4 bg-blue-100 border-b border-blue-300">
//         <h2 className="text-lg font-bold text-blue-900">Chat</h2>
//       </header>

//       {/* Chat Messages */}
//       <div className="flex-1 p-4 overflow-y-auto">
//         {chatHistory.length === 0 ? (
//           <div className="text-center text-blue-600">Start a conversation...</div>
//         ) : (
//           <div className="space-y-3">
//             {chatHistory.map((message, index) => (
//               <div
//                 key={index}
//                 className={`p-3 rounded-lg text-white ${
//                   message.sender === 'user' ? 'bg-blue-600 ml-auto' : 'bg-blue-300 mr-auto'
//                 } w-fit max-w-xs`}
//               >
//                 {message.text}
//                 {message.file && (
//                   <div className="mt-2 text-sm text-blue-200">
//                     File: {message.file.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Chat Input */}
//       <footer className="p-4 border-t border-blue-300 bg-blue-50 flex items-center">
//         <div className="relative flex items-center">
//           {/* Emoji Button */}
//           <button
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//             className="text-blue-600 hover:text-blue-800 text-2xl"
//           >
//             <FaSmile />
//           </button>

//           {/* File Attachment Button */}
//           <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:text-blue-800 text-2xl ml-4">
//             <FaPaperclip />
//           </label>
//           <input
//             type="file"
//             id="file-upload"
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           {/* Emoji Picker */}
//           {showEmojiPicker && (
//             <div className="absolute bottom-12 left-0 z-10">
//               <Picker onEmojiClick={handleEmojiClick} />
//             </div>
//           )}
//         </div>

//         {/* Message Input */}
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 mx-2 p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//         />

//         {/* Send Button */}
//         <button
//           onClick={handleSendMessage}
//           className="text-blue-600 hover:text-blue-800 text-2xl"
//         >
//           <FaPaperPlane />
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default ChatApp;






// import React, { useState } from 'react';
// import { FaBell, FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa';
// import Picker from 'emoji-picker-react';

// const ChatPage = () => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [message, setMessage] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [chatData, setChatData] = useState([
//     { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', unread: 2 },
//     { id: 2, name: 'Jane Smith', lastMessage: 'Are we still meeting today?', unread: 5 },
//     { id: 3, name: 'Alice Johnson', lastMessage: 'See you at 3 PM!', unread: 0 },
//   ]);
//   const [file, setFile] = useState(null);

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     if (window.innerWidth < 768) {
//       setIsMobileView(true);
//     }
//     setChatData((prevData) =>
//       prevData.map((item) =>
//         item.id === chat.id ? { ...item, unread: 0 } : item
//       )
//     );
//   };

//   const handleBack = () => {
//     setIsMobileView(false);
//   };

//   const handleEmojiClick = (event, emojiObject) => {
//     setMessage((prev) => prev + emojiObject.emoji);
//     setShowEmojiPicker(false);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() || file) {
//       console.log(`Message sent to ${selectedChat.name}: ${message}`);
//       // Optionally handle file sending here
//       setMessage('');
//       setFile(null); // Clear file after sending message
//     }
//   };

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//   };

//   return (
//     <div className="h-screen flex">
//       {/* Chat List */}
//       <div
//         className={`${
//           isMobileView ? 'hidden' : 'block'
//         } md:block w-full md:w-1/3 border-r border-blue-300   bg-blue-50`}
//       >
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-bold text-blue-800">Chats</h2>
//             <FaBell className="text-blue-600 text-xl cursor-pointer hover:text-blue-800" />
//           </div>
//           <ul className="space-y-2">
//             {chatData.map((chat) => (
//               <li
//                 key={chat.id}
//                 className="relative p-3 bg-white shadow rounded-lg cursor-pointer hover:bg-blue-100 transition"
//                 onClick={() => handleSelectChat(chat)}
//               >
//                 <h3 className="text-md font-medium text-blue-900">{chat.name}</h3>
//                 <p className="text-sm text-blue-600">{chat.lastMessage}</p>
//                 {chat.unread > 0 && (
//                   <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                     {chat.unread}
//                   </span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Chat Window */}
//       <div
//         className={`${
//           isMobileView ? 'block' : 'hidden'
//         } w-full md:block flex-1 bg-white`}
//       >
//         {selectedChat ? (
//           <div className="flex flex-col h-full">
//             <header className="flex items-center justify-between p-4 bg-blue-100 border-b border-blue-300">
//               <button
//                 className="md:hidden text-blue-600 hover:text-blue-800"
//                 onClick={handleBack}
//               >
//                 Back
//               </button>
//               <h2 className="text-lg font-bold text-blue-900">{selectedChat.name}</h2>
//             </header>
//             <div className="flex-1 p-4 overflow-y-auto bg-blue-50">
//               <p className="text-sm text-blue-700">
//                 Chat with {selectedChat.name} here...
//               </p>
//             </div>
//             <footer className="p-4 border-t border-blue-300 bg-blue-50 flex items-center">
//               <div className="relative flex items-center">
//                 {/* Emoji Button */}
//                 <button
//                   onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//                   className="text-blue-600 hover:text-blue-800 text-2xl"
//                 >
//                   <FaSmile />
//                 </button>

//                 {/* File Attachment Button */}
//                 <label
//                   htmlFor="file-upload"
//                   className="cursor-pointer text-blue-600 hover:text-blue-800 text-2xl ml-4"
//                 >
//                   <FaPaperclip />
//                 </label>
//                 <input
//                   type="file"
//                   id="file-upload"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />

//                 {/* Emoji Picker */}
//                 {showEmojiPicker && (
//                   <div className="absolute bottom-12 left-0 z-10">
//                     <Picker onEmojiClick={handleEmojiClick} />
//                   </div>
//                 )}
//               </div>

//               {/* Message Input */}
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 mx-2 p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               />

//               {/* Send Button */}
//               <button
//                 onClick={handleSendMessage}
//                 className="text-blue-600 hover:text-blue-800 text-2xl"
//               >
//                 <FaPaperPlane />
//               </button>
//             </footer>
//           </div>
//         ) : (
//           <div className="flex items-center justify-center h-full text-blue-600">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatPage;










// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const ExcelExportAndUpload = () => {
//   const [tableData, setTableData] = useState([
//     { tabletName: 'Tablet A', deskno: 'D001', mfgDate: '2023-01-01', expDate: '2025-01-01', noOfSets: 10 },
//     { tabletName: 'Tablet B', deskno: 'D002', mfgDate: '2023-05-01', expDate: '2026-05-01', noOfSets: 15 },
//     { tabletName: 'Tablet C', deskno: 'D003', mfgDate: '2023-08-01', expDate: '2027-08-01', noOfSets: 20 },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [newRow, setNewRow] = useState({
//     tabletName: '',
//     deskno: '',
//     mfgDate: '',
//     expDate: '',
//     noOfSets: '',
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   const handleNewRowChange = (e) => {
//     const { name, value } = e.target;
//     setNewRow((prevRow) => ({
//       ...prevRow,
//       [name]: value,
//     }));
//   };

//   const handleSaveNewRow = () => {
//     if (
//       newRow.tabletName &&
//       newRow.deskno &&
//       newRow.mfgDate &&
//       newRow.expDate &&
//       newRow.noOfSets
//     ) {
//       if (editingIndex !== null) {
//         setTableData((prevData) => {
//           const updatedData = [...prevData];
//           updatedData[editingIndex] = newRow;
//           return updatedData;
//         });
//       } else {
//         setTableData((prevData) => [...prevData, newRow]);
//       }
//       setNewRow({
//         tabletName: '',
//         deskno: '',
//         mfgDate: '',
//         expDate: '',
//         noOfSets: '',
//       });
//       setEditingIndex(null);
//       setIsModalOpen(false);
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   const handleDeleteRow = () => {
//     setTableData((prevData) => prevData.filter((_, i) => i !== deleteIndex));
//     setDeleteIndex(null);
//     setIsDeletePopupOpen(false);
//   };

//   const handleEditRow = (index) => {
//     setNewRow(tableData[index]);
//     setEditingIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const filteredData = tableData.filter((row) =>
//     row.tabletName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   return (
//     <div className="p-6 bg-blue-50 min-h-screen flex flex-col items-center">
//       {/* Search and Add Button */}
//       <div className="mb-6 w-full flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search by Tablet Name"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="text-blue-600 py-2 px-4 border border-blue-300 rounded-md w-1/3"
//         />
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center"
//         >
//           <FaPlus className="mr-2" /> Add New
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-3 px-4 text-left">Tablet Name</th>
//               <th className="py-3 px-4 text-left">Desk No</th>
//               <th className="py-3 px-4 text-left">Mfg Date</th>
//               <th className="py-3 px-4 text-left">Exp Date</th>
//               <th className="py-3 px-4 text-left">No of Sets</th>
//               <th className="py-3 px-4 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentRows.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-blue-600">
//                   No data available
//                 </td>
//               </tr>
//             ) : (
//               currentRows.map((row, index) => (
//                 <tr key={index} className="border-t hover:bg-gray-100">
//                   <td className="py-3 px-4">{row.tabletName}</td>
//                   <td className="py-3 px-4">{row.deskno}</td>
//                   <td className="py-3 px-4">{row.mfgDate}</td>
//                   <td className="py-3 px-4">{row.expDate}</td>
//                   <td className="py-3 px-4">{row.noOfSets}</td>
//                   <td className="py-3 px-4 flex items-center">
//                     <FaEdit
//                       onClick={() => handleEditRow(index)}
//                       className="text-blue-600 hover:text-blue-800 cursor-pointer mr-4"
//                     />
//                     <FaTrash
//                       onClick={() => {
//                         setDeleteIndex(index);
//                         setIsDeletePopupOpen(true);
//                       }}
//                       className="text-red-600 hover:text-red-800 cursor-pointer"
//                     />
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-auto w-full flex justify-between items-center py-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400"
//         >
//           <FaChevronLeft />
//         </button>
//         <span className="text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400"
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Add/Edit Popup */}
//       {isModalOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center animate-fade-in">
//         <div
//           className="bg-white p-6 rounded-xl shadow-2xl w-[90%] sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[30%]
//           transform scale-90  animate-slide-in-up hover:scale-100 hover:rotate-0 transition-all duration-500"
//         >
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
//             {editingIndex !== null ? "Edit Tablet" : "Add New Tablet"}
//           </h2>
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="tabletName"
//               placeholder="Tablet Name"
//               value={newRow.tabletName}
//               onChange={handleNewRowChange}
//               className="w-full border border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg transform transition-transform hover:scale-105"
//             />
//             <input
//               type="text"
//               name="deskno"
//               placeholder="Desk No"
//               value={newRow.deskno}
//               onChange={handleNewRowChange}
//               className="w-full border border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg transform transition-transform hover:scale-105"
//             />
//             <input
//               type="date"
//               name="mfgDate"
//               value={newRow.mfgDate}
//               onChange={handleNewRowChange}
//               className="w-full border border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg transform transition-transform hover:scale-105"
//             />
//             <input
//               type="date"
//               name="expDate"
//               value={newRow.expDate}
//               onChange={handleNewRowChange}
//               className="w-full border border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg transform transition-transform hover:scale-105"
//             />
//             <input
//               type="number"
//               name="noOfSets"
//               placeholder="No of Sets"
//               value={newRow.noOfSets}
//               onChange={handleNewRowChange}
//               className="w-full border border-blue-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-lg transform transition-transform hover:scale-105"
//             />
//           </div>
//           <div className="mt-6 flex justify-end space-x-4">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all transform hover:scale-105 shadow-md"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSaveNewRow}
//               className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//       )}

//       {/* Delete Confirmation Popup */}
//       {isDeletePopupOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%]">
//             <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
//               Confirm Deletion
//             </h2>
//             <p className="text-center mb-6">
//               Are you sure you want to delete this item?
//             </p>
//             <div className="flex justify-end ">
//               <button
//                 onClick={() => setIsDeletePopupOpen(false)}
//                 className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-400 "
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteRow}
//                 className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 ml-3"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExcelExportAndUpload;




import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div
      className="card w-96 bg-primary text-primary-content shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="card-body">
        <h2 className="card-title">Animated Card</h2>
        <p>Using Framer Motion!</p>
      </div>
    </motion.div>
  );
}

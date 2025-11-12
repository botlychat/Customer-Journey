import React from 'react';
import { Message, MessageSender } from '../types';
import { BotIcon, UserIcon } from './icons';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.sender === MessageSender.Bot;

  const bubbleClasses = isBot
    ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'
    : 'bg-blue-600 text-white';

  const containerClasses = isBot ? 'justify-start' : 'justify-end';
  const avatar = isBot ? (
    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center ml-3 flex-shrink-0">
        <BotIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
    </div>
  ) : (
     <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3 flex-shrink-0">
        <UserIcon className="w-5 h-5 text-blue-600" />
    </div>
  );

  return (
    <div className={`flex items-start my-2 ${containerClasses}`}>
        {isBot && avatar}
        <div className={`max-w-md md:max-w-lg ${isBot ? 'order-2' : 'order-1'}`}>
            <div className={`px-4 py-3 rounded-2xl shadow-md ${bubbleClasses}`}>
                {message.text && <p className="text-sm md:text-base whitespace-pre-wrap">{message.text}</p>}
                {message.component}
            </div>
        </div>
        {!isBot && avatar}
    </div>
  );
};

export default MessageBubble;
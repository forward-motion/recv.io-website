import React from 'react';

import '../../_global/ui/CodeSnippetSection';
import CodeSnippetSection from "../../_global/ui/CodeSnippetSection";

const wildcards = `
// in the browser...
const client = io(clientCredentials);

// Send messages to a multi-level topic

client.emit('event/greeting/english', 'Oh, hi there!');

// listen to multiple topics at once with wildcards

client.on('event/+/+', (message, [ event, language ]) => {
        
	console.log(\`\${language} \${event} message: \${message}\`);
});

`;

const queues = `
// on your server...
const server = io(serverCredentials);

server.createQueue(queueName).then(queue => {
    
    // queues can use wildcards too
    
	queue.on('event/+/+', (message, [event, language]) => {

        // acknowledge the message when done
        
		message.ack();
	});

`;

const codeSnippets = [
    {
        title: 'wildcards',
        code: wildcards
    },
    {
        title: 'queues',
        code: queues
    }
];


const WildcardsQueues = () => (
    <div className="component-wildcards-queues">
        <CodeSnippetSection codeSnippets={codeSnippets} />
    </div>
);

export default WildcardsQueues;
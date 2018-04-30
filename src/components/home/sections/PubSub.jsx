import React from 'react';

import '../../_global/ui/CodeSnippetSection';
import CodeSnippetSection from "../../_global/ui/CodeSnippetSection";

const publish = `// in the browser...
const client = io(clientCredentials);

// Send messages to the "greeting" topic

client.emit('greeting', 'Oh, hi there!', () => {

	console.log('message sent!');
});`;


const subscribe = `// in the browser...
const client = io(clientCredentials);

// Listen for messages on the "greeting" topic

client.on('greeting', message => {

	console.log('message received:', message);
});`;


const codeSnippets = [
    {
        title: 'publish',
        code: publish
    },
    {
        title: 'subscribe',
        code: subscribe
    }
];


const PubSub = () => (
    <div className="component-pub-sub">
        <CodeSnippetSection codeSnippets={codeSnippets} />
    </div>
);

export default PubSub;
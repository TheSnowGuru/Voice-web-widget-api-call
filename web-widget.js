<script>
        var vapiInstance = null;
        const apiKey = 'add-your-key-here';
        const assistant = {
            transcriber: {
              provider: 'deepgram',
              model: 'nova-2',
              language: 'en',
            },
            model: {
              messages: [
                {
                  role: 'assistant',
                  content: 'gpt 3.5',
                },
              ],
              provider: 'openai',
              model: 'gpt-3.5-turbo',
              temperature: 0.5,
              semanticCachingEnabled: true,
              maxTokens: 600,
            },
            voice: {
              provider: '11labs',
              voiceId: 'Qo58kPMIOmtZygIVLQfp',
              model: 'eleven_turbo_v2',
            },
            recordingEnabled: true,
            endCallFunctionEnabled: true,
            silenceTimeoutSeconds: 10,
          };
      
          const options = {
            method: 'POST',
            headers: {
              Authorization: 'Bearer ' + apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(assistant)
          };
      
          fetch('https://api.vapi.ai/assistant', options)
            .then(response => response.json())
            .then(response => {
              console.log(response);
              // Start the call with the assistant here
            })
            .catch(err => console.error(err));
        
      
      
        const buttonConfig = {
          position: 'top',
          offset: '360px',
          width: '60px',
          height: '50px',
          idle: {
            color: 'rgb(93, 254, 202)',
            type: 'pill',
            title: 'Have a quick question?',
            subtitle: 'Talk to AI assistant',
            icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
          },
          loading: {
            color: 'rgb(93, 124, 202)',
            type: 'pill',
            title: 'Connecting...',
            subtitle: 'Please wait',
            icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
          },
          active: {
            color: 'rgb(255, 0, 0)',
            type: 'pill',
            title: 'Call is in progress...',
            subtitle: 'End the call',
            icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
          },
        };
      
        (function (d, t) {
          const g = document.createElement(t);
          g.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
          g.defer = true;
          g.async = true;
          document.getElementsByTagName(t)[0].parentNode.insertBefore(g, document.getElementsByTagName(t)[0]);
      
          g.onload = function () {
            window.vapiSDK.run({
              apiKey,
              assistant,
              config: buttonConfig,
            }).then((vapiInstance) => {
              // Add functionality to Vapi Instance here
            }).catch((error) => {
              console.error('Error initializing Vapi SDK:', error);
            });
          };
        })(document, 'script');
      </script>

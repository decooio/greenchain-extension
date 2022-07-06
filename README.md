# GreenChain wallet

GreenChain wallet is for project GreenChain

GreenChain wallet is currently a work in progress, so changes will occur.


## Prerequisites

- NodeJS >= v11
- Yarn latest

### Installation with zip

Download extension zip file from https://github.com/decooio/greenchain-extension/releases
- Unzip the zip file downloaded
- Open chrome browser and Go to chrome://extensions
- Enable developer mode
- Click "Load Unpacked Extension"
- Navigate to the unzipped folder and click Ok to install the extension

### Installation

Execute the following to clone, install dependencies, and run a development server:

    git clone https://github.com/decooio/greenchain-extension.git
    cd greenchain-extension.
    yarn install
    yarn run dev

Once running Chrome:

- Go to chrome://extensions
- Enable 'Developer Mode' (top right corner of window)
- Click "Load Unpacked" and select the greenchain-extension./dev/chrome directory
- Navigate to : https://localhost:3000 and accept the https connection

The GreenChain wallet icon should show up in your Chrome toolbar.

License: [AGPL v3](https://github.com/decooio/greenchain-extension/blob/main/LICENSE.md)

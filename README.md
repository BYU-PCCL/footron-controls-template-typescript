# @footron/controls-typescript-template

## Usage

Install Yarn, then run

```sh
yarn set version latest
yarn install
yarn dev
```
If the environment is working properly you should be able to open a browser to `localhost:8009` and see a basic controls page.

To test functionality locally run this server anytime with the command `yarn dev`. This will start a vite server showing a controls page. This should support hot reloads as any of the source files are updated.

You can also host controls on the local network to use them directly on your phone. To do this run `yarn dev --network` and make sure your firewall isn't blocking any incoming messages from the local network. Then you can access your controls by pointing the browser of any phone on the local network to `<your-ip>:8009` (e.g. 192.168.1.85:8009)

The hosted controls page can also test functionallity with an experience.
To connect it to an experience being hosted you'll need an instance of the footron router.

the router can be installed through `pip` if it hasn't been installed already.

`pip install git+https://github.com/BYU-PCCL/footron-router.git`

Then in a separate shell from both the control server and the experience server, start the router with the following command.

`uvicorn footron_router.dev_server:app --port 8089`

You may need to reload the experience and/or the controller.

At this point, any currently hosted footron experiences that use footron messaging will be able to interact with the controls.

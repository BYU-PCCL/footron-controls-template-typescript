# @footron/controls-typescript-template

## Usage

Install Yarn, then run

```sh
yarn set version latest
yarn install
yarn dev
```

To test functionality locally connect this server (run anytime with the command `yarn dev`) to an instance of the footron router.

To do so, first install the router if it hasn't been already.

`pip install git+https://github.com/BYU-PCCL/footron-router.git`

Then, start the router.

`uvicorn footron_router.dev_server:app --port 8089`

You may need to reload the experience and/or the controller.

At this point, any currently hosted footron experiences that use footron messaging will be able to interact with the controls.

You can also host controls on the local network to use them directly on your phone. To do this run `yarn dev --network` and make sure your firewall isn't blocking any incoming messages from the local network. Then you can access your controls by pointing the browser of any phone on the local network to `<your-ip>:8009` (e.g. 192.168.1.85:8009)

# @footron/controls-typescript-template

## Usage

Install Yarn, then run

```sh
yarn set version latest
yarn install
yarn dev
```

To test functionality locally connect this to an instance of the footron router by first installing it if it hasn't been already.

`pip install git+https://github.com/BYU-PCCL/footron-router.git`

Then, starting the router.

`uvicorn footron_router.dev_server:app --port 8089`

You may need to reload the experience and/or the controller.

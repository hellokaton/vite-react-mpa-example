# vite-react-mpa-example

This is an example of multi page application using `React` and `Vite`, which includes router usage and packaging configurations.

## Usage

local env preview

```sh
yarn run dev
```

You can access the following path verify:

- http://localhost:3000/
- http://localhost:3000/expenses
- http://localhost:3000/invoices
- http://localhost:3000/admin/expenses
- http://localhost:3000/admin/invoices

---

build to dist

```sh
yarn run build
```

The generated directory is as follows

```sh
 ~/react/vite-react-mpa-example/dist
.
├── admin
│   └── index.html
├── assets
│   ├── admin.26a797b8.css
│   ├── admin.f723a3c2.js
│   ├── favicon.17e50649.svg
│   ├── index.458f9883.css
│   ├── index.6bb9e804.js
│   ├── index.bff09771.js
│   ├── index.ed209ab7.css
│   ├── logo.ecc203fb.svg
│   └── vendor.763bc56e.js
└── index.html

2 directories, 11 files
```

I have the project deployed on [vercel](https://vercel.com/), which you can try to access

- https://vite-react-mpa.vercel.app/
- https://vite-react-mpa.vercel.app/expenses
- https://vite-react-mpa.vercel.app/invoices
- https://vite-react-mpa.vercel.app/admin/expenses
- https://vite-react-mpa.vercel.app/admin/invoices

## Further Info

- [vite](https://vitejs.dev/)
- [vite-plugin-mpa](https://github.com/IndexXuan/vite-plugin-mpa)
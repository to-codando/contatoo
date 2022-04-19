import { routerFactory } from "lemejs"

import { appNotFound } from "../components/appNotFound"
import { appCreateContact } from "../components/appCreateContact"

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appCreateContact,
  isInitial: true
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
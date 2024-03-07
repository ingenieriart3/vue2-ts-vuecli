// Works correctly
export {}
// import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
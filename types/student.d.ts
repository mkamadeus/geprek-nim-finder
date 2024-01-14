declare global {
  // TODO: define better type
  type NIM = `${number}`
  type Student = {
    name: string
    tpbID: NIM
    majorID: NIM | null
  }
}

export {};

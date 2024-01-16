export default defineEventHandler(async () => {
  const codes = await useStorage().getItem<Record<string, string>>('codes')
  return codes
})

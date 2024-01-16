export default defineEventHandler(async () => {
  const codes = await useStorage().getItem<Record<string, string>>('list')
  return codes
})

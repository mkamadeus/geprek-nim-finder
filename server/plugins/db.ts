const STUDENT_JSON_LIST = [
  '13.json',
  '14.json',
  '15.json',
  '16.json',
  '17.json',
  '18.json',
  '19.json',
  '20.json',
  '21.json',
  '22.json',
]

const setupStudentsData = async () => {
  const studentsList: [string, string, string][] = []
  for(const filename of STUDENT_JSON_LIST) {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/mkamadeus/geprek-nim-data@v1.0.0/${filename}`)
    if(!response.ok) {
      throw new Error(`Failed to fetch student data for ${filename}`)
    }

    const students: [string, string, string][] = await response.json()
    studentsList.push(...students)
  }
  studentsList.sort((s1, s2) => s1[0].localeCompare(s2[0]))
  await useStorage().setItem<Student[]>('students', studentsList.map((s) => ({
    name: s[0],
    tpbID: s[1] as `${number}`,
    majorID: s[2] as `${number}`,
  })))
}

// TODO: fetch major and faculty data mapping
const setupMajorAndFacultyMapping = async () => {
  const facultyResponse = await fetch('https://cdn.jsdelivr.net/gh/mkamadeus/geprek-nim-data@v1.0.0/kode_fakultas.json')
  if(!facultyResponse.ok) {
    throw new Error('Failed to fetch faculty mapping')
  }
  
  const majorResponse = await fetch('https://cdn.jsdelivr.net/gh/mkamadeus/geprek-nim-data@v1.0.0/kode_jurusan.json')
  if(!majorResponse.ok) {
    throw new Error('Failed to fetch major mapping')
  }

  const facultyMapping = await facultyResponse.json()
  const majorMapping = await majorResponse.json()


  const mapping = {...facultyMapping, ...majorMapping}
  await useStorage().setItem<Record<string, string>>('codes', mapping)
}

export default defineNitroPlugin(async (nitroApp) => {
  // setup student data
  setupStudentsData()
  setupMajorAndFacultyMapping()
});

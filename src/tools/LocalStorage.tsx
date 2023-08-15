import { ListOfTasks } from '../types'

class LocalStorage {
  private readonly name = 'tasks'
  public get() {
    const data = localStorage.getItem(this.name)
    if (data === null) return []
    return JSON.parse(data)
  }
  public save(document: ListOfTasks) {
    localStorage.setItem(this.name, JSON.stringify(document))
  }
}

export default new LocalStorage()

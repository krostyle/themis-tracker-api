import { Permission } from '@/auth/domain/entities/permission.entity'

describe('Permission', () => {
  let permission: Permission

  beforeEach(() => {
    permission = new Permission('1', 'read', 'Read permission', true)
  })

  it('should create a new Permission instance', () => {
    expect(permission).toBeInstanceOf(Permission)
    expect(permission.id).toBe('1')
    expect(permission.name).toBe('read')
    expect(permission.description).toBe('Read permission')
    expect(permission.isActive).toBe(true)
    expect(permission.createdAt).toBeUndefined()
    expect(permission.updatedAt).toBeUndefined()
  })

  it('should set the id', () => {
    permission.id = '2'
    expect(permission.id).toBe('2')
  })

  it('should set the name', () => {
    permission.name = 'write'
    expect(permission.name).toBe('write')
  })

  it('should set the description', () => {
    permission.description = 'Write permission'
    expect(permission.description).toBe('Write permission')
  })

  it('should set the isActive flag', () => {
    permission.isActive = false
    expect(permission.isActive).toBe(false)
  })

  it('should set the createdAt date', () => {
    const createdAt = new Date()
    permission.createdAt = createdAt
    expect(permission.createdAt).toBe(createdAt)
  })

  it('should set the updatedAt date', () => {
    const updatedAt = new Date()
    permission.updatedAt = updatedAt
    expect(permission.updatedAt).toBe(updatedAt)
  })

  it('should deactivate the permission', () => {
    permission.deactivate()
    expect(permission.isActive).toBe(false)
  })

  it('should activate the permission', () => {
    permission.activate()
    expect(permission.isActive).toBe(true)
  })
})

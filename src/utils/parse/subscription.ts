import Parse from './index'

export async function subScription(className: string) {
  const query = new Parse.Query(className)
  const subscription = await query.subscribe()
  // 公开活动
  subscription.on('open', () => {
    console.log('subscription opened')
  })
  // 创建活动
  subscription.on('create', () => {
    console.log('object created')
  })
  // 更新事件
  subscription.on('update', () => {
    console.log('object updated')
  })
  // 进入活动
  subscription.on('enter', () => {
    console.log('object entered')
  })
  // 离开活动
  subscription.on('leave', () => {
    console.log('object left')
  })
  // 删除活动
  subscription.on('delete', () => {
    console.log('object deleted')
  })
  // 关闭事件
  subscription.on('close', () => {
    console.log('subscription closed')
  })
}

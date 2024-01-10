export default {
  namespace: import.meta.env.VITE_STORAGE_NAMESPACE,  // 命名空间
  domain: import.meta.env.VITE_STORAGE_DOMAIN, // 存储域名
  token: 'token', // token
  userInfo: 'user_info', // 用户信息
  config: 'config' // 配置信息
}

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: JSON.parse(uni.getStorageSync("User") || "{}"),
		token: uni.getStorageSync("token") || ""
	},
	getters: {

	},
	mutations: {
		setUser(state, user) {
			state.user = user
			uni.setStorageSync("Token", user.token)
			uni.setStorageSync("User", JSON.stringify(user))
		}
	},
	actions: {
		setUser({
			commit
		}, payload) {
			commit("setUser", payload)
		}
	},
	modules: {

	}
})

export default store

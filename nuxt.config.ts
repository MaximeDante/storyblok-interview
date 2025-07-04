// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN, //Replace with your own Access Token
				apiOptions: {
					region: 'eu',
				},
			},
		],
    '@nuxtjs/tailwindcss',
	],
})

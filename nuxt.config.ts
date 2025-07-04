// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: "PMd1t2FQGfpE5ULRNjX3YQtt", //Replace with your own Access Token
				apiOptions: {
					region: 'eu',
				},
			},
		],
    '@nuxtjs/tailwindcss',
	],
})

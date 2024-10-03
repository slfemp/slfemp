<script setup lang="ts">
defineOgImageComponent("slfemp", {
  title: "Interviews",
  description: "A collection of interviews with Mike Frost.",
})

const posts = [
  {
    title: "Donnie Houston TV Podcast: Creating The Classic Album Covers For Texas Rap Artists",
    description: "Mike Frost, a key figure in Houston rap, discusses his start with Swishahouse and work with Guerilla Maab and other rap legends in an interview with Donnie Houston. He shares his creative process and the stories behind some of Houston's greatest albums.",
    image: { src: "/images/interviews/donniehoustonpodcast.jpg" },
    link: "https://www.youtube.com/watch?v=fRFpFD83_Zs",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }],
    badge: { label: "Podcast" },
  },
  {
    title: "Houston's Hip Hop 50 (The 2000's): Z-Ro, Michael Watts, Lil Flip, G Dash, DJ Aggravated, Mike Frost",
    description: "Mike Frost details his journey in Houston rap, starting with Swishahouse to collaborations with Guerilla Maab and others, in a talk with Donnie Houston. He reveals his creative approach and tales behind Houston's iconic albums.",
    image: { src: "/images/interviews/50thhiphop.jpg" },
    link: "https://www.youtube.com/watch?v=-0XQxPSGNnY",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }],
    badge: { label: "Podcast" },
  },
  {
    title: "Graphics legend Mike Frost on his Iconic album covers, Working with Paul Wall, Slim Thug & More",
    description: "Mike Frost, renowned for creating iconic Houston album covers, shared his graphic design journey on our show. Watch and share the full interview to learn about the artist behind these famous covers.",
    image: { src: "/images/interviews/krinoundergrounddialouguepodcast.jpg" },
    link: "https://www.youtube.com/watch?v=qoeYH6JPyrk",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }, { name: "Jorgey Casanova", avatar: {} }],
    badge: { label: "Podcast" },
  },
  {
    title: "Donnie Houston LIVE at @CAMHouston with Mike Frost and Jorgey Casanova",
    description: "Graphic design expert Mike Frost discussed his work on legendary Houston album covers on our show. Don't miss the full interview to discover the creator of these iconic covers.",
    image: { src: "/images/interviews/donniehoustonmikefrostjorgey.jpg" },
    link: "https://www.youtube.com/watch?v=RR6TPb7QEfI",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }, { name: "Jorgey Casanova", avatar: {} }],
    badge: { label: "Podcast" },
  },
  {
    title: "Clip from Mike Frost event at Rice Woodson Research Center",
    description: "Mike Frost event at Rice University movie center Follow mike frost at @slfemp Video shot by Eyeopeningproductions.com.",
    image: { src: "/images/interviews/riceuniversity.jpg" },
    link: "https://www.youtube.com/watch?v=cu_BCwp0rrA",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }],
    badge: { label: "Podcast" },
  },
  {
    title: "Paul Wall & Mike Frost Create An AKIRA Inspired Cover Art For New Album “Hall of Fame Hustler”",
    description: "Houston Legend, Paul Wall drops his new album “Hall of Fame Hustler” with Akira Inspired Cover Artwork. Designed and Photographed by Mike Frost.",
    image: { src: "/images/interviews/coverartmatters.jpg" },
    link: "https://www.youtube.com/watch?v=JWKwqpWzGqA",
    date: "2022-01-01",
    authors: [{ name: "Mike Frost", avatar: {} }],
    badge: { label: "Podcast" },
  },

]
</script>

<template>
  <UContainer>
    <UPageHero title="Interviews" description="Latest interviews with Mike Frost" />

    <UPageBody>
      <UBlogList>
        <UBlogPost v-for="(post, index) in posts" :key="index"
          :ui="{ badge: { wrapper: '', base: 'text-xs font-medium uppercase tracking-wide' }, title: 'text-2xl text-clip', description: 'text-xl' }"
          :to="post.link" target="_blank" :title="post.title" :description="post.description"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors" :badge="post.badge" :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']">
          <template #image>
            <NuxtImg
              class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
              :src="post.image.src" :alt="post.title" />
          </template>
        </UBlogPost>
      </UBlogList>
    </UPageBody>
  </UContainer>
</template>

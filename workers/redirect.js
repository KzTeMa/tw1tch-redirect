addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const hostname = url.hostname
  const pathname = url.pathname
  
  if (hostname === 'www.tw1tch.tv') {

    const channelMatch = pathname.match(/^\/([^\/]+)/)
    
    if (channelMatch && channelMatch[1]) {
      const channelName = channelMatch[1]

      return Response.redirect(`http://streamscharts.com/channels/${channelName}`, 301)
    }
  }
  

  return new Response('Not Found', { status: 404 })
}

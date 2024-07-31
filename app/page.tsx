import Card from '@/modules/Card'
import CommunityHeader from '@/modules/CommunityHeader'
import SubredditHeader from '@/modules/SubredditHeader'

export default function Feed() {
  return (
    <section className='w-full px-4'>
      <div className='hidden lg:block'>
        <SubredditHeader />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 mt-2 lg:mt-20'>
        <div className='col-span-1 sm:col-span-4 lg:col-span-3 '>
          <Card />
        </div>
        <div className='hidden lg:block col-span-1 '>
          <CommunityHeader />
        </div>
      </div>
    </section>
  )
}

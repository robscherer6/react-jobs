import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards isHome={true}/>
    <JobListings />
    <ViewAllJobs />
    </>
  )
}
export default HomePage
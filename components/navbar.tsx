import { UserButton } from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

export function Navbar() {
	// const apiLimitCount = await getApiLimitCount()
	// const isPro = await checkSubscription()
	return (
		<div className='flex items-center p-4'>
			<MobileSidebar />
			<div className='flex w-full justify-end'>
				<UserButton afterSignOutUrl='/' />
			</div>
		</div>
	)
}

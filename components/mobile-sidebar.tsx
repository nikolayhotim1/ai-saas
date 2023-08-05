'use client'

import { Menu } from 'lucide-react'
import { Sidebar } from './sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='p-0'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}

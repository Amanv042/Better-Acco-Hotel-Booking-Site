export default function DropdownMenu({ children, align }) {
	return <div className={`dropdown dropdown-${align} z-50 `}>{children}</div>
}

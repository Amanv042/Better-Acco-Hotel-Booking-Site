import PartnerBanner from "../../components/PartnerBanner/PartnerBanner"
import PropertyListingBanner from "../../components/PropertyListingBanner/PropertyListingBanner"
import Footer from "../../components/Footer/Footer"
import Copyright from "../../components/Copyright/Copyright"

export default function FooterComponent({
	partners = true,
	propertyList = true,
	footer = true,
	copyright = true,
}) {
	return (
		<>
			{partners && <PartnerBanner />}
			{propertyList && <PropertyListingBanner />}
			<hr />
			{footer && <Footer />}
			{copyright && <Copyright />}
		</>
	)
}

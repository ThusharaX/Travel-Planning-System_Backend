import { hotel_owner_auth } from "./HotelOwnerAuth.middleware";
import { tour_guide_auth } from "./TourGuideAuth.middleware";
import { camping_vendor_auth } from "./CampingVendorAuth.middleware";
import { customer_auth } from "./CustomerAuth.middleware";

export default {
	hotel_owner_auth,
	tour_guide_auth,
	camping_vendor_auth,
	customer_auth,
};

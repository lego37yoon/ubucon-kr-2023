import { useTranslations } from "../i18n/utils";
import {
	Navigation
} from "@canonical/react-components";


export default function NavigationMenu(props) {
    const t = useTranslations(props.lang);

    return(
        <Navigation
			items={[
				{
					items: [
						{
							label: `${t('navigation.callForProposals')}`,
							url: "/cfp"
						}
					],
					label: `${t('navigation.program')}`
				},
				{
					items: [
						{
							label: `${t('sponsorship.details')}`,
							url: "sponsor"
						}
					],
					label: `${t('navigation.sponsor')}`,
				}
			]}
			itemsRight={[
				{
					label: "ubuntu-kr.org",
					url: "https://ubuntu-kr.org",
				}
			]}
			logo={{
				src: "/UbuntuKrCircleWhite.svg",
				title: "UbuCon Korea 2023",
				url: "/",
			}}
			theme="dark"
		/>
    )
}
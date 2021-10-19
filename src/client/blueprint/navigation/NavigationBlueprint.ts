import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import { NavigationProps } from "client/layout/navigation/Navigation";
import PageRoute from "client/routes/PageRoute";

const navigationBlueprint = (): NavigationProps => ({
  header: "IFDb",
  menu: {
    options: [
      {
        path: PageRoute.HOME,
        label: "Profile",
        color: ComponentColor.PRIMARY
      },
      {
        path: PageRoute.ACCOUNT,
        label: "Account",
        color: ComponentColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Settings",
        color: ComponentColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Logout",
        color: ComponentColor.DANGER
      },
    ],
    toggler: {
      alt: 'https://picsum.photos/200',
      src: 'https://picsum.photos/200',
    }
  },
  actions: [
    {
      label: "Home",
      path: PageRoute.HOME
    },
    {
      label: "Movies",
      path: PageRoute.MOVIE_EXPLORE
    },
    {
      label: "TV Shows",
      path: PageRoute.SERIES_EXPLORE
    },
    {
      label: "Actors",
      path: PageRoute.ACTOR_EXPLORE
    },
    {
      label: "Login",
      path: PageRoute.LOGIN
    },
  ],
});

export default navigationBlueprint;
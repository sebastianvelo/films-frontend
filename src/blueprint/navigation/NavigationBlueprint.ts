import PageRoute from "client/routes/PageRoute";
import { NavigationProps } from "client/views/layout/navigation/Navigation";

const navigationBlueprint = (): NavigationProps => ({
  header: "Filmaholiks",
  actions: [
   /* {
      label: "Home",
      path: PageRoute.HOME
    }, */
    {
      label: "Movies",
      path: PageRoute.MOVIE_EXPLORE
    },
    {
      label: "TV Shows",
      path: PageRoute.SHOW_EXPLORE
    },
    {
      label: "People",
      path: PageRoute.PERSON_EXPLORE
    },
    {
      label: "Watch list",
      path: PageRoute.WATCH_LIST_LOGGED_IN
    },
   /* {
      label: "Login",
      path: PageRoute.LOGIN
    }, */
  ],
    /* menu: {
    options: [
      {
        path: PageRoute.HOME,
        label: "Profile",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.ACCOUNT,
        label: "Account",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Settings",
        color: ComponentHovereableColor.PRIMARY
      },
      {
        path: PageRoute.HOME,
        label: "Logout",
        color: ComponentHovereableColor.DANGER
      },
    ],
    toggler: {
      alt: 'https://picsum.photos/200',
      src: 'https://picsum.photos/200',
    }
  },
  */
 
});

export default navigationBlueprint;

// ** React Imports
import { Fragment, lazy } from "react"
import { Navigate } from "react-router-dom"
// ** Layouts 
import BlankLayout from "@layouts/BlankLayout"
import VerticalLayout from "@src/layouts/VerticalLayout"
import HorizontalLayout from "@src/layouts/HorizontalLayout"
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper"

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute"
import PrivateRoute from '@components/routes/PrivateRoute'

// ** Utils
import { isObjEmpty } from "@utils"

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />
}

// ** Document title
const TemplateTitle = "%s - dashboard"

// ** Default Route
const DefaultRoute = "/"

// . Error Page
const Error = lazy(() => import("../../views/Error"))

// auth components 
const Login = lazy(() => import("../../views/admin/auth/login"))
const ProfileUpdate = lazy(() => import("../../views/admin/auth/Profile"))

// admin components routes
const DefaultPage = lazy(() => import("../../views/admin/dashboard/dashboard"))
const DashboardPage = lazy(() => import("../../views/admin/dashboard/dashboard"))
const HomePage = lazy(() => import("../../views/admin/home"))
const TestPage = lazy(() => import("../../views/admin/dashboard/no-graph"))

// ** Utils
// import { getUserData, getHomeRouteForLoggedInUser } from '../../utility/Utils'

// const getHomeRoute = () => {
//   const user = getUserData()
//   if (user) {
//     return getHomeRouteForLoggedInUser(user.role)
//   } else {
//     return '/login'
//   }
// }

// ** Merge Routes
const Routes = [
  // auth routes
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
      publicRoute: true,
      restricted: false // doChange with true
    }
  },

  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank"
    }
  },

  // Admin Routes
  {
    path: "/admin/dashboard",
    index: true,
    element: <Navigate replace to={DefaultRoute} /> // doChange DefaultRoute 
  },
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/admin/profile/update/:id",
    element: <ProfileUpdate />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/test",
    element: <TestPage />
  },
  

  // User routes
 
  // {
  //   path: "/admin/user/detail/:id",
  //   element: <UserDetailPage />
  // },
  // {
  //   path: "/admin/user/update/:id",
  //   element: <UserUpdatePage />
 
]

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta }
    } else {
      return {}
    }
  }
}

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = []

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        let RouteTag = PrivateRoute // PublicRoute

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false)
          // new line added by me
          RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
              LayoutWrapper
              : Fragment

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          )
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route)
      }
      return LayoutRoutes
    })
  }
  return LayoutRoutes
}

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical"
  const layouts = ["vertical", "horizontal", "blank"]

  const AllRoutes = []

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes
    })
  })
  return AllRoutes
}

export { DefaultRoute, TemplateTitle, Routes, getRoutes }

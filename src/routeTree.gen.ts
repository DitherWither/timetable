/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AboutImport } from "./routes/about";
import { Route as IndexImport } from "./routes/index";
import { Route as TeachersIndexImport } from "./routes/teachers/index";
import { Route as TeachersTeacherNameImport } from "./routes/teachers/$teacherName";

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const TeachersIndexRoute = TeachersIndexImport.update({
  id: "/teachers/",
  path: "/teachers/",
  getParentRoute: () => rootRoute,
} as any);

const TeachersTeacherNameRoute = TeachersTeacherNameImport.update({
  id: "/teachers/$teacherName",
  path: "/teachers/$teacherName",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    "/teachers/$teacherName": {
      id: "/teachers/$teacherName";
      path: "/teachers/$teacherName";
      fullPath: "/teachers/$teacherName";
      preLoaderRoute: typeof TeachersTeacherNameImport;
      parentRoute: typeof rootRoute;
    };
    "/teachers/": {
      id: "/teachers/";
      path: "/teachers";
      fullPath: "/teachers";
      preLoaderRoute: typeof TeachersIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/teachers/$teacherName": typeof TeachersTeacherNameRoute;
  "/teachers": typeof TeachersIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/teachers/$teacherName": typeof TeachersTeacherNameRoute;
  "/teachers": typeof TeachersIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/teachers/$teacherName": typeof TeachersTeacherNameRoute;
  "/teachers/": typeof TeachersIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/about" | "/teachers/$teacherName" | "/teachers";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/about" | "/teachers/$teacherName" | "/teachers";
  id: "__root__" | "/" | "/about" | "/teachers/$teacherName" | "/teachers/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AboutRoute: typeof AboutRoute;
  TeachersTeacherNameRoute: typeof TeachersTeacherNameRoute;
  TeachersIndexRoute: typeof TeachersIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  TeachersTeacherNameRoute: TeachersTeacherNameRoute,
  TeachersIndexRoute: TeachersIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/teachers/$teacherName",
        "/teachers/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/teachers/$teacherName": {
      "filePath": "teachers/$teacherName.tsx"
    },
    "/teachers/": {
      "filePath": "teachers/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

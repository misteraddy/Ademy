
import { combineProviders } from "@/lib/combineProviders";
import AuthProvider from "./authcontext";
import InstructorProvider from "./instructorcontext";
import StudentProvider from "./studentcontext";

export const AppContextProvider = combineProviders(
  AuthProvider,
  InstructorProvider,
  StudentProvider
);

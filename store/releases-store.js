import { create } from "zustand";

export const releasesStore = create((set) => ({
  releases: [],
  updateReleases: (releasesList) =>
    set(() => ({
      releases: releasesList,
    })),
}));

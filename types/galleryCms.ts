import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeImgGalleryFields {
  imgGallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeImgGallerySkeleton = EntrySkeletonType<
  TypeImgGalleryFields,
  "imgGallery"
>;
export type TypeImgGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeImgGallerySkeleton, Modifiers, Locales>;

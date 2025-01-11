import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeImageGalleryFields {
  img?: EntryFieldTypes.AssetLink;
}

export type TypeImageGallerySkeleton = EntrySkeletonType<
  TypeImageGalleryFields,
  "imageGallery"
>;
export type TypeImageGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeImageGallerySkeleton, Modifiers, Locales>;

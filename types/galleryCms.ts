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

export interface TypeImgAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeImgGallerySkeleton = EntrySkeletonType<
  TypeImgGalleryFields,
  "imgGallery"
>;
export type TypeImgGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeImgGallerySkeleton, Modifiers, Locales>;

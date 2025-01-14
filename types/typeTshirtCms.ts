import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeTShirtFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  priceInt: EntryFieldTypes.Integer;
}

export type TypeTShirtSkeleton = EntrySkeletonType<TypeTShirtFields, "tShirt">;
export type TypeTShirt<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTShirtSkeleton, Modifiers, Locales>;

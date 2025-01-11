import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePopularProductFields {
  title: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}

export type TypePopularProductSkeleton = EntrySkeletonType<
  TypePopularProductFields,
  "popularProduct"
>;
export type TypePopularProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePopularProductSkeleton, Modifiers, Locales>;

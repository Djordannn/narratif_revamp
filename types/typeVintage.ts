import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeVintageFields {
  title: EntryFieldTypes.Symbol;
  img: EntryFieldTypes.AssetLink;
  price: EntryFieldTypes.Integer;
}

export type TypeVintageSkeleton = EntrySkeletonType<
  TypeVintageFields,
  "vintage"
>;
export type TypeVintage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeVintageSkeleton, Modifiers, Locales>;

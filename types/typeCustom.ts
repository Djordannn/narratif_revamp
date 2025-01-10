import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeCustomFields {
  title: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Symbol;
  img: EntryFieldTypes.AssetLink;
}

export type TypeCustomSkeleton = EntrySkeletonType<TypeCustomFields, "custom">;
export type TypeCustom<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeCustomSkeleton, Modifiers, Locales>;

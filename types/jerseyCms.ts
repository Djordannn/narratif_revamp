import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeJerseyFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  price: EntryFieldTypes.Integer;
}

export type TypeJerseySkeleton = EntrySkeletonType<TypeJerseyFields, "jersey">;
export type TypeJersey<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeJerseySkeleton, Modifiers, Locales>;

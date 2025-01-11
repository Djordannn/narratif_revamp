import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeInfoFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  dateTime: EntryFieldTypes.Date;
}

export type TypeInfoSkeleton = EntrySkeletonType<TypeInfoFields, "info">;
export type TypeInfo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeInfoSkeleton, Modifiers, Locales>;

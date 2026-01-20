import { v4 } from 'uuid';
import { GUID_REGEX } from '../Regex/RegexUtils';

export type Guid = string & { readonly __brand: 'Guid' };

export const isGuid = (value: unknown): value is Guid =>
	typeof value === 'string' && GUID_REGEX.test(value);

export const createNewGuid = (): Guid => {
	return v4() as Guid;
};

export interface IFormListShimmerConfig {
    /** amount of lines used by the shimmer - defaults to 10 */
    shimmerLines?: number;
    /** will force the list to shimmer until set to false again */
    forceShimmer?: boolean;
    /** will enable shimmer automatically when item array is empty */
    autoShimmerOnEmptyList?: boolean;
    /** the timeout value in miliseconds for automatic shimmer - to prevent eternal shimmering (defaults to 5000) */
    autoShimmerTimeout?: number;
    /** element to render if no items are present */
    noItemsElement?: JSX.Element;
}

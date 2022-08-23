export interface IShortcode {
  readonly __tag: string
  __source?: string
  postBuild?: (meta?: WordPressMetaData) => void
  renderHtmlString(postId?: string, isAmp?: boolean): string
}

import React from 'react';

export type ProfilePictureProps = {
  imgSrc?: string,
  className?: string,
  borderWhite?: boolean,
};


export function ProfilePicture({imgSrc = "https://s3-alpha-sig.figma.com/img/b073/b82c/a42bab76a6c34df220385bcfe9dc237f?Expires=1636329600&Signature=a0htKuN1AjEEAnSigQKHMfc2DdZSzNF9BjWA7KLqTnOykb0EuKbTWegO5hgQVC-Bag20sDlTrUYconHlzmmNWEjh3PXZEOUfEq-FhozBtLXFKZ959ImYhS2DAgbV~CrMsJffh5nNfY1eT4xLWnHLTIDfNqiK6Mcyo2kubBPCq1zhlT3oYw3TkbSN6CQCYDckQ0E8bcWacZ2r7-vWsd4nPayIgxE9TXRu3UXidRpYJ4cGlBB1xt-UzBZyBphkE57SCI~JWx95Vrm384RHmYECfMMCOuWnbsf-nV9h0c0cSgTqhw2SNcGWMTDvkH1MHULrn~3L3SHD6-txL59HmjoEhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", className = "h-11 w-11", borderWhite=true  }: ProfilePictureProps) {
  /**
   * If you made the img absolute, the father needs to be relative
   */

   return (
    <img
      className={`rounded-full  ${borderWhite && 'border-white border-2'} ${className}`}
      src={imgSrc}
      alt=""
    />
  );
}
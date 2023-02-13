export interface OneColumnParams {
    type: "text";
    heading: string;
    body: {
        content: [
            {
                content: [
                    {
                        value: string;
                    }
                ];
            }
        ];
    };
}

export interface NestedColumnParams {
    type: "columns";
    numberOfCols: number;
    nestedBody: [
        {
            heading?: string;
            body: {
                content: [
                    {
                        content: [
                            {
                                value: string;
                            }
                        ];
                    }
                ];
            };
        }
    ];
}
export interface ImageParams {
    type: "image";
    imageSrc: string;
    imageAlt: string;
    isDesktopImage: boolean;
    imageHasMargin: boolean;
}

export interface PrerequisiteParams {
    type: "prerequsites",
    mobileImageSrc: string,
    mobileImageAlt: string,
    desktopImageSrc: string,
    desktopImageAlt: string,
    prerequisites: Array<string>
};

export interface AdventureColumnParams {
    day?:string;
    date?:string;
    optionalField?:string;
    noDayDateOptional: boolean;
    noBorderBottom: boolean;
    timeDescription:[{
        time?: string,
        description: string
    }];
    noBarLeft:boolean; 
    noBarBottomDesktop:boolean;
    noBarBottomMobile:boolean;
}

export type EntryParams = OneColumnParams | NestedColumnParams | ImageParams | PrerequisiteParams;
import test from "../../../public/locales/en/translation.json";

const brand = "OLL DESIGN";

const lang = [
    {
        id: 1,
        lang: "JP",
    },
    {
        id: 2,
        lang: "EN",
    },
    {
        id: 3,
        lang: "CH",
    },
];

const menu = [
    {
        id: 1,
        menu: "PROFILE",
        url: "",
    },
    {
        id: 2,
        menu: "NOTE",
        url: "",
    },
    {
        id: 3,
        menu: "CONTACT",
        url: "",
    },
];

const socialMedia = [
    {
        id: 1,
        url: "https://www.instagram.com/",
        icon: "I",
    },
    {
        id: 2,
        url: "https://www.facebook.com/",
        icon: "F",
    },
];

const imgGroupper = [
    {
        id: 1,
        badge: "STORE DESIGN",
        navigate: "#store-design",
    },
    {
        id: 2,
        badge: "GRAPHIC DESIGN",
        navigate: "#graphic-design",
    },
];

const img = [
    {
        id: 1,
        url: [
            "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
            "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        ],
        navigate: "#graphic-design",
        name: "Image 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works One",
        works_content: "Logo One",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 2,
        url: [
            "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        ],
        navigate: "#graphic-design",
        name: "Image 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Two",
        works_content: "Logo Two",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 3,
        url: [
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
            "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        ],
        navigate: "#store-design",
        name: "Image 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Three",
        works_content: "Logo Three",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 4,
        url: [
            "https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
            "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        ],
        navigate: "#store-design",
        name: "Image 4",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Four",
        works_content: "Logo Four",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 5,
        url: [
            "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
            "https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        ],
        navigate: "#store-design",
        name: "Image 5",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Five",
        works_content: "Logo Five",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 6,
        url: [
            "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
        ],
        navigate: "#graphic-design",
        name: "Image 6",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Six",
        works_content: "Logo Six",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 7,
        url: [
            "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        ],
        navigate: "#store-design",
        name: "Image 7",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Seven",
        works_content: "Logo Seven",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 8,
        url: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        ],
        navigate: "#graphic-design",
        name: "Image 8",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Eight",
        works_content: "Logo Eight",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 9,
        url: [
            "https://images.unsplash.com/photo-1535567679266-c113f99615bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        ],
        navigate: "#store-design",
        name: "Image 9",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Nine",
        works_content: "Logo Nine",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
    {
        id: 10,
        url: [
            "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1535567679266-c113f99615bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
        ],
        navigate: "#store-design",
        name: "Image 10",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim minima eos praesentium, cum labore voluptatum incidunt soluta aut, veniam laboriosam dignissimos sint quaerat eaque fugit rem impedit? Facilis, odio unde deserunt corrupti quisquam repudiandae reprehenderit ea aut error eveniet labore, aliquid qui natus numquam accusamus a eos quo ad commodi inventore. Explicabo temporibus aliquid consectetur possimus eveniet in ab rerum animi aspernatur hic. Ratione, illo! Quis dolorem magni fugiat, dignissimos nam provident tempore, laudantium quia sit porro consequuntur sint laboriosam soluta voluptatibus perspiciatis doloribus inventore optio quas unde architecto dolores officiis fugit. Voluptatibus temporibus nulla ex! Veritatis, assumenda inventore.",
        works_title: "Emon Works Ten",
        works_content: "Logo Ten",
        works_credit: "Design: Oll Design",
        works_client: "Oll Design, Inc",
    },
];

export { brand, menu, socialMedia, imgGroupper, img, lang, test };

const tree = {
    menu_numb: "O01000000000",
    parent: "O01000000000",
    curr_deep: 1,
    use_at: "Y",
    deep: "MAIN",
    disp_sort: "0",
    type: "O",
    array: ["O01000000000"],
    menu_name: "회원관리",
    disp_name: "회원관리",
    main_category: "010",
    menu_prgm_name: "/memb/memberList.do",
    main_menu_type: "O01000000000",
    plfm_type: "KBSO",
    chlid_menu_list: [
        {
            menu_numb: "O01000100000",
            parent: "O01000000000",
            curr_deep: 2,
            use_at: "Y",
            deep: "SUB",
            sub_menu_type: "O01000000000",
            disp_sort: 4,
            curr_parent: "O01000000000",
            type: "O",
            array: ["O01000000000", "O01000100000"],
            parent_2: "O01000100000",
            menu_name: "회원리스트",
            disp_name: "회원리스트",
            main_category: "010",
            menu_prgm_name: "/memb/memberList.do",
            main_menu_type: "O01000000000",
            plfm_type: "KBSO",
            chlid_menu_list: [],
            small_category: "0000",
            menu_path: '{"O01000000000","O01000100000"}',
            ptrs_menu_menu: "O01000000000",
            middle_category: "0010",
        },
        {
            menu_numb: "O01000500000",
            parent: "O01000000000",
            curr_deep: 2,
            use_at: "Y",
            deep: "SUB",
            sub_menu_type: "O01000000000",
            disp_sort: 10,
            curr_parent: "O01000000000",
            type: "O",
            array: ["O01000000000", "O01000500000"],
            parent_2: "O01000500000",
            menu_name: "회원탈퇴/삭제",
            disp_name: "회원탈퇴/삭제",
            main_category: "010",
            menu_prgm_name: "/memb/deleteMembList.do",
            main_menu_type: "O01000000000",
            plfm_type: "KBSO",
            chlid_menu_list: [],
            small_category: "0000",
            menu_path: '{"O01000000000","O01000500000"}',
            ptrs_menu_menu: "O01000000000",
            middle_category: "0050",
        },
        {
            menu_numb: "O01000600000",
            parent: "O01000000000",
            curr_deep: 2,
            use_at: "Y",
            deep: "SUBT",
            sub_menu_type: "O01000000000",
            disp_sort: 11,
            curr_parent: "O01000000000",
            type: "O",
            array: ["O01000000000", "O01000600000"],
            parent_2: "O01000600000",
            menu_name: "페이퍼리스",
            disp_name: "페이퍼리스",
            main_category: "010",
            menu_prgm_name: "",
            main_menu_type: "O01000000000",
            plfm_type: "KBSO",
            chlid_menu_list: [
                {
                    menu_numb: "O01000600001",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 12,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600001",
                    array: ["O01000000000", "O01000600000", "O01000600001"],
                    parent_2: "O01000600000",
                    menu_name: "수강신청(약관동의)",
                    disp_name: "수강신청(약관동의)",
                    main_category: "010",
                    menu_prgm_name: "/paper/viewCrsRequest.do",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0001",
                    menu_path: '{"O01000000000","O01000600000","O01000600001"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
                {
                    menu_numb: "O01000600002",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 13,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600002",
                    array: ["O01000000000", "O01000600000", "O01000600002"],
                    parent_2: "O01000600000",
                    menu_name: "락카사용신청동의",
                    disp_name: "락카사용신청동의",
                    main_category: "010",
                    menu_prgm_name: "/paper/viewLockerAgree.do",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0002",
                    menu_path: '{"O01000000000","O01000600000","O01000600002"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
                {
                    menu_numb: "O01000600003",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 14,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600003",
                    array: ["O01000000000", "O01000600000", "O01000600003"],
                    parent_2: "O01000600000",
                    menu_name: "환불신청동의",
                    disp_name: "환불신청동의",
                    main_category: "010",
                    menu_prgm_name: "/paper/viewRefundAgree.do",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0003",
                    menu_path: '{"O01000000000","O01000600000","O01000600003"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
                {
                    menu_numb: "O01000600004",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 15,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600004",
                    array: ["O01000000000", "O01000600000", "O01000600004"],
                    parent_2: "O01000600000",
                    menu_name: "수강신청동의 리스트",
                    disp_name: "수강신청동의 리스트",
                    main_category: "010",
                    menu_prgm_name: "/paper/agrm/list.do?agrm_code=USED",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0004",
                    menu_path: '{"O01000000000","O01000600000","O01000600004"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
                {
                    menu_numb: "O01000600006",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 17,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600006",
                    array: ["O01000000000", "O01000600000", "O01000600006"],
                    parent_2: "O01000600000",
                    menu_name: "환불신청동의 리스트",
                    disp_name: "환불신청동의 리스트",
                    main_category: "010",
                    menu_prgm_name: "/paper/agrm/list.do?agrm_code=RFND",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0006",
                    menu_path: '{"O01000000000","O01000600000","O01000600006"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
                {
                    menu_numb: "O01000600007",
                    parent: "O01000000000",
                    curr_deep: 3,
                    use_at: "Y",
                    deep: "SUB",
                    sub_menu_type: "O01000600000",
                    disp_sort: 16,
                    curr_parent: "O01000600000",
                    type: "O",
                    parent_3: "O01000600007",
                    array: ["O01000000000", "O01000600000", "O01000600007"],
                    parent_2: "O01000600000",
                    menu_name: "락카신청동의 리스트",
                    disp_name: "락카신청동의 리스트",
                    main_category: "010",
                    menu_prgm_name: "/paper/agrm/list.do?agrm_code=LOCK",
                    main_menu_type: "O01000600000",
                    plfm_type: "KBSO",
                    chlid_menu_list: [],
                    small_category: "0007",
                    menu_path: '{"O01000000000","O01000600000","O01000600007"}',
                    ptrs_menu_menu: "O01000600000",
                    middle_category: "0060",
                },
            ],
            small_category: "0000",
            menu_path: '{"O01000000000","O01000600000"}',
            ptrs_menu_menu: "O01000000000",
            middle_category: "0060",
        },
    ],
    small_category: "0000",
    menu_path: '{"O01000000000"}',
    ptrs_menu_menu: "O01000000000",
    middle_category: "0000",
};
export default tree;

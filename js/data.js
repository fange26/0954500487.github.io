const mockData = {
    // ผู้ใช้
    users: [
        {
            id: 1,
            name: "จันทร์จิรา สุวรรณ",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "หลงใหลในอาหารไทยและเชฟสมัครเล่น ชอบลองสูตรอาหารพื้นบ้านและแบ่งปันประสบการณ์การทำอาหาร!",
            rating: 4.8,
            type: "user"
        },
        {
            id: 2,
            name: "สมชาย วงศ์สวัสดิ์",
            avatar: "https://randomuser.me/api/portraits/men/90.jpg",
            bio: "เชฟมืออาชีพที่หลงใหลในอาหารไทยรสจัดจ้าน มองหาวิธีใหม่ๆ เพื่อสร้างสรรค์รสชาติอาหาร!",
            rating: 4.9,
            type: "user"
        },
        {
            id: 3,
            name: "นภัสวรรณ ชัยมงคล",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "นักชิมที่รักความยั่งยืน ชอบอาหารท้องถิ่นและสนับสนุนการลดขยะอาหาร",
            rating: 4.7,
            type: "user"
        },
        {
            id: 4,
            name: "กิตติศักดิ์ พงษ์ศรี",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            bio: "นักอบขนมปังที่บ้าน ชำนาญในขนมปังเปรี้ยวและแบ่งปันเคล็ดลับการอบ!",
            rating: 4.5,
            type: "user"
        },
        {
            id: 5,
            name: "สุภาวดี ศรีสุข",
            avatar: "https://randomuser.me/api/portraits/women/29.jpg",
            bio: "เชฟมังสวิรัติที่สำรวจอาหาร plant-based อยากทำให้โลกดีขึ้นผ่านอาหาร!",
            rating: 4.6,
            type: "user"
        }
    ],
    
    // กลุ่ม
    groups: [
        {
            id: 1,
            name: "คนรักอาหารมังสวิรัติ",
            avatar: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ชุมชนสำหรับแบ่งปันสูตรอาหารมังสวิรัติ รีวิวร้านอาหาร และเคล็ดลับการทำอาหาร",
            members: 1243,
            type: "group"
        },
        {
            id: 2,
            name: "นักอบขนมปังเปรี้ยว",
            avatar: "https://images.unsplash.com/photo-1585478259715-4d3f99f57309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            description: "สำหรับผู้ที่ชื่นชอบการอบขนมปังเปรี้ยว แบ่งปันสูตรและแก้ปัญหาการอบ",
            members: 876,
            type: "group"
        },
        {
            id: 3,
            name: "ลดขยะอาหาร",
            avatar: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "เคล็ดลับและวิธีการลดขยะอาหารที่บ้านและในร้านอาหาร",
            members: 654,
            type: "group"
        },
        {
            id: 4,
            name: "คนรักอาหารไทย",
            avatar: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ทุกอย่างเกี่ยวกับอาหารไทย ตั้งแต่ต้มยำถึงผัดไทยและอาหารท้องถิ่น",
            members: 1587,
            type: "group"
        },
        {
            id: 5,
            name: "คลับทำอาหารที่บ้าน",
            avatar: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "แบ่งปันเมนูที่ทำที่บ้าน สูตรอาหาร และเคล็ดลับในครัว",
            members: 2134,
            type: "group"
        }
    ],
    
    // หน้าธุรกิจ
    businessPages: [
        {
            id: 1,
            name: "ร้านใบเขียว",
            avatar: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ร้านอาหารมังสวิรัติที่ใช้ส่วนผสมออร์แกนิกจากท้องถิ่น มุ่งเน้นความยั่งยืน",
            rating: 4.7,
            type: "business"
        },
        {
            id: 2,
            name: "เบเกอรี่ช่างฝีมือ",
            avatar: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            description: "ขนมปังและขนมหวานทำมือด้วยวิธีดั้งเดิม",
            rating: 4.9,
            type: "business"
        },
        {
            id: 3,
            name: "ตลาดเครื่องเทศโลก",
            avatar: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ร้านขายของชำพิเศษที่มีเครื่องเทศและส่วนผสมจากทั่วโลก",
            rating: 4.6,
            type: "business"
        },
        {
            id: 4,
            name: "ส่งผักสดจากฟาร์ม",
            avatar: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "บริการส่งผักผลไม้สดตามฤดูกาลจากฟาร์มท้องถิ่นทุกสัปดาห์",
            rating: 4.8,
            type: "business"
        },
        {
            id: 5,
            name: "เวิร์กช็อปทำอาหาร",
            avatar: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "คลาสเรียนทำอาหารและกิจกรรมสร้างทีมสำหรับทุกทักษะ",
            rating: 4.5,
            type: "business"
        }
    ],
    
    // โพสต์
    posts: [
        {
            id: 1,
            userId: 2,
            content: "เพิ่งทำต้มยำกุ้งสุดอร่อย! เคล็ดลับคือการใช้กุ้งสดและใบมะกรูด ใครอยากได้สูตรบ้าง?",
            image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            likes: 42,
            comments: 8,
            time: "2 ชั่วโมงที่แล้ว",
            type: "post"
        },
        {
            id: 2,
            userId: 3,
            content: "ทำข้าวผัดผักเยอะเกินไป! ถ้าใครอยู่ย่านใจกลางเมือง มาแบ่งไปกินได้ ใช้ผักสดจากตลาด",
            image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            likes: 28,
            comments: 15,
            time: "5 ชั่วโมงที่แล้ว",
            type: "post"
        },
        {
            id: 3,
            userId: 1,
            content: "ลองสูตรขนมปังเปรี้ยวใหม่วันนี้ เปลือกกรอบมาก! ใครอบขนมปังช่วงนี้บ้าง?",
            image: "https://images.unsplash.com/photo-1585478259715-4d3f99f57309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            likes: 35,
            comments: 7,
            time: "เมื่อวาน",
            type: "post"
        },
        {
            id: 4,
            userId: 5,
            content: "เพิ่งเจอชีสมังสวิรัติที่ละลายได้ดีมาก! รสชาติเหมือนของจริง เหมาะกับสูตรมังสวิรัติ!",
            image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            likes: 19,
            comments: 4,
            time: "2 วันที่แล้ว",
            type: "post"
        },
        {
            id: 5,
            userId: 4,
            content: "ซื้อของจากตลาดเกษตรกร! ผักสด ขนมปังท้องถิ่น และน้ำผึ้ง สนับสนุนเกษตรกรรู้สึกดี!",
            image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            likes: 51,
            comments: 6,
            time: "3 วันที่แล้ว",
            type: "post"
        }
    ],
    
    // สูตรอาหาร
    recipes: [
        {
            id: 1,
            userId: 2,
            title: "ต้มยำกุ้ง",
            image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            rating: 4.8,
            reviews: 156,
            ingredients: [
                "กุ้งสด 400 กรัม",
                "น้ำ 1 ลิตร",
                "ตะไคร้ 3 ต้น หั่นท่อน",
                "ใบมะกรูด 5-6 ใบ",
                "ข่า 5 แว่น",
                "น้ำปลา 2 ช้อนโต๊ะ",
                "น้ำมะนาว 3 ช้อนโต๊ะ",
                "พริกขี้หนู 10 เม็ด",
                "เห็ดฟาง 200 กรัม",
                "ผักชีสำหรับตกแต่ง"
            ],
            instructions: [
                "ตั้งน้ำให้เดือด ใส่ตะไคร้ ข่า และใบมะกรูด ต้มจนหอม",
                "ใส่กุ้งและเห็ดฟาง ปรุงรสด้วยน้ำปลาและพริกขี้หนู",
                "ต้มจนกุ้งสุก ปิดไฟแล้วใส่น้ำมะนาว",
                "ชิมรสและปรับปรุงตามชอบ โรยผักชีก่อนเสิร์ฟ"
            ],
            dietaryInfo: ["ปราศจากนม", "ปราศจากกลูเตน"]
        },
        {
            id: 2,
            userId: 5,
            title: "ผัดไทยมังสวิรัติ",
            image: "https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.7,
            reviews: 89,
            ingredients: [
                "เส้นจันท์ 300 กรัม",
                "เต้าหู้แข็ง 200 กรัม หั่นเต๋า",
                "ถั่วงอก 150 กรัม",
                "กุยช่าย 50 กรัม",
                "น้ำมะขามเปียก 3 ช้อนโต๊ะ",
                "น้ำตาลปี๊บ 2 ช้อนโต๊ะ",
                "น้ำปลามังสวิรัติ 2 ช้อนโต๊ะ",
                "ถั่วลิสงคั่ว 50 กรัม",
                "น้ำมันพืช 2 ช้อนโต๊ะ",
                "พริกป่นตามชอบ"
            ],
            instructions: [
                "แช่เส้นจันท์ในน้ำอุ่น 15 นาที แล้วสะเด็ดน้ำ",
                "ผัดเต้าหู้ในน้ำมันจนเหลือง ใส่เส้นจันท์และน้ำเล็กน้อย",
                "ผสมน้ำมะขามเปียก น้ำตาลปี๊บ และน้ำปลามังสวิรัติ ใส่ในกระทะ",
                "ผัดจนส่วนผสมเข้ากัน ใส่ถั่วงอกและกุยช่าย",
                "ผัดเร็วๆ แล้วปิดไฟ โรยถั่วลิสงและพริกป่นก่อนเสิร์ฟ"
            ],
            dietaryInfo: ["มังสวิรัติ", "ปราศจากนม", "ปราศจากไข่"]
        },
        {
            id: 3,
            userId: 3,
            title: "แกงเขียวหวานผัก",
            image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.9,
            reviews: 124,
            ingredients: [
                "มะเขือเปาะ 200 กรัม",
                "ฟักทอง 200 กรัม",
                "น้ำกะทิ 500 มล.",
                "น้ำพริกแกงเขียวหวาน 3 ช้อนโต๊ะ",
                "ใบโหระพา 50 กรัม",
                "น้ำปลา 2 ช้อนโต๊ะ",
                "น้ำตาลปี๊บ 1 ช้อนโต๊ะ",
                "พริกชี้ฟ้าแดง 2 เม็ด",
                "น้ำมันพืช 1 ช้อนโต๊ะ"
            ],
            instructions: [
                "ตั้งกระทะ ผัดน้ำพริกแกงเขียวหวานกับน้ำมันจนหอม",
                "ใส่กะทิครึ่งหนึ่ง ต้มจนแตกมัน",
                "ใส่มะเขือเปาะและฟักทอง ตามด้วยกะทิที่เหลือ",
                "ปรุงรสด้วยน้ำปลาและน้ำตาลปี๊บ ต้มจนผักสุก",
                "ใส่ใบโหระพาและพริกชี้ฟ้า ปิดไฟแล้วเสิร์ฟ"
            ],
            dietaryInfo: ["มังสวิรัติ", "ปราศจากนม", "ปราศจากกลูเตน"]
        },
        {
            id: 4,
            userId: 1,
            title: "ขนมปังเปรี้ยวสูตรไทย",
            image: "https://images.unsplash.com/photo-1585478259715-4d3f99f57309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            rating: 4.6,
            reviews: 78,
            ingredients: [
                "แป้งสาลี 500 กรัม",
                "น้ำ 350 กรัม",
                "หัวเชื้อขนมปังเปรี้ยว 100 กรัม",
                "เกลือ 10 กรัม"
            ],
            instructions: [
                "ผสมแป้งและน้ำ ทิ้งไว้ 30 นาที",
                "ใส่หัวเชื้อและเกลือ ผสมให้เข้ากัน",
                "นวดโดยยืดและพับแป้ง 4 รอบ ทุก 30 นาที",
                "หมักจนแป้งขึ้นเป็นสองเท่า (4-6 ชั่วโมง)",
                "ขึ้นรูปและวางในตะกร้า",
                "แช่เย็น 8-12 ชั่วโมง",
                "อบที่ 245°C ในหม้ออบ 30 นาที จากนั้นเปิดฝาอบต่อ 15-20 นาที",
                "พักให้เย็นก่อนหั่น"
            ],
            dietaryInfo: ["มังสวิรัติ", "ปราศจากนม"]
        },
        {
            id: 5,
            userId: 4,
            title: "ขนมกล้วยไร้กลูเตน",
            image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            rating: 4.5,
            reviews: 63,
            ingredients: [
                "กล้วยน้ำว้าสุก 3 ลูก",
                "ไข่ไก่ 2 ฟอง",
                "น้ำมันมะพร้าว 75 กรัม",
                "น้ำตาลมะพร้าว 50 กรัม",
                "กลิ่นวานิลลา 1 ช้อนชา",
                "แป้งไร้กลูเตน 200 กรัม",
                "เบกกิ้งโซดา 1 ช้อนชา",
                "อบเชยป่น 1/2 ช้อนชา",
                "เกลือ 1/4 ช้อนชา",
                "ถั่ววอลนัทสับ 50 กรัม (ถ้ามี)"
            ],
            instructions: [
                "อุ่นเตาอบที่ 175°C รองพิมพ์ด้วยกระดาษไข",
                "บดกล้วย ผสมกับไข่ น้ำมัน น้ำตาล และวานิลลา",
                "ผสมแป้ง เบกกิ้งโซดา อบเชย และเกลือในชามอีกใบ",
                "ผสมส่วนผสมแห้งและเปียกให้เข้ากัน",
                "ใส่ถั่ววอลนัทถ้ามี",
                "เทลงพิมพ์ อบ 50-55 นาที จนไม้จิ้มฟันสะอาด",
                "พักในพิมพ์ 10 นาที แล้วย้ายไปตะแกรงให้เย็น"
            ],
            dietaryInfo: ["ปราศจากกลูเตน", "มีไข่"]
        }
    ],
    
    // ของเหลือ
    leftovers: [
        {
            id: 1,
            userId: 3,
            title: "แกงเขียวหวานผักโฮมเมด",
            image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ทำแกงเขียวหวานผักเยอะเกิน! เป็นมังสวิรัติ มีมะเขือและฟักทอง เหลือประมาณ 4 ที่ รับได้วันนี้หรือพรุ่งนี้",
            distance: 1.2,
            credits: 3,
            time: "2 ชั่วโมงที่แล้ว",
            allergens: ["ไม่มี"],
            freshness: "ทำวันนี้"
        },
        {
            id: 2,
            userId: 2,
            title: "ขนมปังเปรี้ยวสด",
            image: "https://images.unsplash.com/photo-1585478259715-4d3f99f57309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            description: "อบขนมปังเปรี้ยวเยอะเกิน! มี 2 ก้อน เปลือกกรอบ เนื้อนุ่ม อบสดเช้านี้",
            distance: 2.5,
            credits: 2,
            time: "5 ชั่วโมงที่แล้ว",
            allergens: ["กลูเตน"],
            freshness: "อบวันนี้"
        },
        {
            id: 3,
            userId: 5,
            title: "เค้กช็อกโกแลตมังสวิรัติ",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "เหลือเค้กช็อกโกแลตมังสวิรัติครึ่งก้อนจากวันเกิด ใช้โกโก้ออร์แกนิกและน้ำตาลมะพร้าว",
            distance: 3.7,
            credits: 2,
            time: "เมื่อวาน",
            allergens: ["กลูเตน", "ถั่ว"],
            freshness: "ทำเมื่อวาน"
        },
        {
            id: 4,
            userId: 1,
            title: "พิซซ่าโฮมเมด",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ทำพิซซ่าเยอะเกิน! มีพิซซ่ามาการิต้า 1 ถาด แป้งและซอสทำเอง",
            distance: 0.8,
            credits: 3,
            time: "3 ชั่วโมงที่แล้ว",
            allergens: ["นม", "กลูเตน"],
            freshness: "ทำวันนี้"
        },
        {
            id: 5,
            userId: 4,
            title: "ซุปฟักทอง",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "ทำซุปฟักทองเยอะเกิน! เหลือ 4 ที่ มังสวิรัติและปราศจากกลูเตน แช่แข็งได้",
            distance: 4.2,
            credits: 2,
            time: "เมื่อวาน",
            allergens: [],
            freshness: "ทำเมื่อวาน"
        }
    ],
    
    // โปรไฟล์เดท
    datingProfiles: [
        {
            id: 1,
            name: "อเล็กซ์",
            age: 28,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "เชฟมืออาชีพที่รักการทำอาหารไทย อยากหาคนมาร่วมทำอาหารและกินด้วยกัน!",
            distance: 3.2,
            dietaryPreferences: ["กินทุกอย่าง", "ไทย"],
            cuisinePreferences: ["ไทย", "อีสาน", "เหนือ"]
        },
        {
            id: 2,
            name: "เทย์เลอร์",
            age: 31,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "นักชิมมังสวิรัติที่ชอบไปตลาดเกษตรกร อยากชวนมาทำอาหารจากวัตถุดิบสด!",
            distance: 1.5,
            dietaryPreferences: ["มังสวิรัติ", "อาหารทะเล"],
            cuisinePreferences: ["ไทย", "อินเดีย", "เมดิเตอร์เรเนียน"]
        },
        {
            id: 3,
            name: "จอร์แดน",
            age: 26,
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            bio: "นักอบขนมมังสวิรัติที่รักของหวาน ทำของหวาน plant-based อร่อยสุดๆ!",
            distance: 4.7,
            dietaryPreferences: ["มังสวิรัติ", "ปราศจากกลูเตน"],
            cuisinePreferences: ["ญี่ปุ่น", "เกาหลี", "เวียดนาม"]
        },
        {
            id: 4,
            name: "มอร์แกน",
            age: 29,
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            bio: "หลงใหลในอาหารยั่งยืนและการทำอาหารแบบ zero-waste อยากหาคนที่รักอาหารจากฟาร์ม!",
            distance: 2.8,
            dietaryPreferences: ["มังสวิรัติ", "ออร์แกนิก"],
            cuisinePreferences: ["เม็กซิกัน", "สเปน", "อเมริกัน"]
        },
        {
            id: 5,
            name: "เคซี่ย์",
            age: 33,
            image: "https://randomuser.me/api/portraits/men/42.jpg",
            bio: "นักทำเบียร์ที่บ้านและหลงใหลในบาร์บีคิว อยากหาคนมากินเนื้อรมควันและดื่มเบียร์ด้วยกัน!",
            distance: 5.1,
            dietaryPreferences: ["กินทุกอย่าง", "เน้นเนื้อ"],
            cuisinePreferences: ["อเมริกัน", "บาร์บีคิว", "เยอรมัน"]
        },
        {
            id: 6,
            name: "ไรลี่ย์",
            age: 27,
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "ตาม diet คีโตและชอบลองสูตร low-carb ติดกาแฟและรักการออกกำลังกาย",
            distance: 3.9,
            dietaryPreferences: ["คีโต", "พาลีโอ"],
            cuisinePreferences: ["กรีก", "ตุรกี", "ตะวันออกกลาง"]
        },
        {
            id: 7,
            name: "เจมี่",
            age: 30,
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            bio: "คนรักซูชิและเชฟญี่ปุ่นสมัครเล่น ทำราเมนและข้าวซูชิได้เยี่ยม!",
            distance: 2.3,
            dietaryPreferences: ["อาหารทะเล", "ญี่ปุ่น"],
            cuisinePreferences: ["ญี่ปุ่น", "จีน", "เกาหลี"]
        },
        {
            id: 8,
            name: "เอเวอรี่",
            age: 25,
            image: "https://randomuser.me/api/portraits/women/74.jpg",
            bio: "นักอบขนมปราศจากกลูเตน ทำแป้งพิซซ่าปราศจากกลูเตนได้สมบูรณ์แบบ!",
            distance: 4.5,
            dietaryPreferences: ["ปราศจากกลูเตน", "ปราศจากนม"],
            cuisinePreferences: ["อิตาเลียน", "ฝรั่งเศส", "อเมริกัน"]
        }
    ]
};
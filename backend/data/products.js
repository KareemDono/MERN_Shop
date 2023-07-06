const products = [
  // Phones
  {
    name: 'IPHONE 12 PRO',
    image: '/images/iphone12pro.jpg',
    description:
      'The iPhone 12 Pro is a flagship smartphone that combines exceptional performance with elegant design. Powered by the A14 Bionic chip, it delivers lightning-fast speeds and unparalleled efficiency, making multitasking and resource-intensive tasks a breeze. The 6.1-inch Super Retina XDR display offers breathtaking visuals with vibrant colors, deep blacks, and impressive brightness. Its stainless steel frame and textured glass back not only provide durability but also give the device a premium and luxurious feel. With advanced camera capabilities, including a triple-camera system with Night mode, the iPhone 12 Pro lets you capture professional-grade photos and videos, even in low-light environments.',
    brand: 'Apple',
    category: 'Phones',
    price: 699.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'SAMSUNG GALAXY S23 ULTRA',
    image: '/images/galaxys23.jpg',
    description:
      "The Samsung Galaxy S23 Ultra is a state-of-the-art device featuring a sleek design and cutting-edge technology. It sports a 7-inch Dynamic AMOLED 2X display with a resolution of 3200 x 1440 pixels, offering stunning clarity and vibrant color reproduction. The device is powered by a next-gen Exynos processor paired with a significant RAM allotment for ultra-fast performance and seamless multitasking. The rear camera system, boasting four lenses including a periscope telephoto for exceptional zoom capabilities, ensures remarkable photos and videos. With its advanced features such as biometric security, wireless charging, and water resistance, the Galaxy S23 Ultra reinforces Samsung's reputation as a leader in smartphone innovation.",
    brand: 'Samsung',
    category: 'Phones',
    price: 1299.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'GOOGLE PIXEL 6',
    image: '/images/pixel6.jpg',
    description:
      "The Google Pixel 6 is a remarkable smartphone known for its superior software and impressive hardware. It boasts a 6.4-inch OLED display with a 90Hz refresh rate, offering sharp and fluid visuals. Under the hood, the device houses Google’s custom Tensor SoC, delivering high-speed performance and advanced machine learning capabilities. The camera system, recognized for its image processing, features a dual-lens setup that excels in both daylight and low light conditions. Integrated with the latest Android OS and Google's software ecosystem, the Pixel 6 ensures seamless user experience and reliable security updates.",
    brand: 'Google',
    category: 'Phones',
    price: 599.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'ONEPLUS 11',
    image: '/images/oneplus11.jpg',
    description:
      "The OnePlus 11 is a top-tier smartphone that merges impressive design with advanced technology. It showcases a 6.7-inch Fluid AMOLED display with 120Hz refresh rate, providing ultra-smooth visuals and deep color saturation. Equipped with the latest Qualcomm Snapdragon chipset and substantial RAM, the OnePlus 11 offers smooth performance and efficient multitasking capabilities. The triple camera setup at the back, featuring a high-resolution primary lens, ultra-wide angle lens, and telephoto lens, delivers exceptional photo and video quality. Alongside its fast Warp Charge technology and OxygenOS, the OnePlus 11 continues to exemplify the brand's commitment to providing premium devices at a competitive price point.",
    brand: 'OnePlus',
    category: 'Phones',
    price: 799.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'SONY XPERIA 1 III',
    image: '/images/xperia1iii.jpg',
    description:
      "The Sony Xperia 1 III is a high-end smartphone renowned for its cinematic capabilities and distinctive design. It features a stunning 6.5-inch 4K HDR OLED display with a 120Hz refresh rate, making it an ideal device for media consumption. Inside, it's powered by a top-tier Qualcomm Snapdragon chipset and ample RAM, delivering robust performance across the board. The device's triple-lens camera setup, co-developed with the engineers from Sony's Alpha cameras, promises impressive photography and videography results, especially in its Pro modes. With unique features like Dolby Atmos sound, high-resolution audio, and 5G connectivity, the Xperia 1 III solidifies Sony's commitment to delivering unparalleled multimedia experiences.",
    brand: 'Sony',
    category: 'Phones',
    price: 499.99,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },

  // Consoles
  {
    name: 'PLAYSTATION 5',
    image: '/images/ps5.jpg',
    description:
      "The Sony PlayStation 5 is a next-generation gaming console that delivers immersive and high-speed gaming experiences. It's powered by a custom AMD Zen 2 CPU and RDNA 2 GPU, which together allow for ray-tracing capabilities and up to 8K resolution. The console also includes a high-speed SSD, providing lightning-fast load times and an ability to render complex game worlds in seconds. The PS5's innovative DualSense controller offers haptic feedback and adaptive triggers, introducing a new level of immersion by letting players feel in-game actions. With backward compatibility for most PS4 games and a strong lineup of exclusive titles, the PlayStation 5 stands as a compelling choice for both current PlayStation fans and new users.",
    brand: 'Sony',
    category: 'Consoles',
    price: 499.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'XBOX SERIES X',
    image: '/images/xboxseriesx.jpg',
    description:
      "The Microsoft Xbox Series X is a high-powered gaming console representing the pinnacle of Microsoft's gaming hardware. Driven by a custom AMD Zen 2 CPU and RDNA 2 GPU, it delivers true 4K gaming and up to 8K HDR, presenting players with striking graphics and seamless gameplay. Its proprietary 1TB NVMe SSD significantly reduces load times, providing near-instant game access. The Xbox Series X maintains compatibility with a vast library of Xbox One, Xbox 360, and original Xbox games, honoring the brand's rich history. Coupled with the revolutionary Xbox Game Pass subscription service, it offers unparalleled value and variety for gamers of all preferences.",
    brand: 'Microsoft',
    category: 'Consoles',
    price: 549.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'NINTENDO SWITCH OLED',
    image: '/images/switcholed.jpg',
    description:
      "The Nintendo Switch OLED is an enhanced version of the beloved Nintendo Switch, offering upgrades that enhance both handheld and docked play. It features a 7-inch OLED screen, providing vibrant colors and crisp details, enhancing gameplay during portable use. The device also includes improved audio for handheld and tabletop play, contributing to an immersive gaming experience. The updated model has a wider adjustable stand for tabletop mode, allowing for better stability and multiple viewing angles. Alongside these enhancements, the Nintendo Switch OLED maintains the core hybrid design, allowing for play on the big screen or on-the-go, and retains compatibility with all existing Nintendo Switch games.",
    brand: 'Nintendo',
    category: 'Consoles',
    price: 299.99,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'PLAYSTATION 4 PRO - 500 MILLION LIMITED EDITION',
    image: '/images/ps4pro.jpg',
    description:
      "The PlayStation 4 Pro - 500 Million Limited Edition is a special version of Sony's popular gaming console, released to celebrate over 500 million PlayStation systems sold worldwide since the brand's inception. The console stands out with a stunning translucent blue finish, letting players glimpse into the inner workings of the device. It's powered by the same high-performing hardware as the regular PS4 Pro, capable of rendering games in 4K resolution and providing HDR support. This limited edition also includes a massive 2TB hard drive, offering ample storage for games, apps, and other content. Additionally, the bundle features a matching DualShock 4 controller, PlayStation Camera, and a vertical stand, all in the distinctive dark blue translucent design, making it a true collector's item for PlayStation fans.",
    brand: 'Sony',
    category: 'Consoles',
    price: 2000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'XBOX ONE X',
    image: '/images/xboxonex.jpg',
    description:
      "The Xbox One X is a high-performance gaming console from Microsoft, renowned for its power and multi-media capabilities. It's driven by an eight-core AMD CPU clocked at 2.3GHz and a 6-teraflop AMD Radeon GPU, allowing it to run games in native 4K resolution while supporting HDR10 for a more vibrant and lifelike visual experience. The console features a 1TB hard drive, providing substantial storage for games and multimedia content. With backward compatibility, it offers access to a vast library of games from the Xbox One, Xbox 360, and original Xbox. The Xbox One X's integration with the Windows ecosystem and features like 4K Blu-ray playback make it not just a powerful gaming console, but also a comprehensive entertainment hub.",
    brand: 'Microsoft',
    category: 'Consoles',
    price: 299.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },

  // Keyboards
  {
    name: 'RAZER BLACKWIDOW V4 PRO',
    image: '/images/razerblkwidowv4.jpg',
    description:
      "The Razer BlackWidow V4 Pro is a premium mechanical gaming keyboard known for its robustness, performance, and advanced features. It employs Razer's acclaimed Green Mechanical Switches, designed to provide a satisfying clicky sound with an optimal actuation force, enhancing your gaming and typing experience. The keyboard supports Razer Chroma RGB, allowing for personalized key lighting with a spectrum of over 16.8 million colors. It offers wireless freedom with its high-speed, ultra-low-latency Razer™ HyperSpeed Wireless technology, while also providing a wired option for greater flexibility. Enhanced with fully programmable keys and onboard memory, the BlackWidow V4 Pro allows users to execute complex commands and macros effortlessly, making it a top choice for both gamers and power users.",
    brand: 'Razer',
    category: 'Keyboards',
    price: 229.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'LOGITECH MX MECHANICAL (MASTER SERIES)',
    image: '/images/logitechmechanical.jpg',
    description:
      "The Logitech MX Mechanical (Master Series) is a premium keyboard known for its unparalleled build quality, high-end aesthetics, and typing comfort. It uses high-precision tactile mechanical switches that deliver a satisfying keystroke, making it suitable for prolonged typing sessions. The keyboard is illuminated with smart backlighting that adjusts to lighting conditions and hand proximity, creating an optimal working environment. It supports Logitech's MX Palm Rest and MX Keys Mini for a complete and ergonomic desktop setup. Integrated with Logitech Flow technology, the MX Mechanical allows for seamless control over multiple computers, increasing productivity for both professionals and creatives.",
    brand: 'Logitech',
    category: 'Keyboards',
    price: 159.99,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'CORSAIR K100 RGB OPTICAL-MECHANICAL GAMING KEYBOARD',
    image: '/images/k100.jpg',
    description:
      "The Corsair K100 RGB Optical-Mechanical Gaming Keyboard is a high-end peripheral designed for gamers seeking peak performance and customization. It utilizes Corsair’s proprietary OPX optical-mechanical switches that offer lightning-fast response with a 1.0mm actuation distance, and they're guaranteed for over 150 million keystrokes. The keyboard features a per-key RGB backlighting and a 44-zone LightEdge across the top of the casing, which can be fully customized for an immersive and personalized gaming experience. An integrated iCUE control wheel allows seamless navigation and adjustment of specific settings within the Corsair iCUE software. The K100 also includes a plush detachable memory foam palm rest and six dedicated macro keys, ensuring ultimate comfort and convenience during prolonged gaming sessions.",
    brand: 'Corsair',
    category: 'Keyboards',
    price: 199.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'DUCKY ONE 3 COSMIC BLUE',
    image: '/images/duckycosmic.jpg',
    description:
      "The One 3 series features Ducky's all new QUACK Mechanics design philosophy which focuses on achieving best-in-class aesthetics, hotswap functionality, sound dampening, stabilizers, and more! The case for the One 3 maintains a low profile while allowing for a variety of color combinations with its unique 3-layer design. Enjoy the best acoustics you'll find in a prebuilt thanks to the One 3's silicone plate dampener and EVA foam case dampener.The Ducky One 3 Cosmic is hot-swappable with Ducky's exclusive top-of-the-line Kailh Yellow Sockets. Ducky's V2 stabilizers provide improved stability, feel, and sound. Thick Double Shot PBT keycaps with seamless legends, 3-level adjustable feet, an improved PCB design, detachable braided USB-C cable, and an improved macro layout are just a few of the features that makes the One 3 rise above the rest.",
    brand: 'Ducky',
    category: 'Keyboards',
    price: 159.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'HYPERX ALLOY ORIGINS 60 - MECHANICAL GAMING KEYBOARD',
    image: '/images/hyperalloy.jpg',
    description:
      "The HyperX Alloy Origins 60 is a compact mechanical gaming keyboard designed for gamers who value desk space and portability. Its 60% form factor forgoes the number pad and other keys for a smaller footprint, without compromising on the essentials needed for gaming. The keyboard utilizes HyperX's proprietary red switches, known for their linear key travel and smooth actuation, providing a balance between responsiveness and accuracy. It features customizable RGB backlighting, allowing users to create unique lighting profiles using the HyperX NGENUITY software. Built with a sturdy aluminum frame and equipped with advanced features like game mode, 100% anti-ghosting and full N-key rollover, the Alloy Origins 60 is a reliable and durable choice for gaming enthusiasts.",
    brand: 'HyperX',
    category: 'Keyboards',
    price: 79.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },

  // Mice
  {
    name: 'LOGITECH G502 X PLUS GAMING MOUSE',
    image: '/images/g502.jpg',
    description:
      'G502 X PLUS is the latest addition to legendary G502 lineage. Reinvented with our first-ever LIGHTFORCE hybrid switches, LIGHTSPEED pro-grade wireless, LIGHTSYNC RGB, HERO 25K sensor, and more.',
    brand: 'Logitech',
    category: 'Mice',
    price: 159.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'RAZER COBRA PRO',
    image: '/images/razercobra.jpg',
    description:
      "Razer Cobra Pro brings all the frills (and RGB) of Basilisk V3 Pro but opts for a traditional symmetrical design aimed more at gamers-first, work-second users. It also boasts impressive features and numerous upgrades to make it one of Razer's best all-around gaming mice yet.",
    brand: 'Razer',
    category: 'Mice',
    price: 179.99,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'CORSAIR M65 RGB ULTRA WIRELESS GAMING MOUSE',
    image: '/images/m65.jpg',
    description:
      "The Corsair M65 RGB Ultra Wireless is a high-performance gaming mouse designed for precision and versatility. Its core feature is the custom-tuned Corsair Marksman sensor, offering a staggering 26,000 DPI for ultra-accurate tracking. The mouse features a comfortable ergonomic design and a durable aluminum frame, along with a tunable weight system that allows you to adjust the center of gravity and overall heft to your preference. It boasts 10 fully programmable buttons, providing customization to fit your playstyle, along with dynamic, customizable two-zone RGB lighting. Offering both wired and wireless (via hyper-fast, sub-1ms Slipstream Corsair Wireless Technology) modes of operation, the M65 RGB Ultra Wireless is a complete package for gamers seeking no-compromise performance and flexibility.",
    brand: 'Corsair',
    category: 'Mice',
    price: 89.99,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'GLORIOUS MODEL O 2 WIRELESS GAMING MOUSE',
    image: '/images/glorious.jpg',
    description:
      "The Glorious Model O-2 Wireless is an exceptional gaming mouse, building upon the success of its wired predecessor with added wireless capabilities. It's renowned for its feather-light design, coming in at an ultra-lightweight build that caters to fast-paced, competitive gaming without compromising durability. The Model O-2 Wireless houses Glorious's proprietary BAMF sensor, capable of up to 19,000 DPI for high precision tracking. It offers low-latency wireless connectivity and a high-capacity battery for extended play sessions, with customizable RGB lighting to personalize the aesthetic. With a honeycomb shell for added comfort and its high-performance features, the Glorious Model O-2 Wireless stands as an excellent choice for those seeking a blend of style, comfort, and peak performance in their gaming peripherals.",
    brand: 'Glorious',
    category: 'Mice',
    price: 99.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'REDDRAGON M721-PRO LONEWOLF2',
    image: '/images/reddragon.jpg',
    description:
      "The Redragon M721-PRO Lonewolf2 is a versatile gaming mouse designed for gamers who value precision, customization, and durability. It features a high-precision sensor with an adjustable DPI up to 32,000, allowing for exceptional tracking accuracy during intense gaming sessions. The mouse includes 10 programmable buttons and 5 memory profiles, providing plenty of customization options to suit different games and playstyles. The M721-PRO boasts customizable RGB lighting across multiple zones, adding a personal touch to your gaming setup. With a comfortable ergonomic design and a durable construction, the Redragon M721-PRO Lonewolf2 is an excellent choice for both casual and competitive gamers.",
    brand: 'Red Dragon',
    category: 'Mice',
    price: 99.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'STEELSERIES AEROX 5 WIRELESS GAMING MOUSE',
    image: '/images/aerox5.jpg',
    description:
      'Ultra lightweight design at 74g for speed and precision in fast-paced games. Ergonomic 9-button programmable layout with 5 quick-action side buttons. AquaBarrier™ technology for water resistance and protection. Quantum 2.0 Wireless for unreal data speed, 2.4 GHz or Bluetooth 5.0, and 180 hours of play with fast charging. Custom TrueMove Air precision optical sensor with true 1-to-1 tracking. Next-gen Golden Micro IP54 Switches, 80M+ click durability.',
    brand: 'Steelseries',
    category: 'Mice',
    price: 129.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
];

export default products;

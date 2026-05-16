import {
  Project,
  BlogPost,
  Skill,
  SkillCategory,
  TimelineItem,
  PersonalInfo,
  SocialLink,
} from "./types";

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Akhmad Efendy Mooduto",
  title: "Software Developer",
  bio: "A Software Developer with seven years of experience specializing in Agile software development, back-end development such as PHP and JavaScript, and web development. A strong history of developing innovative application features and software solutions to enhance the user experience.",
  email: "zvrendy@gmail.com",
  location: "Surabaya, Indonesia",
  phone: "+62 xxx xxxx xxxx",
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
};

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/zvrendy",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/akhmad-efendy-mooduto",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:zvrendy@gmail.com",
    icon: "mail",
  },
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 85, category: SkillCategory.FRONTEND },
  { name: "Next.js", level: 85, category: SkillCategory.FRONTEND },
  { name: "TypeScript", level: 80, category: SkillCategory.FRONTEND },
  { name: "JavaScript", level: 90, category: SkillCategory.FRONTEND },
  { name: "jQuery", level: 90, category: SkillCategory.FRONTEND },
  { name: "AJAX", level: 85, category: SkillCategory.FRONTEND },
  { name: "CSS", level: 85, category: SkillCategory.FRONTEND },
  { name: "Ext.JS", level: 75, category: SkillCategory.FRONTEND },
  { name: "Inertia.js", level: 80, category: SkillCategory.FRONTEND },

  // Backend
  { name: "PHP", level: 95, category: SkillCategory.BACKEND },
  { name: "Laravel", level: 90, category: SkillCategory.BACKEND },
  { name: "CodeIgniter", level: 90, category: SkillCategory.BACKEND },
  { name: "REST API", level: 90, category: SkillCategory.BACKEND },
  { name: "cURL", level: 85, category: SkillCategory.BACKEND },

  // Database
  { name: "MySQL", level: 95, category: SkillCategory.DATABASE },
  { name: "SQL Server", level: 80, category: SkillCategory.DATABASE },

  // Tools
  { name: "Git", level: 85, category: SkillCategory.TOOLS },
  { name: "Postman", level: 90, category: SkillCategory.TOOLS },
  { name: "DataTables", level: 85, category: SkillCategory.TOOLS },
  { name: "Google Maps API", level: 80, category: SkillCategory.TOOLS },
];

// Timeline (Experience & Education)
export const timeline: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Information Technology Support Staff",
    organization: "Miracle Aesthetic Clinic",
    location: "Indonesia",
    startDate: "2019-12",
    current: true,
    description: "Managing IT infrastructure and developing custom software solutions for clinic operations",
    achievements: [
      "Resolved operational issues within running systems",
      "Maintained system and database performance",
      "Contributed to system development according to company needs",
      "Developed software support system using MySQL and PHP CodeIgniter",
      "Built custom applications using PHP, MySQL, and Ajax"
    ],
    type: "experience",
  },
  {
    id: "exp-2",
    title: "Information Technology Staff",
    organization: "PrimaryCons Tax Consultant",
    location: "Indonesia",
    startDate: "2013-07",
    endDate: "2019-11",
    current: false,
    description: "Managed employee database and developed custom applications for tax consulting operations",
    achievements: [
      "Database Administrator managing employee database systems",
      "Developed custom applications using Visual Basic",
      "Maintained and optimized database performance",
      "Provided technical support for business operations"
    ],
    type: "experience",
  },
  {
    id: "exp-3",
    title: "IT Support Staff",
    organization: "Saung Net Cyber Café",
    location: "Indonesia",
    startDate: "2012-01",
    endDate: "2012-12",
    current: false,
    description: "Provided IT support and maintained computer systems for cyber café operations",
    achievements: [
      "Maintained computer hardware and software systems",
      "Provided technical support to customers",
      "Managed network infrastructure",
      "Performed regular system maintenance and updates"
    ],
    type: "experience",
  },
  {
    id: "exp-4",
    title: "Information Technology Staff",
    organization: "88 Cyber Café Surabaya",
    location: "Surabaya, Indonesia",
    startDate: "2010-01",
    endDate: "2011-01",
    current: false,
    description: "Computer hardware technician responsible for installation and maintenance",
    achievements: [
      "Installed and configured computer systems",
      "Performed hardware maintenance and repairs",
      "Troubleshot technical issues",
      "Managed system updates and backups"
    ],
    type: "experience",
  },
  {
    id: "edu-1",
    title: "Bachelor of Computer Science / Information Technology",
    organization: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    location: "Surabaya, Indonesia",
    startDate: "2013-09",
    endDate: "2017-12",
    current: false,
    description: "Focused on software engineering and information technology (Teknik Informatika)",
    achievements: [
      "Completed comprehensive study in software development",
      "Gained expertise in database management",
      "Learned web development and programming fundamentals",
      "Developed strong foundation in computer science principles"
    ],
    type: "education",
  },
];

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "AsetKu",
    description: "Asset Management System for efficient tracking and management of company assets",
    longDescription: `
A comprehensive Asset Management System designed to streamline asset tracking and management processes. Built with modern full-stack technologies including Laravel for robust backend operations and Inertia.js with React for a seamless, reactive user interface.

The system provides complete asset lifecycle management from acquisition to disposal, with features including asset registration, assignment tracking, maintenance scheduling, depreciation calculations, and comprehensive reporting capabilities.

Key technical highlights include server-side rendering with Inertia.js for optimal performance, real-time updates, role-based access control, and an intuitive dashboard for asset analytics and insights.
    `,
    technologies: ["Laravel", "Inertia.js", "React", "MySQL", "PHP"],
    category: "Full Stack",
    image: "/images/projects/asetku.jpg",
    images: [
      "/images/projects/asetku-1.jpg",
      "/images/projects/asetku-2.jpg",
      "/images/projects/asetku-3.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/asetku",
    featured: true,
    createdAt: "2024-04-01",
  },
  {
    id: "2",
    title: "Satusehat API Integration",
    description: "Healthcare platform integration with Indonesia's national health information system",
    longDescription: `
Integration project with Satusehat platform (https://satusehat.kemkes.go.id/platform) to support government health initiatives and health information systems in accordance with regulatory requirements.

The integration enables seamless data exchange between healthcare facilities and the national health information system, facilitating better healthcare coordination and patient data management across Indonesia.

Built using REST APIs with comprehensive testing using Postman, the integration handles patient data synchronization, medical record sharing, and ensures compliance with Indonesian healthcare regulations. Implemented using PHP with cURL for reliable API communication.
    `,
    technologies: ["PHP", "REST API", "Postman", "cURL", "API Testing"],
    category: "Backend",
    image: "/images/projects/satusehat.jpg",
    images: [
      "/images/projects/satusehat-1.jpg",
      "/images/projects/satusehat-2.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/satusehat-integration",
    featured: true,
    createdAt: "2024-03-01",
  },
  {
    id: "3",
    title: "MISHR - Employee Attendance App",
    description: "Mobile employee attendance system with real-time location tracking and comprehensive reporting",
    longDescription: `
A comprehensive Employee Attendance App that simplifies clocking in and out with a mobile application built on Flutter for both Android and iOS platforms. The backend is powered by PHP and MySQL, providing robust data management and processing capabilities.

Features include real-time check-ins with GPS location tracking using Google Maps integration, automated attendance reports, efficient schedule management, leave requests, and overtime tracking. The system provides managers with detailed analytics and attendance patterns.

The application emphasizes security and accuracy with location verification, photo verification for check-ins, and comprehensive audit trails. DataTables integration provides powerful reporting and data analysis capabilities for HR departments.
    `,
    technologies: ["PHP", "MySQL", "jQuery", "Google Maps API", "DataTables", "Flutter"],
    category: "Full Stack",
    image: "/images/projects/mishr.jpg",
    images: [
      "/images/projects/mishr-1.jpg",
      "/images/projects/mishr-2.jpg",
      "/images/projects/mishr-3.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/mishr-attendance",
    featured: true,
    createdAt: "2022-01-01",
  },
  {
    id: "4",
    title: "Point of Sales System",
    description: "Comprehensive POS system for mobile credit business with inventory and financial management",
    longDescription: `
A complete Point of Sale (POS) system designed specifically for mobile credit (pulsa) businesses. The system streamlines transaction processing and business operations with an intuitive interface and powerful backend.

Features include product catalog management, real-time inventory tracking, customer management, transaction processing, receipt printing, financial reporting, and stock analysis. The system handles multiple product types including mobile credit, data packages, and digital vouchers.

Built with Laravel for robust backend operations and jQuery for responsive frontend interactions. The system provides comprehensive reports for sales analysis, inventory levels, profit margins, and customer purchasing patterns, helping business owners make informed decisions.
    `,
    technologies: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL"],
    category: "Full Stack",
    image: "/images/projects/pos.jpg",
    images: [
      "/images/projects/pos-1.jpg",
      "/images/projects/pos-2.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/pos-pulsa",
    featured: false,
    createdAt: "2023-01-01",
  },
  {
    id: "5",
    title: "E-Office Helpdesk System",
    description: "Digital helpdesk and document management system for efficient office operations",
    longDescription: `
A comprehensive helpdesk application that streamlines office operations and IT support processes. The system enables ticket creation, routing to relevant divisions, and digital request letter generation.

Features include ticket management with priority levels, assignment workflow, status tracking, digital document creation, approval workflows, notification system, and comprehensive reporting. The system improves response times and provides transparency in handling internal requests.

Built with Laravel framework, utilizing DataTables for efficient data presentation and jQuery for interactive user interfaces. The system includes role-based access control, ensuring secure and organized handling of office requests and documentation.
    `,
    technologies: ["Laravel", "PHP", "jQuery", "DataTables", "MySQL"],
    category: "Full Stack",
    image: "/images/projects/eoffice.jpg",
    images: [
      "/images/projects/eoffice-1.jpg",
      "/images/projects/eoffice-2.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/eoffice-helpdesk",
    featured: false,
    createdAt: "2021-05-01",
  },
  {
    id: "6",
    title: "Point of Sales System version 2",
    description: "Comprehensive POS system for mobile credit business with inventory and financial management",
    longDescription: `
A complete Point of Sale (POS) system designed specifically for mobile credit (pulsa) businesses. The system streamlines transaction processing and business operations with an intuitive interface and powerful backend.

Features include product catalog management, real-time inventory tracking, customer management, transaction processing, receipt printing, financial reporting, and stock analysis. The system handles multiple product types including mobile credit, data packages, and digital vouchers.

Built with Laravel for robust backend operations and jQuery for responsive frontend interactions. The system provides comprehensive reports for sales analysis, inventory levels, profit margins, and customer purchasing patterns, helping business owners make informed decisions.
    `,
    technologies: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "React", "Inertia.js", "Tailwind CSS", "shadcn/ui"],
    category: "Full Stack",
    image: "/images/projects/pos.jpg",
    images: [
      "/images/projects/pos-1.jpg",
      "/images/projects/pos-2.jpg",
    ],
    githubUrl: "https://github.com/zvrendy/pos-pulsa",
    featured: false,
    createdAt: "2023-01-01",
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Laravel and Inertia.js",
    excerpt: "Learn how to build modern web applications using Laravel with Inertia.js for seamless backend-frontend integration.",
    content: `
# Getting Started with Laravel and Inertia.js

Laravel combined with Inertia.js offers a powerful approach to building modern web applications. In this post, we'll explore how to create a seamless full-stack application without the complexity of traditional SPAs.

## What is Inertia.js?

Inertia.js allows you to create fully client-side rendered, single-page apps, without much of the complexity that comes with modern SPAs. It does this by leveraging existing server-side patterns.

- **No API Required**: Build monolithic applications
- **Server-Side Routing**: Use Laravel routes
- **React/Vue Integration**: Use modern frontend frameworks
- **Code Splitting**: Automatic optimization

## Setting Up Your First Inertia App

\`\`\`bash
# Install Laravel
composer create-project laravel/laravel my-app

# Install Inertia
composer require inertiajs/inertia-laravel

# Install frontend dependencies
npm install @inertiajs/react react react-dom
\`\`\`

## Creating Your First Page

\`\`\`php
// routes/web.php
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Akhmad Efendy Mooduto'
    ]);
});
\`\`\`

## Key Takeaways

Inertia.js bridges the gap between traditional server-side applications and modern SPAs. It's perfect for developers who want the benefits of both worlds without the complexity.
    `,
    author: "Akhmad Efendy Mooduto",
    publishedAt: "2024-04-15",
    tags: ["Laravel", "Inertia.js", "React", "Web Development"],
    category: "Tutorial",
    readTime: 8,
    image: "/images/blog/laravel-inertia.jpg",
  },
  {
    id: "2",
    title: "Building RESTful APIs with PHP and Laravel",
    excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Laravel framework.",
    content: `
# Building RESTful APIs with PHP and Laravel

Laravel provides an excellent foundation for building RESTful APIs. Let's explore best practices and patterns for creating robust, scalable APIs.

## API Resource Controllers

Laravel's resource controllers make it easy to build RESTful APIs:

\`\`\`php
// app/Http/Controllers/API/ProductController.php
class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
        ]);

        $product = Product::create($validated);
        return new ProductResource($product);
    }
}
\`\`\`

## API Resources

Transform your models into clean JSON responses:

\`\`\`php
class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
\`\`\`

## Authentication with Sanctum

\`\`\`php
// Protect your routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
});
\`\`\`

## Conclusion

Laravel makes API development straightforward and maintainable. With built-in features like resource controllers, API resources, and Sanctum authentication, you can build production-ready APIs quickly.
    `,
    author: "Akhmad Efendy Mooduto",
    publishedAt: "2024-03-20",
    tags: ["PHP", "Laravel", "REST API", "Backend"],
    category: "Tutorial",
    readTime: 12,
    image: "/images/blog/laravel-api.jpg",
  },
  {
    id: "3",
    title: "Integrating Third-Party APIs with PHP",
    excerpt: "Learn best practices for integrating external APIs using PHP and cURL with proper error handling.",
    content: `
# Integrating Third-Party APIs with PHP

Integrating third-party APIs is a common requirement in modern web applications. Let's explore how to do this effectively using PHP and cURL.

## Setting Up cURL Requests

\`\`\`php
function makeApiRequest($url, $method = 'GET', $data = null)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);

    if ($data) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Content-Length: ' . strlen(json_encode($data))
        ]);
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [
        'code' => $httpCode,
        'data' => json_decode($response, true)
    ];
}
\`\`\`

## Error Handling

\`\`\`php
try {
    $result = makeApiRequest('https://api.example.com/data');

    if ($result['code'] !== 200) {
        throw new Exception('API request failed: ' . $result['code']);
    }

    // Process successful response
    return $result['data'];

} catch (Exception $e) {
    Log::error('API Integration Error: ' . $e->getMessage());
    return null;
}
\`\`\`

## Best Practices

- Always validate API responses
- Implement proper error handling
- Use environment variables for API keys
- Cache responses when appropriate
- Monitor API rate limits

## Conclusion

Proper API integration requires attention to error handling, security, and performance. Following these patterns will help you build reliable integrations.
    `,
    author: "Akhmad Efendy Mooduto",
    publishedAt: "2024-03-10",
    tags: ["PHP", "API Integration", "cURL", "Best Practices"],
    category: "Tutorial",
    readTime: 10,
    image: "/images/blog/php-api.jpg",
  },
  {
    id: "4",
    title: "Database Optimization Tips for MySQL",
    excerpt: "Essential techniques for optimizing MySQL database performance in PHP applications.",
    content: `
# Database Optimization Tips for MySQL

Database performance is crucial for application scalability. Let's explore essential MySQL optimization techniques.

## Indexing Strategies

\`\`\`sql
-- Create indexes on frequently queried columns
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_product_category ON products(category_id);

-- Composite indexes for multi-column queries
CREATE INDEX idx_order_user_date ON orders(user_id, created_at);
\`\`\`

## Query Optimization

\`\`\`php
// Bad: N+1 query problem
$users = User::all();
foreach ($users as $user) {
    echo $user->profile->bio; // Additional query per user
}

// Good: Eager loading
$users = User::with('profile')->get();
foreach ($users as $user) {
    echo $user->profile->bio; // No additional queries
}
\`\`\`

## Using EXPLAIN

\`\`\`sql
EXPLAIN SELECT * FROM orders
WHERE user_id = 1
AND status = 'completed';
\`\`\`

## Connection Pooling

\`\`\`php
// Configure persistent connections
'mysql' => [
    'driver' => 'mysql',
    'options' => [
        PDO::ATTR_PERSISTENT => true,
    ],
],
\`\`\`

## Caching Strategies

- Use query result caching
- Implement Redis for frequently accessed data
- Cache complex aggregations
- Set appropriate TTL values

## Conclusion

Database optimization is an ongoing process. Regular monitoring, proper indexing, and query optimization can significantly improve application performance.
    `,
    author: "Akhmad Efendy Mooduto",
    publishedAt: "2024-02-25",
    tags: ["MySQL", "Database", "Performance", "Optimization"],
    category: "Best Practices",
    readTime: 15,
    image: "/images/blog/mysql-optimization.jpg",
  },
];

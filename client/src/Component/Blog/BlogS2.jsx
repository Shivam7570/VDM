import React, { useState, useMemo } from "react";
import {
    Search,
    Calendar,
    Clock,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Flame,
    Mail,
    Tag,
    X,
    RotateCcw,
    CheckCircle2
} from "lucide-react";

export default function BlogS2() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);
    const [email, setEmail] = useState("");
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

    const POSTS_PER_PAGE = 6;

    const categories = [
        "All",
        "Real Estate Marketing",
        "Marketplace Marketing",
        "SEO & Ads",
        "Case Studies",
        "Tips & Guides",
    ];

    const blogPosts = [
        {
            id: 1,
            category: "REAL ESTATE MARKETING",
            title: "7 Proven Strategies to Generate High-Quality Real Estate Leads",
            description:
                "Discover actionable strategies to attract and convert high-intent property buyers using digital marketing.",
            content:
                "Real estate lead generation requires a targeted multi-channel approach. In this guide, we break down top 7 tactics including hyper-local Facebook ads, landing page conversion optimization, video walkthroughs, automated email drip sequences, and Google Local Service Ads. Implementing these strategies will help you build a steady pipeline of buyer and seller leads.",
            date: "May 10, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 2,
            category: "MARKETPLACE MARKETING",
            title: "How to Optimize Product Listings for Higher Sales on Amazon",
            description:
                "Learn listing optimization techniques that improve visibility, click-through rate and conversions.",
            content:
                "Optimizing product listings on marketplaces like Amazon, Flipkart, and Meesho is essential for driving organic sales. Focus on keyword-rich main titles, high-resolution A+ content images, clear bullet points highlighting key benefits, and competitive pricing strategies. Additionally, backend search terms play a crucial role in getting discovered.",
            date: "May 08, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 3,
            category: "SEO & ADS",
            title: "SEO vs Paid Ads: What Works Best for Real Estate Businesses?",
            description:
                "A detailed comparison to help real estate brands invest in the right channels for maximum ROI.",
            content:
                "Should your real estate agency invest in SEO or Pay-Per-Click ads? Paid ads offer instant lead flow and quick wins for specific property launches, while SEO delivers long-term sustainable organic traffic and brand authority. The ideal growth strategy combines both: run PPC for fast turnarounds while building SEO for lower customer acquisition costs over time.",
            date: "May 05, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 4,
            category: "REAL ESTATE MARKETING",
            title: "Local SEO for Real Estate: Rank Higher & Get More Enquiries",
            description:
                "Step-by-step local SEO tactics to improve your visibility on Google and Google Maps.",
            content:
                "When property seekers search for real estate agents near them, local SEO decides who gets the call. Optimize your Google Business Profile, collect authentic customer reviews, build local citations, and create neighborhood-specific landing pages. Higher map rankings directly correlate with increased direct calls and visit requests.",
            date: "May 02, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 5,
            category: "MARKETPLACE MARKETING",
            title: "Expand Your Brand: Sell on Multiple Marketplaces in 2025",
            description:
                "Why multi-channel selling matters and how to expand your brand across top marketplaces.",
            content:
                "Relying on a single e-commerce channel limits your growth potential. Multi-channel marketplace expansion lets you reach new customer demographics across various platforms. Learn how centralized inventory management, synchronized pricing, and unified order fulfillment prevent stockouts and boost multi-channel revenue.",
            date: "Apr 30, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 6,
            category: "TIPS & GUIDES",
            title: "How to Track & Measure Marketing ROI Accurately",
            description:
                "Track the right metrics, attribute leads correctly and scale campaigns that deliver real results.",
            content:
                "Stop wasting budget on ineffective ad campaigns. Measuring marketing ROI accurately requires setting up proper UTM tracking, conversion pixels, CRM integration, and multi-touch attribution models. Learn which key performance indicators (KPIs) matter most for your business metrics.",
            date: "Apr 28, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 7,
            category: "REAL ESTATE MARKETING",
            title: "Social Media Marketing for Real Estate: Build Trust & Visibility",
            description:
                "Use content, ads and reels to build brand presence and generate consistent enquiries.",
            content:
                "Short-form video content like Instagram Reels and YouTube Shorts are revolutionizing property marketing. Showcase virtual home tours, client testimonials, market update videos, and neighborhood guides to turn casual viewers into qualified buyer leads.",
            date: "Apr 25, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 8,
            category: "MARKETPLACE MARKETING",
            title: "Inventory Management Tips for Marketplace Sellers",
            description:
                "Avoid stockouts, reduce overstock and improve IPI with smart inventory management.",
            content:
                "Inventory health directly affects seller ratings and buy box winning probability. Maintain optimal stock levels using demand forecasting tools, automate reordering thresholds, and manage seasonal inventory spikes efficiently.",
            date: "Apr 22, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 9,
            category: "CASE STUDIES",
            title: "Case Study: 3X Growth for a Real Estate Brand in 90 Days",
            description:
                "See how we generated high-quality leads and improved ROI through performance marketing.",
            content:
                "In this case study, we examine how a regional real estate developer achieved 300% lead volume growth within 90 days. By revamping their ad creatives, narrowing target audience demographics, and building dedicated high-converting landing pages, cost-per-lead decreased by 42%.",
            date: "Apr 20, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        },
    ];

    const popularPosts = blogPosts.slice(0, 5);

    const topics = [
        { name: "Real Estate Marketing", category: "Real Estate Marketing" },
        { name: "Marketplace Marketing", category: "Marketplace Marketing" },
        { name: "SEO & Ads", category: "SEO & Ads" },
        { name: "Tips & Guides", category: "Tips & Guides" },
        { name: "Case Studies", category: "Case Studies" },
    ];

    // Filter posts based on active category & search query
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                activeTab === "All" ||
                post.category.toLowerCase() === activeTab.toLowerCase();

            const query = searchQuery.trim().toLowerCase();
            const matchesSearch =
                query === "" ||
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    // Calculate topic counts dynamically based on all blogPosts
    const topicCounts = useMemo(() => {
        const counts = {};
        topics.forEach((t) => {
            counts[t.name] = blogPosts.filter(
                (p) => p.category.toLowerCase() === t.category.toLowerCase()
            ).length;
        });
        return counts;
    }, []);

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const handleCategoryClick = (cat) => {
        setActiveTab(cat);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleResetFilters = () => {
        setActiveTab("All");
        setSearchQuery("");
        setCurrentPage(1);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setNewsletterSubmitted(true);
            setEmail("");
            setTimeout(() => setNewsletterSubmitted(false), 5000);
        }
    };

    return (
        <section id="blog-s2" className="bg-[#fcfbf8] py-10 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Category Filter & Search Bar */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-stone-200/80 pb-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    activeTab === cat
                                        ? "bg-amber-600 text-white shadow-sm"
                                        : "bg-amber-100/50 hover:bg-amber-100 text-stone-700"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-72">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search articles..."
                            className="w-full bg-white border border-stone-200 rounded-xl py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-amber-500 shadow-sm transition-all"
                        />
                        {searchQuery ? (
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setCurrentPage(1);
                                }}
                                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-600 cursor-pointer"
                            >
                                <X size={15} />
                            </button>
                        ) : (
                            <Search size={15} className="absolute right-3 top-2.5 text-stone-400" />
                        )}
                    </div>
                </div>

                {/* Main Grid + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Cards Grid or Empty State */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                        {paginatedPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {paginatedPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white border border-stone-200/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                                        onClick={() => setSelectedPost(post)}
                                    >
                                        <div>
                                            <div className="relative h-44 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[9px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                                    {post.category}
                                                </span>
                                            </div>

                                            <div className="p-4 space-y-2">
                                                <h3 className="font-bold text-sm text-stone-900 leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                                                    {post.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 pt-0 space-y-3">
                                            <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-100">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar size={12} />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Clock size={12} />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedPost(post);
                                                }}
                                                className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                                            >
                                                <span>Read More</span>
                                                <ArrowRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white border border-stone-200/80 rounded-2xl p-12 text-center space-y-4 shadow-sm">
                                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                                    <Search size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-stone-900">No articles found</h3>
                                    <p className="text-xs text-stone-500 max-w-sm mx-auto">
                                        No blog posts match your current search "{searchQuery}" or selected category "{activeTab}".
                                    </p>
                                </div>
                                <button
                                    onClick={handleResetFilters}
                                    className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                                >
                                    <RotateCcw size={14} />
                                    <span>Reset All Filters</span>
                                </button>
                            </div>
                        )}

                        {/* Pagination Bar */}
                        {filteredPosts.length > 0 && (
                            <div className="flex items-center justify-center space-x-2 pt-6">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg border text-stone-500 transition-all ${
                                        currentPage === 1
                                            ? "opacity-40 cursor-not-allowed border-stone-200 bg-stone-100"
                                            : "border-stone-200 bg-white hover:bg-stone-50 cursor-pointer"
                                    }`}
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                                            currentPage === pageNum
                                                ? "bg-amber-600 text-white shadow-sm"
                                                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg border text-stone-500 transition-all ${
                                        currentPage === totalPages
                                            ? "opacity-40 cursor-not-allowed border-stone-200 bg-stone-100"
                                            : "border-stone-200 bg-white hover:bg-stone-50 cursor-pointer"
                                    }`}
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Popular Posts */}
                        <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm space-y-4">
                            <div className="flex items-center space-x-2 text-stone-900 border-b border-stone-100 pb-3">
                                <Flame size={18} className="text-amber-600" />
                                <h4 className="font-extrabold text-sm">Popular Posts</h4>
                            </div>

                            <div className="space-y-3.5">
                                {popularPosts.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelectedPost(item)}
                                        className="flex items-center space-x-3 group cursor-pointer hover:bg-stone-50 p-1.5 rounded-xl transition-colors"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-14 h-14 rounded-xl object-cover shrink-0"
                                        />
                                        <div className="space-y-1">
                                            <h5 className="text-xs font-bold text-stone-800 line-clamp-2 group-hover:text-amber-600 transition-colors">
                                                {item.title}
                                            </h5>
                                            <span className="text-[10px] text-stone-400 block">{item.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Box */}
                        <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 shadow-sm space-y-3">
                            <div className="flex items-center space-x-2 text-stone-900">
                                <Mail size={18} className="text-amber-600" />
                                <h4 className="font-extrabold text-sm">Stay Updated</h4>
                            </div>
                            <p className="text-xs text-stone-500 leading-relaxed">
                                Get the latest insights, strategies and growth tips delivered to your inbox.
                            </p>
                            {newsletterSubmitted ? (
                                <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl p-3 text-xs flex items-center space-x-2">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                    <span>Thank you for subscribing! Check your inbox soon.</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="space-y-2">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full bg-white border border-stone-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-amber-500"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#09101d] hover:bg-stone-800 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer"
                                    >
                                        <span>Subscribe Now</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </form>
                            )}
                            <span className="text-[10px] text-stone-400 text-center block">
                                No spam. Unsubscribe anytime.
                            </span>
                        </div>

                        {/* Topics Widget */}
                        <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm space-y-3">
                            <div className="flex items-center space-x-2 text-stone-900 border-b border-stone-100 pb-3">
                                <Tag size={16} className="text-amber-600" />
                                <h4 className="font-extrabold text-sm">Topics</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {topics.map((t, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleCategoryClick(t.category)}
                                        className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                            activeTab.toLowerCase() === t.category.toLowerCase()
                                                ? "bg-amber-600 text-white"
                                                : "bg-stone-100 hover:bg-amber-100/70 text-stone-700"
                                        }`}
                                    >
                                        {t.name} ({topicCounts[t.name] || 0})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Detail Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-4 animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative h-60 rounded-xl overflow-hidden mt-2">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                                {selectedPost.category}
                            </span>
                        </div>

                        <div className="flex items-center space-x-4 text-xs text-stone-400">
                            <div className="flex items-center space-x-1">
                                <Calendar size={13} />
                                <span>{selectedPost.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock size={13} />
                                <span>{selectedPost.readTime}</span>
                            </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-tight">
                            {selectedPost.title}
                        </h2>

                        <p className="text-stone-600 text-sm leading-relaxed font-medium">
                            {selectedPost.description}
                        </p>

                        <div className="border-t border-stone-100 pt-4 text-stone-700 text-sm leading-relaxed space-y-3">
                            <p>{selectedPost.content}</p>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="px-5 py-2.5 bg-[#09101d] text-white text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
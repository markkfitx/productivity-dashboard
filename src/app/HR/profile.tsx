import Breadcrumbs from "@/components/breadcrumbs";

export default function Profile() {
    return (
        <>
        <Breadcrumbs />
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">HR Profile</h1>
            <p>This is the HR profile page.</p>
            {/* Add more content here as needed */}
        </div>
        </>
    );
}
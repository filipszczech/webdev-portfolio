import RealizationCard from "./RealizationCard";

export default function RealizationContainer() {
    return (
        <div className="grid grid-cols-6 gap-9 xl:gap-16">
            <div className="w-full col-span-6 sm:col-span-3 lg:col-span-2">
                <RealizationCard />
            </div>
            <div className="w-full col-span-6 sm:col-span-3 lg:col-span-2">
                <RealizationCard />
            </div>
            <div className="w-full col-span-6 sm:col-span-3 lg:col-span-2">
                <RealizationCard />
            </div>
        </div>
    );
}
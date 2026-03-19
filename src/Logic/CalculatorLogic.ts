export type EquipmentType = "kayak" | "water-bike" | "omega";

interface PriceOptions {
    equipment: EquipmentType;
    hours: number;
    childVest: boolean;
    instructor: boolean;
}

export function calculatePrice({equipment, hours, childVest, instructor}: PriceOptions): number {

    let pricePerHour = 0;

    switch (equipment) {
        case "kayak":
            pricePerHour = 20;
            break;
        case "water-bike":
            pricePerHour = 35;
            break;
        case "omega":
            pricePerHour = 150;
            break;
    }

    let total = pricePerHour * hours;

    if (childVest) {
        total += 5;
    }

    if (instructor) {
        total += 50 * hours;
    }

    return total;
}
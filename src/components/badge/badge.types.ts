export const NdwcBadgeVariants = ['active', 'closed', 'new', 'blocked', 'warn'] as const;

export type NdwcBadgeVariant = typeof NdwcBadgeVariants[number];

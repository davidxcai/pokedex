type NamedAPIResource = {
    name: string;
    url: string;
};

type Ability = {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
};

type Cries = {
    latest: string;
    legacy: string;
};

type GameIndex = {
    game_index: number;
    version: NamedAPIResource;
};

type VersionDetail = {
    rarity: number;
    version: NamedAPIResource;
};

type HeldItem = {
    item: NamedAPIResource;
    version_details: VersionDetail[];
};

type MoveLearnMethodDetail = {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    order: number | null;
    version_group: NamedAPIResource;
};

type Move = {
    move: NamedAPIResource;
    version_group_details: MoveLearnMethodDetail[];
};

type PastAbilityDetail = {
    ability: NamedAPIResource | null;
    is_hidden: boolean;
    slot: number;
};

type PastAbility = {
    abilities: PastAbilityDetail[];
    generation: NamedAPIResource;
};

type SpriteGroup = {
    front_default?: string | null;
    front_female?: string | null;
    front_shiny?: string | null;
    front_shiny_female?: string | null;
    back_default?: string | null;
    back_female?: string | null;
    back_shiny?: string | null;
    back_shiny_female?: string | null;
};

type Sprites = SpriteGroup & {
    other?: Record<string, SpriteGroup>;
    versions?: Record<string, any>;
};

type Stat = {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
};

type TypeDetail = {
    slot: number;
    type: NamedAPIResource;
};

export type Pokemon = {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: PastAbility[];
    past_types: any[]; // Placeholder since it’s empty, can define if needed
    species: NamedAPIResource;
    sprites: Sprites;
    stats: Stat[];
    types: TypeDetail[];
    weight: number;
};

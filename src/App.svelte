<script lang="ts">
    import { Grid } from './models/Grid';
    import { AlternatingTileGenerator } from './models/AlternatingTileGenerator';
    import GameGrid from './components/GameGrid.svelte';
    import type { GameState } from './models/TileGenerator';

    // Create initial 5x5 grid
    const grid = new Grid(5, 5);
    const generator = new AlternatingTileGenerator();
    const initialState: GameState = { moveCount: 0 };
    
    // Populate grid with initial tiles
    grid.populateGrid(generator, initialState);
</script>

<main>
    <h1>TileGame</h1>
    <div class="game-container">
        <GameGrid {grid} />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        max-width: 100vw;
        min-height: 100vh;
    }

    h1 {
        margin-bottom: 2rem;
        color: #646cff;
    }

    .game-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (prefers-color-scheme: light) {
        h1 {
            color: #535bf2;
        }
    }
</style>

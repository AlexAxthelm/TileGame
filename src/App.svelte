<script lang="ts">
    import { Grid } from './models/Grid';
    import { AlternatingTileGenerator } from './models/AlternatingTileGenerator';
    import GameGrid from './components/GameGrid.svelte';
    import GameSettings from './components/GameSettings.svelte';
    import type { GameState } from './models/TileGenerator';

    let gameStarted = false;
    let grid: Grid | null = null;
    const generator = new AlternatingTileGenerator();
    const initialState: GameState = { moveCount: 0 };

    function handleStartGame(event: CustomEvent<{ width: number; height: number }>) {
        const { width, height } = event.detail;
        grid = new Grid(width, height);
        grid.populateGrid(generator, initialState);
        gameStarted = true;
    }
</script>

<main>
    <h1>TileGame</h1>
    
    {#if !gameStarted}
        <GameSettings on:startGame={handleStartGame} />
    {:else}
        <div class="game-container">
            <GameGrid grid={grid!} />
        </div>
    {/if}
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
        margin-top: 2rem;
    }

    @media (prefers-color-scheme: light) {
        h1 {
            color: #535bf2;
        }
    }
</style>

import { test, expect } from "@playwright/test";

test.describe("Pokemon Page", () => {
  test("should display Pokemon details and navigate back", async ({ page }) => {
    // Mock Pokémon data
    const mockPokemon = {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      abilities: [
        { ability: { name: "overgrow" } },
        { ability: { name: "chlorophyll" } },
      ],
      stats: [
        { stat: { name: "hp" }, base_stat: 45 },
        { stat: { name: "attack" }, base_stat: 49 },
        { stat: { name: "defense" }, base_stat: 49 },
        { stat: { name: "special-attack" }, base_stat: 65 },
        { stat: { name: "special-defense" }, base_stat: 65 },
        { stat: { name: "speed" }, base_stat: 45 },
      ],
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      },
    };

    // Intercept the API request and respond with the mock data
    await page.route("**/api/pokemon", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([mockPokemon]),
      });
    });

    // Navigate to the Pokémon details page
    await page.goto("/bulbasaur");

    // Debugging: wait for page to load and log URL
    await page.waitForLoadState("networkidle");

    // Increase timeout
    const timeout = 10000;

    // Verify Pokémon details
    await expect(page.locator("h1")).toHaveText("#001 Bulbasaur", { timeout });
    await expect(
      page.locator(
        'img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"]'
      )
    ).toBeVisible({ timeout });
    await expect(
      page.locator(
        'img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"]'
      )
    ).toBeVisible({ timeout });
    await expect(
      page.locator(
        'img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"]'
      )
    ).toBeVisible({ timeout });
    await expect(
      page.locator(
        'img[src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"]'
      )
    ).toBeVisible({ timeout });

    // Click the "Back" button
    await page.click("text=Back");

    // Verify navigation back to the main page
    await expect(page).toHaveURL("/");
  });
});

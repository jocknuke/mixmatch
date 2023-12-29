using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class MixAndMatchEntityAddedFixed7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MixAndMatchPlayer_AspNetUsers_AppUserId",
                table: "MixAndMatchPlayer");

            migrationBuilder.DropForeignKey(
                name: "FK_MixAndMatchPlayer_MixAndMatchGames_GameId",
                table: "MixAndMatchPlayer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MixAndMatchPlayer",
                table: "MixAndMatchPlayer");

            migrationBuilder.RenameTable(
                name: "MixAndMatchPlayer",
                newName: "MixAndMatchPlayers");

            migrationBuilder.RenameIndex(
                name: "IX_MixAndMatchPlayer_GameId",
                table: "MixAndMatchPlayers",
                newName: "IX_MixAndMatchPlayers_GameId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MixAndMatchPlayers",
                table: "MixAndMatchPlayers",
                columns: new[] { "AppUserId", "GameId" });

            migrationBuilder.AddForeignKey(
                name: "FK_MixAndMatchPlayers_AspNetUsers_AppUserId",
                table: "MixAndMatchPlayers",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MixAndMatchPlayers_MixAndMatchGames_GameId",
                table: "MixAndMatchPlayers",
                column: "GameId",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MixAndMatchPlayers_AspNetUsers_AppUserId",
                table: "MixAndMatchPlayers");

            migrationBuilder.DropForeignKey(
                name: "FK_MixAndMatchPlayers_MixAndMatchGames_GameId",
                table: "MixAndMatchPlayers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MixAndMatchPlayers",
                table: "MixAndMatchPlayers");

            migrationBuilder.RenameTable(
                name: "MixAndMatchPlayers",
                newName: "MixAndMatchPlayer");

            migrationBuilder.RenameIndex(
                name: "IX_MixAndMatchPlayers_GameId",
                table: "MixAndMatchPlayer",
                newName: "IX_MixAndMatchPlayer_GameId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MixAndMatchPlayer",
                table: "MixAndMatchPlayer",
                columns: new[] { "AppUserId", "GameId" });

            migrationBuilder.AddForeignKey(
                name: "FK_MixAndMatchPlayer_AspNetUsers_AppUserId",
                table: "MixAndMatchPlayer",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MixAndMatchPlayer_MixAndMatchGames_GameId",
                table: "MixAndMatchPlayer",
                column: "GameId",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

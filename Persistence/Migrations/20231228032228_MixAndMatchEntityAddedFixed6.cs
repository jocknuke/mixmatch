using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class MixAndMatchEntityAddedFixed6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId1",
                table: "ActivityAttendees");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId1",
                table: "ActivityAttendees");

            migrationBuilder.DropColumn(
                name: "MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropColumn(
                name: "MixAndMatchGameId1",
                table: "ActivityAttendees");

            migrationBuilder.CreateTable(
                name: "MixAndMatchPlayer",
                columns: table => new
                {
                    AppUserId = table.Column<string>(type: "TEXT", nullable: false),
                    GameId = table.Column<int>(type: "INTEGER", nullable: false),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    Team = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MixAndMatchPlayer", x => new { x.AppUserId, x.GameId });
                    table.ForeignKey(
                        name: "FK_MixAndMatchPlayer_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MixAndMatchPlayer_MixAndMatchGames_GameId",
                        column: x => x.GameId,
                        principalTable: "MixAndMatchGames",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MixAndMatchPlayer_GameId",
                table: "MixAndMatchPlayer",
                column: "GameId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MixAndMatchPlayer");

            migrationBuilder.AddColumn<int>(
                name: "MixAndMatchGameId",
                table: "ActivityAttendees",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MixAndMatchGameId1",
                table: "ActivityAttendees",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId");

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId1",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId1",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId1",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id");
        }
    }
}

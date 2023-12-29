using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class MixAndMatchEntityAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

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

            migrationBuilder.CreateTable(
                name: "MixAndMatchGames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoundId = table.Column<int>(type: "INTEGER", nullable: false),
                    CourtNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamOneScore = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamTwoScore = table.Column<int>(type: "INTEGER", nullable: false),
                    MyProperty = table.Column<int>(type: "INTEGER", nullable: false),
                    Completed = table.Column<bool>(type: "INTEGER", nullable: false),
                    ActivityId = table.Column<Guid>(type: "TEXT", nullable: true),
                    IsPlayoff = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MixAndMatchGames", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MixAndMatchGames_Activities_ActivityId",
                        column: x => x.ActivityId,
                        principalTable: "Activities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId");

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId1",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId1");

            migrationBuilder.CreateIndex(
                name: "IX_MixAndMatchGames_ActivityId",
                table: "MixAndMatchGames",
                column: "ActivityId");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId1",
                table: "ActivityAttendees",
                column: "MixAndMatchGameId1",
                principalTable: "MixAndMatchGames",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_MixAndMatchGames_MixAndMatchGameId1",
                table: "ActivityAttendees");

            migrationBuilder.DropTable(
                name: "MixAndMatchGames");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAttendees_MixAndMatchGameId1",
                table: "ActivityAttendees");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MixAndMatchGameId",
                table: "ActivityAttendees");

            migrationBuilder.DropColumn(
                name: "MixAndMatchGameId1",
                table: "ActivityAttendees");
        }
    }
}

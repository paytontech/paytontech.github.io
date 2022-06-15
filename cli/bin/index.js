#! /usr/bin/env node
import cli from "commander"

cli.description("Create a file for journal-HTML")
cli.name("journal-cli")
cli.usage("--name ''<name>'' --caption ''<caption>''")
cli.addHeldCommand(false)
cli.helpOption(false)

cli.command("name").argument("[name]", "Name of the entry")

cli.parse(process.argv)
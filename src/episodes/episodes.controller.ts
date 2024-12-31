import { Body, Controller, DefaultValuePipe, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {

    constructor(
        private episodesService: EpisodesService,
        private configService: ConfigService,
    ) {}

    // @Get()
    // findAll() {
    //     return "all episodes"
    // }

    @Get()
    findAll( 
        @Query('sort') sort: 'asc' | 'desc' = 'desc',
        @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number
    ) {
        // return "all episodes"
        return this.episodesService.findAll(sort)
    }

    @Get("featured")
    findFeatured(){
        // return "featured episodes"
        return this.episodesService.findFeatured()
    }

    @Get(":id")
    async findOne( @Param() id: string ){

        // console.log("id >>> ", id);
        // return "one episode"

        const episode = await this.episodesService.findOne(id)

        if(!episode) {
            throw new NotFoundException("Episode not found")
        }

        return episode
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        // return "new episode"
        console.log("input >>> ", input);
        return this.episodesService.create(input)
        

    }

}

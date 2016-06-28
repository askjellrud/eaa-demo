package no.catenda.bimsync.battle;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import no.catenda.bimsync.battle.views.BattleResource;

public class BattleApplication extends Application<BattleConfiguration> {
    public static void main(String[] args) throws Exception {
        if (args.length == 0) {
            args = new String[] { "server", "battle.yaml" };
         }
        new BattleApplication().run(args);
    }

    @Override
    public String getName() {
        return "Hack Batte 2016";
    }

    @Override
    public void initialize(Bootstrap<BattleConfiguration> bootstrap) {
        bootstrap.addBundle(new AssetsBundle());
        bootstrap.addBundle(new ViewBundle());
    }

    @Override
    public void run(BattleConfiguration configuration, Environment environment) {
        environment.jersey().register(new BattleResource(configuration.getAccessToken(), configuration.getViewerAccessToken()));
    }

}

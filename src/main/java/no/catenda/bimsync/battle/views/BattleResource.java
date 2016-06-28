package no.catenda.bimsync.battle.views;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
public class BattleResource {
    private String viewerAccessToken;
    private String accessToken;

    public BattleResource(String accessToken, String viewerAccessToken) {
        this.accessToken = accessToken;
        this.viewerAccessToken = viewerAccessToken;
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public Response battle() {
         GenericView view = new GenericView("BattleView.mustache")
             .append("viewerAccessToken", viewerAccessToken)
             .append("accessToken", accessToken);
         return Response.ok(view).build();
    }
}

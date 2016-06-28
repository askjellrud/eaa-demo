package no.catenda.bimsync.battle;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.dropwizard.Configuration;

public class BattleConfiguration extends Configuration {
    @JsonProperty
    private String viewerAccessToken;

    @JsonProperty
    private String accessToken;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getViewerAccessToken() {
        return viewerAccessToken;
    }

    public void setViewerAccessToken(String viewerAccessToken) {
        this.viewerAccessToken = viewerAccessToken;
    }
}

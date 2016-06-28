package no.catenda.bimsync.battle.views;

import java.util.HashMap;
import java.util.Map;

import io.dropwizard.views.View;

public class GenericView extends View {
    private Map<String, Object> model = new HashMap<String, Object>();

    public GenericView(String mustache) {
        super("/mustache/" + mustache);
    }

    public Map<String, Object> getModel() {
        return model;
    }

    public GenericView append(String name, Object value) {
        model.put(name, value);
        return this;
    }
}

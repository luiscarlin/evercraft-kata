import com.fasterxml.jackson.jr.ob.JSON;

import java.util.Map;

import static spark.Spark.*;

public class FakeDiceServer {
    static String value = "bar";

    public static void main(String[] args) {
        port(9876);
        get("/foobar", (req, res) -> {
            return "{ \"foo\": \"" + value + "\"}";
        });
        put("/foobar", (req, res) -> {
            Map<String,Object> map = JSON.std.mapFrom(req.body());
            value = map.get("bar").toString();
            return value;
        });
    }
}

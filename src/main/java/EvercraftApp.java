import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;
import static spark.Spark.*;

public class EvercraftApp {

    public static void main(String[] args) throws IOException {
        port(4567);
        get("/", (req, res) -> {

            return "<html><head></head>" +
                    "<body>" +
                    "<h1>Welcome to Evercraft</h1>" +
                    "</body>" +
                    "</html>";
        });
//        List<String> strings = Files.readAllLines(Paths.get("characters.csv"));
    }
}

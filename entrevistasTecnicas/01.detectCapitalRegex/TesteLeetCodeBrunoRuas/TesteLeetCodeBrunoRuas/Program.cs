using System.Text.RegularExpressions;

// interface da classe principal
public interface ISolution
{
    bool DetectCapitalUse(string word);
}

public class Solution : ISolution
{
    private Dictionary<string, string> _rules;

    // injecao de dependencia para facilitar teste unitario
    public Solution(Dictionary<string, string> rules)
    {
        _rules = rules;
    }

    // examinador da palavra
    public bool DetectCapitalUse(string word)
    {
        if (word.Length < 1 || word.Length > 100)
            return false;

        foreach (var rule in _rules)
        {
            if (Regex.IsMatch(word, "^" + rule.Value + "$"))
                return true;
        }

        return false;
    }
}

class Program
{
    static void Main()
    {
        // aqui eu adotei um dict para organizar as regras em regex
        // coloquei um exemplo como key do dict e a regra depois
        var rules = new Dictionary<string, string>
        {
            { "All caps", "[A-Z]+" },
            { "All lowercase", "[a-z]+" },
            { "First capital only", "[A-Z][a-z]*" }
        };

        ISolution solution = new Solution(rules);

        Console.WriteLine(solution.DetectCapitalUse("USA"));       // true
        Console.WriteLine(solution.DetectCapitalUse("leetcode"));  // true
        Console.WriteLine(solution.DetectCapitalUse("Google"));    // true
        Console.WriteLine(solution.DetectCapitalUse("GoOgle"));    // false
        Console.WriteLine(solution.DetectCapitalUse("G"));    // true
        Console.WriteLine(solution.DetectCapitalUse(""));    // false
        Console.WriteLine(solution.DetectCapitalUse(new string('g', 101)));    // false
    }
}

const KEYWORDS = "Event.register";
module.exports = {
  meta: {
    messages: {
      missSecondParams: `缺少参数：缺少第二个参数，该参数用于描述事件`,
      firstParamsUnqualified: `事件名格式不正确，字符有效范围：A-Z及下划线_`
    },
    docs: {
      description: "check whether the declare of domain event qualified"
      //recommended: true
    },
    schema: [] // no options
  },
  create: function(context) {
    function reportMissSecondParams(node, loc) {
      context.report({
        node,
        messageId: "missSecondParams",
        loc
      });
    }
    function reportFirstParamsUnqualified(node, loc) {
      context.report({
        loc,
        node,
        messageId: "firstParamsUnqualified"
      });
    }
    return {
      onCodePathStart: function(codePath, node) {
        const reg1 = /^[A-Z_]+$/;
        let source = context.getSourceCode(node);
        const tokens = source.getTokens(node);
        for (let i = 0; i < tokens.length; i++) {
          let token1 = tokens[i];
          let token2 = tokens[i + 1];
          let token3 = tokens[i + 2];
          if (token1 && token2 && token3) {
            let specToken = token1.value + token2.value + token3.value;
            if (specToken === KEYWORDS) {
              let { value: params1, loc: loc1 } = tokens[i + 4] || {};
              let { value: separator, loc: loc2 } = tokens[i + 5] || {};
              params1 = params1.replace(/"|'/g, "");
              if (params1 === ")") {
                //提示必须有参数
              }
              if (!reg1.test(params1)) {
                reportFirstParamsUnqualified(node, loc1);
              }
              if (separator !== ",") {
                reportMissSecondParams(node, loc2);
              }
            }
          }
        }
      }
    };
  }
};

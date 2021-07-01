//#region 添加RL题目的表单数据
// 引入响应式API
import { reactive } from "vue";

export function useAddRLForm() {
  // 表单数据 校验规则
  const addRL = reactive({
    model: {
      // 编号
      no: "",
      // 题目
      title: "",
      // 标签选择
      labelIds: [],
      // 题目音频
      titleAudio: "",
      // 题目原文
      titleText: "",
      // 答案参考
      answer: "",
      // 备注
      remark: "",
      // 题目图片
      pics: [],
      // 是否精听读写
      isJtdx: false,
      // 音频片段
      audioClips: [
        {
          id: 0,
          name: "",
          url: "",
          content: ""
        }
      ]
    },
    // 校验规则
    rules: {
      // 编号
      no: [
        {
          required: true,
          whitespace: true,
          message: "题目编号必须填写",
          trigger: "blur"
        }
      ],
      // 题目
      title: [
        {
          required: true,
          whitespace: true,
          message: "题目必须填写",
          trigger: "blur"
        }
      ]
    }
  });

  return {
    addRL
  };
}
//#endregion

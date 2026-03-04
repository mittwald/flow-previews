import{j as r,r as l}from"./iframe-CBpAxFwW.js";import{M as o}from"./MarkdownEditor-CNseOvy-.js";import{L as s}from"./Label-D9Ki8i5H.js";import{F as u}from"./FieldError-0XXNPrVk.js";import{B as h}from"./Button-DJILh_tx.js";import{S as f}from"./Section-7R7SCXQ7.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CYfmR1bT.js";import"./CodeBlock-BauIU04V.js";import"./clsx-B-dksMZM.js";import"./CopyButton-f6PRftDm.js";import"./IconWarning-gYJb7yiz.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./remote-Bqh6MTep.js";import"./Tooltip-BXJ36UFn.js";import"./utils-DlBHsIHw.js";import"./OverlayArrow-B4tyB_eB.js";import"./useFocus-DWD5MHlE.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./context-BCPYrVw6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DhcP44Or.js";import"./useControlledState-cot2auG7.js";import"./useFocusable-YEU6YEqR.js";import"./react-children-utilities-DjVz-y6X.js";import"./ActionBatch-BgON7N4c.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./InlineCode-C_1Swvd9.js";import"./Link-CA-d3tjp.js";import"./usePress-IARhWfJB.js";import"./Separator-DUYPTYlE.js";import"./Separator-BGJ98pV4.js";import"./CollectionBuilder-s21Em_Eq.js";import"./Text-DmIlada7.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./TextArea-CgnxHR2g.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useControlledHostValueProps-H85_02BB.js";import"./FieldDescription-cbN0tmKj.js";import"./TextField-U22TZmuN.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useTextField-W7kX8bZQ.js";import"./useFormReset-DcIaZXr3.js";import"./useFormValidation-D1j-Spao.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6LJ-bNf.js";import"./ContextMenuSection-CSCUKvfx.js";import"./Dialog-r9nlMSfh.js";import"./Collection-CNOjz3d8.js";import"./SelectionIndicator-DmDMXkvM.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <Label>Message</Label>
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} autoResizeMaxRows={5} rows={3}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const Vr=["Default","ShowCharacterCount","WithFieldError","AutoResizeable","WithOnChange","WithRef"];export{p as AutoResizeable,i as Default,a as ShowCharacterCount,n as WithFieldError,m as WithOnChange,c as WithRef,Vr as __namedExportsOrder,Tr as default};

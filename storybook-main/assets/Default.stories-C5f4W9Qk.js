import{j as r,r as h}from"./iframe-BYlM8TfH.js";import{M as e}from"./MarkdownEditor-T4V62VWq.js";import{L as l}from"./Label-CObvhZe8.js";import{F as g}from"./useFieldComponent-BoJq1S9B.js";import{B as f}from"./Button-DrjwoUCb.js";import{S as x}from"./Section-D4heV61s.js";import"./index-nuYtCEEu.js";import"./Markdown-CgMJZ4D8.js";import"./CodeBlock-BX8axwJz.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bysoari5.js";import"./IconWarning-WQ4wo7kP.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./Tooltip-CgdawZ-z.js";import"./ClearPropsContextView-BJe-Torm.js";import"./ClearPropsContext-BpBo361K.js";import"./utils-BDqIfUE7.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useFocus-B9vfYs8K.js";import"./ProgressBar--do5EHZn.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./context-BxRqKeiD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bs4hSWnz.js";import"./useFocusable-SxOERRg1.js";import"./useFocusRing-BaqqhOKG.js";import"./react-children-utilities-DxnuAJ4K.js";import"./Action-i4rkq48V.js";import"./context-BILGmIqx.js";import"./useStatic-6sdTMqO6.js";import"./browser-D2sPcOVM.js";import"./getActionGroupSlot-nR5vf13o.js";import"./dynamic-BhGDraHV.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./Heading-CurQq7EL.js";import"./Heading-BrhKeiNO.js";import"./RSPContexts-BeeOgZFj.js";import"./InlineCode-BJajLeFr.js";import"./Link-DYPsb7nu.js";import"./usePress-kOJVCjd_.js";import"./Separator-BQECgCLf.js";import"./Separator-DKnWRjMi.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./Text-ZBSxG77c.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./TextArea-DDDA4nuX.js";import"./TextFieldBase-DJx7Fgqs.js";import"./FieldDescription-DcQaW8xO.js";import"./TextField--jqwCYSY.js";import"./Form-CqmUY9BV.js";import"./Group-Bk1pllsG.js";import"./Input-Dg1gUccH.js";import"./useTextField-SWkzlhtV.js";import"./useFormReset-Bl4vFhC1.js";import"./useFormValidation-wBqhYJyj.js";import"./ReactAriaControlledValueFix-CJCbwxyd.js";import"./useManagedValue-DzckZ6nk.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CqJPIXvI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmIa1mS-.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Dialog-BSP5EDkY.js";import"./Collection-C6Fc_Z_x.js";import"./SelectionIndicator-BFnOXggJ.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./VisuallyHidden-D5yM91eE.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Hr as __namedExportsOrder,Ar as default};

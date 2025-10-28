import{j as r,r as h}from"./iframe-GtWYOLNc.js";import{M as e}from"./MarkdownEditor-CO8-Bv1J.js";import{L as l}from"./Label-rRCJof1T.js";import{F as g}from"./useFieldComponent-CFSDwBJf.js";import{B as f}from"./Button-DAMH2RQe.js";import{S as x}from"./Section-PDyMtoME.js";import"./index-nuYtCEEu.js";import"./Markdown-CKRd68Cn.js";import"./CodeBlock-CCzX3EK1.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C8yLqHre.js";import"./IconWarning-D3qu7dXh.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./index-Do7K3gX4.js";import"./Tooltip-DJZxW_5C.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./utils-DD5Sc9KY.js";import"./OverlayArrow-DIM14olf.js";import"./useFocus-DFp-sRZK.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./context-D40YBGtd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DlI3gMwx.js";import"./useFocusable-jI0DLtpW.js";import"./useFocusRing-DOaM9YXN.js";import"./react-children-utilities-BE-u8eGk.js";import"./Action-DgPdZSGQ.js";import"./context-B79p2l6c.js";import"./useStatic-BUau0uD4.js";import"./browser-Dfdmz1Vs.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./dynamic-D_-LYO4W.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./Heading-D17rAsKb.js";import"./Heading-D0R31Oqj.js";import"./RSPContexts-prl6X50T.js";import"./InlineCode-BqI4zlun.js";import"./Link-CfCeYdU8.js";import"./usePress-B3Z_0YqL.js";import"./Separator-b4F9U2bi.js";import"./Separator-BLTRkzm5.js";import"./CollectionBuilder-Dp0_4f88.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./Text-CjcFKgn5.js";import"./TextArea-BX7_MwRE.js";import"./TextFieldBase-Ctzb06j_.js";import"./FieldDescription-H7Ygmbn3.js";import"./TextField-DX8eTu1K.js";import"./Form-CKR5JFnD.js";import"./Group-CA7dPhnC.js";import"./Input-BPP_cYwL.js";import"./useTextField-CjuQjVvL.js";import"./useFormReset-C8pOBnDM.js";import"./useFormValidation-BcoBpGbt.js";import"./ReactAriaControlledValueFix-BuCvRdUH.js";import"./useManagedValue-CpjecO7V.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BgxzSWV-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAFfpCNE.js";import"./ContextMenuSection-BqJoKa5n.js";import"./Dialog-E17SkaPF.js";import"./Collection-Ce3y52jr.js";import"./SelectionIndicator-PIsyHCAq.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

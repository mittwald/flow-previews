import{j as r,r as h}from"./iframe-EtTbRQoM.js";import{M as e}from"./MarkdownEditor-OFInUq4I.js";import{L as l}from"./Label-BHPxSoWd.js";import{F as g}from"./FieldError-Bx65Dx0T.js";import{B as f}from"./Button-DxuCaQyR.js";import{S as x}from"./Section-BmVYkrqh.js";import"./index-nuYtCEEu.js";import"./Markdown-BC6pCH-C.js";import"./CodeBlock-67SLLjLr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DJ0FVRXt.js";import"./IconWarning-CO-lUcxm.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./Tooltip-Bd-mtq7X.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./utils-C_hvyJpn.js";import"./OverlayArrow-CczkULsk.js";import"./useFocus-9RWBE5qv.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-HEbrZrvP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DmCe06Ai.js";import"./useFocusable-Do_2l7DI.js";import"./useFocusRing-hCmULEnE.js";import"./react-children-utilities-DmQ8-YOo.js";import"./Action-CL-CoYGw.js";import"./context-C1SllNhn.js";import"./useStatic-DxnBGf3l.js";import"./browser-Cob99Do9.js";import"./getActionGroupSlot-CxKatSQe.js";import"./dynamic-Cv7GHFn6.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./Heading-YEToWG6x.js";import"./Heading-DTQh2nx3.js";import"./RSPContexts-Cv7znJuu.js";import"./InlineCode-D-DctC-x.js";import"./Link-C5iBt_w0.js";import"./usePress-sAonsHdy.js";import"./Separator-B-i3IXfa.js";import"./Separator-CwOt3VIi.js";import"./CollectionBuilder-DTV-m0tl.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./Text-CANjZEUs.js";import"./TextArea-NAi9HkBi.js";import"./TextFieldBase-CvME3450.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-RyyHlj0A.js";import"./TextField-D5UL4yco.js";import"./FieldError-Dm1dzE4u.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useTextField-Ec9tFhY1.js";import"./useFormReset-B1BZ1rNK.js";import"./useFormValidation-CisZkPpg.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./useManagedValue-DOWOMeeY.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./Collection-CmlnhQJV.js";import"./SelectionIndicator-BOzSayKJ.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";const _r={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ar=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Ar as __namedExportsOrder,_r as default};

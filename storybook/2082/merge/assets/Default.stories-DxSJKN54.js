import{j as r,r as h}from"./iframe-D_6zdLny.js";import{M as e}from"./MarkdownEditor-BeiHAemS.js";import{L as l}from"./Label-DYStaM4r.js";import{F as g}from"./FieldError-ojCue57q.js";import{B as f}from"./Button-Hd0_GbPh.js";import{S as x}from"./Section-BOMWvKE6.js";import"./index-nuYtCEEu.js";import"./Markdown-BV6f0lwO.js";import"./CodeBlock-pqI_xJnq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CdGSUHnu.js";import"./IconWarning-L8yPVfI5.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./Tooltip-CBeddeiC.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./utils-PQD-Pczy.js";import"./OverlayArrow-vA-0UH51.js";import"./useFocus-D07R-Di8.js";import"./ProgressBar-DN3pMQzV.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BujF7oZS.js";import"./context-BMSZp_sq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-G8Ia7XKM.js";import"./useFocusable-pGYT2QRf.js";import"./useFocusRing-CwU_FKgG.js";import"./react-children-utilities-CrsSGPVd.js";import"./Action-CDIAK01E.js";import"./context-BfwnKq6d.js";import"./useStatic-MV172PRo.js";import"./browser-D7xr6uHh.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./dynamic-fYYLqg_-.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./Heading-DUx_7A94.js";import"./Heading-CDoCnjT3.js";import"./RSPContexts-0i8aci_3.js";import"./InlineCode-DNlglJMO.js";import"./Link-Bzdw9Y1F.js";import"./usePress-HrT7PLB3.js";import"./Separator-D49Rg_Py.js";import"./Separator-CHFb939R.js";import"./CollectionBuilder-C8yRBwY3.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./Text-YMXmaajA.js";import"./TextArea-B4SFXaFs.js";import"./TextFieldBase-D8-P3sbI.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BmjEGOaL.js";import"./TextField-DJdiP2AD.js";import"./FieldError-DAmKGBgj.js";import"./Form-BEwxiqG9.js";import"./Group-DD12aKc0.js";import"./Input-DeyWgLjK.js";import"./useTextField-CgNiWdPW.js";import"./useFormReset-jO9kfZl0.js";import"./useFormValidation-B8Bdwi3p.js";import"./ReactAriaControlledValueFix-CrUxtzb_.js";import"./useManagedValue-B8yM6Auw.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./Collection-ChPbS13-.js";import"./SelectionIndicator-aPzlcNCf.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

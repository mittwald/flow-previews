import{j as r,r as h}from"./iframe-BJcrhiyS.js";import{M as e}from"./MarkdownEditor-DE9tqiM-.js";import{L as l}from"./Label-DlBkeFJ8.js";import{F as g}from"./useFieldComponent-BTSjCSDH.js";import{B as f}from"./Button-DDexK_tB.js";import{S as x}from"./Section-DHFbYsCk.js";import"./index-nuYtCEEu.js";import"./Markdown-Dok3Zkhz.js";import"./CodeBlock-UZi5N21y.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CvF-gRTt.js";import"./IconWarning-DHKN92dZ.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./index-Clh-7_IP.js";import"./Tooltip-BTWW-9bb.js";import"./ClearPropsContextView-Bpe56eb-.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./utils-MMz0RNDK.js";import"./OverlayArrow-DSSzOs3h.js";import"./useFocus-B02RLksg.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_fpNspWn.js";import"./context-C9wRNNkX.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CmFRf9bT.js";import"./useFocusable-o2EAaEwJ.js";import"./useFocusRing-Cs9uIsYW.js";import"./react-children-utilities-DZ5iFmYj.js";import"./Action-Cl9B75AE.js";import"./context-OYcKy-iK.js";import"./useStatic-DD6IIAig.js";import"./browser-CleZYiuo.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./dynamic-D98kNBqL.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./Heading-CUXx9jgP.js";import"./Heading-DJUV0n03.js";import"./RSPContexts-C2e5xu0T.js";import"./InlineCode-v7rEPDWa.js";import"./Link-Btgj-tjP.js";import"./usePress-D-MZIwgU.js";import"./Separator-DLQecjPa.js";import"./Separator-B85zM0Ob.js";import"./CollectionBuilder-B7Z337h2.js";import"./Text-CzGb6jtw.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./TextArea-BW6UonCL.js";import"./TextFieldBase-DV0gXnlu.js";import"./FieldDescription-BPGABGxO.js";import"./TextField-XJ38yjmm.js";import"./Form--RrJpAdD.js";import"./Group-q2LAtsMk.js";import"./Input-BVWAA476.js";import"./useTextField-CFlBnLNm.js";import"./useFormReset-B4UK9p8r.js";import"./useFormValidation-ofRqxeQo.js";import"./ReactAriaControlledValueFix-DNuVWwQA.js";import"./useManagedValue-D5cUnfZ2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DIhYtINq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLFIfSVU.js";import"./ContextMenuSection-B4NyQI2O.js";import"./Dialog-BQ_EXD94.js";import"./Collection-_lGiyPCh.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

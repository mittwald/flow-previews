import{j as r,r as h}from"./iframe-BziZnbbf.js";import{M as e}from"./MarkdownEditor-C9nHLo6B.js";import{L as l}from"./Label-7ab3WcOE.js";import{F as g}from"./useFieldComponent-yHiwdZcU.js";import{B as f}from"./Button-BsOsKcj7.js";import{S as x}from"./Section-Bis1QFtl.js";import"./index-nuYtCEEu.js";import"./Markdown-B_E0OfNq.js";import"./CodeBlock-BW9YU104.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CaA-_wbp.js";import"./IconWarning-CJvxfsrj.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./Tooltip-BbUB4qPf.js";import"./ClearPropsContextView-DtS_ulKQ.js";import"./ClearPropsContext-DUOPbXiH.js";import"./utils-C0RTyIHD.js";import"./OverlayArrow-CA6KUquN.js";import"./useFocus-ycXwMZE-.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./context-BDhuSyDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DwOoiAv5.js";import"./useFocusable-KPf6K6gw.js";import"./useFocusRing-CNOPmzHu.js";import"./react-children-utilities-gpYjsLoV.js";import"./Action-CnCRBxQU.js";import"./context-OFPqHilR.js";import"./useStatic-D6NPOV-R.js";import"./browser-BTvp61GS.js";import"./getActionGroupSlot-CSQVqoba.js";import"./dynamic-BFzO3wyN.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./Heading-HaPqK-C-.js";import"./Heading-CCWr2xNb.js";import"./RSPContexts-CRnpb7uM.js";import"./InlineCode-C_HelBsj.js";import"./Link-C7g_Q3l-.js";import"./usePress-D5emiALM.js";import"./Separator-DmAtqVjY.js";import"./Separator-CEtV88kO.js";import"./CollectionBuilder-9i2XwoUY.js";import"./Text-C2tTVpcM.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./TextArea-4yhkCt3-.js";import"./TextFieldBase-D4H3xkAL.js";import"./FieldDescription-mqFf-H3a.js";import"./TextField-DQ99mzfo.js";import"./Form-lya1P3V3.js";import"./Group-aJmZoBky.js";import"./Input-Diy1RLsK.js";import"./useTextField-QUd2KG_L.js";import"./useFormReset-CzU-0SyG.js";import"./useFormValidation-CTvaA84d.js";import"./ReactAriaControlledValueFix-ufU0tNg8.js";import"./useManagedValue-DlUVNO6E.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Czn71cHm.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Dialog-DGrVuAqN.js";import"./Collection-BOZKLSmZ.js";import"./SelectionIndicator-8CTToPIL.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

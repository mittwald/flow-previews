import{j as r,r as h}from"./iframe-CCgutS5t.js";import{M as e}from"./MarkdownEditor-DTK7JRNr.js";import{L as l}from"./Label-CNIOR_Eh.js";import{F as g}from"./useFieldComponent-B36i382k.js";import{B as f}from"./Button-CB_SQlxf.js";import{S as x}from"./Section-xdCGG6Rl.js";import"./index-nuYtCEEu.js";import"./Markdown-BFiuebdx.js";import"./CodeBlock-C30-PYEQ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CVvh0b1R.js";import"./IconWarning-BIjPfZ_7.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./index-Bp2d_id4.js";import"./Tooltip-xQpiwWtd.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./utils-N6USVjPQ.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useFocus-qWLnYmls.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./context-3TjxBBiZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-pLTCEb.js";import"./useFocusable-C1wexJX5.js";import"./useFocusRing-DetKeZ0w.js";import"./react-children-utilities-DK8cwA_F.js";import"./Action-BELw5_ca.js";import"./context-_S3VUPKr.js";import"./useStatic-MsaSckAb.js";import"./browser-Cx9TdPw4.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./dynamic-CnlMxg6J.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./Heading-C0cuqA4W.js";import"./Heading--qvH0N7j.js";import"./RSPContexts-D8ixlOLf.js";import"./InlineCode--QKj8leZ.js";import"./Link-DtylWjAm.js";import"./usePress-C_WBS1_H.js";import"./Separator-Cd8yhmEO.js";import"./Separator-CdSBB1Je.js";import"./CollectionBuilder-BmvqiF6i.js";import"./Text-C-3mWHEt.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./TextArea-DFWCgvW-.js";import"./TextFieldBase-Ooz-Umfd.js";import"./FieldDescription-BMzB73VC.js";import"./TextField-DQbAWnp4.js";import"./Form-DylZ4hmS.js";import"./Group-nu6L2uF2.js";import"./Input-zWUUR8ko.js";import"./useTextField-Dj-O8CqK.js";import"./useFormReset-C2ixUAq4.js";import"./useFormValidation-DXrwvkVu.js";import"./ReactAriaControlledValueFix-B6glQD59.js";import"./useManagedValue-BWFYeZ1Y.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxAPDldv.js";import"./ContextMenuSection-plAoKvaj.js";import"./Dialog-BFfcJUiM.js";import"./Collection-DHibalOY.js";import"./SelectionIndicator-BSAaVuJo.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

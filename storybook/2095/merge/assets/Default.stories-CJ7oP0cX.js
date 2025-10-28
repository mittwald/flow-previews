import{j as r,r as h}from"./iframe-DGdLAJHm.js";import{M as e}from"./MarkdownEditor-bM6npPk7.js";import{L as l}from"./Label-TWVsUPc0.js";import{F as g}from"./useFieldComponent-sq1ZsD9O.js";import{B as f}from"./Button-B6Mqr-fI.js";import{S as x}from"./Section-sBOUh03h.js";import"./index-nuYtCEEu.js";import"./Markdown-9uFOUyUn.js";import"./CodeBlock-WEximgIf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Caj5CeV_.js";import"./IconWarning-BY1Q-g8P.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./Tooltip-B-vtu2id.js";import"./ClearPropsContextView-Dpaa2bCU.js";import"./ClearPropsContext-DfqGN335.js";import"./utils-DMxNMt2r.js";import"./OverlayArrow-DsaarUgr.js";import"./useFocus-Cj45nHC3.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./context-CokKTPHD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-kX1e6O.js";import"./useFocusable-DBd_8M_L.js";import"./useFocusRing-Caix2y0_.js";import"./react-children-utilities-bPIN5y_s.js";import"./Action-6ocxia9j.js";import"./context-B3SgFMfx.js";import"./useStatic-BT4grvBi.js";import"./browser-DtJMxQoE.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./dynamic-DckDcmFh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./Heading-CRDqmGt0.js";import"./Heading-DVxPUCYC.js";import"./RSPContexts-4eF2sDK2.js";import"./InlineCode-jUUX7YG5.js";import"./Link-7RMwdF8f.js";import"./usePress-B2gRAimw.js";import"./Separator-Bfk1ByEs.js";import"./Separator-C_iWvMGV.js";import"./CollectionBuilder--BI9tvyg.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./TextArea-CVhAFbg_.js";import"./TextFieldBase-DgvH_saR.js";import"./FieldDescription-DQMN5C8v.js";import"./TextField-DapXRZOv.js";import"./Form-CiLoCuZS.js";import"./Group-DjNAC75P.js";import"./Input-BpAc-meC.js";import"./useTextField-BmiF-DDN.js";import"./useFormReset-DwdExnfa.js";import"./useFormValidation-LOSvoqzJ.js";import"./ReactAriaControlledValueFix-C438VEIS.js";import"./useManagedValue-X_yr0qfx.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./Collection-BVDIRVc_.js";import"./SelectionIndicator-vtyMezuP.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

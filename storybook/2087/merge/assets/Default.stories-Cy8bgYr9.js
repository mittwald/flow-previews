import{j as r,r as h}from"./iframe-DwkHntCQ.js";import{M as e}from"./MarkdownEditor-arGDQUcQ.js";import{L as l}from"./Label-IsfDEsPh.js";import{F as g}from"./useFieldComponent-DTLstJQQ.js";import{B as f}from"./Button-DN4_LEM9.js";import{S as x}from"./Section-Cq1uXunU.js";import"./index-nuYtCEEu.js";import"./Markdown-CbPHFjsY.js";import"./CodeBlock-o86PFZnu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CSmZFR7l.js";import"./IconWarning-CscgxAB5.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./Tooltip-BZS-4zpv.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./ClearPropsContext-D7-qaIYX.js";import"./utils-Di7WFWpe.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useFocus-GoSUCcJ3.js";import"./utils-BgD92WZP.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./context-BkqugFd7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DyDKUpf4.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./useFocusWithin-tqcFW1Po.js";import"./react-children-utilities-C8UOdL4T.js";import"./Action-BTZgUlHV.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./browser-DfU0u7Y9.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./dynamic-A00wcWEh.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./Heading-BH424ajP.js";import"./Heading-8J-pRNKz.js";import"./RSPContexts-CHr_tkrx.js";import"./InlineCode-B-31VLim.js";import"./Link-D97UElYb.js";import"./usePress-BCP8B4jj.js";import"./Separator-B9Vg2JBF.js";import"./Separator-D5X37L1x.js";import"./CollectionBuilder-CpTUcuaV.js";import"./Text-DBgNVic9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Text-BtFh1iC6.js";import"./TextArea-DEWzn2mP.js";import"./TextFieldBase-BGQbwFYA.js";import"./FieldDescription-DY5ANAML.js";import"./TextField-BU5FsIMM.js";import"./Form-DZTCn0e1.js";import"./Group-BnJXXyrI.js";import"./Input-CxNU6sM9.js";import"./useTextField-CMn55DJk.js";import"./useFormReset-BUY4HIau.js";import"./useFormValidation-D01J8um2.js";import"./ReactAriaControlledValueFix-DNP-65Ab.js";import"./useManagedValue-DG7FFB_1.js";import"./Label.module-CUYTf9Jc.js";import"./VisuallyHidden-CVpyzdGa.js";import"./LoadingSpinner-Bd24wSd4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BrfRNilt.js";import"./ContextMenuSection-BIxoue0C.js";import"./Dialog-Cj1dv_FM.js";import"./Collection-C9EPSj0q.js";import"./SelectionIndicator-BmVEKeRD.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";const qr={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Gr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Gr as __namedExportsOrder,qr as default};

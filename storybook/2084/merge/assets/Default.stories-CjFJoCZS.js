import{j as r,r as h}from"./iframe-Bju5tM19.js";import{M as e}from"./MarkdownEditor-CKwlstla.js";import{L as l}from"./Label-CEBawMgO.js";import{F as g}from"./useFieldComponent-SvMgnfSt.js";import{B as f}from"./Button-D01G-2Tc.js";import{S as x}from"./Section-DCM0ThIe.js";import"./index-nuYtCEEu.js";import"./Markdown-DGXO8ex7.js";import"./CodeBlock-IaiiPBYr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-kj-pKC7r.js";import"./IconWarning-EseH3oBy.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./Tooltip-D3ntzwjh.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./ClearPropsContext-nVrOsFhk.js";import"./utils-CHaPYnRu.js";import"./OverlayArrow-CkGx3q47.js";import"./useFocus-dnpNkUeL.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./context-BCZfssJF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BiPn7KDX.js";import"./useFocusable-S-EY4exA.js";import"./useFocusRing-DQLm4Rj_.js";import"./react-children-utilities-CV_3FZ2O.js";import"./Action-DGXz3yuy.js";import"./context-DoYyNt70.js";import"./useStatic-Dhn4vIeo.js";import"./browser-5LoYBPX6.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./dynamic-KamcoLNc.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./Heading-BvGOAURU.js";import"./Heading-BJwwNeLw.js";import"./RSPContexts-CuZAMKB6.js";import"./InlineCode-C2Xo__ry.js";import"./Link-CwjgeQHd.js";import"./usePress-DNUm2pP-.js";import"./Separator-CdgHP6if.js";import"./Separator-F1osFFu3.js";import"./CollectionBuilder-C9Q_qjob.js";import"./Text-Ctwf1INQ.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./TextArea-CeZGn1jj.js";import"./TextFieldBase-BtBqEQ7k.js";import"./FieldDescription-BYoVcIgt.js";import"./TextField-DqSp9-m6.js";import"./Form-CawbhIR_.js";import"./Group-CMnMCMaj.js";import"./Input-Cn0b8SON.js";import"./useTextField-BXTJR5Zn.js";import"./useFormReset-CYS5QNbo.js";import"./useFormValidation-Cc6rboKS.js";import"./ReactAriaControlledValueFix-BPXa8wTf.js";import"./useManagedValue-CmPPbGYh.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ContextMenuSection-D4oqZzWw.js";import"./Dialog-BwAIy3cs.js";import"./Collection-CzETdAyj.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

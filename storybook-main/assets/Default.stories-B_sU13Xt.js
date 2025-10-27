import{j as r,r as h}from"./iframe-CgV0BA21.js";import{M as e}from"./MarkdownEditor-Ce5JC-U0.js";import{L as l}from"./Label-Bxuf1S0W.js";import{F as g}from"./useFieldComponent-D1IKYPO_.js";import{B as f}from"./Button-CNT8DxS9.js";import{S as x}from"./Section-sLT7TF5r.js";import"./index-nuYtCEEu.js";import"./Markdown-yqk-32zr.js";import"./CodeBlock-D9FVjJsi.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BVUe6uMB.js";import"./IconWarning-Cjg_6qhe.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./index-LOR_5P9o.js";import"./Tooltip-CUNaUHGg.js";import"./ClearPropsContextView-k4P5ol-4.js";import"./ClearPropsContext-BLhIxcUa.js";import"./utils-BtxgbS4l.js";import"./OverlayArrow-B-9LgXoP.js";import"./useFocus-DCA5O52l.js";import"./ProgressBar-Buubgbe8.js";import"./Label-CttY7hce.js";import"./Hidden-jMQa5TyR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B3KDK_sh.js";import"./context-DHnf2uKc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-REzwF7fx.js";import"./useFocusable-CmuVkcp6.js";import"./useFocusRing-D4YLibcx.js";import"./react-children-utilities-D5-pLFdL.js";import"./Action-DZ2Xrd6d.js";import"./context-CRjcTZWJ.js";import"./useStatic-BN9Sd72d.js";import"./browser-BkNcCpiL.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./dynamic-BuNxxpAs.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./Heading--VfPtVyJ.js";import"./Heading-CdcvmK3e.js";import"./RSPContexts-B0Fd51Ht.js";import"./InlineCode-sv-zBJyl.js";import"./Link-CjJ87925.js";import"./usePress-Dh998neg.js";import"./Separator-CKUcqKP1.js";import"./Separator-DWGZbVju.js";import"./CollectionBuilder-BH1gKqtM.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./TextArea-BfeonVbJ.js";import"./TextFieldBase-DhF0aent.js";import"./FieldDescription-CQY0EwbT.js";import"./TextField-BCrL9C4z.js";import"./Form-Co57238C.js";import"./Group-BkfrkqlC.js";import"./Input-CWgJEKQk.js";import"./useTextField-bAvx5s3l.js";import"./useFormReset-DmIBBfXo.js";import"./useFormValidation-AnXxOg_8.js";import"./ReactAriaControlledValueFix-Du2y8LR1.js";import"./useManagedValue-DilwxyV8.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ContextMenuSection-DduOvbG6.js";import"./Dialog-BuxTXh7Q.js";import"./Collection-PQKx517l.js";import"./SelectionIndicator-Bn-FIAma.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

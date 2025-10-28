import{j as r,r as h}from"./iframe-BvCo0Jms.js";import{M as e}from"./MarkdownEditor-FlK1gu7A.js";import{L as l}from"./Label-9SlnZKrY.js";import{F as g}from"./useFieldComponent-h58tn8zy.js";import{B as f}from"./Button-BdRFLyHU.js";import{S as x}from"./Section-B56xh2AV.js";import"./index-nuYtCEEu.js";import"./Markdown-BmHdhB9Y.js";import"./CodeBlock-BjM92Eo7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DoCe1wMe.js";import"./IconWarning-DF-Lhcnu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./Tooltip-BkzngzVW.js";import"./ClearPropsContextView-C48HQbuq.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./utils-Cw2xzcbV.js";import"./OverlayArrow-CPNbfpB1.js";import"./useFocus-C5EW73ar.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./context-EIbK-86q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C0Hm7DMH.js";import"./useFocusable-BxQ2X-GC.js";import"./useFocusRing-D8FCXLiH.js";import"./react-children-utilities-K6HpEoIu.js";import"./Action-B4Kyn-_S.js";import"./context-Dhm9rN8k.js";import"./useStatic-BT5cYh4l.js";import"./browser-DOebU0pA.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./dynamic-BmXp7BE9.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./Heading-B5ZCmgMS.js";import"./Heading-DDeE-fbN.js";import"./RSPContexts-DqErA_gH.js";import"./InlineCode-CYtd0b42.js";import"./Link-BkqgumxN.js";import"./usePress-BZrRujBy.js";import"./Separator-BL37Bi91.js";import"./Separator-CzBpIsK8.js";import"./CollectionBuilder-BCns4Ten.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./TextArea-Chqx5i1a.js";import"./TextFieldBase-DUjDXXxQ.js";import"./FieldDescription-ThKAVIuf.js";import"./TextField-Cg2_j61p.js";import"./Form-DLKKw6GK.js";import"./Group-CxRviubY.js";import"./Input-DUPogfhm.js";import"./useTextField-DZ1FF2T9.js";import"./useFormReset-B8Yq5UFv.js";import"./useFormValidation-DFmu6UDs.js";import"./ReactAriaControlledValueFix-B2lXfI7Z.js";import"./useManagedValue-C3Cvntyc.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ContextMenuSection-D9cp5lxC.js";import"./Dialog-Bn7Do3Cm.js";import"./Collection-DPawhEbh.js";import"./SelectionIndicator-CnEt238s.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

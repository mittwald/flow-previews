import{j as r,r as h}from"./iframe-DOYRhvKw.js";import{M as e}from"./MarkdownEditor-CSeiLnqy.js";import{L as l}from"./Label-D1jneSDA.js";import{F as g}from"./useFieldComponent-CVvykpK2.js";import{B as f}from"./Button-C2r2j3I4.js";import{S as x}from"./Section-BJf3Kb9f.js";import"./index-nuYtCEEu.js";import"./Markdown-B9vNWsVt.js";import"./CodeBlock-9SoLjwIW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-91QL9_KQ.js";import"./IconWarning-CT2mn3WV.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./Tooltip-CfJ3nkrW.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./utils-Bgpcx055.js";import"./OverlayArrow-C0WVRV0f.js";import"./useFocus-19H2kxNT.js";import"./ProgressBar-DECQ-pQm.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./context-NzKNm45Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BpyUCkTO.js";import"./useFocusable-DT2cLKuD.js";import"./useFocusRing-BgXDKXFW.js";import"./react-children-utilities-BC28ceB8.js";import"./Action-BNkegqWa.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./browser-BfmJHaZX.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./dynamic-nHNYFzn9.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./Heading-BcQRRFfC.js";import"./Heading-BiqQ-WE6.js";import"./RSPContexts-D64TVg0j.js";import"./InlineCode-CHfNKay-.js";import"./Link-Bo-kO0xT.js";import"./usePress-GLnS58A3.js";import"./Separator-CMsdUpiW.js";import"./Separator-9JM_OpZ0.js";import"./CollectionBuilder-COEzD4ng.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./TextArea-BG5CZo2j.js";import"./TextFieldBase-BQTokYYT.js";import"./FieldDescription-Blyf9m0W.js";import"./TextField-zZoLVZYC.js";import"./Form-iQ1p0tBu.js";import"./Group-HF6ucXVn.js";import"./Input-OSTDVC9B.js";import"./useTextField-B558uymh.js";import"./useFormReset-BHPIYNcK.js";import"./useFormValidation-37foNTGu.js";import"./ReactAriaControlledValueFix-BeGVeEzJ.js";import"./useManagedValue-CTsotaDH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Dialog-QPXJS7lu.js";import"./Collection-BmR1fMr0.js";import"./SelectionIndicator-DAPFHJnO.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

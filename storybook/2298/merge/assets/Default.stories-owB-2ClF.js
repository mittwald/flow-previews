import{j as r,r as f}from"./iframe-P-BtG9en.js";import{M as o}from"./MarkdownEditor-C559qL8j.js";import{L as R}from"./Label-P3DTYY4f.js";import{F as b}from"./FieldError-BKtriW0o.js";import{B as z}from"./Button-BDKyvND0.js";import{S as x}from"./Section-58eqO89k.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DIubdIOr.js";import"./CodeBlock-Bb-ESwr5.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BjzDoe8E.js";import"./IconWarning-NSWHp5YX.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./index-BvXbw6Ik.js";import"./remote-CHm5B1ZS.js";import"./Tooltip-BPLrPRyc.js";import"./utils-B0ReHH5J.js";import"./OverlayArrow-BfX9M7HU.js";import"./useFocus-CaaZ7Vn6.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./context-DgQkEglP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CySMD5sm.js";import"./useControlledState-CF2gRUje.js";import"./useFocusable-BT9LLfcI.js";import"./react-children-utilities-BTO9JeLU.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./useStatic-CkdzkAMF.js";import"./browser-CAs7Gyq6.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./dynamic-NZeYY7PB.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./Heading-CnpYSlBq.js";import"./Heading-BpHPsioq.js";import"./RSPContexts-Jnosxnes.js";import"./InlineCode-BpKFkgVG.js";import"./Link-Vx4jQ_pt.js";import"./usePress-DdsYmr0S.js";import"./Separator-BHoidzlt.js";import"./Separator-DqzDCiom.js";import"./CollectionBuilder-DTl13Dsz.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./TextArea-DmhLNZcg.js";import"./useFieldComponent-DCdIumPj.js";import"./useControlledHostValueProps-CU68XwN9.js";import"./FieldDescription-DHDLfryo.js";import"./TextField-Bc6PZo_9.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useTextField-r4nD2off.js";import"./useFormReset-EHJI2p2K.js";import"./useFormValidation-ePPiHYYq.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./Collection-C65VUZYL.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};

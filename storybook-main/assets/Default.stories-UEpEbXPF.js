import{j as r,r as f}from"./iframe-CKZ3lvbD.js";import{M as o}from"./MarkdownEditor-BtbzCiMd.js";import{L as R}from"./Label-GTbkpoc2.js";import{F as b}from"./FieldError-BAXRdB0p.js";import{B as z}from"./Button-CJlIPsW5.js";import{S as x}from"./Section-DVJloPPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DnQjfXkV.js";import"./CodeBlock-BCXyVEQD.js";import"./clsx-B-dksMZM.js";import"./CopyButton-E7WBIwZo.js";import"./IconWarning-C7p1kK8i.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./remote-CtPArtkt.js";import"./Tooltip-CRp5hwMU.js";import"./utils-BvJRIsTz.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useFocus-C_IvCZ_Q.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./context-C9x0o2NL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BEfvRwzV.js";import"./useControlledState-DyEi02IX.js";import"./useFocusable-C7EwfmGM.js";import"./react-children-utilities-CEk1HmPc.js";import"./Action-BaMcPQM3.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./browser-burL9SPa.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./dynamic-BOUQFyUk.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./Heading-BKtZSdLW.js";import"./Heading-DdSm2kzR.js";import"./RSPContexts-lOz_fmPr.js";import"./InlineCode-B3YFgNNq.js";import"./Link-3yz_UhBK.js";import"./usePress-BdqAXD8t.js";import"./Separator-BuJg2u--.js";import"./Separator-CX2sLzIc.js";import"./CollectionBuilder-DlZiYq_X.js";import"./Text-C_6aanp2.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./TextArea-BHNo0V5D.js";import"./useFieldComponent-sXfPOyeP.js";import"./useControlledHostValueProps-el4q383E.js";import"./FieldDescription-G4RsrN-A.js";import"./TextField-JDVnl2nc.js";import"./FieldError-BqwxYxeF.js";import"./Form-akuVNupd.js";import"./Group-BXHCPMTj.js";import"./Input-DyPHNw9T.js";import"./useTextField-Bb4VUV4A.js";import"./useFormReset-C_HfEwX8.js";import"./useFormValidation-BpwCrRY1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";import"./LoadingSpinner-D6ABJv6G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BHDMacWQ.js";import"./ContextMenuSection-Dgn4oNc5.js";import"./Dialog-C-Rr13fs.js";import"./Collection-8TFUhRy4.js";import"./SelectionIndicator-Lac2coO-.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

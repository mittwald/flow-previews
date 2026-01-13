import{j as r,r as f}from"./iframe-D5OSMSYj.js";import{M as o}from"./MarkdownEditor-N6Qyvcz8.js";import{L as R}from"./Label-CF1-K3Zk.js";import{F as b}from"./FieldError-DkXkFVgN.js";import{B as z}from"./Button-DTe5su69.js";import{S as x}from"./Section-Dz5Ps6FG.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Dsfv2jpJ.js";import"./CodeBlock-BfMnKmLj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ed8SLshv.js";import"./IconWarning-aBoV8v8e.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./remote-DoBIDVY0.js";import"./Tooltip-CloE64M8.js";import"./utils-B2fStg81.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useFocus-C6h-AdFL.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./context-CCC3vGzE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BLX_f1Wx.js";import"./useFocusable-BBmYajA6.js";import"./useFocusRing-D5zyjxEp.js";import"./react-children-utilities-BKdWvkEI.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./browser-CPg_spJX.js";import"./getActionGroupSlot-BAkzknoy.js";import"./dynamic-B1x5IqP1.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./Heading-CnkvXclq.js";import"./Heading-BpBqAeXs.js";import"./RSPContexts-BzWalm_3.js";import"./InlineCode-BiCZL1Bd.js";import"./Link-D6eMXHDa.js";import"./usePress-Db_mMnan.js";import"./Separator-DAEr-kPT.js";import"./Separator-BUClO3qk.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./TextArea-CJHfpIwm.js";import"./TextFieldBase-B8fMcfN9.js";import"./FieldDescription--3BD_Kcq.js";import"./useFieldComponent-yQbkUBpw.js";import"./TextField-TgU68DEX.js";import"./FieldError-SdvWZoRR.js";import"./Form-RJ7gT7dr.js";import"./Group-DPq_fDos.js";import"./Input-DK63hDT9.js";import"./useTextField-CYoB5YV1.js";import"./useFormReset-C4H0cf_a.js";import"./useFormValidation-BzDFxNXO.js";import"./useControlledHostValueProps-d9R3T6JC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTfGmXCg.js";import"./ContextMenuSection-DdCYek15.js";import"./Dialog-DOlt_k3K.js";import"./Collection-DJCIfP6r.js";import"./SelectionIndicator-BCMQtvaW.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};

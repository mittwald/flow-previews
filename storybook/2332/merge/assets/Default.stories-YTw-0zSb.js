import{j as r,r as f}from"./iframe-DG8PGYI2.js";import{M as o}from"./MarkdownEditor-B9n7KKqE.js";import{L as R}from"./Label-BPpS4vmA.js";import{F as b}from"./FieldError-Cib7Ob9Y.js";import{B as z}from"./Button-DsdihroW.js";import{S as x}from"./Section-Da7bIBGb.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B2dRwY_l.js";import"./CodeBlock-Dq3IpEZH.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BjYK6oOJ.js";import"./IconWarning-SSUZ9dob.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./index-LR7sdXL2.js";import"./remote-DDSPySo3.js";import"./Tooltip-D4Aliizc.js";import"./utils-07AIACoX.js";import"./OverlayArrow-BCWfoCHK.js";import"./useFocus-gEyTxYiG.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./context-CRjwjO0_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CyfWRfC8.js";import"./useControlledState-CbmAXNAC.js";import"./useFocusable-0ogj4vIM.js";import"./react-children-utilities-0eE0Whvi.js";import"./ActionBatch-BRiItlo9.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./browser-CdVMgEWJ.js";import"./getActionGroupSlot-D51i84O1.js";import"./dynamic-BkMen_On.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./RSPContexts-DatC1hy5.js";import"./InlineCode-DYzqO4-c.js";import"./Link-BYvDMLq1.js";import"./usePress-Dy-OAjIk.js";import"./Separator-BHEBe6GY.js";import"./Separator-DxksnpFt.js";import"./CollectionBuilder-CqZXSAPR.js";import"./Text-DXfg_t75.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./TextArea-BlCsrUN2.js";import"./useFieldComponent-CBicToer.js";import"./useControlledHostValueProps-B3V_ATuW.js";import"./FieldDescription-CFcLkynh.js";import"./TextField-OZt28VIy.js";import"./FieldError-bE1Vz7Na.js";import"./Form-COtDtsRb.js";import"./Group-DnR8HzPq.js";import"./Input-8qA1kF5u.js";import"./useTextField-CqEJ98NX.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";import"./LoadingSpinner-JP8g8ixs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CKW1LLKF.js";import"./ContextMenuSection-BKYmu9Je.js";import"./Dialog-Bv_Niklp.js";import"./Collection-COwwIt7O.js";import"./SelectionIndicator-CS3Tqeow.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

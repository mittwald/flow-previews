import{j as r,r as f}from"./iframe-CV15FJMl.js";import{M as o}from"./MarkdownEditor-BkPJUsRT.js";import{L as R}from"./Label-BYiN1vfD.js";import{F as b}from"./FieldError-e14SOUTJ.js";import{B as z}from"./Button-CPmcSz1K.js";import{S as x}from"./Section-DxMSYwau.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DWV_dmPW.js";import"./CodeBlock-D19mdu4o.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CxOUaNV7.js";import"./IconWarning-CS7d0V5Y.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./remote-BYNvJzFU.js";import"./Tooltip-BaYTER9k.js";import"./utils-B45PgFGd.js";import"./OverlayArrow-BtUNb3SD.js";import"./useFocus-C3kMSW21.js";import"./ProgressBar-DYhZqT6M.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./context-Is67_JkX.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CoS5ESqQ.js";import"./useControlledState-Br5i43rk.js";import"./useFocusable-DenRoGzb.js";import"./react-children-utilities-Cg2jtRRQ.js";import"./Action-k7eAd4lv.js";import"./context-z7OXrsOp.js";import"./useStatic-CaY36sW2.js";import"./browser-8BNXX35r.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./dynamic-83TxHgtq.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./Heading-DwSdW-0K.js";import"./Heading-BvCB2pW7.js";import"./RSPContexts-09abhkzW.js";import"./InlineCode-Sl0RcxjG.js";import"./Link-CQJ7mppL.js";import"./usePress-C9ebI84m.js";import"./Separator-7hApyU1N.js";import"./Separator-BUXgDBus.js";import"./CollectionBuilder-DPEpUwFF.js";import"./Text-DO3jYkuR.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./TextArea-Gm_dyTx3.js";import"./TextFieldBase-CM4cdUAH.js";import"./FieldDescription-BbUtqeWX.js";import"./useFieldComponent-4syZJMEs.js";import"./TextField-C5RLv0sl.js";import"./FieldError-CDBleeuN.js";import"./Form-B5_Ftb3l.js";import"./Group-Oc33WXVS.js";import"./Input-Wuyb26cC.js";import"./useTextField-DH39Jsbq.js";import"./useFormReset-DQt01LcM.js";import"./useFormValidation-rdndu8q5.js";import"./useControlledHostValueProps-CzUjaEYd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./LoadingSpinner-C2UghIT7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Deu1Fo5o.js";import"./ContextMenuSection-BP5kvD_3.js";import"./Dialog-CvkIF4vR.js";import"./Collection-BDyrlbfU.js";import"./SelectionIndicator-C649Jmr0.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./useCollator-C223TjTn.js";import"./FocusScope-Da56m84L.js";import"./VisuallyHidden-DJ3SqDe0.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

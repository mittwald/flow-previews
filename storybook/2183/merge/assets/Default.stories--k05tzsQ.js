import{j as r,r as f}from"./iframe-m11uA8ph.js";import{M as o}from"./MarkdownEditor-BgQQemZA.js";import{L as R}from"./Label-C80bgPDj.js";import{F as b}from"./FieldError-DSWXJfK8.js";import{B as z}from"./Button-Dypt8iw9.js";import{S as x}from"./Section-CbIXCBOB.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CTL-Sthg.js";import"./CodeBlock-C278DIua.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CWoULOzq.js";import"./IconApp-DUFlag-8.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./remote-D5wxRFjH.js";import"./IconCopy-P-jWjBT-.js";import"./Tooltip-CMijZotm.js";import"./utils-B2Atf1IZ.js";import"./OverlayArrow-DhFl9stJ.js";import"./useFocus-DtmXh1uW.js";import"./ProgressBar-C1zZy1Lx.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./context-CT-J1WHN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CQIt1v1r.js";import"./useFocusable-BsiT1idP.js";import"./useFocusRing-faXrGzgs.js";import"./react-children-utilities-DtYi8XG6.js";import"./Action-DQyOyJ_Y.js";import"./browser-BsJUI2_B.js";import"./useStatic-BIf93y4q.js";import"./getActionGroupSlot-C8INwjTD.js";import"./context-BDVCp3x_.js";import"./dynamic-x9dWH5I2.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./Heading-B1gnURmx.js";import"./Heading-C-dZ-n10.js";import"./RSPContexts-CBB4rOO8.js";import"./InlineCode-LuDTwNIG.js";import"./Link-B8ve4p3X.js";import"./IconDownload-D78Vb8cl.js";import"./usePress-D0Bh9t0W.js";import"./Separator-3FdN54dS.js";import"./Separator-IY7J1-ik.js";import"./CollectionBuilder-SD0NxqFv.js";import"./Text-C8eG2T-4.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./TextArea-WQvXL-ml.js";import"./TextFieldBase-Dm_tgh_F.js";import"./FieldDescription-CZNBqhnU.js";import"./useFieldComponent-BhKi7qXb.js";import"./TextField-DWxwO3V5.js";import"./FieldError-BiQycVeh.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useTextField-BUjD2wuQ.js";import"./useFormReset-CdvwVVbr.js";import"./useFormValidation-dI-EyrI5.js";import"./useControlledHostValueProps-BPdzbdZO.js";import"./IconList-DOShgkou.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BFD4weFl.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Hg1-qkLa.js";import"./ContextMenuSection-DB4vcpk0.js";import"./lib-90ocxLs-.js";import"./Dialog-Dzvm1uhq.js";import"./Collection-DuF4MxNY.js";import"./SelectionIndicator-DxPJbj4p.js";import"./SelectionManager-mPOWfQXK.js";import"./useEvent-DarMwBx2.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";const Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,$r as __namedExportsOrder,Zr as default};

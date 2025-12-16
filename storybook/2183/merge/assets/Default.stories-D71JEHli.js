import{j as r,r as f}from"./iframe-ZqGKWCd-.js";import{M as o}from"./MarkdownEditor-CPb-6rPZ.js";import{L as R}from"./Label-CJicQH7Q.js";import{F as b}from"./FieldError-LLBE4o9B.js";import{B as z}from"./Button-BZgO5jCY.js";import{S as x}from"./Section-DNOHRVt7.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DNhmIapJ.js";import"./CodeBlock-J8ktBMsf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BwVKTB5G.js";import"./IconChevronDown-DOkopHOS.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./remote-QKtGQrQi.js";import"./IconCopy-BtN1TBnk.js";import"./Tooltip-FniRebUG.js";import"./utils-D141Jr51.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useFocus-DhU9eZJ-.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./context-zCArMZyI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CXUvh1Us.js";import"./useFocusable-BybslKHd.js";import"./useFocusRing-DbADFAxV.js";import"./react-children-utilities-DrJP8T0z.js";import"./Action-DfNxqrNn.js";import"./browser-BUvHTeNk.js";import"./useStatic-CPFMlQst.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./context-C6xdvZ0U.js";import"./dynamic-BXzH9RDF.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./Heading-DkfgbcZo.js";import"./Heading-Dpt15uKY.js";import"./RSPContexts-SeDUPtJk.js";import"./InlineCode-C9LBaMBZ.js";import"./Link-DlviDzRY.js";import"./IconDownload-CpqQDvc3.js";import"./usePress-_yC0x0cS.js";import"./Separator-orJGCeWu.js";import"./Separator-wVg1dl70.js";import"./CollectionBuilder-BKjwMGq6.js";import"./Text-fsbk1lYn.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./TextArea-BcGlTA1U.js";import"./TextFieldBase-CVMJXfOH.js";import"./FieldDescription-CtBJlXxf.js";import"./useFieldComponent-B1bOh1KR.js";import"./TextField-BlpbMoN1.js";import"./FieldError-D5ElVx7m.js";import"./Form-CbKBfjBg.js";import"./Group-LIjHZE_9.js";import"./Input-kDKiG0mN.js";import"./useTextField-B0bavF7F.js";import"./useFormReset-L-nmEJr1.js";import"./useFormValidation-EOc_OYLE.js";import"./useControlledHostValueProps-tmC5-mDa.js";import"./IconList-DpqOX_Lc.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-9fNDXdlu.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUB1U94R.js";import"./ContextMenuSection-CSh4hkta.js";import"./lib-90ocxLs-.js";import"./Dialog-CUnVff-C.js";import"./Collection-CvOok_qh.js";import"./SelectionIndicator-JiamtxED.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";const Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

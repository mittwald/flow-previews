import{j as r,r as f}from"./iframe-Bz3NPU1o.js";import{M as o}from"./MarkdownEditor-Cqmjk2YP.js";import{L as R}from"./Label-DJFgm5M0.js";import{F as b}from"./FieldError-fbbECv40.js";import{B as z}from"./Button-DmREI3b0.js";import{S as x}from"./Section-BwE4QROn.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-NPV-9JLN.js";import"./CodeBlock-DkPpZ7M9.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ClvRbTiJ.js";import"./IconWarning-Cqqx4tMU.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./remote-D_M7roLC.js";import"./Tooltip-XnO_0EDk.js";import"./utils-DuUJF5nC.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useFocus-DMRfkGw8.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./context-pgk2HPHJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BLuP37PT.js";import"./useControlledState-e4YYsLZE.js";import"./useFocusable-DZRtaeEQ.js";import"./react-children-utilities-Bken2RrT.js";import"./ActionBatch-DB6HM48H.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./browser-BaNqvzaa.js";import"./getActionGroupSlot--8oaPbEm.js";import"./dynamic-CvekFh9y.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./Heading-0jGXR_g9.js";import"./Heading-BkR9lkEu.js";import"./RSPContexts-BgkP6bIF.js";import"./InlineCode-DLEtbI2d.js";import"./Link-CXuJvK2b.js";import"./usePress-BmxXpscc.js";import"./Separator-BitBYpWl.js";import"./Separator-4S0Txhk8.js";import"./CollectionBuilder-CSsN_D43.js";import"./Text-ByJancxD.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Text-ClD1r8b1.js";import"./TextArea-CXw0flht.js";import"./useFieldComponent-kW7iCi5m.js";import"./useControlledHostValueProps-CNkuswWa.js";import"./FieldDescription-DXJo72US.js";import"./TextField-B0FIBjDK.js";import"./FieldError-BDAUq_c5.js";import"./Form-DrqAye7f.js";import"./Group-CfiWYn5I.js";import"./Input-DW4bMgBP.js";import"./useTextField-BkVP-UnG.js";import"./useFormReset-D4UcXUYp.js";import"./useFormValidation-itgD5oYf.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";import"./LoadingSpinner-C6XGp2xl.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BMxU8wWi.js";import"./ContextMenuSection-Dt7nyU_Z.js";import"./Dialog-DrbZDX-D.js";import"./Collection-CtHLpY8r.js";import"./SelectionIndicator-DWP2zhMc.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./VisuallyHidden-DkJ66lZ_.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

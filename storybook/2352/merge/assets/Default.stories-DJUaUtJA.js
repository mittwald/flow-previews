import{j as r,r as f}from"./iframe-DhXHhh1w.js";import{M as o}from"./MarkdownEditor-Yer5G3uP.js";import{L as R}from"./Label-B97zndYQ.js";import{F as b}from"./FieldError-NwdeaE8Z.js";import{B as z}from"./Button-DK8hND6e.js";import{S as x}from"./Section-BFL21Kdp.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C3CIRfrB.js";import"./CodeBlock-BLlZNtBM.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BZRh8aUN.js";import"./IconWarning-Cq0bATFd.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./remote-3lBAaKOS.js";import"./Tooltip-CpPl1ruP.js";import"./utils--GApMcJ9.js";import"./OverlayArrow-D0YkTT7M.js";import"./useFocus-CCcmXvuL.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./context-C0JBe_V4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C0Ptw1X0.js";import"./useControlledState-BAaAMcGs.js";import"./useFocusable-DaonITQz.js";import"./react-children-utilities-DIDr8h0c.js";import"./ActionBatch-CBOUg1fp.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./browser-DC-Dnn5c.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./dynamic-DY1DU2Hc.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./Heading-W2uFhXaO.js";import"./Heading-CrXwA3a4.js";import"./RSPContexts-BISy0hbD.js";import"./InlineCode-eBkDpTNF.js";import"./Link-Bm5obdSl.js";import"./usePress-DuFsm5YE.js";import"./Separator-C9-m7dd_.js";import"./Separator-YN4gslNC.js";import"./CollectionBuilder-BLnwNesF.js";import"./Text-VjJbV_1P.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./TextArea-CaKfB5uo.js";import"./useFieldComponent-CXGCADuw.js";import"./useControlledHostValueProps-Bz_KAzkR.js";import"./FieldDescription-Cpq8h0bA.js";import"./TextField-DASBnPfa.js";import"./FieldError-DoyTFare.js";import"./Form-Cr93Lgju.js";import"./Group-Bojaf2qr.js";import"./Input-CeMR8XUm.js";import"./useTextField-DHL_UDQT.js";import"./useFormReset-BhTKQiKR.js";import"./useFormValidation-Bi2teCon.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./LoadingSpinner-BQo0GQZs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B72XzUR4.js";import"./ContextMenuSection-EAnCbrTf.js";import"./Dialog-CefhgDMJ.js";import"./Collection-CjYz6Uc3.js";import"./SelectionIndicator-p-DrZhoI.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

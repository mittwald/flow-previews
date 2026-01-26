import{j as r,r as f}from"./iframe-Bc-jwLWq.js";import{M as o}from"./MarkdownEditor-B-oz3BLa.js";import{L as R}from"./Label-p4o9WkV1.js";import{F as b}from"./FieldError-Cp2fPOrN.js";import{B as z}from"./Button-DRfNiyCG.js";import{S as x}from"./Section-DeLGaA3j.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B-Mpk-X2.js";import"./CodeBlock-CgXRRuEG.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DisgX_mY.js";import"./IconWarning-BPpigV-o.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./index-Ct8kadYq.js";import"./remote-CficONz5.js";import"./Tooltip-Clp_Yp5n.js";import"./utils-BIv87FRG.js";import"./OverlayArrow-C2KXIoV9.js";import"./useFocus-C6ldElRQ.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BfZDlGh7.js";import"./context-BDmep644.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-IlB9I5Xo.js";import"./useFocusable-DIXmUg59.js";import"./useFocusRing-B0jLa-Vk.js";import"./react-children-utilities-BHu5RVO2.js";import"./Action-BW1QHV35.js";import"./context-CAc_7aQG.js";import"./useStatic-D2AFXt6d.js";import"./browser-Cfl6H5sa.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./dynamic-CTlJFVeg.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./Heading-Av026-5J.js";import"./Heading-DpsZJGvr.js";import"./RSPContexts-pS-AnHir.js";import"./InlineCode-BCbe3MWS.js";import"./Link-CVWtB-w0.js";import"./usePress-NBjG5NMF.js";import"./Separator-B8Cjd0jK.js";import"./Separator-jBiWh72R.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./Text-Bs06tnQB.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./TextArea-TuQFBnuL.js";import"./TextFieldBase-C0T21KTJ.js";import"./FieldDescription-CxtFvhlF.js";import"./useFieldComponent-ahSSNXad.js";import"./TextField-qgwh5fDT.js";import"./FieldError-CGIyNVOV.js";import"./Form-DqUF-Ufv.js";import"./Group-I4ZSji5i.js";import"./Input-fHIZlSCw.js";import"./useTextField-C1Foi7Jk.js";import"./useFormReset-DFcj21LA.js";import"./useFormValidation-DyPlpM72.js";import"./useControlledHostValueProps-DoY3RCm0.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-HPdphaJl.js";import"./ContextMenuSection-DJB6II09.js";import"./Dialog-BLkrUNfj.js";import"./Collection-BCq2XeeE.js";import"./SelectionIndicator-BwDlTF6c.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./VisuallyHidden-CmlM99K4.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

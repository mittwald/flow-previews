import{j as r,r as f}from"./iframe-C037GO3p.js";import{M as o}from"./MarkdownEditor-Blr2YFY0.js";import{L as R}from"./Label-B8SETf0h.js";import{F as b}from"./FieldError-B5a1fJJd.js";import{B as z}from"./Button-Cf9guGvq.js";import{S as x}from"./Section-B8monzQm.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CwSaKxHe.js";import"./CodeBlock-BsCspl_Q.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BM_OH3sn.js";import"./IconWarning-tMH4RyLr.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./remote-BG6_lggN.js";import"./Tooltip-PaeEpN2O.js";import"./utils-B21QcS96.js";import"./OverlayArrow-Ct00V4z2.js";import"./useFocus-CuP2Z3Ew.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./context-Cm0s8R8a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D8Rjq8L2.js";import"./useControlledState-DIGHyhBs.js";import"./useFocusable-DZHoKnFR.js";import"./react-children-utilities-BmLO5X3m.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./browser-CtD1Hg4J.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./dynamic-CXANBhHf.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./Heading-D6ofxLDB.js";import"./Heading-DNAjQtPl.js";import"./RSPContexts-Cx4BM4L8.js";import"./InlineCode-BmrvED6k.js";import"./Link-DnebGyxy.js";import"./usePress-DtHLFK3z.js";import"./Separator-Dh4XkHra.js";import"./Separator-DqZ2iszF.js";import"./CollectionBuilder-BaeZE-8K.js";import"./Text-1H8qvaGa.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Text-BlWqR5Lx.js";import"./TextArea-CYEcm52J.js";import"./useFieldComponent-BW6tilSl.js";import"./useControlledHostValueProps-ClXNYq5v.js";import"./FieldDescription-BhLI0C98.js";import"./TextField-BZQwJmxp.js";import"./FieldError-BWfaawdZ.js";import"./Form-DK0MW_mU.js";import"./Group-BPrnFgpr.js";import"./Input-COylKlun.js";import"./useTextField-CiTgdQeQ.js";import"./useFormReset-BmsW_IRy.js";import"./useFormValidation-kMumfte1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";import"./LoadingSpinner-7anO2L1H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-3UAE6tol.js";import"./ContextMenuSection-yxbgVkhw.js";import"./Dialog-Sd6ebC5F.js";import"./Collection--dT_Uf-3.js";import"./SelectionIndicator-DMUN5t4K.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

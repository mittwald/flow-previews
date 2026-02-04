import{j as r,r as f}from"./iframe-CvJspzLv.js";import{M as o}from"./MarkdownEditor-BmY521cf.js";import{L as R}from"./Label-DfZOYrgY.js";import{F as b}from"./FieldError-DQmh2MYp.js";import{B as z}from"./Button-DPWvzJXv.js";import{S as x}from"./Section-DrXtyJcE.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BzUGFkkD.js";import"./CodeBlock-C4sLa2UO.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ck5HMsJx.js";import"./IconWarning-BERZaob7.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./remote-BqqZGE8h.js";import"./Tooltip-JGx6YcQ5.js";import"./utils-BL4G7l_u.js";import"./OverlayArrow-kevdZy7A.js";import"./useFocus-DbFf9Ktc.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./context-CQ77Qkvg.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-L-b3Tn9K.js";import"./useControlledState-DsktkqC9.js";import"./useFocusable-C5zGZvV-.js";import"./react-children-utilities-C2vxi9Ro.js";import"./Action-CzgX1dLD.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./browser-CBUTrPGa.js";import"./getActionGroupSlot-DdQssjpq.js";import"./dynamic-7-1UCAS5.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./Heading-Ex-YKDBU.js";import"./Heading-BRBpvBMz.js";import"./RSPContexts-fR-6qryz.js";import"./InlineCode-Vyw4CAK8.js";import"./Link-BOnIa3MC.js";import"./usePress-DO5nHrqL.js";import"./Separator-CXLDLHUl.js";import"./Separator-CwyBo3YQ.js";import"./CollectionBuilder-1cHqqndV.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./TextArea-WR_Uc4VH.js";import"./TextFieldBase-6J4u6VBA.js";import"./FieldDescription-DYsoHdVt.js";import"./useFieldComponent-43Bszd6x.js";import"./TextField-DPOg2TtI.js";import"./FieldError-DlX11YEn.js";import"./Form-5NfLIR8x.js";import"./Group-C7yLTez3.js";import"./Input-qFXimabr.js";import"./useTextField-Bm9nr_bd.js";import"./useFormReset-ukaISav3.js";import"./useFormValidation-CwZe5cTQ.js";import"./useControlledHostValueProps-Cd6juLCH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ContextMenuSection-B9VXHai8.js";import"./Dialog-CNj22GpD.js";import"./Collection-D9feXgUJ.js";import"./SelectionIndicator-DujQOkfZ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

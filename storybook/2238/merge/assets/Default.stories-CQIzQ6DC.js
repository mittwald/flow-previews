import{j as r,r as f}from"./iframe-DB4UlQ_F.js";import{M as o}from"./MarkdownEditor-C762jr5I.js";import{L as R}from"./Label-D60b9GFw.js";import{F as b}from"./FieldError-7mdFLW8I.js";import{B as z}from"./Button-DYIAULzM.js";import{S as x}from"./Section-CwTyfRBn.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-anHvlI85.js";import"./CodeBlock-C4nItNCG.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWm7MltM.js";import"./IconWarning-D6sMwWyV.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./index-BSqJ1-JW.js";import"./remote-DOdcl-CB.js";import"./Tooltip-BuJGYuYE.js";import"./utils-B6Q0cVYp.js";import"./OverlayArrow-BH8gVRz-.js";import"./useFocus-mLt6Jcka.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./context-BeH9c2u_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-2lUl0kro.js";import"./useFocusable-BfPamkyW.js";import"./useFocusRing-BToYuWbv.js";import"./react-children-utilities-DAHI086P.js";import"./Action-D44Jy6S7.js";import"./context-b0VtR6po.js";import"./useStatic-BsW-2tBw.js";import"./browser-CMEWPYW9.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./dynamic-CewJ3DJw.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./Heading-B71UuISa.js";import"./Heading-BIcTvsYt.js";import"./RSPContexts-Br1rngEm.js";import"./InlineCode-DVI4ns1W.js";import"./Link-2paQW1ed.js";import"./usePress-CDGll4uD.js";import"./Separator-CYMgSuzA.js";import"./Separator-Bcm53B3D.js";import"./CollectionBuilder-DlEUUA4I.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./TextArea-D-cLHmqq.js";import"./TextFieldBase-BRexiZcT.js";import"./FieldDescription-DVjEBj0_.js";import"./useFieldComponent-Dp69OqtL.js";import"./TextField-D0kY72jS.js";import"./FieldError-CegzLELq.js";import"./Form-PeScrtUS.js";import"./Group-DyD1FYug.js";import"./Input-DgHFnA4a.js";import"./useTextField-BlrPE0Ip.js";import"./useFormReset-zmgaZOpR.js";import"./useFormValidation-Bt0uBrAk.js";import"./useControlledHostValueProps-DsyFnxnI.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Dialog-B4nT46da.js";import"./Collection-e6TIFm8x.js";import"./SelectionIndicator-D87wG6Zb.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};

import{j as r,r as f}from"./iframe-BO4how7V.js";import{M as o}from"./MarkdownEditor-DJFuCrVI.js";import{L as R}from"./Label-Dg0lhbqP.js";import{F as z}from"./useFieldComponent-CjWlILZl.js";import{B as b}from"./Button-BRSyykRx.js";import{S as x}from"./Section-L1VuE5li.js";import"./index-nuYtCEEu.js";import"./Markdown-DfQAjssS.js";import"./CodeBlock-DSzdPkTj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-mhXxMLbT.js";import"./IconWarning-riXPckyc.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./Tooltip-DRh9OIt9.js";import"./ClearPropsContextView-BZw5hC3x.js";import"./ClearPropsContext-Cr48Xe01.js";import"./utils-BpiWkIEZ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useFocus-CFrGhCIR.js";import"./ProgressBar-Cb_Q8Aey.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./context-n99Hur2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dy2CU0s2.js";import"./useFocusable-Dm6zCBge.js";import"./useFocusRing-cZUm55wA.js";import"./react-children-utilities-aRBIKRzv.js";import"./Action-BcCpRMgW.js";import"./context-DS1PliZx.js";import"./useStatic-BYOxqZVF.js";import"./browser-9RCZAQdm.js";import"./getActionGroupSlot-DNMgIyad.js";import"./dynamic-DPbzu-N4.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./Heading-CDkPtIgK.js";import"./Heading-DCJd85qW.js";import"./RSPContexts-C8zlTsZJ.js";import"./InlineCode-BRUWyEPl.js";import"./Link-D-rJ9IkI.js";import"./usePress-C-n8mYYh.js";import"./Separator-DESsTIVo.js";import"./Separator-CDyVGVx6.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./Text-k4VuksKp.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";import"./TextArea-BeEPBHbr.js";import"./TextFieldBase-DX5oMAlQ.js";import"./FieldDescription-CJgVFelr.js";import"./TextField-LacAyjo3.js";import"./Form-hZ8SLhDT.js";import"./Group-BtVQV9Eb.js";import"./Input-C8s0JVaR.js";import"./useTextField-shmblCKI.js";import"./useFormReset-DKBI04Qj.js";import"./useFormValidation-BHRl0fwc.js";import"./ReactAriaControlledValueFix-BjDsGSLB.js";import"./useManagedValue-DsAh2tpb.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-T2VJnm-n.js";import"./ContextMenuSection-D98yvfja.js";import"./Dialog-9TwJqweV.js";import"./Collection-7Jhx6ozR.js";import"./SelectionIndicator-qPgcj5gy.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./VisuallyHidden-BldPGQAk.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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

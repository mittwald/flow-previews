import{j as r,r as f}from"./iframe-DM7qDJWN.js";import{M as o}from"./MarkdownEditor-PemNUYix.js";import{L as R}from"./Label-BIhRdzJz.js";import{F as b}from"./FieldError-yptSAddh.js";import{B as z}from"./Button-Dc6TEAeS.js";import{S as x}from"./Section-BzWNMXV2.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BGRA72t_.js";import"./CodeBlock-DtuQARJz.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CTAsMuQK.js";import"./IconWarning-Ck-PBl-h.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./remote-CkIQ4maL.js";import"./Tooltip-C6ILP02l.js";import"./utils-DCh3KcEQ.js";import"./OverlayArrow--T1zjZBI.js";import"./useFocus-V4g9fXxO.js";import"./ProgressBar-XdjtveJ3.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./context-Bdkwq7qF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DKHg-pYg.js";import"./useControlledState-CGBhCpgz.js";import"./useFocusable-jnMsXBmm.js";import"./react-children-utilities-CxD6zGyG.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./browser-GV4Evxlh.js";import"./getActionGroupSlot-ChSghX-d.js";import"./dynamic-Bo6M-mWb.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./Heading-C1qjB_Q-.js";import"./Heading-DA3hIkQr.js";import"./RSPContexts-DtHHiQqe.js";import"./InlineCode-DK-wyYXe.js";import"./Link-BAoZ4o9S.js";import"./usePress-DcE1V40F.js";import"./Separator-Grxo9jZv.js";import"./Separator-duSL34B8.js";import"./CollectionBuilder-CUYn1Myb.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./Text-CqLEY5m0.js";import"./TextArea-D-TVIpMo.js";import"./useFieldComponent-DWfL7CEw.js";import"./useControlledHostValueProps-CKa29mBp.js";import"./FieldDescription-BnJyB75w.js";import"./TextField-BvD23rCg.js";import"./FieldError-CDF7zCEW.js";import"./Form-DD0plB0K.js";import"./Group-V_zeLWI4.js";import"./Input-SfHIWI_P.js";import"./useTextField-BQE_0n2Q.js";import"./useFormReset-DEHhMcAF.js";import"./useFormValidation-BjtvC6sH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cle7Q0jH.js";import"./ContextMenuSection-gnaL4P7y.js";import"./Dialog-CtXs4QP0.js";import"./Collection-B3op_wkO.js";import"./SelectionIndicator-DhuP4hb9.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

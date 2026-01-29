import{j as r,r as f}from"./iframe-Bj8CIgLy.js";import{M as o}from"./MarkdownEditor-29Esvgz1.js";import{L as R}from"./Label-DCfOJgVU.js";import{F as b}from"./FieldError-Dbjs-A5K.js";import{B as z}from"./Button-b_60CJFp.js";import{S as x}from"./Section-Bw-Treyf.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DyV6NJ4Q.js";import"./CodeBlock-D3N7FRPf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CwFeFXIa.js";import"./IconWarning-KvO0562x.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./remote-ChNLl0N8.js";import"./Tooltip-sa6qPAw7.js";import"./utils-D41FTHpf.js";import"./OverlayArrow-zA421arv.js";import"./useFocus-BJLP4kuV.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./context-RK9vgtK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./useFocusable-DNf9Dm0r.js";import"./react-children-utilities-CJqcrfy-.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./useStatic-BJFVwiuT.js";import"./browser-Rl4DjN4H.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./dynamic-DEq-wVmB.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./Heading-CKRtDLQC.js";import"./Heading-CLbyuN1D.js";import"./RSPContexts-C3RQOwqv.js";import"./InlineCode-CenLbvJO.js";import"./Link-Cu-sj9aS.js";import"./usePress-BLrqdZMB.js";import"./Separator-B3J9aM9H.js";import"./Separator-ZmTIxQU_.js";import"./CollectionBuilder-BBfbdfv8.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./TextArea-CdFbDJ3d.js";import"./TextFieldBase-C4_qES-F.js";import"./FieldDescription-tBjikzHa.js";import"./useFieldComponent-DFS7CEov.js";import"./TextField-DWq53d6e.js";import"./FieldError-cTj-tlV1.js";import"./Form-CdHdNrpC.js";import"./Group-C2p9sJyZ.js";import"./Input-DxRXMpsm.js";import"./useTextField-gMvFPb5G.js";import"./useFormReset-DPVe5t_C.js";import"./useFormValidation-CuYWsRMr.js";import"./useControlledHostValueProps-D2bTA6r2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kf97rzrP.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Dialog-vXYkYCcw.js";import"./Collection-Ddvl2Mqw.js";import"./SelectionIndicator-DBsPgOzp.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

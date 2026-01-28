import{j as r,r as f}from"./iframe-BbsOAs33.js";import{M as o}from"./MarkdownEditor-KAKA1wrC.js";import{L as R}from"./Label-DjvR0JzL.js";import{F as b}from"./FieldError-DSzt6ekN.js";import{B as z}from"./Button-CAGXh9YY.js";import{S as x}from"./Section-Cne65CO2.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BnLJYIpF.js";import"./CodeBlock-DMkLBL16.js";import"./clsx-B-dksMZM.js";import"./CopyButton-e92laucG.js";import"./IconWarning-BG17vbyg.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./remote-DIEpRnMd.js";import"./Tooltip-B55B9T_Y.js";import"./utils-d4vW56Wr.js";import"./OverlayArrow-N6t0bVoH.js";import"./useFocus-8sJeBC00.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./context-DDHwgpv7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B8FmEpoX.js";import"./useControlledState-QxMMjnNS.js";import"./useFocusable-CRykt1O9.js";import"./react-children-utilities-D6ScvZHr.js";import"./Action-BXhMVvh_.js";import"./context-_vxrJXzy.js";import"./useStatic-PZIJlmDl.js";import"./browser-6_CJeJSO.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./dynamic-CoVYgUcD.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./Heading-BC6iu52J.js";import"./Heading-Delp_XvT.js";import"./RSPContexts-DfamIfkg.js";import"./InlineCode-CYshlnNt.js";import"./Link-CZ64J4jt.js";import"./usePress-CuEkD-Mt.js";import"./Separator-3l4JzLG0.js";import"./Separator-Qwz2H95Y.js";import"./CollectionBuilder-BFwWw2AW.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./TextArea-BitBxcUi.js";import"./TextFieldBase-DtQicp1m.js";import"./FieldDescription-CI9EcbbK.js";import"./useFieldComponent-c0I5eEtM.js";import"./TextField-DS2qFl1_.js";import"./FieldError-3tWBh0vH.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useTextField-DCPrMHRH.js";import"./useFormReset-eAh5gylf.js";import"./useFormValidation-DyJaMlWv.js";import"./useControlledHostValueProps-DsfhA03o.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ContextMenuSection-Dt_P0EQ4.js";import"./Dialog-Ch_CeJ5E.js";import"./Collection-Bp73NzW5.js";import"./SelectionIndicator-Da0zjLKe.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./VisuallyHidden-D-GMXsu-.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

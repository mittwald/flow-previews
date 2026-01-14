import{j as r,r as f}from"./iframe-CF9WEugj.js";import{M as o}from"./MarkdownEditor-CyQrdjUi.js";import{L as R}from"./Label-ZZPbbDTF.js";import{F as b}from"./FieldError-D4UoR9vC.js";import{B as z}from"./Button-Dt7_Feft.js";import{S as x}from"./Section-z4bbW8IF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Bhc4ZOpq.js";import"./CodeBlock-D1SapfEy.js";import"./clsx-B-dksMZM.js";import"./CopyButton-I3hyunJN.js";import"./IconWarning-DXWyAVP8.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./remote-DKS26xip.js";import"./Tooltip-B8sC8QTX.js";import"./utils-B4BZttt0.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useFocus-DZR1guyz.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./context-Bi2P07EN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C05rL349.js";import"./useFocusable-CSB6sBEJ.js";import"./useFocusRing-Ddjb8e7x.js";import"./react-children-utilities-CgmJr-E3.js";import"./Action-DBGOtx5u.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./browser-CV2qUG2E.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./dynamic-DQFpeFdM.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./Heading-CDe2moQI.js";import"./Heading-DsznpHXx.js";import"./RSPContexts-DsXbJK4N.js";import"./InlineCode-FnFn-JFM.js";import"./Link-CL-5SkjD.js";import"./usePress-DuLNiG6M.js";import"./Separator-DvRRAmyv.js";import"./Separator-DX3N9c3E.js";import"./CollectionBuilder-DOv_JUaO.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./TextArea-CmEvjM1s.js";import"./TextFieldBase-Lt57W6wY.js";import"./FieldDescription-BgZC1fDx.js";import"./useFieldComponent-B3P2g6wY.js";import"./TextField-zFAapi7_.js";import"./FieldError-BfE9I5LY.js";import"./Form-Dv2vFItu.js";import"./Group-B_lWGLp0.js";import"./Input-BGfnvYjW.js";import"./useTextField-Cmxyrl-A.js";import"./useFormReset-w9h9-zRZ.js";import"./useFormValidation-BLUWg_De.js";import"./useControlledHostValueProps-Cois-wEY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button--TTYmuFt.js";import"./ContextMenuSection-ChhzEL-I.js";import"./Dialog-Dbq5Vprd.js";import"./Collection-B5WHZIaw.js";import"./SelectionIndicator-CwdThPwI.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

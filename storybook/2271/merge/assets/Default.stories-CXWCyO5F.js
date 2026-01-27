import{j as r,r as f}from"./iframe-BK9Ry9wr.js";import{M as o}from"./MarkdownEditor-DCDVsIJj.js";import{L as R}from"./Label-MHPgjcAC.js";import{F as b}from"./FieldError-Dlnwp2IY.js";import{B as z}from"./Button-CHbQbW2n.js";import{S as x}from"./Section-Cd3PiQqp.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-77Zwb6jq.js";import"./CodeBlock-DzEgg3kq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Z8K21_W3.js";import"./IconWarning-ClqYagFF.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./remote-BKPS1KcS.js";import"./Tooltip-SzaSakXG.js";import"./utils-DO-BnPGQ.js";import"./OverlayArrow-CRZVDLqR.js";import"./useFocus-C5fN754a.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./context-DsIoSqto.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D5gBJyZQ.js";import"./useFocusable-CjhkSx1Q.js";import"./useFocusRing-Dknf048Z.js";import"./react-children-utilities-BPC2HviM.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./useStatic-D1EtWzUP.js";import"./browser-DDyWafud.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./dynamic-QikLaQcI.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./Heading-DbP6ax1z.js";import"./Heading-AwuUEGOn.js";import"./RSPContexts--7QpwlJX.js";import"./InlineCode-JczHc7s5.js";import"./Link-DALrfrfA.js";import"./usePress-DlcvFeQS.js";import"./Separator-BIFvjswc.js";import"./Separator-C7FW_ZyO.js";import"./CollectionBuilder-D0V9DfFD.js";import"./Text-kkda9Q25.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./TextArea-_5d5hLK8.js";import"./TextFieldBase-gihnozah.js";import"./FieldDescription-urh4LMIG.js";import"./useFieldComponent-DnU67IFr.js";import"./TextField-BdABkByo.js";import"./FieldError-jtZpQJaz.js";import"./Form-DgYJKMgS.js";import"./Group-DCFzKDnc.js";import"./Input-yJFna98K.js";import"./useTextField-BPhFFoYw.js";import"./useFormReset-CaS7VrAz.js";import"./useFormValidation-4onogkfY.js";import"./useControlledHostValueProps-CUu1Ad4Y.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnSM8-vw.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Dialog-CFBRHxwp.js";import"./Collection-DA19Hn3z.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as f}from"./iframe-BWhqP90_.js";import{M as o}from"./MarkdownEditor-CxMZTxnj.js";import{L as R}from"./Label-CkXiiFVS.js";import{F as b}from"./FieldError-C6zkn6e8.js";import{B as z}from"./Button-BciJVpgP.js";import{S as x}from"./Section-CFf8UBa1.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BwRLxw2C.js";import"./CodeBlock-CvfDS50h.js";import"./clsx-B-dksMZM.js";import"./CopyButton-_1InjRXQ.js";import"./IconWarning-HbBBXO9Y.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./remote-veunNUGL.js";import"./Tooltip-RqQYZCpD.js";import"./utils-DDxNv25V.js";import"./OverlayArrow-O77-h4vA.js";import"./useFocus-DGysuqof.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./context-D1O-Xc3I.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-hpfIa3L8.js";import"./useFocusable-BfSSliyg.js";import"./useFocusRing-BFEab5f2.js";import"./react-children-utilities-T5LKZjpv.js";import"./Action-CBNAKVRZ.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./browser-XxEUm-0T.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./dynamic-B9fZ3_-n.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./Heading-B5yfVGXK.js";import"./Heading-qBHW75oC.js";import"./RSPContexts-BQJ2nk5o.js";import"./InlineCode-CVYOJ3_P.js";import"./Link-BBfbm5pk.js";import"./usePress-CgTDaVBx.js";import"./Separator-0ZQYI4A_.js";import"./Separator-CHyDNsxt.js";import"./CollectionBuilder-Bu1khTRs.js";import"./Text-ClKyFsNf.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./Text-CjPzL55g.js";import"./TextArea-BAfMR5kr.js";import"./TextFieldBase-tkcOOBNQ.js";import"./FieldDescription-5m9L7yV9.js";import"./useFieldComponent-YclMbw8e.js";import"./TextField-CFWGG0Az.js";import"./FieldError-DkQ7rf97.js";import"./Form-i2Ec1WLh.js";import"./Group-BLDjWmxh.js";import"./Input-BjME0GkR.js";import"./useTextField-DMWCFIIv.js";import"./useFormReset-DqbCot7l.js";import"./useFormValidation-Dk5h1IP2.js";import"./useControlledHostValueProps-C21EOCgM.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Bb9-XBbW.js";import"./AlertIcon-DpUh0dNd.js";import"./LoadingSpinner-CBZxi8OD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cDeaYk1j.js";import"./ContextMenuSection-DVcDBRAK.js";import"./Dialog-CL817TCu.js";import"./Collection-CczwQGta.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./VisuallyHidden-DRs-AG4l.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

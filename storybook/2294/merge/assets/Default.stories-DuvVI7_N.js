import{j as r,r as f}from"./iframe-Da9Lw8R_.js";import{M as o}from"./MarkdownEditor-Bg2uLtFO.js";import{L as R}from"./Label-D7d2SkgN.js";import{F as b}from"./FieldError-DXoqYbez.js";import{B as z}from"./Button-CkcTXATp.js";import{S as x}from"./Section-CjTpAbFV.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Bs4nvYeh.js";import"./CodeBlock-DrDdwsKU.js";import"./clsx-B-dksMZM.js";import"./CopyButton-wxyUccFa.js";import"./IconWarning-BYkwpstY.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./remote-CsFbcl9r.js";import"./Tooltip-F1bzw6B1.js";import"./utils-Cwd4tFKX.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useFocus-BBVXnzgP.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./context-CsdpTyhd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BItT14i_.js";import"./useControlledState-B4YxKAgg.js";import"./useFocusable-CwPW854N.js";import"./react-children-utilities-Cyk0dKBC.js";import"./Action-CSMihAu4.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./browser-DDWH8I0V.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./dynamic-bM8H28Zu.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./Heading-p9-3Hmaq.js";import"./Heading-CheJhR1R.js";import"./RSPContexts-CqxOCNft.js";import"./InlineCode-BCdrHsJH.js";import"./Link-E8fc7JGi.js";import"./usePress-BIogNAwh.js";import"./Separator-CR9VqeU0.js";import"./Separator-VHKWzJTM.js";import"./CollectionBuilder-uz1z8vZv.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./TextArea-D-Lx-brX.js";import"./TextFieldBase-D33aqkc_.js";import"./FieldDescription-C0EOWzJH.js";import"./useFieldComponent-yufHgNqa.js";import"./TextField-BMLAakzF.js";import"./FieldError-DSdSdK3H.js";import"./Form-D3ZAWear.js";import"./Group-CWa8s-M0.js";import"./Input-inZV5DIC.js";import"./useTextField-oegUv-Jp.js";import"./useFormReset-4DR8Px1h.js";import"./useFormValidation-DjSyrx87.js";import"./useControlledHostValueProps-rJ1Rukac.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ContextMenuSection-CnBpObAx.js";import"./Dialog-Cw1z9AtQ.js";import"./Collection-Gkv_ybXQ.js";import"./SelectionIndicator-DjHwUAme.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

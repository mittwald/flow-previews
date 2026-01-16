import{j as r,r as f}from"./iframe-W1iyoXhf.js";import{M as o}from"./MarkdownEditor-DyB8n6Fp.js";import{L as R}from"./Label-h36KWMeP.js";import{F as b}from"./FieldError-V9E4UopR.js";import{B as z}from"./Button-IzhK2U-6.js";import{S as x}from"./Section-CeOL9WXO.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Brh-PSxg.js";import"./CodeBlock-XC3BmVUy.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C_uhTBGu.js";import"./IconWarning-Cnnsa5dA.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./remote-CbMcOagV.js";import"./Tooltip-D7_Eoy2a.js";import"./utils-Co92dFN-.js";import"./OverlayArrow-DhCjeFi1.js";import"./useFocus-BF1azJZZ.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./context-Dx3ASvxi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BeXX8b-c.js";import"./useFocusable-CYBapKrT.js";import"./useFocusRing-D7D1hXRw.js";import"./react-children-utilities-BJvc4Xcu.js";import"./Action-BaKsvCHV.js";import"./context-Cx4Tf49f.js";import"./useStatic-DFE9WV1t.js";import"./browser-D1HYvIQy.js";import"./getActionGroupSlot-nARO-zR5.js";import"./dynamic-X2nPVSXv.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./Heading-CkZ0B9ED.js";import"./Heading-DW_b7ElP.js";import"./RSPContexts-CkYyS58h.js";import"./InlineCode-ClotEaxE.js";import"./Link-BoIZb-Mx.js";import"./usePress-DwtcUURT.js";import"./Separator-DYMsLvsU.js";import"./Separator-BxaFcvwN.js";import"./CollectionBuilder-BFDcIzLe.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./TextArea-CvnFQz9O.js";import"./TextFieldBase-B8GJogI6.js";import"./FieldDescription-sYQgLYFM.js";import"./useFieldComponent-CeQ6dqWY.js";import"./TextField-Cp6pNbDA.js";import"./FieldError-CaERYIVC.js";import"./Form-BBVMks-l.js";import"./Group-BXkBt_dH.js";import"./Input-lNMUeypu.js";import"./useTextField-afbLRwDD.js";import"./useFormReset-DYb2_5Lx.js";import"./useFormValidation-aWhqwd0R.js";import"./useControlledHostValueProps-CGhWZ5l6.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSUkPhZw.js";import"./ContextMenuSection-DWjrG_wk.js";import"./Dialog-Dwmqa2yo.js";import"./Collection-H-B8rljE.js";import"./SelectionIndicator--NYjhiR7.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

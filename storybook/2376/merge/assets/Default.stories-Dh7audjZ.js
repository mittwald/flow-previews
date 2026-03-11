import{j as r,r as f}from"./iframe-DlWpeVbs.js";import{M as o}from"./MarkdownEditor-CNvAer0m.js";import{L as R}from"./Label-BFCtbPkR.js";import{F as b}from"./FieldError-wdxD7fJg.js";import{B as z}from"./Button-OB72uiKS.js";import{S as x}from"./Section-BrxRU1hJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Cuw849k5.js";import"./CodeBlock-CTmZixSH.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ch2Puf6p.js";import"./IconWarning-CwuMGyll.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./index-Ci0KQ92C.js";import"./remote-Hfn3BG4Y.js";import"./Tooltip-BqOuoq4m.js";import"./utils-BWqiCJWQ.js";import"./OverlayArrow-Bovj8f2H.js";import"./useFocus-DZ2sW_Jx.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./context-w6Z3dllt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BVQNDpKt.js";import"./useControlledState--75VKtTq.js";import"./useFocusable-BrXdRr5r.js";import"./react-children-utilities-CYU5MU0Q.js";import"./ActionBatch-C-ID7iPf.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./browser-CHTiPLC9.js";import"./getActionGroupSlot-bYWxcQao.js";import"./dynamic-D3tAnWym.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./RSPContexts-8MG42HPe.js";import"./InlineCode-D5QDdonb.js";import"./Link-CdN37rAD.js";import"./usePress-CW_WdW_p.js";import"./Separator-DB_iSq0u.js";import"./Separator-i6U77Zoe.js";import"./CollectionBuilder-CvIMXDSz.js";import"./Text-BjwiRmws.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./TextArea-EK8YfFv0.js";import"./useFieldComponent-CpDSJ5w8.js";import"./useControlledHostValueProps-BCwihX90.js";import"./FieldDescription-BCbzcEW9.js";import"./TextField-BweyANNZ.js";import"./FieldError-CO2oyPLw.js";import"./Form-IYTHWqtc.js";import"./Group-BNVpNkm_.js";import"./Input-DN6TuXy8.js";import"./useTextField-Cmu1p6Yf.js";import"./useFormReset-CZgOMFUA.js";import"./useFormValidation-7MNrcMSj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";import"./LoadingSpinner-C6D9eT_m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BH6lR-Fb.js";import"./ContextMenuSection-BiNqDgyA.js";import"./Dialog-DM93NPwE.js";import"./Collection-BmIET0gF.js";import"./SelectionIndicator-Cov2iNqV.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

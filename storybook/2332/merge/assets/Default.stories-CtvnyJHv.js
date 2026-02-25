import{j as r,r as f}from"./iframe-DewKgIpk.js";import{M as o}from"./MarkdownEditor-RUjod5s9.js";import{L as R}from"./Label-DtIMFOsj.js";import{F as b}from"./FieldError-B3PY7-i2.js";import{B as z}from"./Button-DK1DwTQu.js";import{S as x}from"./Section-Cq4fcZ5v.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CSv8Igd3.js";import"./CodeBlock-EsASxQGm.js";import"./clsx-B-dksMZM.js";import"./CopyButton-COfRT57X.js";import"./IconWarning-CrJxptLM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./remote-B1GLKgHd.js";import"./Tooltip-CLZzy25R.js";import"./utils-CUPQPHYu.js";import"./OverlayArrow-C0FkFBtp.js";import"./useFocus-ChnOBFmm.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./context-DymIffM8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DiJDuYpp.js";import"./useControlledState-AVItU9lZ.js";import"./useFocusable-DVz_n5zl.js";import"./react-children-utilities-Bz_bJJDN.js";import"./ActionBatch-aysWcgWo.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./browser-D8jMTJt0.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./dynamic-7D0Ds_bm.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./RSPContexts-CJFisqoy.js";import"./InlineCode-mBcZBqOa.js";import"./Link-_1TKWVxp.js";import"./usePress-S1YnS57K.js";import"./Separator-BS6XCoeu.js";import"./Separator-CzQZZCJK.js";import"./CollectionBuilder-B1x7jEag.js";import"./Text-CAhyjFWz.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./TextArea-CaR9tGko.js";import"./useFieldComponent-D7thqSXy.js";import"./useControlledHostValueProps-mMjKsrzf.js";import"./FieldDescription-skgZIegf.js";import"./TextField-DogNmrGL.js";import"./FieldError-BKx1r64I.js";import"./Form-CIigNYkb.js";import"./Group-BwRkGpTi.js";import"./Input-BM_jCh0C.js";import"./useTextField-CayEBnIr.js";import"./useFormReset-w2Qnh74g.js";import"./useFormValidation-CdyRJz3a.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";import"./LoadingSpinner-CskkGazD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DrtrHFmq.js";import"./ContextMenuSection-v31gfoed.js";import"./Dialog-BgAnH5cc.js";import"./Collection-BqPIpj-l.js";import"./SelectionIndicator-BpbXr_mp.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

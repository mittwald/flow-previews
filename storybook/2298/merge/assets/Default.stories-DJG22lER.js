import{j as r,r as f}from"./iframe-C-RKPwSE.js";import{M as o}from"./MarkdownEditor-CRvcvqOa.js";import{L as R}from"./Label-BZ9U-QOK.js";import{F as b}from"./FieldError-Bk-w_c0r.js";import{B as z}from"./Button-C4QFurWq.js";import{S as x}from"./Section-DGgswCDI.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DrNL2Axh.js";import"./CodeBlock-pp97k0ah.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DveM6Ot4.js";import"./IconWarning-B9kpDIcu.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./remote-Dp4k7gKv.js";import"./Tooltip-YcJ1TK9J.js";import"./utils-BNo7v4Co.js";import"./OverlayArrow-zXeQXnR5.js";import"./useFocus-EK5CVku_.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./context-CG0zmStT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CPvrkvyz.js";import"./useControlledState-PGxEdwVp.js";import"./useFocusable-BqhdVXbn.js";import"./react-children-utilities-BDv0ipg5.js";import"./Action-fo4y3mrQ.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./browser-BU-qC_3h.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./dynamic-D4AljtfH.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./Heading-BLLuHX2c.js";import"./Heading-CcYcuTte.js";import"./RSPContexts-7oABi43d.js";import"./InlineCode-DC6ter2k.js";import"./Link-BqHbwmyH.js";import"./usePress-D8JiKPWZ.js";import"./Separator-ZrDRTf6l.js";import"./Separator-HdZXbs1f.js";import"./CollectionBuilder-DCVYcT7j.js";import"./Text-DceSOphz.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./TextArea-3WwMc-G3.js";import"./useFieldComponent-ILpXs27H.js";import"./useControlledHostValueProps-RjkcIy7Z.js";import"./FieldDescription-B46dqL75.js";import"./TextField-BHx_WZD2.js";import"./FieldError-BbtVOi4H.js";import"./Form-BmIWUPX1.js";import"./Group-Dxij56r3.js";import"./Input-Dl0Z7qPf.js";import"./useTextField-BfBDvC7_.js";import"./useFormReset-Bo6mTD_0.js";import"./useFormValidation-BVV7LE3u.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BUrsQ2n2.js";import"./ContextMenuSection-D3zQaczq.js";import"./Dialog-5IYWsYFe.js";import"./Collection-CZ-kw58d.js";import"./SelectionIndicator-CCq6JAG-.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

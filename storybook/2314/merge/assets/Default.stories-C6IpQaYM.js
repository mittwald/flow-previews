import{j as r,r as f}from"./iframe-BnHQGzj-.js";import{M as o}from"./MarkdownEditor-ecRRpidy.js";import{L as R}from"./Label-u3CIBBS-.js";import{F as b}from"./FieldError-hA7hA6sK.js";import{B as z}from"./Button-kOzdzwoL.js";import{S as x}from"./Section-SvACH-rM.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BH7yDTRr.js";import"./CodeBlock-DwXOWJ0W.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cd8gn-N1.js";import"./IconWarning-BD5ZgLZv.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./index-CR3_Geu_.js";import"./remote-DzOTiMGq.js";import"./Tooltip-Vhknl-rO.js";import"./utils-B_drgFmA.js";import"./OverlayArrow-CU__1Pr_.js";import"./useFocus-BQLqug8q.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BtYlF30D.js";import"./useControlledState-ARGAgX5I.js";import"./useFocusable-CpiznpYH.js";import"./react-children-utilities-MIgKXyfS.js";import"./Action-D5FY68jf.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./browser-Byd_T3zS.js";import"./getActionGroupSlot-DFydpqIy.js";import"./dynamic-Dg_y_eXk.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./Heading-2AT3piVo.js";import"./Heading-BZTJ56jD.js";import"./RSPContexts-DJrv2Up2.js";import"./InlineCode-nqRCPSkG.js";import"./Link-R31cpBcP.js";import"./usePress-DW43gzrd.js";import"./Separator-BzEFFfve.js";import"./Separator-DEQQD5jL.js";import"./CollectionBuilder-Dmus25Kx.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Text-CP9lFNhL.js";import"./TextArea-COgs_Kkg.js";import"./useFieldComponent-BKOZgMTQ.js";import"./useControlledHostValueProps-C85uCNsj.js";import"./FieldDescription-yrYvUz27.js";import"./TextField-CmEfXiDD.js";import"./FieldError-CfhVGgFS.js";import"./Form-B5QWBDfx.js";import"./Group-ZIuNhF8O.js";import"./Input-DmDHg40n.js";import"./useTextField-D3uZgsWg.js";import"./useFormReset-C2cP98Fi.js";import"./useFormValidation-CJa5Pm36.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";import"./LoadingSpinner-DoB6VVvS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7nIxjvHJ.js";import"./ContextMenuSection-BQD1q2_K.js";import"./Dialog-vlYkkLZ8.js";import"./Collection-D7DmweA7.js";import"./SelectionIndicator-Bje3agQK.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

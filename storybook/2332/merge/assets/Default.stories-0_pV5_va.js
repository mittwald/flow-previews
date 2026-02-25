import{j as r,r as f}from"./iframe-n3VOiEf5.js";import{M as o}from"./MarkdownEditor-CKkJavEc.js";import{L as R}from"./Label-B5oQkcZ-.js";import{F as b}from"./FieldError-DRCS1Gz9.js";import{B as z}from"./Button-gwePC8r8.js";import{S as x}from"./Section-BlfcbXvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-UMs-QEFb.js";import"./CodeBlock-tTtd5VNV.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CIBQTzIF.js";import"./IconWarning-BKHoIgIa.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./remote-CWx46e_E.js";import"./Tooltip-fP0HPuEf.js";import"./utils-BTX3Dk-t.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useFocus-Di5Kz97s.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./context-DhQskmxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-50iWl84k.js";import"./useControlledState-17a16_5D.js";import"./useFocusable-ZTBPsPh1.js";import"./react-children-utilities-SA2ZqTX3.js";import"./ActionBatch-B7NWJImq.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./browser-DXFXi5M2.js";import"./getActionGroupSlot-CP2KeStW.js";import"./dynamic-DgHDUJEW.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./RSPContexts-DzW0xATd.js";import"./InlineCode-Bt1QwS9g.js";import"./Link-GSlAfwA0.js";import"./usePress-CVHN3NRW.js";import"./Separator-DTQ20Nqc.js";import"./Separator-XftYj5HO.js";import"./CollectionBuilder-pL0vDcKt.js";import"./Text-CwVjZxCT.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./TextArea-D6rLBh-X.js";import"./useFieldComponent-6hUMLoYk.js";import"./useControlledHostValueProps-DYpQw2Tg.js";import"./FieldDescription-CP4R52YC.js";import"./TextField-D-W_Q7sn.js";import"./FieldError-IZ2wmqkG.js";import"./Form-BfOiuDw8.js";import"./Group-DIIOLL_5.js";import"./Input-IuhSVj8_.js";import"./useTextField-CM82iaRH.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";import"./LoadingSpinner-BZywMYAM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dt8pRNpU.js";import"./ContextMenuSection-MotZbouy.js";import"./Dialog-Be8vTliz.js";import"./Collection-2dWh1OBC.js";import"./SelectionIndicator-QXVr0AO7.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

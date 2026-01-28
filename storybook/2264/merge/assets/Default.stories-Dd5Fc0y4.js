import{j as r,r as f}from"./iframe-HHIIuBER.js";import{M as o}from"./MarkdownEditor-Dg9F5aK_.js";import{L as R}from"./Label-CBXKH6Tn.js";import{F as b}from"./FieldError-Fy3l3DO0.js";import{B as z}from"./Button-D9uXd6kS.js";import{S as x}from"./Section-DSfs8S5C.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DEt6Z1vP.js";import"./CodeBlock-Cj2y7k0w.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Du7k5Wjy.js";import"./IconWarning-CPuUEZGY.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./remote-MyOm1NIW.js";import"./Tooltip-DLe4peB_.js";import"./utils-Cg0Q0SJj.js";import"./OverlayArrow-BDTM6fDd.js";import"./useFocus--KWf2FGc.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./context-BwOS-W-N.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-4HIuR3kq.js";import"./useControlledState-DbjjrDzt.js";import"./useFocusable-CK9MQKQ0.js";import"./react-children-utilities-DhdvkLz4.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./useStatic-CHenPBZg.js";import"./browser-BiwdkBmz.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./dynamic-UvYry7O0.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./Heading-Dy213gst.js";import"./Heading-BMnEpmdL.js";import"./RSPContexts-DTcyqJ2O.js";import"./InlineCode-UeurSlLT.js";import"./Link-CB4tGySl.js";import"./usePress-DR7SsbUT.js";import"./Separator-DzCXAwoU.js";import"./Separator-C2NuKe-C.js";import"./CollectionBuilder-O9kuHpIB.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./TextArea-CNj3p2BV.js";import"./TextFieldBase-D0CcRvqq.js";import"./FieldDescription-CXq0EMj9.js";import"./useFieldComponent-DUw61_cc.js";import"./TextField-CEqZFMZ3.js";import"./FieldError-DxbTuNm9.js";import"./Form-bxdneiGL.js";import"./Group-CQTHjQwH.js";import"./Input-BPv4G1er.js";import"./useTextField-DsRplzos.js";import"./useFormReset-9uO05BU2.js";import"./useFormValidation-CzNeWdfJ.js";import"./useControlledHostValueProps-CdoEpCQx.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ContextMenuSection-CTAuboSL.js";import"./Dialog-17xgL67A.js";import"./Collection-CvBP3D3N.js";import"./SelectionIndicator-D4-zI_jf.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as f}from"./iframe-DA37PzgD.js";import{M as o}from"./MarkdownEditor-DQZAUom7.js";import{L as R}from"./Label-DPj6ip94.js";import{F as b}from"./FieldError-CnCGw98P.js";import{B as z}from"./Button-C_3hQ6qU.js";import{S as x}from"./Section-CLHfQYLM.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Cz5lJwkC.js";import"./CodeBlock-DWcbGkEh.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BgmV9S0f.js";import"./IconWarning-DMc9nDIB.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./remote-BJWo5b31.js";import"./Tooltip-WQCQ-XqN.js";import"./utils-DtYp6psM.js";import"./OverlayArrow-BTxrL9C1.js";import"./useFocus-Ck97lmu1.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./context-KzPqYKh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-izS5uoD6.js";import"./useFocusable-_BBBrAx0.js";import"./useFocusRing-GdKi_2te.js";import"./react-children-utilities-BIyLA61P.js";import"./Action-hYBLKXUj.js";import"./context-Cc9V1wfK.js";import"./useStatic-ChmTLNpH.js";import"./browser-Tq-Ovndo.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./dynamic-Cec-XZha.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./Heading-IQrV0yVS.js";import"./Heading-C-vMGDS8.js";import"./RSPContexts-DnMMFVEJ.js";import"./InlineCode-D-SMLvOl.js";import"./Link-yESZXTxq.js";import"./usePress--pFlH7xw.js";import"./Separator-3sz_tCnn.js";import"./Separator-uGGsp39Q.js";import"./CollectionBuilder-DSPHiwuI.js";import"./Text-CKy5VQ2_.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./TextArea-Dlv0cR-g.js";import"./TextFieldBase-D_vGziBK.js";import"./FieldDescription-z_r4u74B.js";import"./useFieldComponent-DTrWN6Rf.js";import"./TextField-C4o0vjpo.js";import"./FieldError-jhFQ-VHV.js";import"./Form-DXCSZa8G.js";import"./Group-x45aU-Mx.js";import"./Input-BujLciHZ.js";import"./useTextField-CRU8yiuX.js";import"./useFormReset-ChjOdAw3.js";import"./useFormValidation-2Nc27zh7.js";import"./useControlledHostValueProps-BlueJkLA.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzF7Ww8-.js";import"./ContextMenuSection-DYM7NU_i.js";import"./Dialog-hpWxHudW.js";import"./Collection-Br_xwhc2.js";import"./SelectionIndicator-D-mCry-j.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./VisuallyHidden-C_Tup-b1.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

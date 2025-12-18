import{j as r,r as f}from"./iframe-CywxDTj6.js";import{M as o}from"./MarkdownEditor-CUedjgVT.js";import{L as R}from"./Label-D6CHoy0y.js";import{F as b}from"./FieldError-zwomljJ3.js";import{B as z}from"./Button-Dt6rqZC2.js";import{S as x}from"./Section-DFnKKkTa.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DnjmSyF7.js";import"./CodeBlock-D_7VSaub.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DbjRbv8T.js";import"./IconWarning-BQFONsdl.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./index-CFicy-UB.js";import"./remote-DxJecAWu.js";import"./Tooltip-D8rvDqaK.js";import"./utils-JmAwA3ix.js";import"./OverlayArrow-kC1F2-h6.js";import"./useFocus-DDJfJTZx.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./context-Wz-N3Tdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CrIAtAXB.js";import"./useFocusable-D7CLIfGa.js";import"./useFocusRing-D1WKjA4v.js";import"./react-children-utilities-CT-M5ONO.js";import"./Action-DyuzWneU.js";import"./context-DM4I0BsB.js";import"./useStatic-B4t8cENg.js";import"./browser-CaezisB_.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./dynamic-D64zpBY8.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./Heading-DXOJNO6C.js";import"./Heading-C30wQAmC.js";import"./RSPContexts-DB0ICqF0.js";import"./InlineCode-CgYmHGbh.js";import"./Link-CgBMMf-o.js";import"./usePress-CStV9ujD.js";import"./Separator-hUqXww3X.js";import"./Separator-DF0yS6SS.js";import"./CollectionBuilder-CNb94HNq.js";import"./Text-vlJOJK2L.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./TextArea-BcSgUgJJ.js";import"./TextFieldBase-CYB6R0fG.js";import"./FieldDescription-Ce5UPLEI.js";import"./useFieldComponent-DA2iK2GC.js";import"./TextField-BP70AlI8.js";import"./FieldError-fWQdbmrt.js";import"./Form-B03hL8Gq.js";import"./Group-Dmh4PTRU.js";import"./Input-CoVkAmRj.js";import"./useTextField-D7eiRyT5.js";import"./useFormReset-CCwx8s_G.js";import"./useFormValidation-CXUK0Gt0.js";import"./useControlledHostValueProps-CdUTecqJ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Byj--1Pk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DzvzizsP.js";import"./ContextMenuSection-DDk2X5KZ.js";import"./Dialog-RfbYVzK-.js";import"./Collection-DZTo--rr.js";import"./SelectionIndicator-B2WWcQye.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./VisuallyHidden-CBo5v6jz.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};

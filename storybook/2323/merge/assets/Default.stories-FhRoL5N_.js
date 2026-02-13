import{j as r,r as f}from"./iframe-Bq_dTdDz.js";import{M as o}from"./MarkdownEditor-OkCZh2va.js";import{L as R}from"./Label-DlbZYBs5.js";import{F as b}from"./FieldError-ClLnELEE.js";import{B as z}from"./Button-DwhPeKe2.js";import{S as x}from"./Section-DNG5i0i9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DIfkhok0.js";import"./CodeBlock-4Ce33l1C.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CnDLZWR4.js";import"./IconWarning-AvRveFf8.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./remote-BGgAcFUF.js";import"./Tooltip-fPwJV1ep.js";import"./utils-Dc83Zc3S.js";import"./OverlayArrow-D8uV1uDe.js";import"./useFocus-zY2zj5L9.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C2_YEmjA.js";import"./useControlledState-DvV_L9jP.js";import"./useFocusable-B7WP4__g.js";import"./react-children-utilities-BRhLEvhb.js";import"./ActionBatch-DTgx0kqH.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./browser-D_Oin-6N.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./dynamic-BU-d9n8a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./RSPContexts-BEGF6Rgy.js";import"./InlineCode-BPC53hCi.js";import"./Link-CjzAVfHh.js";import"./usePress-CxmEVb--.js";import"./Separator-C1h31YeY.js";import"./Separator-oRLs3WBO.js";import"./CollectionBuilder-DXHEkZnM.js";import"./Text-3w39UNLL.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Text-RESw6iu2.js";import"./TextArea-Pn9Wxluw.js";import"./useFieldComponent-C92nVZms.js";import"./useControlledHostValueProps-Byhklanl.js";import"./FieldDescription-ByrQyhzl.js";import"./TextField-Bbc_VGXT.js";import"./FieldError-CB3_Y2qo.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";import"./LoadingSpinner-QnwB8HJT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B82FCYrG.js";import"./ContextMenuSection-CF0FAI_C.js";import"./Dialog-atW1yRI0.js";import"./Collection-CfTInUqx.js";import"./SelectionIndicator-B0He5XEj.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./VisuallyHidden-6gUpRQYP.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

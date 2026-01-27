import{j as r,r as f}from"./iframe-BbrP11p-.js";import{M as o}from"./MarkdownEditor-m7AvWxcR.js";import{L as R}from"./Label-DwqHoWx5.js";import{F as b}from"./FieldError-i_FUROXt.js";import{B as z}from"./Button-D_6ZCoU5.js";import{S as x}from"./Section-OZiyRnMf.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CDProx0i.js";import"./CodeBlock-CLCnOKHO.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0qY4aMI.js";import"./IconWarning-BeRGE0lU.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./remote-BUE50-N_.js";import"./Tooltip-B1VuETNE.js";import"./utils-CfXF9mMB.js";import"./OverlayArrow-C2TLtRQj.js";import"./useFocus-DdYA68cd.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./context-Cg0av1qu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D-e5pHmS.js";import"./useControlledState-CrzzGVbO.js";import"./useFocusable-ssdBLHPa.js";import"./react-children-utilities-BE4AmibS.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./browser-CKsvW9Gw.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./dynamic-CazQQjW9.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./Heading-DRj7axTi.js";import"./Heading-qDkwaMZ2.js";import"./RSPContexts-D7TvdvVL.js";import"./InlineCode-DUs0V4tb.js";import"./Link-BoxK4WzO.js";import"./usePress-VHqnVNy0.js";import"./Separator-D_j_4uD2.js";import"./Separator-BdjTrZkK.js";import"./CollectionBuilder-BqHvMLco.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./TextArea-CmBeAg2c.js";import"./TextFieldBase-DshWB0Iu.js";import"./FieldDescription-BZIDgIPl.js";import"./useFieldComponent-CnZp8uAU.js";import"./TextField-DD3L2ijb.js";import"./FieldError-C0mMT85u.js";import"./Form-Da-PMQ7G.js";import"./Group-CeCxvCTb.js";import"./Input-CrFs98bJ.js";import"./useTextField-Bxx5stu4.js";import"./useFormReset-VtyCL_TW.js";import"./useFormValidation-dfDtwXtG.js";import"./useControlledHostValueProps-BXJu_wEe.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQobJtX3.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Dialog-BH0tiGTi.js";import"./Collection-C9vt1D1N.js";import"./SelectionIndicator-DLJIVGG7.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

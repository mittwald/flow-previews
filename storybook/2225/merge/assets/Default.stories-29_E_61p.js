import{j as r,r as f}from"./iframe-DyIQYB7R.js";import{M as o}from"./MarkdownEditor-7LgSsZSV.js";import{L as R}from"./Label-Bnl2XRS7.js";import{F as b}from"./FieldError-Drb2NmJE.js";import{B as z}from"./Button-C3sAJBlh.js";import{S as x}from"./Section-yajK3SK5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-iFn4e8p7.js";import"./CodeBlock-DHwfJ6Kk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-qPlAH-7W.js";import"./IconWarning-BlqJF_wS.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./remote-CduUCN7o.js";import"./Tooltip-Dr3MBn-b.js";import"./utils-Br5k-T_U.js";import"./OverlayArrow-B8joZ1vL.js";import"./useFocus-MkZ0Yize.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./context-DQwa7-Zw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C9rhpCZz.js";import"./useFocusable-BzRC0Akk.js";import"./useFocusRing-Dsvy8-H7.js";import"./react-children-utilities-BXSTsKtD.js";import"./Action-2iALePMB.js";import"./context--viOmW11.js";import"./useStatic-CPovvC2L.js";import"./browser-Dsy2EDmz.js";import"./getActionGroupSlot-D_7amHYE.js";import"./dynamic-tPr8Th1P.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./Heading-C6tbK1yl.js";import"./Heading-BomgGhUe.js";import"./RSPContexts-D0G5Z96Z.js";import"./InlineCode-CTpeJjs-.js";import"./Link-BHjryOZC.js";import"./usePress-DBMxrrfH.js";import"./Separator-a9BalD0v.js";import"./Separator-BxbCemNh.js";import"./CollectionBuilder-DV1KSVZF.js";import"./Text-DP5VQe4y.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./TextArea-BA2hA1Qs.js";import"./TextFieldBase-D5dfepvt.js";import"./FieldDescription-B_xnTVZs.js";import"./useFieldComponent-BuMHMJdd.js";import"./TextField-C2Dg2sq1.js";import"./FieldError-CJCkmHNP.js";import"./Form-Ce0HMGMO.js";import"./Group-DlHcB2Sx.js";import"./Input-DTEp0DEd.js";import"./useTextField-CiDJOppJ.js";import"./useFormReset-DbNMnmkG.js";import"./useFormValidation-BzfV6dUL.js";import"./useControlledHostValueProps-CeGl1VUq.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BuUG1_MS.js";import"./ContextMenuSection-CGwj4hwH.js";import"./Dialog-Bezv0IMM.js";import"./Collection-BGTuQL6n.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

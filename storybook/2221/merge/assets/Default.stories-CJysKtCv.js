import{j as r,r as f}from"./iframe-Bt_Ape3b.js";import{M as o}from"./MarkdownEditor-kLr5F2XD.js";import{L as R}from"./Label-LBQHmcU0.js";import{F as b}from"./FieldError-DvZju2Cm.js";import{B as z}from"./Button-Bm5EggmV.js";import{S as x}from"./Section-fmZi8k9e.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D5x1Evqg.js";import"./CodeBlock-CwzQ99eU.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CG_VZ4y8.js";import"./IconWarning-BQjeLTWb.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./index-gN6AAF3-.js";import"./remote-C9NcRL_b.js";import"./Tooltip-90xC8mRq.js";import"./utils-DGGum7sG.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useFocus-C-togmBu.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./context-BGqy3a6E.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bw01eRXu.js";import"./useFocusable-BX_sV3cU.js";import"./useFocusRing-Ba6s95SH.js";import"./react-children-utilities-D9rd2J34.js";import"./Action-B2h50d-b.js";import"./context-CGPA3PGo.js";import"./useStatic-DpZVpe0y.js";import"./browser-BI8hAkYP.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./dynamic-D3ysZU61.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./Heading-C3-uF7Fn.js";import"./Heading-CF5bGxey.js";import"./RSPContexts-CtPg4mPr.js";import"./InlineCode-BhWONWg7.js";import"./Link-BnH-6vvM.js";import"./usePress-DErVZDbk.js";import"./Separator-CRDeFh9I.js";import"./Separator-fa_nI6Bk.js";import"./CollectionBuilder-D9hZnXF0.js";import"./Text-Bs2hbxJA.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./TextArea-Bp0tCNpF.js";import"./TextFieldBase-BLvJh4XV.js";import"./FieldDescription-BVGH4033.js";import"./useFieldComponent-QpDNRghi.js";import"./TextField-BJdO3hjf.js";import"./FieldError-Cd4omKy3.js";import"./Form-E_SZdIUl.js";import"./Group-MbSsCM3Y.js";import"./Input-DtIcDeFz.js";import"./useTextField-DKaBY6Vl.js";import"./useFormReset-BU_Yh1RY.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useControlledHostValueProps-D-YKizXP.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CXrerpwy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pXrc8KX9.js";import"./ContextMenuSection-22Ea6AVl.js";import"./Dialog-3KThjjZh.js";import"./Collection-CZkVMDHw.js";import"./SelectionIndicator-7G59x11l.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

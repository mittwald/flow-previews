import{j as r,r as f}from"./iframe-CBdrHiu-.js";import{M as o}from"./MarkdownEditor-CvVd-ejP.js";import{L as R}from"./Label-BnDRrnHY.js";import{F as b}from"./FieldError-OVkxnP3X.js";import{B as z}from"./Button-CvrzgGgN.js";import{S as x}from"./Section-DO3UFtDL.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D72eLeSi.js";import"./CodeBlock-bZfVrYOr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-TqUBSYPn.js";import"./IconWarning-B89fpQti.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./remote-SRpD7Y2I.js";import"./Tooltip-DKvl7rsT.js";import"./utils-DRjcKwJb.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useFocus-BOx7sVQU.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./context-p6nKBAyO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CFSl2bW1.js";import"./useControlledState-H50OY390.js";import"./useFocusable-DA2EU5Pw.js";import"./react-children-utilities-CmbNXjxf.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./browser-DtunHlVO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./dynamic-Cbo9i_64.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./Heading-B0bk6t16.js";import"./Heading-BzPKH39A.js";import"./RSPContexts-B6JknHHE.js";import"./InlineCode-C15orgOd.js";import"./Link-Dv8vhFUP.js";import"./usePress-BNG00Dag.js";import"./Separator-CoMj_IsK.js";import"./Separator-CTAmEu9t.js";import"./CollectionBuilder-CquvtT24.js";import"./Text-vxOKNzxr.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./TextArea-Cwezq-58.js";import"./TextFieldBase-BFG_qU8a.js";import"./FieldDescription-D24R2cXv.js";import"./useFieldComponent-CkNNSE-6.js";import"./TextField-D9lyQzqC.js";import"./FieldError-hDU9I6ir.js";import"./Form-Dpu47_EF.js";import"./Group-DDiSLZpo.js";import"./Input-3Q4wlXjr.js";import"./useTextField-CEh0Boal.js";import"./useFormReset-DzYWM4EU.js";import"./useFormValidation-BxN5Q1uu.js";import"./useControlledHostValueProps-Ea8I-r_D.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGOdyj-q.js";import"./ContextMenuSection-DKWGDRRC.js";import"./Dialog-C9BJ8Byi.js";import"./Collection-vGtYQGRh.js";import"./SelectionIndicator-CeaIsc91.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./VisuallyHidden-DNW2U5ZQ.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

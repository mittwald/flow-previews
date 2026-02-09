import{j as r,r as f}from"./iframe-DQCyQvTg.js";import{M as o}from"./MarkdownEditor-BXNPqINg.js";import{L as R}from"./Label-Bpn5fam4.js";import{F as b}from"./FieldError-Db3KB_ND.js";import{B as z}from"./Button-BuvZu5FH.js";import{S as x}from"./Section-1ggmv6HF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CJY7-HEy.js";import"./CodeBlock-OJmqc7N3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-5g2e6-6_.js";import"./IconWarning-BsBEN2i7.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./remote-DwYKdEj8.js";import"./Tooltip-giG-A0OH.js";import"./utils-B-47qEzM.js";import"./OverlayArrow-BRUQmdEx.js";import"./useFocus-MHK9Bgmz.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./context-BVR1xsiE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-H28TAT4s.js";import"./useControlledState-CSGe32xq.js";import"./useFocusable-Bi17AcBv.js";import"./react-children-utilities-5YX2fAUP.js";import"./Action-BFqm9nZf.js";import"./context-CMTFLv9Z.js";import"./useStatic-XhnoWRRg.js";import"./browser-NLzega1a.js";import"./getActionGroupSlot--rri3fdD.js";import"./dynamic-CLdLSboA.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./Heading-BJYyanRr.js";import"./Heading-CbA3ZoPp.js";import"./RSPContexts-CbSXEXlJ.js";import"./InlineCode-C5lsghpx.js";import"./Link-p8kO255Q.js";import"./usePress-BDNCZxcv.js";import"./Separator-F_M6BrxV.js";import"./Separator-CkdPEWsl.js";import"./CollectionBuilder-G7sQB9cg.js";import"./Text-Dy3rf6Sf.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./TextArea-spMt3YUK.js";import"./useFieldComponent-BQB8jFXR.js";import"./useControlledHostValueProps-CVxN_pM4.js";import"./FieldDescription-6JasakGe.js";import"./TextField-DalX-Kg2.js";import"./FieldError-BsUvM9FZ.js";import"./Form-Ca14id66.js";import"./Group-_bvz-aPU.js";import"./Input-kTwoopyR.js";import"./useTextField-D5bi8loT.js";import"./useFormReset-3qpl4kR-.js";import"./useFormValidation-DWTcfSBl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqVXXUXM.js";import"./ContextMenuSection-CRl2t-Sj.js";import"./Dialog-l1ZI7Q43.js";import"./Collection-Dvx0GJ5C.js";import"./SelectionIndicator-BqvLdNe9.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

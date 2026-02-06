import{j as r,r as f}from"./iframe-C-IsL8qN.js";import{M as o}from"./MarkdownEditor-D7H_v2Xy.js";import{L as R}from"./Label-DkhLxI5s.js";import{F as b}from"./FieldError-B5Qpz102.js";import{B as z}from"./Button-CjTDs8dt.js";import{S as x}from"./Section-CV3vWY3L.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C0YIyPE6.js";import"./CodeBlock-7kpJLhEZ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BWs1o0wN.js";import"./IconWarning-Dgpqm1wd.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./index-foeybvdq.js";import"./remote-HwzzztjA.js";import"./Tooltip-CZzJ7swh.js";import"./utils-CdIT7ixS.js";import"./OverlayArrow-Bm7lykW0.js";import"./useFocus-NxQ40LWx.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C05pQW9y.js";import"./context-D_ogfP81.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DAQnos8V.js";import"./useControlledState-D6WUL5XM.js";import"./useFocusable-9aQ0aONO.js";import"./react-children-utilities-BJtIfD6A.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./browser-Dh90zeJL.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./dynamic-Bim1MLHd.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./Heading-DSZIHu00.js";import"./Heading-BOaxUh_X.js";import"./RSPContexts-dApRMb3S.js";import"./InlineCode-BJGlOGRv.js";import"./Link-Bv7hTzVt.js";import"./usePress-Bg3iVugG.js";import"./Separator-f5y9Myre.js";import"./Separator-BkJE4Q3g.js";import"./CollectionBuilder-D--x571F.js";import"./Text-zEwe4Yc5.js";import"./EmulatedBoldText-CbJEOPDL.js";import"./Text-CQAUJHD3.js";import"./TextArea-BFkzKngu.js";import"./useFieldComponent-neJhoipE.js";import"./useControlledHostValueProps-kWLUtspJ.js";import"./FieldDescription-D7MW9J-R.js";import"./TextField-CscZ9S_C.js";import"./FieldError-CqpMndtu.js";import"./Form-4JRPVmTA.js";import"./Group-BKVJ7l2V.js";import"./Input-CALEgZ95.js";import"./useTextField-JzBNCLnO.js";import"./useFormReset-ovy8PPed.js";import"./useFormValidation-CE50eLV8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DKiC9lQT.js";import"./AlertIcon-Dd6PrMrE.js";import"./LoadingSpinner-DNWLy5dx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dm6X_wGa.js";import"./ContextMenuSection-Bkmt90BD.js";import"./Dialog-DhruM_-_.js";import"./Collection-BO8FiyTI.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./SelectionManager-tiaDTVEq.js";import"./useEvent-BSeSfGFl.js";import"./useCollator-CUcFaXNY.js";import"./FocusScope-DMp-Wrqn.js";import"./VisuallyHidden-B09yhrQ-.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as f}from"./iframe-Dnm846PF.js";import{M as o}from"./MarkdownEditor-Cm3_GFaA.js";import{L as R}from"./Label-CfPB20lW.js";import{F as b}from"./FieldError-Ze0pQjLj.js";import{B as z}from"./Button-D3IXyzzj.js";import{S as x}from"./Section-D9UON_ke.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CxbK-b_2.js";import"./CodeBlock-CB3BedNs.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B17Z970t.js";import"./IconWarning-CExbEpDP.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./remote-XcyFsW5Q.js";import"./Tooltip-BYxU1nML.js";import"./utils-VDIU0BnD.js";import"./OverlayArrow-B81MSBvx.js";import"./useFocus-D-7SE4fF.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./context-CoOH5oCy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CkFAdRGn.js";import"./useFocusable-DgTTkttD.js";import"./useFocusRing-CANRw9LC.js";import"./react-children-utilities-DtWvBFBF.js";import"./Action-emK0mmvz.js";import"./context-CfRQ154N.js";import"./useStatic-D4cjHvMF.js";import"./browser-DEiAhc6G.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./dynamic-CwAvPpRM.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./Heading-DIDy3S_I.js";import"./Heading-BVtLIbvB.js";import"./RSPContexts-DkLfIxB1.js";import"./InlineCode-D9YsyvET.js";import"./Link-CvmmRiOt.js";import"./usePress-CU4gAXU4.js";import"./Separator-DSeDqaWC.js";import"./Separator-D5s42kTO.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./Text-DtZxu6g8.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./TextArea-CimIM4CP.js";import"./TextFieldBase-upbtEiSd.js";import"./FieldDescription-ChdNC9CF.js";import"./useFieldComponent-CW3QYPg0.js";import"./TextField-D1pKbmJx.js";import"./FieldError-BJ4Wbc9z.js";import"./Form-DyzgNsfN.js";import"./Group-Btcmd8Qw.js";import"./Input-vek2Lmza.js";import"./useTextField-DiJp1aL-.js";import"./useFormReset-BiFYZY7a.js";import"./useFormValidation-CGpO-wMA.js";import"./useControlledHostValueProps-CsRpP7Fh.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DASF7rgv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-4mNKoj.js";import"./ContextMenuSection-C10PM8Bo.js";import"./Dialog-BfuTmdIH.js";import"./Collection-CfmXzWv2.js";import"./SelectionIndicator-B7sCGTL_.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./VisuallyHidden-C6zUvnKf.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

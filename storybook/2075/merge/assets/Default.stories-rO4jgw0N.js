import{j as r,r as f}from"./iframe-fd4MG1i8.js";import{M as o}from"./MarkdownEditor-D9Bd8YaS.js";import{L as R}from"./Label-DcZaDq0J.js";import{F as z}from"./useFieldComponent-CTpQ-XZg.js";import{B as b}from"./Button-VeSKQaWX.js";import{S as x}from"./Section-BCuosQzF.js";import"./index-nuYtCEEu.js";import"./Markdown-fkuMvBNf.js";import"./CodeBlock-Cx6Rr2Vl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DD0lgvAL.js";import"./IconWarning-9sqw3U7E.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./Tooltip-CFFFMg3y.js";import"./ClearPropsContextView-DL6K5xjX.js";import"./ClearPropsContext-BW7itMIx.js";import"./utils-Cwcb_ph1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useFocus-BWTUKGe5.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./context-Dbob8nST.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-oGGPnlEt.js";import"./useFocusable-9_bYGa78.js";import"./useFocusRing-LifWKPgp.js";import"./react-children-utilities-CIQCctRB.js";import"./Action-b6bvpWZ7.js";import"./context-BDEE0OGh.js";import"./useStatic-Dbv9nI-W.js";import"./browser-Dh_0Zrut.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./dynamic-BVBQ4rgw.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./Heading-FU4sLZaF.js";import"./Heading--2_wnKY5.js";import"./RSPContexts-GsdtxIJ1.js";import"./InlineCode-CQFg5MSQ.js";import"./Link-5nNE-CCP.js";import"./usePress-P37V2JO8.js";import"./Separator-6XYw4bcq.js";import"./Separator-BBkfumaa.js";import"./CollectionBuilder-BBm98ofW.js";import"./Text-Dcd0JdvI.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./TextArea-CM4b1Wby.js";import"./TextFieldBase-BXT0mz6G.js";import"./FieldDescription-BNSJSS3y.js";import"./TextField-TKhuaeCg.js";import"./Form-DF5wN6HS.js";import"./Group-DKzOXU5W.js";import"./Input-CYK177a4.js";import"./useTextField-oiKwCWrD.js";import"./useFormReset-NfLpwngh.js";import"./useFormValidation-C8R7XiMh.js";import"./ReactAriaControlledValueFix-DAVtvYQ3.js";import"./useManagedValue-DC34vg_T.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Dialog-CY6RGe7i.js";import"./Collection-Di6dMgr3.js";import"./SelectionIndicator-CThd_G6x.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./useCollator-DNAEXkDs.js";import"./FocusScope-29AKamG2.js";import"./VisuallyHidden-CO0qVHJy.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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

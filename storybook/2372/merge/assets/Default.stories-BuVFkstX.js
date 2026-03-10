import{j as r,r as f}from"./iframe-C1IdntWq.js";import{M as o}from"./MarkdownEditor-BsGVzsKN.js";import{L as R}from"./Label-Be-SvMDa.js";import{F as b}from"./FieldError-DsJ8c-ZE.js";import{B as z}from"./Button-mSWnhOmK.js";import{S as x}from"./Section-AIy1dCAg.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DqmVp7nK.js";import"./CodeBlock-Bi_Y5cYu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-1xEHTNHg.js";import"./IconWarning-BY-3yqWN.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./remote-DdxKfasm.js";import"./Tooltip-CumOZdzd.js";import"./utils-CNo0qaX0.js";import"./OverlayArrow-DbaAbVnX.js";import"./useFocus-HLQCbRtK.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./context-CuxmdylV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DQuA22ZQ.js";import"./useControlledState-FuYpKfPj.js";import"./useFocusable-Z0Y9nSjp.js";import"./react-children-utilities-BeKjhuis.js";import"./ActionBatch-VQdQXkn7.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./browser-WXx3m9ky.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./dynamic-CUpn0zgH.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./RSPContexts-DcVP09I4.js";import"./InlineCode-BejvbLs0.js";import"./Link-BJ-FjQ2E.js";import"./usePress-BIzz4kJt.js";import"./Separator-GI0n0yDS.js";import"./Separator-B7Oy5oGV.js";import"./CollectionBuilder-ARpC-11z.js";import"./Text-W7h8_LNr.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./TextArea--bJXuSL2.js";import"./useFieldComponent-o_u9PYdj.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./FieldDescription-CN54GY3S.js";import"./TextField-f8CG66Mv.js";import"./FieldError-DgBT4dcF.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useTextField-DDX9uSSl.js";import"./useFormReset-CaX1fgpZ.js";import"./useFormValidation-CloSy7V5.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./LoadingSpinner-C4dBxxC2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cBjDhV.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./Dialog-DaGSiRkj.js";import"./Collection-C0olx5yt.js";import"./SelectionIndicator-DffOr8wA.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

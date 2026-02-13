import{j as r,r as f}from"./iframe-C2cGCWBO.js";import{M as o}from"./MarkdownEditor-7aApRnBs.js";import{L as R}from"./Label-DU1BG4Ln.js";import{F as b}from"./FieldError-DDTF9njD.js";import{B as z}from"./Button-B41LUuF3.js";import{S as x}from"./Section-Di6ob6Kp.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Del-0_G1.js";import"./CodeBlock-DWri54KJ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DMVOVANa.js";import"./IconWarning-C4LD0r9W.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./remote-w8RrxnGT.js";import"./Tooltip-NCeAv1JB.js";import"./utils-CPzpSZL2.js";import"./OverlayArrow-DkMjnDr5.js";import"./useFocus-O4uYrVbU.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./context-2EfdQWx2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-wtbg8X8X.js";import"./useControlledState-MMDjipcl.js";import"./useFocusable-DwbuT13T.js";import"./react-children-utilities-D1MqO9RH.js";import"./ActionBatch-BZcBHaPT.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./browser-BGhQMCSV.js";import"./getActionGroupSlot-C9frEoU7.js";import"./dynamic-DhyEqTLI.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./Heading-BMwLGtkc.js";import"./Heading-Dg4rLfib.js";import"./RSPContexts-YUPb13EG.js";import"./InlineCode-D_fqGtfy.js";import"./Link-B5M7mNHz.js";import"./usePress-BrmD8Kf2.js";import"./Separator-BfjCusui.js";import"./Separator-Dz7Bhpa-.js";import"./CollectionBuilder-Bu0heHOT.js";import"./Text-D3xXIOyH.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./TextArea-DjzW6UEj.js";import"./useFieldComponent-D_KC3UxI.js";import"./useControlledHostValueProps-DVj9QfFb.js";import"./FieldDescription-DYlFjdjq.js";import"./TextField-CGK7TyGn.js";import"./FieldError-DA6JIYnG.js";import"./Form-C_NaUn2t.js";import"./Group-j7ZfmdDn.js";import"./Input-B5OLadjP.js";import"./useTextField-Du5NSzvr.js";import"./useFormReset-BdRaO3QH.js";import"./useFormValidation-DV5s_XV1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";import"./LoadingSpinner-DIaaAh-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BneP87GG.js";import"./ContextMenuSection-DuK0dlwa.js";import"./Dialog-BW6BpcVd.js";import"./Collection-BNpysMuG.js";import"./SelectionIndicator-vr7baVWi.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./VisuallyHidden-C7EnMW_k.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

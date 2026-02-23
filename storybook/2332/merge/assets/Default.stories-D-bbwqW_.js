import{j as r,r as f}from"./iframe-DunzINT4.js";import{M as o}from"./MarkdownEditor-DRj2EhjK.js";import{L as R}from"./Label-CAkB50pb.js";import{F as b}from"./FieldError-CxTapnNI.js";import{B as z}from"./Button-D4ye7DRq.js";import{S as x}from"./Section-M7f3R8gL.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DzonhOBw.js";import"./CodeBlock-C7GWgtIl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D8ddIxxD.js";import"./IconWarning-kFcnfyhN.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./remote-BHsosJBg.js";import"./Tooltip-CJnwHDH3.js";import"./utils-B66WPIWK.js";import"./OverlayArrow-DJczCQVT.js";import"./useFocus-CLsD99Jd.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./context-XFBu4tuG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BpLynkPU.js";import"./useControlledState-BzLfbFoS.js";import"./useFocusable-BqXitQDl.js";import"./react-children-utilities-DL9biY8W.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./Heading-ClXpNfz0.js";import"./Heading-B3Dcho9D.js";import"./RSPContexts-DYG4soUM.js";import"./InlineCode-B3-K1LAH.js";import"./Link-DHf6UEv1.js";import"./usePress-VDpDAbVy.js";import"./Separator-DZJeUDRj.js";import"./Separator-kz0LFyO1.js";import"./CollectionBuilder-px4k6lS7.js";import"./Text-DTHO_DRR.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./Text-CMXpTIb-.js";import"./TextArea-2URPY8n5.js";import"./useFieldComponent-mGz2JkQm.js";import"./useControlledHostValueProps-iizhxm66.js";import"./FieldDescription-Ci87Xxem.js";import"./TextField-E09LQuue.js";import"./FieldError-MxPTKBhw.js";import"./Form-Dp-IAcVR.js";import"./Group-Cb2TDoEs.js";import"./Input-CibPE8Js.js";import"./useTextField-CDucbR-t.js";import"./useFormReset-BCoUHfvE.js";import"./useFormValidation-CAKGNU-r.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";import"./LoadingSpinner-CzZyxAnt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6WdG1X1.js";import"./ContextMenuSection-BBATHhHi.js";import"./Dialog-Da1bNoxP.js";import"./Collection-DamVlN_y.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

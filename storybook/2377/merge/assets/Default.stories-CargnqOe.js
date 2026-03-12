import{j as r,r as f}from"./iframe-JHVlk64D.js";import{M as o}from"./MarkdownEditor-B3Lwgw9R.js";import{L as R}from"./Label-BVSjd_Ef.js";import{F as b}from"./FieldError-DkKHEf-8.js";import{B as z}from"./Button-BViHWx5D.js";import{S as x}from"./Section-Dlc8DpVc.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Cmn3GxQz.js";import"./CodeBlock-CkbLMbgB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BkKudB93.js";import"./IconWarning-D57fWT31.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./remote-CdnDmctD.js";import"./Tooltip-pS04iZoH.js";import"./utils-D9FbIhNL.js";import"./OverlayArrow-DI9sbb4v.js";import"./platform-Dz8CwCz0.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./context-ArJ603f0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocus-Cks5m45E.js";import"./useControlledState-BK0dEcU9.js";import"./useFocusable-vxzxlCI8.js";import"./react-children-utilities-oHo-vVa3.js";import"./ActionBatch-1qW2-LTl.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./browser-CH4iE_n_.js";import"./getActionGroupSlot-DipsrrNF.js";import"./dynamic-B8NPXIjt.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./Heading-B5Pon5qA.js";import"./Heading-DWwskDgI.js";import"./RSPContexts-BaSES6Qq.js";import"./InlineCode-DoOdPJJk.js";import"./Link-CjG243nZ.js";import"./usePress-Dt-0MkOU.js";import"./Separator-BJaneD8P.js";import"./Separator-8crMrP-e.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./Text-D35H-2yr.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./TextArea-D3AkAD4-.js";import"./useFieldComponent-Dm_EHwx7.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./FieldDescription-CHp3BkQc.js";import"./TextField-D8OVS6JU.js";import"./FieldError-CB6gvg8S.js";import"./Form-C3MOdK6R.js";import"./Group-BpUbtBKw.js";import"./Input-D75LvDxG.js";import"./useTextField-D6sOxTHB.js";import"./useFormReset-CuVjUJoL.js";import"./useFormValidation-BHVZgCg5.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV338ZHI.js";import"./ContextMenuSection-0h5wVCnN.js";import"./Dialog-DIqACfnD.js";import"./Collection-CRq1qG1J.js";import"./SelectionIndicator-D6El124b.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

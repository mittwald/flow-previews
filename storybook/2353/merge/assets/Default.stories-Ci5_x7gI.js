import{j as r,r as f}from"./iframe-DjjV-bH6.js";import{M as o}from"./MarkdownEditor-Bha8uAIg.js";import{L as R}from"./Label-BylmPkwQ.js";import{F as b}from"./FieldError-B3mp1Ofg.js";import{B as z}from"./Button-B7eEYP7w.js";import{S as x}from"./Section-B5rJlWeq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BjOQMzfq.js";import"./CodeBlock-eBQGNg_7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DnXqLVIK.js";import"./IconWarning-BVYK-jeQ.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./index-CaIAbEHH.js";import"./remote-BKpn4CGf.js";import"./Tooltip-C88oSINM.js";import"./utils-Wzr-xt4Q.js";import"./OverlayArrow-CBp_JaqL.js";import"./useFocus-C98Vumo7.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./context-CVfxZLio.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-2GUlH-Oo.js";import"./useControlledState-DuEj2qRm.js";import"./useFocusable-BB_F7Uj3.js";import"./react-children-utilities-DHbaZ3r-.js";import"./ActionBatch-YJb9tMXC.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./browser-DMwaewkm.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./dynamic-BXsvgyJR.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./RSPContexts-C5x5s972.js";import"./InlineCode-D3KrqTC1.js";import"./Link-JtruOppm.js";import"./usePress-CoT418ij.js";import"./Separator-CytTQhyZ.js";import"./Separator-AXWdobwd.js";import"./CollectionBuilder-BTMAD3DD.js";import"./Text-B3EwbE0r.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./TextArea-foMp7T4N.js";import"./useFieldComponent-DlP24hgD.js";import"./useControlledHostValueProps-DfY517eL.js";import"./FieldDescription-CUJ0cPxq.js";import"./TextField-D__YUA_k.js";import"./FieldError-cqIqfLoK.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useTextField-CEXXySrl.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";import"./LoadingSpinner-DTU1PYFj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnJuiQ-.js";import"./ContextMenuSection-DWXh8VII.js";import"./Dialog-Ok_9Edtl.js";import"./Collection-B_hpa9r2.js";import"./SelectionIndicator-DP9sACdz.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

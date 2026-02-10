import{j as r,r as f}from"./iframe-BAXQY30e.js";import{M as o}from"./MarkdownEditor-BU41O_zY.js";import{L as R}from"./Label-DhF_BRrp.js";import{F as b}from"./FieldError-D1QPRlMW.js";import{B as z}from"./Button-CvDqM7Lu.js";import{S as x}from"./Section-BVe0LGVq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Dnx-ZqB5.js";import"./CodeBlock-CDmEPAgr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DEnuM8mh.js";import"./IconWarning-NY-vs6K4.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./remote-X8ibHJNw.js";import"./Tooltip-1P8nbn9B.js";import"./utils-CPq9a2_3.js";import"./OverlayArrow-DrnF7GNT.js";import"./useFocus-Bjv2U0Px.js";import"./ProgressBar-DOlyg40u.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./context-Ch7cvv9N.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-eOVByyHK.js";import"./useControlledState-BIans2ur.js";import"./useFocusable-B7f7k6Nb.js";import"./react-children-utilities-CYakpWqM.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./useStatic-rplOn2Qs.js";import"./browser-7M05TLI2.js";import"./getActionGroupSlot-CKOsA57z.js";import"./dynamic-0Mu-qEnq.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./Heading-B7OcLMTv.js";import"./Heading-o5Ph-k-z.js";import"./RSPContexts-D7b7jdF8.js";import"./InlineCode-eB_5JKai.js";import"./Link-CMQ5K8Q-.js";import"./usePress-0WoXV1eK.js";import"./Separator-BlRVJDhU.js";import"./Separator-5yzWA0zP.js";import"./CollectionBuilder-B4l66tZC.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./TextArea-Br6_iVjb.js";import"./useFieldComponent-RBMXOPsB.js";import"./useControlledHostValueProps-CmFn52YM.js";import"./FieldDescription-LY8oqjwS.js";import"./TextField-CuJT36W8.js";import"./FieldError-RUpMVejq.js";import"./Form-CMcE9GN0.js";import"./Group-DP8yEYC_.js";import"./Input-Dt_0h10s.js";import"./useTextField-1DppJzBw.js";import"./useFormReset-CqoQKslx.js";import"./useFormValidation-DAvMLm6e.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Ca5Nx2F5.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Dialog-BnZvghEV.js";import"./Collection-C9Jq2g2r.js";import"./SelectionIndicator-m0lWLhXd.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

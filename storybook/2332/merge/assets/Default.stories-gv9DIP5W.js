import{j as r,r as f}from"./iframe-CXQlTNqj.js";import{M as o}from"./MarkdownEditor-C2O0geMZ.js";import{L as R}from"./Label-Dp8rzwUw.js";import{F as b}from"./FieldError-BB5Q0mgv.js";import{B as z}from"./Button-BlafpMbq.js";import{S as x}from"./Section-D3kMglmp.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CWlvsX4f.js";import"./CodeBlock-CgqnCg3d.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D0roPz7P.js";import"./IconWarning-qWu7I_Pu.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./remote-aElBUAr6.js";import"./Tooltip-7DJBrIsj.js";import"./utils-DV_byzth.js";import"./OverlayArrow-sIEanX_d.js";import"./useFocus-DfPsdBQQ.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./context-CCBj18N5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D1AlgOvW.js";import"./useControlledState-CC0ueLns.js";import"./useFocusable-D7YkDf-E.js";import"./react-children-utilities-Bo6p2vQK.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./browser-C0g7jXxm.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./dynamic-UE7lg7x0.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./RSPContexts-CaXq0cAk.js";import"./InlineCode-Cjzq7-Xs.js";import"./Link-CJD93-tw.js";import"./usePress-C3E8Ss2p.js";import"./Separator-Coq2WAcu.js";import"./Separator-Bs-03xzt.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./Text-B3somVi7.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Text-QCBVP_aW.js";import"./TextArea-D82W0_TC.js";import"./useFieldComponent-Cn71_kOc.js";import"./useControlledHostValueProps-yWnOktoO.js";import"./FieldDescription-Ct_r0eGl.js";import"./TextField-BoxW8OPP.js";import"./FieldError-CtbrQfSs.js";import"./Form-CN1ucAgL.js";import"./Group-COTR0fAc.js";import"./Input-CLvZry-y.js";import"./useTextField-C4aZ5CwP.js";import"./useFormReset-BDdgSN6q.js";import"./useFormValidation-CRz2e402.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BcwVzCcr.js";import"./ContextMenuSection-nZf_hQYT.js";import"./Dialog-D3U2a9zn.js";import"./Collection-TmQT-68Q.js";import"./SelectionIndicator-DQZUhYCh.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
